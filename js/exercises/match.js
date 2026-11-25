/* Associação: clique num item da esquerda e depois no da direita */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;

  X.types.match = function (ex, ctx) {
    var root = h('div');
    var p = X.prompt(ex.prompt || 'Associe os pares.', ctx.source); if (p) root.appendChild(p);
    root.appendChild(h('p', { class: 'muted sm' }, 'Clique num item da esquerda e depois no par correspondente à direita.'));
    var left = h('div', { class: 'match-col' }), right = h('div', { class: 'match-col' });
    var pairs = {}, selected = null, colors = 0;
    ex.pairs.forEach(function (pr, i) {
      var b = h('button', { type: 'button', class: 'opt match-item', lang: 'fr' }, pr[0]);
      b._i = i;
      b.addEventListener('click', function () {
        if (root.classList.contains('locked')) return;
        left.querySelectorAll('.match-item').forEach(function (x) { x.classList.remove('selected'); });
        b.classList.add('selected'); selected = i;
      });
      left.appendChild(b);
    });
    U.shuffle(ex.pairs.map(function (pr, i) { return i; })).forEach(function (i) {
      var b = h('button', { type: 'button', class: 'opt match-item' }, ex.pairs[i][1]);
      b._i = i;
      b.addEventListener('click', function () {
        if (root.classList.contains('locked') || selected == null) return;
        // desfaz par anterior deste item da esquerda ou da direita
        Object.keys(pairs).forEach(function (k) { if (pairs[k] === i) { delete pairs[k]; } });
        pairs[selected] = i;
        paint();
        selected = null;
        left.querySelectorAll('.match-item').forEach(function (x) { x.classList.remove('selected'); });
        var next = [].filter.call(left.children, function (x) { return pairs[x._i] == null; })[0];
        if (next) next.click();
        check.disabled = Object.keys(pairs).length < ex.pairs.length;
      });
      right.appendChild(b);
    });
    function paint() {
      [].forEach.call(left.children, function (x) { x.removeAttribute('data-pair'); });
      [].forEach.call(right.children, function (x) { x.removeAttribute('data-pair'); });
      var n = 0;
      Object.keys(pairs).forEach(function (k) {
        n++;
        var l = [].filter.call(left.children, function (x) { return x._i === +k; })[0];
        var r = [].filter.call(right.children, function (x) { return x._i === pairs[k]; })[0];
        l.setAttribute('data-pair', n); r.setAttribute('data-pair', n);
      });
    }
    root.appendChild(h('div', { class: 'match-grid' }, [left, right]));
    var fbBox = h('div');
    var check = X.checkBtn('Verificar', function () {
      root.classList.add('locked'); check.remove();
      var right_ = 0;
      [].forEach.call(left.children, function (l) {
        var ok = pairs[l._i] === l._i;
        if (ok) right_++;
        l.classList.add(ok ? 'correct' : 'wrong');
        l.disabled = true;
      });
      [].forEach.call(right.children, function (r) { r.disabled = true; });
      var score = right_ / ex.pairs.length;
      var body = score < 1 ? '<ul class="match-solution">' + ex.pairs.map(function (pr) { return '<li><b lang="fr">' + U.esc(pr[0]) + '</b> — ' + U.esc(pr[1]) + '</li>'; }).join('') + '</ul>' : '';
      fbBox.appendChild(X.feedback(score === 1 ? 'ok' : score >= 0.5 ? 'partial' : 'bad', '<p>' + right_ + ' de ' + ex.pairs.length + ' pares corretos.</p>' + body));
      ctx.finish(score, { pairs: pairs });
    });
    check.disabled = true;
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  };
})(window);
