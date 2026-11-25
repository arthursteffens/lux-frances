LUX.registerLesson({
  id: 'a2-u04-l02', level: 'A2', unit: 4, order: 2,
  title: 'La tarte aux pralines', titlePt: 'A torta de pralinas',
  names: ['Léa', 'Lucas', 'Lyon', 'Lyonnais', 'Mamie', 'Jeanne', 'Hugo'],
  objectives: [
    'Entender e explicar uma receita simples.',
    'Usar expressões de quantidade: un kilo de, 200 grammes de, un peu de, beaucoup de, assez de, trop de.',
    'Usar "il faut" para dizer do que se precisa.'
  ],
  vocabulary: [
    { fr: 'la recette', pt: 'a receita (de cozinha)', g: 'f', ex: "C'est la recette de ma grand-mère." },
    { fr: 'la farine', pt: 'a farinha', g: 'f', ex: 'Il faut deux cents grammes de farine.' },
    { fr: 'le beurre', pt: 'a manteiga', g: 'm', d: true, ex: 'Un morceau de beurre.' },
    { fr: 'le sucre', pt: 'o açúcar', g: 'm', ex: 'Pas trop de sucre !' },
    { fr: 'la crème', pt: 'o creme de leite', g: 'f', ex: 'Ajoutez la crème.' },
    { fr: 'le four', pt: 'o forno', g: 'm', ex: 'Mettez la tarte au four.' },
    { fr: 'un peu de', pt: 'um pouco de', pos: 'expr', ex: 'Ajoute un peu de sel.' },
    { fr: 'beaucoup de', pt: 'muito(s), muita(s)', pos: 'expr', ex: 'Il y a beaucoup de sucre.' },
    { fr: 'assez de', pt: 'bastante, o suficiente', pos: 'expr', ex: "On n'a pas assez de farine." },
    { fr: 'trop de', pt: 'demais, excesso de', pos: 'expr', ex: 'Tu as mis trop de sel !' },
    { fr: 'il faut', pt: 'é preciso, precisa-se', pos: 'expr', ex: 'Il faut trois œufs.' },
    { fr: 'mélanger', pt: 'misturar', pos: 'v', ex: 'Mélangez bien.' }
  ],
  reading: {
    genre: 'receita',
    title: 'La tarte aux pralines de Mamie Jeanne',
    text: "La tarte aux pralines est une spécialité lyonnaise. Elle est rose, très sucrée et absolument délicieuse ! Voici la recette de Mamie Jeanne, pour six personnes.\n\n" +
      "Ingrédients :\n" +
      "Pour la pâte : deux cents grammes de farine, cent grammes de beurre, un œuf, une pincée de sel et un peu d'eau.\n" +
      "Pour la garniture : deux cents grammes de pralines roses, vingt centilitres de crème fraîche liquide.\n\n" +
      "Préparation :\n" +
      "D'abord, mélangez la farine, le sel et le beurre coupé en petits morceaux. Ajoutez l'œuf et un peu d'eau, puis formez une boule. Laissez [[reposer|descansar]] la pâte trente minutes au frigo.\n\n" +
      "Ensuite, écrasez les pralines avec un rouleau. Attention : il ne faut pas les réduire en poudre, il faut garder des petits morceaux ! Faites chauffer la crème dans une casserole, ajoutez les pralines et mélangez pendant cinq minutes à feu doux.\n\n" +
      "Étalez la pâte dans un moule, versez la garniture et faites cuire vingt-cinq minutes au four, à cent quatre-vingts degrés.\n\n" +
      "Le conseil de Mamie : laissez refroidir au moins deux heures. La tarte est meilleure froide. Et ne mettez pas trop de crème, sinon la tarte est trop liquide !",
    exercises: [
      { type: 'multiple_choice', prompt: 'De quelle couleur est la tarte ?', options: ['Rose.', 'Blanche.', 'Marron.', 'Rouge.'], answer: 0 },
      { type: 'match', prompt: 'Ligue o ingrediente à quantidade.', pairs: [['la farine', 'deux cents grammes'], ['le beurre', 'cent grammes'], ['la crème', 'vingt centilitres'], ['le sel', 'une pincée'], ["l'œuf", 'un seul']] },
      { type: 'order_events', prompt: 'Coloque as etapas na ordem.', items: [
        'Mélanger la farine, le sel et le beurre.', 'Laisser reposer la pâte au frigo.', 'Écraser les pralines.', 'Faire chauffer la crème avec les pralines.', 'Faire cuire la tarte au four.', 'Laisser refroidir deux heures.'
      ] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il faut écraser les pralines en poudre très fine.', answer: 'F', explanationPt: '"il ne faut pas les réduire en poudre, il faut garder des petits morceaux".' },
        { text: 'La tarte cuit vingt-cinq minutes.', answer: 'V', explanationPt: '"faites cuire vingt-cinq minutes au four".' },
        { text: 'Selon Mamie, la tarte est meilleure chaude.', answer: 'F', explanationPt: '"La tarte est meilleure froide."' },
        { text: 'On peut acheter des pralines roses au supermarché.', answer: 'NM', explanationPt: 'A receita não diz onde comprar.' }
      ] },
      { type: 'short_answer', prompt: 'A que temperatura vai o forno? (só o número)', answers: ['180'] }
    ]
  },
  listening: {
    genre: 'diálogo na cozinha',
    title: 'Falta alguma coisa?',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: 'Bon, on fait la tarte pour la fête de Hugo ? On a tout ?' },
      { speaker: 'U', text: "Voyons… De la farine, oui, il y en a un paquet. Du beurre, il reste deux cents grammes." },
      { speaker: 'L', text: "Parfait, il faut cent grammes. Et des œufs ?" },
      { speaker: 'U', text: "Il y a six œufs. Mais il n'y a pas de crème." },
      { speaker: 'L', text: 'Pas de crème ? Zut. Et les pralines ?' },
      { speaker: 'U', text: "Il y a un petit paquet. Cent grammes, je crois. Ce n'est pas assez, non ?" },
      { speaker: 'L', text: "Non, il en faut deux cents. Tu peux aller à la boulangerie du coin ? Ils vendent des pralines." },
      { speaker: 'U', text: "D'accord. Alors, je prends cent grammes de pralines et une brique de crème." },
      { speaker: 'L', text: "Et une bouteille de vin pour la fête, s'il te plaît. Mais pas trop cher !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: "Qu'est-ce qui manque complètement ?", options: ['La crème.', 'La farine.', 'Le beurre.', 'Les œufs.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il y a assez de beurre.', answer: 'V', explanationPt: 'Sobram 200 g e a receita pede 100 g.' },
        { text: 'Il y a deux cents grammes de pralines.', answer: 'F', explanationPt: 'Só há um pacotinho de cerca de 100 g.' },
        { text: 'Lucas va au supermarché.', answer: 'F', explanationPt: 'Ele vai à padaria da esquina.' },
        { text: 'Léa veut une bouteille de vin.', answer: 'V', explanationPt: '"Et une bouteille de vin pour la fête".' }
      ] },
      { type: 'listen_choose', audio: "Ce n'est pas assez, non ?", prompt: 'O que Lucas pergunta?',
        options: ['Não é suficiente, né?', 'Não é demais, né?', 'Não está bom, né?', 'Não tem mais, né?'], answer: 0 },
      { type: 'dictation', text: 'Il faut cent grammes.' },
      { type: 'dictation', text: "Mais il n'y a pas de crème." }
    ]
  },
  grammar: {
    topicId: 'quantities',
    title: 'Expressões de quantidade + de',
    explanationPt: 'Depois de qualquer **expressão de quantidade**, use só **de** (ou **d\'** antes de vogal) — sem artigo:\n\n' +
      '- **Quantidades precisas**: *un kilo **de** pommes, deux cents grammes **de** farine, un litre **de** lait, une bouteille **d\'**eau, un paquet **de** pâtes, une tranche **de** jambon*\n' +
      '- **Quantidades vagas**: *un peu **de** sel, beaucoup **de** sucre, assez **de** temps, trop **de** crème, peu **de** gens*\n\n' +
      '**Il faut** = é preciso / precisa-se de: *Il faut trois œufs.* (precisa de três ovos) · *Il faut mélanger.* (é preciso misturar)\n\n' +
      '**Atenção:** *la plupart **des*** (a maioria) e *bien **des*** são exceções que mantêm o artigo.',
    table: { head: ['expressão', 'exemplo', 'tradução'], rows: [
      ['un peu de', "un peu d'eau", 'um pouco de água'], ['beaucoup de', 'beaucoup de monde', 'muita gente'], ['assez de', "assez d'argent", 'dinheiro suficiente'],
      ['trop de', 'trop de sel', 'sal demais'], ['un kilo de', 'un kilo de tomates', 'um quilo de tomate'], ['une bouteille de', 'une bouteille de vin', 'uma garrafa de vinho'],
      ['un paquet de', 'un paquet de pâtes', 'um pacote de macarrão'], ['une tranche de', 'deux tranches de jambon', 'duas fatias de presunto']
    ] },
    examples: [
      { fr: 'Il y a beaucoup de touristes en été.', pt: 'Tem muitos turistas no verão.' },
      { fr: "Je n'ai pas assez de temps.", pt: 'Não tenho tempo suficiente.' },
      { fr: 'Tu as mis trop de sucre !', pt: 'Você pôs açúcar demais!' },
      { fr: 'Il faut deux cents grammes de beurre.', pt: 'Precisa de duzentos gramas de manteiga.' }
    ],
    ptComparison: 'Em português dizemos "**muitas** pessoas", com concordância. Em francês, *beaucoup* é invariável e pede **de**: *beaucoup **de** personnes*, nunca ~~beaucoup des personnes~~ (a não ser que sejam pessoas específicas: *beaucoup des personnes **que je connais***).\n\n' +
      '**"Demais" × "muito":** *trop* = excesso, é negativo (*trop cher* = caro demais). Para elogiar, use *très* ou *vraiment*: *c\'est très bon*. (Mas na gíria jovem, *trop bien* = muito legal!)'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com de, d\', du, de la ou des.', items: [
      { text: 'Je voudrais un kilo ___ carottes.', answers: ['de'] },
      { text: 'Il y a beaucoup ___ eau dans la soupe.', answers: ["d'"] },
      { text: "J'achète ___ pain et de la confiture.", answers: ['du'] },
      { text: 'Tu as assez ___ argent ?', answers: ["d'"] },
      { text: 'Une bouteille ___ vin rouge, s\'il vous plaît.', answers: ['de'] },
      { text: 'Il y a trop ___ monde ici !', answers: ['de'] }
    ] },
    { type: 'multiple_choice', prompt: '"Muitas pessoas vieram."', options: ['Beaucoup de personnes sont venues.', 'Beaucoup des personnes sont venues.', 'Beaucoup personnes sont venues.', 'Beaucoup de les personnes sont venues.'], answer: 0 },
    { type: 'match', prompt: 'Ligue o recipiente ao conteúdo.', pairs: [['une bouteille', "d'eau"], ['une tranche', 'de jambon'], ['un paquet', 'de pâtes'], ['un pot', 'de confiture'], ['une boîte', 'de thon']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Il faut un peu de sel.', translation: 'Precisa de um pouco de sal.' }
  ],
  tipForBrazilians: '**Imperativo nas receitas:** as receitas francesas usam o imperativo com *vous* (*mélangez, ajoutez, versez*) ou o infinitivo (*mélanger, ajouter*). Os dois significam "misture, adicione". E *faire cuire* = cozinhar / assar; *faire chauffer* = esquentar — o francês usa muito **faire + infinitivo** na cozinha.'
});
