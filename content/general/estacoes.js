LUX.registerGeneral({
  id: 'estacoes', group: 'tempo', title: 'Estações do ano', titleFr: 'Les saisons', level: 'A1',
  keywords: ['estação', 'estações', 'primavera', 'verão', 'outono', 'inverno', 'saison', 'printemps', 'été', 'automne', 'hiver'],
  blocks: [
    { type: 'intro', textPt: 'As quatro estações são **masculinas**. Atenção à preposição: ***au** printemps*, mas ***en** été, **en** automne, **en** hiver* (antes de vogal ou h mudo, usa-se *en*). Lembre também que, na França, o verão é em **junho, julho e agosto** — o contrário do Brasil!' },
    { type: 'table', sections: [
      { title: 'As estações', items: [
        { fr: 'le printemps', pt: 'a primavera', note: '21 de março a 20 de junho' }, { fr: "l'été", pt: 'o verão', note: '21 de junho a 22 de setembro' },
        { fr: "l'automne", pt: 'o outono', note: '23 de setembro a 20 de dezembro' }, { fr: "l'hiver", pt: 'o inverno', note: '21 de dezembro a 20 de março' }
      ] },
      { title: 'Com preposição', items: [
        { fr: 'au printemps', pt: 'na primavera' }, { fr: 'en été', pt: 'no verão' }, { fr: 'en automne', pt: 'no outono' }, { fr: 'en hiver', pt: 'no inverno' },
        { fr: 'cet été', pt: 'neste verão' }, { fr: "l'hiver dernier", pt: 'no inverno passado' }, { fr: "l'été prochain", pt: 'no próximo verão' }
      ] },
      { title: 'Palavras de cada estação', items: [
        { fr: 'les fleurs', pt: 'as flores' }, { fr: 'les vacances', pt: 'as férias' }, { fr: 'la plage', pt: 'a praia' }, { fr: 'les feuilles mortes', pt: 'as folhas secas' },
        { fr: 'la rentrée', pt: 'a volta às aulas (setembro)' }, { fr: 'la neige', pt: 'a neve' }, { fr: 'le ski', pt: 'o esqui' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Au ou en?', textPt: '*Printemps* começa com consoante → *au printemps*. As outras começam com vogal → *en été, en automne, en hiver*.',
        examples: [{ fr: 'Au printemps, il y a des fleurs partout.', pt: 'Na primavera há flores por toda parte.' }, { fr: 'En hiver, il fait froid.', pt: 'No inverno faz frio.' }] },
      { title: 'Estações invertidas', textPt: 'Quando é verão no Brasil, é inverno na França. O Natal francês é **frio** e às vezes com neve; as férias grandes (*les grandes vacances*) são em **julho e agosto**.',
        examples: [{ fr: 'Au Brésil, Noël est en été.', pt: 'No Brasil, o Natal é no verão.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Quelle est ta saison préférée ?', pt: 'Qual é sua estação preferida?' }, { fr: "Je préfère l'automne, j'adore les couleurs.", pt: 'Prefiro o outono, adoro as cores.' },
      { fr: 'En été, les journées sont longues.', pt: 'No verão, os dias são longos.' }, { fr: "C'est la rentrée !", pt: 'É a volta às aulas!' }
    ] },
    { type: 'tip', textPt: '**La rentrée** (início de setembro) é quase um "ano-novo" na França: crianças voltam à escola, adultos voltam das férias, lojas fazem promoções de material escolar e muitos começam projetos novos. Você vai ouvir muito *Bonne rentrée !*' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"No inverno"', options: ['en hiver', 'au hiver', 'à hiver', 'dans hiver'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Na primavera"', options: ['au printemps', 'en printemps', 'à printemps', 'dans le printemps'], answer: 0 },
      { type: 'listen_choose', audio: "l'automne", prompt: 'Ouça e escolha.', options: ['o outono', 'o verão', 'o inverno', 'a primavera'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/meses', label: 'Meses' }, { to: '#/gerais/clima', label: 'Clima e tempo' }, { to: '#/gerais/feriados', label: 'Feriados' }] }
  ]
});
