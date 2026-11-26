/* LUX — tela da lição: objetivos → vocabulário → leitura → audição → gramática → prática → dica → resumo. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, X = LUX.ex;
  var STEPS = [
    { id: 'obj', label: 'Objetivos', icon: '🎯' }, { id: 'vocab', label: 'Vocabulário', icon: '📝' },
    { id: 'read', label: 'Leitura', icon: '📖' }, { id: 'listen', label: 'Audição', icon: '🎧' },
    { id: 'gram', label: 'Gramática', icon: '📐' }, { id: 'practice', label: 'Prática', icon: '✍️' },
    { id: 'tip', label: 'Dica', icon: '💡' }, { id: 'end', label: 'Resumo', icon: '🏁' }
  ];

  var L = LUX.lessons = {};

  /* ordem global das lições e desbloqueio */
  L.order = function () {
    var out = [];
    LUX.manifest.levels.forEach(function (lv) { lv.units.forEach(function (u) { u.lessons.forEach(function (id) { if (LUX.data.lessons[id]) out.push(id); }); }); });
    return out;
  };
  L.isUnlocked = function (p, id) {
    if (!p) return false;
    if (p.unlockedAll) return true;
    var ord = L.order(), i = ord.indexOf(id);
    if (i <= 0) return i === 0;
    var prev = p.progress[ord[i - 1]];
    return !!(prev && prev.status === 'done');
  };
  L.next = function (id) { var ord = L.order(), i = ord.indexOf(id); return i >= 0 ? ord[i + 1] || null : null; };
  L.current = function (p) {
    var ord = L.order();
    for (var i = 0; i < ord.length; i++) if (!(p.progress[ord[i]] && p.progress[ord[i]].status === 'done')) return ord[i];
    return ord[ord.length - 1] || null;
  };

  function stripArticle(fr) { return fr.replace(/^(le \/ la |le |la |l'|les |un |une )/i, '').replace(/\s*\/.*$/, '').replace(/\(e\)$/, ''); }

  /* Lição em andamento guardada ao sair dela (ex.: clicar em "ver conjugação").
     Os elementos da página ficam intactos — etapa, respostas, transcrições abertas — e voltam
     exatamente como estavam, inclusive a posição de rolagem. Só uma lição fica guardada por vez. */
  L.live = null;

  /* Monta a view de uma lição (curso ou Profissional), com o mecanismo de guardar/restaurar.
     opts: {route, nav, crumbs, locked:{msg, back:[href,label]}|null, render: opções do renderLesson} */
  L.view = function (l, p, params, opts) {
    var api = null;
    var back = opts.back || ['#/curso', 'Voltar ao curso'];
    return {
      title: l ? l.title : 'Lição', nav: opts.nav, crumbs: opts.crumbs,
      render: function (main) {
        if (LUX.tts) LUX.tts.contentLang = (l && l.lang) || 'fr';
        if (!l) { main.appendChild(UI.empty('📭', 'Lição não encontrada', null, h('a', { class: 'btn primary', href: back[0] }, back[1]))); return; }
        if (opts.locked) {
          main.appendChild(UI.empty('🔒', 'Lição bloqueada', opts.locked, h('a', { class: 'btn primary', href: back[0] }, back[1])));
          return;
        }
        var live = L.live;
        if (live && live.id === l.id && p && live.profileId === p.id && !params.query.r) {
          L.live = null;
          api = live.api;
          live.nodes.forEach(function (n) { main.appendChild(n); });
          if (params.query.step != null) api.go(+params.query.step);
          else setTimeout(function () { window.scrollTo(0, live.scrollY); }, 0);
          updatePill();
          return;
        }
        L.live = null;
        updatePill();
        api = renderLesson(main, l, p, +(params.query.step || 0), Object.assign({ route: opts.route }, opts.render || {}));
      },
      onLeave: function (main) {
        if (!api || api.isSaved() || !p) { if (L.live && L.live.id === (l && l.id)) L.live = null; return; }
        L.live = { id: l.id, route: opts.route, profileId: p.id, title: l.title, lang: l.lang || 'fr', api: api, scrollY: window.scrollY, nodes: Array.prototype.slice.call(main.childNodes) };
      }
    };
  };

  LUX.router.add('/licao/:id', function (params) {
    var l = LUX.data.lessons[params.id];
    var p = LUX.profiles.current();
    return L.view(l, p, params, {
      route: '#/licao/' + params.id, nav: 'curso',
      crumbs: l ? [['Curso', '#/curso'], [l.level + ' · Unidade ' + l.unit, '#/curso?u=' + l.level + '-' + l.unit], [l.title, null]] : [['Curso', '#/curso']],
      locked: l && !L.isUnlocked(p, l.id) ? 'Conclua a lição anterior com pelo menos 70% para desbloquear esta. Você também pode desbloquear tudo em **Perfil e configurações**.' : null
    });
  });

  /* A lição em andamento continua guardada em L.live (o botão Voltar e o voltar do navegador/celular
     restauram exatamente onde a pessoa estava). O antigo botão flutuante "Voltar à lição" foi removido;
     esta função só limpa algum que tenha ficado na tela. */
  function updatePill() {
    var old = document.getElementById('lesson-return');
    if (old) old.remove();
  }
  L.updatePill = updatePill;   // chamado pelo roteador depois de cada página

  /* opts: {route, kicker (linha acima do título), warmup (bool), afterSave(card, rec, pct) — ações depois de salvar} */
  function renderLesson(main, l, p, startStep, opts) {
    opts = opts || {};
    var lang = l.lang || 'fr';
    var route = opts.route || '#/licao/' + l.id;
    var source = { lessonId: l.id, title: l.title, route: route };
    var results = {};     // chave -> {score, weight}
    var exKeys = [];
    var step = Math.max(0, Math.min(STEPS.length - 1, startStep));

    var head = h('div', { class: 'lesson-head' }, [
      h('div', null, [h('div', { class: 'muted sm' }, opts.kicker || (l.level + ' · Unidade ' + l.unit + ' · Lição ' + l.order + (l.review ? ' · Revisão' : ''))),
        h('h1', { lang: lang }, l.title), h('p', { class: 'muted' }, l.titlePt)])
    ]);
    main.appendChild(head);
    var prevSt = p && p.progress[l.id];
    if (prevSt) main.appendChild(h('div', { class: 'banner ' + (prevSt.status === 'done' ? 'ok' : 'info') + ' lesson-prev' }, [
      h('b', null, prevSt.status === 'done' ? '✅ Lição concluída — melhor nota: ' + Math.round(prevSt.best * 100) + '%. ' : 'Melhor nota até agora: ' + Math.round(prevSt.best * 100) + '%. '),
      h('span', null, 'Ao reabrir, a lição começa em branco: os ✓ das etapas e o Resumo mostram só esta nova tentativa. Sua melhor nota fica guardada — refazer nunca diminui.')
    ]));
    var stepper = h('ol', { class: 'stepper', 'aria-label': 'Etapas da lição' });
    main.appendChild(stepper);
    var body = h('div', { class: 'lesson-body' });
    main.appendChild(body);
    var nav = h('div', { class: 'lesson-nav' });
    main.appendChild(nav);

    // pré-renderiza todas as etapas (mantém respostas ao navegar)
    var panes = STEPS.map(function (s) { return h('section', { class: 'lesson-pane', 'data-step': s.id, hidden: true, 'aria-label': s.label }); });
    panes.forEach(function (pn) { body.appendChild(pn); });

    function exCtx(key, weight) {
      exKeys.push(key);
      results[key] = results[key] || null;
      return { source: source, onResult: function (score) { results[key] = { score: score, weight: weight || 1 }; drawStepper(); if (step === STEPS.length - 1) drawSummary(); } };
    }
    function weightOf(ex) {
      if (ex.type === 'true_false_nm') return Math.max(2, Math.ceil(ex.statements.length / 2));
      if (ex.type === 'fill_blank') return Math.max(1, Math.ceil(ex.items.length / 2));
      if (ex.type === 'match') return 2;
      return 1;
    }
    function exList(list, prefix) {
      var wrap = h('div', { class: 'ex-list' });
      (list || []).forEach(function (ex, i) {
        var card = h('div', { class: 'card ex-card' }, [h('div', { class: 'ex-num' }, String(i + 1)), X.render(ex, exCtx(prefix + i, weightOf(ex)))]);
        wrap.appendChild(card);
      });
      return wrap;
    }

    /* --- objetivos --- */
    (function (pane) {
      var c = h('div', { class: 'card' }, [h('h2', null, '🎯 Ao final desta lição, você será capaz de:'), h('ul', { class: 'checklist' }, l.objectives.map(function (o) { return h('li', null, o); }))]);
      pane.appendChild(c);
      if (p && p.settings.warmup && opts.warmup !== false) {
        pane.appendChild(h('div', { class: 'card warmup' }, [
          h('div', null, [h('h3', null, '🔥 Aquecimento de 2 minutos'), h('p', { class: 'muted' }, '5 números, horas ou datas de ouvido antes de começar. (Dá para desligar no seu perfil.)')]),
          h('a', { class: 'btn', href: '#/treino/aquecimento?next=' + l.id }, 'Fazer aquecimento')
        ]));
      }
    })(panes[0]);

    /* --- vocabulário --- */
    (function (pane) {
      var c = h('div', { class: 'card' });
      c.appendChild(h('div', { class: 'row between' }, [h('h2', null, '📝 Vocabulário-chave'), UI.playBtn(function () { return l.vocabulary.map(function (v) { return v.fr; }); }, { label: 'ouvir todas', small: true, pause: 600 })]));
      c.appendChild(h('p', { class: 'muted sm' }, lang === 'fr' ? 'Estas palavras entram automaticamente na sua revisão quando você concluir a lição.' : 'Ouça cada termo e o exemplo. (A revisão espaçada ainda é só de francês.)'));
      var grid = h('div', { class: 'vocab-grid' });
      l.vocabulary.forEach(function (v) {
        var isVerb = v.pos === 'v';
        var inf = isVerb ? v.fr.replace(/\s+de$/, '') : null;
        grid.appendChild(h('div', { class: 'vocab-item' }, [
          h('div', { class: 'row gap' }, [UI.playBtn(v.fr.replace(' / ', ', '), { small: true }), h('div', null, [
            h('div', { class: 'vocab-fr', lang: lang }, v.fr),
            h('div', { class: 'vocab-pt' }, v.pt + (v.g === 'm' ? ' · masc.' : v.g === 'f' ? ' · fem.' : ''))
          ])]),
          v.ex ? h('div', { class: 'vocab-ex' }, [UI.playBtn(v.ex, { small: true }), UI.frText(v.ex, { source: source, block: false })]) : null,
          inf && LUX.verbSearch.get(inf) ? h('a', { class: 'sm', href: '#/verbos/' + encodeURIComponent(inf) }, 'ver conjugação →') : null
        ]));
      });
      c.appendChild(grid);
      pane.appendChild(c);
    })(panes[1]);

    /* --- leitura --- */
    (function (pane) {
      var r = l.reading;
      var c = h('div', { class: 'card reading' });
      var text = UI.frText(r.text, { source: source });
      var sentences = text._lux.sentences.map(function (s) { return s.text; });
      c.appendChild(h('div', { class: 'row between wrap' }, [
        h('div', null, [h('span', { class: 'tag' }, r.genre), r.title ? h('h2', { lang: lang }, r.title) : null]),
        h('div', { class: 'row gap' }, [UI.speedSelect(), UI.playBtn(sentences, {
          label: 'ouvir o texto', pause: 250,
          onItem: function (i) { UI.highlightSentence(text, i); }, onEnd: function () { UI.highlightSentence(text, -1); }
        })])
      ]));
      c.appendChild(h('p', { class: 'muted sm' }, lang === 'fr' ? 'Clique em qualquer palavra para ver a tradução. Os trechos sublinhados têm uma nota do glossário. Selecione várias palavras para salvar uma expressão.' : 'Toque nos trechos sublinhados para ver a tradução.'));
      c.appendChild(h('div', { class: 'text-box' }, text));
      pane.appendChild(c);
      pane.appendChild(h('h2', { class: 'section-title' }, 'Compreensão do texto'));
      pane.appendChild(exList(r.exercises, 'r'));
    })(panes[2]);

    /* --- audição --- */
    (function (pane) {
      var a = l.listening;
      var spk = {};
      a.speakers.forEach(function (s) { spk[s.id] = s; });
      var rank = LUX.tts.speakerRanks(a.speakers); // 2 homens no diálogo → 2 vozes masculinas diferentes
      var c = h('div', { class: 'card listening' });
      var plays = 0;
      var counter = h('span', { class: 'muted sm' }, 'Ainda não ouviu.');
      var transcript = h('div', { class: 'transcript', hidden: true });
      var lines = [];
      a.script.forEach(function (ln, i) {
        var s = spk[ln.speaker] || {};
        var row = h('div', { class: 'line' }, [
          h('span', { class: 'speaker', 'data-g': s.gender || '' }, s.name || ln.speaker),
          h('div', { class: 'line-text' }, UI.frText(ln.text, { source: source, block: false })),
          UI.playBtn({ text: ln.text, gender: s.gender, rank: rank[ln.speaker] }, { small: true })
        ]);
        lines.push(row);
        transcript.appendChild(row);
      });
      var cur = 0;
      function segs(from) { return a.script.slice(from || 0).map(function (ln) { return { text: ln.text, gender: (spk[ln.speaker] || {}).gender, rank: rank[ln.speaker] }; }); }
      function onItemFrom(base) { return function (i) { cur = base + i; lines.forEach(function (r, k) { r.classList.toggle('current', k === cur); }); }; }
      function count() { plays++; counter.textContent = 'Ouviu ' + U.plural(plays, 'vez', 'vezes') + '.'; if (plays >= 2) revealBtn.disabled = false; }
      var playAll = UI.playBtn(function () { return segs(0); }, { label: 'ouvir o áudio', onStart: count, onItem: onItemFrom(0), onEnd: function () { lines.forEach(function (r) { r.classList.remove('current'); }); }, pause: 450 });
      var prev = h('button', { class: 'btn sm ghost', title: 'Fala anterior', onclick: function () { cur = Math.max(0, cur - 1); speakOne(); } }, '⏮ anterior');
      var again = h('button', { class: 'btn sm ghost', title: 'Repetir a fala atual', onclick: function () { speakOne(); } }, '🔁 repetir');
      var next = h('button', { class: 'btn sm ghost', title: 'Próxima fala', onclick: function () { cur = Math.min(a.script.length - 1, cur + 1); speakOne(); } }, 'próxima ⏭');
      function speakOne() {
        var ln = a.script[cur];
        lines.forEach(function (r, k) { r.classList.toggle('current', k === cur); });
        LUX.tts.speak({ text: ln.text, gender: (spk[ln.speaker] || {}).gender, rank: rank[ln.speaker] }, { onEnd: function () { } });
      }
      var revealBtn = h('button', { class: 'btn', disabled: true }, '👁 Mostrar transcrição');
      revealBtn.addEventListener('click', function () {
        var hidden = transcript.hidden;
        transcript.hidden = !hidden;
        revealBtn.textContent = hidden ? '🙈 Ocultar transcrição' : '👁 Mostrar transcrição';
      });
      c.appendChild(h('div', { class: 'row between wrap' }, [h('div', null, [h('span', { class: 'tag' }, a.genre), a.title ? h('h2', null, a.title) : null]), UI.speedSelect()]));
      c.appendChild(h('div', { class: 'player' }, [playAll, prev, again, next, counter]));
      c.appendChild(h('div', { class: 'speakers muted sm' }, 'Personagens: ' + a.speakers.map(function (s) { return s.name; }).join(', ')));
      c.appendChild(h('p', { class: 'muted sm' }, 'A transcrição fica oculta: ouça pelo menos 2 vezes ou responda às perguntas para liberá-la.'));
      c.appendChild(revealBtn);
      c.appendChild(transcript);
      pane.appendChild(c);
      pane.appendChild(h('h2', { class: 'section-title' }, 'Compreensão oral'));
      var ex = exList(a.exercises, 'a');
      pane.appendChild(ex);
      // libera a transcrição quando todas as questões de áudio forem respondidas
      var check = setInterval(function () {
        if (!document.body.contains(pane)) { clearInterval(check); return; }
        var all = a.exercises.every(function (e, i) { return results['a' + i]; });
        if (all) { revealBtn.disabled = false; clearInterval(check); }
      }, 800);
    })(panes[3]);

    /* --- gramática --- */
    (function (pane) {
      var gr = l.grammar;
      var c = h('div', { class: 'card grammar' });
      c.appendChild(h('div', { class: 'row between wrap' }, [h('h2', null, '📐 ' + gr.title), LUX.data.grammar[gr.topicId] ? h('a', { class: 'btn sm ghost', href: '#/gramatica/' + gr.topicId }, 'ver na gramática de bolso →') : null]));
      c.appendChild(UI.md(gr.explanationPt));
      if (gr.table) c.appendChild(UI.table(gr.table));
      if (gr.examples) {
        var exs = h('div', { class: 'examples' });
        gr.examples.forEach(function (e) { exs.appendChild(UI.example(e.fr, e.pt, source)); });
        c.appendChild(h('h3', null, 'Exemplos'));
        c.appendChild(exs);
      }
      if (gr.ptComparison) c.appendChild(h('div', { class: 'compare' }, [h('h3', null, '🇧🇷 ↔ ' + ({ fr: '🇫🇷', en: '🇬🇧', it: '🇮🇹' }[lang] || '') + ' Comparando com o português'), UI.md(gr.ptComparison)]));
      pane.appendChild(c);
    })(panes[4]);

    /* --- prática --- */
    (function (pane) {
      pane.appendChild(h('h2', { class: 'section-title' }, '✍️ Prática de gramática'));
      pane.appendChild(exList(l.grammarPractice, 'g'));
    })(panes[5]);

    /* --- dica --- */
    (function (pane) {
      pane.appendChild(h('div', { class: 'card tip-card' }, [h('h2', null, '💡 Dica para brasileiros'), UI.md(l.tipForBrazilians)]));
    })(panes[6]);

    /* --- resumo --- */
    var endPane = panes[7];
    function computeScore() {
      var tot = 0, w = 0, answered = 0;
      exKeys.forEach(function (k) {
        var r = results[k];
        var wt = r ? r.weight : 1;
        w += wt;
        if (r) { tot += r.score * wt; answered++; }
      });
      return { score: w ? tot / w : 0, answered: answered, total: exKeys.length };
    }
    var saved = false;
    function drawSummary() {
      endPane.innerHTML = '';
      var s = computeScore();
      var pct = Math.round(s.score * 100);
      var c = h('div', { class: 'card end-card' });
      c.appendChild(h('h2', null, '🏁 Resumo da lição'));
      var stSaved = p && p.progress[l.id];
      if (!s.answered && stSaved && !saved) {
        var bp = Math.round(stSaved.best * 100);
        c.appendChild(h('div', { class: 'score-ring ' + (bp >= 70 ? 'ok' : 'low') }, [h('b', null, bp + '%'), h('span', { class: 'muted sm' }, 'melhor nota')]));
        c.appendChild(h('p', null, 'Esta é a sua melhor nota salva (' + U.plural(stSaved.attempts, 'tentativa', 'tentativas') + (stSaved.completedAt ? ', concluída em ' + U.fmtDate(stSaved.completedAt) : '') + '). Para tentar de novo, responda aos exercícios: o Resumo passa a mostrar a nova tentativa.'));
        c.appendChild(h('div', { class: 'row gap wrap' }, [h('a', { class: 'btn', href: route + '?step=2&r=' + Date.now() }, '✍️ Fazer os exercícios de novo')]));
        endPane.appendChild(c);
        return;
      }
      c.appendChild(h('div', { class: 'score-ring ' + (pct >= 70 ? 'ok' : 'low') }, [h('b', null, pct + '%'), h('span', { class: 'muted sm' }, stSaved ? 'nesta tentativa' : 'nota')]));
      c.appendChild(h('p', null, 'Você respondeu ' + s.answered + ' de ' + s.total + ' exercícios.' + (s.answered < s.total ? ' Exercícios sem resposta contam como zero.' : '') + (stSaved && !saved ? ' Sua melhor nota salva é ' + Math.round(stSaved.best * 100) + '%; salvar só substitui se esta for maior.' : '')));
      var parts = h('ul', { class: 'summary-list' });
      [['r', 'Leitura', l.reading.exercises], ['a', 'Audição', l.listening.exercises], ['g', 'Prática', l.grammarPractice]].forEach(function (sec) {
        var done = sec[2].filter(function (e, i) { return results[sec[0] + i]; });
        var sc = sec[2].reduce(function (acc, e, i) { var r = results[sec[0] + i]; return acc + (r ? r.score : 0); }, 0);
        parts.appendChild(h('li', null, sec[1] + ': ' + done.length + '/' + sec[2].length + ' respondidos · ' + Math.round(sec[2].length ? sc / sec[2].length * 100 : 0) + '%'));
      });
      c.appendChild(parts);
      var finish = h('button', { class: 'btn primary' }, saved ? '✓ Resultado salvo' : 'Concluir lição e salvar');
      finish.disabled = saved || !s.answered;
      if (!saved && !s.answered) finish.title = 'Responda pelo menos um exercício para salvar.';
      finish.addEventListener('click', function () {
        if (!p) return;
        var rec = LUX.profiles.saveLessonResult(p, l.id, s.score, null);
        var added = 0;
        if (lang === 'fr') l.vocabulary.forEach(function (v) { // revisão (SRS) ainda é só de francês
          added += LUX.srs.addWord(p, { fr: v.fr, display: v.fr, lemma: stripArticle(v.fr), pt: v.pt, gender: v.g === 'm' || v.g === 'f' ? v.g : null, example: v.ex || '', source: l.id });
        });
        saved = true;
        LUX.sidebar.render();
        UI.toast(rec.status === 'done' ? 'Lição concluída! ' + added + ' cartões novos na revisão.' : 'Resultado salvo. Você precisa de 70% para desbloquear a próxima lição.', rec.status === 'done' ? 'ok' : '');
        drawSummary();
      });
      c.appendChild(h('div', { class: 'row gap wrap' }, [finish,
        h('a', { class: 'btn ghost', href: route + '?r=' + Date.now() }, '↺ Refazer a lição')]));
      if (saved && opts.afterSave) opts.afterSave(c, p.progress[l.id], pct);
      else if (saved) {
        var st = p.progress[l.id];
        var nx = L.next(l.id);
        if (st && st.status === 'done') {
          c.appendChild(h('div', { class: 'banner ok' }, [h('b', null, '🎉 Parabéns! '), 'Lição concluída com ' + pct + '%.']));
          var actions = h('div', { class: 'row gap wrap' });
          if (LUX.levelTests && LUX.levelTests.isUnlocked(p, l.level) && !(p.levelTests[l.level] && p.levelTests[l.level].passed) && (!nx || LUX.data.lessons[nx].level !== l.level))
            actions.appendChild(h('a', { class: 'btn primary', href: '#/teste/' + l.level }, '🎓 Fazer o teste de nível ' + l.level + ' →'));
          if (nx) actions.appendChild(h('a', { class: 'btn' + (actions.children.length ? '' : ' primary'), href: '#/licao/' + nx }, 'Próxima lição →'));
          else if (!actions.children.length) actions.appendChild(h('div', { class: 'muted' }, 'Esta é a última lição disponível por enquanto. As próximas unidades chegam nas próximas fases do curso.'));
          actions.appendChild(h('a', { class: 'btn', href: '#/revisar' }, '🔁 Revisar vocabulário'));
          c.appendChild(actions);
        } else {
          c.appendChild(h('div', { class: 'banner warn' }, 'Você precisa de pelo menos 70% para desbloquear a próxima lição. Refaça os exercícios com calma — e use a transcrição e o glossário!'));
        }
      }
      endPane.appendChild(c);
    }

    function drawStepper() {
      stepper.innerHTML = '';
      STEPS.forEach(function (s, i) {
        var prefix = { read: 'r', listen: 'a', practice: 'g' }[s.id];
        var done = false;
        if (prefix) {
          var keys = exKeys.filter(function (k) { return k.charAt(0) === prefix; });
          done = keys.length && keys.every(function (k) { return results[k]; });
        } else done = i < step;
        var b = h('button', {
          class: 'step' + (i === step ? ' active' : '') + (done ? ' done' : ''), 'aria-current': i === step ? 'step' : null,
          onclick: function () { go(i); }
        }, [h('span', { class: 'step-ico', 'aria-hidden': 'true' }, done && i !== step ? '✓' : s.icon), h('span', { class: 'step-lbl' }, s.label)]);
        stepper.appendChild(h('li', null, b));
      });
    }
    function drawNav() {
      nav.innerHTML = '';
      if (step > 0) nav.appendChild(h('button', { class: 'btn ghost', onclick: function () { go(step - 1); } }, '← ' + STEPS[step - 1].label));
      else nav.appendChild(h('span'));
      nav.appendChild(h('span', { class: 'muted sm' }, (step + 1) + ' / ' + STEPS.length));
      if (step < STEPS.length - 1) nav.appendChild(h('button', { class: 'btn primary', onclick: function () { go(step + 1); } }, STEPS[step + 1].label + ' →'));
      else nav.appendChild(h('span'));
    }
    function go(i) {
      LUX.tts.stop();
      step = i;
      panes.forEach(function (pn, k) { pn.hidden = k !== i; });
      if (i === STEPS.length - 1) drawSummary();
      drawStepper(); drawNav();
      head.scrollIntoView({ block: 'start' });
    }
    go(step);
    return {
      go: go,
      isSaved: function () { return saved; },
      stepLabel: function () { return STEPS[step].label; }
    };
  }
})(window);
