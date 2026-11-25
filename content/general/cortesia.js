LUX.registerGeneral({
  id: 'cortesia', group: 'comunicacao', title: 'Cortesia e fórmulas prontas', titleFr: 'La politesse', level: 'A1',
  keywords: ['por favor', 'obrigado', 'de nada', 'desculpa', 'com licença', 'educação', "s'il vous plaît", 'merci', 'pardon', 'excusez-moi', 'de rien', 'politesse'],
  blocks: [
    { type: 'intro', textPt: 'As "palavras mágicas" são indispensáveis na França. Pedir sem *s\'il vous plaît* ou ir embora sem *merci, au revoir* é visto como grosseria. Para pedidos, prefira *je voudrais* a *je veux*.' },
    { type: 'table', sections: [
      { title: 'Por favor e obrigado', items: [
        { fr: "s'il vous plaît", pt: 'por favor (vous)' }, { fr: "s'il te plaît", pt: 'por favor (tu)' }, { fr: 'merci', pt: 'obrigado(a)' },
        { fr: 'merci beaucoup', pt: 'muito obrigado(a)' }, { fr: 'merci mille fois', pt: 'mil vezes obrigado' }, { fr: 'de rien', pt: 'de nada' },
        { fr: 'je vous en prie', pt: 'não há de quê (formal)' }, { fr: 'avec plaisir', pt: 'com prazer' }
      ] },
      { title: 'Desculpas e licença', items: [
        { fr: 'pardon', pt: 'desculpe; com licença; como?' }, { fr: 'excusez-moi', pt: 'com licença; me desculpe' }, { fr: 'désolé(e)', pt: 'sinto muito' },
        { fr: 'je suis vraiment désolé(e)', pt: 'sinto muitíssimo' }, { fr: "ce n'est pas grave", pt: 'não tem problema' }, { fr: 'pas de problème', pt: 'sem problema' }
      ] },
      { title: 'Pedidos educados', items: [
        { fr: 'Je voudrais…', pt: 'Eu queria…' }, { fr: 'Vous pourriez… ?', pt: 'O senhor poderia…?' }, { fr: 'Est-ce que je peux… ?', pt: 'Posso…?' },
        { fr: 'Ça vous dérange si… ?', pt: 'Incomoda se…?' }, { fr: 'Après vous !', pt: 'Pode passar! (ceder a vez)' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Pardon × excusez-moi', textPt: '*Pardon* serve para esbarrar em alguém, passar no meio das pessoas ou pedir que repitam ("Pardon ?"). *Excusez-moi* é melhor para **chamar a atenção** ou começar uma pergunta.',
        examples: [{ fr: 'Excusez-moi, où sont les toilettes ?', pt: 'Com licença, onde fica o banheiro?' }, { fr: 'Pardon ? Vous pouvez répéter ?', pt: 'Como? Pode repetir?' }] },
      { title: 'Merci = não, obrigado', textPt: 'Quando alguém oferece algo, *merci* sozinho (às vezes com um gesto) pode significar **"não, obrigado"**. Para aceitar, diga *oui, merci* ou *avec plaisir*.',
        examples: [{ fr: 'Encore du café ? — Merci, ça va.', pt: 'Mais café? — Não, obrigado, estou bem.' }, { fr: 'Oui, avec plaisir !', pt: 'Sim, com prazer!' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Vous pouvez parler plus lentement, s\'il vous plaît ?', pt: 'O senhor pode falar mais devagar, por favor?' },
      { fr: "Je ne comprends pas, vous pouvez répéter ?", pt: 'Não entendo, pode repetir?' },
      { fr: 'Comment on dit « saudade » en français ?', pt: 'Como se diz "saudade" em francês?' },
      { fr: 'Merci pour tout !', pt: 'Obrigado por tudo!' }
    ] },
    { type: 'tip', textPt: '**Dica de sobrevivência:** se a pessoa fala rápido demais, diga com um sorriso: *Désolé(e), je suis brésilien(ne), je parle un peu français. Vous pouvez parler plus lentement ?* Quase todo mundo desacelera — e muitos vão querer falar do Brasil com você!' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'Para chamar a atenção de um desconhecido na rua:', options: ['Excusez-moi…', 'Pardon ?', 'Salut !', 'De rien.'], answer: 0 },
      { type: 'multiple_choice', prompt: '"De nada" (formal, elegante)', options: ['Je vous en prie.', 'Merci à vous.', "S'il vous plaît.", 'Pas de quoi faire.'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/politeness', label: 'Gramática: pedir com educação' }, { to: '#/gerais/saudacoes', label: 'Saudações' }] }
  ]
});
