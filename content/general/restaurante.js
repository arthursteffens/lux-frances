LUX.registerGeneral({
  id: 'restaurante', group: 'situacoes', title: 'No café e no restaurante', titleFr: 'Au café et au restaurant', level: 'A2',
  keywords: ['restaurante', 'café', 'cardápio', 'conta', 'garçom', 'pedir', 'gorjeta', 'reserva', 'restaurant', 'carte', 'addition', 'serveur', 'menu', 'pourboire'],
  blocks: [
    { type: 'intro', textPt: 'Numa refeição francesa há três tempos: *l\'entrée* (entrada), *le plat* (prato principal) e *le dessert* (sobremesa) — ou o queijo. *La carte* é o cardápio; *le menu* (ou *la formule*) é uma combinação a preço fixo. O serviço já vem incluído (*service compris*).' },
    { type: 'table', sections: [
      { title: 'No café', items: [
        { fr: 'un café / un express', pt: 'um café expresso' }, { fr: 'un crème / un café crème', pt: 'um café com leite' }, { fr: 'un déca', pt: 'um descafeinado' },
        { fr: 'un thé', pt: 'um chá' }, { fr: 'un chocolat chaud', pt: 'um chocolate quente' }, { fr: 'un jus d\'orange pressé', pt: 'um suco de laranja natural' },
        { fr: 'une carafe d\'eau', pt: 'uma jarra de água (grátis)' }, { fr: 'un demi', pt: 'um chope (25 cl)' }, { fr: 'un verre de vin rouge', pt: 'uma taça de vinho tinto' }
      ] },
      { title: 'Cozimento da carne', items: [
        { fr: 'bleu', pt: 'quase cru' }, { fr: 'saignant', pt: 'malpassado' }, { fr: 'à point', pt: 'ao ponto' }, { fr: 'bien cuit', pt: 'bem passado' }
      ] },
      { title: 'Palavras do restaurante', items: [
        { fr: 'la carte', pt: 'o cardápio' }, { fr: 'le plat du jour', pt: 'o prato do dia' }, { fr: "l'entrée", pt: 'a entrada' }, { fr: 'le dessert', pt: 'a sobremesa' },
        { fr: "l'addition", pt: 'a conta' }, { fr: 'le pourboire', pt: 'a gorjeta' }, { fr: 'la réservation', pt: 'a reserva' }, { fr: 'végétarien', pt: 'vegetariano' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Pedir', textPt: 'Use *je voudrais*, *je vais prendre* ou *pour moi, …*. Para chamar o garçom: *S\'il vous plaît !* ou *Excusez-moi !* (nunca "garçon!", que soa antiquado e rude).',
        examples: [{ fr: 'Pour moi, le plat du jour, s\'il vous plaît.', pt: 'Para mim, o prato do dia, por favor.' }, { fr: 'Je vais prendre une salade.', pt: 'Vou querer uma salada.' }] },
      { title: 'A conta', textPt: 'O garçom não traz a conta sem que você peça: é falta de educação "apressar" o cliente. Peça: *L\'addition, s\'il vous plaît.*',
        examples: [{ fr: "On peut payer séparément ?", pt: 'Podemos pagar separado?' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Bonsoir, une table pour deux, s'il vous plaît.", pt: 'Boa noite, uma mesa para dois, por favor.' }, { fr: "J'ai réservé au nom de Ferreira.", pt: 'Fiz uma reserva no nome de Ferreira.' },
      { fr: 'Qu\'est-ce que vous me conseillez ?', pt: 'O que o senhor me recomenda?' }, { fr: 'Je suis allergique aux noix.', pt: 'Sou alérgico a nozes.' },
      { fr: "C'était délicieux, merci !", pt: 'Estava delicioso, obrigado!' }
    ] },
    { type: 'tip', textPt: '**Horários!** Os restaurantes franceses servem almoço entre **12h e 14h** e jantar a partir das **19h30**. Às 16h, a cozinha costuma estar fechada: procure uma *brasserie* (serviço contínuo) ou uma padaria. E na cafeteria, tomar o café **no balcão** (*au comptoir*) é mais barato do que na mesa.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Malpassado" (carne)', options: ['saignant', 'à point', 'bien cuit', 'cru'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Para pedir água da torneira grátis:', options: ["Une carafe d'eau, s'il vous plaît.", "Une bouteille d'eau, s'il vous plaît.", "De l'eau minérale, s'il vous plaît.", 'Un verre de robinet.'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/politeness', label: 'Gramática: pedir com educação' }, { to: '#/gramatica/partitive', label: 'Gramática: partitivos' }, { to: '#/gerais/dinheiro', label: 'Dinheiro e preços' }] }
  ]
});
