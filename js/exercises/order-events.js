/* Ordenar acontecimentos (setas para subir/descer; funciona no teclado e no toque) */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;

  X.types.order_events = function (ex, ctx) {
    var root = h('div');
    var p = X.prompt(ex.prompt || 'Coloque na ordem certa.', ctx.source); if (p) root.appendChild(p);
    var list = h('ol', { class: 'order-list' });
    var order = U.shuffle(ex.items.map(function (x, i) { return i; }));
    if (order.every(function (v, i) { return v === i; })) order.reverse();
    function row(i) {
      var li = h('li', { class: 'order-item' });
      li._i = i;
      li.appendChild(h('span', { class: 'order-text', lang: 'fr' }, ex.items[i]));
      var up = h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Subir', onclick: function () { move(li, -1); } }, '▲');
      var down = h('button', { type: 'button', class: 'icon-btn', 'aria-label': 'Descer', onclick: function () { move(li, 1); } }, '▼');
      li.appendChild(h('span', { class: 'order-btns' }, [up, down]));
      return li;
    }
    function move(li, d) {
      if (root.classList.contains('locked')) return;
      var sib = d < 0 ? li.previousElementSibling : li.nextElementSibling;
      if (!sib) return;
      if (d < 0) list.insertBefore(li, sib); else list.insertBefore(sib, li);
      li.querySelector(d < 0 ? '[aria-label="Subir"]' : '[aria-label="Descer"]').focus();
    }
    order.forEach(function (i) { list.appendChild(row(i)); });
    root.appendChild(list);
    var fbBox = h('div');
    var check = X.checkBtn('Verificar', function () {
      root.classList.add('locked'); check.remove();
      var items = [].slice.call(list.children), right = 0;
      items.forEach(function (li, pos) {
        var ok = li._i === pos; if (ok) right++;
        li.classList.add(ok ? 'ok' : 'bad');
        li.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
      });
      var score = right / items.length;
      var sol = score < 1 ? '<ol>' + ex.items.map(function (t) { return '<li lang="fr">' + U.esc(t) + '</li>'; }).join('') + '</ol>' : '';
      fbBox.appendChild(X.feedback(score === 1 ? 'ok' : score >= 0.5 ? 'partial' : 'bad', '<p>' + right + ' de ' + items.length + ' na posição certa.</p>' + sol));
      ctx.finish(score, { order: items.map(function (li) { return li._i; }) });
    });
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  };
})(window);
