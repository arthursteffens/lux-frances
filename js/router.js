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
      return;
    }
    R.go('#/curso');
  };
  window.addEventListener('hashchange', function () { R.render(); });
})(window);
