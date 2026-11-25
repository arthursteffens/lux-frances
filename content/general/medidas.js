LUX.registerGeneral({
  id: 'medidas', group: 'numeros', title: 'Medidas e pesos', titleFr: 'Les mesures et les poids', level: 'A2',
  keywords: ['medida', 'peso', 'quilo', 'grama', 'litro', 'metro', 'altura', 'tamanho', 'temperatura', 'kilo', 'gramme', 'litre', 'mètre', 'mesurer', 'peser'],
  blocks: [
    { type: 'intro', textPt: 'A França usa o **sistema métrico**, como o Brasil: quilos, gramas, litros, metros e graus Celsius. A diferença está nas palavras e nas abreviações faladas: *un kilo* (1 kg), *une livre* (500 g, ainda usado na feira!), *un mètre quatre-vingts* (1,80 m).' },
    { type: 'table', sections: [
      { title: 'Peso', items: [
        { fr: 'un gramme', pt: '1 g' }, { fr: 'cent grammes', pt: '100 g' }, { fr: 'une livre', pt: '500 g (meio quilo)', note: 'uso popular' },
        { fr: 'un kilo', pt: '1 kg' }, { fr: 'un kilo et demi', pt: '1,5 kg' }, { fr: 'une tonne', pt: '1 t' }
      ] },
      { title: 'Volume', items: [
        { fr: 'un centilitre', pt: '1 cl' }, { fr: 'vingt-cinq centilitres', pt: '25 cl', note: 'tamanho de uma lata/garrafinha' },
        { fr: 'un demi-litre', pt: '0,5 l' }, { fr: 'un litre', pt: '1 l' }, { fr: 'un litre et demi', pt: '1,5 l' }
      ] },
      { title: 'Distância e altura', items: [
        { fr: 'un centimètre', pt: '1 cm' }, { fr: 'un mètre', pt: '1 m' }, { fr: 'un mètre soixante-dix', pt: '1,70 m', note: 'altura de uma pessoa' },
        { fr: 'cent mètres', pt: '100 m' }, { fr: 'un kilomètre', pt: '1 km' }, { fr: 'un mètre carré', pt: '1 m²' }
      ] },
      { title: 'Temperatura', items: [
        { fr: 'zéro degré', pt: '0 °C' }, { fr: 'moins cinq degrés', pt: '−5 °C' }, { fr: 'vingt degrés', pt: '20 °C' },
        { fr: 'trente-huit degrés', pt: '38 °C', note: 'febre' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Medir e pesar', textPt: '*Je mesure un mètre soixante-dix* = tenho 1,70 m. *Je pèse soixante kilos* = peso 60 kg. *Ça mesure combien ?* = quanto mede?',
        examples: [{ fr: 'Il mesure un mètre quatre-vingt-cinq.', pt: 'Ele tem 1,85 m.' }, { fr: 'La valise pèse vingt kilos.', pt: 'A mala pesa 20 kg.' }] },
      { title: 'Quantidade + de', textPt: 'Depois de uma medida, só **de**: *un kilo de pommes, deux litres d\'eau, cent grammes de jambon*.',
        examples: [{ fr: 'deux cents grammes de beurre', pt: '200 g de manteiga' }] },
      { title: 'Metros quadrados', textPt: 'Nos anúncios de apartamento: *un studio de vingt mètres carrés* (20 m²). Diz-se também *un vingt mètres carrés*.',
        examples: [{ fr: 'un appartement de soixante mètres carrés', pt: 'um apartamento de 60 m²' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Une livre de tomates, s\'il vous plaît.', pt: 'Meio quilo de tomates, por favor.' }, { fr: 'Vous mesurez combien ?', pt: 'Quanto você mede?' },
      { fr: "C'est à combien de kilomètres ?", pt: 'Fica a quantos quilômetros?' }, { fr: 'Il fait moins deux degrés ce matin.', pt: 'Está fazendo −2 °C hoje de manhã.' }
    ] },
    { type: 'tip', textPt: '**Cuidado com *une livre* × *un livre*:** *une livre* (f) = meio quilo (e também a libra esterlina); *un livre* (m) = um livro. O gênero muda tudo!' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Tenho 1,65 m."', options: ['Je mesure un mètre soixante-cinq.', "J'ai un mètre soixante-cinq de haut.", 'Je suis un mètre soixante-cinq.', 'Je pèse un mètre soixante-cinq.'], answer: 0 },
      { type: 'multiple_choice', prompt: '"une livre" na feira =', options: ['500 g', '1 kg', '100 g', 'um livro'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/quantities', label: 'Gramática: expressões de quantidade' }, { to: '#/gerais/fracoes', label: 'Frações e decimais' }, { to: '#/gerais/clima', label: 'Clima e tempo' }] }
  ]
});
