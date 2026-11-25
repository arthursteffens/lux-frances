/* LUX — aba Profissional: francês para o trabalho (e, no futuro, inglês e italiano).
   Lições usam o mesmo motor das lições do curso (LUX.lessons.view); guias usam os blocos de Gerais. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui;
  var PRO = LUX.pro = {};

  function M() { return LUX.proManifest || { languages: [], tracks: {} }; }
  PRO.track = function (lang) { return M().tracks[lang] || { levels: [], guides: [] }; };
  PRO.langInfo = function (lang) { return M().languages.filter(function (x) { return x.id === lang; })[0] || null; };
  PRO.activeLangs = function () { return M().languages.filter(function (x) { return x.status === 'active'; }); };

  /* item do manifesto + nível de uma lição */
  PRO.meta = function (id) {
    var out = null;
    Object.keys(M().tracks).forEach(function (lang) {
      PRO.track(lang).levels.forEach(function (lv) {
        lv.lessons.forEach(function (it, i) { if (it.id === id) out = { lang: lang, level: lv, item: it, index: i }; });
      });
    });
    return out;
  };

  /* unidade do curso concluída? (todas as lições daquela unidade com status done) */
  function unitDone(p, level, n) {
    var lv = LUX.manifest.levels.filter(function (x) { return x.id === level; })[0];
    var u = lv && lv.units.filter(function (x) { return x.n === n; })[0];
    if (!u || !u.lessons.length) return false;
    return u.lessons.every(function (id) { return p.progress[id] && p.progress[id].status === 'done'; });
  }
  PRO.isUnlocked = function (p, id) {
    var m = PRO.meta(id);
    if (!p || !m) return false;
    if (p.unlockedAll || !m.item.unit) return true;
    return unitDone(p, m.level.id, m.item.unit);
  };
  PRO.lockReason = function (id) {
    var m = PRO.meta(id);
    return m && m.item.unit ? 'Libera ao concluir a Unidade ' + m.item.unit + ' do ' + m.level.id + ' no curso — assim a lição usa a gramática que você já estudou.' : '';
  };
  PRO.next = function (id) {
    var m = PRO.meta(id);
    if (!m) return null;
    var nx = m.level.lessons[m.index + 1];
    return nx && LUX.data.pro.lessons[nx.id] ? nx.id : null;
  };
  /* nível atual do aluno = nível da próxima lição do curso */
  PRO.studentLevel = function (p) {
    var cur = p && LUX.lessons.current(p);
    return (cur && LUX.data.lessons[cur] && LUX.data.lessons[cur].level) || 'A2';
  };

  function langOf(params) {
    var q = params.query.lang;
    var info = q && PRO.langInfo(q);
    return info ? info.id : (PRO.activeLangs()[0] || { id: 'fr' }).id;
  }

  /* ---------- página principal ---------- */
  LUX.router.add('/pro', function (params) {
    var lang = langOf(params);
    return {
      title: 'Profissional', nav: 'pro', crumbs: [['Meu espaço', null], ['Profissional', null]],
      render: function (main) {
        var p = LUX.profiles.current();
        var info = PRO.langInfo(lang);
        main.appendChild(UI.pageHead('💼 Profissional', 'Língua para o trabalho: Recursos Humanos em empresas de tecnologia (e um pouco de fintech), para quem vai trabalhar em Luxemburgo ou em outro país francófono.'));

        // idiomas
        var chips = h('div', { class: 'chips pro-langs', role: 'tablist', 'aria-label': 'Idioma' });
        M().languages.forEach(function (x) {
          var soon = x.status !== 'active';
          chips.appendChild(soon
            ? h('span', { class: 'chip soon', title: x.desc, 'aria-disabled': 'true' }, x.flag + ' ' + x.label + ' · em breve')
            : h('a', { class: 'chip' + (x.id === lang ? ' on' : ''), href: '#/pro?lang=' + x.id, role: 'tab', 'aria-selected': x.id === lang ? 'true' : 'false' }, x.flag + ' ' + x.label));
        });
        main.appendChild(chips);
        if (info && info.desc) main.appendChild(h('p', { class: 'muted sm' }, info.desc));

        var tr = PRO.track(lang);
        var myLevel = PRO.studentLevel(p);

        // trilhas por nível
        main.appendChild(h('h2', { class: 'section-title' }, '📚 Lições profissionais'));
        var gated = tr.levels.some(function (lv) { return lv.lessons.some(function (it) { return it.unit; }); });
        main.appendChild(h('p', { class: 'muted' }, gated
          ? 'As lições acompanham o seu nível no curso: cada uma libera quando você termina a unidade com a gramática que ela usa. Seu nível agora: ' + myLevel + '.'
          : 'Todas as lições estão liberadas. Os textos e áudios estão em ' + (info ? info.label : '') + '; as explicações, em português.'));
        if (!gated) myLevel = (tr.levels[0] || {}).id;
        tr.levels.forEach(function (lv) {
          var avail = lv.lessons.filter(function (it) { return LUX.data.pro.lessons[it.id]; });
          var card = h('section', { class: 'card pro-level' + (lv.id === myLevel ? ' current' : '') });
          var done = avail.filter(function (it) { var s = p && p.progress[it.id]; return s && s.status === 'done'; }).length;
          card.appendChild(h('div', { class: 'row between wrap' }, [
            h('div', null, [h('h3', null, lv.title), h('p', { class: 'muted sm' }, lv.desc)]),
            avail.length ? h('span', { class: 'muted sm' }, done + ' de ' + avail.length + ' lições') : h('span', { class: 'chip sm soon' }, 'em breve')
          ]));
          if (!avail.length) {
            card.appendChild(h('p', { class: 'muted sm' }, 'Chega junto com o ' + lv.id + ' do curso.'));
          } else {
            var ul = h('ul', { class: 'pro-lessons' });
            avail.forEach(function (it, i) {
              var l = LUX.data.pro.lessons[it.id];
              var st = p && p.progress[it.id];
              var open = PRO.isUnlocked(p, it.id);
              var icon = st && st.status === 'done' ? '✅' : open ? '▶️' : '🔒';
              ul.appendChild(h('li', { class: open ? '' : 'locked' }, [
                h('span', { class: 'pro-ico', 'aria-hidden': 'true' }, icon),
                h('div', { class: 'grow' }, [
                  open ? h('a', { href: '#/pro/licao/' + it.id, lang: l.lang }, (i + 1) + '. ' + l.title) : h('span', { lang: l.lang }, (i + 1) + '. ' + l.title),
                  h('div', { class: 'muted sm' }, l.titlePt + (l.sector ? ' · ' + l.sector : '') + (st ? ' · melhor nota ' + Math.round(st.best * 100) + '%' : '')),
                  open ? null : h('div', { class: 'muted sm' }, '🔒 ' + PRO.lockReason(it.id))
                ])
              ]));
            });
            card.appendChild(ul);
          }
          main.appendChild(card);
        });
        if (!tr.levels.length) main.appendChild(UI.empty('🚧', 'Em breve', 'As lições deste idioma ainda estão sendo preparadas.'));

        // guias
        if (tr.guides.length) {
          main.appendChild(h('h2', { class: 'section-title' }, '🧭 Guias de consulta'));
          var grid = h('div', { class: 'gen-grid' });
          tr.guides.forEach(function (gd) {
            var ok = !!LUX.data.pro.guides[gd.id];
            grid.appendChild(h(ok ? 'a' : 'div', { class: 'gen-card' + (ok ? '' : ' soon'), href: ok ? '#/pro/guia/' + gd.id : null }, [
              h('span', { class: 'gen-ico', 'aria-hidden': 'true' }, gd.icon),
              h('span', null, [h('b', null, gd.title), h('span', { class: 'muted sm' }, gd.desc)]),
              ok ? null : h('span', { class: 'soon-tag' }, 'em breve')
            ]));
          });
          main.appendChild(grid);
        }
      }
    };
  });

  /* ---------- lição profissional ---------- */
  LUX.router.add('/pro/licao/:id', function (params) {
    var l = LUX.data.pro.lessons[params.id];
    var p = LUX.profiles.current();
    var m = PRO.meta(params.id);
    var langQ = l ? '?lang=' + l.lang : '';
    return LUX.lessons.view(l, p, params, {
      route: '#/pro/licao/' + params.id, nav: 'pro', back: ['#/pro' + langQ, 'Voltar ao Profissional'],
      crumbs: l ? [['Profissional', '#/pro' + langQ], [l.level, '#/pro' + langQ], [l.title, null]] : [['Profissional', '#/pro']],
      locked: l && !PRO.isUnlocked(p, l.id) ? PRO.lockReason(l.id) + ' Você também pode desbloquear tudo em **Perfil e configurações**.' : null,
      render: {
        warmup: false,
        kicker: '💼 Profissional · ' + (PRO.langInfo(l ? l.lang : 'fr') || {}).label + ' · ' + (l ? l.level : '') + ' · Lição ' + (m ? m.index + 1 : '') + (l && l.sector ? ' · ' + l.sector : ''),
        afterSave: function (card, st, pct) {
          var actions = h('div', { class: 'row gap wrap' });
          if (st && st.status === 'done') {
            card.appendChild(h('div', { class: 'banner ok' }, [h('b', null, '🎉 Parabéns! '), 'Lição profissional concluída com ' + pct + '%.']));
            var nx = PRO.next(l.id);
            if (nx && PRO.isUnlocked(p, nx)) actions.appendChild(h('a', { class: 'btn primary', href: '#/pro/licao/' + nx }, 'Próxima lição profissional →'));
            else if (nx) actions.appendChild(h('div', { class: 'muted sm' }, 'Próxima lição: ' + PRO.lockReason(nx)));
          } else {
            card.appendChild(h('div', { class: 'banner warn' }, 'Com 70% ou mais a lição conta como concluída. Refaça os exercícios com calma.'));
          }
          actions.appendChild(h('a', { class: 'btn', href: '#/pro' + langQ }, '💼 Voltar ao Profissional'));
          if (l.lang === 'fr') actions.appendChild(h('a', { class: 'btn', href: '#/revisar' }, '🔁 Revisar vocabulário'));
          card.appendChild(actions);
        }
      }
    });
  });

  /* ---------- guia ---------- */
  LUX.router.add('/pro/guia/:id', function (params) {
    var gd = LUX.data.pro.guides[params.id];
    var langQ = gd ? '?lang=' + gd.lang : '';
    var meta = null;
    if (gd) PRO.track(gd.lang).guides.forEach(function (x) { if (x.id === gd.id) meta = x; });
    return {
      title: gd ? gd.title : 'Guia', nav: 'pro',
      crumbs: [['Profissional', '#/pro' + langQ], [gd ? gd.title : 'Guia', null]],
      render: function (main) {
        if (!gd) { main.appendChild(UI.empty('📭', 'Guia não encontrado', null, h('a', { class: 'btn primary', href: '#/pro' }, 'Voltar ao Profissional'))); return; }
        LUX.tts.contentLang = gd.lang;
        var p = LUX.profiles.current();
        var source = { title: 'Profissional: ' + gd.title, route: '#/pro/guia/' + gd.id };
        var head = h('div', { class: 'row gap wrap' }, [UI.speedSelect()]);
        if (gd.lang === 'fr') {
          head.appendChild(h('button', { class: 'btn ghost sm', onclick: function () {
            var n = 0;
            LUX.general.allItems(gd).forEach(function (it) { n += LUX.srs.addWord(p, { fr: it.fr, display: it.fr, lemma: it.fr, pt: it.pt, source: 'pro-' + gd.id }); });
            UI.toast(n ? n + ' cartões criados.' : 'Os itens já estavam na revisão.', 'ok');
            LUX.sidebar.render();
          } }, '+ Enviar o vocabulário para a revisão'));
        }
        main.appendChild(h('div', { class: 'page-head' }, [h('div', null, [
          h('div', { class: 'row gap' }, [gd.level ? UI.levelTag(gd.level) : null, h('span', { class: 'muted sm' }, '💼 Profissional')]),
          h('h1', null, ((meta && meta.icon) || '🧭') + ' ' + gd.title), gd.titleFr ? h('p', { class: 'muted', lang: gd.lang }, gd.titleFr) : null
        ]), head]));
        LUX.general.renderBlocks(main, gd, source);
        main.appendChild(h('div', { class: 'row gap' }, [h('a', { class: 'btn', href: '#/pro' + langQ }, '← Voltar ao Profissional')]));
      }
    };
  });
})(window);
