LUX.registerProLesson({
  id: 'pro-en-b2-l04', lang: 'en', level: 'B2', order: 4, sector: 'Tecnologia',
  title: 'Turning data into decisions', titlePt: 'Transformando dados em decisões',
  names: ['Marina', 'Nuvio', 'Daniel', 'James', 'Carter', 'Tom'],
  objectives: [
    'Apresentar indicadores de pessoas (attrition, engajamento, custo) para a diretoria.',
    'Descrever tendências com precisão: rise, fall, peak, by × to, sharply, slightly.',
    'Ligar cada número a um risco de negócio e a uma recomendação.'
  ],
  vocabulary: [
    { fr: 'people analytics', pt: 'análise de dados de pessoas', ex: 'People analytics should drive decisions, not just reports.' },
    { fr: 'attrition rate', pt: 'taxa de rotatividade (saídas)', ex: 'Our attrition rate rose to 18 percent.' },
    { fr: 'regretted attrition', pt: 'saídas de pessoas que a empresa queria manter', ex: 'Regretted attrition is what really worries me.' },
    { fr: 'engagement score', pt: 'nota de engajamento', ex: 'The engagement score fell by six points.' },
    { fr: 'to rise / to increase', pt: 'subir, aumentar', pos: 'v', ex: 'Hiring costs rose sharply in the last quarter.' },
    { fr: 'to fall / to drop', pt: 'cair', pos: 'v', ex: 'Engagement dropped slightly in the data team.' },
    { fr: 'to peak', pt: 'atingir o pico', pos: 'v', ex: 'Departures peaked in March.' },
    { fr: 'to level off', pt: 'estabilizar', pos: 'v', ex: 'After the changes, attrition levelled off.' },
    { fr: 'percentage point', pt: 'ponto percentual', ex: 'Attrition went up by four percentage points.' },
    { fr: 'cost-to-hire', pt: 'custo por contratação', ex: 'Our cost-to-hire for senior engineers is very high.' },
    { fr: 'insight', pt: 'percepção, conclusão útil tirada dos dados', ex: 'The key insight is that people leave in their second year.' },
    { fr: 'bottom line', pt: 'resultado final; o essencial', ex: 'The bottom line is that we are losing our best engineers.' }
  ],
  reading: {
    genre: 'resumo executivo',
    title: 'People dashboard — Q3 summary for the leadership team',
    text: "Headline: we are losing the people we most want to keep.\n\n" +
      "Overall attrition rose from 14 percent to 18 percent over the last twelve months, an increase of four percentage points. More worrying, regretted attrition, meaning people we wanted to keep, doubled from 5 to 10 percent. Departures peaked in March, just after the annual salary review, and have levelled off since June.\n\n" +
      "Where is it happening? Almost two thirds of regretted leavers were senior engineers in their second or third year. In exit interviews, the main reasons were lack of career progression (mentioned by 61 percent), pay below market (44 percent) and managers with too many direct reports (38 percent). Interestingly, very few people mentioned remote work.\n\n" +
      "What does it cost? Replacing a senior engineer costs us roughly 40,000 euros once you add recruitment fees, onboarding time and lost productivity. At the current rate, that is about 1.2 million euros a year, more than the whole learning budget.\n\n" +
      "Engagement fell slightly overall, from 76 to 73, but dropped sharply in the data team, by eleven points, after its reorganisation.\n\n" +
      "Recommendations. First, introduce a clear engineering career path with a senior and staff level, so that growth does not require becoming a manager. Second, bring senior salaries up to the market median, starting with the highest-risk roles. Third, reduce the span of control where managers have more than ten reports. We expect these actions to bring regretted attrition back below 6 percent within a year.",
    exercises: [
      { type: 'multiple_choice', prompt: 'By how much did overall attrition increase?', options: ['By four percentage points.', 'By four percent.', 'By 18 percentage points.', 'It doubled.'], answer: 0,
        explanationPt: 'De 14% para 18% = 4 pontos percentuais. O que dobrou foi a rotatividade "lamentada" (regretted).' },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'Departures peaked after the salary review.', answer: 'V', explanationPt: '"Departures peaked in March, just after the annual salary review".' },
        { text: 'Remote work was the main reason people left.', answer: 'F', explanationPt: '"very few people mentioned remote work".' },
        { text: 'Engagement dropped sharply in the data team.', answer: 'V', explanationPt: '"dropped sharply in the data team, by eleven points".' },
        { text: 'The CFO has already approved the salary increase.', answer: 'NM', explanationPt: 'O texto não fala de aprovação.' }
      ] },
      { type: 'multiple_choice', prompt: 'What was the most common reason for leaving?', options: ['Lack of career progression.', 'Pay below market.', 'Too many direct reports.', 'Remote work.'], answer: 0 },
      { type: 'match', prompt: 'Ligue o número ao que ele representa.', pairs: [
        ['18 percent', 'overall attrition now'], ['10 percent', 'regretted attrition now'], ['40,000 euros', 'cost of replacing a senior engineer'], ['eleven points', 'engagement drop in the data team'] ] }
    ]
  },
  listening: {
    genre: 'reunião de diretoria',
    title: 'Presenting the numbers to the CEO and the CFO',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'J', name: 'James', gender: 'm' }, { id: 'D', name: 'Daniel', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'The bottom line is this: regretted attrition has doubled in a year, and it\'s concentrated in senior engineering.' },
      { speaker: 'J', text: 'Raising salaries is expensive, Marina. What\'s the cost of your proposal?' },
      { speaker: 'M', text: 'Around 600,000 euros a year. But each senior departure costs us about 40,000, so we\'re already paying more than that.' },
      { speaker: 'J', text: 'That\'s assuming the salary increase actually stops people leaving.' },
      { speaker: 'M', text: 'Fair point. That\'s why I\'d start with the twenty highest-risk roles and measure the impact after six months.' },
      { speaker: 'D', text: 'And the career path? Can we do that without hiring more managers?' },
      { speaker: 'M', text: 'Yes. A staff engineer level lets people grow without managing anyone. It costs almost nothing.' },
      { speaker: 'D', text: 'I like that. James, can you and Marina work on a phased budget for next week?' },
      { speaker: 'J', text: 'Sure. Send me the data by Monday and we\'ll model two scenarios.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'How much would Marina\'s proposal cost per year?', options: ['Around 600,000 euros.', 'Around 40,000 euros.', '1.2 million euros.', 'Almost nothing.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'Marina wants to start with the twenty highest-risk roles.', answer: 'V', explanationPt: '"start with the twenty highest-risk roles".' },
        { text: 'The staff engineer level requires hiring more managers.', answer: 'F', explanationPt: '"lets people grow without managing anyone".' },
        { text: 'James refuses to work on the budget.', answer: 'F', explanationPt: '"Sure. Send me the data by Monday".' },
        { text: 'The board meeting is in London.', answer: 'NM', explanationPt: 'Não se fala de Londres.' }
      ] },
      { type: 'listen_choose', audio: "That's why I'd start with the twenty highest-risk roles.", prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ["That's why I'd start with the twenty highest-risk roles.", "That's why I started with the twenty highest-risk roles.", "That's why I'd start with the twelve highest-risk roles.", "That's why we start with twenty high-risk roles."], answer: 0 },
      { type: 'dictation', text: 'Regretted attrition has doubled in a year.' }
    ]
  },
  grammar: {
    topicId: 'en-trends',
    title: 'Descrever tendências com precisão',
    explanationPt: 'Para apresentar dados, você precisa de verbos de movimento, advérbios de intensidade e das preposições certas:\n\n' +
      '- **Subir:** *rise (rose), increase, go up, climb, double*. **Cair:** *fall (fell), drop, decrease, go down, halve*. **Estável:** *remain stable, level off*. **Pico:** *peak, reach a high*.\n' +
      '**Intensidade:**\n- ***sharply / significantly*** (muito)\n- ***steadily*** (constante)\n- ***slightly*** (pouco)\n' +
      '- **Preposições:** **by** = a diferença (*rose **by** 4 points*); **to** = o valor final (*rose **to** 18%*); **from… to…** = de… para… (*from 14% **to** 18%*).\n' +
      '- **Percent × percentage point:** de 14% para 18% é **+4 percentage points** (ou um aumento de cerca de 29 percent).',
    table: { head: ['Movimento', 'Verbo', 'Substantivo'], rows: [
      ['↑ subir', 'rise / increase', 'a rise / an increase'], ['↓ cair', 'fall / drop / decrease', 'a fall / a drop / a decrease'],
      ['→ estabilizar', 'level off / remain stable', 'a period of stability'], ['⤴ pico', 'peak', 'a peak']
    ] },
    examples: [
      { fr: 'Attrition rose from 14 to 18 percent.', pt: 'A rotatividade subiu de 14% para 18%.' },
      { fr: 'Engagement fell slightly, by three points.', pt: 'O engajamento caiu um pouco, três pontos.' },
      { fr: 'Departures peaked in March and have levelled off since June.', pt: 'As saídas atingiram o pico em março e se estabilizaram desde junho.' },
      { fr: 'Hiring costs increased sharply in the second quarter.', pt: 'Os custos de contratação subiram muito no segundo trimestre.' }
    ],
    ptComparison: '**By × to** é o erro mais comum: "subiu **para** 18%" = *rose **to** 18%*; "subiu **em** 4 pontos" = *rose **by** 4 points*.\n\n' +
      'Números em inglês usam **ponto** para decimais e **vírgula** para milhares: *1.2 million*, *40,000 euros* — o contrário do Brasil e da França.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com by, to ou from.', bank: ['by', 'to', 'from'], items: [
      { text: 'Attrition rose ___ 18 percent.', answers: ['to'] },
      { text: 'Engagement fell ___ three points.', answers: ['by'] },
      { text: 'Hiring costs went up ___ 30,000 to 40,000 euros.', answers: ['from'] },
      { text: 'Regretted attrition doubled, ___ 5 to 10 percent.', answers: ['from'] }
    ] },
    { type: 'multiple_choice', prompt: 'De 14% para 18% é um aumento de…', options: ['four percentage points', 'four percent', 'eighteen percent', 'fourteen points'], answer: 0 },
    { type: 'match', prompt: 'Ligue o advérbio à intensidade.', pairs: [['sharply', 'muito, rapidamente'], ['slightly', 'um pouco'], ['steadily', 'de forma constante'], ['significantly', 'de forma significativa']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Departures peaked in March and have levelled off since June.', translation: 'As saídas atingiram o pico em março e se estabilizaram desde junho.' }
  ],
  tipForBrazilians: '**Comece pela conclusão.** Executivos em empresas anglo-saxônicas esperam o *bottom line* primeiro e os detalhes depois (o contrário de muitas apresentações no Brasil, que constroem o contexto até chegar à conclusão). Estrutura: **headline → evidence → cost → recommendation**.\n\n' +
    '**Pronúncia dos números:** *thirteen* (13) × *thirty* (30): a tônica muda (thir-**TEEN** × **THIR**-ty). Numa apresentação de dados, esse erro muda tudo.'
});
