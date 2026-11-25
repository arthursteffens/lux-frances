LUX.registerLesson({
  id: 'a2-u03-l01', level: 'A2', unit: 3, order: 1,
  title: "Quand j'étais petit", titlePt: 'Quando eu era pequeno',
  names: ['Lucas', 'Léa', 'Belo Horizonte', 'Pampulha', 'Ana', 'Cruzeiro', 'Minas', 'Gerais', 'Annecy', 'Jeanne', 'Mamie', 'Thomas', 'Brésil'],
  objectives: [
    'Descrever a sua infância: onde morava, como era, o que fazia.',
    'Formar o imparfait de qualquer verbo a partir do "nous" do presente.',
    'Falar de hábitos do passado com tous les jours, souvent, le dimanche.'
  ],
  vocabulary: [
    { fr: "l'enfance", pt: 'a infância', g: 'f', ex: 'Mon enfance était heureuse.' },
    { fr: 'petit(e)', pt: 'pequeno(a); criança', pos: 'adj', ex: "Quand j'étais petit, j'avais un chien." },
    { fr: 'souvent', pt: 'frequentemente, muitas vezes', pos: 'adv', ex: 'On allait souvent à la plage.' },
    { fr: "d'habitude", pt: 'normalmente, de costume', pos: 'expr', ex: "D'habitude, je rentrais à pied." },
    { fr: "l'école", pt: 'a escola', g: 'f', ex: "L'école était près de la maison." },
    { fr: 'le / la voisin(e)', pt: 'o(a) vizinho(a)', g: 'mf', ex: 'Nos voisins avaient un grand jardin.' },
    { fr: 'le jardin', pt: 'o jardim, o quintal', g: 'm', ex: 'On jouait dans le jardin.' },
    { fr: 'le goûter', pt: 'o lanche da tarde', g: 'm', ex: 'Le goûter, c\'était à seize heures.' },
    { fr: 'grimper', pt: 'subir, escalar', pos: 'v', ex: 'Je grimpais aux arbres.' },
    { fr: 'timide', pt: 'tímido(a)', pos: 'adj', ex: "J'étais un enfant timide." },
    { fr: 'les vacances', pt: 'as férias', g: 'f', d: true, ex: 'Pendant les vacances, on allait chez mes grands-parents.' },
    { fr: 'le souvenir', pt: 'a lembrança', g: 'm', d: true, ex: "C'est un bon souvenir." }
  ],
  reading: {
    genre: 'redação (atelier de escrita)',
    title: 'Atelier d\'écriture — « Mon enfance », par Lucas',
    text: "Quand j'étais petit, j'habitais à Belo Horizonte, dans une maison blanche près du lac de la Pampulha. Ma famille n'était pas riche, mais la maison était grande et il y avait un jardin avec un manguier. J'adorais [[grimper|subir]] dans cet arbre avec ma sœur Ana.\n\n" +
      "J'étais un enfant timide et un peu rêveur. À l'école, je parlais peu, mais je dessinais tout le temps, même pendant les cours de maths ! Mes professeurs n'étaient pas toujours contents.\n\n" +
      "[[D'habitude|normalmente]], ma mère nous préparait le [[goûter|lanche da tarde]] à quatre heures : du pain de fromage et du jus d'orange. Ensuite, nous jouions au foot dans la rue avec les enfants des voisins. Le dimanche, toute la famille allait déjeuner chez ma grand-mère. Elle cuisinait des haricots noirs et on mangeait pendant des heures. Mon grand-père écoutait les matchs du Cruzeiro à la radio et il criait très fort.\n\n" +
      "Pendant les vacances, nous partions souvent dans une ferme, à la campagne, dans le Minas Gerais. Il n'y avait pas de télévision, alors on se couchait tôt et on se levait avec le soleil.\n\n" +
      "Aujourd'hui, j'habite en France, mais je garde ces [[souvenirs|lembranças]] dans mon cœur.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment était Lucas quand il était petit ?', options: ['Timide et rêveur.', 'Très bavard.', 'Sportif et bruyant.', 'Toujours triste.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La famille de Lucas était très riche.', answer: 'F', explanationPt: '"Ma famille n\'était pas riche".' },
        { text: 'Lucas dessinait pendant les cours.', answer: 'V', explanationPt: '"je dessinais tout le temps, même pendant les cours de maths".' },
        { text: 'Le dimanche, la famille déjeunait au restaurant.', answer: 'F', explanationPt: 'Almoçavam na casa da avó.' },
        { text: 'Lucas avait un chien.', answer: 'NM', explanationPt: 'O texto não fala de animais.' },
        { text: 'À la ferme, il y avait une télévision.', answer: 'F', explanationPt: '"Il n\'y avait pas de télévision".' }
      ] },
      { type: 'match', prompt: 'Quem fazia o quê?', pairs: [['La mère', 'préparait le goûter'], ['Le grand-père', 'écoutait les matchs'], ['La grand-mère', 'cuisinait des haricots'], ['Lucas et Ana', 'grimpaient dans le manguier']] },
      { type: 'multiple_choice', prompt: "Qu'est-ce que Lucas mangeait au goûter ?", options: ["Du pain de fromage et du jus d'orange.", 'Des haricots noirs.', 'Des mangues.', 'Du gâteau au chocolat.'], answer: 0 },
      { type: 'fill_blank', prompt: 'Complete com o verbo no imparfait, como no texto.', bank: ["j'habitais", 'était', 'jouions', 'partions'], items: [
        { text: 'Quand j\'étais petit, ___ à Belo Horizonte.', answers: ["j'habitais"] },
        { text: 'La maison ___ grande.', answers: ['était'] },
        { text: 'Nous ___ au foot dans la rue.', answers: ['jouions'] },
        { text: 'Nous ___ souvent à la campagne.', answers: ['partions'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Léa fala da infância em Annecy',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Et toi, Léa, tu étais comment quand tu étais petite ?' },
      { speaker: 'L', text: "Oh, moi, j'étais terrible ! Je ne restais jamais tranquille." },
      { speaker: 'U', text: 'Tu habitais où ?' },
      { speaker: 'L', text: "À Annecy, au-dessus de la boulangerie de mon père. Tous les matins, ça sentait le pain chaud." },
      { speaker: 'U', text: "Quelle chance ! Tu mangeais des croissants tous les jours ?" },
      { speaker: 'L', text: "Non, seulement le dimanche. Mon père disait que les croissants, c'était pour les clients !" },
      { speaker: 'U', text: 'Et en été ?' },
      { speaker: 'L', text: "En été, on se baignait dans le lac avec mon frère Thomas. L'eau était froide, mais on adorait ça." },
      { speaker: 'U', text: 'Et ta grand-mère ? Elle faisait déjà du vélo ?' },
      { speaker: 'L', text: "Oui ! Mamie Jeanne m'emmenait à l'école à vélo. Elle allait plus vite que les voitures !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Où habitait Léa ?', options: ['Au-dessus de la boulangerie de son père.', 'Chez sa grand-mère.', 'Au bord du lac.', 'À Genève.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Léa était une enfant très calme.', answer: 'F', explanationPt: '"j\'étais terrible ! Je ne restais jamais tranquille."' },
        { text: 'Léa mangeait des croissants tous les jours.', answer: 'F', explanationPt: 'Só aos domingos.' },
        { text: "L'eau du lac était froide.", answer: 'V', explanationPt: '"L\'eau était froide, mais on adorait ça."' },
        { text: 'Mamie Jeanne emmenait Léa à l\'école en voiture.', answer: 'F', explanationPt: 'Ela levava de bicicleta.' }
      ] },
      { type: 'listen_choose', audio: 'Tous les matins, ça sentait le pain chaud.', prompt: 'O que a Léa diz?',
        options: ['Todas as manhãs, tinha cheiro de pão quente.', 'Todas as manhãs, ela comia pão quente.', 'Todas as manhãs, ela sentia frio.', 'Todas as manhãs, o pão estava frio.'], answer: 0,
        explanationPt: '"ça sent + coisa" = tem cheiro de: ça sent le café, ça sent bon.' },
      { type: 'dictation', text: "Tu étais comment quand tu étais petite ?" },
      { type: 'dictation', text: "En été, on se baignait dans le lac." }
    ]
  },
  grammar: {
    topicId: 'imparfait',
    title: 'O imparfait: formação',
    explanationPt: 'O **imparfait** é o "pretérito imperfeito" do português (*eu morava, eu era, eu fazia*). Serve para **descrições** e **hábitos** no passado.\n\n' +
      '**Formação (vale para quase todos os verbos):** pegue o **nous do presente**, tire o **-ons** e acrescente **-ais, -ais, -ait, -ions, -iez, -aient**.\n\n' +
      '- nous **parl**ons → je parlais\n- nous **finiss**ons → je finissais\n- nous **fais**ons → je faisais\n- nous **pren**ons → je prenais\n\n' +
      '**Única exceção:** être → **ét-** (*j\'étais, tu étais, il était...*).\n\n' +
      'Atenção à ortografia: *manger* → nous mang**e**ons → je mang**e**ais; *commencer* → je commen**ç**ais.',
    table: { head: ['', 'parler', 'avoir', 'être', 'faire'], rows: [
      ['je / j\'', 'parlais', 'avais', 'étais', 'faisais'], ['tu', 'parlais', 'avais', 'étais', 'faisais'], ['il / elle / on', 'parlait', 'avait', 'était', 'faisait'],
      ['nous', 'parlions', 'avions', 'étions', 'faisions'], ['vous', 'parliez', 'aviez', 'étiez', 'faisiez'], ['ils / elles', 'parlaient', 'avaient', 'étaient', 'faisaient']
    ] },
    examples: [
      { fr: "Quand j'étais petit, j'habitais à Belo Horizonte.", pt: 'Quando eu era pequeno, morava em Belo Horizonte.' },
      { fr: 'Nous jouions dans la rue.', pt: 'Nós brincávamos na rua.' },
      { fr: 'Il y avait un jardin.', pt: 'Havia (tinha) um quintal.' },
      { fr: 'Ma grand-mère cuisinait très bien.', pt: 'Minha avó cozinhava muito bem.' }
    ],
    ptComparison: 'Ótima notícia: o imparfait corresponde **quase sempre** ao nosso pretérito imperfeito. Se em português você diria "eu morava, eu era, tinha", use o imparfait.\n\n' +
      'Pronúncia: *parlais, parlait, parlaient* soam **iguais** ([parlɛ]). Só *parlions* e *parliez* soam diferentes.\n\n' +
      '"Brincar" de criança é *jouer*: *on jouait au foot, à cache-cache*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no imparfait.', items: [
      { text: 'Quand nous ___ petits, nous habitions à la campagne. (être)', answers: ['étions'] },
      { text: 'Mon père ___ une vieille voiture. (avoir)', answers: ['avait'] },
      { text: 'Tu ___ du sport ? (faire)', answers: ['faisais'] },
      { text: 'Les enfants ___ à midi. (manger)', answers: ['mangeaient'] },
      { text: 'Je ___ le bus à sept heures. (prendre)', answers: ['prenais'] },
      { text: 'Vous ___ souvent au cinéma ? (aller)', answers: ['alliez'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual é o radical do imparfait de "finir"?', options: ['finiss-', 'fin-', 'fini-', 'finir-'], answer: 0,
      explanationPt: 'nous finissons → finiss- → je finissais.' },
    { type: 'match', prompt: 'Ligue o presente (nous) ao imparfait (je).', pairs: [['nous buvons', 'je buvais'], ['nous lisons', 'je lisais'], ['nous voyons', 'je voyais'], ['nous écrivons', "j'écrivais"], ['nous commençons', 'je commençais']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Quand j'étais petite, j'avais un chat.", translation: 'Quando eu era pequena, tinha um gato.' }
  ],
  tipForBrazilians: '**"Brincar" × "jouer":** em francês, *jouer* serve para brincar, jogar e tocar instrumento. Mas "brincar" no sentido de "fazer piada" é *plaisanter* ou *rigoler*: *Je plaisante !* = Tô brincando! E criança que "brinca de casinha" → *jouer à la dînette*.'
});
