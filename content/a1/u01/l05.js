LUX.registerLesson({
  id: 'a1-u01-l05', level: 'A1', unit: 1, order: 5, review: true,
  title: 'Le premier cours', titlePt: 'A primeira aula (revisão da unidade)',
  names: ['Lucas', 'Léa', 'Ana', 'Bernard', 'Claire', 'Sofia', 'Rome', 'Annecy', 'Belo Horizonte', 'Lyon', 'Brésil', 'Italie', 'S', 'O', 'F', 'I', 'A'],
  introPt: 'Lição de **revisão**: nada de muito novo, só juntar tudo o que você viu na unidade. O Lucas vai à primeira aula de francês e escreve para a irmã contando a semana. Se algo parecer difícil, volte às lições anteriores: elas continuam abertas.',
  objectives: [
    'Revisar cumprimentos, apresentação, nacionalidades e tu/vous.',
    'Entender um e-mail curto e uma apresentação em grupo.',
    'Conhecer todos os pronomes sujeito (je, tu, il, elle, nous, vous, ils, elles).'
  ],
  vocabulary: [
    { fr: 'italien / italienne', pt: 'italiano / italiana', pos: 'adj', say: 'i-ta-LIẼ / i-ta-LIÉN', ex: 'Sofia est italienne.' },
    { fr: "l'étudiant / l'étudiante", pt: 'o estudante / a estudante', g: 'mf', say: 'ê-tü-DIÃ / ê-tü-DIÃT', ex: 'Je suis étudiante.' },
    { fr: 'la semaine', pt: 'a semana', g: 'f', say: 'la se-MÉN', ex: 'Bonne semaine !' },
    { fr: 'gentil / gentille', pt: 'gentil, simpático(a)', pos: 'adj', say: 'jã-TI / jã-TII', ex: 'Madame Bernard est gentille.' },
    { fr: 'nous', pt: 'nós', pos: 'pron', say: 'NU', ex: 'Nous sommes à Lyon.' },
    { fr: 'ils / elles', pt: 'eles / elas', pos: 'pron', say: 'IL / ÉL', ex: 'Ils sont brésiliens.' },
    { fr: 'à tous', pt: 'a todos', pos: 'expr', say: 'a TUS', ex: 'Bonjour à tous !' },
    { fr: 'bisous', pt: 'beijos (despedida carinhosa)', pos: 'interj', say: 'bi-ZU', ex: 'Bisous, Ana !' }
  ],
  pronunciation: {
    title: 'Revisão: o que soa e o que não soa',
    textPt: 'Releia em voz alta e confira com o ▶:\n\n' +
      '- **consoante final muda:** *salut*, *vous*, *très*, *deux*\n' +
      '- **e final muda, mas acorda a consoante:** *française*, *italienne*\n' +
      '- **sons nasais:** *bonjour*, *brésilien*, *un*\n' +
      '- **força na última sílaba:** *enchanté*, *merci*, *bienvenue*',
    examples: [{ fr: 'Bonjour à tous !', pt: 'Olá a todos!' }, { fr: 'Elle est italienne.', pt: 'Ela é italiana.' }, { fr: 'Très bien, merci.', pt: 'Muito bem, obrigado.' }, { fr: 'Bienvenue !', pt: 'Bem-vindo!' }]
  },
  reading: {
    genre: 'e-mail pessoal',
    title: 'Un e-mail à Ana',
    text: "Salut Ana !\n\n" +
      "Ça va ? Moi, ça va très bien. Lyon, c'est super !\n\n" +
      "Ma colocataire s'appelle Léa. Elle est française, d'Annecy. Elle est infirmière. Elle est très sympa et elle parle un peu portugais !\n\n" +
      "Notre voisine s'appelle madame Bernard. Elle est très gentille. Avec elle, je dis « vous », et avec Léa, je dis « tu ».\n\n" +
      "Aujourd'hui, c'est le premier cours de français. La professeure s'appelle Claire. Les étudiants sont italiens, anglais, japonais… et brésiliens ! Nous sommes dix.\n\n" +
      "Bisous à papa et maman !\n" +
      "Lucas",
    translationPt: 'Oi, Ana!\n\n' +
      'Tudo bem? Eu estou muito bem. Lyon é ótima!\n\n' +
      'Minha colega de apartamento se chama Léa. Ela é francesa, de Annecy. Ela é enfermeira. Ela é muito legal e fala um pouco de português!\n\n' +
      'Nossa vizinha se chama senhora Bernard. Ela é muito gentil. Com ela, eu digo "vous", e com a Léa, eu digo "tu".\n\n' +
      'Hoje é a primeira aula de francês. A professora se chama Claire. Os alunos são italianos, ingleses, japoneses… e brasileiros! Somos dez.\n\n' +
      'Beijos para o papai e a mamãe!\nLucas',
    exercises: [
      { type: 'multiple_choice', prompt: 'Com quem o Lucas usa "vous"?', options: ['Com a senhora Bernard.', 'Com a Léa.', 'Com a Ana.', 'Com todo mundo.'], answer: 0,
        explanationPt: '"Avec elle, je dis « vous », et avec Léa, je dis « tu »."' },
      { type: 'short_answer', prompt: 'Quantos alunos há no curso? Responda em algarismos.', answers: ['10'],
        explanationPt: '"Nous sommes dix" = somos dez.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Léa est infirmière.', answer: 'V', explanationPt: '"Elle est infirmière."' },
        { text: 'La professeure est brésilienne.', answer: 'NM', explanationPt: 'O e-mail diz o nome dela (Claire), mas não a nacionalidade.' },
        { text: "Aujourd'hui, c'est le premier cours.", answer: 'V', explanationPt: '"Aujourd\'hui, c\'est le premier cours de français."' },
        { text: 'Léa ne parle pas portugais.', answer: 'F', explanationPt: 'Ela fala **um pouco**: "elle parle un peu portugais".' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com palavras do texto.', items: [
        { text: 'Ma colocataire ___ Léa.', answers: ["s'appelle"] },
        { text: 'Elle est ___, d\'Annecy.', answers: ['française'] },
        { text: 'Notre voisine est très ___.', answers: ['gentille'] }
      ] }
    ]
  },
  listening: {
    genre: 'apresentação em grupo',
    title: 'A primeira aula',
    speakers: [{ id: 'C', name: 'Claire', gender: 'f' }, { id: 'S', name: 'Sofia', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'C', text: "Bonjour à tous ! Je m'appelle Claire. Je suis votre professeure.", pt: 'Olá a todos! Eu me chamo Claire. Sou a professora de vocês.' },
      { speaker: 'C', text: "Et vous ? Vous vous appelez comment ?", pt: 'E a senhora? Como se chama?' },
      { speaker: 'S', text: "Je m'appelle Sofia. Je suis italienne, de Rome.", pt: 'Eu me chamo Sofia. Sou italiana, de Roma.' },
      { speaker: 'C', text: "Sofia… Ça s'écrit comment ?", pt: 'Sofia… Como se escreve?' },
      { speaker: 'S', text: 'S, O, F, I, A.', pt: 'S, O, F, I, A.' },
      { speaker: 'C', text: 'Merci, Sofia. Et vous, monsieur ?', pt: 'Obrigada, Sofia. E o senhor?' },
      { speaker: 'U', text: "Moi, c'est Lucas. Je suis brésilien, de Belo Horizonte. Je suis graphiste.", pt: 'Eu sou o Lucas. Sou brasileiro, de Belo Horizonte. Sou designer gráfico.' },
      { speaker: 'S', text: 'Brésilien ? Super ! Moi aussi, je suis graphiste !', pt: 'Brasileiro? Que legal! Eu também sou designer gráfica!' },
      { speaker: 'C', text: "Très bien ! Ici, on peut se tutoyer. D'accord ?", pt: 'Muito bem! Aqui, podemos nos tratar por tu. Combinado?' },
      { speaker: 'U', text: "D'accord !", pt: 'Combinado!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'De onde é a Sofia?', options: ['De Roma, na Itália.', 'De Lyon.', 'De Belo Horizonte.', 'De Annecy.'], answer: 0,
        explanationPt: '"Je suis italienne, de Rome." *Rome* = Roma.' },
      { type: 'multiple_choice', prompt: 'O que a Sofia e o Lucas têm em comum?', options: ['A profissão: os dois são designers.', 'A nacionalidade.', 'A cidade.', 'Nada.'], answer: 0,
        explanationPt: '"Moi aussi, je suis graphiste !" = eu também sou designer!' },
      { type: 'listen_choose', audio: 'S, O, F, I, A.', prompt: 'Ouça a Sofia soletrar o nome. O que ela disse?', options: ['S, O, F, I, A.', 'S, O, P, H, I, A.', 'S, U, F, I, A.', 'S, O, F, E, A.'], answer: 0,
        explanationPt: 'Sofia, com F. Repare no I ("i") e no A ("a").' },
      { type: 'multiple_choice', prompt: 'O que a professora propõe no final?', options: ['Que todos se tratem por tu.', 'Que todos falem inglês.', 'Que todos soletrem o nome.', 'Que a aula acabe.'], answer: 0,
        explanationPt: '"On peut se tutoyer" = podemos nos tratar por *tu*. *D\'accord ?* = combinado?' },
      { type: 'dictation', text: 'Moi aussi, je suis graphiste !', explanationPt: '*Moi aussi* = eu também.' }
    ]
  },
  grammar: {
    topicId: 'subject-pronouns',
    title: 'Revisão: os pronomes sujeito',
    explanationPt: 'Estes são os pronomes que vêm antes do verbo. Em francês, eles são **obrigatórios**:\n\n' +
      '- ***je*** = eu (vira *j\'* antes de vogal: *j\'habite*)\n' +
      '- ***tu*** = você (informal)\n' +
      '- ***il*** = ele\n' +
      '- ***elle*** = ela\n' +
      '- ***on*** = a gente (muito usado na fala, com o verbo como *il*: *on est*)\n' +
      '- ***nous*** = nós\n' +
      '- ***vous*** = o senhor / a senhora (formal) ou vocês\n' +
      '- ***ils*** = eles (ou um grupo misto de homens e mulheres)\n' +
      '- ***elles*** = elas (só mulheres)\n\n' +
      'Para dar ênfase, o francês usa outra forma antes: ***moi***, *je…* (eu, …); ***toi***, *tu…*: *Moi, je suis brésilien. Et toi ?*',
    table: { head: ['pronome', 'être', 'português'], rows: [
      ['je', 'suis', 'eu sou'], ['tu', 'es', 'você é'], ['il / elle / on', 'est', 'ele / ela é, a gente é'],
      ['nous', 'sommes', 'nós somos'], ['vous', 'êtes', 'o senhor é, vocês são'], ['ils / elles', 'sont', 'eles / elas são']
    ] },
    examples: [
      { fr: 'Nous sommes dix.', pt: 'Somos dez.' },
      { fr: 'Ils sont italiens.', pt: 'Eles são italianos.' },
      { fr: 'Moi, je suis brésilien. Et toi ?', pt: 'Eu sou brasileiro. E você?' },
      { fr: 'On est à Lyon.', pt: 'A gente está em Lyon.' }
    ],
    ptComparison: 'Em português dá para dizer só "somos dez". Em francês, o pronome **nunca** cai: *nous sommes dix*.\n\n' +
      'Um grupo com dez mulheres e um homem é ***ils***, no masculino, como "eles" em português.\n\n' +
      '***On*** funciona como o nosso "a gente": *on est à Lyon* = a gente está em Lyon. Na fala, os franceses usam *on* muito mais do que *nous*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o pronome certo.', bank: ['Je', 'Tu', 'Elle', 'Nous', 'Vous', 'Ils'], items: [
      { text: '___ suis brésilien.', answers: ['Je'] },
      { text: '___ sommes à Lyon.', answers: ['Nous'] },
      { text: '___ êtes madame Bernard ?', answers: ['Vous'] },
      { text: '___ sont italiens.', answers: ['Ils'] },
      { text: '___ es Sofia ?', answers: ['Tu'] },
      { text: '___ est infirmière.', answers: ['Elle'] }
    ] },
    { type: 'multiple_choice', prompt: 'Léa, Sofia e Lucas: como dizer "eles são simpáticos"?', options: ['Ils sont sympas.', 'Elles sont sympas.', 'Ils est sympas.', 'Sont sympas.'], answer: 0,
      explanationPt: 'Grupo misto = ***ils*** (masculino).' },
    { type: 'match', prompt: 'Ligue a pergunta à resposta.', pairs: [
      ["Tu t'appelles comment ?", "Je m'appelle Sofia."], ['Ça va ?', 'Ça va bien, merci.'], ['Tu es française ?', 'Non, je suis italienne.'], ["Ça s'écrit comment ?", 'S, O, F, I, A.']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Moi aussi, je suis graphiste.', translation: 'Eu também sou designer.' },
    { type: 'multiple_choice', prompt: 'Você encontra a vizinha às 19h. O que você diz?', options: ['Bonsoir, madame ! Comment allez-vous ?', 'Salut ! Ça va ?', 'Bonne nuit, madame !', 'Bonjour, toi !'], answer: 0,
      explanationPt: 'À noite, ao chegar: ***bonsoir***. Com a vizinha mais velha: ***vous***.' }
  ],
  tipForBrazilians: '**Parabéns: você terminou a primeira unidade!** 🎉 Com o que viu até aqui, você já consegue:\n\n' +
    '- cumprimentar e se despedir;\n' +
    '- dizer o nome, soletrar e dar o e-mail;\n' +
    '- dizer de onde é;\n' +
    '- escolher entre *tu* e *vous*.\n\n' +
    'Dica de estudo: antes de começar a próxima lição, passe 5 minutos em **Revisar**. As palavras das lições concluídas já estão lá.'
});
