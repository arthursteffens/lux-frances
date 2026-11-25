/* Gramática — negação, interrogação e registro (tu/vous) */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'negation', category: 'negacao-interrogacao', level: 'A1', title: 'Negação (ne... pas, jamais, plus, rien, personne)', titleFr: 'La négation',
    keywords: ['negação', 'ne pas', 'jamais', 'plus', 'rien', 'personne', 'pas de', 'não', 'nunca', 'nada', 'ninguém'],
    summaryPt: 'Duas partes em volta do verbo: ne + verbo + pas/jamais/plus/rien. Depois da negação, un/une/des/du viram de.',
    explanationPt: 'A negação francesa "abraça" o verbo: **ne + verbo + pas**.\n\n' +
      '- *ne... pas* (não), *ne... jamais* (nunca), *ne... plus* (não... mais), *ne... rien* (nada), *ne... personne* / *personne ne* (ninguém).\n' +
      '- *ne* → *n\'* antes de vogal.\n' +
      '- Depois da negação: **un, une, des, du, de la → de**: *Je n\'ai pas de voiture.*\n' +
      '- Com tempo composto, em volta do auxiliar: *Je n\'ai pas compris.*\n' +
      '- Com infinitivo, tudo junto antes: *Je préfère ne pas sortir.*',
    tables: [{ caption: 'Formas', head: ['negação', 'português', 'exemplo'], rows: [
      ['ne... pas', 'não', 'Je ne sais pas.'], ['ne... jamais', 'nunca', 'Il ne boit jamais.'], ['ne... plus', 'não... mais', 'Elle ne fume plus.'],
      ['ne... rien', 'nada', 'Je ne vois rien.'], ['ne... personne', 'ninguém', 'Je ne connais personne.'], ['personne ne...', 'ninguém (sujeito)', 'Personne ne sait.']
    ] }],
    examples: [{ fr: "Je n'ai pas d'enfants.", pt: 'Não tenho filhos.' }, { fr: "Je n'ai rien compris.", pt: 'Não entendi nada.' }],
    ptComparison: {
      same: 'Como em português, "nunca, nada, ninguém" substituem o "não" simples.',
      different: 'O "pas" é obrigatório por escrito; na fala o "ne" cai: *je sais pas*. O português não tem esse segundo elemento.',
      commonErrors: [{ wrong: "Je n'ai pas un frère.", right: "Je n'ai pas de frère.", why: 'un → de na negação.' }, { wrong: 'Je ne sais.', right: 'Je ne sais pas.', why: 'Falta o pas.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"Não tenho tempo."', options: ["Je n'ai pas de temps.", "Je n'ai pas du temps.", "Je ne pas ai temps.", "Je n'ai temps pas."], answer: 0 },
      { type: 'multiple_choice', prompt: '"Ninguém está aqui."', options: ["Personne n'est ici.", "Personne est ici.", "Ne personne est ici.", "Personne ne pas est ici."], answer: 0 }
    ],
    related: ['partitive', 'questions', 'pronominal-verbs']
  });

  G({
    id: 'questions', category: 'negacao-interrogacao', level: 'A1', title: 'Fazer perguntas', titleFr: "L'interrogation",
    keywords: ['pergunta', 'est-ce que', 'inversão', 'qui que quoi', 'où quand comment pourquoi', 'combien', 'quel'],
    summaryPt: 'Entonação (Tu viens ?), est-ce que (Est-ce que tu viens ?) ou inversão formal (Viens-tu ?).',
    explanationPt: '**Três estilos:**\n\n' +
      '- **Entonação** (o mais comum na fala): *Tu viens ?*\n' +
      '- **Est-ce que**: *Est-ce que tu viens ?*\n' +
      '- **Inversão** (formal/escrita): *Viens-tu ?* — com *-t-* entre vogais: *Parle-t-il ?*\n\n' +
      '**Palavras interrogativas:** *qui* (quem), *que / quoi* (o quê), *où* (onde), *quand* (quando), *comment* (como), *pourquoi* (por quê), *combien* (quanto), *quel/quelle* (qual).\n\n' +
      'Na fala, a palavra interrogativa pode ir no fim: *Tu fais quoi ? Tu habites où ?*',
    tables: [{ caption: 'A mesma pergunta em três registros', head: ['informal', 'neutro', 'formal'], rows: [
      ['Tu habites où ?', 'Où est-ce que tu habites ?', 'Où habites-tu ?'], ['Vous voulez quoi ?', "Qu'est-ce que vous voulez ?", 'Que voulez-vous ?']
    ] }],
    examples: [{ fr: 'Comment tu t\'appelles ?', pt: 'Como você se chama?' }, { fr: "Qu'est-ce que tu fais ce soir ?", pt: 'O que você vai fazer hoje à noite?' }],
    ptComparison: {
      same: 'A pergunta só com entonação é igual ao português.',
      different: '"O quê" tem duas formas: *que* (antes do verbo) e *quoi* (depois do verbo ou sozinho).',
      commonErrors: [{ wrong: 'Quoi tu fais ?', right: 'Tu fais quoi ? / Que fais-tu ?', why: 'quoi vai depois do verbo.' }, { wrong: 'Parle il français ?', right: 'Parle-t-il français ?', why: 'Inversão com hífen e -t-.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"Onde você mora?" (informal)', options: ['Tu habites où ?', 'Où tu habites est-ce que ?', 'Habites où tu ?', 'Où habite-tu ?'], answer: 0 },
      { type: 'multiple_choice', prompt: '___ est-ce que tu fais ?', options: ["Qu'", 'Quoi', 'Quel', 'Qui'], answer: 0 }
    ],
    related: ['negation', 'tu-vous']
  });

  G({
    id: 'tu-vous', category: 'registros', level: 'A1', title: 'Tu ou vous?', titleFr: 'Tutoyer ou vouvoyer ?', faq: true,
    keywords: ['tu', 'vous', 'tutoyer', 'vouvoyer', 'formal', 'informal', 'senhor', 'você'],
    summaryPt: 'tu = informal (amigos, família, crianças, colegas jovens); vous = formal (desconhecidos, idosos, chefes) ou plural.',
    explanationPt: '- **tu**: família, amigos, crianças, colegas da mesma idade, redes sociais.\n' +
      '- **vous**: desconhecidos, lojas, administração, pessoas mais velhas, chefes (até ser convidado a tratar por tu).\n' +
      '- **vous** também é sempre o **plural** de tu.\n\n' +
      'Na dúvida, use **vous**: é melhor ser formal demais. Quando alguém propõe *On se tutoie ?*, você pode passar a usar tu.',
    tables: [{ caption: 'Situações', head: ['situação', 'pronome'], rows: [['padaria, loja', 'vous'], ['vizinha idosa', 'vous'], ['colega de apartamento', 'tu'], ['chefe (no começo)', 'vous'], ['grupo de amigos', 'vous (plural)']] }],
    examples: [{ fr: 'Bonjour madame, vous avez de la monnaie ?', pt: 'Bom dia, a senhora tem troco?' }, { fr: 'Salut Léa, tu viens ?', pt: 'Oi Léa, você vem?' }],
    ptComparison: {
      same: 'Equivale à diferença entre "você/tu" e "o senhor/a senhora".',
      different: 'Na França, o vous é muito mais usado do que o "senhor" no Brasil, inclusive entre adultos desconhecidos da mesma idade.',
      commonErrors: [{ wrong: 'Salut, tu as du pain ? (na padaria)', right: 'Bonjour, vous avez du pain ?', why: 'Com desconhecidos, vous.' }]
    },
    quiz: [{ type: 'multiple_choice', prompt: 'Falando com a recepcionista do hotel:', options: ['Vous pouvez m\'aider ?', 'Tu peux m\'aider ?'], answer: 0 }],
    related: ['subject-pronouns', 'questions']
  });
})();
