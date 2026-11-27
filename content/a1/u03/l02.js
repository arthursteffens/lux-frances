LUX.registerLesson({
  id: 'a1-u03-l02', level: 'A1', unit: 3, order: 2,
  title: 'À la boulangerie', titlePt: 'Na padaria',
  names: ['Lucas', 'Lyon', 'Belgique', 'Suisse', 'Luxembourg'],
  introPt: 'Sábado de manhã, o Lucas vai comprar pão. Na padaria, ele precisa entender os **preços**, e aí aparecem os números mais famosos do francês: 70 é "sessenta-dez" e 80 é "quatro-vinte"!',
  objectives: [
    'Comprar pão e doces na padaria.',
    'Perguntar o preço: C\'est combien ? / Ça fait combien ?',
    'Contar de 70 a 100 e entender preços em euros.'
  ],
  vocabulary: [
    { fr: 'la boulangerie', pt: 'a padaria', g: 'f', say: 'la bu-lã-JRRI', ex: 'Je vais à la boulangerie.' },
    { fr: 'le pain', pt: 'o pão', g: 'm', say: 'le PẼ', ex: 'Le pain est chaud.' },
    { fr: 'la baguette', pt: 'a baguete', g: 'f', say: 'la ba-GUÉT', ex: "Une baguette, s'il vous plaît." },
    { fr: 'le pain au chocolat', pt: 'o pão de chocolate (massa de croissant)', g: 'm', say: 'le pẽ ô xô-kô-LA', ex: 'Deux pains au chocolat !' },
    { fr: 'la tarte', pt: 'a torta', g: 'f', say: 'la TARRT', ex: 'Une tarte aux pommes.' },
    { fr: "l'euro", pt: 'o euro', g: 'm', say: 'lö-RRÔ', ex: 'Ça fait trois euros.' },
    { fr: 'le centime', pt: 'o centavo', g: 'm', say: 'le ssã-TIM', ex: 'Quatre-vingt-dix centimes.' },
    { fr: 'combien', pt: 'quanto', pos: 'adv', say: 'kõ-BIẼ', ex: "C'est combien ?" },
    { fr: 'ça fait', pt: 'dá, fica (no total)', pos: 'expr', say: 'ssa FÉ', ex: 'Ça fait combien ?' },
    { fr: 'coûter', pt: 'custar', pos: 'v', say: 'ku-TÊ', ex: 'La baguette coûte un euro vingt.' },
    { fr: 'la monnaie', pt: 'o troco; as moedas', g: 'f', say: 'la mô-NÉ', ex: 'Voilà votre monnaie.' },
    { fr: 'chaud / chaude', pt: 'quente', pos: 'adj', say: 'XÔ / XÔD', ex: 'Le pain est encore chaud.' }
  ],
  pronunciation: {
    title: 'Os números de 70 a 100 (e os da Bélgica e da Suíça)',
    textPt: 'Na França, a partir de 70 a conta vira "matemática":\n\n' +
      '- ***soixante-dix*** = 60 + 10 = **70**\n' +
      '- ***soixante et onze*** = 60 + 11 = **71**\n' +
      '- ***quatre-vingts*** = 4 × 20 = **80**\n' +
      '- ***quatre-vingt-un*** = 4 × 20 + 1 = **81** (sem "et")\n' +
      '- ***quatre-vingt-dix*** = 4 × 20 + 10 = **90**\n' +
      '- ***cent*** = **100**\n\n' +
      '**Na Bélgica, na Suíça e em Luxemburgo** é mais fácil: ***septante*** (70) e ***nonante*** (90). Na Suíça, 80 pode ser ***huitante***. Entender as duas formas é muito útil.',
    examples: [
      { fr: 'soixante-dix', pt: '70' }, { fr: 'soixante-quinze', pt: '75' }, { fr: 'quatre-vingts', pt: '80' }, { fr: 'quatre-vingt-cinq', pt: '85' },
      { fr: 'quatre-vingt-dix', pt: '90' }, { fr: 'quatre-vingt-dix-neuf', pt: '99' }, { fr: 'cent', pt: '100' }, { fr: 'septante', pt: '70 (Bélgica, Suíça)' }, { fr: 'nonante', pt: '90 (Bélgica, Suíça)' }
    ]
  },
  reading: {
    genre: 'tabela de preços',
    title: 'Boulangerie du Marché',
    text: "Boulangerie du Marché – Pain fait maison\n\n" +
      "Baguette : 1,20 €\n" +
      "Pain de campagne : 3,80 €\n" +
      "Croissant : 1,10 €\n" +
      "Pain au chocolat : 1,30 €\n" +
      "Tarte aux pommes : 18,90 €\n\n" +
      "Notre pain est fait ici, tous les matins, avec de la [[farine|farinha]] française. Le dimanche, il y a des [[brioches|brioches (pão doce)]]. La boulangerie est [[fermée|fechada]] le lundi.",
    translationPt: '**Padaria do Mercado – Pão caseiro**\n\n' +
      'Baguete: 1,20 €\nPão rústico: 3,80 €\nCroissant: 1,10 €\nPão de chocolate: 1,30 €\nTorta de maçã: 18,90 €\n\n' +
      'O nosso pão é feito aqui, todas as manhãs, com farinha francesa. Aos domingos, tem brioches. A padaria fecha às segundas.',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quanto custa uma baguete?', options: ['1,20 €', '1,10 €', '3,80 €', '1,30 €'], answer: 0,
        explanationPt: '"Baguette : 1,20 €". Diz-se *un euro vingt*.' },
      { type: 'multiple_choice', prompt: 'Qual é o produto mais caro?', options: ['A torta de maçã.', 'O pão rústico.', 'O pão de chocolate.', 'A baguete.'], answer: 0,
        explanationPt: '"Tarte aux pommes : 18,90 €". *Pomme* = maçã.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Le pain est fait tous les matins.', answer: 'V', explanationPt: '"Notre pain est fait ici, tous les matins".' },
        { text: 'La boulangerie est fermée le dimanche.', answer: 'F', explanationPt: 'Ela fecha na **segunda**: "fermée le lundi". No domingo tem brioches.' },
        { text: 'Il y a du café à la boulangerie.', answer: 'NM', explanationPt: 'A tabela não fala de café.' }
      ] },
      { type: 'match', prompt: 'Ligue o preço escrito ao preço falado.', pairs: [
        ['1,20 €', 'un euro vingt'], ['3,80 €', 'trois euros quatre-vingts'], ['1,10 €', 'un euro dix'], ['18,90 €', 'dix-huit euros quatre-vingt-dix']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Comprando pão',
    speakers: [{ id: 'V', name: 'A padeira', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'V', text: 'Bonjour, monsieur !', pt: 'Bom dia, senhor!' },
      { speaker: 'U', text: "Bonjour, madame. Une baguette, s'il vous plaît.", pt: 'Bom dia, senhora. Uma baguete, por favor.' },
      { speaker: 'V', text: 'Voilà. Avec ceci ?', pt: 'Aqui está. Mais alguma coisa?' },
      { speaker: 'U', text: "Deux pains au chocolat. C'est combien, la tarte aux pommes ?", pt: 'Dois pães de chocolate. Quanto é a torta de maçã?' },
      { speaker: 'V', text: 'Dix-huit euros quatre-vingt-dix.', pt: 'Dezoito euros e noventa.' },
      { speaker: 'U', text: "Ah… non, merci. Ça fait combien ?", pt: 'Ah… não, obrigado. Quanto dá?' },
      { speaker: 'V', text: 'Alors, une baguette et deux pains au chocolat : trois euros quatre-vingts.', pt: 'Então, uma baguete e dois pães de chocolate: três euros e oitenta.' },
      { speaker: 'U', text: 'Voilà cinq euros.', pt: 'Aqui estão cinco euros.' },
      { speaker: 'V', text: 'Et voilà votre monnaie : un euro vingt. Bonne journée !', pt: 'E aqui está o seu troco: um euro e vinte. Tenha um bom dia!' },
      { speaker: 'U', text: 'Merci, à vous aussi !', pt: 'Obrigado, para a senhora também!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'O que o Lucas compra?', options: ['Uma baguete e dois pães de chocolate.', 'Uma baguete e uma torta.', 'Dois croissants.', 'Uma torta de maçã.'], answer: 0,
        explanationPt: 'Ele acha a torta cara e diz "non, merci".' },
      { type: 'short_answer', prompt: 'Quanto o Lucas paga? Escreva com vírgula (ex.: 2,50).', answers: ['3,80', '3.80'],
        explanationPt: '"trois euros quatre-vingts" = 3,80 €. *Quatre-vingts* = 80.' },
      { type: 'short_answer', prompt: 'Quanto ele recebe de troco? Escreva com vírgula.', answers: ['1,20', '1.20'],
        explanationPt: '"un euro vingt" = 1,20 €. Ele pagou com 5 euros: 5 − 3,80 = 1,20.' },
      { type: 'listen_choose', audio: 'quatre-vingt-dix', prompt: 'Ouça e escolha o número.', options: ['90', '80', '70', '19'], answer: 0,
        explanationPt: '*Quatre-vingt-dix* = 4 × 20 + 10 = 90.' },
      { type: 'dictation', text: "C'est combien ?", explanationPt: '*Combien* = quanto. Soa "kõ-BIẼ".' }
    ]
  },
  grammar: {
    topicId: 'questions',
    title: 'Combien ? Perguntar o preço e a quantidade',
    explanationPt: '***Combien*** = quanto. Com ele você pergunta preço e quantidade:\n\n' +
      '- ***C\'est combien ?*** = quanto é? (apontando para uma coisa)\n' +
      '- ***Ça fait combien ?*** = quanto dá? (o total da compra)\n' +
      '- ***Ça coûte combien ?*** = quanto custa?\n' +
      '- ***Combien de*** + coisa = quantos / quantas: *Combien de croissants ?*\n\n' +
      '**Como ler um preço:** euros + ***euros*** + centavos (sem dizer "centimes"):\n' +
      '- *1,20 €* = ***un euro vingt***\n' +
      '- *3,80 €* = ***trois euros quatre-vingts***\n' +
      '- *0,90 €* = ***quatre-vingt-dix centimes***',
    table: { head: ['escrito', 'falado'], rows: [
      ['1,20 €', 'un euro vingt'], ['2,50 €', 'deux euros cinquante'], ['3,80 €', 'trois euros quatre-vingts'], ['18,90 €', 'dix-huit euros quatre-vingt-dix'], ['0,75 €', 'soixante-quinze centimes']
    ] },
    examples: [
      { fr: "C'est combien, la tarte ?", pt: 'Quanto é a torta?' },
      { fr: 'Ça fait trois euros quatre-vingts.', pt: 'Dá três euros e oitenta.' },
      { fr: 'Combien de baguettes ?', pt: 'Quantas baguetes?' },
      { fr: 'La baguette coûte un euro vingt.', pt: 'A baguete custa um euro e vinte.' }
    ],
    ptComparison: 'O preço se lê quase como em português ("três euros e oitenta"), mas **sem o "e"**: *trois euros quatre-vingts*.\n\n' +
      '***Combien de*** + palavra no plural: "quantos croissants?" = *combien **de** croissants ?* O *de* não muda, nem com feminino: *combien de baguettes ?*'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Escreva o número em algarismos.', items: [
      { text: 'soixante-dix = ___', answers: ['70'] },
      { text: 'quatre-vingts = ___', answers: ['80'] },
      { text: 'quatre-vingt-quinze = ___', answers: ['95'] },
      { text: 'soixante-douze = ___', answers: ['72'] }
    ], explanationPt: '- **70** = 60 + 10\n- **80** = 4 × 20\n- **95** = 4 × 20 + 15\n- **72** = 60 + 12' },
    { type: 'multiple_choice', prompt: 'Como se lê "2,50 €"?', options: ['deux euros cinquante', 'deux euros et cinquante', 'deux cinquante euros', 'deux virgule cinquante'], answer: 0,
      explanationPt: 'Euros + *euros* + centavos, sem "et".' },
    { type: 'multiple_choice', prompt: 'Você quer saber o total da compra. O que você pergunta?', options: ['Ça fait combien ?', 'Combien de baguettes ?', 'Vous désirez ?', 'Avec ceci ?'], answer: 0,
      explanationPt: '*Ça fait combien ?* = quanto dá (no total)?' },
    { type: 'listen_choose', audio: 'soixante-dix-sept', prompt: 'Ouça e escolha o número.', options: ['77', '67', '87', '97'], answer: 0,
      explanationPt: '*Soixante-dix-sept* = 60 + 17 = 77.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "C'est combien, la tarte aux pommes ?", translation: 'Quanto é a torta de maçã?' }
  ],
  tipForBrazilians: '**A padaria é sagrada na França.** A baguete se compra quase todo dia, de manhã ou no fim da tarde, e muita gente pede ***une baguette pas trop cuite*** (não muito assada) ou ***bien cuite*** (bem assada).\n\n' +
    'Repare que a vendedora diz ***Bonne journée !*** (tenha um bom dia). A resposta educada é ***Merci, à vous aussi !*** (obrigado, para a senhora também).\n\n' +
    'Dica para quem vai a Luxemburgo, à Bélgica ou à Suíça: lá você vai ouvir ***septante*** (70) e ***nonante*** (90).'
});
