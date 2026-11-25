LUX.registerLesson({
  id: 'a2-u01-l04', level: 'A2', unit: 1, order: 4,
  title: 'Le week-end, on fait quoi ?', titlePt: 'No fim de semana, o que a gente faz?',
  names: ['Lyon', 'Accueil', 'Tête', 'Or', 'Vieux', 'Saint-Jean', 'Bistrot', 'Vaise', 'Lucas', 'Hugo', 'Léa'],
  objectives: [
    'Falar de lazer e combinar programas para o fim de semana.',
    'Usar no presente os verbos irregulares mais frequentes: faire, aller, prendre, venir, pouvoir, vouloir.',
    'Usar jouer à (jogos, esportes) e faire de (atividades).'
  ],
  vocabulary: [
    { fr: 'le loisir', pt: 'o lazer, o passatempo', g: 'm', ex: 'Quels sont tes loisirs ?' },
    { fr: 'la randonnée', pt: 'a trilha, a caminhada', g: 'f', ex: 'On fait une randonnée dimanche.' },
    { fr: 'la soirée', pt: 'a noite (evento), a festa', g: 'f', ex: 'Il y a une soirée jeux au café.' },
    { fr: 'le jeu de société', pt: 'o jogo de tabuleiro', g: 'm', ex: "J'adore les jeux de société." },
    { fr: "l'atelier", pt: 'a oficina (curso prático)', g: 'm', ex: 'Un atelier cuisine.' },
    { fr: 'gratuit(e)', pt: 'grátis, gratuito', pos: 'adj', ex: 'La visite est gratuite.' },
    { fr: 'les baskets', pt: 'os tênis', g: 'f', ex: 'Prenez des baskets !' },
    { fr: 'le rendez-vous', pt: 'o encontro, o ponto de encontro', g: 'm', ex: 'Rendez-vous devant la cathédrale.' },
    { fr: 'libre', pt: 'livre, disponível', pos: 'adj', ex: 'Le soir, je suis libre.' },
    { fr: 'Dommage !', pt: 'Que pena!', pos: 'expr', ex: 'Tu ne viens pas ? Dommage !' },
    { fr: "s'inscrire", pt: 'inscrever-se', pos: 'v', ex: 'Vous pouvez vous inscrire sur le site.' }
  ],
  reading: {
    genre: 'programação de associação',
    title: 'Lyon Accueil — Le programme du week-end',
    text: "Vous êtes nouveau à Lyon ? Vous voulez rencontrer des gens ? Venez avec nous !\n\n" +
      "SAMEDI\n" +
      "10 h : Football au parc de la Tête d'Or. Tous les niveaux sont bienvenus. Prenez des [[baskets|tênis (calçado)]] et de l'eau !\n" +
      "15 h : Visite du Vieux Lyon avec un guide. Nous allons dans les [[traboules|passagens típicas de Lyon]], ces passages secrets entre les immeubles. [[Rendez-vous|ponto de encontro]] devant la cathédrale Saint-Jean.\n" +
      "20 h : Soirée jeux au café « Le Bistrot des amis ». On joue aux cartes et aux [[jeux de société|jogos de tabuleiro]].\n\n" +
      "DIMANCHE\n" +
      "9 h : [[Randonnée|trilha, caminhada]] au mont d'Or. Nous prenons le bus 40 à la gare de Vaise. Durée : quatre heures.\n" +
      "14 h : [[Atelier|oficina]] cuisine : faites des [[quenelles|bolinhos típicos de Lyon]], la spécialité lyonnaise !\n\n" +
      "Prix : les activités sont [[gratuites|grátis]], [[sauf|exceto]] l'atelier cuisine (12 euros).\n" +
      "Vous pouvez vous inscrire sur notre site. Attention : il y a quinze places par activité.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Quelle activité est payante ?', options: ["L'atelier cuisine.", 'La randonnée.', 'Le football.', 'La soirée jeux.'], answer: 0,
        explanationPt: '"les activités sont gratuites, sauf l\'atelier cuisine (12 euros)".' },
      { type: 'match', prompt: 'Ligue cada atividade ao horário.', pairs: [
        ['Football', 'samedi, 10 h'], ['Visite du Vieux Lyon', 'samedi, 15 h'], ['Soirée jeux', 'samedi, 20 h'], ['Randonnée', 'dimanche, 9 h'], ['Atelier cuisine', 'dimanche, 14 h']
      ] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Pour le football, il faut être très bon.', answer: 'F', explanationPt: '"Tous les niveaux sont bienvenus" — todos os níveis são bem-vindos.' },
        { text: 'La randonnée dure quatre heures.', answer: 'V' },
        { text: 'Les traboules sont des passages secrets.', answer: 'V' },
        { text: 'Le café est près de la gare.', answer: 'NM', explanationPt: 'O texto não diz onde fica o café.' }
      ] },
      { type: 'multiple_choice', prompt: 'Où est le rendez-vous pour la visite ?', options: ['Devant la cathédrale Saint-Jean.', "Au parc de la Tête d'Or.", 'À la gare de Vaise.', 'Au café.'], answer: 0 },
      { type: 'short_answer', prompt: 'Quantas vagas há por atividade? (escreva o número)', answers: ['15', 'quinze'],
        explanationPt: '"il y a quinze places par activité".' }
    ]
  },
  listening: {
    genre: 'conversa telefônica',
    title: 'Lucas liga para Hugo',
    speakers: [{ id: 'H', name: 'Hugo', gender: 'm' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'H', text: 'Allô ?' },
      { speaker: 'U', text: "Salut Hugo, c'est Lucas ! Tu vas bien ?" },
      { speaker: 'H', text: 'Très bien ! Alors, tu viens au foot samedi ?' },
      { speaker: 'U', text: 'Oui, bien sûr. Mais après, je vais à la visite du Vieux Lyon. Tu veux venir ?' },
      { speaker: 'H', text: "Je ne peux pas, je fais du vélo avec ma sœur l'après-midi. Mais le soir, je suis libre." },
      { speaker: 'U', text: 'Super ! Il y a une soirée jeux au Bistrot des amis, à vingt heures. Tu viens ?' },
      { speaker: 'H', text: "D'accord ! Je prends le métro et j'arrive. Léa vient aussi ?" },
      { speaker: 'U', text: "Non, elle travaille samedi soir. Elle fait de la natation dimanche matin, c'est tout." },
      { speaker: 'H', text: 'Dommage ! Bon, à samedi !' },
      { speaker: 'U', text: 'À samedi, Hugo !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Que fait Hugo samedi après-midi ?', options: ['Il fait du vélo avec sa sœur.', 'Il visite le Vieux Lyon.', 'Il travaille.', 'Il joue aux cartes.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Hugo va à la visite du Vieux Lyon.', answer: 'F', explanationPt: '"Je ne peux pas, je fais du vélo..."' },
        { text: 'Léa travaille samedi soir.', answer: 'V' },
        { text: 'La soirée jeux commence à vingt heures.', answer: 'V' },
        { text: 'Hugo a une voiture.', answer: 'NM', explanationPt: 'Ele diz que vai de metrô, mas não diz se tem carro.' }
      ] },
      { type: 'dictation', text: 'Je ne peux pas, je fais du vélo.' },
      { type: 'dictation', text: "Je prends le métro et j'arrive." },
      { type: 'listen_choose', audio: 'Elle fait de la natation dimanche matin.', prompt: 'Ouça: o que Léa faz no domingo?',
        options: ['Elle fait de la natation dimanche matin.', 'Elle fait de la danse dimanche matin.', 'Elle fait du vélo dimanche matin.', 'Elle fait de la natation samedi matin.'], answer: 0 }
    ]
  },
  grammar: {
    topicId: 'present-irregular',
    title: 'Verbos irregulares frequentes + jouer à / faire de',
    explanationPt: 'Seis verbos irregulares aparecem o tempo todo no dia a dia. Vale decorar:\n\n' +
      '- **faire** (fazer): fais, fais, fait, faisons, **faites**, font\n' +
      '- **aller** (ir): vais, vas, va, allons, allez, vont\n' +
      '- **prendre** (pegar, tomar): prends, prends, prend, prenons, prenez, **prennent**\n' +
      '- **venir** (vir): viens, viens, vient, venons, venez, viennent\n' +
      '- **pouvoir** (poder): peux, peux, peut, pouvons, pouvez, peuvent\n' +
      '- **vouloir** (querer): veux, veux, veut, voulons, voulez, veulent\n\n' +
      '**Jogos e esportes de bola:** *jouer à* → *jouer au foot, aux cartes*.\n' +
      '**Atividades em geral:** *faire de* → *faire du vélo, de la natation, de l\'escalade*.',
    table: { head: ['', 'à + artigo', 'de + artigo'], rows: [
      ['masculino', 'jouer **au** tennis', 'faire **du** vélo'], ['feminino', 'jouer **à la** pétanque', 'faire **de la** danse'],
      ['vogal', "jouer **à l'**...", "faire **de l'**escalade"], ['plural', 'jouer **aux** cartes', 'faire **des** randonnées']
    ] },
    examples: [
      { fr: 'Vous faites quoi ce week-end ?', pt: 'O que vocês vão fazer neste fim de semana?' },
      { fr: 'On va au cinéma ?', pt: 'A gente vai ao cinema?' },
      { fr: 'Ils prennent le bus 40.', pt: 'Eles pegam o ônibus 40.' },
      { fr: 'Je joue aux cartes avec mes amis.', pt: 'Jogo cartas com meus amigos.' }
    ],
    ptComparison: '**"On" = "a gente".** O verbo vai na 3ª pessoa do singular, como em português: *on va, on fait, on prend* (a gente vai, a gente faz).\n\n' +
      'Cuidado: o francês diz **vous faites** e **vous dites**, e não "faisez" ou "disez".\n\n' +
      'Tocar instrumento também é *jouer de*: *jouer de la guitare* (e não *toucher la guitare*).'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue o verbo no presente.', items: [
      { text: 'Nous ___ du sport le samedi. (faire)', answers: ['faisons'] },
      { text: 'Vous ___ au cinéma ? (aller)', answers: ['allez'] },
      { text: 'Ils ___ le bus. (prendre)', answers: ['prennent'] },
      { text: 'Tu ___ avec nous ? (venir)', answers: ['viens'] },
      { text: 'Je ne ___ pas ce soir. (pouvoir)', answers: ['peux'] },
      { text: 'Elles ___ un café. (vouloir)', answers: ['veulent'] },
      { text: 'Vous ___ quoi ce week-end ? (faire)', answers: ['faites'] }
    ] },
    { type: 'multiple_choice', prompt: 'Como se diz "Ele joga tênis"?', options: ['Il joue au tennis.', 'Il joue du tennis.', 'Il fait au tennis.', 'Il joue le tennis.'], answer: 0 },
    { type: 'multiple_choice', prompt: 'Como se diz "Ela toca violão"?', options: ['Elle joue de la guitare.', 'Elle joue à la guitare.', 'Elle touche la guitare.', 'Elle fait la guitare.'], answer: 0,
      explanationPt: 'Instrumento: jouer DE.' },
    { type: 'order_sentence', prompt: 'Monte a pergunta.', answer: 'On va au cinéma ce soir ?', translation: 'A gente vai ao cinema hoje à noite?' }
  ],
  tipForBrazilians: '**"Ce soir" e "le soir":** *ce soir* = hoje à noite (uma vez); *le soir* = à noite, em geral (todas as noites). O mesmo vale para *ce samedi* (neste sábado) × *le samedi* (aos sábados). Veja mais na página **Gerais › Dias da semana**.'
});
