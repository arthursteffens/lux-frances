LUX.registerGeneral({
  id: 'transporte', group: 'situacoes', title: 'Transporte', titleFr: 'Les transports', level: 'A2',
  keywords: ['transporte', 'trem', 'metrô', 'ônibus', 'avião', 'bilhete', 'passagem', 'estação', 'plataforma', 'train', 'métro', 'bus', 'avion', 'billet', 'gare', 'quai', 'TGV'],
  blocks: [
    { type: 'intro', textPt: 'Na França viaja-se muito de **trem**: o *TGV* (trem de alta velocidade) liga Lyon a Paris em 2 horas. Nas cidades, há metrô, bonde (*tram*) e ônibus. Lembre: **en** train / bus / voiture, mas **à** pied / vélo.' },
    { type: 'table', sections: [
      { title: 'Meios de transporte', items: [
        { fr: 'en train', pt: 'de trem' }, { fr: 'en métro', pt: 'de metrô' }, { fr: 'en bus', pt: 'de ônibus (urbano)' }, { fr: 'en car', pt: 'de ônibus (rodoviário)' },
        { fr: 'en tram', pt: 'de bonde/VLT' }, { fr: 'en voiture', pt: 'de carro' }, { fr: 'en avion', pt: 'de avião' }, { fr: 'en taxi', pt: 'de táxi' },
        { fr: 'à vélo', pt: 'de bicicleta' }, { fr: 'à pied', pt: 'a pé' }, { fr: 'en covoiturage', pt: 'de carona compartilhada' }
      ] },
      { title: 'Na estação', items: [
        { fr: 'la gare', pt: 'a estação de trem' }, { fr: 'le quai', pt: 'a plataforma' }, { fr: 'la voie', pt: 'a linha' }, { fr: 'le guichet', pt: 'a bilheteria' },
        { fr: 'un aller simple', pt: 'só ida' }, { fr: 'un aller-retour', pt: 'ida e volta' }, { fr: 'le départ / l\'arrivée', pt: 'a partida / a chegada' },
        { fr: 'en retard / à l\'heure', pt: 'atrasado / no horário' }, { fr: 'la correspondance', pt: 'a conexão' }, { fr: 'composter / valider', pt: 'validar (o bilhete)' }
      ] },
      { title: 'No aeroporto', items: [
        { fr: "l'aéroport", pt: 'o aeroporto' }, { fr: "l'enregistrement", pt: 'o check-in' }, { fr: 'la carte d\'embarquement', pt: 'o cartão de embarque' },
        { fr: 'la porte', pt: 'o portão' }, { fr: 'le vol', pt: 'o voo' }, { fr: 'les bagages', pt: 'as bagagens' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Prendre', textPt: '- **"Pegar"** um transporte = *prendre*: *je prends le métro, le bus, le train de 8 h*.\n- **"Descer"** = *descendre*.\n- **"Subir", "embarcar"** = *monter dans*.',
        examples: [{ fr: 'Je prends le bus à huit heures.', pt: 'Pego o ônibus às oito.' }, { fr: 'Descendez à la prochaine station.', pt: 'Desçam na próxima estação.' }] },
      { title: 'Car × bus', textPt: '*le bus* circula na cidade; *le car* (autocarro) faz viagens entre cidades. E *la voiture* também é o **vagão** do trem!',
        examples: [{ fr: 'Votre place est dans la voiture 12.', pt: 'Seu lugar é no vagão 12.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "Un aller-retour pour Paris, s'il vous plaît.", pt: 'Uma ida e volta para Paris, por favor.' }, { fr: 'Le train part de quel quai ?', pt: 'O trem sai de qual plataforma?' },
      { fr: "C'est bien le bus pour le centre ?", pt: 'Este é o ônibus para o centro?' }, { fr: 'Il y a combien d\'arrêts ?', pt: 'São quantos pontos?' },
      { fr: 'Le train a vingt minutes de retard.', pt: 'O trem está vinte minutos atrasado.' }
    ] },
    { type: 'tip', textPt: '**Greves:** na França, greves de transporte (*les grèves*) são frequentes. Fique de olho nas notícias e nos aplicativos de transporte: os trens são anunciados como *supprimés* (cancelados) ou com *trafic perturbé* (circulação irregular).' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"De bicicleta"', options: ['à vélo', 'en vélo', 'par vélo', 'avec vélo'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Plataforma" (estação)', options: ['le quai', 'la plateforme', 'la voie', 'le guichet'], answer: 0 },
      { type: 'listen_choose', audio: 'Un aller simple pour Marseille.', prompt: 'Ouça e escolha.', options: ['Só ida para Marselha.', 'Ida e volta para Marselha.', 'Um trem direto para Marselha.', 'O primeiro trem para Marselha.'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/direcoes', label: 'Direções' }, { to: '#/gerais/horas', label: 'Horas (horários)' }, { to: '#/gramatica/prepositions-places', label: 'Gramática: à, en, au' }] }
  ]
});
