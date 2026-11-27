LUX.registerLesson({
  id: 'a1-u04-l01', level: 'A1', unit: 4, order: 1,
  title: 'Où sont mes clés ?', titlePt: 'Onde estão as minhas chaves?',
  names: ['Lucas', 'Léa', 'Ana', 'Lyon'],
  introPt: 'O Lucas está arrumando o quarto e, claro, perdeu as chaves! Nesta lição: os móveis, a pergunta ***où ?*** (onde?) e as **preposições de lugar** (em cima, embaixo, ao lado…).',
  objectives: [
    'Nomear os móveis de um quarto.',
    'Perguntar onde está alguma coisa: Où est… ? Où sont… ?',
    'Dizer onde as coisas estão: sur, sous, dans, devant, derrière, à côté de.'
  ],
  vocabulary: [
    { fr: 'où', pt: 'onde', pos: 'adv', say: 'U', ex: 'Où sont mes clés ?' },
    { fr: 'le bureau', pt: 'a escrivaninha; o escritório', g: 'm', say: 'le bü-RRÔ', ex: "L'ordinateur est sur le bureau.", d: true },
    { fr: 'la chaise', pt: 'a cadeira', g: 'f', say: 'la XÉZ', ex: 'Ton sac est sur la chaise.' },
    { fr: "l'armoire", pt: 'o guarda-roupa', g: 'f', say: 'larr-MUARR', ex: "Les vêtements sont dans l'armoire.", d: true },
    { fr: "l'étagère", pt: 'a prateleira, a estante', g: 'f', say: 'lê-ta-JÉRR', ex: "Les livres sont sur l'étagère." },
    { fr: 'la lampe', pt: 'a luminária, o abajur', g: 'f', say: 'la LÃP', ex: 'La lampe est à côté du lit.' },
    { fr: 'sur', pt: 'sobre, em cima de', pos: 'prep', say: 'SSÜRR', ex: 'Les clés sont sur la table.' },
    { fr: 'sous', pt: 'sob, embaixo de', pos: 'prep', say: 'SSU', ex: 'Le chat est sous le lit.' },
    { fr: 'dans', pt: 'dentro de, em', pos: 'prep', say: 'DÃ', ex: 'Le portable est dans le sac.' },
    { fr: 'devant / derrière', pt: 'na frente de / atrás de', pos: 'prep', say: 'de-VÃ / dé-RRIÉRR', ex: 'La chaise est devant le bureau.' },
    { fr: 'à côté de', pt: 'ao lado de', pos: 'prep', say: 'a kô-TÊ de', ex: "L'armoire est à côté de la fenêtre." },
    { fr: 'chercher', pt: 'procurar', pos: 'v', say: 'xérr-XÊ', ex: 'Je cherche mes clés.' }
  ],
  pronunciation: {
    title: 'Sur × sous: o par u / ou',
    textPt: 'Esse par é o mais importante da pronúncia francesa, porque muda o sentido:\n\n' +
      '- **u** = "ü", fale "i" com a boca em biquinho: ***sur*** "SSÜRR" (em cima)\n' +
      '- **ou** = o nosso "u": ***sous*** "SSU" (embaixo)\n\n' +
      'Se você disser "SSUR" para *sur*, o francês entende *sous*, e as chaves vão parar embaixo da mesa! Outros pares: ***tu*** (você) × ***tout*** (tudo), ***rue*** (rua) × ***roue*** (roda).',
    examples: [{ fr: 'sur la table', pt: 'em cima da mesa: "ü"' }, { fr: 'sous la table', pt: 'embaixo da mesa: "u"' }, { fr: 'tu', pt: 'você' }, { fr: 'tout', pt: 'tudo' }]
  },
  reading: {
    genre: 'mensagem com foto',
    title: 'Ma chambre à Lyon',
    text: "Salut Ana !\n\n" +
      "Voilà une photo de ma chambre ! Elle est petite, mais je l'aime beaucoup.\n\n" +
      "Le lit est à côté de la fenêtre. Devant la fenêtre, il y a mon bureau et une chaise. Sur le bureau, il y a mon ordinateur et une lampe. Mes livres sont sur l'étagère, derrière la porte. Mes vêtements sont dans l'armoire.\n\n" +
      "Et sous le lit ? Ma valise… et le chat de madame Bernard ! Il adore ma chambre.\n\n" +
      "Bisous,\nLucas",
    translationPt: 'Oi, Ana!\n\n' +
      'Aqui está uma foto do meu quarto! Ele é pequeno, mas eu gosto muito dele.\n\n' +
      'A cama fica ao lado da janela. Na frente da janela tem a minha escrivaninha e uma cadeira. Em cima da escrivaninha tem o meu computador e uma luminária. Os meus livros estão na estante, atrás da porta. As minhas roupas estão no guarda-roupa.\n\n' +
      'E embaixo da cama? A minha mala… e o gato da senhora Bernard! Ele adora o meu quarto.\n\nBeijos,\nLucas',
    exercises: [
      { type: 'multiple_choice', prompt: 'Onde fica a cama?', options: ['Ao lado da janela.', 'Na frente da porta.', 'Atrás do guarda-roupa.', 'Embaixo da janela.'], answer: 0,
        explanationPt: '"Le lit est à côté de la fenêtre." *À côté de* = ao lado de.' },
      { type: 'multiple_choice', prompt: 'O que tem embaixo da cama?', options: ['A mala e o gato da senhora Bernard.', 'Os livros.', 'O computador.', 'As roupas.'], answer: 0,
        explanationPt: '"sous le lit ? Ma valise… et le chat de madame Bernard !"' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: "L'ordinateur est sur le bureau.", answer: 'V', explanationPt: '"Sur le bureau, il y a mon ordinateur".' },
        { text: "Les vêtements sont sur l'étagère.", answer: 'F', explanationPt: 'As roupas estão **no guarda-roupa**: "dans l\'armoire".' },
        { text: 'La chambre est grande.', answer: 'F', explanationPt: '"Elle est petite".' },
        { text: 'Il y a une télé dans la chambre.', answer: 'NM', explanationPt: 'A mensagem não fala de televisão.' }
      ] },
      { type: 'match', prompt: 'Ligue cada móvel à tradução.', pairs: [
        ['le bureau', 'a escrivaninha'], ['la chaise', 'a cadeira'], ["l'armoire", 'o guarda-roupa'], ["l'étagère", 'a estante'], ['la lampe', 'a luminária']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Cadê as chaves?',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Léa, où sont mes clés ? Je cherche partout !', pt: 'Léa, onde estão as minhas chaves? Estou procurando em todo lugar!' },
      { speaker: 'L', text: 'Sur ton bureau ?', pt: 'Na sua escrivaninha?' },
      { speaker: 'U', text: "Non, sur le bureau, il y a mon ordinateur, c'est tout.", pt: 'Não, na escrivaninha tem o meu computador, só isso.' },
      { speaker: 'L', text: 'Dans ton sac ?', pt: 'Na sua mochila?' },
      { speaker: 'U', text: 'Non plus.', pt: 'Também não.' },
      { speaker: 'L', text: "Et sous le lit ? Le chat de madame Bernard adore jouer avec les clés…", pt: 'E embaixo da cama? O gato da senhora Bernard adora brincar com chaves…' },
      { speaker: 'U', text: "Non… Ah, attends ! Elles sont dans la cuisine, à côté du frigo !", pt: 'Não… Ah, espera! Estão na cozinha, ao lado da geladeira!' },
      { speaker: 'L', text: 'Ha ha ! Comme toujours !', pt: 'Ha ha! Como sempre!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Onde estavam as chaves?', options: ['Na cozinha, ao lado da geladeira.', 'Embaixo da cama.', 'Na mochila.', 'Na escrivaninha.'], answer: 0,
        explanationPt: '"Elles sont dans la cuisine, à côté du frigo !" *Le frigo* = a geladeira (informal).' },
      { type: 'listen_choose', audio: 'Et sous le lit ?', prompt: 'Ouça e escolha a pergunta da Léa.',
        options: ['Et sous le lit ?', 'Et sur le lit ?', 'Et dans le lit ?', 'Et devant le lit ?'], answer: 0,
        explanationPt: '*Sous* ("ssu") = embaixo. Compare com *sur* ("ssür") = em cima.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: "Sur le bureau, il y a l'ordinateur.", answer: 'V', explanationPt: '"sur le bureau, il y a mon ordinateur".' },
        { text: 'Les clés sont dans le sac.', answer: 'F', explanationPt: '"Non plus" = também não.' },
        { text: 'Lucas perd souvent ses clés.', answer: 'V', explanationPt: 'A Léa diz "Comme toujours !" = como sempre!' }
      ] },
      { type: 'dictation', text: 'Où sont mes clés ?', explanationPt: '*Où* (onde) tem acento para não confundir com *ou* (ou). Os dois soam "u".' },
      { type: 'dictation', text: 'Elles sont dans la cuisine.', explanationPt: '*Les clés* é feminino plural → ***elles***.' }
    ]
  },
  grammar: {
    topicId: 'position-prepositions',
    title: 'Où ? As preposições de lugar',
    explanationPt: 'Para perguntar onde algo está:\n' +
      '- ***Où est*** + singular ? *Où est mon portable ?*\n' +
      '- ***Où sont*** + plural ? *Où sont mes clés ?*\n\n' +
      'Para responder:\n' +
      '- ***sur*** = em cima de: *sur la table*\n' +
      '- ***sous*** = embaixo de: *sous le lit*\n' +
      '- ***dans*** = dentro de, em: *dans le sac*\n' +
      '- ***devant*** = na frente de: *devant la fenêtre*\n' +
      '- ***derrière*** = atrás de: *derrière la porte*\n' +
      '- ***entre*** = entre: *entre le lit et l\'armoire*\n' +
      '- ***à côté de*** = ao lado de: *à côté de la lampe*\n\n' +
      'Com ***à côté de***, o *de* se junta ao artigo masculino: *de + le* = ***du***: *à côté **du** lit*.',
    table: { head: ['preposição', 'português', 'exemplo'], rows: [
      ['sur', 'em cima de', 'sur le bureau'], ['sous', 'embaixo de', 'sous le lit'], ['dans', 'dentro de', "dans l'armoire"],
      ['devant', 'na frente de', 'devant la fenêtre'], ['derrière', 'atrás de', 'derrière la porte'], ['à côté de', 'ao lado de', 'à côté du lit']
    ] },
    examples: [
      { fr: 'Où est mon portable ? Il est sur la table.', pt: 'Onde está o meu celular? Está em cima da mesa.' },
      { fr: 'Le chat est sous le lit.', pt: 'O gato está embaixo da cama.' },
      { fr: "Les vêtements sont dans l'armoire.", pt: 'As roupas estão no guarda-roupa.' },
      { fr: 'La lampe est à côté du lit.', pt: 'A luminária está ao lado da cama.' }
    ],
    ptComparison: 'Em português, "em" serve para tudo: "**na** mesa", "**na** mochila". Em francês, você escolhe:\n' +
      '- "na mesa" (em cima) = ***sur*** *la table*\n' +
      '- "na mochila" (dentro) = ***dans*** *le sac*\n\n' +
      'E "estar" (localização) é o verbo ***être***: *les clés **sont** sur la table*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com sur, sous ou dans.', bank: ['sur', 'sous', 'dans'], items: [
      { text: "L'ordinateur est ___ le bureau. (em cima)", answers: ['sur'] },
      { text: 'La valise est ___ le lit. (embaixo)', answers: ['sous'] },
      { text: 'Le portable est ___ le sac. (dentro)', answers: ['dans'] },
      { text: "Les vêtements sont ___ l'armoire. (dentro)", answers: ['dans'] }
    ] },
    { type: 'multiple_choice', prompt: '"Onde estão os meus óculos?"', options: ['Où sont mes lunettes ?', 'Où est mes lunettes ?', 'Ou sont mes lunettes ?', 'Où sont ma lunettes ?'], answer: 0,
      explanationPt: 'Plural → ***où sont***. E *où* (onde) leva acento.' },
    { type: 'multiple_choice', prompt: '"A luminária está ao lado da cama."', options: ['La lampe est à côté du lit.', 'La lampe est à côté de le lit.', 'La lampe est côté du lit.', 'La lampe est à côté la lit.'], answer: 0,
      explanationPt: '*de + le* = ***du***.' },
    { type: 'listen_choose', audio: 'sur', prompt: 'Ouça e escolha a palavra.', options: ['sur', 'sous', 'sœur', 'sourd'], answer: 0,
      explanationPt: 'Você ouviu "ü" (biquinho): ***sur***.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Le chat est sous le lit.', translation: 'O gato está embaixo da cama.' }
  ],
  tipForBrazilians: '**Treine o "ü" com um truque:** diga "i" e, sem mexer a língua, faça um biquinho como se fosse assobiar. Pronto: *tu*, *sur*, *rue*, *salut*!\n\n' +
    'Para pedir ajuda quando perde algo:\n' +
    '- ***Tu as vu mes clés ?*** = Você viu as minhas chaves?\n' +
    '- ***Je ne trouve pas mon portable.*** = Não estou achando o meu celular.'
});
