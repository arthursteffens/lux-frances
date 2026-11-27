LUX.registerLesson({
  id: 'a2-u02-l01', level: 'A2', unit: 2, order: 1,
  title: "Qu'est-ce que tu as fait samedi ?", titlePt: 'O que você fez no sábado?',
  names: ['Lucas', 'Léa', 'Hugo', 'Camille', 'Lyon', 'Saône', 'Croix-Rousse', 'Paul', 'Bocuse', 'Halles', 'Fourvière'],
  objectives: [
    'Contar o que você fez no fim de semana.',
    'Formar o passé composé com o auxiliar avoir (verbos regulares).',
    'Reconhecer marcadores de tempo no passado: hier, samedi dernier, ce matin.'
  ],
  vocabulary: [
    { fr: 'hier', pt: 'ontem', pos: 'adv', ex: "Hier, j'ai beaucoup travaillé." },
    { fr: 'samedi dernier', pt: 'sábado passado', pos: 'expr', ex: "Samedi dernier, j'ai visité un musée." },
    { fr: 'le marché', pt: 'a feira, o mercado', g: 'm', ex: 'Le marché ouvre à sept heures.' },
    { fr: 'les quais', pt: 'as margens (do rio)', g: 'm', ex: 'On a marché sur les quais de Saône.' },
    { fr: 'la balade', pt: 'o passeio', g: 'f', ex: 'On a fait une balade à vélo.' },
    { fr: 'déjeuner', pt: 'almoçar', pos: 'v', ex: 'Nous avons déjeuné au restaurant.' },
    { fr: 'acheter', pt: 'comprar', pos: 'v', ex: "J'ai acheté des fleurs." },
    { fr: 'oublier', pt: 'esquecer', pos: 'v', ex: "J'ai oublié mon parapluie." },
    { fr: 'la soirée', pt: 'a noite, a festa', g: 'f', ex: 'On a passé une bonne soirée.' },
    { fr: 'fatigué(e)', pt: 'cansado(a)', pos: 'adj', ex: 'Je suis fatigué ce matin.' },
    { fr: 'ensemble', pt: 'juntos', pos: 'adv', ex: 'Nous avons mangé ensemble.' },
    { fr: "Ça s'est bien passé ?", pt: 'Foi tudo bem?', pos: 'expr', ex: "Ton week-end, ça s'est bien passé ?" }
  ],
  reading: {
    genre: 'diário pessoal',
    title: 'Le carnet de Lucas — samedi 12 octobre',
    text: "Quelle journée ! Ce matin, j'ai mal dormi à cause des voisins, mais j'ai quand même retrouvé Hugo à neuf heures au [[marché|feira]] de la Croix-Rousse. Nous avons acheté du fromage, des pommes et du pain. Hugo a parlé avec tous les commerçants : il connaît tout le monde !\n\n" +
      "Ensuite, nous avons marché le long des [[quais|margens do rio]] de Saône. Il a fait beau toute la journée. À midi, nous avons déjeuné dans un petit restaurant près des Halles Paul Bocuse. J'ai goûté une [[quenelle|bolinho de peixe típico de Lyon]] pour la première fois. Franchement, j'ai adoré !\n\n" +
      "L'après-midi, nous avons visité la basilique de Fourvière. Nous avons pris beaucoup de photos de la ville. Hugo a [[cherché|procurou]] son téléphone pendant dix minutes… il était dans sa poche !\n\n" +
      "Le soir, Léa a préparé une soupe et nous avons regardé un film ensemble. J'ai bien rigolé, mais à onze heures j'étais très fatigué. Bilan de la journée : j'ai parlé français pendant huit heures. Pas mal !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Où Lucas a retrouvé Hugo le matin ?', options: ['Au marché de la Croix-Rousse.', 'À la basilique de Fourvière.', 'Aux Halles Paul Bocuse.', 'Chez Léa.'], answer: 0,
        explanationPt: '"j\'ai retrouvé Hugo à neuf heures au marché de la Croix-Rousse".' },
      { type: 'order_events', prompt: 'Coloque o dia de Lucas na ordem certa.', items: [
        'Lucas et Hugo achètent du fromage au marché.', 'Ils marchent le long des quais.', 'Ils déjeunent près des Halles.', 'Ils visitent la basilique de Fourvière.', 'Ils regardent un film avec Léa.'
      ] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Lucas a bien dormi.', answer: 'F', explanationPt: '"j\'ai mal dormi à cause des voisins".' },
        { text: 'Il a plu samedi.', answer: 'F', explanationPt: '"Il a fait beau toute la journée."' },
        { text: 'Lucas a aimé la quenelle.', answer: 'V', explanationPt: '"Franchement, j\'ai adoré !"' },
        { text: 'Hugo a perdu son téléphone dans le restaurant.', answer: 'F', explanationPt: 'O celular estava no bolso dele o tempo todo.' },
        { text: 'Léa a travaillé samedi.', answer: 'NM', explanationPt: 'O texto só diz que ela fez uma sopa à noite.' }
      ] },
      { type: 'multiple_choice', prompt: 'Qui a préparé le dîner ?', options: ['Léa.', 'Hugo.', 'Lucas.', 'Le restaurant.'], answer: 0,
        explanationPt: '"Le soir, Léa a préparé une soupe".' },
      { type: 'fill_blank', prompt: 'Complete com o passé composé usado no texto.', bank: ['avons acheté', 'avons déjeuné', 'a parlé', 'avons regardé'], items: [
        { text: 'Nous ___ du fromage et du pain.', answers: ['avons acheté'] },
        { text: 'À midi, nous ___ près des Halles.', answers: ['avons déjeuné'] },
        { text: 'Hugo ___ avec tous les commerçants.', answers: ['a parlé'] },
        { text: 'Nous ___ un film ensemble.', answers: ['avons regardé'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Segunda-feira de manhã na agência',
    speakers: [{ id: 'C', name: 'Camille', gender: 'f' }, { id: 'L', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'C', text: 'Salut Lucas ! Ça va ? Ton week-end, ça s\'est bien passé ?' },
      { speaker: 'L', text: 'Très bien, merci ! Samedi, j\'ai visité Fourvière avec Hugo.' },
      { speaker: 'C', text: 'Ah, super ! Et dimanche ?' },
      { speaker: 'L', text: 'Dimanche, j\'ai dormi jusqu\'à midi, et puis j\'ai travaillé un peu sur le projet.' },
      { speaker: 'C', text: 'Tu as travaillé le dimanche ? Tu es fou !' },
      { speaker: 'L', text: 'Juste deux heures. Et toi, qu\'est-ce que tu as fait ?' },
      { speaker: 'C', text: 'Moi, j\'ai joué au tennis samedi matin, et le soir, on a fêté l\'anniversaire de ma sœur.' },
      { speaker: 'L', text: 'Elle a quel âge ?' },
      { speaker: 'C', text: 'Trente ans. On a mangé, on a dansé… je suis un peu fatiguée ce matin !' },
      { speaker: 'L', text: 'Alors, un grand café pour toi ?' },
      { speaker: 'C', text: 'Oh oui, merci !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: "Qu'est-ce que Lucas a fait dimanche ?", options: ['Il a dormi tard et il a travaillé un peu.', 'Il a joué au tennis.', 'Il a visité Fourvière.', "Il a fêté l'anniversaire de sa sœur."], answer: 0,
        explanationPt: '"j\'ai dormi jusqu\'à midi, et puis j\'ai travaillé un peu".' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Camille a joué au tennis samedi matin.', answer: 'V', explanationPt: '"j\'ai joué au tennis samedi matin".' },
        { text: 'La sœur de Camille a vingt ans.', answer: 'F', explanationPt: 'Ela fez trinta anos (trente ans).' },
        { text: 'Lucas a travaillé six heures dimanche.', answer: 'F', explanationPt: '"Juste deux heures."' },
        { text: 'Camille boit du thé le matin.', answer: 'NM', explanationPt: 'Lucas oferece um café; não se fala de chá.' }
      ] },
      { type: 'listen_choose', audio: 'Ton week-end, ça s\'est bien passé ?', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Ton week-end, ça s\'est bien passé ?', 'Ton week-end, ça se passe bien ?', 'Tu as passé un bon week-end ?', 'Ton week-end, c\'est bien passé ?'], answer: 0 },
      { type: 'dictation', text: "Samedi, j'ai visité Fourvière avec Hugo." },
      { type: 'dictation', text: "On a mangé, on a dansé." }
    ]
  },
  grammar: {
    topicId: 'passe-compose',
    title: 'Passé composé com avoir',
    explanationPt: 'O **passé composé** conta ações **terminadas** no passado: o que você fez ontem, no fim de semana, em 2019.\n\n' +
      'Forma: **avoir no presente + particípio passado**. *J\'ai mangé* = comi / eu comi.\n\n' +
      'Particípio dos verbos regulares:\n- **-er → -é**: parler → *parlé*, manger → *mangé*\n- **-ir (2º grupo) → -i**: finir → *fini*, choisir → *choisi*\n- **-re → -u**: attendre → *attendu*, vendre → *vendu*',
    table: { head: ['', 'avoir', 'parler', 'finir', 'attendre'], rows: [
      ['je / j\'', 'ai', 'ai parlé', 'ai fini', 'ai attendu'], ['tu', 'as', 'as parlé', 'as fini', 'as attendu'], ['il / elle / on', 'a', 'a parlé', 'a fini', 'a attendu'],
      ['nous', 'avons', 'avons parlé', 'avons fini', 'avons attendu'], ['vous', 'avez', 'avez parlé', 'avez fini', 'avez attendu'], ['ils / elles', 'ont', 'ont parlé', 'ont fini', 'ont attendu']
    ] },
    examples: [
      { fr: "Hier, j'ai travaillé jusqu'à vingt heures.", pt: 'Ontem trabalhei até as 20h.' },
      { fr: 'Nous avons choisi un restaurant italien.', pt: 'Escolhemos um restaurante italiano.' },
      { fr: "Tu as attendu le bus longtemps ?", pt: 'Você esperou muito o ônibus?' },
      { fr: 'On a fini le projet.', pt: 'A gente terminou o projeto.' }
    ],
    ptComparison: 'Em português, o pretérito perfeito é **uma palavra só** (*comi, falei*). Em francês, são **duas**: o auxiliar e o particípio. Não esqueça o auxiliar: *j\'ai mangé*, nunca ~~je mangé~~.\n\n' +
      'Cuidado: *j\'ai mangé* pode corresponder a "comi" **e** a "tenho comido"/"já comi". O francês falado quase não usa o passé simple: o passé composé é **o** passado do dia a dia.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no passé composé (com avoir).', items: [
      { text: "Hier, j'___ mes clés. (oublier)", answers: ['ai oublié'] },
      { text: 'Nous ___ le train de huit heures. (attendre)', answers: ['avons attendu'] },
      { text: 'Tu ___ ton travail ? (finir)', answers: ['as fini'] },
      { text: 'Elles ___ des chaussures. (acheter)', answers: ['ont acheté'] },
      { text: 'Vous ___ le dessert ? (choisir)', answers: ['avez choisi'] },
      { text: 'Il ___ avec sa mère au téléphone. (parler)', answers: ['a parlé'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual é o particípio passado de "vendre"?', options: ['vendu', 'vendé', 'vendi', 'vendre'], answer: 0,
      explanationPt: 'Verbos em -re formam o particípio em -u:\n- **vendre** → vendu\n- **attendre** → attendu\n- **répondre** → répondu' },
    { type: 'match', prompt: 'Ligue o infinitivo ao particípio.', pairs: [['manger', 'mangé'], ['grandir', 'grandi'], ['perdre', 'perdu'], ['écouter', 'écouté'], ['réussir', 'réussi']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Samedi dernier, nous avons visité un musée.', translation: 'Sábado passado, visitamos um museu.' },
    { type: 'multiple_choice', prompt: 'Como se diz "Ontem eu almocei com a Léa"?', options: ["Hier, j'ai déjeuné avec Léa.", 'Hier, je déjeuné avec Léa.', "Hier, j'ai déjeuner avec Léa.", 'Hier, je suis déjeuné avec Léa.'], answer: 0,
      explanationPt: 'Auxiliar avoir (j\'ai) + particípio em -é (déjeuné).' }
  ],
  tipForBrazilians: '**-é, -er, -ez soam iguais!** *parlé, parler, parlez* têm a mesma pronúncia ([e]). Na escrita, faça o teste: troque por um verbo do 3º grupo, como *vendre*. Se couber *vendu*, escreva **-é** (*j\'ai parlé* → *j\'ai vendu*); se couber *vendre*, escreva **-er** (*je vais parler* → *je vais vendre*).'
});
