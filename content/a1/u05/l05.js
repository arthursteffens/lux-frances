LUX.registerLesson({
  id: 'a1-u05-l05', level: 'A1', unit: 5, order: 5, review: true,
  title: 'Ma première semaine', titlePt: 'A minha primeira semana (revisão da unidade)',
  names: ['Lucas', 'Ana', 'Léa', 'Karim', 'Nathalie', 'Julie', 'Graphik', 'Bellecour'],
  introPt: 'Revisão da Unidade 5. O Lucas conta para a irmã como foi a primeira semana de trabalho, e o Karim o convida para sair na sexta. Você vai revisar horas, dias, rotina, trabalho e aprender a perguntar **quando** e **por quê**.',
  objectives: [
    'Revisar horas, dias da semana, rotina e trabalho.',
    'Perguntar com quand, à quelle heure, quel jour, pourquoi.',
    'Responder com parce que (porque).'
  ],
  vocabulary: [
    { fr: 'quand', pt: 'quando', pos: 'adv', say: 'KÃ', ex: 'Tu travailles quand ?' },
    { fr: 'pourquoi', pt: 'por quê', pos: 'adv', say: 'purr-KUA', ex: 'Pourquoi tu es fatigué ?' },
    { fr: 'parce que', pt: 'porque', pos: 'conj', say: 'parrs-KE', ex: 'Parce que je travaille beaucoup.' },
    { fr: 'fatigué / fatiguée', pt: 'cansado / cansada', pos: 'adj', say: 'fa-ti-GUÊ', ex: 'Je suis fatigué ce soir.' },
    { fr: 'intéressant / intéressante', pt: 'interessante', pos: 'adj', say: 'ẽ-tê-rré-SSÃ / ẽ-tê-rré-SSÃT', ex: 'Mon travail est intéressant.' },
    { fr: 'boire un verre', pt: 'tomar alguma coisa (um drinque)', pos: 'expr', say: 'buarr ẽ VÉRR', ex: 'On va boire un verre ?' },
    { fr: 'tôt / tard', pt: 'cedo / tarde', pos: 'adv', say: 'TÔ / TARR', ex: 'Je me lève tôt.' },
    { fr: 'toujours', pt: 'sempre', pos: 'adv', say: 'tu-JURR', ex: 'Karim est toujours en retard !' }
  ],
  pronunciation: {
    title: 'Revisão: as horas e os dias de ouvido',
    textPt: 'Releia em voz alta:\n\n' +
      '- ***neuf heures*** "nö-VÖRR" e ***deux heures*** "dö-ZÖRR"\n' +
      '- ***et demie*** "ê de-MI", ***et quart*** "ê KARR"\n' +
      '- ***lundi***, ***mardi***, ***mercredi***: força no "di"\n' +
      '- ***pourquoi*** "purr-KUA" e ***parce que*** "parrs-KE"',
    examples: [{ fr: 'à neuf heures et demie', pt: 'às 9h30' }, { fr: 'vendredi soir', pt: 'sexta à noite' }, { fr: 'Pourquoi ?', pt: 'Por quê?' }, { fr: 'Parce que je suis fatigué.', pt: 'Porque estou cansado.' }]
  },
  reading: {
    genre: 'e-mail pessoal',
    title: 'Ma première semaine chez Graphik',
    text: "Salut Ana !\n\n" +
      "Ma première semaine de travail est finie ! Je suis fatigué, mais très content.\n\n" +
      "Je me lève à sept heures, je prends le petit-déjeuner et je vais à l'agence en métro. Je commence à neuf heures et je finis à cinq heures et demie. À midi, on déjeune ensemble, toute l'équipe.\n\n" +
      "Mes collègues sont super. Nathalie, la chef, est très gentille. Karim, le développeur, est drôle, mais il est toujours en retard ! Avec lui, je travaille sur un projet pour un musée. C'est très intéressant.\n\n" +
      "Le mardi et le jeudi, j'ai mon cours de français. Je parle mieux, mais c'est encore difficile !\n\n" +
      "Bisous,\nLucas",
    translationPt: 'Oi, Ana!\n\n' +
      'A minha primeira semana de trabalho acabou! Estou cansado, mas muito contente.\n\n' +
      'Eu me levanto às sete, tomo o café da manhã e vou para a agência de metrô. Começo às nove e termino às cinco e meia. Ao meio-dia, a gente almoça junto, a equipe toda.\n\n' +
      'Os meus colegas são ótimos. A Nathalie, a chefe, é muito gentil. O Karim, o programador, é engraçado, mas está sempre atrasado! Com ele, trabalho num projeto para um museu. É muito interessante.\n\n' +
      'Às terças e quintas, tenho a minha aula de francês. Estou falando melhor, mas ainda é difícil!\n\nBeijos,\nLucas',
    exercises: [
      { type: 'multiple_choice', prompt: 'Como o Lucas vai ao trabalho?', options: ['De metrô.', 'A pé.', 'De bicicleta.', 'De ônibus.'], answer: 0,
        explanationPt: '"je vais à l\'agence en métro".' },
      { type: 'multiple_choice', prompt: 'Qual é o horário de trabalho do Lucas?', options: ['Das 9h às 17h30.', 'Das 7h às 17h.', 'Das 9h às 19h.', 'Das 8h às 16h30.'], answer: 0,
        explanationPt: '"Je commence à neuf heures et je finis à cinq heures et demie."' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Karim est toujours en retard.', answer: 'V', explanationPt: '"il est toujours en retard !"' },
        { text: "L'équipe déjeune ensemble à midi.", answer: 'V', explanationPt: '"À midi, on déjeune ensemble, toute l\'équipe."' },
        { text: 'Lucas trouve le français facile.', answer: 'F', explanationPt: '"c\'est encore difficile !"' },
        { text: 'Julie est la sœur de Karim.', answer: 'NM', explanationPt: 'O e-mail nem fala da Julie.' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com palavras do texto.', items: [
        { text: 'Je suis fatigué, mais très ___.', answers: ['content'] },
        { text: 'Je ___ à neuf heures.', answers: ['commence'] },
        { text: 'Le mardi et le jeudi, j\'ai mon ___ de français.', answers: ['cours'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Sexta-feira, fim do dia',
    speakers: [{ id: 'K', name: 'Karim', gender: 'm' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'K', text: "Lucas, il est cinq heures et demie ! On va boire un verre ?", pt: 'Lucas, são cinco e meia! Vamos tomar alguma coisa?' },
      { speaker: 'U', text: 'Ce soir ? Euh… je suis un peu fatigué.', pt: 'Hoje à noite? Hum… estou um pouco cansado.' },
      { speaker: 'K', text: "Pourquoi ? C'est vendredi !", pt: 'Por quê? É sexta-feira!' },
      { speaker: 'U', text: "Parce que je me lève tôt tous les jours. Et demain, je vais au marché à huit heures.", pt: 'Porque eu me levanto cedo todo dia. E amanhã vou à feira às oito.' },
      { speaker: 'K', text: 'Juste un verre, une heure. Il y a un bar sympa sur la place Bellecour.', pt: 'Só um drinque, uma hora. Tem um bar legal na praça Bellecour.' },
      { speaker: 'U', text: "Bon, d'accord ! Mais à sept heures, je rentre.", pt: 'Bom, tudo bem! Mas às sete eu volto para casa.' },
      { speaker: 'K', text: 'Promis ! Julie vient aussi.', pt: 'Prometido! A Julie também vem.' },
      { speaker: 'U', text: "Super ! On y va quand ?", pt: 'Ótimo! A gente vai quando?' },
      { speaker: 'K', text: 'Maintenant !', pt: 'Agora!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'O que o Karim propõe?', options: ['Tomar alguma coisa num bar.', 'Trabalhar até tarde.', 'Ir ao cinema.', 'Jantar na casa dele.'], answer: 0,
        explanationPt: '*Boire un verre* = tomar alguma coisa, um drinque.' },
      { type: 'multiple_choice', prompt: 'Por que o Lucas hesita?', options: ['Porque está cansado e acorda cedo.', 'Porque não gosta de bares.', 'Porque tem aula de francês.', 'Porque a Léa está esperando.'], answer: 0,
        explanationPt: '"je suis un peu fatigué" e "je me lève tôt tous les jours".' },
      { type: 'short_answer', prompt: 'A que horas o Lucas quer voltar para casa? Responda em algarismos (só a hora).', answers: ['7', '19'],
        explanationPt: '"à sept heures, je rentre" = às sete (19h).' },
      { type: 'listen_choose', audio: "Pourquoi ? C'est vendredi !", prompt: 'Ouça e escolha a frase.',
        options: ["Pourquoi ? C'est vendredi !", "Pourquoi ? C'est samedi !", "Parce que c'est vendredi !", 'Pourquoi pas ? Vendredi !'], answer: 0,
        explanationPt: '*Pourquoi ?* = por quê? A resposta começa com *parce que* (porque).' },
      { type: 'dictation', text: 'On va boire un verre ?', explanationPt: 'Convite muito comum depois do trabalho.' }
    ]
  },
  grammar: {
    topicId: 'questions',
    title: 'Revisão: quand, à quelle heure, quel jour, pourquoi',
    explanationPt: 'As perguntas do dia a dia:\n\n' +
      '- ***Quand ?*** = quando? *Tu travailles quand ?*\n' +
      '- ***À quelle heure ?*** = a que horas? *À quelle heure tu commences ?*\n' +
      '- ***Quel jour ?*** = que dia? *Quel jour est le cours ?*\n' +
      '- ***Pourquoi ?*** = por quê? *Pourquoi tu es fatigué ?*\n' +
      '- ***Parce que*** = porque (na resposta): *Parce que je travaille beaucoup.*\n\n' +
      'Na fala, a palavra interrogativa pode ir **no fim**: *Tu commences à quelle heure ?* *On y va quand ?*\n\n' +
      '***Parce que*** vira ***parce qu\'*** antes de vogal: *parce qu\'il est tard*.',
    table: { head: ['pergunta', 'resposta'], rows: [
      ['Tu travailles quand ?', 'Du lundi au vendredi.'], ['À quelle heure tu commences ?', 'À neuf heures.'],
      ['Quel jour est le marché ?', 'Le samedi.'], ['Pourquoi tu es fatigué ?', 'Parce que je me lève tôt.']
    ] },
    examples: [
      { fr: 'À quelle heure tu finis ?', pt: 'A que horas você termina?' },
      { fr: 'Quel jour est le cours de français ?', pt: 'Que dia é a aula de francês?' },
      { fr: 'Pourquoi tu es fatigué ?', pt: 'Por que você está cansado?' },
      { fr: "Parce qu'il est tard.", pt: 'Porque está tarde.' }
    ],
    ptComparison: 'Em português, "por que" (pergunta) e "porque" (resposta) soam iguais. Em francês são palavras diferentes:\n' +
      '- ***pourquoi*** = por quê? (pergunta)\n' +
      '- ***parce que*** = porque (resposta)\n\n' +
      '"De segunda a sexta" = ***du lundi au vendredi*** (com as contrações *du* e *au*).'
  },
  grammarPractice: [
    { type: 'match', prompt: 'Ligue a pergunta à resposta.', pairs: [
      ['À quelle heure tu commences ?', 'À neuf heures.'], ['Quel jour est le marché ?', 'Le samedi.'], ['Pourquoi tu es fatigué ?', 'Parce que je travaille beaucoup.'], ['Tu vas au travail comment ?', 'En métro.']
    ] },
    { type: 'fill_blank', prompt: 'Complete com quand, pourquoi ou parce que.', bank: ['Quand', 'Pourquoi', 'Parce que'], items: [
      { text: '___ tu ne viens pas ?', answers: ['Pourquoi'] },
      { text: '___ je suis fatigué.', answers: ['Parce que'] },
      { text: '___ est-ce que tu pars ? — Demain.', answers: ['Quand'] }
    ] },
    { type: 'multiple_choice', prompt: '"De segunda a sexta."', options: ['Du lundi au vendredi.', 'De lundi à vendredi.', 'Le lundi le vendredi.', 'De le lundi à le vendredi.'], answer: 0,
      explanationPt: '*de + le* = **du**, *à + le* = **au**.' },
    { type: 'fill_blank', prompt: 'Conjugue o verbo entre parênteses.', items: [
      { text: 'Je ___ à sept heures. (se lever)', answers: ['me lève'] },
      { text: 'Nous ___ à neuf heures. (commencer)', answers: ['commençons'] },
      { text: 'Karim ___ toujours en retard. (être)', answers: ['est'] },
      { text: 'Tu ___ quoi ce week-end ? (faire)', answers: ['fais'] }
    ], explanationPt: 'Atenção: *nous commen**ç**ons*, com cedilha, para o c continuar com som de "s".' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je suis fatigué parce que je me lève tôt.', translation: 'Estou cansado porque me levanto cedo.' }
  ],
  tipForBrazilians: '**Unidade 5 concluída!** Você já fala da sua rotina, das horas e da semana.\n\n' +
    'No trabalho, na França, o ***pot*** ou o ***afterwork*** (um drinque depois do expediente, geralmente na sexta) é um ótimo momento para conhecer os colegas. E o ***déjeuner*** (almoço) costuma ser longo: uma hora, às vezes mais, e muita gente almoça junto.\n\n' +
    'Um direito francês famoso: desde 2017, a lei prevê o ***droit à la déconnexion*** (direito à desconexão). Empresas com 50 empregados ou mais precisam definir regras para que ninguém seja obrigado a responder e-mails fora do horário.'
});
