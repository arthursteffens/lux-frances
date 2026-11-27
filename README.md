# Lux — curso de francês A2 → B2 para brasileiros

Aplicação web estática (HTML + CSS + JavaScript puro).

- **Online (recomendado):** <https://arthursteffens.github.io/lux-frances/>. Funciona offline depois da primeira visita, pode ser instalado no PC e no celular ("Instalar app" / "Adicionar à Tela de Início") e se atualiza sozinho.
- **Arquivo local:** abra o `index.html` com duplo clique. Não precisa de servidor nem internet, mas não se atualiza sozinho.

> **Status: Fase 2 concluída.** O nível **A2 está completo**: 6 unidades (30 lições) e o teste de nível com certificado. B1 e B2 aparecem como "em breve".

## Como usar

1. Abra `index.html` no **Chrome** ou no **Edge**. O Edge no Windows tem as melhores vozes francesas ("Natural").
2. Crie seu perfil (nome, avatar e cor). Cada pessoa tem o próprio perfil, e a troca é feita pelo seletor no topo da barra lateral.
3. Comece pelo **Curso**. As outras abas servem para consulta e treino a qualquer momento.

### Abas

| Aba | O que tem |
|---|---|
| 📘 **Curso** | Painel (sequência de dias, tempo estudado, revisões, recorde) e mapa A2/B1/B2. Cada lição tem 8 etapas: objetivos, vocabulário, leitura, audição, gramática, prática, dica e resumo. A próxima lição abre com 70% ou mais. Ao concluir todas as lições de um nível, libera-se o **teste de nível** (leitura, audição e gramática, sem glossário; aprovação com 70% no total e 50% em cada parte), que gera um **certificado** para imprimir ou salvar em PDF. |
| 🔁 **Revisar** | Revisão espaçada (SM-2 simplificado). Usa os cartões de vocabulário das lições, do caderno, dos verbos e de Gerais. |
| 🎧 **Treino de ouvido** | Números (por faixa, com as variantes belga e suíça), horas, datas, preços, telefones e modo misto. Rodadas de 10 itens, recordes por perfil e aquecimento de 2 minutos. |
| 📖 **Dicionário** | Dicionário completo francês ↔ português: cerca de 70 mil palavras e 35 mil verbos, do Wiktionary. Busca nos dois sentidos e por palavra flexionada ("chevaux" → cheval, "mangeons" → manger). As palavras do curso aparecem primeiro, com a tradução e as notas revisadas (📘 curso). É baixado na primeira vez que a aba é aberta (≈1,3 MB) e depois funciona offline. |
| 🔤 **Verbos** | 328 verbos. Busca em português ou francês desde a 1ª letra, sem diferenciar acentos, inclusive por forma conjugada ("cours" → courir). A ficha mostra definição pt/fr, 3 exemplos, sinônimos e os 18 grupos de tempos, com ▶ por linha e "tocar todos". Embaixo de cada forma (menos no presente) aparece a tradução em português (*j'ai couru* → eu corri). Com o dicionário completo baixado, aparecem também os ~35 mil verbos dele (tradução e conjugação, sem ficha). |
| 📐 **Gramática** | 32 tópicos. Gramática de bolso com busca, dúvidas frequentes, comparação com o português, erros típicos e teste rápido. |
| 🗂 **Gerais** | 29 páginas do dia a dia em 5 grupos: números e quantidades (cardinais, ordinais, frações, dinheiro, medidas), tempo e calendário, comunicação básica (saudações, cortesia, perguntas, tu/vous, alfabeto), pessoas e mundo (família, países, profissões, cores, clima) e situações práticas (saúde, emergências, direções, restaurante, transporte, telefone e e-mail). Inclui conversor, relógio interativo e soletrador. |
| 📓 **Caderno** | Clique em **qualquer palavra** de um texto e salve. Também dá para selecionar várias palavras e salvar uma expressão. Tem filtros, anotações e exportação em CSV (para o Anki). |
| 👤 **Perfil** | Perfis, voz, velocidade, nível, tema, backup e testes de armazenamento. |
| 💼 **Profissional** | Sub-abas por **carreira** (por enquanto **HRBP**). Na HRBP: **cursos** de legislação e prática em português com os termos em francês (1º: *Direito do trabalho em Luxemburgo: o essencial*, 5 módulos com exercícios e progresso) e língua para o trabalho. Francês para o trabalho: RH em empresas de tecnologia (e um pouco de fintech), em Luxemburgo e outros países francófonos. Lições no mesmo formato do curso, que liberam conforme as unidades do curso (A2: 6 lições), e 7 guias de consulta (trabalhar em Luxemburgo, outros países, glossário de RH, tech e fintech, reuniões, e-mails, entrevista). Também tem trilhas em **inglês** (6 lições B2–C1) e **italiano** (6 lições B1) para a mesma vaga, todas liberadas. |

A busca global abre com **Ctrl+K** ou **/**.

## Onde ficam os dados (importante)

- O progresso é salvo **no navegador** (`localStorage`, chave `lux-fr:v1`), separado por perfil. Não há servidor nem banco de dados.
- **Google Drive (opcional, só pelo endereço online):** em *Perfil e configurações › Backup no Google Drive*, cada perfil se liga à conta Google da pessoa ([js/drive.js](js/drive.js)). O progresso vai para `lux-progress.json` na pasta oculta do app (escopo `drive.appdata`), no mesmo formato do Exportar. A cada sincronização o app baixa, mescla (mesmas regras do "Mesclar") e envia. Sincroniza ao abrir, ao concluir lição/teste, a cada 10 min com mudanças e ao sair. O acesso do Google dura 1 h; depois, o aviso "toque para sincronizar" renova sem senha. Num aparelho novo, a tela inicial tem **Restaurar do Google Drive**. A ligação perfil ↔ conta fica só no aparelho (`state.drive`), fora dos backups.
- Sem o Drive, o progresso **não sincroniza entre aparelhos** nem entre navegadores. Limpar os dados de navegação apaga tudo.
- **Backup:** em *Perfil e configurações › Armazenamento e backup › Exportar*. O app lembra de fazer backup a cada 7 dias (o intervalo é configurável).
- **Levar para outro computador:**
  1. Copie a pasta do curso.
  2. Exporte o perfil.
  3. No outro computador, abra o `index.html` e importe o arquivo, escolhendo *Mesclar* ou *Substituir*.
- **Computador da empresa:** use *Testar se meus dados são mantidos* (fechar e reabrir o navegador). Se os perfis sumirem ao reabrir, aquele navegador apaga os dados. Nesse caso, exporte o backup sempre ao terminar de estudar.
- **Firefox abrindo o curso como arquivo:** mover ou renomear a pasta pode fazer os dados "sumirem". Prefira o Chrome ou o Edge.

## Versões, atualização automática e voltar atrás

- Cada endereço tem o próprio armazenamento: o progresso do modo arquivo (`file://`) não aparece no endereço online. Leve-o com **Exportar** → **Importar** uma vez.
- O [sw.js](sw.js) (service worker) guarda o app inteiro para uso offline. Cada versão publicada fica num cache próprio; o aparelho mantém as **4 últimas**.
- **Atualização automática:** ao abrir o curso (e a cada 30 min com ele aberto), o app procura uma versão nova. Ela é baixada em segundo plano e aplicada na hora, ou ao sair da lição/teste, se você estiver no meio de um. Depois aparece o aviso "✨ Curso atualizado" com o botão **"Voltar à versão anterior"**.
- **Voltar atrás:** *Perfil e configurações › Versão do app* lista as versões guardadas. "Usar esta versão" **fixa** a versão escolhida e pausa as atualizações até você clicar em "Voltar às atualizações automáticas". O progresso não muda ao trocar de versão (o formato dos dados é o mesmo, `schema: 1`; mudanças futuras de formato precisam continuar legíveis por versões anteriores).
- Correção definitiva de um bug: corrigir e publicar uma versão nova (ou `git revert` do commit problemático e publicar).

### Publicar uma versão nova

```
node tools/validate-content.js && node tools/test-conjugator.js && node tools/test-numbers.js
node tools/release.js "O que mudou nesta versão"   # gera version.json, a lista offline do sw.js e uma entrada em content/changelog.js (página Novidades)
git add -A && git commit -m "..." && git push        # o GitHub Pages publica em 1–2 minutos
```

## Áudio

**Diálogos das lições** (audição com mais de um personagem, no curso e no Profissional) usam **MP3 pré-gravados** com as vozes neurais do Edge, uma voz por personagem (homem/mulher), iguais em qualquer navegador e no celular.

- Arquivos em `audio/<id da lição>/<chave>.mp3`; a lista fica em `content/audio.js` (gerado). Se o texto de uma fala mudar e o áudio não for regenerado, o app usa a voz do navegador para ela.
- Os MP3 não entram na instalação offline: cada um é guardado pelo service worker na primeira vez que toca.
- Para gerar/atualizar (só o que falta; apaga os que sobraram):
  ```
  pip install edge-tts
  node tools/gen-audio.js
  ```
  As vozes por idioma estão no topo de [tools/gen-audio.js](tools/gen-audio.js). O edge-tts usa o serviço online do Edge sem ser oficial: serve para este uso pessoal.

O resto (palavras, frases soltas, verbos, leituras) usa a **Web Speech API** (a voz do próprio navegador).

- Se não houver voz francesa instalada, o app mostra como instalar uma (Windows, macOS, Android e iOS). As transcrições continuam disponíveis.
- Toda a fala passa por `LUX.tts.speak()` em [js/tts.js](js/tts.js); um segmento com `audio` toca o MP3.

## Dicionário completo

Dados do **Wiktionary** em francês e em português (licença CC BY-SA 4.0), extraídos pelo projeto wiktextract (kaikki.org).

- O app usa `dict/fr-pt.<hash>.json` (fora da instalação offline; o service worker guarda no cache `lux-dict` na primeira vez) e `content/dict-index.js` (nome do arquivo e tamanhos).
- **Conjugação:** os verbos não trazem tabelas prontas. O motor do app calcula as formas; o gerador compara o motor com a tabela do Wiktionary, verbo por verbo, e guarda só o mínimo para acertar: nada (regular), um modelo (`l`: *prévenir* como *venir*), um padrão (`pt`) ou uma tabela de formas-chave (`t`, mesmo formato de `content/verbs/irregular.js`). O relatório lista os verbos do curso que diferem do Wiktionary (hoje só variantes aceitas, como *veuille*/*veux*).
- Para regenerar:
  1. Baixe numa pasta **fora do projeto** (~800 MB): `https://kaikki.org/frwiktionary/raw-wiktextract-data.jsonl.gz` como `fr.jsonl.gz` e `https://kaikki.org/ptwiktionary/raw-wiktextract-data.jsonl.gz` como `pt.jsonl.gz`.
  2. `python tools/dict-extract.py <pasta>`
  3. `node --max-old-space-size=8192 tools/build-dict.js <pasta>` (apaga o arquivo antigo de `dict/` e grava o relatório em `<pasta>/dict-report.txt`).

## Estrutura

```
index.html            carrega os scripts; o conteúdo é listado em content/manifest.js
sw.js                 service worker: offline, atualização automática, versões guardadas (bloco gerado por tools/release.js)
version.json          versão publicada (gerado por tools/release.js)
manifest.webmanifest  app instalável · icons/ ícones
css/app.css           tema claro/escuro, layout responsivo (barra lateral, gaveta, barra inferior)
js/
  core.js             namespace LUX, registro de conteúdo, utilitários, tokenização do francês
  storage.js          localStorage versionado, migrações, testes de armazenamento
  profiles.js         perfis, streak, tempo, exportar/importar/mesclar, lembrete de backup
  tts.js  srs.js      voz e revisão espaçada
  lexicon.js          resolve qualquer palavra do texto → lema (léxico + conjugador + números)
  ui.js               botões de áudio, texto clicável, popup de palavra, modais
  exercises/          um arquivo por tipo de exercício
  router.js sidebar.js palette.js app.js  pwa.js (registro do service worker, avisos, cartão "Versão do app")
  lesson.js course.js level-test.js review.js notebook.js grammar.js general.js profile-view.js
  verbs/conjugator.js motor de conjugação  · verbs/pt-conj.js conjugador de português (traduções) · verbs/search.js busca · verbs/view.js tela
  drills/numbers.js   números/horas/datas/preços por extenso · drills/ear-training.js
content/
  manifest.js         níveis, unidades, lições e lista de arquivos
  a2/u01/l01.js ...   lições (a2/u01 a a2/u06)
  a2/test.js          teste de nível A2
  verbs/              irregular.js (tabelas) + verbs-*.js (dicionário, 309 verbos)
  grammar/            tópicos por categoria (32 tópicos)
  general/            manifest.js (barra lateral de Gerais) + uma página por arquivo
  lexicon/            léxico geral, léxico por unidade do A2 (lexicon-a2-uNN.js, lexicon-a2-geral.js) + nomes próprios
audio/                MP3 dos diálogos (gerado por tools/gen-audio.js)
tools/                validadores e testes (Node, opcional); gen-audio.js + edge_tts_batch.py geram os áudios
```

## Testes e validação

Os testes exigem Node, mas o Node é **opcional**: o curso funciona sem ele.

```
node tools/validate-content.js     # schema, IDs, respostas, glossário, testes de nível, cobertura do léxico (tem que dar 100%)
node tools/validate-content.js --missing   # lista só as palavras sem cobertura
node tools/test-conjugator.js      # 71 verbos de referência + 31 tabelas completas + todos os verbos do dicionário
node tools/test-numbers.js         # 0–100 completo, casos especiais, horas, datas, preços, telefones
```

## Formatos do conteúdo

### Lição (`content/<nível>/uNN/lNN.js`)

```js
LUX.registerLesson({
  id: 'a2-u01-l01', level: 'A2', unit: 1, order: 1, review: false,
  title: 'Enchanté !', titlePt: 'Muito prazer!',
  names: ['Lucas', 'Lyon'],                 // nomes próprios usados no texto
  objectives: ['...'],
  vocabulary: [{ fr: 'le quartier', pt: 'o bairro', g: 'm', pos: 'n', ex: 'J\'aime mon quartier.' }],
  reading: { genre: 'e-mail', title: '...', text: '... [[mot|tradução|nota opcional]] ...', exercises: [ ... ] },
  listening: { genre: 'diálogo', title: '...', speakers: [{ id: 'A', name: 'Léa', gender: 'f' }],
               script: [{ speaker: 'A', text: '...' }], exercises: [ ... ] },
  grammar: { topicId: 'negation', title: '...', explanationPt: 'markdown simples', table: { head: [], rows: [[]] },
             examples: [{ fr, pt }], ptComparison: '...' },
  grammarPractice: [ ... ],
  tipForBrazilians: '...'
});
```

### Exercícios

Todos aceitam `explanationPt`. Os tipos são:

| type | campos |
|---|---|
| `multiple_choice` | `prompt, options[], answer` (índice), `audio?` |
| `listen_choose` | `audio, prompt, options[], answer` |
| `true_false_nm` | `statements: [{ text, answer: 'V'\|'F'\|'NM', explanationPt }]` |
| `fill_blank` | `prompt, items: [{ text: '... ___ ...', answers: [] }], bank?: []` |
| `match` | `prompt, pairs: [[esquerda, direita]]` |
| `order_sentence` | `prompt, answer, alternatives?, translation?` |
| `order_events` | `prompt, items[]` (na ordem correta) |
| `dictation` | `text` |
| `short_answer` | `prompt, answers[]` (só dígitos são comparados se todas as respostas forem numéricas) |
| `speaking` | reservado para a fase de fala (ainda não pontua) |

**Correção:** maiúsculas, espaços, pontuação final e apóstrofos são ignorados. Errar só o acento vale meia nota, ou nota cheia se o perfil configurar assim.

### Teste de nível (`content/<nível>/test.js`)

```js
LUX.registerLevelTest({ level: 'A2', title, subtitle, intro /* markdown */, certificateText, names: [],
  sections: [
    { id: 'read', title, icon, texts: [{ genre, title, text, exercises: [] }] },
    { id: 'listen', title, icon, audios: [{ genre, title, speakers: [], script: [], exercises: [] }] },
    { id: 'grammar', title, icon, exercises: [] }
  ] });
```

- O teste só aparece quando todas as unidades do nível têm 5 lições, e só libera quando o aluno concluiu todas (ou usou "Desbloquear tudo").
- Aprovação: 70% no total e 50% em cada seção. Os áudios podem ser ouvidos 3 vezes; não há glossário, popup de palavras nem transcrição.
- O resultado fica em `perfil.levelTests[nível]` (`best`, `sections`, `passed`, `cert`) e entra no backup (a mesclagem mantém o melhor resultado).

### Verbo (`content/verbs/verbs-*.js`)

```js
LUX.verb('pleurer', 'chorar', 'A2', 820, 'definição pt', 'définition fr',
  [['exemplo fr', 'tradução'], [...], [...]],          // exatamente 3
  [['sangloter', 'soluçar'], ['larmoyer', 'lacrimejar']],
  { aux: 'être', like: 'venir', pattern: 'partir', note: '...' });   // opcionais
```

- **Regulares e variações ortográficas** são detectados automaticamente: -cer, -ger, e→è, é→è, -eler/-eter, -yer.
- **Irregulares:** tabela em `irregular.js`, só com as formas-chave (presente, radical do futuro, 1ª pessoa do passé simple, subjuntivo se irregular, particípios). O motor deriva o resto.
- **Derivados:** `like: 'venir'` faz devenir, revenir e se souvenir; `like: 'connaître'` faz paraître e disparaître.

### Tópico de gramática (`content/grammar/*.js`)

```js
LUX.registerGrammar({ id, category, level, title, titleFr, keywords: [], faq?: true, verb?, tense?,
  summaryPt, explanationPt, tables: [{ caption, head, rows }], examples: [{ fr, pt }],
  ptComparison: { same, different, commonErrors: [{ wrong, right, why }] }, quiz: [ ... ], related: [] });
```

### Página de Gerais (`content/general/<id>.js`)

```js
LUX.registerGeneral({ id, group, title, titleFr, level, keywords: [], blocks: [
  { type: 'intro', textPt },
  { type: 'tool', tool: 'number-converter' | 'year-converter' | 'clock' | 'today' | 'spell' },
  { type: 'table', sections: [{ title, items: [{ fr, pt, note?, tts? }] }   // ou numbers:[a,b], list:[], ordinals:[], times:[[h,m]], dates:[[d,m,a]]
  ]},
  { type: 'rules', items: [{ title, textPt, examples: [{ fr, pt }] }] },
  { type: 'phrases', items: [{ fr, pt }] }, { type: 'tip', textPt }, { type: 'quiz', items: [] },
  { type: 'links', items: [{ to: '#/treino/numeros', label }] }
]});
```

Para criar uma página: crie o arquivo, liste-o em `content/manifest.js` e confira se o `id` está em `content/general/manifest.js`. Não é preciso mexer no código.

### Léxico (`content/lexicon/*.js`)

```js
{ w: 'maison', p: 'n', g: 'f', t: 'casa', d: true /* gênero ≠ português */, f: ['formas extras'], fem: 'feminino', pl: 'plural irregular', n: 'nota' }
```

- **Classes:** `n adj adv prep conj pron det art interj expr num v`.
- Plurais e femininos regulares são gerados automaticamente.
- Verbos com `p: 'v'` são conjugados pelo motor.
- Toda palavra de leitura, transcrição e página de Gerais precisa estar coberta pelo léxico, pelo dicionário de verbos, pelo glossário da lição ou pelos nomes próprios. O `validate-content.js` confere isso.

### Aba Profissional (`content/pro/`)

- [content/pro/manifest.js](content/pro/manifest.js): `careers` (sub-abas: `{ id, label, title, desc, status, courses, languages, tracks }`). Em cada carreira: cursos, idiomas (`languages`, com `status: 'active' | 'soon'`) e, por idioma, níveis com a lista de lições e os guias.
- **Curso:** `content/pro/<carreira>/cursos/<id>.js` com `LUX.registerProCourse({ id, title, titleFr, hours, note, requires?, modules: [{ id, title, titleFr, blocks, exercises }] })`. Os blocos são os de Gerais (o francês precisa de cobertura no léxico); os exercícios contam para o módulo (70% = concluído). Progresso em `perfil.proCourses`.
  - `requires: '<id de outro curso>'`: o curso só libera quando aquele estiver concluído (ex.: Parte 2 do direito do trabalho depois da Parte 1). "Desbloquear tudo" no perfil também libera.
  - Bloco extra `{ type: 'case', title?, textPt, answerPt }`: estudo de caso, com a resposta escondida num "Ver a resposta comentada".
- **Termos em francês nos textos em português (toda a aba Profissional em francês):** escreva o francês em `*itálico*`; na página, cada palavra do itálico vira clicável (balão de tradução: léxico do curso e, se não achar, o dicionário completo). Itálico que **não** é francês (inglês, português) vai com `_sublinhados_`. Siglas no padrão `**ITM** (*Inspection du travail et des mines*): explicação`. Nas opções de múltipla escolha não use asteriscos (são botões, sem markdown).
- **Lição:** `content/pro/<lang>/<nível>/lNN.js` com `LUX.registerProLesson({ id, lang, level, order, sector, ...mesmo formato das lições do curso })`. No manifesto, `unit: N` libera a lição quando a unidade N do curso (mesmo nível) estiver concluída; `0` ou ausente = liberada.
- **Guia:** `content/pro/<lang>/guias/<id>.js` com `LUX.registerProGuide({ id, lang, title, titleFr, blocks })`, usando os mesmos blocos das páginas de Gerais (o bloco `tip` aceita `title`; links externos abrem em nova aba).
- **Outros idiomas (inglês e italiano já ativos):** o motor trata `lang`:
  - a voz escolhe uma voz do idioma (`LUX.tts.voiceForLang`, com `LUX.tts.contentLang` definido pela página);
  - os textos ganham `lang` e ficam sem o balão do léxico francês (o glossário [[...]] abre a tradução ao toque);
  - os rótulos de verdadeiro/falso seguem o idioma (Vrai/Faux, True/False, Vero/Falso);
  - a revisão (SRS) e a busca de conjugação ficam só para francês;
  - o validador pula a cobertura do léxico.

  Para ativar um idioma: crie os arquivos, liste-os no manifesto da aba e em `content/manifest.js` e mude o `status` para `'active'`.
- Personagens e empresas das lições são fictícios.

## Próximas fases

- ~~Fase 2~~ (concluída): unidades 2 a 6 do A2, teste de nível A2, 309 verbos, as 29 páginas de Gerais e o léxico do A2.
- **Fase 3:** B1 completo (cerca de 400 verbos).
- **Fase 4:** B2 completo (500 verbos ou mais).
- **Futuro:** exercícios de fala (o tipo `speaking` já está reservado) e, se desejado, MP3 pré-gravados.
