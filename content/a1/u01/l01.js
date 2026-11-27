LUX.registerLesson({
  id: 'a1-u01-l01', level: 'A1', unit: 1, order: 1,
  title: 'Bonjour !', titlePt: 'Olá!',
  names: ['Lucas', 'Ferreira', 'Léa', 'Lyon', 'France'],
  introTitle: '👋 Bem-vindo(a) ao francês!',
  introPt: 'Nesta primeira lição você **não precisa saber nada**: tudo tem áudio e tradução.\n\n' +
    '**Como estudar cada lição:**\n' +
    '- Ouça cada palavra no ▶ e **repita em voz alta**, mesmo que pareça estranho.\n' +
    '- Clique em qualquer palavra em francês para ver a tradução.\n' +
    '- Erre à vontade: cada exercício explica a resposta certa.\n' +
    '- Para passar para a próxima lição, basta fazer 70% dos pontos. Dá para refazer quantas vezes quiser.\n\n' +
    '**A pronúncia com letras do português** (🗣) é só uma ajuda. O ▶ é sempre a referência:\n' +
    '- **MAIÚSCULAS** = a sílaba mais forte (em francês, quase sempre a última).\n' +
    '- **rr** = o R francês, raspado no fundo da garganta, parecido com o "r" de "carro" no Rio.\n' +
    '- **ü** = fale "i" com a boca em biquinho.\n' +
    '- **ö** = fale "ê" com a boca em biquinho.\n' +
    '- **ã, õ, ẽ** = sons nasais, como em "mãe", "bom" e "bem".\n\n' +
    '**A história:** o Lucas, um designer de Belo Horizonte, acaba de chegar a Lyon, na França, para trabalhar. Você vai acompanhar os dois primeiros meses dele, e aprender o francês que ele precisa a cada dia.',
  objectives: [
    'Cumprimentar e se despedir em francês (bonjour, salut, au revoir).',
    'Dizer o seu nome e perguntar o nome de alguém.',
    'Agradecer e pedir por favor.'
  ],
  vocabulary: [
    { fr: 'bonjour', pt: 'bom dia, olá (formal, durante o dia)', pos: 'interj', say: 'bõ-JURR', ex: 'Bonjour, madame !' },
    { fr: 'bonsoir', pt: 'boa noite (ao chegar, a partir das 18h)', pos: 'interj', say: 'bõ-SSUARR', ex: 'Bonsoir, monsieur !' },
    { fr: 'salut', pt: 'oi; tchau (só com amigos)', pos: 'interj', say: 'sa-LÜ', ex: 'Salut, Léa !' },
    { fr: 'au revoir', pt: 'tchau, até logo', pos: 'expr', say: 'ô rre-VUARR', ex: 'Au revoir, monsieur !' },
    { fr: 'merci', pt: 'obrigado(a)', pos: 'interj', say: 'mérr-SSI', ex: 'Merci beaucoup !' },
    { fr: 'de rien', pt: 'de nada', pos: 'expr', say: 'de RRIẼ', ex: 'Merci ! — De rien !' },
    { fr: "s'il vous plaît", pt: 'por favor (formal)', pos: 'expr', say: 'sil vu PLÉ', ex: "Un café, s'il vous plaît." },
    { fr: 'oui', pt: 'sim', pos: 'adv', say: 'UI', ex: 'Oui, merci.' },
    { fr: 'non', pt: 'não', pos: 'adv', say: 'NÕ', ex: 'Non, merci.' },
    { fr: 'madame', pt: 'senhora', g: 'f', say: 'ma-DAM', ex: 'Bonjour, madame.' },
    { fr: 'monsieur', pt: 'senhor', g: 'm', say: 'me-SSIÖ', ex: 'Merci, monsieur.' },
    { fr: "je m'appelle", pt: 'eu me chamo', pos: 'expr', say: 'jö ma-PÉL', ex: "Je m'appelle Lucas." }
  ],
  pronunciation: {
    title: 'O fim das palavras: quase sempre mudo',
    textPt: 'A regra de pronúncia mais útil do francês: **a consoante do fim da palavra quase nunca se pronuncia**.\n\n' +
      '- ***salut*** = "sa-LÜ": o **t** final não soa.\n' +
      '- ***vous*** = "vu": o **s** final não soa.\n' +
      '- ***s\'il vous plaît*** = "sil vu PLÉ": nem o **s** de *vous* nem o **t** de *plaît* soam.\n\n' +
      'Mas o **r** de *bonjour*, *bonsoir* e *au revoir* soa, e é o R francês, na garganta.\n\n' +
      'E a força vai na **última sílaba**: *ma-DAM*, *mérr-SSI*, *bõ-JURR*. Nada de "MÉR-ci".',
    examples: [{ fr: 'salut', pt: 't mudo' }, { fr: 'vous', pt: 's mudo' }, { fr: 'bonjour', pt: 'o r soa' }, { fr: 'merci', pt: 'força no fim: mérr-SSI' }]
  },
  reading: {
    genre: 'mensagens de celular',
    title: 'Léa écrit à Lucas',
    text: "Léa : Bonjour Lucas ! Bienvenue en France !\n\n" +
      "Léa : Je m'appelle Léa. Je suis ta [[colocataire|colega de apartamento]].\n\n" +
      "Lucas : Bonjour Léa ! Merci ! Je suis à l'aéroport de Lyon.\n\n" +
      "Léa : Super ! Moi, je suis à l'appartement. [[À ce soir|até hoje à noite]] !\n\n" +
      "Lucas : Oui, à ce soir ! Merci beaucoup, Léa.\n\n" +
      "Léa : De rien ! Salut !",
    translationPt: '**Léa:** Olá, Lucas! Bem-vindo à França!\n\n' +
      '**Léa:** Eu me chamo Léa. Sou sua colega de apartamento.\n\n' +
      '**Lucas:** Olá, Léa! Obrigado! Estou no aeroporto de Lyon.\n\n' +
      '**Léa:** Ótimo! Eu estou no apartamento. Até hoje à noite!\n\n' +
      '**Lucas:** Sim, até hoje à noite! Muito obrigado, Léa.\n\n' +
      '**Léa:** De nada! Tchau!',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quem é a Léa?', options: ['A colega de apartamento do Lucas.', 'A irmã do Lucas.', 'Uma professora.', 'Uma funcionária do aeroporto.'], answer: 0,
        explanationPt: '"Je suis ta colocataire" = sou sua colega de apartamento.' },
      { type: 'multiple_choice', prompt: 'Onde está o Lucas?', options: ['No aeroporto de Lyon.', 'No apartamento.', 'No Brasil.', 'Num café.'], answer: 0,
        explanationPt: '"Je suis à l\'aéroport de Lyon" = estou no aeroporto de Lyon.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: "Léa est à l'appartement.", answer: 'V', explanationPt: '"Moi, je suis à l\'appartement."' },
        { text: 'Lucas est à Paris.', answer: 'F', explanationPt: 'Ele está no aeroporto de **Lyon**.' },
        { text: 'Léa a un chat.', answer: 'NM', explanationPt: 'As mensagens não falam de animais.' }
      ] },
      { type: 'match', prompt: 'Ligue cada expressão à tradução.', pairs: [
        ['Bienvenue !', 'Bem-vindo!'], ['Merci beaucoup.', 'Muito obrigado.'], ['De rien !', 'De nada!'], ['À ce soir !', 'Até hoje à noite!'], ['Salut !', 'Tchau! (informal)']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'No controle de passaportes',
    speakers: [{ id: 'A', name: 'O policial', gender: 'm' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'A', text: 'Bonjour, monsieur.', pt: 'Bom dia, senhor.' },
      { speaker: 'U', text: 'Bonjour !', pt: 'Bom dia!' },
      { speaker: 'A', text: 'Vous vous appelez comment ?', pt: 'Como o senhor se chama?' },
      { speaker: 'U', text: "Je m'appelle Lucas Ferreira.", pt: 'Eu me chamo Lucas Ferreira.' },
      { speaker: 'A', text: 'Lucas Ferreira… Vous êtes brésilien ?', pt: 'Lucas Ferreira… O senhor é brasileiro?' },
      { speaker: 'U', text: 'Oui, je suis brésilien.', pt: 'Sim, sou brasileiro.' },
      { speaker: 'A', text: 'Merci. Bienvenue en France, monsieur Ferreira !', pt: 'Obrigado. Bem-vindo à França, senhor Ferreira!' },
      { speaker: 'U', text: 'Merci beaucoup. Au revoir !', pt: 'Muito obrigado. Até logo!' },
      { speaker: 'A', text: 'Au revoir. Bonne journée !', pt: 'Até logo. Tenha um bom dia!' }
    ],
    exercises: [
      { type: 'listen_choose', audio: "Je m'appelle Lucas Ferreira.", prompt: 'Ouça e escolha o que o Lucas disse.',
        options: ["Je m'appelle Lucas Ferreira.", 'Je suis à Lyon.', 'Merci beaucoup.', 'Bonjour, monsieur.'], answer: 0,
        explanationPt: '"Je m\'appelle…" = eu me chamo…' },
      { type: 'multiple_choice', prompt: 'Como o policial pergunta o nome do Lucas?', options: ['Vous vous appelez comment ?', "Tu t'appelles comment ?", 'Comment ça va ?', 'Vous êtes brésilien ?'], answer: 0,
        explanationPt: 'Com um desconhecido, usa-se *vous* (formal): *Vous vous appelez comment ?*' },
      { type: 'multiple_choice', prompt: 'O que o policial deseja no final?', options: ['Bonne journée !', 'Bonne nuit !', 'Bon appétit !', 'Bonsoir !'], answer: 0,
        explanationPt: '*Bonne journée !* = tenha um bom dia! Os franceses dizem isso ao se despedir durante o dia.' },
      { type: 'dictation', text: 'Merci beaucoup.', explanationPt: '*Merci* = obrigado; *beaucoup* = muito. O "eau" de *beaucoup* soa "ô": "bô-KU".' },
      { type: 'dictation', text: 'Bonjour, monsieur.', explanationPt: 'Escreve-se *monsieur*, mas soa "me-SSIÖ": o r final não soa.' }
    ]
  },
  grammar: {
    topicId: 'pronominal-verbs',
    title: "Dizer o nome: je m'appelle, tu t'appelles, vous vous appelez",
    explanationPt: 'Para dizer o nome, o francês usa o verbo ***s\'appeler*** (chamar-se), igual ao nosso "eu **me** chamo":\n\n' +
      '- ***je m\'appelle*** = eu me chamo\n' +
      '- ***tu t\'appelles*** = você se chama (informal: amigos, família, crianças)\n' +
      '- ***il s\'appelle*** / ***elle s\'appelle*** = ele se chama / ela se chama\n' +
      '- ***vous vous appelez*** = o senhor / a senhora se chama (formal), ou vocês se chamam\n\n' +
      'As formas *appelle* e *appelles* soam **iguais**: "a-PÉL". O s de *appelles* não se pronuncia.\n\n' +
      'Para perguntar o nome:\n' +
      '- ***Tu t\'appelles comment ?*** = Como você se chama? (informal)\n' +
      '- ***Vous vous appelez comment ?*** = Como o senhor / a senhora se chama? (formal)',
    table: { head: ['', 's\'appeler', 'soa'], rows: [
      ["je m'appelle", 'eu me chamo', 'jö ma-PÉL'], ["tu t'appelles", 'você se chama', 'tü ta-PÉL'], ["il / elle s'appelle", 'ele / ela se chama', 'il / él sa-PÉL'],
      ['vous vous appelez', 'o senhor se chama', 'vu vu-za-PLÊ']
    ] },
    examples: [
      { fr: "Je m'appelle Lucas.", pt: 'Eu me chamo Lucas.' },
      { fr: "Elle s'appelle Léa.", pt: 'Ela se chama Léa.' },
      { fr: "Tu t'appelles comment ?", pt: 'Como você se chama?' },
      { fr: 'Vous vous appelez comment ?', pt: 'Como o senhor se chama?' }
    ],
    ptComparison: 'É igualzinho ao português "eu **me** chamo": o pronome (*me, te, se*) vem **antes** do verbo.\n\n' +
      'Antes de vogal, **me** vira **m\'**, **te** vira **t\'** e **se** vira **s\'**: *je m\'appelle*, *tu t\'appelles*, *elle s\'appelle*. Isso se chama elisão: o apóstrofo "come" a vogal.\n\n' +
      'Também dá para dizer simplesmente ***Je suis Lucas*** (sou o Lucas) ou, bem informal, ***Moi, c\'est Lucas***.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com a forma certa de s\'appeler.', bank: ["m'appelle", "t'appelles", "s'appelle", 'vous appelez'], items: [
      { text: 'Je ___ Lucas.', answers: ["m'appelle"] },
      { text: 'Tu ___ comment ?', answers: ["t'appelles"] },
      { text: 'Elle ___ Léa.', answers: ["s'appelle"] },
      { text: 'Vous ___ comment ?', answers: ['vous appelez'] }
    ], explanationPt: 'Cada pessoa tem o seu pronome:\n- **je** → m\'\n- **tu** → t\'\n- **il, elle** → s\'\n- **vous** → vous' },
    { type: 'multiple_choice', prompt: 'Você quer saber o nome de uma senhora que não conhece. O que você diz?', options: ['Vous vous appelez comment ?', "Tu t'appelles comment ?", "Elle s'appelle comment ?", "Je m'appelle comment ?"], answer: 0,
      explanationPt: 'Com desconhecidos e pessoas mais velhas, use **vous**.' },
    { type: 'multiple_choice', prompt: 'São 20h e você entra num restaurante. Como cumprimentar?', options: ['Bonsoir !', 'Bonjour !', 'Bonne nuit !', 'Salut !'], answer: 0,
      explanationPt: '*Bonsoir* = boa noite ao chegar. *Bonne nuit* só se diz ao ir dormir.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je m'appelle Lucas Ferreira.", translation: 'Eu me chamo Lucas Ferreira.' },
    { type: 'match', prompt: 'Ligue cada palavra ao momento certo.', pairs: [
      ['bonjour', 'olá, bom dia (formal)'], ['bonsoir', 'boa noite, ao chegar'], ['bonne nuit', 'boa noite, ao dormir'], ['salut', 'oi, tchau (com amigos)'], ['au revoir', 'até logo']
    ] }
  ],
  tipForBrazilians: '**Na França, bonjour é obrigatório!** Entrar numa loja, numa padaria ou num ônibus sem dizer *bonjour* é visto como falta de educação. Antes de qualquer pedido, diga *bonjour, madame* ou *bonjour, monsieur*.\n\n' +
    '- ***Bonjour*** = de manhã e de tarde.\n' +
    '- ***Bonsoir*** = boa noite **ao chegar** (a partir de umas 18h).\n' +
    '- ***Bonne nuit*** = boa noite **ao ir dormir**.\n' +
    '- ***Salut*** = "oi" e "tchau", só com amigos.'
});
