#!/usr/bin/env node
/* Gera os áudios pré-gravados (vozes neurais do Edge, via edge-tts) dos diálogos das lições
   que têm mais de um personagem na audição.
   - um MP3 por fala: audio/<id da lição>/<chave>.mp3 (a chave muda quando o texto ou a voz mudam);
   - só gera o que falta e apaga os arquivos que ninguém usa mais;
   - grava content/audio.js com a lista de falas que têm áudio (o app confere o texto antes de tocar).
   Requer: Python com  pip install edge-tts  e acesso à internet.
   Uso:  node tools/gen-audio.js          (depois: node tools/release.js "...") */
'use strict';
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const { loadAll, ROOT } = require('./load');

/* vozes por idioma e gênero; o 1º personagem de um gênero usa a 1ª voz, o 2º a 2ª, e assim por diante.
   Nada de vozes "Multilingual": elas detectam o idioma frase a frase e leem em português
   uma frase com nome brasileiro ("Je viens de Belo Horizonte"). */
const VOICES = {
  fr: { f: ['fr-FR-DeniseNeural', 'fr-FR-EloiseNeural', 'fr-CH-ArianeNeural', 'fr-BE-CharlineNeural'],
        m: ['fr-FR-HenriNeural', 'fr-CH-FabriceNeural', 'fr-BE-GerardNeural'] },
  en: { f: ['en-GB-SoniaNeural', 'en-GB-LibbyNeural', 'en-GB-MaisieNeural'],
        m: ['en-GB-RyanNeural', 'en-GB-ThomasNeural'] },
  it: { f: ['it-IT-ElsaNeural', 'it-IT-IsabellaNeural'],
        m: ['it-IT-DiegoNeural'] }
};

const ctx = loadAll();
const LUX = ctx.LUX, U = LUX.util;
const lessons = Object.values(LUX.data.lessons).map(l => Object.assign({ lang: 'fr' }, l))
  .concat(Object.values(LUX.data.pro.lessons));

/* igual a LUX.tts.speakerRanks (js/tts.js) */
function ranks(speakers) {
  const count = {}, out = {};
  speakers.forEach(s => { const g = s.gender || '?'; out[s.id] = count[g] || 0; count[g] = (count[g] || 0) + 1; });
  return out;
}

const AUDIO = path.join(ROOT, 'audio');
const jobs = [], manifest = {}, used = new Set();
for (const l of lessons) {
  const a = l.listening;
  if (!a || !a.script || !a.speakers) continue;
  if (new Set(a.script.map(ln => ln.speaker)).size < 2) continue; // só diálogos com mais de uma pessoa
  const lang = l.lang || 'fr';
  const spk = {}; a.speakers.forEach(s => { spk[s.id] = s; });
  const rank = ranks(a.speakers);
  manifest[l.id] = a.script.map(ln => {
    const s = spk[ln.speaker] || {};
    const g = s.gender === 'm' ? 'm' : 'f';
    const list = VOICES[lang][g];
    const voice = list[(rank[ln.speaker] || 0) % list.length];
    const text = lang === 'fr' ? U.ttsClean(U.stripGloss(ln.text)) : U.stripGloss(String(ln.text)).replace(/\s+/g, ' ').trim();
    const key = U.audioHash(voice + '|' + text);
    const rel = 'audio/' + l.id + '/' + key + '.mp3';
    used.add(rel);
    if (!fs.existsSync(path.join(ROOT, rel))) jobs.push({ voice, text, out: path.join(ROOT, rel) });
    return [key, U.audioHash(ln.text + '|' + (s.gender || '') + (rank[ln.speaker] || 0))];
  });
}

console.log(Object.keys(manifest).length + ' lições com diálogo; ' + used.size + ' falas; ' + jobs.length + ' para gerar.');
if (jobs.length) {
  const jobFile = path.join(require('os').tmpdir(), 'lux-audio-jobs.json');
  fs.writeFileSync(jobFile, JSON.stringify(jobs));
  const r = spawnSync('python', [path.join(__dirname, 'edge_tts_batch.py'), jobFile], { stdio: 'inherit' });
  fs.unlinkSync(jobFile);
  if (r.status !== 0) { console.error('Falha ao gerar os áudios.'); process.exit(1); }
}

/* apaga áudios órfãos */
let removed = 0;
if (fs.existsSync(AUDIO)) {
  for (const dir of fs.readdirSync(AUDIO)) {
    const d = path.join(AUDIO, dir);
    for (const f of fs.readdirSync(d)) if (!used.has('audio/' + dir + '/' + f)) { fs.unlinkSync(path.join(d, f)); removed++; }
    if (!fs.readdirSync(d).length) fs.rmdirSync(d);
  }
}

/* só entra no manifesto o que existe de fato */
for (const id of Object.keys(manifest)) {
  manifest[id] = manifest[id].map(e => fs.existsSync(path.join(AUDIO, id, e[0] + '.mp3')) ? e : null);
}
const out = '/* Gerado por tools/gen-audio.js — não edite à mão.\n' +
  '   Falas com áudio pré-gravado: id da lição → [chave do arquivo, conferência do texto] por fala do roteiro. */\n' +
  'LUX.data.audio = ' + JSON.stringify(manifest).replace(/\],\"/g, '],\n  "').replace(/^\{/, '{\n  ').replace(/\}$/, '\n}') + ';\n';
fs.writeFileSync(path.join(ROOT, 'content', 'audio.js'), out);
let bytes = 0;
for (const rel of used) { const p = path.join(ROOT, rel); if (fs.existsSync(p)) bytes += fs.statSync(p).size; }
console.log('content/audio.js gravado. ' + removed + ' órfãos apagados. Total: ' + (bytes / 1048576).toFixed(1) + ' MB.');
