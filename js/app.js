/* LUX — inicialização: carrega o conteúdo, boas-vindas, troca de perfil, avisos, tema e tempo de estudo. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, P = LUX.profiles, S = LUX.store;
  var A = LUX.app = LUX.app || {};
  var mounted = false;

  /* carrega os arquivos de conteúdo listados no manifesto (scripts dinâmicos funcionam em file://) */
  A.loadContent = function (done) {
    var files = (LUX.manifest && LUX.manifest.files) || [];
    var pending = files.length, failed = [];
    if (!pending) { done(failed); return; }
    files.forEach(function (f) {
      var s = document.createElement('script');
      s.src = f; s.async = false;
      s.onload = function () { if (--pending === 0) done(failed); };
      s.onerror = function () { failed.push(f); if (--pending === 0) done(failed); };
      document.head.appendChild(s);
    });
  };

  A.applyTheme = function () {
    var p = P.current();
    var t = p ? p.settings.theme : 'auto';
    if (t === 'light' || t === 'dark') document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
  };

  A.setCrumbs = function (crumbs) {
    var nav = document.getElementById('crumbs');
    if (!nav) return;
    nav.innerHTML = '';
    var ol = h('ol');
    crumbs.filter(function (c) { return c && c[0]; }).forEach(function (c, i, arr) {
      var last = i === arr.length - 1;
      ol.appendChild(h('li', null, c[1] && !last ? h('a', { href: c[1] }, c[0]) : h('span', { 'aria-current': last ? 'page' : null }, c[0])));
    });
    nav.appendChild(ol);
  };

  /* ---------- avisos fixos ---------- */
  function banners() {
    var box = document.getElementById('banners');
    box.innerHTML = '';
    if (!S.available) {
      box.appendChild(h('div', { class: 'banner danger fixed', role: 'alert' }, [
        h('b', null, '⚠ Este navegador não está conseguindo salvar seu progresso. Tudo o que você fizer será perdido ao fechar.'),
        h('div', { class: 'sm' }, 'Causas prováveis: janela anônima/privada, política da empresa ou armazenamento desativado. Tente: abrir numa janela normal, usar outro navegador (Chrome ou Edge) ou falar com a TI.'),
        P.current() ? h('button', { class: 'btn sm', onclick: function () { P.download(S.state.order.slice()); } }, '⬇ Exportar progresso agora') : null
      ]));
    }
  }
  S.onChange(banners);

  A.noVoiceHelp = function () {
    return h('details', { class: 'banner warn voice-help', open: true }, [
      h('summary', null, '🔇 Nenhuma voz francesa foi encontrada neste navegador.'),
      h('p', null, 'Sem uma voz francesa, os áudios não tocam — mas as transcrições continuam disponíveis. Para instalar:'),
      h('ul', null, [
        h('li', null, [h('b', null, 'Windows: '), 'Configurações › Hora e idioma › Fala › Vozes › Adicionar vozes › Français (France). Depois reinicie o navegador. O Microsoft Edge já traz vozes "naturais" online.']),
        h('li', null, [h('b', null, 'macOS: '), 'Ajustes do Sistema › Acessibilidade › Conteúdo Falado › Voz do sistema › Gerenciar vozes › Francês (ex.: Thomas, Amélie).']),
        h('li', null, [h('b', null, 'Android: '), 'Configurações › Sistema › Idiomas › Saída de conversão de texto em voz › Mecanismo do Google › Instalar dados de voz › Français.']),
        h('li', null, [h('b', null, 'iPhone/iPad: '), 'Ajustes › Acessibilidade › Conteúdo Falado › Vozes › Francês.'])
      ])
    ]);
  };

  A.backupBanner = function (p, rem) {
    var b = h('div', { class: 'banner info backup-banner' }, [
      h('span', null, rem.never ? '💾 Você ainda não fez nenhum backup do seu progresso. Leva 1 clique.' : '💾 Faz ' + rem.days + ' dias que você não salva um backup do seu progresso.'),
      h('div', { class: 'row gap wrap' }, [
        h('button', { class: 'btn sm primary', onclick: function () { P.download([p.id]); UI.toast('Backup baixado. Guarde o arquivo num lugar seguro.', 'ok'); b.remove(); } }, 'Exportar agora'),
        h('button', { class: 'btn sm ghost', onclick: function () { P.snoozeBackup(p); b.remove(); } }, 'Lembrar amanhã'),
        h('a', { class: 'btn sm ghost', href: '#/perfil' }, 'Configurar')
      ])
    ]);
    return b;
  };

  /* ---------- importação com prévia ---------- */
  A.importFile = function (file, after) {
    var r = new FileReader();
    r.onload = function () {
      var res = P.parseBackup(String(r.result));
      if (!res.ok) { UI.modal({ title: 'Não foi possível importar', body: h('p', null, res.error), actions: [{ label: 'OK', primary: true }] }); return; }
      var any = res.summary.some(function (s) { return s.exists; });
      var body = h('div', { class: 'stack' }, [
        h('p', null, 'Este arquivo contém:'),
        h('ul', { class: 'import-list' }, res.summary.map(function (s) {
          return h('li', null, [h('span', { class: 'avatar sm' }, s.avatar), ' ', h('b', null, s.name), ': ' + s.lessons + ' lições concluídas, ' + s.words + ' palavras no caderno, ' + s.cards + ' cartões de revisão' + (s.exists ? ' — já existe aqui' : ' — novo')]);
        })),
        h('p', { class: 'muted sm' }, 'Exportado em ' + U.fmtDate(res.data.exportedAt) + '.'),
        any ? h('p', { html: '<b>Mesclar</b> junta os dois progressos (melhor nota de cada lição, união do caderno). <b>Substituir</b> deixa o perfil exatamente igual ao arquivo.' }) : null
      ]);
      var actions = [{ label: 'Cancelar', ghost: true }];
      if (any) {
        actions.push({ label: 'Substituir', onClick: function () { doImport('replace'); } });
        actions.push({ label: 'Mesclar', primary: true, onClick: function () { doImport('merge'); } });
      } else actions.push({ label: 'Importar', primary: true, onClick: function () { doImport('merge'); } });
      UI.modal({ title: 'Importar backup', body: body, actions: actions });
      function doImport(mode) {
        P.importBackup(res.data, mode);
        UI.toast('Backup importado (' + (mode === 'replace' ? 'substituído' : 'mesclado') + ').', 'ok');
        if (after) after(); else { A.start(); LUX.router.render(); }
      }
    };
    r.readAsText(file);
  };

  /* ---------- boas-vindas (sem perfis) ---------- */
  function welcome() {
    document.body.classList.add('welcome-mode');
    var w = document.getElementById('welcome');
    w.hidden = false; w.innerHTML = '';
    var f = A.profileForm({ color: P.COLORS[0], avatar: P.AVATARS[0], withStart: true });
    var create = h('button', { class: 'btn primary big' }, 'Começar a estudar →');
    create.addEventListener('click', function () {
      if (!f.name.value.trim()) { f.name.focus(); UI.toast('Digite seu nome.'); return; }
      P.create(f.name.value, f.sel.avatar, f.sel.color, f.sel.start);
      if (!S.state.ui.firstUse) { S.state.ui.firstUse = new Date().toISOString(); S.save(true); }
      document.body.classList.remove('welcome-mode');
      w.hidden = true;
      A.start();
      location.hash = '#/curso';
      LUX.router.render();
      UI.toast('Bem-vindo(a)! Seu perfil foi criado.', 'ok');
    });
    f.name.addEventListener('keydown', function (e) { if (e.key === 'Enter') create.click(); });
    var file = h('input', { type: 'file', accept: '.json,application/json', class: 'file', 'aria-label': 'Importar backup' });
    file.addEventListener('change', function () {
      if (!file.files[0]) return;
      A.importFile(file.files[0], function () { document.body.classList.remove('welcome-mode'); w.hidden = true; A.start(); LUX.router.render(); });
      file.value = '';
    });
    w.appendChild(h('div', { class: 'welcome-box' }, [
      h('div', { class: 'brand' }, [h('span', { class: 'brand-logo', 'aria-hidden': 'true' }, '🥐'), h('span', null, [h('b', null, 'Lux'), h('span', { class: 'muted' }, ' · curso de francês para brasileiros')])]),
      h('h1', null, 'Quem vai estudar?'),
      h('p', { class: 'muted' }, 'Crie um perfil para cada pessoa. Cada um tem o próprio progresso, revisão e caderno — e dá para trocar de perfil a qualquer momento.'),
      h('div', { class: 'card' }, [f.el, create]),
      LUX.drive && LUX.drive.supported ? h('div', { class: 'card muted-card' }, [
        h('p', null, [h('b', null, 'Já conectou seu perfil ao Google Drive?'), ' Entre com a mesma conta Google para continuar de onde parou:']),
        h('button', { class: 'btn primary', onclick: function () {
          LUX.drive.restoreNew().then(function (p) {
            if (!p) return;
            document.body.classList.remove('welcome-mode'); w.hidden = true;
            A.start(); location.hash = '#/curso'; LUX.router.render();
            UI.toast('☁️ Progresso de ' + p.name + ' restaurado do Google Drive.', 'ok');
          });
        } }, '☁️ Restaurar do Google Drive')
      ]) : null,
      h('div', { class: 'card muted-card' }, [
        h('p', null, [h('b', null, 'Já usou o curso em outro computador ou neste?'), ' Importe seu backup:']),
        h('label', { class: 'btn' }, ['⬆ Importar backup (.json)', file]),
        h('p', { class: 'muted sm' }, 'Já usou o curso neste computador e seus perfis sumiram? Este navegador pode estar apagando os dados ao fechar (comum em computadores de empresa ou em janelas anônimas). Importe seu backup aqui e, depois, faça o teste em Perfil e configurações.')
      ])
    ]));
    setTimeout(function () { f.name.focus(); }, 50);
  }

  /* ---------- troca de perfil ---------- */
  A.switchProfile = function (id) {
    LUX.tts.stop();
    P.switchTo(id);
    A.applyTheme();
    LUX.sidebar.render();
    var p = P.current();
    UI.toast('Agora estudando como ' + p.name + ' ' + p.avatar);
    if (/^#\/(licao|perfil)/.test(location.hash)) location.hash = '#/curso';
    LUX.router.render();
  };

  /* ---------- montagem do app ---------- */
  A.start = function () {
    A.applyTheme();
    if (!mounted) {
      LUX.sidebar.mount();
      mounted = true;
    } else LUX.sidebar.render();
    banners();
  };

  /* tempo de estudo: conta enquanto a página está visível e houve interação no último minuto */
  var lastInput = Date.now();
  ['mousedown', 'keydown', 'touchstart', 'scroll'].forEach(function (ev) { document.addEventListener(ev, function () { lastInput = Date.now(); }, { passive: true }); });
  setInterval(function () {
    if (document.visibilityState === 'visible' && Date.now() - lastInput < 60000 && P.current() && !document.body.classList.contains('welcome-mode')) {
      P.addStudyTime(15);
    }
  }, 15000);

  A.boot = function () {
    S.load();
    LUX.tts.init();
    banners();
    if (LUX.pwa) LUX.pwa.init();
    var loading = document.getElementById('loading');
    if (loading) loading.remove();
    // teste de persistência entre sessões
    var marker = S.checkPersistTest();
    var sameSession = false;
    try { sameSession = sessionStorage.getItem('lux-fr:persist-session') === '1'; } catch (e) { }
    if (marker && sameSession) { S.startPersistTest(); setTimeout(function () { UI.toast('Teste em andamento: feche o navegador por completo e abra o curso de novo.'); }, 600); }
    else if (marker) setTimeout(function () {
      UI.modal({ title: '✅ Seus dados estão sendo mantidos', body: h('p', null, 'O teste funcionou: depois de fechar e abrir o navegador, seu progresso continua aqui. Mesmo assim, faça backups de vez em quando.'), actions: [{ label: 'Ótimo!', primary: true }] });
    }, 400);
    if (!P.list().length) { welcome(); return; }
    if (!P.current()) P.switchTo(S.state.order[0]);
    A.start();
    LUX.router.render();
    if (LUX.drive) LUX.drive.onOpen();
    // constrói índices pesados quando o navegador estiver ocioso
    (window.requestIdleCallback || function (fn) { setTimeout(fn, 600); })(function () { LUX.lexicon.build(); LUX.verbSearch.search('a'); });
    S.requestPersist();
    if (LUX.tts.supported) setTimeout(function () {
      if (!LUX.tts.voices.length && P.current()) {
        var box = document.getElementById('banners');
        var help = A.noVoiceHelp();
        help.open = false;
        help.appendChild(h('button', { class: 'btn sm ghost', onclick: function () { help.remove(); } }, 'Fechar'));
        box.appendChild(help);
      }
    }, 2500);
  };

  document.addEventListener('DOMContentLoaded', function () {
    A.loadContent(function (failed) {
      if (failed.length) {
        console.error('Arquivos de conteúdo não carregados:', failed);
        document.getElementById('banners').appendChild(h('div', { class: 'banner danger' }, 'Alguns arquivos de conteúdo não foram encontrados: ' + failed.join(', ')));
      }
      A.boot();
    });
  });
})(window);
