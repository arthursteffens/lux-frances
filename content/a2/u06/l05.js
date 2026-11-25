LUX.registerLesson({
  id: 'a2-u06-l05', level: 'A2', unit: 6, order: 5, review: true,
  title: 'Un an à Lyon', titlePt: 'Um ano em Lyon (revisão da unidade e do A2)',
  names: ['Lucas', 'Léa', 'Hugo', 'Inès', 'Camille', 'Mme', 'Bernard', 'Ana', 'Lyon', 'Croix-Rousse', 'Brésil', 'Belo Horizonte', 'Fourvière', 'Marseille', 'Annecy', 'Alpes', 'B1', 'Lumière', 'Part-Dieu'],
  objectives: [
    'Fazer um balanço: o que você fez, como era, o que vai fazer.',
    'Combinar passé composé, imparfait, presente e futuro num mesmo texto.',
    'Revisar os pronomes le, la, les, lui, leur, y e en.'
  ],
  vocabulary: [
    { fr: 'le bilan', pt: 'o balanço', g: 'm', ex: 'Faisons le bilan de l\'année.' },
    { fr: "l'anniversaire", pt: 'o aniversário', g: 'm', ex: 'Joyeux anniversaire !' },
    { fr: 'au début', pt: 'no começo', pos: 'expr', ex: "Au début, je ne comprenais rien." },
    { fr: 'grâce à', pt: 'graças a', pos: 'prep', ex: 'Grâce à vous, je me sens chez moi.' },
    { fr: 'se sentir', pt: 'sentir-se', pos: 'v', ex: 'Je me sens bien ici.' },
    { fr: 'remercier', pt: 'agradecer', pos: 'v', ex: 'Je voudrais vous remercier.' },
    { fr: 'lever son verre', pt: 'erguer o copo (brindar)', pos: 'expr', ex: 'Levons nos verres !' },
    { fr: 'Santé !', pt: 'Saúde! (no brinde)', pos: 'expr', ex: 'À Léa ! Santé !' },
    { fr: 'la nostalgie', pt: 'a saudade, a nostalgia', g: 'f', ex: "J'ai un peu de nostalgie du Brésil." },
    { fr: 'fier / fière', pt: 'orgulhoso(a)', pos: 'adj', ex: 'Je suis fier de mes progrès.' },
    { fr: 'les progrès', pt: 'o progresso', g: 'm', d: true, ex: 'Tu as fait beaucoup de progrès !' },
    { fr: 'la suite', pt: 'a continuação, o que vem depois', g: 'f', ex: 'Et la suite ? On verra !' }
  ],
  reading: {
    genre: 'post de blog',
    title: 'Le blog de Lucas — Un an à Lyon : le bilan',
    text: "Il y a exactement un an, je suis arrivé à la gare Part-Dieu avec deux valises et beaucoup de peur. Je ne connaissais personne, je comprenais un mot sur trois et je ne savais pas commander un café sans rougir.\n\n" +
      "Au début, c'était difficile. Il pleuvait, les gens parlaient vite, et le soir, j'avais la nostalgie du Brésil. Puis j'ai rencontré Léa, ma colocataire. Elle m'a présenté ses amis, et ils sont devenus les miens. Hugo m'a fait découvrir les bouchons, Camille m'a aidé au travail, et Mme Bernard, ma voisine, m'a appris l'histoire du quartier.\n\n" +
      "Qu'est-ce que j'ai fait cette année ? Je suis monté à Fourvière une dizaine de fois, je suis allé à Marseille avec ma sœur, à Annecy chez les parents de Léa, et j'ai fait du ski dans les Alpes (sans me casser le bras, contrairement à Hugo !). J'ai mangé de la raclette, des quenelles et beaucoup trop de tartes aux pralines.\n\n" +
      "Et le français ? Je le parle tous les jours maintenant. Je fais encore des erreurs, mais mes amis ne les corrigent plus : ils disent que mon accent est charmant.\n\n" +
      "Et la suite ? L'année prochaine, je vais commencer le niveau B1. Je resterai à Lyon, c'est sûr. J'y suis chez moi. Et un jour, peut-être, j'écrirai ce blog entièrement en français… Ah, mais c'est déjà le cas !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment était Lucas quand il est arrivé ?', options: ['Il avait peur et il comprenait peu.', 'Il parlait déjà très bien.', 'Il connaissait beaucoup de monde.', 'Il était en vacances.'], answer: 0 },
      { type: 'match', prompt: 'O que cada pessoa fez por Lucas?', pairs: [['Léa', 'lui a présenté ses amis'], ['Hugo', 'lui a fait découvrir les bouchons'], ['Camille', "l'a aidé au travail"], ['Mme Bernard', "lui a appris l'histoire du quartier"]] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas s\'est cassé le bras au ski.', answer: 'F', explanationPt: '"sans me casser le bras, contrairement à Hugo".' },
        { text: 'Lucas est allé à Marseille avec sa sœur.', answer: 'V', explanationPt: '"je suis allé à Marseille avec ma sœur".' },
        { text: 'Les amis de Lucas corrigent encore ses erreurs.', answer: 'F', explanationPt: '"mes amis ne les corrigent plus".' },
        { text: 'Lucas va changer de travail.', answer: 'NM', explanationPt: 'O texto não fala disso.' },
        { text: 'Lucas veut rester à Lyon.', answer: 'V', explanationPt: '"Je resterai à Lyon, c\'est sûr."' }
      ] },
      { type: 'multiple_choice', prompt: 'Dans « J\'y suis chez moi », « y » remplace :', options: ['à Lyon', 'au Brésil', 'à Fourvière', 'à la gare'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Dans « mes amis ne les corrigent plus », « les » remplace :', options: ['mes erreurs', 'mes amis', 'les tartes', 'les valises'], answer: 0 }
    ]
  },
  listening: {
    genre: 'discurso de brinde',
    title: 'O brinde de Lucas na festa',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }, { id: 'H', name: 'Hugo', gender: 'm' }],
    script: [
      { speaker: 'H', text: 'Chut ! Silence, tout le monde ! Lucas va faire un discours.' },
      { speaker: 'U', text: "Merci. Alors… Il y a un an, je ne connaissais pas Léa. Aujourd'hui, c'est ma meilleure amie en France." },
      { speaker: 'U', text: "Léa, quand je suis arrivé, tu m'as tout montré : le marché, les quais, la boulangerie… Tu m'as même appris à dire « bistanclaque » !" },
      { speaker: 'U', text: "Ce soir, on a voulu te faire une surprise. On t'a préparé un cadeau. Hugo, tu le lui donnes ?" },
      { speaker: 'H', text: "Voilà, Léa. Ouvre-le !" },
      { speaker: 'L', text: "Un livre sur les Alpes… et une enveloppe ? Oh ! Un week-end dans un refuge ! Mais… et mon travail ?" },
      { speaker: 'U', text: "Ne t'inquiète pas, on a parlé à ta cheffe. Elle t'a donné ton samedi." },
      { speaker: 'L', text: "Vous êtes incroyables… Je ne sais pas quoi dire. Merci, merci à tous !" },
      { speaker: 'U', text: "Alors, levons nos verres. À Léa, à ses vingt-sept ans, et à la Croix-Rousse ! Santé !" },
      { speaker: 'H', text: 'Santé ! Et maintenant… on descend écouter les concerts !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Qui donne le cadeau à Léa ?', options: ['Hugo.', 'Lucas.', 'Camille.', 'Mme Bernard.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Léa a montré le marché et les quais à Lucas.', answer: 'V', explanationPt: '"tu m\'as tout montré : le marché, les quais…"' },
        { text: 'Le cadeau est un voyage à Marseille.', answer: 'F', explanationPt: 'É um fim de semana num refúgio de montanha (e um livro sobre os Alpes).' },
        { text: 'La cheffe de Léa lui a donné son samedi.', answer: 'V', explanationPt: '"Elle t\'a donné ton samedi."' },
        { text: 'Léa pleure de joie.', answer: 'NM', explanationPt: 'Ela fica emocionada, mas não se diz que chora.' }
      ] },
      { type: 'listen_choose', audio: 'Je ne sais pas quoi dire.', prompt: 'O que Léa diz?',
        options: ['Não sei o que dizer.', 'Não sei por que dizer.', 'Não quero dizer nada.', 'Não entendi o que você disse.'], answer: 0 },
      { type: 'dictation', text: "Ne t'inquiète pas, on a parlé à ta cheffe." },
      { type: 'dictation', text: 'Alors, levons nos verres.' }
    ]
  },
  grammar: {
    topicId: 'cod-coi',
    title: 'Revisão do A2: tempos e pronomes',
    explanationPt: '**Os tempos que você domina agora:**\n- **présent** — hoje, hábitos: *Je parle français tous les jours.*\n- **passé composé** — ações concluídas: *J\'ai rencontré Léa.*\n- **imparfait** — descrições e hábitos no passado: *Au début, c\'était difficile.*\n- **futur proche** — planos próximos: *Je vais commencer le B1.*\n- **futur simple** — projetos, previsões, promessas: *Je resterai à Lyon.*\n\n' +
      '**Os pronomes:**\n- **le, la, les** substituem o objeto direto: *Je **le** parle.* (le français)\n- **lui, leur** substituem *à + pessoa*: *Hugo **lui** donne le cadeau.* (à Léa)\n- **y** substitui um lugar: *J\'**y** suis chez moi.* (à Lyon)\n- **en** substitui *de + coisa* ou uma quantidade: *J\'**en** ai mangé beaucoup.*\n\n' +
      '**Dois pronomes juntos** (você verá em detalhe no B1): a ordem é *me/te/nous/vous → le/la/les → lui/leur → y → en*: *Tu **le lui** donnes ?* (o presente, para ela)',
    table: { head: ['pronome', 'substitui', 'exemplo'], rows: [
      ['le, la, les', 'objeto direto', 'Le cadeau ? Je le prends.'], ['lui, leur', 'à + pessoa', 'Léa ? Je lui téléphone.'],
      ['y', 'à / en / chez + lugar', 'Lyon ? J\'y habite.'], ['en', 'de + coisa / quantidade', 'Du café ? J\'en veux.']
    ] },
    examples: [
      { fr: "Il y a un an, je ne connaissais personne.", pt: 'Há um ano eu não conhecia ninguém.' },
      { fr: "Elle m'a présenté ses amis.", pt: 'Ela me apresentou os amigos dela.' },
      { fr: "L'année prochaine, je vais commencer le B1.", pt: 'Ano que vem vou começar o B1.' },
      { fr: 'Tu le lui donnes ?', pt: 'Você dá (o presente) para ela?' }
    ],
    ptComparison: '**Parabéns!** Você chegou ao fim do A2. Repare como em francês os pronomes ficam quase sempre **antes do verbo** — exatamente o contrário do português falado ("vi ela", "dei pra ele"). Se você já diz *je l\'ai vue* e *je lui ai donné* sem pensar, está pronto para o B1.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no tempo adequado.', items: [
      { text: "Quand j'étais petit, je ___ (habiter) à Belo Horizonte.", answers: ['habitais'] },
      { text: 'Hier, nous ___ (aller) à Fourvière.', answers: ['sommes allés', 'sommes allées'] },
      { text: 'Demain, il ___ (faire) beau.', answers: ['fera', 'va faire'] },
      { text: "Je ___ (dormir) quand le téléphone a sonné.", answers: ['dormais'] },
      { text: 'Maintenant, je ___ (comprendre) presque tout.', answers: ['comprends'] }
    ] },
    { type: 'fill_blank', prompt: 'Complete com le, la, les, lui, leur, y ou en.', bank: ['le', 'la', 'les', 'lui', 'leur', 'y', 'en'], items: [
      { text: 'Tu connais Mme Bernard ? — Oui, je ___ connais bien.', answers: ['la'] },
      { text: 'Tu as parlé à tes parents ? — Oui, je ___ ai parlé hier.', answers: ['leur'] },
      { text: 'Tu vas à Annecy ? — Oui, j\'___ vais samedi.', answers: ['y'] },
      { text: 'Tu veux des tartes ? — Oui, j\'___ veux deux.', answers: ['en'] },
      { text: 'Tu as écrit à Léa ? — Oui, je ___ ai écrit.', answers: ['lui'] }
    ] },
    { type: 'multiple_choice', prompt: '"Há um ano, eu morava no Brasil."', options: ["Il y a un an, j'habitais au Brésil.", "Depuis un an, j'ai habité au Brésil.", "Il y a un an, j'habite au Brésil.", "Pendant un an, j'habitais en Brésil."], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Un jour, je parlerai parfaitement français.', translation: 'Um dia, falarei francês perfeitamente.' }
  ],
  tipForBrazilians: '**Brindes à francesa:** diga *Santé !* ou *À la tienne / À la vôtre !* (à sua!) e **olhe nos olhos** da pessoa ao tocar os copos — dizem que quem não olha tem sete anos de azar. E "parabéns pelo aniversário" é *Joyeux anniversaire !* (a canção também: *Joyeux anniversaire, nos vœux les plus sincères…*). **Bravo, você terminou o A2! Agora faça o teste de nível.** 🎓'
});
