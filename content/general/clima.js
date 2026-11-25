LUX.registerGeneral({
  id: 'clima', group: 'pessoas', title: 'Clima e tempo', titleFr: 'La météo', level: 'A1',
  keywords: ['tempo', 'clima', 'chuva', 'sol', 'frio', 'calor', 'neve', 'previsão', 'météo', 'il fait beau', 'il pleut', 'il neige', 'froid', 'chaud'],
  blocks: [
    { type: 'intro', textPt: 'Para falar do tempo, o francês usa quase sempre o sujeito impessoal **il**: *il fait beau, il pleut, il neige, il y a du vent*. A pergunta é *Quel temps fait-il ?* (Como está o tempo?).' },
    { type: 'table', sections: [
      { title: 'Il fait…', items: [
        { fr: 'Il fait beau.', pt: 'O tempo está bom.' }, { fr: 'Il fait mauvais.', pt: 'O tempo está ruim.' }, { fr: 'Il fait chaud.', pt: 'Está calor.' },
        { fr: 'Il fait froid.', pt: 'Está frio.' }, { fr: 'Il fait doux.', pt: 'Está ameno.' }, { fr: 'Il fait gris.', pt: 'Está nublado (cinzento).' }, { fr: 'Il fait vingt degrés.', pt: 'Está fazendo 20 graus.' }
      ] },
      { title: 'Verbos e expressões', items: [
        { fr: 'Il pleut.', pt: 'Está chovendo.' }, { fr: 'Il neige.', pt: 'Está nevando.' }, { fr: 'Il y a du soleil.', pt: 'Tem sol.' },
        { fr: 'Il y a du vent.', pt: 'Está ventando.' }, { fr: 'Il y a des nuages.', pt: 'Tem nuvens.' }, { fr: 'Il y a un orage.', pt: 'Tem uma tempestade.' },
        { fr: 'Il y a du brouillard.', pt: 'Tem neblina.' }, { fr: 'Le ciel est bleu.', pt: 'O céu está azul.' }
      ] },
      { title: 'Palavras', items: [
        { fr: 'la météo', pt: 'a previsão do tempo' }, { fr: 'la pluie', pt: 'a chuva' }, { fr: 'la neige', pt: 'a neve' }, { fr: 'le soleil', pt: 'o sol' },
        { fr: 'le vent', pt: 'o vento' }, { fr: 'la canicule', pt: 'a onda de calor' }, { fr: 'le parapluie', pt: 'o guarda-chuva' }, { fr: 'ensoleillé', pt: 'ensolarado' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Il fait froid × j\'ai froid', textPt: '*Il fait froid* = o tempo está frio. *J\'ai froid* = **eu** estou com frio (com *avoir*!). Igual para calor: *il fait chaud / j\'ai chaud*.',
        examples: [{ fr: "Il fait froid, j'ai froid !", pt: 'Está frio, estou com frio!' }, { fr: 'Tu as chaud ?', pt: 'Você está com calor?' }] },
      { title: 'Passado e futuro', textPt: 'Passado: *il a plu, il a fait beau* (ontem), *il pleuvait* (cenário). Futuro: *il va pleuvoir, il fera beau*.',
        examples: [{ fr: 'Hier, il a plu toute la journée.', pt: 'Ontem choveu o dia todo.' }, { fr: 'Demain, il fera beau.', pt: 'Amanhã vai fazer tempo bom.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Quel temps fait-il ?', pt: 'Como está o tempo?' }, { fr: "Quel temps il va faire demain ?", pt: 'Como vai estar o tempo amanhã?' },
      { fr: 'Prends ton parapluie, il va pleuvoir.', pt: 'Leve o guarda-chuva, vai chover.' }, { fr: "Quel beau temps aujourd'hui !", pt: 'Que tempo bonito hoje!' },
      { fr: 'Il pleut des cordes !', pt: 'Está chovendo canivetes!' }
    ] },
    { type: 'tip', textPt: '**Falar do tempo é o "small talk" número 1** na França, especialmente com vizinhos e no elevador: *Il fait frais ce matin, hein ?* E prepare-se: em Lyon, os invernos são frios (às vezes abaixo de zero) e os verões podem passar de 35 °C.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Estou com frio."', options: ["J'ai froid.", 'Je suis froid.', 'Il fait froid.', 'Je fais froid.'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Está ventando."', options: ['Il y a du vent.', 'Il fait vent.', 'Il vente beaucoup de vent.', 'Il est venteux.'], answer: 0 },
      { type: 'listen_choose', audio: 'Il neige.', prompt: 'Ouça e escolha.', options: ['Está nevando.', 'Está chovendo.', 'Está ventando.', 'Está calor.'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/estacoes', label: 'Estações do ano' }, { to: '#/gerais/medidas', label: 'Medidas (temperatura)' }] }
  ]
});
