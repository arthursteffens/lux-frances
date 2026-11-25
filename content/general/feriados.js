LUX.registerGeneral({
  id: 'feriados', group: 'tempo', title: 'Feriados e datas comemorativas', titleFr: 'Les jours fériés et les fêtes', level: 'A2',
  keywords: ['feriado', 'festa', 'natal', 'ano-novo', 'páscoa', '14 de julho', 'jour férié', 'Noël', 'Pâques', 'Toussaint', 'fête nationale', 'fête de la musique'],
  blocks: [
    { type: 'intro', textPt: 'A França tem **11 feriados nacionais** (*jours fériés*). Quando um feriado cai numa quinta ou numa terça, muitos franceses *font le pont* ("fazem a ponte"): emendam com o fim de semana. Em maio há tantos feriados que se fala do "mês das pontes"!' },
    { type: 'table', sections: [
      { title: 'Feriados nacionais', items: [
        { fr: 'le jour de l\'An', pt: '1º de janeiro — Ano-Novo' }, { fr: 'le lundi de Pâques', pt: 'segunda-feira de Páscoa (março/abril)' },
        { fr: 'la fête du Travail', pt: '1º de maio — Dia do Trabalho', note: 'dá-se um raminho de muguet (lírio-do-vale)' },
        { fr: 'le 8 mai', pt: '8 de maio — fim da Segunda Guerra na Europa' }, { fr: "l'Ascension", pt: 'Ascensão (quinta-feira, 40 dias após a Páscoa)' },
        { fr: 'le lundi de Pentecôte', pt: 'segunda-feira de Pentecostes' }, { fr: 'le 14 juillet', pt: '14 de julho — Festa Nacional', note: 'desfile e fogos de artifício' },
        { fr: "l'Assomption", pt: '15 de agosto — Assunção' }, { fr: 'la Toussaint', pt: '1º de novembro — Todos os Santos' },
        { fr: 'le 11 novembre', pt: '11 de novembro — Armistício de 1918' }, { fr: 'Noël', pt: '25 de dezembro — Natal' }
      ] },
      { title: 'Outras datas', items: [
        { fr: 'la Chandeleur', pt: '2 de fevereiro — dia de comer crêpes' }, { fr: 'la Saint-Valentin', pt: '14 de fevereiro — Dia dos Namorados' },
        { fr: 'la fête des Mères', pt: 'Dia das Mães (fim de maio)' }, { fr: 'la fête de la musique', pt: '21 de junho — shows grátis nas ruas' },
        { fr: 'la fête des Lumières', pt: '8 de dezembro — Lyon iluminada' }, { fr: 'le réveillon', pt: 'a ceia (24/12 e 31/12)' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Votos', textPt: '*Joyeux Noël !* (Feliz Natal!), *Bonne année !* (Feliz Ano-Novo! — diz-se durante todo o mês de janeiro), *Joyeuses Pâques !* (Feliz Páscoa!), *Bonnes fêtes !* (Boas festas!).',
        examples: [{ fr: 'Bonne année et bonne santé !', pt: 'Feliz ano-novo e muita saúde!' }, { fr: 'Joyeux Noël à toute la famille !', pt: 'Feliz Natal para toda a família!' }] },
      { title: 'Le 14 juillet', textPt: 'Os franceses quase não dizem "la Bastille" ou "fête nationale" no dia a dia: dizem simplesmente *le 14 juillet* (o "quatorze juillet").',
        examples: [{ fr: 'Tu fais quoi pour le 14 juillet ?', pt: 'O que você vai fazer no 14 de julho?' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Le lundi de Pâques, c'est férié.", pt: 'A segunda-feira de Páscoa é feriado.' }, { fr: 'On fait le pont jeudi ?', pt: 'Vamos emendar o feriado de quinta?' },
      { fr: 'Le magasin est fermé les jours fériés.', pt: 'A loja fecha nos feriados.' }, { fr: "On va voir le feu d'artifice !", pt: 'Vamos ver a queima de fogos!' }
    ] },
    { type: 'tip', textPt: '**Carnaval não é feriado na França!** E a *Toussaint* (1º de novembro) é o dia em que as famílias levam crisântemos ao cemitério — por isso **nunca dê crisântemos de presente**.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'O Dia da Festa Nacional francesa é…', options: ['le 14 juillet', 'le 1er mai', 'le 11 novembre', 'le 8 mai'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Feliz Ano-Novo!"', options: ['Bonne année !', 'Joyeuse année !', 'Bon an neuf !', 'Heureux an !'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Faire le pont" =', options: ['emendar um feriado', 'atravessar a ponte', 'construir uma ponte', 'trabalhar no feriado'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/datas', label: 'Datas' }, { to: '#/gerais/meses', label: 'Meses' }, { to: '#/gerais/estacoes', label: 'Estações do ano' }] }
  ]
});
