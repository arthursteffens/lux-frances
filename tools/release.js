#!/usr/bin/env node
/* Prepara uma nova versão publicável:
   - calcula um identificador de build (data + hash do conteúdo);
   - grava version.json (versão, build, data, novidades);
   - reescreve o bloco <release> do sw.js com o build e a lista de arquivos a guardar offline.
   Uso:  node tools/release.js "O que mudou nesta versão"
   Depois: validar, commit e push (o GitHub Pages publica em 1–2 minutos). */
'use strict';
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');
const DIRS = ['css', 'js', 'content', 'icons'];
const ROOT_FILES = ['index.html', 'manifest.webmanifest'];

function walk(dir) {
  const out = [];
  for (const name of fs.readdirSync(path.join(ROOT, dir)).sort()) {
    const rel = dir + '/' + name;
    const st = fs.statSync(path.join(ROOT, rel));
    if (st.isDirectory()) out.push(...walk(rel));
    else out.push(rel);
  }
  return out;
}

const files = ROOT_FILES.concat(...DIRS.map(walk));
const hash = crypto.createHash('sha256');
const CHANGELOG = 'content/changelog.js'; // fica fora do hash: ele mesmo recebe o build calculado aqui
for (const f of files) { if (f === CHANGELOG) continue; hash.update(f); hash.update(fs.readFileSync(path.join(ROOT, f))); }
const digest = hash.digest('hex').slice(0, 7);

// versão do conteúdo vem do manifesto do curso
const manifestSrc = fs.readFileSync(path.join(ROOT, 'content/manifest.js'), 'utf8');
const version = (manifestSrc.match(/version:\s*'([^']+)'/) || [])[1] || '0';

const prevPath = path.join(ROOT, 'version.json');
const prev = fs.existsSync(prevPath) ? JSON.parse(fs.readFileSync(prevPath, 'utf8')) : null;
const notesArg = process.argv.slice(2).join(' ').trim();

if (prev && prev.build && prev.build.endsWith('-' + digest) && !notesArg) {
  console.log('Nada mudou desde o build ' + prev.build + '.');
  process.exit(0);
}

const now = new Date();
const pad = n => String(n).padStart(2, '0');
const stamp = now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate()) + '-' + pad(now.getHours()) + pad(now.getMinutes());
const build = stamp + '-' + digest;
const info = { version, build, date: now.toISOString(), notes: notesArg || 'Melhorias e correções.' };
fs.writeFileSync(prevPath, JSON.stringify(info, null, 2) + '\n');

// histórico de versões (página Novidades): nova entrada no topo
const clPath = path.join(ROOT, CHANGELOG);
const clSrc = fs.existsSync(clPath) ? fs.readFileSync(clPath, 'utf8') : '';
const clMatch = clSrc.match(/LUX\.changelog = (\[[\s\S]*\]);/);
const changelog = clMatch ? JSON.parse(clMatch[1]) : [];
changelog.unshift({ build, date: info.date, notes: info.notes });
fs.writeFileSync(clPath, '/* Histórico de versões (mais recente primeiro). Gerado por tools/release.js — não edite à mão.\n' +
  '   Usado na página Novidades: mostra o que mudou desde a última versão que a pessoa viu neste aparelho. */\n' +
  'LUX.changelog = [\n' + changelog.map(e => '  ' + JSON.stringify(e)).join(',\n') + '\n];\n');

const swPath = path.join(ROOT, 'sw.js');
const sw = fs.readFileSync(swPath, 'utf8');
const list = ['./', 'version.json'].concat(files).map(f => "  '" + f.replace(/'/g, "\\'") + "'").join(',\n');
const block = '// <release>\nconst BUILD = \'' + build + '\';\nconst FILES = [\n' + list + '\n];\n// </release>';
const next = sw.replace(/\/\/ <release>[\s\S]*?\/\/ <\/release>/, block);
if (next === sw && !sw.includes(block)) { console.error('Bloco <release> não encontrado em sw.js'); process.exit(1); }
fs.writeFileSync(swPath, next);

console.log('Build ' + build + ' (versão ' + version + ') — ' + files.length + ' arquivos para uso offline.');
console.log('Novidades: ' + info.notes);
