/* LUX — aba Profissional, em sub-abas por carreira (HRBP; outras no futuro).
   Em cada carreira: cursos de conhecimento (ex.: legislação) + língua para o trabalho (francês, inglês, italiano).
   Lições usam o mesmo motor das lições do curso (LUX.lessons.view); guias e módulos de curso usam os blocos de Gerais. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui;
  var PRO = LUX.pro = {};

  PRO.careers = function () { return (LUX.proManifest && LUX.proManifest.careers) || []; };
  PRO.career = function (id) {
    var all = PRO.careers();
    return all.filter(function (c) { return c.id === id; })[0] || all.filter(function (c) { return c.status === 'active'; })[0] || { id: '', languages: [], tracks: {}, courses: [] };
  };
  function M(cid) { return PRO.career(cid); }
  PRO.track = function (lang, cid) { return M(cid).tracks[lang] || { levels: [], guides: [] }; };
  PRO.langInfo = function (lang, cid) { return M(cid).languages.filter(function (x) { return x.id === lang; })[0] || null; };
  PRO.activeLangs = function (cid) { return M(cid).languages.filter(function (x) { return x.status === 'active'; }); };

  /* item do manifesto + nível de uma lição (procura em todas as carreiras) */
  PRO.meta = function (id) {
    var out = null;
    PRO.careers().forEach(function (c) {
      Object.keys(c.tracks || {}).forEach(function (lang) {
        c.tracks[lang].levels.forEach(function (lv) {
          lv.lessons.forEach(function (it, i) { if (it.id === id) out = { career: c.id, lang: lang, level: lv, item: it, index: i }; });
        });
      });
    });
    return out;
  };
  /* carreira de um guia ou de um curso: { career, item } */
  PRO.careerOf = function (kind, id) {
    var out = null;
    PRO.careers().forEach(function (c) {
      if (kind === 'course') (c.courses || []).forEach(function (x) { if (x.id === id) out = { career: c, item: x }; });
      else Object.keys(c.tracks || {}).forEach(function (lang) { (c.tracks[lang].guides || []).forEach(function (x) { if (x.id === id) out = { career: c, item: x }; }); });
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

  function langOf(params, cid) {
    var q = params.query.lang;
    var info = q && PRO.langInfo(q, cid);
    return info ? info.id : (PRO.activeLangs(cid)[0] || { id: 'fr' }).id;
  }
  /* endereço da aba Profissional numa carreira/idioma (a 1ª carreira não precisa de ?c=) */
  PRO.href = function (cid, lang) {
    var q = [];
    if (cid && cid !== PRO.career().id) q.push('c=' + cid);
    if (lang) q.push('lang=' + lang);
    return '#/pro' + (q.length ? '?' + q.join('&') : '');
  };
  /* progresso dos cursos: p.proCourses[id].modules[moduleId] = { best, last, attempts, updatedAt } */
  PRO.courseState = function (p, id) { return (p && p.proCourses && p.proCourses[id]) || { modules: {} }; };
  PRO.courseDone = function (p, c) {
    var st = PRO.courseState(p, c.id);
    return c.modules.filter(function (m) { var r = st.modules[m.id]; return r && r.best >= 0.7; }).length;
  };

  /* ---------- página principal ---------- */
  LUX.router.add('/pro', function (params) {
    var car = PRO.career(params.query.c);
    var cid = car.id;
    var lang = langOf(params, cid);
    return {
      title: 'Profissional', nav: 'pro', crumbs: [['Meu espaço', null], ['Profissional', null]],
      render: function (main) {
        var p = LUX.profiles.current();
        var info = PRO.langInfo(lang, cid);
        main.appendChild(UI.pageHead('💼 Profissional', 'Conhecimento e língua para o trabalho, por carreira.'));

        // sub-abas: carreiras
        var tabs = h('div', { class: 'pro-careers', role: 'tablist', 'aria-label': 'Carreira' });
        PRO.careers().forEach(function (c) {
          var soon = c.status !== 'active';
          tabs.appendChild(soon
            ? h('span', { class: 'pro-career soon', title: c.desc, 'aria-disabled': 'true' }, (c.icon || '') + ' ' + c.label + ' · em breve')
            : h('a', { class: 'pro-career' + (c.id === cid ? ' on' : ''), href: PRO.href(c.id), role: 'tab', 'aria-selected': c.id === cid ? 'true' : 'false', title: c.title }, (c.icon || '') + ' ' + c.label));
        });
        main.appendChild(tabs);
        main.appendChild(h('p', { class: 'muted' }, [h('b', null, car.title + '. '), car.desc]));

        // cursos da carreira
        var courses = car.courses || [];
        if (courses.length) {
          main.appendChild(h('h2', { class: 'section-title' }, '⚖️ Cursos: legislação e prática'));
          main.appendChild(h('p', { class: 'muted' }, 'Em português, com os termos em francês que aparecem nos contratos, na lei e no dia a dia. Cada módulo tem exercícios; com 70% ou mais ele conta como concluído.'));
          var cg = h('div', { class: 'gen-grid' });
          courses.forEach(function (it) {
            var c = LUX.data.pro.courses[it.id];
            var n = c ? c.modules.length : 0, done = c ? PRO.courseDone(p, c) : 0;
            cg.appendChild(h(c ? 'a' : 'div', { class: 'gen-card pro-course' + (c ? '' : ' soon'), href: c ? '#/pro/curso/' + it.id : null }, [
              h('span', { class: 'gen-ico', 'aria-hidden': 'true' }, it.icon || '📘'),
              h('span', null, [h('b', null, it.title), h('span', { class: 'muted sm' }, it.desc),
                c ? h('span', { class: 'muted sm pro-course-meta' }, (done ? (done === n ? '✅ ' : '') + done + ' de ' + n + ' módulos concluídos' : n + ' módulos') + (c.hours ? ' · cerca de ' + c.hours + ' h' : '')) : null]),
              c ? null : h('span', { class: 'soon-tag' }, 'em breve')
            ]));
          });
          main.appendChild(cg);
        }

        // cursos presenciais de outras instituições
        var ext = car.external || [];
        if (ext.length) {
          main.appendChild(h('h2', { class: 'section-title' }, '🎓 Cursos presenciais recomendados'));
          main.appendChild(h('p', { class: 'muted' }, 'Em Luxemburgo, com certificado. As turmas mudam a cada semestre: abra o link para ver as próximas datas e se inscrever.'));
          var ul = h('ul', { class: 'pro-ext' });
          ext.forEach(function (x) {
            ul.appendChild(h('li', { class: 'card pro-ext-item' }, [
              h('div', { class: 'row between wrap' }, [
                h('div', null, [h('b', { lang: 'fr' }, x.title), x.code ? h('span', { class: 'muted sm' }, ' · ' + x.code) : null]),
                x.tag ? h('span', { class: 'chip sm on' }, x.tag) : null
              ]),
              h('div', { class: 'muted sm' }, x.provider + ' · ' + x.info),
              h('p', { class: 'sm' }, x.desc),
              h('div', { class: 'row between wrap' }, [
                h('span', { class: 'muted sm' }, 'Pré-requisito: ' + x.prereq),
                h('a', { class: 'btn sm', href: x.url, target: '_blank', rel: 'noopener' }, 'Ver turmas e inscrição ↗')
              ])
            ]));
          });
          main.appendChild(ul);
        }

        // língua para o trabalho: idiomas
        if (car.languages.length) main.appendChild(h('h2', { class: 'section-title' }, '🗣️ Língua para o trabalho'));
        var chips = h('div', { class: 'chips pro-langs', role: 'tablist', 'aria-label': 'Idioma' });
        car.languages.forEach(function (x) {
          var soon = x.status !== 'active';
          chips.appendChild(soon
            ? h('span', { class: 'chip soon', title: x.desc, 'aria-disabled': 'true' }, x.flag + ' ' + x.label + ' · em breve')
            : h('a', { class: 'chip' + (x.id === lang ? ' on' : ''), href: PRO.href(cid, x.id), role: 'tab', 'aria-selected': x.id === lang ? 'true' : 'false' }, x.flag + ' ' + x.label));
        });
        if (car.languages.length) main.appendChild(chips);
        if (info && info.desc) main.appendChild(h('p', { class: 'muted sm' }, info.desc));

        var tr = PRO.track(lang, cid);
        var myLevel = PRO.studentLevel(p);

        // trilhas por nível
        if (tr.levels.length) main.appendChild(h('h3', { class: 'section-title' }, '📚 Lições profissionais'));
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
        if (!tr.levels.length && car.languages.length) main.appendChild(UI.empty('🚧', 'Em breve', 'As lições deste idioma ainda estão sendo preparadas.'));

        // guias
        if (tr.guides.length) {
          main.appendChild(h('h3', { class: 'section-title' }, '🧭 Guias de consulta'));
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
    var home = PRO.href(m ? m.career : '', l ? l.lang : '');
    return LUX.lessons.view(l, p, params, {
      route: '#/pro/licao/' + params.id, nav: 'pro', back: [home, 'Voltar ao Profissional'],
      crumbs: l ? [['Profissional', home], [l.level, home], [l.title, null]] : [['Profissional', '#/pro']],
      locked: l && !PRO.isUnlocked(p, l.id) ? PRO.lockReason(l.id) + ' Você também pode desbloquear tudo em **Perfil e configurações**.' : null,
      render: {
        warmup: false,
        kicker: '💼 Profissional · ' + (PRO.langInfo(l ? l.lang : 'fr', m ? m.career : '') || {}).label + ' · ' + (l ? l.level : '') + ' · Lição ' + (m ? m.index + 1 : '') + (l && l.sector ? ' · ' + l.sector : ''),
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
          actions.appendChild(h('a', { class: 'btn', href: home }, '💼 Voltar ao Profissional'));
          if (l.lang === 'fr') actions.appendChild(h('a', { class: 'btn', href: '#/revisar' }, '🔁 Revisar vocabulário'));
          card.appendChild(actions);
        }
      }
    });
  });

  /* ---------- guia ---------- */
  LUX.router.add('/pro/guia/:id', function (params) {
    var gd = LUX.data.pro.guides[params.id];
    var co = gd && PRO.careerOf('guide', gd.id);
    var meta = co ? co.item : null;
    var home = PRO.href(co ? co.career.id : '', gd ? gd.lang : '');
    return {
      title: gd ? gd.title : 'Guia', nav: 'pro',
      crumbs: [['Profissional', home], [gd ? gd.title : 'Guia', null]],
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
        main.appendChild(h('div', { class: 'row gap' }, [h('a', { class: 'btn', href: home }, '← Voltar ao Profissional')]));
      }
    };
  });

  /* ---------- curso (módulos com texto + exercícios) ---------- */
  LUX.router.add('/pro/curso/:id', function (params) {
    var c = LUX.data.pro.courses[params.id];
    var co = c && PRO.careerOf('course', c.id);
    var home = PRO.href(co ? co.career.id : '');
    var mi = c ? Math.max(0, Math.min(c.modules.length - 1, (parseInt(params.query.m, 10) || 1) - 1)) : 0;
    var mod = c && c.modules[mi];
    return {
      title: c ? c.title : 'Curso', nav: 'pro',
      crumbs: c ? [['Profissional', home], [c.title, '#/pro/curso/' + c.id], ['Módulo ' + (mi + 1), null]] : [['Profissional', '#/pro']],
      render: function (main) {
        if (!c) { main.appendChild(UI.empty('📭', 'Curso não encontrado', null, h('a', { class: 'btn primary', href: '#/pro' }, 'Voltar ao Profissional'))); return; }
        LUX.tts.contentLang = c.lang;
        var p = LUX.profiles.current();
        var st = PRO.courseState(p, c.id);
        var source = { title: c.title + ' · ' + mod.title, route: '#/pro/curso/' + c.id + '?m=' + (mi + 1) };

        main.appendChild(h('div', { class: 'page-head' }, [h('div', null, [
          h('div', { class: 'muted sm' }, '💼 ' + (co ? co.career.label : 'Profissional') + ' · Curso · ' + c.modules.length + ' módulos' + (c.hours ? ' · cerca de ' + c.hours + ' h' : '')),
          h('h1', null, ((co && co.item.icon) || '📘') + ' ' + c.title), c.titleFr ? h('p', { class: 'muted', lang: c.lang }, c.titleFr) : null
        ]), h('div', { class: 'row gap wrap' }, [UI.speedSelect()])]));
        if (c.note && mi === 0) main.appendChild(h('div', { class: 'banner info' }, UI.md(c.note)));

        // índice dos módulos
        var toc = h('ol', { class: 'course-toc', 'aria-label': 'Módulos do curso' });
        c.modules.forEach(function (m, i) {
          var r = st.modules[m.id];
          var icon = r && r.best >= 0.7 ? '✅' : r ? '◐' : '○';
          toc.appendChild(h('li', { class: i === mi ? 'on' : '' }, h('a', { href: '#/pro/curso/' + c.id + '?m=' + (i + 1), 'aria-current': i === mi ? 'step' : null }, [
            h('span', { class: 'toc-ico', 'aria-hidden': 'true' }, icon), h('span', null, (i + 1) + '. ' + m.title),
            r ? h('span', { class: 'muted sm' }, ' ' + Math.round(r.best * 100) + '%') : null
          ])));
        });
        main.appendChild(toc);

        main.appendChild(h('h2', { class: 'module-title' }, 'Módulo ' + (mi + 1) + ' · ' + mod.title));
        if (mod.titleFr) main.appendChild(h('p', { class: 'muted', lang: c.lang }, mod.titleFr));
        LUX.general.renderBlocks(main, { id: c.id + '-' + mod.id, lang: c.lang, blocks: mod.blocks }, source);

        // exercícios do módulo
        var results = {};
        var exs = mod.exercises || [];
        var sec = h('section', { class: 'card' }, [h('h2', null, '✍️ Exercícios do módulo'),
          h('p', { class: 'muted sm' }, 'Com 70% ou mais o módulo conta como concluído. Sua melhor nota fica guardada.')]);
        var list = h('div', { class: 'ex-list' });
        var out = h('div', { class: 'module-result', 'aria-live': 'polite' });
        exs.forEach(function (ex, i) {
          list.appendChild(h('div', { class: 'card ex-card' }, [h('div', { class: 'ex-num' }, String(i + 1)),
            LUX.ex.render(ex, { source: source, onResult: function (score) { results[i] = score; check(); } })]));
        });
        sec.appendChild(list);
        sec.appendChild(out);
        main.appendChild(sec);
        function check() {
          var n = Object.keys(results).length;
          if (n < exs.length) { out.textContent = n + ' de ' + exs.length + ' respondidos.'; return; }
          var score = exs.reduce(function (a, e, i) { return a + results[i]; }, 0) / exs.length;
          var pct = Math.round(score * 100);
          if (p) {
            p.proCourses = p.proCourses || {};
            var cs = p.proCourses[c.id] = p.proCourses[c.id] || { modules: {} };
            var prev = cs.modules[mod.id] || { attempts: 0, best: 0 };
            cs.modules[mod.id] = { attempts: prev.attempts + 1, best: Math.max(prev.best, score), last: score, updatedAt: new Date().toISOString() };
            LUX.profiles.markActivity(p);
            LUX.store.save();
            var best = cs.modules[mod.id].best, on = toc.querySelector('li.on');
            if (on) {
              on.querySelector('.toc-ico').textContent = best >= 0.7 ? '✅' : '◐';
              var sc = on.querySelector('a > .muted');
              if (!sc) { sc = h('span', { class: 'muted sm' }); on.querySelector('a').appendChild(sc); }
              sc.textContent = ' ' + Math.round(best * 100) + '%';
            }
          }
          out.innerHTML = '';
          out.appendChild(h('div', { class: 'banner ' + (score >= 0.7 ? 'ok' : 'warn') }, score >= 0.7
            ? [h('b', null, '✅ Módulo concluído: ' + pct + '%. '), mi + 1 < c.modules.length ? 'Siga para o próximo módulo.' : 'Você chegou ao fim do curso!']
            : [h('b', null, pct + '%. '), 'Releia as regras acima e refaça os exercícios (recarregue o módulo) para chegar a 70%.']));
        }

        var nav = h('div', { class: 'row between wrap lesson-nav' }, [
          mi > 0 ? h('a', { class: 'btn', href: '#/pro/curso/' + c.id + '?m=' + mi }, '← Módulo ' + mi) : h('a', { class: 'btn', href: home }, '← Voltar ao Profissional'),
          mi + 1 < c.modules.length ? h('a', { class: 'btn primary', href: '#/pro/curso/' + c.id + '?m=' + (mi + 2) }, 'Módulo ' + (mi + 2) + ' →') : h('a', { class: 'btn primary', href: home }, '💼 Voltar ao Profissional')
        ]);
        main.appendChild(nav);
      }
    };
  });
})(window);
