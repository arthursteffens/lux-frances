/* LUX — roteador por hash (#/curso, #/licao/a2-u01-l01, #/verbos/pleurer ...).
   Cada rota devolve {title, crumbs:[[rótulo, href]...], nav: 'id-do-item-da-barra', render(main)} */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util;
  var R = LUX.router = { routes: [], current: null };

  R.add = function (pattern, handler) {
    var keys = [];
    var re = new RegExp('^' + pattern.replace(/:(\w+)/g, function (m, k) { keys.push(k); return '([^/?]+)'; }) + '/?$');
    R.routes.push({ re: re, keys: keys, handler: handler });
  };
  R.parse = function () {
    var raw = location.hash.replace(/^#/, '') || '/curso';
    var q = {}, path = raw, qi = raw.indexOf('?');
    if (qi >= 0) {
      path = raw.slice(0, qi);
      raw.slice(qi + 1).split('&').forEach(function (kv) { var p = kv.split('='); if (p[0]) q[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); });
    }
    return { path: path, query: q };
  };
  R.go = function (hash) { if (location.hash === hash) R.render(); else location.hash = hash; };
  R.render = function () {
    var r = R.parse();
    LUX.tts.stop();
    LUX.tts.contentLang = 'fr'; // a página pode trocar (ex.: lição profissional em inglês)
    LUX.util.frEm = false;      // itálicos clicáveis: só a aba Profissional em francês liga
    LUX.ui.closePopup();
    var main = document.getElementById('main');
    // a página que está saindo pode guardar o próprio estado (ex.: lição em andamento)
    if (R.current && R.current.view && R.current.view.onLeave) {
      try { R.current.view.onLeave(main); } catch (e) { console.error(e); }
    }
    for (var i = 0; i < R.routes.length; i++) {
      var m = r.path.match(R.routes[i].re);
      if (!m) continue;
      var params = {};
      R.routes[i].keys.forEach(function (k, j) { params[k] = decodeURIComponent(m[j + 1]); });
      params.query = r.query;
      var view = R.routes[i].handler(params) || {};
      R.current = { path: r.path, view: view, params: params };
      main.innerHTML = '';
      main.className = 'main' + (view.wide ? ' wide' : '');
      try { view.render(main); } catch (e) {
        console.error(e);
        main.appendChild(LUX.ui.empty('⚠️', 'Algo deu errado ao abrir esta página.', String(e.message || e)));
      }
      document.title = (view.title ? view.title + ' — ' : '') + 'Lux · Curso de francês';
      LUX.app.setCrumbs(view.crumbs || []);
      LUX.sidebar.setActive(view.nav || r.path.split('/')[1]);
      if (!r.query.keepScroll) window.scrollTo(0, 0);
      main.focus({ preventScroll: true });
      if (LUX.lessons && LUX.lessons.updatePill) LUX.lessons.updatePill();
      R.updateBack(view.crumbs || [], r.path);
      return;
    }
    R.go('#/curso');
  };

  /* ---------- botão Voltar ----------
     Cada página visitada dentro do app ganha um número em history.state (luxIdx).
     Voltar usa o histórico só se houver página anterior DO APP; senão vai para a página "de cima"
     (o item anterior da trilha de navegação) — assim o app instalado nunca fecha por acidente. */
  function stateIdx() { var s = history.state; return s && typeof s.luxIdx === 'number' ? s.luxIdx : null; }
  function markEntry(i) { try { history.replaceState(Object.assign({}, history.state || {}, { luxIdx: i }), '', location.href); } catch (e) { } }
  R.histIdx = stateIdx();
  if (R.histIdx === null) { R.histIdx = 0; markEntry(0); }
  function syncHistory() {
    var i = stateIdx();
    if (i === null) { i = R.histIdx + 1; markEntry(i); } // página nova
    R.histIdx = i;                                          // voltar/avançar do navegador: só acompanha
  }
  R.canGoBack = function () { return R.histIdx > 0; };
  R.parentHref = function () {
    var cr = (R.current && R.current.view && R.current.view.crumbs) || [];
    for (var i = cr.length - 2; i >= 0; i--) if (cr[i] && cr[i][1]) return cr[i][1];
    return R.current && R.current.path !== '/curso' ? '#/curso' : null;
  };
  R.back = function () {
    if (R.canGoBack()) history.back();
    else { var p = R.parentHref(); if (p) location.hash = p; }
  };
  R.updateBack = function (crumbs, path) {
    var b = document.getElementById('back-btn');
    if (!b) return;
    var can = R.canGoBack() || !!R.parentHref();
    b.hidden = !can;
  };
  document.addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('back-btn');
    if (b) b.addEventListener('click', function () { R.back(); });
  });
  window.addEventListener('hashchange', function () { syncHistory(); R.render(); });
})(window);
