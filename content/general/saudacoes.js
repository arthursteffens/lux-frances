LUX.registerGeneral({
  id: 'saudacoes', group: 'comunicacao', title: 'Saudações e despedidas', titleFr: 'Saluer et prendre congé', level: 'A1',
  keywords: ['oi', 'olá', 'bom dia', 'boa noite', 'tchau', 'até logo', 'cumprimentar', 'beijo', 'bonjour', 'salut', 'bonsoir', 'au revoir', 'à bientôt', 'bise'],
  blocks: [
    { type: 'intro', textPt: 'Na França, **cumprimentar é obrigatório**: diga *bonjour* ao entrar numa loja, no ônibus, no elevador, na padaria. *Bonjour* vale até o fim da tarde; depois, *bonsoir*. Entre amigos, *salut*.' },
    { type: 'table', sections: [
      { title: 'Cumprimentar', items: [
        { fr: 'Bonjour !', pt: 'Bom dia! / Boa tarde! / Olá!' }, { fr: 'Bonsoir !', pt: 'Boa noite! (ao chegar)' }, { fr: 'Salut !', pt: 'Oi! (informal)' },
        { fr: 'Coucou !', pt: 'Oi! (muito informal, família e amigos)' }, { fr: 'Bonjour madame / monsieur.', pt: 'Bom dia, senhora / senhor.' }
      ] },
      { title: 'Perguntar como vai', items: [
        { fr: 'Comment allez-vous ?', pt: 'Como vai o senhor / a senhora?' }, { fr: 'Comment ça va ?', pt: 'Como vai?' }, { fr: 'Ça va ?', pt: 'Tudo bem?' },
        { fr: 'Ça va bien, merci. Et vous ?', pt: 'Vou bem, obrigado. E o senhor?' }, { fr: 'Pas mal.', pt: 'Nada mal.' }, { fr: 'Bof…', pt: 'Mais ou menos…' }
      ] },
      { title: 'Despedir-se', items: [
        { fr: 'Au revoir !', pt: 'Tchau! Até logo!' }, { fr: 'Bonne journée !', pt: 'Bom dia! (ao sair, de dia)' }, { fr: 'Bonne soirée !', pt: 'Boa noite! (ao sair, à noite)' },
        { fr: 'Bonne nuit !', pt: 'Boa noite! (antes de dormir)' }, { fr: 'À bientôt !', pt: 'Até breve!' }, { fr: 'À demain !', pt: 'Até amanhã!' },
        { fr: 'À plus ! / À plus tard !', pt: 'Até mais!' }, { fr: 'Salut !', pt: 'Tchau! (informal)' }, { fr: 'Bon week-end !', pt: 'Bom fim de semana!' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Bonsoir × bonne nuit', textPt: '*Bonsoir* cumprimenta à noite (ao chegar ou ao sair). *Bonne nuit* só antes de alguém ir **dormir**.',
        examples: [{ fr: 'Bonsoir, une table pour deux ?', pt: 'Boa noite, uma mesa para dois?' }, { fr: 'Bonne nuit, fais de beaux rêves !', pt: 'Boa noite, bons sonhos!' }] },
      { title: 'A bise', textPt: 'Entre amigos e família, os franceses dão **beijinhos no rosto** (*la bise*): 2 em Paris e Lyon, 3 ou 4 em algumas regiões. No trabalho e com desconhecidos, aperta-se a mão (*serrer la main*).',
        examples: [{ fr: 'On se fait la bise ?', pt: 'Vamos nos cumprimentar com beijinho?' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Enchanté(e) !', pt: 'Muito prazer!' }, { fr: 'Ravi(e) de vous rencontrer.', pt: 'Prazer em conhecê-lo(a).' },
      { fr: 'Ça fait longtemps !', pt: 'Quanto tempo!' }, { fr: 'Bonne continuation !', pt: 'Tudo de bom! (seguimento)' }
    ] },
    { type: 'tip', textPt: '**Bonne journée × bonjour:** *bonjour* é para **chegar**; *bonne journée* é para **ir embora** ("tenha um bom dia"). O caixa da padaria vai dizer *Merci, bonne journée !* — responda *Vous aussi !* ou *Merci, à vous aussi !*' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'Ao sair de uma loja às 15h, você diz…', options: ['Bonne journée !', 'Bonjour !', 'Bonne nuit !', 'Bonsoir !'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Tudo bem?" (informal)', options: ['Ça va ?', 'Comment allez-vous ?', 'Vous allez ?', 'Tout bien ?'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/cortesia', label: 'Cortesia' }, { to: '#/gerais/tu-vous', label: 'Tu ou vous?' }] }
  ]
});
