LUX.registerLesson({
  id: 'a2-u04-l04', level: 'A2', unit: 4, order: 4,
  title: 'Au bouchon lyonnais', titlePt: 'No bouchon (restaurante típico de Lyon)',
  names: ['Lucas', 'Léa', 'Hugo', 'Lyon', 'Lyonnais', 'Canuts', 'Bouchon', 'Côtes', 'Rhône', 'Beaujolais', 'Brésil', 'Martin'],
  objectives: [
    'Ler um cardápio e pedir num restaurante.',
    'Fazer pedidos educados com je voudrais, j\'aimerais, je vais prendre, vous pourriez.',
    'Pedir a conta e reagir a um problema com educação.'
  ],
  vocabulary: [
    { fr: 'la carte', pt: 'o cardápio', g: 'f', d: true, ex: 'La carte, s\'il vous plaît.' },
    { fr: 'le menu', pt: 'o menu (entrada + prato + sobremesa a preço fixo)', g: 'm', ex: 'Le menu du jour coûte vingt euros.' },
    { fr: "l'entrée", pt: 'a entrada', g: 'f', ex: 'En entrée, je prends une salade.' },
    { fr: 'le plat principal', pt: 'o prato principal', g: 'm', ex: 'Comme plat principal, le poulet.' },
    { fr: 'le dessert', pt: 'a sobremesa', g: 'm', d: true, ex: 'Vous prenez un dessert ?' },
    { fr: "l'addition", pt: 'a conta (no restaurante)', g: 'f', ex: "L'addition, s'il vous plaît." },
    { fr: 'le serveur / la serveuse', pt: 'o garçom / a garçonete', g: 'mf', ex: 'Le serveur arrive.' },
    { fr: 'je voudrais', pt: 'eu gostaria, eu queria', pos: 'expr', ex: 'Je voudrais une carafe d\'eau.' },
    { fr: 'je vais prendre', pt: 'vou querer', pos: 'expr', ex: 'Je vais prendre le menu.' },
    { fr: 'végétarien(ne)', pt: 'vegetariano(a)', pos: 'adj', ex: 'Vous avez un plat végétarien ?' },
    { fr: 'la carafe d\'eau', pt: 'a jarra de água (de graça)', g: 'f', ex: 'Une carafe d\'eau, s\'il vous plaît.' },
    { fr: 'Bon appétit !', pt: 'Bom apetite!', pos: 'expr', ex: 'Voilà vos plats. Bon appétit !' }
  ],
  reading: {
    genre: 'guia de restaurantes',
    title: "Guide du Lyon gourmand — Le Bouchon des Canuts",
    text: "À Lyon, un « bouchon » est un petit restaurant traditionnel : nappes à carreaux rouges et blancs, ambiance familiale et cuisine généreuse. Le Bouchon des Canuts, dans une petite rue de la Croix-Rousse, est un des plus authentiques.\n\n" +
      "Le midi, il y a un menu à vingt-deux euros : entrée, plat et dessert. Le soir, on peut commander à la carte. En entrée, je vous conseille la salade lyonnaise, avec des lardons, des croûtons et un œuf poché, ou la [[cervelle de canut|creme de queijo fresco com ervas (não tem cérebro!)]], une spécialité au fromage blanc et aux herbes. Comme plat principal, les quenelles de brochet sont délicieuses, mais il y a aussi du poulet à la crème et des saucisses avec des lentilles.\n\n" +
      "Pour les végétariens, le choix est petit, mais le chef prépare un gratin de légumes sur demande. Il faut seulement le demander en réservant.\n\n" +
      "Au dessert, ne ratez pas la tarte aux pralines ! Côté boisson, on boit traditionnellement un « pot » de vin du Beaujolais ou des Côtes du Rhône.\n\n" +
      "Le service est rapide et sympathique. Attention : le restaurant est souvent complet le week-end, alors il vaut mieux réserver. Notre note : quatre étoiles sur cinq.",
    exercises: [
      { type: 'multiple_choice', prompt: "Qu'est-ce qu'un « bouchon » à Lyon ?", options: ['Un petit restaurant traditionnel.', 'Une bouteille de vin.', 'Un fromage local.', 'Un marché couvert.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Le menu du midi coûte vingt-deux euros.', answer: 'V', explanationPt: '"il y a un menu à vingt-deux euros".' },
        { text: 'La cervelle de canut est un plat de viande.', answer: 'F', explanationPt: 'É uma especialidade de queijo fresco com ervas.' },
        { text: 'Pour un plat végétarien, il faut le demander en réservant.', answer: 'V', explanationPt: '"Il faut seulement le demander en réservant."' },
        { text: 'Le restaurant est fermé le lundi.', answer: 'NM', explanationPt: 'Os dias de fechamento não são citados.' },
        { text: "C'est facile d'avoir une table le week-end.", answer: 'F', explanationPt: '"le restaurant est souvent complet le week-end".' }
      ] },
      { type: 'match', prompt: 'Ligue o prato à parte da refeição.', pairs: [['la salade lyonnaise', 'entrée'], ['les quenelles de brochet', 'plat principal'], ['la tarte aux pralines', 'dessert'], ['un pot de Beaujolais', 'boisson']] },
      { type: 'multiple_choice', prompt: 'Quelle note le guide donne au restaurant ?', options: ['Quatre étoiles sur cinq.', 'Cinq étoiles sur cinq.', 'Trois étoiles sur cinq.', 'Deux étoiles sur cinq.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Pourquoi il vaut mieux réserver ?', options: ['Parce que le restaurant est souvent complet le week-end.', 'Parce que le menu change tous les jours.', 'Parce que le service est lent.', 'Parce que le restaurant est très cher.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo no restaurante',
    title: 'Pedindo no Bouchon des Canuts',
    speakers: [{ id: 'S', name: 'O garçom', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'S', text: 'Bonsoir ! Vous avez choisi ?' },
      { speaker: 'L', text: "Oui. Pour moi, en entrée, la cervelle de canut, s'il vous plaît. Et j'ai réservé un gratin de légumes." },
      { speaker: 'S', text: 'Ah oui, madame Martin, le plat végétarien. Très bien. Et pour monsieur ?' },
      { speaker: 'U', text: "Je vais prendre la salade lyonnaise et ensuite les quenelles." },
      { speaker: 'S', text: 'Et comme boisson ?' },
      { speaker: 'U', text: "Un pot de Côtes du Rhône. Et vous pourriez nous apporter une carafe d'eau, s'il vous plaît ?" },
      { speaker: 'S', text: 'Bien sûr.' },
      { speaker: 'L', text: "Excusez-moi, monsieur… Il y a des lardons dans mon gratin. Je ne mange pas de viande." },
      { speaker: 'S', text: "Oh, pardon, madame ! C'est une erreur de la cuisine. Je vous change ça tout de suite." },
      { speaker: 'U', text: "Et pour finir, deux tartes aux pralines et l'addition, s'il vous plaît." },
      { speaker: 'S', text: "Voilà. Vous payez ensemble ou séparément ?" },
      { speaker: 'L', text: 'Ensemble, par carte. Merci, c\'était délicieux !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quel plat principal Lucas commande ?', options: ['Les quenelles.', 'Le gratin de légumes.', 'Le poulet à la crème.', 'Les saucisses aux lentilles.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Quel est le problème ?', options: ['Il y a des lardons dans un plat de Léa.', "Il n'y a plus de quenelles.", "L'addition est fausse.", 'Le vin est froid.'], answer: 0,
        explanationPt: 'Léa é vegetariana e encontrou bacon (lardons) no prato.' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Léa a réservé un plat végétarien.', answer: 'V', explanationPt: '"j\'ai réservé un gratin de légumes".' },
        { text: 'Ils prennent un dessert.', answer: 'V', explanationPt: 'Duas tortas de pralinas.' },
        { text: 'Ils paient séparément.', answer: 'F', explanationPt: '"Ensemble, par carte."' },
        { text: 'Ils laissent un pourboire.', answer: 'NM', explanationPt: 'Não se fala de gorjeta.' }
      ] },
      { type: 'listen_choose', audio: "Vous pourriez nous apporter une carafe d'eau ?", prompt: 'O que Lucas pede?',
        options: ['Uma jarra de água.', 'Uma garrafa de vinho.', 'O cardápio.', 'A conta.'], answer: 0 },
      { type: 'dictation', text: "L'addition, s'il vous plaît." }
    ]
  },
  grammar: {
    topicId: 'politeness',
    title: 'Pedir com educação',
    explanationPt: 'Em lojas, cafés e restaurantes, o francês usa formas "suavizadas" para pedir:\n\n' +
      '- **Je voudrais…** (eu gostaria / queria) — a mais usada: *Je voudrais un café.*\n' +
      '- **J\'aimerais…** (eu gostaria): *J\'aimerais réserver une table.*\n' +
      '- **Je vais prendre… / Je prends…** (vou querer / quero): *Je vais prendre le menu.*\n' +
      '- **Vous pourriez… ?** (o senhor poderia…?): *Vous pourriez m\'apporter du pain ?*\n' +
      '- **Pour moi, …** (para mim, …): *Pour moi, la salade.*\n\n' +
      '*Voudrais, aimerais, pourriez* são formas do **conditionnel**, um tempo que você estudará no B1. Por enquanto, aprenda-as como expressões prontas.\n\n' +
      '**Nunca esqueça:** *Bonjour* ao entrar, *s\'il vous plaît* ao pedir e *merci, au revoir* ao sair. Na França, entrar numa loja sem dizer *bonjour* é considerado falta de educação!',
    table: { head: ['situação', 'frase'], rows: [
      ['pedir', 'Je voudrais un croissant, s\'il vous plaît.'], ['escolher', 'Je vais prendre le plat du jour.'], ['pedir um favor', "Vous pourriez fermer la fenêtre ?"],
      ['perguntar se há', 'Vous avez des plats végétariens ?'], ['reclamar com educação', "Excusez-moi, il y a un problème avec ma commande."], ['pedir a conta', "L'addition, s'il vous plaît."]
    ] },
    examples: [
      { fr: "Je voudrais réserver une table pour deux.", pt: 'Eu gostaria de reservar uma mesa para dois.' },
      { fr: "Vous pourriez parler plus lentement ?", pt: 'O senhor poderia falar mais devagar?' },
      { fr: "Pour moi, une carafe d'eau, s'il vous plaît.", pt: 'Para mim, uma jarra de água, por favor.' },
      { fr: "J'aimerais goûter ce fromage.", pt: 'Eu gostaria de provar este queijo.' }
    ],
    ptComparison: 'O brasileiro costuma pedir com "me vê um café" ou "quero um café". Em francês, *je veux un café* soa **brusco**, quase uma ordem. Prefira sempre *je voudrais* ou *je vais prendre*.\n\n' +
      'E a água da torneira é **gratuita** nos restaurantes franceses: peça *une carafe d\'eau*. Se pedir só *de l\'eau*, podem trazer uma garrafa paga.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Qual frase é a mais educada?', options: ['Je voudrais un café, s\'il vous plaît.', 'Je veux un café.', 'Un café !', 'Donne-moi un café.'], answer: 0 },
    { type: 'fill_blank', prompt: 'Complete o pedido.', bank: ['voudrais', 'pourriez', 'vais prendre', "s'il vous plaît", 'Pour moi'], items: [
      { text: 'Je ___ une table pour trois.', answers: ['voudrais'] },
      { text: 'Vous ___ nous apporter le sel ?', answers: ['pourriez'] },
      { text: "Je ___ le menu à vingt-deux euros.", answers: ['vais prendre'] },
      { text: "___, la tarte aux pralines.", answers: ['Pour moi'] },
      { text: "L'addition, ___.", answers: ["s'il vous plaît"] }
    ] },
    { type: 'match', prompt: 'Ligue o português ao francês.', pairs: [['a conta', "l'addition"], ['o cardápio', 'la carte'], ['a sobremesa', 'le dessert'], ['o garçom', 'le serveur'], ['a gorjeta', 'le pourboire']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Vous avez des plats végétariens ?', translation: 'Vocês têm pratos vegetarianos?' }
  ],
  tipForBrazilians: '**Menu × carte:** em francês, *la carte* é o cardápio completo, e *le menu* é uma **combinação a preço fixo** (entrée + plat, plat + dessert, ou os três). "Pedir à la carte" = escolher prato por prato. E *la formule* (comum no almoço) é um menu mais simples e barato. A gorjeta (*le pourboire*) não é obrigatória: o serviço já está incluído no preço (*service compris*).'
});
