#!/usr/bin/env node
/* Dicionário completo — etapa 2: monta dict/fr-pt.<hash>.json e content/dict-index.js.
   Fontes (geradas por tools/dict-extract.py na <pasta>): Wiktionary francês e português (CC BY-SA 4.0).
   - Entradas francesas com tradução para o português (traduções do Wiktionary francês, definições em português do
     Wiktionary português e traduções pt→fr do Wiktionary português, invertidas).
   - Verbos: todos os que têm tabela de conjugação no Wiktionary francês, mesmo sem tradução (com definição em francês).
     A conjugação NÃO é guardada: o motor do app (js/verbs/conjugator.js) calcula. Para cada verbo, este script compara
     o motor com a tabela do Wiktionary e guarda só o mínimo para acertar: nada (regular), um modelo ("like": devenir
     como venir) ou uma tabela de formas-chave, como as de content/verbs/irregular.js.
   Uso:  node tools/build-dict.js <pasta>   (relatório de conferência em <pasta>/dict-report.txt) */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const readline = require('readline');
const { loadAll, ROOT } = require('./load');

const SRC = process.argv[2];
if (!SRC) { console.error('Uso: node tools/build-dict.js <pasta com os arquivos de tools/dict-extract.py>'); process.exit(1); }
const ctx = loadAll();
const LUX = ctx.LUX, C = LUX.conjugator, U = LUX.util;
const report = [];

const POS = { noun: 'n', adj: 'adj', adv: 'adv', verb: 'v', prep: 'prep', conj: 'conj', pron: 'pron', det: 'det', article: 'art',
  intj: 'interj', phrase: 'expr', num: 'num', name: 'np', contraction: 'expr', proverb: 'expr', particle: 'adv' };
const apos = s => String(s || '').replace(/[’`´]/g, "'").trim();
const clean = s => apos(s).replace(/\s+/g, ' ').replace(/[\s:;,.]+$/, '').trim();

function genderOf(tags) {
  tags = tags || [];
  const m = tags.includes('masculine'), f = tags.includes('feminine');
  if (m && f) return 'mf';
  if (m) return 'm';
  if (f) return 'f';
  return '';
}

/* ---------- leitura ---------- */
async function eachLine(file, fn) {
  const rl = readline.createInterface({ input: fs.createReadStream(file, { encoding: 'utf8' }), crlfDelay: Infinity });
  for await (const line of rl) { if (line) { try { fn(JSON.parse(line)); } catch (e) { /* linha quebrada */ } } }
}

/* ---------- conjugação do Wiktionary -> formas por tempo ---------- */
const SUBJ_RE = /^(?:que |qu')?(?:je |j'|tu |il\/elle\/on |il |elle |on |nous |vous |ils\/elles |ils |elles )?/;
const REFL_RE = /^(?:me |m'|te |t'|se |s'|nous |vous )/;
function bare(form, pronominal) {
  let s = apos(form).split(/ ou | \/ /)[0].trim();
  s = s.replace(SUBJ_RE, '');
  if (pronominal) s = s.replace(REFL_RE, '');
  return s;
}
const TAGMAP = [
  ['present', ['indicative', 'present'], 6], ['imparfait', ['indicative', 'imperfect'], 6], ['futur', ['indicative', 'future'], 6],
  ['passe_simple', ['indicative', 'past'], 6], ['conditionnel', ['conditional', 'present'], 6], ['subjonctif', ['subjunctive', 'present'], 6],
  ['subjonctif_imparfait', ['subjunctive', 'imperfect'], 6], ['imperatif', ['imperative', 'present'], 3]
];
const PERSON_RE = [/^(?:que )?(?:je |j')/, /^(?:que )?tu /, /^(?:qu')?(?:il|elle|on)/, /^(?:que )?nous /, /^(?:que )?vous /, /^(?:qu')?(?:ils|elles)/];
function wikiConj(e, pronominal) {
  const forms = (e.forms || []).filter(f => /^Conjugaison/.test(f.source || ''));
  if (!forms.length) return null;
  const w = {};
  for (const [key, tags, n] of TAGMAP) {
    const list = forms.filter(f => f.tags.length === tags.length && tags.every(t => f.tags.includes(t)));
    if (!list.length) continue;
    const arr = new Array(n).fill(null);
    if (n === 3) list.slice(0, 3).forEach((f, i) => { arr[i] = bare(f.form, pronominal).replace(/-(?:toi|nous|vous)$/, ''); });
    else list.forEach(f => {
      const t = apos(f.form);
      const p = PERSON_RE.findIndex(re => re.test(t));
      if (p >= 0 && arr[p] == null) arr[p] = bare(t, pronominal);
    });
    w[key] = arr.map(x => (x && x !== '—' && x !== '-' ? x : null));
    if (n === 3 && pronominal) w[key] = w[key].map(x => x && x.replace(/-(?:toi|nous|vous)$/, ''));
  }
  const pp = forms.find(f => f.tags.includes('participle') && f.tags.includes('past'));
  const ppr = forms.find(f => f.tags.includes('participle') && f.tags.includes('present'));
  w.pp = pp ? bare(pp.form, pronominal).replace(/^(?:s'|se )?(?:étant |ayant )?/, '') : null;
  w.ppr = ppr ? bare(ppr.form, pronominal) : null;
  const pc = forms.find(f => f.tags.includes('multiword-construction') && f.tags.includes('past'));
  w.aux = pc && /^(?:je |j')(?:me |m')?(?:suis)/.test(apos(pc.form)) ? 'être' : 'avoir';
  if (pronominal) w.aux = 'être';
  return w;
}

/* compara o motor com o Wiktionary; devolve a lista de diferenças */
const CMP = ['present', 'imparfait', 'futur', 'conditionnel', 'passe_simple', 'subjonctif', 'subjonctif_imparfait', 'imperatif'];
function diff(inf, entry, w) {
  let f;
  try { f = C.simple(inf, entry); } catch (e) { return ['erro: ' + e.message]; }
  const out = [];
  for (const k of CMP) {
    if (!w[k]) continue;
    w[k].forEach((x, i) => { if (x && (!f[k] || !eq(f[k][i], x))) out.push(k + i + ':' + (f[k] ? f[k][i] : '∅') + '≠' + x); });
  }
  if (w.pp && f.pp !== w.pp) out.push('pp:' + f.pp + '≠' + w.pp);
  if (w.ppr && f.ppr !== w.ppr) out.push('ppr:' + f.ppr + '≠' + w.ppr);
  if (w.aux === 'être' && f.aux !== 'être') out.push('aux');
  return out;
}
/* "paie" e "paye" são ambos corretos (verbos em -ayer) */
function eq(a, b) { if (a === b) return true; if (!a || !b) return false; const n = s => s.replace(/ai(?=e|er)/g, 'ay'); return n(a) === n(b); }

/* tabela de formas-chave a partir do Wiktionary (mesmo formato de content/verbs/irregular.js) */
const j6 = a => (a || []).map(x => x || '-').join(' ');
function tableFrom(w) {
  const t = { present: j6(w.present) };
  if (w.futur && w.futur[0]) t.futurStem = w.futur[0].replace(/ai$/, '');
  else if (w.futur && w.futur[2]) t.futurStem = w.futur[2].replace(/a$/, '');
  if (w.passe_simple) { const ps0 = w.passe_simple.find(Boolean); if (ps0) t.ps = w.passe_simple[0] || ps0; }
  if (w.pp) t.pp = w.pp;
  if (w.ppr) t.ppr = w.ppr;
  if (w.aux === 'être') t.aux = 'être';
  if (!w.present.some((x, i) => x && i !== 2) && w.present[2]) t.impersonal = true;
  return t;
}
/* completa a tabela até o motor reproduzir o Wiktionary */
function fitTable(inf, w) {
  const t = tableFrom(w);
  const probe = (tt) => { LUX.data.irregular[inf] = tt; resetCache(); return diff(inf, {}, w); };
  let d = probe(t);
  const fix = (key, val) => { if (d.some(x => x.indexOf(key) === 0)) { t[val[0]] = val[1]; d = probe(t); } };
  if (w.imparfait && w.imparfait[3]) fix('imparfait', ['imparfaitStem', w.imparfait[3].replace(/ions$/, '')]);
  if (w.subjonctif) fix('subjonctif', ['subj', j6(w.subjonctif)]);
  if (w.imperatif) fix('imperatif', ['imperatif', j6(w.imperatif)]);
  if (w.imparfait) fix('imparfait', ['imparfaitList', j6(w.imparfait)]);
  if (w.passe_simple) fix('passe_simple', ['psList', j6(w.passe_simple)]);
  if (w.subjonctif_imparfait) fix('subjonctif_imparfait', ['siList', j6(w.subjonctif_imparfait)]);
  if (w.futur) fix('futur', ['futurList', j6(w.futur)]);
  if (w.conditionnel) fix('conditionnel', ['condList', j6(w.conditionnel)]);
  delete LUX.data.irregular[inf]; resetCache();
  return { table: t, rest: d };
}
function resetCache() { C._resetCache && C._resetCache(); }

/* ---------- principal ---------- */
(async () => {
  const fr = new Map();      // chave "palavra|pos" -> entrada
  const key = (w, p) => w + '|' + p;
  function get(w, p) {
    const k = key(w, p);
    let e = fr.get(k);
    if (!e) { e = { w, p, g: '', pt: [], ptSeen: new Set(), ipa: '', def: '', wk: null, src: new Set() }; fr.set(k, e); }
    return e;
  }
  function addPt(e, t, src) {
    t = clean(t).replace(/^\((.*)\)$/, '$1');
    if (!t || t.length > 90) return;
    const n = U.norm(t);
    if (e.ptSeen.has(n)) return;
    e.ptSeen.add(n); e.pt.push(t); e.src.add(src);
  }

  /* 1. Wiktionary francês: entradas francesas */
  let nFr = 0;
  await eachLine(path.join(SRC, 'fr_fr.jsonl'), d => {
    const p = POS[d.pos]; if (!p || !d.word) return;
    const w = apos(d.word);
    if (/[0-9]/.test(w) || w.length > 40) return;
    if (p === 'v' && / /.test(w.replace(/^(?:se |s')/, ''))) return; // locuções verbais ("copier coller")
    const senses = d.senses || [];
    const lemma = senses.some(s => !s.form_of && !(s.tags || []).includes('form-of'));
    if (!lemma) return;
    nFr++;
    let pronominal = false, inf = w;
    if (p === 'v') {
      // verbo só pronominal: o infinitivo da tabela vem com "se" (s'évanouir)
      const infForm = (d.forms || []).find(f => /^Conjugaison/.test(f.source || '') && f.tags.includes('infinitive') && f.tags.includes('present'));
      const fi = infForm ? apos(infForm.form) : '';
      pronominal = /^(?:se |s')/.test(w) || /^(?:se |s')/.test(fi);
      if (pronominal && !/^(?:se |s')/.test(w)) inf = /^[aeiouyéèêàâîôûh]/i.test(w) ? "s'" + w : 'se ' + w;
    }
    const tr = d.tr || [];
    const conj = p === 'v' ? wikiConj(d, pronominal) : null;
    if (!tr.length && !conj) { // sem tradução: guarda só se o Wiktionary português tiver (etapa 2)
      const e0 = fr.get(key(w, p));
      if (!e0) fr.set('?' + key(w, p), { w, p, g: genderOf(d.tags), ipa: d.ipa, def: firstDef(senses) });
      return;
    }
    const e = get(inf, p);
    if (!e.g) e.g = genderOf(d.tags);
    if (!e.ipa && d.ipa) e.ipa = apos(d.ipa).replace(/^\\|\\$/g, '');
    if (!e.def) e.def = firstDef(senses);
    // traduções agrupadas por sentido, na ordem do Wiktionary
    const bySense = new Map();
    tr.forEach(t => { const s = t.sense_index || 0; if (!bySense.has(s)) bySense.set(s, []); bySense.get(s).push(t.word); });
    [...bySense.keys()].sort((a, b) => a - b).forEach(s => bySense.get(s).forEach(x => addPt(e, x, 'fr')));
    if (conj && !e.wk) e.wk = conj;
  });
  function firstDef(senses) {
    const s = (senses || []).find(x => !x.form_of && x.g);
    if (!s) return '';
    let g = clean(s.g);
    if (g.length > 140) g = g.slice(0, 137).replace(/\s+\S*$/, '') + '…';
    return g;
  }

  /* 2. Wiktionary português: entradas francesas com definição em português */
  const ptEnt = JSON.parse(fs.readFileSync(path.join(SRC, 'pt_fr_entries.json'), 'utf8'));
  ptEnt.forEach(d => {
    const p = POS[d.pos]; if (!p || !d.word) return;
    const w = apos(d.word);
    const ss = (d.senses || []).filter(s => !s.form_of && !(s.tags || []).includes('form-of') && s.g);
    if (!ss.length) return;
    let e = fr.get(key(w, p));
    if (!e) {
      const pend = fr.get('?' + key(w, p));
      e = get(w, p);
      if (pend) { e.g = pend.g; e.ipa = pend.ipa ? apos(pend.ipa).replace(/^\\|\\$/g, '') : ''; e.def = pend.def; }
      if (!e.g) e.g = genderOf(d.tags);
    }
    ss.slice(0, 4).forEach(s => {
      const g = clean(s.g);
      // definições curtas viram traduções; "peluche, pelúcia" vira duas
      const parts = g.split(/\s*[,;]\s*/);
      if (!/[()]/.test(g) && (g.length <= 40 || parts.every(x => x.split(' ').length <= 3))) parts.forEach(x => addPt(e, x, 'pt'));
      else addPt(e, g.length > 90 ? g.slice(0, 87).replace(/\s+\S*$/, '') + '…' : g, 'pt');
    });
  });

  /* 3. Wiktionary português: palavra portuguesa -> francês (só para palavras francesas que já existem) */
  const pairs = JSON.parse(fs.readFileSync(path.join(SRC, 'pt_pairs.json'), 'utf8'));
  let nPairs = 0;
  pairs.forEach(([ptw, pos, frw]) => {
    const p = POS[pos] || null; frw = apos(frw);
    let e = p && fr.get(key(frw, p));
    if (!e) {
      const pend = p && fr.get('?' + key(frw, p));
      if (pend) { e = get(frw, p); e.g = pend.g; e.ipa = pend.ipa ? apos(pend.ipa).replace(/^\\|\\$/g, '') : ''; e.def = pend.def; }
    }
    if (!e) return;
    const before = e.pt.length; addPt(e, ptw, 'ptinv'); if (e.pt.length > before) nPairs++;
  });

  /* 3b. Wiktionary francês: palavras portuguesas definidas em francês ("livro" → "Livre.") */
  await eachLine(path.join(SRC, 'fr_pt.jsonl'), d => {
    const p = POS[d.pos]; if (!p || !d.word || p === 'np') return;
    (d.senses || []).slice(0, 4).forEach(s => {
      if (s.form_of || (s.tags || []).includes('form-of') || !s.g) return;
      clean(s.g).split(/\s*[,;]\s*/).forEach(g => {
        g = g.replace(/^(?:le |la |les |l')/i, '');
        if (!g || g.split(' ').length > 3) return;
        const fw = g.charAt(0).toLowerCase() + g.slice(1);
        let e = fr.get(key(fw, p)) || fr.get(key(g, p));
        if (!e) {
          const pend = fr.get('?' + key(fw, p));
          if (pend) { e = get(fw, p); e.g = pend.g; e.ipa = pend.ipa ? apos(pend.ipa).replace(/^\\|\\$/g, '') : ''; e.def = pend.def; }
        }
        if (!e) return;
        const before = e.pt.length; addPt(e, apos(d.word), 'frpt'); if (e.pt.length > before) nPairs++;
      });
    });
  });

  /* 4. verbos sem tradução: entram com a definição em francês */
  for (const [k, pend] of fr) {
    if (k[0] !== '?') continue;
    fr.delete(k);
  }
  // (os verbos com conjugação e sem tradução já entraram na etapa 1, pelo "conj")

  /* 5. conjugação: o mínimo para o motor acertar */
  const curated = new Set(LUX.data.verbList.map(v => v.inf));
  LUX.data.lexicon.forEach(x => { if (x.p === 'v') curated.add(x.w); });
  const verbs = [...fr.values()].filter(e => e.p === 'v' && e.wk && e.wk.present).sort((a, b) => a.w.length - b.w.length || (a.w < b.w ? -1 : 1));
  const stats = { regular: 0, like: 0, pattern: 0, table: 0, tableImperfect: 0, curatedOk: 0, curatedDiff: 0 };
  const tableVerbs = Object.keys(LUX.data.irregular);
  const PATTERNS = ['re', 'rompre', 'partir', 'e-è', 'double', 'é-è', 'ir2', 'er', 'ayer', 'yer'];
  for (const e of verbs) {
    const inf = e.w, w = e.wk, base = C.parseInf(inf).base;
    if (curated.has(inf) || LUX.data.irregular[base]) {
      const dd = diff(inf, LUX.data.verbs[inf] || lexEntry(inf), w);
      if (dd.length) { stats.curatedDiff++; report.push('CURSO ' + inf + ': ' + dd.slice(0, 6).join(' | ')); } else stats.curatedOk++;
      e.skip = true; continue;
    }
    const aux = w.aux === 'être' && !/^(?:se |s')/.test(inf) ? { aux: 'être' } : {};
    let d0 = diff(inf, Object.assign({}, aux), w);
    if (!d0.length) { stats.regular++; e.x = Object.keys(aux).length ? { a: 1 } : null; continue; }
    let done = false;
    // modelo: verbo com tabela que termina igual (prévenir -> venir, admettre -> mettre)
    const cands = tableVerbs.filter(t => base !== t && base.endsWith(t.replace(/^(?:se |s')/, '')))
      .concat(tableVerbs.filter(t => { const tb = t.replace(/^(?:se |s')/, ''); return base !== tb && !base.endsWith(tb) && commonSuffix(base, tb) >= 4; }));
    for (const t of cands) {
      if (!diff(inf, Object.assign({ like: t }, aux), w).length) { e.x = Object.assign({ l: t }, aux.aux ? { a: 1 } : {}); stats.like++; done = true; break; }
    }
    if (done) continue;
    for (const pt of PATTERNS) {
      if (!diff(inf, Object.assign({ pattern: pt }, aux), w).length) { e.x = Object.assign({ pt }, aux.aux ? { a: 1 } : {}); stats.pattern++; done = true; break; }
    }
    if (done) continue;
    const fit = fitTable(base, w);
    e.x = { t: fit.table };
    LUX.data.irregular[base] = fit.table; resetCache();
    tableVerbs.push(base);
    stats.table++;
    if (fit.rest.length) { stats.tableImperfect++; report.push('TABELA ' + inf + ': ' + fit.rest.slice(0, 6).join(' | ')); }
  }
  function lexEntry(inf) { const x = LUX.data.lexicon.find(l => l.p === 'v' && l.w === inf); return x ? { inf, like: x.like, pattern: x.pattern } : {}; }
  function commonSuffix(a, b) { let i = 0; while (i < a.length && i < b.length && a[a.length - 1 - i] === b[b.length - 1 - i]) i++; return i; }

  /* 6. saída */
  const out = [];
  let nNoPt = 0, nVerbs = 0;
  [...fr.values()].sort((a, b) => (U.norm(a.w) < U.norm(b.w) ? -1 : U.norm(a.w) > U.norm(b.w) ? 1 : a.p < b.p ? -1 : 1)).forEach(e => {
    if (!e.pt.length && !(e.p === 'v' && e.wk)) return;
    const row = [e.w, e.p, e.p === 'n' ? (e.g || '') : '', e.pt.slice(0, 10).join('; '), e.ipa || ''];
    const x = e.x ? Object.assign({}, e.x) : {};
    if (!e.pt.length) { x.d = e.def || ''; nNoPt++; }
    if (e.p === 'v' && e.wk) nVerbs++;
    if (e.p === 'v' && e.wk && !e.skip) x.c = 1; // tem conjugação conferida
    if (Object.keys(x).length) row.push(x);
    while (row.length > 2 && row[row.length - 1] === '') row.pop();
    out.push(row);
  });

  const json = JSON.stringify({ src: 'Wiktionary (fr, pt) — CC BY-SA 4.0', n: out.length, e: out });
  const hash = crypto.createHash('sha256').update(json).digest('hex').slice(0, 8);
  const dir = path.join(ROOT, 'dict');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.readdirSync(dir).filter(f => /^fr-pt\..*\.json$/.test(f)).forEach(f => fs.unlinkSync(path.join(dir, f)));
  const file = 'dict/fr-pt.' + hash + '.json';
  fs.writeFileSync(path.join(ROOT, file), json);
  const gz = require('zlib').gzipSync(json, { level: 9 }).length;
  fs.writeFileSync(path.join(ROOT, 'content/dict-index.js'),
    '/* Dicionário completo (gerado por tools/build-dict.js — não edite à mão). O arquivo de dados fica fora da instalação:\n' +
    '   é baixado na primeira vez que o dicionário é aberto e depois fica guardado no aparelho. */\n' +
    'LUX.dictIndex = ' + JSON.stringify({ file, entries: out.length, verbs: nVerbs, bytes: json.length, gzip: gz }) + ';\n');
  const summary = [
    'Entradas francesas lidas (lemas): ' + nFr,
    'Entradas no dicionário: ' + out.length + ' (sem tradução, só definição em francês: ' + nNoPt + ')',
    'Traduções vindas do Wiktionary português (pt→fr invertidas): ' + nPairs,
    'Verbos com conjugação: ' + nVerbs + ' — regulares ' + stats.regular + ', modelo ' + stats.like + ', padrão ' + stats.pattern +
      ', tabela ' + stats.table + ' (tabela ainda com diferenças: ' + stats.tableImperfect + ')',
    'Verbos do curso conferidos: ' + stats.curatedOk + ' iguais, ' + stats.curatedDiff + ' com diferenças (ver relatório)',
    'Arquivo: ' + file + ' — ' + (json.length / 1048576).toFixed(2) + ' MB (' + (gz / 1048576).toFixed(2) + ' MB comprimido)'
  ];
  fs.writeFileSync(path.join(SRC, 'dict-report.txt'), summary.join('\n') + '\n\n' + report.join('\n') + '\n');
  console.log(summary.join('\n'));
})().catch(e => { console.error(e); process.exit(1); });
