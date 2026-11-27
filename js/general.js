/* LUX — aba Gerais: índice e renderizador das páginas (blocos dirigidos por dados) + ferramentas interativas. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, N = LUX.numbers;
  var GEN = LUX.general = { tools: {} };

  function pageMeta(id) {
    var out = null;
    (LUX.generalManifest || []).forEach(function (gr) { gr.pages.forEach(function (p) { if (p.id === id) out = { page: p, group: gr }; }); });
    return out;
  }

  LUX.router.add('/gerais', function () {
    return {
      title: 'Gerais', nav: 'gerais', crumbs: [['Consultar', null], ['Gerais', null]],
      render: function (main) {
        main.appendChild(UI.pageHead('Gerais', 'O essencial do dia a dia, para consultar a qualquer momento: números, horas, datas, alfabeto e muito mais.'));
        (LUX.generalManifest || []).forEach(function (gr) {
          var grid = h('div', { class: 'gen-grid' });
          gr.pages.forEach(function (p) {
            var avail = !!LUX.data.general[p.id];
            grid.appendChild(h('a', { class: 'gen-card' + (avail ? '' : ' soon'), href: '#/gerais/' + p.id }, [
              h('span', { class: 'gen-ico', 'aria-hidden': 'true' }, p.icon),
              h('span', null, [h('b', null, p.title), h('span', { class: 'muted sm' }, p.desc)]),
              avail ? null : h('span', { class: 'soon-tag' }, 'em breve')
            ]));
          });
          main.appendChild(h('section', { class: 'gen-group' }, [h('h2', { class: 'section-title' }, gr.title), grid]));
        });
      }
    };
  });

  LUX.router.add('/gerais/:id', function (params) {
    var meta = pageMeta(params.id);
    var page = LUX.data.general[params.id];
    return {
      title: meta ? meta.page.title : 'Gerais', nav: 'gerais/' + params.id,
      crumbs: [['Gerais', '#/gerais'], [meta ? meta.group.title : '', null], [meta ? meta.page.title : params.id, null]],
      render: function (main) {
        if (!meta) { main.appendChild(UI.empty('🗂', 'Página não encontrada', null, h('a', { class: 'btn primary', href: '#/gerais' }, 'Ver todas'))); return; }
        if (!page) {
          main.appendChild(UI.pageHead(meta.page.icon + ' ' + meta.page.title, meta.page.desc));
          main.appendChild(UI.empty('🚧', 'Em breve', 'Esta página chega na próxima fase do curso.', h('a', { class: 'btn primary', href: '#/gerais' }, 'Ver as páginas disponíveis')));
          return;
        }
        renderPage(main, page, meta);
      }
    };
  });

  function renderPage(main, page, meta) {
    var source = { title: 'Gerais: ' + meta.page.title, route: '#/gerais/' + page.id };
    var p = LUX.profiles.current();
    var addAll = h('button', { class: 'btn ghost sm' }, '+ Enviar a página para a revisão');
    addAll.addEventListener('click', function () {
      var n = 0;
      allItems(page).forEach(function (it) { n += LUX.srs.addWord(p, { fr: it.fr, display: it.fr, lemma: it.fr, pt: it.pt, source: page.id }); });
      UI.toast(n ? n + ' cartões criados.' : 'Os itens já estavam na revisão.', 'ok');
      LUX.sidebar.render();
    });
    main.appendChild(h('div', { class: 'page-head' }, [h('div', null, [
      h('div', { class: 'row gap' }, [UI.levelTag(page.level), h('span', { class: 'muted sm' }, meta.group.title)]),
      h('h1', null, meta.page.icon + ' ' + page.title), h('p', { class: 'muted', lang: 'fr' }, page.titleFr)
    ]), h('div', { class: 'row gap wrap' }, [UI.speedSelect(), addAll])]));
    page.blocks.forEach(function (b) {
      var fn = BLOCKS[b.type];
      if (fn) main.appendChild(fn(b, page, source));
    });
  }

  /* itens das tabelas (inclusive os gerados por números/horas/datas) */
  function expandSection(s) {
    if (s.items) return s.items;
    var out = [];
    if (s.numbers) for (var n = s.numbers[0]; n <= s.numbers[1]; n++) out.push({ fr: N.toWords(n), pt: String(n) });
    if (s.list) s.list.forEach(function (n) { out.push({ fr: N.toWords(n), pt: n >= 1000 ? n.toLocaleString('pt-BR').replace(/\./g, ' ') : String(n) }); });
    if (s.ordinals) s.ordinals.forEach(function (n) { out.push({ fr: N.ordinal(n), pt: n + 'º', note: N.ordinalAbbr(n) }); });
    if (s.times) s.times.forEach(function (t) {
      out.push({ fr: s.style === 'colloquial' ? N.timeColloquial(t[0], t[1]) : N.timeFormal(t[0], t[1]), pt: t[0] + 'h' + U.pad(t[1]) });
    });
    if (s.dates) s.dates.forEach(function (d) { out.push({ fr: N.dateWords(d[0], d[1], d[2]), pt: U.pad(d[0]) + '/' + U.pad(d[1]) + (d[2] ? '/' + d[2] : '') }); });
    return out;
  }
  function allItems(page) {
    var out = [];
    page.blocks.forEach(function (b) { if (b.type === 'table') b.sections.forEach(function (s) { out = out.concat(expandSection(s)); }); });
    return out;
  }

  var BLOCKS = {
    intro: function (b) { return h('div', { class: 'card intro' }, UI.md(b.textPt)); },
    tip: function (b) { return h('div', { class: 'card tip-card' }, [h('h2', null, b.title || '💡 Dica para brasileiros'), UI.md(b.textPt)]); },
    /* estudo de caso: situação + resposta escondida (pense antes de abrir) */
    case: function (b) {
      var ans = h('details', { class: 'case-answer' }, [h('summary', null, 'Ver a resposta comentada'), UI.md(b.answerPt)]);
      return h('section', { class: 'card case-card' }, [h('h2', null, b.title || '🧩 Estudo de caso'), UI.md(b.textPt),
        h('p', { class: 'muted sm' }, 'Pense na sua resposta antes de abrir.'), ans]);
    },
    table: function (b, page, source) {
      var wrap = h('div', { class: 'gen-tables' });
      b.sections.forEach(function (s) {
        var items = expandSection(s);
        var rows = [];
        var card = h('section', { class: 'card gen-table' });
        var playAll = UI.playBtn(function () { return items.map(function (it) { return it.tts || it.fr; }); }, {
          label: 'tocar todos', small: true, pause: s.letters ? 300 : 450,
          onItem: function (i) { rows.forEach(function (r, k) { r.classList.toggle('current', k === i); }); if (rows[i]) rows[i].scrollIntoView({ block: 'nearest' }); },
          onEnd: function () { rows.forEach(function (r) { r.classList.remove('current'); }); }
        });
        card.appendChild(h('div', { class: 'row between wrap' }, [h('h2', null, s.title), playAll]));
        if (s.note) card.appendChild(h('p', { class: 'muted sm' }, s.note));
        // wide: uma linha por item, com explicação longa (aceita **negrito**), ex.: a pronúncia de cada letra
        var ul = h('ul', { class: 'gen-rows' + (s.letters ? ' letters' : '') + (s.wide ? ' wide' : '') });
        items.forEach(function (it) {
          var li = h('li', { class: 'gen-row' }, [
            UI.playBtn(it.tts || it.fr, { small: true, title: 'Ouvir: ' + it.fr }),
            h('span', { class: 'gen-fr', lang: 'fr' }, s.letters ? h('b', { class: 'letter' }, it.fr) : UI.frText(it.fr, { block: false, gloss: false, source: source, inline: true })),
            s.wide ? h('span', { class: 'gen-pt', html: U.md(it.pt).replace(/^<p>|<\/p>$/g, '') }) : h('span', { class: 'gen-pt' }, it.pt),
            it.note ? h('span', { class: 'gen-note muted sm' }, it.note) : null
          ]);
          rows.push(li);
          ul.appendChild(li);
        });
        card.appendChild(ul);
        wrap.appendChild(card);
      });
      return wrap;
    },
    rules: function (b, page, source) {
      var c = h('section', { class: 'card' }, [h('h2', null, 'Regras e usos')]);
      b.items.forEach(function (r) {
        var box = h('div', { class: 'rule' }, [h('h3', { html: U.mdInline(r.title) }), h('p', { html: U.mdInline(r.textPt) })]);
        if (r.examples) {
          var exs = h('div', { class: 'examples compact' });
          r.examples.forEach(function (e) { exs.appendChild(UI.example(e.fr, e.pt, source)); });
          box.appendChild(exs);
        }
        c.appendChild(box);
      });
      return c;
    },
    phrases: function (b, page, source) {
      var exs = h('div', { class: 'examples' });
      b.items.forEach(function (e) { exs.appendChild(UI.example(e.fr, e.pt, source)); });
      return h('section', { class: 'card' }, [h('div', { class: 'row between' }, [h('h2', null, 'Frases prontas'),
        UI.playBtn(b.items.map(function (e) { return e.fr; }), { label: 'tocar todas', small: true, pause: 600 })]), exs]);
    },
    tool: function (b) {
      var fn = GEN.tools[b.tool];
      return h('section', { class: 'card tool' }, fn ? fn() : h('p', null, 'Ferramenta indisponível.'));
    },
    quiz: function (b, page, source) {
      var c = h('section', { class: 'card' }, [h('h2', null, 'Teste rápido'), h('p', { class: 'muted sm' }, 'Não conta para o progresso do curso.')]);
      b.items.forEach(function (ex) { c.appendChild(h('div', { class: 'ex-card plain' }, LUX.ex.render(ex, { source: source }))); });
      return c;
    },
    links: function (b) {
      return h('section', { class: 'card links' }, [h('h2', null, 'Ligações'), h('div', { class: 'chips' }, b.items.map(function (l) {
        var ext = /^https?:/.test(l.to);
        return h('a', { class: 'chip link', href: l.to, target: ext ? '_blank' : null, rel: ext ? 'noopener' : null }, l.label + (ext ? ' ↗' : ' →'));
      }))]);
    }
  };
  /* usados também pela aba Profissional (guias com os mesmos blocos) */
  GEN.renderBlocks = function (main, page, source) {
    page.blocks.forEach(function (b) { var fn = BLOCKS[b.type]; if (fn) main.appendChild(fn(b, page, source)); });
  };
  GEN.allItems = function (page) { return allItems(page); };

  /* ---------- ferramentas ---------- */
  function variantSelect() {
    return h('select', { class: 'select sm', 'aria-label': 'Variante' }, [h('option', { value: 'fr' }, 'França'), h('option', { value: 'be' }, 'Bélgica'), h('option', { value: 'ch' }, 'Suíça')]);
  }

  GEN.tools['number-converter'] = function () {
    var inp = h('input', { class: 'input big', type: 'text', inputmode: 'numeric', placeholder: 'Digite um número, ex.: 97', 'aria-label': 'Número', value: '97' });
    var vs = variantSelect();
    var out = h('div', { class: 'tool-out', lang: 'fr', 'aria-live': 'polite' });
    var play = UI.playBtn(function () { return out.textContent; }, { label: 'ouvir' });
    function draw() {
      var n = parseInt(inp.value.replace(/\D/g, ''), 10);
      if (isNaN(n)) { out.textContent = '—'; return; }
      if (n > 999999999) { out.textContent = 'Número grande demais (máx. 999 999 999).'; return; }
      out.textContent = N.toWords(n, { variant: vs.value });
    }
    inp.addEventListener('input', draw); vs.addEventListener('change', draw); draw();
    return [h('h2', null, '🔢 Conversor de números'), h('div', { class: 'row gap wrap' }, [inp, vs, play]), out];
  };

  GEN.tools['year-converter'] = function () {
    var inp = h('input', { class: 'input big', type: 'text', inputmode: 'numeric', placeholder: 'Ano, ex.: 1998', 'aria-label': 'Ano', value: String(new Date().getFullYear()) });
    var out = h('div', { class: 'tool-out', lang: 'fr', 'aria-live': 'polite' });
    var play = UI.playBtn(function () { return out.textContent; }, { label: 'ouvir' });
    function draw() {
      var n = parseInt(inp.value.replace(/\D/g, ''), 10);
      out.textContent = isNaN(n) ? '—' : 'en ' + N.toWords(n);
    }
    inp.addEventListener('input', draw); draw();
    return [h('h2', null, '⏳ Como se diz o ano'), h('div', { class: 'row gap wrap' }, [inp, play]), out];
  };

  GEN.tools.today = function () {
    var d = new Date();
    var w = N.dateWords(d.getDate(), d.getMonth() + 1, d.getFullYear(), d.getDay());
    var full = "Aujourd'hui, nous sommes " + w + '.';
    return [h('h2', null, '📆 A data de hoje'), h('div', { class: 'row gap wrap' }, [UI.playBtn(full, { label: 'ouvir' }), h('div', { class: 'tool-out', lang: 'fr' }, full)]),
      h('p', { class: 'muted sm' }, U.pad(d.getDate()) + '/' + U.pad(d.getMonth() + 1) + '/' + d.getFullYear() + ' — ' + N.DAYS_PT[d.getDay()] + ', ' + d.getDate() + ' de ' + N.MONTHS_PT[d.getMonth()])];
  };

  /* relógio: arraste os ponteiros ou digite a hora */
  GEN.tools.clock = function () {
    var hh = 9, mm = 15;
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 200 200'); svg.setAttribute('class', 'clock'); svg.setAttribute('role', 'img'); svg.setAttribute('aria-label', 'Relógio interativo');
    function el(tag, attrs) { var e = document.createElementNS(ns, tag); Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); }); svg.appendChild(e); return e; }
    el('circle', { cx: 100, cy: 100, r: 92, class: 'clock-face' });
    for (var i = 1; i <= 12; i++) {
      var a = i / 12 * 2 * Math.PI;
      var t = el('text', { x: 100 + 74 * Math.sin(a), y: 100 - 74 * Math.cos(a) + 6, 'text-anchor': 'middle', class: 'clock-num' });
      t.textContent = i;
    }
    for (var k = 0; k < 60; k++) {
      var b = k / 60 * 2 * Math.PI, r1 = k % 5 ? 86 : 82;
      el('line', { x1: 100 + r1 * Math.sin(b), y1: 100 - r1 * Math.cos(b), x2: 100 + 90 * Math.sin(b), y2: 100 - 90 * Math.cos(b), class: 'clock-tick' });
    }
    var hHand = el('line', { x1: 100, y1: 100, x2: 100, y2: 52, class: 'clock-h' });
    var mHand = el('line', { x1: 100, y1: 100, x2: 100, y2: 28, class: 'clock-m' });
    el('circle', { cx: 100, cy: 100, r: 5, class: 'clock-dot' });
    var pmSel = h('select', { class: 'select sm', 'aria-label': 'Manhã ou tarde' }, [h('option', { value: 'am' }, 'manhã (0h–11h)'), h('option', { value: 'pm' }, 'tarde/noite (12h–23h)')]);
    var timeInp = h('input', { class: 'input', type: 'time', 'aria-label': 'Hora', value: '09:15', step: 60 });
    var formal = h('div', { class: 'tool-out', lang: 'fr' }), colloq = h('div', { class: 'tool-out', lang: 'fr' });
    function draw(fromInput) {
      var ha = ((hh % 12) + mm / 60) / 12 * 360, ma = mm / 60 * 360;
      hHand.setAttribute('transform', 'rotate(' + ha + ' 100 100)');
      mHand.setAttribute('transform', 'rotate(' + ma + ' 100 100)');
      formal.textContent = N.timeFormal(hh, mm);
      colloq.textContent = N.timeColloquial(hh, mm);
      if (!fromInput) timeInp.value = U.pad(hh) + ':' + U.pad(mm);
      pmSel.value = hh >= 12 ? 'pm' : 'am';
    }
    var drag = null;
    function angle(e) {
      var r = svg.getBoundingClientRect(), pt = e.touches ? e.touches[0] : e;
      var x = pt.clientX - r.left - r.width / 2, y = pt.clientY - r.top - r.height / 2;
      return (Math.atan2(x, -y) * 180 / Math.PI + 360) % 360;
    }
    function down(e) {
      var a = angle(e);
      var ma = mm / 60 * 360, ha = ((hh % 12) + mm / 60) / 12 * 360;
      var dm = Math.min(Math.abs(a - ma), 360 - Math.abs(a - ma)), dh = Math.min(Math.abs(a - ha), 360 - Math.abs(a - ha));
      drag = dh < dm ? 'h' : 'm';
      move(e); e.preventDefault();
    }
    function move(e) {
      if (!drag) return;
      var a = angle(e);
      var pm = hh >= 12;
      if (drag === 'm') {
        var nm = Math.round(a / 6) % 60;
        if (mm > 45 && nm < 15) hh = (hh + 1) % 24; else if (mm < 15 && nm > 45) hh = (hh + 23) % 24;
        mm = nm;
      } else {
        var h12 = Math.floor(a / 30) % 12;
        hh = h12 + (pm ? 12 : 0);
      }
      draw(); e.preventDefault();
    }
    function up() { drag = null; }
    svg.addEventListener('mousedown', down); svg.addEventListener('touchstart', down, { passive: false });
    window.addEventListener('mousemove', move); window.addEventListener('touchmove', move, { passive: false });
    window.addEventListener('mouseup', up); window.addEventListener('touchend', up);
    timeInp.addEventListener('input', function () { var m = timeInp.value.match(/(\d+):(\d+)/); if (m) { hh = +m[1]; mm = +m[2]; draw(true); } });
    pmSel.addEventListener('change', function () { hh = (hh % 12) + (pmSel.value === 'pm' ? 12 : 0); draw(); });
    draw();
    return [h('h2', null, '🕐 Relógio interativo'), h('p', { class: 'muted sm' }, 'Arraste os ponteiros ou digite a hora. As duas formas aparecem embaixo.'),
      h('div', { class: 'clock-wrap' }, [svg, h('div', { class: 'clock-side' }, [
        h('div', { class: 'row gap wrap' }, [timeInp, pmSel]),
        h('div', { class: 'clock-out' }, [h('span', { class: 'tag' }, 'formal (24 h)'), h('div', { class: 'row gap' }, [UI.playBtn(function () { return formal.textContent; }, { small: true }), formal])]),
        h('div', { class: 'clock-out' }, [h('span', { class: 'tag' }, 'coloquial (12 h)'), h('div', { class: 'row gap' }, [UI.playBtn(function () { return colloq.textContent; }, { small: true }), colloq])])
      ])])];
  };

  /* soletrador: nome ou e-mail → letras em francês */
  var SPELL = {
    'é': 'E accent aigu', 'è': 'E accent grave', 'ê': 'E accent circonflexe', 'ë': 'E tréma', 'à': 'A accent grave', 'â': 'A accent circonflexe',
    'î': 'I accent circonflexe', 'ï': 'I tréma', 'ô': 'O accent circonflexe', 'ù': 'U accent grave', 'û': 'U accent circonflexe', 'ç': 'C cédille',
    'ã': 'A tilde', 'õ': 'O tilde', 'á': 'A accent aigu', 'í': 'I accent aigu', 'ó': 'O accent aigu', 'ú': 'U accent aigu',
    '@': 'arobase', '.': 'point', '-': 'tiret', '_': 'tiret bas', '/': 'barre oblique', "'": 'apostrophe', ' ': 'espace', '&': 'et commercial', '+': 'plus'
  };
  GEN.spell = function (text) {
    var parts = [], s = String(text);
    for (var i = 0; i < s.length; i++) {
      var ch = s[i], low = ch.toLowerCase();
      var n = 1; while (s[i + n] && s[i + n].toLowerCase() === low && /[a-z]/i.test(ch)) n++;
      if (n > 1) { parts.push({ show: (n === 2 ? 'deux ' : N.toWords(n) + ' ') + ch.toUpperCase(), say: (n === 2 ? 'deux ' : N.toWords(n) + ' ') + ch.toUpperCase() }); i += n - 1; continue; }
      if (SPELL[low]) parts.push({ show: SPELL[low], say: SPELL[low] });
      else if (/[a-z]/i.test(ch)) parts.push({ show: ch.toUpperCase(), say: ch.toUpperCase() });
      else if (/\d/.test(ch)) parts.push({ show: ch, say: N.toWords(+ch) });
      else parts.push({ show: ch, say: ch });
    }
    return parts;
  };
  GEN.tools.spell = function () {
    var p = LUX.profiles.current();
    var inp = h('input', { class: 'input big', type: 'text', placeholder: 'Seu nome ou e-mail', 'aria-label': 'Texto para soletrar', value: p ? p.name : 'Lucas' });
    var chips = h('div', { class: 'chips spell-out', lang: 'fr', 'aria-live': 'polite' });
    var items = [];
    var play = UI.playBtn(function () { return items.map(function (x) { return x.say; }); }, {
      label: 'soletrar', pause: 250,
      onItem: function (i) { [].forEach.call(chips.children, function (c, k) { c.classList.toggle('current', k === i); }); },
      onEnd: function () { [].forEach.call(chips.children, function (c) { c.classList.remove('current'); }); }
    });
    function draw() {
      items = GEN.spell(inp.value);
      chips.innerHTML = '';
      items.forEach(function (x) { chips.appendChild(h('span', { class: 'chip' }, x.show)); });
    }
    inp.addEventListener('input', draw); draw();
    return [h('h2', null, '🔤 Como soletrar'), h('p', { class: 'muted sm' }, 'Digite seu nome ou e-mail e ouça como soletrar em francês (letras dobradas viram "deux L", @ vira "arobase"...).'),
      h('div', { class: 'row gap wrap' }, [inp, play]), chips];
  };
})(window);
