/* Valida todo o conteúdo do curso.
   Uso: node tools/validate-content.js [--missing]   (--missing lista só as palavras sem cobertura no léxico) */
const { loadAll } = require('./load');

const ctx = loadAll();
const LUX = ctx.LUX, U = LUX.util;
const errors = [], warnings = [];
const err = (where, msg) => errors.push(`✗ [${where}] ${msg}`);
const warn = (where, msg) => warnings.push(`! [${where}] ${msg}`);

/* ---------- exercícios ---------- */
function checkExercise(where, ex) {
  const t = ex.type;
  const need = (cond, msg) => { if (!cond) err(where, `${t}: ${msg}`); };
  switch (t) {
    case 'multiple_choice':
    case 'listen_choose':
      need(Array.isArray(ex.options) && ex.options.length >= 2, 'precisa de pelo menos 2 opções');
      need(Number.isInteger(ex.answer) && ex.answer >= 0 && ex.answer < (ex.options || []).length, 'answer fora das opções');
      need(new Set(ex.options || []).size === (ex.options || []).length, 'opções repetidas');
      if (t === 'listen_choose') need(!!ex.audio, 'falta audio');
      break;
    case 'true_false_nm':
      need(Array.isArray(ex.statements) && ex.statements.length >= 2, 'precisa de afirmações');
      (ex.statements || []).forEach(s => need(['V', 'F', 'NM'].includes(s.answer), `resposta inválida em "${s.text}"`));
      break;
    case 'fill_blank':
      need(Array.isArray(ex.items) && ex.items.length, 'sem itens');
      (ex.items || []).forEach(it => {
        need((it.text.match(/___/g) || []).length === 1, `item precisa de exatamente uma lacuna: "${it.text}"`);
        need(Array.isArray(it.answers) && it.answers.length, `item sem respostas: "${it.text}"`);
        if (ex.bank) need(it.answers.some(a => ex.bank.includes(a)), `resposta fora do banco: "${it.text}"`);
      });
      break;
    case 'match':
      need(Array.isArray(ex.pairs) && ex.pairs.length >= 2, 'precisa de pares');
      need(new Set((ex.pairs || []).map(p => p[1])).size === (ex.pairs || []).length, 'lado direito repetido');
      break;
    case 'order_sentence': need(typeof ex.answer === 'string' && ex.answer.split(' ').length >= 3, 'answer curto demais'); break;
    case 'order_events': need(Array.isArray(ex.items) && ex.items.length >= 3, 'precisa de pelo menos 3 itens'); break;
    case 'dictation': need(typeof ex.text === 'string' && ex.text.length > 3, 'falta text'); break;
    case 'short_answer': need(Array.isArray(ex.answers) && ex.answers.length, 'falta answers'); break;
    case 'speaking': break;
    default: err(where, `tipo de exercício desconhecido: ${t}`);
  }
}

/* ---------- cobertura do léxico ---------- */
LUX.lexicon.build();
const missing = new Map();
function cover(where, text, names, extra) { return coverFn(where, text, names, extra); }
function coverFn(where, text, names, extra) {
  if (!text) return;
  const parsed = U.parseGloss(text);
  const gloss = Object.assign({}, (extra && extra.gloss) || {});
  parsed.gloss.forEach(g => U.tokenize(g.text).filter(t => t.w).forEach(t => { gloss[U.lowerFr(t.text)] = g; }));
  U.tokenize(parsed.plain).filter(t => t.w).forEach(t => {
    if (!LUX.lexicon.covered(t.text, { names, gloss, letters: extra && extra.letters })) {
      const k = U.lowerFr(t.text);
      if (!missing.has(k)) missing.set(k, new Set());
      missing.get(k).add(where);
    }
  });
}
function glossOk(where, text) {
  const open = (text.match(/\[\[/g) || []).length, close = (text.match(/\]\]/g) || []).length;
  if (open !== close) err(where, 'glossário malformado ([[ e ]] não batem)');
  const re = /\[\[([^\]]*)\]\]/g; let m;
  while ((m = re.exec(text))) if (m[1].split('|').length < 2) err(where, `glossário sem tradução: [[${m[1]}]]`);
}

/* ---------- lições ---------- */
const lessonIds = new Set();
LUX.manifest.levels.forEach(lv => lv.units.forEach(u => u.lessons.forEach(id => {
  if (lessonIds.has(id)) err(id, 'id repetido no manifesto');
  lessonIds.add(id);
  const l = LUX.data.lessons[id];
  if (!l) { err(id, 'lição listada no manifesto mas não carregada'); return; }
  ['title', 'titlePt', 'objectives', 'vocabulary', 'reading', 'listening', 'grammar', 'grammarPractice', 'tipForBrazilians']
    .forEach(f => { if (!l[f]) err(id, `campo obrigatório ausente: ${f}`); });
  if (l.level !== lv.id || l.unit !== u.n) err(id, 'level/unit não batem com o manifesto');
  checkLessonBody(id, l);
})));
function checkLessonBody(id, l, isPro) {
  const fr = (l.lang || 'fr') === 'fr';  // cobertura do léxico e tópico de gramática só para francês
  const cover2 = (w, t, n) => { if (fr) cover(w, t, n); };
  const names = {}; (l.names || []).forEach(n => { names[U.norm(n)] = 1; U.tokenize(n).filter(t => t.w).forEach(t => { names[U.norm(t.text)] = 1; }); });
  if (l.reading) {
    glossOk(id + ' leitura', l.reading.text);
    cover2(id + ' leitura', l.reading.text, names);
    const words = U.tokenize(U.stripGloss(l.reading.text)).filter(t => t.w).length;
    const lim = fr ? { A2: [120, 240], B1: [250, 420], B2: [400, 720] }[l.level] : null; // limites pensados para o francês
    if (lim && (words < lim[0] || words > lim[1])) warn(id, `leitura com ${words} palavras (esperado ${lim[0]}–${lim[1]})`);
    l._readingWords = words;
    (l.reading.exercises || []).forEach((ex, i) => checkExercise(`${id} leitura #${i + 1}`, ex));
  }
  if (l.listening) {
    const sp = new Set((l.listening.speakers || []).map(s => s.id));
    (l.listening.script || []).forEach(s => { if (!sp.has(s.speaker)) err(id, `fala de personagem desconhecido: ${s.speaker}`); cover2(id + ' áudio', s.text, names); });
    l._listeningWords = (l.listening.script || []).reduce((n, s) => n + U.tokenize(s.text).filter(t => t.w).length, 0);
    (l.listening.exercises || []).forEach((ex, i) => checkExercise(`${id} áudio #${i + 1}`, ex));
  }
  (l.grammarPractice || []).forEach((ex, i) => checkExercise(`${id} prática #${i + 1}`, ex));
  if (fr && l.grammar && !LUX.data.grammar[l.grammar.topicId]) err(id, `topicId inexistente: ${l.grammar.topicId}`);
  if (fr && isPro) { // lições profissionais: exemplos do vocabulário e da gramática também precisam de cobertura
    (l.vocabulary || []).forEach(v => { cover2(id + ' vocabulário', v.ex, names); });
    ((l.grammar && l.grammar.examples) || []).forEach(e => cover2(id + ' gramática', e.fr, names));
  }
}
Object.keys(LUX.data.lessons).forEach(id => { if (!lessonIds.has(id)) warn(id, 'lição carregada mas fora do manifesto'); });

/* ---------- testes de nível ---------- */
LUX.manifest.levels.forEach(lv => {
  const t = LUX.data.levelTests[lv.id];
  const complete = lv.units.every(u => u.lessons.filter(id => LUX.data.lessons[id]).length >= 5);
  if (complete && !t) err('teste ' + lv.id, 'nível completo sem teste de nível');
  if (!t) return;
  const w = 'teste ' + lv.id;
  ['title', 'intro', 'sections'].forEach(f => { if (!t[f]) err(w, `campo ausente: ${f}`); });
  const names = {}; (t.names || []).forEach(n => { names[U.norm(n)] = 1; U.tokenize(n).filter(x => x.w).forEach(x => { names[U.norm(x.text)] = 1; }); });
  let n = 0;
  (t.sections || []).forEach(sec => {
    (sec.texts || []).forEach((tx, i) => { cover(`${w} texto ${i + 1}`, U.stripGloss(tx.text), names); (tx.exercises || []).forEach((ex, k) => { n++; checkExercise(`${w} texto ${i + 1} #${k + 1}`, ex); }); });
    (sec.audios || []).forEach((a, i) => {
      const sp = new Set((a.speakers || []).map(s => s.id));
      (a.script || []).forEach(s => { if (!sp.has(s.speaker)) err(w, `fala de personagem desconhecido: ${s.speaker}`); cover(`${w} áudio ${i + 1}`, s.text, names); });
      (a.exercises || []).forEach((ex, k) => { n++; checkExercise(`${w} áudio ${i + 1} #${k + 1}`, ex); });
    });
    (sec.exercises || []).forEach((ex, k) => { n++; checkExercise(`${w} ${sec.id} #${k + 1}`, ex); });
  });
  t._n = n;
});

/* ---------- verbos ---------- */
const infs = new Set();
const normInf = {};
const DISTINCT = { 'répartir': 1 }; // palavras diferentes que só se distinguem pelo acento
LUX.data.verbList.forEach(v => { normInf[U.norm(v.inf)] = v.inf; });
LUX.data.verbList.forEach(v => {
  const w = 'verbo ' + v.inf;
  if (infs.has(v.inf)) err(w, 'infinitivo repetido');
  infs.add(v.inf);
  ['pt', 'level', 'freq', 'defPt', 'defFr'].forEach(f => { if (!v[f]) err(w, `campo ausente: ${f}`); });
  if (!v.examples || v.examples.length !== 3) err(w, `precisa de exatamente 3 exemplos (tem ${(v.examples || []).length})`);
  (v.synonyms || []).forEach(s => {
    const n = normInf[U.norm(s.fr)];
    if (n && n !== s.fr && !DISTINCT[s.fr]) err(w, `sinônimo "${s.fr}" deveria ser escrito "${n}"`);
  });
});

/* ---------- gramática ---------- */
LUX.data.grammarList.forEach(t => {
  const w = 'gramática ' + t.id;
  ['category', 'level', 'title', 'summaryPt', 'explanationPt', 'examples', 'ptComparison'].forEach(f => { if (!t[f]) err(w, `campo ausente: ${f}`); });
  (t.related || []).forEach(r => { if (!LUX.data.grammar[r]) err(w, `related inexistente: ${r}`); });
  (t.quiz || []).forEach((ex, i) => checkExercise(`${w} quiz #${i + 1}`, ex));
  if (t.verb && !LUX.data.verbs[t.verb]) err(w, `verbo de exemplo inexistente: ${t.verb}`);
});

/* ---------- Gerais ---------- */
const genIds = new Set();
(LUX.generalManifest || []).forEach(g => g.pages.forEach(p => {
  if (genIds.has(p.id)) err('gerais', `página repetida: ${p.id}`);
  genIds.add(p.id);
}));
Object.keys(LUX.data.general).forEach(id => {
  const p = LUX.data.general[id], w = 'gerais ' + id;
  if (!genIds.has(id)) err(w, 'página não está no manifesto de Gerais');
  checkBlocks(w, p, { letters: id === 'alfabeto' });
});
function checkBlocks(w, p, ex0) {
  const fr = (p.lang || 'fr') === 'fr';
  (p.blocks || []).forEach((b, bi) => {
    if (!['intro', 'table', 'rules', 'phrases', 'tip', 'tool', 'quiz', 'links'].includes(b.type)) err(w, `bloco desconhecido: ${b.type}`);
    const ex = ex0 || {};
    const cover = (wh, t, n, e) => { if (fr) coverFn(wh, t, n, e); };
    if (b.type === 'table') (b.sections || []).forEach(s => { if (!s.letters) (s.items || []).forEach(it => cover(w, it.fr, {}, ex)); });
    if (b.type === 'phrases') (b.items || []).forEach(it => cover(w, it.fr, {}, ex));
    if (b.type === 'rules') (b.items || []).forEach(r => (r.examples || []).forEach(e => cover(w, e.fr, {}, ex)));
    if (b.type === 'quiz') (b.items || []).forEach((ex, i) => checkExercise(`${w} quiz #${i + 1}`, ex));
    if (b.type === 'links') (b.items || []).forEach(l => {
      const m = l.to.match(/^#\/(gramatica|gerais)\/(.+)$/);
      if (m && m[1] === 'gramatica' && !LUX.data.grammar[m[2]]) err(w, `link para gramática inexistente: ${m[2]}`);
      if (m && m[1] === 'gerais' && !genIds.has(m[2])) err(w, `link para página inexistente: ${m[2]}`);
      const pm = l.to.match(/^#\/pro\/(licao|guia)\/(.+)$/);
      if (pm && pm[1] === 'licao' && !LUX.data.pro.lessons[pm[2]]) err(w, `link para lição profissional inexistente: ${pm[2]}`);
      if (pm && pm[1] === 'guia' && !LUX.data.pro.guides[pm[2]]) err(w, `link para guia inexistente: ${pm[2]}`);
    });
  });
}

/* ---------- aba Profissional ---------- */
const PMroot = LUX.proManifest;
const proLessonIds = new Set(), proGuideIds = new Set(), proCourseIds = new Set();
if (!PMroot || !PMroot.careers) err('profissional', 'content/pro/manifest.js não carregado (ou sem careers)');
else PMroot.careers.forEach(PM => {
  if (!PM.id || !PM.label) err('profissional', 'carreira sem id/label');
  PM.languages = PM.languages || []; PM.tracks = PM.tracks || {};
  (PM.courses || []).forEach(it => {
    const w = 'pro curso ' + it.id;
    if (proCourseIds.has(it.id)) err(w, 'curso repetido');
    proCourseIds.add(it.id);
    const c = LUX.data.pro.courses[it.id];
    if (!c) return; // anunciado como "em breve"
    if (!c.title || !Array.isArray(c.modules) || !c.modules.length) { err(w, 'curso sem título ou sem módulos'); return; }
    const mids = new Set();
    c.modules.forEach((m, mi) => {
      const wm = `${w} módulo ${mi + 1}`;
      if (!m.id || mids.has(m.id)) err(wm, 'id de módulo ausente ou repetido');
      mids.add(m.id);
      if (!m.title) err(wm, 'módulo sem título');
      checkBlocks(wm, { lang: c.lang, blocks: m.blocks || [] });
      if (!(m.exercises || []).length) err(wm, 'módulo sem exercícios');
      (m.exercises || []).forEach((ex, i) => checkExercise(`${wm} ex #${i + 1}`, ex));
    });
  });
  (PM.external || []).forEach((x, i) => {
    ['title', 'provider', 'info', 'prereq', 'desc', 'url'].forEach(f => { if (!x[f]) err(`pro curso externo #${i + 1}`, `campo ausente: ${f}`); });
    if (x.url && !/^https:\/\//.test(x.url)) err(`pro curso externo #${i + 1}`, 'url deve começar com https://');
  });
  (PM.languages || []).forEach(lg => { if (!PM.tracks[lg.id]) err('profissional', `idioma sem trilha: ${lg.id}`); });
  Object.keys(PM.tracks).forEach(lang => {
    const tr = PM.tracks[lang];
    (tr.levels || []).forEach(lv => (lv.lessons || []).forEach((it, i) => {
      const w = 'pro ' + it.id;
      if (proLessonIds.has(it.id)) err(w, 'id repetido no manifesto profissional');
      proLessonIds.add(it.id);
      const l = LUX.data.pro.lessons[it.id];
      if (!l) { err(w, 'lição listada mas não carregada'); return; }
      if (l.lang !== lang) err(w, `lang "${l.lang}" diferente da trilha "${lang}"`);
      if (l.level !== lv.id) err(w, 'level não bate com o manifesto profissional');
      if (it.unit && !LUX.manifest.levels.some(x => x.id === lv.id && x.units.some(u => u.n === it.unit))) err(w, `unidade do curso inexistente: ${it.unit}`);
      ['title', 'titlePt', 'objectives', 'vocabulary', 'reading', 'listening', 'grammar', 'grammarPractice', 'tipForBrazilians']
        .forEach(fl => { if (!l[fl]) err(w, `campo obrigatório ausente: ${fl}`); });
      checkLessonBody(it.id, l, true);
    }));
    (tr.guides || []).forEach(gd => {
      if (proGuideIds.has(gd.id)) err('pro guia ' + gd.id, 'guia repetido');
      proGuideIds.add(gd.id);
      const p = LUX.data.pro.guides[gd.id];
      if (!p) return; // guia anunciado como "em breve"
      if (p.lang !== lang) err('pro guia ' + gd.id, `lang "${p.lang}" diferente da trilha "${lang}"`);
      checkBlocks('pro guia ' + gd.id, p);
    });
  });
});
if (PMroot && PMroot.careers) {
  Object.keys(LUX.data.pro.courses).forEach(id => { if (!proCourseIds.has(id)) err('pro curso ' + id, 'curso fora do manifesto profissional'); });
  Object.keys(LUX.data.pro.lessons).forEach(id => { if (!proLessonIds.has(id)) warn(id, 'lição profissional fora do manifesto'); });
  Object.keys(LUX.data.pro.guides).forEach(id => { if (!proGuideIds.has(id)) err('pro guia ' + id, 'guia fora do manifesto profissional'); });
}

/* ---------- saída ---------- */
const onlyMissing = process.argv.includes('--missing');
if (missing.size) {
  const list = [...missing.entries()].sort((a, b) => a[0].localeCompare(b[0], 'fr'));
  if (onlyMissing) { list.forEach(([w, where]) => console.log(`${w}\t${[...where].join(', ')}`)); process.exit(list.length ? 1 : 0); }
  err('léxico', `${list.length} palavra(s) sem cobertura: ` + list.slice(0, 60).map(x => x[0]).join(', ') + (list.length > 60 ? ' …' : ''));
} else if (onlyMissing) { console.log('Cobertura do léxico: 100%'); process.exit(0); }

warnings.forEach(w => console.log(w));
errors.forEach(e => console.log(e));

const L = Object.values(LUX.data.lessons).concat(Object.values(LUX.data.pro.lessons));
console.log('\nResumo:');
L.forEach(l => console.log(`  ${l.id}  leitura: ${l._readingWords || 0} palavras · áudio: ${l._listeningWords || 0} palavras · exercícios: ${(l.reading.exercises.length + l.listening.exercises.length + l.grammarPractice.length)}`));
Object.values(LUX.data.levelTests).forEach(t => console.log(`  teste ${t.level}: ${t._n || 0} questões`));
console.log(`  ${L.length} lições · ${LUX.data.verbList.length} verbos · ${LUX.data.grammarList.length} tópicos de gramática · ${Object.keys(LUX.data.general).length} páginas de Gerais · ${LUX.data.lexicon.length} entradas no léxico`);
console.log(`  Profissional: ${Object.keys(LUX.data.pro.lessons).length} lições · ${Object.keys(LUX.data.pro.guides).length} guias · ${Object.keys(LUX.data.pro.courses).length} curso(s)`);
console.log(`  Cobertura do léxico: ${missing.size ? missing.size + ' palavra(s) faltando' : '100%'}`);
console.log(errors.length ? `\n${errors.length} erro(s).` : '\nTudo certo ✔');
process.exit(errors.length ? 1 : 0);
