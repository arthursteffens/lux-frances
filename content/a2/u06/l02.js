LUX.registerLesson({
  id: 'a2-u06-l02', level: 'A2', unit: 6, order: 2,
  title: 'Dans dix ans…', titlePt: 'Daqui a dez anos…',
  names: ['Lucas', 'Léa', 'Ana', 'Lyon', 'Brésil', 'Belo Horizonte', 'France', 'Rhône-Alpes', 'Auvergne', 'Alpes', 'Lyonnais', 'Météo', 'Radio'],
  objectives: [
    'Falar de projetos e previsões mais distantes.',
    'Formar o futur simple (regulares e os irregulares mais comuns).',
    'Entender uma previsão do tempo no rádio.'
  ],
  vocabulary: [
    { fr: "l'avenir", pt: 'o futuro', g: 'm', ex: "Je pense à l'avenir." },
    { fr: 'le projet', pt: 'o projeto, o plano', g: 'm', ex: "J'ai beaucoup de projets." },
    { fr: 'un jour', pt: 'um dia (no futuro)', pos: 'expr', ex: 'Un jour, je parlerai parfaitement français.' },
    { fr: 'peut-être', pt: 'talvez', pos: 'adv', ex: 'Peut-être que je rentrerai au Brésil.' },
    { fr: 'devenir', pt: 'tornar-se, virar', pos: 'v', ex: 'Je deviendrai directeur artistique.' },
    { fr: 'espérer', pt: 'esperar (ter esperança)', pos: 'v', ex: "J'espère que tu viendras." },
    { fr: 'la météo', pt: 'a previsão do tempo', g: 'f', ex: 'Tu as vu la météo ?' },
    { fr: 'le nuage', pt: 'a nuvem', g: 'm', d: true, ex: 'Il y aura des nuages.' },
    { fr: "l'orage", pt: 'a tempestade (com raios)', g: 'm', d: true, ex: 'Attention aux orages ce soir.' },
    { fr: 'la température', pt: 'a temperatura', g: 'f', ex: 'Les températures vont baisser.' },
    { fr: 'ensoleillé(e)', pt: 'ensolarado(a)', pos: 'adj', ex: 'Une journée ensoleillée.' },
    { fr: 'quand (+ futur)', pt: 'quando (+ futuro do subjuntivo)', pos: 'conj', ex: 'Quand je serai vieux, je vivrai à la campagne.' }
  ],
  reading: {
    genre: 'carta para si mesmo',
    title: 'Lettre à moi-même, dans dix ans',
    text: "Cher Lucas du futur,\n\n" +
      "Aujourd'hui, j'ai vingt-huit ans et j'habite à Lyon depuis presque un an. Notre professeure de français nous a demandé d'écrire une lettre à nous-mêmes. Alors voilà mes rêves pour toi.\n\n" +
      "Dans dix ans, tu auras trente-huit ans. Tu parleras français parfaitement, sans accent… bon, peut-être avec un petit accent brésilien ! Tu comprendras enfin les blagues de Hugo.\n\n" +
      "Professionnellement, tu ne travailleras plus pour une agence : tu auras ton propre studio de design, avec des clients en France et au Brésil. Tu feras des affiches pour des festivals de cinéma, et peut-être pour le Festival Lumière !\n\n" +
      "Tu vivras toujours à Lyon, je pense, mais dans un appartement plus grand, avec un balcon et des plantes. Tu auras peut-être un chien. Et Ana ? Elle viendra souvent te voir, et vous irez ensemble à la mer.\n\n" +
      "Tu rentreras au Brésil une fois par an, pour voir papa et maman. Ils seront fiers de toi.\n\n" +
      "Une dernière chose : n'oublie jamais pourquoi tu es venu ici. Quand tu seras fatigué, souviens-toi du premier matin à la Croix-Rousse, du café sur la terrasse et de la peur de parler.\n\n" +
      "À dans dix ans !\nLucas",
    exercises: [
      { type: 'multiple_choice', prompt: 'Quel âge aura Lucas dans dix ans ?', options: ['Trente-huit ans.', 'Vingt-huit ans.', 'Quarante ans.', 'Trente ans.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas espère avoir son propre studio.', answer: 'V', explanationPt: '"tu auras ton propre studio de design".' },
        { text: 'Lucas pense quitter Lyon.', answer: 'F', explanationPt: '"Tu vivras toujours à Lyon, je pense".' },
        { text: 'Lucas veut se marier.', answer: 'NM', explanationPt: 'A carta não fala de casamento.' },
        { text: 'Lucas rentrera au Brésil chaque année.', answer: 'V', explanationPt: '"une fois par an".' },
        { text: "C'est l'idée de Lucas d'écrire cette lettre.", answer: 'F', explanationPt: 'Foi a professora de francês que pediu.' }
      ] },
      { type: 'match', prompt: 'Ligue o sonho à pessoa ou à coisa.', pairs: [['un studio de design', 'le travail'], ['un balcon et des plantes', "l'appartement"], ['venir souvent', 'Ana'], ['être fiers', 'les parents']] },
      { type: 'fill_blank', prompt: 'Complete com o futur simple do texto.', bank: ['auras', 'parleras', 'feras', 'vivras', 'seront'], items: [
        { text: 'Dans dix ans, tu ___ trente-huit ans.', answers: ['auras'] },
        { text: 'Tu ___ français parfaitement.', answers: ['parleras'] },
        { text: 'Tu ___ des affiches pour des festivals.', answers: ['feras'] },
        { text: 'Ils ___ fiers de toi.', answers: ['seront'] }
      ] },
      { type: 'multiple_choice', prompt: 'Que doit faire Lucas quand il sera fatigué ?', options: ['Se souvenir de son premier matin à la Croix-Rousse.', 'Rentrer au Brésil.', 'Appeler Ana.', 'Écrire une autre lettre.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'previsão do tempo no rádio',
    title: 'La météo du week-end',
    speakers: [{ id: 'M', name: 'O meteorologista', gender: 'm' }],
    script: [
      { speaker: 'M', text: "Bonjour à tous ! Voici la météo pour ce week-end dans la région." },
      { speaker: 'M', text: "Samedi, le soleil brillera toute la journée sur Lyon et sa région. Il fera très chaud : jusqu'à trente-quatre degrés l'après-midi. Pensez à boire beaucoup d'eau !" },
      { speaker: 'M', text: "Samedi soir, attention : des orages arriveront par l'ouest vers vingt-trois heures. Il y aura du vent et de la pluie forte pendant deux ou trois heures." },
      { speaker: 'M', text: "Dimanche, le temps sera plus frais. Le ciel sera nuageux le matin, mais le soleil reviendra l'après-midi. Les températures ne dépasseront pas vingt-quatre degrés." },
      { speaker: 'M', text: "Dans les Alpes, il fera beau et il ne pleuvra pas. Une bonne idée pour une randonnée ! Bon week-end !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quelle température samedi après-midi ?', options: ['Jusqu\'à trente-quatre degrés.', 'Vingt-quatre degrés.', 'Trente degrés.', 'Quatorze degrés.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Quand arriveront les orages ?', options: ['Samedi vers vingt-trois heures.', 'Dimanche matin.', 'Samedi matin.', 'Dimanche après-midi.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Dimanche, il fera plus frais que samedi.', answer: 'V', explanationPt: '"Dimanche, le temps sera plus frais."' },
        { text: 'Il pleuvra dans les Alpes.', answer: 'F', explanationPt: '"il ne pleuvra pas".' },
        { text: 'Dimanche matin, le ciel sera nuageux.', answer: 'V', explanationPt: '"Le ciel sera nuageux le matin".' },
        { text: 'Il neigera en montagne.', answer: 'NM', explanationPt: 'Não se fala de neve.' }
      ] },
      { type: 'listen_choose', audio: "Il fera très chaud.", prompt: 'Ouça e escolha.',
        options: ['Vai fazer muito calor.', 'Fez muito calor.', 'Faz muito calor.', 'Vai fazer muito frio.'], answer: 0 },
      { type: 'dictation', text: 'Le soleil reviendra l\'après-midi.' }
    ]
  },
  grammar: {
    topicId: 'futur-simple',
    title: 'O futur simple',
    explanationPt: 'O **futur simple** corresponde ao nosso futuro "falarei, farei". É usado para **projetos mais distantes**, **previsões** (meteorologia, horóscopo), **promessas** e em textos mais formais.\n\n' +
      '**Formação:** infinitivo + **-ai, -as, -a, -ons, -ez, -ont** (são as terminações de *avoir*!).\n- *parler → je parler**ai***\n- *finir → je finir**ai***\n- verbos em **-re** perdem o *e*: *prendre → je prendr**ai***\n\n' +
      '**Irregulares mais comuns** (radical especial, mesmas terminações):\n- ***être*** → *serai*\n- ***avoir*** → *aurai*\n- ***aller*** → *irai*\n- ***faire*** → *ferai*\n- ***venir*** → *viendrai*\n- ***pouvoir*** → *pourrai*\n- ***vouloir*** → *voudrai*\n- ***voir*** → *verrai*\n- ***savoir*** → *saurai*\n- ***devoir*** → *devrai*\n- ***falloir*** → *il faudra*\n- ***pleuvoir*** → *il pleuvra*\n\n' +
      '**Atenção:** depois de *quand* com sentido de futuro, o francês usa o **futur** (o português usa o futuro do subjuntivo): *Quand je **serai** vieux…* = Quando eu **for** velho…',
    table: { head: ['', 'parler', 'être', 'avoir', 'faire'], rows: [
      ['je', 'parlerai', 'serai', 'aurai', 'ferai'], ['tu', 'parleras', 'seras', 'auras', 'feras'], ['il / elle / on', 'parlera', 'sera', 'aura', 'fera'],
      ['nous', 'parlerons', 'serons', 'aurons', 'ferons'], ['vous', 'parlerez', 'serez', 'aurez', 'ferez'], ['ils / elles', 'parleront', 'seront', 'auront', 'feront']
    ] },
    examples: [
      { fr: 'Un jour, je parlerai français parfaitement.', pt: 'Um dia falarei francês perfeitamente.' },
      { fr: "Demain, il fera beau.", pt: 'Amanhã vai fazer tempo bom.' },
      { fr: 'Quand tu viendras à Lyon, on ira à Fourvière.', pt: 'Quando você vier a Lyon, iremos a Fourvière.' },
      { fr: "Je t'appellerai ce soir, promis.", pt: 'Te ligo hoje à noite, prometo.' }
    ],
    ptComparison: '**Futur proche ou futur simple?** Na fala, os franceses usam muito o *futur proche* (*je vais partir*), como nós usamos "vou partir". O *futur simple* aparece em planos distantes, previsões, promessas e na escrita — mais ou menos como o nosso "partirei", mas é **bem mais usado** na França do que "partirei" no Brasil.\n\n' +
      '**"Quando eu for"** → *quand je serai* (nunca ~~quand je suis~~ para o futuro!). O mesmo com *dès que* (assim que): *Dès que j\'arriverai, je t\'appellerai.*'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no futur simple.', items: [
      { text: "L'année prochaine, je ___ en Italie. (voyager)", answers: ['voyagerai'] },
      { text: 'Demain, il ___ beau. (faire)', answers: ['fera'] },
      { text: 'Nous ___ à la plage samedi. (aller)', answers: ['irons'] },
      { text: 'Tu ___ à ma fête ? (venir)', answers: ['viendras'] },
      { text: 'Ils ___ contents. (être)', answers: ['seront'] },
      { text: 'Vous ___ le train de huit heures. (prendre)', answers: ['prendrez'] }
    ] },
    { type: 'multiple_choice', prompt: '"Quando eu tiver tempo, vou te visitar."', options: ["Quand j'aurai le temps, je te rendrai visite.", "Quand j'ai le temps, je te rendrai visite.", "Quand j'aurais le temps, je te rends visite.", "Quand je vais avoir le temps, je te rends visite."], answer: 0,
      explanationPt: 'Depois de "quand" com sentido futuro: futur simple.' },
    { type: 'match', prompt: 'Ligue o infinitivo ao radical do futuro.', pairs: [['pouvoir', 'pourr-'], ['voir', 'verr-'], ['savoir', 'saur-'], ['vouloir', 'voudr-'], ['devoir', 'devr-']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Un jour, nous vivrons à la campagne.', translation: 'Um dia viveremos no campo.' }
  ],
  tipForBrazilians: '**Pronúncia do futuro × condicional:** *je parlerai* (futuro, som [e]) e *je parlerais* (condicional, som [ɛ]) soam quase iguais para nossos ouvidos. Muitos franceses também não distinguem! O contexto ajuda: *Demain, je parlerai…* (futuro) × *Si j\'avais le temps, je parlerais…* (condicional, que você verá no B1).'
});
