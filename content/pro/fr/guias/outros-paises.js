LUX.registerProGuide({
  id: 'outros-paises', lang: 'fr', level: 'A2', title: 'França, Bélgica, Suíça e Québec', titleFr: 'Travailler dans les pays francophones',
  blocks: [
    { type: 'intro', textPt: 'O francês do trabalho é o mesmo em todo lugar, mas **cada país tem seus costumes, palavras e regras**. Aqui está o essencial para não se perder numa entrevista ou num primeiro dia. Regras trabalhistas mudam: confirme sempre nos sites oficiais de cada país.' },
    { type: 'rules', items: [
      { title: '🇫🇷 França', textPt: 'Jornada legal de **35 horas** por semana (com dias de folga extras, os *RTT*, em muitas empresas). Contratos **CDI** e **CDD**, como em Luxemburgo. Benefícios comuns: *la mutuelle* (plano de saúde complementar) e *les tickets-restaurant* (vale-refeição). Nas empresas maiores, os funcionários elegem o **CSE**, que representa o pessoal.',
        examples: [{ fr: 'Nous avons une mutuelle et des tickets-restaurant.', pt: 'Temos plano de saúde complementar e vale-refeição.' }] },
      { title: '🇧🇪 Bélgica', textPt: 'Bruxelas é **bilíngue** (francês e neerlandês); a Valônia fala francês. Números: ***septante*** (70) e ***nonante*** (90). Muitas empresas internacionais e instituições europeias: o inglês é comum, mas o francês (e às vezes o neerlandês) pesa muito.',
        examples: [{ fr: 'Nous sommes septante dans l\'équipe.', pt: 'Somos setenta na equipe. (Bélgica)' }] },
      { title: '🇨🇭 Suíça', textPt: 'O francês é falado na **Suíça romanda** (Genebra, Lausanne, Neuchâtel). Também se diz *septante* e *nonante* (e *huitante* para 80, no cantão de Vaud). Salários altos e custo de vida alto. Estrangeiros fora da UE têm regras de autorização bem restritas.',
        examples: [{ fr: "J'habite à Lausanne et je travaille à Genève.", pt: 'Moro em Lausanne e trabalho em Genebra.' }] },
      { title: '🇨🇦 Québec', textPt: 'O **francês é a língua oficial do trabalho** por lei. O *tu* é muito comum, inclusive com chefes. Palavras próprias: *courriel* (e-mail), *fin de semaine* (fim de semana), *magasiner* (fazer compras).',
        examples: [{ fr: 'Je t\'envoie un courriel cet après-midi.', pt: 'Te mando um e-mail hoje à tarde. (Québec)' }] }
    ] },
    { type: 'table', sections: [
      { title: 'Mesma coisa, palavras diferentes', items: [
        { fr: 'un e-mail / un courriel', pt: 'um e-mail (França / Québec)' }, { fr: 'le week-end / la fin de semaine', pt: 'o fim de semana (França / Québec)' },
        { fr: 'soixante-dix / septante', pt: '70 (França e Luxemburgo / Bélgica e Suíça)' }, { fr: 'quatre-vingt-dix / nonante', pt: '90 (França e Luxemburgo / Bélgica e Suíça)' },
        { fr: 'le petit-déjeuner / le déjeuner', pt: 'o café da manhã (França / Bélgica, Suíça, Québec)' }, { fr: 'le déjeuner / le dîner', pt: 'o almoço (França / Bélgica, Suíça, Québec)' },
        { fr: 'le dîner / le souper', pt: 'o jantar (França / Bélgica, Suíça, Québec)' }
      ] }
    ] },
    { type: 'tip', title: '💼 Dica para RH', textPt: '**Cuidado com convites para "déjeuner"**: em Paris é almoço; em Bruxelas, Genebra ou Montreal pode ser café da manhã. Na dúvida, confirme o horário: *"On se voit à quelle heure ?"*' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'Em Bruxelas, "nonante-cinq" é…', options: ['95', '75', '85', '59'], answer: 0 },
      { type: 'multiple_choice', prompt: 'No Québec, "un courriel" é…', options: ['um e-mail', 'um correio de papel', 'um curso', 'uma reunião'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/pro/guia/trabalhar-luxemburgo', label: 'Trabalhar em Luxemburgo' }, { to: '#/gerais/numeros-cardinais', label: 'Números (com as variantes belga e suíça)' }] }
  ]
});
