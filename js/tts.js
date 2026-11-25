/* LUX — síntese de voz (Web Speech API).
   Camada de abstração: LUX.tts.speak(segmentos, opções). No futuro pode tocar MP3 sem mudar as lições.
   segmento = string | {text, gender:'f'|'m', speaker} */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util;
  var T = LUX.tts = { supported: 'speechSynthesis' in g, voices: [], ready: false, playing: null, listeners: [] };

  var FEMALE = /(denise|eloise|élo|vivienne|julie|hortense|am[eé]lie|audrey|aur[eé]lie|marie|c[eé]line|brigitte|charline|coralie|jacqueline|jos[eé]phine|yvette|ariane|sylvie|l[eé]a|virginie|female|femme|sylvia|caroline|chantal|claire|natalie|ad[eè]le|seraphina|clara|sabine|ophélie|ophelie)/i;
  var MALE = /(henri|paul|claude|thomas|r[eé]my|remi|antoine|j[eé]r[oô]me|yves|daniel|nicolas|guillaume|mathieu|jean|louis|g[eé]rard|alain|fabrice|maxime|lucien|male|homme|cl[eé]ment|fabien|olivier|gabriel)/i;

  function loadVoices() {
    if (!T.supported) return;
    var all = speechSynthesis.getVoices() || [];
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
  /* escolhe voz por gênero do personagem; se só houver uma voz, varia o pitch */
  T.voiceFor = function (gender) {
    var main = T.mainVoice();
    if (!gender || !main) return { voice: main, pitch: 1 };
    if (T.genderOf(main) === gender) return { voice: main, pitch: 1 };
    var same = T.voices.filter(function (v) { return T.genderOf(v) === gender && /^fr[-_]FR/i.test(v.lang); })
      .concat(T.voices.filter(function (v) { return T.genderOf(v) === gender; }));
    if (same.length) return { voice: same[0], pitch: 1 };
    var other = T.voices.filter(function (v) { return v !== main; });
    if (other.length) return { voice: other[0], pitch: gender === 'f' ? 1.1 : 0.9 };
    return { voice: main, pitch: gender === 'f' ? 1.18 : 0.82 };
  };

  /* divide textos longos em frases (o Chrome corta falas longas) */
  function chunk(text) {
    text = U.ttsClean(text);
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
      chunk(seg.text).forEach(function (txt, j) { if (txt) queue.push({ text: txt, index: i, first: j === 0, gender: seg.gender }); });
    });
    var k = 0;
    T.keep = [];
    function next() {
      if (handle.stopped) return;
      if (k >= queue.length) { finish(true); return; }
      var q = queue[k++];
      if (q.first && opts.onItem) opts.onItem(q.index);
      var u = new SpeechSynthesisUtterance(q.text);
      var vp = T.voiceFor(q.gender);
      if (vp.voice) { u.voice = vp.voice; u.lang = vp.voice.lang; } else u.lang = 'fr-FR';
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
