/* Resposta curta (várias respostas aceitas) e o tipo "speaking" reservado para o futuro */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;

  X.types.short_answer = function (ex, ctx) {
    var root = h('div');
    var p = X.prompt(ex.prompt, ctx.source); if (p) root.appendChild(p);
    var inp = h('input', { class: 'input', type: 'text', lang: 'fr', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Sua resposta' });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); check.click(); } });
    root.appendChild(inp);
    root.appendChild(X.accentBar(inp));
    var fbBox = h('div');
    var check = X.checkBtn('Verificar', function () {
      if (!inp.value.trim()) { inp.focus(); return; }
      root.classList.add('locked'); check.remove(); inp.disabled = true;
      var given = inp.value;
      var answers = ex.answers;
      // números de telefone e similares: compara só os dígitos
      if (answers.every(function (a) { return /^[\d\s.]+$/.test(a); })) {
        var dg = given.replace(/\D/g, '');
        answers = answers.map(function (a) { return a.replace(/\D/g, ''); });
        given = dg;
      }
      var r = X.typedScore(given, answers);
      var body = (r.ok ? '' : r.partial ? '<p>Atenção ao acento: <b lang="fr">' + U.esc(r.match) + '</b></p>' : '<p>Resposta esperada: <b lang="fr">' + U.esc(ex.answers[0]) + '</b></p>') + X.explain(ex);
      fbBox.appendChild(X.feedback(r.ok ? 'ok' : r.partial ? 'partial' : 'bad', body));
      ctx.finish(r.score, { given: inp.value });
    });
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  };

  /* Reservado: exercícios de fala (fase futura). Não pontua. */
  X.types.speaking = function (ex, ctx) {
    return h('div', { class: 'muted' }, '🎙️ Exercícios de fala chegam numa próxima fase do curso.');
  };
})(window);
