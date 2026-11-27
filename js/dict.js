/* LUX — dicionário completo francês ↔ português (aba Dicionário).
   Os dados (dict/fr-pt.<hash>.json, gerado por tools/build-dict.js a partir do Wiktionary) ficam fora da instalação:
   são baixados na primeira vez que a pessoa abre o dicionário e depois ficam guardados no aparelho (service worker).
   As palavras do curso (léxico + verbos com ficha) entram junto e aparecem primeiro, com as notas do curso.
   Os verbos do dicionário também passam a aparecer na aba Verbos (tradução + conjugação, sem ficha). */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui;
  var D = LUX.dict = { state: 'idle', list: [], verbs: [] };
  var READY_KEY = 'lux-fr:dict-file';   // último arquivo baixado com sucesso neste aparelho
  var listeners = [];

  D.info = function () { return LUX.dictIndex || null; };
  D.available = function () { return !!D.info(); };
  D.ready = function () { return D.state === 'ready'; };
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { } }
  /* já foi baixado neste aparelho (alguma versão)? então pode carregar sem perguntar */
  D.downloaded = function () { return !!lsGet(READY_KEY); };
  D.sizeLabel = function () { var i = D.info(); return i ? (i.gzip / 1048576).toFixed(1).replace('.', ',') + ' MB' : ''; };
  D.onChange = function (fn) { listeners.push(fn); };
  function notify() { listeners = listeners.filter(function (fn) { try { return fn(D.state) !== false; } catch (e) { return false; } }); }

  /* ---------- carga ---------- */
  D.load = function () {
    if (D.state === 'ready') return Promise.resolve(D);
    if (D.promise) return D.promise;
    var info = D.info();
    if (!info) return Promise.reject(new Error('dicionário indisponível'));
    D.state = 'loading'; D.error = null; notify();
    D.promise = fetch(info.file).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (data) {
      build(data);
      D.state = 'ready';
      lsSet(READY_KEY, info.file);
      if (LUX.verbSearch) {
        LUX.verbSearch.reset();
        // prepara o índice de verbos (≈0,3 s) sem travar a primeira busca
        setTimeout(function () { try { LUX.verbSearch.formLookup('x'); } catch (e) { } }, 300);
      }
      notify();
      return D;
    }, function (e) {
      D.state = 'error'; D.error = e; D.promise = null; notify();
      throw e;
    });
    return D.promise;
  };
  /* carrega sozinho se a pessoa já baixou antes (ex.: abrir Verbos depois de usar o dicionário) */
  D.autoLoad = function () { if (D.available() && D.downloaded() && D.state === 'idle') D.load().catch(function () { }); };

  var byKey = {}, ptTerms = [], ptOwner = [];
  function splitPt(s) { return String(s || '').split(/\s*;\s*/).filter(Boolean); }

  function build(data) {
    var list = [], seen = {};
    byKey = {}; ptTerms = []; ptOwner = [];
    // palavras do curso: entram primeiro e "marcam" a entrada correspondente do dicionário
    var course = {};
    LUX.data.lexicon.forEach(function (e) { if (e.p !== 'v') course[U.norm(e.w) + '|' + e.p] = { lex: e }; });
    LUX.data.lexicon.forEach(function (e) { if (e.p === 'v') course[U.norm(e.w) + '|v'] = { lex: e }; });
    LUX.data.verbList.forEach(function (v) { var k = U.norm(v.inf) + '|v'; course[k] = Object.assign(course[k] || {}, { verb: v }); });
    data.e.forEach(function (r) {
      var e = { w: r[0], p: r[1], g: r[2] || '', pt: r[3] || '', ipa: r[4] || '', x: r[5] || null, k: U.norm(r[0]) };
      var ck = e.k + '|' + e.p;
      if (course[ck]) { e.course = course[ck]; seen[ck] = 1; }
      list.push(e);
    });
    Object.keys(course).forEach(function (ck) {
      if (seen[ck]) return;
      var c = course[ck], lx = c.lex, vb = c.verb;
      list.push({ w: lx ? lx.w : vb.inf, p: lx ? lx.p : 'v', g: lx && lx.g || '', pt: '', ipa: '', x: null, k: ck.split('|')[0], course: c });
    });
    list.forEach(function (e, i) {
      e.i = i;
      (byKey[e.k] = byKey[e.k] || []).push(e);
      var terms = splitPt(e.pt);
      if (e.course) terms = courseTerms(e.course).concat(terms);
      e.terms = terms;
      var done = {};
      terms.forEach(function (t) {
        var n = U.norm(t.replace(/\([^)]*\)/g, '').replace(/["“”]/g, '')).trim();
        if (!n || done[n]) return;
        done[n] = 1; ptTerms.push(n); ptOwner.push(i);
      });
    });
    D.list = list;
    // verbos do dicionário (para a aba Verbos e a busca por forma conjugada)
    var verbs = [];
    list.forEach(function (e) {
      if (e.p !== 'v' || e.course) return;
      var x = e.x || {};
      if (x.t) {
        var base = LUX.conjugator.parseInf(e.w).base;
        if (!LUX.data.irregular[base]) LUX.registerIrregular(base, x.t);
      }
      var pt = splitPt(e.pt);
      verbs.push({
        inf: e.w, pt: pt, level: null, freq: pt.length ? 9000 + e.w.length : 9500 + e.w.length, ext: true, irr: !!(x.t || x.l || x.pt),
        like: x.l, pattern: x.pt, aux: x.a ? 'être' : undefined, def: x.d || '', ipa: e.ipa, partial: !pt.length, examples: [], synonyms: []
      });
    });
    if (LUX.conjugator._resetCache) LUX.conjugator._resetCache();
    D.verbs = verbs;
  }
  function courseTerms(c) {
    var out = [];
    if (c.lex && c.lex.t) out = out.concat(String(c.lex.t).replace(/"[^"]*"\s*=\s*/g, '').split(/\s*[;,]\s*/));
    if (c.verb) out = out.concat(c.verb.pt);
    return out.filter(function (t) { return t && t.length < 60; });
  }

  /* ---------- busca ---------- */
  function score(key, q) {
    if (key === q) return 0;
    if (key.indexOf(q) === 0) return 1;
    if ((' ' + key).indexOf(' ' + q) >= 0 || key.indexOf("'" + q) >= 0 || key.indexOf('-' + q) >= 0) return 2;
    if (q.length >= 3 && key.indexOf(q) >= 0) return 3;
    return -1;
  }
  function rank(a, b) {
    if (a.s !== b.s) return a.s - b.s;
    var ca = a.e.course ? 0 : 1, cb = b.e.course ? 0 : 1;
    if (ca !== cb) return ca - cb;
    var pa = a.e.pt || a.e.course ? 0 : 1, pb = b.e.pt || b.e.course ? 0 : 1;
    if (pa !== pb) return pa - pb;
    if (a.e.p === 'np' && b.e.p !== 'np') return 1;
    if (b.e.p === 'np' && a.e.p !== 'np') return -1;
    return a.e.w.length - b.e.w.length || (a.e.w < b.e.w ? -1 : 1);
  }

  /* resultados: [{e, s, dir:'fr'|'pt', term, formOf}] */
  D.search = function (query, limit) {
    if (D.state !== 'ready') return [];
    limit = limit || 40;
    var q = U.norm(query).replace(/\s+/g, ' ').trim();
    if (!q) return [];
    var best = {};
    function put(e, s, dir, term, formOf) {
      var prev = best[e.i];
      if (!prev || s < prev.s) best[e.i] = { e: e, s: s, dir: dir, term: term || null, formOf: formOf || null };
    }
    var list = D.list, i, s, exactPt = false;
    for (i = 0; i < list.length; i++) { s = score(list[i].k, q); if (s >= 0) put(list[i], s, 'fr'); }
    for (i = 0; i < ptTerms.length; i++) {
      s = score(ptTerms[i], q);
      if (s === 0) exactPt = true;
      if (s >= 0) put(list[ptOwner[i]], s + 0.25, 'pt', ptTerms[i]);
    }
    // palavra flexionada: chevaux → cheval, belles → beau, mangeons → manger (se não for uma palavra conhecida)
    if (!(byKey[q] || []).length && !exactPt && q.length >= 2) D.formsOf(query).forEach(function (f) { put(f.e, 0.5, 'fr', null, f.label); });
    var out = Object.keys(best).map(function (k) { return best[k]; });
    out.sort(rank);
    return out.slice(0, limit);
  };

  /* lemas possíveis para uma forma flexionada */
  var NOUN_RULES = [[/aux$/, ['al', 'ail', 'au']], [/eaux$/, ['eau']], [/eux$/, ['eu', 'eux']], [/s$/, ['']], [/x$/, ['']]];
  var FEM_RULES = [[/euse$/, ['eux', 'eur']], [/trice$/, ['teur']], [/ive$/, ['if']], [/ère$/, ['er']], [/(el|en|on|et|il)le$/, ['$1']],
    [/(en|on)ne$/, ['$1']], [/(et)te$/, ['$1']], [/che$/, ['c']], [/e$/, ['']], [/elle$/, ['eau']], [/olle$/, ['ou']]];
  function applyRules(w, rules) {
    var out = [];
    rules.forEach(function (r) { if (r[0].test(w)) r[1].forEach(function (rep) { out.push(w.replace(r[0], rep)); }); });
    return out;
  }
  D.formsOf = function (raw) {
    var w = U.lowerFr(raw).replace(/’/g, "'"), out = [], seen = {};
    function add(e, label) { var k = e.i; if (seen[k]) return; seen[k] = 1; out.push({ e: e, label: label }); }
    var cands = {};
    applyRules(w, NOUN_RULES).forEach(function (c) { cands[c] = 'plural'; });
    var fems = [w].concat(Object.keys(cands));
    fems.forEach(function (x) { applyRules(x, FEM_RULES).forEach(function (c) { if (!cands[c]) cands[c] = x === w ? 'feminino' : 'feminino plural'; }); });
    Object.keys(cands).forEach(function (c) {
      var fem = /feminino/.test(cands[c]);
      (byKey[U.norm(c)] || []).forEach(function (e) {
        if ((e.p === 'adj' || (e.p === 'n' && !fem)) && U.norm(e.w) !== U.norm(w)) add(e, cands[c] + ' de ' + e.w);
      });
    });
    // formas verbais (verbos do curso e do dicionário)
    if (LUX.verbSearch && LUX.verbSearch.formLookup) {
      LUX.verbSearch.formLookup(w).forEach(function (r) {
        (byKey[U.norm(r.v.inf)] || []).filter(function (e) { return e.p === 'v'; }).forEach(function (e) {
          add(e, 'forma de ' + r.v.inf + ' (' + (LUX.conjugator.FORM_LABEL[r.tense] || r.tense) + ')');
        });
      });
    }
    return out;
  };
  D.entries = function (w) { return D.state === 'ready' ? (byKey[U.norm(w)] || []).filter(function (e) { return U.lowerFr(e.w) === U.lowerFr(w); }).concat((byKey[U.norm(w)] || []).filter(function (e) { return U.lowerFr(e.w) !== U.lowerFr(w); })) : []; };

  /* ---------- exibição ---------- */
  var POS = { n: 'substantivo', adj: 'adjetivo', adv: 'advérbio', prep: 'preposição', conj: 'conjunção', pron: 'pronome', det: 'determinante',
    art: 'artigo', interj: 'interjeição', expr: 'expressão', num: 'numeral', v: 'verbo', np: 'nome próprio' };
  D.POS = POS;
  D.display = function (e) {
    if (e.p !== 'n') return e.w;
    var lx = e.course && e.course.lex;
    if (lx) return LUX.lexicon.withArticle(lx);
    return e.g ? LUX.lexicon.withArticle({ w: e.w, p: 'n', g: e.g }) : e.w;
  };
  D.translation = function (e) {
    var c = e.course;
    if (c && c.lex && c.lex.t) return c.lex.t;
    if (c && c.verb) return c.verb.pt.join(', ');
    return e.pt ? splitPt(e.pt).join(', ') : '';
  };
  function href(e) { return '#/dicionario/' + encodeURIComponent(e.w) + (e.p ? '?p=' + e.p : ''); }
  D.href = href;

  function recentKey() { var p = LUX.profiles.current(); return 'lux-fr:dict-recent:' + (p ? p.id : '-'); }
  function recent() { try { return JSON.parse(lsGet(recentKey()) || '[]'); } catch (e) { return []; } }
  function addRecent(w) { lsSet(recentKey(), JSON.stringify([w].concat(recent().filter(function (x) { return x !== w; })).slice(0, 15))); }

  /* caixa de estado do download (usada também na aba Verbos) */
  D.statusBox = function (opts) {
    opts = opts || {};
    var box = h('div', { class: 'card dict-status' });
    function draw() {
      if (!box.isConnected && box._drawn) return false;
      box._drawn = true;
      box.innerHTML = '';
      var info = D.info();
      if (!info) { box.appendChild(h('p', { class: 'muted' }, 'O dicionário completo ainda não está disponível nesta versão.')); return; }
      if (D.state === 'ready') { box.hidden = !!opts.hideWhenReady; return; }
      box.hidden = false;
      if (D.state === 'loading') {
        box.appendChild(h('div', { class: 'row gap' }, [h('span', { class: 'spinner', 'aria-hidden': 'true' }),
          h('span', null, 'Baixando o dicionário completo (' + D.sizeLabel() + ')… Só na primeira vez: depois ele funciona offline.')]));
        return;
      }
      if (D.state === 'error') {
        box.appendChild(h('p', null, '⚠️ Não foi possível baixar o dicionário. Verifique a conexão e tente de novo.'));
      } else {
        box.appendChild(h('p', null, opts.prompt || ('O dicionário completo tem ' + info.entries.toLocaleString('pt-BR') + ' palavras e ' +
          info.verbs.toLocaleString('pt-BR') + ' verbos. Ele é baixado uma vez (' + D.sizeLabel() + ') e depois funciona offline.')));
      }
      box.appendChild(h('button', { class: 'btn primary', onclick: function () { D.load().catch(function () { }); } }, D.state === 'error' ? 'Tentar de novo' : '⬇ Baixar o dicionário (' + D.sizeLabel() + ')'));
    }
    draw();
    D.onChange(draw);
    return box;
  };

  function resultItem(r, q) {
    var e = r.e;
    var meta = [h('span', { class: 'tag' }, POS[e.p] || e.p)];
    if (e.p === 'n' && (e.g || (e.course && e.course.lex && e.course.lex.g))) meta.push(h('span', { class: 'tag g-' + (e.course && e.course.lex ? e.course.lex.g : e.g) }, LUX.lexicon.genderLabel(e.course && e.course.lex ? e.course.lex.g : e.g)));
    if (e.course) meta.push(h('span', { class: 'tag course', title: 'Palavra do curso, com notas revisadas' }, '📘 curso'));
    var tr = D.translation(e) || (e.x && e.x.d ? '(fr) ' + e.x.d : '');
    var main = h('span', { class: 'dict-r-main' }, [
      h('b', { lang: 'fr', html: LUX.verbSearch.highlight(D.display(e), r.dir === 'fr' ? q : '') }),
      r.formOf ? h('span', { class: 'muted sm' }, ' — ' + r.formOf) : null,
      h('span', { class: 'dict-r-pt', html: (r.dir === 'pt' ? LUX.verbSearch.highlight(tr, q) : U.esc(tr)) })
    ]);
    return h('li', null, h('a', { class: 'dict-r', href: href(e) }, [main, h('span', { class: 'dict-r-meta' }, meta)]));
  }

  /* ---------- página: busca ---------- */
  LUX.router.add('/dicionario', function (params) {
    return {
      title: 'Dicionário', nav: 'dicionario', crumbs: [['Consultar', null], ['Dicionário', null]],
      render: function (main) {
        main.appendChild(UI.pageHead('📖 Dicionário', 'Francês ↔ português. Digite em **qualquer das duas línguas**; palavras flexionadas também valem ("chevaux", "mangeons").'));
        var input = h('input', { class: 'input big', type: 'search', placeholder: 'Buscar palavra em francês ou português…', autocomplete: 'off', spellcheck: 'false', 'aria-label': 'Buscar no dicionário' });
        input.value = params.query.q || '';
        main.appendChild(h('div', { class: 'card search-card' }, input));
        main.appendChild(D.statusBox({ hideWhenReady: true }));
        var out = h('div', { class: 'dict-results', 'aria-live': 'polite' });
        main.appendChild(out);
        main.appendChild(h('p', { class: 'muted sm dict-credit' }, 'Dados: Wiktionary em francês e em português (licença CC BY-SA 4.0), sem revisão — podem ter erros ou traduções em português de Portugal. As palavras marcadas 📘 curso têm a tradução revisada do curso.'));
        var timer = null;
        function draw() {
          out.innerHTML = '';
          var q = input.value.trim();
          if (D.state !== 'ready') return;
          if (!q) {
            var rec = recent();
            if (rec.length) {
              var chips = h('div', { class: 'chips' });
              rec.forEach(function (w) { chips.appendChild(h('a', { class: 'chip', href: '#/dicionario/' + encodeURIComponent(w), lang: 'fr' }, w)); });
              out.appendChild(h('section', { class: 'card' }, [h('h2', null, '🕘 Vistas recentemente'), chips]));
            }
            out.appendChild(h('p', { class: 'muted' }, (D.info().entries).toLocaleString('pt-BR') + ' palavras e ' + D.verbs.length.toLocaleString('pt-BR') + ' verbos com conjugação.'));
            return;
          }
          var res = D.search(q, 50);
          if (!res.length) { out.appendChild(UI.empty('🔎', 'Nada encontrado', 'Nenhuma palavra para "' + q + '". Confira a grafia ou tente outra forma da palavra.')); return; }
          out.appendChild(h('ul', { class: 'dict-list' }, res.map(function (r) { return resultItem(r, q); })));
        }
        input.addEventListener('input', function () {
          clearTimeout(timer);
          timer = setTimeout(function () {
            draw();
            var hash = '#/dicionario' + (input.value.trim() ? '?q=' + encodeURIComponent(input.value.trim()) : '');
            try { history.replaceState(history.state, '', hash); } catch (e) { }
          }, 120);
        });
        D.onChange(function () { if (!main.contains(input)) return false; draw(); });
        if (D.state === 'idle') D.load().catch(function () { });
        draw();
        setTimeout(function () { input.focus(); }, 30);
      }
    };
  });

  /* ---------- página: palavra ---------- */
  LUX.router.add('/dicionario/:w', function (params) {
    var w = params.w;
    return {
      title: w, nav: 'dicionario', crumbs: [['Consultar', null], ['Dicionário', '#/dicionario'], [w, null]],
      render: function (main) {
        var box = h('div');
        main.appendChild(D.statusBox({ hideWhenReady: true }));
        main.appendChild(box);
        function draw() {
          box.innerHTML = '';
          if (D.state !== 'ready') return;
          var list = D.entries(w).filter(function (e) { return U.lowerFr(e.w) === U.lowerFr(w); });
          if (params.query.p) list.sort(function (a, b) { return (a.p === params.query.p ? 0 : 1) - (b.p === params.query.p ? 0 : 1); });
          if (!list.length) {
            box.appendChild(UI.empty('🔎', 'Palavra não encontrada', '"' + w + '" não está no dicionário.', h('a', { class: 'btn primary', href: '#/dicionario?q=' + encodeURIComponent(w) }, 'Buscar')));
            return;
          }
          addRecent(list[0].w);
          list.forEach(function (e) { box.appendChild(entryCard(e)); });
          box.appendChild(h('p', { class: 'muted sm dict-credit' }, 'Fonte: Wiktionary (francês e português), CC BY-SA 4.0. Traduções sem revisão; as do 📘 curso são revisadas.'));
        }
        D.onChange(function () { if (!main.contains(box)) return false; draw(); });
        if (D.state === 'idle') D.load().catch(function () { });
        draw();
      }
    };
  });

  function entryCard(e) {
    var p = LUX.profiles.current();
    var c = e.course || {}, lx = c.lex, vb = c.verb;
    var display = D.display(e);
    var card = h('section', { class: 'card dict-entry' });
    card.appendChild(h('div', { class: 'dict-head' }, [
      UI.playBtn(e.w, { title: 'Ouvir: ' + e.w }),
      h('div', null, [
        h('h1', { lang: 'fr' }, display),
        h('div', { class: 'dict-meta' }, [
          e.ipa ? h('span', { class: 'muted ipa' }, '/' + e.ipa + '/') : null,
          h('span', { class: 'tag' }, POS[e.p] || e.p),
          (lx && lx.g || e.g) && e.p === 'n' ? h('span', { class: 'tag g-' + (lx && lx.g || e.g) }, LUX.lexicon.genderLabel(lx && lx.g || e.g)) : null,
          lx && lx.l ? UI.levelTag(lx.l) : vb ? UI.levelTag(vb.level) : null
        ])
      ])
    ]));
    if (lx || vb) {
      var cb = h('div', { class: 'dict-course' }, [h('div', { class: 'muted sm' }, '📘 No curso'), h('div', { class: 'dict-course-pt' }, lx ? lx.t : vb.pt.join(', '))]);
      if (lx && lx.d) cb.appendChild(h('div', { class: 'warn-line' }, '⚠ gênero diferente do português'));
      if (lx && lx.n) cb.appendChild(h('p', { class: 'popup-note', html: U.mdInline(lx.n) }));
      card.appendChild(cb);
    }
    var known = {};
    if (lx || vb) courseTerms(c).forEach(function (t) { known[U.norm(t)] = 1; });
    var tr = splitPt(e.pt).filter(function (t) { return !known[U.norm(t)]; });
    if (tr.length) {
      card.appendChild(h('h2', null, lx || vb ? 'Outras traduções (Wiktionary)' : 'Traduções'));
      card.appendChild(h('ol', { class: 'dict-tr' }, tr.map(function (t) { return h('li', null, t); })));
    } else if (e.x && e.x.d) {
      card.appendChild(h('h2', null, 'Definição em francês'));
      card.appendChild(h('div', { class: 'row gap' }, [UI.playBtn(e.x.d, { small: true }), h('p', { lang: 'fr' }, e.x.d)]));
      card.appendChild(h('p', { class: 'muted sm' }, 'Esta palavra ainda não tem tradução para o português no Wiktionary.'));
    }
    var actions = h('div', { class: 'row gap wrap' });
    if (e.p === 'v') actions.appendChild(h('a', { class: 'btn', href: '#/verbos/' + encodeURIComponent(e.w) }, '🔤 Ver conjugação'));
    if (p) {
      var key = U.norm(e.w);
      var ptText = D.translation(e);
      var saved = !!p.notebook[key];
      var sb = h('button', { class: 'btn' + (saved ? '' : ' primary') }, saved ? '★ Salvo no caderno' : '☆ Salvar no caderno');
      sb.addEventListener('click', function () {
        if (p.notebook[key]) { LUX.notebook.remove(p, key); sb.textContent = '☆ Salvar no caderno'; sb.classList.add('primary'); UI.toast('Removido do caderno.'); return; }
        if (!ptText) { UI.toast('Esta palavra não tem tradução para salvar.'); return; }
        LUX.notebook.save(p, { key: key, fr: display, lemma: e.w, pt: ptText, pos: POS[e.p] || '', gender: e.p === 'n' ? (lx && lx.g || e.g || null) : null,
          genderDiffers: !!(lx && lx.d), isVerb: e.p === 'v', sentence: '', source: null });
        sb.textContent = '★ Salvo no caderno'; sb.classList.remove('primary'); UI.toast('Salvo no caderno.', 'ok');
      });
      actions.appendChild(sb);
    }
    card.appendChild(actions);
    return card;
  }
})(window);
