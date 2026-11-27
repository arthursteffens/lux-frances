LUX.registerLesson({
  id: 'a1-u01-l02', level: 'A1', unit: 1, order: 2,
  title: 'Je suis brésilien', titlePt: 'Sou brasileiro',
  names: ['Lucas', 'Ferreira', 'Léa', 'Martin', 'Belo Horizonte', 'Annecy', 'Alpes', 'Lyon', 'Brésil'],
  introPt: 'O Lucas finalmente chega ao apartamento e conhece a Léa pessoalmente. Nesta lição você aprende o verbo mais importante do francês, ***être*** (ser, estar), e a dizer de onde você é.',
  objectives: [
    'Dizer a sua nacionalidade e a sua cidade (je suis brésilien, je suis de…).',
    'Conjugar o verbo être no presente.',
    'Fazer o feminino das nacionalidades (brésilien → brésilienne).'
  ],
  vocabulary: [
    { fr: 'être', pt: 'ser, estar', pos: 'v', say: 'ÉTRR', ex: 'Je suis brésilien.' },
    { fr: 'brésilien / brésilienne', pt: 'brasileiro / brasileira', pos: 'adj', say: 'brrê-zi-LIẼ / brrê-zi-LIÉN', ex: 'Lucas est brésilien.' },
    { fr: 'français / française', pt: 'francês / francesa', pos: 'adj', say: 'frrã-SSÉ / frrã-SSÉZ', ex: 'Léa est française.' },
    { fr: 'portugais / portugaise', pt: 'português / portuguesa', pos: 'adj', say: 'porr-tü-GUÉ / porr-tü-GUÉZ', ex: 'Tu es portugais ?' },
    { fr: 'anglais / anglaise', pt: 'inglês / inglesa', pos: 'adj', say: 'ã-GLÉ / ã-GLÉZ', ex: 'Il est anglais.' },
    { fr: 'enchanté(e)', pt: 'muito prazer', pos: 'adj', say: 'ã-xã-TÊ', ex: 'Enchantée, Lucas !' },
    { fr: "c'est moi", pt: 'sou eu', pos: 'expr', say: 'sé MUA', ex: "Oui, c'est moi !" },
    { fr: 'et toi ?', pt: 'e você?', pos: 'expr', say: 'ê TUA', ex: 'Je suis brésilien. Et toi ?' },
    { fr: 'la ville', pt: 'a cidade', g: 'f', say: 'la VIL', ex: "C'est une petite ville." },
    { fr: 'parler', pt: 'falar', pos: 'v', say: 'parr-LÊ', ex: 'Je parle portugais.' },
    { fr: 'un peu', pt: 'um pouco', pos: 'expr', say: 'ẽ PÖ', ex: 'Je parle un peu français.' }
  ],
  pronunciation: {
    title: 'O e do fim muda tudo: masculino × feminino',
    textPt: 'O **e** no fim da palavra não se pronuncia, mas **acorda a consoante** que vem antes dele:\n\n' +
      '- ***français*** = "frrã-SSÉ" (o s não soa) × ***française*** = "frrã-SSÉZ" (o s soa como z).\n' +
      '- ***anglais*** = "ã-GLÉ" × ***anglaise*** = "ã-GLÉZ".\n' +
      '- ***brésilien*** = "brrê-zi-LIẼ" (nasal, o n não soa) × ***brésilienne*** = "brrê-zi-LIÉN" (o n soa).\n\n' +
      'Por isso, de ouvido, você sabe se a pessoa fala de um homem ou de uma mulher.',
    examples: [{ fr: 'français', pt: 'masculino: s mudo' }, { fr: 'française', pt: 'feminino: s soa z' }, { fr: 'brésilien', pt: 'masculino: nasal' }, { fr: 'brésilienne', pt: 'feminino: n soa' }]
  },
  reading: {
    genre: 'perfis num site de colegas de apartamento',
    title: 'Les profils de Lucas et Léa',
    text: "Profil : Lucas Ferreira\n\n" +
      "Bonjour ! Je m'appelle Lucas. Je suis brésilien, de Belo Horizonte. Je suis [[graphiste|designer gráfico]]. Je parle portugais et anglais. Je parle un peu français. Je suis calme et [[sympa|simpático, legal]] !\n\n" +
      "Profil : Léa Martin\n\n" +
      "Salut ! Moi, c'est Léa. Je suis française. Je suis d'Annecy, une petite ville dans les Alpes. Je suis [[infirmière|enfermeira]] à Lyon. Je parle français, anglais et un peu portugais. Je cherche un [[colocataire|colega de apartamento]] sympa !",
    translationPt: '**Perfil: Lucas Ferreira**\n\n' +
      'Olá! Eu me chamo Lucas. Sou brasileiro, de Belo Horizonte. Sou designer gráfico. Falo português e inglês. Falo um pouco de francês. Sou calmo e simpático!\n\n' +
      '**Perfil: Léa Martin**\n\n' +
      'Oi! Eu sou a Léa. Sou francesa. Sou de Annecy, uma cidade pequena nos Alpes. Sou enfermeira em Lyon. Falo francês, inglês e um pouco de português. Procuro um colega de apartamento simpático!',
    exercises: [
      { type: 'multiple_choice', prompt: 'De onde é o Lucas?', options: ['De Belo Horizonte.', 'De Annecy.', 'De Lyon.', 'De Portugal.'], answer: 0,
        explanationPt: '"Je suis brésilien, de Belo Horizonte."' },
      { type: 'multiple_choice', prompt: 'Qual é a profissão da Léa?', options: ['Enfermeira.', 'Designer.', 'Professora.', 'Estudante.'], answer: 0,
        explanationPt: '"Je suis infirmière à Lyon." *Infirmière* = enfermeira.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Léa est française.', answer: 'V', explanationPt: '"Je suis française."' },
        { text: 'Lucas parle très bien français.', answer: 'F', explanationPt: 'Ele fala **um pouco**: "je parle un peu français".' },
        { text: 'Léa parle un peu portugais.', answer: 'V', explanationPt: '"Je parle français, anglais et un peu portugais."' },
        { text: 'Lucas aime le football.', answer: 'NM', explanationPt: 'O perfil não fala de esportes.' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com a informação do texto.', items: [
        { text: 'Lucas est ___.', answers: ['brésilien'] },
        { text: 'Léa est ___.', answers: ['française'] },
        { text: 'Annecy est une petite ___.', answers: ['ville'] }
      ], explanationPt: 'Repare: **brésilien** (ele) e **française** (ela, com e no fim).' }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Na porta do apartamento',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: 'Bonsoir ! Tu es Lucas ?', pt: 'Boa noite! Você é o Lucas?' },
      { speaker: 'U', text: "Oui, c'est moi ! Et toi, tu es Léa ?", pt: 'Sim, sou eu! E você, você é a Léa?' },
      { speaker: 'L', text: 'Oui ! Enchantée, Lucas !', pt: 'Sim! Muito prazer, Lucas!' },
      { speaker: 'U', text: 'Enchanté !', pt: 'Muito prazer!' },
      { speaker: 'L', text: 'Tu es portugais ?', pt: 'Você é português?' },
      { speaker: 'U', text: 'Non, je suis brésilien. Je suis de Belo Horizonte.', pt: 'Não, sou brasileiro. Sou de Belo Horizonte.' },
      { speaker: 'L', text: "Super ! Moi, je suis d'Annecy.", pt: 'Que legal! Eu sou de Annecy.' },
      { speaker: 'U', text: "Annecy ? C'est où ?", pt: 'Annecy? Onde fica?' },
      { speaker: 'L', text: "C'est dans les Alpes. C'est une petite ville. Entre, entre !", pt: 'Fica nos Alpes. É uma cidade pequena. Entra, entra!' },
      { speaker: 'U', text: 'Merci !', pt: 'Obrigado!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'De onde é a Léa?', options: ['De Annecy.', 'De Lyon.', 'De Paris.', 'Do Brasil.'], answer: 0,
        explanationPt: '"Moi, je suis d\'Annecy." Antes de vogal, *de* vira *d\'*.' },
      { type: 'listen_choose', audio: 'Non, je suis brésilien.', prompt: 'Ouça e escolha o que o Lucas disse.',
        options: ['Non, je suis brésilien.', 'Non, je suis portugais.', 'Oui, je suis brésilien.', 'Non, je suis français.'], answer: 0,
        explanationPt: '*Non* (não) + *je suis brésilien* (sou brasileiro).' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Lucas est portugais.', answer: 'F', explanationPt: '"Non, je suis brésilien."' },
        { text: 'Annecy est dans les Alpes.', answer: 'V', explanationPt: '"C\'est dans les Alpes."' },
        { text: "L'appartement est grand.", answer: 'NM', explanationPt: 'O diálogo não fala do tamanho do apartamento.' }
      ] },
      { type: 'dictation', text: "Oui, c'est moi !", explanationPt: '*C\'est moi* = sou eu. *Moi* soa "MUA".' },
      { type: 'multiple_choice', prompt: 'A Léa diz "Enchantée" e o Lucas diz "Enchanté". Por quê?', options: ['Mulher escreve com e no fim; a pronúncia é a mesma.', 'Lucas errou.', 'Enchantée é mais formal.', 'Enchanté é para a noite.'], answer: 0,
        explanationPt: 'Quem fala decide: mulher escreve *enchantée*, homem *enchanté*. Na fala, as duas formas soam "ã-xã-TÊ".' }
    ]
  },
  grammar: {
    topicId: 'present-revisao',
    title: 'O verbo être (ser, estar) e as nacionalidades',
    explanationPt: '***Être*** é "ser" **e** "estar" ao mesmo tempo. É irregular, então vale decorar:\n\n' +
      '- ***je suis*** = eu sou, eu estou\n' +
      '- ***tu es*** = você é (informal)\n' +
      '- ***il est*** / ***elle est*** = ele é / ela é\n' +
      '- ***nous sommes*** = nós somos\n' +
      '- ***vous êtes*** = o senhor é (formal), vocês são\n' +
      '- ***ils sont*** / ***elles sont*** = eles são / elas são\n\n' +
      '*Tu es* e *il est* soam **iguais**: "é".\n\n' +
      '**Nacionalidades:** o feminino ganha um **e** no fim:\n' +
      '- ***français*** → *française*\n' +
      '- ***anglais*** → *anglaise*\n' +
      '- ***brésilien*** → *brésilienne* (o n dobra)\n\n' +
      '**Cidade de origem:** *je suis de* + cidade: *Je suis de Lyon.* Antes de vogal, *de* vira *d\'*: *Je suis d\'Annecy.*',
    table: { head: ['', 'être', 'soa'], rows: [
      ['je', 'suis', 'jö SSÜI'], ['tu', 'es', 'tü É'], ['il / elle', 'est', 'il É / él É'],
      ['nous', 'sommes', 'nu SSÓM'], ['vous', 'êtes', 'vu-ZÉT'], ['ils / elles', 'sont', 'il SSÕ / él SSÕ']
    ] },
    examples: [
      { fr: 'Je suis brésilien.', pt: 'Sou brasileiro.' },
      { fr: 'Elle est française.', pt: 'Ela é francesa.' },
      { fr: 'Vous êtes de Lyon ?', pt: 'O senhor é de Lyon?' },
      { fr: "Je suis d'Annecy.", pt: 'Sou de Annecy.' }
    ],
    ptComparison: 'Em português temos "ser" e "estar". Em francês, ***être*** faz os dois papéis: *je suis brésilien* (sou brasileiro) e *je suis à Lyon* (estou em Lyon).\n\n' +
      'Como em português, a nacionalidade é escrita com **letra minúscula** (*je suis brésilien*) e o país com maiúscula (*le Brésil*).\n\n' +
      'Em francês **o sujeito é obrigatório**: "sou brasileiro" é *je suis brésilien*, nunca só *suis brésilien*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o verbo être.', bank: ['suis', 'es', 'est', 'sommes', 'êtes', 'sont'], items: [
      { text: 'Je ___ brésilien.', answers: ['suis'] },
      { text: 'Tu ___ Léa ?', answers: ['es'] },
      { text: 'Elle ___ française.', answers: ['est'] },
      { text: 'Nous ___ à Lyon.', answers: ['sommes'] },
      { text: 'Vous ___ de Paris ?', answers: ['êtes'] },
      { text: 'Ils ___ anglais.', answers: ['sont'] }
    ] },
    { type: 'multiple_choice', prompt: 'Uma mulher do Brasil diz:', options: ['Je suis brésilienne.', 'Je suis brésilien.', 'Je suis Brésil.', 'Je brésilienne.'], answer: 0,
      explanationPt: 'Mulher: **brésilienne**. E o *je suis* é obrigatório.' },
    { type: 'multiple_choice', prompt: '"Sou de Annecy."', options: ["Je suis d'Annecy.", 'Je suis de Annecy.', "J'ai d'Annecy.", 'Je de Annecy.'], answer: 0,
      explanationPt: 'Antes de vogal, *de* vira *d\'*.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je suis de Belo Horizonte.', translation: 'Sou de Belo Horizonte.' },
    { type: 'match', prompt: 'Ligue o masculino ao feminino.', pairs: [
      ['français', 'française'], ['anglais', 'anglaise'], ['brésilien', 'brésilienne'], ['portugais', 'portugaise']
    ] }
  ],
  tipForBrazilians: '**Você é brasileiro ou brasileira?** Decore a sua frase de apresentação:\n\n' +
    '- **Homem:** *Je suis brésilien.* ("brrê-zi-LIẼ")\n' +
    '- **Mulher:** *Je suis brésilienne.* ("brrê-zi-LIÉN")\n\n' +
    'Os franceses adoram o Brasil, e dizer de onde você é costuma render conversa: futebol, praia, música… Prepare também *Je suis de* + a sua cidade.'
});
