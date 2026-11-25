/* Gramática — artigos e determinantes */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'articles', category: 'artigos', level: 'A1', title: 'Artigos definidos e indefinidos', titleFr: 'Les articles définis et indéfinis',
    keywords: ['artigo', 'le la les', 'un une des', 'definido', 'indefinido', "l'"],
    summaryPt: 'le/la/les = o/a/os/as; un/une/des = um/uma/uns/umas. Antes de vogal, le/la viram l\'.',
    explanationPt: 'O francês quase **sempre usa artigo** antes do substantivo, mesmo quando o português não usa.\n\n' +
      '- **Definidos:** *le* (masc.), *la* (fem.), *l\'* (antes de vogal ou h mudo), *les* (plural).\n' +
      '- **Indefinidos:** *un* (masc.), *une* (fem.), *des* (plural — "uns, umas", muitas vezes não se traduz).\n\n' +
      'Para falar de **gostos e generalidades**, use o definido: *J\'aime le café* (gosto de café).',
    tables: [{ caption: 'Formas', head: ['', 'masculino', 'feminino', 'plural'], rows: [
      ['definido', 'le / l\'', 'la / l\'', 'les'], ['indefinido', 'un', 'une', 'des']
    ] }],
    examples: [
      { fr: "J'aime le chocolat.", pt: 'Gosto de chocolate.' },
      { fr: "L'école est fermée.", pt: 'A escola está fechada.' },
      { fr: "J'ai des amis à Lyon.", pt: 'Tenho amigos em Lyon.' }
    ],
    ptComparison: {
      same: 'Masculino e feminino, singular e plural — a lógica é a mesma do português.',
      different: 'O plural *des* aparece onde o português não põe nada: "tenho amigos" = *j\'ai des amis*. E gostos levam artigo definido.',
      commonErrors: [
        { wrong: "J'aime chocolat.", right: "J'aime le chocolat.", why: 'Gostos e generalidades pedem artigo definido.' },
        { wrong: "J'ai amis.", right: "J'ai des amis.", why: 'O plural indefinido "des" é obrigatório.' },
        { wrong: 'le école', right: "l'école", why: 'Elisão antes de vogal.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"Gosto de música."', options: ["J'aime la musique.", "J'aime musique.", "J'aime de la musique.", "J'aime une musique."], answer: 0 },
      { type: 'multiple_choice', prompt: '___ hôpital est grand.', options: ["L'", 'Le', 'La', 'Les'], answer: 0, explanationPt: 'h mudo: elisão.' },
      { type: 'multiple_choice', prompt: '"Tenho irmãos."', options: ["J'ai des frères.", "J'ai frères.", "J'ai les frères.", "J'ai de frères."], answer: 0 }
    ],
    related: ['partitive', 'gender-nouns']
  });

  G({
    id: 'partitive', category: 'artigos', level: 'A2', title: 'Artigos partitivos (du, de la, de l\', des)', titleFr: 'Les articles partitifs',
    keywords: ['partitivo', 'du de la', "de l'", 'quantidade indefinida', 'comida', 'du pain'],
    summaryPt: 'Para uma quantidade não contada de algo (comida, bebida, coisas abstratas): du, de la, de l\'.',
    explanationPt: 'Quando você fala de **uma parte** de algo que não se conta — pão, água, paciência —, o francês usa o **partitivo**:\n\n' +
      '- *du* (de + le): *du pain, du fromage*\n' +
      '- *de la*: *de la confiture, de la patience*\n' +
      '- *de l\'*: *de l\'eau, de l\'argent*\n\n' +
      'Na **negação**, todos viram *de / d\'*: *Je ne bois pas de café.*\n\n' +
      'Com **quantidades** (beaucoup, un peu, un kilo, une bouteille), usa-se só *de*: *beaucoup de sucre, un litre d\'eau*.',
    tables: [{ caption: 'Formas', head: ['', 'afirmativa', 'negativa', 'quantidade'], rows: [
      ['masculino', 'du pain', 'pas de pain', 'beaucoup de pain'], ['feminino', 'de la soupe', 'pas de soupe', 'un bol de soupe'],
      ['vogal', "de l'eau", "pas d'eau", "un verre d'eau"]
    ] }],
    examples: [
      { fr: 'Je mange du pain le matin.', pt: 'Como pão de manhã.' },
      { fr: "Tu veux de l'eau ?", pt: 'Você quer água?' },
      { fr: "Il n'y a pas de lait.", pt: 'Não tem leite.' }
    ],
    ptComparison: {
      same: 'A ideia de "um pouco de" existe em português, mas fica implícita.',
      different: 'Em português dizemos só "como pão"; em francês o partitivo é obrigatório: *je mange du pain*.',
      commonErrors: [
        { wrong: 'Je mange pain.', right: 'Je mange du pain.', why: 'Sem artigo não pode.' },
        { wrong: "Je ne bois pas du café.", right: 'Je ne bois pas de café.', why: 'Na negação, partitivo vira "de".' },
        { wrong: 'beaucoup du sucre', right: 'beaucoup de sucre', why: 'Depois de expressões de quantidade, só "de".' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Je bois ___ eau.', options: ["de l'", 'du', 'de la', 'des'], answer: 0 },
      { type: 'multiple_choice', prompt: "Il n'y a pas ___ fromage.", options: ['de', 'du', 'le', 'un'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Un kilo ___ tomates.', options: ['de', 'des', 'du', 'les'], answer: 0 }
    ],
    related: ['articles', 'pronoun-en', 'negation']
  });

  G({
    id: 'possessives', category: 'artigos', level: 'A1', title: 'Possessivos (mon, ma, mes...)', titleFr: 'Les adjectifs possessifs',
    keywords: ['possessivo', 'mon ma mes', 'son sa ses', 'notre votre leur', 'meu minha', 'seu sua'],
    summaryPt: 'O possessivo concorda com a COISA possuída, não com o dono: sa voiture = o carro dele OU dela.',
    explanationPt: 'O possessivo francês concorda em gênero e número com **o objeto**, e não com quem possui.\n\n' +
      '*son père* = o pai dele / o pai dela. *sa mère* = a mãe dele / a mãe dela.\n\n' +
      'Antes de palavra feminina que começa com vogal, usa-se **mon, ton, son**: *mon amie, son école* (para evitar "ma amie").',
    tables: [{ caption: 'Formas', head: ['dono', 'masc.', 'fem.', 'plural'], rows: [
      ['je', 'mon', 'ma', 'mes'], ['tu', 'ton', 'ta', 'tes'], ['il / elle', 'son', 'sa', 'ses'],
      ['nous', 'notre', 'notre', 'nos'], ['vous', 'votre', 'votre', 'vos'], ['ils / elles', 'leur', 'leur', 'leurs']
    ] }],
    examples: [
      { fr: 'Léa et son frère.', pt: 'Léa e o irmão dela.' },
      { fr: 'Lucas et sa colocataire.', pt: 'Lucas e a colega de apartamento dele.' },
      { fr: "C'est mon amie Chloé.", pt: 'É minha amiga Chloé.' }
    ],
    ptComparison: {
      same: 'Assim como "seu/sua", o possessivo concorda com o objeto.',
      different: 'Em francês não existe "dele/dela" separado: *son, sa, ses* servem para os dois. O contexto decide.',
      commonErrors: [
        { wrong: 'ma amie', right: 'mon amie', why: 'Antes de vogal, mesmo no feminino, usa-se mon/ton/son.' },
        { wrong: 'Léa et sa frère', right: 'Léa et son frère', why: '"frère" é masculino; não importa que Léa seja mulher.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"O carro dela" (la voiture)', options: ['sa voiture', 'son voiture', 'ses voiture', 'leur voitures'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Minha escola" (l\'école, fem.)', options: ['mon école', 'ma école', "m'école", 'mes école'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Os filhos deles"', options: ['leurs enfants', 'leur enfants', 'ses enfants', 'sons enfants'], answer: 0 }
    ],
    related: ['articles', 'demonstratives']
  });

  G({
    id: 'demonstratives', category: 'artigos', level: 'A1', title: 'Demonstrativos (ce, cet, cette, ces)', titleFr: 'Les adjectifs démonstratifs',
    keywords: ['demonstrativo', 'ce cet cette ces', 'este esse aquele', '-ci -là'],
    summaryPt: 'ce (masc.), cet (masc. antes de vogal), cette (fem.), ces (plural) = este/esse/aquele.',
    explanationPt: 'O francês tem um só demonstrativo para "este, esse, aquele":\n\n' +
      '- *ce livre*, *cet homme* (masc. antes de vogal/h mudo), *cette ville*, *ces gens*.\n\n' +
      'Para distinguir perto/longe, acrescente **-ci** (aqui) ou **-là** (lá): *ce livre-ci, ce livre-là*.\n\n' +
      'Com tempo: *ce matin* (hoje de manhã), *ce soir* (hoje à noite), *cette semaine* (esta semana).',
    tables: [{ caption: 'Formas', head: ['masc.', 'masc. + vogal', 'fem.', 'plural'], rows: [['ce', 'cet', 'cette', 'ces']] }],
    examples: [
      { fr: 'Ce week-end, je reste à Lyon.', pt: 'Neste fim de semana, fico em Lyon.' },
      { fr: 'Cet appartement est petit.', pt: 'Este apartamento é pequeno.' },
      { fr: 'Ces chaussures-là sont chères.', pt: 'Aqueles sapatos ali são caros.' }
    ],
    ptComparison: {
      same: 'Concorda em gênero e número, como em português.',
      different: 'Não há diferença entre este/esse/aquele; usa-se -ci/-là quando é preciso.',
      commonErrors: [{ wrong: 'ce homme', right: 'cet homme', why: 'Masculino antes de vogal ou h mudo: cet.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '___ hôtel est très cher.', options: ['Cet', 'Ce', 'Cette', 'Ces'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Hoje à noite"', options: ['ce soir', 'cette soir', 'le soir', 'ces soirs'], answer: 0 },
      { type: 'multiple_choice', prompt: '___ fleurs sont belles.', options: ['Ces', 'Cettes', 'Ce', 'Cet'], answer: 0 }
    ],
    related: ['possessives']
  });
})();
