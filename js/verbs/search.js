/* LUX — busca de verbos (português ou francês, sem acentos, com sugestões desde a 1ª letra e por forma conjugada). */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util;
  var VS = LUX.verbSearch = {};
  var index = null, forms = null, all = null, byInf = null, extByNorm = null;

  /* verbos com ficha + verbos do léxico (ficha simplificada) + verbos do dicionário completo, se já foi baixado */
  VS.all = function () {
    if (all) return all;
    var list = LUX.data.verbList.slice();
    var have = {};
    list.forEach(function (v) { have[v.inf] = 1; });
    LUX.data.lexicon.forEach(function (e) {
      if (e.p === 'v' && !have[e.w]) {
        list.push({ inf: e.w, pt: e.t.split(/\s*;\s*/), level: e.l || 'A2', freq: 3000, partial: true, like: e.like, pattern: e.pattern, examples: [], synonyms: [] });
        have[e.w] = 1;
      }
    });
    if (LUX.dict && LUX.dict.ready()) LUX.dict.verbs.forEach(function (v) { if (!have[v.inf]) { list.push(v); have[v.inf] = 1; } });
    all = list;
    byInf = {}; extByNorm = {};
    list.forEach(function (v) {
      byInf[v.inf] = v;
      if (v.ext && !v.irr) (extByNorm[U.norm(LUX.conjugator.parseInf(v.inf).base)] = extByNorm[U.norm(LUX.conjugator.parseInf(v.inf).base)] || []).push(v);
    });
    return list;
  };
  VS.get = function (inf) {
    if (LUX.data.verbs[inf]) return LUX.data.verbs[inf];
    VS.all();
    return byInf[inf] || byInf[String(inf).replace(/’/g, "'")] || null;
  };

  function build() {
    index = []; forms = [];
    VS.all().forEach(function (v) {
      var keys = [{ k: U.norm(v.inf), fr: true }];
      v._k = keys;
      var pi = LUX.conjugator.parseInf(v.inf);
      if (pi.pronominal) keys.push({ k: U.norm(pi.base), fr: true });
      v.pt.forEach(function (t) { keys.push({ k: U.norm(t), fr: false }); });
      index.push({ v: v, keys: keys });
      // verbos regulares do dicionário completo (dezenas de milhares): formas achadas sob demanda (VS.formLookup)
      if (v.ext && !v.irr) return;
      try {
        var fs = LUX.conjugator.allForms(v.inf, v);
        Object.keys(fs).forEach(function (f) {
          if (fs[f] === 'inf') return;
          forms.push({ k: U.norm(f), form: f, v: v, tense: fs[f] });
        });
      } catch (e) { console.warn('conjugação falhou', v.inf, e); }
    });
  }
  VS.reset = function () { index = null; all = null; };

  /* forma conjugada -> verbo(s). Verbos regulares do dicionário completo: desfaz a terminação
     (mangeons -> mang + er) e confere com o conjugador. */
  var ENDINGS = null;
  function endings() {
    if (ENDINGS) return ENDINGS;
    ENDINGS = [];
    [['parler', 'parl', 'er'], ['finir', 'fin', 'ir'], ['vendre', 'vend', 're']].forEach(function (m) {
      var fs = LUX.conjugator.allForms(m[0], {}), seen = {};
      Object.keys(fs).forEach(function (f) {
        var e = U.norm(f).slice(m[1].length);
        if (!seen[e]) { seen[e] = 1; ENDINGS.push([e, m[2]]); }
      });
    });
    return ENDINGS;
  }
  VS.formLookup = function (query) {
    if (!index) build();
    var q = U.norm(query).replace(/^(?:se |s')/, '');
    if (!q) return [];
    var out = [], seen = {};
    forms.forEach(function (f) { if (f.k === q && !seen[f.v.inf]) { seen[f.v.inf] = 1; out.push({ v: f.v, form: f.form, tense: f.tense }); } });
    endings().forEach(function (en) {
      var end = en[0];
      if (q.length <= end.length + 1 || q.slice(q.length - end.length) !== end) return;
      var stem = q.slice(0, q.length - end.length), stems = [stem];
      if (/ge$/.test(stem)) stems.push(stem.slice(0, -1));               // mangeons
      if (/(ll|tt)$/.test(stem)) stems.push(stem.slice(0, -1));          // appelle, jette
      if (/i$/.test(stem)) stems.push(stem.slice(0, -1) + 'y');          // paie, emploie
      stems.forEach(function (st) {
        (extByNorm[st + en[1]] || []).forEach(function (v) {
          if (seen[v.inf]) return;
          var fs = LUX.conjugator.allForms(v.inf, v);
          var hit = Object.keys(fs).filter(function (f) { return U.norm(f) === q; })[0];
          if (hit && fs[hit] !== 'inf') { seen[v.inf] = 1; out.push({ v: v, form: hit, tense: fs[hit] }); }
        });
      });
    });
    return out;
  };

  function tier(key, q) {
    if (key.indexOf(q) === 0) return 0;
    if ((' ' + key).indexOf(' ' + q) >= 0 || key.indexOf('-' + q) >= 0 || key.indexOf("'" + q) >= 0 || key.indexOf('(' + q) >= 0) return 1;
    if (key.indexOf(q) >= 0) return 2;
    return -1;
  }

  /* devolve [{inf, pt, level, irregular, formOf, matchFr, v}] ordenado */
  VS.search = function (query, limit) {
    if (!index) build();
    limit = limit || 10;
    var q = U.norm(query).replace(/^(se |s')/, function (m) { return m; });
    if (!q) return [];
    var res = [];
    index.forEach(function (it) {
      var best = -1, fr = false;
      it.keys.forEach(function (k) {
        var t = tier(k.k, q);
        if (t >= 0 && (best < 0 || t < best || (t === best && k.fr))) { best = t; fr = k.fr; }
      });
      if (best >= 0) res.push({ v: it.v, tier: best, fr: fr });
    });
    var seen = {};
    res.forEach(function (r) { seen[r.v.inf] = 1; });
    // formas conjugadas (ex.: "cours" -> courir); verbos regulares do dicionário completo: só a forma exata
    if (q.length >= 3 && LUX.dict && LUX.dict.ready()) {
      VS.formLookup(q).forEach(function (f) { if (!seen[f.v.inf]) { seen[f.v.inf] = 1; res.push({ v: f.v, tier: 0.5, form: f.form, tense: f.tense }); } });
    }
    if (q.length >= 2) {
      var fm = {};
      forms.forEach(function (f) {
        if (seen[f.v.inf]) return;
        var exact = f.k === q, pre = f.k.indexOf(q) === 0;
        if (!exact && !pre) return;
        var t = exact ? 0.5 : 3;
        var prev = fm[f.v.inf];
        if (!prev || t < prev.tier) fm[f.v.inf] = { v: f.v, tier: t, form: f.form, tense: f.tense };
      });
      Object.keys(fm).forEach(function (k) { res.push(fm[k]); });
    }
    res.sort(function (a, b) {
      if (a.tier !== b.tier) return a.tier - b.tier;
      return (a.v.freq || 9999) - (b.v.freq || 9999);
    });
    return res.slice(0, limit).map(function (r) {
      var info = LUX.conjugator.simple(r.v.inf, r.v);
      return {
        inf: r.v.inf, pt: r.v.pt.join(', ') || (r.v.def ? '(fr) ' + r.v.def : ''), level: r.v.level, ext: !!r.v.ext, irregular: info.pattern === 'irregular' || !!r.v.like || info.pattern === 'partir',
        formOf: r.form ? LUX.conjugator.FORM_LABEL[r.tense] : null, form: r.form || null, v: r.v
      };
    });
  };

  /* realça o trecho buscado (sem diferenciar acentos) */
  VS.highlight = function (text, query) {
    var q = U.norm(query);
    if (!q) return U.esc(text);
    var plain = U.norm(text), i = plain.indexOf(q);
    if (i < 0) return U.esc(text);
    // o índice em "norm" corresponde ao texto original (mesmo comprimento, salvo œ/æ)
    if (plain.length !== text.length) return U.esc(text);
    return U.esc(text.slice(0, i)) + '<mark>' + U.esc(text.slice(i, i + q.length)) + '</mark>' + U.esc(text.slice(i + q.length));
  };

  /* campo de busca com lista de sugestões (combobox acessível) */
  VS.combobox = function (opts) {
    var h = U.h;
    var id = 'vs-' + Math.random().toString(36).slice(2, 7);
    var input = h('input', {
      class: 'input big', type: 'search', placeholder: opts.placeholder || 'Digite um verbo em português ou francês…', autocomplete: 'off',
      role: 'combobox', 'aria-expanded': 'false', 'aria-controls': id, 'aria-autocomplete': 'list', 'aria-label': 'Buscar verbo', spellcheck: 'false'
    });
    var list = h('ul', { class: 'suggest', id: id, role: 'listbox', hidden: true });
    var wrap = h('div', { class: 'combo' }, [input, list]);
    var items = [], sel = -1;
    function draw() {
      var q = input.value;
      items = q.trim() ? VS.search(q, 10) : [];
      list.innerHTML = '';
      if (!q.trim()) { list.hidden = true; input.setAttribute('aria-expanded', 'false'); return; }
      if (!items.length) {
        list.appendChild(h('li', { class: 'suggest-empty' }, 'Nenhum verbo encontrado para "' + q + '".'));
      }
      items.forEach(function (r, i) {
        var li = h('li', { role: 'option', id: id + '-' + i, class: 'suggest-item' });
        li.innerHTML = '<span class="s-main"><b lang="fr">' + VS.highlight(r.inf, q) + '</b> – ' + VS.highlight(r.pt, q) + '</span>' +
          '<span class="s-meta">' + (r.formOf ? '<span class="muted sm">forma de ' + U.esc(r.inf) + ': ' + U.esc(r.form) + ' (' + U.esc(r.formOf) + ')</span>' : '') +
          (r.irregular ? '<span class="tag irr">irregular</span>' : '') + (r.level ? '<span class="tag level">' + U.esc(r.level) + '</span>' : '') + '</span>';
        li.addEventListener('mousedown', function (e) { e.preventDefault(); choose(i); });
        list.appendChild(li);
      });
      list.hidden = false; input.setAttribute('aria-expanded', 'true');
      sel = items.length ? 0 : -1; mark();
    }
    function mark() {
      [].forEach.call(list.querySelectorAll('.suggest-item'), function (li, i) { li.classList.toggle('sel', i === sel); li.setAttribute('aria-selected', i === sel ? 'true' : 'false'); });
      if (sel >= 0) input.setAttribute('aria-activedescendant', id + '-' + sel); else input.removeAttribute('aria-activedescendant');
    }
    function choose(i) { var r = items[i]; if (!r) return; list.hidden = true; input.setAttribute('aria-expanded', 'false'); opts.onChoose(r); }
    input.addEventListener('input', draw);
    input.addEventListener('focus', function () { if (input.value.trim()) draw(); });
    input.addEventListener('blur', function () { setTimeout(function () { list.hidden = true; input.setAttribute('aria-expanded', 'false'); }, 120); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); if (list.hidden) draw(); sel = Math.min(items.length - 1, sel + 1); mark(); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      else if (e.key === 'Enter') { e.preventDefault(); if (sel >= 0) choose(sel); }
      else if (e.key === 'Escape') { if (!list.hidden) { e.stopPropagation(); list.hidden = true; input.setAttribute('aria-expanded', 'false'); } else { input.value = ''; } }
    });
    return { el: wrap, input: input };
  };
})(window);
