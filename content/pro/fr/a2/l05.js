LUX.registerProLesson({
  id: 'pro-fr-a2-l05', lang: 'fr', level: 'A2', order: 5, sector: 'Tecnologia',
  title: 'Bienvenue ! Le parcours d\'intégration', titlePt: 'Bem-vindo! O programa de integração',
  names: ['Marina', 'Nuvio', 'Kevin', 'Paul', 'Julie', 'Kirchberg', 'Luxembourg'],
  objectives: [
    'Dar instruções claras com o imperativo (formal e informal).',
    'Explicar onde ficam as coisas no escritório com preposições de lugar e o pronome y.',
    'Conhecer o vocabulário do onboarding numa empresa de tecnologia.'
  ],
  vocabulary: [
    { fr: "l'intégration", pt: 'a integração (onboarding)', g: 'f', ex: "Le parcours d'intégration dure trois mois." },
    { fr: 'le nouvel arrivant / la nouvelle arrivante', pt: 'o(a) recém-chegado(a), novo(a) funcionário(a)', ex: 'Chaque nouvel arrivant a un parrain.' },
    { fr: 'le parrain / la marraine', pt: 'o padrinho / a madrinha (colega de referência, buddy)', ex: 'Ta marraine s\'appelle Julie.' },
    { fr: "l'ordinateur", pt: 'o computador', g: 'm', ex: 'Ton ordinateur est prêt.' },
    { fr: 'le badge', pt: 'o crachá', g: 'm', ex: "N'oublie pas ton badge !" },
    { fr: "l'étage", pt: 'o andar', g: 'm', ex: 'La cafétéria est au troisième étage.' },
    { fr: 'la salle de réunion', pt: 'a sala de reunião', g: 'f', ex: 'La salle de réunion est à côté de la cuisine.' },
    { fr: 'réserver', pt: 'reservar', pos: 'v', ex: 'Réservez une salle dans le calendrier.' },
    { fr: 'signer', pt: 'assinar', pos: 'v', ex: 'Signez votre contrat avant lundi.' },
    { fr: 'remplir', pt: 'preencher', pos: 'v', ex: 'Remplissez le formulaire en ligne.' },
    { fr: "n'hésitez pas à", pt: 'fique à vontade para, não hesite em', pos: 'expr', ex: "N'hésitez pas à poser des questions." },
    { fr: 'à côté de', pt: 'ao lado de', pos: 'expr', ex: 'Mon bureau est à côté de la fenêtre.' }
  ],
  reading: {
    genre: 'guia de integração',
    title: 'Votre première semaine chez Nuvio',
    text: "Bienvenue chez Nuvio ! Voici quelques conseils pour bien commencer.\n\n" +
      "Avant votre arrivée : signez votre contrat en ligne et remplissez le formulaire pour votre badge. Envoyez-nous aussi une photo pour l'annuaire.\n\n" +
      "Lundi : venez à neuf heures et demie au rez-de-chaussée, à l'accueil. Votre parrain ou votre marraine vous attend. Ensuite, passez au service informatique, au premier étage : vous y recevez votre ordinateur et vos accès.\n\n" +
      "Pendant la semaine : rencontrez votre manager pour parler de vos objectifs des trois premiers mois. Prenez un café avec au moins cinq collègues d'autres équipes. Lisez les pages « Comment on travaille » sur l'intranet.\n\n" +
      "La cafétéria est au troisième étage, à côté de la grande salle de réunion. On y déjeune souvent ensemble le jeudi.\n\n" +
      "Et surtout : n'hésitez pas à poser des questions. Ici, personne ne connaît toutes les réponses le premier jour !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Où le nouvel arrivant reçoit son ordinateur ?', options: ['Au service informatique, au premier étage.', "À l'accueil, au rez-de-chaussée.", 'À la cafétéria.', 'Chez son manager.'], answer: 0,
        explanationPt: '"passez au service informatique, au premier étage : vous y recevez votre ordinateur".' },
      { type: 'order_events', prompt: 'Coloque as etapas na ordem do guia.', items: [
        'Signer le contrat en ligne.', "Arriver à l'accueil lundi à neuf heures et demie.", 'Passer au service informatique.', 'Rencontrer son manager pendant la semaine.'
      ] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La cafétéria est au troisième étage.', answer: 'V', explanationPt: '"La cafétéria est au troisième étage".' },
        { text: 'Le nouvel arrivant doit prendre un café avec au moins cinq collègues.', answer: 'V', explanationPt: '"Prenez un café avec au moins cinq collègues".' },
        { text: 'Le premier jour, on arrive à huit heures.', answer: 'F', explanationPt: 'Às nove e meia (neuf heures et demie).' },
        { text: 'Il y a un parking pour les vélos.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com o imperativo do texto.', bank: ['signez', 'venez', 'passez', 'prenez'], items: [
        { text: '___ votre contrat en ligne.', answers: ['signez'] },
        { text: '___ à neuf heures et demie.', answers: ['venez'] },
        { text: '___ au service informatique.', answers: ['passez'] },
        { text: '___ un café avec vos collègues.', answers: ['prenez'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Marina recebe um novo desenvolvedor',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'K', name: 'Kevin', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Bonjour Kevin, bienvenue ! Tu as trouvé facilement ?' },
      { speaker: 'K', text: 'Oui, j\'ai pris le tram jusqu\'au Kirchberg. C\'est très pratique.' },
      { speaker: 'M', text: 'Super. Viens, je te montre les locaux. Ici, c\'est l\'accueil. Prends ton badge.' },
      { speaker: 'K', text: 'Merci. Et mon équipe, elle est où ?' },
      { speaker: 'M', text: 'Au deuxième étage, à gauche de l\'ascenseur. On y va après le café.' },
      { speaker: 'K', text: 'D\'accord. Et pour l\'ordinateur ?' },
      { speaker: 'M', text: 'Va au service informatique, au premier. Demande Paul, il t\'attend.' },
      { speaker: 'K', text: 'Et je dois remplir des documents ?' },
      { speaker: 'M', text: 'Oui, un formulaire pour la mutuelle. Remplis-le cette semaine, pas aujourd\'hui. Aujourd\'hui, rencontre ton équipe !' },
      { speaker: 'K', text: 'Parfait, merci Marina.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Où est l\'équipe de Kevin ?', options: ["Au deuxième étage, à gauche de l'ascenseur.", 'Au premier étage.', "À l'accueil.", "Au troisième étage, à droite de l'ascenseur."], answer: 0,
        explanationPt: '"Au deuxième étage, à gauche de l\'ascenseur."' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Kevin est venu en tram.', answer: 'V', explanationPt: '"j\'ai pris le tram jusqu\'au Kirchberg".' },
        { text: 'Kevin doit remplir le formulaire aujourd\'hui.', answer: 'F', explanationPt: '"Remplis-le cette semaine, pas aujourd\'hui."' },
        { text: 'Paul travaille au service informatique.', answer: 'V', explanationPt: '"Va au service informatique, au premier. Demande Paul".' },
        { text: 'Kevin habite au Kirchberg.', answer: 'NM', explanationPt: 'Ele só diz que pegou o bonde até o Kirchberg.' }
      ] },
      { type: 'listen_choose', audio: 'On y va après le café.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['On y va après le café.', 'On va après le café.', 'On y va avant le café.', "On l'a après le café."], answer: 0 },
      { type: 'dictation', text: "Aujourd'hui, rencontre ton équipe !" }
    ]
  },
  grammar: {
    topicId: 'imperatif',
    title: 'Imperativo para instruções (vous e tu) + y',
    explanationPt: 'Em guias, e-mails de onboarding e mensagens rápidas, as instruções vêm no **imperativo** — o verbo **sem o sujeito**:\n\n' +
      '- ***vous*** (formal, documentos): *Signez, Venez, Remplissez, N\'hésitez pas.*\n' +
      '- ***tu*** (colegas, chat): *Prends, Viens, Va, Remplis.* Nos verbos em **-er**, o *tu* perde o **-s**: *tu passes → **Passe** !*, *tu vas → **Va** !*\n' +
      '- Com pronome no afirmativo, ele vem **depois**, com hífen: *Remplis**-le***, *Envoyez**-nous***. No negativo, volta para antes: *Ne **l\'**oublie pas.*\n\n' +
      '**Y** substitui um lugar: *Au service informatique ? Tu **y** reçois ton ordinateur.* / *On **y** va !*',
    table: { head: ['Verbo', 'tu', 'vous'], rows: [
      ['passer', 'passe', 'passez'], ['venir', 'viens', 'venez'], ['prendre', 'prends', 'prenez'], ['aller', 'va', 'allez'], ['remplir', 'remplis', 'remplissez'], ['être', 'sois', 'soyez']
    ] },
    examples: [
      { fr: 'Venez à neuf heures et demie à l\'accueil.', pt: 'Venha às nove e meia na recepção.' },
      { fr: 'Va au service informatique, au premier étage.', pt: 'Vá ao setor de TI, no primeiro andar.' },
      { fr: "N'oubliez pas votre badge.", pt: 'Não esqueça seu crachá.' },
      { fr: 'La cafétéria ? On y déjeune le jeudi.', pt: 'A cafeteria? A gente almoça lá na quinta.' }
    ],
    ptComparison: 'Em português falado, usamos o imperativo com "você" de forma bem livre (_vem cá, pega o crachá_). Em francês, escolha **um** registro e mantenha: ***tu*** com *viens, prends*; ***vous*** com *venez, prenez*. Misturar soa estranho.\n\n' +
      '**Andares:** *le rez-de-chaussée* é o térreo; *le premier étage* é o primeiro andar acima dele — igual ao Brasil.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Passe para o imperativo (forma pedida).', items: [
      { text: '___ votre contrat avant lundi. (signer, vous)', answers: ['Signez'] },
      { text: '___ ton badge à l\'accueil. (prendre, tu)', answers: ['Prends'] },
      { text: '___ au premier étage. (aller, tu)', answers: ['Va'] },
      { text: '___ le formulaire en ligne. (remplir, vous)', answers: ['Remplissez'] },
      { text: '___ patients avec les nouveaux. (être, vous)', answers: ['Soyez'] }
    ] },
    { type: 'multiple_choice', prompt: 'Como dizer "Preencha-o esta semana" (tu)?', options: ['Remplis-le cette semaine.', 'Le remplis cette semaine.', 'Remplis le cette semaine.', 'Remplit-le cette semaine.'], answer: 0,
      explanationPt: 'Imperativo afirmativo: pronome depois do verbo, com hífen.' },
    { type: 'multiple_choice', prompt: '— Tu vas à la cafétéria ? — Oui, ...', options: ["j'y vais.", 'je vais y.', "j'en vais.", 'je la vais.'], answer: 0,
      explanationPt: 'Y substitui o lugar (à la cafétéria) e vem antes do verbo.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "N'hésitez pas à poser des questions.", translation: 'Fique à vontade para fazer perguntas.' }
  ],
  tipForBrazilians: '**Onboarding é a primeira impressão.** Um bom parcours d\'intégration tem três momentos:\n- ***avant l\'arrivée*** (contrato, equipamento)\n- ***la première semaine*** (pessoas, ferramentas)\n- ***les trois premiers mois*** (objetivos, feedback)\n\nEm muitas empresas em Luxemburgo, o novo funcionário ganha um ***parrain/marraine*** (buddy).\n\n' +
    '**Mutuelle × CNS:** na França, *la mutuelle* é o plano de saúde complementar oferecido pela empresa. Em Luxemburgo, a saúde básica é coberta pela **CNS** (*Caisse nationale de santé*): o seguro-saúde público, e algumas empresas oferecem um seguro complementar.'
});
