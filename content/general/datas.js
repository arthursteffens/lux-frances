LUX.registerGeneral({
  id: 'datas', group: 'tempo', title: 'Datas', titleFr: 'Les dates', level: 'A1',
  keywords: ['data', 'datas', 'date', 'que dia é hoje', 'le premier', 'aniversário', 'calendário'],
  blocks: [
    { type: 'intro', textPt: 'Ordem da data em francês: **(dia da semana) + le + número + mês + ano**: *le 14 juillet 2026*. O formato numérico é **dd/mm/aaaa**, igual ao Brasil.' },
    { type: 'tool', tool: 'today' },
    { type: 'table', sections: [
      { title: 'Exemplos', dates: [[1, 1, null], [14, 7, 1789], [25, 12, null], [1, 5, 2026], [21, 6, null], [8, 3, null]] }
    ] },
    { type: 'rules', items: [
      { title: 'Le premier', textPt: 'Só o primeiro dia do mês é ordinal: *le premier avril*. Os outros são cardinais: *le deux avril, le trente et un mai*.',
        examples: [{ fr: 'le premier avril', pt: '1º de abril' }, { fr: 'le trente et un mai', pt: '31 de maio' }] },
      { title: 'Artigo "le", sem "de"', textPt: 'Não se usa "de" entre o dia e o mês: *le 3 mars* (e não *le 3 de mars*). "Em 3 de março" = *le 3 mars*.',
        examples: [{ fr: 'Je pars le trois mars.', pt: 'Viajo em 3 de março.' }] },
      { title: 'Perguntar a data', textPt: '*Quelle est la date aujourd\'hui ?* ou, mais informal, *On est le combien aujourd\'hui ?* Resposta: *On est le 12.* ou *Nous sommes le 12 mars.*',
        examples: [{ fr: 'On est le combien ?', pt: 'Que dia é hoje (do mês)?' }, { fr: 'Nous sommes le douze mars.', pt: 'Hoje é 12 de março.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Quelle est la date aujourd'hui ?", pt: 'Qual é a data de hoje?' },
      { fr: "C'est quand, ton anniversaire ?", pt: 'Quando é o seu aniversário?' },
      { fr: 'Mon anniversaire, c\'est le vingt-deux octobre.', pt: 'Meu aniversário é 22 de outubro.' },
      { fr: 'Le rendez-vous est le lundi trois mars à dix heures.', pt: 'A consulta é na segunda, 3 de março, às dez.' }
    ] },
    { type: 'tip', textPt: '**O 14 de julho** (*le 14 Juillet*, a festa nacional) e o **1º de maio** (*le 1er Mai*, dia do trabalho) são escritos com maiúscula quando se referem ao feriado.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"1º de janeiro"', options: ['le premier janvier', 'le un janvier', 'le 1 de janvier', 'premier de janvier'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Em 5 de maio"', options: ['le cinq mai', 'en cinq mai', 'le cinq de mai', 'au cinq mai'], answer: 0 },
      { type: 'listen_choose', audio: 'le vingt et un juin', prompt: 'Ouça e escolha a data.', options: ['21/06', '21/07', '20/06', '01/06'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/treino/datas', label: 'Treinar datas de ouvido' }, { to: '#/gerais/meses', label: 'Meses' }, { to: '#/gerais/dias-semana', label: 'Dias da semana' }] }
  ]
});
