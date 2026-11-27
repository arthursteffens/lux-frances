LUX.registerLesson({
  id: 'a1-u05-l02', level: 'A1', unit: 5, order: 2,
  title: 'Lundi, mardi, mercredi…', titlePt: 'Segunda, terça, quarta…',
  names: ['Lucas', 'Sofia', 'Léa', 'Claire'],
  introPt: 'O Lucas organiza a agenda da semana: trabalho, aula de francês, compras… Nesta lição: os **dias da semana**, as partes do dia e o verbo ***faire*** (fazer), um dos mais usados do francês.',
  objectives: [
    'Dizer os dias da semana e as partes do dia.',
    'Falar da sua agenda: le lundi, lundi matin, le week-end.',
    'Conjugar o verbo faire (fazer).'
  ],
  vocabulary: [
    { fr: 'lundi', pt: 'segunda-feira', g: 'm', say: 'lẽ-DI', ex: 'Lundi, je travaille.' },
    { fr: 'mardi', pt: 'terça-feira', g: 'm', say: 'marr-DI', ex: "Le mardi, j'ai cours de français." },
    { fr: 'mercredi', pt: 'quarta-feira', g: 'm', say: 'mérr-krre-DI', ex: 'Mercredi soir, je suis libre.' },
    { fr: 'jeudi', pt: 'quinta-feira', g: 'm', say: 'jö-DI', ex: 'Le cours est le mardi et le jeudi.' },
    { fr: 'vendredi', pt: 'sexta-feira', g: 'm', say: 'vã-drre-DI', ex: 'Vendredi, on va au cinéma ?' },
    { fr: 'dimanche', pt: 'domingo', g: 'm', say: 'di-MÃX', ex: 'Le dimanche, je dors !' },
    { fr: 'le week-end', pt: 'o fim de semana', g: 'm', say: 'le ui-KÉND', ex: 'Bon week-end !' },
    { fr: 'le matin', pt: 'a manhã', g: 'm', say: 'le ma-TẼ', ex: 'Le matin, je prends un café.', d: true },
    { fr: "l'après-midi", pt: 'a tarde', g: 'm', say: 'la-prré-mi-DI', ex: "L'après-midi, je travaille.", d: true },
    { fr: 'le soir', pt: 'a noite (início)', g: 'm', say: 'le SSUARR', ex: 'Le soir, je regarde un film.', d: true },
    { fr: 'faire', pt: 'fazer', pos: 'v', say: 'FÉRR', ex: 'Qu\'est-ce que tu fais samedi ?' },
    { fr: 'libre', pt: 'livre, disponível', pos: 'adj', say: 'LIBRR', ex: 'Tu es libre mercredi ?' }
  ],
  pronunciation: {
    title: 'Os dias da semana: todos com força no "di"',
    textPt: 'Quase todos os dias terminam em **-di**, e a força vai no fim:\n\n' +
      '- ***lundi*** "lẽ-DI" (o *un* é nasal)\n' +
      '- ***mardi*** "marr-DI"\n' +
      '- ***mercredi*** "mérr-krre-DI"\n' +
      '- ***jeudi*** "jö-DI" (o *eu* é com biquinho)\n' +
      '- ***vendredi*** "vã-drre-DI"\n' +
      '- ***samedi*** "sam-DI" (o primeiro *e* some)\n' +
      '- ***dimanche*** "di-MÃX": o único diferente!',
    examples: [{ fr: 'lundi', pt: 'segunda' }, { fr: 'mardi', pt: 'terça' }, { fr: 'mercredi', pt: 'quarta' }, { fr: 'jeudi', pt: 'quinta' }, { fr: 'vendredi', pt: 'sexta' }, { fr: 'samedi', pt: 'sábado' }, { fr: 'dimanche', pt: 'domingo' }]
  },
  reading: {
    genre: 'agenda',
    title: "L'agenda de Lucas",
    text: "Ma semaine\n\n" +
      "Lundi, mercredi et vendredi : je travaille à l'agence, de 9 h à 17 h 30.\n" +
      "Mardi et jeudi : je travaille le matin, et l'après-midi, je fais mon cours de français avec Claire.\n" +
      "Mercredi soir : je fais les courses au supermarché.\n" +
      "Vendredi soir : cinéma avec Sofia ?\n" +
      "Samedi matin : marché avec Léa. L'après-midi, je fais le ménage. [[Beurk|eca]] !\n" +
      "Dimanche : je ne fais rien ! Je dors, je lis et je téléphone à ma famille.",
    translationPt: '**A minha semana**\n\n' +
      'Segunda, quarta e sexta: trabalho na agência, das 9h às 17h30.\n' +
      'Terça e quinta: trabalho de manhã, e à tarde faço o meu curso de francês com a Claire.\n' +
      'Quarta à noite: faço as compras no supermercado.\n' +
      'Sexta à noite: cinema com a Sofia?\n' +
      'Sábado de manhã: feira com a Léa. À tarde, faço a faxina. Eca!\n' +
      'Domingo: não faço nada! Durmo, leio e telefono para a minha família.',
    exercises: [
      { type: 'multiple_choice', prompt: 'Em quais dias o Lucas tem aula de francês?', options: ['Terça e quinta, à tarde.', 'Segunda e quarta.', 'Sábado de manhã.', 'Todos os dias.'], answer: 0,
        explanationPt: '"Mardi et jeudi : … l\'après-midi, je fais mon cours de français".' },
      { type: 'multiple_choice', prompt: 'O que o Lucas faz no domingo?', options: ['Nada: dorme, lê e telefona para a família.', 'Trabalha.', 'Vai à feira.', 'Faz faxina.'], answer: 0,
        explanationPt: '"je ne fais rien !" = não faço nada!' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Lucas fait les courses le mercredi soir.', answer: 'V', explanationPt: '"Mercredi soir : je fais les courses".' },
        { text: 'Lucas adore faire le ménage.', answer: 'F', explanationPt: '"Beurk !" = eca! Ele não gosta nada.' },
        { text: 'Lucas va au marché avec Léa.', answer: 'V', explanationPt: '"Samedi matin : marché avec Léa."' },
        { text: 'Sofia aime le cinéma italien.', answer: 'NM', explanationPt: 'A agenda não diz.' }
      ] },
      { type: 'match', prompt: 'Ligue cada atividade à tradução.', pairs: [
        ['faire les courses', 'fazer as compras'], ['faire le ménage', 'fazer a faxina'], ['ne rien faire', 'não fazer nada'], ['faire un cours', 'fazer uma aula']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Você está livre?',
    speakers: [{ id: 'S', name: 'Sofia', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'S', text: "Lucas, qu'est-ce que tu fais mercredi soir ?", pt: 'Lucas, o que você vai fazer quarta à noite?' },
      { speaker: 'U', text: 'Mercredi soir, je fais les courses. Pourquoi ?', pt: 'Quarta à noite eu faço as compras. Por quê?' },
      { speaker: 'S', text: 'Il y a un film italien au cinéma.', pt: 'Tem um filme italiano no cinema.' },
      { speaker: 'U', text: 'Ah ! Et vendredi ? Vendredi soir, je suis libre.', pt: 'Ah! E sexta? Sexta à noite estou livre.' },
      { speaker: 'S', text: "Vendredi, moi, je ne suis pas libre : je fais du yoga. Samedi ?", pt: 'Sexta eu não estou livre: faço ioga. Sábado?' },
      { speaker: 'U', text: "Samedi matin, je vais au marché, mais samedi soir, c'est parfait !", pt: 'Sábado de manhã vou à feira, mas sábado à noite é perfeito!' },
      { speaker: 'S', text: "Super ! Le film est à vingt heures.", pt: 'Ótimo! O filme é às oito da noite.' },
      { speaker: 'U', text: "D'accord. À samedi !", pt: 'Combinado. Até sábado!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quando eles vão ao cinema?', options: ['Sábado à noite.', 'Quarta à noite.', 'Sexta à noite.', 'Sábado de manhã.'], answer: 0,
        explanationPt: '"samedi soir, c\'est parfait !"' },
      { type: 'multiple_choice', prompt: 'O que a Sofia faz na sexta?', options: ['Ioga.', 'Compras.', 'Vai à feira.', 'Trabalha.'], answer: 0,
        explanationPt: '"je fais du yoga".' },
      { type: 'short_answer', prompt: 'A que horas é o filme? (formato 24h, ex.: 18:00)', answers: ['20:00', '20h', '20', '20h00'],
        explanationPt: '"à vingt heures" = às 20h.' },
      { type: 'listen_choose', audio: "Qu'est-ce que tu fais mercredi soir ?", prompt: 'Ouça e escolha a pergunta.',
        options: ["Qu'est-ce que tu fais mercredi soir ?", "Qu'est-ce que tu fais vendredi soir ?", 'Tu es libre mercredi soir ?', "Qu'est-ce que tu fais samedi matin ?"], answer: 0,
        explanationPt: '*Qu\'est-ce que tu fais… ?* = o que você faz / vai fazer…?' },
      { type: 'dictation', text: 'Vendredi soir, je suis libre.', explanationPt: '*Libre* = livre, disponível.' }
    ]
  },
  grammar: {
    topicId: 'present-irregular',
    title: 'O verbo faire e os dias da semana',
    explanationPt: '***Faire*** = fazer. É irregular e muito usado:\n' +
      '- ***je fais***, ***tu fais***, ***il / elle fait*** (as três soam "FÉ")\n' +
      '- ***nous faisons*** ("fe-ZÕ")\n- ***vous faites*** ("FÉT")\n- ***ils / elles font*** ("FÕ")\n\n' +
      'Expressões com *faire*:\n' +
      '- ***faire les courses*** = fazer as compras\n' +
      '- ***faire le ménage*** = fazer a faxina\n' +
      '- ***Qu\'est-ce que tu fais ?*** = o que você faz? / o que você está fazendo?\n\n' +
      '**Dias da semana** (todos masculinos, com letra minúscula):\n' +
      '- **sem artigo** = um dia específico: ***lundi***, *je vais au cinéma* (nesta segunda)\n' +
      '- **com *le*** = todo dia daquele: ***le lundi***, *je travaille* (às segundas, toda semana)',
    table: { head: ['', 'faire', 'soa'], rows: [
      ['je', 'fais', 'jö FÉ'], ['tu', 'fais', 'tü FÉ'], ['il / elle', 'fait', 'il FÉ'],
      ['nous', 'faisons', 'nu fe-ZÕ'], ['vous', 'faites', 'vu FÉT'], ['ils / elles', 'font', 'il FÕ']
    ] },
    examples: [
      { fr: "Qu'est-ce que tu fais samedi ?", pt: 'O que você vai fazer no sábado?' },
      { fr: 'Le mercredi, je fais les courses.', pt: 'Às quartas, faço as compras.' },
      { fr: 'Vendredi soir, je suis libre.', pt: 'Sexta à noite estou livre.' },
      { fr: 'Nous faisons le ménage le samedi.', pt: 'Fazemos a faxina aos sábados.' }
    ],
    ptComparison: 'Em português, "na segunda" pode ser **esta** segunda ou **toda** segunda. Em francês a diferença é clara:\n' +
      '- ***lundi*** = esta segunda (uma vez)\n' +
      '- ***le lundi*** = toda segunda (hábito)\n\n' +
      '***Vous faites*** é irregular: nunca diga *vous faisez*. Os outros verbos assim são só *vous êtes* e *vous dites*.\n\n' +
      'Para as partes do dia, o francês não usa preposição: "**de** manhã" = ***le matin***, "**à** noite" = ***le soir***, "segunda **de** manhã" = ***lundi matin***.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o verbo faire.', bank: ['fais', 'fait', 'faisons', 'faites', 'font'], items: [
      { text: "Qu'est-ce que tu ___ ce soir ?", answers: ['fais'] },
      { text: 'Léa ___ les courses.', answers: ['fait'] },
      { text: 'Nous ___ le ménage.', answers: ['faisons'] },
      { text: "Qu'est-ce que vous ___ dimanche ?", answers: ['faites'] },
      { text: 'Ils ___ du yoga.', answers: ['font'] }
    ] },
    { type: 'multiple_choice', prompt: '"Às terças, tenho aula de francês." (toda semana)', options: ["Le mardi, j'ai cours de français.", "Mardi, j'ai cours de français.", "Au mardi, j'ai cours de français.", "En mardi, j'ai cours de français."], answer: 0,
      explanationPt: 'Hábito = ***le*** + dia.' },
    { type: 'order_events', prompt: 'Coloque os dias na ordem, de segunda a domingo.', items: ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'] },
    { type: 'multiple_choice', prompt: '"Sábado de manhã."', options: ['Samedi matin.', 'Samedi de matin.', 'Le samedi au matin.', 'Samedi en matin.'], answer: 0,
      explanationPt: 'Dia + parte do dia, sem preposição: *samedi matin*, *lundi soir*.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Le mercredi, je fais les courses.', translation: 'Às quartas, faço as compras.' }
  ],
  tipForBrazilians: '**Os nomes dos dias vêm dos planetas e deuses romanos:**\n\n' +
    '- ***lundi*** = dia da Lua\n' +
    '- ***mardi*** = dia de Marte\n' +
    '- ***mercredi*** = dia de Mercúrio\n' +
    '- ***jeudi*** = dia de Júpiter\n' +
    '- ***vendredi*** = dia de Vênus\n\n' +
    'E na França, muitas escolas não têm aula na **quarta à tarde** (ou o dia todo): é o dia das atividades das crianças.'
});
