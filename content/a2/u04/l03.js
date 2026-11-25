LUX.registerLesson({
  id: 'a2-u04-l03', level: 'A2', unit: 4, order: 3,
  title: "J'en prends deux", titlePt: 'Vou levar dois',
  names: ['Léa', 'Lucas', 'Hugo', 'Croix-Rousse', 'Coloc', 'Monoprix', 'Beaufort', 'Comté', 'Savoie', 'Jura', 'Brésil', 'Minas'],
  objectives: [
    'Fazer e responder perguntas sobre quantidades sem repetir o substantivo.',
    'Usar o pronome "en" com partitivos, números e expressões de quantidade.',
    'Fazer compras numa queijaria ou num supermercado.'
  ],
  vocabulary: [
    { fr: 'en', pt: 'disso, dele(s), dela(s) (pronome de quantidade)', pos: 'pron', ex: "Du lait ? Oui, j'en veux." },
    { fr: 'il reste', pt: 'sobra, ainda tem', pos: 'expr', ex: 'Il reste du pain ?' },
    { fr: 'le frigo', pt: 'a geladeira', g: 'm', d: true, ex: 'Le lait est dans le frigo.' },
    { fr: 'le lait', pt: 'o leite', g: 'm', ex: "Il n'y a plus de lait." },
    { fr: 'les pâtes', pt: 'o macarrão, as massas', g: 'f', ex: 'On mange des pâtes ce soir ?' },
    { fr: 'le paquet', pt: 'o pacote', g: 'm', ex: 'Un paquet de café, s\'il te plaît.' },
    { fr: 'la tranche', pt: 'a fatia', g: 'f', ex: 'Quatre tranches de jambon.' },
    { fr: 'la bouteille', pt: 'a garrafa', g: 'f', ex: 'Une bouteille d\'eau.' },
    { fr: 'la fromagerie', pt: 'a queijaria', g: 'f', ex: 'La fromagerie est au coin de la rue.' },
    { fr: 'ne… plus', pt: 'não… mais (acabou)', pos: 'expr', ex: "Il n'y a plus de café." },
    { fr: 'la liste de courses', pt: 'a lista de compras', g: 'f', ex: "J'ai oublié ma liste de courses." },
    { fr: 'Ça vous dit ?', pt: 'Que tal? Topa?', pos: 'expr', ex: 'Une raclette samedi, ça vous dit ?' }
  ],
  reading: {
    genre: 'conversa por mensagens',
    title: 'Groupe « Coloc Croix-Rousse »',
    text: "Léa (18 h 02) : Je suis au Monoprix. Qu'est-ce qu'il faut acheter ? Il reste du lait ?\n\n" +
      "Lucas (18 h 04) : Oui, il en reste un peu, mais pas assez pour demain matin. Prends-en deux bouteilles.\n\n" +
      "Léa (18 h 05) : OK. Et du café ?\n\n" +
      "Lucas (18 h 05) : On n'en a plus ! J'ai bu le dernier ce matin, désolé 😅\n\n" +
      "Léa (18 h 07) : Évidemment… J'en prends deux paquets. Et des œufs ? Il en faut pour la tarte de samedi.\n\n" +
      "Lucas (18 h 09) : Il y en a quatre dans le frigo. La recette en demande trois, donc c'est bon.\n\n" +
      "Léa (18 h 10) : Super. Hugo vient dîner samedi, on fait une raclette ? Ça vous dit ?\n\n" +
      "Lucas (18 h 11) : Oh oui !! Je n'en ai jamais mangé. C'est quoi exactement ?\n\n" +
      "Léa (18 h 13) : Du fromage fondu sur des pommes de terre, avec de la charcuterie. Il faut environ deux cents grammes de fromage par personne. Pour trois, j'en achète six cents grammes.\n\n" +
      "Lucas (18 h 14) : Seulement six cents ? Moi, je vais en manger un kilo 😂 Prends-en plus !\n\n" +
      "Léa (18 h 15) : Tu exagères ! Bon, j'en prends huit cents grammes. Et du vin blanc de Savoie, bien sûr.\n\n" +
      "Lucas (18 h 16) : Parfait. Merci, chef !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de bouteilles de lait Léa doit acheter ?', options: ['Deux.', 'Une.', 'Trois.', 'Aucune.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il reste beaucoup de café.', answer: 'F', explanationPt: '"On n\'en a plus !" — acabou o café.' },
        { text: 'Il faut acheter des œufs.', answer: 'F', explanationPt: 'Há quatro ovos e a receita pede três.' },
        { text: 'Lucas a déjà mangé une raclette.', answer: 'F', explanationPt: '"Je n\'en ai jamais mangé."' },
        { text: 'Hugo adore le fromage.', answer: 'NM', explanationPt: 'Não se fala do gosto do Hugo.' },
        { text: 'Léa achète du vin blanc.', answer: 'V', explanationPt: '"Et du vin blanc de Savoie, bien sûr."' }
      ] },
      { type: 'multiple_choice', prompt: 'Combien de fromage Léa achète finalement ?', options: ['Huit cents grammes.', 'Six cents grammes.', 'Un kilo.', 'Deux cents grammes.'], answer: 0 },
      { type: 'match', prompt: 'O que "en" substitui em cada frase?', pairs: [['Il en reste un peu.', 'du lait'], ["On n'en a plus !", 'du café'], ['Il y en a quatre.', 'des œufs'], ["J'en prends huit cents grammes.", 'du fromage']] },
      { type: 'multiple_choice', prompt: 'Qu\'est-ce que c\'est, une raclette ?', options: ['Du fromage fondu sur des pommes de terre.', 'Une tarte aux pralines.', 'Une soupe de légumes.', 'Un vin de Savoie.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo na queijaria',
    title: 'Na fromagerie',
    speakers: [{ id: 'F', name: 'O queijeiro', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'F', text: 'Bonsoir madame ! Vous désirez ?' },
      { speaker: 'L', text: 'Bonsoir. Je voudrais du fromage à raclette, s\'il vous plaît.' },
      { speaker: 'F', text: 'Bien sûr. Vous en voulez combien ?' },
      { speaker: 'L', text: "J'en voudrais huit cents grammes. C'est pour trois personnes." },
      { speaker: 'F', text: "Huit cents grammes pour trois ? Vous avez faim ! Vous voulez du jambon cru avec ?" },
      { speaker: 'L', text: "Oui, j'en prends six tranches. Et vous avez du beaufort ?" },
      { speaker: 'F', text: "Ah non, désolé, je n'en ai plus. Mais j'ai un très bon comté du Jura. Vous voulez en goûter ?" },
      { speaker: 'L', text: 'Avec plaisir… Mmm, il est excellent ! J\'en prends un morceau.' },
      { speaker: 'F', text: 'Deux cents grammes, ça va ?' },
      { speaker: 'L', text: 'Parfait. Ça fait combien en tout ?' },
      { speaker: 'F', text: 'Trente et un euros cinquante, s\'il vous plaît.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de tranches de jambon Léa achète ?', options: ['Six.', 'Trois.', 'Huit.', 'Deux.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Le fromager a du beaufort.', answer: 'F', explanationPt: '"je n\'en ai plus".' },
        { text: 'Léa goûte le comté.', answer: 'V', explanationPt: 'Ela prova e acha excelente.' },
        { text: 'Léa paie par carte.', answer: 'NM', explanationPt: 'Não se diz como ela paga.' },
        { text: 'Le morceau de comté fait deux cents grammes.', answer: 'V', explanationPt: '"Deux cents grammes, ça va ?" — "Parfait."' }
      ] },
      { type: 'listen_choose', audio: 'Trente et un euros cinquante, s\'il vous plaît.', prompt: 'Qual é o total?',
        options: ['31,50 €', '21,50 €', '30,15 €', '31,15 €'], answer: 0 },
      { type: 'dictation', text: 'Vous en voulez combien ?' },
      { type: 'dictation', text: "Je n'en ai plus." }
    ]
  },
  grammar: {
    topicId: 'pronoun-en',
    title: 'O pronome en',
    explanationPt: '**En** substitui um substantivo que vem com **de / du / de la / des** ou com uma **quantidade**. Traduz-se por "disso, dele(s), dela(s)" — ou simplesmente não se traduz!\n\n' +
      '- Partitivo: *Tu veux du café ? — Oui, j\'**en** veux.* (quero)\n' +
      '- Negação: *Il y a des œufs ? — Non, il n\'y **en** a pas.* (não tem)\n' +
      '- Número ou quantidade — **repita o número no fim**: *Tu as des enfants ? — Oui, j\'**en** ai **deux**.* · *J\'**en** prends **un kilo**.*\n\n' +
      '**Posição:** antes do verbo conjugado (*j\'en veux*), antes do infinitivo (*je vais en acheter*), antes do auxiliar (*j\'en ai mangé*). No imperativo afirmativo, depois, com hífen: ***Prends-en** deux !*\n\n' +
      'Expressão fixa: **il y en a** = tem (disso). *Il y en a quatre* = tem quatro.',
    table: { head: ['pergunta', 'resposta com en'], rows: [
      ['Tu veux du pain ?', "Oui, j'en veux. / Non, je n'en veux pas."], ['Il y a des œufs ?', "Oui, il y en a six. / Non, il n'y en a pas."],
      ['Vous avez combien de chats ?', "J'en ai deux."], ['Tu as mangé de la raclette ?', "Oui, j'en ai mangé."], ['Combien de tranches ?', "J'en voudrais quatre."]
    ] },
    examples: [
      { fr: "Du café ? Non merci, j'en ai déjà bu trois.", pt: 'Café? Não, obrigado, já tomei três.' },
      { fr: "Il reste du lait ? — Oui, il en reste un peu.", pt: 'Sobrou leite? — Sim, sobrou um pouco.' },
      { fr: "Des amis à Lyon ? J'en ai beaucoup.", pt: 'Amigos em Lyon? Tenho muitos.' },
      { fr: "Prends-en deux bouteilles !", pt: 'Leva duas garrafas!' }
    ],
    ptComparison: 'O português simplesmente **omite** o objeto: "Você tem filhos? — Tenho dois." Em francês, é obrigatório colocar o **en**: *J\'**en** ai deux.* Responder só ~~J\'ai deux~~ soa incompleto.\n\n' +
      'Pense no "en" como o "disso" que a gente fala às vezes: "Quer mais disso?" → *Tu en veux encore ?*'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Responda usando en.', items: [
      { text: 'Tu veux du thé ? — Oui, j\'___ veux bien.', answers: ['en'] },
      { text: "Il y a des pommes ? — Non, il n'y ___ a pas.", answers: ['en'] },
      { text: 'Vous avez des enfants ? — Oui, nous ___ avons trois.', answers: ['en'] },
      { text: "Tu as acheté du pain ? — Oui, j'___ ai acheté.", answers: ['en'] }
    ] },
    { type: 'multiple_choice', prompt: '"Tem quantos irmãos? — Tenho dois."', options: ["J'en ai deux.", "J'ai deux.", "J'y ai deux.", "Je les ai deux."], answer: 0 },
    { type: 'multiple_choice', prompt: 'Onde fica o "en"? "Vou comprar (disso)."', options: ['Je vais en acheter.', "J'en vais acheter.", 'Je vais acheter en.', 'En je vais acheter.'], answer: 0,
      explanationPt: 'Com dois verbos, o pronome vai antes do infinitivo.' },
    { type: 'multiple_choice', prompt: 'Imperativo: "Pega três!" (maçãs)', options: ['Prends-en trois !', 'En prends trois !', 'Prends trois en !', "Prends-les trois !"], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Il n'y en a plus.", translation: 'Não tem mais (acabou).' }
  ],
  tipForBrazilians: '**"Il n\'y en a plus" — a frase mais útil da cozinha:** significa "acabou, não tem mais". Pronuncie rápido, como os franceses: *[i-nyã-na-ply]*... e no francês falado ainda cai o *ne*: *y en a plus !* Também existe o contrário: *il y en a encore* (ainda tem).'
});
