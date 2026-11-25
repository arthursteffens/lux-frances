LUX.registerProLesson({
  id: 'pro-en-b2-l01', lang: 'en', level: 'B2', order: 1, sector: 'Tecnologia',
  title: 'Getting to know your stakeholders', titlePt: 'Conhecendo seus stakeholders',
  names: ['Marina', 'Costa', 'Nuvio', 'Tom', 'Becker', 'Sofia', 'Rossi', 'Priya', 'Daniel'],
  objectives: [
    'Apresentar seu papel de HRBP para a liderança de forma clara e orientada ao negócio.',
    'Fazer perguntas indiretas e diplomáticas ("Could you walk me through…?").',
    'Montar um plano de 30-60-90 dias e explicá-lo em inglês.'
  ],
  vocabulary: [
    { fr: 'stakeholder', pt: 'parte interessada; pessoa-chave com quem você trabalha', ex: 'My key stakeholders are the VPs of Product and Engineering.' },
    { fr: 'to report to', pt: 'reportar-se a (ter como chefe)', pos: 'v', ex: 'I report directly to the Chief People Officer.' },
    { fr: 'to embed in', pt: 'atuar de dentro de, integrar-se a', pos: 'v', ex: 'I want to embed in the engineering leadership team.' },
    { fr: 'headcount', pt: 'número de funcionários; vagas aprovadas', ex: 'Our headcount will double this year.' },
    { fr: 'pain point', pt: 'ponto de dor, problema recorrente', ex: 'What are your biggest pain points right now?' },
    { fr: 'to walk someone through', pt: 'explicar passo a passo para alguém', pos: 'v', ex: 'Could you walk me through the product roadmap?' },
    { fr: 'priority', pt: 'prioridade', ex: 'Hiring senior engineers is our top priority.' },
    { fr: 'quick win', pt: 'vitória rápida, resultado fácil e visível', ex: 'Fixing the onboarding checklist is a quick win.' },
    { fr: 'to flag', pt: 'sinalizar, alertar sobre', pos: 'v', ex: 'I will flag any people risks early.' },
    { fr: 'sounding board', pt: 'pessoa de confiança para testar ideias', ex: 'I hope to be a sounding board for you.' },
    { fr: 'to align on', pt: 'alinhar-se sobre, chegar a acordo sobre', pos: 'v', ex: "Let's align on priorities before the quarter starts." },
    { fr: 'touch base', pt: 'conversar rapidamente, fazer contato', pos: 'expr', ex: "Let's touch base again next week." }
  ],
  reading: {
    genre: 'e-mail para a liderança',
    title: 'Subject: My first 90 days as your HR Business Partner',
    text: "Hi all,\n\n" +
      "As many of you know, I joined Nuvio last week as HR Business Partner for Product and Engineering, reporting to Sofia Rossi, our Chief People Officer. I'd like to share how I plan to spend my first 90 days, and ask for your input.\n\n" +
      "Days 1–30: listen and learn. I'll meet each of you one-to-one to understand your priorities, your [[roadmap|plano de produto]] and the people challenges you see coming. I'll also review our people data: [[attrition|rotatividade (saídas)]], engagement scores and the size of each team.\n\n" +
      "Days 31–60: focus. Based on what I hear, I'll propose three priorities for the year. My early guess is that they will involve team structure, the growth of new managers and hiring senior engineers, but I don't want to assume anything before talking to you.\n\n" +
      "Days 61–90: deliver. I'll aim for one or two quick wins, for example a simpler onboarding process, and present a people plan aligned with our business targets.\n\n" +
      "A few things you can expect from me: I'll flag people risks before they become problems, I'll bring data rather than opinions, and I'll keep processes as light as possible. I'm not here to add bureaucracy.\n\n" +
      "I'll send calendar invitations this week. If you'd rather meet over lunch or have a specific topic in mind, just let me know.\n\n" +
      "Looking forward to working with you,\nMarina",
    exercises: [
      { type: 'multiple_choice', prompt: 'Who does Marina report to?', options: ['Sofia Rossi, the Chief People Officer.', 'The VP of Engineering.', 'The CEO.', 'The VP of Product.'], answer: 0,
        explanationPt: '"reporting to Sofia Rossi, our Chief People Officer".' },
      { type: 'order_events', prompt: 'Coloque as fases do plano na ordem.', items: [
        'Meet each leader one-to-one.', 'Review the people data.', 'Propose three priorities for the year.', 'Deliver one or two quick wins.'
      ] },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'Marina has already decided the three priorities.', answer: 'F', explanationPt: '"I don\'t want to assume anything before talking to you."' },
        { text: 'She wants to keep processes light.', answer: 'V', explanationPt: '"I\'ll keep processes as light as possible."' },
        { text: 'She will move to the Berlin office.', answer: 'NM', explanationPt: 'O texto não fala de Berlim.' },
        { text: 'Leaders can suggest meeting over lunch.', answer: 'V', explanationPt: '"If you\'d rather meet over lunch… just let me know."' }
      ] },
      { type: 'multiple_choice', prompt: 'What is an example of a "quick win" in the e-mail?', options: ['A simpler onboarding process.', 'Doubling the headcount.', 'A new office.', 'A company-wide reorganisation.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a expressão ao significado.', pairs: [
        ['to flag a risk', 'sinalizar um risco'], ['quick win', 'resultado rápido e visível'], ['one-to-one', 'reunião individual'], ['input', 'opinião, contribuição'] ] }
    ]
  },
  listening: {
    genre: 'reunião individual',
    title: 'First one-to-one with the VP of Engineering',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'T', name: 'Tom', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Thanks for making the time, Tom. Could you walk me through your main priorities for this year?' },
      { speaker: 'T', text: 'Sure. We need to ship the new mobile app by June, and we\'re still eight engineers short.' },
      { speaker: 'M', text: 'Eight is a lot. Do you know why the roles are taking so long to fill?' },
      { speaker: 'T', text: 'Honestly, our salaries are below the market for senior people, and the interview process is far too long.' },
      { speaker: 'M', text: 'That\'s helpful. I was wondering how your managers are coping with the growth.' },
      { speaker: 'T', text: 'Not great. Two of them were promoted last year and nobody really trained them.' },
      { speaker: 'M', text: 'Would it help if we set up a short programme for new managers?' },
      { speaker: 'T', text: 'Definitely, as long as it doesn\'t take them away from their teams for days.' },
      { speaker: 'M', text: 'Understood. I\'ll come back to you with a proposal by the end of the month.' },
      { speaker: 'T', text: 'Perfect. And please keep me in the loop on the salary review.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'How many engineers is Tom missing?', options: ['Eight.', 'Two.', 'Eighteen.', 'Four.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'Tom thinks the interview process is too long.', answer: 'V', explanationPt: '"the interview process is far too long".' },
        { text: 'The two new managers received good training.', answer: 'F', explanationPt: '"nobody really trained them".' },
        { text: 'Tom wants a programme that keeps managers away for a week.', answer: 'F', explanationPt: 'Ele não quer que tirem os gestores das equipes por dias.' },
        { text: 'Tom used to work at a bank.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: 'Could you walk me through your main priorities for this year?', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Could you walk me through your main priorities for this year?', 'Could you talk me through your main priorities this year?', 'Can you walk me through the main priorities for next year?', 'Could you walk with me through your priorities for this year?'], answer: 0 },
      { type: 'dictation', text: 'Please keep me in the loop on the salary review.' }
    ]
  },
  grammar: {
    topicId: 'en-indirect-questions',
    title: 'Perguntas indiretas e diplomáticas',
    explanationPt: 'Com a liderança, perguntas diretas podem soar bruscas. O inglês profissional usa **perguntas indiretas**, que soam mais educadas e abertas:\n\n' +
      '- **Could you walk me through…?** / **Could you tell me…?**\n' +
      '- **I was wondering if / how / why…** (passado = mais delicado)\n' +
      '- **Would it help if we…?** (para propor sem impor)\n' +
      '- **Do you know why / what / where…?**\n\n' +
      'Regra de ouro: depois de *Could you tell me* / *Do you know* / *I was wondering*, a frase volta à **ordem normal** (sujeito + verbo), **sem do/does/did**: *Why **are the roles** taking so long?* → *Do you know why **the roles are** taking so long?*',
    table: { head: ['Pergunta direta', 'Pergunta indireta'], rows: [
      ['Why are people leaving?', 'Do you know why people are leaving?'],
      ['What does the team need?', 'Could you tell me what the team needs?'],
      ['How are your managers coping?', 'I was wondering how your managers are coping.'],
      ['Should we start a programme?', 'Would it help if we started a programme?']
    ] },
    examples: [
      { fr: 'Could you walk me through the product roadmap?', pt: 'Você poderia me explicar o roadmap do produto?' },
      { fr: 'I was wondering how the team feels about the changes.', pt: 'Eu queria entender como a equipe se sente com as mudanças.' },
      { fr: 'Do you know when the new manager starts?', pt: 'Você sabe quando o novo gestor começa?' },
      { fr: 'Would it help if I joined your next team meeting?', pt: 'Ajudaria se eu participasse da sua próxima reunião de equipe?' }
    ],
    ptComparison: 'Em português, a pergunta indireta já é natural ("Você sabe **por que as vagas estão** demorando?"), e o inglês segue a mesma lógica. O erro típico do brasileiro é manter a inversão: ~~Do you know why are the roles taking so long?~~ → **Do you know why the roles are taking so long?**\n\n' +
      '*"I was wondering"* não é sobre o passado: o passado aqui só **suaviza** o pedido, como o nosso "eu queria saber".'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Escolha a pergunta indireta correta.', options: ['Do you know why the project is late?', 'Do you know why is the project late?', 'Do you know why does the project late?', 'Do you know the project why is late?'], answer: 0,
      explanationPt: 'Depois de "Do you know why", ordem normal: sujeito + verbo.' },
    { type: 'fill_blank', prompt: 'Complete com a expressão adequada.', bank: ['walk me through', 'I was wondering', 'Would it help', 'keep me in the loop'], items: [
      { text: 'Could you ___ the hiring plan?', answers: ['walk me through'] },
      { text: '___ how the new managers are doing.', answers: ['I was wondering'] },
      { text: '___ if we shortened the interview process?', answers: ['Would it help'] },
      { text: 'Please ___ on the budget decision.', answers: ['keep me in the loop'] }
    ] },
    { type: 'multiple_choice', prompt: 'Transforme: "What does your team need?"', options: ['Could you tell me what your team needs?', 'Could you tell me what does your team need?', 'Could you tell me what your team does need?', 'Could you tell me your team what needs?'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'I was wondering how your managers are coping with the growth.', translation: 'Eu queria entender como seus gestores estão lidando com o crescimento.' }
  ],
  tipForBrazilians: '**Falsos amigos que aparecem logo na primeira reunião:**\n- *pretend* = fingir (não "pretender" → **intend / plan**).\n- *actually* = na verdade (não "atualmente" → **currently**).\n- *eventually* = no fim das contas (não "eventualmente" → **occasionally**).\n- *assist* = ajudar (não "assistir" → **watch / attend**).\n\n**Tom:** troque *I want* por **I\'d like**, e *You must* por **It might be worth…**. Em empresas europeias, a franqueza é bem-vinda, mas embrulhada em cortesia.'
});
