LUX.registerLesson({
  id: 'a1-u03-l01', level: 'A1', unit: 3, order: 1,
  title: "Un café, s'il vous plaît", titlePt: 'Um café, por favor',
  names: ['Lucas', 'Sofia', 'Place'],
  introPt: 'Depois da aula, o Lucas e a Sofia vão a um café. Pedir no café é uma das primeiras situações reais na França, e uma fórmula resolve quase tudo: ***je voudrais*** (eu queria).',
  objectives: [
    'Pedir comida e bebida num café.',
    'Usar je voudrais e je prends.',
    "Pedir e pagar a conta (l'addition)."
  ],
  vocabulary: [
    { fr: 'le café', pt: 'o café; a cafeteria', g: 'm', say: 'le ka-FÊ', ex: "Un café, s'il vous plaît." },
    { fr: 'le thé', pt: 'o chá', g: 'm', say: 'le TÊ', ex: 'Je voudrais un thé.' },
    { fr: "l'eau", pt: 'a água', g: 'f', say: 'LÔ', ex: "Une bouteille d'eau, s'il vous plaît." },
    { fr: "le jus d'orange", pt: 'o suco de laranja', g: 'm', say: 'le jü do-RRÃJ', ex: "Je prends un jus d'orange." },
    { fr: 'le croissant', pt: 'o croissant', g: 'm', say: 'le krruá-SSÃ', ex: 'Un croissant, merci.' },
    { fr: 'le sucre', pt: 'o açúcar', g: 'm', say: 'le SSÜKRR', ex: 'Avec du sucre ?' },
    { fr: 'le lait', pt: 'o leite', g: 'm', say: 'le LÉ', ex: 'Un café avec du lait.' },
    { fr: 'je voudrais', pt: 'eu queria, eu gostaria', pos: 'expr', say: 'jö vu-DRRÉ', ex: 'Je voudrais un café.' },
    { fr: 'prendre', pt: 'pegar; tomar, comer (num pedido)', pos: 'v', say: 'PRRÃDRR', ex: 'Je prends un thé.' },
    { fr: "l'addition", pt: 'a conta (no restaurante)', g: 'f', say: 'la-di-SSIÕ', ex: "L'addition, s'il vous plaît !" },
    { fr: 'avec / sans', pt: 'com / sem', pos: 'prep', say: 'a-VÉK / SSÃ', ex: 'Un thé sans sucre.' },
    { fr: 'le serveur / la serveuse', pt: 'o garçom / a garçonete', g: 'mf', say: 'sérr-VÖRR / sérr-VÖZ', ex: 'Le serveur est sympa.' }
  ],
  pronunciation: {
    title: 'oi = "uá" e au / eau = "ô"',
    textPt: 'Duas combinações de letras que aparecem o tempo todo no café:\n\n' +
      '- **oi** = "uá": ***croissant*** "krruá-SSÃ", ***voilà*** "vua-LÁ", ***trois*** "trruá".\n' +
      '- **au** e **eau** = "ô": ***l\'eau*** "lô", ***gâteau*** "ga-TÔ", ***chaud*** "XÔ".\n\n' +
      'E o **c** de *avec* soa: "a-VÉK". É uma das exceções à regra da consoante final muda.',
    examples: [{ fr: 'un croissant', pt: 'oi = "uá"' }, { fr: 'voilà', pt: 'oi = "uá"' }, { fr: "de l'eau", pt: 'eau = "ô"' }, { fr: 'un gâteau', pt: 'eau = "ô"' }, { fr: 'avec', pt: 'o c final soa' }]
  },
  reading: {
    genre: 'cardápio',
    title: 'Café de la Place',
    text: "Café de la Place – [[Boissons|bebidas]] et [[petit-déjeuner|café da manhã]]\n\n" +
      "Café : 2,00 €\n" +
      "Café au lait : 3,00 €\n" +
      "Thé : 3,50 €\n" +
      "Jus d'orange : 4,00 €\n" +
      "Eau minérale : 2,50 €\n" +
      "Croissant : 1,50 €\n\n" +
      "Formule du matin : un café ou un thé, un jus d'orange et un croissant : 7,00 €.\n\n" +
      "Le café est [[ouvert|aberto]] tous les jours, de 7 h à 20 h. Le [[wifi|wi-fi]] est [[gratuit|grátis]] !",
    translationPt: '**Café de la Place – Bebidas e café da manhã**\n\n' +
      'Café: 2,00 €\nCafé com leite: 3,00 €\nChá: 3,50 €\nSuco de laranja: 4,00 €\nÁgua mineral: 2,50 €\nCroissant: 1,50 €\n\n' +
      'Combo da manhã: um café ou um chá, um suco de laranja e um croissant: 7,00 €.\n\n' +
      'O café está aberto todos os dias, das 7h às 20h. O wi-fi é grátis!',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quanto custa um chá?', options: ['3,50 €', '2,00 €', '3,00 €', '4,00 €'], answer: 0,
        explanationPt: '"Thé : 3,50 €". Em francês, o preço se escreve com vírgula, como no Brasil.' },
      { type: 'multiple_choice', prompt: 'O que vem na "formule du matin"?', options: ['Café ou chá, suco de laranja e croissant.', 'Só café e croissant.', 'Água e croissant.', 'Café com leite e bolo.'], answer: 0,
        explanationPt: '"un café ou un thé, un jus d\'orange et un croissant". *Ou* = ou.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Le café est ouvert tous les jours.', answer: 'V', explanationPt: '"ouvert tous les jours".' },
        { text: 'Le wifi est gratuit.', answer: 'V', explanationPt: '"Le wifi est gratuit !"' },
        { text: 'Il y a des sandwichs.', answer: 'NM', explanationPt: 'O cardápio não fala de sanduíches.' },
        { text: 'Un croissant coûte 2,50 €.', answer: 'F', explanationPt: 'O croissant custa **1,50 €**. 2,50 € é a água.' }
      ] },
      { type: 'match', prompt: 'Ligue cada bebida à tradução.', pairs: [
        ['un café au lait', 'um café com leite'], ['un thé', 'um chá'], ["un jus d'orange", 'um suco de laranja'], ['une eau minérale', 'uma água mineral']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'No café',
    speakers: [{ id: 'G', name: 'O garçom', gender: 'm' }, { id: 'S', name: 'Sofia', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'G', text: 'Bonjour ! Vous désirez ?', pt: 'Bom dia! O que desejam?' },
      { speaker: 'S', text: "Je voudrais un thé, s'il vous plaît.", pt: 'Eu queria um chá, por favor.' },
      { speaker: 'G', text: 'Avec du lait ?', pt: 'Com leite?' },
      { speaker: 'S', text: 'Non, sans lait, merci.', pt: 'Não, sem leite, obrigada.' },
      { speaker: 'G', text: 'Et pour vous, monsieur ?', pt: 'E para o senhor?' },
      { speaker: 'U', text: 'Je prends un café et un croissant.', pt: 'Eu vou querer um café e um croissant.' },
      { speaker: 'G', text: 'Très bien. Tout de suite !', pt: 'Muito bem. É pra já!' },
      { speaker: 'U', text: "Pardon, monsieur ! L'addition, s'il vous plaît.", pt: 'Com licença, senhor! A conta, por favor.' },
      { speaker: 'G', text: 'Alors, un thé et un café… et un croissant : sept euros, s\'il vous plaît.', pt: 'Então, um chá e um café… e um croissant: sete euros, por favor.' },
      { speaker: 'U', text: 'Voilà. Merci, au revoir !', pt: 'Aqui está. Obrigado, até logo!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'O que a Sofia pede?', options: ['Um chá sem leite.', 'Um chá com leite.', 'Um café.', 'Um suco de laranja.'], answer: 0,
        explanationPt: '"Je voudrais un thé" e depois "sans lait" = sem leite.' },
      { type: 'multiple_choice', prompt: 'O que o Lucas pede?', options: ['Um café e um croissant.', 'Um chá e um croissant.', 'Só um café.', 'Um café com leite.'], answer: 0,
        explanationPt: '"Je prends un café et un croissant."' },
      { type: 'short_answer', prompt: 'Quanto eles pagam? Responda só o número, em euros.', answers: ['7'],
        explanationPt: '"sept euros" = 7 €. O *p* de *sept* não soa: "SSÉT".' },
      { type: 'listen_choose', audio: "L'addition, s'il vous plaît.", prompt: 'Ouça e escolha a frase.',
        options: ["L'addition, s'il vous plaît.", "Un café, s'il vous plaît.", "De l'eau, s'il vous plaît.", "Le menu, s'il vous plaît."], answer: 0,
        explanationPt: '*L\'addition* = a conta.' },
      { type: 'dictation', text: 'Je voudrais un thé.', explanationPt: '*Je voudrais* soa "jö vu-DRRÉ".' }
    ]
  },
  grammar: {
    topicId: 'politeness',
    title: 'Pedir com educação: je voudrais e je prends',
    explanationPt: 'Para pedir algo numa loja ou num café, as fórmulas mais úteis são:\n\n' +
      '- ***Je voudrais*** + coisa = eu queria… (a mais educada): *Je voudrais un café.*\n' +
      '- ***Je prends*** + coisa = eu vou querer… (muito comum no café): *Je prends un croissant.*\n' +
      '- Coisa + ***s\'il vous plaît*** (a mais curta): *Un thé, s\'il vous plaît.*\n\n' +
      'O garçom pergunta:\n' +
      '- ***Vous désirez ?*** = O que deseja?\n' +
      '- ***Et pour vous ?*** = E para o senhor / a senhora?\n' +
      '- ***Avec ceci ?*** = Mais alguma coisa?\n\n' +
      'O verbo ***prendre*** (pegar, tomar) é irregular: *je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent*.',
    table: { head: ['', 'prendre', 'soa'], rows: [
      ['je', 'prends', 'jö PRRÃ'], ['tu', 'prends', 'tü PRRÃ'], ['il / elle', 'prend', 'il PRRÃ'],
      ['nous', 'prenons', 'nu prre-NÕ'], ['vous', 'prenez', 'vu prre-NÊ'], ['ils / elles', 'prennent', 'il PRRÉN']
    ] },
    examples: [
      { fr: "Je voudrais un café, s'il vous plaît.", pt: 'Eu queria um café, por favor.' },
      { fr: 'Je prends un croissant.', pt: 'Vou querer um croissant.' },
      { fr: 'Vous prenez un thé ?', pt: 'O senhor vai tomar um chá?' },
      { fr: "L'addition, s'il vous plaît.", pt: 'A conta, por favor.' }
    ],
    ptComparison: 'No Brasil dizemos "me vê um café" ou "eu quero um café". Em francês, ***je veux*** (eu quero) soa grosseiro num pedido: prefira ***je voudrais*** (eu queria / gostaria), exatamente como o nosso "eu queria".\n\n' +
      'Para "tomar" um café, o francês usa ***prendre*** (pegar): *je prends un café*. Também serve para comida: *je prends un croissant*.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Qual é o jeito mais educado de pedir?', options: ['Je voudrais un café.', 'Je veux un café.', 'Donne un café.', 'Un café !'], answer: 0,
      explanationPt: '*Je voudrais* é o "eu queria" educado. *Je veux* soa como uma ordem.' },
    { type: 'fill_blank', prompt: 'Complete com o verbo prendre.', bank: ['prends', 'prend', 'prenons', 'prenez', 'prennent'], items: [
      { text: 'Je ___ un thé.', answers: ['prends'] },
      { text: 'Sofia ___ un jus d\'orange.', answers: ['prend'] },
      { text: 'Nous ___ deux cafés.', answers: ['prenons'] },
      { text: 'Vous ___ un croissant ?', answers: ['prenez'] },
      { text: 'Ils ___ la formule du matin.', answers: ['prennent'] }
    ] },
    { type: 'match', prompt: 'Ligue a pergunta do garçom à tradução.', pairs: [
      ['Vous désirez ?', 'O que deseja?'], ['Et pour vous ?', 'E para o senhor?'], ['Avec du sucre ?', 'Com açúcar?'], ['Avec ceci ?', 'Mais alguma coisa?']
    ] },
    { type: 'fill_blank', prompt: 'Complete com avec ou sans.', bank: ['avec', 'sans'], items: [
      { text: 'Un café ___ lait, je déteste le lait !', answers: ['sans'] },
      { text: 'Un thé ___ sucre, j\'adore le sucre !', answers: ['avec'] }
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je voudrais un café, s'il vous plaît.", translation: 'Eu queria um café, por favor.' }
  ],
  tipForBrazilians: '**O café francês é diferente:** se você pede *un café*, vem um **expresso** pequeno, sem leite. Para algo parecido com o nosso "pingado", peça ***un café crème*** ou ***un café au lait***.\n\n' +
    'Para chamar o garçom, diga ***Monsieur !*** ou ***S\'il vous plaît !*** Nunca chame de *garçon*: hoje isso soa antiquado e até grosseiro.\n\n' +
    'E na França a gorjeta já vem incluída na conta (*service compris*). Deixar uns trocados é gentil, mas não obrigatório.'
});
