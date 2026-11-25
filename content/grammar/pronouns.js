/* Gramática — pronomes */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'subject-pronouns', category: 'pronomes', level: 'A1', title: 'Pronomes sujeito e o "on"', titleFr: 'Les pronoms sujets',
    keywords: ['pronome sujeito', 'je tu il', 'on', 'a gente', 'tu vous', 'nous'],
    summaryPt: 'Em francês o pronome sujeito é obrigatório. "On" = a gente (3ª pessoa do singular).',
    explanationPt: 'Diferente do português, o francês **não omite o sujeito**: "falo" = *je parle*.\n\n' +
      '- *je, tu, il, elle, on, nous, vous, ils, elles*\n' +
      '- **on** = "a gente" no dia a dia (e "se" impessoal: *on dit que...* = dizem que).\n' +
      '- **vous** = vocês **e** também o senhor/a senhora (tratamento formal).\n' +
      '- **ils** = eles (ou grupo misto); **elles** = só mulheres.',
    tables: [{ caption: 'Pronomes', head: ['singular', 'plural'], rows: [['je', 'nous / on'], ['tu', 'vous'], ['il / elle / on', 'ils / elles']] }],
    examples: [{ fr: 'On va au cinéma ?', pt: 'A gente vai ao cinema?' }, { fr: 'Vous êtes Madame Bernard ?', pt: 'A senhora é a Sra. Bernard?' }],
    ptComparison: {
      same: '"On" funciona exatamente como "a gente": verbo no singular.',
      different: 'O sujeito é obrigatório. E não existe "você" × "tu" regional: tu = informal, vous = formal ou plural.',
      commonErrors: [{ wrong: 'Parle français.', right: 'Je parle français.', why: 'Sujeito obrigatório.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"A gente come às oito."', options: ['On mange à huit heures.', 'On mangeons à huit heures.', 'Mange à huit heures.', 'Nous mange à huit heures.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Para falar com um desconhecido mais velho, use:', options: ['vous', 'tu'], answer: 0 }
    ],
    related: ['tonic-pronouns', 'tu-vous']
  });

  G({
    id: 'tonic-pronouns', category: 'pronomes', level: 'A1', title: 'Pronomes tônicos (moi, toi, lui...)', titleFr: 'Les pronoms toniques',
    keywords: ['pronome tônico', 'moi toi', 'lui elle', 'eux', 'avec moi', 'chez moi', 'et toi'],
    summaryPt: 'moi, toi, lui, elle, nous, vous, eux, elles: depois de preposição, para dar ênfase e em respostas curtas.',
    explanationPt: 'Use os pronomes tônicos:\n\n' +
      '- **depois de preposição**: *avec moi, chez toi, pour lui, sans eux*;\n' +
      '- **para dar ênfase**: *Moi, je suis brésilien.*;\n' +
      '- **em respostas curtas**: *— Qui veut du café ? — Moi !*; *Et toi ?*;\n' +
      '- **depois de c\'est**: *C\'est lui.*',
    tables: [{ caption: 'Formas', head: ['sujeito', 'tônico'], rows: [['je', 'moi'], ['tu', 'toi'], ['il / elle', 'lui / elle'], ['nous', 'nous'], ['vous', 'vous'], ['ils / elles', 'eux / elles']] }],
    examples: [{ fr: 'Tu viens avec nous ?', pt: 'Você vem com a gente?' }, { fr: 'Je suis graphiste. Et toi ?', pt: 'Sou designer. E você?' }],
    ptComparison: {
      same: 'Equivale a "comigo, contigo, com ele" e ao "eu" enfático.',
      different: 'Não se diz *avec je*: depois de preposição, sempre o tônico.',
      commonErrors: [{ wrong: 'avec je', right: 'avec moi', why: 'Depois de preposição: tônico.' }, { wrong: 'Je, je suis...', right: 'Moi, je suis...', why: 'Ênfase com moi.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Tu viens chez ___ ce soir ?', options: ['moi', 'je', 'me', 'mon'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Isso é para eles."', options: ["C'est pour eux.", "C'est pour ils.", "C'est pour leur.", "C'est pour les."], answer: 0 }
    ],
    related: ['subject-pronouns', 'cod-coi']
  });

  G({
    id: 'cod-coi', category: 'pronomes', level: 'A2', title: 'Pronomes COD e COI (le, la, lui, leur...)', titleFr: 'Les pronoms COD et COI',
    keywords: ['complemento', 'objeto direto', 'objeto indireto', 'le la les', 'lui leur', 'me te', 'o a lhe'],
    summaryPt: 'COD (le, la, les) substitui o objeto direto; COI (lui, leur) substitui "à + pessoa". Ficam antes do verbo.',
    explanationPt: '**COD** (objeto direto, sem preposição): *Je regarde le film → Je le regarde.*\n\n' +
      '**COI** (objeto indireto, com "à + pessoa"): *Je parle à Léa → Je lui parle.*\n\n' +
      'O pronome fica **antes do verbo** conjugado (ou antes do infinitivo): *Je vais le regarder.*\n\n' +
      'No passé composé, ele fica antes do auxiliar: *Je l\'ai vu.*',
    tables: [{ caption: 'Formas', head: ['', 'COD', 'COI'], rows: [
      ['je', 'me (m\')', 'me (m\')'], ['tu', 'te (t\')', 'te (t\')'], ['il / elle', 'le / la (l\')', 'lui'], ['nous', 'nous', 'nous'], ['vous', 'vous', 'vous'], ['ils / elles', 'les', 'leur']
    ] }],
    examples: [
      { fr: 'Tu connais Hugo ? — Oui, je le connais.', pt: 'Você conhece o Hugo? — Sim, conheço (ele).' },
      { fr: 'Je téléphone à ma mère. → Je lui téléphone.', pt: 'Ligo para minha mãe. → Ligo para ela.' }
    ],
    ptComparison: {
      same: 'Parecido com o "o, a, lhe" do português formal.',
      different: 'Em português falado dizemos "vi ele"; em francês o pronome vem sempre antes: *je l\'ai vu*. E *lui* serve para ele E ela.',
      commonErrors: [{ wrong: 'Je regarde le.', right: 'Je le regarde.', why: 'O pronome vem antes do verbo.' }, { wrong: 'Je la parle.', right: 'Je lui parle.', why: 'Parler à → COI.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Tu aimes cette chanson ? — Oui, je ___ aime.', options: ["l'", 'lui', 'la', 'le'], answer: 0 },
      { type: 'multiple_choice', prompt: "J'écris à mes parents. → Je ___ écris.", options: ['leur', 'les', 'lui', 'leurs'], answer: 0 }
    ],
    related: ['pronoun-y', 'pronoun-en', 'tonic-pronouns']
  });

  G({
    id: 'pronoun-y', category: 'pronomes', level: 'A2', title: 'O pronome y', titleFr: 'Le pronom y', faq: true,
    keywords: ['y', 'pronome y', 'lá', 'on y va', 'il y a', 'à + coisa', 'lugar'],
    summaryPt: 'y substitui um lugar (à, en, chez, dans + lugar) ou "à + coisa". On y va = vamos (lá)!',
    explanationPt: '**y** substitui:\n\n' +
      '- um **lugar** introduzido por *à, en, dans, chez, sur*: *Tu vas à Paris ? — Oui, j\'y vais.*\n' +
      '- **à + coisa/ideia**: *Tu penses à ton examen ? — Oui, j\'y pense.*\n\n' +
      'Para **pessoas** com "à", use *lui/leur*, não *y*.\n\n' +
      'Expressões fixas: *Il y a* (há), *On y va !* (vamos!), *Ça y est !* (pronto!, consegui!).',
    tables: [{ caption: 'Exemplos', head: ['frase', 'com y'], rows: [
      ['Je vais au cinéma.', "J'y vais."], ['Il habite à Lyon.', 'Il y habite.'], ['Je pense à mes vacances.', "J'y pense."]
    ] }],
    examples: [{ fr: 'On y va ?', pt: 'Vamos?' }, { fr: "J'y vais à vélo.", pt: 'Vou (lá) de bicicleta.' }],
    ptComparison: {
      same: 'Equivale ao "lá" ou "nisso", que às vezes omitimos.',
      different: 'Em francês o pronome é quase obrigatório: *Tu vas à la plage ? — Oui, j\'y vais* (e não só *je vais*).',
      commonErrors: [{ wrong: 'Je vais.', right: "J'y vais.", why: '"Aller" pede um destino.' }, { wrong: "J'y pense (à Léa).", right: 'Je pense à elle.', why: 'Para pessoas não se usa y.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Tu vas à la piscine ? — Oui, j\'___ vais.', options: ['y', 'en', 'le', 'lui'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Vamos!" (informal)', options: ['On y va !', 'On va !', 'On en va !', 'Allons-y-en !'], answer: 0 }
    ],
    related: ['pronoun-en', 'cod-coi', 'prepositions-places']
  });

  G({
    id: 'pronoun-en', category: 'pronomes', level: 'A2', title: 'O pronome en', titleFr: 'Le pronom en', faq: true,
    keywords: ['en', 'pronome en', 'quantidade', 'de + substantivo', "j'en veux", 'partitivo'],
    summaryPt: 'en substitui "de + algo" e quantidades: Tu veux du café ? — Oui, j\'en veux.',
    explanationPt: '**en** substitui:\n\n' +
      '- um **partitivo** (du, de la, des): *Tu veux du pain ? — Oui, j\'en veux.*\n' +
      '- uma **quantidade** (a quantidade fica no fim): *Tu as des frères ? — Oui, j\'en ai deux.*\n' +
      '- **de + coisa**: *Tu parles de ton voyage ? — Oui, j\'en parle.*\n' +
      '- a **origem**: *Tu viens de la gare ? — Oui, j\'en viens.*\n\n' +
      'Na negação: *Je n\'en veux pas.*',
    tables: [{ caption: 'Exemplos', head: ['pergunta', 'resposta'], rows: [
      ['Tu bois du café ?', "Oui, j'en bois."], ['Tu as combien de cousins ?', "J'en ai trois."], ['Il y a du lait ?', "Non, il n'y en a pas."]
    ] }],
    examples: [{ fr: "J'en ai deux.", pt: 'Tenho dois.' }, { fr: "Il n'y en a plus.", pt: 'Não tem mais.' }],
    ptComparison: {
      same: 'Não há equivalente direto; o português simplesmente omite: "Tem leite? — Tem."',
      different: 'Em francês o "en" é obrigatório: *Oui, il y en a* (e não *oui, il y a*).',
      commonErrors: [{ wrong: "J'ai deux.", right: "J'en ai deux.", why: 'A quantidade precisa do en.' }, { wrong: 'Je le veux (du pain).', right: "J'en veux.", why: 'Partitivo → en.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Tu as des enfants ? — Oui, j\'___ ai trois.', options: ['en', 'y', 'les', 'leur'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Il reste du gâteau ? — Non, il n\'y ___ a plus.', options: ['en', 'y', 'le', 'a'], answer: 0 }
    ],
    related: ['partitive', 'pronoun-y', 'cod-coi']
  });
})();
