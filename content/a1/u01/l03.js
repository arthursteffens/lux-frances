LUX.registerLesson({
  id: 'a1-u01-l03', level: 'A1', unit: 1, order: 3,
  title: 'Ça va ?', titlePt: 'Tudo bem?',
  names: ['Lucas', 'Léa', 'Ana', 'Bernard', 'Lyon'],
  introPt: 'Primeira manhã em Lyon! Na escada do prédio, o Lucas conhece a vizinha, a senhora Bernard. Você vai ver a diferença entre falar com uma amiga (***tu***) e com uma senhora que acabou de conhecer (***vous***), e aprender os números de 0 a 10.',
  objectives: [
    'Perguntar e responder "tudo bem?" (ça va ?, comment allez-vous ?).',
    'Escolher entre tu (informal) e vous (formal).',
    'Contar de 0 a 10.'
  ],
  vocabulary: [
    { fr: 'Ça va ?', pt: 'Tudo bem? (informal)', pos: 'expr', say: 'ssa VA', ex: 'Salut, Léa ! Ça va ?' },
    { fr: 'ça va bien', pt: 'tudo bem, estou bem', pos: 'expr', say: 'ssa va BIẼ', ex: 'Ça va bien, merci.' },
    { fr: 'très bien', pt: 'muito bem', pos: 'expr', say: 'tré BIẼ', ex: 'Très bien, et toi ?' },
    { fr: 'pas mal', pt: 'nada mal, tudo certo', pos: 'expr', say: 'pa MAL', ex: 'Ça va ? — Pas mal !' },
    { fr: 'Comment allez-vous ?', pt: 'Como vai o senhor / a senhora? (formal)', pos: 'expr', say: 'kô-mã-ta-lê-VU', ex: 'Bonjour, madame. Comment allez-vous ?' },
    { fr: 'et vous ?', pt: 'e o senhor? e a senhora?', pos: 'expr', say: 'ê VU', ex: 'Très bien, merci. Et vous ?' },
    { fr: 'tu', pt: 'você (informal)', pos: 'pron', say: 'TÜ', ex: 'Tu es Léa ?' },
    { fr: 'vous', pt: 'o senhor, a senhora (formal); vocês', pos: 'pron', say: 'VU', ex: 'Vous êtes madame Bernard ?' },
    { fr: 'le voisin / la voisine', pt: 'o vizinho / a vizinha', g: 'mf', say: 'vua-ZẼ / vua-ZIN', ex: 'Madame Bernard est ma voisine.' },
    { fr: 'le numéro', pt: 'o número', g: 'm', say: 'nü-mê-RRÔ', ex: "C'est l'appartement numéro huit." },
    { fr: 'aussi', pt: 'também', pos: 'adv', say: 'ô-SSI', ex: 'Moi aussi !' },
    { fr: 'à bientôt', pt: 'até breve', pos: 'expr', say: 'a biẽ-TÔ', ex: 'Au revoir, à bientôt !' }
  ],
  pronunciation: {
    title: 'Os números de 0 a 10',
    textPt: 'Ouça cada número e repita. Atenção às letras que **não** soam:\n\n' +
      '- ***un*** = "ẽ" (nasal, o n não soa)\n' +
      '- ***deux*** = "dö" (o x não soa)\n' +
      '- ***trois*** = "trruá" (o s não soa)\n' +
      '- ***sept*** = "SSÉT" (o p não soa)\n' +
      '- ***six*** e ***dix*** = "SSIS" e "DIS" (o x soa como s quando o número está sozinho)\n' +
      '- ***huit*** = "ÜIT" (o h não soa e o t soa)',
    examples: [
      { fr: 'zéro', pt: '0' }, { fr: 'un', pt: '1' }, { fr: 'deux', pt: '2' }, { fr: 'trois', pt: '3' }, { fr: 'quatre', pt: '4' }, { fr: 'cinq', pt: '5' },
      { fr: 'six', pt: '6' }, { fr: 'sept', pt: '7' }, { fr: 'huit', pt: '8' }, { fr: 'neuf', pt: '9' }, { fr: 'dix', pt: '10' }
    ]
  },
  reading: {
    genre: 'mensagens de celular',
    title: 'Lucas et sa sœur Ana',
    text: "Ana : Salut Lucas ! Ça va ?\n\n" +
      "Lucas : Salut Ana ! Ça va très bien, merci. Et toi ?\n\n" +
      "Ana : Ça va, ça va. Et Lyon, c'est comment ?\n\n" +
      "Lucas : C'est super ! L'appartement est petit, mais il est [[joli|bonito]].\n\n" +
      "Ana : Et Léa ? Elle est sympa ?\n\n" +
      "Lucas : Oui, très sympa ! La voisine, madame Bernard, est très [[gentille|gentil, simpática]] aussi.\n\n" +
      "Ana : Super ! [[Bisous|beijos]] !\n\n" +
      "Lucas : Bisous, à bientôt !",
    translationPt: '**Ana:** Oi, Lucas! Tudo bem?\n\n' +
      '**Lucas:** Oi, Ana! Tudo ótimo, obrigado. E você?\n\n' +
      '**Ana:** Tudo, tudo. E Lyon, como é?\n\n' +
      '**Lucas:** É ótima! O apartamento é pequeno, mas é bonito.\n\n' +
      '**Ana:** E a Léa? Ela é legal?\n\n' +
      '**Lucas:** Sim, muito legal! A vizinha, a senhora Bernard, é muito gentil também.\n\n' +
      '**Ana:** Que bom! Beijos!\n\n' +
      '**Lucas:** Beijos, até breve!',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quem é a Ana?', options: ['A irmã do Lucas.', 'A vizinha do Lucas.', 'A colega de apartamento.', 'Uma professora.'], answer: 0,
        explanationPt: 'O título diz: "Lucas et sa sœur Ana". *Sa sœur* = a irmã dele.' },
      { type: 'multiple_choice', prompt: 'Como é o apartamento?', options: ['Pequeno, mas bonito.', 'Grande e bonito.', 'Pequeno e feio.', 'O texto não diz.'], answer: 0,
        explanationPt: '"L\'appartement est petit, mais il est joli." *Petit* = pequeno; *mais* = mas.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Lucas aime Lyon.', answer: 'V', explanationPt: '"C\'est super !"' },
        { text: 'Madame Bernard est gentille.', answer: 'V', explanationPt: '"madame Bernard, est très gentille aussi".' },
        { text: 'Ana habite à Lyon.', answer: 'NM', explanationPt: 'As mensagens não dizem onde a Ana mora.' }
      ] },
      { type: 'match', prompt: 'Ligue cada expressão à tradução.', pairs: [
        ['Ça va ?', 'Tudo bem?'], ['Très bien, merci.', 'Muito bem, obrigado.'], ['Et toi ?', 'E você?'], ['Bisous !', 'Beijos!'], ['À bientôt !', 'Até breve!']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Na escada do prédio',
    speakers: [{ id: 'B', name: 'Mme Bernard', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'B', text: 'Bonjour, monsieur !', pt: 'Bom dia, senhor!' },
      { speaker: 'U', text: 'Bonjour, madame !', pt: 'Bom dia, senhora!' },
      { speaker: 'B', text: 'Vous êtes le colocataire de Léa ?', pt: 'O senhor é o colega de apartamento da Léa?' },
      { speaker: 'U', text: "Oui, je m'appelle Lucas. Enchanté !", pt: 'Sou, eu me chamo Lucas. Muito prazer!' },
      { speaker: 'B', text: "Enchantée ! Moi, c'est madame Bernard. Je suis votre voisine, appartement huit.", pt: 'Muito prazer! Eu sou a senhora Bernard. Sou sua vizinha, apartamento oito.' },
      { speaker: 'U', text: 'Et nous, nous sommes au deux. Comment allez-vous, madame ?', pt: 'E nós estamos no dois. Como vai a senhora?' },
      { speaker: 'B', text: 'Très bien, merci. Et vous ?', pt: 'Muito bem, obrigada. E o senhor?' },
      { speaker: 'U', text: 'Très bien, merci.', pt: 'Muito bem, obrigado.' },
      { speaker: 'L', text: 'Salut, Lucas ! Ça va ? Bonjour, madame Bernard !', pt: 'Oi, Lucas! Tudo bem? Bom dia, senhora Bernard!' },
      { speaker: 'B', text: 'Bonjour, Léa ! Bon, au revoir, à bientôt !', pt: 'Bom dia, Léa! Bom, até logo, até breve!' }
    ],
    exercises: [
      { type: 'short_answer', prompt: 'Em qual apartamento mora a senhora Bernard? Responda em algarismos.', answers: ['8'],
        explanationPt: '"appartement huit" = apartamento 8. *Huit* soa "ÜIT".' },
      { type: 'short_answer', prompt: 'E o Lucas e a Léa, em qual apartamento moram? Responda em algarismos.', answers: ['2'],
        explanationPt: '"nous sommes au deux" = estamos no 2. *Deux* soa "dö".' },
      { type: 'multiple_choice', prompt: 'Por que o Lucas fala "vous" com a senhora Bernard?', options: ['Porque ela é uma senhora que ele acabou de conhecer.', 'Porque ela é a irmã dele.', 'Porque ela é criança.', 'Porque são muitas pessoas.'], answer: 0,
        explanationPt: 'Com desconhecidos e pessoas mais velhas, o francês usa **vous** (como "o senhor / a senhora").' },
      { type: 'listen_choose', audio: 'Comment allez-vous, madame ?', prompt: 'Ouça e escolha a frase.',
        options: ['Comment allez-vous, madame ?', 'Comment ça va, Léa ?', 'Vous êtes madame Bernard ?', 'Au revoir, madame !'], answer: 0,
        explanationPt: '*Comment allez-vous ?* = como vai o senhor / a senhora? É a forma formal de "tudo bem?".' },
      { type: 'dictation', text: 'Très bien, merci.', explanationPt: '*Très bien* soa "tré BIẼ": o s de *très* não soa.' }
    ]
  },
  grammar: {
    topicId: 'tu-vous',
    title: 'Tu ou vous? Informal e formal',
    explanationPt: 'O francês tem duas formas para "você":\n\n' +
      '- ***tu*** = você, **informal**: amigos, família, crianças, colegas da mesma idade.\n' +
      '- ***vous*** = o senhor / a senhora, **formal**: desconhecidos, pessoas mais velhas, lojas, restaurantes, clientes.\n' +
      '- ***vous*** também é **vocês**, o plural: falando com duas pessoas ou mais, sempre *vous*.\n\n' +
      'O verbo muda junto com o pronome:\n' +
      '- **tu** → *tu es*, *tu t\'appelles*, *Ça va ?*, *Et toi ?*\n' +
      '- **vous** → *vous êtes*, *vous vous appelez*, *Comment allez-vous ?*, *Et vous ?*\n\n' +
      '**Na dúvida, use vous.** Se a pessoa preferir *tu*, ela vai dizer: ***On peut se tutoyer !*** (podemos nos tratar por tu).',
    table: { head: ['situação', 'com tu (informal)', 'com vous (formal)'], rows: [
      ['cumprimentar', 'Salut ! Ça va ?', 'Bonjour ! Comment allez-vous ?'], ['perguntar o nome', "Tu t'appelles comment ?", 'Vous vous appelez comment ?'],
      ['devolver a pergunta', 'Et toi ?', 'Et vous ?'], ['verbo être', 'tu es', 'vous êtes']
    ] },
    examples: [
      { fr: 'Salut, Léa ! Ça va ?', pt: 'Oi, Léa! Tudo bem?' },
      { fr: 'Bonjour, madame. Comment allez-vous ?', pt: 'Bom dia, senhora. Como vai?' },
      { fr: 'Très bien, merci. Et vous ?', pt: 'Muito bem, obrigado. E a senhora?' },
      { fr: 'Vous êtes brésiliens ?', pt: 'Vocês são brasileiros?' }
    ],
    ptComparison: 'O *vous* formal funciona como "o senhor / a senhora", mas é **muito mais usado** do que no Brasil. Na França, dois adultos que não se conhecem quase sempre começam com *vous*, mesmo jovens, numa loja ou no trabalho.\n\n' +
      'Uma boa notícia: a resposta de *Ça va ?* é… ***Ça va !*** A mesma expressão serve para perguntar e responder, como o nosso "tudo bem? — tudo bem!".'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Você entra numa padaria. O que você diz à vendedora?', options: ['Bonjour, madame. Comment allez-vous ?', 'Salut ! Ça va ?', 'Salut, toi !', 'Ça va, et toi ?'], answer: 0,
      explanationPt: 'Numa loja, use o formal: *bonjour, madame* e *vous*.' },
    { type: 'multiple_choice', prompt: 'Você fala com dois amigos ao mesmo tempo. Qual pronome usar?', options: ['vous', 'tu', 'toi', 'il'], answer: 0,
      explanationPt: '*Vous* também é o plural, "vocês", mesmo entre amigos.' },
    { type: 'fill_blank', prompt: 'Complete com toi ou vous.', bank: ['toi', 'vous'], items: [
      { text: 'Salut, Léa ! Ça va bien, et ___ ?', answers: ['toi'] },
      { text: 'Bonjour, monsieur. Très bien, et ___ ?', answers: ['vous'] },
      { text: 'Ana, ça va ? Et ___ ?', answers: ['toi'] }
    ] },
    { type: 'fill_blank', prompt: 'Faça a conta e escreva o resultado em francês, por extenso.', items: [
      { text: 'deux + trois = ___', answers: ['cinq'] },
      { text: 'quatre + quatre = ___', answers: ['huit'] },
      { text: 'dix - un = ___', answers: ['neuf'] },
      { text: 'trois + trois = ___', answers: ['six'] }
    ], explanationPt: '- **cinq** = 5\n- **huit** = 8\n- **neuf** = 9\n- **six** = 6' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Comment allez-vous, madame ?', translation: 'Como vai a senhora?' }
  ],
  tipForBrazilians: '**Beijinho ou aperto de mão?** Entre amigos e família, os franceses cumprimentam com ***la bise***: beijinhos no rosto, quase sempre **dois** em Lyon e Paris (em outras regiões podem ser três ou quatro!). Com desconhecidos e no trabalho, o normal é o aperto de mão.\n\n' +
    'E repare: na França, *Ça va ?* é só uma saudação. Ninguém espera que você conte como está a sua vida, basta responder *Ça va, et toi ?*'
});
