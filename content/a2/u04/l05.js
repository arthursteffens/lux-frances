LUX.registerLesson({
  id: 'a2-u04-l05', level: 'A2', unit: 4, order: 5, review: true,
  title: 'Les Français à table', titlePt: 'Os franceses à mesa (revisão da unidade)',
  names: ['France', 'Français', 'Française', 'Hugo', 'Brésil', 'Brésiliens', 'Lucas', 'Léa', 'Unesco'],
  objectives: [
    'Revisar partitivos, quantidades e o pronome en.',
    'Entender um artigo com números e estatísticas sobre hábitos alimentares.',
    'Comprar pão e doces na padaria.'
  ],
  vocabulary: [
    { fr: 'le repas', pt: 'a refeição', g: 'm', d: true, ex: 'Le repas dure une heure.' },
    { fr: 'le petit-déjeuner', pt: 'o café da manhã', g: 'm', ex: 'Au petit-déjeuner, je bois du café.' },
    { fr: 'le dîner', pt: 'o jantar', g: 'm', ex: 'On dîne vers vingt heures.' },
    { fr: 'la baguette', pt: 'a baguete', g: 'f', ex: 'Une baguette bien cuite, s\'il vous plaît.' },
    { fr: 'le pain au chocolat', pt: 'o pão de chocolate (croissant com chocolate)', g: 'm', ex: 'Deux pains au chocolat.' },
    { fr: 'grignoter', pt: 'beliscar, petiscar', pos: 'v', ex: 'Je grignote entre les repas.' },
    { fr: 'en moyenne', pt: 'em média', pos: 'expr', ex: 'En moyenne, on mange à midi et demi.' },
    { fr: 'la moitié', pt: 'a metade', g: 'f', ex: 'La moitié des Français mangent à la maison.' },
    { fr: 'environ', pt: 'cerca de', pos: 'adv', ex: 'Il y a environ mille fromages.' },
    { fr: 'la boisson', pt: 'a bebida', g: 'f', ex: 'Quelle est votre boisson préférée ?' },
    { fr: 'sucré(e) / salé(e)', pt: 'doce / salgado(a)', pos: 'adj', ex: 'Je préfère le salé au sucré.' },
    { fr: 'Ce sera tout ?', pt: 'Só isso?', pos: 'expr', ex: 'Une baguette. Ce sera tout ?' }
  ],
  reading: {
    genre: 'artigo de revista',
    title: 'Les Français à table : cinq chiffres surprenants',
    text: "Le « repas gastronomique des Français » est inscrit au patrimoine de l'Unesco depuis 2010. Mais comment mangent vraiment les Français aujourd'hui ? Voici cinq chiffres.\n\n" +
      "Deux heures et demie. C'est le temps que les Français passent à table chaque jour, en moyenne. C'est presque deux fois plus que les Américains ! Le déjeuner reste un moment important : beaucoup d'entreprises ont une cantine, et on prend rarement un sandwich devant l'ordinateur.\n\n" +
      "Douze heures trente. C'est l'heure moyenne du déjeuner. À cette heure-là, la moitié du pays est à table ! Le dîner, lui, commence vers vingt heures.\n\n" +
      "Dix milliards. C'est le nombre de baguettes vendues chaque année en France. Les Français en achètent environ une demi-baguette par jour et par personne.\n\n" +
      "Mille. Il existe environ mille fromages français. On en mange vingt-six kilos par personne et par an.\n\n" +
      "Quatre. Traditionnellement, il y a quatre repas : le petit-déjeuner, le déjeuner, le [[goûter|lanche da tarde]] pour les enfants et le dîner. Mais attention : les jeunes [[grignotent|beliscam]] de plus en plus entre les repas, et beaucoup ne prennent pas de petit-déjeuner. Les habitudes changent… même en France !",
    exercises: [
      { type: 'match', prompt: 'Ligue o número à informação.', pairs: [['deux heures et demie', 'le temps passé à table par jour'], ['douze heures trente', "l'heure moyenne du déjeuner"], ['dix milliards', 'les baguettes vendues par an'], ['vingt-six kilos', 'le fromage mangé par personne et par an'], ['quatre', 'les repas traditionnels']] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Le repas français est inscrit au patrimoine de l\'Unesco.', answer: 'V', explanationPt: '"inscrit au patrimoine de l\'Unesco depuis 2010".' },
        { text: 'Les Français dînent en général vers dix-huit heures.', answer: 'F', explanationPt: 'O jantar começa por volta das vinte horas.' },
        { text: 'Les Français mangent souvent un sandwich devant l\'ordinateur.', answer: 'F', explanationPt: '"on prend rarement un sandwich devant l\'ordinateur".' },
        { text: 'Les jeunes mangent plus de légumes qu\'avant.', answer: 'NM', explanationPt: 'O texto não fala disso.' },
        { text: 'Beaucoup de jeunes ne prennent pas de petit-déjeuner.', answer: 'V', explanationPt: '"beaucoup ne prennent pas de petit-déjeuner".' }
      ] },
      { type: 'multiple_choice', prompt: 'Dans « Les Français en achètent une demi-baguette », « en » remplace :', options: ['des baguettes', 'les Français', 'la France', 'le pain au chocolat'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Qui prend le goûter, traditionnellement ?', options: ['Les enfants.', 'Les personnes âgées.', 'Les travailleurs.', 'Tout le monde.'], answer: 0 },
      { type: 'short_answer', prompt: 'Desde que ano o repas gastronomique é patrimônio da Unesco?', answers: ['2010'] }
    ]
  },
  listening: {
    genre: 'diálogo na padaria',
    title: 'Hugo compra pão para o fim de semana',
    speakers: [{ id: 'B', name: 'A padeira', gender: 'f' }, { id: 'H', name: 'Hugo', gender: 'm' }],
    script: [
      { speaker: 'B', text: "Bonjour monsieur, c'est à vous !" },
      { speaker: 'H', text: 'Bonjour ! Une baguette tradition, s\'il vous plaît. Pas trop cuite.' },
      { speaker: 'B', text: 'Voilà. Et avec ceci ?' },
      { speaker: 'H', text: 'Vous avez encore des croissants ?' },
      { speaker: 'B', text: "Ah, je n'en ai plus, désolée. Mais il me reste des pains au chocolat." },
      { speaker: 'H', text: "D'accord, j'en prends trois. Et une tarte aux pommes pour quatre personnes." },
      { speaker: 'B', text: 'Je n\'ai que des tartes pour six. Ça vous va ?' },
      { speaker: 'H', text: "Oui, ce n'est pas grave. On va en manger beaucoup !" },
      { speaker: 'B', text: 'Ce sera tout ?' },
      { speaker: 'H', text: "Oui, merci. C'est combien ?" },
      { speaker: 'B', text: "Alors, une baguette, un euro vingt, trois pains au chocolat, trois euros soixante, et la tarte, dix-huit euros. Ça fait vingt-deux euros quatre-vingts." }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment Hugo veut sa baguette ?', options: ['Pas trop cuite.', 'Très cuite.', 'Coupée en deux.', 'Avec des graines.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La boulangère a encore des croissants.', answer: 'F', explanationPt: '"je n\'en ai plus".' },
        { text: 'Hugo achète trois pains au chocolat.', answer: 'V', explanationPt: '"j\'en prends trois".' },
        { text: 'La tarte est pour six personnes.', answer: 'V', explanationPt: 'Só havia tortas para seis.' },
        { text: 'Hugo paie en liquide.', answer: 'NM', explanationPt: 'Não se diz como ele paga.' }
      ] },
      { type: 'listen_choose', audio: 'Ça fait vingt-deux euros quatre-vingts.', prompt: 'Qual é o total?',
        options: ['22,80 €', '22,20 €', '24,80 €', '20,80 €'], answer: 0 },
      { type: 'short_answer', prompt: 'Quanto custa um pain au chocolat? (ex.: 1,50)', answers: ['1,20', '1.20', '1,2', '1.2'],
        explanationPt: 'Três custam 3,60 € → cada um custa 1,20 €.' },
      { type: 'dictation', text: "Je n'en ai plus, désolée." }
    ]
  },
  grammar: {
    topicId: 'partitive',
    title: 'Revisão: artigos, quantidades e en',
    explanationPt: '**Um mapa para não errar mais** (veja a tabela abaixo): gosto → *le, la, les*; quantidade indefinida → *du, de la, des*; negação e quantidade → *de*; para não repetir a coisa → *en*.\n\n' +
      '**Exceção na negação:** com *être*, o artigo não muda: *Ce n\'est pas **du** beurre, c\'est de la margarine.*\n\n' +
      '**ne… que** = só, apenas (não é negação!): *Je n\'ai **que** des tartes pour six* = só tenho tortas para seis.',
    table: { head: ['situação', 'use', 'exemplo'], rows: [
      ['gosto, generalidade', 'le, la, les', "J'aime le pain."], ['quantidade indefinida', "du, de la, de l', des", 'Je mange du pain.'],
      ['negação', "de, d'", 'Je ne mange pas de pain.'], ['quantidade expressa', "de, d'", 'beaucoup de pain, une tranche de pain'],
      ['substituir a coisa', 'en', "J'en mange. J'en prends deux."]
    ] },
    examples: [
      { fr: "J'adore les fruits, alors j'en mange beaucoup.", pt: 'Adoro frutas, então como muitas.' },
      { fr: "Il n'y a plus de pain ? — Si, il en reste une baguette.", pt: 'Não tem mais pão? — Tem sim, sobrou uma baguete.' },
      { fr: "Ce n'est pas du sucre, c'est du sel !", pt: 'Isso não é açúcar, é sal!' },
      { fr: "Je n'ai que dix euros.", pt: 'Só tenho dez euros.' }
    ],
    ptComparison: '**"Si" para contradizer uma negativa:** quando a pergunta é negativa, o francês responde *si* (e não *oui*) para dizer "sim, tem / sim, é": *Tu n\'as pas faim ? — **Si** !* (Não está com fome? — Estou sim!). Não existe equivalente exato em português — é o nosso "tem sim!", "claro que estou!".'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com le, la, les, du, de la, de l\', des ou de.', items: [
      { text: "Je n'aime pas ___ café.", answers: ['le'] },
      { text: 'Le matin, je bois ___ thé.', answers: ['du'] },
      { text: "Il n'y a pas ___ sucre.", answers: ['de'] },
      { text: 'Un kilo ___ tomates, s\'il vous plaît.', answers: ['de'] },
      { text: 'Tu veux ___ eau ?', answers: ["de l'"] },
      { text: "Ce n'est pas ___ beurre, c'est de la margarine.", answers: ['du'] }
    ] },
    { type: 'fill_blank', prompt: 'Responda com en.', items: [
      { text: 'Tu manges des fruits ? — Oui, j\'___ mange tous les jours.', answers: ['en'] },
      { text: 'Il reste des croissants ? — Non, il n\'___ reste plus.', answers: ['en'] },
      { text: 'Combien de baguettes ? — J\'___ voudrais deux.', answers: ['en'] }
    ] },
    { type: 'multiple_choice', prompt: '"Você não quer sobremesa? — Quero sim!"', options: ['Tu ne veux pas de dessert ? — Si !', 'Tu ne veux pas de dessert ? — Oui !', 'Tu ne veux pas du dessert ? — Si !', 'Tu veux pas le dessert ? — Oui !'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je n'ai que deux euros.", translation: 'Só tenho dois euros.' }
  ],
  tipForBrazilians: '**Padaria francesa — o que pedir:** *une baguette* (a comum), *une tradition* (baguete artesanal, mais cara e melhor), *un pain de campagne* (pão rústico), *un croissant* (só manteiga), *un pain au chocolat* (no sudoeste da França dizem *une chocolatine*!), *un pain aux raisins*, *une brioche*. Peça a baguete *bien cuite* (mais assada) ou *pas trop cuite* (mais clara).'
});
