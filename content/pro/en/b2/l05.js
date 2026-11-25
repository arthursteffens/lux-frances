LUX.registerProLesson({
  id: 'pro-en-b2-l05', lang: 'en', level: 'B2', order: 5, sector: 'Tecnologia',
  title: 'Coaching leaders and pushing back', titlePt: 'Fazer coaching de líderes e discordar com elegância',
  names: ['Marina', 'Nuvio', 'Tom', 'Becker', 'Leo'],
  objectives: [
    'Conduzir uma conversa de coaching com um diretor usando perguntas abertas.',
    'Discordar e desafiar decisões com linguagem diplomática e dados.',
    'Usar condicionais (If we…, we would…) para explorar alternativas.'
  ],
  vocabulary: [
    { fr: 'coaching', pt: 'coaching, apoio ao desenvolvimento por meio de perguntas', ex: 'Coaching is about asking, not telling.' },
    { fr: 'underperformance', pt: 'desempenho abaixo do esperado', ex: "We need to address Leo's underperformance." },
    { fr: 'performance improvement plan (PIP)', pt: 'plano de melhoria de desempenho', ex: 'A PIP should have clear, measurable goals.' },
    { fr: 'feedback', pt: 'feedback, retorno (incontável em inglês)', ex: 'Has he received any clear feedback?' },
    { fr: 'calibration', pt: 'calibragem (comparar avaliações entre gestores para serem justas)', ex: 'Calibration makes ratings fairer across teams.' },
    { fr: 'to address', pt: 'tratar de, lidar com (um problema)', pos: 'v', ex: "Let's address the issue directly." },
    { fr: 'to challenge', pt: 'questionar, desafiar (uma decisão)', pos: 'v', ex: 'My role is to challenge decisions when the data says otherwise.' },
    { fr: 'tough call', pt: 'decisão difícil', ex: 'Letting someone go is always a tough call.' },
    { fr: 'to let someone go', pt: 'demitir alguém (eufemismo)', pos: 'v', ex: 'He wants to let Leo go next week.' },
    { fr: 'legal risk', pt: 'risco jurídico', ex: 'Firing someone without documentation creates legal risk.' },
    { fr: 'to step back', pt: 'dar um passo atrás, olhar com distância', pos: 'v', ex: "Let's step back and look at the facts." },
    { fr: 'what would good look like?', pt: 'como seria o resultado ideal?', pos: 'expr', ex: 'In six months, what would good look like for this team?' }
  ],
  reading: {
    genre: 'artigo interno para gestores',
    title: 'Five questions that make you a better manager',
    text: "As an HR Business Partner, I spend a lot of time with directors who are under pressure and want a quick answer: \"Should I fire him?\", \"Should I promote her?\" My job is rarely to give the answer. It is to help them think more clearly, and sometimes to challenge them when the facts don't support their first reaction.\n\n" +
      "Here are five questions I use in almost every coaching conversation.\n\n" +
      "1. \"What exactly have you observed?\" This separates facts from impressions. \"He is lazy\" is an opinion; \"he missed three deadlines this quarter\" is a fact you can discuss.\n\n" +
      "2. \"Has he received clear feedback?\" Surprisingly often, the answer is no. People cannot fix a problem nobody has told them about.\n\n" +
      "3. \"What would good look like in three months?\" This turns a complaint into a goal.\n\n" +
      "4. \"What might be getting in the way?\" Underperformance can come from unclear priorities, a personal situation or a role that has changed. A manager who asks this question often discovers something new.\n\n" +
      "5. \"If you were in his position, what would you need?\"\n\n" +
      "When I disagree with a leader, I try to do it in private, with data, and with an alternative. Saying \"I wouldn't do that\" is not enough. Saying \"If we let him go now, we would lose the only person who knows the payment system, and we would have no documentation in case of a dispute. What if we tried a clear six-week plan first?\" gives the leader a real choice.\n\n" +
      "Good HR is not about protecting the company from managers, or managers from the company. It is about helping leaders make decisions they will still be comfortable with a year later.",
    exercises: [
      { type: 'multiple_choice', prompt: 'According to the author, what is the HRBP\'s job in coaching?', options: ['To help leaders think more clearly.', 'To give leaders the answer quickly.', 'To protect managers from the company.', 'To decide who gets promoted.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a pergunta ao objetivo dela.', pairs: [
        ['What exactly have you observed?', 'separate facts from impressions'], ['Has he received clear feedback?', 'check if the person knows about the problem'],
        ['What would good look like in three months?', 'turn a complaint into a goal'], ['What might be getting in the way?', 'find hidden causes'] ] },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'The author prefers to disagree with leaders in public.', answer: 'F', explanationPt: '"I try to do it in private".' },
        { text: '"He missed three deadlines" is presented as a fact.', answer: 'V', explanationPt: '"is a fact you can discuss".' },
        { text: 'The author has a degree in psychology.', answer: 'NM', explanationPt: 'Não se fala da formação.' },
        { text: 'Disagreeing well includes offering an alternative.', answer: 'V', explanationPt: '"with data, and with an alternative".' }
      ] },
      { type: 'multiple_choice', prompt: 'Why would letting the employee go now be risky?', options: ['He is the only one who knows the payment system and there is no documentation.', 'He is the best-paid engineer.', 'The company is being sold.', 'He is about to be promoted.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'conversa difícil',
    title: 'A director wants to fire someone this week',
    speakers: [{ id: 'T', name: 'Tom', gender: 'm' }, { id: 'M', name: 'Marina', gender: 'f' }],
    script: [
      { speaker: 'T', text: 'I\'ve had enough. Leo missed another release. I want to let him go this week.' },
      { speaker: 'M', text: 'I hear your frustration. Before we decide, can we step back for a minute? What exactly has happened?' },
      { speaker: 'T', text: 'Three missed deadlines since September. And he barely speaks in meetings.' },
      { speaker: 'M', text: 'Has anyone given him clear feedback about the deadlines?' },
      { speaker: 'T', text: 'Well… not formally. I assumed he knew.' },
      { speaker: 'M', text: 'I see. If we let him go now, we\'d have no documentation, and that would be a real legal risk.' },
      { speaker: 'T', text: 'So what do you suggest?' },
      { speaker: 'M', text: 'I\'d suggest a six-week plan with two or three clear goals. If he doesn\'t meet them, the decision will be much easier and fairer.' },
      { speaker: 'T', text: 'Fine. But I don\'t want this to drag on for months.' },
      { speaker: 'M', text: 'Agreed. Let\'s write the goals together tomorrow, and I\'ll join your first conversation with him.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'How many deadlines has Leo missed since September?', options: ['Three.', 'Two.', 'Six.', 'One.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'Tom has given Leo formal feedback.', answer: 'F', explanationPt: '"not formally. I assumed he knew."' },
        { text: 'Marina suggests a six-week plan.', answer: 'V', explanationPt: '"a six-week plan with two or three clear goals".' },
        { text: 'Marina will join the first conversation with Leo.', answer: 'V', explanationPt: '"I\'ll join your first conversation with him".' },
        { text: 'Leo has asked to change teams.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: "If we let him go now, we'd have no documentation.", prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ["If we let him go now, we'd have no documentation.", "If we let him go now, we'll have no documentation.", "If we'd let him go now, we had no documentation.", 'If we let him go, we have no documentation now.'], answer: 0 },
      { type: 'dictation', text: "I hear your frustration. Can we step back for a minute?" }
    ]
  },
  grammar: {
    topicId: 'en-diplomatic-conditionals',
    title: 'Linguagem diplomática e condicionais',
    explanationPt: 'Para **discordar sem confronto**, o inglês profissional usa modais e condicionais que suavizam a mensagem e abrem espaço para alternativas:\n\n' +
      '- **Suavizadores:** *I\'d suggest… / It might be worth… / I\'m not sure that… / Have you considered…? / What if we…?*\n' +
      '- **Segunda condicional** (hipótese, para explorar o cenário com cuidado): **If + past, would + verbo**: *If we **let** him go now, we **would lose** our only payment expert.*\n' +
      '- **Primeira condicional** (consequência real e provável): **If + present, will + verbo**: *If he **doesn\'t meet** the goals, the decision **will be** easier.*\n\n' +
      'A segunda condicional soa mais delicada: ela apresenta a ideia do outro como hipótese, não como erro.',
    table: { head: ['Direto (pode soar duro)', 'Diplomático'], rows: [
      ["That's a bad idea.", "I'm not sure that's the best option."],
      ['You must give him feedback first.', 'It might be worth giving him feedback first.'],
      ["We can't fire him.", 'If we let him go now, we would face legal risk.'],
      ['Do a plan.', 'What if we tried a six-week plan?']
    ] },
    examples: [
      { fr: "I'd suggest we wait until we have more data.", pt: 'Eu sugeriria esperarmos até termos mais dados.' },
      { fr: 'It might be worth talking to the team first.', pt: 'Talvez valha a pena falar com a equipe primeiro.' },
      { fr: 'If we promoted her now, the team would lose its best engineer.', pt: 'Se a promovêssemos agora, a equipe perderia sua melhor engenheira.' },
      { fr: "If he doesn't improve, we'll review the situation in six weeks.", pt: 'Se ele não melhorar, revisaremos a situação em seis semanas.' }
    ],
    ptComparison: 'O nosso futuro do pretérito ("**perderíamos**", "**seria**") corresponde ao **would**. Cuidado: depois de **if**, nunca vai *would*: ~~If we would let him go~~ → **If we let him go**, we would…\n\n' +
      '**Feedback** e **advice** são incontáveis: diga *some feedback*, *a piece of advice*, nunca ~~a feedback~~ nem ~~advices~~.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete a condicional.', items: [
      { text: 'If we let him go now, we ___ our payment expert. (lose — 2ª condicional)', answers: ['would lose', "'d lose"] },
      { text: "If he doesn't meet the goals, the decision ___ easier. (be — 1ª condicional)", answers: ['will be'] },
      { text: 'If we ___ more managers, each team would get more attention. (have)', answers: ['had'] },
      { text: 'If you give clear feedback, he ___ what to change. (know)', answers: ['will know'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual frase é a mais diplomática para discordar de um diretor?', options: ["I'm not sure that's the best option. What if we tried a plan first?", "That's wrong.", 'You must not do that.', 'No, we cannot.'], answer: 0 },
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ['Can I give you some feedback?', 'Can I give you a feedback?', 'Can I give you feedbacks?', 'Can I give to you a feedback?'], answer: 0,
      explanationPt: '"Feedback" é incontável: some feedback.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'It might be worth giving him clear feedback first.', translation: 'Talvez valha a pena dar a ele um feedback claro primeiro.' }
  ],
  tipForBrazilians: '**"Push back" não é falta de educação.** Em empresas de tecnologia, espera-se que o HRBP desafie a liderança com dados; o que conta é o *como*: em particular, com fatos e com uma alternativa. Não precisa concordar na hora para "manter o clima": *"Let me think about it and come back to you tomorrow"* é perfeitamente profissional.\n\n' +
    '**Cuidado com "I agree with you, but…"** repetido: o *but* apaga a primeira parte. Experimente *"I see your point, and I\'m also worried about…"*.'
});
