LUX.registerProGuide({
  id: 'reunioes', lang: 'fr', level: 'A2', title: 'Reuniões e argumentos com dados', titleFr: 'Participer à une réunion et convaincre avec des données',
  blocks: [
    { type: 'intro', textPt: 'Frases prontas para **participar de reuniões**, dar sua opinião, **discordar com educação** e **apresentar números** — o coração de um cargo de HRBP que precisa influenciar a liderança. Comece pelas mais simples; com o tempo, elas saem naturalmente.' },
    { type: 'table', sections: [
      { title: 'Abrir e organizar', items: [
        { fr: "Merci d'être là.", pt: 'Obrigada por estarem aqui.' }, { fr: "L'objectif de la réunion, c'est de…", pt: 'O objetivo da reunião é…' },
        { fr: 'On a trente minutes.', pt: 'Temos trinta minutos.' }, { fr: 'On commence ?', pt: 'Vamos começar?' }, { fr: 'Pour résumer…', pt: 'Resumindo…' }
      ] },
      { title: 'Dar opinião', items: [
        { fr: 'À mon avis…', pt: 'Na minha opinião…' }, { fr: 'Je pense que…', pt: 'Eu acho que…' }, { fr: 'Pour moi, la priorité, c\'est…', pt: 'Para mim, a prioridade é…' },
        { fr: 'Je voudrais ajouter quelque chose.', pt: 'Eu gostaria de acrescentar algo.' }
      ] },
      { title: 'Concordar e discordar com educação', items: [
        { fr: "Je suis d'accord avec toi.", pt: 'Concordo com você.' }, { fr: "Tout à fait.", pt: 'Com certeza.' },
        { fr: "Je comprends, mais…", pt: 'Entendo, mas…' }, { fr: "Je ne suis pas sûre que ce soit la meilleure solution.", pt: 'Não tenho certeza de que seja a melhor solução.' },
        { fr: "Je vois les choses un peu différemment.", pt: 'Vejo as coisas um pouco diferente.' }
      ] },
      { title: 'Apresentar dados', items: [
        { fr: "D'après les données…", pt: 'De acordo com os dados…' }, { fr: 'Les chiffres montrent que…', pt: 'Os números mostram que…' },
        { fr: 'Le taux de départ a augmenté de trois points.', pt: 'A rotatividade subiu três pontos.' }, { fr: 'Un manager sur trois a plus de dix personnes.', pt: 'Um em cada três gestores tem mais de dez pessoas.' },
        { fr: 'Ça veut dire que…', pt: 'Isso quer dizer que…' }
      ] },
      { title: 'Propor e fechar', items: [
        { fr: 'Je propose de…', pt: 'Proponho…' }, { fr: "Qu'est-ce que vous en pensez ?", pt: 'O que vocês acham?' }, { fr: 'Qui fait quoi ?', pt: 'Quem faz o quê?' },
        { fr: 'Prochaine étape : …', pt: 'Próximo passo: …' }, { fr: 'On en reparle la semaine prochaine.', pt: 'Voltamos a falar disso semana que vem.' }
      ] },
      { title: 'Quando não entendeu', items: [
        { fr: 'Pardon, tu peux répéter ?', pt: 'Desculpa, pode repetir?' }, { fr: 'Si je comprends bien, …', pt: 'Se eu entendi bem, …' },
        { fr: "Qu'est-ce que tu veux dire par… ?", pt: 'O que você quer dizer com…?' }, { fr: 'Tu peux parler un peu plus lentement ?', pt: 'Pode falar um pouco mais devagar?' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'A estrutura que convence', textPt: 'Para influenciar com dados, use três passos: **o número → o que significa → o que você propõe**. É curto, claro e funciona em qualquer nível de francês.',
        examples: [{ fr: 'Le taux de départ est de douze pour cent. Ça veut dire que nous perdons un ingénieur par mois. Je propose deux actions.', pt: 'A rotatividade é de 12%. Isso quer dizer que perdemos um engenheiro por mês. Proponho duas ações.' }] },
      { title: 'Discordar sem "non"', textPt: 'Em francês profissional, raramente se diz só *non*. Reconheça o ponto do outro (*je comprends*) e traga um dado (*mais les chiffres montrent…*). Desafiar a liderança é esperado de um HRBP — com respeito e evidências.',
        examples: [{ fr: 'Je comprends, mais les chiffres montrent autre chose.', pt: 'Entendo, mas os números mostram outra coisa.' }] }
    ] },
    { type: 'tip', title: '💼 Dica', textPt: '**Ganhe tempo sem perder a fala:** *"Bonne question. Laisse-moi réfléchir une seconde."* (Boa pergunta, deixa eu pensar um segundo.) Ninguém espera resposta instantânea — e isso dá tempo para montar a frase em francês.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'Para discordar com educação:', options: ['Je comprends, mais…', 'Non, c\'est faux.', "Tu n'as pas raison.", "C'est nul."], answer: 0 },
      { type: 'multiple_choice', prompt: '"D\'après les données" significa…', options: ['de acordo com os dados', 'depois dos dados', 'apesar dos dados', 'antes dos dados'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/pro/licao/pro-fr-a2-l04', label: 'Lição: os números da equipe' }, { to: '#/gramatica/politeness', label: 'Gramática: pedir com educação' }] }
  ]
});
