/* LUX — aba Caderno: palavras e expressões salvas pelo aluno (por perfil). */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui;
  var NB = LUX.notebook = {};

  NB.save = function (p, item) {
    var now = new Date().toISOString();
    var prev = p.notebook[item.key];
    p.notebook[item.key] = Object.assign({ note: '', addedAt: now }, prev || {}, item, { updatedAt: now });
    LUX.store.save();
    LUX.sidebar.render();
  };
  NB.remove = function (p, key) { delete p.notebook[key]; LUX.store.save(); LUX.sidebar.render(); };
  NB.list = function (p) { return Object.keys(p.notebook).map(function (k) { return p.notebook[k]; }); };

  NB.toCSV = function (p) {
    var rows = [['frances', 'portugues', 'classe', 'genero', 'frase', 'licao', 'anotacao', 'salvo_em']];
    NB.list(p).forEach(function (n) {
      rows.push([n.fr, n.pt, n.pos, n.gender || '', n.sentence || '', n.source && n.source.lessonId || '', n.note || '', (n.addedAt || '').slice(0, 10)]);
    });
    return rows.map(function (r) { return r.map(function (c) { c = String(c == null ? '' : c); return /[",;\n]/.test(c) ? '"' + c.replace(/"/g, '""') + '"' : c; }).join(','); }).join('\n');
  };

  function lessonTitle(id) { var l = LUX.data.lessons[id]; return l ? l.title : id; }

  LUX.router.add('/caderno', function (params) {
    return {
      title: 'Caderno', nav: 'caderno', crumbs: [['Meu espaço', null], ['Caderno', null]],
      render: function (main) {
        var p = LUX.profiles.current();
        var exportBtn = h('button', { class: 'btn ghost' }, '⬇ Exportar CSV');
        exportBtn.addEventListener('click', function () {
          var blob = new Blob(['﻿' + NB.toCSV(p)], { type: 'text/csv;charset=utf-8' });
          var a = h('a', { href: URL.createObjectURL(blob), download: 'caderno-' + U.norm(p.name).replace(/[^a-z0-9]+/g, '-') + '-' + U.todayStr() + '.csv' });
          document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500);
          UI.toast('CSV exportado. Você pode importá-lo no Anki.', 'ok');
        });
        main.appendChild(UI.pageHead('Meu caderno', 'Clique em **qualquer palavra** de um texto do curso e use "Salvar no caderno". Selecione várias palavras para salvar uma expressão.', exportBtn));
        var all = NB.list(p);
        if (!all.length) {
          main.appendChild(UI.empty('📓', 'Seu caderno está vazio', 'Abra uma lição, clique numa palavra e escolha **☆ Salvar no caderno**.', h('a', { class: 'btn primary', href: '#/curso' }, 'Ir para o curso')));
          return;
        }
        // filtros
        var q = h('input', { class: 'input', type: 'search', placeholder: 'Buscar no caderno (português ou francês)…', 'aria-label': 'Buscar no caderno', value: params.query.q || '' });
        var lessonSel = h('select', { class: 'select', 'aria-label': 'Filtrar por lição' }, [h('option', { value: '' }, 'Todas as lições')]);
        var lessonIds = {};
        all.forEach(function (n) { if (n.source && n.source.lessonId) lessonIds[n.source.lessonId] = 1; });
        Object.keys(lessonIds).sort().forEach(function (id) { lessonSel.appendChild(h('option', { value: id }, lessonTitle(id))); });
        var posSel = h('select', { class: 'select', 'aria-label': 'Filtrar por classe' }, [
          h('option', { value: '' }, 'Todas as classes'), h('option', { value: 'substantivo' }, 'Substantivos'), h('option', { value: 'verbo' }, 'Verbos'),
          h('option', { value: 'adjetivo' }, 'Adjetivos'), h('option', { value: 'expressão' }, 'Expressões'), h('option', { value: 'outro' }, 'Outros')
        ]);
        var genderOnly = h('label', { class: 'switch' }, [h('input', { type: 'checkbox' }), h('span', null, 'só gênero diferente do português')]);
        var sortSel = h('select', { class: 'select', 'aria-label': 'Ordenar' }, [h('option', { value: 'recent' }, 'Mais recentes'), h('option', { value: 'alpha' }, 'Alfabética'), h('option', { value: 'errors' }, 'Mais erradas na revisão')]);
        main.appendChild(h('div', { class: 'card filters' }, [q, h('div', { class: 'row gap wrap' }, [lessonSel, posSel, sortSel, genderOnly])]));
        var count = h('p', { class: 'muted sm' });
        main.appendChild(count);
        var list = h('div', { class: 'nb-list' });
        main.appendChild(list);
        function lapses(n) {
          var k = U.norm(n.lemma);
          var c1 = p.srs['w:' + k + ':fr'], c2 = p.srs['w:' + k + ':pt'], c3 = p.srs['g:' + k];
          return (c1 ? c1.lapses : 0) + (c2 ? c2.lapses : 0) + (c3 ? c3.lapses : 0);
        }
        function draw() {
          var qq = U.norm(q.value);
          var items = NB.list(p).filter(function (n) {
            if (qq && U.norm(n.fr + ' ' + n.lemma + ' ' + n.pt + ' ' + (n.note || '')).indexOf(qq) < 0) return false;
            if (lessonSel.value && !(n.source && n.source.lessonId === lessonSel.value)) return false;
            if (posSel.value) {
              var pos = n.pos || '';
              if (posSel.value === 'outro') { if (/substantivo|verbo|adjetivo|express/.test(pos)) return false; }
              else if (pos.indexOf(posSel.value) < 0 && !(posSel.value === 'expressão' && /express|no contexto/.test(pos))) return false;
            }
            if (genderOnly.querySelector('input').checked && !n.genderDiffers) return false;
            return true;
          });
          if (sortSel.value === 'alpha') items.sort(function (a, b) { return a.lemma.localeCompare(b.lemma, 'fr'); });
          else if (sortSel.value === 'errors') items.sort(function (a, b) { return lapses(b) - lapses(a); });
          else items.sort(function (a, b) { return (b.addedAt || '') < (a.addedAt || '') ? -1 : 1; });
          count.textContent = items.length + ' de ' + U.plural(all.length, 'item', 'itens');
          list.innerHTML = '';
          items.forEach(function (n) { list.appendChild(itemView(p, n, draw)); });
        }
        [q, lessonSel, posSel, sortSel, genderOnly.querySelector('input')].forEach(function (x) { x.addEventListener('input', draw); x.addEventListener('change', draw); });
        draw();
      }
    };
  });

  function itemView(p, n, redraw) {
    var inRev = LUX.srs.hasWord(p, n.lemma);
    var revBtn = h('button', { class: 'btn sm ghost' }, inRev ? '✓ Na revisão' : '+ Revisar');
    revBtn.disabled = inRev;
    revBtn.addEventListener('click', function () {
      var added = LUX.srs.addWord(p, { fr: n.fr, display: n.fr, lemma: n.lemma, pt: n.pt, gender: n.gender === 'm' || n.gender === 'f' ? n.gender : null, example: n.sentence, source: n.source && n.source.lessonId });
      revBtn.textContent = '✓ Na revisão'; revBtn.disabled = true;
      UI.toast(added ? added + ' cartão(ões) criado(s).' : 'Já estava na revisão.', 'ok');
      LUX.sidebar.render();
    });
    var del = h('button', { class: 'btn sm ghost danger-text', 'aria-label': 'Remover ' + n.fr }, 'Remover');
    del.addEventListener('click', function () { UI.confirm('Remover **' + n.fr + '** do caderno?', { ok: 'Remover', danger: true }).then(function (ok) { if (ok) { NB.remove(p, n.key); redraw(); } }); });
    var note = h('textarea', { class: 'input note', rows: 1, placeholder: 'Sua anotação…', 'aria-label': 'Anotação para ' + n.fr }, n.note || '');
    var t;
    note.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { n.note = note.value; n.updatedAt = new Date().toISOString(); LUX.store.save(); }, 400); });
    var meta = h('div', { class: 'nb-meta' }, [
      n.pos ? h('span', { class: 'tag' }, n.pos) : null,
      n.gender && n.gender !== 'pl' ? h('span', { class: 'tag g-' + n.gender }, LUX.lexicon.genderLabel(n.gender)) : null,
      n.genderDiffers ? h('span', { class: 'tag warn' }, '⚠ gênero diferente') : null,
      h('span', { class: 'muted sm' }, 'salvo em ' + U.fmtDate(n.addedAt))
    ]);
    var src = n.source && n.source.route ? h('a', { class: 'sm', href: n.source.route }, '↗ ' + (n.source.title || 'origem')) : null;
    return h('article', { class: 'card nb-item' }, [
      h('div', { class: 'row between wrap' }, [
        h('div', { class: 'row gap' }, [UI.playBtn(n.fr.replace(' / ', ', '), { small: true }), h('div', null, [h('div', { class: 'nb-fr', lang: 'fr' }, n.fr), h('div', { class: 'nb-pt' }, n.pt)])]),
        h('div', { class: 'row gap' }, [n.isVerb ? h('a', { class: 'btn sm ghost', href: '#/verbos/' + encodeURIComponent(n.lemma) }, 'conjugação') : null, revBtn, del])
      ]),
      meta,
      n.sentence ? h('div', { class: 'nb-sentence' }, [UI.playBtn(n.sentence, { small: true, title: 'Ouvir a frase' }), UI.frText(n.sentence, { block: false, gloss: false }), src]) : src,
      note
    ]);
  }
})(window);
