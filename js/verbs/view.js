/* LUX — aba Verbos: página inicial (busca, recentes, favoritos, mais usados) e tela do verbo. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, C = LUX.conjugator, VS = LUX.verbSearch;

  function profile() { return LUX.profiles.current(); }

  function addRecent(inf) {
    var p = profile(); if (!p) return;
    p.verbs.recent = [inf].concat(p.verbs.recent.filter(function (x) { return x !== inf; })).slice(0, 12);
    LUX.store.save();
  }

  function chipList(infs) {
    var wrap = h('div', { class: 'chips' });
    infs.forEach(function (inf) {
      var v = VS.get(inf); if (!v) return;
      wrap.appendChild(h('a', { class: 'chip', href: '#/verbos/' + encodeURIComponent(inf) }, [h('b', { lang: 'fr' }, inf), ' ', h('span', { class: 'muted' }, v.pt[0])]));
    });
    return wrap;
  }

  /* ---------- página inicial ---------- */
  LUX.router.add('/verbos', function () {
    return {
      title: 'Verbos', nav: 'verbos', crumbs: [['Consultar', null], ['Verbos', null]],
      render: function (main) {
        main.appendChild(UI.pageHead('Verbos', 'Dicionário e conjugador. Busque em **português ou francês**: "chor", "pleur", "cours", "prefere"…'));
        var cb = VS.combobox({ onChoose: function (r) { location.hash = '#/verbos/' + encodeURIComponent(r.inf); } });
        main.appendChild(h('div', { class: 'card search-card' }, cb.el));
        setTimeout(function () { cb.input.focus(); }, 30);
        var p = profile();
        if (p && p.verbs.fav.length) main.appendChild(h('section', { class: 'card' }, [h('h2', null, '★ Favoritos'), chipList(p.verbs.fav)]));
        if (p && p.verbs.recent.length) main.appendChild(h('section', { class: 'card' }, [h('h2', null, '🕘 Vistos recentemente'), chipList(p.verbs.recent)]));
        var top = LUX.data.verbList.slice().sort(function (a, b) { return a.freq - b.freq; }).slice(0, 30).map(function (v) { return v.inf; });
        main.appendChild(h('section', { class: 'card' }, [h('h2', null, '🔝 Os 30 verbos mais usados'), chipList(top)]));
        main.appendChild(h('p', { class: 'muted sm' }, LUX.data.verbList.length + ' verbos no dicionário. Qualquer verbo do léxico também pode ser conjugado.'));
      }
    };
  });

  /* ---------- tela do verbo ---------- */
  LUX.router.add('/verbos/:inf', function (params) {
    var v = VS.get(params.inf);
    return {
      title: params.inf, nav: 'verbos', crumbs: [['Consultar', null], ['Verbos', '#/verbos'], [params.inf, null]],
      render: function (main) {
        if (!v) {
          main.appendChild(UI.empty('🔎', 'Verbo não encontrado', 'Não encontramos "' + params.inf + '". Tente a busca.', h('a', { class: 'btn primary', href: '#/verbos' }, 'Voltar à busca')));
          return;
        }
        addRecent(v.inf);
        renderVerb(main, v, params.query || {});
      }
    };
  });

  function renderVerb(main, v, query) {
    var p = profile();
    var res = C.conjugate(v.inf, v);
    var f = res.info;
    var cb = VS.combobox({ placeholder: 'Buscar outro verbo…', onChoose: function (r) { location.hash = '#/verbos/' + encodeURIComponent(r.inf); } });
    main.appendChild(h('div', { class: 'verb-search-mini' }, cb.el));

    /* 1. cabeçalho */
    var groupNo = /er$/.test(f.base) && f.base !== 'aller' ? 1 : (f.pattern === 'ir2' ? 2 : 3);
    var favOn = p && p.verbs.fav.indexOf(v.inf) >= 0;
    var favBtn = h('button', { class: 'btn ghost', 'aria-pressed': favOn ? 'true' : 'false' }, favOn ? '★ Favorito' : '☆ Favoritar');
    favBtn.addEventListener('click', function () {
      if (!p) return;
      var on = p.verbs.fav.indexOf(v.inf) >= 0;
      p.verbs.fav = on ? p.verbs.fav.filter(function (x) { return x !== v.inf; }) : [v.inf].concat(p.verbs.fav);
      LUX.store.save();
      favBtn.textContent = on ? '☆ Favoritar' : '★ Favorito'; favBtn.setAttribute('aria-pressed', on ? 'false' : 'true');
    });
    var inReview = p && LUX.srs.has(p, 'v:' + v.inf);
    var revBtn = h('button', { class: 'btn ghost' }, inReview ? '✓ Na revisão' : '+ Adicionar à revisão');
    revBtn.disabled = !!inReview;
    revBtn.addEventListener('click', function () {
      if (!p || v.partial) { UI.toast('Este verbo ainda não tem ficha completa.'); return; }
      LUX.srs.addVerb(p, v); revBtn.textContent = '✓ Na revisão'; revBtn.disabled = true; UI.toast('Verbo adicionado à revisão.', 'ok');
      LUX.sidebar.render();
    });
    var head = h('section', { class: 'card verb-head' }, [
      h('div', { class: 'verb-title' }, [
        UI.playBtn(v.inf, { title: 'Ouvir a pronúncia de ' + v.inf }),
        h('div', null, [h('h1', { lang: 'fr' }, v.inf), h('p', { class: 'verb-pt' }, v.pt.join(', '))])
      ]),
      h('div', { class: 'verb-facts' }, [
        fact('Grupo', groupNo + 'º grupo'), fact('Auxiliar', f.aux), fact('Particípio passado', f.pp), f.ppr ? fact('Particípio presente', f.ppr) : null,
        UI.levelTag(v.level), (f.pattern === 'irregular' || v.like) ? h('span', { class: 'tag irr' }, 'irregular') : null,
        f.pronominal ? h('span', { class: 'tag' }, 'pronominal') : null, f.impersonal ? h('span', { class: 'tag' }, 'impessoal (só "il")') : null
      ]),
      h('div', { class: 'row gap' }, [favBtn, revBtn])
    ]);
    main.appendChild(head);
    if (v.note || f.note || f.alt) {
      main.appendChild(h('div', { class: 'banner info' }, [h('b', null, '💡 '), h('span', { html: U.mdInline([v.note, f.note, f.alt].filter(Boolean).join(' ')) })]));
    }

    /* 2. definições */
    if (v.defPt || v.defFr) {
      main.appendChild(h('section', { class: 'card' }, [
        h('h2', null, 'Definição'),
        h('div', { class: 'defs' }, [
          v.defPt ? h('div', { class: 'def' }, [h('span', { class: 'tag' }, '🇧🇷 português'), h('p', null, v.defPt)]) : null,
          v.defFr ? h('div', { class: 'def' }, [h('span', { class: 'tag' }, '🇫🇷 français'), h('div', { class: 'row gap' }, [UI.playBtn(v.defFr, { small: true }), UI.frText(v.defFr, { block: false })])]) : null
        ])
      ]));
    } else if (v.partial) {
      main.appendChild(h('div', { class: 'banner info' }, 'Este verbo está no léxico do curso, mas ainda não tem ficha completa (definição, exemplos e sinônimos). A conjugação abaixo é gerada automaticamente.'));
    }

    /* 3. exemplos */
    if (v.examples && v.examples.length) {
      var exs = h('div', { class: 'examples' });
      v.examples.forEach(function (e) { exs.appendChild(UI.example(e.fr, e.pt, { title: 'Verbo ' + v.inf, route: '#/verbos/' + v.inf })); });
      main.appendChild(h('section', { class: 'card' }, [h('h2', null, 'Exemplos'), exs]));
    }

    /* 4. sinônimos */
    if (v.synonyms && v.synonyms.length) {
      var syn = h('div', { class: 'chips' });
      v.synonyms.forEach(function (s) {
        var exists = !!VS.get(s.fr);
        syn.appendChild(exists
          ? h('a', { class: 'chip link', href: '#/verbos/' + encodeURIComponent(s.fr) }, [h('b', { lang: 'fr' }, s.fr), ' ', h('span', { class: 'muted' }, s.pt)])
          : h('span', { class: 'chip' }, [h('b', { lang: 'fr' }, s.fr), ' ', h('span', { class: 'muted' }, s.pt)]));
      });
      main.appendChild(h('section', { class: 'card' }, [h('h2', null, 'Principais sinônimos'), syn]));
    }

    /* 5. conjugação */
    var conj = h('section', { class: 'card conj-section' });
    var showLit = false;
    var level = p ? p.settings.level : 'A2';
    var openLevels = { A2: ['A1', 'A2'], B1: ['A1', 'A2', 'B1'], B2: ['A1', 'A2', 'B1', 'B2', '—'] }[level] || ['A1', 'A2'];
    var litToggle = h('label', { class: 'switch' }, [h('input', { type: 'checkbox' }), h('span', null, 'mostrar tempos literários')]);
    var expandAll = h('button', { class: 'btn sm ghost' }, 'Expandir todos');
    var collapseAll = h('button', { class: 'btn sm ghost' }, 'Recolher todos');
    conj.appendChild(h('div', { class: 'conj-toolbar' }, [h('h2', null, 'Conjugação'), h('div', { class: 'row gap wrap' }, [UI.speedSelect(), litToggle, expandAll, collapseAll])]));
    conj.appendChild(h('p', { class: 'muted sm' }, 'Do mais simples ao mais complexo. ▶ em cada linha toca só aquela forma; "tocar todos" lê o tempo inteiro em ordem.' + (f.aux === 'être' && !f.pronominal ? ' Com o auxiliar être, o particípio concorda com o sujeito.' : '')));
    var grid = h('div', { class: 'tense-grid' });
    var root = C.root(f);
    var cards = [];
    res.tenses.forEach(function (t) {
      var tc = tenseCard(t, root, f, openLevels.indexOf(t.tense.level) >= 0 || query.t === t.tense.id);
      if (t.tense.literary) { tc.classList.add('literary'); tc.hidden = true; }
      cards.push(tc);
      grid.appendChild(tc);
    });
    conj.appendChild(grid);
    main.appendChild(conj);
    litToggle.querySelector('input').addEventListener('change', function (e) {
      showLit = e.target.checked;
      cards.forEach(function (c) { if (c.classList.contains('literary')) c.hidden = !showLit; });
    });
    expandAll.addEventListener('click', function () { cards.forEach(function (c) { c.open = true; }); });
    collapseAll.addEventListener('click', function () { cards.forEach(function (c) { c.open = false; }); });
    if (query.t) {
      var target = cards.filter(function (c) { return c.getAttribute('data-tense') === query.t; })[0];
      if (target) setTimeout(function () { target.open = true; target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 80);
    }
  }

  function fact(label, value) { return h('div', { class: 'fact' }, [h('span', { class: 'muted sm' }, label), h('b', { lang: 'fr' }, value || '—')]); }

  function tenseCard(t, root, f, open) {
    var det = h('details', { class: 'tense-card', 'data-tense': t.tense.id });
    if (open) det.open = true;
    var rowsEls = [];
    var playAll = UI.playBtn(function () { return t.rows.map(function (r) { return C.rowSpeech(r); }); }, {
      label: 'tocar todos', stopLabel: 'parar', small: true, pause: 400,
      onItem: function (i) { rowsEls.forEach(function (r, k) { r.classList.toggle('current', k === i); }); },
      onEnd: function () { rowsEls.forEach(function (r) { r.classList.remove('current'); }); }
    });
    var sum = h('summary', { class: 'tense-h' }, [
      h('span', { class: 'tense-name' }, [h('b', { lang: 'fr' }, t.tense.fr), h('span', { class: 'muted sm' }, ' (' + t.tense.pt + ')')]),
      h('span', { class: 'tense-meta' }, [UI.levelTag(t.tense.level), playAll])
    ]);
    // evita que o clique no play abra/feche o details
    playAll.addEventListener('click', function (e) { e.preventDefault(); }, true);
    det.appendChild(sum);
    var list = h('ul', { class: 'conj-rows' });
    t.rows.forEach(function (r) {
      var li = h('li', { class: 'conj-row' });
      if (r.label) li.appendChild(h('span', { class: 'conj-label muted sm' }, r.label));
      li.appendChild(h('span', { class: 'conj-text', lang: 'fr', html: highlightRow(r, root, t) }));
      li.appendChild(UI.playBtn(C.rowSpeech(r), { small: true, title: 'Ouvir: ' + C.rowDisplay(r) }));
      rowsEls.push(li);
      list.appendChild(li);
    });
    det.appendChild(list);
    return det;
  }

  /* destaca a terminação da forma verbal (cour<b>ons</b>) e marca irregularidades */
  function highlightRow(r, root, t) {
    var disp = C.rowDisplay(r);
    var form = r.form;
    if (!form || t.tense.compound || t.tense.id === 'futur_proche' || t.tense.id === 'nominales') return U.esc(disp);
    var idx = disp.lastIndexOf(form);
    if (idx < 0) return U.esc(disp);
    var i = 0;
    var nRoot = U.stripAccents(root), nForm = U.stripAccents(form);
    while (i < nForm.length && i < nRoot.length && nForm[i] === nRoot[i]) i++;
    var irregular = i < Math.min(nRoot.length, 2) || (i < nRoot.length - 1);
    var stem = form.slice(0, i), end = form.slice(i);
    return U.esc(disp.slice(0, idx)) + '<span class="' + (irregular ? 'irr-form' : '') + '">' + U.esc(stem) + '<b class="ending">' + U.esc(end) + '</b></span>' + U.esc(disp.slice(idx + form.length));
  }
})(window);
