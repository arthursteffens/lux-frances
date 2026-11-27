LUX.registerGeneral({
  id: 'meses', group: 'tempo', title: 'Meses', titleFr: 'Les mois', level: 'A1',
  keywords: ['mês', 'meses', 'mois', 'calendário', 'janeiro', 'março', 'julho', 'agosto'],
  blocks: [
    { type: 'intro', textPt: 'Os meses são todos **masculinos** e se escrevem com **letra minúscula**. Para dizer "em março", use *en mars* ou *au mois de mars*.' },
    { type: 'table', sections: [
      { title: 'Os 12 meses', items: [
        { fr: 'janvier', pt: 'janeiro', note: 'abrev. janv.' }, { fr: 'février', pt: 'fevereiro', note: 'abrev. févr.' }, { fr: 'mars', pt: 'março', note: 'o s final soa: /maʁs/' },
        { fr: 'avril', pt: 'abril' }, { fr: 'mai', pt: 'maio' }, { fr: 'juin', pt: 'junho', note: 'não confunda com juillet' },
        { fr: 'juillet', pt: 'julho', note: 'abrev. juil.' }, { fr: 'août', pt: 'agosto', note: 'pronúncia: /u/ ou /ut/' }, { fr: 'septembre', pt: 'setembro', note: 'abrev. sept.' },
        { fr: 'octobre', pt: 'outubro', note: 'abrev. oct.' }, { fr: 'novembre', pt: 'novembro', note: 'abrev. nov.' }, { fr: 'décembre', pt: 'dezembro', note: 'abrev. déc.' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Em + mês', textPt: '**en** + mês, ou **au mois de** + mês. Os dois significam "em".',
        examples: [{ fr: 'en janvier', pt: 'em janeiro' }, { fr: 'au mois de mai', pt: 'no mês de maio' }, { fr: "en août, il fait chaud.", pt: 'Em agosto faz calor.' }] },
      { title: 'Início, meio e fim', textPt: '\n- ***début mars*** (início de março)\n- ***mi-mars*** (meados de março)\n- ***fin mars*** (fim de março)\n\nTudo sem preposição.',
        examples: [{ fr: 'début septembre', pt: 'no início de setembro' }, { fr: 'fin décembre', pt: 'no fim de dezembro' }] },
      { title: 'Juin × juillet', textPt: 'Os franceses também confundem ao ouvir! Na fala, às vezes dizem *juillet* destacando bem o "-et", e *juin* com som nasal curto.',
        examples: [{ fr: 'juin', pt: 'junho' }, { fr: 'juillet', pt: 'julho' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Mon anniversaire est en mai.', pt: 'Meu aniversário é em maio.' },
      { fr: 'On part en vacances fin juillet.', pt: 'A gente sai de férias no fim de julho.' },
      { fr: 'Les cours commencent début septembre.', pt: 'As aulas começam no início de setembro.' },
      { fr: 'En France, tout le monde part en août.', pt: 'Na França, todo mundo viaja em agosto.' }
    ] },
    { type: 'tip', textPt: '**Agosto na França:** muitas lojas e restaurantes fecham em agosto (*fermeture annuelle*), e a *rentrée* (volta às aulas e ao trabalho) em setembro é um grande acontecimento.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Em março"', options: ['en mars', 'au mars', 'dans mars', 'à mars'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Qual está escrito corretamente?', options: ['le 3 juin', 'le 3 Juin', 'le 3 JUIN', 'le 3 Juin.'], answer: 0, explanationPt: 'Meses com minúscula.' },
      { type: 'listen_choose', audio: 'juillet', prompt: 'Ouça e escolha o mês.', options: ['julho', 'junho', 'janeiro', 'abril'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/datas', label: 'Datas' }, { to: '#/treino/datas', label: 'Treinar datas de ouvido' }] }
  ]
});
