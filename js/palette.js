/* LUX — busca global (Ctrl+K ou /): verbos, gramática, Gerais, caderno e lições. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h;
  var P = LUX.palette = {};

  function score(text, q) {
    var t = U.norm(text);
    if (!t || !q) return -1;
    if (t.indexOf(q) === 0) return 0;
    if ((' ' + t).indexOf(' ' + q) >= 0 || t.indexOf('-' + q) >= 0 || t.indexOf("'" + q) >= 0) return 1;
    if (t.indexOf(q) >= 0) return 2;
    return -1;
  }
  function best(texts, q) {
    var b = -1;
    texts.forEach(function (t) { var s = score(t, q); if (s >= 0 && (b < 0 || s < b)) b = s; });
    return b;
  }

  P.search = function (query) {
    var q = U.norm(query);
    if (!q) return [];
    var groups = [];
    // verbos
    var verbs = LUX.verbSearch.search(query, 6).map(function (r) {
      return { label: r.inf + ' – ' + r.pt, sub: r.formOf ? 'forma de ' + r.inf + ' (' + r.formOf + ')' : 'verbo', href: '#/verbos/' + encodeURIComponent(r.inf) };
    });
    if (verbs.length) groups.push({ title: 'Verbos', items: verbs });
    // dicionário completo (se já foi baixado neste aparelho)
    if (LUX.dict && LUX.dict.ready()) {
      var dict = LUX.dict.search(query, 6).map(function (r) {
        var tr = LUX.dict.translation(r.e);
        return { label: LUX.dict.display(r.e) + (tr ? ' – ' + tr : ''), sub: 'dicionário · ' + (r.formOf || LUX.dict.POS[r.e.p] || r.e.p), href: LUX.dict.href(r.e) };
      });
      if (dict.length) groups.push({ title: 'Dicionário', items: dict });
    }
    // gramática
    var gram = LUX.data.grammarList.map(function (t) { return { t: t, s: best([t.title, t.titleFr].concat(t.keywords || []), q) }; })
      .filter(function (x) { return x.s >= 0; }).sort(function (a, b) { return a.s - b.s; }).slice(0, 5)
      .map(function (x) { return { label: x.t.title, sub: 'gramática · ' + x.t.level, href: '#/gramatica/' + x.t.id }; });
    if (gram.length) groups.push({ title: 'Gramática', items: gram });
    // Gerais: páginas e itens das tabelas
    var gen = [];
    (LUX.generalManifest || []).forEach(function (gr) {
      gr.pages.forEach(function (pg) {
        var page = LUX.data.general[pg.id];
        var s = best([pg.title].concat(page ? page.keywords || [] : []), q);
        if (s >= 0) gen.push({ s: s, label: pg.title, sub: 'Gerais · ' + gr.title + (page ? '' : ' (em breve)'), href: '#/gerais/' + pg.id });
        if (!page) return;
        (page.blocks || []).forEach(function (b) {
          if (b.type !== 'table') return;
          (b.sections || []).forEach(function (sec) {
            (sec.items || []).forEach(function (it) {
              var si = best([it.fr, it.pt], q);
              if (si >= 0 && si < 2) gen.push({ s: si + 0.5, label: it.fr + ' – ' + it.pt, sub: 'Gerais › ' + pg.title, href: '#/gerais/' + pg.id });
            });
          });
        });
      });
    });
    gen.sort(function (a, b) { return a.s - b.s; });
    if (gen.length) groups.push({ title: 'Gerais', items: gen.slice(0, 6) });
    // caderno
    var p = LUX.profiles.current();
    if (p) {
      var nb = Object.keys(p.notebook).map(function (k) { return p.notebook[k]; })
        .map(function (n) { return { n: n, s: best([n.fr, n.lemma, n.pt], q) }; }).filter(function (x) { return x.s >= 0; })
        .sort(function (a, b) { return a.s - b.s; }).slice(0, 5)
        .map(function (x) { return { label: x.n.fr + ' – ' + x.n.pt, sub: 'meu caderno', href: '#/caderno?q=' + encodeURIComponent(x.n.lemma) }; });
      if (nb.length) groups.push({ title: 'Caderno', items: nb });
    }
    // lições
    var les = Object.keys(LUX.data.lessons).map(function (id) { return LUX.data.lessons[id]; })
      .map(function (l) { return { l: l, s: best([l.title, l.titlePt], q) }; }).filter(function (x) { return x.s >= 0; })
      .sort(function (a, b) { return a.s - b.s; }).slice(0, 5)
      .map(function (x) { return { label: x.l.title, sub: 'lição · ' + x.l.level + ' unidade ' + x.l.unit + ' — ' + x.l.titlePt, href: '#/licao/' + x.l.id }; });
    if (les.length) groups.push({ title: 'Lições', items: les });
    return groups;
  };

  P.open = function () {
    var input = h('input', { class: 'input palette-input', type: 'search', placeholder: 'Buscar verbos, dicionário, gramática, Gerais, caderno, lições…', 'aria-label': 'Buscar', autocomplete: 'off' });
    var results = h('div', { class: 'palette-results', role: 'listbox' });
    var body = h('div', { class: 'palette' }, [input, results, h('p', { class: 'muted sm palette-hint' }, '↑ ↓ para navegar · Enter para abrir · Esc para fechar')]);
    var m = LUX.ui.modal({ body: body, wide: true });
    var flat = [], sel = 0;
    function draw() {
      results.innerHTML = '';
      flat = [];
      var groups = P.search(input.value);
      if (input.value.trim() && !groups.length) results.appendChild(h('p', { class: 'muted' }, 'Nada encontrado.'));
      groups.forEach(function (gr) {
        results.appendChild(h('div', { class: 'palette-group' }, gr.title));
        gr.items.forEach(function (it) {
          var i = flat.length;
          var a = h('a', { class: 'palette-item', href: it.href, role: 'option', onclick: function () { m.close(); } }, [h('span', { lang: 'fr' }, it.label), h('span', { class: 'muted sm' }, it.sub)]);
          a.addEventListener('mousemove', function () { sel = i; mark(); });
          flat.push(a);
          results.appendChild(a);
        });
      });
      sel = 0; mark();
    }
    function mark() { flat.forEach(function (a, i) { a.classList.toggle('sel', i === sel); a.setAttribute('aria-selected', i === sel ? 'true' : 'false'); }); if (flat[sel]) flat[sel].scrollIntoView({ block: 'nearest' }); }
    input.addEventListener('input', draw);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(flat.length - 1, sel + 1); mark(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      if (e.key === 'Enter' && flat[sel]) { e.preventDefault(); location.hash = flat[sel].getAttribute('href'); m.close(); }
    });
    setTimeout(function () { input.focus(); }, 30);
  };

  document.addEventListener('keydown', function (e) {
    var tag = (document.activeElement && document.activeElement.tagName) || '';
    var typing = /INPUT|TEXTAREA|SELECT/.test(tag) || (document.activeElement && document.activeElement.isContentEditable);
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); if (LUX.profiles.current()) P.open(); }
    else if (e.key === '/' && !typing && !document.querySelector('.modal-backdrop') && LUX.profiles.current()) { e.preventDefault(); P.open(); }
  });
})(window);
