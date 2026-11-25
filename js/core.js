/* LUX — núcleo: namespace global, registro de conteúdo e utilitários.
   Carregado antes de todos os outros scripts (inclusive o conteúdo). */
(function (g) {
  'use strict';
  var LUX = g.LUX = g.LUX || {};

  LUX.data = LUX.data || {
    lessons: {},      // id -> lição
    verbs: {},        // infinitivo -> verbo
    verbList: [],
    irregular: {},    // infinitivo -> tabela irregular
    grammar: {},      // id -> tópico
    grammarList: [],
    general: {},      // id -> página de Gerais
    lexicon: [],      // entradas do léxico geral
    names: {},        // nomes próprios (normalizados)
    levelTests: {},   // nível -> teste de nível
    pro: { lessons: {}, guides: {} }  // aba Profissional (todas as línguas; cada item tem "lang")
  };

  /* ---------- registro de conteúdo ---------- */
  LUX.registerLesson = function (l) { LUX.data.lessons[l.id] = l; };
  LUX.registerVerb = function (v) {
    if (!LUX.data.verbs[v.inf]) LUX.data.verbList.push(v);
    LUX.data.verbs[v.inf] = v;
  };
  LUX.registerVerbs = function (arr) { arr.forEach(LUX.registerVerb); };
  /* atalho compacto para o dicionário:
     LUX.verb(inf, 'trad1; trad2', nível, freq, defPt, defFr, [[fr, pt] x3], [[sinônimo, pt]...], {aux, like, pattern, note}) */
  LUX.verb = function (inf, pt, level, freq, defPt, defFr, ex, syn, opts) {
    var e = {
      inf: inf, pt: pt.split(/\s*;\s*/), level: level, freq: freq, defPt: defPt, defFr: defFr,
      examples: (ex || []).map(function (x) { return { fr: x[0], pt: x[1] }; }),
      synonyms: (syn || []).map(function (x) { return { fr: x[0], pt: x[1] }; })
    };
    if (opts) Object.keys(opts).forEach(function (k) { e[k] = opts[k]; });
    LUX.registerVerb(e);
  };
  LUX.registerIrregular = function (inf, table) { LUX.data.irregular[inf] = table; };
  LUX.registerGrammar = function (t) {
    if (!LUX.data.grammar[t.id]) LUX.data.grammarList.push(t);
    LUX.data.grammar[t.id] = t;
  };
  LUX.registerGeneral = function (p) { LUX.data.general[p.id] = p; };
  LUX.registerLevelTest = function (t) { LUX.data.levelTests[t.level] = t; };
  /* aba Profissional: lições (mesmo formato das lições do curso) e guias (mesmos blocos das páginas de Gerais).
     lang: 'fr' (padrão) | 'en' | 'it' — inglês e italiano entram no futuro, só nesta aba. */
  LUX.registerProLesson = function (l) { l.lang = l.lang || 'fr'; LUX.data.pro.lessons[l.id] = l; };
  LUX.registerProGuide = function (gd) { gd.lang = gd.lang || 'fr'; LUX.data.pro.guides[gd.id] = gd; };
  LUX.registerLexicon = function (arr) { Array.prototype.push.apply(LUX.data.lexicon, arr); };
  LUX.registerNames = function (arr) {
    arr.forEach(function (n) { LUX.data.names[U.norm(n)] = n; });
  };

  /* ---------- utilitários ---------- */
  var U = LUX.util = {};

  U.stripAccents = function (s) {
    return String(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
  };
  /* normalização para busca: minúsculas, sem acentos, apóstrofos unificados */
  U.norm = function (s) {
    return U.stripAccents(String(s).toLowerCase())
      .replace(/[’`´]/g, "'")
      .replace(/œ/g, 'oe').replace(/æ/g, 'ae')
      .replace(/\s+/g, ' ')
      .trim();
  };
  /* minúsculas + apóstrofo unificado, MAS mantém acentos */
  U.lowerFr = function (s) {
    return String(s).toLowerCase().replace(/[’`´]/g, "'").trim();
  };

  U.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  /* criação de elementos: h('div', {class:'x', onclick: fn}, [filhos | 'texto']) */
  U.h = function (tag, attrs, children) {
    var el = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        var v = attrs[k];
        if (v == null || v === false) return;
        if (k === 'class') el.className = v;
        else if (k === 'html') el.innerHTML = v;
        else if (k === 'text') el.textContent = v;
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') el.addEventListener(k.slice(2), v);
        else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);
        else el.setAttribute(k, v === true ? '' : v);
      });
    }
    if (children != null) {
      (Array.isArray(children) ? children : [children]).forEach(function (c) {
        if (c == null || c === false) return;
        el.appendChild(typeof c === 'string' || typeof c === 'number' ? document.createTextNode(String(c)) : c);
      });
    }
    return el;
  };

  /* markdown mínimo: **negrito**, *itálico*, `código`, listas "- ", parágrafos, quebras */
  U.md = function (text) {
    if (!text) return '';
    var blocks = String(text).split(/\n{2,}/);
    return blocks.map(function (b) {
      var lines = b.split('\n');
      if (lines.every(function (l) { return /^\s*[-•]\s+/.test(l); })) {
        return '<ul>' + lines.map(function (l) { return '<li>' + U.mdInline(l.replace(/^\s*[-•]\s+/, '')) + '</li>'; }).join('') + '</ul>';
      }
      return '<p>' + lines.map(U.mdInline).join('<br>') + '</p>';
    }).join('');
  };
  U.mdInline = function (s) {
    return U.esc(s)
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/`(.+?)`/g, '<code>$1</code>');
  };

  U.shuffle = function (arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };
  U.uid = function (prefix) {
    return (prefix || 'id') + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
  };
  U.pad = function (n, len) { n = String(n); while (n.length < (len || 2)) n = '0' + n; return n; };
  U.todayStr = function (d) {
    d = d || new Date();
    return d.getFullYear() + '-' + U.pad(d.getMonth() + 1) + '-' + U.pad(d.getDate());
  };
  U.addDays = function (dateStr, n) {
    var p = dateStr.split('-');
    var d = new Date(+p[0], +p[1] - 1, +p[2]);
    d.setDate(d.getDate() + n);
    return U.todayStr(d);
  };
  U.daysBetween = function (a, b) {
    var pa = a.split('-'), pb = b.split('-');
    var da = new Date(+pa[0], +pa[1] - 1, +pa[2]), db = new Date(+pb[0], +pb[1] - 1, +pb[2]);
    return Math.round((db - da) / 86400000);
  };
  U.fmtDate = function (iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d)) return iso;
    return U.pad(d.getDate()) + '/' + U.pad(d.getMonth() + 1) + '/' + d.getFullYear();
  };
  U.fmtDuration = function (sec) {
    sec = Math.round(sec || 0);
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60);
    if (h) return h + ' h ' + U.pad(m) + ' min';
    return m + ' min';
  };
  U.plural = function (n, one, many) { return n + ' ' + (n === 1 ? one : many); };

  /* ---------- tokenização do francês ---------- */
  var LETTERS = 'A-Za-zÀ-ÖØ-öø-ÿŒœÆæ';
  var WORD_RE = new RegExp("[" + LETTERS + "0-9]+(?:[-'’][" + LETTERS + "0-9]+)*['’]?", 'g');
  var ELIDE = { l: 1, d: 1, j: 1, m: 1, t: 1, s: 1, c: 1, n: 1, qu: 1, jusqu: 1, lorsqu: 1, puisqu: 1, quoiqu: 1 };
  var KEEP_WHOLE = { "aujourd'hui": 1, "quelqu'un": 1, "quelqu'une": 1, "presqu'île": 1, "prud'homme": 1 };
  U.ELIDE = ELIDE;

  /* Retorna [{w:true, text, start, end} | {w:false, text, start, end}] */
  U.tokenize = function (text) {
    var out = [], last = 0, m;
    text = String(text);
    WORD_RE.lastIndex = 0;
    while ((m = WORD_RE.exec(text))) {
      if (m.index > last) out.push({ w: false, text: text.slice(last, m.index), start: last, end: m.index });
      splitElision(m[0], m.index).forEach(function (t) { out.push(t); });
      last = m.index + m[0].length;
    }
    if (last < text.length) out.push({ w: false, text: text.slice(last), start: last, end: text.length });
    return out;
  };
  function splitElision(word, offset) {
    var res = [];
    var rest = word, pos = offset;
    for (var guard = 0; guard < 4; guard++) {
      var lw = rest.toLowerCase().replace(/’/g, "'");
      if (KEEP_WHOLE[lw]) break;
      var i = lw.indexOf("'");
      if (i <= 0 || i === lw.length - 1) break;
      var pre = lw.slice(0, i);
      if (!ELIDE[pre]) break;
      res.push({ w: true, text: rest.slice(0, i + 1), start: pos, end: pos + i + 1 });
      pos += i + 1;
      rest = rest.slice(i + 1);
    }
    res.push({ w: true, text: rest, start: pos, end: pos + rest.length });
    return res;
  }

  /* divide um texto em frases (com posições) */
  U.sentences = function (text) {
    var res = [], re = /[^.!?…]+(?:[.!?…]+["»”)]*|$)/g, m;
    text = String(text);
    while ((m = re.exec(text))) {
      if (!m[0]) { re.lastIndex++; continue; }
      var s = m[0], lead = s.match(/^\s*/)[0].length;
      var body = s.slice(lead).replace(/\s+$/, '');
      if (body) res.push({ text: body, start: m.index + lead, end: m.index + lead + body.length });
      if (re.lastIndex >= text.length) break;
    }
    return res;
  };

  /* glossário [[mot|tradução|nota]] -> {plain, gloss:[{start,end,pt,note,text}]} */
  U.parseGloss = function (text) {
    var plain = '', gloss = [], re = /\[\[([^\]|]+)\|([^\]|]*)(?:\|([^\]]*))?\]\]/g, last = 0, m;
    text = String(text || '');
    while ((m = re.exec(text))) {
      plain += text.slice(last, m.index);
      var start = plain.length;
      plain += m[1];
      gloss.push({ start: start, end: plain.length, text: m[1], pt: m[2], note: m[3] || '' });
      last = m.index + m[0].length;
    }
    plain += text.slice(last);
    return { plain: plain, gloss: gloss };
  };
  U.stripGloss = function (text) { return U.parseGloss(text).plain; };

  /* ---------- comparação de respostas ---------- */
  U.answerKey = function (s) {
    return String(s || '').toLowerCase()
      .replace(/[’`´]/g, "'")
      .replace(/ | /g, ' ')
      .replace(/\s*([?!:;,.])\s*/g, '$1 ')
      .replace(/[.!?…;:,]+\s*$/g, '')
      .replace(/\s*'\s*/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  };
  /* retorna {ok, partial, match} — partial = só diferença de acento */
  U.checkAnswer = function (given, answers) {
    var g = U.answerKey(given);
    if (!g) return { ok: false, partial: false, match: answers[0] };
    for (var i = 0; i < answers.length; i++) if (U.answerKey(answers[i]) === g) return { ok: true, partial: false, match: answers[i] };
    var ga = U.stripAccents(g);
    for (var j = 0; j < answers.length; j++) if (U.stripAccents(U.answerKey(answers[j])) === ga) return { ok: false, partial: true, match: answers[j] };
    return { ok: false, partial: false, match: answers[0] };
  };

  /* diff palavra a palavra (LCS) — para o ditado */
  U.wordDiff = function (expected, given) {
    var A = U.answerKey(expected).split(' '), B = U.answerKey(given).split(' ').filter(Boolean);
    var origA = String(expected).replace(/[.!?…]+\s*$/, '').split(/\s+/);
    var n = A.length, m = B.length, dp = [];
    for (var i = 0; i <= n; i++) { dp.push(new Array(m + 1).fill(0)); }
    for (i = n - 1; i >= 0; i--) for (var j = m - 1; j >= 0; j--) {
      dp[i][j] = sameWord(A[i], B[j]) ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
    var out = []; i = 0; j = 0;
    while (i < n && j < m) {
      if (sameWord(A[i], B[j])) {
        out.push({ type: A[i] === B[j] ? 'ok' : 'accent', exp: origA[i] || A[i], got: B[j] }); i++; j++;
      } else if (dp[i + 1][j] >= dp[i][j + 1]) { out.push({ type: 'missing', exp: origA[i] || A[i] }); i++; }
      else { out.push({ type: 'extra', got: B[j] }); j++; }
    }
    while (i < n) { out.push({ type: 'missing', exp: origA[i] || A[i] }); i++; }
    while (j < m) { out.push({ type: 'extra', got: B[j] }); j++; }
    var okCount = out.filter(function (o) { return o.type === 'ok'; }).length;
    var accCount = out.filter(function (o) { return o.type === 'accent'; }).length;
    return { parts: out, score: n ? (okCount + accCount * 0.5) / Math.max(n, m) : 0, perfect: okCount === n && m === n };
  };
  function sameWord(a, b) { return a === b || U.stripAccents(a) === U.stripAccents(b); }

  /* limpa texto para o TTS: "allé(e)s" -> "allés", "il / elle" -> "il, elle" */
  U.ttsClean = function (s) {
    return String(s)
      .replace(/\((?:e|es|s)\)/g, '')
      .replace(/\s*\/\s*/g, ', ')
      .replace(/[*_`]/g, '')
      .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '')
      .replace(/\b(\d{1,2}) ?h(?: ?(\d{2}))?\b/g, function (m, hh, mm) { return hh + (+hh === 1 ? ' heure' : ' heures') + (mm ? ' ' + mm : ''); })
      .replace(/\s+/g, ' ')
      .trim();
  };
})(typeof window !== 'undefined' ? window : globalThis);
