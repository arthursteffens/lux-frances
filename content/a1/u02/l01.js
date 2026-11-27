LUX.registerLesson({
  id: 'a1-u02-l01', level: 'A1', unit: 2, order: 1,
  title: "Voici l'appartement", titlePt: 'Este é o apartamento',
  names: ['Lucas', 'Léa', 'Croix-Rousse', 'Lyon', 'm'],
  introPt: 'A Léa mostra o apartamento para o Lucas. Para falar de coisas e lugares, você precisa dos **artigos** (um, uma, o, a…). Em francês, toda palavra é masculina ou feminina, e o artigo mostra qual é.',
  objectives: [
    'Nomear os cômodos e alguns objetos da casa.',
    'Usar os artigos un, une, des e le, la, les.',
    'Mostrar lugares com voici e c\'est.'
  ],
  vocabulary: [
    { fr: "l'appartement", pt: 'o apartamento', g: 'm', say: 'la-parr-te-MÃ', ex: "Voici l'appartement !" },
    { fr: 'la chambre', pt: 'o quarto', g: 'f', say: 'la XÃBRR', ex: 'Voici ta chambre.' },
    { fr: 'le salon', pt: 'a sala de estar', g: 'm', say: 'le sa-LÕ', ex: 'Le salon est grand.' },
    { fr: 'la cuisine', pt: 'a cozinha', g: 'f', say: 'la kü-IZIN', ex: 'La cuisine est petite.' },
    { fr: 'la salle de bains', pt: 'o banheiro', g: 'f', say: 'la sal de BẼ', ex: 'La salle de bains est à droite.' },
    { fr: 'le lit', pt: 'a cama', g: 'm', say: 'le LI', ex: 'Il y a un lit.' },
    { fr: 'la table', pt: 'a mesa', g: 'f', say: 'la TABL', ex: 'Il y a une table.' },
    { fr: 'la fenêtre', pt: 'a janela', g: 'f', say: 'la fe-NÉTRR', ex: 'La fenêtre est grande.' },
    { fr: 'la clé', pt: 'a chave', g: 'f', say: 'la KLÊ', ex: 'Voilà ta clé !' },
    { fr: 'grand / grande', pt: 'grande', pos: 'adj', say: 'GRRÃ / GRRÃD', ex: 'Le salon est grand.' },
    { fr: 'petit / petite', pt: 'pequeno / pequena', pos: 'adj', say: 'pe-TI / pe-TIT', ex: 'La cuisine est petite.' },
    { fr: 'voici / voilà', pt: 'aqui está, este é', pos: 'expr', say: 'vua-SSI / vua-LÁ', ex: 'Voici la cuisine.' }
  ],
  pronunciation: {
    title: 'Le, la, les, un, une: escute a diferença',
    textPt: 'Os artigos são curtinhos, mas cada um tem o seu som:\n\n' +
      '- ***le*** = "lö" (e fraco com biquinho)\n' +
      '- ***la*** = "la"\n' +
      '- ***les*** = "lê" (o s não soa)\n' +
      '- ***un*** = "ẽ" (nasal, o n não soa)\n' +
      '- ***une*** = "ün" (o n soa)\n\n' +
      'Como o s de *les* não soa, é o artigo que mostra o plural: *le lit* ("lö li") × *les lits* ("lê li").',
    examples: [{ fr: 'le salon', pt: 'o: "lö"' }, { fr: 'la chambre', pt: 'a: "la"' }, { fr: 'les clés', pt: 'as: "lê"' }, { fr: 'un lit', pt: 'um: nasal' }, { fr: 'une table', pt: 'uma: o n soa' }]
  },
  reading: {
    genre: 'anúncio',
    title: 'Appartement à partager',
    text: "Appartement à partager – Croix-Rousse, Lyon\n\n" +
      "Grand appartement de 70 m². Il y a deux chambres, un salon, une cuisine et une salle de bains.\n\n" +
      "Dans la chambre, il y a un lit, une table et une [[armoire|guarda-roupa]]. La cuisine est petite, mais le salon est grand. Les fenêtres sont grandes : l'appartement est très [[clair|claro, iluminado]] !\n\n" +
      "Le métro est à cinq minutes.\n\n" +
      "[[Loyer|aluguel]] : 450 euros par mois.\n" +
      "Contact : Léa",
    translationPt: '**Apartamento para dividir – Croix-Rousse, Lyon**\n\n' +
      'Apartamento grande de 70 m². Tem dois quartos, uma sala, uma cozinha e um banheiro.\n\n' +
      'No quarto tem uma cama, uma mesa e um guarda-roupa. A cozinha é pequena, mas a sala é grande. As janelas são grandes: o apartamento é muito claro!\n\n' +
      'O metrô fica a cinco minutos.\n\n' +
      'Aluguel: 450 euros por mês.\nContato: Léa',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quantos quartos tem o apartamento?', options: ['Dois.', 'Um.', 'Três.', 'Cinco.'], answer: 0,
        explanationPt: '"Il y a deux chambres." *Chambre* = quarto.' },
      { type: 'multiple_choice', prompt: 'Como é a cozinha?', options: ['Pequena.', 'Grande.', 'Clara.', 'Nova.'], answer: 0,
        explanationPt: '"La cuisine est petite."' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Le salon est grand.', answer: 'V', explanationPt: '"le salon est grand".' },
        { text: 'Il y a deux salles de bains.', answer: 'F', explanationPt: 'Há **uma**: "une salle de bains".' },
        { text: "Il y a une télé dans le salon.", answer: 'NM', explanationPt: 'O anúncio não fala de televisão.' },
        { text: 'Le métro est à cinq minutes.', answer: 'V', explanationPt: '"Le métro est à cinq minutes."' }
      ] },
      { type: 'match', prompt: 'Ligue cada cômodo à tradução.', pairs: [
        ['la chambre', 'o quarto'], ['le salon', 'a sala'], ['la cuisine', 'a cozinha'], ['la salle de bains', 'o banheiro']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Visitando o apartamento',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: "Voici l'appartement ! Ici, c'est le salon.", pt: 'Este é o apartamento! Aqui é a sala.' },
      { speaker: 'U', text: 'Il est grand !', pt: 'Ela é grande!' },
      { speaker: 'L', text: 'Oui. Et voilà la cuisine. Elle est petite, mais elle est jolie.', pt: 'É. E esta é a cozinha. Ela é pequena, mas é bonita.' },
      { speaker: 'U', text: 'Et la salle de bains ?', pt: 'E o banheiro?' },
      { speaker: 'L', text: "C'est là, à droite. Et voici ta chambre !", pt: 'É ali, à direita. E este é o seu quarto!' },
      { speaker: 'U', text: 'Super ! Il y a un lit, une table et une grande fenêtre.', pt: 'Ótimo! Tem uma cama, uma mesa e uma janela grande.' },
      { speaker: 'L', text: 'Et voilà ta clé !', pt: 'E aqui está a sua chave!' },
      { speaker: 'U', text: 'Merci, Léa !', pt: 'Obrigado, Léa!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Onde fica o banheiro?', options: ['À direita.', 'À esquerda.', 'Na cozinha.', 'No quarto.'], answer: 0,
        explanationPt: '"C\'est là, à droite." *À droite* = à direita.' },
      { type: 'listen_choose', audio: 'Et voici ta chambre !', prompt: 'Ouça e escolha a frase.',
        options: ['Et voici ta chambre !', 'Et voilà ta clé !', 'Et voici la cuisine !', 'Et voilà le salon !'], answer: 0,
        explanationPt: '*Voici ta chambre* = este é o seu quarto.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'La cuisine est grande.', answer: 'F', explanationPt: '"Elle est petite, mais elle est jolie."' },
        { text: 'Dans la chambre, il y a un lit.', answer: 'V', explanationPt: '"Il y a un lit, une table et une grande fenêtre."' },
        { text: 'Lucas a un chien.', answer: 'NM', explanationPt: 'Ninguém fala de animais.' }
      ] },
      { type: 'dictation', text: 'Voilà ta clé !', explanationPt: '*Voilà* = aqui está. *Clé* = chave.' },
      { type: 'multiple_choice', prompt: 'O Lucas diz "Il est grand !" sobre o salão. Por que "il" (ele)?', options: ['Porque "le salon" é masculino.', 'Porque ele fala de si mesmo.', 'Porque é formal.', 'Porque é plural.'], answer: 0,
        explanationPt: 'Coisas também são *il* (masculino) ou *elle* (feminino): *le salon* → **il**; *la cuisine* → **elle**.' }
    ]
  },
  grammar: {
    topicId: 'articles',
    title: 'Os artigos: un, une, des e le, la, les',
    explanationPt: 'Em francês, **toda palavra é masculina ou feminina**, e o artigo mostra o gênero.\n\n' +
      '**Artigos indefinidos** (uma coisa qualquer, que aparece pela primeira vez):\n' +
      '- ***un*** = um (masculino): *un lit*\n' +
      '- ***une*** = uma (feminino): *une table*\n' +
      '- ***des*** = uns, umas (plural): *des chambres*\n\n' +
      '**Artigos definidos** (uma coisa conhecida, específica):\n' +
      '- ***le*** = o: *le salon*\n' +
      '- ***la*** = a: *la cuisine*\n' +
      '- ***l\'*** = o ou a, antes de vogal ou h mudo: *l\'appartement*\n' +
      '- ***les*** = os, as: *les fenêtres*\n\n' +
      'As coisas também viram ***il*** (masculino) ou ***elle*** (feminino): *La cuisine ? **Elle** est petite.*',
    table: { head: ['', 'masculino', 'feminino', 'plural'], rows: [
      ['indefinido (um)', 'un lit', 'une table', 'des lits, des tables'], ['definido (o)', 'le salon', 'la cuisine', 'les salons, les cuisines'],
      ["antes de vogal", "l'appartement", "l'armoire", 'les appartements']
    ] },
    examples: [
      { fr: 'Il y a un lit et une table.', pt: 'Tem uma cama e uma mesa.' },
      { fr: 'Le salon est grand.', pt: 'A sala é grande.' },
      { fr: "L'appartement est clair.", pt: 'O apartamento é claro.' },
      { fr: 'Les fenêtres sont grandes.', pt: 'As janelas são grandes.' }
    ],
    ptComparison: 'A lógica é a mesma do português: "**uma** cama" (qualquer) × "**a** cama" (aquela).\n\n' +
      'Duas diferenças:\n' +
      '- ***les*** serve para masculino **e** feminino: *les lits* (as camas), *les salons* (as salas).\n' +
      '- O gênero às vezes muda: ***le lit*** = **a** cama, ***le salon*** = **a** sala. Por isso, aprenda sempre a palavra **com o artigo**.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com un ou une.', bank: ['un', 'une'], items: [
      { text: 'Il y a ___ lit.', answers: ['un'] },
      { text: 'Il y a ___ table.', answers: ['une'] },
      { text: 'Il y a ___ salon.', answers: ['un'] },
      { text: 'Il y a ___ cuisine.', answers: ['une'] }
    ], explanationPt: '- **lit, salon** = masculinos → *un*\n- **table, cuisine** = femininos → *une*' },
    { type: 'fill_blank', prompt: "Complete com le, la, l' ou les.", bank: ['le', 'la', "l'", 'les'], items: [
      { text: '___ chambre est petite.', answers: ['la'] },
      { text: '___ salon est grand.', answers: ['le'] },
      { text: '___ fenêtres sont grandes.', answers: ['les'] },
      { text: '___appartement est clair.', answers: ["l'"] }
    ] },
    { type: 'multiple_choice', prompt: '"A cozinha? Ela é pequena."', options: ['La cuisine ? Elle est petite.', 'La cuisine ? Il est petit.', 'Le cuisine ? Il est petit.', 'La cuisine ? Elle est petit.'], answer: 0,
      explanationPt: '*La cuisine* é feminino → **elle** e **petite**.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Il y a deux chambres.', translation: 'Tem dois quartos.' },
    { type: 'match', prompt: 'Ligue o objeto à tradução.', pairs: [
      ['le lit', 'a cama'], ['la table', 'a mesa'], ['la fenêtre', 'a janela'], ['la clé', 'a chave']
    ] }
  ],
  tipForBrazilians: '**Decore a palavra com o artigo!** Não anote só *lit*: anote ***le lit*** (a cama). Assim o gênero entra junto, e você evita erros como *la lit*.\n\n' +
    'Cuidado com dois "falsos amigos" da casa:\n' +
    '- ***la chambre*** = o **quarto** (não é "câmara").\n' +
    '- ***la salle de bains*** = o **banheiro**. Já ***les toilettes*** = o vaso sanitário, ou o lavabo.'
});
