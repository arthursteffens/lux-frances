LUX.registerProLesson({
  id: 'pro-fr-a2-l03', lang: 'fr', level: 'A2', order: 3, sector: 'Tecnologia',
  title: 'Avant, nous étions trente', titlePt: 'Antes, éramos trinta',
  names: ['Marina', 'Nuvio', 'Thomas', 'Weber', 'Kirchberg', 'Luxembourg', 'Belval'],
  objectives: [
    'Descrever como uma empresa era antes com o imparfait.',
    'Contrastar "antes" e "agora" para falar de crescimento e de mudança organizacional.',
    'Entender os riscos de pessoas quando uma start-up cresce rápido.'
  ],
  vocabulary: [
    { fr: 'la start-up', pt: 'a startup', g: 'f', ex: 'Au début, Nuvio était une petite start-up.' },
    { fr: 'le fondateur / la fondatrice', pt: 'o(a) fundador(a)', ex: 'Le fondateur décidait tout.' },
    { fr: "l'organisation", pt: 'a organização, a estrutura', g: 'f', ex: "L'organisation est plus claire maintenant." },
    { fr: "l'organigramme", pt: 'o organograma', g: 'm', ex: "Il n'y avait pas d'organigramme." },
    { fr: 'le / la manager', pt: 'o(a) gestor(a)', ex: 'Chaque manager a huit personnes dans son équipe.' },
    { fr: 'le changement', pt: 'a mudança', g: 'm', ex: 'Le changement fait peur à certaines personnes.' },
    { fr: 'grandir', pt: 'crescer', pos: 'v', ex: "L'entreprise a beaucoup grandi." },
    { fr: 'se connaître', pt: 'conhecer-se', pos: 'v', ex: 'Avant, tout le monde se connaissait.' },
    { fr: 'décider', pt: 'decidir', pos: 'v', ex: 'Qui décide maintenant ?' },
    { fr: 'les locaux', pt: 'as instalações, o escritório', g: 'm', ex: 'Les locaux étaient très petits.' },
    { fr: 'au début', pt: 'no começo', pos: 'expr', ex: 'Au début, nous étions trente.' },
    { fr: "aujourd'hui", pt: 'hoje, atualmente', pos: 'adv', ex: "Aujourd'hui, nous sommes cent quatre-vingts." }
  ],
  reading: {
    genre: 'artigo do blog interno',
    title: 'Nuvio a cinq ans : souvenirs d\'une petite start-up',
    text: "En 2020, Nuvio était une toute petite start-up. Nous étions trente personnes dans deux pièces à Belval. Il n'y avait pas de managers : Thomas, le fondateur, décidait tout. Tout le monde se connaissait, on mangeait ensemble tous les midis et les réunions duraient dix minutes. Les développeurs parlaient directement avec les clients. C'était un peu le chaos, mais l'ambiance était super.\n\n" +
      "Aujourd'hui, nous sommes cent quatre-vingts, dans des locaux modernes au Kirchberg. Nous avons maintenant des équipes, des managers et un organigramme. C'est plus clair, mais c'est aussi plus lent.\n\n" +
      "Certains collègues regrettent l'ancienne Nuvio. « Avant, je savais qui faisait quoi », dit une développeuse. « Maintenant, je ne connais pas la moitié des gens. » Un autre ajoute : « Avant, on [[livrait|entregava]] vite. Aujourd'hui, on attend des [[validations|aprovações]]. »\n\n" +
      "Le défi pour les prochaines années : grandir sans perdre notre culture.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de personnes travaillaient chez Nuvio en 2020 ?', options: ['Trente.', 'Cent quatre-vingts.', 'Treize.', 'Deux.'], answer: 0,
        explanationPt: '"Nous étions trente personnes dans deux pièces".' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'En 2020, il y avait beaucoup de managers.', answer: 'F', explanationPt: '"Il n\'y avait pas de managers".' },
        { text: 'Les réunions étaient très courtes.', answer: 'V', explanationPt: '"les réunions duraient dix minutes".' },
        { text: 'Aujourd\'hui, Nuvio est au Kirchberg.', answer: 'V', explanationPt: '"dans des locaux modernes au Kirchberg".' },
        { text: 'Thomas veut vendre l\'entreprise.', answer: 'NM', explanationPt: 'O texto não diz isso.' }
      ] },
      { type: 'match', prompt: 'Ligue "avant" ao "aujourd\'hui".', pairs: [
        ['trente personnes', 'cent quatre-vingts personnes'], ['pas de managers', 'des équipes et des managers'], ['à Belval', 'au Kirchberg'], ['on livrait vite', 'on attend des validations'] ] },
      { type: 'multiple_choice', prompt: 'Quel est le défi pour les prochaines années ?', options: ['Grandir sans perdre la culture.', 'Retourner à Belval.', 'Avoir moins de clients.', 'Supprimer les managers.'], answer: 0,
        explanationPt: '"grandir sans perdre notre culture".' }
    ]
  },
  listening: {
    genre: 'reunião individual',
    title: 'Marina conversa com o fundador',
    speakers: [{ id: 'T', name: 'Thomas', gender: 'm' }, { id: 'M', name: 'Marina', gender: 'f' }],
    script: [
      { speaker: 'T', text: 'Tu sais, Marina, avant, c\'était simple. Je connaissais tout le monde.' },
      { speaker: 'M', text: 'Et comment vous preniez les décisions ?' },
      { speaker: 'T', text: 'On parlait dans le couloir et on décidait. Il n\'y avait pas de processus.' },
      { speaker: 'M', text: 'Et maintenant, qu\'est-ce qui ne marche pas ?' },
      { speaker: 'T', text: 'Les équipes sont trop grandes. Un manager a parfois quinze personnes.' },
      { speaker: 'M', text: 'C\'est beaucoup. Les gens ont moins de temps avec leur manager.' },
      { speaker: 'T', text: 'Exactement. Et trois bons développeurs sont partis ce trimestre.' },
      { speaker: 'M', text: 'Je propose de regarder l\'organisation équipe par équipe. Je te montre une première idée la semaine prochaine.' },
      { speaker: 'T', text: 'Très bien. Mais attention : je ne veux pas plus de bureaucratie.' },
      { speaker: 'M', text: 'Moi non plus. Des structures simples, avec des données.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Comment on prenait les décisions avant ?', options: ['On parlait dans le couloir.', 'Avec un long processus.', 'Par e-mail.', 'Avec un comité.'], answer: 0,
        explanationPt: '"On parlait dans le couloir et on décidait."' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Un manager a parfois quinze personnes.', answer: 'V', explanationPt: '"Un manager a parfois quinze personnes."' },
        { text: 'Cinq développeurs sont partis ce trimestre.', answer: 'F', explanationPt: 'Foram três (trois).' },
        { text: 'Thomas veut plus de bureaucratie.', answer: 'F', explanationPt: '"je ne veux pas plus de bureaucratie".' },
        { text: 'Marina a déjà travaillé avec Thomas avant Nuvio.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: 'Avant, c\'était simple.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Avant, c\'était simple.', 'Avant, c\'est simple.', 'Avant, cet été simple.', 'Avant, ça a été simple.'], answer: 0 },
      { type: 'dictation', text: 'Les équipes sont trop grandes.' }
    ]
  },
  grammar: {
    topicId: 'imparfait',
    title: 'Imparfait: como era antes',
    explanationPt: 'O ***imparfait*** descreve **como as coisas eram** e **o que se fazia habitualmente** no passado — perfeito para falar da empresa "antes".\n\n' +
      'Formação: radical do ***nous*** no presente (*nous **parl**ons*) + **-ais, -ais, -ait, -ions, -iez, -aient**. Única exceção: **être → ét-** (*c\'était, nous étions*).\n\n' +
      'Expressões que pedem imparfait: ***avant, au début, à l\'époque, tous les jours, d\'habitude***. Para o contraste, use o presente: ***Avant**, on décidait vite. **Maintenant**, on attend.*',
    table: { head: ['', 'être', 'avoir', 'décider', 'connaître'], rows: [
      ["je / j'", 'étais', 'avais', 'décidais', 'connaissais'], ['tu', 'étais', 'avais', 'décidais', 'connaissais'], ['il / elle / on', 'était', 'avait', 'décidait', 'connaissait'],
      ['nous', 'étions', 'avions', 'décidions', 'connaissions'], ['vous', 'étiez', 'aviez', 'décidiez', 'connaissiez'], ['ils / elles', 'étaient', 'avaient', 'décidaient', 'connaissaient']
    ] },
    examples: [
      { fr: 'Avant, nous étions trente personnes.', pt: 'Antes, éramos trinta pessoas.' },
      { fr: "Il n'y avait pas de managers.", pt: 'Não havia gestores.' },
      { fr: 'Le fondateur décidait tout.', pt: 'O fundador decidia tudo.' },
      { fr: 'Au début, on mangeait ensemble tous les midis.', pt: 'No começo, a gente almoçava junto todo dia.' }
    ],
    ptComparison: 'O imparfait corresponde ao nosso **pretérito imperfeito**: _éramos, havia, decidia_. A lógica é a mesma do português — use-o para **descrever** e para **hábitos**.\n\n' +
      '***Il y avait*** = "havia/tinha" (descrição). ***Il y a eu*** = "houve" (fato pontual): *Il y avait trente personnes* × *Il y a eu trois départs*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no imparfait.', items: [
      { text: 'Avant, l\'entreprise ___ très petite. (être)', answers: ['était'] },
      { text: 'Nous ___ tous les clients. (connaître)', answers: ['connaissions'] },
      { text: 'Les réunions ___ dix minutes. (durer)', answers: ['duraient'] },
      { text: 'Il n\'y ___ pas d\'organigramme. (avoir)', answers: ['avait'] },
      { text: 'Tu ___ avec les clients directement ? (parler)', answers: ['parlais'] }
    ] },
    { type: 'multiple_choice', prompt: '"Antes, o fundador decidia tudo."', options: ['Avant, le fondateur décidait tout.', 'Avant, le fondateur a décidé tout.', 'Avant, le fondateur décide tout.', 'Avant, le fondateur décidera tout.'], answer: 0,
      explanationPt: 'Hábito no passado → imparfait.' },
    { type: 'multiple_choice', prompt: 'Escolha: "Ce trimestre, trois développeurs ___."', options: ['sont partis', 'partaient', 'partent', 'partiraient'], answer: 0,
      explanationPt: 'Fato pontual e concluído (neste trimestre) → passé composé.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Au début, tout le monde se connaissait.', translation: 'No começo, todo mundo se conhecia.' }
  ],
  tipForBrazilians: '**Mudança organizacional é emoção.** Quando as pessoas dizem *"avant, c\'était mieux"*, elas falam de pertencimento, não só de processos. Uma boa resposta de RH reconhece o passado antes de propor o futuro: *"Je comprends, avant c\'était plus simple. Qu\'est-ce qui était important pour toi ?"*\n\n' +
    '**Vocabulário de reorganização:** *la taille des équipes* (tamanho), *le nombre de personnes par manager* (span of control), *les rôles* (papéis). Em francês de empresa, o inglês *span of control* também é usado.'
});
