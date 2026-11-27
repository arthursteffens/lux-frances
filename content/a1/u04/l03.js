LUX.registerLesson({
  id: 'a1-u04-l03', level: 'A1', unit: 4, order: 3,
  title: 'Pardon, où est… ?', titlePt: 'Com licença, onde fica…?',
  names: ['Lucas', 'Nathalie', 'Roux', 'Bellecour', 'République', 'Graphik', 'Lyon'],
  introPt: 'Segunda-feira o Lucas começa no trabalho novo, e a chefe mandou o caminho por e-mail. Mas, na rua, ele se perde… Nesta lição: **pedir e entender o caminho** (à direita, à esquerda, em frente) e o **imperativo** com *vous* (vá, vire, pegue).',
  objectives: [
    'Pedir informação na rua com educação.',
    'Entender e dar direções simples: à droite, à gauche, tout droit.',
    'Usar o imperativo com vous: allez, tournez, prenez.'
  ],
  vocabulary: [
    { fr: 'Excusez-moi', pt: 'com licença, desculpe (formal)', pos: 'expr', say: 'éks-kü-zê-MUA', ex: 'Excusez-moi, madame, où est la gare ?' },
    { fr: 'la rue', pt: 'a rua', g: 'f', say: 'la RRÜ', ex: 'Prenez la première rue à droite.' },
    { fr: 'la place', pt: 'a praça', g: 'f', say: 'la PLAS', ex: 'Traversez la place.', d: true },
    { fr: 'à droite', pt: 'à direita', pos: 'expr', say: 'a DRRUAT', ex: 'Tournez à droite.' },
    { fr: 'à gauche', pt: 'à esquerda', pos: 'expr', say: 'a GÔX', ex: "C'est à gauche." },
    { fr: 'tout droit', pt: 'em frente, reto', pos: 'expr', say: 'tu DRRUA', ex: 'Allez tout droit.' },
    { fr: 'tourner', pt: 'virar', pos: 'v', say: 'turr-NÊ', ex: 'Tournez à gauche.' },
    { fr: 'traverser', pt: 'atravessar', pos: 'v', say: 'trra-vérr-SSÊ', ex: 'Traversez la rue.' },
    { fr: 'continuer', pt: 'continuar, seguir', pos: 'v', say: 'kõ-ti-nü-Ê', ex: 'Continuez tout droit.' },
    { fr: 'en face de', pt: 'em frente de (do outro lado)', pos: 'prep', say: 'ã FAS de', ex: "L'agence est en face de la banque." },
    { fr: "l'agence", pt: 'a agência', g: 'f', say: 'la-JÃS', ex: "L'agence est rue de la République." },
    { fr: 'premier / première', pt: 'primeiro / primeira', pos: 'adj', say: 'pre-MIÊ / pre-MIÉRR', ex: 'la première rue à droite' }
  ],
  pronunciation: {
    title: 'Droite × droit, gauche: os sons das direções',
    textPt: 'Três expressões que você precisa entender de ouvido, mesmo rápido:\n\n' +
      '- ***à droite*** = "a DRRUAT": o **t** soa por causa do **e** final. Significa **à direita**.\n' +
      '- ***tout droit*** = "tu DRRUA": sem **e**, o **t** não soa. Significa **em frente**.\n' +
      '- ***à gauche*** = "a GÔX": o **au** soa "ô" e o **ch** soa "x".\n\n' +
      'Cuidado para não confundir *droite* (direita) com *droit* (reto), a única diferença é o **t** no fim!',
    examples: [{ fr: 'à droite', pt: 'à direita: o t soa' }, { fr: 'tout droit', pt: 'em frente: o t não soa' }, { fr: 'à gauche', pt: 'à esquerda' }, { fr: 'Tournez à droite.', pt: 'Vire à direita.' }]
  },
  reading: {
    genre: 'e-mail de trabalho',
    title: 'Votre premier jour',
    text: "Bonjour Lucas,\n\n" +
      "Bienvenue chez Graphik ! Votre premier jour est lundi. Voici le chemin pour venir à l'agence :\n\n" +
      "Prenez le métro et descendez à Bellecour. Sur la place Bellecour, allez tout droit. Prenez la deuxième rue à gauche : c'est la rue de la République. Continuez cent mètres. L'agence est à droite, au numéro 15, en face de la banque.\n\n" +
      "C'est facile : dix minutes de chez vous !\n\n" +
      "À lundi,\nNathalie Roux",
    translationPt: 'Olá, Lucas,\n\n' +
      'Bem-vindo à Graphik! O seu primeiro dia é segunda-feira. Aqui está o caminho para vir à agência:\n\n' +
      'Pegue o metrô e desça em Bellecour. Na praça Bellecour, siga em frente. Pegue a segunda rua à esquerda: é a rua da República. Continue cem metros. A agência fica à direita, no número 15, em frente ao banco.\n\n' +
      'É fácil: dez minutos da sua casa!\n\nAté segunda,\nNathalie Roux',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quem é a Nathalie Roux?', options: ['A chefe do Lucas na agência.', 'A professora de francês.', 'A vizinha.', 'Uma amiga da Léa.'], answer: 0,
        explanationPt: 'Ela dá as boas-vindas à agência e explica o primeiro dia de trabalho.' },
      { type: 'multiple_choice', prompt: 'Em qual estação de metrô o Lucas deve descer?', options: ['Bellecour.', 'République.', 'Croix-Rousse.', 'A estação de trem.'], answer: 0,
        explanationPt: '"descendez à Bellecour".' },
      { type: 'order_events', prompt: 'Coloque o caminho na ordem.', items: [
        'Prendre le métro.', 'Descendre à Bellecour.', 'Aller tout droit sur la place.', 'Prendre la deuxième rue à gauche.', "Trouver l'agence à droite, au numéro 15."
      ] },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: "L'agence est en face de la banque.", answer: 'V', explanationPt: '"en face de la banque".' },
        { text: 'Le premier jour est mardi.', answer: 'F', explanationPt: 'É **segunda**: "Votre premier jour est lundi".' },
        { text: "Il y a vingt personnes à l'agence.", answer: 'NM', explanationPt: 'O e-mail não diz quantas pessoas trabalham lá.' }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Perdido na rua',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'P', name: 'Uma senhora', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Excusez-moi, madame. Où est la rue de la République, s\'il vous plaît ?', pt: 'Com licença, senhora. Onde fica a rua da República, por favor?' },
      { speaker: 'P', text: "La rue de la République ? C'est à gauche, la deuxième rue.", pt: 'A rua da República? É à esquerda, a segunda rua.' },
      { speaker: 'U', text: 'La deuxième rue à gauche… Et pour aller au numéro 15 ?', pt: 'A segunda rua à esquerda… E para ir ao número 15?' },
      { speaker: 'P', text: "Tournez à gauche et continuez tout droit. Le numéro 15 est à droite, en face de la banque.", pt: 'Vire à esquerda e siga em frente. O número 15 fica à direita, em frente ao banco.' },
      { speaker: 'U', text: "C'est loin ?", pt: 'É longe?' },
      { speaker: 'P', text: 'Non, non, à cinq minutes à pied.', pt: 'Não, não, a cinco minutos a pé.' },
      { speaker: 'U', text: 'Merci beaucoup, madame !', pt: 'Muito obrigado, senhora!' },
      { speaker: 'P', text: 'Je vous en prie. Bonne journée !', pt: 'Não há de quê. Tenha um bom dia!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Onde fica a rua da República?', options: ['A segunda rua à esquerda.', 'A primeira rua à direita.', 'Em frente.', 'A segunda rua à direita.'], answer: 0,
        explanationPt: '"C\'est à gauche, la deuxième rue."' },
      { type: 'multiple_choice', prompt: 'É longe?', options: ['Não, a cinco minutos a pé.', 'Sim, a trinta minutos.', 'Precisa pegar o metrô.', 'A senhora não sabe.'], answer: 0,
        explanationPt: '"à cinq minutes à pied". *À pied* = a pé.' },
      { type: 'listen_choose', audio: 'Tournez à gauche et continuez tout droit.', prompt: 'Ouça e escolha a direção.',
        options: ['Tournez à gauche et continuez tout droit.', 'Tournez à droite et continuez tout droit.', 'Allez tout droit et tournez à gauche.', 'Traversez la place et tournez à droite.'], answer: 0,
        explanationPt: '*Tournez à gauche* = vire à esquerda; *continuez tout droit* = siga em frente.' },
      { type: 'multiple_choice', prompt: 'A senhora responde "Je vous en prie". O que isso significa?', options: ['Não há de quê (de nada, formal).', 'Por favor, repita.', 'Desculpe.', 'Até logo.'], answer: 0,
        explanationPt: '***Je vous en prie*** = de nada, não há de quê (formal). Com amigos: *de rien*.' },
      { type: 'dictation', text: "C'est à droite.", explanationPt: '*À droite* = à direita. O **t** soa por causa do *e* final.' }
    ]
  },
  grammar: {
    topicId: 'imperatif',
    title: 'Dar direções: o imperativo com vous',
    explanationPt: 'Para dar instruções a alguém que você trata por *vous*, use o verbo **sem o pronome**:\n\n' +
      '- *vous allez* → ***Allez*** *tout droit.* (vá em frente)\n' +
      '- *vous tournez* → ***Tournez*** *à droite.* (vire à direita)\n' +
      '- *vous prenez* → ***Prenez*** *la première rue.* (pegue a primeira rua)\n' +
      '- *vous traversez* → ***Traversez*** *la place.* (atravesse a praça)\n' +
      '- *vous continuez* → ***Continuez*** *cent mètres.* (continue cem metros)\n\n' +
      'Os **ordinais** ajudam muito:\n' +
      '- ***premier / première*** = primeiro / primeira\n' +
      '- ***deuxième*** = segundo(a)\n' +
      '- ***troisième*** = terceiro(a)',
    table: { head: ['presente', 'imperativo', 'português'], rows: [
      ['vous allez', 'Allez !', 'Vá!'], ['vous tournez', 'Tournez !', 'Vire!'], ['vous prenez', 'Prenez !', 'Pegue!'],
      ['vous traversez', 'Traversez !', 'Atravesse!'], ['vous continuez', 'Continuez !', 'Continue!'], ['vous descendez', 'Descendez !', 'Desça!']
    ] },
    examples: [
      { fr: 'Allez tout droit.', pt: 'Vá em frente.' },
      { fr: 'Prenez la deuxième rue à gauche.', pt: 'Pegue a segunda rua à esquerda.' },
      { fr: 'Traversez la place.', pt: 'Atravesse a praça.' },
      { fr: "L'agence est en face de la banque.", pt: 'A agência fica em frente ao banco.' }
    ],
    ptComparison: 'O imperativo com *vous* é fácil: é o presente **sem o "vous"**. *Vous tournez* (o senhor vira) → *Tournez !* (vire!).\n\n' +
      '"Em frente" tem duas traduções:\n' +
      '- ***tout droit*** = siga reto, em frente (direção)\n' +
      '- ***en face de*** = do outro lado, defronte (posição): *en face de la banque*'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Passe para o imperativo (com vous).', items: [
      { text: 'vous tournez → ___ à droite.', answers: ['Tournez'] },
      { text: 'vous allez → ___ tout droit.', answers: ['Allez'] },
      { text: 'vous prenez → ___ le métro.', answers: ['Prenez'] },
      { text: 'vous traversez → ___ la rue.', answers: ['Traversez'] }
    ] },
    { type: 'multiple_choice', prompt: '"Vire à esquerda."', options: ['Tournez à gauche.', 'Tournez à droite.', 'Allez tout droit.', 'Vous tournez gauche.'], answer: 0,
      explanationPt: '*À gauche* = à esquerda; *à droite* = à direita.' },
    { type: 'match', prompt: 'Ligue a direção à tradução.', pairs: [
      ['à droite', 'à direita'], ['à gauche', 'à esquerda'], ['tout droit', 'em frente, reto'], ['en face de', 'do outro lado de'], ['à côté de', 'ao lado de']
    ] },
    { type: 'multiple_choice', prompt: 'Como pedir informação na rua com educação?', options: ["Excusez-moi, madame, où est la gare, s'il vous plaît ?", 'Où est la gare ?', 'Madame ! La gare !', 'Tu sais où est la gare ?'], answer: 0,
      explanationPt: '*Excusez-moi* + *madame / monsieur* + pergunta + *s\'il vous plaît*: perfeito.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Prenez la première rue à droite.', translation: 'Pegue a primeira rua à direita.' }
  ],
  tipForBrazilians: '**Para pedir informação na rua:** comece sempre com ***Excusez-moi*** (com licença) ou ***Pardon***, e termine com ***merci***. Os franceses respondem muito melhor a quem é educado!\n\n' +
    'Se a pessoa falar rápido demais:\n' +
    '- ***Plus lentement, s\'il vous plaît.*** = Mais devagar, por favor.\n' +
    '- ***Vous pouvez répéter ?*** = Pode repetir?\n\n' +
    'E se agradecerem a você: ***Je vous en prie*** (formal) ou ***De rien*** (informal) = de nada.'
});
