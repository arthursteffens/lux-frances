LUX.registerProGuide({
  id: 'empresas-tech', lang: 'fr', level: 'A2', title: 'Empresas de tecnologia e fintech', titleFr: 'Le vocabulaire de la tech et de la fintech',
  blocks: [
    { type: 'intro', textPt: 'Para ser parceira do negócio, um(a) HRBP precisa **falar a língua do negócio**: produto, engenharia, crescimento, receita. Este guia traz o vocabulário de empresas de tecnologia (a maior parte) e, no fim, o de pagamentos e serviços financeiros.' },
    { type: 'table', sections: [
      { title: 'Empresa e crescimento', items: [
        { fr: 'la start-up', pt: 'a startup' }, { fr: 'la scale-up', pt: 'a scale-up (startup em crescimento acelerado)' }, { fr: 'la levée de fonds', pt: 'a rodada de investimento' },
        { fr: "l'investisseur", pt: 'o investidor' }, { fr: "le chiffre d'affaires", pt: 'o faturamento, a receita' }, { fr: 'la rentabilité', pt: 'a rentabilidade' },
        { fr: 'le compte de résultat', pt: 'o demonstrativo de resultados (P&L)' }, { fr: 'la marge', pt: 'a margem' }, { fr: 'le marché', pt: 'o mercado' }, { fr: "l'utilisateur", pt: 'o usuário' }
      ] },
      { title: 'Produto e engenharia', items: [
        { fr: 'le produit', pt: 'o produto' }, { fr: 'la feuille de route', pt: 'o roadmap' }, { fr: 'la fonctionnalité', pt: 'a funcionalidade (feature)' },
        { fr: 'le logiciel', pt: 'o software' }, { fr: "l'application", pt: 'o aplicativo' }, { fr: 'le développeur / la développeuse', pt: 'o(a) desenvolvedor(a)' },
        { fr: "l'ingénieur / l'ingénieure", pt: 'o(a) engenheiro(a)' }, { fr: 'le chef de produit', pt: 'o product manager' }, { fr: 'la mise en production', pt: 'o deploy, a publicação' },
        { fr: 'les données', pt: 'os dados' }, { fr: "l'intelligence artificielle", pt: 'a inteligência artificial' }, { fr: 'la cybersécurité', pt: 'a segurança da informação' }
      ] },
      { title: 'Jeito de trabalhar', items: [
        { fr: 'le mode hybride', pt: 'o modelo híbrido' }, { fr: 'le télétravail', pt: 'o trabalho remoto' }, { fr: "l'open space", pt: 'o escritório aberto' },
        { fr: "l'outil", pt: 'a ferramenta' }, { fr: "l'appel vidéo", pt: 'a videochamada' }, { fr: "l'échéance", pt: 'o prazo (deadline)' }, { fr: "la réunion d'équipe", pt: 'a reunião de equipe' }
      ] },
      { title: 'Fintech e pagamentos', items: [
        { fr: 'le paiement', pt: 'o pagamento' }, { fr: 'la carte bancaire', pt: 'o cartão bancário' }, { fr: 'le virement', pt: 'a transferência bancária' },
        { fr: 'la banque en ligne', pt: 'o banco digital' }, { fr: 'la conformité', pt: 'o compliance' }, { fr: 'la lutte contre le blanchiment', pt: 'o combate à lavagem de dinheiro (AML)' },
        { fr: 'la connaissance du client', pt: 'o "conheça seu cliente" (KYC)' }, { fr: 'le régulateur', pt: 'o órgão regulador' }, { fr: 'la fraude', pt: 'a fraude' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Franglais na tech', textPt: 'Em start-ups, ouve-se muito inglês misturado: *un call, une deadline, le feedback, un process*. Em documentos formais, com clientes e com a administração, prefira o francês: *un appel, une échéance, un retour, un processus*. No Québec, o francês é ainda mais preferido.',
        examples: [{ fr: 'On a un call à quinze heures pour la roadmap.', pt: 'Temos uma call às 15h sobre o roadmap. (informal)' }, { fr: 'Nous avons un appel à quinze heures sur la feuille de route.', pt: 'Temos uma ligação às 15h sobre o roadmap. (formal)' }] },
      { title: 'Ler o negócio', textPt: 'A vaga de HRBP pede para "ler um P&L". Em francês: *le compte de résultat* mostra:\n- ***le chiffre d\'affaires*** (receita)\n- ***les coûts*** (custos)\n- ***le résultat*** (lucro ou prejuízo)\n\nEm empresas de tecnologia, **a folha de pagamento costuma ser o maior custo** — por isso as decisões de pessoas são decisões de negócio.',
        examples: [{ fr: 'Les salaires représentent la plus grande partie de nos coûts.', pt: 'Os salários representam a maior parte dos nossos custos.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Quelles sont les priorités de la feuille de route ce trimestre ?', pt: 'Quais são as prioridades do roadmap neste trimestre?' },
      { fr: "Combien d'ingénieurs il faut pour ce projet ?", pt: 'Quantos engenheiros são necessários para este projeto?' },
      { fr: "Quel est l'impact sur le chiffre d'affaires ?", pt: 'Qual é o impacto na receita?' },
      { fr: 'Cette fonctionnalité sera en production en mars.', pt: 'Esta funcionalidade vai para produção em março.' }
    ] },
    { type: 'tip', title: '💼 Dica para a vaga', textPt: 'Antes de uma entrevista, prepare **3 frases sobre o negócio da empresa** (produto, clientes, como ganha dinheiro) e **3 riscos de pessoas** ligados a ele (por exemplo: falta de engenheiros seniores, gestores com equipes grandes demais, perda de cultura no crescimento). É exatamente o que a vaga chama de "pensar como líder de negócio".' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"La feuille de route" é…', options: ['o roadmap', 'a folha de pagamento', 'o mapa do escritório', 'a rota de entrega'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Le chiffre d\'affaires" é…', options: ['a receita, o faturamento', 'o número de negócios fechados', 'o lucro líquido', 'o caixa da empresa'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/pro/guia/glossario-rh', label: 'Glossário de RH' }, { to: '#/pro/licao/pro-fr-a2-l06', label: 'Lição: plano de contratações (fintech)' }] }
  ]
});
