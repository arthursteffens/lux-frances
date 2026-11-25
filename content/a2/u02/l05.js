LUX.registerLesson({
  id: 'a2-u02-l05', level: 'A2', unit: 2, order: 5, review: true,
  title: 'Le vide-grenier de la Croix-Rousse', titlePt: 'A feira de usados da Croix-Rousse (revisão da unidade)',
  names: ['Croix-Rousse', 'Gazette', 'Bernard', 'Lucas', 'Lyon', 'Radio', 'Rhône', 'Gerland', 'Olympique', 'Lyonnais', 'OL', 'Marseille', 'Lumière', 'Hugo', 'Ferreira', 'Bellecour', 'Urban', 'Trail', 'Victor'],
  objectives: [
    'Revisar o passé composé com avoir e être num texto mais longo.',
    'Entender um boletim curto de notícias locais no rádio.',
    'Escolher o auxiliar certo e fazer a concordância sem ajuda.'
  ],
  vocabulary: [
    { fr: 'le vide-grenier', pt: 'a feira de usados (de garagem)', g: 'm', ex: 'Il y a un vide-grenier dimanche.' },
    { fr: 'vendre', pt: 'vender', pos: 'v', ex: "J'ai vendu mon vieux vélo." },
    { fr: "l'objet", pt: 'o objeto', g: 'm', ex: 'Elle a vendu beaucoup d\'objets.' },
    { fr: 'le stand', pt: 'a barraca, o estande', g: 'm', ex: 'Mon stand est à côté de la fontaine.' },
    { fr: "l'habitant / l'habitante", pt: 'o(a) morador(a)', g: 'mf', ex: 'Les habitants du quartier sont venus.' },
    { fr: 'le monde', pt: 'o mundo; as pessoas', g: 'm', n: '"Il y a du monde" = está cheio de gente.', ex: "Il y a eu beaucoup de monde." },
    { fr: 'gagner', pt: 'ganhar', pos: 'v', ex: "L'OL a gagné le match." },
    { fr: 'le match', pt: 'a partida, o jogo', g: 'm', d: true, ex: 'Le match a commencé à vingt heures.' },
    { fr: "l'accident", pt: 'o acidente', g: 'm', ex: "Il n'y a pas eu d'accident." },
    { fr: 'la circulation', pt: 'o trânsito', g: 'f', ex: 'La circulation a été difficile.' },
    { fr: 'grâce à', pt: 'graças a', pos: 'prep', ex: 'Grâce à toi, j\'ai trouvé un appartement.' },
    { fr: 'environ', pt: 'cerca de, aproximadamente', pos: 'adv', ex: 'Environ deux mille personnes sont venues.' }
  ],
  reading: {
    genre: 'artigo de jornal de bairro',
    title: 'La Gazette de la Croix-Rousse — Un dimanche au vide-grenier',
    text: "Dimanche dernier, le grand [[vide-grenier|feira de usados]] du boulevard de la Croix-Rousse a [[eu lieu|aconteceu]] sous un beau soleil. Environ trois cents habitants ont installé leur stand dès six heures du matin, et des milliers de visiteurs sont venus de toute la ville.\n\n" +
      "Madame Bernard, quatre-vingt-un ans, a participé pour la vingtième fois. « Cette année, j'ai vendu des livres, de la vaisselle et les vieux jouets de mes petits-enfants. Je n'ai pas gagné beaucoup d'argent, mais j'ai rencontré des gens charmants. Un jeune Brésilien, mon voisin, est venu m'aider. Il a porté toutes mes boîtes ! »\n\n" +
      "Ce jeune voisin, c'est Lucas Ferreira, graphiste. « Je ne suis jamais allé à un vide-grenier au Brésil, ça n'existe pas vraiment chez nous. J'ai acheté une vieille lampe pour deux euros et un appareil photo des années soixante-dix pour quinze euros. Il marche encore ! »\n\n" +
      "Tout ne s'est pas bien passé : vers midi, un enfant s'est perdu dans la foule. Heureusement, ses parents l'ont retrouvé dix minutes plus tard près de la fontaine. Les organisateurs sont satisfaits : « Nous n'avons jamais vu autant de monde. » Rendez-vous au printemps !",
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de stands il y a eu au vide-grenier ?', options: ['Environ trois cents.', 'Environ trois mille.', 'Vingt.', 'Soixante-dix.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il a plu dimanche.', answer: 'F', explanationPt: '"sous un beau soleil".' },
        { text: 'Madame Bernard a participé pour la première fois.', answer: 'F', explanationPt: 'Foi a vigésima vez (pour la vingtième fois).' },
        { text: "Lucas a déjà fait des vide-greniers au Brésil.", answer: 'F', explanationPt: '"Je ne suis jamais allé à un vide-grenier au Brésil".' },
        { text: "L'appareil photo de Lucas fonctionne.", answer: 'V', explanationPt: '"Il marche encore !" (marcher = funcionar, para aparelhos).' },
        { text: 'Madame Bernard a vendu des vêtements.', answer: 'NM', explanationPt: 'Ela vendeu livros, louça e brinquedos; roupas não são citadas.' }
      ] },
      { type: 'multiple_choice', prompt: "Qu'est-ce qui s'est passé vers midi ?", options: ["Un enfant s'est perdu.", 'Il y a eu un accident.', 'Le vide-grenier a fermé.', 'Lucas a perdu son appareil photo.'], answer: 0 },
      { type: 'match', prompt: 'Ligue cada objeto ao preço ou à pessoa.', pairs: [['la vieille lampe', 'deux euros'], ["l'appareil photo", 'quinze euros'], ['les vieux jouets', 'Madame Bernard'], ['les boîtes', 'Lucas les a portées']] },
      { type: 'fill_blank', prompt: 'Avoir ou être? Complete com o auxiliar no presente.', bank: ['ont', 'sont', 'a', 'est', 'suis'], items: [
        { text: 'Des milliers de visiteurs ___ venus.', answers: ['sont'] },
        { text: 'Trois cents habitants ___ installé leur stand.', answers: ['ont'] },
        { text: 'Un enfant s\'___ perdu.', answers: ['est'] },
        { text: 'Je ne ___ jamais allé à un vide-grenier.', answers: ['suis'] }
      ] }
    ]
  },
  listening: {
    genre: 'boletim de rádio',
    title: 'Radio Lyon — Le week-end en bref',
    speakers: [{ id: 'J', name: 'A jornalista', gender: 'f' }],
    script: [
      { speaker: 'J', text: 'Bonjour à tous, il est huit heures, voici les nouvelles du week-end à Lyon.' },
      { speaker: 'J', text: "En sport d'abord : samedi soir, l'Olympique Lyonnais a gagné son match contre Marseille, deux buts à un. Plus de cinquante mille personnes sont allées au stade." },
      { speaker: 'J', text: "Dimanche, la course à pied « Lyon Urban Trail » est partie de la place Bellecour à huit heures. Six mille coureurs ont participé. Le gagnant a fini en une heure et quatre minutes." },
      { speaker: 'J', text: "Sur les routes, la circulation a été difficile dimanche soir : beaucoup de Lyonnais sont rentrés de vacances. Heureusement, il n'y a pas eu d'accident grave." },
      { speaker: 'J', text: "Enfin, la météo : il a fait beau tout le week-end, mais aujourd'hui, attention, la pluie arrive cet après-midi. N'oubliez pas votre parapluie ! Bonne journée." }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quel est le score du match ?', options: ['Deux à un pour Lyon.', 'Un à deux pour Marseille.', 'Deux à deux.', 'Trois à un pour Lyon.'], answer: 0 },
      { type: 'short_answer', prompt: 'Quantos corredores participaram da corrida? (responda com o número)', answers: ['6000', '6 000'] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'La course est partie de la place Bellecour.', answer: 'V', explanationPt: '"est partie de la place Bellecour à huit heures".' },
        { text: 'Il y a eu un accident grave dimanche soir.', answer: 'F', explanationPt: '"il n\'y a pas eu d\'accident grave".' },
        { text: 'Il pleut ce matin.', answer: 'F', explanationPt: 'A chuva chega à tarde (cet après-midi).' },
        { text: 'Le gagnant de la course est lyonnais.', answer: 'NM', explanationPt: 'Não se diz de onde é o vencedor.' }
      ] },
      { type: 'listen_choose', audio: 'Le gagnant a fini en une heure et quatre minutes.', prompt: 'Qual foi o tempo do vencedor?',
        options: ['1h04', '1h14', '4h01', '1h40'], answer: 0 },
      { type: 'dictation', text: "Beaucoup de Lyonnais sont rentrés de vacances." }
    ]
  },
  grammar: {
    topicId: 'passe-compose',
    title: 'Revisão: avoir ou être?',
    explanationPt: 'Pergunta-chave antes de conjugar: **o verbo é pronominal ou é um dos verbos de movimento/estado?** Então **être**. Todos os outros: **avoir**.\n\n' +
      '**Com être**, o particípio concorda com o **sujeito**: *elle est venue, ils sont partis*.\n**Com avoir**, o particípio normalmente **não concorda** com o sujeito: *elle a mangé, ils ont mangé*.\n\n' +
      '**Expressões úteis com o passé composé:**\n- *il y a eu* = houve (passado de *il y a*)\n- *ça s\'est bien passé* = foi tudo bem\n- *avoir lieu* → *a eu lieu* = aconteceu, foi realizado\n- *ne... jamais* + passé composé = "nunca + passado": *je ne suis jamais allé...*',
    table: { head: ['', 'avoir', 'être'], rows: [
      ['quais verbos', 'a grande maioria', 'aller, venir, partir, arriver, sortir, entrer, monter, descendre, naître, mourir, rester, tomber, passer, retourner + derivados + todos os pronominais'],
      ['concordância', 'não (com o sujeito)', 'sim, com o sujeito'],
      ['exemplo', 'Elle a vendu sa lampe.', 'Elle est partie tôt.']
    ] },
    examples: [
      { fr: "Il y a eu beaucoup de monde.", pt: 'Teve/houve muita gente.' },
      { fr: 'Le festival a eu lieu en octobre.', pt: 'O festival aconteceu em outubro.' },
      { fr: "Je ne suis jamais allé à Paris.", pt: 'Nunca fui a Paris.' },
      { fr: "Nous nous sommes levés tôt et nous avons pris le métro.", pt: 'Nós nos levantamos cedo e pegamos o metrô.' }
    ],
    ptComparison: '**"Teve muita gente"** não se traduz com *avoir* conjugado com a pessoa: diga *il y a eu beaucoup de monde*. E "nunca fui" fica *je ne suis jamais allé(e)* — o *jamais* vem entre o auxiliar e o particípio, como o *pas*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no passé composé (escolha o auxiliar).', items: [
      { text: 'Samedi, nous ___ au cinéma. (aller — Léa e Camille)', answers: ['sommes allées'] },
      { text: 'Tu ___ ton billet ? (acheter)', answers: ['as acheté'] },
      { text: 'Ils ___ à minuit. (se coucher)', answers: ['se sont couchés'] },
      { text: 'Elle ___ un livre de Victor Hugo. (lire)', answers: ['a lu'] },
      { text: 'Mes parents ___ hier. (arriver)', answers: ['sont arrivés'] },
      { text: "Je ___ de vélo. (tomber — Hugo)", answers: ['suis tombé'] },
      { text: 'Vous ___ le match ? (voir)', answers: ['avez vu'] },
      { text: 'Il ___ beaucoup de monde. (y avoir)', answers: ['y a eu'] }
    ] },
    { type: 'multiple_choice', prompt: '"Ela nunca foi ao Brasil."', options: ["Elle n'est jamais allée au Brésil.", "Elle n'a jamais allé au Brésil.", "Elle n'est allée jamais au Brésil.", "Elle ne jamais est allée au Brésil."], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Le vide-grenier a eu lieu dimanche dernier.", translation: 'A feira de usados aconteceu domingo passado.' }
  ],
  tipForBrazilians: '**Notícias são ótimas para treinar o passé composé.** Rádios como *France Inter* e *France Info* têm boletins curtos a cada hora, e o *RFI* tem o "Journal en français facile" (10 minutos, ritmo mais lento, com transcrição no site). Ouça um por dia e anote os verbos no passado que você reconhecer.'
});
