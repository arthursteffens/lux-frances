LUX.registerLesson({
  id: 'a2-u02-l03', level: 'A2', unit: 2, order: 3,
  title: 'Une soirée ratée', titlePt: 'Uma noite que deu errado',
  names: ['Hugo', 'Lucas', 'Inès', 'Lyon', 'Bellecour', 'Brotteaux'],
  objectives: [
    'Contar um imprevisto ou uma pequena catástrofe do dia a dia.',
    'Usar os verbos pronominais no passé composé (je me suis levé, elle s\'est trompée).',
    'Fazer a negação no passé composé: je n\'ai pas vu, il n\'est pas venu.'
  ],
  vocabulary: [
    { fr: 'raté(e)', pt: 'que deu errado, fracassado', pos: 'adj', ex: 'Quelle soirée ratée !' },
    { fr: 'le rendez-vous', pt: 'o encontro, o compromisso', g: 'm', ex: "J'ai un rendez-vous à vingt heures." },
    { fr: 'se tromper', pt: 'enganar-se, errar', pos: 'v', ex: 'Je me suis trompé de rue.' },
    { fr: 'se dépêcher', pt: 'apressar-se', pos: 'v', ex: 'Je me suis dépêché, mais trop tard.' },
    { fr: 'se perdre', pt: 'perder-se', pos: 'v', ex: 'Nous nous sommes perdus en ville.' },
    { fr: 'rater', pt: 'perder (trem, ônibus); falhar', pos: 'v', ex: "J'ai raté le dernier métro." },
    { fr: 'la batterie', pt: 'a bateria', g: 'f', ex: "Mon téléphone n'a plus de batterie." },
    { fr: 'la pluie', pt: 'a chuva', g: 'f', ex: 'Il y a de la pluie ce soir.' },
    { fr: 'mouillé(e)', pt: 'molhado(a)', pos: 'adj', ex: 'Je suis arrivé tout mouillé.' },
    { fr: "s'excuser", pt: 'desculpar-se', pos: 'v', ex: "Je me suis excusé cent fois." },
    { fr: 'heureusement', pt: 'felizmente', pos: 'adv', ex: 'Heureusement, elle a ri.' },
    { fr: "Ce n'est pas grave.", pt: 'Não tem problema.', pos: 'expr', ex: "Tu es en retard ? Ce n'est pas grave." }
  ],
  reading: {
    genre: 'e-mail',
    title: 'Hugo écrit à Lucas',
    text: "Salut Lucas,\n\n" +
      "Tu m'as demandé comment s'est passé mon [[rendez-vous|encontro]] avec Inès vendredi. Eh bien… mal !\n\n" +
      "D'abord, après ma sieste, je me suis réveillé en retard : je n'ai pas entendu mon réveil. Je me suis dépêché, je me suis habillé en deux minutes et je suis parti sans parapluie. Bien sûr, il a commencé à pleuvoir.\n\n" +
      "Ensuite, je me suis trompé de métro et je suis descendu à Brotteaux au lieu de Bellecour. Je n'ai pas pu appeler Inès : mon téléphone n'avait plus de [[batterie|bateria]]. Je suis arrivé au restaurant avec quarante minutes de retard, complètement [[mouillé|molhado]].\n\n" +
      "Inès ne s'est pas fâchée. Elle a ri et elle a dit : « Ce n'est pas grave. » [[Heureusement|felizmente]] ! Mais le restaurant a fermé sa cuisine à vingt-deux heures, alors nous n'avons pas mangé. Nous nous sommes contentés d'un kebab dans la rue.\n\n" +
      "Le pire ? J'ai oublié mon portefeuille et c'est elle qui a payé. Je me suis excusé cent fois. On ne s'est pas encore revus… Tu crois qu'elle va répondre à mon message ?\n\n" +
      "Hugo",
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi Hugo est arrivé en retard ?', options: ["Il s'est réveillé tard et il s'est trompé de métro.", 'Il a travaillé tard.', 'Son train est arrivé en retard.', 'Il a attendu Inès au mauvais restaurant.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Hugo a pris son parapluie.', answer: 'F', explanationPt: '"je suis parti sans parapluie".' },
        { text: 'Hugo a téléphoné à Inès pendant le trajet.', answer: 'F', explanationPt: 'O celular dele estava sem bateria.' },
        { text: "Inès s'est fâchée.", answer: 'F', explanationPt: '"Inès ne s\'est pas fâchée. Elle a ri".' },
        { text: 'Ils ont mangé un kebab.', answer: 'V', explanationPt: '"Nous nous sommes contentés d\'un kebab dans la rue."' },
        { text: 'Inès travaille dans un restaurant.', answer: 'NM', explanationPt: 'O texto não diz a profissão dela.' }
      ] },
      { type: 'multiple_choice', prompt: 'Qui a payé le kebab ?', options: ['Inès.', 'Hugo.', 'Lucas.', 'Personne.'], answer: 0,
        explanationPt: 'Hugo esqueceu a carteira: "c\'est elle qui a payé".' },
      { type: 'fill_blank', prompt: 'Complete com a forma do texto.', bank: ['me suis réveillé', "n'ai pas entendu", 'me suis trompé', "ne s'est pas fâchée"], items: [
        { text: 'Je ___ en retard.', answers: ['me suis réveillé'] },
        { text: 'Je ___ mon réveil.', answers: ["n'ai pas entendu"] },
        { text: 'Je ___ de métro.', answers: ['me suis trompé'] },
        { text: 'Inès ___.', answers: ["ne s'est pas fâchée"] }
      ] },
      { type: 'short_answer', prompt: 'Com quantos minutos de atraso Hugo chegou? (responda com o número)', answers: ['40'] }
    ]
  },
  listening: {
    genre: 'conversa telefônica',
    title: 'Inès liga para o Hugo',
    speakers: [{ id: 'I', name: 'Inès', gender: 'f' }, { id: 'H', name: 'Hugo', gender: 'm' }],
    script: [
      { speaker: 'H', text: 'Allô ?' },
      { speaker: 'I', text: "Salut Hugo, c'est Inès. Tu n'as pas reçu mon message ?" },
      { speaker: 'H', text: "Non, je n'ai rien reçu ! Je suis désolé pour vendredi, vraiment." },
      { speaker: 'I', text: "Arrête, ce n'est pas grave. Moi, je me suis bien amusée !" },
      { speaker: 'H', text: 'Ah bon ? Tu ne t\'es pas ennuyée ?' },
      { speaker: 'I', text: 'Pas du tout. Le kebab sous la pluie, c\'était original !' },
      { speaker: 'H', text: 'Écoute, je veux te rembourser. Et je t\'invite au restaurant samedi. Un vrai restaurant !' },
      { speaker: 'I', text: "D'accord, mais cette fois, ne te trompe pas de métro !" },
      { speaker: 'H', text: "Promis. Et je vais charger mon téléphone, et prendre un parapluie." },
      { speaker: 'I', text: 'Parfait. À samedi, alors !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment Inès a trouvé la soirée de vendredi ?', options: ["Elle s'est bien amusée.", "Elle s'est ennuyée.", 'Elle est fâchée.', 'Elle ne se souvient pas.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: "Hugo a reçu le message d'Inès.", answer: 'F', explanationPt: '"je n\'ai rien reçu !"' },
        { text: 'Hugo invite Inès au restaurant samedi.', answer: 'V', explanationPt: '"je t\'invite au restaurant samedi".' },
        { text: 'Inès choisit le restaurant.', answer: 'NM', explanationPt: 'Não se fala de quem escolhe o restaurante.' },
        { text: 'Hugo veut rembourser Inès.', answer: 'V', explanationPt: '"je veux te rembourser".' }
      ] },
      { type: 'listen_choose', audio: "Tu ne t'es pas ennuyée ?", prompt: 'Ouça e escolha a tradução.',
        options: ['Você não ficou entediada?', 'Você não ficou irritada?', 'Você não se perdeu?', 'Você não se enganou?'], answer: 0 },
      { type: 'dictation', text: "Non, je n'ai rien reçu !" },
      { type: 'dictation', text: 'Moi, je me suis bien amusée !' }
    ]
  },
  grammar: {
    topicId: 'passe-compose',
    title: 'Pronominais e negação no passé composé',
    explanationPt: '**Verbos pronominais** sempre usam **être** no passé composé. O pronome reflexivo vem **antes do auxiliar**: *je **me suis** levé*, *elle **s\'est** trompée*. O particípio concorda com o sujeito (na maioria dos casos).\n\n' +
      '**Negação:** o *ne... pas* fica **em volta do auxiliar** (a parte conjugada):\n- *Je **n\'**ai **pas** mangé.*\n- *Il **n\'**est **pas** venu.*\n- Com pronominais, o pronome vai junto: *Elle **ne** s\'est **pas** réveillée.*\n\n' +
      'O mesmo vale para *ne... jamais, ne... plus, ne... rien*: *Je n\'ai jamais vu Paris. Je n\'ai rien compris.*\n\n' +
      'Exceção: *personne* vem **depois do particípio**: *Je n\'ai vu **personne**.*',
    table: { head: ['', 'se lever', 'negação'], rows: [
      ['je', 'me suis levé(e)', 'ne me suis pas levé(e)'], ['tu', "t'es levé(e)", "ne t'es pas levé(e)"], ['il / elle', "s'est levé / levée", "ne s'est pas levé(e)"],
      ['nous', 'nous sommes levé(e)s', 'ne nous sommes pas levé(e)s'], ['vous', 'vous êtes levé(e)(s)', 'ne vous êtes pas levé(e)(s)'], ['ils / elles', 'se sont levés / levées', 'ne se sont pas levé(e)s']
    ] },
    examples: [
      { fr: 'Ce matin, je me suis levé à six heures.', pt: 'Hoje de manhã eu me levantei às seis.' },
      { fr: "Elle s'est trompée d'adresse.", pt: 'Ela errou o endereço.' },
      { fr: "Nous ne nous sommes pas perdus.", pt: 'Nós não nos perdemos.' },
      { fr: "Je n'ai rien acheté.", pt: 'Não comprei nada.' },
      { fr: "Je n'ai vu personne.", pt: 'Não vi ninguém.' }
    ],
    ptComparison: '"Eu me levantei" → *je me suis levé*: o pronome fica no mesmo lugar do português (antes do verbo), mas o francês ainda acrescenta o **être**.\n\n' +
      'Na negação, o português põe "não" antes de tudo; o francês **abraça o auxiliar**: *je **ne** me suis **pas** levé*. Na fala informal, o *ne* costuma cair: *je me suis pas levé*, *j\'ai pas compris* — entenda, mas escreva com *ne*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no passé composé.', items: [
      { text: 'Hier, je ___ tard. (se coucher — Lucas)', answers: ['me suis couché'] },
      { text: 'Elle ___ de bus. (se tromper)', answers: ["s'est trompée"] },
      { text: 'Nous ___ dans la vieille ville. (se perdre — Léa e Ana)', answers: ['nous sommes perdues'] },
      { text: 'Tu ___ ce matin ? (se doucher — Hugo)', answers: ["t'es douché"] }
    ] },
    { type: 'fill_blank', prompt: 'Passe para a negativa (ne... pas).', items: [
      { text: "J'ai vu le film. → Je ___ le film.", answers: ["n'ai pas vu"] },
      { text: 'Il est venu. → Il ___.', answers: ["n'est pas venu"] },
      { text: "Elle s'est réveillée. → Elle ___.", answers: ["ne s'est pas réveillée"] }
    ] },
    { type: 'multiple_choice', prompt: 'Onde fica o "ne... pas"?', options: ["Je n'ai pas mangé.", "Je n'ai mangé pas.", 'Je ne pas ai mangé.', "Je pas n'ai mangé."], answer: 0,
      explanationPt: 'Ne... pas em volta do auxiliar (ai).' },
    { type: 'multiple_choice', prompt: '"Não vi ninguém."', options: ["Je n'ai vu personne.", "Je n'ai personne vu.", "Je n'ai pas vu personne.", 'Je ne personne ai vu.'], answer: 0,
      explanationPt: '"Personne" vem depois do particípio, e sem "pas".' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Nous ne nous sommes pas dépêchés.", translation: 'Nós não nos apressamos.' }
  ],
  tipForBrazilians: '**"Se tromper de" = errar de algo.** O francês diz *je me suis trompé **de** métro / **de** rue / **de** numéro* — sem artigo depois do *de*. Em português falamos "peguei o metrô errado", "liguei para o número errado". Aprenda a estrutura inteira: **se tromper de + substantivo**.'
});
