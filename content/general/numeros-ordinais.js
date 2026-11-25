LUX.registerGeneral({
  id: 'numeros-ordinais', group: 'numeros', title: 'Números ordinais', titleFr: 'Les nombres ordinaux', level: 'A1',
  keywords: ['ordinal', 'primeiro', 'segundo', 'premier', 'deuxième', 'andar', 'étage', 'século', 'siècle'],
  blocks: [
    { type: 'intro', textPt: 'Para formar o ordinal, tire o -e final do número (se houver) e acrescente **-ième**: *quatre → quatrième*. A exceção é **premier / première**.' },
    { type: 'table', sections: [
      { title: '1º a 10º', items: [
        { fr: 'premier / première', pt: '1º / 1ª', note: 'abreviação: 1er / 1re', tts: 'premier, première' },
        { fr: 'deuxième', pt: '2º', note: 'ou second(e), se só há dois' }, { fr: 'troisième', pt: '3º' }, { fr: 'quatrième', pt: '4º' },
        { fr: 'cinquième', pt: '5º', note: 'ganha um u: cinq → cinquième' }, { fr: 'sixième', pt: '6º' }, { fr: 'septième', pt: '7º' },
        { fr: 'huitième', pt: '8º' }, { fr: 'neuvième', pt: '9º', note: 'o f vira v: neuf → neuvième' }, { fr: 'dixième', pt: '10º' }
      ] },
      { title: 'Outros exemplos', ordinals: [11, 12, 20, 21, 30, 71, 80, 100, 1000] }
    ] },
    { type: 'rules', items: [
      { title: 'Abreviação', textPt: '1er (premier), 1re (première), 2e, 3e, 10e, 21e... Nunca "2ème" nem "2º" na escrita cuidadosa.',
        examples: [{ fr: 'le 1er étage', pt: 'o 1º andar' }, { fr: 'le 3e arrondissement', pt: 'o 3º distrito (de Paris, Lyon...)' }] },
      { title: 'Andares', textPt: 'O térreo é **le rez-de-chaussée**. O "primeiro andar" francês (*le premier étage*) é o primeiro acima do térreo.',
        examples: [{ fr: 'Elle habite au troisième étage.', pt: 'Ela mora no terceiro andar.' }, { fr: "L'accueil est au rez-de-chaussée.", pt: 'A recepção fica no térreo.' }] },
      { title: 'Datas: só o dia 1º é ordinal', textPt: 'Diz-se *le premier mai*, mas *le deux mai, le trois mai* (cardinais).',
        examples: [{ fr: 'le premier janvier', pt: '1º de janeiro' }, { fr: 'le deux janvier', pt: '2 de janeiro' }] },
      { title: 'Séculos e reis', textPt: 'Séculos em algarismos romanos + ordinal: *le XXIe siècle* (*le vingt et unième siècle*). Reis com cardinal, exceto o primeiro: *Louis XIV* = *Louis Quatorze*; *François Ier* = *François Premier*.',
        examples: [{ fr: 'le vingt et unième siècle', pt: 'o século XXI' }, { fr: 'Louis Quatorze', pt: 'Luís XIV' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "C'est la première fois que je viens en France.", pt: 'É a primeira vez que venho à França.' },
      { fr: 'Prenez la deuxième rue à droite.', pt: 'Pegue a segunda rua à direita.' },
      { fr: 'Il est arrivé premier.', pt: 'Ele chegou em primeiro.' }
    ] },
    { type: 'tip', textPt: '**"Segundo" tem duas formas:** *deuxième* (quando há uma série: 2º de vários) e *second(e)* (quando há só dois, ou em expressões: *la Seconde Guerre mondiale*). O "c" de *second* soa como "g": /səɡɔ̃/.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '9º em francês:', options: ['neuvième', 'neufième', 'nonième', 'neuvième-un'], answer: 0 },
      { type: 'multiple_choice', prompt: '"1º de maio"', options: ['le premier mai', 'le un mai', 'le unième mai', 'le primer mai'], answer: 0 },
      { type: 'multiple_choice', prompt: 'O térreo é...', options: ['le rez-de-chaussée', 'le premier étage', 'le zéro étage', 'le sous-sol'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/numeros-cardinais', label: 'Números cardinais' }, { to: '#/gerais/datas', label: 'Datas' }] }
  ]
});
