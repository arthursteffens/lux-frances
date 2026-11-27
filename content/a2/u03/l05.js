LUX.registerLesson({
  id: 'a2-u03-l05', level: 'A2', unit: 3, order: 5, review: true,
  title: "Mamie Jeanne raconte", titlePt: 'A vovó Jeanne conta (revisão da unidade)',
  names: ['Jeanne', 'Mamie', 'Léa', 'Annecy', 'Pierre', 'Grenoble', 'Lucas', 'Ana', 'Belo Horizonte', 'Pampulha', 'Rex', 'Brésil', 'Paris', 'Simone'],
  objectives: [
    'Revisar o imparfait e o passé composé numa narrativa mais longa.',
    'Entender uma conversa de lembranças entre irmãos.',
    'Usar il y a, pendant e depuis sem hesitar.'
  ],
  vocabulary: [
    { fr: 'le bal', pt: 'o baile', g: 'm', ex: 'On dansait au bal du village.' },
    { fr: 'tomber amoureux / amoureuse', pt: 'apaixonar-se', pos: 'expr', ex: 'Je suis tombée amoureuse tout de suite.' },
    { fr: 'se marier', pt: 'casar-se', pos: 'v', ex: 'Ils se sont mariés en 1960.' },
    { fr: 'le mari', pt: 'o marido', g: 'm', ex: 'Mon mari était très drôle.' },
    { fr: 'timide', pt: 'tímido(a)', pos: 'adj', ex: 'Il était timide mais gentil.' },
    { fr: 'gentil / gentille', pt: 'gentil, bonzinho', pos: 'adj', ex: 'Ta grand-mère est très gentille.' },
    { fr: 'drôle', pt: 'engraçado(a)', pos: 'adj', ex: "C'était une histoire drôle." },
    { fr: 'la lettre', pt: 'a carta', g: 'f', ex: "Il m'écrivait des lettres." },
    { fr: 'se disputer', pt: 'brigar, discutir', pos: 'v', ex: 'On se disputait tout le temps.' },
    { fr: 'la bêtise', pt: 'a besteira, a travessura', g: 'f', ex: 'Tu faisais beaucoup de bêtises !' },
    { fr: 'la moto', pt: 'a moto', g: 'f', ex: 'Il avait une vieille moto.' },
    { fr: 'Tu te souviens ?', pt: 'Você se lembra?', pos: 'expr', ex: 'Tu te souviens de notre chien ?' }
  ],
  reading: {
    genre: 'carta',
    title: 'Une lettre de Mamie Jeanne à Léa',
    text: "Ma chère Léa,\n\n" +
      "Tu m'as demandé comment j'ai rencontré ton grand-père. Voici l'histoire.\n\n" +
      "C'était en juillet 1958. J'avais dix-neuf ans et je travaillais dans une boulangerie à Annecy, déjà ! Le samedi soir, il y avait un [[bal|baile]] au bord du lac. Toutes les filles du quartier y allaient avec leurs plus belles robes.\n\n" +
      "Ce soir-là, il faisait très chaud. Je dansais avec mon amie Simone quand un jeune homme très grand est entré. Il portait une chemise bleue et il avait l'air perdu. Il s'appelait Pierre, il venait de Grenoble et il ne connaissait personne. Il m'a invitée à danser. Il dansait très mal ! Il m'a marché sur les pieds trois fois. J'ai ri, il a rougi… et je suis [[tombée amoureuse|me apaixonei]].\n\n" +
      "Pendant un an, nous nous sommes écrit des lettres toutes les semaines. Il venait me voir le dimanche sur sa vieille moto. Nous nous sommes mariés en 1960, et nous avons vécu ensemble pendant cinquante-deux ans.\n\n" +
      "Ton grand-père est parti il y a douze ans, mais je garde toutes ses lettres dans une boîte. Viens me voir bientôt : je vais te montrer ses lettres.\n\n" +
      "Je t'embrasse très fort,\nTa Mamie",
    exercises: [
      { type: 'multiple_choice', prompt: 'Où Jeanne a rencontré Pierre ?', options: ['À un bal au bord du lac.', 'Dans la boulangerie.', 'À Grenoble.', 'Dans une lettre.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'En 1958, Jeanne avait dix-neuf ans.', answer: 'V', explanationPt: '"J\'avais dix-neuf ans".' },
        { text: 'Pierre dansait très bien.', answer: 'F', explanationPt: '"Il dansait très mal !"' },
        { text: 'Pierre connaissait beaucoup de monde à Annecy.', answer: 'F', explanationPt: '"il ne connaissait personne".' },
        { text: 'Simone s\'est mariée avec un ami de Pierre.', answer: 'NM', explanationPt: 'A carta não fala do futuro de Simone.' },
        { text: 'Jeanne a gardé les lettres de Pierre.', answer: 'V', explanationPt: '"je garde toutes ses lettres dans une boîte".' }
      ] },
      { type: 'match', prompt: 'Ligue cada informação à data ou duração.', pairs: [['la rencontre', 'juillet 1958'], ['le mariage', '1960'], ['les lettres', 'pendant un an'], ['la mort de Pierre', 'il y a douze ans']] },
      { type: 'fill_blank', prompt: 'Imparfait ou passé composé? Complete como no texto.', bank: ['dansais', 'est entré', 'portait', "m'a invitée", 'avait'], items: [
        { text: 'Je ___ avec mon amie Simone…', answers: ['dansais'] },
        { text: '… quand un jeune homme très grand ___.', answers: ['est entré'] },
        { text: 'Il ___ une chemise bleue.', answers: ['portait'] },
        { text: 'Il ___ à danser.', answers: ["m'a invitée"] }
      ] },
      { type: 'short_answer', prompt: 'Por quantos anos Jeanne e Pierre viveram juntos? (responda com o número)', answers: ['52'] }
    ]
  },
  listening: {
    genre: 'chamada de vídeo',
    title: 'Lucas e Ana relembram a infância',
    speakers: [{ id: 'A', name: 'Ana', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'A', text: "Coucou Lucas ! Je pratique mon français, d'accord ? Tu te souviens de Rex ?" },
      { speaker: 'U', text: "Notre chien ? Bien sûr ! Il dormait toujours sous la table de la cuisine." },
      { speaker: 'A', text: "Et il volait la viande pendant le déjeuner ! Maman se fâchait tout le temps." },
      { speaker: 'U', text: "Et toi, tu te souviens du jour où tu es tombée dans le lac de la Pampulha ?" },
      { speaker: 'A', text: "Ne parle pas de ça ! J'avais six ans, je voulais attraper un canard…" },
      { speaker: 'U', text: "Et papa a sauté dans l'eau avec ses chaussures et son téléphone !" },
      { speaker: 'A', text: "Oui, et le téléphone n'a jamais remarché. Mais on se disputait beaucoup, toi et moi, non ?" },
      { speaker: 'U', text: "Tous les jours ! Tu prenais mes crayons et tu cassais mes dessins." },
      { speaker: 'A', text: "Je n'étais pas une petite sœur facile… Bon, tu me manques, tu sais." },
      { speaker: 'U', text: "Toi aussi. Viens me voir à Lyon cet été !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Où dormait Rex ?', options: ['Sous la table de la cuisine.', 'Dans le jardin.', 'Dans la chambre de Lucas.', 'Au bord du lac.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Ana est tombée dans le lac à six ans.', answer: 'V', explanationPt: '"J\'avais six ans, je voulais attraper un canard…"' },
        { text: 'Le père a sauté dans l\'eau sans ses chaussures.', answer: 'F', explanationPt: 'Ele pulou com os sapatos e o telefone.' },
        { text: 'Lucas et Ana se disputaient souvent.', answer: 'V', explanationPt: '"Tous les jours !"' },
        { text: 'Ana va venir à Lyon cet été.', answer: 'NM', explanationPt: 'Lucas convida, mas ela não responde.' }
      ] },
      { type: 'listen_choose', audio: 'Tu me manques, tu sais.', prompt: 'O que Ana quer dizer?',
        options: ['Sinto sua falta, sabia?', 'Você me engana, sabia?', 'Você me falta com respeito.', 'Você está me esquecendo.'], answer: 0,
        explanationPt: 'Atenção à inversão: "tu me manques" = EU sinto a SUA falta (literalmente "você me falta").' },
      { type: 'dictation', text: 'Il dormait toujours sous la table de la cuisine.' },
      { type: 'dictation', text: 'Tu te souviens du jour où tu es tombée dans le lac ?' }
    ]
  },
  grammar: {
    topicId: 'pc-vs-imparfait',
    title: 'Revisão: contar o passado',
    explanationPt: 'Checklist para contar uma história no passado:\n\n' +
      '1. **Cenário** (quando, onde, como era, o que acontecia) → **imparfait**: *C\'était en juillet. Il faisait chaud. Je dansais.*\n' +
      '2. **Acontecimentos** em sequência → **passé composé**: *Il est entré. Il m\'a invitée. J\'ai ri.*\n' +
      '3. **Hábitos** da época → **imparfait**: *Il venait le dimanche.*\n' +
      '4. **Duração fechada** → passé composé + *pendant*: *Nous avons vécu ensemble pendant cinquante-deux ans.*\n\n' +
      '**"Le jour où…"** = o dia em que… → *Tu te souviens du jour où tu es tombée ?* (em francês, **où** e não ~~que~~ depois de expressões de tempo: *le jour où, l\'année où, au moment où*).',
    table: { head: ['função', 'tempo', 'exemplo'], rows: [
      ['descrição / cenário', 'imparfait', 'Il faisait très chaud.'], ['ação em andamento', 'imparfait', 'Je dansais avec Simone…'],
      ['ação que interrompe', 'passé composé', '… quand il est entré.'], ['sequência de ações', 'passé composé', "Il m'a invitée, j'ai ri."],
      ['hábito', 'imparfait', 'Il venait le dimanche.'], ['duração fechada', 'passé composé', 'Ils ont vécu ensemble pendant 52 ans.']
    ] },
    examples: [
      { fr: "C'était l'année où j'ai eu mon bac.", pt: 'Foi o ano em que terminei o ensino médio.' },
      { fr: "Il pleuvait le jour où nous nous sommes mariés.", pt: 'Chovia no dia em que nos casamos.' },
      { fr: "Pendant un an, ils se sont écrit des lettres.", pt: 'Durante um ano, eles trocaram cartas.' },
      { fr: "Quand j'étais petite, je faisais beaucoup de bêtises.", pt: 'Quando eu era pequena, fazia muita travessura.' }
    ],
    ptComparison: '**"Manquer" ao contrário** (o sujeito é quem faz falta!):\n- **"Sinto sua falta"** = *Tu me manques*\n- **"Sinto falta do Brasil"** = *Le Brésil me manque*\n- **"Ela sente falta dos filhos"** = *Ses enfants lui manquent*\n\nPense em "faltar": "você me falta" → *tu me manques*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no imparfait ou no passé composé.', items: [
      { text: "C'___ (être) en 1990.", answers: ['était'] },
      { text: 'Mes parents ___ (habiter) à Paris.', answers: ['habitaient'] },
      { text: 'Un jour, mon père ___ (trouver) un travail à Lyon.', answers: ['a trouvé'] },
      { text: 'Nous ___ (partir) en août.', answers: ['sommes partis', 'sommes parties'] },
      { text: 'Pendant le voyage, il ___ (pleuvoir) beaucoup.', answers: ['a plu', 'pleuvait'] },
      { text: 'Quand nous sommes arrivés, il ___ (faire) nuit.', answers: ['faisait'] },
      { text: 'Avant, je ___ (se disputer) souvent avec ma sœur.', answers: ['me disputais'] }
    ] },
    { type: 'multiple_choice', prompt: '"Sinto falta da minha família."', options: ['Ma famille me manque.', 'Je manque ma famille.', 'Je me manque de ma famille.', 'Ma famille manque à moi.'], answer: 0 },
    { type: 'multiple_choice', prompt: '"No dia em que cheguei, chovia."', options: ['Le jour où je suis arrivé, il pleuvait.', 'Le jour que je suis arrivé, il pleuvait.', 'Le jour où j\'arrivais, il a plu.', 'Le jour quand je suis arrivé, il pleuvait.'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Ils se sont mariés il y a soixante ans.', translation: 'Eles se casaram há sessenta anos.' }
  ],
  tipForBrazilians: '**Fechamentos de carta pessoal:**\n- ***Je t\'embrasse*** (um beijo — família e amigos)\n- ***Grosses bises / Gros bisous*** (beijos — amigos próximos)\n- ***Bises*** (beijos — informal)\n- ***Amitiés*** (abraços — amigos menos próximos)\n- ***Bien à toi*** (um abraço)\n\nPara alguém que você trata por *vous*: *Bien cordialement* ou *Cordialement* (atenciosamente).'
});
