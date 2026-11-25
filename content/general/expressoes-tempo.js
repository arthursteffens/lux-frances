LUX.registerGeneral({
  id: 'expressoes-tempo', group: 'tempo', title: 'Expressões de tempo', titleFr: 'Les expressions de temps', level: 'A2',
  keywords: ['ontem', 'hoje', 'amanhã', 'semana passada', 'próximo', 'daqui a', 'há', 'sempre', 'nunca', 'às vezes', 'hier', 'demain', 'prochain', 'dernier', 'il y a', 'dans', 'toujours', 'jamais', 'souvent'],
  blocks: [
    { type: 'intro', textPt: 'Estas expressões ajudam a escolher o **tempo verbal**: *hier* e *la semaine dernière* pedem passado; *demain* e *la semaine prochaine*, futuro; *tous les jours* e *souvent*, presente (ou imparfait, para hábitos antigos).' },
    { type: 'table', sections: [
      { title: 'Passado', items: [
        { fr: 'hier', pt: 'ontem' }, { fr: 'avant-hier', pt: 'anteontem' }, { fr: 'hier soir', pt: 'ontem à noite' }, { fr: 'la semaine dernière', pt: 'semana passada' },
        { fr: 'le mois dernier', pt: 'mês passado' }, { fr: "l'année dernière", pt: 'ano passado' }, { fr: 'il y a deux jours', pt: 'há dois dias' }, { fr: 'autrefois', pt: 'antigamente' }
      ] },
      { title: 'Presente', items: [
        { fr: "aujourd'hui", pt: 'hoje' }, { fr: 'maintenant', pt: 'agora' }, { fr: 'ce matin', pt: 'hoje de manhã' }, { fr: 'ce soir', pt: 'hoje à noite' },
        { fr: 'cette semaine', pt: 'esta semana' }, { fr: 'en ce moment', pt: 'neste momento, atualmente' }, { fr: "de nos jours", pt: 'hoje em dia' }
      ] },
      { title: 'Futuro', items: [
        { fr: 'demain', pt: 'amanhã' }, { fr: 'après-demain', pt: 'depois de amanhã' }, { fr: 'demain matin', pt: 'amanhã de manhã' }, { fr: 'la semaine prochaine', pt: 'semana que vem' },
        { fr: "l'année prochaine", pt: 'ano que vem' }, { fr: 'dans trois jours', pt: 'daqui a três dias' }, { fr: 'bientôt', pt: 'em breve' }, { fr: 'tout à l\'heure', pt: 'daqui a pouco / há pouco' }
      ] },
      { title: 'Frequência', items: [
        { fr: 'toujours', pt: 'sempre' }, { fr: 'souvent', pt: 'frequentemente' }, { fr: 'parfois / de temps en temps', pt: 'às vezes / de vez em quando' }, { fr: 'rarement', pt: 'raramente' },
        { fr: 'ne… jamais', pt: 'nunca' }, { fr: 'tous les jours', pt: 'todos os dias' }, { fr: 'une fois par semaine', pt: 'uma vez por semana' }, { fr: 'le lundi', pt: 'às segundas' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Il y a × dans', textPt: '*il y a* + tempo = há (passado); *dans* + tempo = daqui a (futuro).',
        examples: [{ fr: 'Il est parti il y a une heure.', pt: 'Ele saiu há uma hora.' }, { fr: 'Le train part dans dix minutes.', pt: 'O trem sai daqui a dez minutos.' }] },
      { title: 'Tout à l\'heure', textPt: 'Tem dois sentidos: "daqui a pouco" (com futuro) e "há pouco" (com passado). O tempo verbal resolve.',
        examples: [{ fr: 'À tout à l\'heure !', pt: 'Até daqui a pouco!' }, { fr: "Je l'ai vu tout à l'heure.", pt: 'Eu o vi há pouco.' }] },
      { title: 'Le matin, ce matin', textPt: '*le matin* = de manhã (hábito); *ce matin* = hoje de manhã. Igual para *le soir / ce soir*.',
        examples: [{ fr: 'Le matin, je bois du thé.', pt: 'De manhã, tomo chá.' }, { fr: "Ce matin, j'ai bu du café.", pt: 'Hoje de manhã tomei café.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "On se voit quand ?", pt: 'A gente se vê quando?' }, { fr: 'À demain !', pt: 'Até amanhã!' }, { fr: 'À la semaine prochaine !', pt: 'Até semana que vem!' },
      { fr: 'Ça fait longtemps !', pt: 'Quanto tempo!' }, { fr: 'Je suis là depuis une heure.', pt: 'Estou aqui há uma hora.' }
    ] },
    { type: 'tip', textPt: '**"Quanto tempo!"** ao reencontrar alguém = *Ça fait longtemps !* ou *Ça fait un bail !* (informal). Nunca traduza palavra por palavra (~~Combien de temps !~~).' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Daqui a dois dias"', options: ['dans deux jours', 'il y a deux jours', 'en deux jours', 'depuis deux jours'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Anteontem"', options: ['avant-hier', 'après-demain', 'hier soir', "l'autre jour"], answer: 0 },
      { type: 'multiple_choice', prompt: 'Hier, je ___ au cinéma.', options: ['suis allé', 'vais aller', 'irai', 'vais'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/depuis-pendant', label: 'Gramática: depuis, il y a, pendant' }, { to: '#/gerais/dias-semana', label: 'Dias da semana' }, { to: '#/gerais/horas', label: 'Horas' }] }
  ]
});
