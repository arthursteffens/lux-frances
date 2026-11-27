LUX.registerProGuide({
  id: 'emails', lang: 'fr', level: 'A2', title: 'E-mails e mensagens', titleFr: 'Écrire des e-mails professionnels',
  blocks: [
    { type: 'intro', textPt: 'O e-mail profissional em francês segue fórmulas bem fixas. Aprenda as principais e você vai escrever rápido e com o tom certo. No chat interno (Slack, Teams), o tom é mais curto e informal — mas a cortesia continua.' },
    { type: 'table', sections: [
      { title: 'Saudação', items: [
        { fr: 'Bonjour Madame Muller,', pt: 'Prezada Sra. Muller, (formal)' }, { fr: 'Bonjour Thomas,', pt: 'Olá, Thomas, (colega)' },
        { fr: 'Madame, Monsieur,', pt: 'Prezados senhores, (quando não se sabe o nome)' }, { fr: 'Bonjour à tous,', pt: 'Olá a todos,' }
      ] },
      { title: 'Abertura', items: [
        { fr: 'Je vous écris au sujet de…', pt: 'Escrevo a respeito de…' }, { fr: 'Suite à notre réunion de mardi, …', pt: 'Em seguida à nossa reunião de terça, …' },
        { fr: 'Comme convenu, …', pt: 'Conforme combinado, …' }, { fr: 'Je me permets de vous relancer.', pt: 'Tomo a liberdade de retomar o assunto (cobrança educada).' }
      ] },
      { title: 'Pedidos e anexos', items: [
        { fr: 'Pourriez-vous me confirmer… ?', pt: 'Poderia me confirmar…?' }, { fr: 'Merci de me dire si…', pt: 'Por favor, me diga se…' },
        { fr: 'Vous trouverez ci-joint…', pt: 'Segue em anexo…' }, { fr: 'Je reste à votre disposition.', pt: 'Fico à disposição.' }
      ] },
      { title: 'Encerramento', items: [
        { fr: 'Cordialement,', pt: 'Atenciosamente, (padrão)' }, { fr: 'Bien cordialement,', pt: 'Cordialmente, (um pouco mais caloroso)' },
        { fr: 'Bonne journée,', pt: 'Bom dia/Tenha um bom dia,' }, { fr: 'Bonne fin de journée,', pt: 'Bom final de dia,' }, { fr: 'À bientôt,', pt: 'Até breve,' }
      ] },
      { title: 'No chat', items: [
        { fr: 'Tu as cinq minutes ?', pt: 'Tem cinco minutos?' }, { fr: 'Je reviens vers toi demain.', pt: 'Te dou retorno amanhã.' },
        { fr: 'Pas de souci.', pt: 'Sem problema.' }, { fr: 'Je regarde et je te dis.', pt: 'Vou ver e te falo.' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Madame / Monsieur + sobrenome', textPt: 'No formal, use ***Madame*** ou ***Monsieur*** + **sobrenome** (*Bonjour Madame Muller*), nunca o primeiro nome (~~Madame Sophie~~). Entre colegas, o primeiro nome basta: *Bonjour Sophie*.',
        examples: [{ fr: 'Bonjour Monsieur Weber, je vous écris au sujet du contrat.', pt: 'Prezado Sr. Weber, escrevo a respeito do contrato.' }] },
      { title: 'Um e-mail completo', textPt: 'Estrutura: **saudação → contexto → pedido → próximo passo → encerramento**.',
        examples: [{ fr: 'Bonjour Laura, suite à notre réunion, vous trouverez ci-joint le plan de recrutement. Pourriez-vous me confirmer les priorités avant jeudi ? Bien cordialement, Marina', pt: 'Olá, Laura, em seguida à nossa reunião, segue em anexo o plano de contratações. Poderia me confirmar as prioridades até quinta? Cordialmente, Marina' }] }
    ] },
    { type: 'tip', title: '💼 Dica', textPt: '**Evite traduzir "Abraço" e "Beijos"**. *Bisous* é só para amigos. No trabalho, o mais caloroso aceitável costuma ser *Belle journée* ou *À bientôt*. E **cuidado com o "vous" no e-mail**: mesmo com quem você trata por *tu* no escritório, alguns e-mails formais (com cópia para a diretoria, por exemplo) pedem *vous*.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Segue em anexo o contrato" em francês:', options: ['Vous trouverez ci-joint le contrat.', 'Suit en annexe le contrat.', 'Voici attaché le contrat.', 'Je vous suis le contrat.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Encerramento padrão de um e-mail profissional:', options: ['Cordialement,', 'Bisous,', 'Salut,', 'Grosses bises,'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/telefone-email', label: 'Telefone e e-mail (Gerais)' }, { to: '#/pro/licao/pro-fr-a2-l06', label: 'Lição: e-mail com plano para a diretoria' }] }
  ]
});
