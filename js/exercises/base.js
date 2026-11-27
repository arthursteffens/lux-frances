/* LUX — base dos exercícios.
   Cada tipo registra: LUX.ex.types[tipo] = function (ex, ctx) -> elemento
   ctx: {source, onResult(score 0..1, detail), previous (resposta salva)} */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h;
  var X = LUX.ex = { types: {} };

  X.LABEL = {
    multiple_choice: 'Múltipla escolha', true_false_nm: 'Verdadeiro, falso ou não mencionado', fill_blank: 'Complete',
    match: 'Associe', order_sentence: 'Monte a frase', order_events: 'Coloque em ordem', dictation: 'Ditado',
    listen_choose: 'Ouça e escolha', short_answer: 'Resposta curta', speaking: 'Fala'
  };

  X.render = function (ex, ctx) {
    ctx = ctx || {};
    var fn = X.types[ex.type];
    var wrap = h('div', { class: 'ex', 'data-type': ex.type });
    wrap.appendChild(h('div', { class: 'ex-kind' }, X.LABEL[ex.type] || ex.type));
    if (!fn) { wrap.appendChild(h('p', { class: 'muted' }, 'Tipo de exercício ainda não disponível.')); return wrap; }
    var done = false;
    var inner = fn(ex, {
      source: ctx.source,
      finish: function (score, detail) {
        wrap.classList.add('answered');
        if (!done && ctx.onResult) ctx.onResult(score, detail);
        done = true;
      }
    });
    wrap.appendChild(inner);
    return wrap;
  };

  /* enunciado (frases em francês viram texto clicável) */
  X.prompt = function (text, source) {
    if (!text) return null;
    var looksFr = /[àâçéèêëîïôûùœ]|\b(le|la|les|est|une|des|du|qui|que|quoi|où|vous|tu|il|elle)\b/i.test(text) && !/\b(você|não|é|o que|qual|ouça|complete|escolha|ligue|monte|coloque|traduza|como)\b/i.test(text)
      && !/\*[^*\s][^*]*\*/.test(text); // texto em português com termos em *itálico* (aba Profissional) usa o markdown

    if (looksFr) return h('div', { class: 'ex-prompt' }, LUX.ui.frText(text, { source: source, block: false, gloss: false }));
    return h('div', { class: 'ex-prompt', html: U.mdInline(text) });
  };

  X.feedback = function (kind, html) {
    var icon = kind === 'ok' ? '✓' : kind === 'partial' ? '≈' : '✗';
    var title = kind === 'ok' ? 'Correto!' : kind === 'partial' ? 'Quase certo' : 'Não foi dessa vez';
    return h('div', { class: 'ex-feedback ' + kind, role: 'status' }, [
      h('div', { class: 'fb-title' }, [h('span', { class: 'fb-ico' }, icon), ' ', title]),
      html ? h('div', { class: 'fb-body', html: html }) : null
    ]);
  };
  X.explain = function (ex) { return ex.explanationPt ? U.md(ex.explanationPt) : ''; };

  X.checkBtn = function (label, onClick) {
    return h('button', { type: 'button', class: 'btn primary check-btn', onclick: onClick }, label || 'Verificar');
  };

  /* valor de uma resposta digitada: 1, 0.5 (só acento) ou 0; respeita a configuração "acento vale nota cheia" */
  X.typedScore = function (given, answers) {
    var r = U.checkAnswer(given, answers);
    var p = LUX.profiles.current();
    var accentFull = p && p.settings.accentFull;
    return { score: r.ok ? 1 : r.partial ? (accentFull ? 1 : 0.5) : 0, ok: r.ok, partial: r.partial, match: r.match };
  };

  /* barra de áudio para exercícios de escuta */
  X.audioBar = function (text, opts) {
    opts = opts || {};
    var count = 0;
    var counter = h('span', { class: 'muted sm listen-count' }, '');
    var btn = LUX.ui.playBtn(text, {
      label: opts.label || 'ouvir', onStart: function () { count++; counter.textContent = count === 1 ? 'ouviu 1 vez' : 'ouviu ' + count + ' vezes'; }
    });
    var slow = LUX.ui.playBtn(text, { label: 'devagar', small: true, rate: function () { return 0.6; }, onStart: function () { count++; counter.textContent = 'ouviu ' + count + ' vez(es)'; } });
    return h('div', { class: 'audio-bar' }, [btn, slow, counter]);
  };
})(window);
