/* Gramática de bolso — tópicos A2 acrescentados na Fase 2 */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'quantities', category: 'artigos', level: 'A2', title: 'Expressões de quantidade (beaucoup de, un kilo de...)', titleFr: 'Les expressions de quantité',
    keywords: ['quantidade', 'beaucoup de', 'un peu de', 'trop de', 'assez de', 'un kilo de', 'bouteille', 'il faut'],
    summaryPt: 'Depois de uma expressão de quantidade vem só "de" (ou d\'), sem artigo: beaucoup de sucre, un litre d\'eau.',
    explanationPt: 'Quantidades **precisas** (*un kilo, deux cents grammes, une bouteille, un paquet, une tranche, un morceau*) e **vagas** (*beaucoup, un peu, assez, trop, peu, combien*) são seguidas de **de / d\'**, sem artigo.\n\n' +
      '- *un kilo **de** pommes* · *une bouteille **d\'**eau* · *beaucoup **de** gens* · *trop **de** sel*\n\n' +
      '**Exceções:** *la plupart **des** gens* (a maioria das pessoas), *bien **des** fois* (muitas vezes) — essas mantêm o artigo.\n\n' +
      '**Il faut** + substantivo = "é preciso / precisa-se de": *Il faut trois œufs.* — **Il faut** + infinitivo = "é preciso fazer": *Il faut mélanger.*',
    tables: [{ caption: 'Expressões frequentes', head: ['expressão', 'exemplo', 'tradução'], rows: [
      ['beaucoup de', 'beaucoup de travail', 'muito trabalho'], ['un peu de', 'un peu de lait', 'um pouco de leite'], ['peu de', 'peu de temps', 'pouco tempo'],
      ['assez de', "assez d'argent", 'dinheiro suficiente'], ['trop de', 'trop de bruit', 'barulho demais'], ['combien de', 'combien de personnes ?', 'quantas pessoas?'],
      ['un kilo de', 'un kilo de pommes', 'um quilo de maçãs'], ['un litre de', 'un litre de lait', 'um litro de leite'], ['une bouteille de', "une bouteille d'eau", 'uma garrafa de água'],
      ['un paquet de', 'un paquet de café', 'um pacote de café'], ['une tranche de', 'une tranche de jambon', 'uma fatia de presunto'], ['un morceau de', 'un morceau de fromage', 'um pedaço de queijo']
    ] }],
    examples: [
      { fr: 'Il y a trop de monde dans le métro.', pt: 'Tem gente demais no metrô.' },
      { fr: "Tu as assez d'argent pour le billet ?", pt: 'Você tem dinheiro suficiente para a passagem?' },
      { fr: 'Combien de frères et sœurs tu as ?', pt: 'Quantos irmãos você tem?' },
      { fr: 'La plupart des magasins ferment le dimanche.', pt: 'A maioria das lojas fecha no domingo.' }
    ],
    ptComparison: {
      same: 'Como em português, a quantidade vem antes do substantivo: "um quilo de", "uma garrafa de".',
      different: 'Em francês, "beaucoup", "trop", "assez" são invariáveis e sempre pedem "de": muitas pessoas = beaucoup de personnes. "Trop" é excesso (negativo), não "muito".',
      commonErrors: [
        { wrong: 'beaucoup des personnes', right: 'beaucoup de personnes', why: 'Depois de quantidade, só "de".' },
        { wrong: "un verre de l'eau", right: "un verre d'eau", why: 'Sem artigo depois de "verre de".' },
        { wrong: "C'est trop bon (para elogio formal)", right: "C'est très bon", why: '"Trop" é informal/jovem como elogio; em contexto neutro, "très".' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Un litre ___ lait.', options: ['de', 'du', 'de la', 'des'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Il y a beaucoup ___ touristes.', options: ['de', 'des', 'du', 'les'], answer: 0 },
      { type: 'multiple_choice', prompt: 'La plupart ___ gens travaillent.', options: ['des', 'de', 'du', 'les'], answer: 0 }
    ],
    related: ['partitive', 'pronoun-en']
  });

  G({
    id: 'politeness', category: 'registros', level: 'A2', title: 'Pedir com educação (je voudrais, vous pourriez...)', titleFr: 'Demander poliment',
    keywords: ['educação', 'pedir', 'je voudrais', 'pourriez', 'restaurante', 'loja', 'cortesia', 'conditionnel de politesse', 'por favor'],
    summaryPt: 'Para pedir sem soar brusco: je voudrais, j\'aimerais, je vais prendre, vous pourriez… ? — sempre com s\'il vous plaît.',
    explanationPt: 'Em francês, *je veux* para pedir algo a um desconhecido soa **brusco**. Use:\n\n' +
      '- **Je voudrais** + substantivo/infinitivo: *Je voudrais un café. Je voudrais payer.*\n' +
      '- **J\'aimerais** + infinitivo: *J\'aimerais réserver une table.*\n' +
      '- **Je vais prendre / Je prends** (ao escolher): *Je vais prendre le menu.*\n' +
      '- **Vous pourriez** + infinitivo + **?** (pedir um favor): *Vous pourriez répéter, s\'il vous plaît ?*\n' +
      '- **Est-ce que vous avez… ?** (perguntar se há): *Est-ce que vous avez des sacs ?*\n\n' +
      '*Voudrais, aimerais, pourriez* são formas do **conditionnel** (estudado no B1). Aqui funcionam como fórmulas prontas de cortesia.\n\n' +
      '**Regra de ouro:** *Bonjour* ao entrar, *s\'il vous plaît* ao pedir, *merci* e *au revoir / bonne journée* ao sair.',
    tables: [{ caption: 'Fórmulas', head: ['para...', 'diga', 'tradução'], rows: [
      ['pedir algo', "Je voudrais une baguette, s'il vous plaît.", 'Eu queria uma baguete, por favor.'],
      ['escolher', 'Je vais prendre le plat du jour.', 'Vou querer o prato do dia.'],
      ['pedir um favor', 'Vous pourriez parler plus lentement ?', 'O senhor poderia falar mais devagar?'],
      ['perguntar se há', 'Vous avez du pain sans gluten ?', 'Vocês têm pão sem glúten?'],
      ['agradecer', 'Merci beaucoup, bonne journée !', 'Muito obrigado, bom dia!']
    ] }],
    examples: [
      { fr: "Bonjour, je voudrais deux croissants, s'il vous plaît.", pt: 'Bom dia, eu queria dois croissants, por favor.' },
      { fr: "Vous pourriez m'aider ?", pt: 'O senhor poderia me ajudar?' },
      { fr: "J'aimerais essayer cette veste.", pt: 'Eu gostaria de experimentar esta jaqueta.' },
      { fr: "L'addition, s'il vous plaît.", pt: 'A conta, por favor.' }
    ],
    ptComparison: {
      same: 'O português também suaviza com o futuro do pretérito: "eu gostaria", "o senhor poderia".',
      different: 'No Brasil é comum "me vê um café" ou "quero um café". Em francês, prefira sempre "je voudrais": "je veux" soa como uma ordem.',
      commonErrors: [
        { wrong: 'Je veux un café.', right: "Je voudrais un café, s'il vous plaît.", why: '"Je veux" soa brusco num pedido.' },
        { wrong: 'Donne-moi la carte.', right: "Vous pourriez m'apporter la carte ?", why: 'Com desconhecidos use "vous" e uma pergunta.' },
        { wrong: 'Entrar e pedir direto', right: 'Bonjour ! Je voudrais…', why: 'Sem "bonjour", você parece mal-educado na França.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'A forma mais educada:', options: ['Je voudrais un thé.', 'Je veux un thé.', 'Un thé !', 'Donne un thé.'], answer: 0 },
      { type: 'multiple_choice', prompt: '"O senhor poderia repetir?"', options: ['Vous pourriez répéter ?', 'Vous pouvez répète ?', 'Tu pourrais répéter ?', 'Vous répétez ?'], answer: 0 }
    ],
    related: ['tu-vous', 'questions']
  });

  G({
    id: 'comparatives', category: 'substantivos-adjetivos', level: 'A2', title: 'Comparativos (plus... que, moins... que, aussi... que)', titleFr: 'Le comparatif',
    keywords: ['comparativo', 'mais que', 'menos que', 'tão quanto', 'plus que', 'moins que', 'aussi que', 'meilleur', 'mieux', 'comparar'],
    summaryPt: 'plus + adjetivo + que (mais... que), moins... que (menos... que), aussi... que (tão... quanto). Bon → meilleur, bien → mieux.',
    explanationPt: '**Com adjetivos e advérbios:**\n- **plus** ... **que** = mais ... que: *Lyon est **plus** petite **que** Paris.*\n- **moins** ... **que** = menos ... que: *Le train est **moins** cher **que** l\'avion.*\n- **aussi** ... **que** = tão ... quanto: *Il est **aussi** grand **que** son père.*\n\n' +
      '**Com substantivos:** *plus de, moins de, autant de* + substantivo + *que*: *Il y a **plus de** touristes **qu\'**avant.*\n\n' +
      '**Com verbos:** *plus que, moins que, autant que*: *Je travaille **plus que** toi.*\n\n' +
      '**Irregulares:** *bon* → **meilleur** (melhor, adjetivo) · *bien* → **mieux** (melhor, advérbio). *Ce vin est **meilleur**. Tu parles **mieux** que moi.*\n\n' +
      '**Superlativo:** *le / la / les plus* + adjetivo: *C\'est **la plus** belle ville. C\'est **le meilleur** restaurant.*',
    tables: [{ caption: 'Resumo', head: ['', 'adjetivo / advérbio', 'substantivo', 'verbo'], rows: [
      ['+', 'plus grand que', 'plus de temps que', 'travailler plus que'], ['−', 'moins grand que', 'moins de temps que', 'travailler moins que'],
      ['=', 'aussi grand que', 'autant de temps que', 'travailler autant que']
    ] }, { caption: 'Bon e bien', head: ['', 'comparativo', 'superlativo'], rows: [
      ['bon (adjetivo)', 'meilleur(e)(s)', 'le / la meilleur(e)'], ['bien (advérbio)', 'mieux', 'le mieux']
    ] }],
    examples: [
      { fr: 'Le métro est plus rapide que le bus.', pt: 'O metrô é mais rápido que o ônibus.' },
      { fr: "À Lyon, il fait moins chaud qu'à Rio.", pt: 'Em Lyon faz menos calor que no Rio.' },
      { fr: 'Ce gâteau est meilleur que celui de la boulangerie.', pt: 'Este bolo é melhor que o da padaria.' },
      { fr: 'Elle chante mieux que moi.', pt: 'Ela canta melhor que eu.' },
      { fr: "C'est la plus vieille rue de la ville.", pt: 'É a rua mais antiga da cidade.' }
    ],
    ptComparison: {
      same: 'A estrutura é a mesma: "mais... que", "menos... que", "tão... quanto".',
      different: 'Português tem uma palavra só para "melhor"; o francês distingue "meilleur" (adjetivo: o vinho é melhor) e "mieux" (advérbio: ela fala melhor). E "tão... quanto" usa "aussi... que".',
      commonErrors: [
        { wrong: 'plus bon', right: 'meilleur', why: '"Bon" tem comparativo irregular.' },
        { wrong: 'Il parle meilleur que moi.', right: 'Il parle mieux que moi.', why: 'Com verbo (advérbio), use "mieux".' },
        { wrong: 'aussi grand comme', right: 'aussi grand que', why: 'Sempre "que", nunca "comme".' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Ce restaurant est ___ que l\'autre.', options: ['meilleur', 'mieux', 'plus bon', 'plus bien'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Elle danse ___ que moi.', options: ['mieux', 'meilleur', 'plus bonne', 'plus bien'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Le train est ___ cher que l\'avion. (−)', options: ['moins', 'plus', 'aussi', 'autant'], answer: 0 }
    ],
    related: ['adjectives']
  });

  G({
    id: 'connectors-narrative', category: 'conectores', level: 'A2', title: 'Conectores para contar e explicar', titleFr: 'Les connecteurs chronologiques et logiques',
    keywords: ['conector', "d'abord", 'ensuite', 'puis', 'enfin', 'parce que', 'donc', 'alors', 'mais', 'pourtant', 'narrativa', 'ordem'],
    summaryPt: "Para organizar uma história: d'abord, ensuite, puis, après, enfin. Para explicar: parce que, car, donc, alors, mais.",
    explanationPt: '**Ordem dos acontecimentos (cronológicos):**\n- *d\'abord* (primeiro) → *ensuite / puis / après* (depois, em seguida) → *enfin / finalement* (por fim, finalmente)\n- *soudain / tout à coup* (de repente), *pendant ce temps* (enquanto isso)\n\n' +
      '**Causa e consequência:**\n- ***parce que*** (porque — responde a *pourquoi ?*)\n- ***car*** (pois — mais escrito)\n- ***comme*** (como, no início da frase)\n- ***donc*** (portanto, então)\n- ***alors*** (então — mais falado)\n\n' +
      '**Oposição:**\n- ***mais*** (mas)\n- ***pourtant*** (no entanto)\n- ***par contre*** (por outro lado — muito falado)\n\n' +
      '**Adição:** *et, aussi, en plus* (além disso)',
    tables: [{ caption: 'Conectores por função', head: ['função', 'conectores', 'exemplo'], rows: [
      ['começar', "d'abord, premièrement", "D'abord, je me lève."], ['continuar', 'ensuite, puis, après', 'Ensuite, je prends le métro.'],
      ['terminar', 'enfin, finalement, pour finir', 'Enfin, je rentre.'], ['causa', 'parce que, car, comme', "Je reste parce qu'il pleut."],
      ['consequência', 'donc, alors', "Il pleut, donc je reste."], ['oposição', 'mais, pourtant, par contre', "C'est cher, mais c'est bon."]
    ] }],
    examples: [
      { fr: "D'abord, nous avons visité le musée, puis nous avons déjeuné.", pt: 'Primeiro visitamos o museu, depois almoçamos.' },
      { fr: "Comme il pleuvait, nous sommes restés à la maison.", pt: 'Como estava chovendo, ficamos em casa.' },
      { fr: "Je suis fatigué, donc je me couche.", pt: 'Estou cansado, então vou dormir.' },
      { fr: "Le quartier est cher. Par contre, il est très vivant.", pt: 'O bairro é caro. Por outro lado, é muito animado.' }
    ],
    ptComparison: {
      same: 'Os conectores funcionam como em português e ficam no mesmo lugar da frase.',
      different: '"Comme" (= como, causa) só vai no início da frase. "Puis" quase nunca começa um texto: use "d\'abord" primeiro. "Enfin" também pode significar "quer dizer" na fala.',
      commonErrors: [
        { wrong: 'Je reste car il pleut (na fala)', right: "Je reste parce qu'il pleut.", why: '"Car" é mais escrito; na fala, "parce que".' },
        { wrong: 'Parce que il pleut', right: "Parce qu'il pleut", why: '"Que" vira "qu\'" antes de vogal.' },
        { wrong: 'Je suis resté, comme il pleuvait.', right: 'Comme il pleuvait, je suis resté.', why: '"Comme" (causa) vem no início.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"___ il faisait froid, j\'ai pris un manteau." (Como)', options: ['Comme', 'Donc', 'Mais', 'Puis'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Primeiro conector de uma sequência:', options: ["D'abord", 'Ensuite', 'Enfin', 'Puis'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Il est malade, ___ il ne vient pas." (então)', options: ['donc', 'parce que', 'mais', 'comme'], answer: 0 }
    ],
    related: ['pc-vs-imparfait', 'passe-compose']
  });

  G({
    id: 'position-prepositions', category: 'preposicoes', level: 'A2', title: 'Localização: sur, sous, devant, à côté de...', titleFr: 'Les prépositions de lieu',
    keywords: ['onde', 'localização', 'em cima', 'embaixo', 'ao lado', 'em frente', 'atrás', 'perto', 'longe', 'à côté de', 'en face de', 'devant', 'derrière', 'sur', 'sous', 'transporte', 'en train', 'à pied'],
    summaryPt: 'sur/sous, devant/derrière, dans, entre (sem "de") e à côté de, en face de, près de, loin de, au coin de (com "de", que se contrai: à côté du parc).',
    explanationPt: '**Sem "de":**\n- ***sur*** (em cima de)\n- ***sous*** (debaixo de)\n- ***devant*** (na frente de)\n- ***derrière*** (atrás de)\n- ***dans*** (dentro de)\n- ***entre*** (entre)\n- ***chez*** (na casa de)\n\n' +
      '**Com "de" (que se contrai com o artigo):**\n- ***à côté de*** (ao lado de)\n- ***en face de*** (em frente a)\n- ***près de*** (perto de)\n- ***loin de*** (longe de)\n- ***au coin de*** (na esquina de)\n- ***au bout de*** (no fim de)\n- ***au milieu de*** (no meio de)\n- ***au-dessus de*** (acima de)\n- ***en dessous de*** (abaixo de)\n' +
      '→ *à côté **du** parc*, *en face **de la** gare*, *près **de l\'**école*, *loin **des** magasins*.\n\n' +
      '**Meios de transporte:** **en** para veículos em que se entra (*en train, en voiture, en avion, en bus, en métro, en bateau*) e **à** para os que se monta ou a pé (*à pied, à vélo, à moto, à cheval*).',
    tables: [{ caption: 'Pares de opostos', head: ['', '', ''], rows: [
      ['sur (em cima)', '↔', 'sous (embaixo)'], ['devant (na frente)', '↔', 'derrière (atrás)'], ['près de (perto)', '↔', 'loin de (longe)'],
      ['à droite (à direita)', '↔', 'à gauche (à esquerda)'], ['en haut (em cima, no alto)', '↔', 'en bas (embaixo)']
    ] }, { caption: 'Transportes', head: ['en', 'à'], rows: [
      ['en train, en métro, en bus', 'à pied'], ['en voiture, en taxi', 'à vélo'], ['en avion, en bateau', 'à moto, à cheval']
    ] }],
    examples: [
      { fr: 'Les clés sont sur la table.', pt: 'As chaves estão em cima da mesa.' },
      { fr: "La pharmacie est à côté du supermarché.", pt: 'A farmácia fica ao lado do supermercado.' },
      { fr: "Je t'attends devant le cinéma.", pt: 'Te espero na frente do cinema.' },
      { fr: "J'habite loin du centre, alors je viens en métro.", pt: 'Moro longe do centro, então venho de metrô.' }
    ],
    ptComparison: {
      same: 'A maioria tem equivalente direto: sur = sobre, sous = sob, entre = entre.',
      different: '"Em frente a" tem duas traduções: "en face de" (do outro lado, de frente) e "devant" (bem diante). E o português usa "de" para todos os transportes, enquanto o francês alterna "en" e "à".',
      commonErrors: [
        { wrong: 'devant de la gare', right: 'devant la gare', why: '"Devant" não leva "de".' },
        { wrong: 'à côté de le parc', right: 'à côté du parc', why: 'de + le = du.' },
        { wrong: 'en pied', right: 'à pied', why: 'A pé = à pied.' }
      ]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Le café est en face ___ cinéma.', options: ['du', 'de le', 'le', 'au'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Atrás da casa"', options: ['derrière la maison', 'derrière de la maison', 'à derrière la maison', 'en derrière la maison'], answer: 0 },
      { type: 'multiple_choice', prompt: '"De bicicleta"', options: ['à vélo', 'en vélo de', 'par vélo', 'au vélo'], answer: 0 }
    ],
    related: ['prepositions-places', 'pronoun-y']
  });
})();
