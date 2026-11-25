/* LUX — aba Treino de ouvido: números, horas, datas, preços, telefones e modo misto. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, N = LUX.numbers;
  var ET = LUX.earTraining = {};

  ET.MODES = [
    { id: 'numeros', icon: '🔢', title: 'Números', desc: 'Ouça um número e digite em algarismos.' },
    { id: 'horas', icon: '🕐', title: 'Horas', desc: 'Formal (17:45) e coloquial (moins le quart).' },
    { id: 'datas', icon: '📆', title: 'Datas', desc: 'Le premier juillet, lundi douze mars.' },
    { id: 'precos', icon: '💶', title: 'Preços', desc: 'Trois euros cinquante → 3,50.' },
    { id: 'telefones', icon: '📞', title: 'Telefones', desc: 'Formato francês, lido em pares.' },
    { id: 'misto', icon: '🎲', title: 'Misto', desc: 'Um pouco de tudo.' }
  ];
  ET.RANGES = [
    { id: '0-20', label: '0–20', min: 0, max: 20 }, { id: '21-69', label: '21–69', min: 21, max: 69 },
    { id: '70-99', label: '70–99 ⚠', min: 70, max: 99 }, { id: '100-999', label: '100–999', min: 100, max: 999 },
    { id: '1000+', label: '1 000–999 999', min: 1000, max: 999999 }, { id: 'anos', label: 'Anos (1900–2099)', min: 1900, max: 2099 },
    { id: 'tudo', label: 'Tudo', min: 0, max: 9999 }
  ];

  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  /* ---------- geração de itens ---------- */
  function genNumber(opts) {
    var r = ET.RANGES.filter(function (x) { return x.id === opts.range; })[0] || ET.RANGES[6];
    var n = rnd(r.min, r.max);
    if (r.id === 'tudo' && Math.random() < 0.35) n = rnd(70, 99);
    return {
      mode: 'numeros', speech: N.toWords(n, { variant: opts.variant }), written: N.toWords(n, { variant: opts.variant }), answerText: String(n),
      value: n, placeholder: 'ex.: 97', check: function (s) { var d = s.replace(/[\s.]/g, ''); return /^\d+$/.test(d) && +d === n; },
      hint: function (s) { return numberHint(n, s, opts.variant); }
    };
  }
  function genTime() {
    var formal = Math.random() < 0.5;
    var hh = rnd(0, 23), mm = formal ? rnd(0, 59) : pick([0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]);
    var speech = formal ? N.timeFormal(hh, mm) : N.timeColloquial(hh, mm);
    return {
      mode: 'horas', speech: speech, written: speech, answerText: hh + ':' + U.pad(mm) + (formal ? '' : ' (ou ' + ((hh + 12) % 24) + ':' + U.pad(mm) + ')'),
      placeholder: 'ex.: 17:45', label: formal ? 'formal (24 h)' : 'coloquial (12 h)',
      check: function (s) {
        var m = String(s).trim().match(/^(\d{1,2})\s*[:hH.]\s*(\d{1,2})?$/);
        if (!m) return false;
        var H = +m[1], M = m[2] ? +m[2] : 0;
        if (M !== mm) return false;
        if (formal) return H === hh || (hh === 0 && H === 24);
        return H % 12 === hh % 12;
      },
      hint: function () { return formal ? '' : 'Na forma coloquial, "moins" tira minutos da hora seguinte: <i>six heures moins le quart</i> = 5h45.'; }
    };
  }
  function genDate() {
    var y = new Date().getFullYear();
    var withYear = Math.random() < 0.5;
    var d, m, wd = null, speech;
    if (withYear) {
      var yy = rnd(1950, 2035);
      m = rnd(1, 12); d = rnd(1, new Date(yy, m, 0).getDate());
      speech = N.dateWords(d, m, yy);
      return {
        mode: 'datas', speech: speech, written: speech, answerText: U.pad(d) + '/' + U.pad(m) + '/' + yy, placeholder: 'dd/mm/aaaa',
        check: function (s) { var p = parseDate(s); return p && p.d === d && p.m === m && p.y === yy; },
        hint: function () { return d === 1 ? '<i>le premier</i> = dia 1º.' : ''; }
      };
    }
    var dt = new Date(y, 0, 1 + rnd(0, 364));
    d = dt.getDate(); m = dt.getMonth() + 1; wd = dt.getDay();
    speech = N.dateWords(d, m, null, wd);
    return {
      mode: 'datas', speech: speech, written: speech, answerText: U.pad(d) + '/' + U.pad(m), placeholder: 'dd/mm',
      check: function (s) { var p = parseDate(s); return p && p.d === d && p.m === m; },
      hint: function () { return 'O dia da semana vem antes: <i>' + N.DAYS[wd] + '</i> = ' + N.DAYS_PT[wd] + '.'; }
    };
  }
  function genPrice() {
    var cents = Math.random() < 0.2 ? rnd(1, 99) : rnd(1, 120) * 100 + (Math.random() < 0.6 ? pick([0, 5, 10, 20, 25, 50, 75, 90, 95, 99, rnd(1, 99)]) : 0);
    var speech = N.priceWords(cents);
    return {
      mode: 'precos', speech: speech, written: speech, answerText: N.priceDigits(cents) + ' €', placeholder: 'ex.: 3,50',
      check: function (s) { var c = parsePrice(s); return c === cents; },
      hint: function (s) { return numberHint(Math.floor(cents / 100), String(Math.floor((parsePrice(s) || 0) / 100))); }
    };
  }
  function genPhone() {
    var digits = '0' + pick(['1', '4', '6', '6', '7', '9']);
    for (var i = 0; i < 4; i++) digits += U.pad(rnd(0, 99));
    var spaced = digits.match(/\d{2}/g).join(' ');
    var speech = N.phoneWords(digits);
    return {
      mode: 'telefones', speech: speech, written: speech, answerText: spaced, placeholder: '06 12 34 56 78',
      check: function (s) { return String(s).replace(/\D/g, '') === digits; },
      hint: function () { return 'Os telefones franceses são lidos em 5 pares: ' + spaced + '.'; }
    };
  }
  function parseDate(s) {
    var m = String(s).trim().match(/^(\d{1,2})\s*[\/.\-\s]\s*(\d{1,2})(?:\s*[\/.\-\s]\s*(\d{2,4}))?$/);
    if (!m) return null;
    var y = m[3] ? +m[3] : null;
    if (y && y < 100) y += y > 40 ? 1900 : 2000;
    return { d: +m[1], m: +m[2], y: y };
  }
  function parsePrice(s) {
    var t = String(s).replace(/[€\s]/g, '').replace(/eur(os)?/i, '');
    var m = t.match(/^(\d+)(?:[.,](\d{1,2}))?$/);
    if (!m) return null;
    var c = m[2] ? (m[2].length === 1 ? +m[2] * 10 : +m[2]) : 0;
    return +m[1] * 100 + c;
  }
  /* dica: decompõe o número certo (ex.: soixante-dix-sept = 60 + 17) */
  function numberHint(n, given, variant) {
    var g2 = parseInt(String(given).replace(/\D/g, ''), 10);
    var last2 = n % 100;
    var w = N.toWords(last2, { variant: variant });
    var exp = '';
    if ((variant || 'fr') === 'fr') {
      if (last2 >= 70 && last2 < 80) exp = '<i>' + w + '</i> = 60 + ' + (last2 - 60);
      else if (last2 >= 80) exp = '<i>' + w + '</i> = 4 × 20' + (last2 > 80 ? ' + ' + (last2 - 80) : '');
    }
    var prefix = !isNaN(g2) ? 'Você digitou ' + g2 + '. ' : '';
    return prefix + (exp ? exp + '.' : '');
  }

  ET.generate = function (opts) {
    var mode = opts.mode === 'misto' ? pick(['numeros', 'numeros', 'horas', 'datas', 'precos', 'telefones']) : opts.mode;
    if (mode === 'numeros') return genNumber(opts.mode === 'misto' ? { range: opts.range || 'tudo', variant: opts.variant } : opts);
    if (mode === 'horas') return genTime();
    if (mode === 'datas') return genDate();
    if (mode === 'precos') return genPrice();
    return genPhone();
  };

  function recordKey(o) { return o.mode + (o.mode === 'numeros' ? ':' + o.range : '') + (o.variant && o.variant !== 'fr' ? ':' + o.variant : ''); }
  function modeTitle(id) { return (ET.MODES.filter(function (m) { return m.id === id; })[0] || {}).title || id; }

  /* ---------- telas ---------- */
  LUX.router.add('/treino', function () {
    return {
      title: 'Treino de ouvido', nav: 'treino', crumbs: [['Estudar', null], ['Treino de ouvido', null]],
      render: function (main) {
        var p = LUX.profiles.current();
        main.appendChild(UI.pageHead('Treino de ouvido', 'Números, horas, datas, preços e telefones: o maior desafio de quem fala português. Rodadas de **10 itens**.'));
        var grid = h('div', { class: 'mode-grid' });
        ET.MODES.forEach(function (m) {
          var best = 0;
          Object.keys(p.drills.records).forEach(function (k) { if (k.split(':')[0] === m.id) best = Math.max(best, p.drills.records[k].best); });
          grid.appendChild(h('a', { class: 'mode-card', href: '#/treino/' + m.id }, [
            h('span', { class: 'mode-ico', 'aria-hidden': 'true' }, m.icon), h('b', null, m.title), h('span', { class: 'muted sm' }, m.desc),
            h('span', { class: 'mode-rec' }, best ? 'recorde: ' + best + '/10' : 'sem recorde ainda')
          ]));
        });
        main.appendChild(grid);
        main.appendChild(h('div', { class: 'card quick' }, [h('div', null, [h('b', null, '🔥 Aquecimento de 2 minutos'), h('p', { class: 'muted sm' }, '5 itens no modo misto, na faixa do seu nível.')]), h('a', { class: 'btn primary', href: '#/treino/aquecimento' }, 'Começar')]));
        var hist = p.drills.history.slice(-8).reverse();
        if (hist.length) {
          main.appendChild(h('section', { class: 'card' }, [h('h2', null, 'Últimas sessões'), h('ul', { class: 'recent-list' }, hist.map(function (x) {
            return h('li', null, [h('b', null, modeTitle(x.mode) + (x.range ? ' · ' + x.range : '')), h('span', { class: 'muted sm' }, ' · ' + U.fmtDate(x.at) + ' · ' + x.avgTime + ' s/item · ' + x.avgPlays + ' escutas/item'), h('span', { class: 'score ' + (x.score / x.total >= 0.7 ? 'ok' : 'low') }, x.score + '/' + x.total)]);
          }))]));
        }
      }
    };
  });

  LUX.router.add('/treino/:mode', function (params) {
    var mode = params.mode;
    var warm = mode === 'aquecimento';
    var m = ET.MODES.filter(function (x) { return x.id === mode; })[0];
    return {
      title: warm ? 'Aquecimento' : (m ? m.title : 'Treino'), nav: 'treino',
      crumbs: [['Estudar', null], ['Treino de ouvido', '#/treino'], [warm ? 'Aquecimento' : (m ? m.title : mode), null]],
      render: function (main) {
        if (!m && !warm) { main.appendChild(UI.empty('🎧', 'Modo desconhecido', null, h('a', { class: 'btn primary', href: '#/treino' }, 'Voltar'))); return; }
        if (warm) { startSession(main, { mode: 'misto', range: warmRange(), variant: 'fr', count: 5, warmup: true, next: params.query.next }); return; }
        setupScreen(main, m);
      }
    };
  });

  function warmRange() {
    var p = LUX.profiles.current();
    var lv = p ? p.settings.level : 'A2';
    return lv === 'A2' ? '70-99' : lv === 'B1' ? '100-999' : 'tudo';
  }

  function setupScreen(main, m) {
    var p = LUX.profiles.current();
    main.appendChild(UI.pageHead(m.icon + ' ' + m.title, m.desc));
    var opts = { mode: m.id, range: '70-99', variant: 'fr', challenge: false, count: 10 };
    var card = h('section', { class: 'card setup' });
    if (m.id === 'numeros' || m.id === 'misto') {
      var rg = h('div', { class: 'chips', role: 'radiogroup', 'aria-label': 'Faixa' });
      ET.RANGES.forEach(function (r) {
        var b = h('button', { class: 'chip' + (r.id === opts.range ? ' on' : ''), role: 'radio', 'aria-checked': r.id === opts.range ? 'true' : 'false' }, r.label);
        b.addEventListener('click', function () { opts.range = r.id; [].forEach.call(rg.children, function (c) { c.classList.remove('on'); c.setAttribute('aria-checked', 'false'); }); b.classList.add('on'); b.setAttribute('aria-checked', 'true'); });
        rg.appendChild(b);
      });
      card.appendChild(h('h2', null, 'Faixa de números'));
      card.appendChild(rg);
      var vs = h('select', { class: 'select', 'aria-label': 'Variante francófona' }, [h('option', { value: 'fr' }, 'França (soixante-dix, quatre-vingts)'), h('option', { value: 'be' }, 'Bélgica (septante, nonante)'), h('option', { value: 'ch' }, 'Suíça (septante, huitante, nonante)')]);
      vs.addEventListener('change', function () { opts.variant = vs.value; });
      card.appendChild(h('div', { class: 'row gap wrap' }, [h('span', { class: 'muted' }, 'Variante:'), vs]));
    }
    var ch = h('label', { class: 'switch' }, [h('input', { type: 'checkbox' }), h('span', null, 'Modo desafio: a velocidade aumenta a cada acerto')]);
    ch.querySelector('input').addEventListener('change', function (e) { opts.challenge = e.target.checked; });
    card.appendChild(ch);
    card.appendChild(h('div', { class: 'row gap wrap' }, [UI.speedSelect(), h('button', { class: 'btn primary big', onclick: function () { main.innerHTML = ''; startSession(main, opts); } }, 'Começar rodada de 10')]));
    main.appendChild(card);
    var recs = Object.keys(p.drills.records).filter(function (k) { return k.split(':')[0] === m.id; });
    if (recs.length) {
      main.appendChild(h('section', { class: 'card' }, [h('h2', null, '🏆 Seus recordes'), h('ul', { class: 'recent-list' }, recs.map(function (k) {
        var r = p.drills.records[k];
        return h('li', null, [h('b', null, k.split(':').slice(1).join(' · ') || m.title), h('span', { class: 'muted sm' }, ' · melhor em ' + U.fmtDate(r.bestAt) + ' · ' + r.sessions + ' sessão(ões)'), h('span', { class: 'score ok' }, r.best + '/10')]);
      }))]));
    }
  }

  function startSession(main, opts) {
    var p = LUX.profiles.current();
    var total = opts.count || 10;
    var items = [];
    var i = 0, right = 0, rate = p.settings.rate || 0.9;
    var stage = h('div', { class: 'drill' });
    main.appendChild(UI.pageHead(opts.queue ? '↺ Revisando os erros' : opts.warmup ? '🔥 Aquecimento' : modeTitle(opts.mode),
      opts.queue ? 'Os mesmos itens que você errou, mais uma vez.' : opts.warmup ? 'Cinco itens rápidos para acordar o ouvido.' : ''));
    main.appendChild(stage);
    function nextItem() {
      if (i >= total) return finish();
      var it = opts.queue ? Object.assign({}, opts.queue[i]) : ET.generate(opts);
      it.plays = 0; it.t0 = Date.now(); it.ok = false;
      items.push(it);
      stage.innerHTML = '';
      var top = h('div', { class: 'row between' }, [h('span', { class: 'muted' }, 'Item ' + (i + 1) + ' de ' + total), h('span', { class: 'muted' }, right + ' acerto(s)')]);
      stage.appendChild(top);
      stage.appendChild(UI.progress(i / total * 100, 'Progresso da rodada'));
      var card = h('div', { class: 'card drill-card' });
      if (it.label) card.appendChild(h('span', { class: 'tag' }, it.label));
      card.appendChild(h('span', { class: 'tag' }, modeTitle(it.mode)));
      var plays = h('span', { class: 'muted sm' }, '');
      function play() {
        it.plays++; plays.textContent = 'ouviu ' + U.plural(it.plays, 'vez', 'vezes');
        // o tempo de resposta conta a partir do fim da primeira escuta
        LUX.tts.speak(it.speech, { rate: opts.challenge ? Math.min(1.4, rate + right * 0.05) : rate, onEnd: function (done) { if (done && it.plays === 1) it.t0 = Date.now(); } });
      }
      var again = h('button', { class: 'btn big' }, '▶ ouvir de novo');
      again.addEventListener('click', function () { play(); inp.focus(); });
      card.appendChild(h('div', { class: 'row gap center' }, [again, plays]));
      var inp = h('input', { class: 'input huge', type: 'text', inputmode: it.mode === 'horas' || it.mode === 'datas' ? 'text' : 'decimal', placeholder: it.placeholder, 'aria-label': 'Sua resposta', autocomplete: 'off' });
      var fb = h('div', { class: 'drill-fb', 'aria-live': 'polite' });
      var go = h('button', { class: 'btn primary big' }, 'Confirmar');
      function submit() {
        if (!inp.value.trim()) { inp.focus(); return; }
        if (go.disabled) return;
        go.disabled = true; inp.disabled = true;
        it.time = it.t0 ? (Date.now() - it.t0) / 1000 : 0;
        it.given = inp.value;
        it.ok = it.check(inp.value);
        if (it.ok) right++;
        fb.innerHTML = '';
        fb.appendChild(h('div', { class: 'banner ' + (it.ok ? 'ok' : 'warn') }, [
          h('b', null, it.ok ? '✓ Correto! ' : '✗ Resposta: ' + it.answerText + '. '),
          h('span', { lang: 'fr', class: 'drill-written' }, it.written),
          !it.ok && it.hint ? h('div', { class: 'sm', html: it.hint(inp.value) }) : null
        ]));
        fb.appendChild(UI.playBtn(it.speech, { small: true, label: 'ouvir de novo' }));
        var nx = h('button', { class: 'btn primary', onclick: function () { i++; nextItem(); } }, i + 1 < total ? 'Próximo →' : 'Ver resultado');
        fb.appendChild(nx);
        setTimeout(function () { nx.focus(); }, 30);
      }
      go.addEventListener('click', submit);
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
      card.appendChild(inp);
      card.appendChild(go);
      card.appendChild(fb);
      stage.appendChild(card);
      setTimeout(function () { inp.focus(); play(); }, 250);
    }
    function finish() {
      LUX.tts.stop();
      var avgTime = Math.round(items.reduce(function (a, x) { return a + (x.time || 0); }, 0) / items.length * 10) / 10;
      var avgPlays = Math.round(items.reduce(function (a, x) { return a + x.plays; }, 0) / items.length * 10) / 10;
      var at = new Date().toISOString();
      var newRecord = false;
      if (!opts.warmup) {
        var key = recordKey(opts), rec = p.drills.records[key] || { best: 0, sessions: 0 };
        rec.sessions++; rec.last = right; rec.lastAt = at;
        if (right > rec.best) { rec.best = right; rec.bestAt = at; newRecord = true; }
        p.drills.records[key] = rec;
      }
      p.drills.history.push({ at: at, mode: opts.warmup ? 'aquecimento' : opts.mode, range: opts.mode === 'numeros' ? opts.range : null, score: right, total: total, avgTime: avgTime, avgPlays: avgPlays });
      if (p.drills.history.length > 200) p.drills.history.shift();
      LUX.profiles.markActivity(p);
      LUX.store.save();
      stage.innerHTML = '';
      var c = h('div', { class: 'card end-card' });
      c.appendChild(h('h2', null, newRecord ? '🏆 Novo recorde!' : 'Resultado'));
      c.appendChild(h('div', { class: 'score-ring ' + (right / total >= 0.7 ? 'ok' : 'low') }, [h('b', null, right + '/' + total), h('span', { class: 'muted sm' }, 'acertos')]));
      c.appendChild(h('p', { class: 'muted' }, 'Tempo médio: ' + avgTime + ' s · Escutas por item: ' + avgPlays));
      var errs = items.filter(function (x) { return !x.ok; });
      if (errs.length) {
        c.appendChild(h('h3', null, 'Para revisar'));
        c.appendChild(h('ul', { class: 'drill-errors' }, errs.map(function (x) {
          return h('li', null, [UI.playBtn(x.speech, { small: true }), h('span', { lang: 'fr' }, x.written), h('span', { class: 'muted sm' }, ' = ' + x.answerText + ' (você: ' + x.given + ')')]);
        })));
      }
      var actions = h('div', { class: 'row gap wrap' });
      if (errs.length && !opts.warmup) actions.appendChild(h('button', { class: 'btn', onclick: function () { retryErrors(main, opts, errs); } }, '↺ Treinar só os que errei'));
      actions.appendChild(h('button', { class: 'btn primary', onclick: function () { main.innerHTML = ''; startSession(main, opts); } }, 'Nova rodada'));
      if (opts.next && LUX.data.lessons[opts.next]) actions.appendChild(h('a', { class: 'btn primary', href: '#/licao/' + opts.next }, 'Ir para a lição →'));
      actions.appendChild(h('a', { class: 'btn ghost', href: '#/treino' }, 'Outros modos'));
      c.appendChild(actions);
      stage.appendChild(c);
    }
    nextItem();
  }

  function retryErrors(main, opts, errs) {
    main.innerHTML = '';
    // rodada extra só com os itens errados (não conta para o recorde)
    startSession(main, Object.assign({}, opts, { count: errs.length, queue: errs, warmup: true, next: null }));
  }
})(window);
