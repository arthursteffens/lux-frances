/* LUX — barra lateral (desktop fixa e recolhível, tablet sobreposta, celular em gaveta) + barra inferior no celular. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, S = LUX.store;
  var SB = LUX.sidebar = {};

  SB.GROUPS = [
    { label: 'Estudar', items: [
      { id: 'curso', icon: '📘', label: 'Curso', href: '#/curso', children: 'curso' },
      { id: 'revisar', icon: '🔁', label: 'Revisar', href: '#/revisar', badge: function () { return LUX.srs.dueCount(LUX.profiles.current()); } },
      { id: 'treino', icon: '🎧', label: 'Treino de ouvido', href: '#/treino' }
    ] },
    { label: 'Consultar', items: [
      { id: 'dicionario', icon: '📖', label: 'Dicionário', href: '#/dicionario' },
      { id: 'verbos', icon: '🔤', label: 'Verbos', href: '#/verbos' },
      { id: 'gramatica', icon: '📐', label: 'Gramática', href: '#/gramatica' },
      { id: 'gerais', icon: '🗂', label: 'Gerais', href: '#/gerais', children: 'gerais' }
    ] },
    { label: 'Meu espaço', items: [
      { id: 'caderno', icon: '📓', label: 'Caderno', href: '#/caderno', badge: function () { var p = LUX.profiles.current(); return p ? Object.keys(p.notebook).length : 0; }, badgeMuted: true },
      { id: 'perfil', icon: '👤', label: 'Perfil e configurações', href: '#/perfil' },
      { id: 'pro', icon: '💼', label: 'Profissional', href: '#/pro' }
    ] }
  ];
  SB.BOTTOM = ['curso', 'revisar', 'verbos', 'caderno'];

  var el, active = null, flyout = null;

  function navState() {
    var p = LUX.profiles.current();
    return p ? p.nav : {};
  }
  function saveNav() { S.save(); }

  SB.mount = function () {
    el = document.getElementById('sidebar');
    SB.render();
    document.getElementById('menu-btn').addEventListener('click', SB.toggleDrawer);
    document.getElementById('backdrop').addEventListener('click', SB.closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { SB.closeDrawer(); closeFlyout(); }
    });
    window.addEventListener('resize', applyMode);
    applyMode();
    renderBottom();
  };

  function isCollapsed() {
    var w = window.innerWidth;
    if (w < 640) return false;
    if (w < 1024) return !document.body.classList.contains('drawer-open');
    return S.state.ui.sidebar === 'collapsed';
  }
  function applyMode() {
    document.body.classList.toggle('sb-collapsed', isCollapsed());
  }

  SB.render = function () {
    if (!el) return;
    el.innerHTML = '';
    var p = LUX.profiles.current();
    // topo: perfil + recolher
    var head = h('div', { class: 'sb-head' });
    var profBtn = h('button', { class: 'sb-profile', 'aria-haspopup': 'menu', 'aria-label': 'Trocar de perfil (atual: ' + (p ? p.name : '') + ')' }, [
      h('span', { class: 'avatar', style: { background: p ? p.color : '#888' } }, p ? p.avatar : '?'),
      h('span', { class: 'sb-text sb-pname' }, p ? p.name : 'Sem perfil'),
      h('span', { class: 'sb-text sb-caret', 'aria-hidden': 'true' }, '▾')
    ]);
    profBtn.addEventListener('click', function (e) { e.stopPropagation(); profileMenu(profBtn); });
    head.appendChild(profBtn);
    var col = h('button', { class: 'icon-btn sb-collapse', 'aria-label': 'Recolher ou expandir a barra lateral', title: 'Recolher/expandir' }, '⇤');
    col.addEventListener('click', function () {
      if (window.innerWidth < 1024) { SB.toggleDrawer(); return; }
      S.state.ui.sidebar = S.state.ui.sidebar === 'collapsed' ? 'expanded' : 'collapsed';
      S.save(); applyMode();
    });
    head.appendChild(col);
    el.appendChild(head);
    var sbtn = h('button', { class: 'sb-search', 'aria-label': 'Buscar (Ctrl+K)' }, [h('span', { 'aria-hidden': 'true' }, '🔍'), h('span', { class: 'sb-text' }, 'Buscar…'), h('kbd', { class: 'sb-text' }, 'Ctrl K')]);
    sbtn.addEventListener('click', function () { SB.closeDrawer(); LUX.palette.open(); });
    el.appendChild(sbtn);

    var nav = h('nav', { class: 'sb-nav', 'aria-label': 'Navegação principal' });
    SB.GROUPS.forEach(function (gr) {
      nav.appendChild(h('div', { class: 'sb-group-label sb-text' }, gr.label));
      var ul = h('ul', { class: 'sb-list' });
      gr.items.forEach(function (it) {
        var li = h('li');
        var a = h('a', { class: 'sb-item', href: it.href, 'data-nav': it.id, title: it.label }, [
          h('span', { class: 'sb-ico', 'aria-hidden': 'true' }, it.icon), h('span', { class: 'sb-text' }, it.label)
        ]);
        var n = it.badge ? it.badge() : 0;
        if (n) a.appendChild(h('span', { class: 'sb-badge' + (it.badgeMuted ? ' muted' : '') }, String(n)));
        a.addEventListener('click', function () { SB.closeDrawer(); });
        li.appendChild(a);
        if (it.children) {
          var key = it.children, open = navState()[key] === true;
          var tog = h('button', { class: 'sb-toggle sb-text', 'aria-expanded': open ? 'true' : 'false', 'aria-controls': 'sb-' + key, 'aria-label': 'Expandir ' + it.label }, '▸');
          a.classList.add('has-children');
          tog.addEventListener('click', function (e) {
            e.preventDefault(); e.stopPropagation();
            var st = navState(); st[key] = tog.getAttribute('aria-expanded') !== 'true'; saveNav(); SB.render();
          });
          a.addEventListener('click', function (e) {
            if (document.body.classList.contains('sb-collapsed')) { e.preventDefault(); openFlyout(a, key); }
          });
          li.appendChild(tog);
          if (open) li.appendChild(key === 'curso' ? courseSub() : generalSub());
        }
        ul.appendChild(li);
      });
      nav.appendChild(ul);
    });
    el.appendChild(nav);
    el.appendChild(h('div', { class: 'sb-foot sb-text muted sm' }, ['Lux · francês A1 → B2 · ', h('a', { href: '#/novidades' }, 'Novidades')]));
    // navegação por setas dentro da barra
    nav.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      var items = [].slice.call(nav.querySelectorAll('.sb-item, .sb-subitem, .sb-subgroup-btn'));
      var i = items.indexOf(document.activeElement);
      if (i < 0) return;
      e.preventDefault();
      var nx = items[i + (e.key === 'ArrowDown' ? 1 : -1)];
      if (nx) nx.focus();
    });
    SB.setActive(active);
    renderBottom();
  };

  function generalSub(isFlyout) {
    var st = navState();
    st.gGroups = st.gGroups || {};
    var wrap = h('div', { class: 'sb-sub', id: isFlyout ? null : 'sb-gerais' });
    var activeGroup = null;
    (LUX.generalManifest || []).forEach(function (gr) { gr.pages.forEach(function (pg) { if (active === 'gerais/' + pg.id) activeGroup = gr.id; }); });
    (LUX.generalManifest || []).forEach(function (gr) {
      // por padrão, só o subgrupo da página atual fica aberto; a escolha do usuário é lembrada
      var open = isFlyout || st.gGroups[gr.id] === true || (st.gGroups[gr.id] !== false && gr.id === activeGroup);
      var btn = h('button', { class: 'sb-subgroup-btn', 'aria-expanded': open ? 'true' : 'false' }, [h('span', null, gr.title), h('span', { 'aria-hidden': 'true' }, open ? '▾' : '▸')]);
      btn.addEventListener('click', function (e) { e.stopPropagation(); st.gGroups[gr.id] = !open; saveNav(); if (isFlyout) { closeFlyout(); } SB.render(); });
      wrap.appendChild(btn);
      if (!open) return;
      var ul = h('ul', { class: 'sb-sublist' });
      gr.pages.forEach(function (pg) {
        var avail = !!LUX.data.general[pg.id];
        var a = h('a', { class: 'sb-subitem' + (avail ? '' : ' soon'), href: '#/gerais/' + pg.id, 'data-nav': 'gerais/' + pg.id, title: avail ? pg.title : pg.title + ' (em breve)' }, [
          h('span', { 'aria-hidden': 'true' }, pg.icon + ' '), pg.title, avail ? null : h('span', { class: 'soon-tag' }, 'em breve')
        ]);
        a.addEventListener('click', function () { SB.closeDrawer(); closeFlyout(); });
        ul.appendChild(h('li', null, a));
      });
      wrap.appendChild(ul);
    });
    return wrap;
  }

  /* Curso → níveis (A1 a C2) → unidades → lições. Só a lição atual e as já estudadas ficam clicáveis,
     com a nota ao lado; as seguintes aparecem bloqueadas. Por padrão abre o nível e a unidade da lição atual. */
  var EXTRA_LEVELS = [{ id: 'C1', title: 'C1 — Domínio' }, { id: 'C2', title: 'C2 — Proficiência' }];
  function courseSub(isFlyout) {
    var st = navState(), p = LUX.profiles.current(), L = LUX.lessons;
    st.cLv = st.cLv || {}; st.cUn = st.cUn || {};
    var wrap = h('div', { class: 'sb-sub sb-course', id: isFlyout ? null : 'sb-curso' });
    if (!p || !L) return wrap;
    var focus = active && /^curso\/./.test(active) ? active.slice(6) : null;
    var focusId = LUX.data.lessons[focus] ? focus : L.current(p);
    var fl = LUX.data.lessons[focusId] || {};
    var testLv = focus && /^teste-/.test(focus) ? focus.slice(6) : null;
    function done(id) { return p.progress[id] && p.progress[id].status === 'done'; }
    var levels = LUX.manifest.levels.concat(EXTRA_LEVELS.filter(function (x) { return !LUX.manifest.levels.some(function (y) { return y.id === x.id; }); }));
    levels.forEach(function (lv) {
      var units = lv.units || [];
      var ids = []; units.forEach(function (u) { ids = ids.concat(u.lessons.filter(function (id) { return LUX.data.lessons[id]; })); });
      if (!ids.length) {
        wrap.appendChild(h('div', { class: 'sb-subgroup-btn sb-course-lv soon', title: lv.title + ' (em breve)' }, [h('span', null, lv.title), h('span', { class: 'soon-tag' }, 'em breve')]));
        return;
      }
      var lvOpen = isFlyout ? lv.id === fl.level : (st.cLv[lv.id] === true || (st.cLv[lv.id] !== false && (lv.id === fl.level || lv.id === testLv)));
      var nDone = ids.filter(done).length;
      var lb = h('button', { class: 'sb-subgroup-btn sb-course-lv', 'aria-expanded': lvOpen ? 'true' : 'false' }, [
        h('span', null, lv.title), h('span', { class: 'sb-count' }, nDone + '/' + ids.length + ' ' + (lvOpen ? '▾' : '▸'))]);
      lb.addEventListener('click', function (e) { e.stopPropagation(); st.cLv[lv.id] = !lvOpen; saveNav(); if (isFlyout) closeFlyout(); SB.render(); });
      wrap.appendChild(lb);
      if (!lvOpen) return;
      var lvBox = h('div', { class: 'sb-course-units' });
      units.forEach(function (u) {
        var uids = u.lessons.filter(function (id) { return LUX.data.lessons[id]; });
        var key = lv.id + '-' + u.n;
        if (!uids.length) { lvBox.appendChild(h('div', { class: 'sb-unit soon' }, [h('span', null, 'U' + u.n + ' · ' + u.title), h('span', { class: 'soon-tag' }, 'em breve')])); return; }
        var uOpen = isFlyout ? uids.indexOf(focusId) >= 0 : (st.cUn[key] === true || (st.cUn[key] !== false && uids.indexOf(focusId) >= 0));
        var ub = h('button', { class: 'sb-unit', 'aria-expanded': uOpen ? 'true' : 'false', title: u.title }, [
          h('span', { class: 'sb-unit-t' }, 'U' + u.n + ' · ' + u.title), h('span', { class: 'sb-count' }, uids.filter(done).length + '/' + uids.length + ' ' + (uOpen ? '▾' : '▸'))]);
        ub.addEventListener('click', function (e) { e.stopPropagation(); st.cUn[key] = !uOpen; saveNav(); if (isFlyout) closeFlyout(); SB.render(); });
        lvBox.appendChild(ub);
        if (!uOpen) return;
        var ul = h('ul', { class: 'sb-sublist sb-lessons' });
        uids.forEach(function (id) {
          var l = LUX.data.lessons[id], pr = p.progress[id], ok = L.isUnlocked(p, id);
          var label = [h('span', { class: 'sb-l-ico', 'aria-hidden': 'true' }, done(id) ? '✅' : ok ? (id === L.current(p) ? '▶️' : '⭕') : '🔒'),
            h('span', { class: 'sb-l-t', lang: 'fr' }, l.order + '. ' + l.title),
            pr ? h('span', { class: 'sb-score ' + (pr.best >= 0.7 ? 'ok' : 'low') }, Math.round(pr.best * 100) + '%') : null];
          var node = ok
            ? h('a', { class: 'sb-subitem sb-lesson', href: '#/licao/' + id, 'data-nav': 'curso/' + id, title: l.title + ' · ' + l.titlePt }, label)
            : h('span', { class: 'sb-subitem sb-lesson locked', title: 'Conclua a lição anterior com 70% para desbloquear' }, label);
          if (ok) node.addEventListener('click', function () { SB.closeDrawer(); closeFlyout(); });
          ul.appendChild(h('li', null, node));
        });
        lvBox.appendChild(ul);
      });
      // teste de nível, quando liberado
      if (LUX.levelTests && LUX.levelTests.isUnlocked(p, lv.id)) {
        var rec = p.levelTests[lv.id];
        var ta = h('a', { class: 'sb-subitem sb-lesson', href: '#/teste/' + lv.id, 'data-nav': 'curso/teste-' + lv.id }, [h('span', { class: 'sb-l-ico', 'aria-hidden': 'true' }, '🎓'), h('span', { class: 'sb-l-t' }, 'Teste de nível ' + lv.id),
          rec ? h('span', { class: 'sb-score ' + (rec.passed ? 'ok' : 'low') }, Math.round(rec.best * 100) + '%') : null]);
        ta.addEventListener('click', function () { SB.closeDrawer(); closeFlyout(); });
        lvBox.appendChild(h('ul', { class: 'sb-sublist sb-lessons' }, h('li', null, ta)));
      }
      wrap.appendChild(lvBox);
    });
    return wrap;
  }

  function openFlyout(anchor, key) {
    closeFlyout();
    flyout = key === 'curso'
      ? h('div', { class: 'sb-flyout', role: 'menu', 'aria-label': 'Curso' }, [h('a', { class: 'sb-subitem', href: '#/curso', onclick: closeFlyout }, '📘 Mapa do curso'), courseSub(true)])
      : h('div', { class: 'sb-flyout', role: 'menu', 'aria-label': 'Gerais' }, [h('a', { class: 'sb-subitem', href: '#/gerais', onclick: closeFlyout }, '🗂 Todas as páginas de Gerais'), generalSub(true)]);
    document.body.appendChild(flyout);
    var r = anchor.getBoundingClientRect();
    flyout.style.top = Math.max(8, Math.min(r.top, window.innerHeight - flyout.offsetHeight - 8)) + 'px';
    flyout.style.left = (r.right + 6) + 'px';
    setTimeout(function () { var f = flyout && flyout.querySelector('a'); if (f) f.focus(); document.addEventListener('click', outside); }, 10);
  }
  function outside(e) { if (flyout && !flyout.contains(e.target)) closeFlyout(); }
  function closeFlyout() { if (flyout) { flyout.remove(); flyout = null; document.removeEventListener('click', outside); } }

  function profileMenu(anchor) {
    var menu = h('div', { class: 'menu', role: 'menu' });
    LUX.profiles.list().forEach(function (p) {
      var cur = LUX.profiles.current();
      menu.appendChild(h('button', {
        class: 'menu-item' + (cur && cur.id === p.id ? ' current' : ''), role: 'menuitem', onclick: function () {
          LUX.app.switchProfile(p.id); menu.remove();
        }
      }, [h('span', { class: 'avatar sm', style: { background: p.color } }, p.avatar), ' ', p.name, cur && cur.id === p.id ? ' ✓' : '']));
    });
    menu.appendChild(h('hr'));
    menu.appendChild(h('button', { class: 'menu-item', role: 'menuitem', onclick: function () { menu.remove(); LUX.app.newProfileDialog(); } }, '＋ Novo perfil'));
    menu.appendChild(h('a', { class: 'menu-item', role: 'menuitem', href: '#/perfil', onclick: function () { menu.remove(); SB.closeDrawer(); } }, '⚙ Gerenciar perfis'));
    document.body.appendChild(menu);
    var r = anchor.getBoundingClientRect();
    menu.style.top = (r.bottom + 4) + 'px';
    menu.style.left = Math.max(8, r.left) + 'px';
    var f = menu.querySelector('button'); if (f) f.focus();
    function off(e) { if (!menu.contains(e.target)) { menu.remove(); document.removeEventListener('click', off); } }
    function esc(e) { if (e.key === 'Escape') { menu.remove(); document.removeEventListener('keydown', esc); anchor.focus(); } }
    setTimeout(function () { document.addEventListener('click', off); document.addEventListener('keydown', esc); }, 10);
  }

  var courseFocus = null;
  SB.setActive = function (id) {
    active = id;
    if (!el) return;
    var top = id ? String(id).split('/')[0] : null;
    // numa lição ou teste: abre a árvore do Curso (a menos que o usuário a tenha fechado) e a refaz em volta da página atual
    if (top === 'curso' && id !== 'curso') {
      var cs = navState(), box = el.querySelector('#sb-curso');
      if (!box && cs.curso !== false) { cs.curso = true; courseFocus = id; SB.render(); return; }
      if (box && courseFocus !== id) { courseFocus = id; box.replaceWith(courseSub()); }
    }
    el.querySelectorAll('[data-nav]').forEach(function (a) {
      var n = a.getAttribute('data-nav');
      var on = n === id || (n === top && !el.querySelector('[data-nav="' + id + '"]')) || (n === top && a.classList.contains('sb-item'));
      a.classList.toggle('active', !!on);
      if (on && (n === id)) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    // abre o grupo de Gerais automaticamente (a menos que o usuário o tenha fechado)
    if (top === 'gerais') {
      var st = navState();
      if (!el.querySelector('#sb-gerais') && st.gerais !== false) { st.gerais = true; SB.render(); return; }
    }
    document.querySelectorAll('.bottombar [data-nav]').forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-nav') === top); });
  };

  function renderBottom() {
    var bar = document.getElementById('bottombar');
    if (!bar) return;
    bar.innerHTML = '';
    SB.BOTTOM.forEach(function (id) {
      var it = null;
      SB.GROUPS.forEach(function (gr) { gr.items.forEach(function (x) { if (x.id === id) it = x; }); });
      var a = h('a', { href: it.href, 'data-nav': it.id, class: 'bb-item' }, [h('span', { class: 'bb-ico', 'aria-hidden': 'true' }, it.icon), h('span', null, it.label)]);
      var n = it.badge ? it.badge() : 0;
      if (n && !it.badgeMuted) a.appendChild(h('span', { class: 'bb-badge' }, String(n)));
      bar.appendChild(a);
    });
    bar.appendChild(h('button', { class: 'bb-item', onclick: SB.toggleDrawer, 'aria-label': 'Abrir o menu completo' }, [h('span', { class: 'bb-ico', 'aria-hidden': 'true' }, '☰'), h('span', null, 'Menu')]));
  }

  SB.toggleDrawer = function () {
    var open = !document.body.classList.contains('drawer-open');
    document.body.classList.toggle('drawer-open', open);
    document.getElementById('menu-btn').setAttribute('aria-expanded', open ? 'true' : 'false');
    applyMode();
    if (open) setTimeout(function () { var f = el.querySelector('.sb-item'); if (f) f.focus(); }, 50);
  };
  SB.closeDrawer = function () {
    if (!document.body.classList.contains('drawer-open')) return;
    document.body.classList.remove('drawer-open');
    document.getElementById('menu-btn').setAttribute('aria-expanded', 'false');
    applyMode();
  };
})(window);
