/* LUX — perfis: criar, trocar, renomear, excluir, streak, tempo de estudo, backup (exportar/importar/mesclar). */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util, S = LUX.store;
  var P = LUX.profiles = {};

  P.AVATARS = ['🦊', '🐱', '🐶', '🦉', '🐼', '🐸', '🦁', '🐧', '🐙', '🦋', '🌻', '🍀', '🥐', '🧀', '🚲', '🎨'];
  P.COLORS = ['#3b6fd8', '#d8553b', '#2f9e6e', '#9b59b6', '#e0a526', '#e05297', '#1f8fa8', '#6b7a8f'];

  P.defaultSettings = function () {
    return {
      voiceURI: '', rate: 0.8, showTranslation: true, theme: 'auto', level: 'A2', startLevel: 'A1',
      accentFull: false, warmup: true, backupIntervalDays: 7
    };
  };

  P.normalize = function (p) {
    // perfis criados antes do A1 existir começaram no A2: o A1 fica opcional para eles
    if (p.settings && !p.settings.startLevel) p.settings.startLevel = 'A2';
    p.settings = Object.assign(P.defaultSettings(), p.settings || {});
    p.progress = p.progress || {};
    p.proCourses = p.proCourses || {}; // cursos do Profissional: { id: { modules: { mId: {best, last, attempts, updatedAt} } } }
    p.srs = p.srs || {};
    p.streak = p.streak || { current: 0, best: 0, lastDay: null };
    p.studySeconds = p.studySeconds || 0;
    p.verbs = p.verbs || { recent: [], fav: [] };
    p.notebook = p.notebook || {};
    p.drills = p.drills || { records: {}, history: [] };
    p.nav = p.nav || {};
    p.lastBackupAt = p.lastBackupAt || null;
    p.backupSnoozeUntil = p.backupSnoozeUntil || null;
    p.unlockedAll = !!p.unlockedAll;
    p.activityDays = p.activityDays || [];
    p.levelTests = p.levelTests || {};
    return p;
  };

  P.list = function () {
    var st = S.state;
    return st.order.map(function (id) { return st.profiles[id]; }).filter(Boolean);
  };
  P.get = function (id) { return S.state.profiles[id] || null; };
  P.current = function () {
    var st = S.state;
    return (st.lastProfileId && st.profiles[st.lastProfileId]) || null;
  };

  P.create = function (name, avatar, color, startLevel) {
    var p = P.normalize({
      id: U.uid('p'), name: String(name).trim() || 'Aluno', avatar: avatar || P.AVATARS[0],
      color: color || P.COLORS[S.state.order.length % P.COLORS.length], createdAt: new Date().toISOString()
    });
    P.setStartLevel(p, startLevel || 'A1');
    S.state.profiles[p.id] = p;
    S.state.order.push(p.id);
    S.state.lastProfileId = p.id;
    S.save(true);
    return p;
  };
  /* ponto de partida no curso: A1 (nunca estudou) ou A2 (já sabe o básico). Ajusta o nível e a velocidade da voz. */
  P.setStartLevel = function (p, lv) {
    p.settings.startLevel = lv;
    if (lv === 'A1') { p.settings.level = 'A1'; if (p.settings.rate === 0.8) p.settings.rate = 0.7; }
    else if (p.settings.level === 'A1') { p.settings.level = 'A2'; if (p.settings.rate === 0.7) p.settings.rate = 0.8; }
  };
  P.switchTo = function (id) {
    if (!S.state.profiles[id]) return;
    S.state.lastProfileId = id;
    S.save(true);
  };
  P.rename = function (id, name) { var p = P.get(id); if (p && name.trim()) { p.name = name.trim(); S.save(); } };
  P.setAvatar = function (id, avatar, color) { var p = P.get(id); if (!p) return; if (avatar) p.avatar = avatar; if (color) p.color = color; S.save(); };
  P.remove = function (id) {
    delete S.state.profiles[id];
    S.state.order = S.state.order.filter(function (x) { return x !== id; });
    if (S.state.lastProfileId === id) S.state.lastProfileId = S.state.order[0] || null;
    S.save(true);
  };

  /* ---------- atividade: streak, dias ativos, tempo ---------- */
  P.markActivity = function (p) {
    p = p || P.current(); if (!p) return;
    var today = U.todayStr();
    if (p.streak.lastDay !== today) {
      if (p.streak.lastDay && U.daysBetween(p.streak.lastDay, today) === 1) p.streak.current += 1;
      else p.streak.current = 1;
      p.streak.lastDay = today;
      p.streak.best = Math.max(p.streak.best, p.streak.current);
    }
    if (p.activityDays.indexOf(today) < 0) { p.activityDays.push(today); if (p.activityDays.length > 120) p.activityDays.shift(); }
    S.save();
  };
  P.streakNow = function (p) {
    if (!p.streak.lastDay) return 0;
    var d = U.daysBetween(p.streak.lastDay, U.todayStr());
    return d <= 1 ? p.streak.current : 0;
  };
  P.addStudyTime = function (sec) { var p = P.current(); if (p) { p.studySeconds += sec; S.save(); } };

  /* ---------- progresso de lições ---------- */
  P.lessonState = function (p, id) { return p.progress[id] || null; };
  P.saveLessonResult = function (p, id, score, answers) {
    var prev = p.progress[id] || { attempts: 0, best: 0 };
    var rec = {
      attempts: prev.attempts + 1,
      best: Math.max(prev.best || 0, score),
      last: score,
      status: (Math.max(prev.best || 0, score) >= 0.7) ? 'done' : 'tried',
      completedAt: score >= 0.7 ? new Date().toISOString() : prev.completedAt || null,
      updatedAt: new Date().toISOString(),
      answers: answers || prev.answers || null
    };
    p.progress[id] = rec;
    P.markActivity(p);
    S.save();
    return rec;
  };
  P.saveLevelTest = function (p, level, score, sections, passed) {
    var prev = p.levelTests[level] || { attempts: 0, best: 0 };
    var better = score >= (prev.best || 0);
    var rec = {
      attempts: (prev.attempts || 0) + 1, best: Math.max(prev.best || 0, score), last: score,
      sections: better ? sections : prev.sections, passed: !!(prev.passed || passed),
      passedAt: prev.passedAt || (passed ? new Date().toISOString() : null),
      bestAt: better ? new Date().toISOString() : prev.bestAt, updatedAt: new Date().toISOString(),
      cert: passed && (!prev.cert || score > prev.cert.score) ? { score: score, sections: sections, at: new Date().toISOString() } : prev.cert || null
    };
    p.levelTests[level] = rec;
    P.markActivity(p);
    S.save();
    return rec;
  };
  P.completedCount = function (p) {
    return Object.keys(p.progress).filter(function (k) { return p.progress[k].status === 'done'; }).length;
  };

  /* ---------- backup ---------- */
  P.exportData = function (ids) {
    var profiles = ids.map(P.get).filter(Boolean).map(function (p) { return JSON.parse(JSON.stringify(p)); });
    return {
      app: 'lux-frances', schema: S.SCHEMA, exportedAt: new Date().toISOString(),
      profiles: profiles
    };
  };
  P.backupFilename = function (ids) {
    var names = ids.length === 1 ? U.norm(P.get(ids[0]).name).replace(/[^a-z0-9]+/g, '-') : 'todos';
    return 'lux-backup-' + names + '-' + U.todayStr() + '.json';
  };
  P.download = function (ids) {
    var data = P.exportData(ids);
    var blob = new Blob([JSON.stringify(data, null, 1)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = P.backupFilename(ids);
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    var now = new Date().toISOString();
    ids.forEach(function (id) { var p = P.get(id); if (p) { p.lastBackupAt = now; p.backupSnoozeUntil = null; } });
    S.save(true);
  };

  /* lê e valida um arquivo de backup; devolve {ok, data, summary[], error} */
  P.parseBackup = function (text) {
    var data;
    try { data = JSON.parse(text); } catch (e) { return { ok: false, error: 'O arquivo não é um JSON válido.' }; }
    if (!data || data.app !== 'lux-frances' || !Array.isArray(data.profiles)) return { ok: false, error: 'Este arquivo não parece ser um backup do curso.' };
    if (data.schema > S.SCHEMA) return { ok: false, error: 'Este backup foi feito por uma versão mais nova do curso. Atualize os arquivos do curso.' };
    var summary = data.profiles.map(function (p) {
      P.normalize(p);
      return {
        id: p.id, name: p.name, avatar: p.avatar,
        lessons: P.completedCount(p), words: Object.keys(p.notebook).length, cards: Object.keys(p.srs).length,
        exists: !!(S.state.profiles[p.id] || findByName(p.name))
      };
    });
    return { ok: true, data: data, summary: summary };
  };
  function findByName(name) {
    var n = U.norm(name);
    return P.list().filter(function (p) { return U.norm(p.name) === n; })[0] || null;
  }

  /* mode: 'replace' | 'merge' */
  P.importBackup = function (data, mode) {
    data.profiles.forEach(function (inc) {
      P.normalize(inc);
      var existing = S.state.profiles[inc.id] || findByName(inc.name);
      if (!existing) {
        S.state.profiles[inc.id] = inc;
        if (S.state.order.indexOf(inc.id) < 0) S.state.order.push(inc.id);
        return;
      }
      if (mode === 'replace') {
        var keepId = existing.id;
        inc.id = keepId;
        S.state.profiles[keepId] = inc;
        return;
      }
      mergeInto(existing, inc);
    });
    if (!S.state.lastProfileId) S.state.lastProfileId = S.state.order[0];
    S.save(true);
  };

  function later(a, b) { return (a || '') >= (b || '') ? a : b; }
  function mergeInto(a, b) {
    // lições: melhor nota e data mais recente
    Object.keys(b.progress).forEach(function (id) {
      var x = a.progress[id], y = b.progress[id];
      if (!x) { a.progress[id] = y; return; }
      var best = Math.max(x.best || 0, y.best || 0);
      a.progress[id] = {
        attempts: Math.max(x.attempts || 0, y.attempts || 0), best: best,
        last: (x.updatedAt || '') >= (y.updatedAt || '') ? x.last : y.last,
        status: best >= 0.7 ? 'done' : 'tried',
        completedAt: later(x.completedAt, y.completedAt), updatedAt: later(x.updatedAt, y.updatedAt),
        answers: (x.updatedAt || '') >= (y.updatedAt || '') ? x.answers : y.answers
      };
    });
    // cursos do Profissional: melhor nota de cada módulo
    Object.keys(b.proCourses || {}).forEach(function (cid) {
      var ca = a.proCourses[cid] = a.proCourses[cid] || { modules: {} }, mb = (b.proCourses[cid] || {}).modules || {};
      Object.keys(mb).forEach(function (m) {
        var x = ca.modules[m], y = mb[m];
        if (!x) { ca.modules[m] = y; return; }
        ca.modules[m] = { attempts: Math.max(x.attempts || 0, y.attempts || 0), best: Math.max(x.best || 0, y.best || 0),
          last: (x.updatedAt || '') >= (y.updatedAt || '') ? x.last : y.last, updatedAt: later(x.updatedAt, y.updatedAt) };
      });
    });
    // testes de nível: melhor resultado
    Object.keys(b.levelTests || {}).forEach(function (lv) {
      var x = a.levelTests[lv], y = b.levelTests[lv];
      if (!x || (y.best || 0) > (x.best || 0)) a.levelTests[lv] = y;
      else a.levelTests[lv].attempts = Math.max(x.attempts || 0, y.attempts || 0);
    });
    // SRS: estado de revisão mais recente de cada cartão
    Object.keys(b.srs).forEach(function (id) {
      var x = a.srs[id], y = b.srs[id];
      if (!x || (y.last || y.added || '') > (x.last || x.added || '')) a.srs[id] = y;
    });
    // caderno: união (anotação mais recente)
    Object.keys(b.notebook).forEach(function (k) {
      var x = a.notebook[k], y = b.notebook[k];
      if (!x || (y.updatedAt || y.addedAt || '') > (x.updatedAt || x.addedAt || '')) a.notebook[k] = y;
    });
    // verbos: união
    a.verbs.fav = union(a.verbs.fav, b.verbs.fav);
    a.verbs.recent = union(a.verbs.recent, b.verbs.recent).slice(0, 15);
    // treino de ouvido: recordes máximos, histórico unido
    Object.keys(b.drills.records).forEach(function (k) {
      var x = a.drills.records[k], y = b.drills.records[k];
      if (!x || y.best > x.best) a.drills.records[k] = y;
    });
    var seen = {};
    a.drills.history = a.drills.history.concat(b.drills.history).filter(function (h) {
      var key = h.at + h.mode; if (seen[key]) return false; seen[key] = 1; return true;
    }).sort(function (x, y) { return x.at < y.at ? -1 : 1; }).slice(-200);
    // streak, tempo, datas
    a.streak.best = Math.max(a.streak.best, b.streak.best);
    if ((b.streak.lastDay || '') > (a.streak.lastDay || '')) { a.streak.current = b.streak.current; a.streak.lastDay = b.streak.lastDay; }
    a.studySeconds = Math.max(a.studySeconds, b.studySeconds);
    a.activityDays = union(a.activityDays, b.activityDays).sort().slice(-120);
    a.lastBackupAt = later(a.lastBackupAt, b.lastBackupAt);
    a.unlockedAll = a.unlockedAll || b.unlockedAll;
  }
  /* usado pela sincronização com o Google Drive: junta o perfil b dentro do a (mesmas regras do "Mesclar") */
  P.mergeProfiles = function (a, b) { P.normalize(a); P.normalize(b); mergeInto(a, b); return a; };
  function union(x, y) {
    var out = (x || []).slice();
    (y || []).forEach(function (v) { if (out.indexOf(v) < 0) out.push(v); });
    return out;
  }

  /* ---------- lembrete de backup ---------- */
  /* devolve null ou {days, never} se deve lembrar */
  P.backupReminder = function (p) {
    if (!p || !p.settings.backupIntervalDays) return null;
    var today = U.todayStr();
    if (p.backupSnoozeUntil && p.backupSnoozeUntil > today) return null;
    if (!p.lastBackupAt) {
      return P.completedCount(p) >= 3 ? { never: true, days: null } : null;
    }
    var lastDay = U.todayStr(new Date(p.lastBackupAt));
    var days = U.daysBetween(lastDay, today);
    if (days < p.settings.backupIntervalDays) return null;
    // só lembra se houve progresso desde o último backup
    var progressed = p.activityDays.some(function (d) { return d > lastDay; });
    return progressed ? { never: false, days: days } : null;
  };
  P.snoozeBackup = function (p) { p.backupSnoozeUntil = U.addDays(U.todayStr(), 1); S.save(); };
})(window);
