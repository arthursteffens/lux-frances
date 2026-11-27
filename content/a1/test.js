/* Teste de nível A1 — leitura, audição e gramática/vocabulário. Sem glossário, sem transcrição. */
LUX.registerLevelTest({
  level: 'A1',
  title: 'Teste de nível A1',
  subtitle: 'Leitura, audição, gramática e vocabulário de todo o nível A1.',
  intro: 'Este teste revisa **as 6 unidades do A1**: cumprimentos, apresentações, números, artigos, *être*, *avoir*, verbos em -er, *aller*, *faire*, possessivos, preposições, horas, rotina, tempo e convites.\n\n' +
    'As perguntas estão em português, mas os textos e os áudios são só em francês: não há glossário, tradução nem transcrição. É como uma prova de verdade!\n\n' +
    'Responda com calma, clique em **Verificar** em cada questão e, no fim, em **Finalizar o teste**. Os áudios podem ser ouvidos até 3 vezes.',
  certificateText: 'O(a) estudante é capaz de entender e usar expressões familiares e frases muito simples do dia a dia: apresentar-se, falar da família, da casa e da rotina, fazer compras, pedir e entender um caminho, dizer as horas e combinar um encontro.',
  names: ['Camille', 'Dupont', 'Bordeaux', 'Paris', 'Marc', 'Inès', 'Théo', 'Nantes', 'Brésil', 'Sophie', 'Lyon', 'Gare'],
  sections: [
    {
      id: 'read', title: 'Compreensão escrita', icon: '📖',
      texts: [
        {
          genre: 'mensagem', title: 'Un message de Camille',
          text: "Salut Inès !\n\n" +
            "Je m'appelle Camille, je suis ta nouvelle voisine. J'ai vingt-cinq ans et je suis professeure d'anglais. Je suis de Bordeaux, mais maintenant j'habite à Nantes, au troisième étage.\n\n" +
            "Mon appartement est petit, mais il est très joli. Il y a une chambre, un salon et une petite cuisine. J'habite avec mon chat, Théo.\n\n" +
            "Samedi soir, je fais une petite fête chez moi pour rencontrer les voisins. Tu veux venir ? C'est à huit heures. Il y a des gâteaux et de la musique !\n\n" +
            "À bientôt,\nCamille",
          exercises: [
            { type: 'multiple_choice', prompt: 'Qual é a profissão da Camille?', options: ['Professora de inglês.', 'Enfermeira.', 'Estudante.', 'Designer.'], answer: 0,
              explanationPt: '"je suis professeure d\'anglais".' },
            { type: 'multiple_choice', prompt: 'Quem é o Théo?', options: ['O gato da Camille.', 'O irmão da Camille.', 'Um vizinho.', 'O namorado da Inès.'], answer: 0,
              explanationPt: '"J\'habite avec mon chat, Théo."' },
            { type: 'short_answer', prompt: 'Quantos anos tem a Camille? Responda em algarismos.', answers: ['25'],
              explanationPt: '"J\'ai vingt-cinq ans."' },
            { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
              { text: 'Camille habite à Bordeaux.', answer: 'F', explanationPt: 'Ela é de Bordeaux, mas agora mora em Nantes.' },
              { text: "L'appartement de Camille est grand.", answer: 'F', explanationPt: '"Mon appartement est petit".' },
              { text: 'La fête est samedi soir.', answer: 'V', explanationPt: '"Samedi soir, je fais une petite fête".' },
              { text: 'Camille a un frère.', answer: 'NM', explanationPt: 'A mensagem não fala da família.' }
            ] },
            { type: 'multiple_choice', prompt: 'Por que a Camille faz uma festa?', options: ['Para conhecer os vizinhos.', 'Porque é aniversário dela.', 'Porque vai mudar de cidade.', 'Para comemorar o trabalho novo.'], answer: 0,
              explanationPt: '"pour rencontrer les voisins". *Rencontrer* = conhecer, encontrar.' }
          ]
        },
        {
          genre: 'agenda e placa', title: 'La semaine de Marc',
          text: "Marc est développeur à Paris. Il se lève à six heures et demie et il prend le métro à sept heures et quart. Il commence le travail à huit heures.\n\n" +
            "Le lundi et le mercredi, il fait du sport après le travail : il joue au tennis avec un collègue. Le mardi, il fait les courses. Le jeudi soir, il a un cours de portugais, parce que sa femme est brésilienne !\n\n" +
            "Le vendredi soir, il va au cinéma ou au restaurant. Le samedi, il dort beaucoup, et le dimanche, il déjeune chez ses parents.\n\n" +
            "Boulangerie de la Gare – ouverte du mardi au dimanche, de 7 h à 19 h. Fermée le lundi.",
          exercises: [
            { type: 'multiple_choice', prompt: 'A que horas o Marc começa a trabalhar?', options: ['Às 8h.', 'Às 6h30.', 'Às 7h15.', 'Às 9h.'], answer: 0,
              explanationPt: '"Il commence le travail à huit heures."' },
            { type: 'multiple_choice', prompt: 'Por que o Marc estuda português?', options: ['Porque a mulher dele é brasileira.', 'Para o trabalho.', 'Porque vai viajar.', 'Porque o colega é português.'], answer: 0,
              explanationPt: '"parce que sa femme est brésilienne".' },
            { type: 'match', prompt: 'Ligue o dia à atividade do Marc.', pairs: [
              ['le lundi', 'tennis'], ['le mardi', 'courses'], ['le jeudi', 'cours de portugais'], ['le dimanche', 'déjeuner chez ses parents']
            ] },
            { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
              { text: 'Marc va au travail en métro.', answer: 'V', explanationPt: '"il prend le métro".' },
              { text: 'La boulangerie est ouverte le lundi.', answer: 'F', explanationPt: '"Fermée le lundi."' },
              { text: 'Marc a deux enfants.', answer: 'NM', explanationPt: 'O texto não fala de filhos.' }
            ] }
          ]
        }
      ]
    },
    {
      id: 'listen', title: 'Compreensão oral', icon: '🎧',
      audios: [
        {
          genre: 'diálogo', title: 'Na padaria',
          speakers: [{ id: 'V', name: 'A vendedora', gender: 'f' }, { id: 'C', name: 'O cliente', gender: 'm' }],
          script: [
            { speaker: 'V', text: 'Bonjour, monsieur. Vous désirez ?' },
            { speaker: 'C', text: "Bonjour, madame. Je voudrais deux baguettes, s'il vous plaît." },
            { speaker: 'V', text: 'Voilà. Avec ceci ?' },
            { speaker: 'C', text: 'Trois croissants. Et la tarte aux fraises, c\'est combien ?' },
            { speaker: 'V', text: 'Quinze euros.' },
            { speaker: 'C', text: "C'est un peu cher. Non merci, c'est tout." },
            { speaker: 'V', text: 'Alors, deux baguettes et trois croissants : cinq euros quatre-vingts.' },
            { speaker: 'C', text: 'Voilà dix euros.' },
            { speaker: 'V', text: 'Et voilà votre monnaie. Bonne journée !' }
          ],
          exercises: [
            { type: 'multiple_choice', prompt: 'O que o cliente compra?', options: ['Duas baguetes e três croissants.', 'Duas baguetes e uma torta.', 'Três baguetes.', 'Uma torta de morango.'], answer: 0,
              explanationPt: 'Ele acha a torta cara e diz "c\'est tout".' },
            { type: 'short_answer', prompt: 'Quanto custa a torta de morango? Responda só o número, em euros.', answers: ['15'],
              explanationPt: '"Quinze euros."' },
            { type: 'short_answer', prompt: 'Quanto o cliente paga no total? Escreva com vírgula (ex.: 2,50).', answers: ['5,80', '5.80'],
              explanationPt: '"cinq euros quatre-vingts" = 5,80 €.' },
            { type: 'multiple_choice', prompt: 'Com quanto dinheiro o cliente paga?', options: ['10 euros.', '5 euros.', '20 euros.', '15 euros.'], answer: 0,
              explanationPt: '"Voilà dix euros."' }
          ]
        },
        {
          genre: 'mensagem de voz', title: 'Um convite por telefone',
          speakers: [{ id: 'S', name: 'Sophie', gender: 'f' }],
          script: [
            { speaker: 'S', text: "Allô, Marc ? C'est Sophie. Il fait beau aujourd'hui ! Tu veux aller au parc avec moi cet après-midi ?" },
            { speaker: 'S', text: "Je suis à la gare maintenant. Le parc est près de chez toi : prends la première rue à droite et continue tout droit." },
            { speaker: 'S', text: "Rendez-vous à trois heures et demie, devant l'entrée du parc. Je prends des boissons et des fruits. Appelle-moi ! Bisous !" }
          ],
          exercises: [
            { type: 'multiple_choice', prompt: 'Como está o tempo hoje?', options: ['Bom, faz sol.', 'Chove.', 'Está frio.', 'Neva.'], answer: 0,
              explanationPt: '"Il fait beau aujourd\'hui !"' },
            { type: 'multiple_choice', prompt: 'Onde está a Sophie agora?', options: ['Na estação.', 'No parque.', 'Em casa.', 'No trabalho.'], answer: 0,
              explanationPt: '"Je suis à la gare maintenant."' },
            { type: 'multiple_choice', prompt: 'Qual é o caminho até o parque?', options: ['Primeira rua à direita e depois em frente.', 'Primeira rua à esquerda.', 'Segunda rua à direita.', 'Sempre em frente.'], answer: 0,
              explanationPt: '"prends la première rue à droite et continue tout droit".' },
            { type: 'short_answer', prompt: 'A que horas é o encontro? (ex.: 14:00)', answers: ['15:30', '15h30', '3:30', '3h30'],
              explanationPt: '"à trois heures et demie" = 15h30.' },
            { type: 'multiple_choice', prompt: 'Onde é o encontro?', options: ['Na frente da entrada do parque.', 'Na estação.', 'Na casa do Marc.', 'Num café.'], answer: 0,
              explanationPt: '"devant l\'entrée du parc". *Devant* = na frente de.' }
          ]
        }
      ]
    },
    {
      id: 'grammar', title: 'Gramática e vocabulário', icon: '📐',
      exercises: [
        { type: 'fill_blank', prompt: 'Complete com être ou avoir no presente.', items: [
          { text: 'Je ___ brésilienne. (être)', answers: ['suis'] },
          { text: "Nous ___ deux enfants. (avoir)", answers: ['avons'] },
          { text: 'Ils ___ français. (être)', answers: ['sont'] },
          { text: "Tu ___ quel âge ? (avoir)", answers: ['as'] }
        ] },
        { type: 'multiple_choice', prompt: '"Tenho vinte anos."', options: ["J'ai vingt ans.", 'Je suis vingt ans.', "J'ai vingt.", 'Je vingt ans.'], answer: 0 },
        { type: 'fill_blank', prompt: 'Complete com un, une ou des.', bank: ['un', 'une', 'des'], items: [
          { text: 'Il y a ___ table dans la cuisine.', answers: ['une'] },
          { text: "J'ai ___ livres en portugais.", answers: ['des'] },
          { text: "C'est ___ appartement moderne.", answers: ['un'] }
        ] },
        { type: 'multiple_choice', prompt: '"Não tenho carro."', options: ["Je n'ai pas de voiture.", "Je n'ai pas une voiture.", "Je ne pas ai voiture.", "J'ai pas voiture."], answer: 0 },
        { type: 'fill_blank', prompt: 'Conjugue o verbo entre parênteses.', items: [
          { text: 'Vous ___ français ? (parler)', answers: ['parlez'] },
          { text: 'Nous ___ à huit heures. (manger)', answers: ['mangeons'] },
          { text: 'Je ___ au cinéma ce soir. (aller)', answers: ['vais'] },
          { text: "Qu'est-ce que tu ___ le week-end ? (faire)", answers: ['fais'] }
        ] },
        { type: 'multiple_choice', prompt: '"Minha irmã e meus pais."', options: ['Ma sœur et mes parents.', 'Mon sœur et mes parents.', 'Ma sœur et ma parents.', 'Mes sœur et mon parents.'], answer: 0 },
        { type: 'fill_blank', prompt: "Complete com au, à la ou à l'.", bank: ['au', 'à la', "à l'"], items: [
          { text: 'Je vais ___ supermarché.', answers: ['au'] },
          { text: 'Elle travaille ___hôpital.', answers: ["à l'"] },
          { text: 'Nous allons ___ boulangerie.', answers: ['à la'] }
        ] },
        { type: 'multiple_choice', prompt: '"Está frio."', options: ['Il fait froid.', 'Il est froid.', "J'ai froid.", 'Il a froid.'], answer: 0 },
        { type: 'multiple_choice', prompt: '"São oito e quinze."', options: ['Il est huit heures et quart.', 'Il est huit heures moins le quart.', 'Il est huit heures et demie.', 'Sont huit heures quinze.'], answer: 0 },
        { type: 'fill_blank', prompt: 'Complete com o pronome certo.', bank: ['me', 'te', 'se'], items: [
          { text: 'Je ___ lève à sept heures.', answers: ['me'] },
          { text: 'Elle ___ couche tard.', answers: ['se'] },
          { text: 'Tu ___ réveilles tôt ?', answers: ['te'] }
        ] },
        { type: 'multiple_choice', prompt: 'Você entra numa loja. O que dizer?', options: ['Bonjour, madame !', 'Salut !', 'Bonsoir, toi !', 'Coucou !'], answer: 0 },
        { type: 'multiple_choice', prompt: '"Moro no Brasil, mas trabalho na França."', options: ["J'habite au Brésil, mais je travaille en France.", "J'habite en Brésil, mais je travaille à France.", "J'habite à Brésil, mais je travaille au France.", "J'habite au Brésil, mais je travaille à la France."], answer: 0 },
        { type: 'match', prompt: 'Ligue a pergunta à resposta.', pairs: [
          ['Ça va ?', 'Très bien, merci.'], ["C'est combien ?", 'Deux euros.'], ['Où est la gare ?', 'À gauche, tout droit.'], ['Tu veux venir ?', 'Avec plaisir !']
        ] },
        { type: 'multiple_choice', prompt: '"Uma cidade bonita."', options: ['Une belle ville.', 'Une ville belle.', 'Un beau ville.', 'Une beau ville.'], answer: 0 },
        { type: 'listen_choose', audio: 'quatre-vingt-dix-sept', prompt: 'Ouça e escolha o número.', options: ['97', '87', '77', '17'], answer: 0 },
        { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je ne peux pas venir samedi.', translation: 'Não posso ir no sábado.' }
      ]
    }
  ]
});
