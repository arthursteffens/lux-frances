/* LUX — app instalável (PWA): registra o service worker, aplica atualizações automaticamente
   e permite voltar a uma versão anterior guardada no aparelho. Só funciona por http(s), não em file://. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui;
  var W = LUX.pwa = {
    PUBLIC_URL: 'https://arthursteffens.github.io/lux-frances/',
    supported: 'serviceWorker' in navigator && /^https?:$/.test(location.protocol),
    running: null,      // version.json da versão em uso nesta página
    reg: null,
    pendingReload: false
  };
  var SEEN_KEY = 'lux-fr:seen-build';   // última versão que a pessoa viu neste aparelho
  var NEWS_KEY = 'lux-fr:news-from';    // versão vista antes da última atualização (início das "novidades")
  var CHECK_EVERY = 30 * 60 * 1000;
  var lastCheck = 0;

  function notices() { return document.getElementById('app-notices'); }
  function inStudy() {
    if (LUX.lessons && LUX.lessons.live) return true; // lição guardada para voltar: não recarregar
    return /^#\/(pro\/)?(licao|teste)\//.test(location.hash) && !/[?&]cert=1/.test(location.hash);
  }
  function fmtBuild(b) {
    if (!b) return '';
    var d = b.date ? new Date(b.date) : null;
    return (b.version ? 'v' + b.version + ' · ' : '') + (d ? U.fmtDate(b.date) + ' ' + String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') : b.build);
  }

  /* conversa com o service worker (resposta por MessageChannel) */
  W.ask = function (msg) {
    if (!W.supported) return Promise.reject(new Error('sem service worker'));
    return navigator.serviceWorker.ready.then(function (reg) {
      return new Promise(function (resolve, reject) {
        var ch = new MessageChannel();
        var t = setTimeout(function () { reject(new Error('sem resposta do service worker')); }, 8000);
        ch.port1.onmessage = function (e) { clearTimeout(t); resolve(e.data); };
        (navigator.serviceWorker.controller || reg.active).postMessage(msg, [ch.port2]);
      });
    });
  };
  W.info = function () { return W.ask({ type: 'info' }); };
  W.pin = function (build) {
    return W.ask({ type: 'pin', build: build }).then(function () {
      location.reload();
    });
  };

  W.checkNow = function () {
    if (!W.reg) return Promise.resolve('unsupported');
    lastCheck = Date.now();
    return W.reg.update().then(function () {
      return W.reg.installing || W.reg.waiting ? 'downloading' : 'latest';
    }).catch(function () { return 'offline'; });
  };

  function applyUpdate() {
    if (inStudy()) {
      if (!W.pendingReload) LUX.ui.toast('Nova versão do curso baixada. Ela será aplicada quando você sair desta página.');
      W.pendingReload = true;
      return;
    }
    if (LUX.store) LUX.store.save(true);
    location.reload();
  }

  /* ---------- novidades ---------- */
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
  function changelog() { return LUX.changelog || []; }
  function indexOf(build) { var cl = changelog(); for (var i = 0; i < cl.length; i++) if (cl[i].build === build) return i; return -1; }
  /* versões novas desde a última que a pessoa viu: { from, entries } (entries: mais recente primeiro) */
  W.news = function () {
    var from = lsGet(NEWS_KEY), i = from ? indexOf(from) : -1;
    return { from: from, entries: i > 0 ? changelog().slice(0, i) : [] };
  };
  /* ao abrir: compara a versão desta página com a última vista. Primeira visita: só registra. */
  function checkNews() {
    var cl = changelog(); if (!cl.length) return;
    var cur = cl[0].build, seen = lsGet(SEEN_KEY);
    if (!seen) { lsSet(SEEN_KEY, cur); return; }
    if (seen === cur) return;
    if (indexOf(seen) < 0) return; // a versão vista é mais nova que esta (ex.: versão anterior fixada)
    lsSet(NEWS_KEY, seen);
    lsSet(SEEN_KEY, cur);
    showUpdatedNotice();
  }
  /* aviso discreto; o que mudou fica na página Novidades */
  function showUpdatedNotice() {
    var box = notices(); if (!box) return;
    var n = W.news().entries.length;
    var el = h('div', { class: 'app-notice slim', role: 'status', id: 'update-notice' }, [
      h('span', { class: 'grow' }, '✨ Curso atualizado' + (n > 1 ? ' (' + n + ' versões)' : '')),
      h('a', { class: 'btn sm', href: '#/novidades', onclick: function () { el.remove(); } }, 'Novidades'),
      h('button', { class: 'notice-x', 'aria-label': 'Fechar', title: 'Fechar', onclick: function () { el.remove(); } }, '×')
    ]);
    box.appendChild(el);
  }
  function showPinnedNotice(info) {
    if (!info.pinned) return;
    var box = notices(); if (!box) return;
    var newer = info.latest !== info.pinned;
    box.appendChild(h('div', { class: 'banner warn app-notice' }, [
      h('div', { class: 'grow' }, [h('b', null, '📌 Versão fixada. '), h('span', null, 'As atualizações automáticas estão pausadas' + (newer ? ' (há uma versão mais nova guardada).' : '.'))]),
      h('div', { class: 'row gap wrap' }, [
        h('a', { class: 'btn sm', href: '#/perfil?sec=versao' }, 'Gerenciar'),
        h('button', { class: 'btn sm primary', onclick: function () { W.pin(null); } }, 'Voltar às atualizações')
      ])
    ]));
  }

  W.init = function () {
    checkNews();
    if (!W.supported) return;
    // versão em uso (servida pelo próprio cache ativo)
    fetch('version.json', { cache: 'no-store' }).then(function (r) { return r.ok ? r.json() : null; }).then(function (v) { W.running = v; }).catch(function () { })
      .then(function () {
        var hadController = !!navigator.serviceWorker.controller;
        navigator.serviceWorker.addEventListener('controllerchange', function () {
          if (!hadController) { hadController = true; return; } // primeira instalação: nada a recarregar
          W.info().then(function (info) { if (!info.pinned) applyUpdate(); }).catch(applyUpdate);
        });
        return navigator.serviceWorker.register('sw.js', { updateViaCache: 'none' });
      })
      .then(function (reg) {
        W.reg = reg; lastCheck = Date.now();
        return W.info().then(function (info) { showPinnedNotice(info); });
      })
      .catch(function (e) { console.warn('PWA indisponível:', e); });

    window.addEventListener('hashchange', function () { if (W.pendingReload && !inStudy()) { W.pendingReload = false; applyUpdate(); } });
    document.addEventListener('visibilitychange', function () {
      if (document.visibilityState === 'visible' && W.reg && Date.now() - lastCheck > CHECK_EVERY) W.checkNow();
    });
  };

  /* ---------- cartão "Versão do app" (Perfil e configurações) ---------- */
  W.card = function () {
    var c = h('section', { class: 'card', id: 'versao' }, [h('h2', null, '🔄 Versão do app')]);
    if (!W.supported) {
      c.appendChild(h('p', null, 'Você abriu o curso como arquivo, direto da pasta. Neste modo não há atualização automática nem uso offline.'));
      c.appendChild(h('p', null, ['Para ter as duas coisas, use o endereço ', h('a', { href: W.PUBLIC_URL, target: '_blank', rel: 'noopener' }, W.PUBLIC_URL), ' — e leve seu progresso com Exportar/Importar (abaixo).']));
      return c;
    }
    var body = h('div', { class: 'stack' }, h('p', { class: 'muted' }, 'Carregando…'));
    c.appendChild(body);
    W.info().then(function (info) {
      body.innerHTML = '';
      body.appendChild(h('p', null, info.pinned
        ? '📌 Versão fixada: as atualizações automáticas estão pausadas até você liberar.'
        : '✅ Atualização automática ligada: ao abrir o curso com internet, a versão mais nova é baixada e aplicada sozinha.'));
      var list = h('ul', { class: 'status-list version-list' });
      info.builds.slice().reverse().forEach(function (b) {
        var using = b.build === info.serving, isLatest = b.build === info.latest;
        list.appendChild(h('li', { class: using ? 'current' : '' }, [
          h('div', { class: 'grow' }, [
            h('b', null, fmtBuild(b)), isLatest ? h('span', { class: 'chip sm' }, 'mais recente') : null, using ? h('span', { class: 'chip sm ok' }, 'em uso') : null,
            h('div', { class: 'muted sm' }, b.notes || '')
          ]),
          using ? null : h('button', { class: 'btn sm', onclick: function () { isLatest ? W.pin(null) : W.pin(b.build); } }, isLatest ? 'Usar a mais recente' : 'Usar esta versão')
        ]));
      });
      body.appendChild(h('h3', null, 'Versões guardadas neste aparelho'));
      body.appendChild(list);
      var actions = h('div', { class: 'row gap wrap' });
      if (info.pinned) actions.appendChild(h('button', { class: 'btn primary', onclick: function () { W.pin(null); } }, '▶ Voltar às atualizações automáticas'));
      actions.appendChild(h('button', { class: 'btn', onclick: function () {
        W.checkNow().then(function (st) {
          LUX.ui.toast(st === 'downloading' ? 'Baixando a nova versão…' : st === 'offline' ? 'Sem internet: não foi possível verificar.' : 'Você já tem a versão mais recente.', st === 'offline' ? 'bad' : 'ok');
        });
      } }, '🔍 Procurar atualização agora'));
      body.appendChild(actions);
      body.appendChild(h('p', { class: 'muted sm' }, 'Encontrou um erro depois de uma atualização? Escolha a versão anterior acima e me avise. Seu progresso não muda ao trocar de versão.'));
    }).catch(function () {
      body.innerHTML = '';
      body.appendChild(h('p', null, 'Preparando o modo offline… Recarregue a página em alguns segundos.'));
    });
    return c;
  };

  /* ---------- página Novidades ---------- */
  LUX.router.add('/novidades', function () {
    return {
      title: 'Novidades', nav: null, crumbs: [['Novidades', null]],
      render: function (main) {
        var news = W.news(), cl = changelog();
        var isNew = {}; news.entries.forEach(function (e) { isNew[e.build] = true; });
        main.appendChild(UI.pageHead('✨ Novidades', news.entries.length
          ? 'O que mudou desde a última vez que você usou o curso neste aparelho.'
          : 'Você já está em dia. Abaixo, o histórico de todas as versões.'));
        function item(e) {
          return h('li', { class: isNew[e.build] ? 'new' : '' }, [
            h('div', { class: 'muted sm' }, fmtBuild({ date: e.date, build: e.build })),
            h('div', null, e.notes)
          ]);
        }
        if (news.entries.length) {
          main.appendChild(h('section', { class: 'card' }, [h('h2', null, 'Desde a sua última visita'),
            h('ul', { class: 'news-list' }, news.entries.map(item))]));
          // voltar à versão anterior, se ela ainda estiver guardada no aparelho
          if (W.supported && news.from) W.info().then(function (info) {
            if (!info.builds.some(function (b) { return b.build === news.from; })) return;
            main.querySelector('.card').appendChild(h('div', { class: 'row gap wrap' }, [
              h('span', { class: 'muted sm' }, 'Algo deu errado com a atualização?'),
              h('button', { class: 'btn sm', onclick: function () { W.pin(news.from); } }, '↩ Voltar à versão anterior')
            ]));
          }).catch(function () { });
        }
        var older = cl.filter(function (e) { return !isNew[e.build]; });
        if (older.length) main.appendChild(h('section', { class: 'card' }, [h('h2', null, news.entries.length ? 'Versões anteriores' : 'Histórico de versões'),
          h('ul', { class: 'news-list' }, older.map(item))]));
      }
    };
  });
})(window);
