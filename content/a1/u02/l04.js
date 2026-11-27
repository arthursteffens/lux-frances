LUX.registerLesson({
  id: 'a1-u02-l04', level: 'A1', unit: 2, order: 4,
  title: 'Ma famille', titlePt: 'Minha família',
  names: ['Lucas', 'Léa', 'Ana', 'Roberto', 'Cristina', 'Thomas', 'Belo Horizonte', 'Genève'],
  introPt: 'O Lucas mostra à Léa as fotos da família, que ficou em Belo Horizonte. Nesta lição: as palavras da família e os **possessivos** (meu, minha, seu, sua…), que em francês têm uma pegadinha importante.',
  objectives: [
    'Apresentar a sua família.',
    'Usar os possessivos mon, ma, mes, ton, ta, tes, son, sa, ses.',
    'Perguntar quem é alguém: C\'est qui ?'
  ],
  vocabulary: [
    { fr: 'la famille', pt: 'a família', g: 'f', say: 'la fa-MII', ex: 'Voici ma famille.' },
    { fr: 'le père', pt: 'o pai', g: 'm', say: 'le PÉRR', ex: 'Mon père est mécanicien.' },
    { fr: 'la mère', pt: 'a mãe', g: 'f', say: 'la MÉRR', ex: 'Ma mère est professeure.' },
    { fr: 'les parents', pt: 'os pais (pai e mãe)', g: 'm', say: 'lê pa-RRÃ', ex: 'Mes parents habitent au Brésil.' },
    { fr: 'le frère', pt: 'o irmão', g: 'm', say: 'le FRRÉRR', ex: "J'ai un frère." },
    { fr: 'la sœur', pt: 'a irmã', g: 'f', say: 'la SSÖRR', ex: 'Ma sœur s\'appelle Ana.' },
    { fr: 'le mari', pt: 'o marido', g: 'm', say: 'le ma-RRI', ex: 'Son mari est français.' },
    { fr: 'la femme', pt: 'a mulher; a esposa', g: 'f', say: 'la FAM', ex: 'Il habite à Genève avec sa femme.' },
    { fr: "l'enfant", pt: 'a criança; o filho, a filha', g: 'mf', say: 'lã-FÃ', ex: 'Ils ont deux enfants.' },
    { fr: 'habiter', pt: 'morar', pos: 'v', say: 'a-bi-TÊ', ex: "J'habite à Lyon." },
    { fr: "C'est qui ?", pt: 'Quem é?', pos: 'expr', say: 'sé KI', ex: "C'est qui, sur la photo ?" },
    { fr: 'sur', pt: 'em cima de; em (na foto)', pos: 'prep', say: 'SSÜRR', ex: "Sur la photo, c'est mon père." }
  ],
  pronunciation: {
    title: 'Père, mère, frère, sœur',
    textPt: 'As palavras da família têm dois sons que o português não tem do mesmo jeito:\n\n' +
      '- **è** = "é" aberto e longo: ***père*** "PÉRR", ***mère*** "MÉRR", ***frère*** "FRRÉRR".\n' +
      '- **œu** = "ö", um "é" aberto com biquinho: ***sœur*** "SSÖRR".\n\n' +
      'E os possessivos:\n' +
      '- ***mon*** = "mõ" (nasal)\n' +
      '- ***ma*** = "ma"\n' +
      '- ***mes*** = "mê" (o s não soa, a não ser na liaison: *mes amis* = "mê-za-MI")',
    examples: [{ fr: 'mon père', pt: 'meu pai' }, { fr: 'ma mère', pt: 'minha mãe' }, { fr: 'mon frère', pt: 'meu irmão' }, { fr: 'ma sœur', pt: 'minha irmã' }, { fr: 'mes amis', pt: 'liaison: "mê-za-MI"' }]
  },
  reading: {
    genre: 'legendas de fotos',
    title: 'Mon album photo',
    text: "Voici ma famille !\n\n" +
      "Sur la photo, c'est mon père, Roberto. Il a cinquante-huit ans. Il est [[mécanicien|mecânico]].\n\n" +
      "Ma mère s'appelle Cristina. Elle a cinquante-quatre ans et elle est professeure de musique.\n\n" +
      "Et voilà ma sœur, Ana. Elle a vingt-quatre ans. Elle est étudiante et elle adore le français !\n\n" +
      "Mes parents habitent à Belo Horizonte, dans une maison avec un petit jardin. Dans le jardin, il y a un [[manguier|pé de manga]]. Ma sœur habite avec eux.",
    translationPt: 'Esta é a minha família!\n\n' +
      'Na foto é o meu pai, Roberto. Ele tem cinquenta e oito anos. Ele é mecânico.\n\n' +
      'A minha mãe se chama Cristina. Ela tem cinquenta e quatro anos e é professora de música.\n\n' +
      'E esta é a minha irmã, Ana. Ela tem vinte e quatro anos. Ela é estudante e adora francês!\n\n' +
      'Os meus pais moram em Belo Horizonte, numa casa com um jardinzinho. No jardim tem um pé de manga. A minha irmã mora com eles.',
    exercises: [
      { type: 'multiple_choice', prompt: 'Qual é a profissão do pai do Lucas?', options: ['Mecânico.', 'Professor de música.', 'Designer.', 'Estudante.'], answer: 0,
        explanationPt: '"Il est mécanicien."' },
      { type: 'short_answer', prompt: 'Quantos anos tem a Ana? Responda em algarismos.', answers: ['24'],
        explanationPt: '"Elle a vingt-quatre ans."' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'La mère de Lucas est professeure.', answer: 'V', explanationPt: '"elle est professeure de musique".' },
        { text: 'Ana habite à Lyon.', answer: 'F', explanationPt: 'Ela mora com os pais, em Belo Horizonte: "Ma sœur habite avec eux".' },
        { text: 'Lucas a un frère.', answer: 'NM', explanationPt: 'O texto só fala da irmã, Ana. Não diz se ele tem irmãos.' },
        { text: 'Il y a un jardin.', answer: 'V', explanationPt: '"une maison avec un petit jardin".' }
      ] },
      { type: 'match', prompt: 'Ligue cada pessoa à tradução.', pairs: [
        ['mon père', 'meu pai'], ['ma mère', 'minha mãe'], ['ma sœur', 'minha irmã'], ['mes parents', 'meus pais']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'As fotos do Lucas',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: "C'est qui, sur la photo ?", pt: 'Quem é na foto?' },
      { speaker: 'U', text: "C'est ma sœur, Ana.", pt: 'É a minha irmã, Ana.' },
      { speaker: 'L', text: 'Elle est jolie ! Elle a quel âge ?', pt: 'Ela é bonita! Quantos anos ela tem?' },
      { speaker: 'U', text: 'Vingt-quatre ans. Elle est étudiante.', pt: 'Vinte e quatro anos. Ela é estudante.' },
      { speaker: 'L', text: 'Et ça, ce sont tes parents ?', pt: 'E estes são os seus pais?' },
      { speaker: 'U', text: "Oui, c'est mon père et ma mère. Et toi, tu as des frères et sœurs ?", pt: 'Sim, é o meu pai e a minha mãe. E você, tem irmãos?' },
      { speaker: 'L', text: "Oui, j'ai un frère, Thomas. Il a trente ans.", pt: 'Tenho, tenho um irmão, o Thomas. Ele tem trinta anos.' },
      { speaker: 'U', text: 'Il habite à Lyon ?', pt: 'Ele mora em Lyon?' },
      { speaker: 'L', text: 'Non, il habite à Genève, en Suisse, avec sa femme.', pt: 'Não, ele mora em Genebra, na Suíça, com a mulher dele.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quem é o Thomas?', options: ['O irmão da Léa.', 'O pai do Lucas.', 'O marido da Ana.', 'Um amigo do Lucas.'], answer: 0,
        explanationPt: '"j\'ai un frère, Thomas" = tenho um irmão, o Thomas.' },
      { type: 'multiple_choice', prompt: 'Onde mora o Thomas?', options: ['Em Genebra, na Suíça.', 'Em Lyon.', 'Em Annecy.', 'Em Belo Horizonte.'], answer: 0,
        explanationPt: '"il habite à Genève, en Suisse, avec sa femme".' },
      { type: 'listen_choose', audio: "C'est qui, sur la photo ?", prompt: 'Ouça e escolha a pergunta.',
        options: ["C'est qui, sur la photo ?", "C'est quoi, sur la photo ?", 'Ce sont tes parents ?', 'Elle a quel âge ?'], answer: 0,
        explanationPt: '*C\'est qui ?* = quem é? (para pessoas). *C\'est quoi ?* = o que é? (para coisas, informal).' },
      { type: 'dictation', text: "C'est ma sœur, Ana.", explanationPt: '*Ma sœur* = minha irmã. O "œu" soa "ö".' },
      { type: 'multiple_choice', prompt: 'Como se diz "irmãos" (irmãos e irmãs) em francês?', options: ['des frères et sœurs', 'des parents', 'des enfants', 'des frères seulement'], answer: 0,
        explanationPt: '*Tu as des frères et sœurs ?* = você tem irmãos?' }
    ]
  },
  grammar: {
    topicId: 'possessives',
    title: 'Os possessivos: mon, ma, mes…',
    explanationPt: 'Em francês, o possessivo concorda com a **coisa possuída**, não com o dono:\n\n' +
      '- ***mon*** + masculino: *mon père* (meu pai)\n' +
      '- ***ma*** + feminino: *ma mère* (minha mãe)\n' +
      '- ***mes*** + plural: *mes parents* (meus pais)\n\n' +
      'O mesmo vale para "seu" (de você, informal) e para "dele / dela":\n' +
      '- ***ton, ta, tes*** = teu, tua, teus (seu, de você)\n' +
      '- ***son, sa, ses*** = dele **ou** dela\n\n' +
      '**A pegadinha:** *sa femme* = a mulher **dele**; *son mari* = o marido **dela**. O possessivo segue a palavra *femme* (feminina) ou *mari* (masculina), não o dono.\n\n' +
      'Antes de vogal, usa-se ***mon, ton, son*** mesmo com palavra feminina, para soar melhor: *mon amie* (minha amiga), nunca *ma amie*.',
    table: { head: ['', 'masculino', 'feminino', 'plural'], rows: [
      ['meu / minha', 'mon père', 'ma mère', 'mes parents'], ['teu / tua (de você)', 'ton frère', 'ta sœur', 'tes amis'],
      ['dele / dela', 'son mari', 'sa femme', 'ses enfants'], ['nosso / nossa', 'notre appartement', 'notre famille', 'nos voisins'],
      ['do senhor / de vocês', 'votre nom', 'votre adresse', 'vos clés'], ['deles / delas', 'leur père', 'leur maison', 'leurs enfants']
    ] },
    examples: [
      { fr: 'Mon père est mécanicien.', pt: 'Meu pai é mecânico.' },
      { fr: 'Ce sont tes parents ?', pt: 'São os seus pais?' },
      { fr: 'Il habite à Genève avec sa femme.', pt: 'Ele mora em Genebra com a mulher dele.' },
      { fr: "C'est mon amie Nadia.", pt: 'É a minha amiga Nadia.' }
    ],
    ptComparison: 'Em português, "seu pai" pode ser "de você" ou "dele". Em francês fica mais claro:\n' +
      '- ***ton père*** = o pai **de você** (informal)\n' +
      '- ***votre père*** = o pai **do senhor**, ou **de vocês**\n' +
      '- ***son père*** = o pai **dele** ou **dela**\n\n' +
      '***Les parents*** são os **pais** (pai e mãe), não os "parentes". Para "parentes", diga *la famille*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com mon, ma ou mes.', bank: ['mon', 'ma', 'mes'], items: [
      { text: "C'est ___ père.", answers: ['mon'] },
      { text: "C'est ___ sœur.", answers: ['ma'] },
      { text: 'Ce sont ___ parents.', answers: ['mes'] },
      { text: "C'est ___ amie Nadia.", answers: ['mon'] }
    ], explanationPt: '- **père** = masculino → *mon*\n- **sœur** = feminino → *ma*\n- **parents** = plural → *mes*\n- **amie** começa com vogal → *mon*' },
    { type: 'multiple_choice', prompt: '"Thomas mora com a mulher dele."', options: ['Thomas habite avec sa femme.', 'Thomas habite avec son femme.', 'Thomas habite avec ses femme.', 'Thomas habite avec leur femme.'], answer: 0,
      explanationPt: '*Femme* é feminino → **sa**, mesmo sendo a mulher de um homem.' },
    { type: 'multiple_choice', prompt: '"Léa e o marido dela" — como fica "o marido dela"?', options: ['son mari', 'sa mari', 'ses mari', 'leur mari'], answer: 0,
      explanationPt: '*Mari* é masculino → **son**, mesmo sendo o marido de uma mulher.' },
    { type: 'match', prompt: 'Ligue cada palavra à tradução.', pairs: [
      ['le frère', 'o irmão'], ['la femme', 'a mulher, a esposa'], ['le mari', 'o marido'], ["l'enfant", 'a criança, o filho'], ['les parents', 'os pais']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Mes parents habitent à Belo Horizonte.', translation: 'Meus pais moram em Belo Horizonte.' }
  ],
  tipForBrazilians: '**Falso amigo: parents ≠ parentes!** ***Mes parents*** = **meus pais** (pai e mãe). Para os parentes, diga *ma famille*.\n\n' +
    'Mais dois detalhes da família:\n' +
    '- ***la femme*** = a mulher **e** a esposa: *ma femme* = minha esposa.\n' +
    '- ***la fille*** = a menina **e** a filha: *ma fille* = minha filha.'
});
