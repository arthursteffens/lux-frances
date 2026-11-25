/* LUX — service worker: guarda o app para uso offline, atualiza sozinho e permite voltar a uma versão anterior.
   Cada versão publicada fica num cache próprio (lux-app-<build>). O app mantém as últimas KEEP versões no aparelho;
   se uma versão for "fixada" (pin), ela é servida no lugar da mais recente até o usuário liberar de novo.
   O bloco BUILD/FILES abaixo é gerado por tools/release.js — não edite à mão. */
'use strict';

// <release>
const BUILD = '20261125-1906-3285f6c';
const FILES = [
  './',
  'version.json',
  'index.html',
  'manifest.webmanifest',
  'css/app.css',
  'js/app.js',
  'js/core.js',
  'js/course.js',
  'js/drills/ear-training.js',
  'js/drills/numbers.js',
  'js/drive.js',
  'js/exercises/base.js',
  'js/exercises/dictation.js',
  'js/exercises/fill-blank.js',
  'js/exercises/match.js',
  'js/exercises/multiple-choice.js',
  'js/exercises/order-events.js',
  'js/exercises/order-sentence.js',
  'js/exercises/short-answer.js',
  'js/exercises/true-false.js',
  'js/general.js',
  'js/grammar.js',
  'js/lesson.js',
  'js/level-test.js',
  'js/lexicon.js',
  'js/notebook.js',
  'js/palette.js',
  'js/pro.js',
  'js/profile-view.js',
  'js/profiles.js',
  'js/pwa.js',
  'js/review.js',
  'js/router.js',
  'js/sidebar.js',
  'js/srs.js',
  'js/storage.js',
  'js/tts.js',
  'js/ui.js',
  'js/verbs/conjugator.js',
  'js/verbs/search.js',
  'js/verbs/view.js',
  'content/a2/test.js',
  'content/a2/u01/l01.js',
  'content/a2/u01/l02.js',
  'content/a2/u01/l03.js',
  'content/a2/u01/l04.js',
  'content/a2/u01/l05.js',
  'content/a2/u02/l01.js',
  'content/a2/u02/l02.js',
  'content/a2/u02/l03.js',
  'content/a2/u02/l04.js',
  'content/a2/u02/l05.js',
  'content/a2/u03/l01.js',
  'content/a2/u03/l02.js',
  'content/a2/u03/l03.js',
  'content/a2/u03/l04.js',
  'content/a2/u03/l05.js',
  'content/a2/u04/l01.js',
  'content/a2/u04/l02.js',
  'content/a2/u04/l03.js',
  'content/a2/u04/l04.js',
  'content/a2/u04/l05.js',
  'content/a2/u05/l01.js',
  'content/a2/u05/l02.js',
  'content/a2/u05/l03.js',
  'content/a2/u05/l04.js',
  'content/a2/u05/l05.js',
  'content/a2/u06/l01.js',
  'content/a2/u06/l02.js',
  'content/a2/u06/l03.js',
  'content/a2/u06/l04.js',
  'content/a2/u06/l05.js',
  'content/general/alfabeto.js',
  'content/general/anos-seculos.js',
  'content/general/clima.js',
  'content/general/cores.js',
  'content/general/cortesia.js',
  'content/general/datas.js',
  'content/general/dias-semana.js',
  'content/general/dinheiro.js',
  'content/general/direcoes.js',
  'content/general/emergencias.js',
  'content/general/estacoes.js',
  'content/general/expressoes-tempo.js',
  'content/general/familia.js',
  'content/general/feriados.js',
  'content/general/fracoes.js',
  'content/general/horas.js',
  'content/general/manifest.js',
  'content/general/medidas.js',
  'content/general/meses.js',
  'content/general/numeros-cardinais.js',
  'content/general/numeros-ordinais.js',
  'content/general/paises.js',
  'content/general/perguntas.js',
  'content/general/profissoes.js',
  'content/general/restaurante.js',
  'content/general/saudacoes.js',
  'content/general/saude.js',
  'content/general/telefone-email.js',
  'content/general/transporte.js',
  'content/general/tu-vous.js',
  'content/grammar/a2-extra.js',
  'content/grammar/articles.js',
  'content/grammar/negation-questions.js',
  'content/grammar/nouns-adjectives.js',
  'content/grammar/prepositions.js',
  'content/grammar/pronouns.js',
  'content/grammar/tenses-a2.js',
  'content/lexicon/function-words.js',
  'content/lexicon/lexicon-a-f.js',
  'content/lexicon/lexicon-a2-geral.js',
  'content/lexicon/lexicon-a2-u02.js',
  'content/lexicon/lexicon-a2-u03.js',
  'content/lexicon/lexicon-a2-u04.js',
  'content/lexicon/lexicon-a2-u05.js',
  'content/lexicon/lexicon-a2-u06.js',
  'content/lexicon/lexicon-g-z.js',
  'content/lexicon/lexicon-pro.js',
  'content/lexicon/names.js',
  'content/manifest.js',
  'content/pro/fr/a2/l01.js',
  'content/pro/fr/a2/l02.js',
  'content/pro/fr/a2/l03.js',
  'content/pro/fr/a2/l04.js',
  'content/pro/fr/a2/l05.js',
  'content/pro/fr/a2/l06.js',
  'content/pro/fr/guias/emails.js',
  'content/pro/fr/guias/empresas-tech.js',
  'content/pro/fr/guias/entrevista.js',
  'content/pro/fr/guias/glossario-rh.js',
  'content/pro/fr/guias/outros-paises.js',
  'content/pro/fr/guias/reunioes.js',
  'content/pro/fr/guias/trabalhar-luxemburgo.js',
  'content/pro/manifest.js',
  'content/verbs/irregular.js',
  'content/verbs/verbs-a-c.js',
  'content/verbs/verbs-a2-extra.js',
  'content/verbs/verbs-d-l.js',
  'content/verbs/verbs-m-r.js',
  'content/verbs/verbs-pro.js',
  'content/verbs/verbs-s-z.js',
  'icons/apple-touch-icon.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/icon.svg'
];
// </release>

const PREFIX = 'lux-app-';
const META_CACHE = 'lux-meta';
const META_URL = './__lux-meta.json';
const KEEP = 4;

let metaPromise = null;
function readMeta() {
  if (!metaPromise) {
    metaPromise = caches.open(META_CACHE)
      .then(c => c.match(META_URL))
      .then(r => r ? r.json() : null)
      .then(m => Object.assign({ pinned: null, builds: [] }, m || {}))
      .catch(() => ({ pinned: null, builds: [] }));
  }
  return metaPromise;
}
function writeMeta(meta) {
  metaPromise = Promise.resolve(meta);
  return caches.open(META_CACHE).then(c => c.put(META_URL, new Response(JSON.stringify(meta), { headers: { 'Content-Type': 'application/json' } })));
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(PREFIX + BUILD);
    // cache: 'reload' ignora o cache HTTP do GitHub Pages (10 min) e baixa os arquivos novos de verdade
    await cache.addAll(FILES.map(f => new Request(f, { cache: 'reload' })));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const meta = await readMeta();
    if (!meta.builds.some(b => b.build === BUILD)) meta.builds.push({ build: BUILD, installedAt: new Date().toISOString() });
    // mantém as KEEP versões mais recentes, e sempre a fixada
    const keep = meta.builds.slice(-KEEP).map(b => b.build);
    if (meta.pinned && keep.indexOf(meta.pinned) < 0) keep.push(meta.pinned);
    meta.builds = meta.builds.filter(b => keep.indexOf(b.build) >= 0);
    await writeMeta(meta);
    const names = await caches.keys();
    await Promise.all(names.filter(n => n.indexOf(PREFIX) === 0 && keep.indexOf(n.slice(PREFIX.length)) < 0).map(n => caches.delete(n)));
    await self.clients.claim();
  })());
});

async function activeCacheName() {
  const meta = await readMeta();
  if (meta.pinned && meta.pinned !== BUILD && await caches.has(PREFIX + meta.pinned)) return PREFIX + meta.pinned;
  return PREFIX + BUILD;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  // pedidos explícitos de "sem cache" (verificação de versão) vão direto à rede
  if (url.searchParams.has('lux-network')) return;
  event.respondWith((async () => {
    const cache = await caches.open(await activeCacheName());
    const isNav = req.mode === 'navigate';
    const hit = await cache.match(isNav ? './index.html' : req, { ignoreSearch: true });
    if (hit) return hit;
    try { return await fetch(req); }
    catch (e) {
      if (isNav) { const idx = await cache.match('./index.html'); if (idx) return idx; }
      throw e;
    }
  })());
});

self.addEventListener('message', event => {
  const msg = event.data || {};
  const reply = data => { if (event.ports && event.ports[0]) event.ports[0].postMessage(data); };
  event.waitUntil((async () => {
    const meta = await readMeta();
    if (msg.type === 'pin') {
      meta.pinned = msg.build && msg.build !== BUILD ? msg.build : null;
      await writeMeta(meta);
    }
    const builds = [];
    for (const b of meta.builds) {
      const c = await caches.open(PREFIX + b.build);
      const v = await c.match('./version.json');
      let info = null;
      try { info = v ? await v.json() : null; } catch (e) { info = null; }
      builds.push(Object.assign({ build: b.build, installedAt: b.installedAt }, info || {}));
    }
    reply({ latest: BUILD, pinned: meta.pinned, serving: (await activeCacheName()).slice(PREFIX.length), builds });
  })());
});
