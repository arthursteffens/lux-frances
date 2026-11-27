LUX.registerLesson({
  id: 'a1-u03-l05', level: 'A1', unit: 3, order: 5, review: true,
  title: 'Le dîner brésilien', titlePt: 'O jantar brasileiro (revisão da unidade)',
  names: ['Lucas', 'Léa', 'Nadia', 'Bernard', 'Brésil', 'Minas Gerais', 'pão de queijo'],
  introPt: 'Revisão da Unidade 3. O Lucas convida as amigas para um jantar brasileiro e prepara pão de queijo! Você vai revisar pedidos, preços, quantidades, gostos e a negação.',
  objectives: [
    'Revisar comidas, quantidades, preços e gostos.',
    'Oferecer e aceitar (ou recusar) comida com educação.',
    'Comparar os verbos em -er com être, avoir e prendre.'
  ],
  vocabulary: [
    { fr: 'le dîner', pt: 'o jantar', g: 'm', say: 'le di-NÊ', ex: 'Le dîner est à huit heures.' },
    { fr: 'inviter', pt: 'convidar', pos: 'v', say: 'ẽ-vi-TÊ', ex: "J'invite mes amies." },
    { fr: 'cuisiner', pt: 'cozinhar', pos: 'v', say: 'kü-i-zi-NÊ', ex: 'Lucas cuisine bien.' },
    { fr: 'délicieux / délicieuse', pt: 'delicioso(a)', pos: 'adj', say: 'dê-li-SSIÖ / dê-li-SSIÖZ', ex: "C'est délicieux !" },
    { fr: 'encore', pt: 'mais (repetir); ainda', pos: 'adv', say: 'ã-KÓRR', ex: 'Encore un peu de riz ?' },
    { fr: 'le dessert', pt: 'a sobremesa', g: 'm', say: 'le dê-SSÉRR', ex: 'Et comme dessert ?', d: true },
    { fr: 'Non merci, ça va.', pt: 'Não, obrigado, estou satisfeito(a).', pos: 'expr', say: 'nõ mérr-SSI, ssa VA', ex: 'Encore du gâteau ? — Non merci, ça va.' },
    { fr: 'la recette', pt: 'a receita', g: 'f', say: 'la rre-SSÉT', ex: "C'est une recette de ma mère." }
  ],
  pronunciation: {
    title: 'Revisão: os sons do jantar',
    textPt: 'Releia em voz alta, prestando atenção:\n\n' +
      '- **nasais:** *pain*, *viande*, *bon*\n' +
      '- **oi = "uá":** *trois*, *voilà*\n' +
      '- **e final que acorda a consoante:** *délicieux* "dê-li-SSIÖ" × *délicieuse* "dê-li-SSIÖZ"\n' +
      '- **números grandes:** *soixante-dix*, *quatre-vingts*',
    examples: [{ fr: "C'est délicieux !", pt: 'É delicioso!' }, { fr: 'La recette est délicieuse.', pt: 'A receita é deliciosa.' }, { fr: 'Encore un peu de pain ?', pt: 'Mais um pouco de pão?' }, { fr: 'quatre-vingts', pt: '80' }]
  },
  reading: {
    genre: 'mensagem e receita',
    title: 'Un dîner brésilien',
    text: "Salut les filles !\n\n" +
      "Samedi soir, j'invite Léa, Nadia et madame Bernard à un dîner brésilien à l'appartement. Au menu : du riz, des haricots noirs et une salade de tomates. Et en entrée, des pains au fromage : les « pão de queijo », une recette de ma mère, du Minas Gerais !\n\n" +
      "Pour la recette, il faut un kilo de [[farine de manioc|polvilho]], trois œufs, un peu de lait, de l'huile et beaucoup de fromage.\n\n" +
      "Vous n'aimez pas la viande ? Pas de problème : il n'y a pas de viande !\n\n" +
      "Lucas",
    translationPt: 'Oi, meninas!\n\n' +
      'Sábado à noite, convido a Léa, a Nadia e a senhora Bernard para um jantar brasileiro no apartamento. No cardápio: arroz, feijão-preto e uma salada de tomate. E de entrada, pães de queijo: os "pão de queijo", uma receita da minha mãe, de Minas Gerais!\n\n' +
      'Para a receita, é preciso um quilo de polvilho, três ovos, um pouco de leite, óleo e muito queijo.\n\n' +
      'Vocês não gostam de carne? Sem problema: não tem carne!\n\nLucas',
    exercises: [
      { type: 'multiple_choice', prompt: 'O que tem no cardápio?', options: ['Arroz, feijão-preto, salada de tomate e pão de queijo.', 'Carne, arroz e salada.', 'Peixe e legumes.', 'Só pão de queijo.'], answer: 0,
        explanationPt: '"du riz, des haricots noirs et une salade de tomates" + "des pains au fromage".' },
      { type: 'short_answer', prompt: 'Quantos ovos a receita leva? Responda em algarismos.', answers: ['3'],
        explanationPt: '"trois œufs" = três ovos.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Il y a de la viande au dîner.', answer: 'F', explanationPt: '"il n\'y a pas de viande !"' },
        { text: 'La recette est de la mère de Lucas.', answer: 'V', explanationPt: '"une recette de ma mère".' },
        { text: 'Le dîner est samedi soir.', answer: 'V', explanationPt: '"Samedi soir, j\'invite…"' },
        { text: 'Nadia aime le pão de queijo.', answer: 'NM', explanationPt: 'A mensagem é antes do jantar: ainda não sabemos!' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com a quantidade do texto.', items: [
        { text: 'un ___ de farine de manioc', answers: ['kilo'] },
        { text: 'un ___ de lait', answers: ['peu'] },
        { text: '___ de fromage', answers: ['beaucoup'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'À mesa',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'B', name: 'Mme Bernard', gender: 'f' }, { id: 'N', name: 'Nadia', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Voilà, les pains au fromage ! Bon appétit !', pt: 'Aqui estão os pães de queijo! Bom apetite!' },
      { speaker: 'B', text: "Mmm, c'est délicieux ! C'est une recette brésilienne ?", pt: 'Hum, é delicioso! É uma receita brasileira?' },
      { speaker: 'U', text: "Oui, c'est la recette de ma mère.", pt: 'Sim, é a receita da minha mãe.' },
      { speaker: 'N', text: "J'adore ! Et les haricots noirs aussi. Tu cuisines très bien, Lucas !", pt: 'Adorei! E o feijão-preto também. Você cozinha muito bem, Lucas!' },
      { speaker: 'U', text: 'Merci ! Encore un peu de riz, madame Bernard ?', pt: 'Obrigado! Mais um pouco de arroz, senhora Bernard?' },
      { speaker: 'B', text: 'Oui, avec plaisir ! Et un peu de salade, merci.', pt: 'Sim, com prazer! E um pouco de salada, obrigada.' },
      { speaker: 'U', text: 'Et toi, Nadia ? Encore des pains au fromage ?', pt: 'E você, Nadia? Mais pão de queijo?' },
      { speaker: 'N', text: "Non merci, ça va. Il y a un dessert ?", pt: 'Não, obrigada, estou satisfeita. Tem sobremesa?' },
      { speaker: 'U', text: 'Oui, une tarte aux pommes… de la boulangerie !', pt: 'Tem, uma torta de maçã… da padaria!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'O que a senhora Bernard acha do pão de queijo?', options: ['Delicioso.', 'Muito salgado.', 'Ela não gosta.', 'Ela não prova.'], answer: 0,
        explanationPt: '"Mmm, c\'est délicieux !"' },
      { type: 'multiple_choice', prompt: 'Como a Nadia recusa mais pão de queijo?', options: ['Non merci, ça va.', 'Je déteste !', "Je n'aime pas.", 'Encore, merci !'], answer: 0,
        explanationPt: '*Non merci, ça va* = não, obrigada, estou satisfeita. É a recusa educada.' },
      { type: 'multiple_choice', prompt: 'De onde é a sobremesa?', options: ['Da padaria.', 'Do Brasil.', 'Da senhora Bernard.', 'Da feira.'], answer: 0,
        explanationPt: '"une tarte aux pommes… de la boulangerie !"' },
      { type: 'listen_choose', audio: 'Oui, avec plaisir !', prompt: 'Ouça e escolha a resposta da senhora Bernard.',
        options: ['Oui, avec plaisir !', 'Non merci, ça va.', "C'est délicieux !", 'Bon appétit !'], answer: 0,
        explanationPt: '*Avec plaisir* = com prazer. Ótimo para aceitar uma oferta.' },
      { type: 'dictation', text: 'Tu cuisines très bien !', explanationPt: '*Cuisiner* (cozinhar) é um verbo em -er: *tu cuisines*.' }
    ]
  },
  grammar: {
    topicId: 'present-irregular',
    title: 'Revisão: verbos em -er × être, avoir, prendre',
    explanationPt: 'Até aqui você viu dois tipos de verbo no presente:\n\n' +
      '**Regulares em -er** (a grande maioria): o mesmo modelo para todos.\n' +
      '- *aimer, manger, cuisiner, inviter, habiter, parler, détester…*\n' +
      '- *je cuisine, tu cuisines, il cuisine, nous cuisinons, vous cuisinez, ils cuisinent*\n\n' +
      '**Irregulares** (poucos, mas os mais usados): cada um tem a sua forma.\n' +
      '- ***être***: *je suis, tu es, il est, nous sommes, vous êtes, ils sont*\n' +
      '- ***avoir***: *j\'ai, tu as, il a, nous avons, vous avez, ils ont*\n' +
      '- ***prendre***: *je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent*\n\n' +
      'Dica: na aba **Verbos**, qualquer verbo mostra a conjugação completa, com áudio.',
    table: { head: ['', 'cuisiner (-er)', 'être', 'avoir', 'prendre'], rows: [
      ["je / j'", 'cuisine', 'suis', 'ai', 'prends'], ['tu', 'cuisines', 'es', 'as', 'prends'], ['il / elle', 'cuisine', 'est', 'a', 'prend'],
      ['nous', 'cuisinons', 'sommes', 'avons', 'prenons'], ['vous', 'cuisinez', 'êtes', 'avez', 'prenez'], ['ils / elles', 'cuisinent', 'sont', 'ont', 'prennent']
    ] },
    examples: [
      { fr: "J'invite mes amies samedi.", pt: 'Convido as minhas amigas no sábado.' },
      { fr: 'Nous sommes quatre au dîner.', pt: 'Somos quatro no jantar.' },
      { fr: 'Tu as faim ?', pt: 'Você está com fome?' },
      { fr: 'Vous prenez du dessert ?', pt: 'Vocês vão querer sobremesa?' }
    ],
    ptComparison: 'Repare em ***avoir faim*** = "estar com fome" (literalmente, "ter fome"). O francês usa *avoir* em várias sensações:\n' +
      '- ***avoir faim*** = estar com fome\n' +
      '- ***avoir soif*** = estar com sede\n' +
      '- ***avoir chaud / froid*** = estar com calor / frio'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue o verbo entre parênteses.', items: [
      { text: "Lucas ___ ses amies. (inviter)", answers: ['invite'] },
      { text: 'Nous ___ quatre. (être)', answers: ['sommes'] },
      { text: 'Tu ___ faim ? (avoir)', answers: ['as'] },
      { text: 'Vous ___ du riz ? (prendre)', answers: ['prenez'] },
      { text: 'Elles ___ très bien. (cuisiner)', answers: ['cuisinent'] }
    ] },
    { type: 'multiple_choice', prompt: 'Alguém oferece mais comida e você está satisfeito. O que dizer?', options: ['Non merci, ça va.', "Je n'aime pas.", 'Je déteste.', 'Non !'], answer: 0,
      explanationPt: '*Non merci, ça va* é a recusa educada.' },
    { type: 'multiple_choice', prompt: '"Estou com sede."', options: ["J'ai soif.", 'Je suis soif.', "J'ai sede.", 'Je soif.'], answer: 0,
      explanationPt: 'Sensações com ***avoir***: *j\'ai soif, j\'ai faim*.' },
    { type: 'fill_blank', prompt: 'Complete com de, le ou un.', bank: ['de', 'le', 'un'], items: [
      { text: "J'adore ___ fromage.", answers: ['le'] },
      { text: 'Encore ___ peu de riz ?', answers: ['un'] },
      { text: "Il n'y a pas ___ viande.", answers: ['de'] },
      { text: 'beaucoup ___ fromage', answers: ['de'] }
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "C'est une recette de ma mère.", translation: 'É uma receita da minha mãe.' }
  ],
  tipForBrazilians: '**Unidade 3 concluída!** Você já se vira no café, na padaria e na feira.\n\n' +
    'À mesa, na França:\n' +
    '- Antes de comer, diz-se ***Bon appétit !***\n' +
    '- O pão fica **direto na mesa**, ao lado do prato, e serve para ajudar a empurrar a comida.\n' +
    '- Para aceitar: ***Avec plaisir !*** Para recusar: ***Non merci, ça va.***\n' +
    '- Para elogiar: ***C\'est délicieux !*** ou ***C\'est très bon !***'
});
