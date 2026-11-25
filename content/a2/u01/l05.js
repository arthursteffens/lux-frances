LUX.registerLesson({
  id: 'a2-u01-l05', level: 'A2', unit: 1, order: 5, review: true,
  title: "Portrait d'un nouveau Lyonnais", titlePt: 'Retrato de um novo morador de Lyon (revisão da unidade)',
  names: ['Lucas', 'Ferreira', 'Belo Horizonte', 'Croix-Rousse', 'Gazette', 'Austerlitz', 'Léa', 'Brésil', 'Bernard', 'B'],
  objectives: [
    'Revisar o presente (regulares, irregulares e pronominais) e a negação.',
    'Entender um artigo de jornal de bairro e uma mensagem de voz.',
    'Entender números de telefone ditados em francês.'
  ],
  vocabulary: [
    { fr: 'le voisin / la voisine', pt: 'o vizinho / a vizinha', g: 'm', ex: 'Madame Bernard est ma voisine.' },
    { fr: "l'affiche", pt: 'o cartaz', g: 'f', ex: 'Il crée des affiches.' },
    { fr: 'la réunion', pt: 'a reunião', g: 'f', ex: 'Les réunions sont longues.' },
    { fr: 'le collègue', pt: 'o colega de trabalho', g: 'm', ex: 'Mes collègues sont sympas.' },
    { fr: 'lentement', pt: 'devagar', pos: 'adv', ex: 'Parlez lentement, s\'il vous plaît.' },
    { fr: 'manquer à quelqu\'un', pt: 'fazer falta a alguém', pos: 'expr', ex: 'Ma famille me manque.' },
    { fr: 'seul(e)', pt: 'sozinho(a)', pos: 'adj', ex: 'Je ne me sens pas seul.' },
    { fr: "l'ascenseur", pt: 'o elevador', g: 'm', ex: "Il n'y a pas d'ascenseur." },
    { fr: "l'escalier", pt: 'a escada', g: 'm', ex: "Il faut prendre l'escalier." },
    { fr: "l'anniversaire", pt: 'o aniversário', g: 'm', ex: 'Je fais une fête pour mon anniversaire.' }
  ],
  reading: {
    genre: 'artigo de jornal de bairro',
    title: 'La Gazette de la Croix-Rousse — Portrait',
    text: "Ce mois-ci, la Gazette présente un nouveau voisin : Lucas Ferreira, vingt-huit ans, graphiste brésilien.\n\n" +
      "« À Lyon, je me sens bien », explique Lucas. Il habite rue d'Austerlitz avec sa colocataire, Léa, une infirmière lyonnaise. Le matin, il se lève à sept heures, il prend un café au [[bar du coin|bar da esquina]] et il va au travail à vélo. « Je ne prends jamais le métro : avec le vélo, je découvre la ville ! »\n\n" +
      "Lucas travaille dans une agence de design. Il crée des [[affiches|cartazes]] pour des théâtres et des festivals. Ses collègues sont sympas, mais les réunions sont longues. « Au Brésil, on ne fait pas de réunions de deux heures ! », dit-il avec un sourire.\n\n" +
      "Le week-end, Lucas ne reste pas à la maison. Il joue au football avec des amis, il visite des musées et il fait la cuisine. Sa spécialité ? Le [[pão de queijo|pão de queijo|especialidade de Minas Gerais]], un petit pain au fromage. « Les voisins adorent ! »\n\n" +
      "Est-ce qu'il a des difficultés ? « Oui, la langue. Je comprends bien quand les gens parlent [[lentement|devagar]], mais au téléphone, je ne comprends rien ! » Et le Brésil ? « Ma famille me [[manque|faz falta]], bien sûr. Mais ici, je ne me sens pas seul. »",
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment Lucas va au travail ?', options: ['À vélo.', 'En métro.', 'En bus.', 'À pied.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas habite seul.', answer: 'F', explanationPt: 'Ele mora com Léa.' },
        { text: 'Lucas crée des affiches.', answer: 'V' },
        { text: "Les réunions sont courtes dans l'agence.", answer: 'F', explanationPt: '"les réunions sont longues".' },
        { text: 'Lucas a un chat.', answer: 'NM' },
        { text: 'Lucas comprend tout au téléphone.', answer: 'F', explanationPt: '"au téléphone, je ne comprends rien !"' }
      ] },
      { type: 'multiple_choice', prompt: 'Quelle est la spécialité de Lucas ?', options: ['Le pão de queijo.', 'Les quenelles.', 'Le café.', 'Les crêpes.'], answer: 0 },
      { type: 'fill_blank', prompt: 'Complete as falas de Lucas com a negação.', bank: ['jamais', 'rien', 'pas'], items: [
        { text: 'Je ne prends ___ le métro.', answers: ['jamais'] },
        { text: 'Au téléphone, je ne comprends ___.', answers: ['rien'] },
        { text: 'Ici, je ne me sens ___ seul.', answers: ['pas'] }
      ] },
      { type: 'order_events', prompt: 'Coloque a manhã de Lucas em ordem.', items: [
        'Lucas se lève à sept heures.', 'Il prend un café au bar du coin.', 'Il va au travail à vélo.', 'Il travaille dans une agence de design.'
      ] },
      { type: 'multiple_choice', prompt: 'Quelle est la principale difficulté de Lucas ?', options: ['La langue.', 'Le travail.', 'Les voisins.', 'Le vélo.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'mensagem de voz',
    title: 'Uma mensagem da vizinha',
    speakers: [{ id: 'B', name: 'Mme Bernard', gender: 'f' }],
    script: [
      { speaker: 'B', text: "Bonjour Lucas, c'est Madame Bernard, votre voisine du troisième étage." },
      { speaker: 'B', text: 'Je viens de lire votre portrait dans la Gazette : bravo !' },
      { speaker: 'B', text: 'Écoutez, je fais une petite fête pour mon anniversaire samedi prochain, à dix-huit heures. Vous venez avec Léa ?' },
      { speaker: 'B', text: "Ne prenez rien, j'ai tout ! Enfin… si vous voulez, vous pouvez faire vos petits pains au fromage, j'adore ça !" },
      { speaker: 'B', text: "Mon appartement, c'est le trois B. Ah, et il n'y a pas d'ascenseur, désolée : il faut prendre l'escalier !" },
      { speaker: 'B', text: 'Rappelez-moi au zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit. Bonne journée !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi Madame Bernard appelle ?', options: ['Pour inviter Lucas et Léa à son anniversaire.', 'Pour parler du bruit.', "Pour demander de l'aide.", 'Pour vendre son appartement.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'La fête commence à quelle heure ?', options: ['À dix-huit heures.', 'À huit heures.', 'À seize heures.', 'À vingt heures.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il faut apporter des boissons.', answer: 'F', explanationPt: '"Ne prenez rien, j\'ai tout !"' },
        { text: 'Il y a un ascenseur.', answer: 'F', explanationPt: '"il n\'y a pas d\'ascenseur".' },
        { text: 'Madame Bernard habite au troisième étage.', answer: 'V' },
        { text: 'Madame Bernard a quatre-vingts ans.', answer: 'NM', explanationPt: 'Ela não diz a idade.' }
      ] },
      { type: 'short_answer', prompt: 'Qual é o número de telefone? (digite os algarismos)', answers: ['06 12 34 56 78', '0612345678', '06.12.34.56.78'],
        explanationPt: 'Na França, os telefones são lidos em pares: zéro six, douze, trente-quatre... Treine mais no Treino de ouvido › Telefones.' },
      { type: 'dictation', text: 'Vous venez avec Léa ?' },
      { type: 'dictation', text: "Il faut prendre l'escalier." }
    ]
  },
  grammar: {
    topicId: 'questions',
    title: 'Revisão: perguntas e negação com verbos pronominais',
    explanationPt: '**Três formas de fazer uma pergunta** (da mais informal à mais formal):\n\n' +
      '- **Entonação**: *Tu viens ?* (só a voz sobe no fim)\n' +
      '- **Est-ce que**: *Est-ce que tu viens ?*\n' +
      '- **Inversão** (formal/escrita): *Viens-tu ? Venez-vous ?*\n\n' +
      '**Negação com verbo pronominal:** o *ne* vai **antes do pronome** e o *pas* depois do verbo:\n\n' +
      '*Je **ne** me lève **pas** tôt. — Il **ne** se sent **pas** seul.*',
    table: { head: ['Afirmativa', 'Negativa'], rows: [
      ['Je me lève.', 'Je ne me lève pas.'], ["Tu t'habilles.", "Tu ne t'habilles pas."], ['Nous nous reposons.', 'Nous ne nous reposons pas.']
    ] },
    examples: [
      { fr: 'Est-ce que tu te lèves tôt ?', pt: 'Você acorda cedo?' },
      { fr: 'Vous venez avec Léa ?', pt: 'O senhor vem com a Léa?' },
      { fr: "Je ne m'ennuie jamais ici.", pt: 'Nunca fico entediado aqui.' }
    ],
    ptComparison: 'Como em português, a pergunta com **entonação** é a mais comum na fala: *Tu viens ?* = "Você vem?".\n\n' +
      '*Est-ce que* não se traduz: é só um "marcador" de pergunta, como se fosse "será que", mas neutro.\n\n' +
      'Na inversão com il/elle, aparece um **-t-** se o verbo termina em vogal: *Parle-t-il français ?*'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Qual frase está correta?', options: ['Je ne me lève pas tôt.', 'Je me ne lève pas tôt.', 'Je ne lève me pas tôt.', 'Ne je me lève pas tôt.'], answer: 0 },
    { type: 'fill_blank', prompt: 'Complete.', items: [
      { text: 'Elle ne ___ pas avant huit heures. (se réveiller)', answers: ['se réveille'] },
      { text: 'Vous ___ quoi le samedi ? (faire)', answers: ['faites'] },
      { text: "Je n'ai pas ___ voiture.", answers: ['de'] },
      { text: 'Ils ___ le métro tous les jours. (prendre)', answers: ['prennent'] }
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je ne me couche pas tard.', translation: 'Não vou dormir tarde.' },
    { type: 'short_answer', prompt: 'Traduza: "Eu não entendo nada."', answers: ['Je ne comprends rien'], explanationPt: 'ne... rien = nada.' },
    { type: 'order_sentence', prompt: 'Monte a pergunta com "est-ce que".', answer: 'Est-ce que tu viens samedi ?', translation: 'Você vem no sábado?' }
  ],
  tipForBrazilians: '**Telefones franceses:** têm 10 dígitos e são lidos **em pares**: 06 12 34 56 78 → *zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit*. Os números de 70 a 99 (*soixante-dix, quatre-vingts...*) são o maior desafio. Treine 2 minutos por dia na aba **Treino de ouvido**!'
});
