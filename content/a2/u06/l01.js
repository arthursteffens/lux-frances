LUX.registerLesson({
  id: 'a2-u06-l01', level: 'A2', unit: 6, order: 1,
  title: 'Tu viens à ma fête ?', titlePt: 'Você vem à minha festa?',
  names: ['Léa', 'Lucas', 'Hugo', 'Camille', 'Inès', 'Ana', 'Mme', 'Bernard', 'Croix-Rousse', 'Lyon', 'Karim', 'Genève', 'Thomas', 'Nadia', 'Quies', 'Marseille'],
  objectives: [
    'Convidar alguém, aceitar e recusar um convite com educação.',
    'Falar de planos próximos com o futur proche (aller + infinitivo).',
    'Situar ações no futuro: ce soir, demain, la semaine prochaine, dans deux jours.'
  ],
  vocabulary: [
    { fr: 'inviter', pt: 'convidar', pos: 'v', ex: 'Je t\'invite à ma fête.' },
    { fr: "l'invitation", pt: 'o convite', g: 'f', d: true, ex: "Merci pour l'invitation !" },
    { fr: 'la fête', pt: 'a festa', g: 'f', ex: 'La fête commence à vingt heures.' },
    { fr: 'fêter', pt: 'comemorar', pos: 'v', ex: 'On va fêter mon anniversaire.' },
    { fr: 'accepter', pt: 'aceitar', pos: 'v', ex: "J'accepte avec plaisir." },
    { fr: 'refuser', pt: 'recusar', pos: 'v', ex: 'Il refuse toujours les invitations.' },
    { fr: 'Avec plaisir !', pt: 'Com prazer!', pos: 'expr', ex: 'Tu viens ? — Avec plaisir !' },
    { fr: "Je ne peux pas, désolé(e).", pt: 'Não posso, sinto muito.', pos: 'expr', ex: "Samedi ? Je ne peux pas, désolée." },
    { fr: 'dans (+ tempo)', pt: 'daqui a', pos: 'prep', ex: 'La fête est dans deux semaines.' },
    { fr: 'prochain(e)', pt: 'próximo(a), que vem', pos: 'adj', ex: 'samedi prochain' },
    { fr: 'apporter', pt: 'trazer, levar (algo)', pos: 'v', ex: "J'apporte une bouteille." },
    { fr: 'le cadeau', pt: 'o presente', g: 'm', ex: 'Pas besoin de cadeau !' }
  ],
  reading: {
    genre: 'convite e respostas',
    title: 'Invitation — Les 27 ans de Léa !',
    text: "Coucou tout le monde !\n\n" +
      "Le samedi 21 juin, je vais avoir vingt-sept ans, et c'est aussi la Fête de la musique ! Alors on va faire une grande fête sur la terrasse de notre immeuble, à la Croix-Rousse. Rendez-vous à partir de dix-neuf heures.\n\n" +
      "Au programme : on va manger (Lucas va préparer des spécialités brésiliennes !), on va danser, et à minuit, on va descendre en ville pour écouter les concerts. Pas besoin de cadeau, apportez juste quelque chose à boire ou un dessert. Répondez-moi avant mercredi, s'il vous plaît.\n\nLéa\n\n" +
      "— Hugo : Génial ! Je viens avec Inès. Je vais apporter ma guitare. Attention, je vais chanter !\n\n" +
      "— Camille : Merci pour l'invitation ! Je vais venir, mais un peu tard : je vais d'abord dîner chez mes parents. J'arrive vers vingt-deux heures.\n\n" +
      "— Karim : Désolé, je ne peux pas venir. Je vais être à Marseille ce week-end pour le mariage de mon cousin. Mais on va fêter ça plus tard, d'accord ?\n\n" +
      "— Mme Bernard : Merci, ma petite Léa. Je suis trop vieille pour danser, mais je vais vous faire mon gâteau au chocolat. Et ne vous inquiétez pas pour le bruit, je vais mettre mes boules Quies !\n\n" +
      "— Thomas : On ne va pas pouvoir venir de Genève avec le bébé… Bon anniversaire en avance, petite sœur !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi le 21 juin est un jour spécial ?', options: ["C'est l'anniversaire de Léa et la Fête de la musique.", "C'est le mariage de Karim.", "C'est le premier jour des vacances.", "C'est la fête nationale."], answer: 0 },
      { type: 'match', prompt: 'Quem responde o quê?', pairs: [['Hugo', 'va apporter sa guitare'], ['Camille', 'va arriver vers vingt-deux heures'], ['Karim', 'ne peut pas venir'], ['Mme Bernard', 'va faire un gâteau'], ['Thomas', 'ne va pas venir de Genève']] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il faut apporter un cadeau.', answer: 'F', explanationPt: '"Pas besoin de cadeau".' },
        { text: 'Lucas va préparer des plats brésiliens.', answer: 'V', explanationPt: '"Lucas va préparer des spécialités brésiliennes".' },
        { text: 'Karim va à un mariage.', answer: 'V', explanationPt: '"pour le mariage de mon cousin".' },
        { text: 'Mme Bernard va danser à la fête.', answer: 'F', explanationPt: '"Je suis trop vieille pour danser".' },
        { text: 'Inès joue de la guitare.', answer: 'NM', explanationPt: 'É o Hugo que vai levar o violão.' }
      ] },
      { type: 'multiple_choice', prompt: 'Avant quand il faut répondre à Léa ?', options: ['Avant mercredi.', 'Avant samedi.', 'Avant le 21 juin.', 'Avant minuit.'], answer: 0 },
      { type: 'fill_blank', prompt: 'Complete com o futur proche, como no texto.', bank: ['va préparer', 'vais apporter', 'vais être', 'va descendre'], items: [
        { text: 'Lucas ___ des spécialités brésiliennes.', answers: ['va préparer'] },
        { text: 'Je ___ ma guitare.', answers: ['vais apporter'] },
        { text: 'Je ___ à Marseille ce week-end.', answers: ['vais être'] },
        { text: 'À minuit, on ___ en ville.', answers: ['va descendre'] }
      ] }
    ]
  },
  listening: {
    genre: 'conversa telefônica',
    title: 'Lucas convida a vizinha de baixo',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'N', name: 'Nadia', gender: 'f' }],
    script: [
      { speaker: 'N', text: 'Allô ?' },
      { speaker: 'U', text: "Bonjour Nadia, c'est Lucas, du cinquième étage. Je vous dérange ?" },
      { speaker: 'N', text: 'Non, pas du tout. Qu\'est-ce qui se passe ?' },
      { speaker: 'U', text: "Samedi soir, on va faire une fête sur la terrasse pour l'anniversaire de Léa. Vous voulez venir ?" },
      { speaker: 'N', text: "C'est gentil ! Samedi… attendez, je regarde. Ah non, samedi, je ne peux pas, je vais garder mes petits-enfants." },
      { speaker: 'U', text: 'Dommage ! Ils peuvent venir aussi, si vous voulez.' },
      { speaker: 'N', text: "Ils ont trois et cinq ans… ils vont se coucher à huit heures !" },
      { speaker: 'U', text: "Ah oui, c'est vrai. Il va y avoir un peu de musique, je suis désolé pour le bruit." },
      { speaker: 'N', text: "Ne vous inquiétez pas. Et dimanche, je vais passer dire bonjour à Léa avec un petit cadeau." },
      { speaker: 'U', text: "Merci beaucoup, Nadia. Bonne soirée !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi Nadia ne peut pas venir ?', options: ['Elle va garder ses petits-enfants.', 'Elle va travailler.', 'Elle va être à Marseille.', 'Elle est malade.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas habite au cinquième étage.', answer: 'V', explanationPt: '"c\'est Lucas, du cinquième étage".' },
        { text: 'Les petits-enfants de Nadia ont trois et cinq ans.', answer: 'V', explanationPt: '"Ils ont trois et cinq ans".' },
        { text: 'Nadia est fâchée à cause du bruit.', answer: 'F', explanationPt: '"Ne vous inquiétez pas."' },
        { text: 'Nadia va passer voir Léa dimanche.', answer: 'V', explanationPt: '"dimanche, je vais passer dire bonjour à Léa".' }
      ] },
      { type: 'listen_choose', audio: 'Je vous dérange ?', prompt: 'O que Lucas pergunta?',
        options: ['Estou incomodando?', 'A senhora está bem?', 'A senhora me ajuda?', 'Posso entrar?'], answer: 0 },
      { type: 'dictation', text: 'Vous voulez venir ?' },
      { type: 'dictation', text: 'Je vais garder mes petits-enfants.' }
    ]
  },
  grammar: {
    topicId: 'futur-proche',
    title: 'O futur proche',
    explanationPt: 'O **futur proche** é o "vou + verbo" do português: **aller no presente + infinitivo**.\n\n' +
      '*Je **vais manger**. Tu **vas venir** ? Il **va pleuvoir**.*\n\n' +
      'Serve para **planos** e para coisas que **vão acontecer em breve** ou que são **certas**: *Attention, tu vas tomber !*\n\n' +
      '**Negação:** em volta de *aller*: *Je **ne** vais **pas** venir.*\n\n' +
      '**Pronomes:** antes do infinitivo: *Je vais **te** téléphoner. On va **se** coucher. Je vais **y** aller.*\n\n' +
      '**Marcadores de futuro:** *ce soir, demain, après-demain, samedi prochain, la semaine prochaine, l\'année prochaine, dans deux jours* (daqui a dois dias), *bientôt*.',
    table: { head: ['', 'aller', '+ infinitivo'], rows: [
      ['je', 'vais', 'danser'], ['tu', 'vas', 'venir'], ['il / elle / on', 'va', 'fêter'],
      ['nous', 'allons', 'manger'], ['vous', 'allez', 'apporter'], ['ils / elles', 'vont', 'chanter']
    ] },
    examples: [
      { fr: "Ce soir, je vais regarder un film.", pt: 'Hoje à noite vou ver um filme.' },
      { fr: "Nous allons déménager dans trois mois.", pt: 'Vamos nos mudar daqui a três meses.' },
      { fr: "Elle ne va pas venir.", pt: 'Ela não vai vir.' },
      { fr: "Il va y avoir du monde.", pt: 'Vai ter muita gente.' }
    ],
    ptComparison: 'É o tempo mais fácil para brasileiros: "**vou fazer**" = *je **vais faire***. A estrutura é idêntica!\n\n' +
      'Dois cuidados: (1) "Vai ter" = *il va y avoir* (e não ~~il va avoir~~). (2) "Daqui a dois dias" = *dans deux jours*, e não ~~en deux jours~~ (que significa "em dois dias de duração").'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no futur proche.', items: [
      { text: 'Demain, je ___ mes parents. (appeler)', answers: ['vais appeler'] },
      { text: 'Nous ___ toute la nuit. (danser)', answers: ['allons danser'] },
      { text: 'Tu ___ quoi samedi ? (faire)', answers: ['vas faire'] },
      { text: 'Ils ___ en retard. (arriver)', answers: ['vont arriver'] },
      { text: 'Elle ___. (ne pas venir)', answers: ['ne va pas venir'] },
      { text: 'On ___ tôt ce soir. (se coucher)', answers: ['va se coucher'] }
    ] },
    { type: 'multiple_choice', prompt: '"Vai chover amanhã."', options: ['Il va pleuvoir demain.', 'Il va pleut demain.', 'Il pleuvoir demain.', 'Il va à pleuvoir demain.'], answer: 0 },
    { type: 'multiple_choice', prompt: 'Recusar um convite com educação:', options: ["Merci, c'est gentil, mais je ne peux pas.", 'Non.', 'Je ne veux pas.', "Ça ne m'intéresse pas."], answer: 0 },
    { type: 'match', prompt: 'Ligue o português ao francês.', pairs: [['amanhã', 'demain'], ['depois de amanhã', 'après-demain'], ['semana que vem', 'la semaine prochaine'], ['daqui a dois dias', 'dans deux jours'], ['em breve', 'bientôt']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je ne vais pas pouvoir venir.', translation: 'Não vou poder ir.' }
  ],
  tipForBrazilians: '**"Venir" × "aller" num convite:** em português dizemos "você **vai** à minha festa?", mas em francês, quando o convite é para o lugar onde **você** vai estar, usa-se ***venir***: *Tu **viens** à ma fête ?* — *Oui, je **viens** !* (e não ~~je vais~~). Pense em "vir até onde eu estou".'
});
