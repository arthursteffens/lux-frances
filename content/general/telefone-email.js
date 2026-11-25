LUX.registerGeneral({
  id: 'telefone-email', group: 'situacoes', title: 'Ao telefone e por e-mail', titleFr: 'Au téléphone et par e-mail', level: 'A2',
  keywords: ['telefone', 'ligar', 'e-mail', 'mensagem', 'alô', 'atenciosamente', 'téléphone', 'appeler', 'allô', 'courriel', 'message', 'cordialement', 'ne quittez pas'],
  blocks: [
    { type: 'intro', textPt: 'Ao telefone, atende-se com ***Allô ?*** e se apresenta logo: *Bonjour, c\'est Lucas.* Os números franceses têm **10 dígitos**, lidos de **dois em dois**: *06 12 34 56 78* = *zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit*.' },
    { type: 'table', sections: [
      { title: 'Ao telefone', items: [
        { fr: 'Allô ?', pt: 'Alô?' }, { fr: "C'est de la part de qui ?", pt: 'Quem gostaria?' }, { fr: 'Ne quittez pas.', pt: 'Um momento, não desligue.' },
        { fr: 'Je vous le passe.', pt: 'Vou transferir para ele.' }, { fr: 'Il est absent.', pt: 'Ele não está.' }, { fr: 'Je peux laisser un message ?', pt: 'Posso deixar recado?' },
        { fr: 'Vous pouvez répéter ?', pt: 'Pode repetir?' }, { fr: 'Je vous entends mal.', pt: 'Estou ouvindo mal.' }, { fr: 'Je te rappelle.', pt: 'Te ligo de volta.' },
        { fr: "Vous vous êtes trompé de numéro.", pt: 'O senhor ligou para o número errado.' }
      ] },
      { title: 'Número de telefone', items: [
        { fr: 'zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit', pt: '06 12 34 56 78' },
        { fr: 'zéro quatre, soixante-dix-huit, quatre-vingt-dix, vingt et un, zéro trois', pt: '04 78 90 21 03 (fixo de Lyon)' }
      ] },
      { title: 'No e-mail', items: [
        { fr: 'Bonjour Madame, / Bonjour Monsieur,', pt: 'Prezada senhora, / Prezado senhor, (neutro)' }, { fr: 'Madame, Monsieur,', pt: 'Prezados senhores, (formal)' },
        { fr: 'Je vous écris pour…', pt: 'Escrevo-lhe para…' }, { fr: 'Vous trouverez ci-joint…', pt: 'Segue em anexo…' }, { fr: "Dans l'attente de votre réponse,", pt: 'Aguardando sua resposta,' },
        { fr: 'Cordialement,', pt: 'Atenciosamente,' }, { fr: 'Bien à vous,', pt: 'Um abraço / Atenciosamente (menos formal)' }, { fr: 'la pièce jointe', pt: 'o anexo' },
        { fr: 'arobase', pt: '@ (arroba)' }, { fr: 'point', pt: '. (ponto)' }, { fr: 'tiret', pt: '- (hífen)' }, { fr: 'tiret du bas', pt: '_ (sublinhado)' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Ditar um e-mail', textPt: '*lucas.ferreira@exemple.fr* se lê *lucas point ferreira arobase exemple point fr*. Use o alfabeto para soletrar o que for difícil.',
        examples: [{ fr: 'Mon adresse, c\'est léa point martin arobase exemple point fr.', pt: 'Meu endereço é lea.martin@exemple.fr.' }] },
      { title: 'Telefonar a alguém', textPt: '*téléphoner à quelqu\'un* (COI: *je lui téléphone*), mas *appeler quelqu\'un* (COD: *je l\'appelle*).',
        examples: [{ fr: "Je t'appelle ce soir.", pt: 'Te ligo hoje à noite.' }, { fr: 'Je lui ai téléphoné hier.', pt: 'Liguei para ele ontem.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Bonjour, je voudrais parler à Madame Bernard, s'il vous plaît.", pt: 'Bom dia, eu gostaria de falar com a Sra. Bernard, por favor.' },
      { fr: 'Vous pouvez me donner votre numéro ?', pt: 'Pode me passar o seu número?' }, { fr: "J'ai un appel manqué de ce numéro.", pt: 'Tenho uma chamada perdida deste número.' },
      { fr: 'Je vous envoie un e-mail de confirmation.', pt: 'Vou lhe enviar um e-mail de confirmação.' }
    ] },
    { type: 'tip', textPt: '**Celular na França** começa com **06** ou **07**; fixos começam com 01 (Paris), 02, 03, 04 (Lyon e sudeste) ou 05. Do exterior, troque o 0 por **+33**: *+33 6 12 34 56 78*. Treine os números de dois em dois em **Treino de ouvido › Telefones**.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Um momento, não desligue."', options: ['Ne quittez pas.', 'Ne partez pas.', 'Attendez-moi.', 'Restez là.'], answer: 0 },
      { type: 'multiple_choice', prompt: '@ em francês:', options: ['arobase', 'arrobe', 'at', 'a commercial'], answer: 0 },
      { type: 'listen_choose', audio: 'zéro six, quarante-cinq, douze, quatre-vingt-dix-huit, zéro sept', prompt: 'Ouça e escolha o número.', options: ['06 45 12 98 07', '06 45 12 78 07', '06 54 12 98 07', '06 45 02 98 17'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/treino/telefones', label: 'Treinar telefones de ouvido' }, { to: '#/gerais/alfabeto', label: 'Alfabeto e soletração' }, { to: '#/gerais/emergencias', label: 'Emergências' }] }
  ]
});
