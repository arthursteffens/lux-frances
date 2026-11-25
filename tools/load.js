/* Carrega os scripts do app (que usam o global LUX) num contexto do Node. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

function createContext() {
  const ctx = { console };
  ctx.window = ctx;
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  return ctx;
}

function load(ctx, rel) {
  const file = path.join(ROOT, rel);
  const code = fs.readFileSync(file, 'utf8');
  vm.runInContext(code, ctx, { filename: rel });
}

function listJs(relDir) {
  const dir = path.join(ROOT, relDir);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort().map(f => relDir + '/' + f);
}

/* carrega o manifesto de conteúdo e todos os arquivos que ele lista */
function loadAll(opts = {}) {
  const ctx = createContext();
  ['js/core.js', 'js/drills/numbers.js', 'js/verbs/conjugator.js', 'js/lexicon.js'].forEach(f => {
    if (fs.existsSync(path.join(ROOT, f))) load(ctx, f);
  });
  load(ctx, 'content/manifest.js');
  ctx.LUX.manifest.files.forEach(f => load(ctx, f));
  return ctx;
}

module.exports = { createContext, load, listJs, loadAll, ROOT };
