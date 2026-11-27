/* LUX — teste de nível (fim de cada nível) e certificado.
   Conteúdo: LUX.registerLevelTest({ level, title, intro, names, sections: [
     { id: 'read', title, icon, texts: [{ genre, title, text, exercises }] },
     { id: 'listen', title, icon, audios: [{ genre, title, speakers, script, exercises }] },
     { id: 'grammar', title, icon, exercises: [] } ] }) */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, X = LUX.ex;
  var PASS = 0.7, SECTION_MIN = 0.5;

  var T = LUX.levelTests = {};
  T.lessonsOf = function (level) {
    var lv = LUX.manifest.levels.filter(function (x) { return x.id === level; })[0];
    if (!lv) return [];
    var ids = [];
    lv.units.forEach(function (u) { ids = ids.concat(u.lessons.filter(function (id) { return LUX.data.lessons[id]; })); });
    return ids;
  };
  /* o teste existe quando todas as unidades do nível têm as 5 lições */
  T.available = function (level) {
    var lv = LUX.manifest.levels.filter(function (x) { return x.id === level; })[0];
    return !!(lv && LUX.data.levelTests[level] && lv.units.every(function (u) { return u.lessons.filter(function (id) { return LUX.data.lessons[id]; }).length >= 5; }));
  };
  T.isUnlocked = function (p, level) {
    if (!p || !T.available(level)) return false;
    if (p.unlockedAll) return true;
    return T.lessonsOf(level).every(function (id) { return p.progress[id] && p.progress[id].status === 'done'; });
  };
  T.weightOf = function (ex) {
    if (ex.type === 'true_false_nm') return Math.max(2, Math.ceil(ex.statements.length / 2));
    if (ex.type === 'fill_blank') return Math.max(1, Math.ceil(ex.items.length / 2));
    if (ex.type === 'match') return 2;
    return 1;
  };
  /* todos os exercícios de uma seção, achatados */
  T.sectionExercises = function (sec) {
    var out = [];
    (sec.texts || []).forEach(function (t) { out = out.concat(t.exercises || []); });
    (sec.audios || []).forEach(function (a) { out = out.concat(a.exercises || []); });
    out = out.concat(sec.exercises || []);
    return out;
  };

  LUX.router.add('/teste/:level', function (params) {
    var level = params.level;
    var t = LUX.data.levelTests[level];
    var p = LUX.profiles.current();
    return {
      title: 'Teste de nível ' + level, nav: 'curso',
      crumbs: [['Curso', '#/curso'], ['Teste de nível ' + level, null]],
      render: function (main) {
        if (!t || !T.available(level)) { main.appendChild(UI.empty('🎓', 'Teste ainda não disponível', 'O teste do nível ' + level + ' chega quando todas as unidades do nível estiverem prontas.', h('a', { class: 'btn primary', href: '#/curso' }, 'Voltar ao curso'))); return; }
        if (params.query.cert && p.levelTests[level] && p.levelTests[level].passed) { renderCertificate(main, t, p); return; }
        if (!T.isUnlocked(p, level)) {
          var ids = T.lessonsOf(level);
          var done = ids.filter(function (id) { return p.progress[id] && p.progress[id].status === 'done'; }).length;
          main.appendChild(UI.empty('🔒', 'Teste de nível ' + level + ' bloqueado', 'Conclua todas as lições do nível com 70% ou mais para fazer o teste. Você já concluiu **' + done + ' de ' + ids.length + '**. (Quem já tem o nível pode usar "Desbloquear tudo" em **Perfil e configurações**.)', h('a', { class: 'btn primary', href: '#/curso' }, 'Voltar ao curso')));
          return;
        }
        if (params.query.start) renderTest(main, t, p);
        else renderIntro(main, t, p);
      }
    };
  });

  function renderIntro(main, t, p) {
    var rec = p.levelTests[t.level];
    main.appendChild(UI.pageHead('🎓 ' + t.title, t.subtitle || ''));
    var c = h('section', { class: 'card' });
    c.appendChild(UI.md(t.intro));
    var ul = h('ul', { class: 'summary-list' });
    t.sections.forEach(function (s) {
      var n = T.sectionExercises(s).length;
      ul.appendChild(h('li', null, (s.icon || '') + ' ' + s.title + ' — ' + U.plural(n, 'questão', 'questões')));
    });
    c.appendChild(ul);
    c.appendChild(h('p', { class: 'muted sm' }, 'Aprovação: ' + Math.round(PASS * 100) + '% no total e pelo menos ' + Math.round(SECTION_MIN * 100) + '% em cada parte. No teste não há glossário nem transcrição: os áudios podem ser ouvidos no máximo 3 vezes cada. Reserve cerca de 40 minutos.'));
    if (rec) c.appendChild(h('div', { class: 'banner ' + (rec.passed ? 'ok' : 'info') }, (rec.passed ? '🎉 Você já foi aprovado(a) neste nível. ' : '') + 'Tentativas: ' + rec.attempts + ' · melhor nota: ' + Math.round(rec.best * 100) + '%.'));
    c.appendChild(h('div', { class: 'row gap wrap' }, [
      h('a', { class: 'btn primary big', href: '#/teste/' + t.level + '?start=' + Date.now() }, rec ? 'Refazer o teste' : 'Começar o teste'),
      rec && rec.passed ? h('a', { class: 'btn', href: '#/teste/' + t.level + '?cert=1' }, '📜 Ver certificado') : null
    ]));
    main.appendChild(c);
  }

  function renderTest(main, t, p) {
    var source = { lessonId: 'test-' + t.level, title: t.title, route: '#/teste/' + t.level };
    var results = {}, keysBySection = {}, weights = {};

    main.appendChild(UI.pageHead('🎓 ' + t.title, 'Responda tudo e clique em **Finalizar** no fim da página.'));
    var bar = h('div', { class: 'test-progress muted sm' });
    main.appendChild(bar);

    function ctx(secId, key, ex) {
      keysBySection[secId].push(key);
      weights[key] = T.weightOf(ex);
      return { source: source, onResult: function (score) { results[key] = score; drawBar(); } };
    }
    function exBlock(list, secId, prefix) {
      var wrap = h('div', { class: 'ex-list' });
      list.forEach(function (ex, i) {
        var n = keysBySection[secId].length + 1;
        wrap.appendChild(h('div', { class: 'card ex-card no-popup' }, [h('div', { class: 'ex-num' }, String(n)), X.render(ex, ctx(secId, prefix + i, ex))]));
      });
      return wrap;
    }

    t.sections.forEach(function (sec) {
      keysBySection[sec.id] = [];
      var s = h('section', { class: 'test-section' });
      s.appendChild(h('h2', { class: 'section-title' }, (sec.icon || '') + ' ' + sec.title));
      (sec.texts || []).forEach(function (tx, ti) {
        var c = h('div', { class: 'card reading no-popup' });
        c.appendChild(h('div', null, [h('span', { class: 'tag' }, tx.genre), tx.title ? h('h3', { lang: 'fr' }, tx.title) : null]));
        c.appendChild(h('div', { class: 'text-box' }, UI.frText(U.stripGloss(tx.text), { source: source, gloss: false })));
        s.appendChild(c);
        s.appendChild(exBlock(tx.exercises, sec.id, sec.id + 't' + ti + '-'));
      });
      (sec.audios || []).forEach(function (a, ai) {
        var spk = {};
        a.speakers.forEach(function (x) { spk[x.id] = x; });
        var rank = LUX.tts.speakerRanks(a.speakers);
        var plays = 0, MAX = 3;
        var counter = h('span', { class: 'muted sm' }, 'Você pode ouvir ' + MAX + ' vezes.');
        var btn = UI.playBtn(function () {
          return a.script.map(function (ln) { return { text: ln.text, gender: (spk[ln.speaker] || {}).gender, rank: rank[ln.speaker] }; });
        }, {
          label: 'ouvir o áudio', pause: 450,
          onStart: function () {
            plays++;
            counter.textContent = plays >= MAX ? 'Última audição.' : 'Ouviu ' + U.plural(plays, 'vez', 'vezes') + ' (máximo ' + MAX + ').';
          },
          onEnd: function () { if (plays >= MAX) btn.disabled = true; }
        });
        var c = h('div', { class: 'card listening' }, [
          h('div', null, [h('span', { class: 'tag' }, a.genre), a.title ? h('h3', null, a.title) : null]),
          h('div', { class: 'player' }, [btn, UI.speedSelect(), counter]),
          h('div', { class: 'speakers muted sm' }, 'Personagens: ' + a.speakers.map(function (x) { return x.name; }).join(', '))
        ]);
        s.appendChild(c);
        s.appendChild(exBlock(a.exercises, sec.id, sec.id + 'a' + ai + '-'));
      });
      if (sec.exercises) s.appendChild(exBlock(sec.exercises, sec.id, sec.id + 'g-'));
      main.appendChild(s);
    });

    var total = 0;
    Object.keys(keysBySection).forEach(function (k) { total += keysBySection[k].length; });
    function answered() { return Object.keys(results).length; }
    function drawBar() { bar.textContent = 'Respondidas: ' + answered() + ' de ' + total; }
    drawBar();

    function sectionScore(id) {
      var tot = 0, w = 0;
      keysBySection[id].forEach(function (k) { w += weights[k]; tot += (results[k] || 0) * weights[k]; });
      return w ? tot / w : 0;
    }
    var finish = h('button', { class: 'btn primary big' }, 'Finalizar o teste');
    finish.addEventListener('click', function () {
      var missingN = total - answered();
      var go = function () {
        var secs = {}, tot = 0, w = 0;
        t.sections.forEach(function (sec) {
          secs[sec.id] = sectionScore(sec.id);
          keysBySection[sec.id].forEach(function (k) { w += weights[k]; tot += (results[k] || 0) * weights[k]; });
        });
        var score = w ? tot / w : 0;
        var passedNow = score >= PASS && Object.keys(secs).every(function (k) { return secs[k] >= SECTION_MIN; });
        LUX.profiles.saveLevelTest(p, t.level, score, secs, passedNow);
        LUX.tts.stop();
        main.innerHTML = '';
        renderResult(main, t, p, score, secs, passedNow);
        main.scrollIntoView({ block: 'start' });
      };
      if (missingN > 0) UI.confirm(U.plural(missingN, 'questão está', 'questões estão') + ' sem resposta e vão contar como zero. Finalizar mesmo assim?', { ok: 'Finalizar' }).then(function (ok) { if (ok) go(); });
      else go();
    });
    main.appendChild(h('div', { class: 'card end-card' }, [h('p', null, 'Confira se respondeu todas as questões (o botão "Verificar" de cada uma).'), finish]));
  }

  function renderResult(main, t, p, score, secs, passed) {
    var pct = Math.round(score * 100);
    var c = h('section', { class: 'card end-card' });
    c.appendChild(h('h2', null, '🎓 Resultado do ' + t.title));
    c.appendChild(h('div', { class: 'score-ring ' + (passed ? 'ok' : 'low') }, [h('b', null, pct + '%'), h('span', { class: 'muted sm' }, 'nota')]));
    var ul = h('ul', { class: 'summary-list' });
    t.sections.forEach(function (s) {
      var v = Math.round((secs[s.id] || 0) * 100);
      ul.appendChild(h('li', { class: v < SECTION_MIN * 100 ? 'low' : '' }, (s.icon || '') + ' ' + s.title + ': ' + v + '%' + (v < SECTION_MIN * 100 ? ' (abaixo do mínimo de ' + Math.round(SECTION_MIN * 100) + '%)' : '')));
    });
    c.appendChild(ul);
    if (passed) {
      c.appendChild(h('div', { class: 'banner ok' }, [h('b', null, '🎉 Félicitations ! '), 'Você foi aprovado(a) no nível ' + t.level + '.']));
      c.appendChild(h('div', { class: 'row gap wrap' }, [
        h('a', { class: 'btn primary', href: '#/teste/' + t.level + '?cert=1' }, '📜 Ver certificado'),
        h('a', { class: 'btn', href: '#/curso' }, 'Voltar ao curso')
      ]));
    } else {
      var weak = t.sections.filter(function (s) { return (secs[s.id] || 0) < 0.7; }).map(function (s) { return s.title.toLowerCase(); });
      c.appendChild(h('div', { class: 'banner warn' }, 'Ainda não foi desta vez: são necessários ' + Math.round(PASS * 100) + '% no total e ' + Math.round(SECTION_MIN * 100) + '% em cada parte.' + (weak.length ? ' Revise principalmente: ' + weak.join(', ') + '. As lições de revisão (a 5ª de cada unidade) e a aba Gramática ajudam.' : '')));
      c.appendChild(h('div', { class: 'row gap wrap' }, [
        h('a', { class: 'btn primary', href: '#/teste/' + t.level + '?start=' + Date.now() }, 'Tentar de novo'),
        h('a', { class: 'btn', href: '#/revisar' }, '🔁 Revisar vocabulário'),
        h('a', { class: 'btn ghost', href: '#/curso' }, 'Voltar ao curso')
      ]));
    }
    main.appendChild(c);
  }

  function renderCertificate(main, t, p) {
    var rec = p.levelTests[t.level];
    var cr = rec.cert || { score: rec.best, sections: rec.sections || {}, at: rec.passedAt };
    var date = new Date(rec.passedAt || cr.at);
    var dateFr = LUX.numbers ? date.getDate() + ' ' + LUX.numbers.MONTHS[date.getMonth()] + ' ' + date.getFullYear() : date.toLocaleDateString('fr-FR');
    var cert = h('div', { class: 'certificate', style: '--c:' + (p.color || 'var(--primary)') }, [
      h('div', { class: 'cert-seal', 'aria-hidden': 'true' }, '🎓'),
      h('div', { class: 'cert-kicker', lang: 'fr' }, 'Certificat de réussite'),
      h('div', { class: 'muted' }, 'Certificado de conclusão'),
      h('p', { class: 'cert-text' }, 'Certificamos que'),
      h('div', { class: 'cert-name' }, p.name),
      h('p', { class: 'cert-text' }, 'concluiu o curso Lux de francês e foi aprovado(a) no'),
      h('div', { class: 'cert-level' }, t.title),
      h('p', { class: 'cert-desc' }, t.certificateText || ''),
      h('div', { class: 'cert-scores' }, t.sections.map(function (s) {
        return h('div', null, [h('b', null, Math.round(((cr.sections || {})[s.id] || 0) * 100) + '%'), h('span', { class: 'muted sm' }, s.title)]);
      }).concat([h('div', null, [h('b', null, Math.round(cr.score * 100) + '%'), h('span', { class: 'muted sm' }, 'Nota final')])])),
      h('div', { class: 'cert-foot' }, [h('span', { lang: 'fr' }, 'Fait le ' + dateFr), h('span', null, 'Lux · curso de francês A1 → B2')])
    ]);
    main.appendChild(cert);
    main.appendChild(h('div', { class: 'row gap wrap no-print cert-actions' }, [
      h('button', { class: 'btn primary', onclick: function () { g.print(); } }, '🖨 Imprimir / salvar em PDF'),
      h('a', { class: 'btn', href: '#/curso' }, 'Voltar ao curso')
    ]));
    main.appendChild(h('p', { class: 'muted sm no-print' }, 'Certificado simbólico de progresso pessoal, sem valor oficial. Para um diploma reconhecido, procure o DELF (A1, A2, B1, B2) da France Éducation international.'));
  }
})(window);
