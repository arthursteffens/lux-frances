LUX.registerLesson({
  id: 'a2-u05-l05', level: 'A2', unit: 5, order: 5, review: true,
  title: 'Se déplacer à Lyon', titlePt: 'Como se locomover em Lyon (revisão da unidade)',
  names: ['Lyon', 'TCL', 'Vélo', "v", 'Croix-Rousse', 'Fourvière', 'Saint-Exupéry', 'Rhônexpress', 'Part-Dieu', 'Ana', 'Annecy', 'Talloires', 'Semnoz', 'Lyonnais', 'Léa', "Vélo'v", 'A', 'B', 'C', 'D', 'Hôtel de Ville'],
  objectives: [
    'Revisar imperativo, preposições de lugar, à/en/au e o pronome y.',
    'Entender um guia prático de transportes públicos.',
    'Pedir informações turísticas e entender as respostas.'
  ],
  vocabulary: [
    { fr: 'se déplacer', pt: 'deslocar-se, locomover-se', pos: 'v', ex: 'Je me déplace à vélo.' },
    { fr: 'le ticket', pt: 'o bilhete (de metrô, ônibus)', g: 'm', ex: 'Un ticket coûte deux euros.' },
    { fr: "l'abonnement", pt: 'a assinatura, o passe mensal', g: 'm', d: true, ex: "J'ai un abonnement mensuel." },
    { fr: 'la ligne', pt: 'a linha', g: 'f', ex: 'Prenez la ligne A.' },
    { fr: 'la station', pt: 'a estação (de metrô)', g: 'f', ex: 'Descendez à la station Bellecour.' },
    { fr: 'le funiculaire', pt: 'o funicular, o bondinho', g: 'm', ex: 'Le funiculaire monte à Fourvière.' },
    { fr: "l'aéroport", pt: 'o aeroporto', g: 'm', ex: "L'aéroport est à trente minutes." },
    { fr: 'le plan', pt: 'o mapa (de cidade, de metrô)', g: 'm', ex: 'Vous avez un plan de la ville ?' },
    { fr: "l'office de tourisme", pt: 'o posto de informações turísticas', g: 'm', ex: "L'office de tourisme est sur la place." },
    { fr: 'gratuit(e)', pt: 'gratuito(a), de graça', pos: 'adj', ex: "C'est gratuit pour les enfants." },
    { fr: 'louer', pt: 'alugar', pos: 'v', ex: 'On peut louer un vélo.' },
    { fr: 'Je vous conseille de…', pt: 'Recomendo que você…', pos: 'expr', ex: 'Je vous conseille de réserver.' }
  ],
  reading: {
    genre: 'guia prático',
    title: 'Nouveaux Lyonnais : comment se déplacer ?',
    text: "Vous venez d'arriver à Lyon ? Bonne nouvelle : c'est une ville facile à découvrir sans voiture. Voici nos conseils.\n\n" +
      "Le métro et le tram. Lyon a quatre lignes de métro (A, B, C et D) et sept lignes de tram. Achetez vos tickets aux machines dans les stations ou sur l'application TCL. Un ticket coûte deux euros et il est valable une heure. Si vous restez longtemps, prenez un abonnement mensuel : c'est beaucoup moins cher. N'oubliez pas de valider votre ticket à chaque voyage !\n\n" +
      "Le funiculaire. Pour monter à Fourvière, ne montez pas à pied par la colline, sauf si vous êtes très sportif ! Prenez le funiculaire, à côté de la station de métro Vieux Lyon. Il y en a un toutes les dix minutes.\n\n" +
      "Le vélo. La ville a plus de cent kilomètres de pistes cyclables. Vous pouvez louer un vélo dans une des quatre cents stations Vélo'v. Les trente premières minutes sont gratuites avec l'abonnement. Attention : à la Croix-Rousse, ça monte beaucoup !\n\n" +
      "L'aéroport. L'aéroport Saint-Exupéry est à vingt-cinq kilomètres du centre. Pour y aller, prenez le Rhônexpress, un tram rapide qui part de la gare Part-Dieu. Le trajet dure trente minutes.\n\n" +
      "Et à pied ? Le centre de Lyon est petit. Entre Bellecour et l'Hôtel de Ville, il y a seulement quinze minutes de marche, et c'est la meilleure façon de découvrir la ville.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de lignes de métro il y a à Lyon ?', options: ['Quatre.', 'Sept.', 'Deux.', 'Cent.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Un ticket est valable une heure.', answer: 'V', explanationPt: '"il est valable une heure".' },
        { text: 'Le guide conseille de monter à Fourvière à pied.', answer: 'F', explanationPt: 'Recomenda o funicular, a não ser que você seja muito esportivo.' },
        { text: 'Il y a un funiculaire toutes les dix minutes.', answer: 'V', explanationPt: '"Il y en a un toutes les dix minutes."' },
        { text: 'Le métro fonctionne toute la nuit.', answer: 'NM', explanationPt: 'O horário do metrô não é citado.' },
        { text: "Le Rhônexpress part de l'Hôtel de Ville.", answer: 'F', explanationPt: 'Ele sai da estação Part-Dieu.' }
      ] },
      { type: 'match', prompt: 'Ligue o transporte à informação.', pairs: [['le funiculaire', 'pour monter à Fourvière'], ['le Rhônexpress', "pour aller à l'aéroport"], ["Vélo'v", 'trente minutes gratuites'], ['le ticket', 'deux euros']] },
      { type: 'multiple_choice', prompt: 'Dans « Pour y aller, prenez le Rhônexpress », « y » remplace :', options: ["à l'aéroport", 'à Fourvière', 'à la Croix-Rousse', 'au centre'], answer: 0 },
      { type: 'short_answer', prompt: 'A quantos quilômetros do centro fica o aeroporto?', answers: ['25'] }
    ]
  },
  listening: {
    genre: 'diálogo no posto de turismo',
    title: "À l'office de tourisme d'Annecy",
    speakers: [{ id: 'A', name: 'Ana', gender: 'f' }, { id: 'T', name: 'A atendente', gender: 'f' }],
    script: [
      { speaker: 'A', text: "Bonjour ! Je voudrais un plan de la ville, s'il vous plaît." },
      { speaker: 'T', text: "Bien sûr, voilà. Vous êtes ici, en face du vieux port. Qu'est-ce que vous voulez visiter ?" },
      { speaker: 'A', text: "J'ai une journée. Je voudrais voir le lac et la vieille ville." },
      { speaker: 'T', text: "Alors, commencez par la vieille ville : c'est juste derrière nous. Traversez le pont et suivez le canal." },
      { speaker: 'A', text: "Et pour faire le tour du lac ?" },
      { speaker: 'T', text: "Je vous conseille de prendre le bateau. Il part du quai, à côté du jardin, toutes les heures. Le tour dure une heure." },
      { speaker: 'A', text: "On peut s'arrêter dans un village ?" },
      { speaker: 'T', text: "Oui, à Talloires, par exemple. C'est très joli. Vous pouvez y déjeuner et reprendre le bateau l'après-midi." },
      { speaker: 'A', text: 'Parfait. Et le billet, je l\'achète où ?' },
      { speaker: 'T', text: "Au guichet, sur le quai. N'y allez pas trop tard en été, il y a souvent la queue !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: "Où commence la visite, selon l'employée ?", options: ['Par la vieille ville.', 'Par le lac.', 'Par Talloires.', 'Par le jardin.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La vieille ville est derrière l\'office de tourisme.', answer: 'V', explanationPt: '"c\'est juste derrière nous".' },
        { text: 'Le bateau part toutes les deux heures.', answer: 'F', explanationPt: 'Sai de hora em hora (toutes les heures).' },
        { text: 'On peut déjeuner à Talloires.', answer: 'V', explanationPt: '"Vous pouvez y déjeuner".' },
        { text: 'Le billet de bateau coûte vingt euros.', answer: 'NM', explanationPt: 'O preço não é citado.' }
      ] },
      { type: 'listen_choose', audio: "N'y allez pas trop tard en été.", prompt: 'O que a atendente aconselha?',
        options: ['Não ir lá tarde demais no verão.', 'Não ir lá no verão.', 'Ir lá bem tarde no verão.', 'Ir lá no inverno.'], answer: 0 },
      { type: 'dictation', text: 'Traversez le pont et suivez le canal.' },
      { type: 'dictation', text: "Vous êtes ici, en face du vieux port." }
    ]
  },
  grammar: {
    topicId: 'imperatif',
    title: 'Revisão: imperativo com pronomes',
    explanationPt: 'No **imperativo afirmativo**, os pronomes vêm **depois** do verbo, com hífen. No **negativo**, voltam para **antes**:\n\n' +
      '- *Vas-**y** !* × *N\'**y** va pas !*\n- *Prends-**en** !* × *N\'**en** prends pas !*\n- *Dépêche-**toi** !* × *Ne **te** dépêche pas !*\n- *Achète-**le** !* × *Ne **l\'**achète pas !*\n\n' +
      '**Me / te viram moi / toi** no afirmativo: *Appelle-**moi** ! Lève-**toi** !*\n\n' +
      'O **-s** volta no *tu* dos verbos em -er quando vem *y* ou *en*: *Va**s**-y ! Achète**s**-en !* (por causa da pronúncia).',
    table: { head: ['afirmativo', 'negativo', 'tradução'], rows: [
      ['Vas-y !', "N'y va pas !", 'Vai lá! / Não vá lá!'], ['Prends-en deux !', "N'en prends pas !", 'Pega dois! / Não pegue!'],
      ['Appelle-moi !', "Ne m'appelle pas !", 'Me liga! / Não me ligue!'], ['Asseyez-vous !', 'Ne vous asseyez pas !', 'Sentem-se! / Não se sentem!']
    ] },
    examples: [
      { fr: "Prenez le funiculaire, n'y montez pas à pied !", pt: 'Peguem o funicular, não subam a pé!' },
      { fr: 'Appelle-moi quand tu arrives.', pt: 'Me liga quando chegar.' },
      { fr: "Tu veux un ticket ? Achètes-en un à la machine.", pt: 'Quer um bilhete? Compra um na máquina.' },
      { fr: "Ne t'inquiète pas, ce n'est pas loin.", pt: 'Não se preocupe, não é longe.' }
    ],
    ptComparison: 'O português também muda a posição do pronome com o imperativo ("sente-se" × "não se sente"). O francês faz igual — e ainda põe hífen. A diferença: o francês usa *moi/toi* no afirmativo (*assieds-toi*), e não "te".'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o imperativo + pronome.', items: [
      { text: "Le musée ? (vous, aller + y) ___ le matin, il y a moins de monde.", answers: ['Allez-y', 'allez-y'] },
      { text: '(tu, se dépêcher) ___, le train part !', answers: ['Dépêche-toi', 'dépêche-toi'] },
      { text: '(tu, ne pas s\'inquiéter) ___ !', answers: ["Ne t'inquiète pas", "ne t'inquiète pas"] },
      { text: '(tu, m\'appeler) ___ ce soir.', answers: ['Appelle-moi', 'appelle-moi'] }
    ] },
    { type: 'fill_blank', prompt: 'Complete com à, en, au, aux, y ou en (pronome).', items: [
      { text: "L'été prochain, nous allons ___ Portugal.", answers: ['au'] },
      { text: "Ma sœur habite ___ Annecy.", answers: ['à'] },
      { text: "Marseille ? J'___ suis allé deux fois.", answers: ['y'] },
      { text: 'On va au travail ___ métro.', answers: ['en'] }
    ] },
    { type: 'multiple_choice', prompt: '"O banco fica em frente à estação."', options: ['La banque est en face de la gare.', 'La banque est devant de la gare.', 'La banque est en face la gare.', 'La banque est à face de la gare.'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "N'y allez pas trop tard !", translation: 'Não vão lá muito tarde!' }
  ],
  tipForBrazilians: '**Validar é obrigatório!** Na França, ter o bilhete não basta: é preciso **valider** (passar na máquina) a cada viagem de metrô, ônibus ou bonde. Os fiscais (*les contrôleurs*) aplicam multa (*une amende*) de 50 € ou mais para quem não validou, mesmo com o bilhete na mão.'
});
