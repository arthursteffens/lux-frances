/* LUX — motor de conjugação.
   Regulares (1º e 2º grupos, -re) e variações ortográficas são gerados por regras.
   Irregulares vêm de tabelas (content/verbs/irregular.js) — apenas as "formas-chave";
   o resto (imparfait, conditionnel, subjonctif imparfait, tempos compostos...) é derivado. */
(function (g) {
  'use strict';
  var LUX = g.LUX;
  var C = LUX.conjugator = {};

  /* ---------- tempos (ordem do mais simples ao mais complexo) ---------- */
  C.TENSES = [
    { id: 'present', fr: 'Présent', mood: 'Indicatif', pt: 'Presente', level: 'A1' },
    { id: 'passe_compose', fr: 'Passé composé', mood: 'Indicatif', pt: 'Pretérito perfeito', level: 'A2', compound: 'present' },
    { id: 'imparfait', fr: 'Imparfait', mood: 'Indicatif', pt: 'Pretérito imperfeito', level: 'A2' },
    { id: 'futur_proche', fr: 'Futur proche (aller + infinitif)', mood: 'Indicatif', pt: 'Futuro próximo', level: 'A2' },
    { id: 'futur', fr: 'Futur simple', mood: 'Indicatif', pt: 'Futuro do presente', level: 'A2' },
    { id: 'imperatif', fr: 'Impératif présent', mood: 'Impératif', pt: 'Imperativo', level: 'A2' },
    { id: 'conditionnel', fr: 'Conditionnel présent', mood: 'Conditionnel', pt: 'Futuro do pretérito', level: 'B1' },
    { id: 'plus_que_parfait', fr: 'Plus-que-parfait', mood: 'Indicatif', pt: 'Mais-que-perfeito', level: 'B1', compound: 'imparfait' },
    { id: 'subjonctif', fr: 'Subjonctif présent', mood: 'Subjonctif', pt: 'Presente do subjuntivo', level: 'B1' },
    { id: 'futur_anterieur', fr: 'Futur antérieur', mood: 'Indicatif', pt: 'Futuro do presente composto', level: 'B2', compound: 'futur' },
    { id: 'conditionnel_passe', fr: 'Conditionnel passé', mood: 'Conditionnel', pt: 'Futuro do pretérito composto', level: 'B2', compound: 'conditionnel' },
    { id: 'subjonctif_passe', fr: 'Subjonctif passé', mood: 'Subjonctif', pt: 'Pretérito perfeito do subjuntivo', level: 'B2', compound: 'subjonctif' },
    { id: 'passe_simple', fr: 'Passé simple', mood: 'Indicatif', pt: 'Pretérito perfeito (literário)', level: 'B2' },
    { id: 'passe_anterieur', fr: 'Passé antérieur', mood: 'Indicatif', pt: 'Pretérito anterior (literário)', level: 'literário', literary: true, compound: 'passe_simple' },
    { id: 'subjonctif_imparfait', fr: 'Subjonctif imparfait', mood: 'Subjonctif', pt: 'Imperfeito do subjuntivo (literário)', level: 'literário', literary: true },
    { id: 'subjonctif_pqp', fr: 'Subjonctif plus-que-parfait', mood: 'Subjonctif', pt: 'Mais-que-perfeito do subjuntivo (literário)', level: 'literário', literary: true, compound: 'subjonctif_imparfait' },
    { id: 'imperatif_passe', fr: 'Impératif passé', mood: 'Impératif', pt: 'Imperativo passado', level: 'literário', literary: true },
    { id: 'nominales', fr: 'Formes nominales', mood: '', pt: 'Formas nominais', level: '—' }
  ];
  C.tenseById = {};
  C.TENSES.forEach(function (t) { C.tenseById[t.id] = t; });

  var VOWEL = /^[aeiouyàâäéèêëîïôöûùüœæ]/i;
  var H_ASPIRE = { 'haïr': 1, 'hurler': 1, 'hausser': 1, 'heurter': 1, 'hacher': 1, 'harceler': 1, 'hisser': 1,
    'huer': 1, 'hanter': 1, 'hâter': 1, 'héler': 1, 'hennir': 1, 'hérisser': 1, 'honnir': 1, 'hasarder': 1, 'hululer': 1 };
  var DOUBLE_SET = { appeler: 1, rappeler: 1, 'épeler': 1, renouveler: 1, jeter: 1, rejeter: 1, projeter: 1,
    feuilleter: 1, 'étiqueter': 1, ficeler: 1, chanceler: 1, 'épousseter': 0 };
  var E_GRAVE_SET = { acheter: 1, racheter: 1, geler: 1, congeler: 1, 'dégeler': 1, peler: 1, modeler: 1,
    harceler: 1, haleter: 1, crocheter: 1, ciseler: 1, 'démanteler': 1, marteler: 1, fureter: 1, corseter: 1, 'épousseter': 1 };

  function startsVowelSound(word, inf) {
    if (!word) return false;
    if (VOWEL.test(word)) return true;
    if (/^h/i.test(word)) return !H_ASPIRE[inf];
    return false;
  }
  C.startsVowelSound = startsVowelSound;

  /* infinitivo "se lever" / "s'appeler" -> {base, pronominal} */
  C.parseInf = function (inf) {
    var m = String(inf).match(/^(?:se\s+|s['’])(.+)$/);
    return m ? { base: m[1], pronominal: true } : { base: inf, pronominal: false };
  };

  C.detectPattern = function (inf) {
    if (/ir$/.test(inf)) return 'ir2';
    if (/re$/.test(inf)) return 're';
    var p = [];
    if (/cer$/.test(inf)) p.push('cer');
    if (/ger$/.test(inf)) p.push('ger');
    if (/[ou]yer$/.test(inf)) p.push('yer');
    else if (/ayer$/.test(inf)) p.push('ayer');
    else if (/é[^aeiouyéèêëàâîïôûù]{1,2}er$/.test(inf)) p.push('é-è');
    else if (/e[^aeiouyéèêëàâîïôûù]er$/.test(inf)) {
      if (E_GRAVE_SET[inf]) p.push('e-è');
      else if (/(eler|eter)$/.test(inf)) p.push('double');
      else p.push('e-è');
    }
    return p.length ? p.join('+') : 'er';
  };

  function split6(s) { return s.split(/\s+/).map(function (x) { return x === '-' ? null : x; }); }

  /* ---------- passé simple a partir da 1ª pessoa ---------- */
  function passeSimpleFrom(first, fx) {
    fx = fx || function (st) { return st; };
    var b;
    if (/ai$/.test(first)) {
      b = first.slice(0, -2);
      return {
        ps: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'].map(function (e) { return fx(b, e) + e; }),
        si: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'].map(function (e) { return fx(b, e) + e; })
      };
    }
    if (/ins$/.test(first)) {
      b = first.slice(0, -3);
      return {
        ps: [b + 'ins', b + 'ins', b + 'int', b + 'înmes', b + 'întes', b + 'inrent'],
        si: [b + 'insse', b + 'insses', b + 'înt', b + 'inssions', b + 'inssiez', b + 'inssent']
      };
    }
    var v = first.slice(-2, -1);          // 'i' ou 'u'
    var vc = v === 'i' ? 'î' : 'û';
    b = first.slice(0, -2);
    return {
      ps: [b + v + 's', b + v + 's', b + v + 't', b + vc + 'mes', b + vc + 'tes', b + v + 'rent'],
      si: [b + v + 'sse', b + v + 'sses', b + vc + 't', b + v + 'ssions', b + v + 'ssiez', b + v + 'ssent']
    };
  }

  var IMPF = ['ais', 'ais', 'ait', 'ions', 'iez', 'aient'];
  var FUT = ['ai', 'as', 'a', 'ons', 'ez', 'ont'];

  /* ---------- verbos do 1º grupo (-er) ---------- */
  function firstGroup(inf, pattern) {
    var pats = pattern.split('+');
    var has = function (p) { return pats.indexOf(p) >= 0; };
    var weak = inf.slice(0, -2), strong = weak, fut = inf;
    if (has('e-è') || has('é-è')) strong = weak.replace(/[eé]([^aeiouyéèêëàâîïôûù]+)$/, 'è$1');
    if (has('double')) strong = weak + weak.slice(-1);
    if (has('yer') || has('ayer')) strong = weak.replace(/y$/, 'i');
    if (has('e-è') || has('double') || has('yer') || has('ayer')) fut = strong + 'er';
    var fx = function (stem, end) {
      if (/^[aoâ]/.test(end)) {
        if (has('cer')) return stem.slice(0, -1) + 'ç';
        if (has('ger')) return stem + 'e';
      }
      return stem;
    };
    // passé simple com correção ortográfica por terminação (commençai, mangeâmes...)
    var ps = {
      ps: ['ai', 'as', 'a', 'âmes', 'âtes', 'èrent'].map(function (e) { return fx(weak, e) + e; }),
      si: ['asse', 'asses', 'ât', 'assions', 'assiez', 'assent'].map(function (e) { return fx(weak, e) + e; })
    };
    return {
      present: [strong + 'e', strong + 'es', strong + 'e', fx(weak, 'ons') + 'ons', weak + 'ez', strong + 'ent'],
      imparfait: IMPF.map(function (e) { return fx(weak, e) + e; }),
      futurStem: fut,
      passe_simple: ps.ps, subjonctif_imparfait: ps.si,
      subjonctif: [strong + 'e', strong + 'es', strong + 'e', weak + 'ions', weak + 'iez', strong + 'ent'],
      imperatif: [strong + 'e', fx(weak, 'ons') + 'ons', weak + 'ez'],
      pp: weak + 'é', ppr: fx(weak, 'ant') + 'ant',
      alt: has('ayer') ? altAyer(weak) : null
    };
  }
  function altAyer(weak) {
    return 'Também é correto manter o y: je ' + weak + 'e, tu ' + weak + 'es, il ' + weak + 'e, ils ' + weak + 'ent; futur: je ' + weak + 'erai.';
  }

  /* ---------- 2º grupo (finir) ---------- */
  function secondGroup(inf) {
    var s = inf.slice(0, -2);
    return {
      present: [s + 'is', s + 'is', s + 'it', s + 'issons', s + 'issez', s + 'issent'],
      imparfait: IMPF.map(function (e) { return s + 'iss' + e; }),
      futurStem: inf,
      passe_simple: [s + 'is', s + 'is', s + 'it', s + 'îmes', s + 'îtes', s + 'irent'],
      subjonctif_imparfait: [s + 'isse', s + 'isses', s + 'ît', s + 'issions', s + 'issiez', s + 'issent'],
      subjonctif: [s + 'isse', s + 'isses', s + 'isse', s + 'issions', s + 'issiez', s + 'issent'],
      imperatif: [s + 'is', s + 'issons', s + 'issez'],
      pp: s + 'i', ppr: s + 'issant'
    };
  }

  /* ---------- tabelas "irregulares" geradas por família ---------- */
  function familyTable(inf, pattern) {
    var s;
    if (pattern === 're' || pattern === 'rompre') {             // vendre, attendre, rompre
      s = inf.slice(0, -2);
      return {
        present: [s + 's', s + 's', pattern === 'rompre' ? s + 't' : s, s + 'ons', s + 'ez', s + 'ent'].join(' '),
        futurStem: s + 'r', ps: s + 'is', pp: s + 'u'
      };
    }
    if (pattern === 'partir') {                                  // partir, dormir, sortir, sentir, servir, mentir
      s = inf.slice(0, -2);
      var sg = s.slice(0, -1);
      return {
        present: [sg + 's', sg + 's', sg + 't', s + 'ons', s + 'ez', s + 'ent'].join(' '),
        futurStem: inf, ps: s + 'is', pp: s + 'i'
      };
    }
    return null;
  }

  /* ---------- formas simples a partir de uma tabela irregular ---------- */
  function fromTable(t) {
    var pres = split6(t.present);
    var nousStem = pres[3] ? pres[3].replace(/ons$/, '') : null;
    var ilsStem = pres[5] ? pres[5].replace(/ent$/, '') : null;
    var impfStem = t.imparfaitStem || nousStem;
    var res = {
      present: pres,
      imparfait: impfStem ? IMPF.map(function (e) { return impfStem + e; }) : null,
      futurStem: t.futurStem,
      pp: t.pp, ppr: t.ppr !== undefined ? t.ppr : (nousStem ? nousStem + 'ant' : null),
      ppForms: t.ppForms || null
    };
    if (t.impersonal) {
      res.imparfait = [null, null, impfStem + 'ait', null, null, null];
    }
    if (t.subj) res.subjonctif = split6(t.subj);
    else if (ilsStem && nousStem) res.subjonctif = [ilsStem + 'e', ilsStem + 'es', ilsStem + 'e', nousStem + 'ions', nousStem + 'iez', ilsStem + 'ent'];
    else res.subjonctif = null;
    if (t.ps) {
      var ps = passeSimpleFrom(t.ps.split(/\s+/)[0]);
      res.passe_simple = ps.ps; res.subjonctif_imparfait = ps.si;
    }
    if (t.imperatif === null) res.imperatif = null;
    else if (t.imperatif) res.imperatif = split6(t.imperatif);
    else if (pres[1]) {
      var tu = pres[1].replace(/es$/, 'e');
      res.imperatif = [tu, pres[3], pres[4]];
    }
    if (t.impersonal) {
      ['subjonctif', 'passe_simple', 'subjonctif_imparfait'].forEach(function (k) {
        if (res[k]) res[k] = [null, null, res[k][2], null, null, null];
      });
      res.imperatif = null;
    }
    return res;
  }

  /* resolve "like": verbo derivado (devenir < venir, paraître < connaître) */
  function resolveLike(inf, baseInf, table) {
    var i = 0;
    while (i < inf.length && i < baseInf.length && inf[inf.length - 1 - i] === baseInf[baseInf.length - 1 - i]) i++;
    var baseRoot = baseInf.slice(0, baseInf.length - i), newRoot = inf.slice(0, inf.length - i);
    var swap = function (s) {
      if (s == null) return s;
      return String(s).split(/\s+/).map(function (w) {
        if (w === '-') return w;
        return w.indexOf(baseRoot) === 0 ? newRoot + w.slice(baseRoot.length) : w;
      }).join(' ');
    };
    var out = {};
    Object.keys(table).forEach(function (k) {
      var v = table[k];
      out[k] = (typeof v === 'string' && k !== 'aux' && k !== 'note') ? swap(v) : v;
    });
    if (table.ppForms) out.ppForms = table.ppForms.map(swap);
    return out;
  }

  var cache = {};

  /* Formas simples de um verbo. entry = entrada do dicionário (ou só {inf}) */
  C.simple = function (inf, entry) {
    entry = entry || LUX.data.verbs[inf] || {};
    var key = inf + '|' + (entry.like || '') + '|' + (entry.pattern || '');
    if (cache[key]) return cache[key];
    var pi = C.parseInf(inf), base = pi.base;
    var irr = LUX.data.irregular;
    var table = irr[base] || null;
    if (!table && entry.like && irr[entry.like]) table = resolveLike(base, entry.like, irr[entry.like]);
    if (!table && entry.like && !irr[entry.like]) {
      var famBase = familyTable(entry.like, C.detectPattern(entry.like) === 're' ? 're' : 'partir');
      if (famBase) table = resolveLike(base, entry.like, famBase);
    }
    if (table && entry.override) table = Object.assign({}, table, entry.override);
    var pattern = entry.pattern && entry.pattern !== 'irregular' ? entry.pattern : null;
    if (!table && pattern && (pattern === 're' || pattern === 'rompre' || pattern === 'partir')) {
      table = familyTable(base, pattern);
    }
    var f;
    if (table) {
      f = fromTable(table);
      f.aux = table.aux || null;
      f.impersonal = !!table.impersonal;
      f.note = table.note || null;
    } else {
      pattern = pattern || C.detectPattern(base);
      if (pattern === 'ir2') f = secondGroup(base);
      else if (pattern === 're') f = fromTable(familyTable(base, 're'));
      else f = firstGroup(base, pattern);
      f.aux = null;
    }
    f.pattern = table ? (entry.pattern || 'irregular') : pattern;
    f.futur = f.futurStem ? FUT.map(function (e) { return f.futurStem + e; }) : null;
    f.conditionnel = f.futurStem ? IMPF.map(function (e) { return f.futurStem + e; }) : null;
    if (f.impersonal) {
      f.futur = [null, null, f.futur[2], null, null, null];
      f.conditionnel = [null, null, f.conditionnel[2], null, null, null];
    }
    f.inf = inf; f.base = base; f.pronominal = pi.pronominal;
    f.aux = pi.pronominal ? 'être' : (entry.aux || f.aux || 'avoir');
    f.hAspire = !!H_ASPIRE[base];
    cache[key] = f;
    return f;
  };

  /* ---------- montagem das linhas com pronomes ---------- */
  var SUBJ = [['je'], ['tu'], ['il', 'elle', 'on'], ['nous'], ['vous'], ['ils', 'elles']];
  var REFL = ['me', 'te', 'se', 'nous', 'vous', 'se'];
  var IMP_REFL = ['toi', 'nous', 'vous'];

  function joinSubject(pron, rest, inf) {
    if (pron === 'je' && startsVowelSound(rest, inf)) return "j'" + rest;
    return pron + ' ' + rest;
  }
  function withRefl(p, word, inf) {
    var r = REFL[p];
    if ((r === 'me' || r === 'te' || r === 'se') && startsVowelSound(word, inf)) return r.charAt(0) + "'" + word;
    return r + ' ' + word;
  }
  function que(subject) {
    return /^[aeiouéèê]/.test(subject) || /^il|^elle|^on/.test(subject) ? "qu'" + subject : 'que ' + subject;
  }

  /* concordância do particípio: gênero 'm'|'f'|'?' e número 's'|'p'|'?' */
  function agree(f, gender, number) {
    var pp = f.pp;
    if (f.ppForms) {             // ex.: dû -> due, dus, dues
      var pf = f.ppForms;        // [ms, fs, mp, fp]
      if (gender === 'm' && number === 's') return pf[0];
      if (gender === 'f' && number === 's') return pf[1];
      if (gender === 'm' && number === 'p') return pf[2];
      if (gender === 'f' && number === 'p') return pf[3];
    }
    var endsS = /[sx]$/.test(pp);
    if (number === 's') return gender === 'm' ? pp : gender === 'f' ? pp + 'e' : pp + '(e)';
    if (number === 'p') {
      if (gender === 'm') return endsS ? pp : pp + 's';
      if (gender === 'f') return pp + 'es';
      return endsS ? pp + '(es)' : pp + '(e)s';
    }
    return pp + '(e)(s)';      // vous (plural ou cortesia)
  }
  var AGREE_BY = {
    je: ['?', 's'], tu: ['?', 's'], il: ['m', 's'], elle: ['f', 's'], on: ['?', 'p'],
    nous: ['?', 'p'], vous: ['?', '?'], ils: ['m', 'p'], elles: ['f', 'p']
  };

  function auxForms(aux) { return C.simple(aux, {}); }

  /* constrói a tabela completa: [{tense, rows:[{variants:[{text, form}]}]}] */
  C.conjugate = function (inf, entry) {
    var f = C.simple(inf, entry);
    var out = [];
    C.TENSES.forEach(function (t) {
      var rows = buildTense(f, t);
      if (rows && rows.length) out.push({ tense: t, rows: rows });
    });
    return { info: f, tenses: out };
  };

  function personRows(f) {
    var persons = [0, 1, 2, 3, 4, 5];
    if (f.impersonal) persons = [2];
    return persons;
  }

  function simpleRow(f, forms, p, isSubj) {
    if (!forms || !forms[p]) return null;
    var subs = f.impersonal ? ['il'] : SUBJ[p];
    var variants = subs.map(function (s) {
      var body = f.pronominal ? withRefl(p, forms[p], f.base) : forms[p];
      var txt = joinSubject(s, body, f.base);
      if (isSubj) txt = que(txt);
      return { text: txt, form: forms[p] };
    });
    return { variants: variants, form: forms[p], person: p };
  }

  function compoundRow(f, auxTenseId, p, isSubj) {
    var aux = f.aux === 'être' ? 'être' : 'avoir';
    var A = auxForms(aux)[auxTenseId];
    if (!A || !A[p]) return null;
    var subs = f.impersonal ? ['il'] : SUBJ[p];
    var variants = subs.map(function (s) {
      var part = aux === 'être' ? agree(f, AGREE_BY[s][0], AGREE_BY[s][1]) : f.pp;
      var auxWord = A[p];
      var body = f.pronominal ? withRefl(p, auxWord, f.base) : auxWord;
      var txt = joinSubject(s, body, aux) + ' ' + part;
      if (isSubj) txt = que(txt);
      return { text: txt, form: part };
    });
    return { variants: variants, form: f.pp, person: p, compound: true };
  }

  function buildTense(f, t) {
    var rows = [], ps = personRows(f);
    var isSubj = t.mood === 'Subjonctif';
    if (t.id === 'imperatif') {
      if (!f.imperatif) return null;
      return f.imperatif.map(function (form, i) {
        if (!form) return null;
        var txt = f.pronominal ? form + '-' + IMP_REFL[i] : form;
        return { variants: [{ text: txt, form: form }], form: form, person: [1, 3, 4][i], label: ['(tu)', '(nous)', '(vous)'][i] };
      }).filter(Boolean);
    }
    if (t.id === 'imperatif_passe') {
      if (!f.imperatif || f.pronominal || f.impersonal) return null;
      var auxImp = auxForms(f.aux === 'être' ? 'être' : 'avoir').imperatif;
      var ag = f.aux === 'être' ? [agree(f, '?', 's'), agree(f, '?', 'p'), agree(f, '?', '?')] : [f.pp, f.pp, f.pp];
      return auxImp.map(function (a, i) {
        return { variants: [{ text: a + ' ' + ag[i], form: ag[i] }], form: f.pp, person: [1, 3, 4][i], label: ['(tu)', '(nous)', '(vous)'][i], compound: true };
      });
    }
    if (t.id === 'futur_proche') {
      var aller = C.simple('aller', {}).present;
      ps.forEach(function (p) {
        var subs = f.impersonal ? ['il'] : SUBJ[p];
        var variants = subs.map(function (s) {
          var infPart = f.pronominal ? withRefl(p, f.base, f.base) : f.base;
          return { text: s + ' ' + aller[p] + ' ' + infPart, form: f.base };
        });
        rows.push({ variants: variants, form: f.base, person: p });
      });
      return rows;
    }
    if (t.id === 'nominales') return nominalRows(f);
    if (t.compound) {
      ps.forEach(function (p) { var r = compoundRow(f, t.compound, p, isSubj); if (r) rows.push(r); });
      return rows;
    }
    var forms = f[t.id];
    ps.forEach(function (p) { var r = simpleRow(f, forms, p, isSubj); if (r) rows.push(r); });
    return rows;
  }

  function nominalRows(f) {
    var rows = [];
    var refl = function (w) { return f.pronominal ? (startsVowelSound(w, f.base) ? "s'" + w : 'se ' + w) : w; };
    var auxInf = f.aux === 'être' ? 'être' : 'avoir';
    var ppA = f.aux === 'être' ? agree(f, '?', '?') : f.pp;
    rows.push({ label: 'Infinitif présent', variants: [{ text: refl(f.base), form: f.base }] });
    rows.push({ label: 'Infinitif passé', variants: [{ text: (f.pronominal ? "s'être" : auxInf) + ' ' + ppA, form: ppA }] });
    if (f.ppr) {
      rows.push({ label: 'Participe présent', variants: [{ text: refl(f.ppr), form: f.ppr }] });
      rows.push({ label: 'Gérondif', variants: [{ text: 'en ' + refl(f.ppr), form: f.ppr }] });
    }
    var pf = f.ppForms ? f.ppForms : (/[sx]$/.test(f.pp) ? [f.pp, f.pp + 'e', f.pp, f.pp + 'es'] : [f.pp, f.pp + 'e', f.pp + 's', f.pp + 'es']);
    rows.push({ label: 'Participe passé', variants: [{ text: pf[0] + ' (' + pf.slice(1).join(', ') + ')', form: f.pp, tts: pf.filter(function (x, i, a) { return a.indexOf(x) === i; }).join(', ') }] });
    var auxPpr = f.aux === 'être' ? 'étant' : 'ayant';
    rows.push({ label: 'Participe passé composé', variants: [{ text: (f.pronominal ? "s'étant" : auxPpr) + ' ' + ppA, form: ppA }] });
    return rows;
  }

  /* todas as formas simples (para busca por forma conjugada e para o léxico) */
  C.allForms = function (inf, entry) {
    var f = C.simple(inf, entry), set = {};
    ['present', 'imparfait', 'futur', 'conditionnel', 'passe_simple', 'subjonctif', 'subjonctif_imparfait', 'imperatif'].forEach(function (k) {
      (f[k] || []).forEach(function (x) { if (x && !set[x]) set[x] = k; });
    });
    if (f.pp) {
      var pf = f.ppForms || [f.pp, f.pp + 'e', /[sx]$/.test(f.pp) ? f.pp : f.pp + 's', f.pp + 'es'];
      pf.forEach(function (x) { if (!set[x]) set[x] = 'pp'; });
    }
    if (f.ppr && !set[f.ppr]) set[f.ppr] = 'ppr';
    set[f.base] = 'inf';
    return set;
  };

  C.FORM_LABEL = {
    present: 'présent', imparfait: 'imparfait', futur: 'futur simple', conditionnel: 'conditionnel',
    passe_simple: 'passé simple', subjonctif: 'subjonctif', subjonctif_imparfait: 'subjonctif imparfait',
    imperatif: 'impératif', pp: 'particípio passado', ppr: 'particípio presente', inf: 'infinitivo'
  };

  /* raiz "regular" para destacar terminações */
  C.root = function (f) {
    var b = f.base;
    if (/oir$/.test(b)) return b.slice(0, -3);
    return b.slice(0, -2);
  };

  /* agrupa variantes p/ exibição: "il / elle / on court" ou "il est allé / elle est allée / ..." */
  C.rowDisplay = function (row) {
    var v = row.variants;
    if (v.length === 1) return v[0].text;
    var forms = v.map(function (x) { return x.text.replace(/^(qu'|que )?(ils|elles|il|elle|on)\s?/, ''); });
    var same = forms.every(function (x) { return x === forms[0]; });
    if (same) {
      var m = v[0].text.match(/^(qu'|que )?/);
      var isQue = m && m[0];
      var prons = v.map(function (x) { return x.text.match(/^(?:qu'|que )?(ils|elles|il|elle|on)/)[1]; });
      return (isQue ? prons.map(function (p) { return "qu'" + p; }).join(' / ') : prons.join(' / ')) + ' ' + forms[0];
    }
    return v.map(function (x) { return x.text; }).join(' / ');
  };
  C.rowSpeech = function (row) {
    return row.variants.map(function (x) { return x.tts || x.text; }).join(', ');
  };
})(typeof window !== 'undefined' ? window : globalThis);
