LUX.registerGeneral({
  id: 'direcoes', group: 'situacoes', title: 'Direções e localização', titleFr: 'Les directions', level: 'A2',
  keywords: ['direção', 'caminho', 'esquerda', 'direita', 'reto', 'perto', 'longe', 'onde fica', 'gauche', 'droite', 'tout droit', 'près', 'loin', 'chemin'],
  blocks: [
    { type: 'intro', textPt: 'Para pedir o caminho: *Excusez-moi, pour aller à… ?* ou *Où se trouve… ?* As respostas usam o **imperativo com vous** (*tournez, prenez, continuez*) e preposições de lugar.' },
    { type: 'table', sections: [
      { title: 'Indicações', items: [
        { fr: 'à gauche', pt: 'à esquerda' }, { fr: 'à droite', pt: 'à direita' }, { fr: 'tout droit', pt: 'em frente, reto' },
        { fr: 'Tournez à gauche.', pt: 'Vire à esquerda.' }, { fr: 'Prenez la première rue à droite.', pt: 'Pegue a primeira rua à direita.' },
        { fr: 'Continuez jusqu\'au feu.', pt: 'Continue até o semáforo.' }, { fr: 'Traversez la place.', pt: 'Atravesse a praça.' }, { fr: 'Faites demi-tour.', pt: 'Volte (dê meia-volta).' }
      ] },
      { title: 'Localização', items: [
        { fr: 'à côté de', pt: 'ao lado de' }, { fr: 'en face de', pt: 'em frente a' }, { fr: 'près de / loin de', pt: 'perto de / longe de' },
        { fr: 'au coin de la rue', pt: 'na esquina' }, { fr: 'au bout de la rue', pt: 'no fim da rua' }, { fr: 'entre… et…', pt: 'entre… e…' }, { fr: 'derrière / devant', pt: 'atrás de / na frente de' }
      ] },
      { title: 'Na cidade', items: [
        { fr: 'la rue', pt: 'a rua' }, { fr: "l'avenue", pt: 'a avenida' }, { fr: 'la place', pt: 'a praça' }, { fr: 'le carrefour', pt: 'o cruzamento' },
        { fr: 'le rond-point', pt: 'a rotatória' }, { fr: 'le feu', pt: 'o semáforo' }, { fr: 'le passage piéton', pt: 'a faixa de pedestres' }, { fr: 'le trottoir', pt: 'a calçada' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Pedir o caminho', textPt: '*Pour aller à la gare, s\'il vous plaît ?* (forma curta) · *Où se trouve la poste ?* · *Il y a une pharmacie près d\'ici ?*',
        examples: [{ fr: 'Pour aller au musée, s\'il vous plaît ?', pt: 'Para ir ao museu, por favor?' }, { fr: "C'est loin d'ici ?", pt: 'É longe daqui?' }] },
      { title: 'Distâncias', textPt: '*C\'est à cinq minutes à pied* (a cinco minutos a pé), *à deux cents mètres*, *à dix minutes en bus*.',
        examples: [{ fr: "C'est à dix minutes à pied.", pt: 'Fica a dez minutos a pé.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Excusez-moi, je suis perdu(e).', pt: 'Com licença, estou perdido(a).' }, { fr: 'Vous pouvez me montrer sur le plan ?', pt: 'Pode me mostrar no mapa?' },
      { fr: "C'est tout près.", pt: 'É bem perto.' }, { fr: 'Vous ne pouvez pas le rater.', pt: 'Não tem como errar.' }
    ] },
    { type: 'tip', textPt: '**Gauche × droite:** um truque para não confundir: ***droite*** tem a mesma raiz de "direito" (*le droit*); ***gauche*** também significa "desajeitado" — e por muito tempo a mão esquerda foi considerada a "desajeitada".' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Siga reto."', options: ['Continuez tout droit.', 'Continuez à droite.', 'Allez droit à gauche.', 'Tournez tout droit.'], answer: 0 },
      { type: 'listen_choose', audio: 'Prenez la deuxième rue à gauche.', prompt: 'Ouça e escolha.', options: ['A segunda rua à esquerda.', 'A segunda rua à direita.', 'A primeira rua à esquerda.', 'Siga reto duas ruas.'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/imperatif', label: 'Gramática: imperativo' }, { to: '#/gramatica/position-prepositions', label: 'Gramática: preposições de lugar' }, { to: '#/gerais/transporte', label: 'Transporte' }] }
  ]
});
