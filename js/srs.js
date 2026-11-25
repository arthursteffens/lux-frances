/* LUX — revisão espaçada (SM-2 simplificado).
   Cartão: {id, kind:'fr-pt'|'pt-fr'|'gender'|'verb', fr, pt, gender, article, example, source, ease, interval, reps, due, lapses, last, added} */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, S = LUX.store;
  var R = LUX.srs = {};

  function base(card) {
    return Object.assign({ ease: 2.5, interval: 0, reps: 0, due: U.todayStr(), lapses: 0, last: null, added: new Date().toISOString() }, card);
  }
  function put(p, card) {
    if (p.srs[card.id]) return false;
    p.srs[card.id] = base(card);
    return true;
  }

  /* palavra/expressão: cria cartões fr→pt e pt→fr; substantivos ganham cartão de gênero */
  R.addWord = function (p, w) {
    var key = U.norm(w.lemma || w.fr);
    var added = 0;
    var display = w.display || w.fr;
    added += put(p, { id: 'w:' + key + ':fr', kind: 'fr-pt', fr: display, pt: w.pt, example: w.example || '', source: w.source || '' }) ? 1 : 0;
    added += put(p, { id: 'w:' + key + ':pt', kind: 'pt-fr', fr: display, pt: w.pt, example: w.example || '', source: w.source || '' }) ? 1 : 0;
    if (w.gender === 'm' || w.gender === 'f') {
      added += put(p, { id: 'g:' + key, kind: 'gender', fr: w.lemma || w.fr, pt: w.pt, gender: w.gender, source: w.source || '' }) ? 1 : 0;
    }
    S.save();
    return added;
  };
  R.addVerb = function (p, v) {
    var n = put(p, { id: 'v:' + v.inf, kind: 'verb', fr: v.inf, pt: v.pt.join(', '), example: v.examples[0] ? v.examples[0].fr : '' }) ? 1 : 0;
    n += put(p, { id: 'v:' + v.inf + ':pt', kind: 'pt-fr', fr: v.inf, pt: v.pt[0], example: v.examples[0] ? v.examples[0].fr : '' }) ? 1 : 0;
    S.save();
    return n;
  };
  R.has = function (p, id) { return !!p.srs[id]; };
  R.hasWord = function (p, lemma) { return !!p.srs['w:' + U.norm(lemma) + ':fr']; };

  R.due = function (p) {
    var today = U.todayStr();
    return Object.keys(p.srs).map(function (k) { return p.srs[k]; })
      .filter(function (c) { return c.due <= today; })
      .sort(function (a, b) { return a.due < b.due ? -1 : a.due > b.due ? 1 : (a.reps - b.reps); });
  };
  R.dueCount = function (p) { return p ? R.due(p).length : 0; };
  R.total = function (p) { return Object.keys(p.srs).length; };

  /* q: 0 = errei, 1 = difícil, 2 = bom, 3 = fácil */
  R.grade = function (p, card, q) {
    var c = p.srs[card.id]; if (!c) return;
    var today = U.todayStr();
    if (q === 0) {
      c.reps = 0; c.interval = 0; c.lapses += 1; c.ease = Math.max(1.3, c.ease - 0.2); c.due = today;
    } else {
      if (c.reps === 0) c.interval = q === 3 ? 3 : 1;
      else if (c.reps === 1) c.interval = q === 1 ? 3 : q === 2 ? 4 : 6;
      else c.interval = Math.max(c.interval + 1, Math.round(c.interval * (q === 1 ? 1.2 : q === 2 ? c.ease : c.ease * 1.3)));
      if (q === 1) c.ease = Math.max(1.3, c.ease - 0.15);
      if (q === 3) c.ease += 0.15;
      c.reps += 1;
      c.due = U.addDays(today, c.interval);
    }
    c.last = new Date().toISOString();
    LUX.profiles.markActivity(p);
    S.save();
  };
  R.label = function (interval) {
    if (!interval) return 'hoje';
    if (interval === 1) return 'amanhã';
    if (interval < 30) return 'em ' + interval + ' dias';
    return 'em ' + Math.round(interval / 30) + ' mês(es)';
  };
  /* prévia do intervalo para cada botão */
  R.preview = function (card, q) {
    var c = Object.assign({}, card);
    if (q === 0) return 'hoje';
    if (c.reps === 0) return R.label(q === 3 ? 3 : 1);
    if (c.reps === 1) return R.label(q === 1 ? 3 : q === 2 ? 4 : 6);
    return R.label(Math.max(c.interval + 1, Math.round(c.interval * (q === 1 ? 1.2 : q === 2 ? c.ease : c.ease * 1.3))));
  };
})(window);
