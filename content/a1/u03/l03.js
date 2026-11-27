LUX.registerLesson({
  id: 'a1-u03-l03', level: 'A1', unit: 3, order: 3,
  title: "J'aime le fromage !", titlePt: 'Eu adoro queijo!',
  names: ['Lucas', 'Léa', 'Brésil'],
  introPt: 'A Léa e o Lucas vão cozinhar juntos e precisam saber do que cada um gosta. Nesta lição: os verbos em **-er** (a maioria dos verbos franceses!) e a **negação** *ne… pas*.',
  objectives: [
    'Dizer do que você gosta e do que não gosta.',
    'Conjugar os verbos em -er no presente (aimer, manger, détester…).',
    'Fazer frases negativas com ne… pas.'
  ],
  vocabulary: [
    { fr: 'aimer', pt: 'gostar; amar', pos: 'v', say: 'é-MÊ', ex: "J'aime le fromage." },
    { fr: 'adorer', pt: 'adorar', pos: 'v', say: 'a-dô-RRÊ', ex: "J'adore le chocolat !" },
    { fr: 'détester', pt: 'detestar', pos: 'v', say: 'dê-tés-TÊ', ex: 'Je déteste le poisson.' },
    { fr: 'préférer', pt: 'preferir', pos: 'v', say: 'prrê-fê-RRÊ', ex: 'Je préfère le thé.' },
    { fr: 'manger', pt: 'comer', pos: 'v', say: 'mã-JÊ', ex: 'Nous mangeons à huit heures.' },
    { fr: 'le fromage', pt: 'o queijo', g: 'm', say: 'le frrô-MAJ', ex: 'Les Français adorent le fromage.' },
    { fr: 'la viande', pt: 'a carne', g: 'f', say: 'la VIÃD', ex: 'Je ne mange pas de viande.' },
    { fr: 'le poisson', pt: 'o peixe', g: 'm', say: 'le pua-SSÕ', ex: "Tu aimes le poisson ?" },
    { fr: 'les légumes', pt: 'os legumes, as verduras', g: 'm', say: 'lê lê-GÜM', ex: "J'aime les légumes." },
    { fr: 'les fruits', pt: 'as frutas', g: 'm', say: 'lê FRRÜI', ex: 'Les fruits sont bons.', d: true },
    { fr: 'le riz', pt: 'o arroz', g: 'm', say: 'le RRI', ex: 'Au Brésil, on mange du riz.' },
    { fr: 'ne… pas', pt: 'não (em volta do verbo)', pos: 'expr', say: 'ne… PA', ex: "Je n'aime pas le poisson." }
  ],
  pronunciation: {
    title: 'Aime, aimes, aiment: três escritas, um som só',
    textPt: 'Nos verbos em **-er**, quatro formas **soam iguais**, porque as terminações *-e, -es, -ent* não se pronunciam:\n\n' +
      '- ***j\'aime***, ***tu aimes***, ***il aime***, ***ils aiment*** = todas soam "ÉM".\n' +
      '- Só ***nous aimons*** ("nu-zé-MÕ") e ***vous aimez*** ("vu-zé-MÊ") soam diferente.\n\n' +
      'Ou seja: falando, você só precisa de **três sons** para o verbo inteiro!',
    examples: [{ fr: "j'aime", pt: '"ÉM"' }, { fr: 'ils aiment', pt: 'também "ÉM" (com liaison: "il-ZÉM")' }, { fr: 'nous aimons', pt: '"nu-zé-MÕ"' }, { fr: 'vous aimez', pt: '"vu-zé-MÊ"' }]
  },
  reading: {
    genre: 'questionário de revista',
    title: 'Vous aimez manger quoi ?',
    text: "Questionnaire : Vous aimez manger quoi ?\n\n" +
      "Léa, 26 ans, infirmière :\n" +
      "« J'adore le fromage ! Je mange du fromage tous les jours. J'aime aussi les légumes et les fruits. Mais je n'aime pas la viande rouge. Et le poisson ? Je déteste ! Le soir, je préfère une [[soupe|sopa]] ou une [[salade|salada]]. »\n\n" +
      "Lucas, 28 ans, graphiste :\n" +
      "« Moi, j'aime le riz et les [[haricots noirs|feijão-preto]], comme au Brésil. J'aime aussi la viande. Je ne mange pas beaucoup de légumes… mais j'adore le chocolat ! »",
    translationPt: '**Questionário: O que você gosta de comer?**\n\n' +
      '**Léa, 26 anos, enfermeira:**\n"Eu adoro queijo! Como queijo todos os dias. Também gosto de legumes e de frutas. Mas não gosto de carne vermelha. E peixe? Detesto! À noite, prefiro uma sopa ou uma salada."\n\n' +
      '**Lucas, 28 anos, designer:**\n"Eu gosto de arroz e de feijão-preto, como no Brasil. Também gosto de carne. Não como muitos legumes… mas adoro chocolate!"',
    exercises: [
      { type: 'multiple_choice', prompt: 'Do que a Léa NÃO gosta?', options: ['De carne vermelha e de peixe.', 'De queijo.', 'De legumes.', 'De frutas.'], answer: 0,
        explanationPt: '"je n\'aime pas la viande rouge" e "le poisson ? Je déteste !"' },
      { type: 'multiple_choice', prompt: 'O que o Lucas adora?', options: ['Chocolate.', 'Peixe.', 'Sopa.', 'Legumes.'], answer: 0,
        explanationPt: '"j\'adore le chocolat !"' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Léa mange du fromage tous les jours.', answer: 'V', explanationPt: '"Je mange du fromage tous les jours."' },
        { text: 'Lucas mange beaucoup de légumes.', answer: 'F', explanationPt: '"Je ne mange pas beaucoup de légumes".' },
        { text: 'Lucas aime le riz.', answer: 'V', explanationPt: '"j\'aime le riz et les haricots noirs".' },
        { text: 'Léa aime le café.', answer: 'NM', explanationPt: 'O questionário não fala de café.' }
      ] },
      { type: 'match', prompt: 'Ligue cada comida à tradução.', pairs: [
        ['le fromage', 'o queijo'], ['la viande', 'a carne'], ['le poisson', 'o peixe'], ['les légumes', 'os legumes'], ['le riz', 'o arroz']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'O que a gente cozinha?',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: 'Ce soir, on mange ensemble ? Tu aimes le poisson ?', pt: 'Hoje à noite, a gente come junto? Você gosta de peixe?' },
      { speaker: 'U', text: "Oui, j'aime bien. Et toi ?", pt: 'Gosto, sim. E você?' },
      { speaker: 'L', text: "Non, je n'aime pas le poisson. Je préfère les légumes.", pt: 'Não, eu não gosto de peixe. Prefiro legumes.' },
      { speaker: 'U', text: 'Alors, une omelette avec des légumes ?', pt: 'Então, uma omelete com legumes?' },
      { speaker: 'L', text: "Super ! Et avec du fromage. J'adore le fromage !", pt: 'Ótimo! E com queijo. Eu adoro queijo!' },
      { speaker: 'U', text: 'Et comme dessert ?', pt: 'E de sobremesa?' },
      { speaker: 'L', text: 'Des fruits ? Tu aimes les fraises ?', pt: 'Frutas? Você gosta de morango?' },
      { speaker: 'U', text: "Oui, j'adore ! Mais je ne mange pas de sucre le soir.", pt: 'Sim, adoro! Mas não como açúcar à noite.' },
      { speaker: 'L', text: 'Parfait : des fraises sans sucre !', pt: 'Perfeito: morangos sem açúcar!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'O que eles vão comer no jantar?', options: ['Uma omelete com legumes e queijo.', 'Peixe com arroz.', 'Uma sopa.', 'Carne com legumes.'], answer: 0,
        explanationPt: '"une omelette avec des légumes" + "avec du fromage".' },
      { type: 'multiple_choice', prompt: 'E de sobremesa?', options: ['Morangos sem açúcar.', 'Chocolate.', 'Uma torta.', 'Nada.'], answer: 0,
        explanationPt: '*Les fraises* = os morangos. "des fraises sans sucre".' },
      { type: 'listen_choose', audio: "Non, je n'aime pas le poisson.", prompt: 'Ouça e escolha o que a Léa disse.',
        options: ["Non, je n'aime pas le poisson.", "Oui, j'aime le poisson.", "Non, je n'aime pas le fromage.", 'Non, je déteste les légumes.'], answer: 0,
        explanationPt: '*Je n\'aime pas* = não gosto. O *ne* vira *n\'* antes de vogal.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Lucas aime le poisson.', answer: 'V', explanationPt: '"Oui, j\'aime bien."' },
        { text: 'Léa déteste le fromage.', answer: 'F', explanationPt: 'Ela **adora**: "J\'adore le fromage !"' },
        { text: 'Ils mangent à neuf heures.', answer: 'NM', explanationPt: 'Eles não falam da hora do jantar.' }
      ] },
      { type: 'dictation', text: "Je n'aime pas le poisson.", explanationPt: 'A negação abraça o verbo: *ne* (*n\'*) + *aime* + *pas*.' }
    ]
  },
  grammar: {
    topicId: 'negation',
    title: 'Verbos em -er e a negação ne… pas',
    explanationPt: '**Verbos em -er** (aimer, manger, parler, habiter…) são **90% dos verbos franceses**, e todos seguem o mesmo modelo. Tire o **-er** e acrescente:\n\n' +
      '- ***je*** → -e: *j\'aime*\n' +
      '- ***tu*** → -es: *tu aimes*\n' +
      '- ***il / elle / on*** → -e: *il aime*\n' +
      '- ***nous*** → -ons: *nous aimons*\n' +
      '- ***vous*** → -ez: *vous aimez*\n' +
      '- ***ils / elles*** → -ent: *ils aiment*\n\n' +
      '**A negação** tem duas partes, uma de cada lado do verbo: ***ne*** + verbo + ***pas***.\n' +
      '- *J\'aime le poisson.* → *Je **n\'**aime **pas** le poisson.*\n' +
      '- Antes de vogal, *ne* vira ***n\'***.\n\n' +
      '**Gostos usam le, la, les:** *J\'aime **le** fromage* (queijo em geral). Mas depois da negação com *manger*, *un, une, des, du* viram ***de***: *Je ne mange pas **de** viande.*',
    table: { head: ['', 'aimer', 'manger', 'negativo'], rows: [
      ["je / j'", 'aime', 'mange', "je n'aime pas"], ['tu', 'aimes', 'manges', "tu n'aimes pas"], ['il / elle', 'aime', 'mange', "il n'aime pas"],
      ['nous', 'aimons', 'mangeons', "nous n'aimons pas"], ['vous', 'aimez', 'mangez', "vous n'aimez pas"], ['ils / elles', 'aiment', 'mangent', "ils n'aiment pas"]
    ] },
    examples: [
      { fr: "J'aime les légumes.", pt: 'Gosto de legumes.' },
      { fr: "Léa n'aime pas la viande.", pt: 'A Léa não gosta de carne.' },
      { fr: 'Nous mangeons ensemble ce soir.', pt: 'Nós comemos juntos hoje à noite.' },
      { fr: 'Je ne mange pas de sucre.', pt: 'Não como açúcar.' }
    ],
    ptComparison: 'Em português dizemos "gosto **de** queijo". Em francês não tem "de": ***j\'aime le fromage*** (gosto o queijo). E o artigo é obrigatório: nunca *j\'aime fromage*.\n\n' +
      'O "não" do português vem antes do verbo; o francês **abraça** o verbo: *je **ne** mange **pas***. Na fala do dia a dia, o *ne* costuma sumir (*j\'aime pas*), mas escreva sempre as duas partes.\n\n' +
      'Detalhe de ortografia: em *manger*, o **nous** ganha um **e**: *nous mang**e**ons*, para o g continuar com som de "j".'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue o verbo entre parênteses.', items: [
      { text: "J'___ le chocolat. (adorer)", answers: ['adore'] },
      { text: 'Tu ___ le poisson ? (aimer)', answers: ['aimes'] },
      { text: 'Nous ___ ensemble. (manger)', answers: ['mangeons'] },
      { text: 'Vous ___ le thé ? (préférer)', answers: ['préférez'] },
      { text: 'Ils ___ français. (parler)', answers: ['parlent'] }
    ] },
    { type: 'multiple_choice', prompt: 'Passe para a negativa: "J\'aime la viande."', options: ["Je n'aime pas la viande.", "Je ne aime pas la viande.", "Je n'aime la viande pas.", "Je pas aime la viande."], answer: 0,
      explanationPt: '*Ne* vira *n\'* antes de vogal, e o *pas* vem logo depois do verbo.' },
    { type: 'multiple_choice', prompt: '"Eu gosto de queijo."', options: ["J'aime le fromage.", "J'aime de fromage.", "J'aime fromage.", "J'aime du fromage."], answer: 0,
      explanationPt: 'Gostos: ***aimer + le / la / les***, sem "de".' },
    { type: 'fill_blank', prompt: 'Complete com le, la, les ou de.', bank: ['le', 'la', 'les', 'de'], items: [
      { text: "J'adore ___ fromage.", answers: ['le'] },
      { text: 'Je ne mange pas ___ viande.', answers: ['de'] },
      { text: "Tu aimes ___ fraises ?", answers: ['les'] },
      { text: 'Je déteste ___ soupe.', answers: ['la'] }
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je n'aime pas le poisson.", translation: 'Não gosto de peixe.' }
  ],
  tipForBrazilians: '**Gosto: do mais forte ao mais fraco.** Para não repetir sempre *j\'aime*:\n\n' +
    '- ***J\'adore*** = adoro\n' +
    '- ***J\'aime beaucoup*** = gosto muito\n' +
    '- ***J\'aime bien*** = gosto (curiosamente, é **menos** forte que *j\'aime* sozinho!)\n' +
    '- ***Je n\'aime pas trop*** = não gosto muito\n' +
    '- ***Je déteste*** = detesto\n\n' +
    'Cuidado: com pessoas, ***je t\'aime*** = eu te amo. Para um amigo, diga ***je t\'aime bien*** (gosto de você).'
});
