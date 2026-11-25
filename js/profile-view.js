/* LUX — Perfil e configurações: perfis, preferências, armazenamento e backup. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, h = U.h, UI = LUX.ui, P = LUX.profiles, S = LUX.store;

  function field(label, control, help) {
    return h('label', { class: 'field' }, [h('span', { class: 'field-l' }, label), control, help ? h('span', { class: 'field-h muted sm' }, help) : null]);
  }

  LUX.router.add('/perfil', function (params) {
    return {
      title: 'Perfil e configurações', nav: 'perfil', crumbs: [['Meu espaço', null], ['Perfil e configurações', null]],
      render: function (main) {
        var p = P.current();
        main.appendChild(UI.pageHead('Perfil e configurações', 'Cada pessoa tem o próprio perfil, com progresso, revisão, caderno e preferências separados.'));
        main.appendChild(profilesCard(p));
        main.appendChild(settingsCard(p));
        main.appendChild(storageCard(p));
        if (LUX.pwa) main.appendChild(LUX.pwa.card());
        var sec = params.query && params.query.sec && document.getElementById(params.query.sec);
        if (sec) setTimeout(function () { sec.scrollIntoView({ block: 'start' }); }, 50);
      }
    };
  });

  /* ---------- perfis ---------- */
  function profilesCard(cur) {
    var c = h('section', { class: 'card', id: 'perfis' }, [h('div', { class: 'row between wrap' }, [h('h2', null, '👥 Perfis'), h('button', { class: 'btn primary', onclick: function () { LUX.app.newProfileDialog(); } }, '＋ Novo perfil')])]);
    var list = h('div', { class: 'profile-list' });
    P.list().forEach(function (p) {
      var isCur = p.id === cur.id;
      list.appendChild(h('div', { class: 'profile-row' + (isCur ? ' current' : '') }, [
        h('span', { class: 'avatar big', style: { background: p.color } }, p.avatar),
        h('div', { class: 'grow' }, [h('b', null, p.name + (isCur ? ' (atual)' : '')), h('div', { class: 'muted sm' }, P.completedCount(p) + ' lições · ' + Object.keys(p.notebook).length + ' palavras no caderno · ' + U.fmtDuration(p.studySeconds) + ' de estudo · último backup: ' + (p.lastBackupAt ? U.fmtDate(p.lastBackupAt) : 'nunca'))]),
        h('div', { class: 'row gap wrap' }, [
          isCur ? null : h('button', { class: 'btn sm', onclick: function () { LUX.app.switchProfile(p.id); } }, 'Trocar para este'),
          h('button', { class: 'btn sm ghost', onclick: function () { editProfile(p); } }, 'Editar'),
          h('button', { class: 'btn sm ghost danger-text', onclick: function () { deleteProfile(p); } }, 'Excluir')
        ])
      ]));
    });
    c.appendChild(list);
    return c;
  }

  LUX.app = LUX.app || {};
  /* diálogo de criação/edição (nome + avatar + cor) */
  function profileForm(init) {
    var name = h('input', { class: 'input', type: 'text', maxlength: 30, value: init.name || '', placeholder: 'Ex.: Ana, Pedro…', 'aria-label': 'Nome' });
    var sel = { avatar: init.avatar || P.AVATARS[0], color: init.color || P.COLORS[0] };
    var preview = h('span', { class: 'avatar big', style: { background: sel.color } }, sel.avatar);
    var av = h('div', { class: 'avatar-pick', role: 'radiogroup', 'aria-label': 'Avatar' });
    P.AVATARS.forEach(function (a) {
      av.appendChild(h('button', { type: 'button', class: 'av-opt' + (a === sel.avatar ? ' on' : ''), 'aria-label': 'Avatar ' + a, onclick: function (e) {
        sel.avatar = a; preview.textContent = a; [].forEach.call(av.children, function (x) { x.classList.remove('on'); }); e.currentTarget.classList.add('on');
      } }, a));
    });
    var co = h('div', { class: 'color-pick', role: 'radiogroup', 'aria-label': 'Cor' });
    P.COLORS.forEach(function (c) {
      co.appendChild(h('button', { type: 'button', class: 'co-opt' + (c === sel.color ? ' on' : ''), style: { background: c }, 'aria-label': 'Cor ' + c, onclick: function (e) {
        sel.color = c; preview.style.background = c; [].forEach.call(co.children, function (x) { x.classList.remove('on'); }); e.currentTarget.classList.add('on');
      } }));
    });
    var el = h('div', { class: 'stack' }, [h('div', { class: 'row gap' }, [preview, field('Nome', name)]), h('div', null, [h('span', { class: 'field-l' }, 'Avatar'), av]), h('div', null, [h('span', { class: 'field-l' }, 'Cor'), co])]);
    return { el: el, name: name, sel: sel };
  }
  LUX.app.profileForm = profileForm;

  LUX.app.newProfileDialog = function () {
    var f = profileForm({ color: P.COLORS[P.list().length % P.COLORS.length], avatar: P.AVATARS[P.list().length % P.AVATARS.length] });
    UI.modal({
      title: 'Novo perfil', body: f.el, actions: [
        { label: 'Cancelar', ghost: true },
        { label: 'Criar e trocar', primary: true, onClick: function () {
          if (!f.name.value.trim()) { f.name.focus(); UI.toast('Digite um nome.'); return false; }
          var p = P.create(f.name.value, f.sel.avatar, f.sel.color);
          LUX.app.switchProfile(p.id);
        } }
      ]
    });
  };
  function editProfile(p) {
    var f = profileForm(p);
    UI.modal({
      title: 'Editar perfil', body: f.el, actions: [
        { label: 'Cancelar', ghost: true },
        { label: 'Salvar', primary: true, onClick: function () {
          if (!f.name.value.trim()) { f.name.focus(); return false; }
          P.rename(p.id, f.name.value); P.setAvatar(p.id, f.sel.avatar, f.sel.color);
          LUX.sidebar.render(); LUX.router.render();
        } }
      ]
    });
  }
  function deleteProfile(p) {
    var inp = h('input', { class: 'input', type: 'text', 'aria-label': 'Digite o nome do perfil para confirmar', placeholder: p.name });
    UI.modal({
      title: 'Excluir o perfil "' + p.name + '"?',
      body: h('div', { class: 'stack' }, [
        h('p', { html: 'Isto apaga <b>todo o progresso</b>, a revisão e o caderno de <b>' + U.esc(p.name) + '</b> neste navegador. Não dá para desfazer.' }),
        h('p', { class: 'muted sm' }, 'Dica: exporte um backup antes, por segurança.'),
        h('button', { class: 'btn sm', onclick: function () { P.download([p.id]); UI.toast('Backup baixado.', 'ok'); } }, '⬇ Exportar backup deste perfil'),
        field('Para confirmar, digite o nome do perfil:', inp)
      ]),
      actions: [
        { label: 'Cancelar', ghost: true },
        { label: 'Excluir definitivamente', danger: true, onClick: function () {
          if (inp.value.trim() !== p.name) { inp.focus(); UI.toast('O nome digitado não confere.'); return false; }
          P.remove(p.id);
          UI.toast('Perfil excluído.');
          if (!P.list().length) { LUX.app.boot(); return; }
          LUX.app.switchProfile(S.state.lastProfileId);
        } }
      ]
    });
  }

  /* ---------- preferências ---------- */
  function settingsCard(p) {
    var s = p.settings;
    var c = h('section', { class: 'card' }, [h('h2', null, '⚙ Preferências de ' + p.name)]);
    // voz
    var voiceSel = h('select', { class: 'select', 'aria-label': 'Voz' });
    function fillVoices() {
      voiceSel.innerHTML = '';
      if (!LUX.tts.voices.length) voiceSel.appendChild(h('option', { value: '' }, LUX.tts.supported ? 'Nenhuma voz francesa encontrada' : 'Síntese de voz indisponível'));
      LUX.tts.voices.forEach(function (v) {
        var o = h('option', { value: v.voiceURI }, v.name + ' (' + v.lang + ')' + (/natural|online|neural/i.test(v.name) ? ' ★' : ''));
        if (v.voiceURI === s.voiceURI) o.selected = true;
        voiceSel.appendChild(o);
      });
    }
    fillVoices();
    LUX.tts.onVoices(fillVoices);
    voiceSel.addEventListener('change', function () { s.voiceURI = voiceSel.value; S.save(); });
    var sample = h('button', { class: 'btn sm', onclick: function () { LUX.tts.speak('Bonjour ! Je suis la voix de votre cours de français.'); } }, '▶ Ouvir amostra');
    c.appendChild(field('Voz francesa', h('div', { class: 'row gap wrap' }, [voiceSel, sample]), 'As vozes marcadas com ★ são as "naturais" (melhor qualidade). No Windows, o Microsoft Edge costuma ter as melhores.'));
    if (!LUX.tts.voices.length) c.appendChild(LUX.app.noVoiceHelp());
    // velocidade
    var rate = h('select', { class: 'select', 'aria-label': 'Velocidade padrão' });
    [[0.6, '0,6× (bem devagar)'], [0.8, '0,8× (A2)'], [0.9, '0,9× (B1)'], [1, '1× (B2, natural)'], [1.15, '1,15× (rápido)']].forEach(function (r) {
      var o = h('option', { value: r[0] }, r[1]); if (Math.abs(s.rate - r[0]) < 0.01) o.selected = true; rate.appendChild(o);
    });
    rate.addEventListener('change', function () { s.rate = +rate.value; S.save(); });
    c.appendChild(field('Velocidade padrão da voz', rate));
    // nível
    var lv = h('select', { class: 'select', 'aria-label': 'Seu nível' }, ['A2', 'B1', 'B2'].map(function (x) { var o = h('option', { value: x }, x); if (s.level === x) o.selected = true; return o; }));
    lv.addEventListener('change', function () { s.level = lv.value; S.save(); });
    c.appendChild(field('Seu nível atual', lv, 'Define quais tempos verbais aparecem abertos na aba Verbos e a faixa do aquecimento.'));
    // tema
    var th = h('select', { class: 'select', 'aria-label': 'Tema' }, [['auto', 'Automático (do sistema)'], ['light', 'Claro'], ['dark', 'Escuro']].map(function (x) { var o = h('option', { value: x[0] }, x[1]); if (s.theme === x[0]) o.selected = true; return o; }));
    th.addEventListener('change', function () { s.theme = th.value; S.save(); LUX.app.applyTheme(); });
    c.appendChild(field('Tema', th));
    // interruptores
    c.appendChild(toggle('Mostrar traduções dos exemplos', s.showTranslation, function (v) { s.showTranslation = v; }, 'Desligado, a tradução aparece só quando você clica nela.'));
    c.appendChild(toggle('Erro só de acento vale nota cheia', s.accentFull, function (v) { s.accentFull = v; }, 'Por padrão, uma resposta certa mas com acento errado vale meia nota.'));
    c.appendChild(toggle('Oferecer aquecimento antes das lições', s.warmup, function (v) { s.warmup = v; }));
    // backup
    var bi = h('select', { class: 'select', 'aria-label': 'Lembrete de backup' }, [[3, 'a cada 3 dias'], [7, 'a cada 7 dias'], [14, 'a cada 14 dias'], [30, 'a cada 30 dias'], [0, 'desligado']].map(function (x) { var o = h('option', { value: x[0] }, x[1]); if (s.backupIntervalDays === x[0]) o.selected = true; return o; }));
    bi.addEventListener('change', function () { s.backupIntervalDays = +bi.value; S.save(); });
    c.appendChild(field('Lembrete de backup', bi));
    // desbloquear tudo
    var ub = h('button', { class: 'btn sm ' + (p.unlockedAll ? '' : 'ghost') }, p.unlockedAll ? '🔓 Tudo desbloqueado — bloquear de novo' : '🔓 Desbloquear todas as lições');
    ub.addEventListener('click', function () {
      if (p.unlockedAll) { p.unlockedAll = false; S.save(); LUX.router.render(); return; }
      UI.confirm('Desbloquear **todas** as lições? Indicado para quem já tem nível e quer pular etapas.', { ok: 'Desbloquear' }).then(function (ok) {
        if (ok) { p.unlockedAll = true; S.save(); UI.toast('Todas as lições foram desbloqueadas.', 'ok'); LUX.router.render(); }
      });
    });
    c.appendChild(field('Lições', ub));
    return c;
  }
  function toggle(label, value, onChange, help) {
    var inp = h('input', { type: 'checkbox' });
    inp.checked = !!value;
    inp.addEventListener('change', function () { onChange(inp.checked); S.save(); });
    return h('div', { class: 'field' }, [h('label', { class: 'switch' }, [inp, h('span', null, label)]), help ? h('span', { class: 'field-h muted sm' }, help) : null]);
  }

  /* ---------- armazenamento e backup ---------- */
  function storageCard(p) {
    var c = h('section', { class: 'card', id: 'backup' }, [h('h2', null, '💾 Armazenamento e backup')]);
    var ok = S.test();
    var status = h('ul', { class: 'status-list' }, [
      h('li', null, [ok ? '✅ ' : '❌ ', h('b', null, 'Salvamento: '), ok ? 'este navegador está salvando seu progresso.' : 'este navegador NÃO está conseguindo salvar.']),
      h('li', { id: 'persist-li' }, '… verificando armazenamento persistente'),
      h('li', { id: 'usage-li' }, [h('b', null, 'Espaço usado: '), formatBytes(S.sizeBytes()) + ' de ~5 MB']),
      h('li', null, [h('b', null, 'Últimos backups: '), P.list().map(function (x) { return x.name + ': ' + (x.lastBackupAt ? U.fmtDate(x.lastBackupAt) : 'nunca'); }).join(' · ')])
    ]);
    c.appendChild(status);
    S.requestPersist().then(function (st) {
      var li = document.getElementById('persist-li'); if (!li) return;
      li.innerHTML = '';
      li.appendChild(h('span', null, st === 'granted' ? '✅ ' : st === 'denied' ? '⚠️ ' : 'ℹ️ '));
      li.appendChild(h('b', null, 'Armazenamento persistente: '));
      li.appendChild(document.createTextNode(st === 'granted' ? 'sim — o navegador não vai apagar os dados para liberar espaço.' : st === 'denied' ? 'não concedido — o navegador pode apagar os dados se faltar espaço. Faça backups.' : 'não suportado neste navegador (ou ao abrir como arquivo).'));
    });
    S.estimate().then(function (est) {
      var li = document.getElementById('usage-li'); if (!li || !est) return;
      var used = S.sizeBytes();
      var pct = used / S.LOCAL_QUOTA * 100;
      li.innerHTML = '';
      li.appendChild(h('b', null, 'Espaço usado: '));
      li.appendChild(document.createTextNode(formatBytes(used) + ' de ~5 MB (' + pct.toFixed(1) + '%)'));
      if (pct > 80) li.appendChild(h('div', { class: 'banner warn' }, 'Atenção: o armazenamento está acima de 80%. Exporte um backup e considere limpar o histórico.'));
    });
    if (S.isFirefoxFile()) c.appendChild(h('div', { class: 'banner warn' }, '⚠ Você está usando o Firefox abrindo o curso como arquivo. Se mover ou renomear a pasta do curso, os dados podem "sumir". Exporte backups com frequência, ou use Chrome/Edge.'));

    // exportar
    c.appendChild(h('h3', null, 'Exportar'));
    c.appendChild(h('div', { class: 'row gap wrap' }, [
      h('button', { class: 'btn primary', onclick: function () { P.download([p.id]); UI.toast('Backup de ' + p.name + ' baixado.', 'ok'); LUX.router.render(); } }, '⬇ Exportar ' + p.name),
      P.list().length > 1 ? h('button', { class: 'btn', onclick: function () { P.download(S.state.order.slice()); UI.toast('Backup de todos os perfis baixado.', 'ok'); LUX.router.render(); } }, '⬇ Exportar todos os perfis') : null
    ]));
    // importar
    c.appendChild(h('h3', null, 'Importar'));
    var file = h('input', { type: 'file', accept: '.json,application/json', class: 'file', 'aria-label': 'Escolher arquivo de backup' });
    file.addEventListener('change', function () { if (file.files[0]) LUX.app.importFile(file.files[0]); file.value = ''; });
    c.appendChild(h('label', { class: 'btn' }, ['⬆ Escolher arquivo de backup…', file]));
    // teste de persistência
    c.appendChild(h('h3', null, 'Testar se meus dados são mantidos'));
    c.appendChild(h('p', { class: 'muted' }, 'Útil em computadores do trabalho: alguns apagam os dados do navegador ao fechar.'));
    c.appendChild(h('button', { class: 'btn', onclick: function () {
      if (!S.startPersistTest()) { UI.toast('Não foi possível gravar o teste: o navegador está bloqueando o armazenamento.', 'bad'); return; }
      try { sessionStorage.setItem('lux-fr:persist-session', '1'); } catch (e) { }
      UI.modal({
        title: 'Teste iniciado', body: h('div', { class: 'stack' }, [
          h('p', null, 'Agora:'),
          h('ol', null, [h('li', null, 'Feche o navegador por completo (todas as janelas).'), h('li', null, 'Abra o navegador de novo e abra o curso.')]),
          h('p', { html: 'Se aparecer <b>"✅ Seus dados estão sendo mantidos"</b>, está tudo certo. Se aparecer a tela de boas-vindas sem os perfis, este navegador apaga os dados ao fechar — nesse caso, use outro navegador ou exporte o backup sempre ao terminar de estudar.' })
        ]), actions: [{ label: 'Entendi', primary: true }]
      });
    } }, '🧪 Iniciar o teste'));
    // como levar para outro computador
    c.appendChild(h('details', { class: 'howto' }, [h('summary', null, 'Como levar o progresso para outro computador'), h('ol', null, [
      h('li', null, 'Copie a pasta inteira do curso para o outro computador (pendrive, Google Drive, OneDrive...).'),
      h('li', null, 'Neste computador: clique em "Exportar" acima. Um arquivo .json será baixado.'),
      h('li', null, 'Envie esse arquivo para o outro computador (e-mail, WhatsApp, pendrive).'),
      h('li', null, 'No outro computador: abra o index.html do curso, vá em Perfil e configurações › Importar e escolha o arquivo.'),
      h('li', null, 'Escolha "Mesclar" para juntar com o que já existe lá, ou "Substituir" para deixar igual ao arquivo.')
    ])]));
    return c;
  }
  function formatBytes(b) { return b < 1024 ? b + ' B' : b < 1048576 ? (b / 1024).toFixed(1) + ' KB' : (b / 1048576).toFixed(2) + ' MB'; }
})(window);
