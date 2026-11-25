LUX.registerGeneral({
  id: 'numeros-cardinais', group: 'numeros', title: 'Números cardinais', titleFr: 'Les nombres cardinaux', level: 'A1',
  keywords: ['número', 'números', 'contar', 'nombre', 'chiffre', 'soixante-dix', 'quatre-vingts', 'cem', 'mil'],
  blocks: [
    { type: 'intro', textPt: 'Os números de 0 a 69 são bem regulares. A partir de 70, a França conta "em vintenas": 70 = 60 + 10 (*soixante-dix*), 80 = 4 × 20 (*quatre-vingts*), 90 = 4 × 20 + 10 (*quatre-vingt-dix*). Ouça cada seção com **▶ tocar todos**.' },
    { type: 'tool', tool: 'number-converter' },
    { type: 'table', sections: [
      { title: '0 a 16', numbers: [0, 16] },
      { title: '17 a 19', numbers: [17, 19], note: '17 = dix-sept (10 + 7), com hífen.' },
      { title: 'Dezenas', list: [20, 21, 22, 30, 31, 40, 41, 50, 51, 60, 61] },
      { title: '70 a 79 — atenção!', numbers: [70, 79], note: 'soixante + 10, 11, 12... 19' },
      { title: '80 a 99 — atenção!', numbers: [80, 99], note: 'quatre-vingts + 1... 19 (o -s some depois de 80)' },
      { title: 'Centenas, milhares e milhões', list: [100, 101, 110, 200, 201, 250, 999, 1000, 1001, 2000, 10000, 100000, 1000000, 2000000] }
    ] },
    { type: 'rules', items: [
      { title: '"et un" e "et onze"', textPt: 'Em 21, 31, 41, 51, 61 e 71 usa-se **et** sem hífen: *vingt et un, soixante et onze*. Em 81 e 91, não: *quatre-vingt-un, quatre-vingt-onze*.',
        examples: [{ fr: 'vingt et un', pt: '21' }, { fr: 'soixante et onze', pt: '71' }, { fr: 'quatre-vingt-un', pt: '81' }] },
      { title: 'O -s de vingts e cents', textPt: '*quatre-vingts* e *deux cents* levam -s **só quando terminam o número**: *quatre-vingts*, mas *quatre-vingt-deux*; *trois cents*, mas *trois cent dix*.',
        examples: [{ fr: 'quatre-vingts', pt: '80' }, { fr: 'quatre-vingt-cinq', pt: '85' }, { fr: 'deux cents', pt: '200' }, { fr: 'deux cent un', pt: '201' }] },
      { title: 'Mille é invariável', textPt: '*mille* nunca leva -s e não leva "un" antes: *mille* (1000), *deux mille* (2000). Já *million* é substantivo: *un million, deux millions*.',
        examples: [{ fr: 'mille', pt: '1 000' }, { fr: 'trois mille', pt: '3 000' }, { fr: 'deux millions', pt: '2 000 000' }] },
      { title: 'Pronúncia de six, huit, dix', textPt: 'Sozinhos, o final soa: *six* /sis/, *huit* /ɥit/, *dix* /dis/. Antes de consoante, o final some: *six livres* /si/. Antes de vogal, vira /z/: *six amis* /siz‿ami/.',
        examples: [{ fr: 'six', pt: '6 (sozinho)' }, { fr: 'six livres', pt: '6 livros' }, { fr: 'six amis', pt: '6 amigos' }] },
      { title: 'Bélgica e Suíça', textPt: 'Na Bélgica e na Suíça: **septante** (70) e **nonante** (90). Em parte da Suíça, também **huitante** (80). Na França, use sempre *soixante-dix, quatre-vingts, quatre-vingt-dix*.',
        examples: [{ fr: 'septante-cinq', pt: '75 (Bélgica/Suíça)' }, { fr: 'nonante-neuf', pt: '99 (Bélgica/Suíça)' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Ça coûte combien ?', pt: 'Quanto custa?' },
      { fr: 'Vous pouvez répéter le numéro, s\'il vous plaît ?', pt: 'Pode repetir o número, por favor?' },
      { fr: "J'ai trente-deux ans.", pt: 'Tenho trinta e dois anos.' },
      { fr: "Il y a quatre-vingt-dix places.", pt: 'Há noventa lugares.' }
    ] },
    { type: 'tip', textPt: '**Escrita dos números:** em francês o separador de milhar é um **espaço** (1 000 000) e o decimal é a **vírgula** (3,5) — igual ao Brasil, só que com espaço no lugar do ponto.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'Como se escreve 77?', options: ['soixante-dix-sept', 'soixante-sept', 'septante-sept', 'quatre-vingt-dix-sept'], answer: 0 },
      { type: 'multiple_choice', prompt: '"quatre-vingt-quinze" é...', options: ['95', '85', '75', '415'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Como se escreve 80?', options: ['quatre-vingts', 'quatre-vingt', 'huitante', 'quatre-vingts-dix'], answer: 0 },
      { type: 'listen_choose', audio: 'soixante et onze', prompt: 'Ouça e escolha o número.', options: ['71', '61', '81', '91'], answer: 0 },
      { type: 'listen_choose', audio: 'quatre-vingt-dix-neuf', prompt: 'Ouça e escolha o número.', options: ['99', '89', '79', '19'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/treino/numeros', label: 'Treinar números de ouvido' }, { to: '#/gerais/numeros-ordinais', label: 'Números ordinais' }] }
  ]
});
