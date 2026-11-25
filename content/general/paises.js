LUX.registerGeneral({
  id: 'paises', group: 'pessoas', title: 'Países, nacionalidades e línguas', titleFr: 'Les pays, les nationalités et les langues', level: 'A1',
  keywords: ['país', 'nacionalidade', 'língua', 'idioma', 'brasileiro', 'francês', 'pays', 'nationalité', 'langue', 'brésilien', 'au Brésil', 'en France'],
  blocks: [
    { type: 'intro', textPt: 'Nacionalidades e línguas se escrevem com **minúscula** em francês (*je suis brésilien, je parle français*). Só o **habitante** tem maiúscula: *les Brésiliens adorent le football*. Os países têm gênero, e isso decide a preposição: *en France, au Brésil, aux États-Unis*.' },
    { type: 'table', sections: [
      { title: 'Países', items: [
        { fr: 'le Brésil', pt: 'o Brasil' }, { fr: 'la France', pt: 'a França' }, { fr: 'le Portugal', pt: 'Portugal' }, { fr: "l'Espagne", pt: 'a Espanha' },
        { fr: "l'Italie", pt: 'a Itália' }, { fr: "l'Allemagne", pt: 'a Alemanha' }, { fr: 'la Belgique', pt: 'a Bélgica' }, { fr: 'la Suisse', pt: 'a Suíça' },
        { fr: 'le Canada', pt: 'o Canadá' }, { fr: 'les États-Unis', pt: 'os Estados Unidos' }, { fr: "l'Argentine", pt: 'a Argentina' }, { fr: 'le Japon', pt: 'o Japão' },
        { fr: 'le Maroc', pt: 'o Marrocos' }, { fr: 'le Sénégal', pt: 'o Senegal' }
      ] },
      { title: 'Nacionalidades (masculino / feminino)', items: [
        { fr: 'brésilien / brésilienne', pt: 'brasileiro(a)' }, { fr: 'français / française', pt: 'francês / francesa' }, { fr: 'portugais / portugaise', pt: 'português / portuguesa' },
        { fr: 'espagnol / espagnole', pt: 'espanhol(a)' }, { fr: 'italien / italienne', pt: 'italiano(a)' }, { fr: 'allemand / allemande', pt: 'alemão / alemã' },
        { fr: 'belge', pt: 'belga' }, { fr: 'suisse', pt: 'suíço(a)' }, { fr: 'canadien / canadienne', pt: 'canadense' },
        { fr: 'américain / américaine', pt: 'americano(a)' }, { fr: 'argentin / argentine', pt: 'argentino(a)' }, { fr: 'japonais / japonaise', pt: 'japonês / japonesa' }
      ] },
      { title: 'Línguas', items: [
        { fr: 'le portugais', pt: 'o português' }, { fr: 'le français', pt: 'o francês' }, { fr: "l'anglais", pt: 'o inglês' },
        { fr: "l'espagnol", pt: 'o espanhol' }, { fr: "l'italien", pt: 'o italiano' }, { fr: "l'allemand", pt: 'o alemão' }, { fr: "l'arabe", pt: 'o árabe' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Preposições', textPt: '**en** + país feminino ou com vogal (*en France, en Italie*); **au** + masculino (*au Brésil, au Japon*); **aux** + plural (*aux États-Unis*); **à** + cidade (*à Rio*).',
        examples: [{ fr: "J'habite au Brésil, à Rio.", pt: 'Moro no Brasil, no Rio.' }, { fr: 'Elle travaille en Suisse.', pt: 'Ela trabalha na Suíça.' }] },
      { title: 'Sem artigo depois de "être"', textPt: '*Je suis brésilien* (sem artigo, minúscula). Mas *C\'est un Brésilien* (com artigo, maiúscula: é o habitante).',
        examples: [{ fr: 'Je suis brésilienne.', pt: 'Sou brasileira.' }, { fr: "C'est une Française.", pt: 'É uma francesa.' }] },
      { title: 'Parler + língua', textPt: 'Depois de *parler*, normalmente sem artigo: *je parle portugais*. Com outros verbos, com artigo: *j\'apprends le français*.',
        examples: [{ fr: 'Tu parles anglais ?', pt: 'Você fala inglês?' }, { fr: "J'adore le portugais du Brésil.", pt: 'Adoro o português do Brasil.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Tu viens d'où ? — Je viens du Brésil.", pt: 'De onde você é? — Sou do Brasil.' }, { fr: 'Quelle est ta nationalité ?', pt: 'Qual é sua nacionalidade?' },
      { fr: 'Tu parles quelles langues ?', pt: 'Que línguas você fala?' }, { fr: "Le français est la langue officielle de vingt-neuf pays.", pt: 'O francês é a língua oficial de vinte e nove países.' }
    ] },
    { type: 'tip', textPt: '**"Brésilien" sem acento:** é *brésilien* (com é), e *le Brésil* com s (pronunciado [z]). E quando alguém perguntar *Tu parles brésilien ?*, você pode sorrir e explicar: *Au Brésil, on parle portugais !*' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Ela é brasileira."', options: ['Elle est brésilienne.', 'Elle est Brésilienne.', 'Elle est une brésilienne.', 'Elle est brésilien.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'J\'habite ___ Canada.', options: ['au', 'en', 'à', 'aux'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Nous allons ___ Argentine.', options: ['en', 'au', 'à', 'aux'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/prepositions-places', label: 'Gramática: à ou en?' }, { to: '#/gerais/transporte', label: 'Transporte' }] }
  ]
});
