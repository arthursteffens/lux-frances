LUX.registerLesson({
  id: 'a1-u02-l03', level: 'A1', unit: 2, order: 3,
  title: "J'ai vingt-huit ans", titlePt: 'Tenho vinte e oito anos',
  names: ['Lucas', 'Léa', 'Nadia', 'Martin'],
  introPt: 'É aniversário da Léa e tem festa no apartamento! Nesta lição você aprende o segundo verbo mais importante do francês, ***avoir*** (ter), a dizer a idade e os números até 69.',
  objectives: [
    'Conjugar o verbo avoir (ter) no presente.',
    'Perguntar e dizer a idade.',
    'Contar de 11 a 69.'
  ],
  vocabulary: [
    { fr: 'avoir', pt: 'ter', pos: 'v', say: 'a-VUARR', ex: "J'ai vingt-huit ans." },
    { fr: "l'an", pt: 'o ano (na idade)', g: 'm', say: 'LÃ', ex: 'Elle a vingt-six ans.' },
    { fr: "l'âge", pt: 'a idade', g: 'm', say: 'LAJ', ex: 'Tu as quel âge ?', d: true },
    { fr: "l'anniversaire", pt: 'o aniversário', g: 'm', say: 'la-ni-verr-SSÉRR', ex: "C'est mon anniversaire !" },
    { fr: 'la fête', pt: 'a festa', g: 'f', say: 'la FÉT', ex: 'Il y a une fête samedi.' },
    { fr: 'le gâteau', pt: 'o bolo', g: 'm', say: 'le ga-TÔ', ex: 'Nous avons un gâteau.' },
    { fr: 'la bougie', pt: 'a vela', g: 'f', say: 'la bu-JI', ex: 'Il y a vingt-six bougies.' },
    { fr: "l'ami / l'amie", pt: 'o amigo / a amiga', g: 'mf', say: 'la-MI', ex: 'Nadia est une amie de Léa.' },
    { fr: 'samedi', pt: 'sábado', g: 'm', say: 'sam-DI', ex: "Samedi, c'est mon anniversaire." },
    { fr: "aujourd'hui", pt: 'hoje', pos: 'adv', say: 'ô-jurr-DÜI', ex: "Aujourd'hui, Léa a vingt-six ans." },
    { fr: 'vingt', pt: 'vinte', pos: 'num', say: 'VẼ', ex: "J'ai vingt ans." },
    { fr: 'trente', pt: 'trinta', pos: 'num', say: 'TRRÃT', ex: 'Nadia a trente et un ans.' }
  ],
  pronunciation: {
    title: 'Os números de 11 a 69',
    textPt: '**De 11 a 16**, cada número tem nome próprio:\n' +
      '- ***onze*** (11)\n- ***douze*** (12)\n- ***treize*** (13)\n- ***quatorze*** (14)\n- ***quinze*** (15)\n- ***seize*** (16)\n\n' +
      '**De 17 a 19** é "dez-sete", "dez-oito", "dez-nove", como em português:\n' +
      '- ***dix-sept*** (17)\n- ***dix-huit*** (18)\n- ***dix-neuf*** (19)\n\n' +
      '**As dezenas:**\n' +
      '- ***vingt*** (20) = "vẽ": o g e o t não soam\n' +
      '- ***trente*** (30)\n- ***quarante*** (40)\n- ***cinquante*** (50)\n- ***soixante*** (60, "sua-SSÃT")\n\n' +
      '**O 1 ganha "et"** (e): ***vingt et un*** (21), ***trente et un*** (31). Os outros levam hífen: ***vingt-deux*** (22), ***vingt-huit*** (28).\n\n' +
      'No fim, treine de ouvido em **Treino de ouvido › Números**.',
    examples: [
      { fr: 'onze', pt: '11' }, { fr: 'douze', pt: '12' }, { fr: 'treize', pt: '13' }, { fr: 'quatorze', pt: '14' }, { fr: 'quinze', pt: '15' }, { fr: 'seize', pt: '16' },
      { fr: 'dix-sept', pt: '17' }, { fr: 'vingt', pt: '20' }, { fr: 'vingt et un', pt: '21' }, { fr: 'vingt-huit', pt: '28' }, { fr: 'quarante', pt: '40' }, { fr: 'soixante', pt: '60' }
    ]
  },
  reading: {
    genre: 'convite',
    title: "L'anniversaire de Léa",
    text: "Salut tout le monde !\n\n" +
      "Samedi, c'est mon anniversaire : j'ai vingt-six ans !\n\n" +
      "Il y a une petite fête à l'appartement, samedi soir. Il y a des gâteaux, de la musique et… un colocataire brésilien ! Il s'appelle Lucas, il a vingt-huit ans et il est très sympa.\n\n" +
      "Vous avez des amis sympas ? Ils sont bienvenus !\n\n" +
      "[[Interphone|interfone]] : Martin, appartement deux.\n\n" +
      "Bisous,\nLéa",
    translationPt: 'Oi, pessoal!\n\n' +
      'Sábado é o meu aniversário: faço vinte e seis anos!\n\n' +
      'Tem uma festinha no apartamento, sábado à noite. Tem bolos, música e… um colega de apartamento brasileiro! Ele se chama Lucas, tem vinte e oito anos e é muito legal.\n\n' +
      'Vocês têm amigos legais? Eles são bem-vindos!\n\n' +
      'Interfone: Martin, apartamento dois.\n\nBeijos,\nLéa',
    exercises: [
      { type: 'short_answer', prompt: 'Quantos anos a Léa faz? Responda em algarismos.', answers: ['26'],
        explanationPt: '"j\'ai vingt-six ans" = tenho 26 anos. Em francês, a idade usa o verbo **ter**, como em português.' },
      { type: 'short_answer', prompt: 'E o Lucas, quantos anos tem? Responda em algarismos.', answers: ['28'],
        explanationPt: '"il a vingt-huit ans" = ele tem 28 anos.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: "La fête est à l'appartement.", answer: 'V', explanationPt: '"Il y a une petite fête à l\'appartement".' },
        { text: 'La fête est dimanche.', answer: 'F', explanationPt: 'É no **sábado**: "samedi soir".' },
        { text: 'Il y a de la musique.', answer: 'V', explanationPt: '"Il y a des gâteaux, de la musique…"' },
        { text: 'Léa a un chien.', answer: 'NM', explanationPt: 'O convite não fala de animais.' }
      ] },
      { type: 'multiple_choice', prompt: 'Os amigos dos amigos podem ir à festa?', options: ['Sim, são bem-vindos.', 'Não.', 'Só se forem brasileiros.', 'O convite não diz.'], answer: 0,
        explanationPt: '"Vous avez des amis sympas ? Ils sont bienvenus !"' }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Na festa da Léa',
    speakers: [{ id: 'N', name: 'Nadia', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'N', text: 'Salut ! Tu es le colocataire de Léa ?', pt: 'Oi! Você é o colega de apartamento da Léa?' },
      { speaker: 'U', text: "Oui ! Je m'appelle Lucas.", pt: 'Sou! Eu me chamo Lucas.' },
      { speaker: 'N', text: "Moi, c'est Nadia. Tu as quel âge, Lucas ?", pt: 'Eu sou a Nadia. Quantos anos você tem, Lucas?' },
      { speaker: 'U', text: "J'ai vingt-huit ans. Et toi ?", pt: 'Tenho vinte e oito anos. E você?' },
      { speaker: 'N', text: "J'ai trente et un ans. Et Léa a vingt-six ans aujourd'hui !", pt: 'Tenho trinta e um anos. E a Léa faz vinte e seis anos hoje!' },
      { speaker: 'U', text: 'Oui ! Nous avons un gâteau pour elle.', pt: 'Sim! Nós temos um bolo para ela.' },
      { speaker: 'N', text: 'Super ! Tu as des bougies ?', pt: 'Ótimo! Você tem velas?' },
      { speaker: 'U', text: "Oui, j'ai vingt-six bougies !", pt: 'Sim, tenho vinte e seis velas!' },
      { speaker: 'N', text: 'Ha ha, parfait !', pt: 'Ha ha, perfeito!' }
    ],
    exercises: [
      { type: 'short_answer', prompt: 'Quantos anos tem a Nadia? Responda em algarismos.', answers: ['31'],
        explanationPt: '"J\'ai trente et un ans" = 31. O 1 depois das dezenas ganha *et*: *trente **et** un*.' },
      { type: 'listen_choose', audio: 'Tu as quel âge ?', prompt: 'Ouça e escolha a pergunta.',
        options: ['Tu as quel âge ?', 'Tu es le colocataire ?', 'Tu as des bougies ?', "Tu t'appelles comment ?"], answer: 0,
        explanationPt: '*Tu as quel âge ?* = quantos anos você tem? (literalmente, "você tem qual idade?")' },
      { type: 'multiple_choice', prompt: 'Quantas velas o Lucas tem?', options: ['26', '28', '31', '16'], answer: 0,
        explanationPt: '"j\'ai vingt-six bougies" = 26 velas, uma para cada ano da Léa.' },
      { type: 'dictation', text: "J'ai vingt-huit ans.", explanationPt: '*Vingt-huit* soa "vẽ-TÜIT": o t de *vingt* soa aqui, ligado ao *huit*.' },
      { type: 'dictation', text: 'Nous avons un gâteau.', explanationPt: 'Liaison: *nous avons* soa "nu-za-VÕ".' }
    ]
  },
  grammar: {
    topicId: 'present-revisao',
    title: 'O verbo avoir (ter) e a idade',
    explanationPt: '***Avoir*** = ter. É irregular, como *être*, e vale decorar:\n\n' +
      '- ***j\'ai*** = eu tenho (*je* vira *j\'* antes de vogal)\n' +
      '- ***tu as*** = você tem\n' +
      '- ***il a*** / ***elle a*** = ele tem / ela tem\n' +
      '- ***nous avons*** = nós temos\n' +
      '- ***vous avez*** = o senhor tem, vocês têm\n' +
      '- ***ils ont*** / ***elles ont*** = eles têm / elas têm\n\n' +
      '**A idade** usa *avoir* + número + ***ans***:\n' +
      '- *J\'ai vingt-huit ans.* (tenho 28 anos)\n' +
      '- *Tu as quel âge ?* (quantos anos você tem? informal)\n' +
      '- *Quel âge avez-vous ?* (formal)\n\n' +
      '**Cuidado com o ouvido:** ***ils ont*** = "il-ZÕ" (eles têm) × ***ils sont*** = "il-SSÕ" (eles são). A diferença é o som de **z** ou de **s**.',
    table: { head: ['', 'avoir', 'soa'], rows: [
      ["j'", 'ai', 'jê'], ['tu', 'as', 'tü A'], ['il / elle', 'a', 'il A / él A'],
      ['nous', 'avons', 'nu-za-VÕ'], ['vous', 'avez', 'vu-za-VÊ'], ['ils / elles', 'ont', 'il-ZÕ / él-ZÕ']
    ] },
    examples: [
      { fr: "J'ai vingt-huit ans.", pt: 'Tenho vinte e oito anos.' },
      { fr: 'Elle a vingt-six ans.', pt: 'Ela tem vinte e seis anos.' },
      { fr: 'Tu as quel âge ?', pt: 'Quantos anos você tem?' },
      { fr: 'Nous avons un gâteau.', pt: 'Nós temos um bolo.' }
    ],
    ptComparison: 'Boa notícia: como em português, a idade usa o verbo **ter**: *j\'ai trente ans* (tenho trinta anos). Nunca diga *je suis trente ans*.\n\n' +
      'Mas a palavra ***ans*** (anos) é obrigatória: "tenho 28" sozinho não funciona em francês, diga *j\'ai vingt-huit **ans***.\n\n' +
      'E "fazer anos" também é *avoir*: "a Léa faz 26 anos hoje" = *Léa a vingt-six ans aujourd\'hui*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o verbo avoir.', bank: ['ai', 'as', 'a', 'avons', 'avez', 'ont'], items: [
      { text: "J'___ vingt-huit ans.", answers: ['ai'] },
      { text: 'Tu ___ quel âge ?', answers: ['as'] },
      { text: 'Léa ___ vingt-six ans.', answers: ['a'] },
      { text: 'Nous ___ un gâteau.', answers: ['avons'] },
      { text: 'Vous ___ des enfants ?', answers: ['avez'] },
      { text: 'Ils ___ des bougies.', answers: ['ont'] }
    ] },
    { type: 'multiple_choice', prompt: '"Tenho trinta anos."', options: ["J'ai trente ans.", 'Je suis trente ans.', "J'ai trente.", 'Je trente ans.'], answer: 0,
      explanationPt: 'Idade = ***avoir*** + número + ***ans***.' },
    { type: 'fill_blank', prompt: 'Escreva o número em algarismos.', items: [
      { text: 'quinze = ___', answers: ['15'] },
      { text: 'douze = ___', answers: ['12'] },
      { text: 'quarante-trois = ___', answers: ['43'] },
      { text: 'soixante et un = ___', answers: ['61'] }
    ] },
    { type: 'listen_choose', audio: 'seize', prompt: 'Ouça e escolha o número.', options: ['16', '6', '13', '60'], answer: 0,
      explanationPt: '*Seize* = 16. Cuidado: *six* = 6 e *soixante* = 60.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Elle a vingt-six ans.', translation: 'Ela tem vinte e seis anos.' }
  ],
  tipForBrazilians: '**Perguntar a idade é delicado na França**, como no Brasil: entre jovens tudo bem, mas evite perguntar a pessoas mais velhas ou a colegas de trabalho.\n\n' +
    'Para desejar feliz aniversário:\n' +
    '- ***Joyeux anniversaire !*** = Feliz aniversário!\n' +
    '- ***Bon anniversaire !*** = também muito usado.\n\n' +
    'E a música de parabéns na França se canta com a mesma melodia do Brasil: *Joyeux anniversaire, joyeux anniversaire…*'
});
