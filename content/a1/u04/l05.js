LUX.registerLesson({
  id: 'a1-u04-l05', level: 'A1', unit: 4, order: 5, review: true,
  title: 'Les bonnes adresses de madame Bernard', titlePt: 'Os lugares preferidos da senhora Bernard (revisão da unidade)',
  names: ['Lucas', 'Bernard', 'Croix-Rousse', 'Lyon', 'Paris', 'France', 'Brésil', 'Portugal', 'Italie', 'Belo Horizonte', 'Rome', 'Gros Caillou', 'Bonnet'],
  introPt: 'Revisão da Unidade 4. A senhora Bernard mostra ao Lucas os melhores lugares do bairro. Você vai revisar lugares, *aller*, direções, preposições e adjetivos, e aprender a dizer **em qual cidade ou país** alguém mora.',
  objectives: [
    'Revisar lugares, direções, preposições de lugar e adjetivos.',
    'Entender uma lista de recomendações.',
    'Usar à, en, au com cidades e países (à Lyon, en France, au Brésil).'
  ],
  vocabulary: [
    { fr: "l'adresse", pt: 'o endereço; o lugar (recomendado)', g: 'f', say: 'la-DRRÉS', ex: 'Voici mes bonnes adresses.', d: true },
    { fr: 'le pays', pt: 'o país', g: 'm', say: 'le pê-I', ex: 'Le Brésil est un grand pays.' },
    { fr: 'le restaurant', pt: 'o restaurante', g: 'm', say: 'le rrés-tô-RRÃ', ex: 'Un petit restaurant italien.' },
    { fr: 'le marchand de journaux', pt: 'a banca de jornal', g: 'm', say: 'le marr-XÃ de jurr-NÔ', ex: 'Le marchand de journaux est en face.' },
    { fr: 'ouvert / ouverte', pt: 'aberto / aberta', pos: 'adj', say: 'u-VÉRR / u-VÉRRT', ex: 'La pharmacie est ouverte le dimanche.' },
    { fr: 'fermé / fermée', pt: 'fechado / fechada', pos: 'adj', say: 'férr-MÊ', ex: 'Le musée est fermé le lundi.' },
    { fr: 'pas cher / pas chère', pt: 'barato(a)', pos: 'expr', say: 'pa XÉRR', ex: 'Ce restaurant est bon et pas cher.' },
    { fr: 'en France', pt: 'na França', pos: 'expr', say: 'ã FRRÃS', ex: "J'habite en France." }
  ],
  pronunciation: {
    title: 'Revisão: au, à la, en',
    textPt: 'Releia em voz alta:\n\n' +
      '- ***au*** = "ô": *au Brésil*, *au marché*\n' +
      '- ***en*** = "ã" (nasal): *en France*, *en Italie*\n' +
      '- ***à la*** = "a la": *à la pharmacie*\n\n' +
      'E as direções: *à droite* "a DRRUAT", *à gauche* "a GÔX", *tout droit* "tu DRRUA".',
    examples: [{ fr: 'au Brésil', pt: 'no Brasil' }, { fr: 'en France', pt: 'na França' }, { fr: 'à Lyon', pt: 'em Lyon' }, { fr: 'à la pharmacie', pt: 'na farmácia' }]
  },
  reading: {
    genre: 'lista de recomendações',
    title: 'Mes bonnes adresses',
    text: "Lucas, voici mes bonnes adresses dans le quartier :\n\n" +
      "– La boulangerie Bonnet : le meilleur pain de la Croix-Rousse ! Sur la place, à côté de la pharmacie.\n" +
      "– La pharmacie : elle est ouverte le dimanche matin.\n" +
      "– Le petit restaurant italien, rue d'Austerlitz : bon et pas cher. Le patron est de Rome !\n" +
      "– Le marché : le samedi matin, sur le boulevard. Les fromages sont excellents.\n" +
      "– Le Gros Caillou : une grande pierre au bout du boulevard. La vue sur Lyon est très belle.\n\n" +
      "Bonne découverte !\nMadame Bernard",
    translationPt: 'Lucas, aqui estão os meus lugares preferidos no bairro:\n\n' +
      '– A padaria Bonnet: o melhor pão da Croix-Rousse! Na praça, ao lado da farmácia.\n' +
      '– A farmácia: abre no domingo de manhã.\n' +
      '– O restaurantezinho italiano, na rua de Austerlitz: bom e barato. O dono é de Roma!\n' +
      '– A feira: sábado de manhã, no bulevar. Os queijos são excelentes.\n' +
      '– O Gros Caillou: uma pedra grande no fim do bulevar. A vista de Lyon é muito bonita.\n\n' +
      'Boa descoberta!\nSenhora Bernard',
    exercises: [
      { type: 'multiple_choice', prompt: 'Onde fica a padaria Bonnet?', options: ['Na praça, ao lado da farmácia.', 'Na rua de Austerlitz.', 'No bulevar.', 'Em frente ao restaurante.'], answer: 0,
        explanationPt: '"Sur la place, à côté de la pharmacie."' },
      { type: 'multiple_choice', prompt: 'O que é o Gros Caillou?', options: ['Uma pedra grande com vista para Lyon.', 'Um restaurante.', 'Uma padaria.', 'Uma igreja.'], answer: 0,
        explanationPt: '"une grande pierre au bout du boulevard". *La pierre* = a pedra.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'La pharmacie est ouverte le dimanche matin.', answer: 'V', explanationPt: '"elle est ouverte le dimanche matin".' },
        { text: 'Le restaurant italien est cher.', answer: 'F', explanationPt: '"bon et pas cher" = bom e barato.' },
        { text: 'Le patron du restaurant est italien.', answer: 'V', explanationPt: '"Le patron est de Rome !"' },
        { text: 'Madame Bernard va au marché tous les samedis.', answer: 'NM', explanationPt: 'Ela recomenda a feira, mas não diz se vai sempre.' }
      ] },
      { type: 'match', prompt: 'Ligue cada lugar à recomendação.', pairs: [
        ['la boulangerie', 'le meilleur pain'], ['la pharmacie', 'ouverte le dimanche'], ['le restaurant', 'bon et pas cher'], ['le marché', 'le samedi matin']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Um passeio pelo bairro',
    speakers: [{ id: 'B', name: 'Mme Bernard', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'B', text: 'Voilà la place. La boulangerie est là, à droite.', pt: 'Aqui está a praça. A padaria é ali, à direita.' },
      { speaker: 'U', text: "Et le restaurant italien, c'est loin ?", pt: 'E o restaurante italiano, é longe?' },
      { speaker: 'B', text: "Non. Prenez la première rue à gauche et continuez tout droit. Il est en face de la banque.", pt: 'Não. Pegue a primeira rua à esquerda e siga em frente. Ele fica em frente ao banco.' },
      { speaker: 'U', text: 'Le patron est italien, non ?', pt: 'O dono é italiano, não é?' },
      { speaker: 'B', text: "Oui, il est de Rome. Il habite en France depuis trente ans. Et vous, vous habitez en France depuis quand ?", pt: 'É, ele é de Roma. Mora na França há trinta anos. E o senhor, mora na França desde quando?' },
      { speaker: 'U', text: "Depuis trois semaines ! Ma famille habite au Brésil, à Belo Horizonte.", pt: 'Há três semanas! A minha família mora no Brasil, em Belo Horizonte.' },
      { speaker: 'B', text: 'Et vous aimez le quartier ?', pt: 'E o senhor gosta do bairro?' },
      { speaker: 'U', text: "Oui, beaucoup ! Il est calme et très joli.", pt: 'Sim, muito! Ele é tranquilo e muito bonito.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Onde fica o restaurante italiano?', options: ['Em frente ao banco.', 'Ao lado da padaria.', 'Na praça.', 'Atrás da igreja.'], answer: 0,
        explanationPt: '"Il est en face de la banque."' },
      { type: 'short_answer', prompt: 'Há quantas semanas o Lucas mora na França? Responda em algarismos.', answers: ['3'],
        explanationPt: '"Depuis trois semaines !" *Depuis* = desde, há.' },
      { type: 'listen_choose', audio: 'Prenez la première rue à gauche.', prompt: 'Ouça e escolha a direção.',
        options: ['Prenez la première rue à gauche.', 'Prenez la première rue à droite.', 'Prenez la deuxième rue à gauche.', 'Allez tout droit.'], answer: 0,
        explanationPt: '*La première rue à gauche* = a primeira rua à esquerda.' },
      { type: 'multiple_choice', prompt: 'O que o Lucas acha do bairro?', options: ['Tranquilo e muito bonito.', 'Movimentado e feio.', 'Caro.', 'Longe do centro.'], answer: 0,
        explanationPt: '"Il est calme et très joli."' },
      { type: 'dictation', text: "J'habite en France.", explanationPt: 'País feminino (*la France*) → ***en***.' }
    ]
  },
  grammar: {
    topicId: 'prepositions-places',
    title: 'Revisão + à, en, au: cidades e países',
    explanationPt: 'Para dizer **em** ou **para** uma cidade ou um país:\n\n' +
      '- **Cidade** → ***à***: *J\'habite à Lyon.* *Je vais à Paris.*\n' +
      '- **País feminino** (a maioria termina em -e) → ***en***: *en France*, *en Italie*, *en Suisse*\n' +
      '- **País masculino** → ***au***: *au Brésil*, *au Portugal*, *au Canada*\n' +
      '- **País no plural** → ***aux***: *aux États-Unis*\n\n' +
      'O mesmo vale para "morar" e "ir": *J\'habite au Brésil. Je vais en France.*',
    table: { head: ['', 'exemplo', 'português'], rows: [
      ['à + cidade', 'à Lyon, à Rome', 'em Lyon, em Roma'], ['en + país feminino', 'en France, en Italie', 'na França, na Itália'],
      ['au + país masculino', 'au Brésil, au Portugal', 'no Brasil, em Portugal'], ['aux + país plural', 'aux États-Unis', 'nos Estados Unidos']
    ] },
    examples: [
      { fr: "J'habite à Lyon, en France.", pt: 'Moro em Lyon, na França.' },
      { fr: 'Mes parents habitent au Brésil.', pt: 'Meus pais moram no Brasil.' },
      { fr: 'Sofia est de Rome, en Italie.', pt: 'A Sofia é de Roma, na Itália.' },
      { fr: 'Nous allons au Portugal.', pt: 'Vamos a Portugal.' }
    ],
    ptComparison: 'O português também usa preposição + artigo com países: "**no** Brasil", "**na** França". O francês faz parecido:\n' +
      '- "no Brasil" (*le Brésil*) = ***au*** *Brésil*\n' +
      '- "na França" (*la France*) = ***en*** *France* (não *à la France*!)\n\n' +
      'Com cidade, sem artigo, como em português: "em Lyon" = *à Lyon*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com à, en ou au.', bank: ['à', 'en', 'au'], items: [
      { text: "J'habite ___ Lyon.", answers: ['à'] },
      { text: 'Lyon est ___ France.', answers: ['en'] },
      { text: 'Mes parents habitent ___ Brésil.', answers: ['au'] },
      { text: 'Sofia est de Rome, ___ Italie.', answers: ['en'] },
      { text: 'Je vais ___ Portugal.', answers: ['au'] }
    ], explanationPt: '- **cidade** → *à*\n- **France, Italie** (femininos) → *en*\n- **Brésil, Portugal** (masculinos) → *au*' },
    { type: 'multiple_choice', prompt: '"Onde fica a farmácia?" — "Ao lado da padaria."', options: ['Où est la pharmacie ? — À côté de la boulangerie.', 'Où est la pharmacie ? — Sur la boulangerie.', 'Où va la pharmacie ? — À côté de la boulangerie.', 'Où est la pharmacie ? — À côté du boulangerie.'], answer: 0,
      explanationPt: '*La boulangerie* é feminino → *à côté **de la** boulangerie*.' },
    { type: 'multiple_choice', prompt: '"Um restaurante bom e barato."', options: ['Un bon restaurant pas cher.', 'Un restaurant bon cher.', 'Une bonne restaurant pas cher.', 'Un restaurant pas bon cher.'], answer: 0,
      explanationPt: '*Bon* vem antes (BAGS). *Pas cher* = barato.' },
    { type: 'fill_blank', prompt: 'Complete com o verbo aller.', items: [
      { text: 'Nous ___ au marché samedi.', answers: ['allons'] },
      { text: 'Tu ___ à la boulangerie ?', answers: ['vas'] },
      { text: 'Ils ___ au restaurant.', answers: ['vont'] }
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Mes parents habitent au Brésil.', translation: 'Meus pais moram no Brasil.' }
  ],
  tipForBrazilians: '**Unidade 4 concluída!** Você já se orienta numa cidade francesa: pergunta o caminho, entende as direções e descreve os lugares.\n\n' +
    'Curiosidade: ***une adresse*** é o endereço, mas ***une bonne adresse*** é um **lugar que vale a pena** (um restaurante, uma loja, uma padaria). Os franceses adoram trocar *bonnes adresses*!'
});
