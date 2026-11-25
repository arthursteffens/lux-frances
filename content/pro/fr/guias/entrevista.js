LUX.registerProGuide({
  id: 'entrevista', lang: 'fr', level: 'A2', title: 'Entrevista de emprego', titleFr: "Réussir un entretien d'embauche",
  blocks: [
    { type: 'intro', textPt: 'Perguntas que aparecem em quase toda entrevista em francês, com **respostas modelo simples** (nível A2) que você pode adaptar à sua história. Mesmo que a entrevista seja em inglês, é comum alguém testar seu francês com duas ou três perguntas — esteja pronta.' },
    { type: 'rules', items: [
      { title: '« Parlez-moi de vous. »', textPt: 'Apresentação de 1 minuto: **quem você é → trajetória → por que esta vaga**.',
        examples: [{ fr: "Je suis HR Business Partner depuis quatre ans. J'ai travaillé dans des entreprises de technologie en forte croissance. Je cherche un poste où je peux accompagner la direction.", pt: 'Sou HRBP há quatro anos. Trabalhei em empresas de tecnologia em forte crescimento. Procuro um cargo em que eu possa apoiar a diretoria.' }] },
      { title: '« Pourquoi voulez-vous nous rejoindre ? »', textPt: 'Fale do **produto**, da **fase da empresa** e de como sua experiência ajuda.',
        examples: [{ fr: "Votre produit est simple et utile, et l'entreprise grandit vite. J'aime construire des équipes dans ce contexte.", pt: 'O produto de vocês é simples e útil, e a empresa cresce rápido. Gosto de construir equipes nesse contexto.' }] },
      { title: '« Donnez-moi un exemple… »', textPt: 'Responda com uma **história curta no passado**: situação → o que você fez → resultado (com número).',
        examples: [{ fr: "L'année dernière, les départs ont augmenté. J'ai analysé les données et j'ai proposé un plan de carrière. Six mois après, les départs ont baissé de vingt pour cent.", pt: 'No ano passado, as saídas aumentaram. Analisei os dados e propus um plano de carreira. Seis meses depois, as saídas caíram 20%.' }] },
      { title: '« Un directeur n\'est pas d\'accord avec vous. Que faites-vous ? »', textPt: 'Pergunta clássica para HRBP: mostre que você **escuta**, usa **dados** e mantém a relação.',
        examples: [{ fr: "D'abord, j'écoute ses raisons. Ensuite, je montre les données. Si on n'est toujours pas d'accord, je propose un test sur trois mois.", pt: 'Primeiro, escuto as razões dele. Depois, mostro os dados. Se ainda não concordarmos, proponho um teste de três meses.' }] }
    ] },
    { type: 'table', sections: [
      { title: 'Outras perguntas frequentes', items: [
        { fr: 'Quelles sont vos qualités ?', pt: 'Quais são suas qualidades?' }, { fr: 'Quel est votre point faible ?', pt: 'Qual é o seu ponto fraco?' },
        { fr: 'Où vous voyez-vous dans cinq ans ?', pt: 'Onde você se vê daqui a cinco anos?' }, { fr: 'Quelles sont vos prétentions salariales ?', pt: 'Qual é a sua pretensão salarial?' },
        { fr: 'Quand êtes-vous disponible ?', pt: 'Quando você está disponível?' }, { fr: 'Avez-vous des questions ?', pt: 'Você tem alguma pergunta?' }
      ] },
      { title: 'Perguntas para você fazer', items: [
        { fr: "Comment se passe l'intégration ?", pt: 'Como funciona a integração?' }, { fr: "Quels sont les grands défis de l'équipe cette année ?", pt: 'Quais são os grandes desafios da equipe este ano?' },
        { fr: 'Comment mesurez-vous le succès dans ce poste ?', pt: 'Como vocês medem o sucesso neste cargo?' }, { fr: 'Quelles sont les prochaines étapes ?', pt: 'Quais são os próximos passos?' }
      ] },
      { title: 'Candidatura', items: [
        { fr: 'le CV', pt: 'o currículo' }, { fr: 'la lettre de motivation', pt: 'a carta de apresentação' }, { fr: "l'offre d'emploi", pt: 'a oferta de vaga' },
        { fr: 'postuler', pt: 'candidatar-se' }, { fr: 'la candidature', pt: 'a candidatura' }, { fr: "l'entretien vidéo", pt: 'a entrevista por vídeo' }
      ] }
    ] },
    { type: 'tip', title: '💼 Dica', textPt: '**Ponto fraco honesto e em evolução:** *"Mon français n\'est pas encore parfait, mais je l\'étudie tous les jours et je progresse vite."* Em Luxemburgo, todo mundo trabalha em línguas que não são a materna — mostrar esforço conta pontos.\n\n**Salário:** responda com uma faixa **bruta anual**: *"Entre soixante-dix et quatre-vingts mille euros brut par an, selon le package."*' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Quelles sont vos prétentions salariales ?" pergunta…', options: ['a sua pretensão salarial', 'as suas pretensões de carreira', 'o seu salário atual líquido', 'os benefícios da empresa'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Postuler" significa…', options: ['candidatar-se', 'postar nas redes', 'adiar', 'pôr um anúncio'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/pro/licao/pro-fr-a2-l02', label: 'Lição: conte sua trajetória' }, { to: '#/pro/guia/trabalhar-luxemburgo', label: 'Trabalhar em Luxemburgo' }] }
  ]
});
