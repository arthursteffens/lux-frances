/* Ditado: ouvir e digitar; correção com diff palavra a palavra */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, X = LUX.ex;

  X.types.dictation = function (ex, ctx) {
    var root = h('div');
    root.appendChild(h('p', { class: 'ex-prompt' }, ex.prompt || 'Ouça e escreva a frase.'));
    root.appendChild(X.audioBar(ex.text));
    var inp = h('textarea', { class: 'input dict-input', rows: 2, lang: 'fr', autocapitalize: 'off', spellcheck: 'false', 'aria-label': 'Escreva o que ouviu', placeholder: 'Escreva aqui o que você ouviu…' });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); check.click(); } });
    root.appendChild(inp);
    root.appendChild(accentBar(inp));
    var fbBox = h('div');
    var check = X.checkBtn('Verificar', function () {
      if (!inp.value.trim()) { inp.focus(); return; }
      root.classList.add('locked'); check.remove(); inp.disabled = true;
      var d = U.wordDiff(ex.text, inp.value);
      var p = LUX.profiles.current();
      var accentFull = p && p.settings.accentFull;
      var score = d.perfect ? 1 : d.score;
      if (accentFull) {
        var acc = d.parts.filter(function (x) { return x.type === 'accent'; }).length;
        var okc = d.parts.filter(function (x) { return x.type === 'ok'; }).length;
        var n = U.answerKey(ex.text).split(' ').length;
        score = (okc + acc) / Math.max(n, d.parts.filter(function (x) { return x.type !== 'missing'; }).length);
      }
      score = Math.round(score * 100) / 100;
      var html = '<div class="diff" lang="fr">' + d.parts.map(function (x) {
        if (x.type === 'ok') return '<span class="d-ok">' + U.esc(x.exp) + '</span>';
        if (x.type === 'accent') return '<span class="d-accent" title="Você escreveu: ' + U.esc(x.got) + '">' + U.esc(x.exp) + '</span>';
        if (x.type === 'missing') return '<span class="d-missing" title="Faltou">' + U.esc(x.exp) + '</span>';
        return '<span class="d-extra" title="A mais">' + U.esc(x.got) + '</span>';
      }).join(' ') + '</div>' +
        '<p class="muted sm">verde = certo · amarelo = acento · vermelho = faltou · riscado = a mais</p>' +
        (d.perfect ? '' : '<p>Frase completa: <b lang="fr">' + U.esc(ex.text) + '</b></p>') + X.explain(ex);
      fbBox.appendChild(X.feedback(d.perfect || score >= 0.99 ? 'ok' : score >= 0.6 ? 'partial' : 'bad', html));
      ctx.finish(score, { given: inp.value });
    });
    root.appendChild(check);
    root.appendChild(fbBox);
    return root;
  };

  /* teclado de acentos para quem não tem teclado francês */
  function accentBar(inp) {
    var bar = h('div', { class: 'accent-bar', 'aria-label': 'Inserir acentos' });
    ['é', 'è', 'ê', 'à', 'â', 'ç', 'ô', 'î', 'û', 'ù', 'ë', 'ï', 'œ', '’'].forEach(function (c) {
      bar.appendChild(h('button', {
        type: 'button', class: 'chip sm', onmousedown: function (e) { e.preventDefault(); }, onclick: function () {
          var s = inp.selectionStart || inp.value.length, e2 = inp.selectionEnd || s;
          inp.value = inp.value.slice(0, s) + (c === '’' ? "'" : c) + inp.value.slice(e2);
          inp.focus(); inp.selectionStart = inp.selectionEnd = s + 1;
        }
      }, c));
    });
    return bar;
  }
  X.accentBar = accentBar;
})(window);
