LUX.registerLesson({
  id: 'a2-u01-l01', level: 'A2', unit: 1, order: 1,
  title: 'Enchanté !', titlePt: 'Muito prazer!',
  names: ['Lucas', 'Léa', 'Hugo', 'Belo Horizonte', 'Lyon', 'Croix-Rousse', 'Bellecour', 'Tête', 'Or', 'Brésil', 'Lyonnais'],
  objectives: [
    'Apresentar-se e apresentar outra pessoa (nome, origem, idade, profissão).',
    'Entender um texto curto de apresentação num fórum.',
    'Revisar o presente de être, avoir e dos verbos em -er.'
  ],
  vocabulary: [
    { fr: 'le / la colocataire', pt: 'colega de apartamento', g: 'mf', ex: 'Léa est ma colocataire.' },
    { fr: 'enchanté(e)', pt: 'muito prazer', pos: 'adj', ex: 'Enchanté, je m\'appelle Hugo.' },
    { fr: 'habiter', pt: 'morar', pos: 'v', ex: 'J\'habite à Lyon.' },
    { fr: 'travailler', pt: 'trabalhar', pos: 'v', ex: 'Je travaille dans une agence.' },
    { fr: 'le / la graphiste', pt: 'designer gráfico(a)', g: 'mf', ex: 'Lucas est graphiste.' },
    { fr: "l'infirmière", pt: 'a enfermeira', g: 'f', ex: 'Léa est infirmière.' },
    { fr: 'venir de', pt: 'vir de, ser de', pos: 'v', ex: 'Je viens du Brésil.' },
    { fr: 'le quartier', pt: 'o bairro', g: 'm', ex: 'J\'aime mon quartier.' },
    { fr: 'sympa', pt: 'simpático, legal', pos: 'adj', ex: 'Elle est très sympa.' },
    { fr: 'la ville', pt: 'a cidade', g: 'f', ex: 'Lyon est une grande ville.' },
    { fr: 'tous les soirs', pt: 'todas as noites', pos: 'expr', ex: 'J\'étudie tous les soirs.' },
    { fr: 'Tu fais quoi dans la vie ?', pt: 'O que você faz da vida?', pos: 'expr', ex: 'Et toi, tu fais quoi dans la vie ?' }
  ],
  reading: {
    genre: 'post de fórum',
    title: 'Forum « Nouveaux à Lyon »',
    text: "Bonjour à tous !\n\n" +
      "Je m'appelle Lucas, j'ai vingt-huit ans et je suis brésilien. Je viens de Belo Horizonte, une grande ville du Brésil. Depuis deux mois, j'habite à Lyon, dans le [[quartier|bairro]] de la Croix-Rousse. Je suis [[graphiste|designer gráfico]] et je travaille dans une petite agence de design, près de la place Bellecour.\n\n" +
      "J'habite avec Léa, ma [[colocataire|colega de apartamento]]. Elle est française, elle a vingt-six ans et elle est [[infirmière|enfermeira]] à l'hôpital. Elle est très [[sympa|legal, simpática|abreviação de « sympathique »]] et elle parle un peu portugais !\n\n" +
      "Je parle portugais, anglais et un peu français. J'étudie le français [[tous les soirs|todas as noites]], mais ce n'est pas facile : les [[Lyonnais|os habitantes de Lyon]] parlent vite !\n\n" +
      "J'aime le cinéma, la cuisine et le football. Le week-end, je cherche des amis pour visiter la ville ou jouer au foot. Vous êtes intéressés ? Écrivez-moi !\n\n" +
      "[[À bientôt|até breve]],\nLucas",
    exercises: [
      { type: 'multiple_choice', prompt: "D'où vient Lucas ?", options: ['De Belo Horizonte.', 'De Lyon.', 'De la Croix-Rousse.', 'De Bellecour.'], answer: 0,
        explanationPt: '"Je viens de Belo Horizonte, une grande ville du Brésil."' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas habite seul.', answer: 'F', explanationPt: 'Ele mora com a Léa, a colega de apartamento.' },
        { text: 'Léa est infirmière.', answer: 'V', explanationPt: '"elle est infirmière à l\'hôpital".' },
        { text: 'Léa parle un peu portugais.', answer: 'V', explanationPt: '"elle parle un peu portugais".' },
        { text: 'Lucas a un chat.', answer: 'NM', explanationPt: 'O texto não fala de animais.' },
        { text: 'Lucas travaille près de la place Bellecour.', answer: 'V', explanationPt: '"près de la place Bellecour".' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com a informação do texto (em número ou por extenso).', items: [
        { text: 'Lucas a ___ ans.', answers: ['vingt-huit', '28'] },
        { text: 'Il habite à Lyon depuis ___ mois.', answers: ['deux', '2'] },
        { text: 'Léa a ___ ans.', answers: ['vingt-six', '26'] }
      ], explanationPt: 'Em francês, a idade se diz com "avoir": "il a vingt-huit ans".' },
      { type: 'multiple_choice', prompt: "Pourquoi le français n'est pas facile pour Lucas ?", options: ['Les Lyonnais parlent vite.', "Il n'étudie pas.", 'Léa ne parle pas français.', 'Il travaille le soir.'], answer: 0,
        explanationPt: '"ce n\'est pas facile : les Lyonnais parlent vite !"' },
      { type: 'match', prompt: 'Ligue cada palavra à tradução.', pairs: [
        ['graphiste', 'designer gráfico'], ['infirmière', 'enfermeira'], ['colocataire', 'colega de apartamento'], ['quartier', 'bairro'], ['tous les soirs', 'todas as noites']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Léa apresenta Lucas a Hugo',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'H', name: 'Hugo', gender: 'm' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: 'Hugo, je te présente Lucas, mon nouveau colocataire.' },
      { speaker: 'H', text: 'Salut Lucas, enchanté ! Tu es anglais ?' },
      { speaker: 'U', text: 'Non, je suis brésilien. Je viens de Belo Horizonte.' },
      { speaker: 'H', text: 'Ah, super ! Et tu fais quoi dans la vie ?' },
      { speaker: 'U', text: 'Je suis graphiste. Et toi ?' },
      { speaker: 'H', text: 'Moi, je suis prof de sport dans un collège. Tu aimes le foot ?' },
      { speaker: 'U', text: "Oui, j'adore ! Je joue depuis l'âge de dix ans." },
      { speaker: 'H', text: "Génial ! On joue le samedi matin au parc de la Tête d'Or. Tu viens avec nous ?" },
      { speaker: 'U', text: 'Avec plaisir ! À quelle heure ?' },
      { speaker: 'H', text: 'À dix heures. Léa a mon numéro.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quelle est la profession de Hugo ?', options: ['Prof de sport.', 'Graphiste.', 'Infirmier.', 'Étudiant.'], answer: 0,
        explanationPt: '"je suis prof de sport dans un collège". "Prof" é a forma curta de "professeur".' },
      { type: 'listen_choose', audio: 'Je viens de Belo Horizonte.', prompt: 'Ouça e escolha o que Lucas disse.',
        options: ['Je viens de Belo Horizonte.', 'Je vis à Belo Horizonte.', 'Je vais à Belo Horizonte.', 'Je reviens de Belo Horizonte.'], answer: 0,
        explanationPt: '"Je viens de" = eu venho de / sou de.' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas est anglais.', answer: 'F', explanationPt: '"Non, je suis brésilien."' },
        { text: "Lucas joue au foot depuis l'âge de dix ans.", answer: 'V', explanationPt: '"Je joue depuis l\'âge de dix ans."' },
        { text: 'Hugo a trente ans.', answer: 'NM', explanationPt: 'A idade de Hugo não é mencionada.' },
        { text: 'Ils jouent au foot le dimanche.', answer: 'F', explanationPt: 'É no sábado de manhã: "le samedi matin".' }
      ] },
      { type: 'dictation', text: 'Tu fais quoi dans la vie ?', explanationPt: 'Pergunta informal para saber a profissão de alguém.' },
      { type: 'dictation', text: 'On joue le samedi matin.', explanationPt: '"Le samedi" (com artigo) = todo sábado.' },
      { type: 'multiple_choice', prompt: 'À quelle heure est le foot ?', options: ['À dix heures.', 'À deux heures.', 'À douze heures.', 'À six heures.'], answer: 0,
        explanationPt: '"À dix heures."' }
    ]
  },
  grammar: {
    topicId: 'present-revisao',
    title: 'Revisão do presente: être, avoir e verbos em -er',
    explanationPt: 'Para se apresentar, você usa principalmente três tipos de verbo no presente:\n\n' +
      '- **être** (ser/estar): nacionalidade, profissão, características → *Je suis brésilien.*\n' +
      '- **avoir** (ter): idade, família, coisas → *J\'ai vingt-huit ans.*\n' +
      '- **verbos em -er** (parler, habiter, travailler, aimer): tiram o -er e recebem **-e, -es, -e, -ons, -ez, -ent**.\n\n' +
      'Atenção: as formas *parle, parles, parlent* soam **iguais**. Só *parlons* e *parlez* soam diferente.',
    table: { head: ['', 'être', 'avoir', 'parler'], rows: [
      ['je / j\'', 'suis', 'ai', 'parle'], ['tu', 'es', 'as', 'parles'], ['il / elle / on', 'est', 'a', 'parle'],
      ['nous', 'sommes', 'avons', 'parlons'], ['vous', 'êtes', 'avez', 'parlez'], ['ils / elles', 'sont', 'ont', 'parlent']
    ] },
    examples: [
      { fr: 'Je suis graphiste.', pt: 'Sou designer gráfico.' },
      { fr: "Elle a vingt-six ans.", pt: 'Ela tem vinte e seis anos.' },
      { fr: 'Nous habitons à Lyon.', pt: 'Moramos em Lyon.' },
      { fr: "J'aime le cinéma.", pt: 'Gosto de cinema.' }
    ],
    ptComparison: 'Em português dizemos "tenho 28 anos", e em francês também se usa o verbo ter: **avoir**. Nunca diga *je suis 28 ans*.\n\n' +
      'Para profissão, o francês **não usa artigo**: *Je suis graphiste* (e não *je suis un graphiste*), igualzinho ao português "sou designer".\n\n' +
      'Antes de vogal ou h mudo, **je vira j\'**: *j\'ai, j\'habite, j\'aime*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue o verbo entre parênteses no presente.', items: [
      { text: 'Je ___ brésilien. (être)', answers: ['suis'] },
      { text: 'Nous ___ à Lyon. (habiter)', answers: ['habitons'] },
      { text: 'Elle ___ vingt-six ans. (avoir)', answers: ['a'] },
      { text: 'Vous ___ français ? (parler)', answers: ['parlez'] },
      { text: 'Ils ___ dans une agence. (travailler)', answers: ['travaillent'] },
      { text: 'Tu ___ le cinéma ? (aimer)', answers: ['aimes'] }
    ] },
    { type: 'multiple_choice', prompt: 'Como se diz "Eu tenho 28 anos"?', options: ["J'ai vingt-huit ans.", 'Je suis vingt-huit ans.', "J'ai vingt-huit années.", 'Je suis vingt-huit.'], answer: 0,
      explanationPt: 'Idade sempre com avoir + ans.' },
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ['Je suis graphiste.', 'Je suis un graphiste.', "J'ai graphiste.", 'Je graphiste.'], answer: 0,
      explanationPt: 'Profissão depois de être vem sem artigo.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je viens de Belo Horizonte.', translation: 'Eu sou de Belo Horizonte.' }
  ],
  tipForBrazilians: '**Enchanté ou enchantée?** Quem fala é que decide: um homem diz *enchanté*, uma mulher escreve *enchantée*. Na fala, as duas formas soam iguais. E "prof", "sympa" e "foot" são abreviações muito comuns no francês do dia a dia (professeur, sympathique, football).'
});
