LUX.registerProLesson({
  id: 'pro-fr-a2-l04', lang: 'fr', level: 'A2', order: 4, sector: 'Tecnologia',
  title: 'Les chiffres de l\'équipe', titlePt: 'Os números da equipe',
  names: ['Marina', 'Nuvio', 'Laura', 'Thomas'],
  objectives: [
    'Ler e apresentar indicadores de pessoas: efetivo, contratações, saídas, porcentagens.',
    'Usar quantidades (beaucoup de, peu de, assez de, trop de) e o pronome en.',
    'Fazer perguntas simples com combien para entender a situação de uma equipe.'
  ],
  vocabulary: [
    { fr: "l'effectif", pt: 'o efetivo, o quadro de funcionários', g: 'm', ex: "L'effectif total est de cent quatre-vingt-deux personnes." },
    { fr: 'le salarié / la salariée', pt: 'o(a) funcionário(a), empregado(a)', ex: 'Nous avons onze nouveaux salariés.' },
    { fr: "l'embauche", pt: 'a contratação', g: 'f', ex: 'Il y a eu onze embauches ce mois-ci.' },
    { fr: 'le départ', pt: 'a saída (de um funcionário)', g: 'm', ex: 'Il y a eu six départs.' },
    { fr: 'le taux', pt: 'a taxa, o índice', g: 'm', ex: 'Le taux de départ est de douze pour cent.' },
    { fr: 'le tableau de bord', pt: 'o painel (dashboard)', g: 'm', ex: 'Je prépare le tableau de bord RH.' },
    { fr: "l'indicateur", pt: 'o indicador', g: 'm', ex: 'Quels indicateurs suivez-vous ?' },
    { fr: 'pour cent (%)', pt: 'por cento (%)', pos: 'expr', ex: 'Vingt-cinq pour cent des ingénieurs sont des femmes.' },
    { fr: 'la moitié', pt: 'a metade', g: 'f', ex: 'La moitié de l\'équipe est en télétravail.' },
    { fr: 'manquer', pt: 'faltar', pos: 'v', ex: 'Il manque deux développeurs seniors.' },
    { fr: 'augmenter', pt: 'aumentar', pos: 'v', ex: 'Les départs augmentent.' },
    { fr: 'baisser', pt: 'baixar, diminuir', pos: 'v', ex: "L'engagement baisse dans l'équipe Données." }
  ],
  reading: {
    genre: 'resumo do painel de RH',
    title: 'Tableau de bord RH — octobre',
    text: "Ce mois-ci, l'effectif de Nuvio est de cent quatre-vingt-deux salariés. Il y a eu onze embauches et six départs. Sur un an, le taux de départ est de douze pour cent : c'est un peu plus que l'année dernière.\n\n" +
      "Dans l'Ingénierie, il y a beaucoup de développeurs juniors, mais pas assez de seniors : il en manque quatre. Un manager sur trois a plus de dix personnes dans son équipe. C'est trop pour bien accompagner chaque personne.\n\n" +
      "Les femmes représentent quarante-cinq pour cent de l'entreprise, mais seulement vingt-cinq pour cent de l'Ingénierie. Il y en a très peu dans les postes de direction technique.\n\n" +
      "L'enquête d'[[engagement|engajamento]] montre de bons résultats : soixante-dix-huit sur cent. Mais dans l'équipe Données, le score baisse. Les gens parlent de trop de réunions et de peu de [[visibilité|visibilidade, clareza]] sur les priorités.\n\n" +
      "Prochaine étape : présenter ces chiffres aux responsables et choisir deux actions.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de départs il y a eu ce mois-ci ?', options: ['Six.', 'Onze.', 'Douze.', 'Quatre.'], answer: 0,
        explanationPt: '"Il y a eu onze embauches et six départs."' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Le taux de départ est plus bas que l\'année dernière.', answer: 'F', explanationPt: '"c\'est un peu plus que l\'année dernière".' },
        { text: 'Il manque quatre développeurs seniors.', answer: 'V', explanationPt: '"pas assez de seniors : il en manque quatre".' },
        { text: 'Les femmes représentent vingt-cinq pour cent de l\'Ingénierie.', answer: 'V', explanationPt: '"seulement vingt-cinq pour cent de l\'Ingénierie".' },
        { text: 'Les salaires vont augmenter.', answer: 'NM', explanationPt: 'O texto não fala de salários.' }
      ] },
      { type: 'multiple_choice', prompt: 'Quel est le problème dans l\'équipe Données ?', options: ['Trop de réunions et peu de visibilité.', 'Pas assez de réunions.', 'Trop de seniors.', 'Trop de télétravail.'], answer: 0,
        explanationPt: '"Les gens parlent de trop de réunions et de peu de visibilité sur les priorités."' },
      { type: 'match', prompt: 'Ligue o número ao indicador.', pairs: [
        ['cent quatre-vingt-deux', "l'effectif"], ['onze', 'les embauches'], ['douze pour cent', 'le taux de départ'], ['soixante-dix-huit sur cent', "l'engagement"] ] }
    ]
  },
  listening: {
    genre: 'reunião',
    title: 'Marina apresenta os números para a Laura',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'L', name: 'Laura', gender: 'f' }],
    script: [
      { speaker: 'M', text: 'Laura, j\'ai les chiffres de ton équipe pour octobre.' },
      { speaker: 'L', text: 'Super. Combien de départs ?' },
      { speaker: 'M', text: 'Il y en a eu quatre. Trois développeurs et une designer.' },
      { speaker: 'L', text: 'Quatre ! C\'est beaucoup. Pourquoi ils sont partis ?' },
      { speaker: 'M', text: 'Deux personnes parlent du salaire. Les deux autres parlent du manque de perspectives.' },
      { speaker: 'L', text: 'Et des seniors, on en a assez ?' },
      { speaker: 'M', text: 'Non, il en manque quatre. Et tes managers ont trop de personnes : douze en moyenne.' },
      { speaker: 'L', text: 'D\'accord. Qu\'est-ce que tu proposes ?' },
      { speaker: 'M', text: 'Deux actions : nommer deux nouveaux managers et faire un plan de carrière pour les développeurs.' },
      { speaker: 'L', text: 'Ça me plaît. On en parle avec Thomas jeudi ?' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de personnes ont quitté l\'équipe de Laura ?', options: ['Quatre.', 'Trois.', 'Douze.', 'Deux.'], answer: 0,
        explanationPt: '"Il y en a eu quatre. Trois développeurs et une designer."' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Deux personnes sont parties à cause du salaire.', answer: 'V', explanationPt: '"Deux personnes parlent du salaire."' },
        { text: 'Les managers ont huit personnes en moyenne.', answer: 'F', explanationPt: 'Doze em média (douze en moyenne).' },
        { text: 'Laura n\'aime pas les propositions de Marina.', answer: 'F', explanationPt: '"Ça me plaît."' },
        { text: 'La designer est partie chez un concurrent.', answer: 'NM', explanationPt: 'Não se diz para onde ela foi.' }
      ] },
      { type: 'listen_choose', audio: 'Non, il en manque quatre.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Non, il en manque quatre.', 'Non, il manque quatre.', 'Non, il en mange quatre.', 'Non, il en reste quatre.'], answer: 0 },
      { type: 'dictation', text: 'Combien de départs ?' }
    ]
  },
  grammar: {
    topicId: 'pronoun-en',
    title: 'Quantidades e o pronome en para falar de números',
    explanationPt: 'Para falar de indicadores, você precisa de **quantidades**: ***beaucoup de, peu de, assez de, trop de, plus de, moins de*** + substantivo, sempre com **de** (sem artigo): *beaucoup **de** départs, pas assez **de** seniors*.\n\n' +
      'O pronome **en** substitui a coisa contada, para não repetir: *Combien de départs ? — Il **y en a eu** quatre.* / *Des seniors, on **en** a assez ?* / *Il **en** manque deux.*\n\n' +
      'Com número ou quantidade, o número fica no fim: *J\'**en** ai recruté **dix***.',
    table: { head: ['Pergunta', 'Resposta com en'], rows: [
      ['Combien de salariés vous avez ?', "Nous en avons cent quatre-vingt-deux."], ['Il y a des femmes dans la direction ?', 'Oui, il y en a trois.'],
      ['Tu as assez de managers ?', "Non, je n'en ai pas assez."], ['Il manque combien de développeurs ?', 'Il en manque quatre.']
    ] },
    examples: [
      { fr: 'Il y a beaucoup de juniors et peu de seniors.', pt: 'Há muitos juniores e poucos seniores.' },
      { fr: 'Combien de départs ? Il y en a eu six.', pt: 'Quantas saídas? Houve seis.' },
      { fr: "Nous n'avons pas assez de managers.", pt: 'Não temos gestores suficientes.' },
      { fr: 'Un manager sur trois a trop de personnes.', pt: 'Um em cada três gestores tem gente demais.' }
    ],
    ptComparison: 'Em português dizemos "houve seis" sem pronome; em francês o **en é obrigatório** quando o substantivo some: *Il **y en a eu** six* (nunca ~~il y a eu six~~ sozinho como resposta).\n\n' +
      '**"Um em cada três"** = *un **sur** trois*. **"Doze por cento"** = *douze **pour cent***. Decimais usam vírgula, como no Brasil: *3,5 %* = *trois virgule cinq pour cent*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com de, en ou un sur.', bank: ['de', 'en', 'sur'], items: [
      { text: 'Il y a trop ___ réunions.', answers: ['de'] },
      { text: 'Des seniors ? Il ___ manque deux.', answers: ['en'] },
      { text: 'Un salarié ___ cinq travaille en télétravail.', answers: ['sur'] },
      { text: 'Nous avons beaucoup ___ candidats.', answers: ['de'] }
    ] },
    { type: 'multiple_choice', prompt: '— Combien d\'embauches ce mois-ci ? — ...', options: ['Il y en a eu onze.', 'Il y a eu onze.', 'Il en y a eu onze.', 'Il y a en eu onze.'], answer: 0,
      explanationPt: 'Ordem fixa: il y en a / il y en a eu.' },
    { type: 'multiple_choice', prompt: 'Como se lê "12 %" numa apresentação?', options: ['douze pour cent', 'douze par cent', 'douze sur cent pour', 'douze cents'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Nous n'avons pas assez de développeurs seniors.", translation: 'Não temos desenvolvedores seniores suficientes.' }
  ],
  tipForBrazilians: '**Dados sem jargão.** A vaga de HRBP pede "people analytics" que _influenciem_ decisões. Em francês, uma estrutura simples funciona muito bem: ***le chiffre → ce que ça veut dire → ce que je propose***. *"Le taux de départ est de 12 %. Ça veut dire que nous perdons un ingénieur par mois. Je propose deux actions."*\n\n' +
    '**Números em Luxemburgo:** usa-se o francês da França (*soixante-dix, quatre-vingt-dix*), não o *septante/nonante* da Bélgica e da Suíça — mas você vai ouvir os dois, porque muitos colegas são belgas.'
});
