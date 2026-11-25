/* LUX — backup e sincronização com o Google Drive (pasta oculta do app, escopo drive.appdata).
   Cada perfil pode ser ligado a uma conta Google. O progresso vai para o arquivo lux-progress.json
   (mesmo formato do "Exportar"), e a cada sincronização o app baixa, mescla e envia de volta.
   O acesso do Google dura 1 hora (padrão para apps sem servidor); depois, um toque renova.
   As ligações perfil ↔ conta ficam só neste aparelho (S.state.drive), fora dos backups. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, P = LUX.profiles, S = LUX.store;
  var D = LUX.drive = {
    CLIENT_ID: '274305165630-ea99dnrbmhp2qlhe8ttj19eh1dovl4f0.apps.googleusercontent.com',
    SCOPE: 'https://www.googleapis.com/auth/drive.appdata',
    FILE: 'lux-progress.json',
    supported: /^https?:$/.test(location.protocol) && 'fetch' in window,
    status: {},          // por perfil: 'syncing' | 'ok' | 'needs-auth' | 'offline' | 'error'
    AUTO_EVERY: 10 * 60 * 1000
  };
  var API = 'https://www.googleapis.com/drive/v3/';
  var UPLOAD = 'https://www.googleapis.com/upload/drive/v3/files';
  var TOKEN_KEY = 'lux-fr:drive-token:';
  var HIDE_KEY = 'lux-fr:drive-notice-hidden';
  var tokens = {};       // por perfil: {t, exp}
  var running = {};      // sincronização em andamento por perfil
  var suppress = 0;      // ignora os saves feitos pela própria sincronização
  var gisPromise = null;

  function links() { if (!S.state.drive) S.state.drive = {}; return S.state.drive; }
  D.link = function (p) { return p ? links()[p.id] || null : null; };
  function quietSave() { suppress++; try { S.save(true); } finally { suppress--; } }

  /* ---------- token (Google Identity Services) ---------- */
  D.loadGis = function () {
    if (g.google && g.google.accounts && g.google.accounts.oauth2) return Promise.resolve();
    if (!gisPromise) gisPromise = new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = 'https://accounts.google.com/gsi/client'; s.async = true;
      s.onload = function () { resolve(); };
      s.onerror = function () { gisPromise = null; s.remove(); reject(new Error('offline')); };
      document.head.appendChild(s);
    });
    return gisPromise;
  };
  function getToken(p) {
    var t = tokens[p.id];
    if (!t) { try { t = JSON.parse(sessionStorage.getItem(TOKEN_KEY + p.id) || 'null'); } catch (e) { t = null; } }
    if (t && t.exp > Date.now()) { tokens[p.id] = t; return t.t; }
    return null;
  }
  function setToken(p, resp) {
    var t = { t: resp.access_token, exp: Date.now() + ((+resp.expires_in || 3600) - 90) * 1000 };
    tokens[p.id] = t;
    try { sessionStorage.setItem(TOKEN_KEY + p.id, JSON.stringify(t)); } catch (e) { }
  }
  function dropToken(p) { delete tokens[p.id]; try { sessionStorage.removeItem(TOKEN_KEY + p.id); } catch (e) { } }

  /* abre a janelinha do Google. Precisa ser chamada a partir de um toque/clique. */
  D.authorize = function (p, opts) {
    opts = opts || {};
    var link = p && D.link(p);
    return D.loadGis().then(function () {
      return new Promise(function (resolve, reject) {
        var client = g.google.accounts.oauth2.initTokenClient({
          client_id: D.CLIENT_ID, scope: D.SCOPE,
          prompt: opts.prompt != null ? opts.prompt : (link ? '' : 'select_account'),
          login_hint: link && link.email ? link.email : undefined,
          callback: function (resp) {
            if (resp.error) return reject(new Error(resp.error_description || resp.error));
            if (!g.google.accounts.oauth2.hasGrantedAllScopes(resp, D.SCOPE)) return reject(new Error('scope'));
            resolve(resp);
          },
          error_callback: function (err) { reject(new Error(err && err.type === 'popup_closed' ? 'closed' : (err && (err.message || err.type)) || 'popup')); }
        });
        client.requestAccessToken();
      });
    });
  };

  /* ---------- chamadas ao Drive ---------- */
  function api(token, method, url, body, type) {
    var headers = { Authorization: 'Bearer ' + token };
    if (type) headers['Content-Type'] = type;
    return fetch(url, { method: method, headers: headers, body: body }).then(function (r) {
      if (r.status === 401 || r.status === 403 && /insufficient|scope/i.test(r.statusText)) { var e = new Error('auth'); e.auth = true; throw e; }
      if (!r.ok) return r.text().then(function (t) { throw new Error('Drive ' + r.status + ': ' + t.slice(0, 200)); });
      return r.status === 204 ? null : r.json();
    }, function () { var e = new Error('offline'); e.offline = true; throw e; });
  }
  function whoAmI(token) { return api(token, 'GET', API + 'about?fields=user(emailAddress,displayName)').then(function (r) { return r.user || {}; }); }
  function findFile(token) {
    var q = encodeURIComponent("name='" + D.FILE + "' and trashed=false");
    return api(token, 'GET', API + 'files?spaces=appDataFolder&q=' + q + '&orderBy=modifiedTime desc&fields=files(id,modifiedTime)')
      .then(function (r) { return (r.files && r.files[0]) || null; });
  }
  function download(token, id) { return api(token, 'GET', API + 'files/' + id + '?alt=media'); }
  function upload(token, id, data) {
    var json = JSON.stringify(data);
    if (id) return api(token, 'PATCH', UPLOAD + '/' + id + '?uploadType=media&fields=id,modifiedTime', json, 'application/json');
    var b = 'lux' + Math.random().toString(36).slice(2);
    var body = '--' + b + '\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify({ name: D.FILE, parents: ['appDataFolder'], mimeType: 'application/json' }) +
      '\r\n--' + b + '\r\nContent-Type: application/json\r\n\r\n' + json + '\r\n--' + b + '--';
    return api(token, 'POST', UPLOAD + '?uploadType=multipart&fields=id,modifiedTime', body, 'multipart/related; boundary=' + b);
  }
  function remoteProfile(data) {
    return data && data.app === 'lux-frances' && Array.isArray(data.profiles) && data.profiles[0] && (data.schema || 1) <= S.SCHEMA ? data.profiles[0] : null;
  }

  /* ---------- sincronizar: baixa, mescla, envia ---------- */
  function setStatus(p, st, err) {
    D.status[p.id] = st;
    var link = D.link(p);
    if (link) link.lastError = err || null;
    renderNotice();
    var card = document.getElementById('drive-card');
    if (card && P.current() && P.current().id === p.id) card.replaceWith(D.card(p));
  }

  D.sync = function (p, opts) {
    opts = opts || {};
    p = p || P.current();
    var link = D.link(p);
    if (!D.supported || !p || !link) return Promise.resolve('off');
    if (running[p.id]) return running[p.id];
    var token = getToken(p);
    if (!token) { setStatus(p, 'needs-auth'); return Promise.resolve('needs-auth'); }
    if (navigator.onLine === false) { setStatus(p, 'offline'); return Promise.resolve('offline'); }
    setStatus(p, 'syncing');
    var job = (link.fileId ? Promise.resolve({ id: link.fileId }) : findFile(token))
      .then(function (f) {
        if (!f) return null;
        return download(token, f.id).then(function (data) { return { id: f.id, data: data }; }, function (e) {
          if (/Drive 404/.test(e.message)) return null; // arquivo apagado: recria
          throw e;
        });
      })
      .then(function (remote) {
        var rp = remote && remoteProfile(remote.data), changed = false;
        if (rp) {
          var before = JSON.stringify([p.progress, p.levelTests, p.srs, p.notebook, p.verbs, p.drills, p.streak, p.studySeconds]);
          suppress++; try { P.mergeProfiles(p, rp); } finally { suppress--; }
          changed = before !== JSON.stringify([p.progress, p.levelTests, p.srs, p.notebook, p.verbs, p.drills, p.streak, p.studySeconds]);
        }
        var now = new Date().toISOString();
        p.lastBackupAt = now; p.backupSnoozeUntil = null;
        var data = P.exportData([p.id]);
        return upload(token, remote && remote.id, data).then(function (f) {
          if (!f || !f.id) throw new Error('Drive: resposta sem id do arquivo');
          link.fileId = f.id; link.lastSyncAt = now; link.dirty = false;
          quietSave();
          setStatus(p, 'ok');
          if (changed && opts.refresh !== false && LUX.router && P.current() && P.current().id === p.id && !/^#\/(pro\/)?(licao|teste)\//.test(location.hash)) {
            if (LUX.sidebar) LUX.sidebar.render();
            LUX.router.render();
          }
          return 'ok';
        });
      })
      .catch(function (e) {
        if (e.auth) { dropToken(p); setStatus(p, 'needs-auth'); return 'needs-auth'; }
        if (e.offline) { setStatus(p, 'offline'); return 'offline'; }
        console.warn('Drive:', e);
        setStatus(p, 'error', String(e.message || e));
        return 'error';
      })
      .then(function (r) { delete running[p.id]; return r; });
    running[p.id] = job;
    return job;
  };

  /* toque do usuário: renova o acesso (se preciso) e sincroniza */
  D.syncNow = function (p) {
    p = p || P.current();
    if (getToken(p)) return D.sync(p);
    return D.authorize(p).then(function (resp) { setToken(p, resp); return D.sync(p); }, function (e) { return authError(p, e); });
  };
  function authError(p, e) {
    var m = e && e.message;
    if (m === 'offline') { LUX.ui.toast('Sem internet: não foi possível falar com o Google.', 'bad'); return 'offline'; }
    if (m === 'closed') return 'cancelled';
    if (m === 'scope') LUX.ui.toast('É preciso permitir o acesso aos dados do app no Drive (marque a caixa na janela do Google).', 'bad');
    else LUX.ui.toast('O Google não autorizou: ' + (m || 'erro desconhecido'), 'bad');
    return 'denied';
  }

  /* ligar o perfil a uma conta */
  D.connect = function (p) {
    return D.authorize(p, { prompt: 'select_account' }).then(function (resp) {
      return whoAmI(resp.access_token).then(function (user) {
        // outro perfil deste aparelho já usa esta conta?
        var other = P.list().filter(function (x) { return x.id !== p.id && D.link(x) && D.link(x).email && D.link(x).email === user.emailAddress; })[0];
        if (other) { LUX.ui.toast('Esta conta Google já está ligada ao perfil ' + other.name + '. Use uma conta para cada pessoa.', 'bad'); return 'duplicate'; }
        setToken(p, resp);
        links()[p.id] = { email: user.emailAddress || '', name: user.displayName || '', linkedAt: new Date().toISOString(), lastSyncAt: null, fileId: null, dirty: true };
        quietSave();
        return D.sync(p).then(function (r) {
          if (r === 'ok') LUX.ui.toast('☁️ ' + p.name + ' conectado ao Google Drive.', 'ok');
          return r;
        });
      });
    }, function (e) { return authError(p, e); });
  };

  D.disconnect = function (p) {
    delete links()[p.id];
    dropToken(p);
    delete D.status[p.id];
    quietSave();
    renderNotice();
  };

  /* tela de boas-vindas: cria o perfil a partir do backup no Drive */
  D.restoreNew = function () {
    var tmp = { id: '__restore__' };
    return D.authorize(null, { prompt: 'select_account' }).then(function (resp) {
      var token = resp.access_token;
      return Promise.all([whoAmI(token), findFile(token)]).then(function (r) {
        var user = r[0], f = r[1];
        if (!f) { LUX.ui.toast('Não há backup do curso nesta conta Google (' + (user.emailAddress || '') + '). Crie seu perfil e conecte-o ao Drive em Perfil e configurações.', 'bad'); return null; }
        return download(token, f.id).then(function (data) {
          var rp = remoteProfile(data);
          if (!rp) { LUX.ui.toast('O backup no Drive não pôde ser lido.', 'bad'); return null; }
          P.importBackup(data, 'merge');
          var p = P.get(rp.id) || P.list()[P.list().length - 1];
          P.switchTo(p.id);
          setToken(p, resp);
          links()[p.id] = { email: user.emailAddress || '', name: user.displayName || '', linkedAt: new Date().toISOString(), lastSyncAt: new Date().toISOString(), fileId: f.id, dirty: false };
          quietSave();
          D.status[p.id] = 'ok';
          return p;
        });
      });
    }, function (e) { authError(tmp, e); return null; });
  };

  /* ---------- quando sincronizar ---------- */
  var origSave = S.save;
  S.save = function () {
    if (!suppress && S.state) {
      var p = P.current(), link = p && D.link(p);
      if (link && !link.dirty) link.dirty = true;
    }
    return origSave.apply(S, arguments);
  };
  function soon(p) {
    p = p || P.current();
    var link = D.link(p);
    if (!link) return;
    link.dirty = true;
    setTimeout(function () { if (getToken(p)) D.sync(p); else { D.status[p.id] = 'needs-auth'; renderNotice(true); } }, 1500);
  }
  ['saveLessonResult', 'saveLevelTest'].forEach(function (fn) {
    var orig = P[fn];
    P[fn] = function (p) { var r = orig.apply(P, arguments); soon(p); return r; };
  });
  var origSwitch = P.switchTo;
  P.switchTo = function () { var r = origSwitch.apply(P, arguments); setTimeout(D.onOpen, 50); return r; };

  setInterval(function () {
    var p = P.current(), link = D.link(p);
    if (!link || !link.dirty || !getToken(p)) return;
    if (!link.lastSyncAt || Date.now() - new Date(link.lastSyncAt).getTime() > D.AUTO_EVERY) D.sync(p);
  }, 60 * 1000);
  window.addEventListener('online', function () { var p = P.current(), link = D.link(p); if (link && link.dirty && getToken(p)) D.sync(p); });
  document.addEventListener('visibilitychange', function () {
    var p = P.current(), link = D.link(p);
    if (document.visibilityState === 'hidden' && link && link.dirty && getToken(p)) D.sync(p, { refresh: false });
  });

  /* ao abrir o app ou trocar de perfil */
  D.onOpen = function () {
    if (!D.supported) return;
    var p = P.current(), link = D.link(p);
    if (!link) { renderNotice(); return; }
    D.loadGis().catch(function () { });
    if (getToken(p)) D.sync(p); else { D.status[p.id] = navigator.onLine === false ? 'offline' : 'needs-auth'; renderNotice(true); }
  };

  /* ---------- aviso "toque para sincronizar" ---------- */
  function renderNotice(force) {
    var box = document.getElementById('app-notices'); if (!box) return;
    var old = document.getElementById('drive-notice'); if (old) old.remove();
    var p = P.current(), link = D.link(p);
    if (!p || !link || D.status[p.id] !== 'needs-auth') return;
    var hidden = false; try { hidden = sessionStorage.getItem(HIDE_KEY) === p.id; } catch (e) { }
    if (hidden && !force) return;
    if (hidden && force && !link.dirty) return;
    var btn = h('button', { class: 'btn sm primary', onclick: function () { D.syncNow(p).then(function (r) { if (r === 'ok') LUX.ui.toast('☁️ Sincronizado com o Google Drive.', 'ok'); }); } }, 'Sincronizar');
    box.appendChild(h('div', { class: 'banner info app-notice', id: 'drive-notice' }, [
      h('div', { class: 'grow' }, [h('b', null, '☁️ Google Drive: '), h('span', null, 'toque para sincronizar o progresso de ' + p.name + '.')]),
      h('div', { class: 'row gap wrap' }, [btn, h('button', { class: 'btn sm ghost', onclick: function () {
        try { sessionStorage.setItem(HIDE_KEY, p.id); } catch (e) { }
        var el = document.getElementById('drive-notice'); if (el) el.remove();
      } }, 'Agora não')])
    ]));
  }

  /* ---------- cartão em Perfil e configurações ---------- */
  function ago(iso) {
    if (!iso) return 'nunca';
    var s = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
    if (s < 60) return 'agora mesmo';
    if (s < 3600) return 'há ' + Math.round(s / 60) + ' min';
    if (s < 86400) return 'há ' + Math.round(s / 3600) + ' h';
    return 'em ' + U.fmtDate(iso);
  }
  D.card = function (p) {
    var c = h('section', { class: 'card', id: 'drive-card' }, [h('h2', null, '☁️ Backup no Google Drive')]);
    if (!D.supported) {
      c.appendChild(h('p', null, 'O backup no Google Drive só funciona pelo endereço online do curso:'));
      c.appendChild(h('p', null, h('a', { href: LUX.pwa ? LUX.pwa.PUBLIC_URL : '#', target: '_blank', rel: 'noopener' }, LUX.pwa ? LUX.pwa.PUBLIC_URL : '')));
      return c;
    }
    var link = D.link(p);
    if (!link) {
      c.appendChild(h('p', null, 'Ligue o perfil de ' + p.name + ' à conta Google dele(a). O progresso fica guardado numa pasta oculta do app no Drive e é mesclado entre o computador e o celular.'));
      c.appendChild(h('ul', { class: 'muted sm' }, [
        h('li', null, 'O curso só enxerga os arquivos que ele mesmo criou: não vê fotos, documentos nem nada mais do seu Drive.'),
        h('li', null, 'Cada pessoa usa a própria conta Google (contas pessoais; contas de empresa podem bloquear).'),
        h('li', null, 'O acesso dura 1 hora por vez (regra do Google). Depois, um toque em "Sincronizar" renova, sem senha.')
      ]));
      c.appendChild(h('button', { class: 'btn primary', onclick: function () { D.connect(p).then(function () { var el = document.getElementById('drive-card'); if (el) el.replaceWith(D.card(p)); }); } }, '🔗 Conectar ao Google Drive'));
      return c;
    }
    var st = D.status[p.id] || (getToken(p) ? 'ok' : 'needs-auth');
    var label = {
      syncing: '⏳ Sincronizando…',
      ok: '✓ Sincronizado ' + ago(link.lastSyncAt),
      'needs-auth': '🔑 Acesso do Google expirado — toque em "Sincronizar agora" (último envio: ' + ago(link.lastSyncAt) + ')',
      offline: '📴 Sem internet — as mudanças serão enviadas quando a conexão voltar',
      error: '⚠️ Erro na última sincronização: ' + (link.lastError || '')
    }[st] || '';
    c.appendChild(h('ul', { class: 'status-list' }, [
      h('li', null, [h('b', null, 'Conta: '), link.email || '(conta Google)']),
      h('li', null, [h('b', null, 'Situação: '), label]),
      link.dirty && st !== 'syncing' ? h('li', { class: 'muted sm' }, 'Há progresso ainda não enviado.') : null
    ]));
    c.appendChild(h('div', { class: 'row gap wrap' }, [
      h('button', { class: 'btn primary', disabled: st === 'syncing' ? 'disabled' : null, onclick: function () {
        D.syncNow(p).then(function (r) { if (r === 'ok') LUX.ui.toast('☁️ Sincronizado com o Google Drive.', 'ok'); });
      } }, '🔄 Sincronizar agora'),
      h('button', { class: 'btn ghost', onclick: function () {
        LUX.ui.modal({
          title: 'Desconectar do Google Drive?',
          body: h('p', null, 'Este aparelho deixa de sincronizar o perfil de ' + p.name + '. O backup que já está no Drive continua lá e pode ser usado de novo depois.'),
          actions: [{ label: 'Cancelar' }, { label: 'Desconectar', primary: true, onClick: function () { D.disconnect(p); var el = document.getElementById('drive-card'); if (el) el.replaceWith(D.card(p)); } }]
        });
      } }, 'Desconectar')
    ]));
    c.appendChild(h('p', { class: 'muted sm' }, 'Sincroniza ao abrir o curso, ao concluir uma lição ou o teste de nível, e a cada 10 minutos de estudo. Para remover o acesso de vez: myaccount.google.com/permissions.'));
    return c;
  };
})(window);
