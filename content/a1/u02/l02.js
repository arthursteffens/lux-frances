LUX.registerLesson({
  id: 'a1-u02-l02', level: 'A1', unit: 2, order: 2,
  title: 'Dans ma valise', titlePt: 'Na minha mala',
  names: ['Lucas', 'Léa', 'Lyon'],
  introPt: 'O Lucas desfaz a mala e mostra um presente para a Léa. Nesta lição: o **plural** (que quase nunca se ouve!), ***il y a*** (tem, há) e a pergunta mais útil para quem está aprendendo: ***Qu\'est-ce que c\'est ?*** (o que é isso?).',
  objectives: [
    'Nomear objetos pessoais.',
    'Fazer o plural dos substantivos.',
    "Dizer o que tem e o que não tem: il y a, il n'y a pas de."
  ],
  vocabulary: [
    { fr: 'la valise', pt: 'a mala', g: 'f', say: 'la va-LIZ', ex: 'Ma valise est grande.' },
    { fr: 'le sac', pt: 'a bolsa, a mochila', g: 'm', say: 'le SSAK', ex: 'Dans mon sac, il y a mon portable.', d: true },
    { fr: 'le livre', pt: 'o livro', g: 'm', say: 'le LIVRR', ex: 'Il y a deux livres.' },
    { fr: 'le portable', pt: 'o celular', g: 'm', say: 'le porr-TABL', ex: 'Mon portable est dans mon sac.' },
    { fr: "l'ordinateur", pt: 'o computador', g: 'm', say: 'lorr-di-na-TÖRR', ex: "Voici mon ordinateur." },
    { fr: 'les vêtements', pt: 'as roupas', g: 'm', say: 'lê vét-MÃ', ex: 'Il y a des vêtements dans la valise.' },
    { fr: 'la photo', pt: 'a foto', g: 'f', say: 'la fô-TÔ', ex: 'Ce sont des photos de ma famille.' },
    { fr: 'le cadeau', pt: 'o presente', g: 'm', say: 'le ka-DÔ', ex: "C'est un cadeau pour toi !" },
    { fr: 'les lunettes', pt: 'os óculos', g: 'f', say: 'lê lü-NÉT', ex: 'Où sont mes lunettes ?' },
    { fr: 'le parapluie', pt: 'o guarda-chuva', g: 'm', say: 'le pa-rra-PLÜI', ex: "Je n'ai pas de parapluie." },
    { fr: "Qu'est-ce que c'est ?", pt: 'O que é isso?', pos: 'expr', say: 'kés-ke-SSÉ', ex: "Qu'est-ce que c'est ? C'est un cadeau." },
    { fr: 'pour', pt: 'para', pos: 'prep', say: 'PURR', ex: "C'est pour toi." }
  ],
  pronunciation: {
    title: 'O plural que não se ouve (e a liaison)',
    textPt: 'O **s** do plural é escrito, mas **não soa**:\n\n' +
      '- ***un livre*** e ***des livres*** = "ẽ LIVRR" e "dê LIVRR": a palavra soa igual.\n' +
      '- Quem mostra o plural é o **artigo**: *le* "lö" × *les* "lê"; *un* "ẽ" × *des* "dê".\n\n' +
      'Mas, se a palavra seguinte começa com vogal, o s de *les* e *des* "acorda" e soa como **z**. É a ***liaison*** (ligação):\n' +
      '- ***les amis*** = "lê-za-MI"\n' +
      '- ***des ordinateurs*** = "dê-zorr-di-na-TÖRR"',
    examples: [{ fr: 'un livre', pt: 'singular' }, { fr: 'des livres', pt: 'plural: soa igual, só o artigo muda' }, { fr: 'les amis', pt: 'liaison: "lê-za-MI"' }, { fr: 'des ordinateurs', pt: 'liaison com som de z' }]
  },
  reading: {
    genre: 'diário',
    title: 'Le journal de Lucas',
    text: "Dans ma valise, il y a des vêtements, deux livres en portugais, des photos de ma famille et mon ordinateur.\n\n" +
      "Il y a aussi un cadeau pour Léa : un [[paquet|pacote]] de café brésilien !\n\n" +
      "Mais il n'y a pas de parapluie… et à Lyon, il [[pleut|chove]] beaucoup !\n\n" +
      "Dans mon sac, il y a mon portable, mes lunettes et mon [[passeport|passaporte]]. Les clés de l'appartement sont dans ma [[poche|bolso]].",
    translationPt: 'Na minha mala tem roupas, dois livros em português, fotos da minha família e o meu computador.\n\n' +
      'Tem também um presente para a Léa: um pacote de café brasileiro!\n\n' +
      'Mas não tem guarda-chuva… e em Lyon chove muito!\n\n' +
      'Na minha mochila tem o meu celular, os meus óculos e o meu passaporte. As chaves do apartamento estão no meu bolso.',
    exercises: [
      { type: 'multiple_choice', prompt: 'Qual é o presente para a Léa?', options: ['Um pacote de café brasileiro.', 'Um livro em português.', 'Um guarda-chuva.', 'Uma foto.'], answer: 0,
        explanationPt: '"un cadeau pour Léa : un paquet de café brésilien".' },
      { type: 'multiple_choice', prompt: 'O que falta na mala do Lucas?', options: ['Um guarda-chuva.', 'Roupas.', 'O computador.', 'Livros.'], answer: 0,
        explanationPt: '"il n\'y a pas de parapluie" = não tem guarda-chuva.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Il y a deux livres dans la valise.', answer: 'V', explanationPt: '"deux livres en portugais".' },
        { text: 'Le portable est dans la valise.', answer: 'F', explanationPt: 'O celular está na **mochila**: "Dans mon sac, il y a mon portable".' },
        { text: 'Les livres sont en français.', answer: 'F', explanationPt: 'São em português: "en portugais".' },
        { text: 'Lucas a trois valises.', answer: 'NM', explanationPt: 'O texto fala de "ma valise", mas não diz quantas ele tem.' }
      ] },
      { type: 'match', prompt: 'Ligue cada objeto à tradução.', pairs: [
        ['la valise', 'a mala'], ['le sac', 'a mochila'], ['les lunettes', 'os óculos'], ['le portable', 'o celular'], ['le parapluie', 'o guarda-chuva']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Um presente para a Léa',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Léa, voilà, pour toi !', pt: 'Léa, aqui, para você!' },
      { speaker: 'L', text: "Pour moi ? Qu'est-ce que c'est ?", pt: 'Para mim? O que é isso?' },
      { speaker: 'U', text: "C'est un paquet de café brésilien.", pt: 'É um pacote de café brasileiro.' },
      { speaker: 'L', text: "Oh, merci, c'est gentil ! J'adore le café !", pt: 'Ah, obrigada, que gentil! Eu adoro café!' },
      { speaker: 'L', text: 'Lucas, tu as un parapluie ? Il pleut demain.', pt: 'Lucas, você tem guarda-chuva? Vai chover amanhã.' },
      { speaker: 'U', text: "Non, je n'ai pas de parapluie.", pt: 'Não, eu não tenho guarda-chuva.' },
      { speaker: 'L', text: "Pas de problème. Il y a des parapluies dans l'entrée.", pt: 'Sem problema. Tem guarda-chuvas na entrada.' },
      { speaker: 'U', text: 'Super, merci !', pt: 'Ótimo, obrigado!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Qual é a reação da Léa ao presente?', options: ['Ela adora café e agradece.', 'Ela não gosta de café.', 'Ela não entende o presente.', 'Ela já tem café.'], answer: 0,
        explanationPt: '"Oh, merci, c\'est gentil ! J\'adore le café !"' },
      { type: 'listen_choose', audio: "Non, je n'ai pas de parapluie.", prompt: 'Ouça e escolha o que o Lucas disse.',
        options: ["Non, je n'ai pas de parapluie.", "Oui, j'ai un parapluie.", "Non, il n'y a pas de parapluie.", "Non, je n'ai pas de valise."], answer: 0,
        explanationPt: '*Je n\'ai pas de…* = eu não tenho…' },
      { type: 'multiple_choice', prompt: 'Onde estão os guarda-chuvas?', options: ['Na entrada.', 'Na cozinha.', 'No quarto do Lucas.', 'Na mala.'], answer: 0,
        explanationPt: '"Il y a des parapluies dans l\'entrée." *L\'entrée* = a entrada, o hall.' },
      { type: 'dictation', text: "Qu'est-ce que c'est ?", explanationPt: 'Soa "kés-ke-SSÉ", tudo junto.' },
      { type: 'dictation', text: "C'est un cadeau pour toi.", explanationPt: '*Cadeau* = presente; o "eau" soa "ô".' }
    ]
  },
  grammar: {
    topicId: 'il-y-a',
    title: "O plural, il y a e il n'y a pas de",
    explanationPt: '**O plural** quase sempre é só acrescentar **-s** (que não soa):\n' +
      '- ***un livre*** → *des livres*\n' +
      '- ***la photo*** → *les photos*\n' +
      '- Palavras em **-eau** ganham **-x**: ***un cadeau*** → *des cadeaux*\n\n' +
      '***Il y a*** = "tem" ou "há". Não muda no plural:\n' +
      '- *Il y a **un** cadeau.* (tem um presente)\n' +
      '- *Il y a **des** photos.* (tem fotos)\n\n' +
      'Na negação, ***un, une, des*** viram ***de*** (ou *d\'* antes de vogal):\n' +
      '- *Il y a un parapluie.* → *Il **n\'**y a **pas de** parapluie.*\n' +
      '- *J\'ai des photos.* → *Je **n\'**ai **pas de** photos.*\n\n' +
      'Para perguntar o que é algo: ***Qu\'est-ce que c\'est ?*** Resposta: ***C\'est*** *un cadeau* (singular) ou ***Ce sont*** *des photos* (plural).',
    table: { head: ['afirmativo', 'negativo', 'português'], rows: [
      ['Il y a un livre.', "Il n'y a pas de livre.", 'Tem / não tem livro.'], ['Il y a une valise.', "Il n'y a pas de valise.", 'Tem / não tem mala.'],
      ['Il y a des photos.', "Il n'y a pas de photos.", 'Tem / não tem fotos.'], ["J'ai un ordinateur.", "Je n'ai pas d'ordinateur.", 'Tenho / não tenho computador.']
    ] },
    examples: [
      { fr: 'Il y a des vêtements dans la valise.', pt: 'Tem roupas na mala.' },
      { fr: "Il n'y a pas de parapluie.", pt: 'Não tem guarda-chuva.' },
      { fr: "Qu'est-ce que c'est ? Ce sont des lunettes.", pt: 'O que é isso? São óculos.' },
      { fr: 'Il y a deux cadeaux.', pt: 'Tem dois presentes.' }
    ],
    ptComparison: 'Em português, "tem roupas na mala" não tem artigo. Em francês, o plural precisa de ***des***: *il y a **des** vêtements*. Nunca diga *il y a vêtements*.\n\n' +
      'A negação tem **duas partes**, uma de cada lado do verbo: ***ne*** (vira *n\'* antes de vogal) + verbo + ***pas***. Você vai ver isso em detalhe na próxima lição.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Escreva o plural.', items: [
      { text: 'un livre → des ___', answers: ['livres'] },
      { text: 'une photo → des ___', answers: ['photos'] },
      { text: 'un cadeau → des ___', answers: ['cadeaux'] },
      { text: 'une valise → des ___', answers: ['valises'] }
    ], explanationPt: 'Quase sempre **-s**. Palavras em **-eau** ganham **-x**: *cadeaux*.' },
    { type: 'multiple_choice', prompt: '"Não tem televisão."', options: ["Il n'y a pas de télé.", "Il n'y a pas une télé.", "Il y a pas télé.", "Il n'a pas de télé."], answer: 0,
      explanationPt: 'Negação: ***il n\'y a pas de*** + palavra.' },
    { type: 'multiple_choice', prompt: '"O que é isso?" — "São fotos."', options: ["Qu'est-ce que c'est ? — Ce sont des photos.", "Qu'est-ce que c'est ? — C'est photos.", "Qui est-ce ? — Ce sont des photos.", "Qu'est-ce que c'est ? — Il y a photos."], answer: 0,
      explanationPt: 'Plural: ***ce sont des***…' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Il n'y a pas de parapluie.", translation: 'Não tem guarda-chuva.' },
    { type: 'fill_blank', prompt: 'Complete com un, une, des ou de.', bank: ['un', 'une', 'des', 'de'], items: [
      { text: 'Il y a ___ ordinateur.', answers: ['un'] },
      { text: 'Il y a ___ lunettes.', answers: ['des'] },
      { text: "Il n'y a pas ___ valise.", answers: ['de'] },
      { text: 'Il y a ___ photo.', answers: ['une'] }
    ] }
  ],
  tipForBrazilians: '***Qu\'est-ce que c\'est ?*** é a sua melhor amiga. Aponte para qualquer coisa e pergunte: os franceses vão adorar ensinar.\n\n' +
    'Outras perguntas de sobrevivência:\n' +
    '- ***Comment on dit… en français ?*** = Como se diz… em francês?\n' +
    '- ***Ça veut dire quoi ?*** = O que isso quer dizer?\n' +
    '- ***Vous pouvez parler plus lentement ?*** = Pode falar mais devagar?'
});
