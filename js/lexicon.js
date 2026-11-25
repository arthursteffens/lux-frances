/* LUX — léxico: resolve qualquer palavra do texto para o lema.
   Fontes: léxico geral (content/lexicon), dicionário de verbos + conjugador, números, nomes próprios.
   Funciona no navegador e no Node (usado pelo validador). */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util;
  var L = LUX.lexicon = {};
  var idx = null, idxPlain = null;

  L.POS = {
    n: 'substantivo', adj: 'adjetivo', adv: 'advérbio', prep: 'preposição', conj: 'conjunção', pron: 'pronome',
    det: 'determinante', art: 'artigo', interj: 'interjeição', expr: 'expressão', num: 'numeral', v: 'verbo'
  };

  var VOWEL = /^[aeiouyàâäéèêëîïôöûùüœæh]/i;
  var H_ASPIRE_NOUNS = { 'haricot': 1, 'héros': 1, 'hibou': 1, 'hasard': 1, 'hall': 1, 'hamburger': 1, 'handicap': 1, 'hockey': 1, 'homard': 1, 'huit': 1, 'hublot': 1, 'hâte': 1, 'haine': 1, 'hauteur': 1, 'honte': 1, 'harpe': 1 };

  function nounPlurals(w) {
    if (/[sxz]$/.test(w)) return [w];
    var out = [w + 's'];
    if (/(au|eu|eau)$/.test(w)) out.push(w + 'x');
    if (/al$/.test(w)) out.push(w.slice(0, -2) + 'aux');
    if (/ail$/.test(w)) out.push(w.slice(0, -3) + 'aux');
    return out;
  }
  function adjFeminines(w) {
    if (/e$/.test(w)) return [w];
    var out = [w + 'e'];
    if (/eux$/.test(w)) out.push(w.slice(0, -1) + 'se');
    if (/if$/.test(w)) out.push(w.slice(0, -1) + 've');
    if (/er$/.test(w)) out.push(w.slice(0, -2) + 'ère');
    if (/(el|en|on|et|il|ul)$/.test(w)) out.push(w + w.slice(-1) + 'e');
    if (/eur$/.test(w)) { out.push(w.slice(0, -1) + 'se'); out.push(w.slice(0, -3) + 'rice'); }
    if (/c$/.test(w)) out.push(w + 'he');
    return out;
  }

  /* todas as formas de uma entrada do léxico */
  L.formsOf = function (e) {
    var set = {};
    var add = function (f) { if (f) set[U.lowerFr(f)] = 1; };
    add(e.w);
    (e.f || []).forEach(add);
    if (e.p === 'n') {
      if (e.pl) add(e.pl); else nounPlurals(U.lowerFr(e.w)).forEach(add);
      if (e.fem) { add(e.fem); nounPlurals(U.lowerFr(e.fem)).forEach(add); }
    }
    if (e.p === 'adj') {
      var w = U.lowerFr(e.w);
      var fems = e.fem ? [e.fem] : adjFeminines(w);
      [w].concat(fems).forEach(function (x) { add(x); nounPlurals(x).forEach(add); });
      if (e.pl) add(e.pl);
    }
    if (e.p === 'v' && LUX.conjugator) {
      var fs = LUX.conjugator.allForms(e.w, { inf: e.w, like: e.like, pattern: e.pattern });
      Object.keys(fs).forEach(add);
    }
    return Object.keys(set);
  };

  function push(map, form, res) { (map[form] = map[form] || []).push(res); }

  L.build = function () {
    idx = {}; idxPlain = {};
    LUX.data.lexicon.forEach(function (e) {
      var res = { kind: 'lex', entry: e };
      L.formsOf(e).forEach(function (f) { push(idx, f, res); });
    });
    if (LUX.conjugator) {
      LUX.data.verbList.forEach(function (v) {
        var forms = LUX.conjugator.allForms(v.inf, v);
        Object.keys(forms).forEach(function (f) { push(idx, U.lowerFr(f), { kind: 'verb', verb: v, inf: v.inf, tense: forms[f] }); });
      });
    }
    Object.keys(idx).forEach(function (k) {
      var p = U.stripAccents(k);
      (idxPlain[p] = idxPlain[p] || []).push(k);
    });
    return idx;
  };
  L.ready = function () { return !!idx; };

  function numberResult(w) {
    var N = LUX.numbers; if (!N) return null;
    if (N.ATOMS.hasOwnProperty(w)) return { kind: 'num', value: N.ATOMS[w], word: w };
    var n = N.parseWords(w);
    if (n != null) return { kind: 'num', value: n, word: w };
    var o = N.parseOrdinal(w);
    if (o != null) return { kind: 'ord', value: o, word: w };
    return null;
  }

  /* resolve um token. Retorna lista de resultados (pode ser vazia) */
  L.lookup = function (token, opts) {
    if (!idx) L.build();
    opts = opts || {};
    var raw = String(token).replace(/’/g, "'");
    var w = U.lowerFr(raw);
    if (!w) return [];
    if (/^\d/.test(w)) return [{ kind: 'digits', word: raw }];
    var res = (idx[w] || []).slice();
    var num = numberResult(w);
    if (num) res.push(num);
    if (res.length) return dedupe(res);
    if (LUX.data.names[U.norm(raw)]) return [{ kind: 'name', word: raw }];
    if (opts.names && opts.names[U.norm(raw)]) return [{ kind: 'name', word: raw }];
    if (opts.gloss && opts.gloss[U.lowerFr(raw)]) return [{ kind: 'gloss', word: raw, gloss: opts.gloss[U.lowerFr(raw)] }];
    // palavra com hífen: tenta as partes (est-ce, dis-moi, a-t-il, quatre-vingt-dix)
    if (w.indexOf('-') > 0) {
      var parts = w.split('-').filter(Boolean);
      var sub = parts.map(function (p) {
        if (p === 't') return [{ kind: 'euph', word: 't' }];
        return L.lookup(p, opts);
      });
      if (sub.every(function (r) { return r.length; })) return [{ kind: 'compound', word: raw, parts: parts, sub: sub }];
    }
    if (/^[a-zà-ÿ]$/i.test(w) && opts.letters) return [{ kind: 'letter', word: raw }];
    if (opts.fuzzy) {
      var cands = idxPlain[U.stripAccents(w)];
      if (cands) return dedupe([].concat.apply([], cands.map(function (c) { return idx[c]; })));
    }
    return [];
  };
  function dedupe(arr) {
    var seen = {}, out = [];
    arr.forEach(function (r) {
      var k = r.kind + ':' + (r.entry ? r.entry.w + r.entry.p : r.inf || r.value || r.word);
      if (!seen[k]) { seen[k] = 1; out.push(r); }
    });
    // lex antes de verbo quando é substantivo/função; verbos depois
    return out;
  }

  L.covered = function (token, opts) { return L.lookup(token, opts).length > 0; };

  /* artigo para exibir substantivo: "la mer", "l'école", "le/la élève" */
  L.withArticle = function (e) {
    var w = e.w;
    if (e.p !== 'n') return w;
    if (e.noArticle) return w;
    var vowel = VOWEL.test(w) && !H_ASPIRE_NOUNS[U.lowerFr(w)] && !(/^h/i.test(w) && e.hAspire);
    if (e.g === 'pl') return 'les ' + w;
    if (vowel) return "l'" + w;
    if (e.g === 'f') return 'la ' + w;
    if (e.g === 'mf') return 'le / la ' + w;
    return 'le ' + w;
  };
  L.genderLabel = function (g) {
    return g === 'm' ? 'masculino' : g === 'f' ? 'feminino' : g === 'mf' ? 'masculino e feminino' : g === 'pl' ? 'plural' : '';
  };

  /* resumo amigável de um resultado, para o popup */
  L.describe = function (r) {
    if (r.kind === 'lex') {
      var e = r.entry;
      var display = L.withArticle(e);
      if (e.p === 'adj') display = e.w + (e.fem ? ' (' + e.fem + ')' : '');
      return {
        lemma: e.w, display: display, pt: e.t, pos: L.POS[e.p] || e.p, gender: e.g || null,
        genderDiffers: !!e.d, note: e.n || '', isVerb: e.p === 'v', inf: e.p === 'v' ? e.w : null, level: e.l || null
      };
    }
    if (r.kind === 'verb') {
      var tl = LUX.conjugator ? LUX.conjugator.FORM_LABEL[r.tense] : r.tense;
      return {
        lemma: r.inf, display: r.inf, pt: r.verb.pt.join(', '), pos: 'verbo', gender: null, isVerb: true, inf: r.inf,
        formOf: r.tense === 'inf' ? null : tl, level: r.verb.level
      };
    }
    if (r.kind === 'num') return { lemma: r.word, display: r.word, pt: String(r.value), pos: 'numeral', note: '= ' + r.value };
    if (r.kind === 'ord') return { lemma: r.word, display: r.word, pt: r.value + 'º', pos: 'numeral ordinal' };
    if (r.kind === 'name') return { lemma: r.word, display: r.word, pt: '(nome próprio)', pos: 'nome próprio' };
    if (r.kind === 'digits') return { lemma: r.word, display: r.word, pt: r.word, pos: 'número' };
    if (r.kind === 'letter') return { lemma: r.word, display: r.word, pt: 'letra', pos: 'letra' };
    if (r.kind === 'euph') return { lemma: 't', display: '-t-', pt: '(t eufônico, só para a pronúncia)', pos: '' };
    if (r.kind === 'compound') {
      var subs = r.sub.map(function (s) { return L.describe(s[0]); });
      return {
        lemma: r.word, display: r.word, pt: subs.map(function (d) { return d.display + ' = ' + d.pt; }).join(' + '),
        pos: 'palavra composta', parts: subs
      };
    }
    return { lemma: String(r.word || ''), display: String(r.word || ''), pt: '', pos: '' };
  };
})(typeof window !== 'undefined' ? window : globalThis);
