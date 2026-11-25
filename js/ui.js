/* LUX — componentes de interface compartilhados:
   avisos, janelas modais, botões de áudio, texto francês clicável e o popup de palavra. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h;
  var UI = LUX.ui = {};

  UI.ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" fill="currentColor"/></svg>',
    stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6.5" y="6.5" width="11" height="11" rx="2" fill="currentColor"/></svg>',
    star: '☆', starOn: '★'
  };

  /* ---------- toast ---------- */
  var toastTimer;
  UI.toast = function (msg, type) {
    var el = document.getElementById('toast');
    if (!el) return;
    el.className = 'toast show ' + (type || '');
    el.textContent = msg;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.className = 'toast'; }, 3200);
  };

  /* ---------- modal ---------- */
  UI.modal = function (opts) {
    var root = document.getElementById('modal-root');
    var prevFocus = document.activeElement;
    var box = h('div', { class: 'modal' + (opts.wide ? ' wide' : ''), role: 'dialog', 'aria-modal': 'true', 'aria-label': opts.title || '' });
    var back = h('div', { class: 'modal-backdrop' }, box);
    if (opts.title) box.appendChild(h('h2', { class: 'modal-title' }, opts.title));
    var body = h('div', { class: 'modal-body' });
    if (typeof opts.body === 'string') body.innerHTML = opts.body; else if (opts.body) body.appendChild(opts.body);
    box.appendChild(body);
    var api = { el: box, body: body, close: close };
    if (opts.actions && opts.actions.length) {
      var bar = h('div', { class: 'modal-actions' });
      opts.actions.forEach(function (a) {
        bar.appendChild(h('button', {
          class: 'btn' + (a.primary ? ' primary' : '') + (a.danger ? ' danger' : '') + (a.ghost ? ' ghost' : ''),
          onclick: function () { var r = a.onClick ? a.onClick(api) : true; if (r !== false) close(); }
        }, a.label));
      });
      box.appendChild(bar);
    }
    function onKey(e) { if (e.key === 'Escape' && !opts.noEsc) close(); }
    function close() {
      document.removeEventListener('keydown', onKey);
      back.remove();
      if (opts.onClose) opts.onClose();
      if (prevFocus && prevFocus.focus) try { prevFocus.focus(); } catch (e) { }
    }
    back.addEventListener('mousedown', function (e) { if (e.target === back && !opts.noEsc) close(); });
    document.addEventListener('keydown', onKey);
    root.appendChild(back);
    var f = box.querySelector('input, select, textarea, button.primary, button');
    if (f) setTimeout(function () { f.focus(); }, 30);
    return api;
  };
  UI.confirm = function (msg, opts) {
    opts = opts || {};
    return new Promise(function (resolve) {
      var done = false;
      UI.modal({
        title: opts.title || 'Confirmar', body: h('p', { html: U.mdInline(msg) }),
        onClose: function () { if (!done) resolve(false); },
        actions: [
          { label: opts.cancel || 'Cancelar', ghost: true, onClick: function () { done = true; resolve(false); } },
          { label: opts.ok || 'Confirmar', primary: !opts.danger, danger: !!opts.danger, onClick: function () { done = true; resolve(true); } }
        ]
      });
    });
  };

  /* ---------- botões de áudio ---------- */
  var playButtons = [];
  function refreshPlayButtons() {
    playButtons = playButtons.filter(function (b) { return document.body.contains(b); });
    playButtons.forEach(function (b) {
      var on = !!(b._handle && LUX.tts.playing === b._handle);
      if (on !== b.classList.contains('playing')) {
        b.classList.toggle('playing', on);
        b.querySelector('.ico').innerHTML = on ? UI.ICON.stop : UI.ICON.play;
        b.setAttribute('aria-pressed', on ? 'true' : 'false');
        var lbl = b.querySelector('.lbl');
        if (lbl && b._labels) lbl.textContent = on ? b._labels[1] : b._labels[0];
      }
    });
  }
  UI.refreshPlay = refreshPlayButtons;
  /* source: string | [segmentos] | function() -> segmentos. opts: {label, title, small, onItem, onEnd, pause, rate, cls} */
  UI.playBtn = function (source, opts) {
    opts = opts || {};
    var b = h('button', {
      type: 'button', class: 'play' + (opts.small ? ' sm' : '') + (opts.label ? ' labeled' : '') + (opts.cls ? ' ' + opts.cls : ''),
      title: opts.title || 'Ouvir', 'aria-label': opts.title || (opts.label ? opts.label : 'Ouvir'), 'aria-pressed': 'false'
    });
    b.appendChild(h('span', { class: 'ico', html: UI.ICON.play }));
    if (opts.label) { b.appendChild(h('span', { class: 'lbl' }, opts.label)); b._labels = [opts.label, opts.stopLabel || 'parar']; }
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      if (b._handle && LUX.tts.playing === b._handle) { LUX.tts.stop(); return; }
      var items = typeof source === 'function' ? source() : source;
      if (opts.onStart) opts.onStart();
      b._handle = LUX.tts.speak(items, {
        onItem: opts.onItem, pause: opts.pause, rate: opts.rate ? opts.rate() : undefined,
        onEnd: function (done) { if (opts.onEnd) opts.onEnd(done); refreshPlayButtons(); }
      });
      refreshPlayButtons();
    });
    playButtons.push(b);
    return b;
  };

  /* ---------- texto francês clicável ---------- */
  /* opts: {source:{lessonId, title, route}, sentences:true, gloss: true(parse [[...]]), cls} -> elemento .fr-text
     el._lux = {gloss:[...], sentences:[{text, el}], source} */
  UI.frText = function (text, opts) {
    opts = opts || {};
    var parsed = opts.gloss === false ? { plain: String(text), gloss: [] } : U.parseGloss(text);
    var plain = parsed.plain;
    var tokens = U.tokenize(plain);
    var sents = opts.sentences === false ? [{ text: plain, start: 0, end: plain.length }] : U.sentences(plain);
    var html = '', ti = 0, si = 0, gi = 0, inSent = false, inGloss = false;
    var paraOpen = opts.block !== false;
    if (paraOpen) html += '<p>';
    for (var i = 0; i <= plain.length; i++) {
      if (inGloss && parsed.gloss[gi] && i === parsed.gloss[gi].end) { html += '</span>'; inGloss = false; gi++; }
      if (inSent && sents[si] && i === sents[si].end) { html += '</span>'; inSent = false; si++; }
      if (i === plain.length) break;
      if (!inSent && sents[si] && i === sents[si].start) { html += '<span class="s" data-si="' + si + '">'; inSent = true; }
      if (!inGloss && parsed.gloss[gi] && i === parsed.gloss[gi].start) { html += '<span class="gl" data-gi="' + gi + '" tabindex="0" role="button">'; inGloss = true; }
      while (tokens[ti] && tokens[ti].end <= i) ti++;
      var t = tokens[ti];
      if (t && t.w && t.start === i) {
        html += '<span class="w">' + U.esc(t.text) + '</span>';
        i = t.end - 1; ti++;
        continue;
      }
      var ch = plain[i];
      if (ch === '\n') {
        if (plain[i + 1] === '\n' && paraOpen) {
          if (inGloss) { html += '</span>'; inGloss = false; gi++; }
          if (inSent) { html += '</span>'; }
          html += '</p><p>';
          while (plain[i + 1] === '\n') i++;
          if (inSent) html += '<span class="s" data-si="' + si + '">';
        } else html += '<br>';
        continue;
      }
      html += U.esc(ch);
    }
    if (inGloss) html += '</span>';
    if (inSent) html += '</span>';
    if (paraOpen) html += '</p>';
    var el = h(opts.inline ? 'span' : 'div', { class: 'fr-text' + (opts.cls ? ' ' + opts.cls : ''), lang: 'fr', html: html });
    el._lux = {
      gloss: parsed.gloss, source: opts.source || null,
      sentences: sents.map(function (s, k) { return { text: s.text, el: null, index: k }; })
    };
    el.querySelectorAll('.s').forEach(function (sp) {
      var k = +sp.getAttribute('data-si');
      if (!el._lux.sentences[k].el) el._lux.sentences[k].el = sp;
    });
    return el;
  };
  /* destaca a frase k (ou nenhuma, com -1) */
  UI.highlightSentence = function (el, k) {
    el.querySelectorAll('.s.reading').forEach(function (x) { x.classList.remove('reading'); });
    if (k >= 0) el.querySelectorAll('.s[data-si="' + k + '"]').forEach(function (x) { x.classList.add('reading'); });
  };

  /* ---------- popup de palavra ---------- */
  var popup = null;
  UI.closePopup = function () { if (popup) { popup.remove(); popup = null; } };

  function sentenceOf(node) {
    var s = node.closest('.s'), c = node.closest('.fr-text');
    if (s && c && c._lux) {
      var k = +s.getAttribute('data-si');
      return c._lux.sentences[k] ? c._lux.sentences[k].text : s.textContent;
    }
    return c ? c.textContent : '';
  }

  function describeToken(word, ctxGloss) {
    if (!LUX.lexicon.ready()) LUX.lexicon.build();
    var res = LUX.lexicon.lookup(word, { fuzzy: true, letters: true });
    var list = res.map(LUX.lexicon.describe);
    if (ctxGloss) list.unshift({ lemma: ctxGloss.text, display: ctxGloss.text, pt: ctxGloss.pt, note: ctxGloss.note, pos: 'no contexto', fromGloss: true });
    return list;
  }

  UI.openWordPopup = function (anchor, info) {
    UI.closePopup();
    var p = LUX.profiles.current();
    var list = info.list;
    var main = list[0] || { lemma: info.word, display: info.word, pt: '', pos: '' };
    var box = h('div', { class: 'popup', role: 'dialog', 'aria-label': 'Palavra: ' + info.word });
    var close = h('button', { class: 'icon-btn popup-close', 'aria-label': 'Fechar', onclick: UI.closePopup }, '×');
    box.appendChild(close);
    var head = h('div', { class: 'popup-head' });
    head.appendChild(UI.playBtn(main.inf || main.display.replace(/^le \/ la /, ''), { small: true, title: 'Ouvir a palavra' }));
    var title = h('div', { class: 'popup-title' });
    title.appendChild(h('div', { class: 'popup-word', lang: 'fr' }, main.display || info.word));
    if (info.word && U.lowerFr(info.word) !== U.lowerFr(main.lemma || '') && !main.fromGloss) {
      title.appendChild(h('div', { class: 'muted sm' }, 'no texto: ' + info.word + (main.formOf ? ' — ' + main.formOf : '')));
    }
    head.appendChild(title);
    box.appendChild(head);

    if (!list.length) {
      box.appendChild(h('p', { class: 'muted' }, 'Palavra não encontrada no léxico.'));
    }
    var transl = h('div', { class: 'popup-pt' }, main.pt || '');
    box.appendChild(transl);
    var meta = h('div', { class: 'popup-meta' });
    if (main.pos) meta.appendChild(h('span', { class: 'tag' }, main.pos));
    if (main.gender) meta.appendChild(h('span', { class: 'tag g-' + main.gender }, LUX.lexicon.genderLabel(main.gender)));
    if (main.level) meta.appendChild(h('span', { class: 'tag level' }, main.level));
    box.appendChild(meta);
    if (main.genderDiffers) box.appendChild(h('div', { class: 'warn-line' }, '⚠ gênero diferente do português'));
    if (main.note) box.appendChild(h('p', { class: 'popup-note', html: U.mdInline(main.note) }));
    if (main.parts) {
      var ul = h('ul', { class: 'popup-parts' });
      main.parts.forEach(function (d) { ul.appendChild(h('li', null, [h('b', { lang: 'fr' }, d.display), ' — ' + d.pt])); });
      box.appendChild(ul);
    }
    var others = list.slice(1).filter(function (d) { return d.display !== main.display; });
    if (others.length) {
      var od = h('details', { class: 'popup-others' }, h('summary', null, 'Outras possibilidades (' + others.length + ')'));
      others.forEach(function (d) {
        od.appendChild(h('div', { class: 'popup-other' }, [h('b', { lang: 'fr' }, d.display), ' ', h('span', { class: 'muted' }, '(' + d.pos + (d.formOf ? ', ' + d.formOf : '') + ')'), ' — ' + d.pt]));
      });
      box.appendChild(od);
    }
    // tradução própria para expressões não encontradas
    var custom = null;
    if (info.expression && !main.pt) {
      custom = h('input', { class: 'input', placeholder: 'Sua tradução para a expressão', 'aria-label': 'Sua tradução' });
      box.appendChild(custom);
    }
    var actions = h('div', { class: 'popup-actions' });
    if (info.sentence) actions.appendChild(UI.playBtn(info.sentence, { small: true, label: 'frase', title: 'Ouvir a frase inteira' }));
    var verbInf = main.inf || (list.filter(function (d) { return d.isVerb; })[0] || {}).inf;
    if (verbInf) actions.appendChild(h('a', { class: 'btn sm ghost', href: '#/verbos/' + encodeURIComponent(verbInf), onclick: UI.closePopup }, 'ver conjugação'));
    if (p) {
      var key = U.norm(main.lemma || info.word);
      var saved = !!p.notebook[key];
      var sb = h('button', { class: 'btn sm' + (saved ? '' : ' primary') }, saved ? '★ Salvo' : '☆ Salvar no caderno');
      sb.addEventListener('click', function () {
        if (p.notebook[key]) { LUX.notebook.remove(p, key); sb.textContent = '☆ Salvar no caderno'; sb.classList.add('primary'); UI.toast('Removido do caderno.'); return; }
        var pt = main.pt || (custom && custom.value.trim()) || '';
        if (!pt && custom) { custom.focus(); UI.toast('Escreva uma tradução para salvar a expressão.'); return; }
        LUX.notebook.save(p, {
          key: key, fr: main.display || info.word, lemma: main.lemma || info.word, pt: pt, pos: main.pos || '', gender: main.gender || null,
          genderDiffers: !!main.genderDiffers, isVerb: !!verbInf, sentence: info.sentence || '', source: info.source || null
        });
        sb.textContent = '★ Salvo'; sb.classList.remove('primary');
        UI.toast('Salvo no caderno.', 'ok');
      });
      actions.appendChild(sb);
    }
    box.appendChild(actions);
    document.getElementById('popup-layer').appendChild(box);
    popup = box;
    position(box, anchor);
    setTimeout(function () { close.focus(); }, 20);
  };

  function position(box, anchor) {
    if (window.innerWidth < 640) { box.classList.add('sheet'); return; }
    var r = anchor.getBoundingClientRect ? anchor.getBoundingClientRect() : anchor;
    var bw = box.offsetWidth, bh = box.offsetHeight;
    var x = Math.min(Math.max(8, r.left + r.width / 2 - bw / 2), window.innerWidth - bw - 8);
    var y = r.bottom + 8;
    if (y + bh > window.innerHeight - 8) y = Math.max(8, r.top - bh - 8);
    box.style.left = x + 'px'; box.style.top = y + 'px';
  }

  /* cliques em palavras e trechos do glossário (delegação global) */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (popup && !popup.contains(t) && !t.closest('.w, .gl')) UI.closePopup();
    var gl = t.closest && t.closest('.gl');
    var w = t.closest && t.closest('.fr-text .w');
    if (!gl && !w) return;
    if (t.closest('.no-popup')) return; // teste de nível: sem tradução
    var sel = window.getSelection && window.getSelection();
    if (sel && String(sel).trim().split(/\s+/).length > 1) return; // seleção de expressão: tratada no mouseup
    var c = (gl || w).closest('.fr-text');
    var ctx = c && c._lux;
    var source = ctx && ctx.source;
    if (gl) {
      var g = ctx.gloss[+gl.getAttribute('data-gi')];
      var wordInGloss = w && g.text.indexOf(' ') > 0 ? null : (w ? w.textContent : g.text);
      var list = describeToken(g.text.indexOf(' ') > 0 ? g.text : (wordInGloss || g.text), g);
      UI.openWordPopup(gl, { word: g.text, list: list, sentence: sentenceOf(gl), source: source });
      return;
    }
    var word = w.textContent;
    UI.openWordPopup(w, { word: word, list: describeToken(word, null), sentence: sentenceOf(w), source: source });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popup) UI.closePopup();
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.classList.contains('gl')) {
      e.preventDefault(); document.activeElement.click();
    }
  });
  /* seleção de várias palavras = expressão */
  document.addEventListener('mouseup', function (e) {
    var sel = window.getSelection && window.getSelection();
    if (!sel || sel.isCollapsed) return;
    var txt = String(sel).replace(/\s+/g, ' ').trim();
    if (!txt || txt.split(' ').length < 2 || txt.length > 60) return;
    var node = sel.anchorNode && (sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement);
    var c = node && node.closest('.fr-text');
    if (!c) return;
    txt = txt.replace(/^[«"“(\s]+|[.,;:!?»"”)\s]+$/g, '');
    var range = sel.getRangeAt(0).getBoundingClientRect();
    var ctx = c._lux || {};
    var g = (ctx.gloss || []).filter(function (x) { return U.lowerFr(x.text) === U.lowerFr(txt); })[0];
    var entry = LUX.data.lexicon.filter(function (x) { return U.lowerFr(x.w) === U.lowerFr(txt); })[0];
    var list = [];
    if (g) list.push({ lemma: g.text, display: g.text, pt: g.pt, note: g.note, pos: 'expressão', fromGloss: true });
    if (entry) list.push(LUX.lexicon.describe({ kind: 'lex', entry: entry }));
    if (!list.length) list.push({ lemma: txt, display: txt, pt: '', pos: 'expressão' });
    setTimeout(function () {
      UI.openWordPopup(range, { word: txt, list: list, sentence: sentenceOf(node), source: ctx.source, expression: true });
    }, 10);
  });
  window.addEventListener('resize', UI.closePopup);

  /* ---------- pequenos componentes ---------- */
  UI.progress = function (pct, label) {
    pct = Math.max(0, Math.min(100, Math.round(pct)));
    return h('div', { class: 'progress', role: 'progressbar', 'aria-valuenow': pct, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-label': label || 'Progresso' },
      h('div', { class: 'bar', style: { width: pct + '%' } }));
  };
  UI.empty = function (icon, title, text, action) {
    return h('div', { class: 'empty' }, [h('div', { class: 'empty-ico' }, icon), h('h3', null, title), text ? h('p', { class: 'muted', html: U.mdInline(text) }) : null, action || null]);
  };
  UI.pageHead = function (title, sub, right) {
    return h('div', { class: 'page-head' }, [h('div', null, [h('h1', null, title), sub ? h('p', { class: 'muted', html: U.mdInline(sub) }) : null]), right || null]);
  };
  UI.levelTag = function (lv) { return lv ? h('span', { class: 'tag level lv-' + String(lv).replace(/[^a-z0-9]/gi, '') }, lv) : null; };
  /* seletor rápido de velocidade (altera o perfil) */
  UI.speedSelect = function (onChange) {
    var p = LUX.profiles.current();
    var sel = h('select', { class: 'select sm', 'aria-label': 'Velocidade da voz' });
    [0.6, 0.8, 1, 1.15].forEach(function (r) {
      var o = h('option', { value: r }, String(r).replace('.', ',') + '×');
      if (p && Math.abs(p.settings.rate - r) < 0.01) o.selected = true;
      sel.appendChild(o);
    });
    sel.addEventListener('change', function () { if (p) { p.settings.rate = +sel.value; LUX.store.save(); } if (onChange) onChange(+sel.value); });
    return h('label', { class: 'speed' }, [h('span', { class: 'muted sm' }, 'velocidade'), sel]);
  };
  UI.md = function (text, cls) { return h('div', { class: 'md' + (cls ? ' ' + cls : ''), html: U.md(text) }); };
  UI.table = function (t) {
    var tbl = h('table', { class: 'tbl' });
    if (t.caption) tbl.appendChild(h('caption', null, t.caption));
    if (t.head) {
      var tr = h('tr'); t.head.forEach(function (c) { tr.appendChild(h('th', { html: U.mdInline(c) })); });
      tbl.appendChild(h('thead', null, tr));
    }
    var tb = h('tbody');
    t.rows.forEach(function (r) { var tr = h('tr'); r.forEach(function (c) { tr.appendChild(h('td', { html: U.mdInline(c) })); }); tb.appendChild(tr); });
    tbl.appendChild(tb);
    return h('div', { class: 'tbl-wrap' }, tbl);
  };
  /* exemplo fr + pt com áudio e popup */
  UI.example = function (fr, pt, source) {
    var p = LUX.profiles.current();
    var show = !p || p.settings.showTranslation;
    return h('div', { class: 'example' }, [
      UI.playBtn(fr, { small: true }),
      h('div', null, [UI.frText(fr, { source: source, block: false }), pt ? h('div', { class: 'pt' + (show ? '' : ' hidden-tr'), title: show ? '' : 'Clique para ver a tradução', onclick: function (e) { e.currentTarget.classList.remove('hidden-tr'); } }, pt) : null])
    ]);
  };
})(window);
