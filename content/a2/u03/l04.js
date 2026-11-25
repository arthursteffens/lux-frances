LUX.registerLesson({
  id: 'a2-u03-l04', level: 'A2', unit: 3, order: 4,
  title: "Souvenirs d'école", titlePt: 'Lembranças da escola',
  names: ['Karim', 'Sophie', 'Lucas', 'Camille', 'Marseille', 'Annecy', 'Belo Horizonte', 'Lyon', 'France', 'Brésil'],
  objectives: [
    'Falar da sua vida escolar e de estudos no passado.',
    'Situar ações no tempo com il y a, pendant e depuis.',
    'Entender pequenos depoimentos num fórum.'
  ],
  vocabulary: [
    { fr: 'il y a (+ tempo)', pt: 'há (tempo atrás)', pos: 'expr', ex: "J'ai commencé il y a deux ans." },
    { fr: 'pendant', pt: 'durante, por', pos: 'prep', ex: "J'ai étudié l'anglais pendant cinq ans." },
    { fr: 'depuis', pt: 'desde, há (e continua)', pos: 'prep', ex: "J'apprends le français depuis un an." },
    { fr: "l'élève", pt: 'o(a) aluno(a) (escola)', g: 'mf', ex: 'Il y avait trente élèves dans la classe.' },
    { fr: 'le collège', pt: 'o ensino fundamental II (11–15 anos)', g: 'm', ex: 'Au collège, j\'aimais le dessin.' },
    { fr: 'le lycée', pt: 'o ensino médio', g: 'm', ex: 'Je suis allé au lycée à Marseille.' },
    { fr: 'la matière', pt: 'a matéria (escolar)', g: 'f', ex: 'Ma matière préférée était l\'histoire.' },
    { fr: 'la note', pt: 'a nota', g: 'f', ex: "J'avais de bonnes notes en maths." },
    { fr: 'la récréation (la récré)', pt: 'o recreio', g: 'f', d: true, ex: 'À la récré, on jouait aux billes.' },
    { fr: 'le cours', pt: 'a aula; o curso', g: 'm', d: true, ex: 'Le cours commençait à huit heures.' },
    { fr: 'apprendre', pt: 'aprender; ensinar', pos: 'v', ex: "J'ai appris à lire à cinq ans." },
    { fr: 'le bac', pt: 'o exame final do ensino médio', g: 'm', ex: "J'ai eu mon bac en 2014." }
  ],
  reading: {
    genre: 'fórum',
    title: 'Forum « Parlons français » — Vos souvenirs d\'école',
    text: "Karim, 34 ans : J'ai fait toute ma scolarité à Marseille. Au collège, j'étais un élève moyen, je préférais le sport. Mais au lycée, j'ai eu un professeur de philosophie extraordinaire. Il parlait avec passion et nous l'écoutions pendant des heures. J'ai eu mon bac il y a seize ans, et depuis, je lis de la philosophie tous les soirs.\n\n" +
      "Sophie, 58 ans : Je suis professeure de maths depuis trente ans, à Annecy. Quand j'étais élève, je détestais les maths ! J'avais de mauvaises notes et j'avais peur du tableau. Un jour, une professeure m'a aidée pendant tout un été. Elle expliquait lentement, avec des exemples de la vie quotidienne. J'ai tout compris. C'est grâce à elle que j'ai choisi ce métier.\n\n" +
      "Lucas, 28 ans : Au Brésil, l'école commençait à sept heures du matin et finissait à midi. L'après-midi, j'allais au cours d'anglais. J'ai étudié l'anglais pendant six ans, mais je ne parlais pas bien. Le français, je l'apprends depuis seulement un an et demi, et je parle déjà mieux ! Le secret ? Vivre en France depuis cinq mois et parler avec mes voisins.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Qui a eu un professeur de philosophie extraordinaire ?', options: ['Karim.', 'Sophie.', 'Lucas.', 'Personne.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Au collège, Karim était un excellent élève.', answer: 'F', explanationPt: '"j\'étais un élève moyen".' },
        { text: 'Sophie aimait les maths quand elle était élève.', answer: 'F', explanationPt: '"je détestais les maths !"' },
        { text: 'Sophie enseigne à Annecy.', answer: 'V', explanationPt: '"Je suis professeure de maths depuis trente ans, à Annecy."' },
        { text: 'Lucas a étudié l\'anglais pendant six ans.', answer: 'V', explanationPt: '"J\'ai étudié l\'anglais pendant six ans".' },
        { text: 'Karim est professeur de philosophie.', answer: 'NM', explanationPt: 'O texto não diz a profissão dele.' }
      ] },
      { type: 'multiple_choice', prompt: 'Selon Lucas, quel est le secret pour bien parler ?', options: ['Vivre en France et parler avec les voisins.', 'Étudier six ans à l\'école.', 'Avoir un bon professeur de philosophie.', 'Regarder des films.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a pessoa ao tempo.', pairs: [['Karim a eu son bac', 'il y a seize ans'], ['Sophie est professeure', 'depuis trente ans'], ["Lucas a étudié l'anglais", 'pendant six ans'], ['Lucas apprend le français', 'depuis un an et demi']] },
      { type: 'short_answer', prompt: 'Há quantos anos a Sophie é professora? (responda com o número)', answers: ['30'] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Na pausa do café',
    speakers: [{ id: 'C', name: 'Camille', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'C', text: 'Lucas, tu parles vraiment bien maintenant. Tu étudies le français depuis combien de temps ?' },
      { speaker: 'U', text: "Depuis un an et demi. J'ai commencé au Brésil, avec une application, et puis j'ai pris des cours." },
      { speaker: 'C', text: 'Et tu as étudié combien de temps avant de venir ?' },
      { speaker: 'U', text: "Pendant un an, deux soirs par semaine. Je suis arrivé à Lyon il y a cinq mois." },
      { speaker: 'C', text: "Moi, j'ai appris l'espagnol au lycée pendant trois ans, et je ne me souviens de rien !" },
      { speaker: 'U', text: "C'est normal, il faut pratiquer. Tu ne parles jamais espagnol ?" },
      { speaker: 'C', text: "Jamais. Ah si, je suis allée en Espagne il y a deux ans. J'ai commandé une paella… et on m'a apporté une salade !" },
      { speaker: 'U', text: 'Ha ha ! Tu veux apprendre le portugais ? Je peux t\'aider.' },
      { speaker: 'C', text: "Avec plaisir ! On commence lundi ?" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Lucas est arrivé à Lyon il y a combien de temps ?', options: ['Il y a cinq mois.', 'Il y a un an et demi.', 'Il y a deux ans.', 'Il y a trois ans.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas a commencé le français avec une application.', answer: 'V', explanationPt: '"J\'ai commencé au Brésil, avec une application".' },
        { text: 'Camille se souvient bien de son espagnol.', answer: 'F', explanationPt: '"je ne me souviens de rien !"' },
        { text: 'En Espagne, Camille a reçu une paella.', answer: 'F', explanationPt: 'Ela pediu uma paella e trouxeram uma salada.' },
        { text: 'Camille veut apprendre le portugais.', answer: 'V', explanationPt: '"Avec plaisir ! On commence lundi ?"' }
      ] },
      { type: 'listen_choose', audio: 'Tu étudies le français depuis combien de temps ?', prompt: 'Ouça e escolha a tradução.',
        options: ['Há quanto tempo você estuda francês?', 'Por quanto tempo você estudou francês?', 'Quando você começou a estudar francês?', 'Quanto tempo por dia você estuda francês?'], answer: 0 },
      { type: 'dictation', text: "Je suis arrivé à Lyon il y a cinq mois." },
      { type: 'dictation', text: "Pendant un an, deux soirs par semaine." }
    ]
  },
  grammar: {
    topicId: 'depuis-pendant',
    title: 'Il y a, pendant e depuis',
    explanationPt: 'Três palavras para situar uma ação no tempo — e o português usa "há" ou "por" para quase todas:\n\n' +
      '- **il y a** + tempo = **há (tempo atrás)**: um momento no passado. Verbo no passado. *Je suis arrivé **il y a** cinq mois.* (cheguei há cinco meses)\n' +
      '- **pendant** + tempo = **durante, por**: duração **terminada** (ou planejada). *J\'ai étudié l\'anglais **pendant** six ans.* (estudei por seis anos — e acabou)\n' +
      '- **depuis** + tempo/data = **há / desde**: algo que começou no passado e **continua**. Verbo no **presente**! *J\'apprends le français **depuis** un an.* (estudo francês há um ano — e continuo)\n\n' +
      'Perguntas: *Depuis combien de temps... ?* (há quanto tempo?) · *Pendant combien de temps... ?* (por quanto tempo?) · *Quand... ?* (quando? → il y a)',
    table: { head: ['', 'exemplo', 'tradução'], rows: [
      ['il y a', 'Je suis arrivé il y a cinq mois.', 'Cheguei há cinco meses.'],
      ['pendant', "J'ai habité à Rio pendant deux ans.", 'Morei no Rio por dois anos.'],
      ['depuis + duração', "J'habite à Lyon depuis cinq mois.", 'Moro em Lyon há cinco meses.'],
      ['depuis + data', 'Je travaille ici depuis 2023.', 'Trabalho aqui desde 2023.']
    ] },
    examples: [
      { fr: "Elle est professeure depuis trente ans.", pt: 'Ela é professora há trinta anos.' },
      { fr: "J'ai eu mon bac il y a seize ans.", pt: 'Terminei o ensino médio há dezesseis anos.' },
      { fr: "Nous avons attendu pendant une heure.", pt: 'Esperamos durante uma hora.' },
      { fr: "Tu attends depuis longtemps ?", pt: 'Você está esperando há muito tempo?' }
    ],
    ptComparison: 'O erro clássico do brasileiro: traduzir "**há** um ano" sempre como *il y a*. Pergunte-se: **a ação continua?**\n- "Moro aqui há um ano" (continuo morando) → *J\'habite ici **depuis** un an* — com verbo no **presente**.\n- "Cheguei há um ano" (ação pontual) → *Je suis arrivé **il y a** un an*.\n\n' +
      'Nunca use o passé composé com *depuis* para algo que continua: ~~j\'ai habité ici depuis un an~~.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com il y a, pendant ou depuis.', bank: ['il y a', 'pendant', 'depuis'], items: [
      { text: "J'habite à Lyon ___ cinq mois.", answers: ['depuis'] },
      { text: "Je suis allé en Italie ___ deux ans.", answers: ['il y a'] },
      { text: "Nous avons dansé ___ toute la nuit.", answers: ['pendant'] },
      { text: "Elle travaille dans cette agence ___ 2022.", answers: ['depuis'] },
      { text: "Il a vécu au Japon ___ trois ans, puis il est rentré.", answers: ['pendant'] },
      { text: "Le film a commencé ___ dix minutes.", answers: ['il y a'] }
    ] },
    { type: 'multiple_choice', prompt: '"Estudo francês há dois anos."', options: ["J'étudie le français depuis deux ans.", "J'ai étudié le français il y a deux ans.", "J'étudie le français il y a deux ans.", "J'ai étudié le français depuis deux ans."], answer: 0,
      explanationPt: 'A ação continua → depuis + presente.' },
    { type: 'multiple_choice', prompt: 'Qual pergunta corresponde a "Depuis trois ans."?', options: ['Depuis combien de temps tu habites ici ?', 'Quand est-ce que tu es arrivé ?', 'Pendant combien de temps tu as travaillé là-bas ?', 'À quelle heure tu pars ?'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "J'apprends le français depuis un an.", translation: 'Aprendo francês há um ano.' }
  ],
  tipForBrazilians: '**O sistema escolar francês em 4 palavras:** *l\'école (primaire)* (6–11 anos) → *le collège* (11–15) → *le lycée* (15–18, termina com **le bac**) → *l\'université* / *la fac*. Cuidado: *collège* **não** é "colégio" no sentido de escola particular, nem faculdade! E as séries contam ao contrário: *la sixième* é o 1º ano do collège, e *la terminale* é o último ano do lycée.'
});
