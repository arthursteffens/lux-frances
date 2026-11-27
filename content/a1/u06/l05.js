LUX.registerLesson({
  id: 'a1-u06-l05', level: 'A1', unit: 6, order: 5, review: true,
  title: 'Deux mois à Lyon', titlePt: 'Dois meses em Lyon (revisão da unidade e do A1)',
  names: ['Lucas', 'Ana', 'Léa', 'Sofia', 'Julie', 'Karim', 'Hugo', 'Bernard', 'Lyon', 'Fourvière', 'Terreaux', 'Lumières', 'Graphik'],
  introPt: 'Última lição do A1! Já faz dois meses que o Lucas chegou a Lyon. Ele escreve para a irmã contando tudo, e vai à Festa das Luzes com as amigas. Depois desta lição, você pode fazer o **teste de nível A1** e ganhar o certificado. 🎓',
  objectives: [
    'Revisar o A1: apresentações, casa, comida, cidade, rotina, lazer e convites.',
    'Entender um e-mail mais longo sobre a vida de alguém.',
    "Escolher entre c'est e il / elle est."
  ],
  vocabulary: [
    { fr: 'déjà', pt: 'já', pos: 'adv', say: 'dê-JA', ex: "J'habite à Lyon depuis déjà deux mois." },
    { fr: 'depuis', pt: 'desde, há (até agora)', pos: 'prep', say: 'de-PÜI', ex: "J'habite à Lyon depuis deux mois." },
    { fr: 'heureux / heureuse', pt: 'feliz', pos: 'adj', say: 'ö-RRÖ / ö-RRÖZ', ex: 'Je suis très heureux ici.' },
    { fr: 'le nouvel ami', pt: 'o novo amigo', g: 'm', say: 'le nu-vé-la-MI', ex: "J'ai de nouveaux amis." },
    { fr: 'difficile', pt: 'difícil', pos: 'adj', say: 'di-fi-SSIL', ex: "Le français, c'est difficile !" },
    { fr: 'facile', pt: 'fácil', pos: 'adj', say: 'fa-SSIL', ex: "Ce n'est pas facile." },
    { fr: 'mieux', pt: 'melhor', pos: 'adv', say: 'MIÖ', ex: 'Je parle mieux français.' },
    { fr: 'bientôt', pt: 'logo, em breve', pos: 'adv', say: 'biẽ-TÔ', ex: 'Je te présente Hugo bientôt.' }
  ],
  pronunciation: {
    title: 'Revisão final: os sons do francês',
    textPt: 'Releia estas frases em voz alta, prestando atenção em tudo o que você aprendeu:\n\n' +
      '- **consoante final muda:** *deux mois*, *très*, *beaucoup*\n' +
      '- **u × ou:** *tu*, *toujours*\n' +
      '- **nasais:** *bonjour*, *bientôt*, *maintenant*\n' +
      '- **liaison:** *deux amis*, *nous avons*\n' +
      '- **eu = "ö":** *heureux*, *mieux*, *deux*',
    examples: [{ fr: "J'habite à Lyon depuis deux mois.", pt: 'Moro em Lyon há dois meses.' }, { fr: 'Je suis très heureux.', pt: 'Estou muito feliz.' }, { fr: "J'ai de nouveaux amis.", pt: 'Tenho novos amigos.' }, { fr: 'Je parle mieux français.', pt: 'Falo francês melhor.' }]
  },
  reading: {
    genre: 'e-mail pessoal',
    title: 'Deux mois à Lyon',
    text: "Chère Ana,\n\n" +
      "J'habite à Lyon depuis deux mois. Le temps passe vite !\n\n" +
      "Je suis très heureux ici. L'appartement est petit, mais il est joli, et Léa est une colocataire super. Madame Bernard, notre voisine, est toujours très gentille avec nous.\n\n" +
      "Au travail, ça va bien. Mon équipe est sympa : Karim est drôle et Julie m'aide en français. Le mardi et le jeudi, je vais au cours de français avec Sofia, une amie italienne.\n\n" +
      "Il fait froid maintenant, mais Lyon est magnifique en décembre. Samedi, je vais à la Fête des Lumières avec Léa et Sofia.\n\n" +
      "Je parle mieux français, mais ce n'est pas encore facile. Et une bonne nouvelle : Léa veut me présenter son ami Hugo. Il joue au foot le samedi !\n\n" +
      "Gros bisous à papa et maman,\nLucas",
    translationPt: 'Querida Ana,\n\n' +
      'Moro em Lyon há dois meses. O tempo passa rápido!\n\n' +
      'Estou muito feliz aqui. O apartamento é pequeno, mas é bonito, e a Léa é uma colega de apartamento ótima. A senhora Bernard, a nossa vizinha, é sempre muito gentil com a gente.\n\n' +
      'No trabalho, vai tudo bem. A minha equipe é legal: o Karim é engraçado e a Julie me ajuda no francês. Às terças e quintas, vou à aula de francês com a Sofia, uma amiga italiana.\n\n' +
      'Agora está frio, mas Lyon é linda em dezembro. No sábado, vou à Festa das Luzes com a Léa e a Sofia.\n\n' +
      'Estou falando francês melhor, mas ainda não é fácil. E uma boa notícia: a Léa quer me apresentar o amigo dela, Hugo. Ele joga futebol aos sábados!\n\nBeijos para o papai e a mamãe,\nLucas',
    exercises: [
      { type: 'short_answer', prompt: 'Há quantos meses o Lucas mora em Lyon? Responda em algarismos.', answers: ['2'],
        explanationPt: '"J\'habite à Lyon depuis deux mois." *Depuis* = há (e continua).' },
      { type: 'multiple_choice', prompt: 'Quem ajuda o Lucas no francês, no trabalho?', options: ['A Julie.', 'O Karim.', 'A Nathalie.', 'A senhora Bernard.'], answer: 0,
        explanationPt: '"Julie m\'aide en français".' },
      { type: 'multiple_choice', prompt: 'Qual é a "boa notícia"?', options: ['A Léa vai apresentar o Hugo, que joga futebol.', 'O Lucas vai voltar ao Brasil.', 'A Ana vai visitar Lyon.', 'O Lucas vai mudar de apartamento.'], answer: 0,
        explanationPt: '"Léa veut me présenter son ami Hugo. Il joue au foot le samedi !" É assim que começa o A2!' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Lucas est heureux à Lyon.', answer: 'V', explanationPt: '"Je suis très heureux ici."' },
        { text: 'Pour Lucas, le français est facile maintenant.', answer: 'F', explanationPt: '"ce n\'est pas encore facile".' },
        { text: 'Il fait chaud à Lyon en décembre.', answer: 'F', explanationPt: '"Il fait froid maintenant".' },
        { text: 'Ana va venir à Lyon en janvier.', answer: 'NM', explanationPt: 'O e-mail não fala de visita da Ana.' }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Na Festa das Luzes',
    speakers: [{ id: 'S', name: 'Sofia', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'S', text: "Oh, regardez la place des Terreaux ! C'est magnifique !", pt: 'Ah, olhem a praça des Terreaux! É lindo!' },
      { speaker: 'U', text: "Oui ! Il y a beaucoup de monde, mais c'est super.", pt: 'Sim! Tem muita gente, mas é ótimo.' },
      { speaker: 'L', text: 'Vous avez froid ? Il fait deux degrés !', pt: 'Vocês estão com frio? Estão fazendo dois graus!' },
      { speaker: 'U', text: "Moi, oui ! Au Brésil, il ne fait jamais deux degrés !", pt: 'Eu, sim! No Brasil, nunca faz dois graus!' },
      { speaker: 'S', text: 'On prend un chocolat chaud ?', pt: 'Vamos tomar um chocolate quente?' },
      { speaker: 'L', text: "Bonne idée ! Il y a un café sympa à côté de l'église.", pt: 'Boa ideia! Tem um café legal ao lado da igreja.' },
      { speaker: 'U', text: "Et après, on va à Fourvière ? Je veux voir la ville d'en haut.", pt: 'E depois, vamos a Fourvière? Quero ver a cidade lá de cima.' },
      { speaker: 'L', text: "D'accord ! Lucas, samedi prochain, tu es libre le matin ?", pt: 'Combinado! Lucas, no próximo sábado, você está livre de manhã?' },
      { speaker: 'U', text: 'Oui, pourquoi ?', pt: 'Estou, por quê?' },
      { speaker: 'L', text: 'Je te présente mon ami Hugo. Il joue au foot au parc, avec des amis !', pt: 'Vou te apresentar o meu amigo Hugo. Ele joga futebol no parque, com uns amigos!' }
    ],
    exercises: [
      { type: 'short_answer', prompt: 'Quantos graus faz? Responda em algarismos.', answers: ['2'],
        explanationPt: '"Il fait deux degrés !"' },
      { type: 'multiple_choice', prompt: 'O que eles vão tomar?', options: ['Um chocolate quente.', 'Um café.', 'Um chá.', 'Um vinho quente.'], answer: 0,
        explanationPt: '"On prend un chocolat chaud ?"' },
      { type: 'multiple_choice', prompt: 'Aonde eles vão depois do café?', options: ['A Fourvière.', 'Para casa.', 'Ao cinema.', 'À praça Bellecour.'], answer: 0,
        explanationPt: '"Et après, on va à Fourvière ?"' },
      { type: 'listen_choose', audio: "Je te présente mon ami Hugo.", prompt: 'Ouça e escolha o que a Léa disse.',
        options: ["Je te présente mon ami Hugo.", "Je te présente mon frère Thomas.", "Tu connais mon ami Hugo ?", "Hugo est mon colocataire."], answer: 0,
        explanationPt: '*Je te présente…* = vou te apresentar… / este é…' },
      { type: 'dictation', text: "Au Brésil, il ne fait jamais deux degrés !", explanationPt: '*Ne… jamais* = nunca. E clima com *il fait*.' }
    ]
  },
  grammar: {
    topicId: 'cest-ilest',
    title: "C'est ou il est? Descrever pessoas e coisas",
    explanationPt: 'As duas expressões traduzem "é", mas não se usam do mesmo jeito:\n\n' +
      '**C\'est** + nome, artigo ou pronome (identifica: **quem / o que** é):\n' +
      '- ***C\'est*** *Léa.* (é a Léa)\n' +
      '- ***C\'est*** *une amie.* (é uma amiga)\n' +
      '- ***C\'est*** *moi !* (sou eu!)\n' +
      '- ***C\'est*** + adjetivo, para uma situação em geral: *C\'est magnifique !* *C\'est difficile.*\n\n' +
      '**Il est / elle est** + adjetivo ou profissão sem artigo (descreve **como** a pessoa é):\n' +
      '- ***Elle est*** *gentille.* (ela é gentil)\n' +
      '- ***Il est*** *graphiste.* (ele é designer)\n' +
      '- ***Il est*** *brésilien.* (ele é brasileiro)\n\n' +
      'Com profissão: *il est graphiste* (sem artigo) **ou** *c\'est un graphiste* (com artigo). Nunca *il est un graphiste*.',
    table: { head: ["c'est…", 'il / elle est…'], rows: [
      ["C'est Lucas.", 'Il est brésilien.'], ["C'est une amie italienne.", 'Elle est italienne.'], ["C'est un bon graphiste.", 'Il est graphiste.'], ["C'est magnifique !", 'Elle est magnifique. (a praça)']
    ] },
    examples: [
      { fr: "C'est mon amie Sofia. Elle est italienne.", pt: 'Esta é a minha amiga Sofia. Ela é italiana.' },
      { fr: "C'est un collègue. Il est développeur.", pt: 'É um colega. Ele é programador.' },
      { fr: "C'est magnifique !", pt: 'É lindo!' },
      { fr: 'Madame Bernard ? Elle est très gentille.', pt: 'A senhora Bernard? Ela é muito gentil.' }
    ],
    ptComparison: 'Em português, "é" serve para tudo: "**é** a Léa", "ela **é** gentil". Em francês, pense assim:\n' +
      '- vem **artigo ou nome** depois? → ***c\'est***\n' +
      '- vem **só um adjetivo** (ou profissão) falando de uma pessoa? → ***il / elle est***\n\n' +
      '**Parabéns por terminar o A1!** 🎉 O próximo passo é o **teste de nível**, e depois o A2, que começa exatamente quando a Léa apresenta o Hugo ao Lucas.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: "Complete com c'est, il est ou elle est.", bank: ["C'est", 'Il est', 'Elle est'], items: [
      { text: '___ Hugo, un ami de Léa.', answers: ["C'est"] },
      { text: 'Sofia ? ___ italienne.', answers: ['Elle est'] },
      { text: 'Karim ? ___ développeur.', answers: ['Il est'] },
      { text: '___ un bon restaurant.', answers: ["C'est"] }
    ], explanationPt: '- **nome / artigo** depois → *c\'est*\n- **adjetivo / profissão** sem artigo → *il / elle est*' },
    { type: 'multiple_choice', prompt: '"Ele é designer."', options: ['Il est graphiste.', 'Il est un graphiste.', "C'est graphiste.", 'Il a graphiste.'], answer: 0,
      explanationPt: 'Profissão depois de *il est*: sem artigo.' },
    { type: 'multiple_choice', prompt: '"Moro em Lyon há dois meses."', options: ["J'habite à Lyon depuis deux mois.", "J'habite à Lyon il y a deux mois.", "J'habite en Lyon depuis deux mois.", "Je habite à Lyon depuis deux mois."], answer: 0,
      explanationPt: 'Algo que começou e continua: ***depuis***. Cidade: ***à***.' },
    { type: 'match', prompt: 'Revisão: ligue a pergunta à resposta.', pairs: [
      ["Tu t'appelles comment ?", "Je m'appelle Lucas."], ['Tu as quel âge ?', "J'ai vingt-huit ans."], ['Quel temps fait-il ?', 'Il fait froid.'], ['Quelle heure est-il ?', 'Il est huit heures.'], ['Tu veux venir ?', 'Avec plaisir !']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "C'est mon amie Sofia, elle est italienne.", translation: 'Esta é a minha amiga Sofia, ela é italiana.' }
  ],
  tipForBrazilians: '**Você concluiu o A1!** 🎉 Agora você já consegue se apresentar, falar da família e da casa, fazer compras, se orientar na cidade, contar a sua rotina, falar do tempo e combinar programas, tudo em francês.\n\n' +
    'Próximos passos:\n' +
    '- Faça o **teste de nível A1** (no fim do mapa do curso) para ganhar o certificado.\n' +
    '- Continue a **revisão** diária: 5 minutos por dia fazem toda a diferença.\n' +
    '- No A2, você vai aprender a contar o que **fez** (o passado) e o que **vai fazer** (o futuro).'
});
