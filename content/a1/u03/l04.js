LUX.registerLesson({
  id: 'a1-u03-l04', level: 'A1', unit: 3, order: 4,
  title: 'Au marché', titlePt: 'Na feira',
  names: ['Lucas', 'Léa', 'Croix-Rousse'],
  introPt: 'Sábado de manhã tem feira na Croix-Rousse, e a Léa deixou uma lista de compras para o Lucas. Nesta lição: frutas e legumes, **quantidades** (um quilo de, uma garrafa de…) e as **cores**.',
  objectives: [
    'Comprar frutas e legumes na feira.',
    'Dizer quantidades: un kilo de, une bouteille de, beaucoup de.',
    'Usar as cores com a concordância certa (vert, verte).'
  ],
  vocabulary: [
    { fr: 'le marché', pt: 'a feira, o mercado', g: 'm', say: 'le marr-XÊ', ex: 'Le marché est le samedi matin.', d: true },
    { fr: 'la pomme', pt: 'a maçã', g: 'f', say: 'la PÓM', ex: 'Un kilo de pommes, s\'il vous plaît.' },
    { fr: 'la tomate', pt: 'o tomate', g: 'f', say: 'la tô-MAT', ex: 'Les tomates sont rouges.', d: true },
    { fr: 'la banane', pt: 'a banana', g: 'f', say: 'la ba-NAN', ex: 'Les bananes sont jaunes.' },
    { fr: 'la fraise', pt: 'o morango', g: 'f', say: 'la FRRÉZ', ex: "J'adore les fraises.", d: true },
    { fr: "l'œuf", pt: 'o ovo', g: 'm', say: 'LÖF', ex: 'Six œufs, s\'il vous plaît.' },
    { fr: 'le kilo', pt: 'o quilo', g: 'm', say: 'le ki-LÔ', ex: 'Un kilo de tomates.' },
    { fr: 'la bouteille', pt: 'a garrafa', g: 'f', say: 'la bu-TÉI', ex: "Une bouteille d'eau." },
    { fr: 'beaucoup de', pt: 'muito(s), muita(s)', pos: 'expr', say: 'bô-KU de', ex: 'Il y a beaucoup de fruits.' },
    { fr: 'rouge', pt: 'vermelho(a)', pos: 'adj', say: 'RRUJ', ex: 'Une pomme rouge.' },
    { fr: 'vert / verte', pt: 'verde', pos: 'adj', say: 'VÉRR / VÉRRT', ex: 'Des pommes vertes.' },
    { fr: 'jaune', pt: 'amarelo(a)', pos: 'adj', say: 'JÔN', ex: 'Une banane jaune.' }
  ],
  pronunciation: {
    title: 'Os três sons nasais',
    textPt: 'O francês tem três sons nasais principais. O **n** ou **m** não se pronuncia, só "anasala" a vogal:\n\n' +
      '- **an, en, am, em** = "ã", com a boca bem aberta: ***orange***, ***cent***, ***enfant***\n' +
      '- **on, om** = "õ": ***bon***, ***citron***, ***combien***\n' +
      '- **in, ain, un** = "ẽ", aberto: ***vin***, ***pain***, ***un***\n\n' +
      '**Atenção:** se depois do n vem uma vogal, **não há nasal**: *banane* = "ba-NAN", *tomate*, *pomme*.',
    examples: [{ fr: 'une orange', pt: 'an = "ã"' }, { fr: 'un citron', pt: 'on = "õ"' }, { fr: 'du pain', pt: 'ain = "ẽ"' }, { fr: 'une banane', pt: 'sem nasal: n + vogal' }]
  },
  reading: {
    genre: 'lista e bilhete',
    title: 'La liste de Léa',
    text: "Liste de courses\n" +
      "– un kilo de pommes (vertes !)\n" +
      "– 500 grammes de tomates\n" +
      "– six œufs\n" +
      "– une bouteille d'[[huile d'olive|azeite de oliva]]\n" +
      "– des fraises\n\n" +
      "Lucas,\n" +
      "Le marché est sur la place, le samedi matin. Il y a beaucoup de [[stands|barracas]]. Les tomates du marché sont rouges et très bonnes ! Prends des pommes vertes, pas rouges : c'est pour une tarte. Merci !\n" +
      "Léa",
    translationPt: '**Lista de compras**\n– um quilo de maçãs (verdes!)\n– 500 gramas de tomates\n– seis ovos\n– uma garrafa de azeite de oliva\n– morangos\n\n' +
      'Lucas,\nA feira é na praça, no sábado de manhã. Tem muitas barracas. Os tomates da feira são vermelhos e muito bons! Pegue maçãs verdes, não vermelhas: são para uma torta. Obrigada!\nLéa',
    exercises: [
      { type: 'multiple_choice', prompt: 'De que cor devem ser as maçãs?', options: ['Verdes.', 'Vermelhas.', 'Amarelas.', 'Tanto faz.'], answer: 0,
        explanationPt: '"Prends des pommes vertes, pas rouges".' },
      { type: 'multiple_choice', prompt: 'Para que são as maçãs?', options: ['Para uma torta.', 'Para um suco.', 'Para uma salada.', 'Para comer no café da manhã.'], answer: 0,
        explanationPt: '"c\'est pour une tarte".' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Le marché est le samedi matin.', answer: 'V', explanationPt: '"le samedi matin".' },
        { text: 'Lucas achète douze œufs.', answer: 'F', explanationPt: 'A lista diz **seis**: "six œufs".' },
        { text: 'Il y a du poisson au marché.', answer: 'NM', explanationPt: 'O bilhete não fala de peixe.' }
      ] },
      { type: 'match', prompt: 'Ligue cada quantidade à tradução.', pairs: [
        ['un kilo de pommes', 'um quilo de maçãs'], ['500 grammes de tomates', '500 gramas de tomates'], ['six œufs', 'seis ovos'], ["une bouteille d'huile", 'uma garrafa de óleo']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Na barraca de frutas',
    speakers: [{ id: 'M', name: 'O feirante', gender: 'm' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Bonjour, monsieur ! Vous désirez ?', pt: 'Bom dia, senhor! O que deseja?' },
      { speaker: 'U', text: "Bonjour ! Je voudrais un kilo de pommes, s'il vous plaît.", pt: 'Bom dia! Eu queria um quilo de maçãs, por favor.' },
      { speaker: 'M', text: 'Rouges ou vertes ?', pt: 'Vermelhas ou verdes?' },
      { speaker: 'U', text: "Vertes. C'est pour une tarte.", pt: 'Verdes. São para uma torta.' },
      { speaker: 'M', text: 'Voilà. Et avec ça ?', pt: 'Aqui está. E o que mais?' },
      { speaker: 'U', text: '500 grammes de tomates et des fraises.', pt: '500 gramas de tomates e morangos.' },
      { speaker: 'M', text: 'Une barquette de fraises ? Elles sont très bonnes aujourd\'hui !', pt: 'Uma caixinha de morangos? Eles estão muito bons hoje!' },
      { speaker: 'U', text: "Oui, une barquette. C'est tout, merci. Ça fait combien ?", pt: 'Sim, uma caixinha. É só isso, obrigado. Quanto dá?' },
      { speaker: 'M', text: 'Huit euros soixante-dix.', pt: 'Oito euros e setenta.' },
      { speaker: 'U', text: 'Voilà. Bonne journée !', pt: 'Aqui está. Tenha um bom dia!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'O que o Lucas compra?', options: ['Maçãs verdes, tomates e morangos.', 'Maçãs vermelhas e tomates.', 'Bananas e morangos.', 'Só maçãs.'], answer: 0,
        explanationPt: '"un kilo de pommes" (vertes), "500 grammes de tomates et des fraises".' },
      { type: 'short_answer', prompt: 'Quanto o Lucas paga? Escreva com vírgula (ex.: 2,50).', answers: ['8,70', '8.70'],
        explanationPt: '"Huit euros soixante-dix" = 8,70 €. *Soixante-dix* = 70.' },
      { type: 'listen_choose', audio: 'Rouges ou vertes ?', prompt: 'Ouça e escolha a pergunta do feirante.',
        options: ['Rouges ou vertes ?', 'Rouges ou jaunes ?', 'Vertes ou jaunes ?', 'Une ou deux ?'], answer: 0,
        explanationPt: '*Rouges ou vertes ?* = vermelhas ou verdes? As cores concordam com *pommes* (feminino plural).' },
      { type: 'multiple_choice', prompt: 'O que o Lucas diz quando não quer mais nada?', options: ["C'est tout, merci.", 'Et avec ça ?', 'Vous désirez ?', 'Bonne journée !'], answer: 0,
        explanationPt: '*C\'est tout* = é tudo, é só isso.' },
      { type: 'dictation', text: 'Un kilo de pommes.', explanationPt: 'Depois de uma quantidade, sempre ***de***: *un kilo **de** pommes*.' }
    ]
  },
  grammar: {
    topicId: 'quantities',
    title: 'Quantidades (un kilo de…) e as cores',
    explanationPt: '**Depois de uma quantidade, use sempre *de*** (ou *d\'* antes de vogal), sem artigo:\n\n' +
      '- ***un kilo de*** pommes = um quilo de maçãs\n' +
      '- ***500 grammes de*** tomates = 500 gramas de tomates\n' +
      '- ***une bouteille d\'***eau = uma garrafa de água\n' +
      '- ***beaucoup de*** fruits = muitas frutas\n' +
      '- ***un peu de*** sucre = um pouco de açúcar\n\n' +
      '**As cores** vêm **depois** da palavra e concordam com ela:\n' +
      '- ***vert*** → *verte* (feminino), *verts* / *vertes* (plural): *des pommes vertes*\n' +
      '- ***rouge*** e ***jaune*** já terminam em **e**: não mudam no feminino, só ganham **s** no plural: *une pomme rouge*, *des tomates rouges*.',
    table: { head: ['quantidade', 'exemplo', 'português'], rows: [
      ['un kilo de', 'un kilo de pommes', 'um quilo de maçãs'], ['500 grammes de', '500 grammes de tomates', '500 gramas de tomates'],
      ['une bouteille de', "une bouteille d'eau", 'uma garrafa de água'], ['beaucoup de', 'beaucoup de fruits', 'muitas frutas'], ['un peu de', 'un peu de sucre', 'um pouco de açúcar']
    ] },
    examples: [
      { fr: 'Je voudrais un kilo de pommes vertes.', pt: 'Eu queria um quilo de maçãs verdes.' },
      { fr: 'Il y a beaucoup de fruits au marché.', pt: 'Tem muitas frutas na feira.' },
      { fr: "Une bouteille d'eau, s'il vous plaît.", pt: 'Uma garrafa de água, por favor.' },
      { fr: 'Les tomates sont rouges.', pt: 'Os tomates são vermelhos.' }
    ],
    ptComparison: 'Igual ao português: "um quilo **de** maçãs", "muitas frutas" → *beaucoup **de** fruits*. O *de* nunca muda: nada de *beaucoup des fruits*.\n\n' +
      'As cores também vêm depois da palavra, como em português: *une pomme verte* (uma maçã verde).\n\n' +
      'Atenção ao gênero: ***la tomate*** é feminino (o tomate) e ***la fraise*** também (o morango).'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: '"Um quilo de tomates."', options: ['Un kilo de tomates.', 'Un kilo des tomates.', 'Un kilo tomates.', 'Un kilo les tomates.'], answer: 0,
      explanationPt: 'Depois de quantidade: só ***de***.' },
    { type: 'fill_blank', prompt: "Complete com de ou d'.", bank: ['de', "d'"], items: [
      { text: 'beaucoup ___ légumes', answers: ['de'] },
      { text: 'une bouteille ___eau', answers: ["d'"] },
      { text: 'un peu ___ sucre', answers: ['de'] },
      { text: 'un kilo ___oranges', answers: ["d'"] }
    ] },
    { type: 'fill_blank', prompt: 'Concorde a cor.', items: [
      { text: 'des pommes ___ (vert)', answers: ['vertes'] },
      { text: 'une banane ___ (jaune)', answers: ['jaune'] },
      { text: 'des tomates ___ (rouge)', answers: ['rouges'] },
      { text: 'un citron ___ (vert)', answers: ['vert'] }
    ], explanationPt: '- **pommes** = feminino plural → *vertes*\n- **banane** = feminino; *jaune* já termina em e\n- **tomates** = plural → *rouges*\n- **citron** = masculino singular → *vert*' },
    { type: 'match', prompt: 'Ligue cada fruta à tradução.', pairs: [
      ['la pomme', 'a maçã'], ['la fraise', 'o morango'], ['la banane', 'a banana'], ["l'orange", 'a laranja']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je voudrais un kilo de pommes.", translation: 'Eu queria um quilo de maçãs.' }
  ],
  tipForBrazilians: '**A feira francesa** (*le marché*) é uma instituição: produtos da região, queijos, pães, flores. Algumas dicas:\n\n' +
    '- Em muitas barracas, **não se pega a fruta com a mão**: você pede e o feirante escolhe.\n' +
    '- Para provar: ***Je peux goûter ?*** (posso provar?)\n' +
    '- Para dizer que é só isso: ***C\'est tout, merci.***\n' +
    '- Leve a sua sacola (***un sac***): sacolas plásticas são proibidas na França.'
});
