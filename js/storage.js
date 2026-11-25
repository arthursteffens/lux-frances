/* LUX — persistência no localStorage (chave versionada), testes de armazenamento e migrações. */
(function (g) {
  'use strict';
  var LUX = g.LUX, U = LUX.util;
  var KEY = 'lux-fr:v1';
  var PERSIST_KEY = 'lux-fr:persist-check';
  var SCHEMA = 1;

  var S = LUX.store = { KEY: KEY, SCHEMA: SCHEMA, state: null, available: true, lastError: null, listeners: [] };

  function defaultState() {
    return {
      schema: SCHEMA,
      installId: U.uid('install'),
      createdAt: new Date().toISOString(),
      profiles: {},
      order: [],
      lastProfileId: null,
      ui: { sidebar: 'expanded' }
    };
  }

  /* grava, lê e apaga uma chave de teste */
  S.test = function () {
    try {
      var k = '__lux_test__' + Math.random();
      localStorage.setItem(k, '1');
      var ok = localStorage.getItem(k) === '1';
      localStorage.removeItem(k);
      return ok;
    } catch (e) { S.lastError = e; return false; }
  };

  S.load = function () {
    S.available = S.test();
    var raw = null;
    if (S.available) {
      try { raw = localStorage.getItem(KEY); } catch (e) { S.lastError = e; }
    }
    var st = null;
    if (raw) {
      try { st = JSON.parse(raw); } catch (e) { console.warn('Estado corrompido; começando do zero.', e); }
    }
    S.state = st ? S.migrate(st) : defaultState();
    return S.state;
  };

  S.migrate = function (st) {
    if (!st.schema) st.schema = 1;
    // futuras migrações: if (st.schema < 2) { ...; st.schema = 2; }
    st.profiles = st.profiles || {};
    st.order = st.order || Object.keys(st.profiles);
    st.ui = st.ui || { sidebar: 'expanded' };
    Object.keys(st.profiles).forEach(function (id) { LUX.profiles && LUX.profiles.normalize(st.profiles[id]); });
    return st;
  };

  var saveTimer = null;
  S.save = function (immediate) {
    if (!S.state) return false;
    if (!immediate) {
      clearTimeout(saveTimer);
      saveTimer = setTimeout(function () { S.save(true); }, 150);
      return true;
    }
    try {
      localStorage.setItem(KEY, JSON.stringify(S.state));
      if (!S.available) { S.available = true; S.emit(); }
      return true;
    } catch (e) {
      S.lastError = e;
      S.available = false;
      S.emit();
      return false;
    }
  };
  window.addEventListener && window.addEventListener('beforeunload', function () { if (saveTimer) S.save(true); });

  S.onChange = function (fn) { S.listeners.push(fn); };
  S.emit = function () { S.listeners.forEach(function (fn) { try { fn(); } catch (e) { console.error(e); } }); };

  S.sizeBytes = function () {
    try { return (localStorage.getItem(KEY) || '').length * 2; } catch (e) { return 0; }
  };

  /* armazenamento persistente (evita limpeza automática por falta de espaço) */
  S.persistStatus = null;
  S.requestPersist = function () {
    if (!navigator.storage || !navigator.storage.persist) { S.persistStatus = 'unsupported'; return Promise.resolve('unsupported'); }
    return navigator.storage.persisted().then(function (already) {
      if (already) return true;
      return navigator.storage.persist();
    }).then(function (granted) {
      S.persistStatus = granted === 'unsupported' ? 'unsupported' : (granted ? 'granted' : 'denied');
      return S.persistStatus;
    }).catch(function () { S.persistStatus = 'unsupported'; return 'unsupported'; });
  };
  S.estimate = function () {
    if (!navigator.storage || !navigator.storage.estimate) return Promise.resolve(null);
    return navigator.storage.estimate().catch(function () { return null; });
  };
  /* cota típica do localStorage: ~5 MB por origem */
  S.LOCAL_QUOTA = 5 * 1024 * 1024;

  /* teste de persistência entre sessões */
  S.startPersistTest = function () {
    try { localStorage.setItem(PERSIST_KEY, JSON.stringify({ at: new Date().toISOString(), installId: S.state.installId })); return true; }
    catch (e) { return false; }
  };
  S.checkPersistTest = function () {
    try {
      var raw = localStorage.getItem(PERSIST_KEY);
      if (!raw) return null;
      localStorage.removeItem(PERSIST_KEY);
      return JSON.parse(raw);
    } catch (e) { return null; }
  };

  S.isFirefoxFile = function () {
    return location.protocol === 'file:' && /firefox/i.test(navigator.userAgent);
  };
})(window);
