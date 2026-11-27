/* Gramática — substantivos e adjetivos */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'gender-nouns', category: 'substantivos-adjetivos', level: 'A1', title: 'Gênero dos substantivos', titleFr: 'Le genre des noms',
    keywords: ['gênero', 'masculino', 'feminino', 'le ou la', 'la mer', 'terminações'],
    summaryPt: 'Todo substantivo é masculino ou feminino, e muitas vezes o gênero é diferente do português. Aprenda sempre com o artigo.',
    explanationPt: 'Algumas **terminações** ajudam a adivinhar o gênero:\n\n' +
      'Geralmente **masculinas**:\n- ***-age*** (le voyage, le fromage)\n- ***-ment*** (le moment)\n- ***-eau*** (le bureau)\n- ***-isme*** (le tourisme)\n' +
      '- Geralmente **femininas**: *-tion/-sion* (la nation), *-té* (la liberté), *-ette*, *-ure* (la voiture), *-ence/-ance*.\n\n' +
      'Mas há exceções: *la plage, l\'eau (f), la page, le lycée*. A regra de ouro: **aprenda cada palavra com o artigo**.',
    tables: [{ caption: 'Gênero diferente do português', head: ['francês', 'português'], rows: [
      ['le voyage', 'a viagem'], ['le message', 'a mensagem'], ['le garage', 'a garagem'], ['le paysage', 'a paisagem'], ['la mer', 'o mar'],
      ['la dent', 'o dente'], ["l'arbre (m)", 'a árvore'], ['le nuage', 'a nuvem'], ['la fin', 'o fim'], ["l'âge (m)", 'a idade']
    ] }],
    examples: [
      { fr: 'Le voyage est long.', pt: 'A viagem é longa.' },
      { fr: 'La mer est belle.', pt: 'O mar está bonito.' },
      { fr: 'Un message important.', pt: 'Uma mensagem importante.' }
    ],
    ptComparison: {
      same: 'A maioria das palavras parecidas tem o mesmo gênero (la table, le livre, la maison).',
      different: 'Palavras em -age são masculinas em francês e femininas em português: le voyage, le garage, le message, le paysage.',
      commonErrors: [
        { wrong: 'la voyage', right: 'le voyage', why: '-age é masculino.' },
        { wrong: 'le mer', right: 'la mer', why: '"mer" é feminino em francês.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '___ fromage', options: ['le', 'la'], answer: 0 },
      { type: 'multiple_choice', prompt: '___ télévision', options: ['la', 'le'], answer: 0 },
      { type: 'multiple_choice', prompt: '___ message', options: ['le', 'la'], answer: 0 }
    ],
    related: ['articles', 'adjectives']
  });

  G({
    id: 'plural', category: 'substantivos-adjetivos', level: 'A1', title: 'Plural dos substantivos', titleFr: 'Le pluriel des noms',
    keywords: ['plural', '-s', '-x', '-aux', 'chevaux', 'gâteaux'],
    summaryPt: 'Regra geral: + s (mudo). Palavras em -eau/-eu: + x. Em -al: -aux.',
    explanationPt: '- Regra geral: **+ s**, que **não se pronuncia**: *un livre → des livres*.\n' +
      '- Terminadas em **-s, -x, -z**: não mudam (*un pays → des pays*).\n' +
      '- **-eau, -eu, -au** → + x (*un gâteau → des gâteaux*).\n' +
      '- **-al** → **-aux** (*un journal → des journaux, un cheval → des chevaux*).\n\n' +
      'Como o -s não soa, quem indica o plural na fala é o **artigo**: *le livre* /lə/ × *les livres* /le/.',
    tables: [{ caption: 'Exemplos', head: ['singular', 'plural'], rows: [
      ['un ami', 'des amis'], ['un bus', 'des bus'], ['un bateau', 'des bateaux'], ['un animal', 'des animaux'], ['un œil', 'des yeux (!)']
    ] }],
    examples: [{ fr: 'Les journaux sont sur la table.', pt: 'Os jornais estão na mesa.' }, { fr: 'Des gâteaux au chocolat.', pt: 'Bolos de chocolate.' }],
    ptComparison: {
      same: 'O plural com -s existe nas duas línguas.',
      different: 'Em francês o -s final é mudo: o ouvido precisa prestar atenção ao artigo (le/les, un/des).',
      commonErrors: [{ wrong: 'des animals', right: 'des animaux', why: '-al vira -aux.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'un journal → des ___', options: ['journaux', 'journals', 'journales', 'journal'], answer: 0 },
      { type: 'multiple_choice', prompt: 'un gâteau → des ___', options: ['gâteaux', 'gâteaus', 'gâteau', 'gâtaux'], answer: 0 },
      { type: 'multiple_choice', prompt: 'un pays → des ___', options: ['pays', 'payss', 'paysx', 'payes'], answer: 0 }
    ],
    related: ['gender-nouns', 'adjectives']
  });

  G({
    id: 'adjectives', category: 'substantivos-adjetivos', level: 'A1', title: 'Adjetivos: concordância e posição', titleFr: "L'accord et la place de l'adjectif",
    keywords: ['adjetivo', 'concordância', 'feminino', 'posição', 'beau bel belle', 'BANGS'],
    summaryPt: 'O adjetivo concorda com o substantivo e geralmente vem depois. Alguns curtos e frequentes vêm antes (beau, grand, petit, bon...).',
    explanationPt: '**Feminino:** em geral + e (*grand → grande*). Casos especiais:\n- ***-eux → -euse*** (heureux/heureuse)\n- ***-if → -ive*** (sportif/sportive)\n- ***-er → -ère*** (cher/chère)\n- ***-en → -enne*** (italien/italienne)\n\n' +
      '**Posição:** a maioria vem **depois** do substantivo (*une ville française*). Mas os adjetivos de **B**eleza, **I**dade, **N**úmero, **B**ondade e **T**amanho costumam vir **antes**: *beau, joli, jeune, vieux, nouveau, premier, bon, mauvais, grand, petit*.\n\n' +
      '**Beau, nouveau, vieux** têm forma especial antes de vogal: *un bel appartement, un nouvel ami, un vieil homme*.',
    tables: [{ caption: 'Concordância', head: ['masc. sing.', 'fem. sing.', 'masc. pl.', 'fem. pl.'], rows: [
      ['petit', 'petite', 'petits', 'petites'], ['heureux', 'heureuse', 'heureux', 'heureuses'], ['beau (bel)', 'belle', 'beaux', 'belles'], ['sympa', 'sympa', 'sympas', 'sympas']
    ] }],
    examples: [
      { fr: 'Une petite agence.', pt: 'Uma agência pequena.' },
      { fr: 'Un restaurant brésilien.', pt: 'Um restaurante brasileiro.' },
      { fr: 'Un bel appartement.', pt: 'Um belo apartamento.' }
    ],
    ptComparison: {
      same: 'A concordância em gênero e número funciona como em português.',
      different: 'Nacionalidades e cores vêm sempre depois e com minúscula: *une voiture rouge, un ami français*.',
      commonErrors: [
        { wrong: 'une française ville', right: 'une ville française', why: 'Nacionalidade vem depois.' },
        { wrong: 'un beau appartement', right: 'un bel appartement', why: 'Antes de vogal: bel.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Une fille ___ (heureux)', options: ['heureuse', 'heureuxe', 'heureux', 'heureuse s'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Escolha a ordem certa:', options: ['une grande maison', 'une maison grande', 'une grand maison', 'une maisonne grande'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Un ___ ami (nouveau)', options: ['nouvel', 'nouveau', 'nouvelle', 'nouveaux'], answer: 0 }
    ],
    related: ['gender-nouns', 'plural']
  });

  G({
    id: 'cest-ilest', category: 'substantivos-adjetivos', level: 'A2', title: "C'est ou il est ?", titleFr: "C'est ou il est ?", faq: true,
    keywords: ["c'est", 'il est', 'elle est', 'ce est', 'profissão', 'é'],
    summaryPt: "c'est + determinante (un, le, mon...) ou nome próprio; il/elle est + adjetivo ou profissão sem artigo.",
    explanationPt: '- **C\'est** + artigo/determinante + substantivo: *C\'est un ami. C\'est mon frère. C\'est Lucas.*\n' +
      '- **C\'est** + adjetivo para comentar uma situação: *C\'est génial ! C\'est difficile.*\n' +
      '- **Il / Elle est** + adjetivo sobre a pessoa ou a coisa: *Il est sympa. Elle est grande.*\n' +
      '- **Il / Elle est** + profissão, nacionalidade ou religião **sem artigo**: *Il est graphiste. Elle est française.*\n\n' +
      'Com artigo, volta o *c\'est*: *C\'est un graphiste brésilien.*',
    tables: [{ caption: 'Resumo', head: ["c'est / ce sont", 'il est / elle est'], rows: [
      ["C'est un médecin.", 'Il est médecin.'], ["C'est une Française.", 'Elle est française.'], ["C'est beau ! (situação)", 'Elle est belle. (a pessoa)'], ['Ce sont mes amis.', 'Ils sont sympas.']
    ] }],
    examples: [{ fr: "C'est ma cousine Chloé.", pt: 'É minha prima Chloé.' }, { fr: 'Elle est infirmière.', pt: 'Ela é enfermeira.' }],
    ptComparison: {
      same: 'Ambas as formas se traduzem por "é".',
      different: 'O português não faz essa distinção; em francês ela depende do que vem depois.',
      commonErrors: [
        { wrong: 'Il est un graphiste.', right: "Il est graphiste. / C'est un graphiste.", why: 'Il est + profissão sem artigo.' },
        { wrong: 'Elle est ma sœur.', right: "C'est ma sœur.", why: 'Com determinante (ma), usa-se c\'est.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '___ mon frère.', options: ["C'est", 'Il est'], answer: 0 },
      { type: 'multiple_choice', prompt: '___ professeur de maths.', options: ['Elle est', "C'est"], answer: 0 },
      { type: 'multiple_choice', prompt: 'Le film ? ___ génial !', options: ["C'est", 'Il est un'], answer: 0 }
    ],
    related: ['articles', 'present-revisao']
  });
})();
