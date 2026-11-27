LUX.registerLesson({
  id: 'a1-u02-l05', level: 'A1', unit: 2, order: 5, review: true,
  title: 'Une visite de madame Bernard', titlePt: 'Uma visita da senhora Bernard (revisão da unidade)',
  names: ['Lucas', 'Léa', 'Ana', 'Bernard', 'Nadia', 'Belo Horizonte', 'Lyon'],
  introPt: 'Revisão da Unidade 2. A vizinha, a senhora Bernard, vem conhecer o apartamento, e o Lucas conta tudo à irmã. Você vai juntar artigos, plural, *il y a*, *avoir*, números e possessivos.',
  objectives: [
    'Revisar artigos, plural, il y a, avoir e possessivos.',
    'Descrever uma casa e uma família.',
    'Descobrir se uma palavra é masculina ou feminina pela terminação.'
  ],
  vocabulary: [
    { fr: 'la plante', pt: 'a planta', g: 'f', say: 'la PLÃT', ex: "C'est une plante pour vous." },
    { fr: 'joli / jolie', pt: 'bonito / bonita', pos: 'adj', say: 'jô-LI', ex: "L'appartement est joli." },
    { fr: 'le chat', pt: 'o gato', g: 'm', say: 'le XA', ex: "J'ai un chat." },
    { fr: 'seul / seule', pt: 'sozinho / sozinha', pos: 'adj', say: 'SSÖL', ex: "J'habite seule avec mon chat." },
    { fr: 'le voisinage', pt: 'a vizinhança', g: 'm', say: 'le vua-zi-NAJ', ex: 'Bienvenue dans le voisinage !', d: true },
    { fr: 'entrer', pt: 'entrar', pos: 'v', say: 'ã-TRRÊ', ex: 'Entrez, madame !' },
    { fr: "c'est gentil", pt: 'que gentil, é gentileza sua', pos: 'expr', say: 'sé jã-TI', ex: "Oh, merci, c'est gentil !" },
    { fr: 'tout le monde', pt: 'todo mundo', pos: 'expr', say: 'tu le MÕD', ex: 'Tout le monde est sympa.' }
  ],
  pronunciation: {
    title: 'Revisão: avoir × être de ouvido',
    textPt: 'Duas duplas que confundem, porque só muda um som:\n\n' +
      '- ***ils ont*** "il-ZÕ" (eles têm) × ***ils sont*** "il-SSÕ" (eles são)\n' +
      '- ***elles ont*** "él-ZÕ" × ***elles sont*** "él-SSÕ"\n\n' +
      'Treine dizendo as duas em seguida, exagerando o **z** e o **s**.',
    examples: [{ fr: 'Ils ont deux enfants.', pt: 'Eles têm dois filhos.' }, { fr: 'Ils sont brésiliens.', pt: 'Eles são brasileiros.' }, { fr: 'Elles ont un chat.', pt: 'Elas têm um gato.' }, { fr: 'Elles sont sympas.', pt: 'Elas são legais.' }]
  },
  reading: {
    genre: 'e-mail pessoal',
    title: 'Des nouvelles de Lyon',
    text: "Salut Ana !\n\n" +
      "L'appartement est super ! Il y a deux chambres, un grand salon et une petite cuisine. Ma chambre est jolie : il y a un lit, une table et une grande fenêtre.\n\n" +
      "Samedi, c'est l'anniversaire de Léa : elle a vingt-six ans. Il y a une fête à l'appartement avec ses amis. Son amie Nadia est très sympa.\n\n" +
      "Aujourd'hui, notre voisine, madame Bernard, est chez nous. Elle a soixante-sept ans et elle habite seule avec son chat. Elle a un cadeau pour nous : une plante !\n\n" +
      "Et toi, ça va ? Et papa et maman ?\n\n" +
      "Bisous,\nLucas",
    translationPt: 'Oi, Ana!\n\n' +
      'O apartamento é ótimo! Tem dois quartos, uma sala grande e uma cozinha pequena. O meu quarto é bonito: tem uma cama, uma mesa e uma janela grande.\n\n' +
      'Sábado é o aniversário da Léa: ela faz vinte e seis anos. Tem uma festa no apartamento com os amigos dela. A amiga dela, Nadia, é muito legal.\n\n' +
      'Hoje a nossa vizinha, a senhora Bernard, está aqui em casa. Ela tem sessenta e sete anos e mora sozinha com o gato. Ela tem um presente para nós: uma planta!\n\n' +
      'E você, tudo bem? E o papai e a mamãe?\n\nBeijos,\nLucas',
    exercises: [
      { type: 'short_answer', prompt: 'Quantos anos tem a senhora Bernard? Responda em algarismos.', answers: ['67'],
        explanationPt: '"Elle a soixante-sept ans." *Soixante* = 60, *sept* = 7.' },
      { type: 'multiple_choice', prompt: 'Qual é o presente da senhora Bernard?', options: ['Uma planta.', 'Um bolo.', 'Um gato.', 'Um livro.'], answer: 0,
        explanationPt: '"Elle a un cadeau pour nous : une plante !"' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Madame Bernard habite avec son mari.', answer: 'F', explanationPt: 'Ela mora **sozinha** com o gato: "elle habite seule avec son chat".' },
        { text: 'La cuisine est petite.', answer: 'V', explanationPt: '"une petite cuisine".' },
        { text: 'Nadia est une amie de Léa.', answer: 'V', explanationPt: '"Son amie Nadia est très sympa." *Son amie* = a amiga dela.' },
        { text: 'Le chat de madame Bernard est noir.', answer: 'NM', explanationPt: 'O e-mail não diz a cor do gato.' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com palavras do texto.', items: [
        { text: 'Il y a deux ___, un grand salon et une petite cuisine.', answers: ['chambres'] },
        { text: "Samedi, c'est l'___ de Léa.", answers: ['anniversaire'] },
        { text: 'Elle habite seule avec ___ chat.', answers: ['son'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'A senhora Bernard chega',
    speakers: [{ id: 'B', name: 'Mme Bernard', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'U', text: 'Bonjour, madame Bernard ! Entrez, entrez !', pt: 'Bom dia, senhora Bernard! Entre, entre!' },
      { speaker: 'B', text: 'Bonjour, Lucas. Voilà, une plante pour vous et Léa.', pt: 'Bom dia, Lucas. Aqui está, uma planta para o senhor e a Léa.' },
      { speaker: 'U', text: "Oh, merci, c'est gentil !", pt: 'Ah, obrigado, que gentil!' },
      { speaker: 'B', text: "L'appartement est très joli. Vous avez une grande chambre ?", pt: 'O apartamento é muito bonito. O senhor tem um quarto grande?' },
      { speaker: 'U', text: "Non, elle est petite, mais il y a une grande fenêtre.", pt: 'Não, ele é pequeno, mas tem uma janela grande.' },
      { speaker: 'B', text: 'Et votre famille ? Vos parents habitent au Brésil ?', pt: 'E a sua família? Os seus pais moram no Brasil?' },
      { speaker: 'U', text: 'Oui, à Belo Horizonte, avec ma sœur.', pt: 'Sim, em Belo Horizonte, com a minha irmã.' },
      { speaker: 'B', text: 'Moi, mes enfants habitent à Paris. Ils ont trois enfants !', pt: 'Os meus filhos moram em Paris. Eles têm três filhos!' },
      { speaker: 'U', text: 'Trois petits-enfants ? Super !', pt: 'Três netos? Que legal!' },
      { speaker: 'B', text: 'Oui ! Bon, bienvenue dans le voisinage, Lucas !', pt: 'Sim! Bom, bem-vindo à vizinhança, Lucas!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Onde moram os filhos da senhora Bernard?', options: ['Em Paris.', 'Em Lyon.', 'No Brasil.', 'Em Genebra.'], answer: 0,
        explanationPt: '"mes enfants habitent à Paris".' },
      { type: 'short_answer', prompt: 'Quantos netos a senhora Bernard tem? Responda em algarismos.', answers: ['3'],
        explanationPt: '"Ils ont trois enfants !" Os filhos dela têm três filhos: são os netos, *les petits-enfants*.' },
      { type: 'listen_choose', audio: 'Vos parents habitent au Brésil ?', prompt: 'Ouça e escolha a pergunta.',
        options: ['Vos parents habitent au Brésil ?', 'Tes parents habitent au Brésil ?', 'Vos enfants habitent à Paris ?', 'Votre sœur habite au Brésil ?'], answer: 0,
        explanationPt: 'Ela usa *vous* com o Lucas, então "seus pais" = ***vos*** *parents*.' },
      { type: 'multiple_choice', prompt: 'Como é o quarto do Lucas?', options: ['Pequeno, mas com uma janela grande.', 'Grande e claro.', 'Pequeno e escuro.', 'Grande, sem janela.'], answer: 0,
        explanationPt: '"elle est petite, mais il y a une grande fenêtre". *Elle* = *la chambre* (feminino).' },
      { type: 'dictation', text: 'Une plante pour vous.', explanationPt: '*Pour vous* = para o senhor / para vocês.' }
    ]
  },
  grammar: {
    topicId: 'gender-nouns',
    title: 'Revisão: masculino ou feminino?',
    explanationPt: 'Não há regra perfeita, mas algumas **terminações** ajudam muito:\n\n' +
      '**Quase sempre femininas:**\n' +
      '- ***-tion***: *la nation*, *l\'information*\n' +
      '- ***-té***: *la liberté*, *la beauté*\n' +
      '- ***-ette***: *les lunettes*, *la fourchette*\n' +
      '- ***-ure***: *la voiture*, *la culture*\n\n' +
      '**Quase sempre masculinas:**\n' +
      '- ***-ment***: *l\'appartement*, *le vêtement*\n' +
      '- ***-eau***: *le cadeau*, *le gâteau*\n' +
      '- ***-age***: *le voisinage*, *le fromage*\n\n' +
      'Para o resto, a melhor estratégia continua sendo **aprender a palavra com o artigo**.',
    table: { head: ['terminação', 'gênero', 'exemplos'], rows: [
      ['-tion', 'feminino', "la nation, l'information"], ['-ette', 'feminino', 'les lunettes, la fourchette'], ['-ure', 'feminino', 'la voiture, la culture'],
      ['-ment', 'masculino', "l'appartement, le vêtement"], ['-eau', 'masculino', 'le cadeau, le gâteau'], ['-age', 'masculino', 'le voisinage, le fromage']
    ] },
    examples: [
      { fr: 'Le gâteau est grand.', pt: 'O bolo é grande.' },
      { fr: 'Voilà mes lunettes.', pt: 'Aqui estão os meus óculos.' },
      { fr: "L'appartement est joli.", pt: 'O apartamento é bonito.' },
      { fr: 'Bienvenue dans le voisinage !', pt: 'Bem-vindo à vizinhança!' }
    ],
    ptComparison: 'Muitas palavras têm o mesmo gênero do português (*la nation*, *le cadeau*), mas as terminadas em **-age** são uma armadilha: em português são femininas (a vizinhança, a viagem, a imagem), em francês são **masculinas**: *le voisinage*, *le voyage*, *le fromage*. (Exceção famosa: *l\'image* é feminina.) Por isso: aprenda sempre com o artigo.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com le ou la (pense na terminação).', bank: ['le', 'la'], items: [
      { text: '___ fromage', answers: ['le'] },
      { text: '___ voiture', answers: ['la'] },
      { text: '___ gâteau', answers: ['le'] },
      { text: '___ nation', answers: ['la'] }
    ], explanationPt: '- **-age, -eau** → masculino (*le*)\n- **-ure, -tion** → feminino (*la*)' },
    { type: 'multiple_choice', prompt: '"Eles têm um gato."', options: ['Ils ont un chat.', 'Ils sont un chat.', 'Il a un chat.', 'Ils ont une chat.'], answer: 0,
      explanationPt: '***Ils ont*** (têm), com som de z. *Le chat* é masculino → *un chat*.' },
    { type: 'multiple_choice', prompt: '"A senhora tem filhos?" (formal)', options: ['Vous avez des enfants ?', 'Tu as des enfants ?', 'Vous êtes des enfants ?', 'Vous avez enfants ?'], answer: 0,
      explanationPt: 'Formal = *vous avez*. E o plural precisa de *des*.' },
    { type: 'fill_blank', prompt: 'Complete com son, sa ou ses.', bank: ['son', 'sa', 'ses'], items: [
      { text: 'Madame Bernard habite avec ___ chat.', answers: ['son'] },
      { text: 'Léa et ___ amie Nadia.', answers: ['son'] },
      { text: 'Lucas et ___ sœur.', answers: ['sa'] },
      { text: 'Madame Bernard et ___ enfants.', answers: ['ses'] }
    ], explanationPt: 'Lembre: *amie* começa com vogal → **son** amie.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Il y a un lit et une table.", translation: 'Tem uma cama e uma mesa.' }
  ],
  tipForBrazilians: '**Unidade 2 concluída!** Agora você já descreve uma casa, uma família e diz a idade das pessoas.\n\n' +
    'Um costume francês: ao visitar alguém pela primeira vez, leve um pequeno presente, como flores, uma planta, chocolates ou uma garrafa de vinho. E nunca chegue **antes** da hora: na França, chegar 10 ou 15 minutos depois do horário de um jantar em casa é considerado educado (o famoso *quart d\'heure de politesse*).'
});
