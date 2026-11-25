LUX.registerGeneral({
  id: 'tu-vous', group: 'comunicacao', title: 'Tu ou vous?', titleFr: 'Tutoyer ou vouvoyer ?', level: 'A1',
  keywords: ['tu', 'vous', 'tutoyer', 'vouvoyer', 'formal', 'informal', 'você', 'senhor', 'tratamento'],
  blocks: [
    { type: 'intro', textPt: '*Vous* serve para **várias pessoas** e também para **uma pessoa** com quem você mantém distância ou respeito (como "o senhor / a senhora"). *Tu* é para família, amigos, crianças, colegas jovens. Na dúvida, **comece com vous** e espere a pessoa propor o *tu*.' },
    { type: 'table', sections: [
      { title: 'Use vous com…', items: [
        { fr: 'un vendeur, une serveuse', pt: 'vendedores, garçons' }, { fr: 'un médecin, un professeur', pt: 'médicos, professores (de adultos)' },
        { fr: 'un inconnu dans la rue', pt: 'desconhecidos na rua' }, { fr: 'les voisins âgés', pt: 'vizinhos mais velhos' }, { fr: 'le directeur', pt: 'o chefe, o diretor (em geral)' }
      ] },
      { title: 'Use tu com…', items: [
        { fr: 'la famille', pt: 'a família' }, { fr: 'les amis', pt: 'os amigos' }, { fr: 'les enfants', pt: 'crianças' },
        { fr: 'les collègues (souvent)', pt: 'colegas (muitas vezes)' }, { fr: 'les jeunes de ton âge', pt: 'jovens da sua idade' }, { fr: 'un animal', pt: 'um animal' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Propor o tu', textPt: 'Quem é mais velho ou tem posição superior costuma propor: *On peut se tutoyer ?* ou *Tu peux me tutoyer.* Aceite com *D\'accord, avec plaisir !*',
        examples: [{ fr: 'On se tutoie ?', pt: 'Vamos nos tratar por "tu"?' }, { fr: 'Vous pouvez me tutoyer.', pt: 'Pode me chamar de "tu".' }] },
      { title: 'Tudo muda junto', textPt: 'Com *vous*, mudam também o possessivo (*votre / vos*), o imperativo (*venez*) e o "por favor" (*s\'il vous plaît*). Com *tu*: *ton / ta / tes*, *viens*, *s\'il te plaît*.',
        examples: [{ fr: "Venez, s'il vous plaît. C'est votre sac ?", pt: 'Venha, por favor. É sua bolsa? (vous)' }, { fr: "Viens, s'il te plaît. C'est ton sac ?", pt: 'Vem, por favor. É sua bolsa? (tu)' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Vous êtes d\'où ?', pt: 'De onde o senhor é?' }, { fr: "Tu es d'où ?", pt: 'De onde você é?' },
      { fr: 'Excusez-moi, vous avez l\'heure ?', pt: 'Com licença, o senhor tem horas?' }, { fr: 'Salut, tu vas bien ?', pt: 'Oi, tudo bem?' }
    ] },
    { type: 'tip', textPt: '**Na internet e no trabalho criativo** (start-ups, agências, esportes), o *tu* é quase automático. Já na administração, no banco e com pessoas idosas, *vous* é a regra. No Québec, o *tu* é bem mais comum do que na França.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'Você pede informação a um policial:', options: ['Excusez-moi, vous pouvez m\'aider ?', 'Salut, tu peux m\'aider ?', 'Hé, aide-moi !', 'Tu sais où est la gare ?'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Por favor" com um amigo:', options: ["s'il te plaît", "s'il vous plaît", 'je vous en prie', 'merci'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/tu-vous', label: 'Gramática: tu e vous' }, { to: '#/gerais/saudacoes', label: 'Saudações' }, { to: '#/gerais/cortesia', label: 'Cortesia' }] }
  ]
});
