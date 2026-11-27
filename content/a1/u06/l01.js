LUX.registerLesson({
  id: 'a1-u06-l01', level: 'A1', unit: 6, order: 1,
  title: 'Tu fais du sport ?', titlePt: 'Você pratica esporte?',
  names: ['Lucas', 'Léa', 'Hugo', 'Sofia', 'Croix-Rousse'],
  introPt: 'O Lucas quer jogar futebol em Lyon, mas não conhece ninguém que jogue. Nesta lição: os **esportes e o lazer**, e as duas fórmulas para falar deles: ***faire du*** (fazer, praticar) e ***jouer au*** (jogar).',
  objectives: [
    'Falar de esportes e atividades de lazer.',
    'Usar faire du / de la / de l\' e jouer au / à la.',
    'Dizer com que frequência: souvent, parfois, jamais.'
  ],
  vocabulary: [
    { fr: 'le sport', pt: 'o esporte', g: 'm', say: 'le SSPÓRR', ex: 'Tu fais du sport ?' },
    { fr: 'le foot', pt: 'o futebol', g: 'm', say: 'le FUT', ex: 'Je joue au foot.' },
    { fr: 'le tennis', pt: 'o tênis', g: 'm', say: 'le tê-NIS', ex: 'Il joue au tennis.' },
    { fr: 'le vélo', pt: 'a bicicleta; o ciclismo', g: 'm', say: 'le vê-LÔ', ex: 'Léa fait du vélo.', d: true },
    { fr: 'la natation', pt: 'a natação', g: 'f', say: 'la na-ta-SSIÕ', ex: 'Je fais de la natation.' },
    { fr: 'la course à pied', pt: 'a corrida', g: 'f', say: 'la kurrs a PIÊ', ex: 'Elle fait de la course à pied.' },
    { fr: 'la guitare', pt: 'o violão, a guitarra', g: 'f', say: 'la gui-TARR', ex: 'Je joue de la guitare.', d: true },
    { fr: "l'équipe", pt: 'o time, a equipe', g: 'f', say: 'lê-KIP', ex: 'Je cherche une équipe de foot.', d: true },
    { fr: 'jouer', pt: 'jogar; tocar (instrumento); brincar', pos: 'v', say: 'ju-Ê', ex: 'On joue le samedi.' },
    { fr: 'souvent', pt: 'frequentemente, sempre', pos: 'adv', say: 'su-VÃ', ex: 'Je fais souvent du vélo.' },
    { fr: 'parfois', pt: 'às vezes', pos: 'adv', say: 'parr-FUA', ex: 'Je joue parfois au tennis.' },
    { fr: 'ne… jamais', pt: 'nunca', pos: 'expr', say: 'ne… ja-MÉ', ex: 'Je ne fais jamais de sport !' }
  ],
  pronunciation: {
    title: 'Le foot, le sport: o "u" e o "ó"',
    textPt: 'Várias palavras do esporte vêm do inglês, mas com pronúncia francesa:\n\n' +
      '- ***le foot*** = "FUT" (com o nosso "u")\n' +
      '- ***le sport*** = "SSPÓRR" (sem "i" no começo! Nada de "isporr")\n' +
      '- ***le tennis*** = "tê-NIS" (força no fim)\n' +
      '- ***le week-end*** = "ui-KÉND"\n\n' +
      'Os brasileiros tendem a pôr um "i" antes de **sp-**, **st-**, **sc-**. Em francês, comece direto pelo **s**: *sport*, *stage*, *station*.',
    examples: [{ fr: 'le foot', pt: '"FUT"' }, { fr: 'le sport', pt: 'sem "i" no começo' }, { fr: 'le tennis', pt: 'força no fim' }, { fr: 'la station', pt: 'sem "i" no começo' }]
  },
  reading: {
    genre: 'folheto',
    title: 'Maison des sports de la Croix-Rousse',
    text: "Maison des sports de la Croix-Rousse – Activités pour adultes\n\n" +
      "Lundi soir : yoga (19 h – 20 h)\n" +
      "Mardi soir : natation à la piscine municipale\n" +
      "Mercredi soir : course à pied dans le parc\n" +
      "Jeudi soir : tennis (débutants)\n" +
      "Samedi matin : foot (équipe mixte, tous niveaux)\n\n" +
      "[[Inscription|inscrição]] : 20 euros par mois. Le premier cours est gratuit !\n" +
      "Vous ne faites jamais de sport ? Pas de problème : ici, tout le monde est bienvenu !",
    translationPt: '**Casa dos Esportes da Croix-Rousse – Atividades para adultos**\n\n' +
      'Segunda à noite: ioga (19h – 20h)\nTerça à noite: natação na piscina municipal\nQuarta à noite: corrida no parque\nQuinta à noite: tênis (iniciantes)\nSábado de manhã: futebol (time misto, todos os níveis)\n\n' +
      'Inscrição: 20 euros por mês. A primeira aula é grátis!\nVocê nunca faz esporte? Sem problema: aqui, todo mundo é bem-vindo!',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quando é o futebol?', options: ['Sábado de manhã.', 'Segunda à noite.', 'Quinta à noite.', 'Domingo.'], answer: 0,
        explanationPt: '"Samedi matin : foot".' },
      { type: 'multiple_choice', prompt: 'Quanto custa a inscrição?', options: ['20 euros por mês.', '20 euros por ano.', 'É grátis.', '10 euros por aula.'], answer: 0,
        explanationPt: '"20 euros par mois". Só a primeira aula é grátis.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Le tennis est pour les débutants.', answer: 'V', explanationPt: '"tennis (débutants)".' },
        { text: "L'équipe de foot est seulement pour les hommes.", answer: 'F', explanationPt: 'É um time **misto**: "équipe mixte".' },
        { text: 'Le premier cours est gratuit.', answer: 'V', explanationPt: '"Le premier cours est gratuit !"' },
        { text: 'Il y a du basket le vendredi.', answer: 'NM', explanationPt: 'O folheto não fala de basquete nem de sexta.' }
      ] },
      { type: 'match', prompt: 'Ligue cada atividade ao dia.', pairs: [
        ['le yoga', 'lundi'], ['la natation', 'mardi'], ['la course à pied', 'mercredi'], ['le tennis', 'jeudi'], ['le foot', 'samedi']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Procurando um time',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Léa, tu fais du sport ?', pt: 'Léa, você pratica esporte?' },
      { speaker: 'L', text: "Oui, je fais du vélo tous les jours, et parfois de la natation. Et toi ?", pt: 'Sim, ando de bicicleta todo dia, e às vezes faço natação. E você?' },
      { speaker: 'U', text: "Moi, je joue au foot. Au Brésil, je joue souvent avec mes amis. Mais ici, je ne connais pas d'équipe.", pt: 'Eu jogo futebol. No Brasil, jogo sempre com os meus amigos. Mas aqui não conheço nenhum time.' },
      { speaker: 'L', text: "Il y a la Maison des sports, le samedi matin…", pt: 'Tem a Casa dos Esportes, no sábado de manhã…' },
      { speaker: 'U', text: "Oui, mais c'est vingt euros par mois.", pt: 'É, mas são vinte euros por mês.' },
      { speaker: 'L', text: "Attends ! Mon ami Hugo joue au foot avec des amis, dans un parc. Je te présente bientôt !", pt: 'Espera! O meu amigo Hugo joga futebol com uns amigos, num parque. Eu te apresento logo!' },
      { speaker: 'U', text: 'Super, merci ! Et toi, tu joues au foot ?', pt: 'Ótimo, obrigado! E você, joga futebol?' },
      { speaker: 'L', text: "Moi ? Jamais ! Je préfère regarder.", pt: 'Eu? Nunca! Prefiro assistir.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Que esportes a Léa pratica?', options: ['Bicicleta e, às vezes, natação.', 'Futebol e tênis.', 'Ioga.', 'Nenhum.'], answer: 0,
        explanationPt: '"je fais du vélo tous les jours, et parfois de la natation".' },
      { type: 'multiple_choice', prompt: 'Quem é o Hugo?', options: ['Um amigo da Léa que joga futebol.', 'Um colega do Lucas.', 'O irmão da Léa.', 'O professor de esportes.'], answer: 0,
        explanationPt: '"Mon ami Hugo joue au foot avec des amis". Você vai conhecê-lo no A2!' },
      { type: 'listen_choose', audio: 'Moi ? Jamais ! Je préfère regarder.', prompt: 'Ouça e escolha a resposta da Léa.',
        options: ['Moi ? Jamais ! Je préfère regarder.', 'Moi ? Souvent ! Je préfère jouer.', 'Moi ? Parfois, avec Hugo.', 'Moi ? Oui, le samedi.'], answer: 0,
        explanationPt: '*Jamais* = nunca. *Je préfère regarder* = prefiro assistir.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Lucas joue au foot au Brésil.', answer: 'V', explanationPt: '"Au Brésil, je joue souvent avec mes amis."' },
        { text: 'Lucas connaît une équipe à Lyon.', answer: 'F', explanationPt: '"ici, je ne connais pas d\'équipe".' },
        { text: 'Hugo joue au foot le dimanche.', answer: 'NM', explanationPt: 'A Léa não diz o dia.' }
      ] },
      { type: 'dictation', text: 'Je fais du vélo tous les jours.', explanationPt: '*Faire du vélo* = andar de bicicleta. *Tous les jours* = todos os dias.' }
    ]
  },
  grammar: {
    topicId: 'contractions',
    title: 'Faire du sport, jouer au foot',
    explanationPt: 'Para esportes e atividades, o francês usa dois verbos:\n\n' +
      '**faire + de** (praticar), com contração:\n' +
      '- ***faire du*** + masculino: *faire du vélo, du yoga, du sport*\n' +
      '- ***faire de la*** + feminino: *faire de la natation, de la course à pied*\n' +
      '- ***faire de l\'*** + vogal: *faire de l\'escalade*\n\n' +
      '**jouer + à** (jogar), para jogos com bola, com regras:\n' +
      '- ***jouer au*** + masculino: *jouer au foot, au tennis*\n' +
      '- ***jouer à la*** + feminino: *jouer à la pétanque*\n\n' +
      '**jouer + de** (tocar), para instrumentos: *jouer **de la** guitare*, *jouer **du** piano*.\n\n' +
      '**Frequência:**\n- ***souvent*** (sempre, com frequência)\n- ***parfois*** (às vezes)\n- ***ne… jamais*** (nunca)\n\nCom *jamais*, *du / de la* viram ***de***: *Je ne fais jamais **de** sport.*',
    table: { head: ['', 'masculino', 'feminino'], rows: [
      ['faire de (praticar)', 'faire du vélo', 'faire de la natation'], ['jouer à (jogar)', 'jouer au foot', 'jouer à la pétanque'], ['jouer de (tocar)', 'jouer du piano', 'jouer de la guitare']
    ] },
    examples: [
      { fr: 'Léa fait du vélo tous les jours.', pt: 'A Léa anda de bicicleta todo dia.' },
      { fr: 'Je joue au foot le samedi.', pt: 'Jogo futebol aos sábados.' },
      { fr: 'Sofia fait de la natation.', pt: 'A Sofia faz natação.' },
      { fr: 'Je ne fais jamais de sport.', pt: 'Nunca pratico esporte.' }
    ],
    ptComparison: 'Em português, "jogar futebol" e "fazer natação" não têm artigo. Em francês, a contração é obrigatória: *jouer **au** foot*, *faire **de la** natation*.\n\n' +
      'E "jogar" e "tocar" são o mesmo verbo, ***jouer***, só muda a preposição:\n' +
      '- ***jouer au*** *tennis* = jogar tênis\n' +
      '- ***jouer de la*** *guitare* = tocar violão\n\n' +
      '***Ne… jamais*** funciona como *ne… pas*: abraça o verbo. *Je **ne** joue **jamais** au tennis.*'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com du, de la ou au.', bank: ['du', 'de la', 'au'], items: [
      { text: 'Je fais ___ vélo.', answers: ['du'] },
      { text: 'Il joue ___ foot.', answers: ['au'] },
      { text: 'Elle fait ___ natation.', answers: ['de la'] },
      { text: 'Nous jouons ___ tennis.', answers: ['au'] },
      { text: 'Tu fais ___ yoga ?', answers: ['du'] }
    ] },
    { type: 'multiple_choice', prompt: '"Eu toco violão."', options: ['Je joue de la guitare.', 'Je joue à la guitare.', 'Je fais la guitare.', 'Je joue guitare.'], answer: 0,
      explanationPt: 'Instrumento: ***jouer de*** + artigo.' },
    { type: 'multiple_choice', prompt: '"Nunca pratico esporte."', options: ['Je ne fais jamais de sport.', 'Je ne fais jamais du sport.', 'Je fais jamais le sport.', 'Je ne jamais fais de sport.'], answer: 0,
      explanationPt: '*Ne… jamais* abraça o verbo, e *du* vira ***de***.' },
    { type: 'match', prompt: 'Ligue a frequência à tradução.', pairs: [
      ['souvent', 'com frequência'], ['parfois', 'às vezes'], ['ne… jamais', 'nunca'], ['tous les jours', 'todos os dias']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je joue au foot le samedi.', translation: 'Jogo futebol aos sábados.' }
  ],
  tipForBrazilians: '**O futebol na França:** *le foot* é o esporte mais popular, e o time de Lyon, o ***Olympique lyonnais*** (o "OL"), é um dos grandes do país.\n\n' +
    'Mas o esporte do dia a dia dos franceses é a bicicleta: em Lyon existe o sistema de bicicletas compartilhadas ***Vélo\'v***. E nas praças, os mais velhos jogam ***la pétanque***, um jogo com bolas de metal muito típico do sul da França.'
});
