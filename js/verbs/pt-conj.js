/* LUX — conjugador de PORTUGUÊS (Brasil), usado para mostrar a tradução de cada forma na tabela de conjugação.
   Ex.: courir / passé composé / je → "eu corri".
   O verbo em português vem do primeiro significado do dicionário (v.pt[0]); VERB_PT abaixo corrige casos especiais.
   Pessoas francesas → brasileiras: je = eu, tu = você, il/elle = ele/ela, nous = nós, vous = vocês, ils/elles = eles/elas. */
(function (g) {
  'use strict';
  var LUX = g.LUX;
  var PT = LUX.ptConj = {};

  /* verbo em português a usar quando o primeiro significado não serve para conjugar */
  var VERB_PT = {
    'falloir': 'ser preciso', 'se brosser': 'escovar-se', 'déjeuner': 'almoçar', 'tutoyer': 'tratar por tu',
    'vouvoyer': 'tratar por você', 'se doucher': 'tomar banho', 'se baigner': 'tomar banho', 'avoir': 'ter', 'être': 'ser'
  };

  var PRON = ['eu', 'você', 'ele / ela', 'nós', 'vocês', 'eles / elas'];
  var REFL = ['me', 'se', 'se', 'nos', 'se', 'se'];
  var IDX = [0, 1, 1, 2, 3, 3];  // pessoa francesa → forma portuguesa [1sg, 3sg, 1pl, 3pl]

  /* irregulares: perf = pretérito perfeito [eu, ele, nós, eles]; imp = imperfeito [eu, ele, nós, eles];
     subj = radical do presente do subjuntivo (ou as 4 formas); fut = radical do futuro; pp = particípio */
  var IRR = {
    ser: { perf: ['fui', 'foi', 'fomos', 'foram'], imp: ['era', 'era', 'éramos', 'eram'], subj: 'sej', pp: 'sido' },
    ir: { perf: ['fui', 'foi', 'fomos', 'foram'], subj: ['vá', 'vá', 'vamos', 'vão'], pp: 'ido' },
    estar: { perf: ['estive', 'esteve', 'estivemos', 'estiveram'], subj: 'estej' },
    ter: { perf: ['tive', 'teve', 'tivemos', 'tiveram'], imp: ['tinha', 'tinha', 'tínhamos', 'tinham'], subj: 'tenh' },
    haver: { perf: ['houve', 'houve', 'houvemos', 'houveram'], subj: 'haj' },
    vir: { perf: ['vim', 'veio', 'viemos', 'vieram'], imp: ['vinha', 'vinha', 'vínhamos', 'vinham'], subj: 'venh', pp: 'vindo' },
    fazer: { perf: ['fiz', 'fez', 'fizemos', 'fizeram'], subj: 'faç', fut: 'far', pp: 'feito' },
    dizer: { perf: ['disse', 'disse', 'dissemos', 'disseram'], subj: 'dig', fut: 'dir', pp: 'dito' },
    trazer: { perf: ['trouxe', 'trouxe', 'trouxemos', 'trouxeram'], subj: 'trag', fut: 'trar' },
    poder: { perf: ['pude', 'pôde', 'pudemos', 'puderam'], subj: 'poss' },
    querer: { perf: ['quis', 'quis', 'quisemos', 'quiseram'], subj: 'queir' },
    saber: { perf: ['soube', 'soube', 'soubemos', 'souberam'], subj: 'saib' },
    caber: { perf: ['coube', 'coube', 'coubemos', 'couberam'], subj: 'caib' },
    ver: { perf: ['vi', 'viu', 'vimos', 'viram'], subj: 'vej', pp: 'visto' },
    dar: { perf: ['dei', 'deu', 'demos', 'deram'], subj: ['dê', 'dê', 'demos', 'deem'] },
    'pôr': { perf: ['pus', 'pôs', 'pusemos', 'puseram'], imp: ['punha', 'punha', 'púnhamos', 'punham'], subj: 'ponh', fut: 'por', pp: 'posto', ger: 'pondo' },
    ler: { subj: 'lei' }, crer: { subj: 'crei' }, rir: { subj: 'ri' }, sair: { subj: 'sai' }, cair: { subj: 'cai' },
    ouvir: { subj: 'ouç' }, pedir: { subj: 'peç' }, medir: { subj: 'meç' }, perder: { subj: 'perc' }, valer: { subj: 'valh' },
    dormir: { subj: 'durm' }, sentir: { subj: 'sint' }, preferir: { subj: 'prefir' }, mentir: { subj: 'mint' },
    seguir: { subj: 'sig' }, conseguir: { subj: 'consig' }, servir: { subj: 'sirv' }, repetir: { subj: 'repit' },
    vestir: { subj: 'vist' }, divertir: { subj: 'divirt' }, sugerir: { subj: 'sugir' }, ferir: { subj: 'fir' },
    refletir: { subj: 'reflit' }, tossir: { subj: 'tuss' }, competir: { subj: 'compit' }, investir: { subj: 'invist' },
    cobrir: { subj: 'cubr', pp: 'coberto' }, descobrir: { subj: 'descubr', pp: 'descoberto' },
    reunir: { subj: ['reúna', 'reúna', 'reunamos', 'reúnam'] },
    abrir: { pp: 'aberto' }, escrever: { pp: 'escrito' }, pagar: { pp: 'pago' }, gastar: { pp: 'gasto' }, ganhar: { pp: 'ganho' }
  };
  /* derivados: manter = man + ter, prever = pre + ver, propor = pro + pôr... */
  var PREFIXED = [['ter', ['man', 'ob', 'con', 'de', 're', 'en', 'abs']], ['vir', ['con', 'inter', 'pro', 'sobre']],
    ['fazer', ['re', 'des', 'satis']], ['ver', ['pre', 're']], ['pôr', ['pro', 'com', 'su', 'dis', 'im', 'ex', 're']],
    ['dizer', ['contra', 'pre']], ['rir', ['sor']], ['seguir', ['per', 'pros']], ['cobrir', ['re']]];

  function irr(inf) {
    if (IRR[inf]) return { base: inf, d: IRR[inf], pre: '' };
    for (var i = 0; i < PREFIXED.length; i++) {
      var b = PREFIXED[i][0], bb = b === 'pôr' ? 'por' : b;
      for (var k = 0; k < PREFIXED[i][1].length; k++) {
        var px = PREFIXED[i][1][k];
        if (inf === px + bb && IRR[b]) return { base: b, d: IRR[b], pre: px };
      }
    }
    return null;
  }
  /* aplica o prefixo do verbo derivado (pus → propus) */
  function px(pre, w) { return pre ? pre + w : w; }

  var ACC = { a: 'á', e: 'ê', i: 'í', o: 'ô', u: 'ú' };
  function accentLast(stem, irregular) {
    if (/[áéíóúâêô]$/.test(stem)) return stem;
    var c = stem.slice(-1);
    if (c === 'e' && irregular) return stem.slice(0, -1) + 'é';
    return ACC[c] ? stem.slice(0, -1) + ACC[c] : stem;
  }

  /* todas as formas simples de um infinitivo português */
  function forms(inf) {
    var ir = irr(inf), d = ir ? ir.d : {}, pre = ir ? ir.pre : '';
    var plain = inf.replace('ô', 'o');
    var type = /ar$/.test(plain) ? 'ar' : /er$/.test(plain) ? 'er' : 'ir';
    if (plain === 'por' || /por$/.test(plain) && ir && ir.base === 'pôr') type = 'er';
    var stem = plain.slice(0, -2);
    var vowelStem = /[aeiou]$/.test(stem) && !/[gq]u$/.test(stem) && type !== 'ar';   // sair, cair, construir, atribuir
    var F = {};

    /* pretérito perfeito */
    if (d.perf) F.perf = d.perf.map(function (x) { return px(pre, x); });
    else if (type === 'ar') {
      var s1 = stem.replace(/c$/, 'qu').replace(/g$/, 'gu').replace(/ç$/, 'c');
      F.perf = [s1 + 'ei', stem + 'ou', stem + 'amos', stem + 'aram'];
    } else if (type === 'er') F.perf = [stem + 'i', stem + 'eu', stem + 'emos', stem + 'eram'];
    else if (vowelStem) F.perf = [stem + 'í', stem + 'iu', stem + 'ímos', stem + 'íram'];
    else F.perf = [stem + 'i', stem + 'iu', stem + 'imos', stem + 'iram'];

    /* imperfeito */
    if (d.imp) F.imp = d.imp.map(function (x) { return px(pre, x); });
    else if (type === 'ar') F.imp = [stem + 'ava', stem + 'ava', stem + 'ávamos', stem + 'avam'];
    else if (vowelStem) F.imp = [stem + 'ía', stem + 'ía', stem + 'íamos', stem + 'íam'];
    else F.imp = [stem + 'ia', stem + 'ia', stem + 'íamos', stem + 'iam'];

    /* futuro e futuro do pretérito (condicional) */
    var fs = d.fut ? px(pre, d.fut) : plain;
    F.fut = [fs + 'ei', fs + 'á', fs + 'emos', fs + 'ão'];
    F.cond = [fs + 'ia', fs + 'ia', fs + 'íamos', fs + 'iam'];

    /* presente do subjuntivo */
    if (Array.isArray(d.subj)) F.subj = d.subj.map(function (x) { return px(pre, x); });
    else {
      var e = type === 'ar' ? 'e' : 'a';
      var ss = d.subj ? px(pre, d.subj) : null;
      if (!ss) {
        if (type === 'ar') ss = stem.replace(/c$/, 'qu').replace(/g$/, 'gu').replace(/ç$/, 'c');
        else ss = stem.replace(/c$/, 'ç').replace(/g$/, 'j').replace(/gu$/, 'g');
      }
      if (type === 'ar' && /e$/.test(stem) && !d.subj) F.subj = [stem + 'ie', stem + 'ie', stem + 'emos', stem + 'iem']; // passear → passeie
      else F.subj = [ss + e, ss + e, ss + e + 'mos', ss + e + 'm'];
    }

    /* imperfeito do subjuntivo: do perfeito (eles) sem "-ram" */
    var b = F.perf[3].replace(/ram$/, '');
    F.subjImp = [b + 'sse', b + 'sse', accentLast(b, !!d.perf) + 'ssemos', b + 'ssem'];

    F.ger = d.ger ? px(pre, d.ger) : plain.slice(0, -1) + 'ndo';
    F.pp = d.pp ? px(pre, d.pp) : /screver$/.test(plain) ? plain.replace(/screver$/, 'scrito') : (type === 'ar' ? stem + 'ado' : (vowelStem ? stem + 'ído' : stem + 'ido'));
    return F;
  }
  PT.forms = forms;

  /* "levantar-se com" → {verb:'levantar', refl:true, rest:'com'} */
  PT.parse = function (v) {
    var raw = VERB_PT[v.inf] || (v.pt && v.pt[0]) || '';
    raw = raw.replace(/\([^)]*\)/g, '').split(',')[0].replace(/["“”]/g, '').replace(/\s+/g, ' ').trim();
    if (!raw) return null;
    var words = raw.split(' ');
    var w0 = words[0], refl = false;
    if (/-se$/.test(w0)) { refl = true; w0 = w0.slice(0, -3); }
    if (!/(ar|er|ir|ôr|or)$/.test(w0)) return null;
    return { verb: w0, refl: refl, rest: words.slice(1).join(' ') };
  };

  function tail(s, rest) { return rest ? s + ' ' + rest : s; }

  /* tradução de uma linha da tabela francesa.
     tenseId: id do tempo francês; p: pessoa francesa 0–5 (ou índice 0–2 no imperativo); label: rótulo das formas nominais */
  PT.translate = function (v, tenseId, p, label, impersonal) {
    var P = PT.parse(v);
    if (!P || tenseId === 'present') return '';
    var F = forms(P.verb), T = forms('ter');
    var i = IDX[p] != null ? IDX[p] : 1;
    var pron = impersonal ? '' : PRON[p] + ' ';
    var r = P.refl ? REFL[p] + ' ' : '';
    function simple(list, que) { return tail((que ? 'que ' : '') + pron + r + list[i], P.rest); }
    function comp(auxList, que) { return tail((que ? 'que ' : '') + pron + auxList[i] + ' ' + r + F.pp, P.rest); }
    switch (tenseId) {
      case 'passe_compose': case 'passe_simple': return simple(F.perf);
      case 'imparfait': return simple(F.imp);
      case 'futur': return simple(F.fut);
      case 'conditionnel': return simple(F.cond);
      case 'subjonctif': return simple(F.subj, true);
      case 'subjonctif_imparfait': return simple(F.subjImp, true);
      case 'futur_proche': return tail(pron + ['vou', 'vai', 'vamos', 'vão'][i] + ' ' + r + P.verb, P.rest);
      case 'plus_que_parfait': case 'passe_anterieur': return comp(T.imp);
      case 'futur_anterieur': return comp(T.fut);
      case 'conditionnel_passe': return comp(T.cond);
      case 'subjonctif_passe': return comp(T.subj, true);
      case 'subjonctif_pqp': return comp(T.subjImp, true);
      case 'imperatif': {
        var k = [1, 2, 3][p];  // (tu) → você, (nous) → nós, (vous) → vocês
        var f = F.subj[k];
        if (P.refl) f = k === 2 ? f.replace(/s$/, '') + '-nos' : f + '-se';
        return tail(f, P.rest);
      }
      case 'imperatif_passe': return tail(T.subj[[1, 2, 3][p]] + ' ' + F.pp, P.rest);
      case 'nominales': {
        var inf = P.verb, se = P.refl ? 'se ' : '';
        var map = {
          'Infinitif présent': P.refl ? inf + '-se' : inf,
          'Infinitif passé': 'ter ' + se + F.pp,
          'Participe présent': se + F.ger,
          'Gérondif': se + F.ger + ' (ao ' + se + inf + ')',
          'Participe passé': F.pp,
          'Participe passé composé': 'tendo ' + se + F.pp
        };
        return map[label] ? tail(map[label], P.rest) : '';
      }
    }
    return '';
  };
})(typeof window !== 'undefined' ? window : globalThis);
