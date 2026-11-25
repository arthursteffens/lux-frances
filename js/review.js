/* LUX — aba Revisar: cartões que vencem hoje (revisão espaçada).
   Dois modos (preferência do perfil, settings.reviewMode):
   - 'recall' (padrão): cartão clássico — pensar na resposta, mostrar e se autoavaliar.
   - 'choice': pergunta + 4 alternativas. Errou → o cartão volta hoje; acertou → a pessoa diz se foi difícil, bom ou fácil. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, R = LUX.srs;

  var KIND = { 'fr-pt': 'Francês → português', 'pt-fr': 'Português → francês', gender: 'Gênero: le ou la?', verb: 'Verbo' };
  var QUESTION = { 'fr-pt': 'O que significa?', verb: 'O que significa este verbo?', 'pt-fr': 'Como se diz em francês?' };

  function mode(p) {
    if (!p) return 'recall';
    // migração única: o padrão passou a ser "Só lembrar" — vale também para quem já tinha escolhido antes
    if (p.settings.reviewModeV !== 2) { p.settings.reviewMode = 'recall'; p.settings.reviewModeV = 2; LUX.store.save(); }
    return p.settings.reviewMode || 'recall';
  }

  LUX.router.add('/revisar', function () {
    return {
      title: 'Revisar', nav: 'revisar', crumbs: [['Estudar', null], ['Revisar', null]],
      render: function (main) {
        var p = LUX.profiles.current();
        main.appendChild(UI.pageHead('Revisar', 'Revisão espaçada: cada cartão volta no momento certo para você não esquecer.'));
        var queue = spread(R.due(p));
        var total = R.total(p);
        var doneCount = 0;
        if (!total) {
          main.appendChild(UI.empty('🗃️', 'Nenhum cartão ainda', 'Conclua uma lição, salve palavras no **Caderno** ou adicione verbos pela aba **Verbos** para criar seus cartões.', h('a', { class: 'btn primary', href: '#/curso' }, 'Ir para o curso')));
          return;
        }
        main.appendChild(helpBox(p));
        if (!queue.length) { main.appendChild(doneState(p)); return; }
        var info = h('div', { class: 'row between wrap review-info' });
        var progress = h('div', { class: 'review-progress' });
        main.appendChild(info);
        main.appendChild(progress);
        var stage = h('div', { class: 'review-stage' });
        main.appendChild(stage);
        function drawInfo() {
          info.innerHTML = '';
          info.appendChild(h('span', null, [h('b', null, String(queue.length)), ' para revisar agora · ', h('span', { class: 'muted' }, doneCount + ' feitos nesta sessão · ' + total + ' cartões no total')]));
          info.appendChild(modeSwitch(p, function () { next(); }));
          progress.innerHTML = '';
          progress.appendChild(UI.progress(doneCount / (doneCount + queue.length) * 100, 'Progresso da sessão'));
        }
        function next() {
          drawInfo();
          stage.innerHTML = '';
          if (!queue.length) { stage.appendChild(doneState(p, doneCount)); LUX.sidebar.render(); return; }
          stage.appendChild(cardView(p, queue[0], function (q) {
            var c = queue.shift();
            R.grade(p, c, q);
            if (q === 0) queue.push(p.srs[c.id]); // errou: volta no fim desta sessão
            doneCount++;
            next();
          }));
        }
        next();
      }
    };
  });

  /* embaralha a sessão sem deixar dois cartões da mesma palavra em seguida
     (senão o cartão francês → português entrega a resposta do português → francês) */
  function wordKey(c) { return String(c.id).split(':')[1] || c.id; } // w:<palavra>:fr, w:<palavra>:pt, g:<palavra>, v:<verbo>, v:<verbo>:pt
  function spread(list) {
    var rest = U.shuffle(list.slice()), out = [];
    while (rest.length) {
      var last = out.length ? wordKey(out[out.length - 1]) : null;
      var i = 0;
      while (i < rest.length && wordKey(rest[i]) === last) i++;
      out.push(rest.splice(i < rest.length ? i : 0, 1)[0]);
    }
    return out;
  }

  /* ---------- ajuda e modo ---------- */
  function helpBox(p) {
    return h('details', { class: 'card howto review-help' }, [
      h('summary', null, '❓ Como funciona a revisão'),
      UI.md('Cada palavra das lições vira **cartões** (francês → português, português → francês e, nos substantivos, *le* ou *la*). ' +
        'O app mostra cada cartão **no dia em que você está prestes a esquecer**: quem você acerta volta daqui a alguns dias, depois semanas, depois meses; quem você erra volta hoje mesmo.\n\n' +
        '**Modo só lembrar** (padrão): pense na resposta *antes* de clicar em "Mostrar resposta" e depois seja honesto(a) sobre como foi:\n' +
        '- **Errei** — não lembrei → volta ainda nesta sessão.\n' +
        '- **Difícil** — lembrei, mas precisei pensar muito → volta mais cedo.\n' +
        '- **Bom** — lembrei normalmente → intervalo padrão.\n' +
        '- **Fácil** — sabia na hora → volta bem mais tarde.\n\n' +
        '**Modo alternativas** (opcional): responda escolhendo uma das 4 opções. Se errar, o cartão volta ainda nesta sessão; se acertar, diga se foi difícil, bom ou fácil.\n\n' +
        'Embaixo de cada botão aparece quando o cartão volta (ex.: "em 4 dias"). Uns 10 minutos por dia bastam.')
    ]);
  }
  function modeSwitch(p, onChange) {
    var wrap = h('div', { class: 'seg', role: 'group', 'aria-label': 'Modo de revisão' });
    [['recall', 'Só lembrar'], ['choice', 'Alternativas']].forEach(function (m) {
      wrap.appendChild(h('button', { class: 'seg-btn' + (mode(p) === m[0] ? ' on' : ''), 'aria-pressed': mode(p) === m[0] ? 'true' : 'false', onclick: function () {
        if (mode(p) === m[0]) return;
        p.settings.reviewMode = m[0]; LUX.store.save();
        onChange();
      } }, m[1]));
    });
    return wrap;
  }

  function doneState(p, n) {
    var nextDue = Object.keys(p.srs).map(function (k) { return p.srs[k].due; }).sort()[0];
    return UI.empty('🎉', n ? 'Revisão concluída!' : 'Tudo em dia!', (n ? 'Você revisou ' + U.plural(n, 'cartão', 'cartões') + '. ' : '') + (nextDue ? 'Próximos cartões: **' + U.fmtDate(nextDue + 'T12:00') + '**.' : ''),
      h('div', { class: 'row gap' }, [h('a', { class: 'btn primary', href: '#/curso' }, 'Voltar ao curso'), h('a', { class: 'btn', href: '#/treino/aquecimento' }, 'Treinar 2 minutos')]));
  }

  /* ---------- alternativas ---------- */
  function answerOf(c) { return c.kind === 'pt-fr' ? c.fr : c.pt; }
  /* 3 distratores do mesmo tipo: primeiro dos outros cartões do perfil, depois do léxico */
  function distractors(p, c) {
    var want = c.kind === 'pt-fr' ? 'fr' : 'pt';
    var right = U.norm(answerOf(c));
    var seen = {}; seen[right] = 1;
    var pool = [];
    function add(v) { var k = U.norm(v || ''); if (!k || seen[k]) return; seen[k] = 1; pool.push(v); }
    U.shuffle(Object.keys(p.srs).map(function (k) { return p.srs[k]; })).forEach(function (x) {
      if (x.id === c.id || x.kind === 'gender') return;
      if (U.norm(x.fr) === U.norm(c.fr)) return; // o par do mesmo cartão (fr↔pt) daria a resposta
      add(want === 'fr' ? x.fr : x.pt);
    });
    if (pool.length < 3) U.shuffle((LUX.data.lexicon || []).slice()).slice(0, 60).forEach(function (e) {
      if (e.p === 'n' && want === 'fr' && e.g) add((e.g === 'f' ? 'la ' : 'le ') + e.w); else add(want === 'fr' ? e.w : e.t);
    });
    return pool.slice(0, 3);
  }

  /* ---------- cartão ---------- */
  function cardView(p, c, onGrade) {
    var box = h('div', { class: 'card flash', 'data-card': c.id });
    var choiceMode = mode(p) === 'choice' && c.kind !== 'gender';
    box.appendChild(h('div', { class: 'flash-kind muted sm' }, KIND[c.kind] || ''));
    var front = h('div', { class: 'flash-front' });
    var back = h('div', { class: 'flash-back', hidden: true });
    var frSpeak = c.kind === 'gender' ? (c.gender === 'f' ? 'la ' : 'le ') + c.fr : c.fr;
    var answered = false;

    // pergunta
    if (c.kind === 'fr-pt' || c.kind === 'verb') {
      front.appendChild(h('div', { class: 'row gap center' }, [UI.playBtn(c.fr.replace(' / ', ', ')), h('div', { class: 'flash-word', lang: 'fr' }, c.fr)]));
      front.appendChild(h('p', { class: 'flash-q' }, QUESTION[c.kind] + (choiceMode ? '' : ' Pense na resposta e depois clique em "Mostrar resposta".')));
      back.appendChild(h('div', { class: 'flash-answer' }, c.pt));
    } else if (c.kind === 'pt-fr') {
      front.appendChild(h('div', { class: 'flash-word' }, c.pt));
      front.appendChild(h('p', { class: 'flash-q' }, QUESTION[c.kind] + (choiceMode ? '' : ' Pense na resposta (com o artigo, se for substantivo) e depois clique em "Mostrar resposta".')));
      back.appendChild(h('div', { class: 'row gap center' }, [UI.playBtn(c.fr.replace(' / ', ', ')), h('div', { class: 'flash-answer', lang: 'fr' }, c.fr)]));
    } else if (c.kind === 'gender') {
      front.appendChild(h('div', { class: 'flash-word', lang: 'fr' }, ['le ou la? ', h('span', { class: 'blank' }, '___'), ' ' + c.fr]));
      front.appendChild(h('p', { class: 'muted sm' }, '(' + c.pt + ')'));
      back.appendChild(h('div', { class: 'row gap center' }, [UI.playBtn(frSpeak), h('div', { class: 'flash-answer', lang: 'fr' }, frSpeak)]));
    }
    if (c.example) back.appendChild(UI.example(c.example, '', null));
    box.appendChild(front);
    box.appendChild(back);

    // avaliação (depois de responder)
    var gradeHelp = h('p', { class: 'grade-help', hidden: true });
    var grades = h('div', { class: 'grades', hidden: true });
    var cont = h('button', { class: 'btn primary big', hidden: true, onclick: function () { onGrade(0); } }, 'Continuar →');
    var GR = [[0, 'Errei', 'bad', 'não lembrei'], [1, 'Difícil', 'hard', 'lembrei com esforço'], [2, 'Bom', 'good', 'lembrei'], [3, 'Fácil', 'easy', 'sabia na hora']];
    function drawGrades(onlyRight) {
      grades.innerHTML = '';
      grades.classList.toggle('three', !!onlyRight);
      GR.filter(function (gq) { return !onlyRight || gq[0] > 0; }).forEach(function (gq) {
        grades.appendChild(h('button', { class: 'grade ' + gq[2], 'data-q': gq[0], onclick: function () { onGrade(gq[0]); } }, [
          h('b', null, gq[1]), h('span', { class: 'sm' }, gq[3]), h('span', { class: 'muted sm' }, 'volta ' + R.preview(c, gq[0]))
        ]));
      });
      grades.hidden = false;
      var f = grades.querySelector('.good'); if (f) f.focus();
    }
    function result(ok, msg) {
      answered = true;
      back.hidden = false;
      back.insertBefore(h('div', { class: 'banner ' + (ok ? 'ok' : 'warn') }, msg), back.firstChild);
      if (c.kind === 'pt-fr' || c.kind === 'gender') LUX.tts.speak(c.kind === 'gender' ? frSpeak : c.fr.replace(' / ', ', '));
      if (ok) { gradeHelp.textContent = 'Acertou! Como foi lembrar?'; gradeHelp.hidden = false; drawGrades(true); }
      else { gradeHelp.textContent = 'Este cartão volta ainda nesta sessão.'; gradeHelp.hidden = false; cont.hidden = false; cont.focus(); }
    }

    var options = [];
    if (c.kind === 'gender') {
      var choices = h('div', { class: 'row gap center' });
      ['le', 'la'].forEach(function (a) {
        var b = h('button', { class: 'btn big', onclick: function () {
          if (answered) return;
          var ok = (a === 'la') === (c.gender === 'f');
          b.classList.add(ok ? 'correct' : 'wrong');
          options.forEach(function (x) { if (x !== b && !ok) x.classList.add('correct'); x.disabled = true; });
          result(ok, ok ? '✓ Isso mesmo!' : '✗ É ' + (c.gender === 'f' ? 'feminino: la ' : 'masculino: le ') + c.fr + '.');
        } }, a);
        options.push(b);
        choices.appendChild(b);
      });
      front.appendChild(choices);
    } else if (choiceMode) {
      var right = answerOf(c);
      var opts = U.shuffle([right].concat(distractors(p, c)));
      var list = h('div', { class: 'flash-options' });
      opts.forEach(function (o, i) {
        var b = h('button', { class: 'opt flash-opt', lang: c.kind === 'pt-fr' ? 'fr' : null, onclick: function () {
          if (answered) return;
          var ok = o === right;
          b.classList.add(ok ? 'correct' : 'wrong');
          if (!ok) options.forEach(function (x) { if (x._val === right) x.classList.add('correct'); });
          options.forEach(function (x) { x.disabled = true; });
          result(ok, ok ? '✓ Isso mesmo!' : '✗ A resposta certa é: ' + right);
        } }, [h('span', { class: 'kbd' }, String(i + 1)), ' ' + o]);
        b._val = o;
        options.push(b);
        list.appendChild(b);
      });
      front.appendChild(list);
    }

    // modo "só lembrar"
    var showBtn = h('button', { class: 'btn primary big' }, 'Mostrar resposta');
    function reveal() {
      back.hidden = false; showBtn.hidden = true;
      gradeHelp.textContent = 'Você lembrou? Seja honesto(a): isso decide quando o cartão volta.';
      gradeHelp.hidden = false;
      drawGrades(false);
      if (c.kind === 'pt-fr') LUX.tts.speak(c.fr.replace(' / ', ', '));
    }
    showBtn.addEventListener('click', reveal);
    if (!choiceMode && c.kind !== 'gender') box.appendChild(showBtn);
    box.appendChild(gradeHelp);
    box.appendChild(grades);
    box.appendChild(cont);
    box.appendChild(h('p', { class: 'muted sm kbd-hint' }, choiceMode || c.kind === 'gender'
      ? 'Atalhos: 1–' + options.length + ' escolhem a alternativa · depois, Enter = Bom (ou Continuar)'
      : 'Atalhos: Espaço = mostrar · depois, 1 errei · 2 difícil · 3 bom · 4 fácil'));

    function key(e) {
      if (!document.body.contains(box)) { document.removeEventListener('keydown', key); return; }
      if (/INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName)) return;
      if (choiceMode || c.kind === 'gender') {
        if (!answered && /^[1-9]$/.test(e.key) && options[+e.key - 1]) { e.preventDefault(); options[+e.key - 1].click(); return; }
        if (answered && e.key === 'Enter' && (document.activeElement === document.body || !document.activeElement || document.activeElement.tagName !== 'BUTTON')) {
          e.preventDefault(); if (!cont.hidden) cont.click(); else { var gb = grades.querySelector('.good'); if (gb) gb.click(); }
        }
        return;
      }
      if (e.key === ' ' && !showBtn.hidden) { e.preventDefault(); reveal(); }
      if (!grades.hidden && /^[1-4]$/.test(e.key)) { document.removeEventListener('keydown', key); onGrade(+e.key - 1); }
    }
    document.addEventListener('keydown', key);
    return box;
  }
})(window);
