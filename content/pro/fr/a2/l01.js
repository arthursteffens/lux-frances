LUX.registerProLesson({
  id: 'pro-fr-a2-l01', lang: 'fr', level: 'A2', order: 1, sector: 'Tecnologia',
  title: 'Premier jour chez Nuvio', titlePt: 'Primeiro dia na Nuvio',
  names: ['Marina', 'Costa', 'Nuvio', 'Laura', 'Schmit', 'Nadia', 'Haddad', 'Kirchberg', 'Luxembourg', 'São Paulo'],
  objectives: [
    'Apresentar-se no trabalho: nome, cargo, área e trajetória em poucas frases.',
    'Falar da equipe e da rotina de trabalho com o presente (être, avoir, travailler, s\'occuper de).',
    'Saber quando usar tu ou vous numa empresa de tecnologia.'
  ],
  vocabulary: [
    { fr: 'les ressources humaines (RH)', pt: 'os recursos humanos (RH)', g: 'f', ex: 'Je travaille dans les ressources humaines.' },
    { fr: "l'entreprise", pt: 'a empresa', g: 'f', ex: "L'entreprise a deux cents salariés." },
    { fr: "l'équipe", pt: 'a equipe', g: 'f', ex: "Mon équipe est petite mais très efficace." },
    { fr: 'le poste', pt: 'o cargo, a vaga', g: 'm', ex: 'Je commence un nouveau poste aujourd\'hui.' },
    { fr: 'le / la collègue', pt: 'o(a) colega de trabalho', ex: 'Mes collègues sont très sympas.' },
    { fr: 'le / la responsable', pt: 'o(a) responsável, o(a) gestor(a)', ex: 'Laura est responsable de l\'ingénierie.' },
    { fr: "s'occuper de", pt: 'cuidar de, ser responsável por', pos: 'v', ex: "Je m'occupe du recrutement." },
    { fr: 'accompagner', pt: 'acompanhar, apoiar', pos: 'v', ex: "J'accompagne les managers." },
    { fr: 'la réunion', pt: 'a reunião', g: 'f', ex: 'La réunion commence à dix heures.' },
    { fr: 'le télétravail', pt: 'o trabalho remoto', g: 'm', ex: 'Je suis en télétravail le vendredi.' },
    { fr: 'le bureau', pt: 'o escritório; a mesa de trabalho', g: 'm', ex: 'Le bureau est au Kirchberg.' },
    { fr: 'ravi(e) de', pt: 'muito feliz em, encantado(a) em', pos: 'adj', ex: 'Je suis ravie de vous rencontrer.' }
  ],
  reading: {
    genre: 'mensagem no chat interno',
    title: 'Canal #bienvenue — lundi, 9 h 15',
    text: "Bonjour à toutes et à tous !\n\n" +
      "Je m'appelle Marina Costa et je suis la nouvelle [[HR Business Partner|parceira de negócios de RH]] de Nuvio. Je suis brésilienne, de São Paulo, et j'habite au Luxembourg depuis un mois. Je travaille dans les ressources humaines depuis huit ans, surtout dans des entreprises de technologie.\n\n" +
      "Mon rôle ici ? J'accompagne les équipes Produit et Ingénierie. Je m'occupe de l'organisation des équipes, du développement des managers et des talents. Je travaille avec Nadia Haddad, notre directrice des ressources humaines, et avec les responsables de chaque équipe.\n\n" +
      "Je suis au bureau du Kirchberg le mardi, le mercredi et le jeudi. Le lundi et le vendredi, je suis en télétravail. Mon agenda est ouvert : si vous avez une question, une idée ou un problème, écrivez-moi ou réservez trente minutes avec moi.\n\n" +
      "Je parle portugais, anglais et un peu de français. J'apprends le français tous les jours, alors soyez patients avec moi !\n\n" +
      "Je suis ravie de faire partie de l'équipe. À bientôt !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Quel est le poste de Marina ?', options: ['HR Business Partner.', 'Directrice des ressources humaines.', 'Responsable de l\'ingénierie.', 'Développeuse.'], answer: 0,
        explanationPt: '"je suis la nouvelle HR Business Partner de Nuvio". A diretora de RH é a Nadia.' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Marina habite au Luxembourg depuis un an.', answer: 'F', explanationPt: '"depuis un mois" — há um mês.' },
        { text: 'Marina accompagne les équipes Produit et Ingénierie.', answer: 'V', explanationPt: '"J\'accompagne les équipes Produit et Ingénierie."' },
        { text: 'Le vendredi, Marina travaille à la maison.', answer: 'V', explanationPt: '"Le lundi et le vendredi, je suis en télétravail."' },
        { text: 'Marina a des enfants.', answer: 'NM', explanationPt: 'O texto não fala de família.' }
      ] },
      { type: 'multiple_choice', prompt: 'Combien de jours par semaine Marina est au bureau ?', options: ['Trois jours.', 'Deux jours.', 'Cinq jours.', 'Un jour.'], answer: 0,
        explanationPt: 'Mardi, mercredi et jeudi: três dias no escritório.' },
      { type: 'match', prompt: 'Ligue cada pessoa ao papel dela no texto.', pairs: [
        ['Marina', 'accompagne les équipes'], ['Nadia', 'dirige les ressources humaines'], ['les responsables', 'travaillent avec Marina'] ] },
      { type: 'fill_blank', prompt: 'Complete com o verbo do texto (presente).', bank: ['travaille', 'accompagne', 'apprends', "m'occupe"], items: [
        { text: 'Je ___ dans les ressources humaines depuis huit ans.', answers: ['travaille'] },
        { text: "Je ___ de l'organisation des équipes.", answers: ["m'occupe"] },
        { text: "J'___ les équipes Produit et Ingénierie.", answers: ['accompagne'] },
        { text: "J'___ le français tous les jours.", answers: ['apprends'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Café com a responsável pela engenharia',
    speakers: [{ id: 'L', name: 'Laura', gender: 'f' }, { id: 'M', name: 'Marina', gender: 'f' }],
    script: [
      { speaker: 'L', text: 'Bonjour ! Tu es Marina, la nouvelle HR Business Partner ?' },
      { speaker: 'M', text: 'Oui, c\'est moi. Bonjour ! Et vous êtes… ?' },
      { speaker: 'L', text: 'Laura Schmit, je suis responsable de l\'ingénierie. Ici, on se tutoie, hein !' },
      { speaker: 'M', text: 'D\'accord, pas de problème. Ton équipe est grande ?' },
      { speaker: 'L', text: 'Nous sommes soixante personnes, en six équipes. Les développeurs travaillent surtout en anglais.' },
      { speaker: 'M', text: 'Et les réunions, c\'est en anglais ou en français ?' },
      { speaker: 'L', text: 'Les deux. Avec les clients, c\'est souvent en français. Tu parles très bien, tu sais.' },
      { speaker: 'M', text: 'Merci, mais je cherche encore mes mots ! Tu as un moment cette semaine ? Je voudrais comprendre tes priorités.' },
      { speaker: 'L', text: 'Bien sûr. Jeudi à quatorze heures, au troisième étage ?' },
      { speaker: 'M', text: 'Parfait. À jeudi !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de personnes travaillent dans l\'équipe de Laura ?', options: ['Soixante.', 'Six.', 'Seize.', 'Soixante-dix.'], answer: 0,
        explanationPt: '"Nous sommes soixante personnes, en six équipes."' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Dans l\'entreprise, on se vouvoie.', answer: 'F', explanationPt: '"Ici, on se tutoie" — todos se tratam por tu.' },
        { text: 'Les réunions avec les clients sont souvent en français.', answer: 'V', explanationPt: '"Avec les clients, c\'est souvent en français."' },
        { text: 'Laura parle portugais.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'multiple_choice', prompt: 'Quand est la réunion entre Marina et Laura ?', options: ['Jeudi à quatorze heures.', 'Mardi à quatre heures.', 'Jeudi à quatre heures.', 'Mercredi à quatorze heures.'], answer: 0,
        explanationPt: '"Jeudi à quatorze heures, au troisième étage."' },
      { type: 'listen_choose', audio: 'Ici, on se tutoie, hein !', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Ici, on se tutoie, hein !', 'Ici, on se vouvoie, hein !', 'Ici, on se voit, hein !', 'Ici, on se tue, hein !'], answer: 0 },
      { type: 'dictation', text: 'Je voudrais comprendre tes priorités.' }
    ]
  },
  grammar: {
    topicId: 'present-revisao',
    title: 'Apresentar-se no trabalho com o presente',
    explanationPt: 'Para falar de **quem você é** e **o que você faz** no trabalho, o presente resolve quase tudo:\n\n' +
      '- ***être*** + cargo (sem artigo!): *Je suis HR Business Partner.* / *Elle est développeuse.*\n' +
      '- ***travailler dans / chez / avec***: *dans les RH* (área), *chez Nuvio* (empresa), *avec les managers* (pessoas).\n' +
      '- ***s\'occuper de*** = cuidar de, ser responsável por: *je m\'occupe **du** recrutement* (de + le = du).\n' +
      '- **depuis** + duração, com o verbo no **presente**: *Je travaille dans les RH depuis huit ans* = trabalho com RH **há** oito anos.',
    table: { head: ['', 'être', 'travailler', "s'occuper"], rows: [
      ['je / j\'', 'suis', 'travaille', "m'occupe"], ['tu', 'es', 'travailles', "t'occupes"], ['il / elle / on', 'est', 'travaille', "s'occupe"],
      ['nous', 'sommes', 'travaillons', 'nous occupons'], ['vous', 'êtes', 'travaillez', 'vous occupez'], ['ils / elles', 'sont', 'travaillent', "s'occupent"]
    ] },
    examples: [
      { fr: 'Je suis responsable des talents chez Nuvio.', pt: 'Sou responsável pelos talentos na Nuvio.' },
      { fr: 'Elle travaille dans une entreprise de technologie.', pt: 'Ela trabalha numa empresa de tecnologia.' },
      { fr: "Nous nous occupons de l'intégration des nouveaux salariés.", pt: 'Nós cuidamos da integração dos novos funcionários.' },
      { fr: 'Je travaille au Luxembourg depuis un mois.', pt: 'Trabalho em Luxemburgo há um mês.' }
    ],
    ptComparison: 'Duas armadilhas para brasileiros:\n\n' +
      '1. **Sem artigo antes do cargo** depois de *être*: *Je suis ~~une~~ manager.* → ***Je suis manager.*** Mas com adjetivo o artigo volta: *C\'est **une** excellente manager.*\n' +
      '2. **"Há + tempo" vira depuis + presente**: "trabalho aqui **há** dois anos" = *je travaille ici **depuis** deux ans* (nunca ~~j\'ai travaillé ici depuis~~).'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no presente.', items: [
      { text: 'Nous ___ quarante personnes dans l\'équipe. (être)', answers: ['sommes'] },
      { text: 'Elle ___ du recrutement. (s\'occuper)', answers: ["s'occupe"] },
      { text: 'Vous ___ chez Nuvio depuis longtemps ? (travailler)', answers: ['travaillez'] },
      { text: 'Les managers ___ beaucoup de réunions. (avoir)', answers: ['ont'] },
      { text: 'Tu ___ en télétravail le vendredi ? (être)', answers: ['es'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual frase está correta?', options: ['Je suis HR Business Partner.', 'Je suis une HR Business Partner.', "J'ai HR Business Partner.", 'Je suis de HR Business Partner.'], answer: 0,
      explanationPt: 'Depois de être, o cargo vem sem artigo.' },
    { type: 'multiple_choice', prompt: 'Como se diz "Trabalho com RH há oito anos"?', options: ['Je travaille dans les RH depuis huit ans.', "J'ai travaillé dans les RH depuis huit ans.", 'Je travaille dans les RH il y a huit ans.', 'Je travaille dans les RH pour huit ans.'], answer: 0,
      explanationPt: 'Ação que continua até hoje: depuis + presente.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je m'occupe du développement des managers.", translation: 'Cuido do desenvolvimento dos gestores.' },
    { type: 'match', prompt: 'Ligue a preposição ao uso.', pairs: [['travailler chez', 'Nuvio'], ['travailler dans', 'les ressources humaines'], ['travailler avec', 'les managers'], ['habiter au', 'Luxembourg']] }
  ],
  tipForBrazilians: '**Tu ou vous no trabalho?** Em empresas de tecnologia e start-ups, o *tutoiement* é comum entre colegas, inclusive com a diretoria. Mas **comece com vous** com quem você não conhece, com clientes e em e-mails formais — e passe para *tu* quando a outra pessoa propuser (*"On se tutoie ?"*, *"Tu peux me tutoyer"*). Errar para o lado do *vous* nunca ofende; o contrário, às vezes, sim.\n\n' +
    '**Pitch de 30 segundos:** tenha pronta uma apresentação curta — *nom, poste, équipe, depuis quand, ce que je fais*. Ela vai servir em reuniões, cafés e entrevistas.'
});
