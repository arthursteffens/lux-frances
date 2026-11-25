LUX.registerProLesson({
  id: 'pro-en-b2-l02', lang: 'en', level: 'B2', order: 2, sector: 'Tecnologia',
  title: 'Tell me about a time when…', titlePt: 'Fale de uma vez em que…',
  names: ['Marina', 'Costa', 'Nuvio', 'Sofia', 'Rossi', 'Daniel', 'Moreau', 'São Paulo'],
  objectives: [
    'Responder a perguntas comportamentais com o método STAR (situação, tarefa, ação, resultado).',
    'Usar corretamente o past simple e o present perfect para contar a trajetória.',
    'Destacar resultados com números e verbos de impacto (led, designed, reduced).'
  ],
  vocabulary: [
    { fr: 'behavioural question', pt: 'pergunta comportamental', ex: 'Most of the interview was behavioural questions.' },
    { fr: 'to lead', pt: 'liderar, conduzir (led, led)', pos: 'v', ex: 'I led the integration of two HR teams.' },
    { fr: 'to scale', pt: 'crescer, escalar (uma empresa ou equipe)', pos: 'v', ex: 'We scaled from 50 to 400 people in three years.' },
    { fr: 'restructuring', pt: 'reestruturação', ex: 'The restructuring affected three departments.' },
    { fr: 'to push back', pt: 'contestar, discordar com argumentos', pos: 'v', ex: 'I pushed back on the plan because the data did not support it.' },
    { fr: 'outcome', pt: 'resultado, desfecho', ex: 'What was the outcome of the project?' },
    { fr: 'to reduce', pt: 'reduzir', pos: 'v', ex: 'We reduced attrition by 20 percent.' },
    { fr: 'buy-in', pt: 'adesão, apoio (de pessoas)', ex: 'I needed buy-in from the leadership team.' },
    { fr: 'to roll out', pt: 'implementar, lançar (em etapas)', pos: 'v', ex: 'We rolled out the new review process in March.' },
    { fr: 'lesson learned', pt: 'lição aprendida', ex: 'My main lesson learned was to involve managers earlier.' },
    { fr: 'track record', pt: 'histórico comprovado de resultados', ex: 'She has a strong track record in fast-growing companies.' },
    { fr: 'to hand in your notice', pt: 'pedir demissão (avisar que vai sair)', pos: 'expr', ex: 'Two engineers handed in their notice in the same week.' }
  ],
  reading: {
    genre: 'preparação para entrevista',
    title: "Marina's interview notes: one story, four steps",
    text: "Interviewers for senior HR roles rarely ask \"What are your strengths?\" anymore. Instead, they ask behavioural questions: \"Tell me about a time when you disagreed with a senior leader\" or \"Give me an example of a reorganisation you led.\" The best way to answer is the STAR method.\n\n" +
      "Situation. Set the scene in one or two sentences. \"In 2022, I was HR Business Partner at a software start-up in São Paulo. We had grown from 50 to 400 people in three years.\"\n\n" +
      "Task. Explain what you were responsible for. \"The CEO asked me to redesign the engineering organisation, because some managers had more than fifteen direct reports.\"\n\n" +
      "Action. This is the longest part, and it should be about you, so use \"I\" rather than \"we\". \"I analysed the span of control in every team, interviewed twelve managers and proposed a new structure with smaller teams. When the CTO wanted to promote three people without any [[calibration|calibragem: comparação justa entre avaliações]], I pushed back and showed him the data.\"\n\n" +
      "Result. Finish with numbers and, if possible, a lesson learned. \"Six months later, attrition in engineering had dropped by 20 percent and engagement had risen by eleven points. I learned to involve managers earlier: I have done that in every project since.\"\n\n" +
      "Notice the tenses. Finished events with a date use the past simple (\"In 2022, I led…\"). Experience up to now, with no specific time, uses the present perfect (\"I have led three reorganisations\").",
    exercises: [
      { type: 'order_events', prompt: 'Coloque as etapas do método STAR na ordem.', items: ['Situation', 'Task', 'Action', 'Result'] },
      { type: 'multiple_choice', prompt: 'Which part of the answer should be the longest?', options: ['The action.', 'The situation.', 'The task.', 'The result.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'In the action, the candidate should say "we" as much as possible.', answer: 'F', explanationPt: '"use I rather than we".' },
        { text: 'Attrition in engineering dropped by 20 percent.', answer: 'V', explanationPt: '"attrition in engineering had dropped by 20 percent".' },
        { text: 'The CTO accepted the data immediately.', answer: 'NM', explanationPt: 'O texto não diz como o CTO reagiu.' },
        { text: 'The past simple is used for finished events with a date.', answer: 'V', explanationPt: '"Finished events with a date use the past simple".' }
      ] },
      { type: 'multiple_choice', prompt: 'Why did the CEO ask for a redesign?', options: ['Some managers had more than fifteen direct reports.', 'The company was losing money.', 'The CTO was leaving.', 'The company had moved offices.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a frase à etapa do STAR.', pairs: [
        ['We had grown from 50 to 400 people.', 'Situation'], ['The CEO asked me to redesign the organisation.', 'Task'], ['I interviewed twelve managers.', 'Action'], ['Attrition dropped by 20 percent.', 'Result'] ] }
    ]
  },
  listening: {
    genre: 'entrevista de emprego',
    title: 'Final-round interview with the CEO',
    speakers: [{ id: 'D', name: 'Daniel', gender: 'm' }, { id: 'M', name: 'Marina', gender: 'f' }],
    script: [
      { speaker: 'D', text: 'Marina, tell me about a time when you disagreed with a senior leader.' },
      { speaker: 'M', text: 'Sure. Last year, our CTO wanted to promote three engineers to manager in the same month.' },
      { speaker: 'D', text: 'And what was the problem?' },
      { speaker: 'M', text: 'None of them had managed people before, and two teams would have lost their best developers.' },
      { speaker: 'D', text: 'So what did you do?' },
      { speaker: 'M', text: 'I showed him the data from our last two promotion cycles and suggested a six-month pilot with one person first.' },
      { speaker: 'D', text: 'How did he react?' },
      { speaker: 'M', text: 'He wasn\'t happy at first, but he agreed to the pilot. It worked well, and we have used the same approach ever since.' },
      { speaker: 'D', text: 'Have you ever worked in a regulated industry?' },
      { speaker: 'M', text: 'Yes, I started my career at a bank, so I\'m used to compliance requirements.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'How many engineers did the CTO want to promote?', options: ['Three.', 'Two.', 'Six.', 'One.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'The three engineers had managed people before.', answer: 'F', explanationPt: '"None of them had managed people before".' },
        { text: 'Marina suggested a six-month pilot.', answer: 'V', explanationPt: '"suggested a six-month pilot with one person first".' },
        { text: 'The CTO was happy with the idea immediately.', answer: 'F', explanationPt: '"He wasn\'t happy at first".' },
        { text: 'Marina has worked in a bank.', answer: 'V', explanationPt: '"I started my career at a bank".' }
      ] },
      { type: 'listen_choose', audio: 'We have used the same approach ever since.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['We have used the same approach ever since.', 'We used the same approach ever since.', 'We have used the same approach since then.', 'We are using the same approach ever since.'], answer: 0 },
      { type: 'dictation', text: 'Have you ever worked in a regulated industry?' }
    ]
  },
  grammar: {
    topicId: 'en-past-simple-present-perfect',
    title: 'Past simple × present perfect na trajetória',
    explanationPt: 'Na entrevista, os dois tempos aparecem o tempo todo, e o entrevistador percebe quando eles se confundem.\n\n' +
      '- **Past simple** (*I led, I worked, we reduced*): fato **terminado**, com **quando** dito ou subentendido: *In 2022, I led a restructuring.* / *At my last company, I worked with three directors.*\n' +
      '- **Present perfect** (*I have led, I\'ve worked*): **experiência** até hoje, **sem data**: *I have led three reorganisations.* / *Have you ever worked in fintech?* Também com **since / for / ever / never / so far**.\n' +
      '- **Past perfect** (*had grown, had dropped*): o que já tinha acontecido **antes** de outro momento do passado: *By then, we had grown to 400 people.*',
    table: { head: ['Tempo', 'Quando usar', 'Exemplo'], rows: [
      ['Past simple', 'fato terminado, com data', 'In 2021, I joined a start-up.'],
      ['Present perfect', 'experiência, sem data', "I've managed teams of up to 30 people."],
      ['Present perfect + since/for', 'algo que continua até agora', "I've worked in HR for eight years."],
      ['Past perfect', 'antes de outro passado', 'When I arrived, attrition had doubled.']
    ] },
    examples: [
      { fr: 'In 2019, I moved to a software company.', pt: 'Em 2019, fui para uma empresa de software.' },
      { fr: "I've worked with C-level executives for five years.", pt: 'Trabalho com executivos C-level há cinco anos.' },
      { fr: 'Have you ever led a merger integration?', pt: 'Você já liderou a integração de uma fusão?' },
      { fr: 'When I joined, the company had already doubled in size.', pt: 'Quando entrei, a empresa já tinha dobrado de tamanho.' }
    ],
    ptComparison: '**"Trabalho com RH há oito anos"** NÃO é ~~I work in HR for eight years~~ nem ~~I worked…~~: é **I have worked in HR for eight years** (algo que começou no passado e continua).\n\n' +
      'E com data no passado, nunca present perfect: ~~I have joined Nuvio in 2024~~ → **I joined Nuvio in 2024**.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Past simple ou present perfect?', items: [
      { text: 'In 2022, I ___ a big reorganisation. (lead)', answers: ['led'] },
      { text: 'I ___ in HR for eight years. (work)', answers: ['have worked', "'ve worked"] },
      { text: '___ you ever worked in fintech? (have)', answers: ['Have'] },
      { text: 'Last year, we ___ attrition by 15 percent. (reduce)', answers: ['reduced'] },
      { text: 'When I arrived, engagement ___ for two years. (fall — past perfect)', answers: ['had fallen'] }
    ] },
    { type: 'multiple_choice', prompt: '"Sou HRBP desde 2021."', options: ["I've been an HRBP since 2021.", 'I am an HRBP since 2021.', 'I was an HRBP since 2021.', 'I am being an HRBP since 2021.'], answer: 0,
      explanationPt: 'Começou no passado e continua: present perfect + since.' },
    { type: 'match', prompt: 'Ligue o verbo de impacto ao sentido.', pairs: [
      ['led', 'liderou'], ['designed', 'desenhou, estruturou'], ['reduced', 'reduziu'], ['rolled out', 'implementou'] ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'I have led three reorganisations in fast-growing companies.', translation: 'Já liderei três reorganizações em empresas de crescimento rápido.' }
  ],
  tipForBrazilians: '**"I" na hora de contar a ação.** Brasileiros tendem a usar "nós" por modéstia, mas, na entrevista, o recrutador precisa saber o **seu** papel: use *we* para o contexto e **I** para as ações.\n\n' +
    '**Números sempre:** *"from 50 to 400 people"*, *"by 20 percent"*, *"in six months"*. Prepare 4 histórias STAR: um conflito com um líder, uma reorganização, uma decisão com dados e um erro com a lição aprendida.'
});
