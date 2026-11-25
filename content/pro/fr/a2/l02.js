LUX.registerProLesson({
  id: 'pro-fr-a2-l02', lang: 'fr', level: 'A2', order: 2, sector: 'Tecnologia',
  title: 'Racontez-moi votre parcours', titlePt: 'Conte-me sua trajetória',
  names: ['Marina', 'Costa', 'Nuvio', 'Antoine', 'Klein', 'Luxembourg', 'São Paulo', 'Berlin', 'Lisbonne'],
  objectives: [
    'Contar sua trajetória profissional com o passé composé (avoir e être).',
    'Fazer e responder perguntas de entrevista sobre experiências passadas.',
    'Falar de resultados concretos: equipes, contratações, projetos.'
  ],
  vocabulary: [
    { fr: 'le parcours', pt: 'a trajetória, o percurso', g: 'm', ex: 'Racontez-moi votre parcours.' },
    { fr: "l'entretien (d'embauche)", pt: 'a entrevista (de emprego)', g: 'm', ex: "J'ai un entretien demain matin." },
    { fr: 'le candidat / la candidate', pt: 'o(a) candidato(a)', ex: 'La candidate a beaucoup d\'expérience.' },
    { fr: 'commencer', pt: 'começar', pos: 'v', ex: "J'ai commencé ma carrière en 2016." },
    { fr: 'gérer', pt: 'gerenciar, administrar', pos: 'v', ex: "J'ai géré une équipe de huit personnes." },
    { fr: 'recruter', pt: 'recrutar, contratar', pos: 'v', ex: 'Nous avons recruté vingt développeurs.' },
    { fr: 'quitter', pt: 'deixar, sair de', pos: 'v', ex: "J'ai quitté mon poste en juin." },
    { fr: 'la croissance', pt: 'o crescimento', g: 'f', ex: "L'entreprise est en forte croissance." },
    { fr: 'la carrière', pt: 'a carreira', g: 'f', ex: 'Elle a fait toute sa carrière dans la tech.' },
    { fr: 'le défi', pt: 'o desafio', g: 'm', ex: "C'est un grand défi pour moi." },
    { fr: 'le résultat', pt: 'o resultado', g: 'm', ex: 'Quels résultats avez-vous obtenus ?' },
    { fr: 'arriver', pt: 'chegar', pos: 'v', ex: 'Je suis arrivée au Luxembourg en septembre.' }
  ],
  reading: {
    genre: 'post em rede profissional',
    title: 'Marina Costa — « Nouveau chapitre ! »',
    text: "Après huit ans dans les ressources humaines, je commence un nouveau chapitre au Luxembourg !\n\n" +
      "J'ai commencé ma carrière en 2016 dans une banque de São Paulo, au service recrutement. Là-bas, j'ai appris les bases : les entretiens, les contrats, les salaires. En 2019, j'ai quitté la banque et je suis partie dans une start-up de logiciels. Quelle aventure ! En trois ans, l'entreprise est passée de cinquante à quatre cents salariés. Avec mon équipe, nous avons recruté plus de deux cents personnes et nous avons créé le premier programme pour les nouveaux managers.\n\n" +
      "En 2022, je suis devenue HR Business Partner. J'ai accompagné trois directeurs pendant une grande [[réorganisation|reorganização]], et j'ai beaucoup appris sur les chiffres et le [[compte de résultat|demonstrativo de resultados (P&L)]].\n\n" +
      "Cette année, j'ai décidé de vivre en Europe. Je suis arrivée au Luxembourg en septembre et j'ai rejoint Nuvio, une [[scale-up|empresa em fase de crescimento acelerado]] de logiciels. Nouveau pays, nouvelle langue, nouveaux défis… J'ai hâte !",
    exercises: [
      { type: 'order_events', prompt: 'Coloque a trajetória de Marina na ordem certa.', items: [
        'Elle travaille dans une banque à São Paulo.', 'Elle part dans une start-up de logiciels.', 'Elle devient HR Business Partner.', 'Elle arrive au Luxembourg.', 'Elle rejoint Nuvio.'
      ] },
      { type: 'multiple_choice', prompt: 'Combien de salariés avait la start-up à la fin ?', options: ['Quatre cents.', 'Cinquante.', 'Deux cents.', 'Quarante.'], answer: 0,
        explanationPt: '"l\'entreprise est passée de cinquante à quatre cents salariés".' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Marina a commencé sa carrière dans une start-up.', answer: 'F', explanationPt: 'Ela começou num banco.' },
        { text: 'Son équipe a recruté plus de deux cents personnes.', answer: 'V', explanationPt: '"nous avons recruté plus de deux cents personnes".' },
        { text: 'Marina a travaillé à Lisbonne.', answer: 'NM', explanationPt: 'O texto não menciona Lisboa.' },
        { text: 'Pendant la réorganisation, elle a accompagné trois directeurs.', answer: 'V', explanationPt: '"J\'ai accompagné trois directeurs pendant une grande réorganisation".' }
      ] },
      { type: 'fill_blank', prompt: 'Complete com o auxiliar certo (ai / suis).', bank: ['ai', 'suis'], items: [
        { text: "J'___ quitté la banque en 2019.", answers: ['ai'] },
        { text: 'Je ___ partie dans une start-up.', answers: ['suis'] },
        { text: 'Je ___ devenue HR Business Partner.', answers: ['suis'] },
        { text: "J'___ rejoint Nuvio.", answers: ['ai'] }
      ] }
    ]
  },
  listening: {
    genre: 'entrevista de emprego',
    title: 'Marina entrevista um candidato a Engineering Manager',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'A', name: 'Antoine', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Bonjour Antoine, merci d\'être venu. Racontez-moi votre parcours.' },
      { speaker: 'A', text: 'Bonjour. J\'ai fait des études d\'informatique, puis j\'ai travaillé six ans comme développeur à Berlin.' },
      { speaker: 'M', text: 'Et ensuite ?' },
      { speaker: 'A', text: 'En 2021, je suis devenu manager. J\'ai géré une équipe de huit personnes.' },
      { speaker: 'M', text: 'Quel a été votre plus grand défi ?' },
      { speaker: 'A', text: 'L\'année dernière, l\'entreprise a grandi très vite. Nous avons recruté douze personnes en six mois.' },
      { speaker: 'M', text: 'Et comment avez-vous organisé l\'équipe ?' },
      { speaker: 'A', text: 'J\'ai créé deux petites équipes et j\'ai nommé deux responsables.' },
      { speaker: 'M', text: 'Pourquoi avez-vous quitté cette entreprise ?' },
      { speaker: 'A', text: 'Je suis venu au Luxembourg pour ma famille. Et je cherche un nouveau défi.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Où Antoine a travaillé comme développeur ?', options: ['À Berlin.', 'Au Luxembourg.', 'À Lisbonne.', 'À São Paulo.'], answer: 0,
        explanationPt: '"j\'ai travaillé six ans comme développeur à Berlin".' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Antoine est devenu manager en 2021.', answer: 'V', explanationPt: '"En 2021, je suis devenu manager."' },
        { text: 'Son équipe a recruté vingt personnes en six mois.', answer: 'F', explanationPt: 'Foram doze pessoas (douze).' },
        { text: 'Antoine est venu au Luxembourg pour sa famille.', answer: 'V', explanationPt: '"Je suis venu au Luxembourg pour ma famille."' },
        { text: 'Antoine parle italien.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: 'Quel a été votre plus grand défi ?', prompt: 'Ouça e escolha a pergunta que você ouviu.',
        options: ['Quel a été votre plus grand défi ?', 'Quel est votre plus grand défaut ?', 'Quel a été votre premier défi ?', 'Quel est votre plus grand défi ?'], answer: 0 },
      { type: 'dictation', text: "J'ai géré une équipe de huit personnes." }
    ]
  },
  grammar: {
    topicId: 'passe-compose',
    title: 'Contar a trajetória: passé composé com avoir e être',
    explanationPt: 'Na entrevista, a trajetória é contada no **passé composé**: ações concluídas, com datas.\n\n' +
      '- A maioria dos verbos usa **avoir**: *j\'ai travaillé, j\'ai géré, nous avons recruté, j\'ai quitté*.\n' +
      '- Verbos de **movimento/mudança de estado** usam **être** e **concordam** com o sujeito: *je suis arrivé**e***, *elle est devenu**e***, *ils sont parti**s***.\n' +
      '- Os mais úteis numa trajetória: **arriver, partir, venir, devenir, rester, entrer, sortir, passer (de… à…)**.',
    table: { head: ['', 'avoir: gérer', 'être: devenir'], rows: [
      ["je / j'", 'ai géré', 'suis devenu(e)'], ['tu', 'as géré', 'es devenu(e)'], ['il / elle', 'a géré', 'est devenu / devenue'],
      ['nous', 'avons géré', 'sommes devenu(e)s'], ['vous', 'avez géré', 'êtes devenu(e)(s)'], ['ils / elles', 'ont géré', 'sont devenus / devenues']
    ] },
    examples: [
      { fr: "J'ai commencé ma carrière dans une banque.", pt: 'Comecei minha carreira num banco.' },
      { fr: 'Elle est devenue manager en 2022.', pt: 'Ela se tornou gerente em 2022.' },
      { fr: 'Nous avons recruté quarante ingénieurs.', pt: 'Contratamos quarenta engenheiros.' },
      { fr: 'Je suis arrivée au Luxembourg en septembre.', pt: 'Cheguei a Luxemburgo em setembro.' }
    ],
    ptComparison: '**Devenir** = "tornar-se, virar": *je suis devenue manager* = "virei gerente". Não traduza ao pé da letra com ~~j\'ai tourné~~.\n\n' +
      '**Concordância com être:** uma mulher escreve *je suis arrivé**e***, *je suis parti**e***. Na fala, quase sempre soa igual — mas no CV e no e-mail, conta!'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no passé composé.', items: [
      { text: 'En 2019, j\'___ la banque. (quitter)', answers: ['ai quitté'] },
      { text: 'Elle ___ au Luxembourg en septembre. (arriver)', answers: ['est arrivée'] },
      { text: 'Nous ___ trente personnes cette année. (recruter)', answers: ['avons recruté'] },
      { text: 'Il ___ manager en 2021. (devenir)', answers: ['est devenu'] },
      { text: 'Vous ___ une grande équipe ? (gérer)', answers: ['avez géré'] }
    ] },
    { type: 'multiple_choice', prompt: 'Uma candidata diz: "Cheguei em Luxemburgo em março."', options: ['Je suis arrivée au Luxembourg en mars.', "J'ai arrivé au Luxembourg en mars.", 'Je suis arrivé à Luxembourg en mars.', "J'arrive au Luxembourg en mars dernier."], answer: 0,
      explanationPt: 'Arriver usa être e concorda: arrivée (feminino). País: au Luxembourg.' },
    { type: 'match', prompt: 'Ligue a pergunta de entrevista à tradução.', pairs: [
      ['Racontez-moi votre parcours.', 'Conte-me sua trajetória.'], ['Pourquoi avez-vous quitté votre poste ?', 'Por que você saiu do seu cargo?'],
      ['Quel a été votre plus grand défi ?', 'Qual foi o seu maior desafio?'], ['Quels résultats avez-vous obtenus ?', 'Que resultados você obteve?'] ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "J'ai accompagné trois directeurs pendant une réorganisation.", translation: 'Acompanhei três diretores durante uma reorganização.' }
  ],
  tipForBrazilians: '**Resultados com números.** Em entrevistas na Europa, diga o que *você* fez e com que resultado: *"J\'ai recruté quarante personnes en un an"*, *"Nous avons réduit les départs de 20 %"*. Prefira **je** para o que foi seu e **nous** para o que foi do time — e não exagere: a cultura de trabalho em Luxemburgo valoriza a precisão mais do que a autopromoção.\n\n' +
    '**Prepare 3 histórias** (um desafio, um conflito, um sucesso) em passé composé. Elas respondem a quase todas as perguntas de entrevista.'
});
