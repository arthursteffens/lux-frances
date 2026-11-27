/* Gramática — tópicos extras do A1: c'est / voici / il y a, contrações (au, du), o "il" impessoal */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'il-y-a', category: 'artigos', level: 'A1', title: "Apresentar e descrever: c'est, voici, il y a", titleFr: "C'est, voici, il y a",
    keywords: ['il y a', 'tem', 'há', "c'est", 'é', 'voici', 'voilà', 'aqui está', 'ce sont', 'existe'],
    summaryPt: "C'est = é (apresenta algo ou alguém). Voici = aqui está. Il y a = tem, há (existe).",
    explanationPt: 'Três expressões que você usa o tempo todo para mostrar e descrever coisas:\n\n' +
      '- ***C\'est*** = "é". Apresenta ou identifica: *C\'est Léa.* *C\'est la cuisine.* No plural: *ce sont* (*Ce sont mes amis*), mas na fala muita gente diz *c\'est* para tudo.\n' +
      '- ***Voici*** = "aqui está", "este é", apontando: *Voici ta chambre.* *Voilà* é quase igual e é muito mais usado na fala.\n' +
      '- ***Il y a*** = "tem" ou "há" (existe). Não muda no plural: *Il y a une table.* *Il y a deux chambres.*\n\n' +
      'Na negação, **il y a un / une / des** vira **il n\'y a pas de**: *Il n\'y a pas de télé.*\n\n' +
      'Para perguntar o que é: ***Qu\'est-ce que c\'est ?*** (o que é isso?). Para perguntar quem é: ***Qui est-ce ?*** (quem é?).',
    tables: [{ caption: 'Resumo', head: ['francês', 'português', 'exemplo'], rows: [
      ["c'est", 'é', "C'est mon sac."], ['ce sont', 'são', 'Ce sont mes clés.'], ['voici / voilà', 'aqui está', 'Voici la salle de bains.'],
      ['il y a', 'tem, há', 'Il y a un lit.'], ["il n'y a pas de", 'não tem', "Il n'y a pas de lit."]
    ] }],
    examples: [
      { fr: "Qu'est-ce que c'est ? C'est un cadeau.", pt: 'O que é isso? É um presente.' },
      { fr: 'Dans la cuisine, il y a une grande table.', pt: 'Na cozinha tem uma mesa grande.' },
      { fr: "Il n'y a pas de télé.", pt: 'Não tem televisão.' },
      { fr: 'Voilà ta clé !', pt: 'Aqui está a sua chave!' }
    ],
    ptComparison: {
      same: 'Como no Brasil, a mesma expressão serve para singular e plural: "tem uma cama" e "tem duas camas" = *il y a un lit*, *il y a deux lits*.',
      different: 'O francês não usa o verbo "ter" (*avoir*) sozinho para "existe": "tem um café aqui perto" é *il y a un café près d\'ici*, nunca *a un café*.',
      commonErrors: [
        { wrong: 'Il a une table dans la cuisine.', right: 'Il y a une table dans la cuisine.', why: 'Sem o y, "il a" significa "ele tem".' },
        { wrong: "Il n'y a pas une télé.", right: "Il n'y a pas de télé.", why: 'Na negação, un/une/des viram de.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"Tem dois quartos."', options: ['Il y a deux chambres.', 'Il a deux chambres.', 'Ils y ont deux chambres.', "C'est deux chambres."], answer: 0 },
      { type: 'multiple_choice', prompt: '"O que é isso?"', options: ["Qu'est-ce que c'est ?", 'Qui est-ce ?', "Quoi c'est ?", 'Où est-ce ?'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Não tem forno."', options: ["Il n'y a pas de four.", "Il n'y a pas un four.", "Il n'a pas de four.", "C'est pas four."], answer: 0 }
    ],
    related: ['cest-ilest', 'articles', 'negation']
  });

  G({
    id: 'contractions', category: 'preposicoes', level: 'A1', title: 'À e de com artigo: au, aux, du, des', titleFr: 'Les articles contractés',
    keywords: ['au', 'aux', 'du', 'des', 'à la', 'contração', 'ao', 'no', 'do', 'jouer au', 'faire du', 'aller au'],
    summaryPt: 'à + le = au, à + les = aux; de + le = du, de + les = des. Com la e l\' nada muda.',
    explanationPt: 'Em português, "a + o" vira "ao" e "de + o" vira "do". O francês faz o mesmo com **à** (a, para, em) e **de** (de):\n\n' +
      '- **à + le** = ***au***: *Je vais au cinéma.*\n' +
      '- **à + les** = ***aux***: *Je parle aux enfants.*\n' +
      '- **de + le** = ***du***: *Je viens du travail.*\n' +
      '- **de + les** = ***des***: *le prix des fruits*\n\n' +
      'Com **la** e **l\'** não há contração: *à la gare*, *à l\'hôpital*, *de la gare*, *de l\'école*.\n\n' +
      'Expressões muito usadas:\n- ***jouer au foot*** (jogar futebol)\n- ***faire du sport*** (fazer esporte)\n- ***aller au marché*** (ir à feira)',
    tables: [{ caption: 'As contrações', head: ['', 'le (masc.)', 'la (fem.)', "l' (vogal)", 'les (plural)'], rows: [
      ['à', 'au', 'à la', "à l'", 'aux'], ['de', 'du', 'de la', "de l'", 'des']
    ] }],
    examples: [
      { fr: 'Je vais au marché et à la boulangerie.', pt: 'Vou à feira e à padaria.' },
      { fr: 'Lucas joue au foot le samedi.', pt: 'Lucas joga futebol aos sábados.' },
      { fr: 'Léa fait du vélo.', pt: 'Léa anda de bicicleta.' },
      { fr: "Elle travaille à l'hôpital.", pt: 'Ela trabalha no hospital.' }
    ],
    ptComparison: {
      same: 'A ideia é a mesma do português: preposição + artigo viram uma palavra só (ao, do, no).',
      different: 'Em português, "em" também se junta ao artigo (no, na). Em francês, "em + lugar" quase sempre é **à**: "no cinema" = *au cinéma*, "na estação" = *à la gare*.',
      commonErrors: [
        { wrong: 'Je vais à le cinéma.', right: 'Je vais au cinéma.', why: 'à + le sempre vira au.' },
        { wrong: 'Je viens de le travail.', right: 'Je viens du travail.', why: 'de + le sempre vira du.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Je vais ___ supermarché.', options: ['au', 'à le', 'à la', 'du'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Elle est ___ pharmacie.', options: ['à la', 'au', 'aux', 'à le'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Il joue ___ tennis.', options: ['au', 'du', 'de la', 'à le'], answer: 0 }
    ],
    related: ['articles', 'prepositions-places', 'partitive']
  });

  G({
    id: 'il-impersonnel', category: 'pronomes', level: 'A1', title: 'O "il" que não é ninguém: il est, il fait, il pleut', titleFr: 'Le il impersonnel',
    keywords: ['il est', 'il fait', 'il pleut', 'il neige', 'il faut', 'horas', 'tempo', 'clima', 'impessoal', 'sujeito'],
    summaryPt: 'Em francês toda frase precisa de sujeito. Para horas e clima, o sujeito é um "il" que não se refere a ninguém.',
    explanationPt: 'Em português dizemos "são oito horas" e "está calor" sem sujeito. Em francês, **todo verbo precisa de sujeito**, então entra um ***il*** que não significa "ele":\n\n' +
      '- **Horas:** *Il est huit heures.* (são oito horas)\n' +
      '- **Clima com faire:** *Il fait beau, il fait chaud, il fait froid.* (está bonito, quente, frio)\n' +
      '- **Chuva e neve:** *Il pleut.* (chove) *Il neige.* (neva)\n' +
      '- **Existir:** *Il y a un café.* (tem um café)\n' +
      '- **Necessidade:** *Il faut partir.* (é preciso ir embora)\n\n' +
      'Perguntas: ***Quelle heure est-il ?*** (que horas são?) e ***Quel temps fait-il ?*** (como está o tempo?).',
    tables: [{ caption: 'O il impessoal', head: ['francês', 'português'], rows: [
      ['Il est dix heures.', 'São dez horas.'], ['Il fait beau.', 'O tempo está bom.'], ['Il fait froid.', 'Está frio.'],
      ['Il pleut.', 'Está chovendo.'], ['Il y a du vent.', 'Está ventando.'], ['Il faut un ticket.', 'É preciso um bilhete.']
    ] }],
    examples: [
      { fr: 'Quelle heure est-il ? Il est midi.', pt: 'Que horas são? É meio-dia.' },
      { fr: "Aujourd'hui, il fait chaud.", pt: 'Hoje está calor.' },
      { fr: 'Il pleut à Lyon.', pt: 'Está chovendo em Lyon.' }
    ],
    ptComparison: {
      same: 'O sentido é o mesmo do português: ninguém "faz" a chuva ou as horas.',
      different: 'O português não tem sujeito nessas frases; o francês exige o *il*. E o clima usa *faire* (fazer): "está calor" = *il fait chaud*, nunca *il est chaud*.',
      commonErrors: [
        { wrong: 'Est huit heures.', right: 'Il est huit heures.', why: 'Sem sujeito a frase fica errada.' },
        { wrong: 'Il est chaud aujourd\'hui.', right: 'Il fait chaud aujourd\'hui.', why: 'Clima usa faire.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"Está frio."', options: ['Il fait froid.', 'Il est froid.', 'Fait froid.', 'Il a froid.'], answer: 0 },
      { type: 'multiple_choice', prompt: '"São três horas."', options: ['Il est trois heures.', 'Sont trois heures.', 'Il a trois heures.', 'Ils sont trois heures.'], answer: 0 }
    ],
    related: ['il-y-a', 'subject-pronouns', 'questions']
  });
})();
