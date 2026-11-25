LUX.registerLesson({
  id: 'a2-u06-l04', level: 'A2', unit: 6, order: 4,
  title: 'Qu\'est-ce qu\'on lui offre ?', titlePt: 'O que a gente dá para ela?',
  names: ['Léa', 'Lucas', 'Hugo', 'Inès', 'Camille', 'Mme', 'Bernard', 'Ana', 'Brésil', 'Lyon', 'Paris', 'Montréal', 'Sarah'],
  objectives: [
    'Escolher e dar presentes, pedir e dar conselhos.',
    'Usar os pronomes de objeto indireto lui e leur (e me, te, nous, vous).',
    'Diferenciar "le / la / les" (COD) de "lui / leur" (COI).'
  ],
  vocabulary: [
    { fr: 'offrir', pt: 'dar (de presente), oferecer', pos: 'v', ex: 'On lui offre un livre ?' },
    { fr: 'donner', pt: 'dar', pos: 'v', ex: 'Je leur donne mon numéro.' },
    { fr: 'prêter', pt: 'emprestar (a alguém)', pos: 'v', ex: 'Tu me prêtes ton vélo ?' },
    { fr: 'emprunter', pt: 'pegar emprestado', pos: 'v', ex: "J'emprunte la voiture de ma sœur." },
    { fr: 'téléphoner à', pt: 'telefonar para', pos: 'v', ex: 'Je lui téléphone ce soir.' },
    { fr: 'écrire à', pt: 'escrever para', pos: 'v', ex: 'Écris-leur une carte.' },
    { fr: 'plaire à', pt: 'agradar a', pos: 'v', ex: 'Ce cadeau va lui plaire.' },
    { fr: 'le bon cadeau', pt: 'o vale-presente', g: 'm', ex: 'On lui offre un bon cadeau ?' },
    { fr: "l'expérience", pt: 'a experiência', g: 'f', ex: 'Offrez une expérience, pas un objet !' },
    { fr: 'le conseil', pt: 'o conselho, a dica', g: 'm', ex: 'Tu as un conseil à me donner ?' },
    { fr: 'la carte', pt: 'o cartão (de aniversário)', g: 'f', ex: 'On va lui écrire une carte.' },
    { fr: "Ça lui fera plaisir.", pt: 'Ela/ele vai gostar (vai ficar feliz).', pos: 'expr', ex: 'Appelle ta grand-mère, ça lui fera plaisir.' }
  ],
  reading: {
    genre: 'coluna de conselhos',
    title: 'Magazine « Vivre ensemble » — Quel cadeau leur offrir ?',
    text: "Chaque semaine, notre spécialiste répond à vos questions.\n\n" +
      "« Ma meilleure amie fête ses vingt-sept ans. Avec nos amis, nous voulons lui offrir un cadeau original. Elle a déjà tout ! Que pouvons-nous lui offrir ? » — Lucas, Lyon\n\n" +
      "Cher Lucas, quand une personne a déjà tout, ne lui offrez pas un objet : offrez-lui une expérience ! Par exemple, un cours de cuisine, une nuit dans une cabane, un baptême de montgolfière ou des places de concert. Si votre amie aime voyager, offrez-lui un week-end surprise : vous pouvez lui donner une carte avec des indices pour trouver la destination. Et n'oubliez pas de lui écrire quelques mots gentils : c'est souvent le cadeau qu'on garde le plus longtemps.\n\n" +
      "« Mes parents fêtent leurs quarante ans de mariage. Je vis à Paris et eux à Montréal. Qu'est-ce que je peux leur offrir ? » — Sarah, Paris\n\n" +
      "Chère Sarah, la distance n'est pas un problème. Demandez à toute la famille de leur envoyer une photo et un message, et faites un album. Vous pouvez aussi leur téléphoner en vidéo pendant le dîner : ça leur fera très plaisir. Et pourquoi ne pas leur réserver un bon restaurant à Montréal ? Vous leur offrez le repas à distance !",
    exercises: [
      { type: 'multiple_choice', prompt: "Qu'est-ce que le spécialiste conseille à Lucas ?", options: ['Offrir une expérience, pas un objet.', 'Offrir des vêtements.', "Offrir de l'argent.", 'Ne rien offrir.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: "L'amie de Lucas a déjà beaucoup de choses.", answer: 'V', explanationPt: '"Elle a déjà tout !"' },
        { text: 'Les parents de Sarah habitent à Paris.', answer: 'F', explanationPt: 'Sarah mora em Paris; os pais, em Montreal.' },
        { text: 'Les parents de Sarah sont mariés depuis quarante ans.', answer: 'V', explanationPt: '"leurs quarante ans de mariage".' },
        { text: 'Sarah a des frères et sœurs.', answer: 'NM', explanationPt: 'Fala-se de "toute la famille", mas não de irmãos.' },
        { text: 'Selon le spécialiste, les mots gentils sont peu importants.', answer: 'F', explanationPt: 'Pelo contrário: "c\'est souvent le cadeau qu\'on garde le plus longtemps".' }
      ] },
      { type: 'match', prompt: 'Ligue cada ideia ao detalhe do texto.', pairs: [['un week-end surprise', 'si elle aime voyager'], ['un album', 'des photos et des messages de la famille'], ['un appel en vidéo', 'pendant le dîner'], ['une carte avec des indices', 'pour trouver la destination']] },
      { type: 'multiple_choice', prompt: 'Dans « Qu\'est-ce que je peux leur offrir ? », « leur » remplace :', options: ['à mes parents', 'mes parents (COD)', 'leurs cadeaux', 'à Montréal'], answer: 0 },
      { type: 'fill_blank', prompt: 'Complete com lui ou leur, como no texto.', bank: ['lui', 'leur'], items: [
        { text: 'Nous voulons ___ offrir un cadeau original. (à notre amie)', answers: ['lui'] },
        { text: 'Vous pouvez ___ téléphoner en vidéo. (aux parents)', answers: ['leur'] },
        { text: "N'oubliez pas de ___ écrire quelques mots. (à votre amie)", answers: ['lui'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'O presente da Léa',
    speakers: [{ id: 'H', name: 'Hugo', gender: 'm' }, { id: 'U', name: 'Lucas', gender: 'm' }, { id: 'C', name: 'Camille', gender: 'f' }],
    script: [
      { speaker: 'H', text: "Bon, alors, qu'est-ce qu'on offre à Léa ?" },
      { speaker: 'U', text: "J'ai lu un article : il faut lui offrir une expérience. Elle adore la montagne… Un week-end dans un refuge ?" },
      { speaker: 'C', text: "Bonne idée ! Mais elle travaille souvent le week-end. Il faut d'abord demander à sa cheffe." },
      { speaker: 'H', text: "Je peux lui parler, à sa cheffe. C'est la tante d'Inès !" },
      { speaker: 'U', text: "Parfait. Et on lui donne aussi un petit objet le jour de la fête ? Pour ouvrir quelque chose." },
      { speaker: 'C', text: 'Un livre sur les randonnées dans les Alpes. Ça va lui plaire.' },
      { speaker: 'H', text: "Et pour Mme Bernard ? Elle fait le gâteau, on lui offre des fleurs ?" },
      { speaker: 'U', text: "Oui, et on va aussi remercier les voisins. On leur apporte une part de gâteau dimanche." },
      { speaker: 'C', text: "Super. Bon, je vous laisse, je dois téléphoner à mes parents. Je leur ai promis d'appeler ce soir." }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: "Quel est le cadeau principal pour Léa ?", options: ['Un week-end dans un refuge à la montagne.', 'Un livre de cuisine.', 'Des fleurs.', 'Une robe.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: "La cheffe de Léa est la tante d'Inès.", answer: 'V', explanationPt: '"C\'est la tante d\'Inès !"' },
        { text: 'Ils vont offrir des fleurs à Mme Bernard.', answer: 'V', explanationPt: '"on lui offre des fleurs ?" — "Oui".' },
        { text: 'Camille doit téléphoner à sa sœur.', answer: 'F', explanationPt: 'Ela precisa ligar para os pais.' },
        { text: 'Le livre coûte vingt euros.', answer: 'NM', explanationPt: 'O preço não é citado.' }
      ] },
      { type: 'listen_choose', audio: 'Ça va lui plaire.', prompt: 'O que Camille diz?',
        options: ['Ela vai gostar.', 'Ela vai agradecer.', 'Isso vai agradar a eles.', 'Ela vai pagar.'], answer: 0 },
      { type: 'dictation', text: "Qu'est-ce qu'on offre à Léa ?" },
      { type: 'dictation', text: 'On leur apporte une part de gâteau.' }
    ]
  },
  grammar: {
    topicId: 'cod-coi',
    title: 'Pronomes de objeto indireto (COI): lui, leur',
    explanationPt: 'O **COI** vem com a preposição **à** + pessoa: *Je téléphone **à Léa**. J\'offre un livre **à mes parents**.* Para não repetir:\n\n' +
      '- **lui** = a ele **ou** a ela (masculino e feminino!)\n- **leur** = a eles / a elas\n- **me, te, nous, vous** = me, te, nos, vos / ao senhor\n\n' +
      '**Posição:** igual ao COD — antes do verbo conjugado (*je **lui** parle*), antes do infinitivo (*je vais **leur** écrire*), antes do auxiliar (*je **lui** ai téléphoné* — sem concordância do particípio). Imperativo: *Offre-**lui** des fleurs ! Écrivez-**leur** !*\n\n' +
      '**Verbos com COI de pessoa** (aprenda com o "à"): *parler à, téléphoner à, écrire à, répondre à, donner à, offrir à, prêter à, demander à, dire à, plaire à, sourire à*.\n\n' +
      '**Cuidado:** *leur* pronome é **invariável** (*je leur parle*), diferente do possessivo *leur / leurs* (*leurs parents*).',
    table: { head: ['COD (sem preposição)', 'COI (à + pessoa)'], rows: [
      ['Je vois Léa. → Je la vois.', 'Je parle à Léa. → Je lui parle.'], ['Je vois Hugo. → Je le vois.', 'Je parle à Hugo. → Je lui parle.'],
      ['Je vois mes amis. → Je les vois.', 'Je parle à mes amis. → Je leur parle.'], ["J'aide ma mère. → Je l'aide.", "Je téléphone à ma mère. → Je lui téléphone."]
    ] },
    examples: [
      { fr: 'Tu as répondu à Camille ? — Oui, je lui ai répondu.', pt: 'Você respondeu à Camille? — Sim, respondi a ela.' },
      { fr: 'Offrons-lui un week-end à la montagne !', pt: 'Vamos dar a ela um fim de semana na montanha!' },
      { fr: "Je leur ai promis d'appeler.", pt: 'Prometi a eles que ia ligar.' },
      { fr: 'Ce film ne me plaît pas.', pt: 'Não gosto deste filme.' }
    ],
    ptComparison: '**"Lui" é unissex!** *Je lui parle* pode ser "falo com ele" ou "falo com ela". Não confunda com *lui* pronome tônico (*avec lui* = com ele).\n\n' +
      'No Brasil dizemos "dei o livro **pra ele**", "liguei **pra ela**", com o pronome depois. Em francês, o pronome vem **antes**: *je **lui** ai donné le livre, je **lui** ai téléphoné*.\n\n' +
      '**Atenção às regências diferentes:** *aider quelqu\'un* pede COD (*je **l\'**aide*), e *téléphoner **à** quelqu\'un* pede COI (*je **lui** téléphone*) — mesmo que em português digamos "ligar **para**".'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Substitua por lui ou leur.', items: [
      { text: 'Je parle à mon frère. → Je ___ parle.', answers: ['lui'] },
      { text: 'Tu écris à tes grands-parents ? → Tu ___ écris ?', answers: ['leur'] },
      { text: "Elle a téléphoné à Léa. → Elle ___ a téléphoné.", answers: ['lui'] },
      { text: 'Nous offrons des fleurs aux voisins. → Nous ___ offrons des fleurs.', answers: ['leur'] }
    ] },
    { type: 'fill_blank', prompt: 'COD ou COI? Complete com le, la, les, lui ou leur.', bank: ['le', 'la', 'les', 'lui', 'leur'], items: [
      { text: 'Je regarde Camille. → Je ___ regarde.', answers: ['la'] },
      { text: 'Je réponds à Camille. → Je ___ réponds.', answers: ['lui'] },
      { text: 'Je regarde les enfants. → Je ___ regarde.', answers: ['les'] },
      { text: 'Je souris aux enfants. → Je ___ souris.', answers: ['leur'] }
    ] },
    { type: 'multiple_choice', prompt: '"Dei um presente pra ela."', options: ["Je lui ai offert un cadeau.", "Je l'ai offert un cadeau.", "J'ai offert lui un cadeau.", "Je la ai offert un cadeau."], answer: 0 },
    { type: 'multiple_choice', prompt: 'Imperativo: "Escreva para eles!"', options: ['Écrivez-leur !', 'Leur écrivez !', 'Écrivez-les !', 'Écrivez-leurs !'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je vais lui téléphoner ce soir.', translation: 'Vou ligar para ele/ela hoje à noite.' }
  ],
  tipForBrazilians: '**Presentes na França:** é educado levar algo quando se é convidado para jantar — uma garrafa de vinho, flores (não crisântemos, que são para o cemitério!) ou chocolates. O presente costuma ser **aberto na hora**, na frente de quem deu. E diga *Il ne fallait pas !* ("não precisava!") ao receber — é a fórmula de cortesia.'
});
