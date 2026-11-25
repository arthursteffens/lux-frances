LUX.registerLesson({
  id: 'a2-u05-l02', level: 'A2', unit: 5, order: 2,
  title: 'Le quartier, mode d\'emploi', titlePt: 'O bairro: manual de instruções',
  names: ['Léa', 'Ana', 'Lucas', 'Croix-Rousse', 'Lyon', 'Gros', 'Caillou', 'Hénon', 'Saône', 'Rhône', 'Brésil', 'Austerlitz'],
  objectives: [
    'Localizar lugares e objetos: à côté de, en face de, entre, derrière, devant…',
    'Descrever um bairro e os serviços que ele tem.',
    'Entender alguém que procura um objeto em casa.'
  ],
  vocabulary: [
    { fr: 'à côté de', pt: 'ao lado de', pos: 'expr', ex: "La pharmacie est à côté de la banque." },
    { fr: 'en face de', pt: 'em frente a, do outro lado de', pos: 'expr', ex: "Le café est en face de l'école." },
    { fr: 'entre', pt: 'entre', pos: 'prep', ex: 'La poste est entre le cinéma et le parc.' },
    { fr: 'derrière', pt: 'atrás de', pos: 'prep', ex: "Le parking est derrière l'immeuble." },
    { fr: 'devant', pt: 'na frente de, diante de', pos: 'prep', ex: 'Je t\'attends devant la gare.' },
    { fr: 'près de / loin de', pt: 'perto de / longe de', pos: 'expr', ex: "C'est près de chez moi." },
    { fr: 'au coin de', pt: 'na esquina de', pos: 'expr', ex: "Au coin de la rue, il y a un bar." },
    { fr: 'sur / sous', pt: 'sobre, em cima de / debaixo de', pos: 'prep', ex: 'Les clés sont sous le coussin.' },
    { fr: 'la poste', pt: 'os correios', g: 'f', d: true, ex: 'Je vais à la poste.' },
    { fr: 'la banque', pt: 'o banco (instituição)', g: 'f', d: true, ex: 'La banque ferme à dix-sept heures.' },
    { fr: 'les clés', pt: 'as chaves', g: 'f', ex: "Je ne trouve pas mes clés !" },
    { fr: 'le canapé', pt: 'o sofá', g: 'm', ex: 'Tu dors sur le canapé.' }
  ],
  reading: {
    genre: 'guia escrito à mão',
    title: 'Pour Ana — Notre quartier, mode d\'emploi',
    text: "Chère Ana,\n\n" +
      "Bienvenue à la Croix-Rousse ! Lucas travaille jusqu'à dix-huit heures, alors voici un petit guide pour ta première journée.\n\n" +
      "En sortant de l'immeuble, tu es dans la rue d'Austerlitz. Juste en face, il y a une boulangerie : elle ouvre à sept heures, et les croissants sont excellents. À côté de la boulangerie, il y a une pharmacie, avec une croix verte.\n\n" +
      "Tourne à droite et marche jusqu'au boulevard. Au coin de la rue, tu vas voir un grand café avec une terrasse. C'est notre café préféré ! Entre le café et la banque, il y a un petit supermarché, ouvert même le dimanche matin.\n\n" +
      "Sur la place, devant la mairie, il y a le fameux « Gros Caillou », une énorme pierre. La vue sur Lyon est magnifique derrière le Gros Caillou : on voit le Rhône et toute la ville.\n\n" +
      "Pour le métro, la station Croix-Rousse est sur le boulevard, près de la place. La station Hénon est un peu plus loin.\n\n" +
      "Les clés : elles sont dans la petite boîte bleue, sur l'étagère, à côté de la porte d'entrée. Tu dors dans le salon, sur le canapé-lit. Il y a des serviettes dans l'armoire, sous les draps.\n\n" +
      "Bonne journée et à ce soir !\nLéa",
    exercises: [
      { type: 'multiple_choice', prompt: "Qu'est-ce qu'il y a en face de l'immeuble ?", options: ['Une boulangerie.', 'Une pharmacie.', 'Un grand café.', 'La mairie.'], answer: 0 },
      { type: 'match', prompt: 'Onde fica cada coisa?', pairs: [['la pharmacie', 'à côté de la boulangerie'], ['le supermarché', 'entre le café et la banque'], ['le Gros Caillou', 'devant la mairie'], ['les clés', "sur l'étagère"], ['les serviettes', 'sous les draps']] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Le supermarché est fermé le dimanche.', answer: 'F', explanationPt: '"ouvert même le dimanche matin".' },
        { text: 'Le Gros Caillou est une grande pierre.', answer: 'V', explanationPt: '"une énorme pierre".' },
        { text: 'La station Hénon est plus près que la station Croix-Rousse.', answer: 'F', explanationPt: 'Hénon fica um pouco mais longe.' },
        { text: 'Ana dort dans la chambre de Lucas.', answer: 'F', explanationPt: 'Ela dorme no sofá-cama da sala.' },
        { text: 'Il y a un marché sur la place le mardi.', answer: 'NM', explanationPt: 'O texto não fala de mercado.' }
      ] },
      { type: 'multiple_choice', prompt: "Qu'est-ce qu'on voit derrière le Gros Caillou ?", options: ['Le Rhône et toute la ville.', 'La boulangerie.', 'Le supermarché.', 'La station de métro.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo em casa',
    title: 'Cadê as chaves?',
    speakers: [{ id: 'A', name: 'Ana', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'A', text: "Lucas, je ne trouve pas les clés ! Elles ne sont pas dans la boîte bleue." },
      { speaker: 'U', text: 'Regarde sur la table de la cuisine.' },
      { speaker: 'A', text: "Non, il y a seulement ton ordinateur et des papiers." },
      { speaker: 'U', text: 'Et dans ton sac ?' },
      { speaker: 'A', text: "Non plus. J'ai cherché partout : sous le canapé, derrière la télé, dans la salle de bains…" },
      { speaker: 'U', text: 'Attends… Tu es entrée comment hier soir ?' },
      { speaker: 'A', text: "Avec les clés, bien sûr. J'ai ouvert la porte, j'ai mis mon manteau sur la chaise…" },
      { speaker: 'U', text: 'Et ton manteau, il est où maintenant ?' },
      { speaker: 'A', text: "Devant la porte, sur le portemanteau… Ah ! Elles sont dans la poche ! Désolée !" },
      { speaker: 'U', text: 'Classique ! Allez, dépêche-toi, on va être en retard.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Où étaient les clés ?', options: ['Dans la poche du manteau.', 'Sous le canapé.', 'Sur la table de la cuisine.', 'Dans la boîte bleue.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: "L'ordinateur de Lucas est sur la table de la cuisine.", answer: 'V', explanationPt: '"il y a seulement ton ordinateur et des papiers".' },
        { text: 'Ana a cherché derrière la télé.', answer: 'V', explanationPt: '"derrière la télé".' },
        { text: 'Le manteau est sur la chaise maintenant.', answer: 'F', explanationPt: 'Agora está no cabideiro, na frente da porta.' },
        { text: 'Lucas et Ana vont au cinéma.', answer: 'NM', explanationPt: 'Não se diz aonde eles vão.' }
      ] },
      { type: 'listen_choose', audio: "J'ai cherché partout.", prompt: 'O que Ana diz?',
        options: ['Procurei em todo lugar.', 'Procurei por toda parte da rua.', 'Não procurei em lugar nenhum.', 'Procurei por muito tempo.'], answer: 0 },
      { type: 'dictation', text: 'Regarde sur la table de la cuisine.' },
      { type: 'dictation', text: 'Elles sont dans la poche !' }
    ]
  },
  grammar: {
    topicId: 'position-prepositions',
    title: 'Preposições de lugar',
    explanationPt: 'Para localizar algo no espaço:\n\n' +
      '- **sur** (em cima de) × **sous** (debaixo de)\n- **devant** (na frente de) × **derrière** (atrás de)\n- **dans** (dentro de) · **entre** (entre)\n' +
      '- **à côté de** (ao lado de) · **en face de** (em frente a) · **près de** (perto de) × **loin de** (longe de)\n- **au coin de** (na esquina de) · **au bout de** (no fim de) · **au milieu de** (no meio de)\n\n' +
      '**Contrações com "de":** as locuções que terminam em *de* se contraem com o artigo: *à côté **du** cinéma* (de + le), *en face **des** magasins* (de + les), mas *à côté **de la** banque*, *près **de l\'**école*.\n\n' +
      '*Sur, sous, devant, derrière, dans, entre* **não** levam *de*: *devant la gare* (e não ~~devant de la gare~~).',
    table: { head: ['preposição', 'com masculino', 'com feminino'], rows: [
      ['à côté de', 'à côté du parc', 'à côté de la poste'], ['en face de', 'en face du café', "en face de l'école"],
      ['près de', 'près du métro', 'près de la gare'], ['au coin de', 'au coin du boulevard', 'au coin de la rue'], ['devant', 'devant le cinéma', 'devant la mairie']
    ] },
    examples: [
      { fr: 'Le chat dort sous la table.', pt: 'O gato dorme debaixo da mesa.' },
      { fr: "La pharmacie est en face de l'hôpital.", pt: 'A farmácia fica em frente ao hospital.' },
      { fr: 'J\'habite près du métro.', pt: 'Moro perto do metrô.' },
      { fr: 'Le parc est entre la poste et la mairie.', pt: 'O parque fica entre os correios e a prefeitura.' }
    ],
    ptComparison: 'Em português dizemos "**em frente ao** cinema" e "**na frente do** cinema". Em francês: *en face du cinéma* (do outro lado da rua, de frente) ou *devant le cinéma* (bem diante dele, sem nada no meio).\n\n' +
      '"Em cima" e "embaixo" sem complemento: *au-dessus* e *en dessous* (ou *en haut* e *en bas* para andares).'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com du, de la, de l\' ou des.', items: [
      { text: 'La boulangerie est à côté ___ pharmacie.', answers: ['de la'] },
      { text: 'Le café est en face ___ marché.', answers: ['du'] },
      { text: "J'habite près ___ université.", answers: ["de l'"] },
      { text: 'Le bus s\'arrête au coin ___ boulevard.', answers: ['du'] }
    ] },
    { type: 'multiple_choice', prompt: '"O gato está debaixo da cama."', options: ['Le chat est sous le lit.', 'Le chat est sur le lit.', 'Le chat est dessous de le lit.', 'Le chat est sous du lit.'], answer: 0 },
    { type: 'multiple_choice', prompt: 'Qual está correto?', options: ['Je t\'attends devant la gare.', 'Je t\'attends devant de la gare.', 'Je t\'attends devant du gare.', 'Je t\'attends en devant la gare.'], answer: 0,
      explanationPt: '"Devant" não leva "de".' },
    { type: 'match', prompt: 'Ligue os opostos.', pairs: [['sur', 'sous'], ['devant', 'derrière'], ['près de', 'loin de'], ['à droite', 'à gauche'], ['en haut', 'en bas']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "La banque est en face de la poste.", translation: 'O banco fica em frente aos correios.' }
  ],
  tipForBrazilians: '**Andares na França:** o térreo é *le rez-de-chaussée* (RDC), e o "primeiro andar" (*le premier étage*) é o primeiro **acima** do térreo — igual ao Brasil. Mas cuidado no elevador: o botão do térreo costuma ser **0** ou **RC**, e o subsolo é **−1** (*le sous-sol*).'
});
