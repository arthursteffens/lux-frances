LUX.registerGeneral({
  id: 'dinheiro', group: 'numeros', title: 'Dinheiro e preços', titleFr: "L'argent et les prix", level: 'A2',
  keywords: ['dinheiro', 'preço', 'euro', 'centavo', 'centime', 'pagar', 'cartão', 'troco', 'caro', 'barato', 'quanto custa', 'combien', 'monnaie', 'argent'],
  blocks: [
    { type: 'intro', textPt: 'A moeda da França é o **euro** (*l\'euro*, masculino), dividido em 100 **centimes**. Os preços se leem *euros* + *centimes*, mas o "centimes" quase sempre cai: *3,50 €* = *trois euros cinquante*. Na Suíça, usa-se o **franc suisse** (CHF).' },
    { type: 'table', sections: [
      { title: 'Lendo preços', items: [
        { fr: 'un euro', pt: '1 €' }, { fr: 'deux euros cinquante', pt: '2,50 €' }, { fr: 'neuf euros quatre-vingt-dix-neuf', pt: '9,99 €' },
        { fr: 'quinze euros', pt: '15 €' }, { fr: 'cinquante centimes', pt: '0,50 €' }, { fr: 'vingt et un euros quarante', pt: '21,40 €' },
        { fr: 'cent vingt euros', pt: '120 €' }, { fr: 'mille deux cents euros', pt: '1 200 €' }
      ] },
      { title: 'Vocabulário', items: [
        { fr: "l'argent", pt: 'o dinheiro' }, { fr: 'la monnaie', pt: 'o troco; as moedas; a moeda (de um país)' }, { fr: 'une pièce', pt: 'uma moeda' },
        { fr: 'un billet', pt: 'uma nota (de dinheiro)' }, { fr: 'la carte bancaire', pt: 'o cartão de débito/crédito' }, { fr: 'en espèces / en liquide', pt: 'em dinheiro vivo' },
        { fr: 'le prix', pt: 'o preço' }, { fr: 'cher / bon marché', pt: 'caro / barato' }, { fr: 'gratuit', pt: 'grátis' },
        { fr: 'le distributeur', pt: 'o caixa eletrônico' }, { fr: 'le ticket de caisse', pt: 'o recibo, a notinha' }, { fr: 'les soldes', pt: 'a liquidação' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Euro no plural', textPt: '*euro* faz o plural normal: *deux euros* (com ligação: *deux‿euros, trois‿euros, vingt‿euros*). Já *centime* fica quase sempre implícito.',
        examples: [{ fr: 'deux euros', pt: '2 €' }, { fr: 'dix euros vingt', pt: '10,20 €' }] },
      { title: 'Bon marché', textPt: '"Barato" é *bon marché* (invariável) ou *pas cher*. *Moins cher* = mais barato.',
        examples: [{ fr: "C'est moins cher au marché.", pt: 'É mais barato na feira.' }, { fr: 'des chaussures pas chères', pt: 'sapatos baratos' }] },
      { title: 'Pagar', textPt: '*payer par carte* (com cartão), *payer en espèces* (em dinheiro), *payer sans contact* (por aproximação). "Pagar algo" é direto: *payer le café* (sem "por").',
        examples: [{ fr: 'Je peux payer par carte ?', pt: 'Posso pagar com cartão?' }, { fr: "C'est moi qui paie le café.", pt: 'O café é por minha conta.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Ça coûte combien ?", pt: 'Quanto custa?' }, { fr: "C'est combien ?", pt: 'Quanto é?' }, { fr: 'Ça fait combien en tout ?', pt: 'Quanto dá tudo?' },
      { fr: 'Je peux payer par carte ?', pt: 'Posso pagar com cartão?' }, { fr: "Vous avez de la monnaie ?", pt: 'Você tem troco?' },
      { fr: "Gardez la monnaie.", pt: 'Fique com o troco.' }, { fr: "C'est trop cher pour moi.", pt: 'É caro demais para mim.' }
    ] },
    { type: 'tip', textPt: '**Gíria de dinheiro:** os franceses dizem *les sous* ou *le fric* (informal) para "grana", *un balle* para um euro (*ça coûte dix balles*). E "estar duro" é *être fauché*. Entenda, mas use *l\'argent* em situações normais.' },
    { type: 'quiz', items: [
      { type: 'listen_choose', audio: 'dix-sept euros quatre-vingts', prompt: 'Ouça e escolha o preço.', options: ['17,80 €', '17,20 €', '70,80 €', '7,80 €'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Posso pagar com cartão?"', options: ['Je peux payer par carte ?', 'Je peux payer avec carte ?', 'Je peux payer en carte ?', 'Je peux payer pour carte ?'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Troco"', options: ['la monnaie', "l'argent", 'le billet', 'le prix'], answer: 0 }
    ] },
    { type: 'tool', tool: 'number-converter' },
    { type: 'links', items: [{ to: '#/treino/precos', label: 'Treinar preços de ouvido' }, { to: '#/gerais/numeros-cardinais', label: 'Números cardinais' }, { to: '#/gerais/restaurante', label: 'No café e no restaurante' }] }
  ]
});
