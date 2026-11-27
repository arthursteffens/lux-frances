LUX.registerLesson({
  id: 'a1-u05-l03', level: 'A1', unit: 5, order: 3,
  title: "L'équipe de Graphik", titlePt: 'A equipe da Graphik',
  names: ['Lucas', 'Nathalie', 'Roux', 'Karim', 'Julie', 'Graphik', 'Lyon', 'Marseille'],
  introPt: 'Primeiro dia na agência! A chefe, Nathalie, apresenta o Lucas à equipe. Nesta lição: as **profissões**, o vocabulário do trabalho e os **pronomes tônicos** (*moi, toi, lui, elle*), que os franceses usam o tempo todo para dar ênfase.',
  objectives: [
    'Apresentar colegas e falar de profissões.',
    'Usar o vocabulário básico do trabalho.',
    'Usar os pronomes tônicos: moi, toi, lui, elle, nous, vous, eux.'
  ],
  vocabulary: [
    { fr: "l'équipe", pt: 'a equipe', g: 'f', say: 'lê-KIP', ex: "Bienvenue dans l'équipe !" },
    { fr: 'le / la collègue', pt: 'o / a colega de trabalho', g: 'mf', say: 'kô-LÉG', ex: 'Karim est mon collègue.' },
    { fr: 'le / la chef', pt: 'o chefe / a chefe', g: 'mf', say: 'XÉF', ex: 'Nathalie est la chef.' },
    { fr: 'le / la graphiste', pt: 'o / a designer gráfico(a)', g: 'mf', say: 'grra-FIST', ex: 'Lucas est graphiste.' },
    { fr: 'le développeur / la développeuse', pt: 'o / a programador(a)', g: 'mf', say: 'dê-vlô-PÖRR / dê-vlô-PÖZ', ex: 'Karim est développeur.' },
    { fr: 'le / la stagiaire', pt: 'o / a estagiário(a)', g: 'mf', say: 'sta-JIÉRR', ex: 'Julie est stagiaire.' },
    { fr: 'le client / la cliente', pt: 'o / a cliente', g: 'mf', say: 'kli-Ã / kli-ÃT', ex: 'Le client est content.' },
    { fr: 'le projet', pt: 'o projeto', g: 'm', say: 'le prrô-JÉ', ex: 'Le projet est intéressant.' },
    { fr: 'travailler', pt: 'trabalhar', pos: 'v', say: 'trra-va-IÊ', ex: 'Je travaille sur un projet.' },
    { fr: 'commencer', pt: 'começar', pos: 'v', say: 'kô-mã-SSÊ', ex: 'Je commence à neuf heures.' },
    { fr: 'moi / toi', pt: 'eu, mim / você, ti (forma tônica)', pos: 'pron', say: 'MUA / TUA', ex: 'Moi, je suis graphiste. Et toi ?' },
    { fr: 'lui / elle', pt: 'ele / ela (forma tônica)', pos: 'pron', say: 'LÜI / ÉL', ex: "Lui, c'est Karim." }
  ],
  pronunciation: {
    title: 'Moi, toi, lui: os sons "uá" e "üi"',
    textPt: 'Os pronomes tônicos usam dois sons que você já conhece:\n\n' +
      '- **oi** = "uá": ***moi*** "MUA", ***toi*** "TUA"\n' +
      '- **ui** = "üi" rápido, com biquinho: ***lui*** "LÜI" (como em *huit*, *nuit*)\n' +
      '- ***eux*** = "Ö", um "ê" com biquinho\n\n' +
      'E repare em ***chef***: o **f** final soa, e não se acrescenta nenhuma vogal: "XÉF", nunca "xéfi".',
    examples: [{ fr: 'Moi, je suis graphiste.', pt: 'Eu sou designer.' }, { fr: 'Et toi ?', pt: 'E você?' }, { fr: "Lui, c'est Karim.", pt: 'Esse é o Karim.' }, { fr: 'la chef', pt: 'f final: "XÉF"' }]
  },
  reading: {
    genre: 'página de site',
    title: "Graphik – Notre équipe",
    text: "Graphik, agence de design à Lyon\n\n" +
      "Nathalie Roux, directrice. C'est la [[fondatrice|fundadora]] de l'agence. Avec elle, les clients sont toujours contents !\n\n" +
      "Karim, développeur. Il est de Marseille. Lui, il fait les sites web et les applications.\n\n" +
      "Julie, stagiaire. Elle est étudiante en design et elle travaille avec nous pendant six mois.\n\n" +
      "Lucas Ferreira, graphiste. Il est brésilien et il est nouveau dans l'équipe : bienvenue à lui !\n\n" +
      "Nous sommes une petite équipe, mais nous faisons de grands projets.",
    translationPt: '**Graphik, agência de design em Lyon**\n\n' +
      'Nathalie Roux, diretora. Ela é a fundadora da agência. Com ela, os clientes estão sempre satisfeitos!\n\n' +
      'Karim, programador. Ele é de Marselha. Ele faz os sites e os aplicativos.\n\n' +
      'Julie, estagiária. Ela é estudante de design e trabalha com a gente durante seis meses.\n\n' +
      'Lucas Ferreira, designer gráfico. Ele é brasileiro e é novo na equipe: boas-vindas a ele!\n\n' +
      'Somos uma equipe pequena, mas fazemos grandes projetos.',
    exercises: [
      { type: 'multiple_choice', prompt: 'Qual é a profissão do Karim?', options: ['Programador.', 'Designer.', 'Diretor.', 'Estagiário.'], answer: 0,
        explanationPt: '"Karim, développeur." *Développeur* = programador, desenvolvedor.' },
      { type: 'multiple_choice', prompt: 'Quem é a Julie?', options: ['Uma estagiária, estudante de design.', 'A diretora.', 'Uma cliente.', 'A colega de apartamento.'], answer: 0,
        explanationPt: '"Julie, stagiaire. Elle est étudiante en design".' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Karim est de Lyon.', answer: 'F', explanationPt: 'Ele é **de Marselha**: "Il est de Marseille".' },
        { text: "Julie travaille à l'agence pendant six mois.", answer: 'V', explanationPt: '"pendant six mois".' },
        { text: "L'équipe est petite.", answer: 'V', explanationPt: '"Nous sommes une petite équipe".' },
        { text: "Nathalie parle portugais.", answer: 'NM', explanationPt: 'O site não fala disso.' }
      ] },
      { type: 'match', prompt: 'Ligue cada pessoa à função.', pairs: [
        ['Nathalie', 'directrice'], ['Karim', 'développeur'], ['Julie', 'stagiaire'], ['Lucas', 'graphiste']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'As apresentações',
    speakers: [{ id: 'N', name: 'Nathalie', gender: 'f' }, { id: 'K', name: 'Karim', gender: 'm' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'N', text: "Lucas, je te présente l'équipe. Lui, c'est Karim, notre développeur.", pt: 'Lucas, vou te apresentar a equipe. Este é o Karim, o nosso programador.' },
      { speaker: 'K', text: 'Salut, Lucas ! Bienvenue ! Toi, tu es le graphiste brésilien ?', pt: 'Oi, Lucas! Bem-vindo! Você é o designer brasileiro?' },
      { speaker: 'U', text: "Oui, c'est moi ! Enchanté.", pt: 'Sim, sou eu! Muito prazer.' },
      { speaker: 'N', text: "Et elle, c'est Julie, notre stagiaire. Elle est là le lundi et le mardi.", pt: 'E esta é a Julie, a nossa estagiária. Ela vem às segundas e terças.' },
      { speaker: 'K', text: "Tu travailles avec moi sur le projet du musée. On commence demain !", pt: 'Você vai trabalhar comigo no projeto do museu. A gente começa amanhã!' },
      { speaker: 'U', text: 'Super ! Et le client, il est sympa ?', pt: 'Ótimo! E o cliente, ele é legal?' },
      { speaker: 'K', text: 'Lui ? Oui, très sympa… mais il change d\'avis tous les jours !', pt: 'Ele? Sim, muito legal… mas muda de ideia todo dia!' },
      { speaker: 'N', text: 'Ha ha ! Bon, au travail, tout le monde !', pt: 'Ha ha! Bom, ao trabalho, pessoal!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Em qual projeto o Lucas vai trabalhar?', options: ['O projeto do museu.', 'O site da agência.', 'Um aplicativo.', 'O projeto da Julie.'], answer: 0,
        explanationPt: '"Tu travailles avec moi sur le projet du musée."' },
      { type: 'multiple_choice', prompt: 'Como é o cliente, segundo o Karim?', options: ['Muito legal, mas muda de ideia todo dia.', 'Antipático.', 'Muito sério.', 'Novo na agência.'], answer: 0,
        explanationPt: '"très sympa… mais il change d\'avis tous les jours !" *Changer d\'avis* = mudar de ideia.' },
      { type: 'multiple_choice', prompt: 'Quando a Julie está na agência?', options: ['Às segundas e terças.', 'Todos os dias.', 'Às sextas.', 'No fim de semana.'], answer: 0,
        explanationPt: '"Elle est là le lundi et le mardi." *Le lundi* = toda segunda.' },
      { type: 'listen_choose', audio: "Lui, c'est Karim, notre développeur.", prompt: 'Ouça e escolha a frase.',
        options: ["Lui, c'est Karim, notre développeur.", "Elle, c'est Julie, notre stagiaire.", "Moi, c'est Karim, le développeur.", "Lui, c'est Lucas, notre graphiste."], answer: 0,
        explanationPt: '*Lui, c\'est…* = esse aqui é… (para apresentar um homem).' },
      { type: 'dictation', text: "Oui, c'est moi !", explanationPt: '*C\'est moi* = sou eu. Nunca *c\'est je*.' }
    ]
  },
  grammar: {
    topicId: 'tonic-pronouns',
    title: 'Os pronomes tônicos: moi, toi, lui, elle…',
    explanationPt: 'Além de *je, tu, il…*, o francês tem uma segunda série de pronomes, os **tônicos**:\n' +
      '- ***moi*** (eu)\n- ***toi*** (você)\n- ***lui*** (ele)\n- ***elle*** (ela)\n' +
      '- ***nous*** (nós)\n- ***vous*** (vocês / o senhor)\n- ***eux*** (eles)\n- ***elles*** (elas)\n\n' +
      '**Quando usar:**\n' +
      '- **Para dar ênfase**, antes do sujeito: *Moi, je suis graphiste. Et toi ?*\n' +
      '- **Depois de preposição** (*avec, pour, chez, de…*): *avec moi*, *pour toi*, *chez lui*\n' +
      '- **Depois de *c\'est***: *C\'est moi !*, *C\'est lui.*\n' +
      '- **Sozinho**, em respostas curtas: *Qui ? — Moi !* *Moi aussi.* *Et toi ?*',
    table: { head: ['sujeito', 'tônico', 'exemplo'], rows: [
      ['je', 'moi', 'Moi, je travaille ici.'], ['tu', 'toi', 'Et toi ?'], ['il', 'lui', "C'est lui."], ['elle', 'elle', 'avec elle'],
      ['nous', 'nous', 'chez nous'], ['vous', 'vous', 'pour vous'], ['ils', 'eux', 'avec eux'], ['elles', 'elles', "C'est elles."]
    ] },
    examples: [
      { fr: 'Moi, je suis graphiste. Et toi ?', pt: 'Eu sou designer. E você?' },
      { fr: 'Tu travailles avec moi.', pt: 'Você trabalha comigo.' },
      { fr: "Lui, c'est Karim.", pt: 'Este é o Karim.' },
      { fr: 'Je vais chez eux samedi.', pt: 'Vou à casa deles no sábado.' }
    ],
    ptComparison: 'Depois de preposição, o português também muda o pronome: "comigo", "para **mim**", "com **ele**". O francês faz igual: *avec **moi***, *pour **moi***, *avec **lui***.\n\n' +
      'A ênfase com ***moi, je…*** parece repetição, mas é muito natural: é como o nosso "eu, hein…" ou "já eu…". Os franceses usam o tempo todo: *Moi, j\'adore !*\n\n' +
      'Nunca diga *je aussi*: o certo é ***moi aussi*** (eu também) e ***moi non plus*** (eu também não).'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com o pronome tônico.', bank: ['moi', 'toi', 'lui', 'elle', 'eux'], items: [
      { text: "Tu viens avec ___ ? (eu)", answers: ['moi'] },
      { text: 'Je suis brésilien. Et ___ ? (você)', answers: ['toi'] },
      { text: "Karim ? C'est ___ ! (ele)", answers: ['lui'] },
      { text: 'Je travaille avec Julie, avec ___. (ela)', answers: ['elle'] },
      { text: 'Je vais chez mes parents, chez ___. (eles)', answers: ['eux'] }
    ] },
    { type: 'multiple_choice', prompt: '"Eu também!"', options: ['Moi aussi !', 'Je aussi !', 'Moi même !', 'Aussi moi !'], answer: 0,
      explanationPt: 'Sozinho, use o tônico: ***moi aussi***.' },
    { type: 'multiple_choice', prompt: 'Quem é? — "Sou eu."', options: ["C'est moi.", "C'est je.", 'Je suis.', "C'est me."], answer: 0,
      explanationPt: 'Depois de *c\'est*: pronome tônico.' },
    { type: 'match', prompt: 'Ligue a profissão à tradução.', pairs: [
      ['développeur', 'programador'], ['stagiaire', 'estagiário'], ['graphiste', 'designer gráfico'], ['directrice', 'diretora'], ['infirmière', 'enfermeira']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Tu travailles avec moi sur le projet.', translation: 'Você trabalha comigo no projeto.' }
  ],
  tipForBrazilians: '**Tu ou vous no trabalho?** Depende da empresa. Em agências, startups e empresas de tecnologia, quase todo mundo se trata por ***tu***, até com a chefe (repare que a Nathalie diz *je te présente*). Em bancos, escritórios de advocacia ou empresas tradicionais, o ***vous*** é mais comum.\n\n' +
    'Na dúvida, comece com *vous* e espere a outra pessoa propor: ***On se tutoie ?***\n\n' +
    'E as profissões **não levam artigo** depois de *être*: *Je suis graphiste* (sou designer), nunca *je suis un graphiste*.'
});
