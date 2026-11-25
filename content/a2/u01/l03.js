LUX.registerLesson({
  id: 'a2-u01-l03', level: 'A2', unit: 1, order: 3,
  title: 'La famille de Léa', titlePt: 'A família de Léa',
  names: ['Lucas', 'Léa', 'Ana', 'Annecy', 'Michel', 'Sophie', 'Thomas', 'Genève', 'Mamie', 'Jeanne', 'Chloé', 'Montréal', 'Québec', 'France', 'Julien', 'Caramel'],
  objectives: [
    'Falar da família e usar os possessivos (mon, ma, mes, son, sa, ses).',
    'Usar a negação: ne... pas, ne... jamais, ne... plus, ne... rien, personne ne...',
    'Entender um e-mail pessoal.'
  ],
  vocabulary: [
    { fr: 'le père', pt: 'o pai', g: 'm', ex: 'Son père est boulanger.' },
    { fr: 'la mère', pt: 'a mãe', g: 'f', ex: 'Sa mère est professeure.' },
    { fr: 'le frère', pt: 'o irmão', g: 'm', ex: "Léa a un frère." },
    { fr: 'la sœur', pt: 'a irmã', g: 'f', ex: 'Ma sœur habite au Brésil.' },
    { fr: 'la grand-mère', pt: 'a avó', g: 'f', ex: 'Sa grand-mère a quatre-vingt-sept ans.' },
    { fr: 'le cousin / la cousine', pt: 'o primo / a prima', g: 'm', ex: 'Ma cousine vit à Montréal.' },
    { fr: 'les enfants', pt: 'os filhos, as crianças', g: 'm', ex: "Il n'a pas d'enfants." },
    { fr: 'marié(e)', pt: 'casado(a)', pos: 'adj', ex: 'Thomas est marié.' },
    { fr: 'le boulanger', pt: 'o padeiro', g: 'm', ex: 'Le boulanger se lève à quatre heures.' },
    { fr: 'ne... jamais', pt: 'nunca', pos: 'expr', ex: 'Elle ne regarde jamais la télé.' },
    { fr: 'ne... plus', pt: 'não... mais', pos: 'expr', ex: 'Il ne court plus.' },
    { fr: 'ne... rien', pt: 'nada', pos: 'expr', ex: 'Je ne comprends rien.' }
  ],
  reading: {
    genre: 'e-mail pessoal',
    title: 'Un e-mail de Lucas à sa sœur',
    text: "Salut Ana,\n\n" +
      "Comment vas-tu ? Tu veux pratiquer ton français, alors j'écris en français !\n\n" +
      "Ce week-end, je suis chez les parents de Léa, à Annecy. Sa famille est très sympa. Son père, Michel, est [[boulanger|padeiro]]. Il se lève à quatre heures tous les jours, mais il ne travaille pas le lundi. Sa mère, Sophie, est professeure de maths. Elle ne parle pas portugais, mais elle parle très bien espagnol, alors on se comprend un peu !\n\n" +
      "Léa a un frère, Thomas. Il a trente ans, il est marié, mais il n'a pas d'enfants. Il habite à Genève avec sa femme. Ils ne viennent pas ce week-end : ils travaillent.\n\n" +
      "Et il y a la grand-mère, Mamie Jeanne. Elle a quatre-vingt-sept ans ! Elle ne regarde jamais la télé, elle ne prend plus sa voiture, mais elle fait du vélo tous les jours.\n\n" +
      "Ici, personne ne mange vite : le déjeuner dure trois heures ! Je ne comprends pas tout, mais j'adore.\n\n" +
      "[[Gros bisous|beijos (despedida carinhosa)]] à papa et maman,\nLucas",
    exercises: [
      { type: 'multiple_choice', prompt: 'Quelle est la profession du père de Léa ?', options: ['Il est boulanger.', 'Il est professeur.', 'Il est infirmier.', 'Il est graphiste.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Sophie parle portugais.', answer: 'F', explanationPt: '"Elle ne parle pas portugais, mais elle parle très bien espagnol".' },
        { text: 'Thomas a deux enfants.', answer: 'F', explanationPt: '"il n\'a pas d\'enfants".' },
        { text: 'Thomas habite en Suisse.', answer: 'V', explanationPt: 'Genève (Genebra) fica na Suíça.' },
        { text: 'Mamie Jeanne fait du vélo.', answer: 'V', explanationPt: '"elle fait du vélo tous les jours".' },
        { text: 'Le père de Léa travaille le lundi.', answer: 'F', explanationPt: '"il ne travaille pas le lundi".' },
        { text: 'Ana habite à Lyon.', answer: 'NM', explanationPt: 'O e-mail não diz onde Ana mora.' }
      ] },
      { type: 'match', prompt: 'Ligue cada membro da família à tradução.', pairs: [
        ['le père', 'o pai'], ['la mère', 'a mãe'], ['le frère', 'o irmão'], ['la grand-mère', 'a avó'], ['la femme', 'a esposa'], ['les enfants', 'os filhos']
      ] },
      { type: 'multiple_choice', prompt: 'Pourquoi Thomas ne vient pas ce week-end ?', options: ['Il travaille.', 'Il est malade.', 'Il habite au Brésil.', "Il n'aime pas sa famille."], answer: 0,
        explanationPt: '"Ils ne viennent pas ce week-end : ils travaillent."' },
      { type: 'fill_blank', prompt: 'Complete com a negação do texto.', bank: ['jamais', 'plus', 'personne', 'rien'], items: [
        { text: 'Mamie Jeanne ne regarde ___ la télé.', answers: ['jamais'] },
        { text: 'Elle ne prend ___ sa voiture.', answers: ['plus'] },
        { text: 'Ici, ___ ne mange vite.', answers: ['personne'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Léa mostra fotos a Lucas',
    speakers: [{ id: 'L', name: 'Léa', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'L', text: "Regarde, c'est une photo de mon anniversaire. Là, c'est ma cousine Chloé." },
      { speaker: 'U', text: 'Elle habite à Lyon ?' },
      { speaker: 'L', text: "Non, elle n'habite pas en France. Elle vit à Montréal, au Québec." },
      { speaker: 'U', text: "Et le garçon à côté ? C'est ton frère ?" },
      { speaker: 'L', text: "Non, ce n'est pas mon frère, c'est mon cousin Julien. Il est très drôle, mais il ne parle jamais de son travail !" },
      { speaker: 'U', text: 'Ha ha ! Et le chien ?' },
      { speaker: 'L', text: "C'est Caramel, le chien de mes parents. Il a douze ans. Il ne court plus beaucoup, mais il mange toujours bien !" },
      { speaker: 'U', text: "Moi, je n'ai pas d'animaux. Mes parents ont seulement des plantes !" }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Où habite Chloé ?', options: ['À Montréal.', 'À Lyon.', 'À Genève.', 'À Annecy.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Julien est le frère de Léa.', answer: 'F', explanationPt: '"ce n\'est pas mon frère, c\'est mon cousin Julien".' },
        { text: 'Caramel a douze ans.', answer: 'V' },
        { text: 'Julien aime parler de son travail.', answer: 'F', explanationPt: '"il ne parle jamais de son travail".' },
        { text: 'Chloé est étudiante.', answer: 'NM', explanationPt: 'Não se fala da profissão de Chloé.' }
      ] },
      { type: 'dictation', text: "Elle n'habite pas en France." },
      { type: 'dictation', text: "Je n'ai pas d'animaux." },
      { type: 'listen_choose', audio: 'Il ne court plus beaucoup.', prompt: 'Ouça e escolha o que Léa diz sobre o cachorro.',
        options: ['Il ne court plus beaucoup.', 'Il court beaucoup.', 'Il ne court pas beaucoup.', 'Il ne court jamais.'], answer: 0,
        explanationPt: '"ne... plus" = não... mais: ele corria antes, agora não corre mais tanto.' }
    ]
  },
  grammar: {
    topicId: 'negation',
    title: 'A negação: ne... pas, jamais, plus, rien, personne',
    explanationPt: 'A negação francesa tem **duas partes** que "abraçam" o verbo: **ne + verbo + pas**.\n\n' +
      '- *ne... pas* = não → *Je ne travaille pas.*\n' +
      '- *ne... jamais* = nunca → *Elle ne regarde jamais la télé.*\n' +
      '- *ne... plus* = não... mais → *Il ne prend plus sa voiture.*\n' +
      '- *ne... rien* = nada → *Je ne comprends rien.*\n' +
      '- *personne ne...* = ninguém → *Personne ne mange vite.*\n\n' +
      '**Ne** vira **n\'** antes de vogal: *je n\'habite pas*.\n\n' +
      'Depois da negação, **un, une, des, du, de la** viram **de / d\'**: *J\'ai un frère → Je n\'ai pas de frère.*',
    table: { head: ['Afirmativa', 'Negativa'], rows: [
      ["J'ai une voiture.", "Je n'ai pas de voiture."], ['Il mange de la viande.', 'Il ne mange plus de viande.'],
      ["Elle a des enfants.", "Elle n'a pas d'enfants."], ["C'est mon frère.", "Ce n'est pas mon frère."]
    ] },
    examples: [
      { fr: 'Je ne parle pas allemand.', pt: 'Não falo alemão.' },
      { fr: "Nous n'avons jamais froid.", pt: 'Nunca sentimos frio.' },
      { fr: 'Il ne fume plus.', pt: 'Ele não fuma mais.' },
      { fr: 'Personne ne répond.', pt: 'Ninguém responde.' }
    ],
    ptComparison: 'Em português basta um "não" antes do verbo. Em francês, o **pas** é obrigatório na escrita: *je ne sais pas*.\n\n' +
      'Na fala informal, o francês costuma **sumir com o "ne"**: *je sais pas, c\'est pas vrai*. Reconheça ao ouvir, mas escreva sempre com o *ne*.\n\n' +
      'Cuidado com o "não... mais": *ne... plus* indica que algo parou (*il ne court plus* = ele não corre mais).'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Complete: « Je n\'ai pas ___ frère. »', options: ['de', 'un', 'du', 'le'], answer: 0,
      explanationPt: 'Depois da negação, "un" vira "de".' },
    { type: 'fill_blank', prompt: 'Complete com a palavra de negação indicada.', items: [
      { text: 'Il ne mange ___ de viande. (não... mais)', answers: ['plus'] },
      { text: 'Je ne comprends ___. (nada)', answers: ['rien'] },
      { text: '___ ne parle portugais ici. (ninguém)', answers: ['Personne'] },
      { text: 'Elle ne regarde ___ la télé. (nunca)', answers: ['jamais'] }
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Thomas n'a pas d'enfants.", translation: 'Thomas não tem filhos.' },
    { type: 'short_answer', prompt: 'Complete a resposta negativa: « Tu as une voiture ? » — « Non, je ___. »', answers: ["n'ai pas de voiture"],
      explanationPt: 'Une voiture → pas de voiture.' }
  ],
  tipForBrazilians: '**"Ma femme" e "mon mari":** *la femme* significa "a mulher" e também "a esposa". O marido é *le mari*. Outra armadilha: *les parents* são "os pais" (pai e mãe) **e também os parentes**. Para "parentes" em geral, diga *la famille*.'
});
