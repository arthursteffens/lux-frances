/* Múltipla escolha (também usado por "ouça e escolha") */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;

  function choice(ex, ctx, withAudio) {
    var root = h('div');
    if (withAudio) root.appendChild(X.audioBar(ex.audio));
    var p = X.prompt(ex.prompt, ctx.source); if (p) root.appendChild(p);
    var order = U.shuffle(ex.options.map(function (o, i) { return i; }));
    var list = h('div', { class: 'ex-options', role: 'radiogroup' });
    var chosen = null, fbBox = h('div');
    order.forEach(function (i) {
      var b = h('button', { type: 'button', class: 'opt', role: 'radio', 'aria-checked': 'false', lang: 'fr' }, ex.options[i]);
      b.addEventListener('click', function () {
        if (root.classList.contains('locked')) return;
        list.querySelectorAll('.opt').forEach(function (x) { x.classList.remove('selected'); x.setAttribute('aria-checked', 'false'); });
        b.classList.add('selected'); b.setAttribute('aria-checked', 'true');
        chosen = i; check.disabled = false;
      });
      b._i = i;
      list.appendChild(b);
    });
    root.appendChild(list);
    var check = X.checkBtn('Verificar', function () {
      if (chosen == null) return;
      root.classList.add('locked'); check.remove();
      var ok = chosen === ex.answer;
      list.querySelectorAll('.opt').forEach(function (x) {
        x.disabled = true;
        if (x._i === ex.answer) x.classList.add('correct');
        else if (x._i === chosen) x.classList.add('wrong');
      });
      var body = (ok ? '' : '<p>Resposta certa: <b lang="fr">' + U.esc(ex.options[ex.answer]) + '</b></p>') + X.explain(ex);
      fbBox.appendChild(X.feedback(ok ? 'ok' : 'bad', body));
      ctx.finish(ok ? 1 : 0, { chosen: chosen });
    });
    check.disabled = true;
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  }
  X.types.multiple_choice = function (ex, ctx) { return choice(ex, ctx, !!ex.audio); };
  X.types.listen_choose = function (ex, ctx) { return choice(ex, ctx, true); };
})(window);
