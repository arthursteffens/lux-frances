LUX.registerLesson({
  id: 'a2-u03-l03', level: 'A2', unit: 3, order: 3,
  title: 'Le jour où on a trouvé Caramel', titlePt: 'O dia em que encontramos o Caramel',
  names: ['Léa', 'Caramel', 'Thomas', 'Annecy', 'Michel', 'Hugo', 'Lucas', 'Alpes', 'Chamonix'],
  objectives: [
    'Contar uma história ou um acontecimento marcante do passado.',
    'Combinar o imparfait (cenário, descrição) e o passé composé (ações, acontecimentos).',
    'Usar conectores de narrativa: soudain, tout à coup, alors, finalement.'
  ],
  vocabulary: [
    { fr: 'soudain', pt: 'de repente', pos: 'adv', ex: 'Soudain, le téléphone a sonné.' },
    { fr: 'tout à coup', pt: 'de repente', pos: 'expr', ex: 'Tout à coup, il a commencé à pleuvoir.' },
    { fr: 'alors', pt: 'então', pos: 'adv', ex: "Il faisait froid, alors j'ai pris un pull." },
    { fr: 'finalement', pt: 'no fim, finalmente', pos: 'adv', ex: 'Finalement, nous avons gardé le chien.' },
    { fr: 'le chiot', pt: 'o filhote de cachorro', g: 'm', ex: 'Le chiot avait faim.' },
    { fr: 'trembler', pt: 'tremer', pos: 'v', ex: 'Le petit chien tremblait de froid.' },
    { fr: 'entendre', pt: 'ouvir', pos: 'v', ex: "J'ai entendu un bruit." },
    { fr: 'décider', pt: 'decidir', pos: 'v', ex: 'Nous avons décidé de rentrer.' },
    { fr: 'se casser (le bras)', pt: 'quebrar (o braço)', pos: 'expr', ex: "Il s'est cassé le bras au ski." },
    { fr: 'la piste', pt: 'a pista', g: 'f', ex: 'La piste était dangereuse.' },
    { fr: "l'hôpital", pt: 'o hospital', g: 'm', ex: "On m'a emmené à l'hôpital." },
    { fr: 'avoir peur', pt: 'ter medo', pos: 'expr', ex: "J'avais très peur." }
  ],
  reading: {
    genre: 'post de blog',
    title: 'Le blog de Léa — Une histoire de chien',
    text: "Ce matin, ma mère m'a envoyé une photo de Caramel, notre chien. Il a douze ans maintenant, et je veux vous raconter comment il est arrivé dans notre famille.\n\n" +
      "C'était un soir de novembre. Il faisait froid et il pleuvait beaucoup. J'avais quatorze ans. Mon frère Thomas et moi, nous rentrions du collège à pied, parce que le bus était en grève. Nous étions fatigués et nous avions faim.\n\n" +
      "Soudain, Thomas s'est arrêté. Il a entendu un petit bruit sous une voiture. Nous avons regardé et nous avons vu un [[chiot|filhote de cachorro]] tout mouillé. Il tremblait et il avait l'air très triste. Il n'avait pas de collier.\n\n" +
      "Alors, j'ai pris le chiot dans mon manteau et nous avons couru jusqu'à la boulangerie. Mon père travaillait encore. Quand il a vu le chien, il a dit : « Pas question, on ne garde pas d'animal dans une boulangerie ! » Mais le chiot a mangé un morceau de croissant et il a léché la main de mon père. [[Finalement|no fim]], papa a souri.\n\n" +
      "Nous avons cherché ses propriétaires pendant deux semaines, sans succès. Alors, nous l'avons gardé. Nous l'avons appelé Caramel, à cause de sa couleur. C'était le plus beau cadeau de mon adolescence.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Quel temps faisait-il ce soir-là ?', options: ['Il faisait froid et il pleuvait.', 'Il faisait beau.', 'Il neigeait.', 'Il faisait chaud.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Pourquoi Léa et Thomas rentraient à pied ?', options: ['Parce que le bus était en grève.', 'Parce qu\'ils aimaient marcher.', 'Parce que leur père était malade.', 'Parce qu\'ils cherchaient un chien.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'C\'est Léa qui a entendu le bruit.', answer: 'F', explanationPt: 'Foi o Thomas: "Il a entendu un petit bruit".' },
        { text: 'Le chiot avait un collier.', answer: 'F', explanationPt: '"Il n\'avait pas de collier."' },
        { text: 'Au début, le père ne voulait pas garder le chien.', answer: 'V', explanationPt: '"Pas question, on ne garde pas d\'animal dans une boulangerie !"' },
        { text: 'La mère de Léa adorait les chiens.', answer: 'NM', explanationPt: 'Não se fala da opinião da mãe.' },
        { text: 'Ils ont trouvé les propriétaires du chien.', answer: 'F', explanationPt: 'Procuraram durante duas semanas, "sans succès".' }
      ] },
      { type: 'order_events', prompt: 'Coloque a história em ordem.', items: [
        'Thomas entend un bruit sous une voiture.', 'Léa met le chiot dans son manteau.', 'Ils courent à la boulangerie.', 'Le chiot mange un morceau de croissant.', 'Ils cherchent les propriétaires.', 'Ils appellent le chien Caramel.'
      ] },
      { type: 'multiple_choice', prompt: 'Pourquoi le chien s\'appelle Caramel ?', options: ['À cause de sa couleur.', 'Parce qu\'il aimait les bonbons.', 'C\'était le nom de son ancien propriétaire.', 'Parce que le père de Léa a choisi.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Hugo conta um acidente',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'H', name: 'Hugo', gender: 'm' }],
    script: [
      { speaker: 'U', text: 'Hugo, tu as une cicatrice sur le bras. Qu\'est-ce qui s\'est passé ?' },
      { speaker: 'H', text: "Oh, c'est une vieille histoire. J'avais vingt ans, j'étais dans les Alpes, près de Chamonix." },
      { speaker: 'U', text: 'Tu faisais du ski ?' },
      { speaker: 'H', text: "Oui. Il faisait un temps magnifique, il y avait beaucoup de neige. Je descendais une piste noire, très vite…" },
      { speaker: 'U', text: 'Et tu es tombé ?' },
      { speaker: 'H', text: "Pas tout de suite ! Tout à coup, un enfant a traversé la piste devant moi. J'ai tourné pour l'éviter et je suis tombé contre un arbre." },
      { speaker: 'U', text: 'Aïe ! Tu t\'es cassé le bras ?' },
      { speaker: 'H', text: "Oui, en deux endroits. Un hélicoptère m'a emmené à l'hôpital. J'avais très peur, mais l'enfant n'avait rien." },
      { speaker: 'U', text: "Et tu as refait du ski après ?" },
      { speaker: 'H', text: "Bien sûr ! Mais maintenant, je reste sur les pistes bleues." }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quel âge avait Hugo ?', options: ['Vingt ans.', 'Douze ans.', 'Trente ans.', 'Quatorze ans.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Pourquoi Hugo est tombé ?', options: ['Un enfant a traversé la piste devant lui.', 'Il n\'y avait pas assez de neige.', 'Il était fatigué.', 'Il ne savait pas skier.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il neigeait ce jour-là.', answer: 'F', explanationPt: 'Fazia um tempo magnífico; havia muita neve no chão, mas não nevava.' },
        { text: "L'enfant s'est cassé la jambe.", answer: 'F', explanationPt: '"l\'enfant n\'avait rien".' },
        { text: 'Hugo est allé à l\'hôpital en hélicoptère.', answer: 'V', explanationPt: '"Un hélicoptère m\'a emmené à l\'hôpital."' },
        { text: 'Hugo fait encore du ski.', answer: 'V', explanationPt: 'Ele voltou a esquiar, mas só nas pistas azuis.' }
      ] },
      { type: 'dictation', text: 'Tu faisais du ski ?' },
      { type: 'dictation', text: "J'avais très peur, mais l'enfant n'avait rien." }
    ]
  },
  grammar: {
    topicId: 'pc-vs-imparfait',
    title: 'Imparfait × passé composé',
    explanationPt: 'Numa história, os dois tempos trabalham juntos:\n\n' +
      '- **Imparfait = o cenário** (o "pano de fundo"): tempo, hora, idade, descrição, o que estava acontecendo. → *Il pleuvait. J\'avais quatorze ans. Nous rentrions à pied.*\n' +
      '- **Passé composé = as ações** que fazem a história avançar, os acontecimentos pontuais. → *Thomas s\'est arrêté. Il a entendu un bruit. Nous avons vu un chiot.*\n\n' +
      '**Estrutura clássica:** ação em andamento (imparfait) **interrompida** por um acontecimento (passé composé):\n*Je **descendais** la piste quand un enfant **a traversé**.*\n\n' +
      'Dica: se em português você diria "estava fazendo" ou "fazia", use o imparfait. Se diria "fez", use o passé composé.',
    table: { head: ['imparfait (cenário)', 'passé composé (acontecimento)'], rows: [
      ['Il faisait froid.', 'Thomas s\'est arrêté.'], ['Nous rentrions du collège.', 'Il a entendu un bruit.'],
      ['Le chiot tremblait.', "J'ai pris le chiot."], ['Mon père travaillait.', 'Il a vu le chien.'], ["J'avais peur.", 'Un hélicoptère est arrivé.']
    ] },
    examples: [
      { fr: 'Je dormais quand le téléphone a sonné.', pt: 'Eu estava dormindo quando o telefone tocou.' },
      { fr: "Il pleuvait, alors nous sommes restés à la maison.", pt: 'Estava chovendo, então ficamos em casa.' },
      { fr: "Quand je suis arrivé, elle préparait le dîner.", pt: 'Quando cheguei, ela estava preparando o jantar.' },
      { fr: "C'était un soir de novembre.", pt: 'Era uma noite de novembro.' }
    ],
    ptComparison: 'O português funciona **igual**: "Eu **estava** dormindo quando o telefone **tocou**." → imparfait + passé composé. Confie na sua intuição de falante de português: *imperfeito → imparfait*, *perfeito → passé composé*.\n\n' +
      'O francês não usa muito "estar + gerúndio" no passado: *j\'étais en train de dormir* existe, mas o simples *je dormais* já basta.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Imparfait ou passé composé? Conjugue o verbo.', items: [
      { text: 'Je ___ (regarder) la télé quand Léa est arrivée.', answers: ['regardais'] },
      { text: 'Il ___ (faire) beau, alors nous sommes sortis.', answers: ['faisait'] },
      { text: 'Quand j\'avais dix ans, je ___ (tomber) d\'un arbre.', answers: ['suis tombé', 'suis tombée'] },
      { text: 'Nous dînions quand on ___ (entendre) un bruit.', answers: ['a entendu'] },
      { text: 'Elle ___ (être) fatiguée, alors elle s\'est couchée tôt.', answers: ['était'] },
      { text: 'Soudain, le chien ___ (partir) en courant.', answers: ['est parti'] }
    ] },
    { type: 'multiple_choice', prompt: '"Estava chovendo quando eu saí."', options: ['Il pleuvait quand je suis sorti.', 'Il a plu quand je sortais.', 'Il pleut quand je suis sorti.', 'Il a plu quand je suis sorti.'], answer: 0,
      explanationPt: 'Cenário (chovia) = imparfait; ação pontual (saí) = passé composé.' },
    { type: 'match', prompt: 'Cenário ou acontecimento?', pairs: [['Il était minuit.', 'cenário (imparfait)'], ['Le téléphone a sonné.', 'acontecimento (passé composé)'], ['Elle avait vingt ans.', 'idade (imparfait)'], ["Tout à coup, j'ai vu une ombre.", 'ação repentina (passé composé)']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je dormais quand Hugo a téléphoné.', translation: 'Eu estava dormindo quando o Hugo ligou.' }
  ],
  tipForBrazilians: '**Partes do corpo com verbo pronominal:** em francês se diz *je me suis cassé **le** bras* (literalmente "quebrei-me o braço"), com artigo, e não ~~j\'ai cassé mon bras~~. O mesmo vale para *se laver les mains*, *se brosser les dents*. O pronome já mostra de quem é a parte do corpo.'
});
