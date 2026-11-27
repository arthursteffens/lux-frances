LUX.registerGeneral({
  id: 'horas', group: 'tempo', title: 'Horas', titleFr: "L'heure", level: 'A1',
  keywords: ['hora', 'horas', 'heure', 'relógio', 'que horas são', 'meio-dia', 'midi', 'et quart', 'et demie'],
  blocks: [
    { type: 'intro', textPt: 'Há duas formas de dizer as horas: a **formal (24 h)**, usada em horários de trem, lojas e anúncios, e a **coloquial (12 h)**, com *et quart, et demie, moins le quart*. A palavra **heure(s)** é obrigatória: *il est trois heures*.' },
    { type: 'tool', tool: 'clock' },
    { type: 'table', sections: [
      { title: 'Formal (24 h)', times: [[8, 0], [9, 15], [12, 30], [13, 5], [17, 45], [20, 40], [21, 0], [23, 59]], style: 'formal' },
      { title: 'Coloquial (12 h)', times: [[8, 0], [9, 15], [12, 30], [13, 30], [17, 45], [20, 40], [0, 0], [11, 55]], style: 'colloquial' }
    ] },
    { type: 'rules', items: [
      { title: 'Une heure (feminino)', textPt: '*heure* é feminino: **une heure**, **vingt et une heures**. Os minutos também: *dix heures vingt et une*.',
        examples: [{ fr: 'Il est une heure.', pt: 'É uma hora.' }, { fr: 'vingt et une heures', pt: '21h' }] },
      { title: 'Quart, demie, moins', textPt: '\n- ***et quart*** (e quinze)\n- ***et demie*** (e meia)\n- ***moins le quart*** (quinze para)\n- ***moins dix*** (dez para)\n\nDepois de *midi* e *minuit* escreve-se *et demi* (sem e).',
        examples: [{ fr: 'trois heures et quart', pt: '3h15' }, { fr: 'six heures moins le quart', pt: '5h45' }, { fr: 'midi et demi', pt: '12h30' }] },
      { title: 'Midi e minuit', textPt: 'Na forma coloquial, 12h = *midi*, 0h = *minuit*. Na formal: *douze heures* e *zéro heure*.',
        examples: [{ fr: 'Il est midi.', pt: 'É meio-dia.' }, { fr: 'à minuit', pt: 'à meia-noite' }] },
      { title: 'Manhã, tarde, noite', textPt: 'Para esclarecer na forma de 12 h: *du matin, de l\'après-midi, du soir*.',
        examples: [{ fr: 'huit heures du matin', pt: '8h da manhã' }, { fr: 'trois heures de l\'après-midi', pt: '3h da tarde' }, { fr: 'neuf heures du soir', pt: '9h da noite' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Quelle heure est-il ?', pt: 'Que horas são?' },
      { fr: 'Vous avez l\'heure, s\'il vous plaît ?', pt: 'O senhor tem horas, por favor?' },
      { fr: 'À quelle heure part le train ?', pt: 'A que horas sai o trem?' },
      { fr: 'Le magasin ouvre à neuf heures.', pt: 'A loja abre às nove.' },
      { fr: 'Je suis en retard !', pt: 'Estou atrasado!' }
    ] },
    { type: 'tip', textPt: '**Escrita:** em francês escreve-se **17 h 45** ou **17h45** (com "h"), raramente 17:45. Nos anúncios de estação, os horários são sempre no formato de 24 h: *le train de dix-huit heures douze*.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '5h45 (coloquial)', options: ['six heures moins le quart', 'cinq heures moins le quart', 'cinq heures et quart', 'six heures et quart'], answer: 0 },
      { type: 'multiple_choice', prompt: '"É meio-dia e meia."', options: ['Il est midi et demi.', 'Il est midi et demie.', 'Il est douze et demie.', 'Il est midi trente heures.'], answer: 0 },
      { type: 'listen_choose', audio: 'dix-neuf heures vingt', prompt: 'Ouça e escolha a hora.', options: ['19h20', '9h20', '19h02', '17h20'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/treino/horas', label: 'Treinar horas de ouvido' }] }
  ]
});
