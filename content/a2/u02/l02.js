LUX.registerLesson({
  id: 'a2-u02-l02', level: 'A2', unit: 2, order: 2,
  title: 'Je suis allée à Genève', titlePt: 'Eu fui a Genebra',
  names: ['Léa', 'Lucas', 'Thomas', 'Clara', 'Annecy', 'Genève', 'Lyon', 'Part-Dieu', 'Léman', 'Suisse', 'Carouge', 'Suisses'],
  objectives: [
    'Contar uma viagem curta: ida, chegada, passeios e volta.',
    'Usar o passé composé com o auxiliar être (aller, venir, partir, arriver...).',
    'Fazer a concordância do particípio com o sujeito: elle est allée, ils sont partis.'
  ],
  vocabulary: [
    { fr: 'partir', pt: 'partir, ir embora, sair', pos: 'v', ex: 'Je suis partie à huit heures.' },
    { fr: 'arriver', pt: 'chegar', pos: 'v', ex: 'Le train est arrivé en retard.' },
    { fr: 'rester', pt: 'ficar, permanecer', pos: 'v', ex: 'Nous sommes restés deux jours.' },
    { fr: 'rentrer', pt: 'voltar (para casa)', pos: 'v', ex: 'Elle est rentrée dimanche soir.' },
    { fr: 'la gare', pt: 'a estação de trem', g: 'f', ex: 'La gare est à côté.' },
    { fr: 'le billet', pt: 'a passagem, o bilhete', g: 'm', d: true, ex: "J'ai acheté mon billet en ligne." },
    { fr: 'en retard', pt: 'atrasado', pos: 'expr', ex: 'Le train est en retard.' },
    { fr: "à l'heure", pt: 'na hora, pontual', pos: 'expr', ex: 'Le train est arrivé à l\'heure.' },
    { fr: 'le lac', pt: 'o lago', g: 'm', ex: 'On a marché au bord du lac.' },
    { fr: 'cher / chère', pt: 'caro(a)', pos: 'adj', ex: 'La Suisse est très chère.' },
    { fr: 'le neveu', pt: 'o sobrinho', g: 'm', ex: 'Mon neveu a deux mois.' },
    { fr: 'la nièce', pt: 'a sobrinha', g: 'f', ex: "J'ai une nièce et un neveu." }
  ],
  reading: {
    genre: 'mensagem longa',
    title: 'Message de Léa à Lucas',
    text: "Coucou Lucas !\n\n" +
      "Je suis bien rentrée de Genève hier soir, mais je suis épuisée ! Je te raconte tout.\n\n" +
      "Vendredi, je suis partie de la gare Part-Dieu à dix-huit heures. Le train est arrivé à Genève avec vingt minutes de retard, mais Thomas m'a attendue sur le quai. Nous sommes allés directement chez lui, et j'ai enfin vu ma [[nièce|sobrinha]], Clara : elle est née il y a trois semaines ! Elle est trop mignonne.\n\n" +
      "Samedi, Thomas et sa femme sont restés à la maison avec le bébé, alors je suis sortie seule. Je suis montée dans la vieille ville, puis je suis descendue jusqu'au lac Léman. J'ai aussi pris le tram pour Carouge, un quartier très joli. Le soir, ma mère est venue d'Annecy en voiture pour voir Clara. On a dîné tous ensemble.\n\n" +
      "Dimanche, nous sommes allés au parc avec la poussette. Je suis repartie à seize heures. Attention : la Suisse, c'est cher ! Un café coûte quatre francs suisses.\n\n" +
      "Bisous, à ce soir !\nLéa",
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi Léa est allée à Genève ?', options: ['Pour voir sa nièce, qui est née il y a trois semaines.', 'Pour travailler.', 'Pour visiter un musée.', "Pour l'anniversaire de sa mère."], answer: 0,
        explanationPt: 'Ela foi conhecer a sobrinha Clara, nascida há três semanas.' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: "Le train est arrivé à l'heure.", answer: 'F', explanationPt: 'Chegou com vinte minutos de atraso.' },
        { text: 'Samedi, Léa est sortie seule.', answer: 'V', explanationPt: '"je suis sortie seule".' },
        { text: 'La mère de Léa est venue en train.', answer: 'F', explanationPt: 'Ela veio de carro: "en voiture".' },
        { text: 'Léa a acheté un cadeau pour Clara.', answer: 'NM', explanationPt: 'A mensagem não fala de presente.' },
        { text: 'Léa trouve la Suisse chère.', answer: 'V', explanationPt: '"la Suisse, c\'est cher !"' }
      ] },
      { type: 'order_events', prompt: 'Coloque a viagem na ordem.', items: [
        'Léa part de la gare Part-Dieu.', 'Thomas attend Léa sur le quai.', 'Léa visite la vieille ville.', 'La mère de Léa arrive en voiture.', 'Ils vont au parc avec la poussette.', 'Léa rentre à Lyon.'
      ] },
      { type: 'fill_blank', prompt: 'Complete com o auxiliar e o particípio do texto.', bank: ['suis partie', 'est arrivé', 'sont restés', 'est née'], items: [
        { text: 'Je ___ de la gare Part-Dieu.', answers: ['suis partie'] },
        { text: 'Le train ___ avec vingt minutes de retard.', answers: ['est arrivé'] },
        { text: 'Thomas et sa femme ___ à la maison.', answers: ['sont restés'] },
        { text: 'Clara ___ il y a trois semaines.', answers: ['est née'] }
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Léa chega em casa',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Ah, te voilà ! Tu es arrivée quand ?' },
      { speaker: 'L', text: "Il y a une heure. Je suis passée au supermarché avant de rentrer." },
      { speaker: 'U', text: 'Alors, Genève ? Tu es allée voir le jet d\'eau ?' },
      { speaker: 'L', text: "Oui, bien sûr ! Et je suis montée dans la vieille ville. C'est magnifique." },
      { speaker: 'U', text: 'Et ta mère est venue aussi ?' },
      { speaker: 'L', text: 'Oui, elle est arrivée samedi soir et elle est repartie dimanche matin.' },
      { speaker: 'U', text: 'Et le bébé ?' },
      { speaker: 'L', text: 'Clara a beaucoup dormi… et beaucoup pleuré la nuit ! Je suis restée debout jusqu\'à deux heures avec Thomas.' },
      { speaker: 'U', text: 'Pauvre Léa ! Tu veux un thé ?' },
      { speaker: 'L', text: 'Avec plaisir. Et toi, tu es sorti ce week-end ?' },
      { speaker: 'U', text: 'Non, je suis resté ici. Je suis tombé malade samedi.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quand Léa est arrivée à la maison ?', options: ['Il y a une heure.', 'Samedi soir.', 'Dimanche matin.', 'Il y a deux heures.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Léa est passée au supermarché.', answer: 'V', explanationPt: '"Je suis passée au supermarché avant de rentrer."' },
        { text: 'La mère de Léa est restée jusqu\'à dimanche soir.', answer: 'F', explanationPt: 'Ela foi embora domingo de manhã.' },
        { text: 'Le bébé a pleuré la nuit.', answer: 'V', explanationPt: '"beaucoup pleuré la nuit".' },
        { text: 'Lucas est sorti avec Hugo.', answer: 'F', explanationPt: 'Ele ficou em casa porque ficou doente.' }
      ] },
      { type: 'listen_choose', audio: 'Je suis tombé malade samedi.', prompt: 'O que aconteceu com Lucas?',
        options: ['Ele ficou doente no sábado.', 'Ele caiu da bicicleta.', 'Ele trabalhou no sábado.', 'Ele viajou no sábado.'], answer: 0,
        explanationPt: '"tomber malade" = ficar doente (literalmente, "cair doente").' },
      { type: 'dictation', text: 'Tu es arrivée quand ?' },
      { type: 'dictation', text: 'Je suis restée debout jusqu\'à deux heures.' }
    ]
  },
  grammar: {
    topicId: 'passe-compose',
    title: 'Passé composé com être',
    explanationPt: 'Cerca de **15 verbos** (quase todos de **movimento** ou **mudança de estado**) usam **être** no passé composé, e não avoir:\n\n' +
      '*aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, passer, retourner* — e os derivados (*revenir, devenir, rentrer, repartir*).\n\n' +
      'Com être, o **particípio concorda com o sujeito**, como um adjetivo: **+e** no feminino, **+s** no plural.\n\n' +
      'Os **verbos pronominais** também usam être (veremos na próxima lição).',
    table: { head: ['', 'aller', 'partir'], rows: [
      ['je', 'suis allé(e)', 'suis parti(e)'], ['tu', 'es allé(e)', 'es parti(e)'], ['il / elle', 'est allé / allée', 'est parti / partie'],
      ['on', 'est allé(e)s', 'est parti(e)s'], ['nous', 'sommes allé(e)s', 'sommes parti(e)s'], ['vous', 'êtes allé(e)(s)', 'êtes parti(e)(s)'], ['ils / elles', 'sont allés / allées', 'sont partis / parties']
    ] },
    examples: [
      { fr: 'Léa est partie vendredi.', pt: 'A Léa partiu na sexta.' },
      { fr: 'Nous sommes arrivés en retard.', pt: 'Chegamos atrasados.' },
      { fr: 'Mes parents sont venus à Lyon.', pt: 'Meus pais vieram a Lyon.' },
      { fr: 'Elle est née en 1998.', pt: 'Ela nasceu em 1998.' }
    ],
    ptComparison: 'Português e francês já usaram "ser" como auxiliar ("são chegados os dias") — o francês manteve isso! Truque para lembrar: imagine uma **casa**: *naître* (nascer) → *entrer* → *monter* a escada → *tomber* → *sortir* → *partir*... → *mourir*.\n\n' +
      'Erro típico: ~~j\'ai allé~~ (por influência de "tenho ido"). O certo é **je suis allé(e)**. E a concordância é invisível na fala na maioria dos casos (*allé* e *allée* soam iguais), mas aparece na escrita.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue com être e faça a concordância.', items: [
      { text: 'Léa ___ à Genève. (aller)', answers: ['est allée'] },
      { text: 'Nous ___ à huit heures. (partir — Lucas e Hugo)', answers: ['sommes partis'] },
      { text: 'Mes sœurs ___ hier soir. (arriver)', answers: ['sont arrivées'] },
      { text: 'Il ___ à la maison. (rester)', answers: ['est resté'] },
      { text: 'Tu ___ quand, Léa ? (rentrer)', answers: ['es rentrée'] },
      { text: 'Elle ___ dans l\'escalier. (tomber)', answers: ['est tombée'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual verbo usa ÊTRE no passé composé?', options: ['venir', 'manger', 'acheter', 'visiter'], answer: 0,
      explanationPt: 'venir → je suis venu(e). Os outros usam avoir.' },
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ['Elles sont sorties hier soir.', 'Elles ont sorti hier soir.', 'Elles sont sorti hier soir.', 'Elles sont sortis hier soir.'], answer: 0,
      explanationPt: 'Sujeito feminino plural → particípio com -es: sorties.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Ma mère est venue en voiture.', translation: 'Minha mãe veio de carro.' },
    { type: 'match', prompt: 'Ligue o verbo ao particípio.', pairs: [['naître', 'né'], ['mourir', 'mort'], ['venir', 'venu'], ['descendre', 'descendu'], ['sortir', 'sorti']] }
  ],
  tipForBrazilians: '**"Il y a" = "há" (tempo atrás).** *Elle est née il y a trois semaines* = ela nasceu há três semanas. A ordem é a mesma do português: **il y a + tempo**. Não confunda com *depuis* (desde/há, para algo que continua): *J\'habite à Lyon depuis deux mois* = moro em Lyon há dois meses (e continuo morando).'
});
