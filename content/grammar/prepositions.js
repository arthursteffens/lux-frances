/* Gramática — preposições */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'prepositions-places', category: 'preposicoes', level: 'A2', title: 'À ou en? Cidades e países', titleFr: 'Les prépositions avec les villes et les pays', faq: true,
    keywords: ['à', 'en', 'au', 'aux', 'país', 'cidade', 'en France', 'au Brésil', 'preposição de lugar'],
    summaryPt: 'Cidade: à (à Lyon). País feminino ou começando com vogal: en (en France). País masculino: au (au Brésil). Plural: aux (aux États-Unis).',
    explanationPt: 'Para dizer **em / para** um lugar:\n\n' +
      '- **cidades**: *à* → *à Lyon, à Rio*\n' +
      '- **países femininos** (geralmente terminam em -e) ou que começam com vogal: *en* → *en France, en Italie, en Iran*\n' +
      '- **países masculinos**: *au* → *au Brésil, au Portugal, au Canada, au Japon*\n' +
      '- **países no plural**: *aux* → *aux États-Unis, aux Pays-Bas*\n\n' +
      'Para dizer **de onde** você vem: *de Lyon, de France, du Brésil, des États-Unis*.',
    tables: [{ caption: 'Resumo', head: ['', 'em / para', 'de'], rows: [
      ['cidade', 'à Paris', 'de Paris'], ['país fem.', 'en France', 'de France'], ['país masc.', 'au Brésil', 'du Brésil'], ['país plural', 'aux États-Unis', 'des États-Unis']
    ] }],
    examples: [{ fr: "J'habite à Lyon, en France.", pt: 'Moro em Lyon, na França.' }, { fr: 'Je viens du Brésil.', pt: 'Venho do Brasil.' }],
    ptComparison: {
      same: '"Em" e "de" com países também variam em português: no Brasil, na França.',
      different: 'A escolha depende do gênero do país em francês (le Brésil, la France, le Mexique (!), la Belgique).',
      commonErrors: [{ wrong: 'en Brésil', right: 'au Brésil', why: '"Brésil" é masculino.' }, { wrong: 'à France', right: 'en France', why: 'País feminino: en.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Je vais ___ Portugal.', options: ['au', 'en', 'à', 'aux'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Elle habite ___ Belgique.', options: ['en', 'au', 'à la', 'à'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Nous sommes ___ Marseille.', options: ['à', 'en', 'au', 'dans'], answer: 0 }
    ],
    related: ['pronoun-y']
  });

  G({
    id: 'depuis-pendant', category: 'preposicoes', level: 'A2', title: 'Depuis, il y a ou pendant?', titleFr: 'Depuis, il y a, pendant', faq: true,
    keywords: ['depuis', 'il y a', 'pendant', 'há', 'faz', 'durante', 'tempo'],
    summaryPt: 'depuis = desde/há (ainda continua); il y a = há (atrás, acabou); pendant = durante.',
    explanationPt: '- **depuis** + presente: ação que **começou no passado e continua**. *J\'habite à Lyon depuis deux ans* (moro em Lyon há dois anos — e ainda moro).\n' +
      '- **il y a** + passado: um **momento no passado**. *Je suis arrivé il y a deux ans* (cheguei há dois anos).\n' +
      '- **pendant**: **duração** de algo, sem dizer se continua. *J\'ai travaillé à Paris pendant cinq ans* (trabalhei em Paris durante cinco anos).',
    tables: [{ caption: 'Comparação', head: ['francês', 'português', 'ainda continua?'], rows: [
      ["J'étudie le français depuis un an.", 'Estudo francês há um ano.', 'sim'], ["J'ai commencé il y a un an.", 'Comecei há um ano.', '—'], ["J'ai étudié pendant un an.", 'Estudei durante um ano.', 'não']
    ] }],
    examples: [{ fr: 'Je joue au foot depuis l\'âge de dix ans.', pt: 'Jogo futebol desde os dez anos.' }, { fr: "Il est parti il y a cinq minutes.", pt: 'Ele saiu há cinco minutos.' }],
    ptComparison: {
      same: '"Pendant" = "durante", igual.',
      different: 'O "há" do português corresponde a dois usos em francês: *depuis* (com o verbo no presente) e *il y a* (com o verbo no passado).',
      commonErrors: [{ wrong: "J'habite ici il y a deux ans.", right: "J'habite ici depuis deux ans.", why: 'Ação que continua: depuis + presente.' }, { wrong: "J'habite ici pour deux ans.", right: "J'habite ici depuis deux ans.", why: '"pour" indica uma duração prevista.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"Moro aqui há três anos."', options: ["J'habite ici depuis trois ans.", "J'habite ici il y a trois ans.", "J'habite ici pendant trois ans.", "J'habite ici pour trois ans."], answer: 0 },
      { type: 'multiple_choice', prompt: '"Ela ligou há uma hora."', options: ['Elle a appelé il y a une heure.', 'Elle a appelé depuis une heure.', 'Elle a appelé pendant une heure.'], answer: 0 }
    ],
    related: ['passe-compose', 'present-revisao']
  });
})();
