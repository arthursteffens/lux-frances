LUX.registerLesson({
  id: 'a2-u01-l02', level: 'A2', unit: 1, order: 2,
  title: 'Ma journée type', titlePt: 'Meu dia típico',
  names: ['Lucas', 'Léa', 'Édouard-Herriot'],
  objectives: [
    'Descrever a rotina diária com horários.',
    'Usar os verbos pronominais no presente (se lever, se doucher, se coucher...).',
    'Entender a ordem dos acontecimentos num texto.'
  ],
  vocabulary: [
    { fr: 'se réveiller', pt: 'acordar', pos: 'v', ex: 'Je me réveille à sept heures.' },
    { fr: 'se lever', pt: 'levantar-se', pos: 'v', ex: 'Elle se lève tout de suite.' },
    { fr: 'se doucher', pt: 'tomar banho', pos: 'v', ex: 'Je me douche le matin.' },
    { fr: "s'habiller", pt: 'vestir-se', pos: 'v', ex: "Je m'habille vite." },
    { fr: 'se reposer', pt: 'descansar', pos: 'v', ex: "L'après-midi, je me repose." },
    { fr: 'se coucher', pt: 'deitar-se, ir dormir', pos: 'v', ex: 'Je me couche à vingt-deux heures.' },
    { fr: 'tôt', pt: 'cedo', pos: 'adv', ex: 'Je me lève tôt.' },
    { fr: 'tard', pt: 'tarde', pos: 'adv', ex: 'Le week-end, je me lève tard.' },
    { fr: 'tout de suite', pt: 'imediatamente', pos: 'expr', ex: 'Je viens tout de suite !' },
    { fr: 'ensuite', pt: 'em seguida, depois', pos: 'adv', ex: 'Ensuite, je prends un café.' },
    { fr: 'faire les courses', pt: 'fazer as compras (de mercado)', pos: 'expr', ex: 'Je fais les courses le samedi.' },
    { fr: 'la salle de bains', pt: 'o banheiro', g: 'f', ex: 'La salle de bains est petite.' }
  ],
  reading: {
    genre: 'post de blog',
    title: "Le blog de Léa — Une journée d'infirmière",
    text: "Je travaille à l'hôpital Édouard-Herriot, et mes journées commencent [[tôt|cedo]]. Je me réveille à cinq heures et demie. Je ne me lève pas [[tout de suite|imediatamente]] : je reste cinq minutes au lit avec mon téléphone. [[Ensuite|em seguida]], je me douche, je m'habille et je prends un café rapide. Lucas, mon colocataire, dort encore !\n\n" +
      "Je pars de la maison à six heures et quart et je prends le métro. Au travail, la journée passe vite. Je m'occupe des [[patients|pacientes]], je parle avec les médecins et je cours beaucoup dans les [[couloirs|corredores]].\n\n" +
      "Je rentre vers quinze heures. L'après-midi, je me repose un peu, puis je [[fais les courses|faço as compras]] ou je vais à la piscine. Le soir, Lucas et moi, nous préparons le dîner ensemble. Il cuisine très bien ! Après le dîner, je lis ou je regarde une série.\n\n" +
      "Je me couche tôt, vers vingt-deux heures. Et le week-end ? Je me lève à dix heures, [[bien sûr|claro]] !",
    exercises: [
      { type: 'order_events', prompt: 'Coloque a rotina de Léa na ordem certa.', items: [
        'Léa se réveille.', "Elle se douche et s'habille.", 'Elle prend le métro.', "Elle s'occupe des patients.", 'Elle rentre à la maison.', 'Elle se couche.'
      ] },
      { type: 'multiple_choice', prompt: 'À quelle heure Léa se réveille ?', options: ['À cinq heures et demie.', 'À six heures et quart.', 'À quinze heures.', 'À dix heures.'], answer: 0,
        explanationPt: '"Je me réveille à cinq heures et demie." (5h30)' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Léa se lève tout de suite.', answer: 'F', explanationPt: 'Ela fica cinco minutos na cama com o celular.' },
        { text: 'Lucas se lève avant Léa.', answer: 'F', explanationPt: 'Quando ela sai, "Lucas dort encore" (ainda dorme).' },
        { text: 'Léa va au travail en bus.', answer: 'F', explanationPt: 'Ela pega o metrô: "je prends le métro".' },
        { text: 'Léa aime beaucoup son travail.', answer: 'NM', explanationPt: 'O texto não diz se ela gosta do trabalho.' },
        { text: 'Le week-end, Léa se lève tard.', answer: 'V', explanationPt: '"Je me lève à dix heures, bien sûr !"' }
      ] },
      { type: 'multiple_choice', prompt: 'Que fait Léa le soir ?', options: ['Elle prépare le dîner avec Lucas.', 'Elle va à la piscine.', "Elle travaille à l'hôpital.", 'Elle fait les courses avec Hugo.'], answer: 0,
        explanationPt: '"Le soir, Lucas et moi, nous préparons le dîner ensemble."' },
      { type: 'fill_blank', prompt: 'Complete com o verbo do texto.', bank: ['me réveille', 'me couche', 'me repose', "m'habille"], items: [
        { text: 'Je ___ à cinq heures et demie.', answers: ['me réveille'] },
        { text: 'Je ___ tôt, vers vingt-deux heures.', answers: ['me couche'] },
        { text: "L'après-midi, je ___ un peu.", answers: ['me repose'] },
        { text: 'Je me douche et je ___.', answers: ["m'habille"] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Quem usa o banheiro primeiro?',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: 'Lucas, tu te lèves à quelle heure demain ?' },
      { speaker: 'U', text: 'Vers sept heures. Pourquoi ?' },
      { speaker: 'L', text: 'Parce que moi, je me douche à cinq heures quarante-cinq. Tu peux te doucher après sept heures ?' },
      { speaker: 'U', text: 'Pas de problème. Je me douche toujours le matin, mais je suis rapide : dix minutes.' },
      { speaker: 'L', text: 'Parfait. Et le soir, on partage la cuisine ?' },
      { speaker: 'U', text: 'Oui. Je prépare le dîner lundi, mercredi et vendredi. Toi, mardi et jeudi.' },
      { speaker: 'L', text: 'Et le week-end ?' },
      { speaker: 'U', text: 'Le week-end, on se repose… et on mange au restaurant !' },
      { speaker: 'L', text: 'Bonne idée ! Bon, je me couche, bonne nuit !' },
      { speaker: 'U', text: 'Bonne nuit, Léa !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Lucas se lève à quelle heure ?', options: ['Vers sept heures.', 'À cinq heures quarante-cinq.', 'Vers dix heures.', 'À six heures.'], answer: 0,
        explanationPt: '"Vers sept heures" = por volta das sete.' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Léa se douche avant Lucas.', answer: 'V', explanationPt: 'Ela toma banho às 5h45; ele, depois das 7h.' },
        { text: 'Lucas se douche le soir.', answer: 'F', explanationPt: '"Je me douche toujours le matin."' },
        { text: 'Lucas prépare le dîner trois fois par semaine.', answer: 'V', explanationPt: 'Segunda, quarta e sexta.' },
        { text: 'Léa aime cuisiner.', answer: 'NM', explanationPt: 'Ela não diz se gosta de cozinhar.' }
      ] },
      { type: 'dictation', text: 'Tu te lèves à quelle heure demain ?' },
      { type: 'dictation', text: 'Je me douche toujours le matin.' },
      { type: 'listen_choose', audio: 'Bon, je me couche, bonne nuit !', prompt: 'Ouça e escolha a frase de Léa.',
        options: ['Bon, je me couche, bonne nuit !', 'Bon, je me lève, bonne nuit !', 'Bon, je me douche, bonne nuit !', 'Bon, je me repose, bonne nuit !'], answer: 0 }
    ]
  },
  grammar: {
    topicId: 'pronominal-verbs',
    title: 'Verbos pronominais no presente',
    explanationPt: 'Os verbos pronominais vêm com um **pronome reflexivo** que concorda com o sujeito: **me, te, se, nous, vous, se**.\n\n' +
      'O pronome fica **antes do verbo**: *je me lève, tu te lèves, il se lève*.\n\n' +
      'Antes de vogal ou h mudo, me/te/se viram **m\', t\', s\'**: *je m\'habille, tu t\'appelles, elle s\'occupe*.',
    table: { head: ['', 'se lever', "s'habiller"], rows: [
      ['je', 'me lève', "m'habille"], ['tu', 'te lèves', "t'habilles"], ['il / elle / on', 'se lève', "s'habille"],
      ['nous', 'nous levons', 'nous habillons'], ['vous', 'vous levez', 'vous habillez'], ['ils / elles', 'se lèvent', "s'habillent"]
    ] },
    examples: [
      { fr: 'Je me réveille à six heures.', pt: 'Acordo às seis.' },
      { fr: "Tu t'appelles comment ?", pt: 'Como você se chama?' },
      { fr: 'Nous nous couchons tard.', pt: 'Nós vamos dormir tarde.' },
      { fr: 'Le week-end, on se repose.', pt: 'No fim de semana a gente descansa.' }
    ],
    ptComparison: 'Muitos verbos são pronominais em francês mas **não** em português:\n- ***se réveiller*** (acordar)\n- ***se reposer*** (descansar)\n- ***se promener*** (passear)\n- ***se coucher*** (ir dormir)\n\nNão esqueça o pronome: *je me réveille*, nunca *je réveille* (isso significaria "eu acordo [alguém]").\n\n' +
      'Com **nous** e **vous**, o pronome se repete: *nous nous levons, vous vous levez*. Parece estranho, mas está certo!'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue o verbo pronominal no presente (com o pronome).', items: [
      { text: 'Nous ___ à sept heures. (se lever)', answers: ['nous levons'] },
      { text: 'Tu ___ comment ? (s\'appeler)', answers: ["t'appelles"] },
      { text: 'Elle ___ le matin. (se doucher)', answers: ['se douche'] },
      { text: 'Je ___ à onze heures. (se coucher)', answers: ['me couche'] },
      { text: 'Vous ___ vite ! (s\'habiller)', answers: ['vous habillez'] },
      { text: 'Ils ___ le dimanche. (se reposer)', answers: ['se reposent'] }
    ] },
    { type: 'multiple_choice', prompt: 'Como se diz "Eu acordo às sete"?', options: ['Je me réveille à sept heures.', 'Je réveille à sept heures.', 'Je me réveiller à sept heures.', 'Me je réveille à sept heures.'], answer: 0,
      explanationPt: 'Sem o "me", a frase significaria "eu acordo (alguém)".' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Elle ne se lève pas tôt.', translation: 'Ela não se levanta cedo.' }
  ],
  tipForBrazilians: '**Horas em francês:** sempre com *heures* e de 0 a 24 na linguagem formal (*quinze heures* = 15h). No dia a dia, também se diz *trois heures de l\'après-midi*. E "e meia" é *et demie*: *cinq heures et demie*. Treine na aba **Treino de ouvido › Horas**!'
});
