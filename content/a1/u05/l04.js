LUX.registerLesson({
  id: 'a1-u05-l04', level: 'A1', unit: 5, order: 4,
  title: 'Je me lève à sept heures', titlePt: 'Eu me levanto às sete horas',
  names: ['Lucas', 'Léa'],
  introPt: 'A Léa é enfermeira e às vezes trabalha à noite, então a rotina dela é bem diferente da do Lucas! Nesta lição: os verbos da **rotina** (acordar, levantar, tomar banho…), que em francês são **pronominais**, como o nosso "eu **me** levanto".',
  objectives: [
    'Descrever a sua rotina diária.',
    'Conjugar os verbos pronominais (se lever, se coucher…).',
    'Usar palavras de sequência: d\'abord, ensuite, après, enfin.'
  ],
  vocabulary: [
    { fr: 'se réveiller', pt: 'acordar', pos: 'v', say: 'se rrê-vé-IÊ', ex: 'Je me réveille à sept heures.' },
    { fr: 'se lever', pt: 'levantar-se', pos: 'v', say: 'se le-VÊ', ex: 'Je me lève tout de suite.' },
    { fr: 'se doucher', pt: 'tomar banho (de chuveiro)', pos: 'v', say: 'se du-XÊ', ex: 'Je me douche le matin.' },
    { fr: "s'habiller", pt: 'vestir-se', pos: 'v', say: 'sa-bi-IÊ', ex: "Je m'habille vite." },
    { fr: 'se coucher', pt: 'deitar-se, ir dormir', pos: 'v', say: 'se ku-XÊ', ex: 'Je me couche à onze heures.' },
    { fr: 'le petit-déjeuner', pt: 'o café da manhã', g: 'm', say: 'le pe-ti dê-jö-NÊ', ex: 'Je prends le petit-déjeuner.' },
    { fr: 'le déjeuner', pt: 'o almoço', g: 'm', say: 'le dê-jö-NÊ', ex: 'Le déjeuner est à midi.' },
    { fr: 'dormir', pt: 'dormir', pos: 'v', say: 'dorr-MIRR', ex: 'Léa dort le matin.' },
    { fr: "d'abord", pt: 'primeiro', pos: 'adv', say: 'da-BÓRR', ex: "D'abord, je me lève." },
    { fr: 'ensuite', pt: 'depois, em seguida', pos: 'adv', say: 'ã-SSÜIT', ex: 'Ensuite, je me douche.' },
    { fr: 'enfin', pt: 'finalmente, por fim', pos: 'adv', say: 'ã-FẼ', ex: 'Enfin, je pars au travail.' },
    { fr: 'la nuit', pt: 'a noite (madrugada)', g: 'f', say: 'la NÜI', ex: 'Léa travaille la nuit.' }
  ],
  pronunciation: {
    title: 'Je me lève, je me couche: os pronomes curtinhos',
    textPt: 'Nos verbos pronominais, o pronome fica colado ao verbo e quase some na fala:\n\n' +
      '- ***je me lève*** = "jö-me-LÉV" (ou, rápido, "jem-LÉV")\n' +
      '- ***tu te lèves*** = "tü-te-LÉV"\n' +
      '- ***il se lève*** = "il-se-LÉV"\n\n' +
      'Antes de vogal, o pronome perde o **e**: ***je m\'habille*** "jö-ma-BII", ***il s\'habille*** "il-sa-BII".\n\n' +
      'Repare também: ***lever*** "le-VÊ", mas ***je lève*** "LÉV". O acento grave aparece quando o **e** fica aberto.',
    examples: [{ fr: 'Je me lève.', pt: 'Eu me levanto.' }, { fr: "Je m'habille.", pt: 'Eu me visto.' }, { fr: 'Elle se couche tard.', pt: 'Ela vai dormir tarde.' }, { fr: 'Nous nous réveillons tôt.', pt: 'Nós acordamos cedo.' }]
  },
  reading: {
    genre: 'artigo de revista',
    title: 'Une journée de Léa, infirmière de nuit',
    text: "Léa est infirmière à l'hôpital. Cette semaine, elle travaille la nuit.\n\n" +
      "Elle se réveille à cinq heures de l'après-midi. D'abord, elle prend un café. Ensuite, elle se douche et elle s'habille. À sept heures du soir, elle dîne : c'est son petit-déjeuner ! Après, elle va à l'hôpital à vélo.\n\n" +
      "Elle travaille de huit heures du soir à six heures du matin. Enfin, elle rentre à la maison et elle se couche à sept heures… quand Lucas se lève !\n\n" +
      "« C'est difficile, mais j'aime mon travail », dit Léa.",
    translationPt: 'A Léa é enfermeira no hospital. Esta semana, ela trabalha à noite.\n\n' +
      'Ela acorda às cinco da tarde. Primeiro, toma um café. Depois, toma banho e se veste. Às sete da noite, ela janta: é o café da manhã dela! Depois, vai para o hospital de bicicleta.\n\n' +
      'Ela trabalha das oito da noite às seis da manhã. Por fim, volta para casa e vai dormir às sete… quando o Lucas se levanta!\n\n' +
      '"É difícil, mas eu gosto do meu trabalho", diz a Léa.',
    exercises: [
      { type: 'multiple_choice', prompt: 'A que horas a Léa acorda esta semana?', options: ['Às 17h.', 'Às 7h.', 'Às 20h.', 'Às 6h.'], answer: 0,
        explanationPt: '"à cinq heures de l\'après-midi" = às cinco da tarde = 17h.' },
      { type: 'multiple_choice', prompt: 'Como a Léa vai ao hospital?', options: ['De bicicleta.', 'De metrô.', 'A pé.', 'De carro.'], answer: 0,
        explanationPt: '"elle va à l\'hôpital à vélo". *Le vélo* = a bicicleta.' },
      { type: 'order_events', prompt: 'Coloque a rotina da Léa na ordem.', items: [
        'Elle se réveille.', 'Elle prend un café.', "Elle se douche et elle s'habille.", 'Elle dîne.', "Elle va à l'hôpital.", 'Elle se couche.'
      ] },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Léa travaille la nuit cette semaine.', answer: 'V', explanationPt: '"Cette semaine, elle travaille la nuit."' },
        { text: "Léa n'aime pas son travail.", answer: 'F', explanationPt: '"j\'aime mon travail".' },
        { text: 'Léa mange à la cantine de l\'hôpital.', answer: 'NM', explanationPt: 'O texto não fala de cantina.' }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Bom dia ou boa noite?',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Bonjour, Léa ! Tu te lèves ?', pt: 'Bom dia, Léa! Você está se levantando?' },
      { speaker: 'L', text: "Non, je me couche ! Je travaille la nuit cette semaine.", pt: 'Não, estou indo dormir! Trabalho à noite esta semana.' },
      { speaker: 'U', text: "Ah oui ! Moi, je me réveille à sept heures et je me lève tout de suite.", pt: 'Ah, é! Eu acordo às sete e me levanto na hora.' },
      { speaker: 'L', text: 'Tout de suite ? Bravo ! Moi, je reste dix minutes au lit.', pt: 'Na hora? Parabéns! Eu fico dez minutos na cama.' },
      { speaker: 'U', text: "Ensuite, je me douche, je m'habille et je prends le petit-déjeuner.", pt: 'Depois, tomo banho, me visto e tomo o café da manhã.' },
      { speaker: 'L', text: 'Et le soir, tu te couches à quelle heure ?', pt: 'E à noite, você vai dormir a que horas?' },
      { speaker: 'U', text: 'Vers onze heures. Bonne nuit, Léa… enfin, bonne journée !', pt: 'Por volta das onze. Boa noite, Léa… quer dizer, bom dia!' },
      { speaker: 'L', text: 'Ha ha ! Bonne nuit !', pt: 'Ha ha! Boa noite!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Por que a Léa vai dormir de manhã?', options: ['Porque trabalha à noite esta semana.', 'Porque está doente.', 'Porque está de férias.', 'Porque não dormiu bem.'], answer: 0,
        explanationPt: '"Je travaille la nuit cette semaine."' },
      { type: 'short_answer', prompt: 'A que horas o Lucas acorda? Responda em algarismos.', answers: ['7'],
        explanationPt: '"je me réveille à sept heures".' },
      { type: 'listen_choose', audio: "Je me douche, je m'habille et je prends le petit-déjeuner.", prompt: 'Ouça e escolha a rotina do Lucas.',
        options: ["Je me douche, je m'habille et je prends le petit-déjeuner.", "Je m'habille, je me douche et je prends le petit-déjeuner.", 'Je prends le petit-déjeuner et je me douche.', "Je me lève, je m'habille et je pars."], answer: 0,
        explanationPt: 'Primeiro o banho, depois se veste, depois o café da manhã.' },
      { type: 'multiple_choice', prompt: 'A que horas o Lucas vai dormir?', options: ['Por volta das 23h.', 'Às 21h.', 'À meia-noite.', 'Às 7h.'], answer: 0,
        explanationPt: '"Vers onze heures." *Vers* = por volta de.' },
      { type: 'dictation', text: 'Je me lève tout de suite.', explanationPt: '*Tout de suite* = imediatamente, na hora.' }
    ]
  },
  grammar: {
    topicId: 'pronominal-verbs',
    title: 'Os verbos pronominais da rotina',
    explanationPt: 'Muitos verbos da rotina levam um pronome a mais, como o nosso "eu **me** levanto". O pronome muda com a pessoa:\n\n' +
      '- ***je me*** lève\n' +
      '- ***tu te*** lèves\n' +
      '- ***il / elle se*** lève\n' +
      '- ***nous nous*** levons\n' +
      '- ***vous vous*** levez\n' +
      '- ***ils / elles se*** lèvent\n\n' +
      'Antes de vogal ou h mudo: ***me → m\'***, ***te → t\'***, ***se → s\'***: *je m\'habille*.\n\n' +
      '**Negação:** o *ne* vai antes do pronome: *Je **ne** me lève **pas** tôt.*\n\n' +
      '**Sequência:**\n- ***d\'abord*** (primeiro)\n- ***ensuite*** (depois)\n- ***après*** (depois)\n- ***enfin*** (por fim)',
    table: { head: ['', 'se lever', "s'habiller"], rows: [
      ['je', 'me lève', "m'habille"], ['tu', 'te lèves', "t'habilles"], ['il / elle', 'se lève', "s'habille"],
      ['nous', 'nous levons', 'nous habillons'], ['vous', 'vous levez', 'vous habillez'], ['ils / elles', 'se lèvent', "s'habillent"]
    ] },
    examples: [
      { fr: 'Je me réveille à sept heures.', pt: 'Acordo às sete horas.' },
      { fr: "D'abord, je me douche. Ensuite, je m'habille.", pt: 'Primeiro, tomo banho. Depois, me visto.' },
      { fr: 'Léa se couche le matin.', pt: 'A Léa vai dormir de manhã.' },
      { fr: 'Je ne me lève pas tôt le dimanche.', pt: 'Não me levanto cedo no domingo.' }
    ],
    ptComparison: 'Em português, muitos desses verbos também são pronominais: "eu **me** levanto", "ele **se** veste". Mas no Brasil o pronome às vezes cai ("eu acordo cedo"). Em francês, **nunca** cai: *je **me** réveille*, *je **me** douche*.\n\n' +
      'Alguns verbos são pronominais em francês e não em português:\n' +
      '- ***se réveiller*** = acordar\n' +
      '- ***se doucher*** = tomar banho\n' +
      '- ***se coucher*** = ir dormir'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o pronome certo.', bank: ['me', 'te', 'se', 'nous', 'vous'], items: [
      { text: 'Je ___ lève à sept heures.', answers: ['me'] },
      { text: 'Tu ___ couches tard ?', answers: ['te'] },
      { text: 'Léa ___ douche le soir.', answers: ['se'] },
      { text: 'Nous ___ réveillons tôt.', answers: ['nous'] },
      { text: 'Vous ___ levez à quelle heure ?', answers: ['vous'] }
    ] },
    { type: 'multiple_choice', prompt: '"Eu me visto."', options: ["Je m'habille.", "Je me habille.", "J'habille.", 'Je habille me.'], answer: 0,
      explanationPt: 'Antes de vogal / h mudo: *me* → ***m\'***.' },
    { type: 'multiple_choice', prompt: '"Não me levanto cedo."', options: ['Je ne me lève pas tôt.', 'Je me ne lève pas tôt.', 'Je ne lève me pas tôt.', 'Ne je me lève pas tôt.'], answer: 0,
      explanationPt: 'O *ne* vai **antes** do pronome: *je **ne** me lève **pas***.' },
    { type: 'order_events', prompt: 'Coloque uma manhã comum na ordem.', items: ['Je me réveille.', 'Je me lève.', 'Je me douche.', "Je m'habille.", 'Je prends le petit-déjeuner.'] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "D'abord, je me douche et je m'habille.", translation: 'Primeiro, tomo banho e me visto.' }
  ],
  tipForBrazilians: '**Refeições na França:**\n\n' +
    '- ***le petit-déjeuner*** = café da manhã (geralmente leve: café, pão, geleia, croissant)\n' +
    '- ***le déjeuner*** = almoço, entre 12h e 14h\n' +
    '- ***le goûter*** = lanche da tarde (das crianças, por volta das 16h)\n' +
    '- ***le dîner*** = jantar, entre 19h30 e 21h\n\n' +
    'Atenção, porque na Bélgica, na Suíça e no Canadá, ***le déjeuner*** pode ser o café da manhã e ***le dîner*** o almoço!'
});
