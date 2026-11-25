LUX.registerLesson({
  id: 'a2-u03-l02', level: 'A2', unit: 3, order: 2,
  title: "Avant, c'était différent", titlePt: 'Antes era diferente',
  names: ['Bernard', 'Lucas', 'Croix-Rousse', 'Lyon', 'Gazette', 'Rhône', 'Odette', 'Canuts', 'Michel'],
  objectives: [
    'Comparar o passado com o presente: avant... / maintenant...',
    'Usar o imparfait para descrever lugares, pessoas e hábitos antigos.',
    'Entender uma entrevista com uma pessoa idosa sobre o bairro.'
  ],
  vocabulary: [
    { fr: 'avant', pt: 'antes, antigamente', pos: 'adv', ex: 'Avant, il y avait un cinéma ici.' },
    { fr: 'maintenant', pt: 'agora', pos: 'adv', ex: 'Maintenant, c\'est une banque.' },
    { fr: 'autrefois', pt: 'antigamente, outrora', pos: 'adv', ex: 'Autrefois, les rues étaient calmes.' },
    { fr: 'à cette époque', pt: 'naquela época', pos: 'expr', ex: 'À cette époque, on n\'avait pas de téléphone.' },
    { fr: "l'ouvrier / l'ouvrière", pt: 'o(a) operário(a)', g: 'mf', ex: 'Mon père était ouvrier.' },
    { fr: 'la soie', pt: 'a seda', g: 'f', ex: 'Lyon était la capitale de la soie.' },
    { fr: "l'atelier", pt: 'a oficina, o ateliê', g: 'm', d: true, ex: "L'atelier était au dernier étage." },
    { fr: 'le bruit', pt: 'o barulho', g: 'm', ex: 'Il y avait beaucoup de bruit.' },
    { fr: 'calme', pt: 'calmo(a), tranquilo(a)', pos: 'adj', ex: 'Le quartier était calme.' },
    { fr: 'le commerce', pt: 'a loja, o comércio', g: 'm', ex: 'Il y avait beaucoup de petits commerces.' },
    { fr: 'changer', pt: 'mudar', pos: 'v', ex: 'Le quartier a beaucoup changé.' },
    { fr: 'se souvenir de', pt: 'lembrar-se de', pos: 'v', ex: 'Je me souviens de mon école.' }
  ],
  reading: {
    genre: 'entrevista',
    title: 'La Gazette — « La Croix-Rousse de mon enfance »',
    text: "Madame Bernard habite à la Croix-Rousse depuis quatre-vingt-un ans. Elle se souvient bien du quartier d'autrefois.\n\n" +
      "— Madame Bernard, comment était le quartier quand vous étiez enfant ?\n" +
      "— Très différent ! [[À cette époque|naquela época]], beaucoup de familles travaillaient encore la [[soie|seda]]. On les appelait les « canuts ». Dans les immeubles, les fenêtres étaient très hautes pour avoir de la lumière, et on entendait le bruit des machines toute la journée : [[bistanclaque, bistanclaque|onomatopeia do barulho dos teares, típica de Lyon]] !\n\n" +
      "— Et votre famille ?\n" +
      "— Ma mère était [[tisseuse|tecelã]]. Son [[atelier|ateliê, oficina]] était dans notre appartement, au dernier étage. Moi, je l'aidais après l'école. Mon père, lui, était chauffeur de tramway.\n\n" +
      "— Qu'est-ce qui a changé ?\n" +
      "— Tout ! Avant, il y avait une épicerie, une boucherie et une mercerie dans ma rue. Les gens se connaissaient, on se parlait par la fenêtre. Les enfants jouaient dehors sans leurs parents. Maintenant, il y a des bars, des restaurants et des boutiques de créateurs. C'est plus cher, mais c'est vivant.\n\n" +
      "— Vous préférez le quartier d'avant ?\n" +
      "— Non, chaque époque a ses qualités. Et j'ai des voisins formidables, comme ce jeune Brésilien !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Qui étaient les « canuts » ?', options: ['Les ouvriers de la soie à Lyon.', 'Les chauffeurs de tramway.', 'Les commerçants du quartier.', 'Les enfants de la Croix-Rousse.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Pourquoi les fenêtres étaient très hautes ?', options: ['Pour avoir de la lumière.', 'Pour parler avec les voisins.', 'À cause du bruit.', 'Pour voir le Rhône.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La mère de Mme Bernard travaillait dans une usine.', answer: 'F', explanationPt: 'Ela trabalhava em casa: o ateliê ficava no apartamento.' },
        { text: 'Mme Bernard aidait sa mère après l\'école.', answer: 'V', explanationPt: '"je l\'aidais après l\'école".' },
        { text: 'Avant, les voisins se parlaient par la fenêtre.', answer: 'V', explanationPt: '"on se parlait par la fenêtre".' },
        { text: 'Mme Bernard préfère le quartier d\'avant.', answer: 'F', explanationPt: '"Non, chaque époque a ses qualités."' },
        { text: 'Mme Bernard a des enfants.', answer: 'NM', explanationPt: 'A entrevista não fala de filhos.' }
      ] },
      { type: 'match', prompt: 'Avant ou maintenant?', pairs: [['une épicerie et une boucherie', 'avant'], ['des boutiques de créateurs', 'maintenant'], ['le bruit des machines', 'autrefois'], ['un quartier plus cher', "aujourd'hui"]] },
      { type: 'fill_blank', prompt: 'Complete com o imparfait do texto.', bank: ['travaillaient', 'était', 'jouaient', 'se connaissaient'], items: [
        { text: 'Beaucoup de familles ___ la soie.', answers: ['travaillaient'] },
        { text: 'Ma mère ___ tisseuse.', answers: ['était'] },
        { text: 'Les gens ___.', answers: ['se connaissaient'] },
        { text: 'Les enfants ___ dehors.', answers: ['jouaient'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Mme Bernard mostra uma foto antiga',
    speakers: [{ id: 'B', name: 'Mme Bernard', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'B', text: 'Regardez, Lucas, cette photo date de 1955. C\'est notre rue.' },
      { speaker: 'U', text: "C'est incroyable ! Il n'y avait pas de voitures ?" },
      { speaker: 'B', text: "Très peu. On faisait tout à pied. Et là, à gauche, c'était la boulangerie de Madame Odette." },
      { speaker: 'U', text: 'Et maintenant, c\'est une pharmacie, non ?' },
      { speaker: 'B', text: "Exactement. Et cette petite fille avec les tresses, c'est moi. J'avais sept ans." },
      { speaker: 'U', text: 'Vous étiez très mignonne ! Vous alliez à l\'école à côté ?' },
      { speaker: 'B', text: "Oui, l'école était en haut de la rue. Nous portions des blouses grises et le maître était très sévère." },
      { speaker: 'U', text: 'Au Brésil, mes grands-parents portaient aussi un uniforme.' },
      { speaker: 'B', text: "Ah, vous voyez ? Le monde n'est pas si différent !" }
    ],
    exercises: [
      { type: 'short_answer', prompt: 'De que ano é a foto? (responda com o número)', answers: ['1955'] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'En 1955, il y avait beaucoup de voitures dans la rue.', answer: 'F', explanationPt: '"Très peu. On faisait tout à pied."' },
        { text: 'La boulangerie est maintenant une pharmacie.', answer: 'V', explanationPt: '"c\'est une pharmacie, non ?" — "Exactement."' },
        { text: 'Sur la photo, Mme Bernard a dix ans.', answer: 'F', explanationPt: 'Ela tinha sete anos.' },
        { text: 'Le maître était sévère.', answer: 'V', explanationPt: '"le maître était très sévère".' }
      ] },
      { type: 'listen_choose', audio: 'Nous portions des blouses grises.', prompt: 'O que as crianças usavam?',
        options: ['Aventais (guarda-pós) cinza.', 'Blusas brancas.', 'Sapatos pretos.', 'Chapéus cinza.'], answer: 0,
        explanationPt: '"une blouse" aqui é o avental/guarda-pó escolar, não uma blusa.' },
      { type: 'dictation', text: "Il n'y avait pas de voitures ?" },
      { type: 'dictation', text: "L'école était en haut de la rue." }
    ]
  },
  grammar: {
    topicId: 'imparfait',
    title: 'Quando usar o imparfait',
    explanationPt: 'Use o imparfait para:\n\n' +
      '1. **Descrever** pessoas, lugares, o tempo, sentimentos no passado: *La maison était grande. Il faisait froid. J\'étais content.*\n' +
      '2. **Hábitos e repetições**: *Le dimanche, on allait chez ma grand-mère.* (marcadores: *tous les jours, souvent, d\'habitude, le lundi, toujours*)\n' +
      '3. **Comparar com hoje**: *Avant, il y avait une épicerie. Maintenant, c\'est un bar.*\n\n' +
      'Três expressões que aparecem o tempo todo:\n- **c\'était** = era, foi (descrição/opinião)\n- **il y avait** = havia, tinha\n- **il faisait** (beau, froid, chaud) = fazia (tempo)',
    table: { head: ['presente', 'imparfait', 'tradução'], rows: [
      ["c'est", "c'était", 'era / foi'], ['il y a', 'il y avait', 'havia, tinha'], ['il fait beau', 'il faisait beau', 'fazia tempo bom'],
      ['il faut', 'il fallait', 'era preciso'], ['il pleut', 'il pleuvait', 'chovia'], ['on peut', 'on pouvait', 'a gente podia']
    ] },
    examples: [
      { fr: "Avant, il y avait un cinéma dans ma rue.", pt: 'Antes tinha um cinema na minha rua.' },
      { fr: 'Le dimanche, on mangeait chez mes grands-parents.', pt: 'Aos domingos, comíamos na casa dos meus avós.' },
      { fr: "C'était une belle époque.", pt: 'Era uma bela época.' },
      { fr: 'Il faisait très chaud cet été-là.', pt: 'Fazia muito calor naquele verão.' }
    ],
    ptComparison: '"Tinha" no sentido de "havia" é **il y avait**, nunca ~~il avait~~ (que é "ele tinha"). *Il y avait beaucoup de monde* = tinha muita gente.\n\n' +
      '"Era" para opinião ou descrição de algo passado costuma ser **c\'était**: *C\'était super !* = Foi demais! (mesmo que em português às vezes digamos "foi").'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com c\'était, il y avait ou il faisait.', bank: ["c'était", 'il y avait', 'il faisait'], items: [
      { text: 'Avant, ___ une boulangerie ici.', answers: ['il y avait'] },
      { text: 'Hier soir, ___ froid.', answers: ['il faisait'] },
      { text: 'Le film ? ___ génial !', answers: ["c'était", "C'était"] },
      { text: 'Dans mon école, ___ trois cents élèves.', answers: ['il y avait'] }
    ] },
    { type: 'fill_blank', prompt: 'Conjugue no imparfait.', items: [
      { text: 'Avant, je ___ en métro. (aller)', answers: ['allais'] },
      { text: 'Les gens ___ par la fenêtre. (se parler)', answers: ['se parlaient'] },
      { text: 'Nous ___ des blouses grises. (porter)', answers: ['portions'] },
      { text: 'Mon grand-père ___ le journal tous les matins. (lire)', answers: ['lisait'] }
    ] },
    { type: 'multiple_choice', prompt: '"Antigamente tinha menos carros."', options: ['Avant, il y avait moins de voitures.', 'Avant, il avait moins de voitures.', 'Avant, il y a eu moins de voitures.', 'Avant, il était moins de voitures.'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Avant, le quartier était plus calme.', translation: 'Antes, o bairro era mais tranquilo.' }
  ],
  tipForBrazilians: '**"Se souvenir de" × "se rappeler":** os dois significam "lembrar-se". O mais comum é *se souvenir **de***: *je me souviens **de** mon école*. Com *se rappeler*, a norma pede objeto direto, sem "de": *je me rappelle mon école*. E "lembrar alguém de algo" é *rappeler quelque chose à quelqu\'un*: *Rappelle-moi ton numéro.*'
});
