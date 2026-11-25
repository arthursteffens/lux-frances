LUX.registerLesson({
  id: 'a2-u05-l04', level: 'A2', unit: 5, order: 4,
  title: 'On y va !', titlePt: 'Vamos lá!',
  names: ['Ana', 'Lucas', 'Hugo', 'Léa', 'Marseille', 'Vieux-Port', 'Notre-Dame', 'Garde', 'Calanques', 'Panier', 'Annecy', 'Lyon', 'Sormiou', 'Brésil', 'Rio', 'Marseillais', 'Bonne', 'Mère', 'TGV', 'Notre-Dame-de-la-Garde'],
  objectives: [
    'Contar uma viagem curta e falar de lugares sem repeti-los.',
    'Usar o pronome "y" para substituir um lugar (à, en, chez, dans + lugar).',
    'Entender expressões fixas: on y va, il y a, j\'y suis, ça y est.'
  ],
  vocabulary: [
    { fr: 'y', pt: 'lá, ali, nele (pronome de lugar)', pos: 'pron', ex: "Marseille ? J'y vais demain." },
    { fr: 'On y va !', pt: 'Vamos lá!', pos: 'expr', ex: 'Tout le monde est prêt ? On y va !' },
    { fr: 'Ça y est !', pt: 'Pronto! Consegui!', pos: 'expr', ex: 'Ça y est, j\'ai trouvé !' },
    { fr: 'le port', pt: 'o porto', g: 'm', ex: 'Le Vieux-Port est très animé.' },
    { fr: 'la plage', pt: 'a praia', g: 'f', ex: 'On va à la plage ?' },
    { fr: 'la mer', pt: 'o mar', g: 'f', d: true, ex: "L'eau de la mer est froide." },
    { fr: 'se baigner', pt: 'nadar, tomar banho (de mar)', pos: 'v', ex: 'On s\'est baignés dans la mer.' },
    { fr: 'la randonnée', pt: 'a trilha, a caminhada', g: 'f', ex: 'Nous avons fait une randonnée.' },
    { fr: 'la vue', pt: 'a vista', g: 'f', ex: 'Quelle vue magnifique !' },
    { fr: 'le coucher de soleil', pt: 'o pôr do sol', g: 'm', ex: 'On a regardé le coucher de soleil.' },
    { fr: 'animé(e)', pt: 'animado(a), movimentado(a)', pos: 'adj', ex: 'Le quartier est très animé le soir.' },
    { fr: 'la chaleur', pt: 'o calor', g: 'f', d: true, ex: 'Quelle chaleur aujourd\'hui !' }
  ],
  reading: {
    genre: 'post de blog de viagem',
    title: 'Le blog d\'Ana — Deux jours à Marseille',
    text: "Je suis en France depuis trois semaines, et ce week-end, Lucas m'a emmenée à Marseille. On y est allés en TGV : seulement une heure quarante depuis Lyon !\n\n" +
      "Samedi, nous sommes d'abord montés à Notre-Dame-de-la-Garde, la grande église au sommet de la colline. On y monte à pied ou en bus. Nous, on y est montés à pied, sous trente-cinq degrés… La vue sur la ville et la mer est incroyable. Les Marseillais l'appellent « la Bonne Mère ».\n\n" +
      "Ensuite, nous sommes descendus au Vieux-Port. C'est le cœur de la ville : il y a des bateaux, des restaurants et beaucoup de monde. On y a mangé une bouillabaisse, la soupe de poisson typique. C'est cher, mais ça vaut le coup !\n\n" +
      "Le soir, nous nous sommes promenés dans le Panier, le plus vieux quartier de Marseille. J'y ai acheté du savon de Marseille pour maman.\n\n" +
      "Dimanche, Hugo nous a rejoints et nous avons fait une randonnée dans les Calanques, jusqu'à la plage de Sormiou. On y est arrivés après deux heures de marche. L'eau était turquoise et très claire. On s'y est baignés pendant tout l'après-midi.\n\n" +
      "Marseille me rappelle un peu Rio : la mer, la chaleur, les collines et les gens qui parlent fort. J'y retourne quand je veux !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment Ana et Lucas sont allés à Marseille ?', options: ['En TGV.', 'En voiture.', 'En avion.', 'En bus.'], answer: 0 },
      { type: 'match', prompt: 'O que eles fizeram em cada lugar?', pairs: [['Notre-Dame-de-la-Garde', 'la vue sur la ville'], ['le Vieux-Port', 'une bouillabaisse'], ['le Panier', 'du savon de Marseille'], ['la plage de Sormiou', 'se baigner']] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Ils sont montés à Notre-Dame-de-la-Garde en bus.', answer: 'F', explanationPt: 'Subiram a pé, debaixo de 35 graus.' },
        { text: 'La bouillabaisse est une soupe de poisson.', answer: 'V', explanationPt: '"la soupe de poisson typique".' },
        { text: 'Hugo est venu dimanche.', answer: 'V', explanationPt: '"Dimanche, Hugo nous a rejoints".' },
        { text: 'Léa est venue aussi.', answer: 'NM', explanationPt: 'Léa não é mencionada no texto.' },
        { text: "L'eau de la plage était sale.", answer: 'F', explanationPt: '"L\'eau était turquoise et très claire."' }
      ] },
      { type: 'multiple_choice', prompt: 'Dans « On y a mangé une bouillabaisse », « y » remplace :', options: ['au Vieux-Port', 'à Marseille en TGV', 'la soupe', 'à Notre-Dame-de-la-Garde'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Pourquoi Marseille rappelle Rio à Ana ?', options: ['La mer, la chaleur, les collines et les gens qui parlent fort.', 'Le carnaval et la samba.', 'Le football.', 'Les grands immeubles.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Planos para o próximo fim de semana',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'A', name: 'Ana', gender: 'f' }],
    script: [
      { speaker: 'L', text: "Alors, Ana, Marseille t'a plu ?" },
      { speaker: 'A', text: "Beaucoup ! J'ai envie d'y retourner. Et toi, tu y es déjà allée ?" },
      { speaker: 'L', text: "Oui, plusieurs fois. Ma meilleure amie y habite. Écoute, le week-end prochain, je vais chez mes parents, à Annecy. Tu veux venir ?" },
      { speaker: 'A', text: 'Avec plaisir ! On y va comment ?' },
      { speaker: 'L', text: "En voiture, c'est plus simple. On y sera en une heure et demie." },
      { speaker: 'A', text: "Et qu'est-ce qu'on peut faire là-bas ?" },
      { speaker: 'L', text: "Le lac est magnifique. On peut s'y baigner, ou faire du vélo autour. Et le samedi, il y a un marché dans la vieille ville." },
      { speaker: 'A', text: "Super. Et Lucas, il vient aussi ?" },
      { speaker: 'L', text: "Non, il n'y va pas, il travaille samedi. Mais ma grand-mère va t'adorer !" },
      { speaker: 'A', text: "Ça y est, je suis impatiente !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment Léa et Ana vont aller à Annecy ?', options: ['En voiture.', 'En train.', 'À vélo.', 'En bus.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La meilleure amie de Léa habite à Marseille.', answer: 'V', explanationPt: '"Ma meilleure amie y habite." (y = à Marseille)' },
        { text: 'Le trajet dure trois heures.', answer: 'F', explanationPt: 'Uma hora e meia.' },
        { text: 'Il y a un marché le samedi.', answer: 'V', explanationPt: '"le samedi, il y a un marché dans la vieille ville".' },
        { text: 'Lucas va à Annecy avec elles.', answer: 'F', explanationPt: '"il n\'y va pas, il travaille samedi".' }
      ] },
      { type: 'listen_choose', audio: "Tu y es déjà allée ?", prompt: 'O que Ana pergunta?',
        options: ['Você já foi lá?', 'Você já está indo?', 'Você vai lá amanhã?', 'Você foi embora?'], answer: 0 },
      { type: 'dictation', text: 'On y va comment ?' },
      { type: 'dictation', text: "Il n'y va pas, il travaille samedi." }
    ]
  },
  grammar: {
    topicId: 'pronoun-y',
    title: 'O pronome y',
    explanationPt: '**Y** substitui um **lugar** já mencionado (introduzido por *à, en, au, chez, dans, sur…*). Corresponde ao nosso "lá" — que em português muitas vezes nem dizemos.\n\n' +
      '- *Tu vas à Marseille ? — Oui, j\'**y** vais demain.* (vou amanhã)\n- *Elle habite en Suisse ? — Non, elle n\'**y** habite plus.*\n- *Tu es allé chez Hugo ? — Oui, j\'**y** suis allé hier.*\n\n' +
      '**Posição:** igual aos outros pronomes — antes do verbo conjugado, do auxiliar ou do infinitivo: *j\'y vais · j\'y suis allé · je vais y aller*. No imperativo afirmativo: ***Vas-y !** **Allons-y !*** (note o **-s** de *vas*, para facilitar a pronúncia).\n\n' +
      '**Expressões com y:** *on y va* (vamos), *ça y est* (pronto!), *il y a* (há), *vas-y !* (vai! força!), *j\'y suis* (entendi!).\n\n' +
      '**Cuidado:** com *aller* no futuro e no condicional, **não** se usa *y*: *J\'irai* (e não ~~j\'y irai~~).',
    table: { head: ['pergunta', 'resposta com y'], rows: [
      ['Tu vas à la plage ?', "Oui, j'y vais. / Non, je n'y vais pas."], ['Vous habitez en France ?', 'Oui, nous y habitons depuis un an.'],
      ['Il est allé au marché ?', "Oui, il y est allé ce matin."], ['On va chez Léa ?', 'Oui, allons-y !'], ['Tu peux aller à la poste ?', 'Oui, je peux y aller.']
    ] },
    examples: [
      { fr: "Lyon ? J'y habite depuis cinq mois.", pt: 'Lyon? Moro lá há cinco meses.' },
      { fr: "On y est allés en TGV.", pt: 'Fomos (para lá) de TGV.' },
      { fr: "Je n'y vais jamais le dimanche.", pt: 'Nunca vou lá aos domingos.' },
      { fr: "Vas-y, tu peux le faire !", pt: 'Vai, você consegue!' }
    ],
    ptComparison: 'Em português, depois de mencionar um lugar, simplesmente **omitimos**: "Você vai à praia? — Vou." Em francês, é obrigatório o *y*: *Tu vas à la plage ? — Oui, j\'**y** vais.* Responder só ~~Oui, je vais~~ soa incompleto.\n\n' +
      '**Y × en:** *y* = lugar onde se está/vai (*à, en, chez, dans*); *en* = de onde se vem (*de*) ou quantidade. *Tu viens de Lyon ? — Oui, j\'**en** viens.*'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Responda com y.', items: [
      { text: "Tu vas au cinéma ce soir ? — Oui, j'___ vais.", answers: ['y'] },
      { text: "Vous habitez à Paris ? — Non, nous n'___ habitons pas.", answers: ['y'] },
      { text: "Elle est allée chez le médecin ? — Oui, elle ___ est allée hier.", answers: ['y'] },
      { text: 'Tu veux aller à la plage ? — Oui, je veux ___ aller !', answers: ['y'] }
    ] },
    { type: 'multiple_choice', prompt: '"Fomos lá ontem." (ao museu)', options: ["Nous y sommes allés hier.", 'Nous sommes y allés hier.', 'Nous avons y allé hier.', "Y nous sommes allés hier."], answer: 0 },
    { type: 'multiple_choice', prompt: 'Imperativo de "aller" com y (tu):', options: ['Vas-y !', 'Va-y !', 'Y va !', 'Vas y !'], answer: 0 },
    { type: 'multiple_choice', prompt: 'Y ou en? "Tu reviens de Marseille ? — Oui, j\'___ reviens."', options: ['en', 'y', 'le', 'lui'], answer: 0,
      explanationPt: 'Revenir DE um lugar → en.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Je n'y suis jamais allé.", translation: 'Nunca fui lá.' }
  ],
  tipForBrazilians: '**"Ça vaut le coup !"** = vale a pena! É uma das expressões mais úteis para dar opinião sobre um lugar, um filme, um restaurante. O contrário: *ça ne vaut pas le coup*. Mais informal ainda: *ça vaut le détour* (vale o desvio, vale a visita) — usada em guias turísticos.'
});
