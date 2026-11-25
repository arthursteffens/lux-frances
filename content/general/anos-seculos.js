LUX.registerGeneral({
  id: 'anos-seculos', group: 'tempo', title: 'Anos e séculos', titleFr: 'Les années et les siècles', level: 'A2',
  keywords: ['ano', 'anos', 'année', 'século', 'siècle', 'década', 'anos 90', 'en 2026'],
  blocks: [
    { type: 'intro', textPt: 'Os anos se leem como números normais: *1998 = mille neuf cent quatre-vingt-dix-huit*. Para "em 2026", use **en**: *en deux mille vingt-six*.' },
    { type: 'tool', tool: 'year-converter' },
    { type: 'table', sections: [
      { title: 'Anos', list: [1789, 1900, 1968, 1990, 1998, 2000, 2001, 2010, 2024, 2026, 2030] }
    ] },
    { type: 'rules', items: [
      { title: 'Em + ano', textPt: 'Use **en** antes do ano: *en 1998, en 2026*. Também se diz *en l\'an 2000*.',
        examples: [{ fr: 'Je suis né en mille neuf cent quatre-vingt-dix-huit.', pt: 'Nasci em 1998.' }, { fr: 'en deux mille trente', pt: 'em 2030' }] },
      { title: 'Décadas', textPt: '"Os anos 90" = **les années quatre-vingt-dix**; "nos anos 80" = **dans les années quatre-vingt** (sem -s nas décadas).',
        examples: [{ fr: 'dans les années quatre-vingt-dix', pt: 'nos anos 90' }, { fr: 'la musique des années soixante', pt: 'a música dos anos 60' }] },
      { title: 'Séculos', textPt: 'Algarismos romanos + "e": *le XIXe siècle* = *le dix-neuvième siècle*. "No século" = **au** : *au XXe siècle*.',
        examples: [{ fr: 'au dix-neuvième siècle', pt: 'no século XIX' }, { fr: 'le vingt et unième siècle', pt: 'o século XXI' }] },
      { title: 'Intervalos e era', textPt: '*de 1990 à 2000* (de... a...), *entre 2010 et 2020*. *avant Jésus-Christ* (a.C.), *après Jésus-Christ* (d.C.).',
        examples: [{ fr: 'de deux mille dix à deux mille vingt', pt: 'de 2010 a 2020' }, { fr: 'cinquante-deux avant Jésus-Christ', pt: '52 a.C.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Tu es né en quelle année ?', pt: 'Em que ano você nasceu?' },
      { fr: 'On est en deux mille vingt-six.', pt: 'Estamos em 2026.' },
      { fr: "Cette église date du douzième siècle.", pt: 'Esta igreja é do século XII.' }
    ] },
    { type: 'tip', textPt: '**Sem "dezenove centos":** em francês da França os anos 1900 se dizem *mille neuf cent...* (às vezes *dix-neuf cent...*, mais antigo). Nunca separe em pares como o inglês "nineteen ninety".' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '1985 em francês:', options: ['mille neuf cent quatre-vingt-cinq', 'mille neuf cents quatre-vingt-cinq', 'dix-neuf quatre-vingt-cinq', 'mille neuf cent huitante-cinq'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Em 2026"', options: ['en deux mille vingt-six', 'à deux mille vingt-six', 'dans deux mille vingt-six', 'au deux mille vingt-six'], answer: 0 },
      { type: 'listen_choose', audio: 'mille neuf cent soixante-huit', prompt: 'Ouça e escolha o ano.', options: ['1968', '1978', '1868', '1988'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/treino/numeros', label: 'Treinar anos de ouvido' }, { to: '#/gerais/datas', label: 'Datas' }] }
  ]
});
