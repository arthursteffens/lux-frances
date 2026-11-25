LUX.registerGeneral({
  id: 'fracoes', group: 'numeros', title: 'Frações, decimais e porcentagens', titleFr: 'Fractions, décimales et pourcentages', level: 'A2',
  keywords: ['fração', 'frações', 'metade', 'terço', 'quarto', 'decimal', 'vírgula', 'porcentagem', 'por cento', 'moitié', 'quart', 'tiers', 'pour cent', 'virgule'],
  blocks: [
    { type: 'intro', textPt: 'As frações mais comuns têm nomes próprios (*la moitié, un tiers, un quart*); as outras usam o **ordinal**: *un cinquième* (1/5), *trois dixièmes* (3/10). Nos decimais, o francês usa **vírgula**, como o português: *2,5* = *deux virgule cinq*.' },
    { type: 'table', sections: [
      { title: 'Frações', items: [
        { fr: 'un demi / la moitié', pt: '1/2 (meio / a metade)', note: '"un demi" em contas; "la moitié" no dia a dia' },
        { fr: 'un tiers', pt: '1/3' }, { fr: 'deux tiers', pt: '2/3' },
        { fr: 'un quart', pt: '1/4' }, { fr: 'trois quarts', pt: '3/4' },
        { fr: 'un cinquième', pt: '1/5' }, { fr: 'un dixième', pt: '1/10' }, { fr: 'un centième', pt: '1/100' }
      ] },
      { title: 'Decimais e porcentagens', items: [
        { fr: 'zéro virgule cinq', pt: '0,5' }, { fr: 'deux virgule cinq', pt: '2,5' }, { fr: 'trois virgule quatorze', pt: '3,14' },
        { fr: 'dix pour cent', pt: '10 %' }, { fr: 'cinquante pour cent', pt: '50 %' }, { fr: 'cent pour cent', pt: '100 %' },
        { fr: 'deux virgule cinq pour cent', pt: '2,5 %' }
      ] },
      { title: 'No dia a dia', items: [
        { fr: 'une demi-heure', pt: 'meia hora' }, { fr: 'un quart d\'heure', pt: 'quinze minutos' }, { fr: 'trois quarts d\'heure', pt: 'quarenta e cinco minutos' },
        { fr: 'un demi-litre', pt: 'meio litro' }, { fr: 'une demi-baguette', pt: 'meia baguete' }, { fr: 'la moitié du gâteau', pt: 'metade do bolo' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Demi antes e depois', textPt: 'Antes do substantivo, *demi* é **invariável** e leva hífen: *une demi-heure*. Depois, concorda em gênero: *une heure et demie*, *deux kilos et demi*.',
        examples: [{ fr: 'une demi-heure', pt: 'meia hora' }, { fr: 'une heure et demie', pt: 'uma hora e meia' }] },
      { title: 'La moitié de', textPt: '"Metade de" = *la moitié de* (+ artigo). *La moitié des Français* = metade dos franceses. O verbo pode ir no plural.',
        examples: [{ fr: 'La moitié des élèves sont absents.', pt: 'Metade dos alunos está ausente.' }] },
      { title: 'Pour cent', textPt: 'Escreve-se **10 %** (com espaço) e lê-se *dix pour cent*. "Desconto de 30%" = *moins trente pour cent* ou *trente pour cent de réduction*.',
        examples: [{ fr: 'moins trente pour cent', pt: '30% de desconto' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Je voudrais une demi-baguette, s\'il vous plaît.', pt: 'Eu queria meia baguete, por favor.' },
      { fr: 'Le trajet dure trois quarts d\'heure.', pt: 'O trajeto dura quarenta e cinco minutos.' },
      { fr: "C'est en soldes à moins cinquante pour cent.", pt: 'Está em liquidação com 50% de desconto.' },
      { fr: 'Un tiers des habitants a moins de vingt ans.', pt: 'Um terço dos habitantes tem menos de vinte anos.' }
    ] },
    { type: 'tip', textPt: '**Ponto × vírgula:** em francês, como em português, a vírgula separa os decimais (*1,5*) e o **espaço** separa os milhares (*1 500 000*). Em textos em inglês você verá o contrário — atenção ao ler preços na internet!' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '3/4', options: ['trois quarts', 'trois quatres', 'trois quatrièmes', 'trois tiers'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Meia hora"', options: ['une demi-heure', 'une heure demie', 'une demie-heure', 'une moitié heure'], answer: 0 },
      { type: 'listen_choose', audio: 'quatre virgule sept', prompt: 'Ouça e escolha.', options: ['4,7', '4,07', '47', '7,4'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/numeros-cardinais', label: 'Números cardinais' }, { to: '#/gerais/numeros-ordinais', label: 'Números ordinais' }, { to: '#/gerais/medidas', label: 'Medidas e pesos' }] }
  ]
});
