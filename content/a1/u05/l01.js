LUX.registerLesson({
  id: 'a1-u05-l01', level: 'A1', unit: 5, order: 1,
  title: 'Quelle heure est-il ?', titlePt: 'Que horas são?',
  names: ['Lucas', 'Léa', 'Nathalie', 'Roux', 'Graphik'],
  introPt: 'Hoje é o primeiro dia de trabalho do Lucas, e ele não pode se atrasar! Nesta lição você aprende a **dizer e entender as horas**, do jeito do dia a dia (*et quart*, *et demie*) e do jeito oficial (*14 h 30*).',
  objectives: [
    'Perguntar e dizer as horas.',
    'Entender horários oficiais (14 h 30) e do dia a dia (deux heures et demie).',
    'Dizer a que horas acontece algo: à neuf heures.'
  ],
  vocabulary: [
    { fr: "l'heure", pt: 'a hora', g: 'f', say: 'LÖRR', ex: 'Quelle heure est-il ?' },
    { fr: 'Quelle heure est-il ?', pt: 'Que horas são?', pos: 'expr', say: 'ké-LÖRR é-TIL', ex: 'Pardon, quelle heure est-il ?' },
    { fr: 'il est… heures', pt: 'são… horas', pos: 'expr', say: 'i-LÉ… ÖRR', ex: 'Il est huit heures.' },
    { fr: 'à quelle heure ?', pt: 'a que horas?', pos: 'expr', say: 'a ké-LÖRR', ex: 'À quelle heure est la réunion ?' },
    { fr: 'et quart', pt: 'e quinze', pos: 'expr', say: 'ê KARR', ex: 'Il est neuf heures et quart.' },
    { fr: 'et demie', pt: 'e meia', pos: 'expr', say: 'ê de-MI', ex: 'Il est dix heures et demie.' },
    { fr: 'moins le quart', pt: 'quinze para', pos: 'expr', say: 'muẽ le KARR', ex: 'Il est huit heures moins le quart.' },
    { fr: 'midi', pt: 'meio-dia', g: 'm', say: 'mi-DI', ex: 'On mange à midi.' },
    { fr: 'minuit', pt: 'meia-noite', g: 'm', say: 'mi-NÜI', ex: 'Il est minuit.' },
    { fr: 'la réunion', pt: 'a reunião', g: 'f', say: 'la rrê-ü-NIÕ', ex: 'La réunion est à dix heures.' },
    { fr: 'en retard', pt: 'atrasado', pos: 'expr', say: 'ã rre-TARR', ex: 'Je suis en retard !' },
    { fr: "à l'heure", pt: 'na hora, pontual', pos: 'expr', say: 'a LÖRR', ex: "Lucas est à l'heure." }
  ],
  pronunciation: {
    title: 'Heure e a liaison: deux heures, neuf heures',
    textPt: '***Heure*** começa com h mudo, então o número se **liga** a ela:\n\n' +
      '- ***une heure*** = "ü-NÖRR"\n' +
      '- ***deux heures*** = "dö-ZÖRR" (o x vira z)\n' +
      '- ***trois heures*** = "trrua-ZÖRR"\n' +
      '- ***six heures*** e ***dix heures*** = "ssi-ZÖRR", "di-ZÖRR"\n' +
      '- ***neuf heures*** = "nö-VÖRR": aqui o **f vira v**!\n\n' +
      'Por isso, de ouvido, *deux heures* parece "dö-zör", tudo junto.',
    examples: [{ fr: 'une heure', pt: '1h: "ü-NÖRR"' }, { fr: 'deux heures', pt: '2h: "dö-ZÖRR"' }, { fr: 'neuf heures', pt: '9h: "nö-VÖRR"' }, { fr: 'dix heures et demie', pt: '10h30' }]
  },
  reading: {
    genre: 'programação',
    title: 'Votre premier jour chez Graphik',
    text: "Programme de votre premier jour\n\n" +
      "9 h : [[accueil|recepção, boas-vindas]] avec Nathalie Roux\n" +
      "9 h 30 : visite de l'agence\n" +
      "10 h 30 : réunion de l'équipe\n" +
      "12 h 30 : déjeuner avec l'équipe\n" +
      "14 h : présentation des projets\n" +
      "17 h 30 : fin de la journée\n\n" +
      "Important : la réunion commence à l'heure ! Le café est dans la cuisine, au premier étage.",
    translationPt: '**Programação do seu primeiro dia**\n\n' +
      '9h: recepção com Nathalie Roux\n9h30: visita à agência\n10h30: reunião da equipe\n12h30: almoço com a equipe\n14h: apresentação dos projetos\n17h30: fim do dia\n\n' +
      'Importante: a reunião começa na hora! O café fica na cozinha, no primeiro andar.',
    exercises: [
      { type: 'multiple_choice', prompt: 'A que horas é a reunião da equipe?', options: ['Às 10h30.', 'Às 9h.', 'Às 14h.', 'Às 12h30.'], answer: 0,
        explanationPt: '"10 h 30 : réunion de l\'équipe". Diz-se *dix heures trente* ou *dix heures et demie*.' },
      { type: 'multiple_choice', prompt: 'O que acontece às 12h30?', options: ['O almoço com a equipe.', 'A visita à agência.', 'O fim do dia.', 'A apresentação dos projetos.'], answer: 0,
        explanationPt: '"12 h 30 : déjeuner avec l\'équipe". *Le déjeuner* = o almoço.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'La journée finit à 17 h 30.', answer: 'V', explanationPt: '"17 h 30 : fin de la journée".' },
        { text: 'La réunion commence souvent en retard.', answer: 'F', explanationPt: '"la réunion commence à l\'heure !"' },
        { text: 'Il y a dix personnes dans l\'équipe.', answer: 'NM', explanationPt: 'A programação não diz quantas pessoas há na equipe.' }
      ] },
      { type: 'match', prompt: 'Ligue o horário escrito ao falado.', pairs: [
        ['9 h', 'neuf heures'], ['9 h 30', 'neuf heures et demie'], ['12 h 30', 'midi et demi'], ['17 h 30', 'dix-sept heures trente']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Atrasado?',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Léa, quelle heure est-il ?', pt: 'Léa, que horas são?' },
      { speaker: 'L', text: 'Il est huit heures et quart.', pt: 'São oito e quinze.' },
      { speaker: 'U', text: "Oh non ! Je suis en retard ! J'ai rendez-vous à neuf heures !", pt: 'Ah, não! Estou atrasado! Tenho um compromisso às nove!' },
      { speaker: 'L', text: "Mais non ! L'agence est à dix minutes. Tu es à l'heure !", pt: 'Que nada! A agência fica a dez minutos. Você está no horário!' },
      { speaker: 'U', text: "Et à quelle heure tu finis, toi ?", pt: 'E você, a que horas termina?' },
      { speaker: 'L', text: "Aujourd'hui, à sept heures du soir. Et toi ?", pt: 'Hoje, às sete da noite. E você?' },
      { speaker: 'U', text: 'À cinq heures et demie.', pt: 'Às cinco e meia.' },
      { speaker: 'L', text: 'Bonne journée, et bon courage !', pt: 'Bom dia, e boa sorte!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Que horas são quando o Lucas pergunta?', options: ['8h15.', '8h45.', '9h.', '7h15.'], answer: 0,
        explanationPt: '"huit heures et quart" = 8h15. *Et quart* = e quinze.' },
      { type: 'multiple_choice', prompt: 'O Lucas está mesmo atrasado?', options: ['Não, a agência fica a dez minutos.', 'Sim, muito.', 'Sim, cinco minutos.', 'O diálogo não diz.'], answer: 0,
        explanationPt: '"L\'agence est à dix minutes. Tu es à l\'heure !"' },
      { type: 'short_answer', prompt: 'A que horas a Léa termina hoje? (formato 24h, ex.: 18:00)', answers: ['19:00', '19h', '19', '19h00', '7'],
        explanationPt: '"à sept heures du soir" = às sete da noite = 19h.' },
      { type: 'listen_choose', audio: 'À cinq heures et demie.', prompt: 'Ouça e escolha o horário do Lucas.',
        options: ['À cinq heures et demie.', 'À cinq heures et quart.', 'À six heures moins le quart.', 'À sept heures et demie.'], answer: 0,
        explanationPt: '*Cinq heures et demie* = 5h30 (17h30).' },
      { type: 'dictation', text: 'Quelle heure est-il ?', explanationPt: 'Soa "ké-LÖRR é-TIL", tudo ligado.' }
    ]
  },
  grammar: {
    topicId: 'il-impersonnel',
    title: 'As horas: il est… heures',
    explanationPt: 'Para dizer as horas, use sempre ***il est*** + número + ***heure(s)***:\n' +
      '- *Il est une heure.* (é uma hora)\n' +
      '- *Il est huit heures.* (são oito horas)\n\n' +
      '**No dia a dia** (relógio de 12 horas):\n' +
      '- ***et quart*** = e quinze: *huit heures et quart* (8h15)\n' +
      '- ***et demie*** = e meia: *huit heures et demie* (8h30)\n' +
      '- ***moins le quart*** = quinze para: *neuf heures moins le quart* (8h45)\n' +
      '- ***moins dix*** = dez para: *neuf heures moins dix* (8h50)\n' +
      '- ***midi*** (12h) e ***minuit*** (0h)\n\n' +
      '**No horário oficial** (trens, lojas, trabalho), usa-se o relógio de 24 horas e só números: *14 h 30* = ***quatorze heures trente***.\n\n' +
      '**A que horas?** = ***À quelle heure ?*** Resposta com ***à***: *à neuf heures*.',
    table: { head: ['relógio', 'dia a dia', 'oficial'], rows: [
      ['8:15', 'huit heures et quart', 'huit heures quinze'], ['8:30', 'huit heures et demie', 'huit heures trente'],
      ['8:45', 'neuf heures moins le quart', 'huit heures quarante-cinq'], ['12:00', 'midi', 'douze heures'],
      ['14:30', 'deux heures et demie', 'quatorze heures trente'], ['17:50', 'six heures moins dix', 'dix-sept heures cinquante']
    ] },
    examples: [
      { fr: 'Il est neuf heures et quart.', pt: 'São nove e quinze.' },
      { fr: 'La réunion est à dix heures et demie.', pt: 'A reunião é às dez e meia.' },
      { fr: 'Le train part à quatorze heures trente.', pt: 'O trem sai às 14h30.' },
      { fr: 'On mange à midi.', pt: 'A gente come ao meio-dia.' }
    ],
    ptComparison: 'O sistema é parecido com o nosso, mas atenção:\n' +
      '- O francês **sempre** diz ***heures***: "são oito" = *il est huit **heures***.\n' +
      '- O "quinze para as nove" vira "nove menos o quarto": ***neuf heures moins le quart***.\n' +
      '- "**e** meia" depois de *midi* e *minuit* se escreve sem e: *midi et demi*.\n\n' +
      'E o *il* é obrigatório: "são oito horas" = ***il*** *est huit heures*.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: '"São dez e meia."', options: ['Il est dix heures et demie.', 'Il est dix et demie.', 'Sont dix heures et demie.', 'Il est dix heures moins demie.'], answer: 0,
      explanationPt: 'Sempre *il est* + *heures*.' },
    { type: 'multiple_choice', prompt: '"Neuf heures moins le quart" é…', options: ['8h45', '9h15', '9h45', '8h15'], answer: 0,
      explanationPt: '9h **menos** quinze minutos = 8h45.' },
    { type: 'fill_blank', prompt: 'Escreva no formato 24h (ex.: 14:30).', items: [
      { text: 'quatorze heures trente = ___', answers: ['14:30', '14h30'] },
      { text: 'midi = ___', answers: ['12:00', '12h', '12h00'] },
      { text: 'dix-sept heures quinze = ___', answers: ['17:15', '17h15'] }
    ] },
    { type: 'listen_choose', audio: 'Il est neuf heures.', prompt: 'Ouça e escolha.', options: ['9h', '2h', '10h', '6h'], answer: 0,
      explanationPt: '*Neuf heures* soa "nö-VÖRR": o f vira v na liaison.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'La réunion est à dix heures.', translation: 'A reunião é às dez horas.' }
  ],
  tipForBrazilians: '**Pontualidade:** no trabalho e em compromissos marcados (médico, banco, reunião), os franceses esperam que você chegue **na hora** (*à l\'heure*). Num jantar na casa de alguém, ao contrário, chegue uns 10 a 15 minutos depois.\n\n' +
    'Treine as horas de ouvido em **Treino de ouvido › Horas**. É uma das coisas mais difíceis para quem fala português, e a que você mais vai usar: trem, metrô, consultas…'
});
