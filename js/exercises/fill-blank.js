/* Lacunas (com banco de palavras opcional) */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;

  X.types.fill_blank = function (ex, ctx) {
    var root = h('div');
    var p = X.prompt(ex.prompt, ctx.source); if (p) root.appendChild(p);
    var inputs = [];
    if (ex.bank) {
      var bank = h('div', { class: 'bank', 'aria-label': 'Banco de palavras' });
      U.shuffle(ex.bank).forEach(function (w) {
        bank.appendChild(h('button', {
          type: 'button', class: 'chip', lang: 'fr', onclick: function () {
            var target = inputs.filter(function (i) { return i === document.activeElement; })[0] || inputs.filter(function (i) { return !i.value; })[0];
            if (target && !target.disabled) { target.value = w; target.dispatchEvent(new Event('input')); var nx = inputs[inputs.indexOf(target) + 1]; (nx || target).focus(); }
          }
        }, w));
      });
      root.appendChild(bank);
    }
    var list = h('ol', { class: 'blank-list' });
    ex.items.forEach(function (it, i) {
      var parts = it.text.split('___');
      var li = h('li', { class: 'blank-item' });
      var line = h('div', { class: 'blank-line', lang: 'fr' });
      line.appendChild(document.createTextNode(parts[0]));
      var inp = h('input', {
        class: 'blank-input', type: 'text', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false', lang: 'fr',
        'aria-label': 'Lacuna ' + (i + 1), size: Math.max(6, Math.min(18, (it.answers[0] || '').length + 2))
      });
      inp.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); var nx = inputs[i + 1]; if (nx) nx.focus(); else check.click(); }
      });
      inputs.push(inp);
      line.appendChild(inp);
      line.appendChild(document.createTextNode(parts.slice(1).join('___')));
      li.appendChild(line);
      li._fb = h('div', { class: 'blank-fb' });
      li.appendChild(li._fb);
      list.appendChild(li);
    });
    root.appendChild(list);
    var fbBox = h('div');
    var check = X.checkBtn('Verificar', function () {
      if (inputs.some(function (i) { return !i.value.trim(); }) && !check._confirm) {
        check._confirm = true; LUX.ui.toast('Ainda há lacunas vazias. Clique em Verificar de novo para corrigir assim mesmo.'); return;
      }
      root.classList.add('locked'); check.remove();
      var total = 0;
      ex.items.forEach(function (it, i) {
        var r = X.typedScore(inputs[i].value, it.answers);
        total += r.score;
        inputs[i].disabled = true;
        var li = list.children[i];
        li.classList.add(r.ok ? 'ok' : r.partial ? 'partial' : 'bad');
        li._fb.innerHTML = r.ok ? '✓' : r.partial ? '≈ quase: atenção ao acento — <b lang="fr">' + U.esc(r.match) + '</b>' : '✗ resposta: <b lang="fr">' + U.esc(it.answers[0]) + '</b>';
      });
      var score = total / ex.items.length;
      fbBox.appendChild(X.feedback(score === 1 ? 'ok' : score >= 0.5 ? 'partial' : 'bad', X.explain(ex)));
      ctx.finish(score, { values: inputs.map(function (i) { return i.value; }) });
    });
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  };
})(window);
