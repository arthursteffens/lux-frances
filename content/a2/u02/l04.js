LUX.registerLesson({
  id: 'a2-u02-l04', level: 'A2', unit: 2, order: 4,
  title: 'Tu as vu ce film ?', titlePt: 'Você viu esse filme?',
  names: ['Camille', 'Lucas', 'Léa', 'Lumière', 'Lyon', 'Louis', 'Auguste', 'Monplaisir', 'Hugo'],
  objectives: [
    'Falar de um filme ou de um evento cultural que você viu.',
    'Usar os particípios irregulares mais frequentes (fait, pris, vu, eu, été, lu, bu, mis, dit, écrit...).',
    'Dar uma opinião simples sobre uma experiência: j\'ai trouvé ça..., ça m\'a plu.'
  ],
  vocabulary: [
    { fr: 'le festival', pt: 'o festival', g: 'm', ex: 'Le festival a lieu en octobre.' },
    { fr: 'la séance', pt: 'a sessão (de cinema)', g: 'f', ex: 'La séance commence à vingt heures.' },
    { fr: 'le réalisateur / la réalisatrice', pt: 'o(a) diretor(a) de cinema', g: 'mf', ex: 'Le réalisateur a parlé après le film.' },
    { fr: "l'acteur / l'actrice", pt: 'o ator / a atriz', g: 'mf', ex: "L'actrice est très connue." },
    { fr: 'la salle', pt: 'a sala', g: 'f', ex: 'La salle était pleine.' },
    { fr: 'les sous-titres', pt: 'as legendas', g: 'm', d: true, ex: "J'ai vu le film avec des sous-titres." },
    { fr: 'en version originale (VO)', pt: 'no idioma original', pos: 'expr', ex: 'Je préfère les films en VO.' },
    { fr: 'ennuyeux / ennuyeuse', pt: 'chato(a), entediante', pos: 'adj', ex: 'Le film était un peu ennuyeux.' },
    { fr: 'émouvant(e)', pt: 'emocionante, comovente', pos: 'adj', ex: "C'est une histoire très émouvante." },
    { fr: 'Ça m\'a plu.', pt: 'Eu gostei.', pos: 'expr', ex: 'Le spectacle ? Ça m\'a beaucoup plu.' },
    { fr: 'la queue', pt: 'a fila', g: 'f', ex: 'On a fait la queue pendant une heure.' },
    { fr: 'célèbre', pt: 'famoso(a)', pos: 'adj', ex: 'Lyon est célèbre pour le cinéma.' }
  ],
  reading: {
    genre: 'post de blog cultural',
    title: 'Mon premier Festival Lumière',
    text: "Tout le monde sait que le cinéma est né à Lyon : en 1895, les frères Louis et Auguste Lumière ont tourné le premier film dans le quartier de Monplaisir. Chaque année, en octobre, la ville organise le [[Festival Lumière|festival de cinema clássico de Lyon]]. Cette année, j'y suis allée pour la première fois.\n\n" +
      "Samedi, Lucas et moi, nous avons [[fait la queue|fizemos fila]] pendant une heure devant l'Institut Lumière. Nous avons pris des billets pour un vieux film italien en version originale. J'ai lu les [[sous-titres|legendas]] en français, Lucas a compris presque tout sans eux : l'italien ressemble au portugais !\n\n" +
      "Après la [[séance|sessão]], la réalisatrice a parlé avec le public. Elle a dit une chose très belle : « Un film, c'est une lettre écrite à des inconnus. » J'ai mis cette phrase dans mon carnet.\n\n" +
      "Le soir, nous avons bu un verre avec Hugo, et nous avons eu une longue discussion. Hugo a trouvé le film ennuyeux, moi je l'ai trouvé très [[émouvant|comovente]]. Lucas n'a rien dit : il a écrit des notes sur son téléphone pour son blog en portugais.\n\n" +
      "Bref, ça m'a beaucoup plu. L'année prochaine, je prends une semaine de vacances pour le festival !\n\nCamille",
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi le festival est à Lyon ?', options: ['Parce que les frères Lumière ont tourné le premier film à Lyon.', 'Parce que Camille habite à Lyon.', 'Parce que Lyon est la capitale de la France.', 'Parce que les films italiens viennent de Lyon.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Camille est allée au festival plusieurs fois.', answer: 'F', explanationPt: '"j\'y suis allée pour la première fois".' },
        { text: 'Le film était en italien.', answer: 'V', explanationPt: '"un vieux film italien en version originale".' },
        { text: 'Lucas a lu les sous-titres.', answer: 'F', explanationPt: 'Foi Camille quem leu as legendas; Lucas entendeu quase tudo sem elas.' },
        { text: 'Hugo a aimé le film.', answer: 'F', explanationPt: 'Ele achou o filme chato (ennuyeux).' },
        { text: 'Le billet a coûté dix euros.', answer: 'NM', explanationPt: 'O texto não fala do preço.' }
      ] },
      { type: 'multiple_choice', prompt: "Qu'est-ce que Camille a mis dans son carnet ?", options: ['Une phrase de la réalisatrice.', 'Le prix des billets.', 'Les notes de Lucas.', "L'adresse de l'Institut Lumière."], answer: 0 },
      { type: 'match', prompt: 'Quem fez o quê?', pairs: [['Camille', 'a lu les sous-titres'], ['Lucas', 'a écrit des notes'], ['Hugo', 'a trouvé le film ennuyeux'], ['La réalisatrice', 'a parlé avec le public']] },
      { type: 'fill_blank', prompt: 'Complete com o particípio usado no texto.', bank: ['pris', 'lu', 'dit', 'bu', 'eu'], items: [
        { text: 'Nous avons ___ des billets.', answers: ['pris'] },
        { text: "J'ai ___ les sous-titres.", answers: ['lu'] },
        { text: 'Elle a ___ une chose très belle.', answers: ['dit'] },
        { text: 'Nous avons ___ un verre avec Hugo.', answers: ['bu'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Depois do cinema',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: 'Alors, le festival ? Camille m\'a dit que vous avez vu un film italien.' },
      { speaker: 'U', text: 'Oui ! Et je n\'ai pas eu besoin des sous-titres, j\'ai presque tout compris.' },
      { speaker: 'L', text: 'Bravo ! Ça t\'a plu ?' },
      { speaker: 'U', text: "Beaucoup. L'histoire est simple, mais les acteurs sont excellents." },
      { speaker: 'L', text: "Moi, j'ai vu le film de Louis Lumière l'année dernière, celui avec les ouvriers qui sortent de l'usine. Il dure seulement cinquante secondes !" },
      { speaker: 'U', text: 'Cinquante secondes ? Tu as fait la queue pour un film si court ?' },
      { speaker: 'L', text: "Non, c'était gratuit, le soir, sur une place." },
      { speaker: 'U', text: "Génial. L'année prochaine, on y va tous ensemble ?" },
      { speaker: 'L', text: "Oui, mais pas avec Hugo : il dort au cinéma !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de temps dure le film de Louis Lumière ?', options: ['Cinquante secondes.', 'Cinq minutes.', 'Quinze secondes.', 'Une heure.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas a eu besoin des sous-titres.', answer: 'F', explanationPt: '"je n\'ai pas eu besoin des sous-titres".' },
        { text: 'Lucas a trouvé les acteurs excellents.', answer: 'V', explanationPt: '"les acteurs sont excellents".' },
        { text: 'Léa a payé pour voir le film de Louis Lumière.', answer: 'F', explanationPt: 'Foi exibido de graça numa praça.' },
        { text: 'Léa aime les films italiens.', answer: 'NM', explanationPt: 'Ela não dá opinião sobre filmes italianos.' }
      ] },
      { type: 'listen_choose', audio: "Je n'ai pas eu besoin des sous-titres.", prompt: 'Ouça e escolha a tradução.',
        options: ['Não precisei das legendas.', 'Não tive tempo de ler as legendas.', 'Não havia legendas.', 'Não gostei das legendas.'], answer: 0 },
      { type: 'dictation', text: "Ça t'a plu ?" },
      { type: 'dictation', text: "J'ai presque tout compris." }
    ]
  },
  grammar: {
    topicId: 'passe-compose',
    title: 'Particípios irregulares',
    explanationPt: 'Os verbos mais usados têm **particípios irregulares**. Vale decorar em grupos pelo som final:\n\n' +
      '- **-u**: avoir → *eu*, boire → *bu*, lire → *lu*, voir → *vu*, pouvoir → *pu*, vouloir → *voulu*, devoir → *dû*, savoir → *su*, venir → *venu*, recevoir → *reçu*, connaître → *connu*, plaire → *plu*, pleuvoir → *plu*\n' +
      '- **-is**: prendre → *pris* (apprendre → *appris*, comprendre → *compris*), mettre → *mis* (promettre → *promis*)\n' +
      '- **-it**: faire → *fait*, dire → *dit*, écrire → *écrit*, conduire → *conduit*\n' +
      '- **-ert**: ouvrir → *ouvert*, offrir → *offert*, découvrir → *découvert*\n' +
      '- e os únicos: être → *été*, naître → *né*, mourir → *mort*\n\n' +
      'Na aba **Verbos**, a ficha de cada verbo mostra o particípio no topo.',
    table: { head: ['infinitivo', 'particípio', 'exemplo'], rows: [
      ['faire', 'fait', "J'ai fait les courses."], ['prendre', 'pris', 'Tu as pris le bus ?'], ['voir', 'vu', 'On a vu un film.'],
      ['avoir', 'eu', "J'ai eu de la chance."], ['être', 'été', 'Il a été malade.'], ['mettre', 'mis', "Elle a mis un pull."],
      ['dire', 'dit', "Qu'est-ce qu'il a dit ?"], ['écrire', 'écrit', "J'ai écrit un e-mail."], ['ouvrir', 'ouvert', 'Ils ont ouvert la fenêtre.']
    ] },
    examples: [
      { fr: "J'ai eu un problème avec ma voiture.", pt: 'Tive um problema com meu carro.' },
      { fr: 'Nous avons été très contents.', pt: 'Ficamos muito contentes.' },
      { fr: "Qu'est-ce que tu as fait ce week-end ?", pt: 'O que você fez neste fim de semana?' },
      { fr: "Il a plu toute la journée.", pt: 'Choveu o dia todo.' },
      { fr: "Ce livre m'a beaucoup plu.", pt: 'Gostei muito deste livro.' }
    ],
    ptComparison: '**Cuidado com "été":** *j\'ai été* é o passé composé de **être** ("eu fui / estive"), e não de "ir". "Eu fui ao cinema" = *je suis **allé** au cinéma*. Já *j\'ai été malade* = "estive doente".\n\n' +
      '**"Plu" tem dois verbos:** *il a plu* (choveu, de *pleuvoir*) e *ça m\'a plu* (eu gostei, de *plaire*). O contexto resolve.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no passé composé.', items: [
      { text: "J'___ un café au bar. (prendre)", answers: ['ai pris'] },
      { text: 'Tu ___ ce film ? (voir)', answers: ['as vu'] },
      { text: 'Nous ___ nos devoirs. (faire)', answers: ['avons fait'] },
      { text: 'Elle ___ une lettre à sa grand-mère. (écrire)', answers: ['a écrit'] },
      { text: "Ils ___ la porte. (ouvrir)", answers: ['ont ouvert'] },
      { text: "J'___ peur ! (avoir)", answers: ['ai eu'] }
    ] },
    { type: 'match', prompt: 'Ligue o infinitivo ao particípio.', pairs: [['boire', 'bu'], ['mettre', 'mis'], ['lire', 'lu'], ['être', 'été'], ['dire', 'dit'], ['offrir', 'offert']] },
    { type: 'multiple_choice', prompt: '"Eu fui ao museu ontem."', options: ['Je suis allé au musée hier.', "J'ai été au musée hier.", "J'ai allé au musée hier.", 'Je suis été au musée hier.'], answer: 0,
      explanationPt: '"Ir" = aller → je suis allé(e). (Na fala, alguns franceses dizem "j\'ai été au musée", mas evite.)' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Qu'est-ce que vous avez fait hier ?", translation: 'O que vocês fizeram ontem?' }
  ],
  tipForBrazilians: '**Opinião sem "gostar de":** para dizer que gostou de algo pontual, os franceses usam muito *ça m\'a plu* (literalmente "isso me agradou"). Para não gostar: *ça ne m\'a pas plu*. Também é comum *j\'ai trouvé ça super / nul / ennuyeux* ("achei isso ótimo / horrível / chato").'
});
