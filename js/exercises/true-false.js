/* Vrai / Faux / Non mentionné */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;
  /* rótulos no idioma do conteúdo (francês no curso; inglês/italiano nas trilhas profissionais) */
  var LABELS = {
    fr: [['V', 'Vrai'], ['F', 'Faux'], ['NM', 'Non mentionné']],
    en: [['V', 'True'], ['F', 'False'], ['NM', 'Not mentioned']],
    it: [['V', 'Vero'], ['F', 'Falso'], ['NM', 'Non menzionato']]
  };

  X.types.true_false_nm = function (ex, ctx) {
    var root = h('div');
    var OPTS = LABELS[(LUX.tts && LUX.tts.contentLang) || 'fr'] || LABELS.fr;
    root.appendChild(h('p', { class: 'ex-prompt muted' }, 'Para cada frase, escolha: ' + OPTS[0][1] + ' (verdadeiro), ' + OPTS[1][1] + ' (falso) ou ' + OPTS[2][1] + ' (o texto não diz).'));
    var answers = {};
    var rows = ex.statements.map(function (s, i) {
      var row = h('div', { class: 'tf-row' });
      row.appendChild(h('div', { class: 'tf-text' }, LUX.ui.frText(s.text, { source: ctx.source, block: false, gloss: false })));
      var group = h('div', { class: 'tf-opts', role: 'radiogroup', 'aria-label': s.text });
      OPTS.forEach(function (o) {
        var b = h('button', { type: 'button', class: 'opt sm', role: 'radio', 'aria-checked': 'false', title: o[1] }, o[1]);
        b.addEventListener('click', function () {
          if (root.classList.contains('locked')) return;
          group.querySelectorAll('.opt').forEach(function (x) { x.classList.remove('selected'); x.setAttribute('aria-checked', 'false'); });
          b.classList.add('selected'); b.setAttribute('aria-checked', 'true');
          answers[i] = o[0];
          check.disabled = Object.keys(answers).length < ex.statements.length;
        });
        b._v = o[0];
        group.appendChild(b);
      });
      row.appendChild(group);
      row._fb = h('div', { class: 'tf-fb' });
      row.appendChild(row._fb);
      return row;
    });
    rows.forEach(function (r) { root.appendChild(r); });
    var fbBox = h('div');
    var check = X.checkBtn('Verificar', function () {
      root.classList.add('locked'); check.remove();
      var right = 0;
      ex.statements.forEach(function (s, i) {
        var ok = answers[i] === s.answer;
        if (ok) right++;
        rows[i].classList.add(ok ? 'ok' : 'bad');
        rows[i].querySelectorAll('.opt').forEach(function (b) {
          b.disabled = true;
          if (b._v === s.answer) b.classList.add('correct'); else if (b._v === answers[i]) b.classList.add('wrong');
        });
        if (s.explanationPt) rows[i]._fb.innerHTML = (ok ? '✓ ' : '✗ ') + U.mdInline(s.explanationPt);
      });
      var score = right / ex.statements.length;
      fbBox.appendChild(X.feedback(score === 1 ? 'ok' : score >= 0.5 ? 'partial' : 'bad', '<p>' + right + ' de ' + ex.statements.length + ' corretas.</p>'));
      ctx.finish(score, { answers: answers });
    });
    check.disabled = true;
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  };
})(window);
