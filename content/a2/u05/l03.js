LUX.registerLesson({
  id: 'a2-u05-l03', level: 'A2', unit: 5, order: 3,
  title: 'En train pour Marseille', titlePt: 'De trem para Marselha',
  names: ['Lucas', 'Ana', 'Lyon', 'Part-Dieu', 'Marseille', 'Saint-Charles', 'Ferreira', 'France', 'Paris', 'Nice', 'Italie', 'Portugal', 'Brésil', 'TGV', 'Avignon', 'États-Unis', 'Mexique', 'Japon', 'Allemagne', 'H'],
  objectives: [
    'Comprar uma passagem e entender informações de viagem.',
    'Usar à / en / au / aux com cidades e países, e en / à com meios de transporte.',
    'Entender avisos sonoros numa estação de trem.'
  ],
  vocabulary: [
    { fr: 'le voyage', pt: 'a viagem', g: 'm', d: true, ex: 'Bon voyage !' },
    { fr: 'un aller simple', pt: 'uma passagem só de ida', g: 'm', ex: 'Un aller simple pour Marseille.' },
    { fr: 'un aller-retour', pt: 'uma passagem de ida e volta', g: 'm', ex: 'Je voudrais un aller-retour.' },
    { fr: 'la voiture', pt: 'o carro; o vagão (do trem)', g: 'f', d: true, ex: 'Vous êtes dans la voiture 12.' },
    { fr: 'la place', pt: 'o lugar, o assento; a praça', g: 'f', ex: 'Place 45, côté fenêtre.' },
    { fr: 'le quai', pt: 'a plataforma', g: 'm', d: true, ex: 'Le train part du quai B.' },
    { fr: 'la voie', pt: 'a linha, a via', g: 'f', ex: 'Le train arrive voie 3.' },
    { fr: 'composter / valider', pt: 'validar (o bilhete)', pos: 'v', ex: 'Il faut valider le ticket.' },
    { fr: 'la correspondance', pt: 'a conexão (troca de trem)', g: 'f', ex: 'Il y a une correspondance à Avignon.' },
    { fr: 'direct', pt: 'direto', pos: 'adj', ex: "C'est un train direct." },
    { fr: 'en train / en avion / en voiture', pt: 'de trem / de avião / de carro', pos: 'expr', ex: 'On y va en train.' },
    { fr: 'à pied / à vélo', pt: 'a pé / de bicicleta', pos: 'expr', ex: 'Je vais au travail à vélo.' }
  ],
  reading: {
    genre: 'e-mail de confirmação e dicas',
    title: 'Confirmation de votre voyage',
    text: "Bonjour Monsieur Ferreira,\n\n" +
      "Merci pour votre réservation. Voici le résumé de votre voyage.\n\n" +
      "Aller : samedi 14 juin, train TGV numéro 6172. Départ de Lyon Part-Dieu à 9 h 04, arrivée à Marseille Saint-Charles à 10 h 44. Train direct, sans correspondance. Voiture 12, places 45 et 46.\n" +
      "Retour : dimanche 15 juin, train TGV numéro 6195. Départ de Marseille Saint-Charles à 18 h 16, arrivée à Lyon Part-Dieu à 19 h 56. Voiture 3, places 81 et 82.\n" +
      "Passagers : deux adultes. Prix total : cent douze euros.\n\n" +
      "Nos conseils :\n" +
      "Arrivez à la gare au moins vingt minutes avant le départ. Le numéro du quai est affiché sur les écrans environ vingt minutes avant le départ.\n" +
      "Votre billet est électronique : gardez-le sur votre téléphone. Il n'est pas nécessaire de l'imprimer.\n" +
      "Les bagages : vous pouvez prendre deux grandes valises et un petit sac par personne. Écrivez votre nom sur vos bagages.\n" +
      "À bord, la voiture-bar est dans la voiture 4. Vous y trouverez des boissons et des sandwichs.\n\n" +
      "Vous partez à l'étranger cet été ? Nos trains vont aussi en Italie, en Espagne et en Suisse.\n\n" +
      "Bon voyage !",
    exercises: [
      { type: 'multiple_choice', prompt: 'À quelle heure le train part de Lyon ?', options: ['À 9 h 04.', 'À 10 h 44.', 'À 18 h 16.', 'À 19 h 56.'], answer: 0 },
      { type: 'short_answer', prompt: 'Quanto tempo dura a viagem de ida? (ex.: 1h40)', answers: ['1h40', '1 h 40', '1h40min', '100 minutos', '100', '1:40'] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Le train aller est direct.', answer: 'V', explanationPt: '"Train direct, sans correspondance."' },
        { text: 'Il faut imprimer le billet.', answer: 'F', explanationPt: '"Il n\'est pas nécessaire de l\'imprimer."' },
        { text: 'Le numéro du quai est affiché une heure avant.', answer: 'F', explanationPt: 'Cerca de vinte minutos antes.' },
        { text: 'Lucas voyage avec deux personnes.', answer: 'F', explanationPt: 'São dois adultos no total: Lucas e mais uma pessoa.' },
        { text: 'Il y a le wifi dans le train.', answer: 'NM', explanationPt: 'O e-mail não fala de wifi.' }
      ] },
      { type: 'multiple_choice', prompt: 'Où est la voiture-bar ?', options: ['Dans la voiture 4.', 'Dans la voiture 12.', 'Dans la voiture 3.', "Il n'y a pas de voiture-bar."], answer: 0 },
      { type: 'match', prompt: 'Ligue cada informação.', pairs: [['places 45 et 46', "à l'aller"], ['places 81 et 82', 'au retour'], ['cent douze euros', 'le prix total'], ['deux grandes valises', 'les bagages par personne']] }
    ]
  },
  listening: {
    genre: 'avisos e guichê',
    title: 'Na estação Part-Dieu',
    speakers: [{ id: 'X', name: 'O alto-falante', gender: 'f' }, { id: 'A', name: 'Ana', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }, { id: 'G', name: 'O atendente', gender: 'm' }],
    script: [
      { speaker: 'X', text: "Mesdames et messieurs, le TGV numéro 6172 à destination de Marseille Saint-Charles partira voie H. Il est annoncé avec un retard d'environ quinze minutes." },
      { speaker: 'A', text: 'Quinze minutes de retard ? On a le temps de prendre un café.' },
      { speaker: 'U', text: "Attends, je dois aussi acheter un billet pour Hugo. Il vient demain en train." },
      { speaker: 'U', text: "Bonjour, monsieur. Je voudrais un aller simple Lyon-Marseille pour demain matin, s'il vous plaît." },
      { speaker: 'G', text: "Il y a un train à sept heures trente-quatre, direct, ou un à dix heures quatre, avec une correspondance à Avignon." },
      { speaker: 'U', text: 'Le direct, s\'il vous plaît. C\'est combien ?' },
      { speaker: 'G', text: "Soixante-deux euros en seconde classe. Vous avez une carte de réduction ?" },
      { speaker: 'U', text: "Non. Il a vingt-cinq ans… il peut avoir une réduction jeune ?" },
      { speaker: 'G', text: "Oui, avec la carte Avantage Jeune, c'est quarante et un euros." },
      { speaker: 'X', text: 'Le TGV numéro 6172 à destination de Marseille Saint-Charles va partir. Attention à la fermeture des portes.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'De quelle voie part le train de Lucas et Ana ?', options: ['Voie H.', 'Voie A.', 'Voie 6.', 'Voie B.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Combien de minutes de retard ?', options: ['Environ quinze minutes.', 'Cinq minutes.', 'Cinquante minutes.', 'Il n\'y a pas de retard.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Le train de 7 h 34 est direct.', answer: 'V', explanationPt: '"sept heures trente-quatre, direct".' },
        { text: 'Hugo a vingt-cinq ans.', answer: 'V', explanationPt: '"Il a vingt-cinq ans".' },
        { text: 'Avec la carte Avantage Jeune, le billet coûte soixante-deux euros.', answer: 'F', explanationPt: 'Com o cartão, custa 41 €; sem, 62 €.' },
        { text: 'Lucas achète un billet en première classe.', answer: 'F', explanationPt: 'O preço citado é de segunda classe.' }
      ] },
      { type: 'listen_choose', audio: 'Attention à la fermeture des portes.', prompt: 'O que significa o aviso?',
        options: ['Atenção ao fechamento das portas.', 'Atenção à abertura das portas.', 'As portas estão quebradas.', 'Não fique perto da porta.'], answer: 0 },
      { type: 'dictation', text: "Je voudrais un aller simple pour demain matin." }
    ]
  },
  grammar: {
    topicId: 'prepositions-places',
    title: 'À, en, au com lugares e transportes',
    explanationPt: '**Cidades:** *à* → *à Lyon, à Marseille, à Rio*. (Algumas têm artigo: *au Caire, au Havre*.)\n\n' +
      '**Países:**\n- feminino (a maioria termina em **-e**) ou começa com vogal: **en** → *en France, en Italie, en Espagne, en Iran*\n- masculino: **au** → *au Brésil, au Portugal, au Japon, au Mexique* (atenção: *le Mexique* é masculino!)\n- plural: **aux** → *aux États-Unis*\n\n' +
      '**Vir de:** *de / d\'* (feminino) e *du / des* (masculino/plural): *Je viens **de** France, **d\'**Italie, **du** Brésil, **des** États-Unis.*\n\n' +
      '**Transportes:**\n- **en** + veículo fechado em que você entra: *en train, en avion, en voiture, en bus, en métro, en taxi*\n- **à** + quando você vai "em cima": *à pied, à vélo, à moto, à cheval*',
    table: { head: ['', 'ir para / estar em', 'vir de'], rows: [
      ['cidade', 'à Lyon', 'de Lyon'], ['país feminino', 'en France', 'de France'], ['país com vogal', 'en Iran', "d'Iran"],
      ['país masculino', 'au Brésil', 'du Brésil'], ['país plural', 'aux États-Unis', 'des États-Unis']
    ] },
    examples: [
      { fr: 'Nous allons à Marseille en train.', pt: 'Vamos a Marselha de trem.' },
      { fr: "Elle habite au Portugal, mais elle travaille en Espagne.", pt: 'Ela mora em Portugal, mas trabalha na Espanha.' },
      { fr: 'Je viens du Brésil.', pt: 'Venho do Brasil.' },
      { fr: 'Il va au travail à vélo.', pt: 'Ele vai ao trabalho de bicicleta.' }
    ],
    ptComparison: 'Em português usamos "de" para quase todos os transportes (de trem, de carro, de bicicleta). Em francês há dois: **en** (*en train*) e **à** (*à vélo, à pied*). Na fala, muitos franceses dizem *en vélo* — entenda, mas prefira *à vélo*.\n\n' +
      'E "no Brasil" = *au Brésil*, nunca ~~en Brésil~~: Brasil é masculino em francês, como em português!'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com à, en, au ou aux.', items: [
      { text: "J'habite ___ Lyon.", answers: ['à'] },
      { text: 'Mes parents habitent ___ Brésil.', answers: ['au'] },
      { text: "L'été prochain, je vais ___ Italie.", answers: ['en'] },
      { text: 'Il travaille ___ États-Unis.', answers: ['aux'] },
      { text: 'Nous partons ___ Japon en avril.', answers: ['au'] },
      { text: 'Elle va au bureau ___ pied.', answers: ['à'] },
      { text: 'Tu viens ___ train ou en voiture ?', answers: ['en'] }
    ] },
    { type: 'multiple_choice', prompt: '"Eu venho do México."', options: ['Je viens du Mexique.', 'Je viens de Mexique.', 'Je viens en Mexique.', 'Je viens au Mexique.'], answer: 0,
      explanationPt: 'Le Mexique é masculino → du Mexique.' },
    { type: 'multiple_choice', prompt: '"Vou para a Alemanha de avião."', options: ["Je vais en Allemagne en avion.", "Je vais à l'Allemagne en avion.", "Je vais au Allemagne à avion.", "Je vais en Allemagne à avion."], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je vais au Portugal en voiture.', translation: 'Vou para Portugal de carro.' }
  ],
  tipForBrazilians: '**A hora de 24h nos avisos:** na estação, no aeroporto e nos e-mails de reserva, as horas são sempre de 0 a 24: *dix-huit heures seize* = 18h16. Os minutos vêm depois de *heures*, sem "e": *neuf heures quatre* = 9h04. Treine em **Treino de ouvido › Horas** — os avisos de estação são rápidos!'
});
