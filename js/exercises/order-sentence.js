/* Montar a frase com blocos */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;

  X.types.order_sentence = function (ex, ctx) {
    var root = h('div');
    var p = X.prompt(ex.prompt || 'Monte a frase.', ctx.source); if (p) root.appendChild(p);
    if (ex.translation) root.appendChild(h('p', { class: 'muted' }, '“' + ex.translation + '”'));
    var words = ex.answer.split(/\s+/);
    var pool = h('div', { class: 'tokens pool', 'aria-label': 'Palavras disponíveis' });
    var line = h('div', { class: 'tokens line', 'aria-label': 'Sua frase', lang: 'fr' });
    line.appendChild(h('span', { class: 'placeholder muted' }, 'Clique nas palavras na ordem certa…'));
    var shuffled = U.shuffle(words.map(function (w, i) { return { w: w, i: i }; }));
    if (shuffled.map(function (x) { return x.w; }).join(' ') === ex.answer) shuffled.reverse();
    shuffled.forEach(function (t) {
      var b = h('button', { type: 'button', class: 'token', lang: 'fr' }, t.w);
      b.addEventListener('click', function () {
        if (root.classList.contains('locked')) return;
        if (b.parentNode === pool) line.appendChild(b); else pool.appendChild(b);
        var ph = line.querySelector('.placeholder'); if (ph) ph.style.display = line.querySelectorAll('.token').length ? 'none' : '';
        check.disabled = pool.querySelectorAll('.token').length > 0;
      });
      pool.appendChild(b);
    });
    root.appendChild(line);
    root.appendChild(pool);
    var fbBox = h('div');
    var check = X.checkBtn('Verificar', function () {
      root.classList.add('locked'); check.remove();
      var given = [].map.call(line.querySelectorAll('.token'), function (x) { return x.textContent; }).join(' ');
      var answers = [ex.answer].concat(ex.alternatives || []);
      var r = X.typedScore(given, answers);
      line.classList.add(r.ok ? 'ok' : 'bad');
      var body = (r.ok ? '' : '<p>Ordem correta: <b lang="fr">' + U.esc(ex.answer) + '</b></p>') + X.explain(ex);
      fbBox.appendChild(X.feedback(r.ok ? 'ok' : 'bad', body));
      fbBox.appendChild(LUX.ui.playBtn(ex.answer, { label: 'ouvir a frase', small: true }));
      ctx.finish(r.ok ? 1 : 0, { given: given });
    });
    check.disabled = true;
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  };
})(window);
