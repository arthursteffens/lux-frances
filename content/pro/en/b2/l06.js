LUX.registerProLesson({
  id: 'pro-en-b2-l06', lang: 'en', level: 'B2', order: 6, sector: 'Fintech',
  title: 'Workforce planning for a fintech launch', titlePt: 'Planejamento de equipe para o lançamento de uma fintech',
  names: ['Marina', 'Nuvio', 'Sofia', 'Rossi', 'James', 'Carter', 'CSSF', 'Luxembourg'],
  objectives: [
    'Apresentar um plano de headcount ligado ao orçamento e às metas do negócio.',
    'Falar de regulação e compliance numa empresa de pagamentos.',
    'Usar formas de futuro e de condição para planos e compromissos (will, be going to, be expected to, unless).'
  ],
  vocabulary: [
    { fr: 'headcount plan', pt: 'plano de headcount (contratações previstas)', ex: 'The headcount plan has to fit the budget.' },
    { fr: 'P&L (profit and loss)', pt: 'demonstrativo de resultados', ex: 'Payroll is the biggest line in our P&L.' },
    { fr: 'unit economics', pt: 'economia por unidade (receita e custo por cliente ou transação)', ex: 'Our unit economics improve as volume grows.' },
    { fr: 'payroll', pt: 'folha de pagamento', ex: 'Payroll will grow by 20 percent next year.' },
    { fr: 'licence', pt: 'licença (autorização oficial; "license" nos EUA)', ex: 'We need a payment institution licence.' },
    { fr: 'compliance', pt: 'compliance, conformidade com as regras', ex: 'Compliance roles are hard to fill.' },
    { fr: 'regulator', pt: 'órgão regulador', ex: 'In Luxembourg, the regulator is the CSSF.' },
    { fr: 'anti-money laundering (AML)', pt: 'prevenção à lavagem de dinheiro', ex: 'We need an AML officer before launch.' },
    { fr: 'to phase', pt: 'fazer em etapas', pos: 'v', ex: "Let's phase the hiring over three quarters." },
    { fr: 'to be on track', pt: 'estar dentro do previsto', pos: 'expr', ex: 'Hiring is on track for the June launch.' },
    { fr: 'contingency', pt: 'reserva para imprevistos', ex: 'We kept a ten percent contingency in the budget.' },
    { fr: 'to sign off', pt: 'aprovar formalmente', pos: 'v', ex: 'The CFO needs to sign off the plan.' }
  ],
  reading: {
    genre: 'memorando para a diretoria',
    title: 'Memo: People plan for Nuvio Pay',
    text: "Next year, Nuvio is going to launch Nuvio Pay, a payment solution for our existing business customers. This memo sets out the team we will need, when we will need it, and what it will cost.\n\n" +
      "Team. Nuvio Pay will need 22 people by the end of the year: 12 engineers, 4 product and design roles, 3 people in compliance and risk, 2 in customer operations and one head of payments. Around half of the engineers are expected to come from our current teams; five have already expressed interest.\n\n" +
      "Timing. Because the business will be supervised by the CSSF, the regulator in Luxembourg, we cannot apply for a payment licence without a compliance officer and an anti-money laundering officer in place. These two roles are therefore our first priority and should be filled by March. Engineering hiring will be phased over the second and third quarters, so that payroll grows in line with revenue.\n\n" +
      "Cost. The total people cost for the year is estimated at 1.9 million euros, including a ten percent contingency. Compliance specialists are scarce in Luxembourg and are likely to cost 15 to 20 percent more than our usual salary bands; we recommend searching in Belgium, France and Germany as well, and offering relocation support.\n\n" +
      "Risks. Unless the two compliance roles are filled on time, the licence application will be delayed and the launch will move to the following year. Internal moves could also leave gaps in existing teams, so every move will be agreed with the current manager first.\n\n" +
      "Decision needed. We are asking the leadership team to sign off the plan by the end of this month, so that recruitment can start in January.",
    exercises: [
      { type: 'multiple_choice', prompt: 'How many people will Nuvio Pay need by the end of the year?', options: ['22.', '12.', '5.', '19.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'The compliance roles are the first priority.', answer: 'V', explanationPt: '"These two roles are therefore our first priority".' },
        { text: 'All engineers will be hired from outside the company.', answer: 'F', explanationPt: 'Cerca de metade deve vir das equipes atuais.' },
        { text: 'The budget includes a contingency.', answer: 'V', explanationPt: '"including a ten percent contingency".' },
        { text: 'The CSSF has already approved the licence.', answer: 'NM', explanationPt: 'A licença ainda nem foi pedida.' }
      ] },
      { type: 'multiple_choice', prompt: 'What happens if the compliance roles are not filled on time?', options: ['The licence application and the launch will be delayed.', 'The budget will be cut.', 'The engineers will be moved to compliance.', 'Nothing important.'], answer: 0 },
      { type: 'match', prompt: 'Ligue o número ao que ele representa.', pairs: [
        ['22', 'people needed for Nuvio Pay'], ['1.9 million euros', 'total people cost'], ['ten percent', 'contingency'], ['15 to 20 percent', 'extra cost of compliance specialists'] ] }
    ]
  },
  listening: {
    genre: 'reunião de orçamento',
    title: 'Negotiating the plan with the CFO',
    speakers: [{ id: 'J', name: 'James', gender: 'm' }, { id: 'M', name: 'Marina', gender: 'f' }, { id: 'S', name: 'Sofia', gender: 'f' }],
    script: [
      { speaker: 'J', text: '1.9 million is more than we discussed. Can we start with fewer engineers?' },
      { speaker: 'M', text: 'We could. If we hired eight instead of twelve, we\'d save about 300,000 euros, but the launch would probably slip by a quarter.' },
      { speaker: 'J', text: 'And the compliance salaries? They\'re well above our bands.' },
      { speaker: 'M', text: 'They are, but without those two people we can\'t even apply for the licence. That\'s the one area I wouldn\'t compromise on.' },
      { speaker: 'S', text: 'What about the internal candidates? That should reduce recruitment costs.' },
      { speaker: 'M', text: 'Yes, five engineers are interested. If they move, we\'ll save on fees, but we\'ll need to backfill some of their roles.' },
      { speaker: 'J', text: 'OK. Send me a version with two scenarios: twelve engineers and eight engineers.' },
      { speaker: 'M', text: 'I will. You\'ll have it on Friday, with the impact on the launch date for each one.' },
      { speaker: 'S', text: 'Then we can take it to the leadership team on Monday.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'How much would the company save by hiring eight engineers instead of twelve?', options: ['About 300,000 euros.', 'About 1.9 million euros.', 'About 30,000 euros.', 'Nothing.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'Marina is willing to reduce the compliance budget.', answer: 'F', explanationPt: '"That\'s the one area I wouldn\'t compromise on."' },
        { text: 'Internal moves will create some roles to backfill.', answer: 'V', explanationPt: '"we\'ll need to backfill some of their roles".' },
        { text: 'Marina will send two scenarios on Friday.', answer: 'V', explanationPt: '"You\'ll have it on Friday".' },
        { text: 'James used to work at the CSSF.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: "That's the one area I wouldn't compromise on.", prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ["That's the one area I wouldn't compromise on.", "That's the only area I won't compromise on.", "That's one area I would compromise on.", "That's the one area we couldn't compromise on."], answer: 0 },
      { type: 'dictation', text: "You'll have it on Friday, with the impact on the launch date." }
    ]
  },
  grammar: {
    topicId: 'en-future-forms',
    title: 'Futuro em planos e compromissos',
    explanationPt: 'Num plano de negócios, cada forma de futuro passa uma mensagem diferente:\n\n' +
      '- **will**: previsão ou compromisso: *Nuvio Pay **will need** 22 people.* / *You**\'ll have** it on Friday.*\n' +
      '- **be going to**: plano já decidido: *Next year, Nuvio **is going to launch** a payment solution.*\n' +
      '- **be expected to / be likely to**: previsão com cautela: *Half of the engineers **are expected to come** from internal teams.* / *Specialists **are likely to cost** more.*\n' +
      '- **unless** = *if… not*: *Unless the roles are filled on time, the launch **will be delayed**.*\n' +
      '- Depois de **if / unless / when / as soon as**, use o **presente** para falar do futuro: *As soon as the plan **is** signed off, we**\'ll start** hiring.*',
    table: { head: ['Forma', 'Mensagem', 'Exemplo'], rows: [
      ['will', 'previsão / compromisso', 'Payroll will grow by 20 percent.'],
      ['be going to', 'plano decidido', 'We are going to open a team in Luxembourg.'],
      ['be expected to', 'previsão cautelosa', 'Costs are expected to rise.'],
      ['unless + presente', 'condição negativa', "Unless we hire by March, we'll miss the launch."]
    ] },
    examples: [
      { fr: 'We are going to launch the product in June.', pt: 'Vamos lançar o produto em junho.' },
      { fr: 'Compliance specialists are likely to cost more than our usual bands.', pt: 'Especialistas de compliance provavelmente vão custar mais que nossas faixas habituais.' },
      { fr: "Unless the CFO signs off the plan, we can't start recruiting.", pt: 'A menos que o CFO aprove o plano, não podemos começar a recrutar.' },
      { fr: "As soon as the licence is granted, we'll announce the launch.", pt: 'Assim que a licença for concedida, anunciaremos o lançamento.' }
    ],
    ptComparison: 'Em português usamos o **futuro do subjuntivo** depois de "se", "quando" e "assim que" ("**quando** a licença **for** concedida"). Em inglês, nesse lugar vai o **presente simples**: *when the licence **is** granted* — nunca ~~when the licence will be granted~~.\n\n' +
      '**Unless** já contém o "não": ~~Unless we don\'t hire~~ → **Unless we hire**.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com a forma correta.', items: [
      { text: 'As soon as the plan ___ signed off, we will start hiring. (be)', answers: ['is'] },
      { text: '___ the compliance roles are filled, the launch will be delayed.', answers: ['Unless'] },
      { text: 'Half of the engineers are ___ to come from internal teams.', answers: ['expected'] },
      { text: 'Next year, Nuvio ___ going to launch a payment solution.', answers: ['is'] }
    ] },
    { type: 'multiple_choice', prompt: '"Quando a licença for concedida, vamos contratar mais engenheiros."', options: ["When the licence is granted, we'll hire more engineers.", 'When the licence will be granted, we hire more engineers.', 'When the licence will be granted, we will hire more engineers.', 'When the licence is granted, we hire more engineers yesterday.'], answer: 0 },
    { type: 'match', prompt: 'Ligue o termo da fintech à tradução.', pairs: [
      ['payment institution licence', 'licença de instituição de pagamento'], ['anti-money laundering', 'prevenção à lavagem de dinheiro'], ['regulator', 'órgão regulador'], ['to backfill a role', 'repor uma vaga'] ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'We are asking the leadership team to sign off the plan this month.', translation: 'Estamos pedindo que a diretoria aprove o plano este mês.' }
  ],
  tipForBrazilians: '**Fale a língua do CFO.** Para um diretor financeiro, "people plan" é custo: chegue com **cenários** (*two scenarios: twelve and eight engineers*), o **impacto no negócio** de cada um (*the launch would slip by a quarter*) e o ponto em que você **não negocia** (*the one area I wouldn\'t compromise on*). É exatamente o "business acumen" que vagas de HRBP pedem.\n\n' +
    '**Licence × license:** no inglês britânico, *licence* é substantivo e *license* é verbo; no americano, *license* serve para os dois.'
});
