LUX.registerLesson({
  id: 'a1-u04-l02', level: 'A1', unit: 4, order: 2,
  title: 'Je vais à la pharmacie', titlePt: 'Vou à farmácia',
  names: ['Lucas', 'Léa', 'Croix-Rousse', 'Lyon'],
  introPt: 'O Lucas precisa conhecer o bairro: farmácia, banco, supermercado… Nesta lição: os lugares da cidade, o verbo ***aller*** (ir) e as contrações ***au*** e ***à la*** (ao, à).',
  objectives: [
    'Nomear lugares do bairro.',
    'Conjugar o verbo aller (ir).',
    'Dizer aonde você vai: au cinéma, à la banque, à l\'école.'
  ],
  vocabulary: [
    { fr: 'le quartier', pt: 'o bairro', g: 'm', say: 'le karr-TIÊ', ex: "J'aime mon quartier." },
    { fr: 'aller', pt: 'ir', pos: 'v', say: 'a-LÊ', ex: 'Je vais au supermarché.' },
    { fr: 'la pharmacie', pt: 'a farmácia', g: 'f', say: 'la farr-ma-SSI', ex: 'Je vais à la pharmacie.' },
    { fr: 'la banque', pt: 'o banco', g: 'f', say: 'la BÃK', ex: 'La banque est près de la poste.', d: true },
    { fr: 'la poste', pt: 'o correio', g: 'f', say: 'la PÓST', ex: 'Tu vas à la poste ?', d: true },
    { fr: 'le supermarché', pt: 'o supermercado', g: 'm', say: 'le ssü-pérr-marr-XÊ', ex: 'Le supermarché est grand.' },
    { fr: 'la gare', pt: 'a estação de trem', g: 'f', say: 'la GARR', ex: 'La gare est loin.' },
    { fr: 'le parc', pt: 'o parque', g: 'm', say: 'le PARRK', ex: 'Nous allons au parc.' },
    { fr: 'le cinéma', pt: 'o cinema', g: 'm', say: 'le ssi-nê-MA', ex: 'Ils vont au cinéma.' },
    { fr: "l'hôpital", pt: 'o hospital', g: 'm', say: 'lô-pi-TAL', ex: "Léa travaille à l'hôpital." },
    { fr: 'près de', pt: 'perto de', pos: 'prep', say: 'PRRÉ de', ex: 'La pharmacie est près de la gare.' },
    { fr: 'loin de', pt: 'longe de', pos: 'prep', say: 'LUẼ de', ex: "Le parc est loin d'ici." }
  ],
  pronunciation: {
    title: 'Je vais, tu vas, ils vont',
    textPt: 'O verbo ***aller*** é irregular e muito usado. Ouça as formas:\n\n' +
      '- ***je vais*** = "jö VÉ"\n' +
      '- ***tu vas*** e ***il va*** = "VA" (o s não soa)\n' +
      '- ***nous allons*** = "nu-za-LÕ" (liaison com som de z)\n' +
      '- ***vous allez*** = "vu-za-LÊ"\n' +
      '- ***ils vont*** = "il VÕ" (nasal)\n\n' +
      'E ***au*** soa "ô": *au parc* = "ô PARRK".',
    examples: [{ fr: 'Je vais au parc.', pt: 'Vou ao parque.' }, { fr: 'Nous allons à la gare.', pt: 'Vamos à estação.' }, { fr: 'Vous allez au cinéma ?', pt: 'Vocês vão ao cinema?' }, { fr: 'Ils vont à la banque.', pt: 'Eles vão ao banco.' }]
  },
  reading: {
    genre: 'post de blog',
    title: 'La Croix-Rousse, mon quartier',
    text: "J'habite à la Croix-Rousse, un quartier sur une [[colline|colina]] de Lyon. C'est un quartier [[calme|tranquilo]] et très sympa.\n\n" +
      "Près de chez moi, il y a une boulangerie, une pharmacie et un petit supermarché. La banque et la poste sont sur la place. Le samedi, je vais au marché, et le dimanche, nous allons au parc avec des amis.\n\n" +
      "Il n'y a pas de gare, mais le métro est à côté. Pour aller au centre-ville, c'est facile : dix minutes en métro !\n\n" +
      "Léa",
    translationPt: 'Moro na Croix-Rousse, um bairro numa colina de Lyon. É um bairro tranquilo e muito legal.\n\n' +
      'Perto da minha casa tem uma padaria, uma farmácia e um supermercadinho. O banco e o correio ficam na praça. No sábado vou à feira, e no domingo vamos ao parque com amigos.\n\n' +
      'Não tem estação de trem, mas o metrô fica ao lado. Para ir ao centro, é fácil: dez minutos de metrô!\n\nLéa',
    exercises: [
      { type: 'multiple_choice', prompt: 'Como é o bairro da Croix-Rousse?', options: ['Tranquilo e muito legal.', 'Barulhento e grande.', 'Longe de tudo.', 'Perigoso.'], answer: 0,
        explanationPt: '"C\'est un quartier calme et très sympa."' },
      { type: 'multiple_choice', prompt: 'Onde ficam o banco e o correio?', options: ['Na praça.', 'Ao lado do metrô.', 'No centro.', 'Perto do parque.'], answer: 0,
        explanationPt: '"La banque et la poste sont sur la place."' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Il y a une gare dans le quartier.', answer: 'F', explanationPt: '"Il n\'y a pas de gare".' },
        { text: 'Le dimanche, Léa va au parc.', answer: 'V', explanationPt: '"le dimanche, nous allons au parc avec des amis".' },
        { text: 'Le centre-ville est à dix minutes en métro.', answer: 'V', explanationPt: '"dix minutes en métro".' },
        { text: 'Il y a un cinéma dans le quartier.', answer: 'NM', explanationPt: 'O texto não fala de cinema.' }
      ] },
      { type: 'match', prompt: 'Ligue cada lugar à tradução.', pairs: [
        ['la pharmacie', 'a farmácia'], ['la banque', 'o banco'], ['la poste', 'o correio'], ['la gare', 'a estação de trem'], ['le parc', 'o parque']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Aonde você vai?',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: 'Tu vas où, Lucas ?', pt: 'Aonde você vai, Lucas?' },
      { speaker: 'U', text: "Je vais à la banque. J'ai un rendez-vous.", pt: 'Vou ao banco. Tenho um horário marcado.' },
      { speaker: 'L', text: "La banque est sur la place, à côté de la poste.", pt: 'O banco fica na praça, ao lado do correio.' },
      { speaker: 'U', text: "Merci ! Et après, je vais à la pharmacie. Elle est loin ?", pt: 'Obrigado! E depois vou à farmácia. Ela é longe?' },
      { speaker: 'L', text: "Non, elle est près de la boulangerie. Moi, je vais au supermarché.", pt: 'Não, ela fica perto da padaria. Eu vou ao supermercado.' },
      { speaker: 'U', text: "Et ce soir, on va au cinéma ?", pt: 'E hoje à noite, a gente vai ao cinema?' },
      { speaker: 'L', text: "Ce soir, non : je travaille à l'hôpital. Demain ?", pt: 'Hoje à noite, não: trabalho no hospital. Amanhã?' },
      { speaker: 'U', text: "D'accord, demain !", pt: 'Combinado, amanhã!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Aonde o Lucas vai primeiro?', options: ['Ao banco.', 'À farmácia.', 'Ao supermercado.', 'Ao cinema.'], answer: 0,
        explanationPt: '"Je vais à la banque." Depois ele vai à farmácia.' },
      { type: 'multiple_choice', prompt: 'Por que a Léa não pode ir ao cinema hoje à noite?', options: ['Porque ela trabalha no hospital.', 'Porque ela vai ao supermercado.', 'Porque ela não gosta de cinema.', 'Porque o cinema é longe.'], answer: 0,
        explanationPt: '"Ce soir, non : je travaille à l\'hôpital."' },
      { type: 'listen_choose', audio: 'Tu vas où, Lucas ?', prompt: 'Ouça e escolha a pergunta.',
        options: ['Tu vas où, Lucas ?', 'Tu es où, Lucas ?', 'Tu vas bien, Lucas ?', 'Tu habites où, Lucas ?'], answer: 0,
        explanationPt: '*Tu vas où ?* = aonde você vai? (na fala, o *où* vai no fim).' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'La pharmacie est près de la boulangerie.', answer: 'V', explanationPt: '"elle est près de la boulangerie".' },
        { text: 'Léa va à la banque.', answer: 'F', explanationPt: 'Ela vai **ao supermercado**.' },
        { text: 'Le film commence à vingt heures.', answer: 'NM', explanationPt: 'Eles não falam de horário.' }
      ] },
      { type: 'dictation', text: 'Je vais au supermarché.', explanationPt: '*à + le* = ***au***: *au supermarché*.' }
    ]
  },
  grammar: {
    topicId: 'contractions',
    title: 'O verbo aller e as contrações au, à la, aux',
    explanationPt: '***Aller*** = ir. É irregular:\n' +
      '- ***je vais***, ***tu vas***, ***il / elle va***\n' +
      '- ***nous allons***, ***vous allez***, ***ils / elles vont***\n\n' +
      '"Ir **a** um lugar" = ***aller à***. E o *à* se junta com o artigo:\n' +
      '- **à + le** = ***au***: *Je vais **au** parc.*\n' +
      '- **à + la** = ***à la*** (não muda): *Je vais **à la** banque.*\n' +
      '- **à + l\'** = ***à l\'*** (não muda): *Elle va **à l\'**hôpital.*\n' +
      '- **à + les** = ***aux***: *Nous allons **aux** magasins.*\n\n' +
      '**Cidade** sem artigo: *Je vais **à** Paris.*',
    table: { head: ['', 'aller', 'exemplo'], rows: [
      ['je', 'vais', 'Je vais au parc.'], ['tu', 'vas', 'Tu vas à la poste ?'], ['il / elle', 'va', "Elle va à l'hôpital."],
      ['nous', 'allons', 'Nous allons au cinéma.'], ['vous', 'allez', 'Vous allez à la gare ?'], ['ils / elles', 'vont', 'Ils vont à Paris.']
    ] },
    examples: [
      { fr: 'Je vais au supermarché.', pt: 'Vou ao supermercado.' },
      { fr: 'Tu vas à la pharmacie ?', pt: 'Você vai à farmácia?' },
      { fr: "Léa va à l'hôpital.", pt: 'A Léa vai ao hospital.' },
      { fr: 'Nous allons à Lyon.', pt: 'Nós vamos a Lyon.' }
    ],
    ptComparison: 'Exatamente como o português: "a + o" = **ao**, e em francês "à + le" = ***au***.\n\n' +
      'A diferença: o gênero pode mudar. "**O** banco" é ***la*** *banque*, então "vou **ao** banco" = *je vais **à la** banque*. E "**o** correio" é ***la*** *poste*: *je vais **à la** poste*.\n\n' +
      'Em francês também se usa *à* para "em" + lugar: "trabalho **no** hospital" = *je travaille **à l\'**hôpital*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o verbo aller.', bank: ['vais', 'vas', 'va', 'allons', 'allez', 'vont'], items: [
      { text: 'Je ___ à la banque.', answers: ['vais'] },
      { text: 'Tu ___ où ?', answers: ['vas'] },
      { text: 'Léa ___ au supermarché.', answers: ['va'] },
      { text: 'Nous ___ au parc.', answers: ['allons'] },
      { text: 'Vous ___ au cinéma ?', answers: ['allez'] },
      { text: 'Ils ___ à Paris.', answers: ['vont'] }
    ] },
    { type: 'fill_blank', prompt: "Complete com au, à la, à l' ou aux.", bank: ['au', 'à la', "à l'", 'aux'], items: [
      { text: 'Je vais ___ cinéma.', answers: ['au'] },
      { text: 'Elle va ___ pharmacie.', answers: ['à la'] },
      { text: 'Il travaille ___hôpital.', answers: ["à l'"] },
      { text: 'Nous allons ___ magasins.', answers: ['aux'] }
    ], explanationPt: '- **le cinéma** → *au*\n- **la pharmacie** → *à la*\n- **l\'hôpital** → *à l\'*\n- **les magasins** → *aux*' },
    { type: 'multiple_choice', prompt: '"Vou ao banco."', options: ['Je vais à la banque.', 'Je vais au banque.', 'Je vais à le banque.', 'Je va à la banque.'], answer: 0,
      explanationPt: '*La banque* é feminino → ***à la***. E *je* → ***vais***.' },
    { type: 'match', prompt: 'Ligue o contrário.', pairs: [
      ['près de', 'loin de'], ['devant', 'derrière'], ['sur', 'sous'], ['grand', 'petit']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Nous allons au parc dimanche.', translation: 'Vamos ao parque no domingo.' }
  ],
  tipForBrazilians: '**Falsos amigos da cidade:**\n\n' +
    '- ***la banque*** = **o** banco (instituição). O banco de sentar é ***le banc***.\n' +
    '- ***la poste*** = **o** correio. A carta é ***la lettre***.\n' +
    '- ***la gare*** = a estação **de trem**. A do metrô é ***la station***.\n\n' +
    'E ***un rendez-vous*** não é um encontro romântico (nem sempre!): é qualquer **horário marcado**, no banco, no médico ou no cabeleireiro.'
});
