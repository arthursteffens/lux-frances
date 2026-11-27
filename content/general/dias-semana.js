LUX.registerGeneral({
  id: 'dias-semana', group: 'tempo', title: 'Dias da semana', titleFr: 'Les jours de la semaine', level: 'A1',
  keywords: ['dia', 'dias', 'semana', 'jour', 'segunda', 'lundi', 'fim de semana', 'week-end'],
  blocks: [
    { type: 'intro', textPt: 'Os dias da semana são **masculinos**, escritos em **minúscula**, e a semana francesa **começa na segunda-feira**.' },
    { type: 'table', sections: [
      { title: 'Os 7 dias', items: [
        { fr: 'lundi', pt: 'segunda-feira', note: 'dia da Lua' }, { fr: 'mardi', pt: 'terça-feira', note: 'dia de Marte' }, { fr: 'mercredi', pt: 'quarta-feira', note: 'dia de Mercúrio' },
        { fr: 'jeudi', pt: 'quinta-feira', note: 'dia de Júpiter' }, { fr: 'vendredi', pt: 'sexta-feira', note: 'dia de Vênus' },
        { fr: 'samedi', pt: 'sábado' }, { fr: 'dimanche', pt: 'domingo' }
      ] },
      { title: 'Palavras úteis', items: [
        { fr: 'le week-end', pt: 'o fim de semana' }, { fr: 'la semaine', pt: 'a semana' }, { fr: 'en semaine', pt: 'durante a semana (dias úteis)' },
        { fr: "aujourd'hui", pt: 'hoje' }, { fr: 'demain', pt: 'amanhã' }, { fr: 'hier', pt: 'ontem' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Lundi × le lundi (a dica-chave!)', textPt: '- **Sem artigo** = um dia específico (nesta segunda, na segunda que vem ou que passou).\n- **Com artigo "le"** = hábito, toda semana.',
        examples: [{ fr: 'Lundi, je vais chez le médecin.', pt: 'Na segunda (desta semana) vou ao médico.' }, { fr: 'Le lundi, je vais à la piscine.', pt: 'Às segundas, vou à piscina.' }] },
      { title: 'Próximo e passado', textPt: '*lundi prochain* (segunda que vem), *lundi dernier* (segunda passada), *la semaine prochaine / dernière*, *ce week-end* (neste fim de semana).',
        examples: [{ fr: 'samedi prochain', pt: 'sábado que vem' }, { fr: 'la semaine dernière', pt: 'semana passada' }, { fr: 'ce week-end', pt: 'neste fim de semana' }] },
      { title: 'Com data', textPt: 'Dia da semana + número + mês, sem preposição: *lundi 3 mars*. Com artigo para uma data formal: *le lundi 3 mars*.',
        examples: [{ fr: 'mardi douze mars', pt: 'terça, 12 de março' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'On est quel jour aujourd\'hui ?', pt: 'Que dia é hoje?' },
      { fr: 'On est mercredi.', pt: 'Hoje é quarta.' },
      { fr: 'Le magasin est fermé le dimanche.', pt: 'A loja fecha aos domingos.' },
      { fr: 'Bon week-end !', pt: 'Bom fim de semana!' }
    ] },
    { type: 'tip', textPt: '**Quarta-feira na França:** muitas escolas primárias não têm aula na quarta (ou só de manhã). Por isso *le mercredi* é o "dia das crianças": cinemas e atividades ficam cheios.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Aos sábados, eu durmo até tarde."', options: ['Le samedi, je dors tard.', 'Samedi, je dors tard.', 'Au samedi, je dors tard.', 'En samedi, je dors tard.'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Segunda que vem"', options: ['lundi prochain', 'le prochain lundi', 'lundi dernier', 'lundi qui passe'], answer: 0 },
      { type: 'listen_choose', audio: 'jeudi', prompt: 'Ouça e escolha o dia.', options: ['quinta-feira', 'terça-feira', 'segunda-feira', 'sexta-feira'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/datas', label: 'Datas' }, { to: '#/gerais/meses', label: 'Meses' }] }
  ]
});
