/* LUX — aba Gramática de bolso: índice por categoria, busca com sugestões, dúvidas frequentes e tela do tópico. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui;

  var CATS = [
    ['artigos', 'Artigos e determinantes'], ['substantivos-adjetivos', 'Substantivos e adjetivos'], ['pronomes', 'Pronomes'],
    ['preposicoes', 'Preposições'], ['tempos', 'Tempos e modos verbais'], ['negacao-interrogacao', 'Negação e interrogação'],
    ['frases-complexas', 'Frases complexas'], ['conectores', 'Conectores'], ['registros', 'Registros de língua']
  ];
  var FAQ = [
    ["c'est ou il est ?", 'cest-ilest'], ['quando usar y e en?', 'pronoun-y'], ['depuis, il y a ou pendant?', 'depuis-pendant'],
    ['passé composé ou imparfait?', 'pc-vs-imparfait'], ['à ou en antes de país?', 'prepositions-places'], ['tu ou vous?', 'tu-vous'],
    ['du, de la ou de?', 'partitive'], ['mon amie ou ma amie?', 'possessives']
  ];

  function score(t, q) {
    var best = -1;
    [t.title, t.titleFr].concat(t.keywords || []).forEach(function (s) {
      var n = U.norm(s), r = n.indexOf(q) === 0 ? 0 : ((' ' + n).indexOf(' ' + q) >= 0 ? 1 : n.indexOf(q) >= 0 ? 2 : -1);
      if (r >= 0 && (best < 0 || r < best)) best = r;
    });
    return best;
  }
  function searchTopics(q) {
    q = U.norm(q);
    if (!q) return [];
    return LUX.data.grammarList.map(function (t) { return { t: t, s: score(t, q) }; }).filter(function (x) { return x.s >= 0; })
      .sort(function (a, b) { return a.s - b.s; }).slice(0, 8).map(function (x) { return x.t; });
  }

  function combobox() {
    var input = h('input', { class: 'input big', type: 'search', placeholder: 'Buscar: "pronome en", "partitivo", "du de la", "subjonctif"…', 'aria-label': 'Buscar na gramática', role: 'combobox', 'aria-expanded': 'false', autocomplete: 'off' });
    var list = h('ul', { class: 'suggest', role: 'listbox', hidden: true });
    var items = [], sel = 0;
    function draw() {
      items = searchTopics(input.value);
      list.innerHTML = '';
      if (!input.value.trim()) { list.hidden = true; return; }
      if (!items.length) list.appendChild(h('li', { class: 'suggest-empty' }, 'Nenhum tópico encontrado.'));
      items.forEach(function (t, i) {
        var li = h('li', { class: 'suggest-item', role: 'option' }, [h('span', { class: 's-main' }, [h('b', null, t.title), ' ', h('span', { class: 'muted sm', lang: 'fr' }, t.titleFr)]), h('span', { class: 's-meta' }, h('span', { class: 'tag level' }, t.level))]);
        li.addEventListener('mousedown', function (e) { e.preventDefault(); location.hash = '#/gramatica/' + t.id; });
        list.appendChild(li);
      });
      list.hidden = false; input.setAttribute('aria-expanded', 'true'); sel = 0; mark();
    }
    function mark() { [].forEach.call(list.querySelectorAll('.suggest-item'), function (li, i) { li.classList.toggle('sel', i === sel); }); }
    input.addEventListener('input', draw);
    input.addEventListener('blur', function () { setTimeout(function () { list.hidden = true; }, 120); });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); mark(); }
      if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
      if (e.key === 'Enter' && items[sel]) { e.preventDefault(); location.hash = '#/gramatica/' + items[sel].id; }
    });
    return { el: h('div', { class: 'combo' }, [input, list]), input: input };
  }

  LUX.router.add('/gramatica', function () {
    return {
      title: 'Gramática', nav: 'gramatica', crumbs: [['Consultar', null], ['Gramática', null]],
      render: function (main) {
        main.appendChild(UI.pageHead('Gramática de bolso', 'Todos os pontos gramaticais do curso, para tirar uma dúvida rápida.'));
        var cb = combobox();
        main.appendChild(h('div', { class: 'card search-card' }, cb.el));
        setTimeout(function () { cb.input.focus(); }, 30);
        var faq = h('div', { class: 'chips' });
        FAQ.forEach(function (f) { if (LUX.data.grammar[f[1]]) faq.appendChild(h('a', { class: 'chip link', href: '#/gramatica/' + f[1] }, '❓ ' + f[0])); });
        main.appendChild(h('section', { class: 'card' }, [h('h2', null, 'Dúvidas frequentes de brasileiros'), faq]));
        var grid = h('div', { class: 'cat-grid' });
        CATS.forEach(function (c) {
          var topics = LUX.data.grammarList.filter(function (t) { return t.category === c[0]; });
          var box = h('section', { class: 'card cat' }, [h('h2', null, c[1])]);
          if (!topics.length) box.appendChild(h('p', { class: 'muted sm' }, 'Tópicos deste grupo chegam com os níveis B1 e B2.'));
          else box.appendChild(h('ul', { class: 'topic-list' }, topics.map(function (t) {
            return h('li', null, h('a', { href: '#/gramatica/' + t.id }, [h('span', null, t.title), UI.levelTag(t.level)]));
          })));
          grid.appendChild(box);
        });
        main.appendChild(grid);
      }
    };
  });

  LUX.router.add('/gramatica/:id', function (params) {
    var t = LUX.data.grammar[params.id];
    var cat = t ? (CATS.filter(function (c) { return c[0] === t.category; })[0] || [0, ''])[1] : '';
    return {
      title: t ? t.title : 'Gramática', nav: 'gramatica',
      crumbs: [['Consultar', null], ['Gramática', '#/gramatica'], [cat, null], [t ? t.title : '?', null]],
      render: function (main) {
        if (!t) { main.appendChild(UI.empty('📐', 'Tópico não encontrado', null, h('a', { class: 'btn primary', href: '#/gramatica' }, 'Voltar'))); return; }
        var source = { title: 'Gramática: ' + t.title, route: '#/gramatica/' + t.id };
        main.appendChild(h('div', { class: 'page-head' }, [h('div', null, [
          h('div', { class: 'row gap' }, [UI.levelTag(t.level), h('span', { class: 'muted sm' }, cat)]),
          h('h1', null, t.title), h('p', { class: 'muted', lang: 'fr' }, t.titleFr)
        ])]));
        main.appendChild(h('div', { class: 'card oneline' }, [h('b', null, 'Em uma linha: '), h('span', { html: U.mdInline(t.summaryPt) })]));
        var c = h('section', { class: 'card' }, [h('h2', null, 'Explicação'), UI.md(t.explanationPt)]);
        (t.tables || []).forEach(function (tb) { c.appendChild(UI.table(tb)); });
        main.appendChild(c);
        var exs = h('div', { class: 'examples' });
        (t.examples || []).forEach(function (e) { exs.appendChild(UI.example(e.fr, e.pt, source)); });
        main.appendChild(h('section', { class: 'card' }, [h('h2', null, 'Exemplos'), exs]));
        var pc = t.ptComparison;
        var comp = h('section', { class: 'card compare' }, [h('h2', null, '🇧🇷 Em português é assim / 🇫🇷 em francês é assado')]);
        if (pc.same) comp.appendChild(h('div', { class: 'cmp-row' }, [h('span', { class: 'tag ok' }, 'igual'), UI.md(pc.same)]));
        if (pc.different) comp.appendChild(h('div', { class: 'cmp-row' }, [h('span', { class: 'tag warn' }, 'diferente'), UI.md(pc.different)]));
        if (pc.commonErrors && pc.commonErrors.length) {
          comp.appendChild(h('h3', null, 'Erros típicos de brasileiros'));
          comp.appendChild(h('ul', { class: 'errors' }, pc.commonErrors.map(function (e) {
            return h('li', null, [h('span', { class: 'wrong', lang: 'fr' }, '❌ ' + e.wrong), h('span', { class: 'right', lang: 'fr' }, '✅ ' + e.right), h('span', { class: 'muted sm' }, e.why)]);
          })));
        }
        main.appendChild(comp);
        if (t.quiz && t.quiz.length) {
          var quiz = h('section', { class: 'card' }, [h('h2', null, 'Teste rápido'), h('p', { class: 'muted sm' }, 'Não conta para o progresso do curso.')]);
          var right = 0, done = 0, total = t.quiz.length, res = h('div');
          t.quiz.forEach(function (ex) {
            quiz.appendChild(h('div', { class: 'ex-card plain' }, LUX.ex.render(ex, { source: source, onResult: function (s) { done++; right += s; if (done === total) res.appendChild(h('div', { class: 'banner ' + (right / total >= 0.7 ? 'ok' : 'warn') }, 'Resultado: ' + Math.round(right) + ' de ' + total + '.')); } })));
          });
          quiz.appendChild(res);
          main.appendChild(quiz);
        }
        // ligações
        var links = h('section', { class: 'card' }, [h('h2', null, 'Ligações')]);
        var lessons = Object.keys(LUX.data.lessons).map(function (k) { return LUX.data.lessons[k]; }).filter(function (l) { return l.grammar && l.grammar.topicId === t.id; });
        if (lessons.length) links.appendChild(h('p', null, ['Praticado nas lições: '].concat(lessons.map(function (l, i) { return h('a', { href: '#/licao/' + l.id, class: 'inline-link' }, (i ? ', ' : '') + l.title); }))));
        if (t.related && t.related.length) {
          links.appendChild(h('p', null, ['Veja também: '].concat(t.related.filter(function (r) { return LUX.data.grammar[r]; }).map(function (r, i) {
            return h('a', { href: '#/gramatica/' + r, class: 'inline-link' }, (i ? ' · ' : '') + LUX.data.grammar[r].title);
          }))));
        }
        if (t.verb && t.tense) links.appendChild(h('p', null, h('a', { class: 'btn sm', href: '#/verbos/' + encodeURIComponent(t.verb) + '?t=' + t.tense }, '🔤 Ver "' + t.verb + '" conjugado neste tempo →')));
        main.appendChild(links);
      }
    };
  });
})(window);
