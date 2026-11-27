LUX.registerLesson({
  id: 'a1-u06-l02', level: 'A1', unit: 6, order: 2,
  title: 'Quel temps fait-il ?', titlePt: 'Como está o tempo?',
  names: ['Lucas', 'Ana', 'Lyon', 'Belo Horizonte', 'Alpes', 'Brésil'],
  introPt: 'Chegou o outono em Lyon, e o Lucas, acostumado com o clima de Belo Horizonte, está sentindo frio! Nesta lição: o **tempo** (o clima), as **estações** e o *il* impessoal: ***il fait froid***, ***il pleut***.',
  objectives: [
    'Perguntar e dizer como está o tempo.',
    'Nomear as estações do ano.',
    'Usar il fait, il pleut, il neige, il y a du vent.'
  ],
  vocabulary: [
    { fr: 'le temps', pt: 'o tempo (clima); o tempo (horas)', g: 'm', say: 'le TÃ', ex: 'Quel temps fait-il ?' },
    { fr: 'il fait beau', pt: 'o tempo está bom', pos: 'expr', say: 'il fé BÔ', ex: "Aujourd'hui, il fait beau." },
    { fr: 'il fait chaud', pt: 'está calor', pos: 'expr', say: 'il fé XÔ', ex: 'Au Brésil, il fait chaud.' },
    { fr: 'il fait froid', pt: 'está frio', pos: 'expr', say: 'il fé FRRUA', ex: 'En hiver, il fait froid.' },
    { fr: 'il pleut', pt: 'está chovendo, chove', pos: 'expr', say: 'il PLÖ', ex: 'Il pleut beaucoup à Lyon.' },
    { fr: 'il neige', pt: 'está nevando, neva', pos: 'expr', say: 'il NÉJ', ex: 'Il neige dans les Alpes.' },
    { fr: 'le soleil', pt: 'o sol', g: 'm', say: 'le sso-LÉI', ex: 'Il y a du soleil.' },
    { fr: 'le vent', pt: 'o vento', g: 'm', say: 'le VÃ', ex: 'Il y a du vent.' },
    { fr: "l'été", pt: 'o verão', g: 'm', say: 'lê-TÊ', ex: "En été, il fait chaud." },
    { fr: "l'automne", pt: 'o outono', g: 'm', say: 'lô-TÓN', ex: "En automne, il pleut." },
    { fr: "l'hiver", pt: 'o inverno', g: 'm', say: 'li-VÉRR', ex: 'En hiver, il neige.' },
    { fr: 'le printemps', pt: 'a primavera', g: 'm', say: 'le prrẽ-TÃ', ex: 'Au printemps, il fait doux.', d: true }
  ],
  pronunciation: {
    title: 'Froid, chaud, pleut: três sons de uma vez',
    textPt: 'As palavras do tempo juntam vários sons que você já viu:\n\n' +
      '- ***froid*** = "FRRUA": **oi** = "uá", o **d** não soa\n' +
      '- ***chaud*** = "XÔ": **au** = "ô", o **d** não soa\n' +
      '- ***il pleut*** = "il PLÖ": **eu** = "ö", com biquinho\n' +
      '- ***l\'automne*** = "lô-TÓN": o **m** não soa!\n' +
      '- ***le printemps*** = "le prrẽ-TÃ": o **p** e o **s** não soam',
    examples: [{ fr: 'il fait froid', pt: 'está frio' }, { fr: 'il fait chaud', pt: 'está calor' }, { fr: 'il pleut', pt: 'chove' }, { fr: "l'automne", pt: 'o m não soa' }, { fr: 'le printemps', pt: 'p e s mudos' }]
  },
  reading: {
    genre: 'previsão do tempo',
    title: 'La météo de la semaine à Lyon',
    text: "La météo de la semaine à Lyon\n\n" +
      "Lundi : il fait beau et il y a du soleil. 18 degrés.\n" +
      "Mardi : il y a des nuages, mais il ne pleut pas. 15 degrés.\n" +
      "Mercredi et jeudi : il pleut toute la journée. Prenez votre parapluie !\n" +
      "Vendredi : il y a du vent. Il fait froid : 9 degrés.\n" +
      "Week-end : il fait beau, mais froid le matin. Dans les Alpes, il neige !\n\n" +
      "C'est l'automne : les jours sont plus courts et les arbres sont jaunes et rouges.",
    translationPt: '**A previsão do tempo da semana em Lyon**\n\n' +
      'Segunda: o tempo está bom e faz sol. 18 graus.\n' +
      'Terça: está nublado, mas não chove. 15 graus.\n' +
      'Quarta e quinta: chove o dia todo. Levem o guarda-chuva!\n' +
      'Sexta: venta. Está frio: 9 graus.\n' +
      'Fim de semana: tempo bom, mas frio de manhã. Nos Alpes, está nevando!\n\n' +
      'É outono: os dias são mais curtos e as árvores estão amarelas e vermelhas.',
    exercises: [
      { type: 'multiple_choice', prompt: 'Em quais dias chove?', options: ['Quarta e quinta.', 'Segunda e terça.', 'Sexta.', 'No fim de semana.'], answer: 0,
        explanationPt: '"Mercredi et jeudi : il pleut toute la journée."' },
      { type: 'short_answer', prompt: 'Quantos graus faz na sexta? Responda em algarismos.', answers: ['9'],
        explanationPt: '"Il fait froid : 9 degrés."' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Lundi, il y a du soleil.', answer: 'V', explanationPt: '"il fait beau et il y a du soleil".' },
        { text: 'Mardi, il pleut.', answer: 'F', explanationPt: '"il ne pleut pas".' },
        { text: 'Il neige dans les Alpes ce week-end.', answer: 'V', explanationPt: '"Dans les Alpes, il neige !"' },
        { text: 'Il fait 30 degrés à Paris.', answer: 'NM', explanationPt: 'A previsão é só de Lyon.' }
      ] },
      { type: 'match', prompt: 'Ligue o tempo à tradução.', pairs: [
        ['il fait beau', 'o tempo está bom'], ['il pleut', 'chove'], ['il y a du vent', 'venta'], ['il fait froid', 'está frio'], ['il neige', 'neva']
      ] }
    ]
  },
  listening: {
    genre: 'chamada de vídeo',
    title: 'Frio em Lyon, calor em BH',
    speakers: [{ id: 'A', name: 'Ana', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'A', text: 'Salut Lucas ! Quel temps fait-il à Lyon ?', pt: 'Oi, Lucas! Como está o tempo em Lyon?' },
      { speaker: 'U', text: "Il fait froid ! Dix degrés, et il pleut.", pt: 'Está frio! Dez graus, e está chovendo.' },
      { speaker: 'A', text: 'Dix degrés ? Ici, il fait trente degrés !', pt: 'Dez graus? Aqui estão trinta graus!' },
      { speaker: 'U', text: "Je sais… Ici, c'est l'automne. Et l'hiver arrive !", pt: 'Eu sei… Aqui é outono. E o inverno está chegando!' },
      { speaker: 'A', text: 'Il neige à Lyon en hiver ?', pt: 'Neva em Lyon no inverno?' },
      { speaker: 'U', text: "Parfois. Mais dans les Alpes, il neige beaucoup. Léa adore le ski !", pt: 'Às vezes. Mas nos Alpes neva muito. A Léa adora esqui!' },
      { speaker: 'A', text: "Et toi, tu as un manteau ?", pt: 'E você, tem um casaco?' },
      { speaker: 'U', text: "Pas encore ! Samedi, je vais acheter un manteau et un bonnet.", pt: 'Ainda não! No sábado vou comprar um casaco e uma touca.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Como está o tempo em Lyon?', options: ['Frio e chuvoso, 10 graus.', 'Calor, 30 graus.', 'Neve.', 'Sol e vento.'], answer: 0,
        explanationPt: '"Il fait froid ! Dix degrés, et il pleut."' },
      { type: 'short_answer', prompt: 'Quantos graus faz em Belo Horizonte? Responda em algarismos.', answers: ['30'],
        explanationPt: '"Ici, il fait trente degrés !"' },
      { type: 'multiple_choice', prompt: 'O que o Lucas vai comprar no sábado?', options: ['Um casaco e uma touca.', 'Um guarda-chuva.', 'Esquis.', 'Uma bicicleta.'], answer: 0,
        explanationPt: '"un manteau et un bonnet". *Le manteau* = o casaco; *le bonnet* = a touca.' },
      { type: 'listen_choose', audio: 'Quel temps fait-il à Lyon ?', prompt: 'Ouça e escolha a pergunta.',
        options: ['Quel temps fait-il à Lyon ?', 'Quelle heure est-il à Lyon ?', "Qu'est-ce que tu fais à Lyon ?", 'Il fait beau à Lyon ?'], answer: 0,
        explanationPt: '*Quel temps fait-il ?* = como está o tempo? Não confunda com *Quelle heure est-il ?* (que horas são?).' },
      { type: 'dictation', text: 'Il fait froid et il pleut.', explanationPt: 'Clima: *il fait* + adjetivo; chuva: *il pleut*.' }
    ]
  },
  grammar: {
    topicId: 'il-impersonnel',
    title: 'O tempo: il fait, il pleut, il y a du vent',
    explanationPt: 'Para falar do tempo, o francês usa um ***il*** que não é ninguém (como nas horas):\n\n' +
      '**il fait** + adjetivo:\n' +
      '- ***il fait beau*** = o tempo está bom\n' +
      '- ***il fait mauvais*** = o tempo está ruim\n' +
      '- ***il fait chaud*** = está calor\n' +
      '- ***il fait froid*** = está frio\n' +
      '- ***il fait 20 degrés*** = faz 20 graus\n\n' +
      '**verbos próprios:**\n' +
      '- ***il pleut*** = chove (*pleuvoir*)\n' +
      '- ***il neige*** = neva (*neiger*)\n\n' +
      '**il y a du / des** + coisa:\n' +
      '- ***il y a du soleil*** = faz sol\n' +
      '- ***il y a du vent*** = venta\n' +
      '- ***il y a des nuages*** = está nublado\n\n' +
      '**Estações:** ***en*** *été*, ***en*** *automne*, ***en*** *hiver*, mas ***au*** *printemps*.',
    table: { head: ['estação', 'em…', 'tempo típico em Lyon'], rows: [
      ["l'été", 'en été', 'il fait chaud'], ["l'automne", 'en automne', 'il pleut, il y a du vent'],
      ["l'hiver", 'en hiver', 'il fait froid, parfois il neige'], ['le printemps', 'au printemps', 'il fait doux']
    ] },
    examples: [
      { fr: 'Quel temps fait-il ?', pt: 'Como está o tempo?' },
      { fr: 'En hiver, il fait froid.', pt: 'No inverno, faz frio.' },
      { fr: 'Il y a du soleil et il fait chaud.', pt: 'Faz sol e está calor.' },
      { fr: 'Au printemps, il pleut parfois.', pt: 'Na primavera, às vezes chove.' }
    ],
    ptComparison: 'Em português dizemos "**está** calor" ou "**faz** frio". O francês usa sempre ***il fait***: *il fait chaud*, *il fait froid*. Nunca *il est chaud*.\n\n' +
      'Atenção à diferença entre o tempo e a sensação:\n' +
      '- ***Il fait froid.*** = está frio (o clima)\n' +
      '- ***J\'ai froid.*** = estou com frio (eu sinto)\n\n' +
      'E as estações são o contrário do Brasil: quando é verão na França (junho a agosto), é inverno no Brasil.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: '"Está calor."', options: ['Il fait chaud.', 'Il est chaud.', "J'ai chaud.", 'Il y a chaud.'], answer: 0,
      explanationPt: 'Clima = ***il fait*** + adjetivo. *J\'ai chaud* = eu estou com calor (sensação).' },
    { type: 'fill_blank', prompt: 'Complete com fait, pleut ou y a.', bank: ['fait', 'pleut', 'y a'], items: [
      { text: 'Il ___ beau aujourd\'hui.', answers: ['fait'] },
      { text: 'Il ___ beaucoup en automne.', answers: ['pleut'] },
      { text: 'Il ___ du vent.', answers: ['y a'] },
      { text: 'Il ___ froid en hiver.', answers: ['fait'] }
    ] },
    { type: 'fill_blank', prompt: 'Complete com en ou au.', bank: ['en', 'au'], items: [
      { text: '___ été', answers: ['en'] },
      { text: '___ printemps', answers: ['au'] },
      { text: '___ hiver', answers: ['en'] },
      { text: '___ automne', answers: ['en'] }
    ], explanationPt: 'Só a primavera é diferente: ***au*** *printemps*.' },
    { type: 'match', prompt: 'Ligue a estação à tradução.', pairs: [
      ["l'été", 'o verão'], ["l'automne", 'o outono'], ["l'hiver", 'o inverno'], ['le printemps', 'a primavera']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'En hiver, il fait froid à Lyon.', translation: 'No inverno, faz frio em Lyon.' }
  ],
  tipForBrazilians: '**Se vestir para o inverno francês:** em Lyon, as temperaturas ficam perto de 0 °C em janeiro. O segredo é a técnica das camadas (***les couches***):\n\n' +
    '- ***un manteau*** = um casaco pesado\n' +
    '- ***un pull*** = um suéter\n' +
    '- ***une écharpe*** = um cachecol\n' +
    '- ***un bonnet*** = uma touca\n' +
    '- ***des gants*** = luvas\n\n' +
    'E falar do tempo é o assunto preferido para puxar conversa, como no Brasil: *Il fait froid, hein ?*'
});
