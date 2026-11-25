/* LUX — aba Revisar: cartões que vencem hoje (revisão espaçada). */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, R = LUX.srs;

  var KIND = { 'fr-pt': 'Francês → português', 'pt-fr': 'Português → francês', gender: 'Gênero: le ou la?', verb: 'Verbo' };

  LUX.router.add('/revisar', function () {
    return {
      title: 'Revisar', nav: 'revisar', crumbs: [['Estudar', null], ['Revisar', null]],
      render: function (main) {
        var p = LUX.profiles.current();
        main.appendChild(UI.pageHead('Revisar', 'Revisão espaçada: cada cartão volta no momento certo para você não esquecer.'));
        var queue = R.due(p);
        var total = R.total(p);
        var doneCount = 0;
        if (!total) {
          main.appendChild(UI.empty('🗃️', 'Nenhum cartão ainda', 'Conclua uma lição, salve palavras no **Caderno** ou adicione verbos pela aba **Verbos** para criar seus cartões.', h('a', { class: 'btn primary', href: '#/curso' }, 'Ir para o curso')));
          return;
        }
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
            if (q === 0) queue.push(p.srs[c.id]); // volta no fim da sessão
            doneCount++;
            next();
          }));
        }
        next();
      }
    };
  });

  function doneState(p, n) {
    var nextDue = Object.keys(p.srs).map(function (k) { return p.srs[k].due; }).sort()[0];
    return UI.empty('🎉', n ? 'Revisão concluída!' : 'Tudo em dia!', (n ? 'Você revisou ' + U.plural(n, 'cartão', 'cartões') + '. ' : '') + (nextDue ? 'Próximos cartões: **' + U.fmtDate(nextDue + 'T12:00') + '**.' : ''),
      h('div', { class: 'row gap' }, [h('a', { class: 'btn primary', href: '#/curso' }, 'Voltar ao curso'), h('a', { class: 'btn', href: '#/treino/aquecimento' }, 'Treinar 2 minutos')]));
  }

  function cardView(p, c, onGrade) {
    var box = h('div', { class: 'card flash' });
    box.appendChild(h('div', { class: 'flash-kind muted sm' }, KIND[c.kind] || ''));
    var front = h('div', { class: 'flash-front' });
    var back = h('div', { class: 'flash-back', hidden: true });
    var frSpeak = c.kind === 'gender' ? (c.gender === 'f' ? 'la ' : 'le ') + c.fr : c.fr;
    if (c.kind === 'fr-pt' || c.kind === 'verb') {
      front.appendChild(h('div', { class: 'row gap center' }, [UI.playBtn(c.fr.replace(' / ', ', ')), h('div', { class: 'flash-word', lang: 'fr' }, c.fr)]));
      back.appendChild(h('div', { class: 'flash-answer' }, c.pt));
    } else if (c.kind === 'pt-fr') {
      front.appendChild(h('div', { class: 'flash-word' }, c.pt));
      front.appendChild(h('p', { class: 'muted sm' }, 'Como se diz em francês? Pense na resposta (com o artigo, se for substantivo).'));
      back.appendChild(h('div', { class: 'row gap center' }, [UI.playBtn(c.fr.replace(' / ', ', ')), h('div', { class: 'flash-answer', lang: 'fr' }, c.fr)]));
    } else if (c.kind === 'gender') {
      front.appendChild(h('div', { class: 'flash-word', lang: 'fr' }, ['le ou la? ', h('span', { class: 'blank' }, '___'), ' ' + c.fr]));
      front.appendChild(h('p', { class: 'muted sm' }, '(' + c.pt + ')'));
      var choices = h('div', { class: 'row gap center' });
      ['le', 'la'].forEach(function (a) {
        choices.appendChild(h('button', {
          class: 'btn big', onclick: function () {
            var ok = (a === 'la') === (c.gender === 'f');
            reveal();
            back.insertBefore(h('div', { class: 'banner ' + (ok ? 'ok' : 'warn') }, ok ? '✓ Isso mesmo!' : '✗ É ' + (c.gender === 'f' ? 'feminino' : 'masculino') + '.'), back.firstChild);
          }
        }, a));
      });
      front.appendChild(choices);
      back.appendChild(h('div', { class: 'row gap center' }, [UI.playBtn(frSpeak), h('div', { class: 'flash-answer', lang: 'fr' }, frSpeak)]));
    }
    if (c.example) back.appendChild(UI.example(c.example, '', null));
    box.appendChild(front);
    box.appendChild(back);
    var showBtn = h('button', { class: 'btn primary big' }, 'Mostrar resposta');
    var grades = h('div', { class: 'grades', hidden: true });
    [[0, 'Errei', 'bad'], [1, 'Difícil', 'hard'], [2, 'Bom', 'good'], [3, 'Fácil', 'easy']].forEach(function (gq) {
      grades.appendChild(h('button', { class: 'grade ' + gq[2], onclick: function () { onGrade(gq[0]); } }, [h('b', null, gq[1]), h('span', { class: 'muted sm' }, R.preview(c, gq[0]))]));
    });
    function reveal() { back.hidden = false; showBtn.hidden = true; grades.hidden = false; var f = grades.querySelector('.good'); if (f) f.focus(); if (c.kind === 'pt-fr') LUX.tts.speak(c.fr.replace(' / ', ', ')); }
    showBtn.addEventListener('click', reveal);
    if (c.kind !== 'gender') box.appendChild(showBtn);
    box.appendChild(grades);
    box.appendChild(h('p', { class: 'muted sm kbd-hint' }, 'Atalhos: Espaço = mostrar · 1 errei · 2 difícil · 3 bom · 4 fácil'));
    function key(e) {
      if (!document.body.contains(box)) { document.removeEventListener('keydown', key); return; }
      if (/INPUT|TEXTAREA/.test((document.activeElement || {}).tagName)) return;
      if (e.key === ' ' && !showBtn.hidden && c.kind !== 'gender') { e.preventDefault(); reveal(); }
      if (!grades.hidden && /^[1-4]$/.test(e.key)) { document.removeEventListener('keydown', key); onGrade(+e.key - 1); }
    }
    document.addEventListener('keydown', key);
    return box;
  }
})(window);
