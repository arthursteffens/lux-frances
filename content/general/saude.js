LUX.registerGeneral({
  id: 'saude', group: 'situacoes', title: 'Corpo, saúde e farmácia', titleFr: 'Le corps, la santé et la pharmacie', level: 'A2',
  keywords: ['corpo', 'saúde', 'dor', 'médico', 'farmácia', 'remédio', 'doente', 'febre', 'cabeça', 'corps', 'santé', 'mal', 'médecin', 'pharmacie', 'médicament', 'fièvre', 'tête'],
  blocks: [
    { type: 'intro', textPt: 'Para dizer onde dói, use ***avoir mal* + à + parte do corpo**: *J\'ai mal **à la** tête, **au** ventre, **aux** dents*. Na França, a farmácia (com a cruz verde) dá muitos conselhos — e vários remédios só são vendidos lá.' },
    { type: 'table', sections: [
      { title: 'O corpo', items: [
        { fr: 'la tête', pt: 'a cabeça' }, { fr: 'les yeux (un œil)', pt: 'os olhos (um olho)' }, { fr: "l'oreille", pt: 'a orelha, o ouvido' }, { fr: 'le nez', pt: 'o nariz' },
        { fr: 'la bouche', pt: 'a boca' }, { fr: 'les dents', pt: 'os dentes' }, { fr: 'la gorge', pt: 'a garganta' }, { fr: 'le cou', pt: 'o pescoço' },
        { fr: 'le dos', pt: 'as costas' }, { fr: 'le ventre', pt: 'a barriga' }, { fr: 'le bras', pt: 'o braço' }, { fr: 'la main', pt: 'a mão' },
        { fr: 'la jambe', pt: 'a perna' }, { fr: 'le genou', pt: 'o joelho' }, { fr: 'le pied', pt: 'o pé' }
      ] },
      { title: 'Sintomas', items: [
        { fr: "J'ai mal à la tête.", pt: 'Estou com dor de cabeça.' }, { fr: "J'ai mal à la gorge.", pt: 'Estou com dor de garganta.' }, { fr: "J'ai mal au ventre.", pt: 'Estou com dor de barriga.' },
        { fr: "J'ai de la fièvre.", pt: 'Estou com febre.' }, { fr: 'Je tousse.', pt: 'Estou tossindo.' }, { fr: "J'ai un rhume.", pt: 'Estou resfriado.' },
        { fr: "J'ai la grippe.", pt: 'Estou com gripe.' }, { fr: 'Je suis allergique à…', pt: 'Sou alérgico a…' }, { fr: "J'ai la nausée.", pt: 'Estou enjoado.' }
      ] },
      { title: 'Na farmácia e no médico', items: [
        { fr: 'le médicament', pt: 'o remédio' }, { fr: "l'ordonnance", pt: 'a receita médica' }, { fr: 'le cachet / le comprimé', pt: 'o comprimido' },
        { fr: 'le sirop', pt: 'o xarope' }, { fr: 'le pansement', pt: 'o curativo, o band-aid' }, { fr: 'le rendez-vous', pt: 'a consulta (marcada)' },
        { fr: 'le médecin généraliste', pt: 'o clínico geral' }, { fr: 'la carte Vitale', pt: 'o cartão do seguro-saúde francês' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Avoir mal à', textPt: '*à + le* = **au**, *à + les* = **aux**: *j\'ai mal au dos, j\'ai mal aux pieds, j\'ai mal à l\'oreille*.',
        examples: [{ fr: "J'ai mal au dos.", pt: 'Estou com dor nas costas.' }, { fr: "Elle a mal aux yeux.", pt: 'Ela está com dor nos olhos.' }] },
      { title: 'Se faire mal', textPt: '"Machucar-se" = *se faire mal* ou *se blesser*: *Je me suis fait mal au genou.*',
        examples: [{ fr: "Je me suis fait mal à la main.", pt: 'Machuquei a mão.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Je voudrais quelque chose contre le mal de tête.', pt: 'Eu queria alguma coisa para dor de cabeça.' },
      { fr: "Je voudrais prendre rendez-vous avec un médecin.", pt: 'Eu queria marcar uma consulta com um médico.' },
      { fr: 'Depuis quand avez-vous mal ?', pt: 'Desde quando o senhor está com dor?' }, { fr: 'Prenez un comprimé trois fois par jour.', pt: 'Tome um comprimido três vezes ao dia.' },
      { fr: 'Bon rétablissement !', pt: 'Melhoras!' }
    ] },
    { type: 'tip', textPt: '**Remédio × medicamento:** em francês, *un remède* é um "remédio caseiro, solução"; na farmácia peça *un médicament*. E a dipirona, comum no Brasil, é proibida na França: para dor e febre usa-se o *paracétamol* (muitos franceses o chamam pelo nome da marca mais conhecida).' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Estou com dor de dente."', options: ["J'ai mal aux dents.", "J'ai mal à les dents.", 'Je suis mal aux dents.', "J'ai dents mal."], answer: 0 },
      { type: 'multiple_choice', prompt: '"Melhoras!"', options: ['Bon rétablissement !', 'Bonne santé !', 'Bonne chance !', 'Bon courage !'], answer: 0 },
      { type: 'listen_choose', audio: "J'ai de la fièvre.", prompt: 'Ouça e escolha.', options: ['Estou com febre.', 'Estou com frio.', 'Estou com fome.', 'Estou com medo.'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/emergencias', label: 'Emergências' }, { to: '#/gerais/medidas', label: 'Medidas (temperatura)' }] }
  ]
});
