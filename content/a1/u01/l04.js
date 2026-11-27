LUX.registerLesson({
  id: 'a1-u01-l04', level: 'A1', unit: 1, order: 4,
  title: "Ça s'écrit comment ?", titlePt: 'Como se escreve?',
  names: ['Lucas', 'Ferreira', 'Claire', 'Dubois', 'Lyon', 'Brésil', 'F', 'E', 'R', 'I', 'L', 'U', 'C', 'S', 'B', 'O', 'D', 'G', 'J'],
  introPt: 'O Lucas se inscreve num curso de francês para iniciantes. Na secretaria, ele precisa **soletrar** o nome e dizer o e-mail e o telefone. Você vai aprender as letras que mais confundem os brasileiros e a fazer perguntas com ***quel*** (qual).',
  objectives: [
    'Soletrar o seu nome em francês.',
    'Dizer e entender um e-mail e um número de telefone.',
    'Fazer perguntas com quel / quelle (qual) e comment (como).'
  ],
  vocabulary: [
    { fr: 'le nom', pt: 'o sobrenome; o nome', g: 'm', say: 'le NÕ', ex: 'Votre nom, s\'il vous plaît ?' },
    { fr: 'le prénom', pt: 'o primeiro nome', g: 'm', say: 'le prrê-NÕ', ex: 'Mon prénom, c\'est Lucas.' },
    { fr: "Ça s'écrit comment ?", pt: 'Como se escreve?', pos: 'expr', say: 'ssa sê-krri kô-MÃ', ex: "Ferreira ? Ça s'écrit comment ?" },
    { fr: "l'adresse e-mail", pt: 'o endereço de e-mail', g: 'f', say: 'la-DRRÉS i-MÉL', ex: 'Quelle est votre adresse e-mail ?' },
    { fr: 'le numéro de téléphone', pt: 'o número de telefone', g: 'm', say: 'nü-mê-RRÔ de tê-lê-FÓN', ex: 'Votre numéro de téléphone ?' },
    { fr: 'arobase', pt: '@ (arroba)', g: 'f', say: 'a-rrô-BAZ', ex: 'lucas arobase mail point com' },
    { fr: 'point', pt: '. (ponto)', g: 'm', say: 'PUẼ', ex: 'mail point com' },
    { fr: 'quel / quelle', pt: 'qual', pos: 'det', say: 'KÉL', ex: 'Quel est votre nom ?' },
    { fr: 'répéter', pt: 'repetir', pos: 'v', say: 'rrê-pê-TÊ', ex: "Vous pouvez répéter, s'il vous plaît ?" },
    { fr: 'le cours', pt: 'a aula, o curso', g: 'm', say: 'le KURR', ex: 'Le cours de français est super.' },
    { fr: 'le professeur / la professeure', pt: 'o professor / a professora', g: 'mf', say: 'prrô-fé-SSÖRR', ex: 'Claire est professeure.' },
    { fr: 'parfait', pt: 'perfeito', pos: 'adj', say: 'parr-FÉ', ex: 'Parfait, merci !' }
  ],
  pronunciation: {
    title: 'As letras que mais confundem: E, I, U, G, J',
    textPt: 'Ao soletrar, cinco letras enganam os brasileiros:\n\n' +
      '- **E** = "ö", um "ê" com biquinho (não é "é").\n' +
      '- **I** = "i" (não é "é" nem "e").\n' +
      '- **U** = "ü", "i" com biquinho (não é "u").\n' +
      '- **G** = "jê" (parece o nosso J!).\n' +
      '- **J** = "ji" (parece o nosso G!).\n\n' +
      'Para letras repetidas, diga ***deux*** antes: *Ferreira* = F, E, **deux R**, E, I, R, A.\n\n' +
      'O alfabeto completo, com áudio de cada letra, está em **Gerais › Alfabeto**.',
    examples: [{ fr: 'E', pt: 'letra E: "ö"' }, { fr: 'I', pt: 'letra I: "i"' }, { fr: 'U', pt: 'letra U: "ü"' }, { fr: 'G', pt: 'letra G: "jê"' }, { fr: 'J', pt: 'letra J: "ji"' }]
  },
  reading: {
    genre: 'ficha de inscrição',
    title: 'Cours de français pour débutants',
    text: "Fiche d'inscription\n\n" +
      "Nom : FERREIRA\n" +
      "Prénom : Lucas\n" +
      "Pays : Brésil\n" +
      "Ville : Lyon\n" +
      "Téléphone : 06 52 38 71 09\n\n" +
      "Bonjour à tous ! Je m'appelle Claire Dubois. Je suis votre professeure. Le cours est pour les [[débutants|iniciantes]] : on écoute beaucoup, on parle un peu, et on [[répète|repete]] ! Les questions sont [[toujours|sempre]] [[bienvenues|bem-vindas]]. À bientôt !",
    translationPt: '**Ficha de inscrição**\n\n' +
      'Sobrenome: FERREIRA\nNome: Lucas\nPaís: Brasil\nCidade: Lyon\nTelefone: 06 52 38 71 09\n\n' +
      'Olá a todos! Eu me chamo Claire Dubois. Sou a professora de vocês. O curso é para iniciantes: a gente escuta muito, fala um pouco, e repete! As perguntas são sempre bem-vindas. Até breve!',
    exercises: [
      { type: 'multiple_choice', prompt: 'Na ficha, o que significa "Nom"?', options: ['Sobrenome (nome de família).', 'Primeiro nome.', 'Apelido.', 'Nacionalidade.'], answer: 0,
        explanationPt: 'Nos formulários, ***nom*** = sobrenome e ***prénom*** = primeiro nome.' },
      { type: 'multiple_choice', prompt: 'Quem é a Claire Dubois?', options: ['A professora.', 'A secretária.', 'Uma aluna.', 'A irmã do Lucas.'], answer: 0,
        explanationPt: '"Je suis votre professeure."' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Le cours est pour les débutants.', answer: 'V', explanationPt: '"Le cours est pour les débutants."' },
        { text: 'Lucas habite à Paris.', answer: 'F', explanationPt: 'Na ficha: *Ville : Lyon*.' },
        { text: 'Le cours est le samedi.', answer: 'NM', explanationPt: 'O texto não diz o dia do curso.' }
      ] },
      { type: 'match', prompt: 'Ligue as palavras da ficha à tradução.', pairs: [
        ['nom', 'sobrenome'], ['prénom', 'primeiro nome'], ['pays', 'país'], ['ville', 'cidade'], ['téléphone', 'telefone']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Na secretaria da escola',
    speakers: [{ id: 'S', name: 'A secretária', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'S', text: "Bonjour, monsieur. Votre nom, s'il vous plaît ?", pt: 'Bom dia, senhor. Seu sobrenome, por favor?' },
      { speaker: 'U', text: 'Ferreira.', pt: 'Ferreira.' },
      { speaker: 'S', text: "Pardon ? Ça s'écrit comment ?", pt: 'Perdão? Como se escreve?' },
      { speaker: 'U', text: 'F, E, deux R, E, I, R, A.', pt: 'F, E, dois R, E, I, R, A.' },
      { speaker: 'S', text: 'Merci. Et votre prénom ?', pt: 'Obrigada. E o seu primeiro nome?' },
      { speaker: 'U', text: 'Lucas. L, U, C, A, S.', pt: 'Lucas. L, U, C, A, S.' },
      { speaker: 'S', text: 'Quelle est votre adresse e-mail ?', pt: 'Qual é o seu e-mail?' },
      { speaker: 'U', text: 'Lucas point ferreira arobase mail point com.', pt: 'lucas.ferreira@mail.com' },
      { speaker: 'S', text: 'Et votre numéro de téléphone ?', pt: 'E o seu número de telefone?' },
      { speaker: 'U', text: 'Zéro, six, cinq, deux, trois, huit, sept, un, zéro, neuf.', pt: '0, 6, 5, 2, 3, 8, 7, 1, 0, 9.' },
      { speaker: 'S', text: 'Parfait, merci ! Bienvenue, monsieur Ferreira !', pt: 'Perfeito, obrigada! Bem-vindo, senhor Ferreira!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Como o Lucas soletra "rr" em Ferreira?', options: ['deux R', 'R, R', 'double R', 'R deux'], answer: 0,
        explanationPt: 'Para letra repetida, diz-se ***deux*** (dois) antes: *deux R*, *deux L*, *deux S*.' },
      { type: 'listen_choose', audio: 'Quelle est votre adresse e-mail ?', prompt: 'Ouça e escolha a pergunta.',
        options: ['Quelle est votre adresse e-mail ?', 'Quel est votre nom ?', 'Votre numéro de téléphone ?', "Ça s'écrit comment ?"], answer: 0,
        explanationPt: '*Quelle est votre adresse e-mail ?* = qual é o seu e-mail?' },
      { type: 'short_answer', prompt: 'Ouça o telefone do Lucas e escreva os 4 primeiros algarismos.', answers: ['0652'],
        explanationPt: '*zéro, six, cinq, deux* = 0, 6, 5, 2. Na França, os celulares começam com 06 ou 07.' },
      { type: 'multiple_choice', prompt: 'Como se diz "@" em francês?', options: ['arobase', 'arroba', 'at', 'point'], answer: 0,
        explanationPt: '@ = ***arobase***; . = ***point***.' },
      { type: 'dictation', text: "Ça s'écrit comment ?", explanationPt: 'A pergunta mais útil para quem está aprendendo: "como se escreve?".' }
    ]
  },
  grammar: {
    topicId: 'questions',
    title: 'Perguntas com quel / quelle (qual) e comment (como)',
    explanationPt: '***Quel*** = "qual". Ele muda conforme a palavra que vem depois, mas **todas as formas soam igual**: "KÉL".\n\n' +
      '- ***quel*** + palavra masculina: *Quel est votre nom ?* (*le nom* é masculino)\n' +
      '- ***quelle*** + palavra feminina: *Quelle est votre adresse ?* (*l\'adresse* é feminino)\n\n' +
      '***Comment*** = "como":\n' +
      '- *Ça s\'écrit comment ?* (como se escreve?)\n' +
      '- *Vous vous appelez comment ?* (como o senhor se chama?)\n\n' +
      'Na fala, também dá para perguntar só com a entonação, subindo a voz no fim: *Votre nom ?* *Votre numéro de téléphone ?*',
    table: { head: ['pergunta', 'tradução'], rows: [
      ['Quel est votre nom ?', 'Qual é o seu sobrenome?'], ['Quel est votre prénom ?', 'Qual é o seu nome?'],
      ['Quelle est votre adresse e-mail ?', 'Qual é o seu e-mail?'], ['Quel est votre numéro de téléphone ?', 'Qual é o seu telefone?'],
      ["Ça s'écrit comment ?", 'Como se escreve?']
    ] },
    examples: [
      { fr: 'Quel est votre prénom ?', pt: 'Qual é o seu nome?' },
      { fr: 'Quelle est votre ville ?', pt: 'Qual é a sua cidade?' },
      { fr: "Ça s'écrit comment ?", pt: 'Como se escreve?' },
      { fr: "Vous pouvez répéter, s'il vous plaît ?", pt: 'O senhor pode repetir, por favor?' }
    ],
    ptComparison: '*Quel est votre nom ?* tem a mesma ordem do português "Qual é o seu nome?". Fácil!\n\n' +
      'Atenção à palavra ***nom***: num formulário, *nom* é o **sobrenome** (nome de família) e *prénom* é o primeiro nome. Na conversa, *Vous vous appelez comment ?* pede o nome completo ou só o primeiro.\n\n' +
      'Em francês, todo substantivo é masculino ou feminino. Quase sempre o gênero é o mesmo do português (*le numéro*, *la ville*), mas nem sempre: ***le voyage*** = **a** viagem, ***la mer*** = **o** mar. Na dúvida, clique na palavra: o balão mostra o gênero.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com quel ou quelle.', bank: ['Quel', 'Quelle'], items: [
      { text: '___ est votre nom ?', answers: ['Quel'] },
      { text: '___ est votre adresse e-mail ?', answers: ['Quelle'] },
      { text: '___ est votre prénom ?', answers: ['Quel'] },
      { text: '___ est votre ville ?', answers: ['Quelle'] }
    ], explanationPt: '- **nom, prénom** = masculinos → *quel*\n- **adresse, ville** = femininos → *quelle*' },
    { type: 'multiple_choice', prompt: 'Você não entendeu. O que você diz?', options: ["Vous pouvez répéter, s'il vous plaît ?", "Ça s'écrit comment ?", 'Quel est votre nom ?', 'À bientôt !'], answer: 0,
      explanationPt: '*Vous pouvez répéter ?* = pode repetir? Use sem medo!' },
    { type: 'multiple_choice', prompt: 'Como se soletra a letra G em francês?', options: ['"jê"', '"guê"', '"ji"', '"gá"'], answer: 0,
      explanationPt: 'G = "jê" e J = "ji". É o contrário do que parece para nós!' },
    { type: 'order_sentence', prompt: 'Monte a pergunta.', answer: 'Quelle est votre adresse e-mail ?', translation: 'Qual é o seu e-mail?' },
    { type: 'listen_choose', audio: 'J', prompt: 'Ouça e escolha a letra.', options: ['J', 'G', 'I', 'E'], answer: 0,
      explanationPt: 'Você ouviu "ji": é a letra **J**.' }
  ],
  tipForBrazilians: '**Prepare o seu nome soletrado!** Na França, você vai soletrar o nome no médico, no banco, ao telefone… Treine agora, em voz alta, com as letras que confundem:\n\n' +
    '- **E** = "ö"\n' +
    '- **I** = "i"\n' +
    '- **U** = "ü"\n' +
    '- **G** = "jê"\n' +
    '- **J** = "ji"\n\n' +
    'E o seu e-mail com ***arobase*** (@) e ***point*** (.). Exemplo: *ana point silva arobase mail point com*.'
});
