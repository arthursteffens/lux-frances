LUX.registerGeneral({
  id: 'cores', group: 'pessoas', title: 'Cores', titleFr: 'Les couleurs', level: 'A1',
  keywords: ['cor', 'cores', 'azul', 'vermelho', 'verde', 'amarelo', 'couleur', 'bleu', 'rouge', 'vert', 'jaune', 'blanc', 'noir'],
  blocks: [
    { type: 'intro', textPt: 'As cores são **adjetivos**: vêm **depois** do substantivo e **concordam** com ele (*une robe verte, des yeux bleus*). Exceção importante: cores que vêm de um substantivo (fruta, flor) são **invariáveis**: *des chaussures orange, des pulls marron*.' },
    { type: 'table', sections: [
      { title: 'Cores (masculino / feminino)', items: [
        { fr: 'blanc / blanche', pt: 'branco(a)' }, { fr: 'noir / noire', pt: 'preto(a)' }, { fr: 'rouge', pt: 'vermelho(a)' }, { fr: 'bleu / bleue', pt: 'azul' },
        { fr: 'vert / verte', pt: 'verde' }, { fr: 'jaune', pt: 'amarelo(a)' }, { fr: 'gris / grise', pt: 'cinza' }, { fr: 'violet / violette', pt: 'roxo(a)' },
        { fr: 'rose', pt: 'rosa' }, { fr: 'orange', pt: 'laranja (invariável)' }, { fr: 'marron', pt: 'marrom (invariável)' }, { fr: 'beige', pt: 'bege' }
      ] },
      { title: 'Nuances', items: [
        { fr: 'bleu clair', pt: 'azul-claro' }, { fr: 'vert foncé', pt: 'verde-escuro' }, { fr: 'bleu marine', pt: 'azul-marinho' },
        { fr: 'doré / argenté', pt: 'dourado / prateado' }, { fr: 'multicolore', pt: 'colorido' }
      ] },
      { title: 'Cabelo e olhos', items: [
        { fr: 'les cheveux blonds', pt: 'cabelo loiro' }, { fr: 'les cheveux bruns', pt: 'cabelo castanho-escuro' }, { fr: 'les cheveux châtains', pt: 'cabelo castanho' },
        { fr: 'les cheveux roux', pt: 'cabelo ruivo' }, { fr: 'les yeux marron', pt: 'olhos castanhos' }, { fr: 'les yeux verts', pt: 'olhos verdes' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Concordância', textPt: 'Regular: +e no feminino, +s no plural: *un sac vert, une robe verte, des sacs verts*. Se já termina em -e, não muda no feminino: *un pull rouge, une jupe rouge*.',
        examples: [{ fr: 'une voiture blanche', pt: 'um carro branco' }, { fr: 'des fleurs violettes', pt: 'flores roxas' }] },
      { title: 'Cores compostas', textPt: 'Quando a cor tem duas palavras (*bleu clair, vert foncé*), ela é **invariável**: *une robe bleu clair, des yeux vert foncé*.',
        examples: [{ fr: 'une chemise bleu clair', pt: 'uma camisa azul-clara' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Quelle est ta couleur préférée ?", pt: 'Qual é sua cor preferida?' }, { fr: 'Vous l\'avez en noir ?', pt: 'Vocês têm em preto?' },
      { fr: 'Elle a les yeux bleus.', pt: 'Ela tem olhos azuis.' }, { fr: 'Le feu est vert, on peut traverser.', pt: 'O sinal está verde, podemos atravessar.' }
    ] },
    { type: 'tip', textPt: '**Expressões com cores:** *voir la vie en rose* (ver tudo cor-de-rosa), *être vert de rage* (verde de raiva), *rire jaune* (rir amarelo — igual ao português!), *une nuit blanche* (uma noite em claro), *être dans le rouge* (estar no vermelho).' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"uma bolsa branca"', options: ['un sac blanc', 'un blanc sac', 'une sac blanche', 'un sac blanche'], answer: 0, explanationPt: '"sac" é masculino em francês.' },
      { type: 'multiple_choice', prompt: '"tênis laranja" (plural)', options: ['des baskets orange', 'des baskets oranges', 'des orange baskets', 'des baskets orangées'], answer: 0 },
      { type: 'listen_choose', audio: 'jaune', prompt: 'Ouça e escolha a cor.', options: ['amarelo', 'branco', 'cinza', 'verde'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/adjectives', label: 'Gramática: adjetivos' }, { to: '#/gerais/familia', label: 'Família' }] }
  ]
});
