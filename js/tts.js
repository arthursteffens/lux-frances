/* LUX — síntese de voz (Web Speech API).
   Camada de abstração: LUX.tts.speak(segmentos, opções). No futuro pode tocar MP3 sem mudar as lições.
   segmento = string | {text, gender:'f'|'m', rank: nº do personagem dentro do gênero (0, 1, …)} */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util;
  var T = LUX.tts = { supported: 'speechSynthesis' in g, voices: [], allVoices: [], ready: false, playing: null, listeners: [],
    contentLang: 'fr' };  // idioma do conteúdo da página atual ('fr' | 'en' | 'it'); o roteador volta para 'fr' a cada página
  var LANG_TAG = { fr: 'fr-FR', en: 'en-GB', it: 'it-IT' };

  var FEMALE = /(denise|eloise|élo|vivienne|julie|hortense|am[eé]lie|audrey|aur[eé]lie|marie|c[eé]line|brigitte|charline|coralie|jacqueline|jos[eé]phine|yvette|ariane|sylvie|l[eé]a\b|virginie|female|femme|sylvia|caroline|chantal|claire|nath?alie|ad[eè]le|seraphina|clara|sabine|ophélie|ophelie|juliette|manon|c[eé]leste|agn[eè]s|monique|google fran|aria|jenny|sonia|libby|maisie|samantha|karen|moira|tessa|serena|ava|emma|michelle|susan|hazel|zira|google uk english female|google us english|isabella|elsa|fabiola|fiamma|imelda|irma|palmira|pierina|alice|federica|paola|google italiano)/i;
  var MALE = /(henri|paul|claude|thomas|r[eé]my|remi|antoine|j[eé]r[oô]me|yves|daniel|nicolas|guillaume|mathieu|jean|louis|g[eé]rard|alain|fabrice|maxime|lucien|\bmale|homme|cl[eé]ment|fabien|olivier|gabriel|jacques|thierry|vincent|pierre|beno[iî]t|alexandre|arnaud|maurice|\bguy\b|davis|ryan|george|\balex\b|fred|aaron|eric|christopher|andrew|brian|william|thomas|mark|david|james|google uk english male|diego|giuseppe|benigno|calimero|cataldo|cosimo|gianni|lisandro|rinaldo|luca\b)/i;

  function loadVoices() {
    if (!T.supported) return;
    var all = speechSynthesis.getVoices() || [];
    T.allVoices = all;
    T.voices = all.filter(function (v) { return /^fr/i.test(v.lang); });
    T.voices.sort(function (a, b) { return score(b) - score(a); });
    T.ready = true;
    T.listeners.forEach(function (fn) { try { fn(); } catch (e) { } });
  }
  function score(v) {
    var s = 0;
    if (/^fr[-_]FR/i.test(v.lang)) s += 10;
    if (/natural|online|neural|premium|enhanced/i.test(v.name)) s += 20;
    if (/google/i.test(v.name)) s += 5;
    if (v.localService) s += 1;
    return s;
  }
  T.init = function () {
    if (!T.supported) return;
    loadVoices();
    if (speechSynthesis.addEventListener) speechSynthesis.addEventListener('voiceschanged', loadVoices);
    else speechSynthesis.onvoiceschanged = loadVoices;
    setTimeout(loadVoices, 500); setTimeout(loadVoices, 2000);
  };
  T.onVoices = function (fn) { T.listeners.push(fn); };
  /* melhor voz para outro idioma (inglês, italiano...) — usado pelas trilhas profissionais em outras línguas */
  /* vozes de outro idioma, da melhor para a pior (variante principal primeiro: en-GB, it-IT) */
  function langVoices(lang) {
    var tag = LANG_TAG[lang] || lang;
    var pre = new RegExp('^' + lang, 'i'), exact = new RegExp('^' + tag.replace('-', '[-_]'), 'i');
    var seen = {};
    return T.allVoices.filter(function (v) { return pre.test(v.lang); })
      .sort(function (a, b) { return langScore(b) - langScore(a); })
      .filter(function (v) { var k = v.name.replace(/\s*\(.*$/, '').toLowerCase(); if (seen[k]) return false; seen[k] = 1; return true; });
    function langScore(v) { return (exact.test(v.lang) ? 10 : 0) + (/natural|online|neural|premium|enhanced/i.test(v.name) ? 20 : 0) + (/google/i.test(v.name) ? 5 : 0); }
  }
  T.voiceForLang = function (lang) { return langVoices(lang)[0] || null; };
  T.hasLang = function (lang) { return lang === 'fr' ? T.hasFrench() : !!T.voiceForLang(lang); };
  T.hasFrench = function () { return T.voices.length > 0; };

  T.genderOf = function (v) {
    if (FEMALE.test(v.name)) return 'f';
    if (MALE.test(v.name)) return 'm';
    return '?';
  };

  function settings() {
    var p = LUX.profiles && LUX.profiles.current();
    return p ? p.settings : { voiceURI: '', rate: 0.9 };
  }
  T.mainVoice = function () {
    var s = settings();
    var v = T.voices.filter(function (x) { return x.voiceURI === s.voiceURI; })[0];
    return v || T.voices[0] || null;
  };
  /* vozes francesas de um gênero, da preferida para a menos preferida:
     a voz escolhida no perfil (se for desse gênero), depois França, depois Canadá/Bélgica/Suíça. Sem repetir o mesmo nome. */
  function voicesOf(gender, lang) {
    lang = lang || 'fr';
    if (lang !== 'fr') return langVoices(lang).filter(function (v) { return T.genderOf(v) === gender; });
    var main = T.mainVoice(), seen = {}, out = [];
    function add(v) { var k = v.name.replace(/\s*\(.*$/, '').toLowerCase(); if (seen[k]) return; seen[k] = 1; out.push(v); }
    if (main && T.genderOf(main) === gender) add(main);
    T.voices.filter(function (v) { return T.genderOf(v) === gender && /^fr[-_]FR/i.test(v.lang); }).forEach(add);
    T.voices.filter(function (v) { return T.genderOf(v) === gender; }).forEach(add);
    return out;
  }
  /* tons alternativos quando faltam vozes: o 2º personagem do mesmo gênero fica mais grave/agudo que o 1º, etc. */
  var SHIFT = { m: [1, 0.82, 1.12, 0.7], f: [1, 1.16, 0.9, 1.28], '?': [1, 0.85, 1.15, 0.75] };

  /* escolhe a voz de um personagem.
     gender: 'f' | 'm'; rank: 0 para o 1º personagem desse gênero no diálogo, 1 para o 2º...
     Cada personagem ganha uma voz diferente quando o aparelho tem vozes suficientes; senão, a mesma voz com outro tom. */
  T.voiceFor = function (gender, rank, lang) {
    lang = lang || 'fr';
    var main = lang === 'fr' ? T.mainVoice() : T.voiceForLang(lang);
    rank = rank || 0;
    if (!gender || !main) return { voice: main, pitch: 1 };
    var list = voicesOf(gender, lang);
    if (list.length > rank) return { voice: list[rank], pitch: 1 };
    var shifts = SHIFT[gender] || SHIFT['?'];
    if (list.length) {
      var extra = rank - list.length + 1; // quantas vezes já "faltou" voz
      return { voice: list[rank % list.length], pitch: shifts[Math.min(extra, shifts.length - 1)] };
    }
    // nenhuma voz reconhecida desse gênero: usa outras vozes (que não a principal) e ajusta o tom
    var pool = lang === 'fr' ? T.voices : langVoices(lang);
    var other = pool.filter(function (v) { return v !== main && T.genderOf(v) !== (gender === 'm' ? 'f' : 'm'); });
    if (other.length > rank) return { voice: other[rank], pitch: gender === 'f' ? 1.1 : 0.9 };
    // só uma voz no aparelho: o gênero vem do tom; personagens do mesmo gênero ficam em volta desse tom, sem exagero
    var base = gender === 'f' ? 1.18 : 0.82;
    var around = gender === 'f' ? [1, 0.9, 1.1, 0.85] : [1, 1.12, 0.9, 1.2];
    return { voice: main, pitch: Math.max(0.6, Math.min(1.5, base * around[Math.min(rank, around.length - 1)])) };
  };
  /* número de cada personagem dentro do seu gênero, na ordem em que aparecem em speakers:
     [{id:'H', gender:'m'}, {id:'L', gender:'f'}, {id:'C', gender:'m'}] → {H:0, L:0, C:1} */
  T.speakerRanks = function (speakers) {
    var count = {}, out = {};
    (speakers || []).forEach(function (s) { var g = s.gender || '?'; out[s.id] = count[g] || 0; count[g] = (count[g] || 0) + 1; });
    return out;
  };

  /* divide textos longos em frases (o Chrome corta falas longas) */
  function chunk(text, lang) {
    if (lang === 'fr') text = U.ttsClean(text); // números/horas por extenso: só em francês
    else text = U.stripGloss(String(text));
    if (text.length < 180) return [text];
    return U.sentences(text).map(function (s) { return s.text; });
  }

  /* toca uma lista de segmentos em sequência.
     opts: {rate, pause(ms), onItem(i), onEnd(completed), group} — retorna um handle {stop()} */
  T.speak = function (items, opts) {
    opts = opts || {};
    T.stop();
    if (!T.supported) { LUX.ui && LUX.ui.toast('Seu navegador não tem síntese de voz.'); if (opts.onEnd) opts.onEnd(false); return null; }
    if (!Array.isArray(items)) items = [items];
    var rate = opts.rate || settings().rate || 1;
    var pause = opts.pause == null ? 350 : opts.pause;
    var handle = { stopped: false, id: Math.random(), opts: opts };
    T.playing = handle;
    var queue = [];
    items.forEach(function (it, i) {
      var seg = typeof it === 'string' ? { text: it } : it;
      var lang = seg.lang || opts.lang || T.contentLang || 'fr';
      chunk(seg.text, lang).forEach(function (txt, j) { if (txt) queue.push({ text: txt, index: i, first: j === 0, gender: seg.gender, rank: seg.rank || 0, lang: lang }); });
    });
    var k = 0;
    T.keep = [];
    function next() {
      if (handle.stopped) return;
      if (k >= queue.length) { finish(true); return; }
      var q = queue[k++];
      if (q.first && opts.onItem) opts.onItem(q.index);
      var u = new SpeechSynthesisUtterance(q.text);
      var vp = T.voiceFor(q.gender, q.rank, q.lang);
      if (vp.voice) { u.voice = vp.voice; u.lang = vp.voice.lang; } else u.lang = LANG_TAG[q.lang] || 'fr-FR';
      u.pitch = vp.pitch; u.rate = rate;
      u.onend = function () { if (!handle.stopped) setTimeout(next, k < queue.length && queue[k].first ? pause : 60); };
      u.onerror = function (e) { if (e.error !== 'interrupted' && e.error !== 'canceled') console.warn('TTS', e.error); if (!handle.stopped) setTimeout(next, 60); };
      T.keep.push(u);
      speechSynthesis.speak(u);
    }
    function finish(done) {
      if (T.playing === handle) T.playing = null;
      if (opts.onEnd) opts.onEnd(done);
      T.emit();
    }
    handle.stop = function () {
      if (handle.stopped) return;
      handle.stopped = true;
      finish(false);
    };
    // pequeno atraso após cancel() evita falhas do Chrome
    setTimeout(next, 30);
    T.emit();
    return handle;
  };
  T.stop = function () {
    if (!T.supported) return;
    var h = T.playing;
    T.playing = null;
    if (h) h.stop();
    try { speechSynthesis.cancel(); } catch (e) { }
  };
  T.isPlaying = function (group) { return !!(T.playing && (!group || T.playing.opts.group === group)); };
  var subs = [];
  T.subscribe = function (fn) { subs.push(fn); };
  T.emit = function () { subs.forEach(function (fn) { try { fn(); } catch (e) { } }); };

  T.sample = function (voiceURI) {
    var s = settings(), prev = s.voiceURI;
    s.voiceURI = voiceURI;
    T.speak('Bonjour ! Je suis la voix de votre cours de français.', { onEnd: function () { } });
    s.voiceURI = prev;
  };
})(window);
