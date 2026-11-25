/* Teste de nível A2 — leitura, audição e gramática/vocabulário. Sem glossário, sem transcrição. */
LUX.registerLevelTest({
  level: 'A2',
  title: 'Teste de nível A2',
  subtitle: 'Leitura, audição, gramática e vocabulário de todo o nível A2.',
  intro: 'Este teste revisa **as 6 unidades do A2**: presente, passé composé, imparfait, futuro, artigos partitivos, imperativo, preposições e os pronomes le, la, lui, leur, y e en.\n\n' +
    'Não há glossário nem transcrição — é como uma prova de verdade. Responda com calma, clique em **Verificar** em cada questão e, no fim, em **Finalizar o teste**.',
  certificateText: 'O(a) estudante é capaz de entender frases e expressões frequentes sobre assuntos do dia a dia (família, compras, trabalho, viagens, lazer), de se comunicar em situações simples e de contar experiências passadas e planos futuros.',
  names: ['Julie', 'Martin', 'Nantes', 'Bretagne', 'Paul', 'Sophie', 'Bordeaux', 'Toulouse', 'Lyon', 'Paris', 'Marc', 'Nina', 'Thomas', 'Brésil', 'Portugal', 'Italie', 'Rome', 'Lisbonne', 'Amélie', 'Bastille', 'Montmartre', 'Claire', 'Daniel', 'Bouffay'],
  sections: [
    {
      id: 'read', title: 'Compreensão escrita', icon: '📖',
      texts: [
        {
          genre: 'anúncio e e-mail', title: 'Chambre à louer à Nantes',
          text: "Annonce — Chambre à louer dans une colocation, quartier Bouffay, Nantes.\n" +
            "Grande chambre de quinze mètres carrés dans un appartement de quatre-vingts mètres carrés, au troisième étage avec ascenseur. Nous sommes deux colocataires : Julie, vingt-six ans, infirmière, et Paul, trente ans, professeur de musique. Nous cherchons une troisième personne calme et sympa. L'appartement a une grande cuisine, un salon avec balcon et deux salles de bains. Le loyer est de quatre cent vingt euros par mois, charges comprises. Les animaux ne sont pas acceptés, désolés ! Disponible le premier septembre.\n\n" +
            "Réponse de Nina :\n" +
            "Bonjour Julie et Paul,\n" +
            "J'ai vu votre annonce hier et votre chambre m'intéresse beaucoup. Je m'appelle Nina, j'ai vingt-quatre ans et je suis brésilienne. Je suis arrivée en France il y a six mois pour faire un master à l'université de Nantes. Pour le moment, j'habite chez une famille, mais c'est loin de la fac : je passe une heure dans le bus chaque matin !\n" +
            "Je suis plutôt calme, je ne fume pas et je n'ai pas d'animaux. J'adore cuisiner : je pourrai vous faire goûter des plats brésiliens ! Est-ce que je peux visiter la chambre samedi prochain, vers onze heures ?\n" +
            "Merci d'avance,\nNina",
          exercises: [
            { type: 'multiple_choice', prompt: 'Combien de personnes vont habiter dans l\'appartement avec Nina ?', options: ['Trois : Julie, Paul et Nina.', 'Deux : Julie et Nina.', 'Quatre.', 'Nina seule.'], answer: 0,
              explanationPt: 'Julie e Paul procuram uma terceira pessoa.' },
            { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
              { text: "L'appartement est au rez-de-chaussée.", answer: 'F', explanationPt: 'Fica no terceiro andar, com elevador.' },
              { text: 'Le loyer comprend les charges.', answer: 'V', explanationPt: '"charges comprises".' },
              { text: 'On peut avoir un chat dans l\'appartement.', answer: 'F', explanationPt: '"Les animaux ne sont pas acceptés".' },
              { text: 'Nina étudie à l\'université.', answer: 'V', explanationPt: 'Ela faz mestrado na Universidade de Nantes.' },
              { text: 'Paul joue du piano.', answer: 'NM', explanationPt: 'Ele é professor de música, mas o instrumento não é citado.' }
            ] },
            { type: 'multiple_choice', prompt: 'Pourquoi Nina veut changer de logement ?', options: ['Elle habite loin de l\'université.', 'La famille est désagréable.', 'Le loyer est trop cher.', 'Elle veut habiter seule.'], answer: 0 },
            { type: 'multiple_choice', prompt: 'Quand Nina veut visiter la chambre ?', options: ['Samedi prochain vers onze heures.', 'Le premier septembre.', 'Demain matin.', 'Dans six mois.'], answer: 0 },
            { type: 'short_answer', prompt: 'Quanto é o aluguel por mês? (só o número)', answers: ['420'] }
          ]
        },
        {
          genre: 'artigo', title: 'La vie de Claire, boulangère à soixante-dix ans',
          text: "Claire Martin a soixante-dix ans, et tous les matins, elle se lève à quatre heures pour faire le pain dans sa boulangerie, à Toulouse.\n\n" +
            "« Quand j'étais petite, mes parents avaient déjà cette boulangerie. Le soir, après l'école, je les aidais : je vendais les gâteaux et je rendais la monnaie. J'adorais l'odeur du pain chaud. À dix-huit ans, j'ai décidé de faire le même métier. Mon père n'était pas content : pour lui, c'était un travail d'homme ! »\n\n" +
            "Claire a fait sa formation à Bordeaux, puis elle est revenue à Toulouse en 1975. Quand son père est mort, elle a repris la boulangerie. Aujourd'hui, elle a quatre employés et elle vend environ six cents baguettes par jour.\n\n" +
            "« Les clients ont changé. Avant, ils achetaient seulement du pain blanc. Maintenant, ils me demandent du pain complet, du pain sans gluten, des produits bio… Il faut s'adapter ! »\n\n" +
            "Et la retraite ? « Je vais m'arrêter l'année prochaine. Ma petite-fille, Amélie, va prendre ma place. Elle a fait la même formation que moi, à Bordeaux. Moi, je vais enfin dormir le matin… et je viendrai acheter mon pain chez elle ! »",
          exercises: [
            { type: 'multiple_choice', prompt: 'Que faisait Claire après l\'école ?', options: ['Elle aidait ses parents à la boulangerie.', 'Elle faisait ses devoirs.', 'Elle jouait avec ses amis.', 'Elle allait à Bordeaux.'], answer: 0 },
            { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
              { text: 'Le père de Claire était d\'accord avec son choix.', answer: 'F', explanationPt: '"Mon père n\'était pas content".' },
              { text: 'Claire est revenue à Toulouse en 1975.', answer: 'V', explanationPt: '"elle est revenue à Toulouse en 1975".' },
              { text: 'Claire a dix employés.', answer: 'F', explanationPt: 'Ela tem quatro funcionários.' },
              { text: 'Les clients d\'aujourd\'hui demandent des produits différents.', answer: 'V', explanationPt: 'Pão integral, sem glúten, orgânico…' },
              { text: 'Amélie habite à Bordeaux.', answer: 'NM', explanationPt: 'Ela estudou em Bordeaux, mas não se diz onde mora.' }
            ] },
            { type: 'order_events', prompt: 'Coloque a vida de Claire em ordem.', items: [
              'Elle aide ses parents après l\'école.', 'Elle décide de devenir boulangère.', 'Elle fait sa formation à Bordeaux.', 'Elle reprend la boulangerie de son père.', 'Elle va prendre sa retraite.'
            ] },
            { type: 'multiple_choice', prompt: 'Qui va remplacer Claire ?', options: ['Sa petite-fille Amélie.', 'Sa fille.', 'Un de ses employés.', 'Personne.'], answer: 0 }
          ]
        }
      ]
    },
    {
      id: 'listen', title: 'Compreensão oral', icon: '🎧',
      audios: [
        {
          genre: 'diálogo', title: 'Dois amigos planejam as férias',
          speakers: [{ id: 'M', name: 'Marc', gender: 'm' }, { id: 'S', name: 'Sophie', gender: 'f' }],
          script: [
            { speaker: 'M', text: "Sophie, tu pars où cet été ?" },
            { speaker: 'S', text: "Je vais au Portugal, à Lisbonne, avec ma sœur. On part le douze juillet." },
            { speaker: 'M', text: "Super ! Vous y allez en avion ?" },
            { speaker: 'S', text: "Non, en voiture. C'est long, mais on va s'arrêter deux jours à Bordeaux. Et toi ?" },
            { speaker: 'M', text: "L'année dernière, je suis allé en Italie, à Rome. Il faisait quarante degrés, c'était horrible ! Cette année, je reste en France. Je vais faire de la randonnée en Bretagne." },
            { speaker: 'S', text: "Tu y vas seul ?" },
            { speaker: 'M', text: "Non, avec Thomas et sa copine. On a loué une petite maison près de la mer pour dix jours." },
            { speaker: 'S', text: "Et il ne fait pas trop froid en Bretagne ?" },
            { speaker: 'M', text: "Un peu, et il pleut souvent. Mais moi, je préfère la pluie à la chaleur !" }
          ],
          exercises: [
            { type: 'multiple_choice', prompt: 'Comment Sophie va au Portugal ?', options: ['En voiture.', 'En avion.', 'En train.', 'En bus.'], answer: 0 },
            { type: 'multiple_choice', prompt: 'Où Marc est allé l\'année dernière ?', options: ['À Rome.', 'En Bretagne.', 'À Lisbonne.', 'À Bordeaux.'], answer: 0 },
            { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
              { text: 'Sophie part avec sa sœur.', answer: 'V', explanationPt: '"avec ma sœur".' },
              { text: 'Sophie va s\'arrêter à Bordeaux.', answer: 'V', explanationPt: '"on va s\'arrêter deux jours à Bordeaux".' },
              { text: 'Marc a aimé la chaleur à Rome.', answer: 'F', explanationPt: '"c\'était horrible !"' },
              { text: 'La maison en Bretagne a une piscine.', answer: 'NM', explanationPt: 'Não se fala de piscina.' }
            ] },
            { type: 'short_answer', prompt: 'Por quantos dias Marc alugou a casa? (só o número)', answers: ['10'] }
          ]
        },
        {
          genre: 'mensagem de voz', title: 'Uma mensagem na secretária eletrônica',
          speakers: [{ id: 'D', name: 'Daniel', gender: 'm' }],
          script: [
            { speaker: 'D', text: "Allô, Claire ? C'est Daniel. Je t'appelle pour ce soir." },
            { speaker: 'D', text: "Désolé, je vais être en retard : mon train est bloqué à Lyon, il y a une grève. Je vais arriver à Paris vers vingt-deux heures, pas à dix-neuf heures." },
            { speaker: 'D', text: "Ne m'attends pas pour dîner. Il reste de la soupe dans le frigo, tu peux en manger. Et si tu sors, laisse la clé chez la voisine, d'accord ?" },
            { speaker: 'D', text: "Ah, et n'oublie pas : demain, on déjeune chez mes parents, à midi et demi. Je leur ai promis d'apporter un dessert. Tu peux en acheter un à la boulangerie, s'il te plaît ? Merci, à ce soir, je t'embrasse !" }
          ],
          exercises: [
            { type: 'multiple_choice', prompt: 'Pourquoi Daniel est en retard ?', options: ['Il y a une grève et son train est bloqué.', 'Il a raté son train.', 'Il travaille tard.', 'Il est malade.'], answer: 0 },
            { type: 'multiple_choice', prompt: 'À quelle heure Daniel va arriver ?', options: ['Vers vingt-deux heures.', 'À dix-neuf heures.', 'À midi et demi.', 'Vers vingt heures.'], answer: 0 },
            { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
              { text: 'Claire peut manger la soupe.', answer: 'V', explanationPt: '"tu peux en manger".' },
              { text: 'Si Claire sort, elle doit laisser la clé chez la voisine.', answer: 'V', explanationPt: '"laisse la clé chez la voisine".' },
              { text: 'Demain, ils dînent chez les parents de Daniel.', answer: 'F', explanationPt: 'Eles almoçam (déjeunent) ao meio-dia e meia.' },
              { text: 'Claire doit acheter un dessert.', answer: 'V', explanationPt: '"Tu peux en acheter un à la boulangerie ?"' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'grammar', title: 'Gramática e vocabulário', icon: '📐',
      exercises: [
        { type: 'multiple_choice', prompt: 'Hier, nous ___ au cinéma.', options: ['sommes allés', 'avons allé', 'allions', 'allons'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Quand j\'___ petit, j\'habitais à la campagne.', options: ['étais', 'ai été', 'suis', 'serai'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Je regardais la télé quand le téléphone ___.', options: ['a sonné', 'sonnait', 'sonne', 'va sonner'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Le matin, je bois ___ café.', options: ['du', 'de la', 'le', 'de'], answer: 0 },
        { type: 'multiple_choice', prompt: "Il n'y a pas ___ lait dans le frigo.", options: ['de', 'du', 'le', 'des'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Tu veux des pommes ? — Oui, j\'___ veux deux.', options: ['en', 'y', 'les', 'leur'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Tu vas à Marseille ? — Oui, j\'___ vais demain.', options: ['y', 'en', 'le', 'lui'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Tu connais Sophie ? — Oui, je ___ connais bien.', options: ['la', 'lui', 'le', 'leur'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Tu as téléphoné à tes parents ? — Oui, je ___ ai téléphoné.', options: ['leur', 'les', 'lui', 'y'], answer: 0 },
        { type: 'multiple_choice', prompt: "J'habite à Lyon ___ trois ans.", options: ['depuis', 'il y a', 'pendant', 'dans'], answer: 0 },
        { type: 'multiple_choice', prompt: "L'année prochaine, je ___ en Italie.", options: ['partirai', 'partais', 'suis parti', 'partirais'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Mes grands-parents habitent ___ Brésil.', options: ['au', 'en', 'à', 'aux'], answer: 0 },
        { type: 'multiple_choice', prompt: '(tu) ___ à gauche après la poste !', options: ['Tourne', 'Tournes', 'Tu tournes', 'Tourner'], answer: 0 },
        { type: 'multiple_choice', prompt: 'Elle ___ à sept heures ce matin.', options: ["s'est levée", "a levé", "s'est levé", "se levait"], answer: 0 },
        { type: 'multiple_choice', prompt: 'Ce restaurant est ___ que l\'autre.', options: ['meilleur', 'mieux', 'plus bon', 'bon'], answer: 0 },
        { type: 'fill_blank', prompt: 'Conjugue o verbo no tempo indicado.', items: [
          { text: 'Demain, il ___ beau. (faire — futur simple)', answers: ['fera'] },
          { text: 'Ce soir, nous ___ un film. (regarder — futur proche)', answers: ['allons regarder'] },
          { text: 'Hier, j\'___ mes clés. (perdre — passé composé)', answers: ['ai perdu'] },
          { text: 'Avant, il ___ beaucoup. (travailler — imparfait)', answers: ['travaillait'] }
        ] },
        { type: 'match', prompt: 'Ligue a situação à frase.', pairs: [['au restaurant', "L'addition, s'il vous plaît."], ['à la gare', 'Un aller-retour pour Nantes.'], ['dans la rue', 'Pour aller à la poste ?'], ['au marché', 'Un kilo de tomates.'], ['au téléphone', 'Ne quittez pas.']] }
      ]
    }
  ]
});
