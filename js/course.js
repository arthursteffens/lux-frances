/* LUX — aba Curso: painel do aluno + mapa de níveis, unidades e lições. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, L = LUX.lessons;

  function stat(icon, value, label, href) {
    var inner = [h('span', { class: 'stat-ico', 'aria-hidden': 'true' }, icon), h('b', { class: 'stat-v' }, String(value)), h('span', { class: 'stat-l muted sm' }, label)];
    return href ? h('a', { class: 'stat', href: href }, inner) : h('div', { class: 'stat' }, inner);
  }

  LUX.router.add('/curso', function (params) {
    return {
      title: 'Curso', nav: 'curso', crumbs: [['Estudar', null], ['Curso', null]],
      render: function (main) {
        var p = LUX.profiles.current();
        var hour = new Date().getHours();
        var hello = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir';
        main.appendChild(UI.pageHead(hello + ', ' + p.name + ' !', 'Seu curso de francês do **A1 ao B2**.'));

        // lembrete de backup
        var rem = LUX.profiles.backupReminder(p);
        if (rem) main.appendChild(LUX.app.backupBanner(p, rem));

        // continuar
        var curId = L.current(p);
        var cur = curId ? LUX.data.lessons[curId] : null;
        var ord = L.path(p);
        var allDone = ord.length && ord.every(function (id) { return p.progress[id] && p.progress[id].status === 'done'; });
        var pendingTest = allDone && LUX.manifest.levels.filter(function (lv) { return LUX.levelTests.isUnlocked(p, lv.id) && !(p.levelTests[lv.id] && p.levelTests[lv.id].passed); })[0];
        if (pendingTest) {
          main.appendChild(h('section', { class: 'card continue' }, [
            h('div', null, [h('div', { class: 'muted sm' }, 'Você concluiu todas as lições do nível!'), h('h2', null, '🎓 Teste de nível ' + pendingTest.id), h('p', { class: 'muted' }, 'Leitura, audição e gramática — com certificado no fim.')]),
            h('a', { class: 'btn primary big', href: '#/teste/' + pendingTest.id }, 'Fazer o teste →')
          ]));
        } else if (cur) {
          main.appendChild(h('section', { class: 'card continue' }, [
            h('div', null, [h('div', { class: 'muted sm' }, allDone ? 'Você concluiu todas as lições disponíveis!' : 'Continuar de onde parou'),
              h('h2', { lang: 'fr' }, cur.title), h('p', { class: 'muted' }, cur.level + ' · Unidade ' + cur.unit + ' · ' + cur.titlePt)]),
            h('a', { class: 'btn primary big', href: '#/licao/' + cur.id }, allDone ? 'Rever lição' : 'Continuar →')
          ]));
        }

        // números
        var due = LUX.srs.dueCount(p);
        var rec = bestDrill(p);
        main.appendChild(h('div', { class: 'stats' }, [
          stat('🔥', LUX.profiles.streakNow(p), LUX.profiles.streakNow(p) === 1 ? 'dia seguido' : 'dias seguidos'),
          stat('⏱️', U.fmtDuration(p.studySeconds), 'estudados'),
          stat('🔁', due, due === 1 ? 'cartão para hoje' : 'cartões para hoje', '#/revisar'),
          stat('✅', LUX.profiles.completedCount(p), 'lições concluídas'),
          stat('🎧', rec ? rec + '/10' : '—', 'recorde no treino', '#/treino')
        ]));
        main.appendChild(h('div', { class: 'card quick' }, [
          h('div', null, [h('b', null, '🎧 Treinar 2 minutos'), h('p', { class: 'muted sm' }, 'Números, horas e datas de ouvido — o maior desafio de quem fala português.')]),
          h('a', { class: 'btn', href: '#/treino/aquecimento' }, 'Começar')
        ]));

        // últimas notas
        var recent = Object.keys(p.progress).map(function (id) { return { id: id, r: p.progress[id] }; })
          .filter(function (x) { return LUX.data.lessons[x.id]; })
          .sort(function (a, b) { return (b.r.updatedAt || '') < (a.r.updatedAt || '') ? -1 : 1; }).slice(0, 4);
        if (recent.length) {
          main.appendChild(h('section', { class: 'card' }, [h('h2', null, 'Últimas notas'), h('ul', { class: 'recent-list' }, recent.map(function (x) {
            var l = LUX.data.lessons[x.id];
            return h('li', null, [h('a', { href: '#/licao/' + l.id, lang: 'fr' }, l.title), h('span', { class: 'muted sm' }, ' · ' + U.fmtDate(x.r.updatedAt)), h('span', { class: 'score ' + (x.r.best >= 0.7 ? 'ok' : 'low') }, Math.round(x.r.best * 100) + '%')]);
          }))]));
        }

        // mapa do curso
        main.appendChild(h('h2', { class: 'section-title' }, 'Mapa do curso'));
        var openUnit = params.query.u || null;
        LUX.manifest.levels.forEach(function (lv) {
          var ids = []; lv.units.forEach(function (u) { ids = ids.concat(u.lessons.filter(function (id) { return LUX.data.lessons[id]; })); });
          var doneN = ids.filter(function (id) { return p.progress[id] && p.progress[id].status === 'done'; }).length;
          var total = lv.units.length * 5;
          var sec = h('section', { class: 'card level' });
          sec.appendChild(h('div', { class: 'row between wrap' }, [h('h2', null, lv.title), h('span', { class: 'muted sm' }, doneN + ' de ' + total + ' lições')]));
          sec.appendChild(UI.progress(total ? doneN / total * 100 : 0, 'Progresso no nível ' + lv.id));
          var skipped = ids.length && L.order().indexOf(ids[0]) < L.startIndex(p);
          if (skipped) sec.appendChild(h('p', { class: 'muted sm' }, 'Você começou no ' + p.settings.startLevel + ', então este nível é opcional: todas as lições estão abertas para revisar. (Dá para mudar o ponto de partida em Perfil e configurações.)'));
          var units = h('div', { class: 'units' });
          lv.units.forEach(function (u) {
            var avail = u.lessons.filter(function (id) { return LUX.data.lessons[id]; });
            var uDone = avail.filter(function (id) { return p.progress[id] && p.progress[id].status === 'done'; }).length;
            var det = h('details', { class: 'unit' + (avail.length ? '' : ' soon') });
            var key = lv.id + '-' + u.n;
            if (openUnit === key || (avail.indexOf(curId) >= 0 && !openUnit)) det.open = true;
            det.appendChild(h('summary', null, [
              h('span', { class: 'unit-n' }, 'U' + u.n),
              h('span', { class: 'unit-t' }, [h('b', null, u.title), h('span', { class: 'muted sm' }, u.grammar)]),
              avail.length ? h('span', { class: 'unit-p' }, [UI.progress(uDone / 5 * 100), h('span', { class: 'muted sm' }, uDone + '/5')]) : h('span', { class: 'soon-tag' }, 'em breve')
            ]));
            if (avail.length) {
              var ul = h('ol', { class: 'lesson-list' });
              avail.forEach(function (id) {
                var l = LUX.data.lessons[id], st = p.progress[id], unlocked = L.isUnlocked(p, id);
                var state = st && st.status === 'done' ? 'done' : unlocked ? 'open' : 'locked';
                var icon = state === 'done' ? '✅' : state === 'open' ? (id === curId ? '▶️' : '⭕') : '🔒';
                var inner = [h('span', { class: 'l-ico', 'aria-hidden': 'true' }, icon), h('span', { class: 'l-t' }, [h('b', { lang: 'fr' }, l.title), h('span', { class: 'muted sm' }, l.titlePt)]),
                  st ? h('span', { class: 'score ' + (st.best >= 0.7 ? 'ok' : 'low') }, Math.round(st.best * 100) + '%') : null];
                ul.appendChild(h('li', { class: 'lesson-li ' + state }, unlocked ? h('a', { href: '#/licao/' + id }, inner) : h('div', { title: 'Conclua a lição anterior com 70% para desbloquear' }, inner)));
              });
              det.appendChild(ul);
            } else {
              det.appendChild(h('p', { class: 'muted soon-text' }, 'Esta unidade chega numa próxima fase do curso.'));
            }
            units.appendChild(det);
          });
          sec.appendChild(units);
          sec.appendChild(levelTestRow(p, lv.id));
          main.appendChild(sec);
        });
      }
    };
  });

  function levelTestRow(p, level) {
    var T = LUX.levelTests;
    if (!T.available(level)) return h('div', { class: 'level-test muted sm' }, '🎓 Teste de nível ' + level + ' — disponível quando todas as unidades do nível estiverem prontas.');
    var rec = p.levelTests[level];
    if (rec && rec.passed) return h('div', { class: 'level-test passed' }, [h('span', null, '🎓 Teste de nível ' + level + ' — aprovado(a) com ' + Math.round((rec.cert ? rec.cert.score : rec.best) * 100) + '%'),
      h('a', { class: 'btn sm', href: '#/teste/' + level + '?cert=1' }, '📜 Certificado')]);
    if (!T.isUnlocked(p, level)) {
      var ids = T.lessonsOf(level), done = ids.filter(function (id) { return p.progress[id] && p.progress[id].status === 'done'; }).length;
      return h('div', { class: 'level-test muted sm' }, '🔒 Teste de nível ' + level + ' — libera quando você concluir as ' + ids.length + ' lições do nível (' + done + '/' + ids.length + ').');
    }
    return h('div', { class: 'level-test ready' }, [h('span', null, '🎓 Teste de nível ' + level + (rec ? ' — melhor nota: ' + Math.round(rec.best * 100) + '%' : ' — liberado!')),
      h('a', { class: 'btn primary sm', href: '#/teste/' + level }, rec ? 'Refazer' : 'Fazer o teste')]);
  }

  function bestDrill(p) {
    var b = 0;
    Object.keys(p.drills.records).forEach(function (k) { b = Math.max(b, p.drills.records[k].best || 0); });
    return b;
  }
})(window);
