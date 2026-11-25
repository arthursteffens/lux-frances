LUX.registerLesson({
  id: 'a2-u04-l01', level: 'A2', unit: 4, order: 1,
  title: 'Au marché Saint-Antoine', titlePt: 'Na feira Saint-Antoine',
  names: ['Léa', 'Lucas', 'Saint-Antoine', 'Saône', 'Lyon', 'Gérard', 'Brésil', 'Ardèche', 'feira'],
  objectives: [
    'Comprar frutas, legumes e outros alimentos na feira.',
    'Usar os artigos partitivos du, de la, de l\', des — e "de" na negação.',
    'Entender preços e pedidos simples de um feirante.'
  ],
  vocabulary: [
    { fr: 'les légumes', pt: 'os legumes, as verduras', g: 'm', ex: 'J\'achète des légumes au marché.' },
    { fr: 'les fruits', pt: 'as frutas', g: 'm', d: true, ex: 'Les fruits sont très frais.' },
    { fr: 'la tomate', pt: 'o tomate', g: 'f', d: true, ex: 'Je voudrais des tomates.' },
    { fr: 'la pomme de terre', pt: 'a batata', g: 'f', ex: 'Un kilo de pommes de terre, s\'il vous plaît.' },
    { fr: 'le fromage', pt: 'o queijo', g: 'm', ex: 'Il y a du fromage de chèvre.' },
    { fr: 'le pain', pt: 'o pão', g: 'm', ex: 'Je prends du pain.' },
    { fr: 'les œufs', pt: 'os ovos', g: 'm', ex: 'Vous avez des œufs ?' },
    { fr: 'le / la marchand(e)', pt: 'o(a) feirante, vendedor(a)', g: 'mf', ex: 'Le marchand est très sympa.' },
    { fr: 'frais / fraîche', pt: 'fresco(a)', pos: 'adj', ex: 'Le poisson est frais ?' },
    { fr: 'bio', pt: 'orgânico', pos: 'adj', ex: 'Ce sont des légumes bio.' },
    { fr: 'goûter', pt: 'provar, experimentar (comida)', pos: 'v', ex: 'Vous voulez goûter ?' },
    { fr: "Et avec ceci ?", pt: 'Mais alguma coisa?', pos: 'expr', ex: 'Et avec ceci, madame ?' }
  ],
  reading: {
    genre: 'post de blog',
    title: 'Le blog de Léa — Mon marché du dimanche',
    text: "Le dimanche matin, je ne fais jamais la grasse matinée : je vais au marché Saint-Antoine, sur les quais de Saône. C'est mon moment préféré de la semaine.\n\n" +
      "Il y a de tout ! Des fruits et des légumes de saison, de la viande, du poisson, du fromage, du pain, des fleurs… Les marchands crient leurs prix et on peut goûter avant d'acheter. Ma règle : j'achète surtout des produits locaux et [[bio|orgânicos]].\n\n" +
      "D'abord, je passe chez Gérard, un producteur de l'Ardèche. Il vend des pommes, des poires et du jus de pomme délicieux. Ensuite, je prends des légumes pour la semaine : des carottes, des courgettes, de la salade et des pommes de terre. En hiver, il n'y a pas de tomates, et c'est normal : ce n'est pas la saison !\n\n" +
      "Après, je m'arrête à la fromagerie. Je prends toujours du saint-marcellin, un petit fromage de la région, et parfois du comté. Je ne mange pas de viande, alors je n'achète pas de jambon, mais je prends des œufs.\n\n" +
      "Pour finir, je bois un café avec Lucas sur une terrasse. Lui, il découvre le marché : au Brésil, il allait à la « feira », mais ici, il ne connaît pas encore le nom de tous les fromages !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Quand Léa va au marché ?', options: ['Le dimanche matin.', 'Le samedi soir.', 'Tous les jours.', 'Le dimanche après-midi.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Au marché, on peut goûter avant d\'acheter.', answer: 'V', explanationPt: '"on peut goûter avant d\'acheter".' },
        { text: 'En hiver, Léa achète des tomates.', answer: 'F', explanationPt: '"En hiver, il n\'y a pas de tomates".' },
        { text: 'Léa est végétarienne.', answer: 'V', explanationPt: '"Je ne mange pas de viande" — ela não come carne.' },
        { text: 'Gérard vend du fromage.', answer: 'F', explanationPt: 'Gérard vende maçãs, peras e suco de maçã.' },
        { text: 'Le marché ferme à treize heures.', answer: 'NM', explanationPt: 'O horário de fechamento não é citado.' }
      ] },
      { type: 'match', prompt: 'Onde Léa compra?', pairs: [['chez Gérard', 'des pommes et du jus'], ['à la fromagerie', 'du saint-marcellin'], ['sur une terrasse', 'un café avec Lucas'], ['pour la semaine', 'des légumes']] },
      { type: 'fill_blank', prompt: 'Complete com o partitivo do texto (du, de la, des, de).', bank: ['du', 'de la', 'des', 'de'], items: [
        { text: 'Il y a ___ viande, du poisson, du fromage…', answers: ['de la'] },
        { text: 'Je prends ___ carottes et des courgettes.', answers: ['des'] },
        { text: 'Je prends toujours ___ saint-marcellin.', answers: ['du'] },
        { text: "Je n'achète pas ___ jambon.", answers: ['de'] }
      ] },
      { type: 'multiple_choice', prompt: 'Pourquoi Lucas ne connaît pas tous les fromages ?', options: ['Parce qu\'il découvre le marché français.', 'Parce qu\'il n\'aime pas le fromage.', 'Parce que Léa ne mange pas de fromage.', 'Parce qu\'il n\'y a pas de fromage au marché.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo na feira',
    title: 'Lucas compra frutas e legumes',
    speakers: [{ id: 'M', name: 'A feirante', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Bonjour monsieur, qu\'est-ce que je vous sers ?' },
      { speaker: 'U', text: 'Bonjour ! Je voudrais des pommes, s\'il vous plaît.' },
      { speaker: 'M', text: 'Des rouges ou des vertes ?' },
      { speaker: 'U', text: 'Des rouges. Un kilo, s\'il vous plaît.' },
      { speaker: 'M', text: 'Voilà. Et avec ceci ?' },
      { speaker: 'U', text: 'Vous avez des mangues ?' },
      { speaker: 'M', text: "Ah non, désolée, je n'ai pas de mangues. Ici, c'est que des produits de la région !" },
      { speaker: 'U', text: "D'accord. Alors, de la salade et des carottes." },
      { speaker: 'M', text: 'Une salade et un kilo de carottes. Ce sera tout ?' },
      { speaker: 'U', text: "Oui, c'est tout. Ça fait combien ?" },
      { speaker: 'M', text: 'Six euros quarante, s\'il vous plaît.' },
      { speaker: 'U', text: 'Voilà dix euros.' },
      { speaker: 'M', text: 'Et trois euros soixante qui font dix. Merci, bon dimanche !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quelles pommes Lucas achète ?', options: ['Des pommes rouges.', 'Des pommes vertes.', 'Des pommes jaunes.', 'Il n\'achète pas de pommes.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La marchande vend des mangues.', answer: 'F', explanationPt: '"je n\'ai pas de mangues".' },
        { text: 'La marchande vend seulement des produits de la région.', answer: 'V', explanationPt: '"c\'est que des produits de la région" (= ce ne sont que...).' },
        { text: 'Lucas prend deux kilos de carottes.', answer: 'F', explanationPt: 'Um quilo de cenouras.' },
        { text: 'Lucas paie par carte.', answer: 'F', explanationPt: 'Ele paga com uma nota de dez euros.' }
      ] },
      { type: 'listen_choose', audio: 'Six euros quarante, s\'il vous plaît.', prompt: 'Quanto custa tudo?',
        options: ['6,40 €', '6,14 €', '16,40 €', '4,60 €'], answer: 0 },
      { type: 'short_answer', prompt: 'Quanto Lucas recebe de troco? (ex.: 3,60)', answers: ['3,60', '3.60', '3,6', '3.6'] },
      { type: 'dictation', text: "Je voudrais des pommes, s'il vous plaît." }
    ]
  },
  grammar: {
    topicId: 'partitive',
    title: 'Os partitivos: du, de la, de l\', des',
    explanationPt: 'Em francês, quase todo substantivo precisa de um artigo. Para **comida, bebida e coisas que não se contam** (quantidade indefinida), use o **partitivo**:\n\n' +
      '- **du** + masculino: *du pain, du fromage*\n- **de la** + feminino: *de la salade, de la viande*\n- **de l\'** + vogal/h mudo: *de l\'eau, de l\'huile*\n- **des** + plural: *des pommes, des œufs*\n\n' +
      '**Na negação**, todos viram **de / d\'**: *Je n\'achète pas **de** jambon. Il n\'y a pas **d\'**œufs.*\n\n' +
      '**Gostos** usam o artigo definido (le, la, les): *J\'aime **le** fromage* (em geral) × *Je mange **du** fromage* (um pouco).',
    table: { head: ['', 'afirmativa', 'negativa'], rows: [
      ['masculino', 'Je prends du pain.', 'Je ne prends pas de pain.'], ['feminino', 'Je veux de la salade.', 'Je ne veux pas de salade.'],
      ['vogal', "Il boit de l'eau.", "Il ne boit pas d'eau."], ['plural', 'Elle achète des œufs.', "Elle n'achète pas d'œufs."]
    ] },
    examples: [
      { fr: 'Le matin, je mange du pain avec de la confiture.', pt: 'De manhã, como pão com geleia.' },
      { fr: "Tu veux de l'eau ?", pt: 'Você quer água?' },
      { fr: "Je n'ai pas de mangues.", pt: 'Não tenho manga.' },
      { fr: "J'adore le fromage, alors j'achète du comté.", pt: 'Adoro queijo, então compro comté.' }
    ],
    ptComparison: 'Em português falamos "compro pão", "quero água", **sem artigo**. Em francês isso é impossível: *j\'achète **du** pain, je veux **de l\'**eau*.\n\n' +
      'Truque: se em português couber "um pouco de" ou "algum(a)", use o partitivo. Se a frase fala do alimento **em geral** (depois de *aimer, adorer, détester, préférer*), use *le, la, les*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com du, de la, de l\' ou des.', items: [
      { text: 'Je voudrais ___ pommes, s\'il vous plaît.', answers: ['des'] },
      { text: 'Tu bois ___ eau ou du jus ?', answers: ["de l'"] },
      { text: 'Il y a ___ salade dans le frigo.', answers: ['de la'] },
      { text: 'Nous mangeons ___ poisson le vendredi.', answers: ['du'] }
    ] },
    { type: 'fill_blank', prompt: 'Passe para a negativa.', items: [
      { text: "J'achète du jambon. → Je n'achète pas ___ jambon.", answers: ['de'] },
      { text: "Il y a des œufs. → Il n'y a pas ___ œufs.", answers: ["d'"] },
      { text: 'Elle mange de la viande. → Elle ne mange pas ___ viande.', answers: ['de'] }
    ] },
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ["J'aime le fromage, alors je mange du fromage tous les jours.", "J'aime du fromage, alors je mange le fromage tous les jours.", "J'aime fromage, alors je mange fromage tous les jours.", "J'aime de fromage, alors je mange de fromage tous les jours."], answer: 0,
      explanationPt: 'Gosto em geral → le; quantidade indefinida → du.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je ne mange pas de viande.", translation: 'Eu não como carne.' }
  ],
  tipForBrazilians: '**Os "falsos gêneros" da feira:** muitas palavras mudam de gênero entre o português e o francês: *la tomate* (o tomate), *le légume* (o legume, ok), *les fruits* (as frutas — masculino em francês!), *la salade* (a alface, ok), *le lait* (o leite, ok), *la mangue* (a manga). Ao aprender, memorize sempre com o artigo: não "tomate", mas **"la tomate"**.'
});
