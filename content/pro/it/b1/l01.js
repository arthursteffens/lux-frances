LUX.registerProLesson({
  id: 'pro-it-b1-l01', lang: 'it', level: 'B1', order: 1, sector: 'Tecnologia',
  title: 'Conoscere i propri stakeholder', titlePt: 'Conhecendo seus stakeholders',
  names: ['Marina', 'Nuvio', 'Sofia', 'Rossi', 'Marco', 'Bianchi', 'Milano', 'Lussemburgo'],
  objectives: [
    'Apresentar seu papel de HRBP para a liderança em italiano.',
    'Fazer pedidos e perguntas com educação usando o condicional de cortesia (vorrei, potrebbe, Le dispiacerebbe…).',
    'Saber quando tratar alguém por Lei (formal) e quando por tu.'
  ],
  vocabulary: [
    { fr: 'il/la responsabile', pt: 'o/a responsável, gestor(a)', ex: 'Il responsabile del team tecnico è Marco.' },
    { fr: 'riportare a', pt: 'reportar-se a (ter como chefe)', pos: 'v', ex: 'Riporto direttamente alla direttrice del personale.' },
    { fr: 'il personale', pt: 'o pessoal, os funcionários; RH (ufficio del personale)', ex: 'Il personale è cresciuto molto quest\'anno.' },
    { fr: 'l\'organico', pt: 'o quadro de funcionários, headcount', ex: 'L\'organico raddoppierà entro dicembre.' },
    { fr: 'la priorità', pt: 'a prioridade', ex: 'Assumere ingegneri esperti è la nostra priorità.' },
    { fr: 'il colloquio individuale', pt: 'a reunião individual (one-to-one)', ex: 'Vorrei fissare un colloquio individuale con ognuno di voi.' },
    { fr: 'fissare un incontro', pt: 'marcar uma reunião', pos: 'expr', ex: 'Possiamo fissare un incontro per giovedì?' },
    { fr: 'la criticità', pt: 'o ponto crítico, o problema', ex: 'Quali sono le criticità principali del team?' },
    { fr: 'segnalare', pt: 'sinalizar, avisar', pos: 'v', ex: 'Segnalerò subito eventuali rischi.' },
    { fr: 'il riscontro', pt: 'o retorno, a resposta (feedback)', ex: 'Aspetto un vostro riscontro entro venerdì.' },
    { fr: 'la proposta', pt: 'a proposta', ex: 'Le manderò una proposta entro fine mese.' },
    { fr: 'tenere aggiornato', pt: 'manter informado', pos: 'expr', ex: 'Mi tenga aggiornata sulla revisione degli stipendi.' }
  ],
  reading: {
    genre: 'e-mail para a liderança',
    title: 'Oggetto: I miei primi 90 giorni come HR Business Partner',
    text: "Gentili colleghi,\n\n" +
      "come molti di voi sanno, la settimana scorsa ho iniziato a lavorare in Nuvio come HR Business Partner per le aree Prodotto e Tecnologia. Riporto a Sofia Rossi, la nostra direttrice del personale, e lavorerò tra gli uffici di Milano e del Lussemburgo. Vorrei condividere con voi il mio piano per i primi 90 giorni.\n\n" +
      "Nel primo mese vorrei soprattutto ascoltare. Fisserò un [[colloquio individuale|reunião individual]] con ognuno di voi per capire le vostre priorità e le criticità che vedete nei vostri team. Analizzerò anche i dati del personale: il [[turnover|rotatividade]], i risultati del questionario sul clima e la dimensione delle squadre.\n\n" +
      "Nel secondo mese proporrò tre priorità per l'anno. Immagino che riguarderanno la struttura dei team, la crescita dei nuovi manager e l'assunzione di profili tecnici esperti, ma preferisco non dare niente per scontato prima di parlare con voi.\n\n" +
      "Nel terzo mese vorrei ottenere uno o due risultati concreti, per esempio un processo di inserimento dei nuovi assunti più semplice.\n\n" +
      "Che cosa potete aspettarvi da me? Vi segnalerò i rischi prima che diventino problemi, porterò dati e non solo opinioni e cercherò di non aggiungere burocrazia.\n\n" +
      "Vi manderò gli inviti questa settimana. Se preferite incontrarci a pranzo, fatemelo sapere.\n\n" +
      "Cordiali saluti,\nMarina",
    exercises: [
      { type: 'multiple_choice', prompt: 'A chi riporta Marina?', options: ['A Sofia Rossi, la direttrice del personale.', 'Al direttore tecnico.', 'All\'amministratore delegato.', 'Al responsabile del prodotto.'], answer: 0,
        explanationPt: '"Riporto a Sofia Rossi, la nostra direttrice del personale".' },
      { type: 'order_events', prompt: 'Coloque as fases do plano na ordem.', items: [
        'Fissare un colloquio con ogni responsabile.', 'Analizzare i dati del personale.', 'Proporre tre priorità per l\'anno.', 'Ottenere uno o due risultati concreti.'
      ] },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Marina ha già deciso le tre priorità.', answer: 'F', explanationPt: '"preferisco non dare niente per scontato prima di parlare con voi".' },
        { text: 'Marina lavorerà a Milano e in Lussemburgo.', answer: 'V', explanationPt: '"lavorerò tra gli uffici di Milano e del Lussemburgo".' },
        { text: 'Marina ha lavorato in una banca.', answer: 'NM', explanationPt: 'O texto não fala do passado profissional dela.' },
        { text: 'I colleghi possono proporre un pranzo.', answer: 'V', explanationPt: '"Se preferite incontrarci a pranzo, fatemelo sapere."' }
      ] },
      { type: 'multiple_choice', prompt: 'Che esempio di risultato concreto dà Marina?', options: ['Un processo di inserimento più semplice.', 'Un nuovo ufficio a Roma.', 'Raddoppiare gli stipendi.', 'Una riorganizzazione di tutta l\'azienda.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a expressão ao significado.', pairs: [
        ['segnalare un rischio', 'avisar sobre um risco'], ['dare per scontato', 'considerar óbvio, pressupor'], ['il colloquio individuale', 'a reunião individual'], ['fatemelo sapere', 'me avisem'] ] }
    ]
  },
  listening: {
    genre: 'reunião individual',
    title: 'Il primo incontro con il direttore tecnico',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'B', name: 'Marco', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Grazie per il tempo, Marco. Potrebbe spiegarmi le sue priorità per quest\'anno?' },
      { speaker: 'B', text: 'Certo, ma diamoci del tu! Dobbiamo lanciare la nuova app entro giugno e ci mancano ancora otto ingegneri.' },
      { speaker: 'M', text: 'Va bene, ci diamo del tu. Otto sono tanti. Sai perché le posizioni restano aperte così a lungo?' },
      { speaker: 'B', text: 'Sinceramente, i nostri stipendi sono sotto il mercato e i colloqui sono troppo lunghi.' },
      { speaker: 'M', text: 'Capisco. Vorrei anche sapere come stanno i tuoi manager con tutta questa crescita.' },
      { speaker: 'B', text: 'Non benissimo. Due sono stati promossi l\'anno scorso e nessuno li ha formati.' },
      { speaker: 'M', text: 'Ti sarebbe utile un breve percorso per i nuovi manager?' },
      { speaker: 'B', text: 'Sì, molto, purché non li tenga lontani dai team per giorni interi.' },
      { speaker: 'M', text: 'D\'accordo. Ti mando una proposta entro la fine del mese.' },
      { speaker: 'B', text: 'Perfetto. E tienimi aggiornato sulla revisione degli stipendi, per favore.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quanti ingegneri mancano a Marco?', options: ['Otto.', 'Due.', 'Diciotto.', 'Quattro.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Marco propone di darsi del tu.', answer: 'V', explanationPt: '"diamoci del tu!" — passar do Lei para o tu.' },
        { text: 'I due nuovi manager hanno ricevuto una buona formazione.', answer: 'F', explanationPt: '"nessuno li ha formati".' },
        { text: 'Marco vuole un corso di una settimana fuori ufficio.', answer: 'F', explanationPt: 'Ele não quer os gestores longe das equipes por dias.' },
        { text: 'Marco lavorava prima a Torino.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: 'Potrebbe spiegarmi le sue priorità per quest\'anno?', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Potrebbe spiegarmi le sue priorità per quest\'anno?', 'Può spiegarmi le sue priorità per l\'anno prossimo?', 'Potrei spiegarle le mie priorità per quest\'anno?', 'Potrebbe spiegarci le priorità di quest\'anno?'], answer: 0 },
      { type: 'dictation', text: 'Tienimi aggiornato sulla revisione degli stipendi.' }
    ]
  },
  grammar: {
    topicId: 'it-condizionale-cortesia',
    title: 'Condicional de cortesia e o tratamento por Lei',
    explanationPt: 'Para pedir e perguntar com educação, o italiano usa o **condicional** — como o nosso "eu gostaria", "você poderia":\n\n' +
      '- **Vorrei** (eu gostaria) — *Vorrei fissare un incontro.*\n' +
      '- **Potrebbe / Potresti…?** (o senhor poderia / você poderia) — *Potrebbe spiegarmi…?*\n' +
      '- **Le dispiacerebbe…? / Ti dispiacerebbe…?** (o senhor se importaria…?)\n' +
      '- **Sarebbe utile / Ti sarebbe utile…?** (seria útil…?)\n\n' +
      '**Lei × tu.** Com quem você ainda não tem intimidade (diretores, candidatos, clientes), use **Lei** + verbo na 3ª pessoa: *Lei **può**…?*, *le **sue** priorità*. Nas empresas de tecnologia, muitas vezes o outro propõe logo: **"Diamoci del tu!"** (vamos nos tratar por tu). Espere o convite, ou pergunte: *Possiamo darci del tu?*',
    table: { head: ['Pessoa', 'volere', 'potere', 'essere'], rows: [
      ['io', 'vorrei', 'potrei', 'sarei'],
      ['tu', 'vorresti', 'potresti', 'saresti'],
      ['Lei / lui / lei', 'vorrebbe', 'potrebbe', 'sarebbe'],
      ['noi', 'vorremmo', 'potremmo', 'saremmo'],
      ['voi', 'vorreste', 'potreste', 'sareste'],
      ['loro', 'vorrebbero', 'potrebbero', 'sarebbero']
    ] },
    examples: [
      { fr: 'Vorrei capire meglio le criticità del team.', pt: 'Eu gostaria de entender melhor os problemas da equipe.' },
      { fr: 'Potrebbe mandarmi l\'organigramma?', pt: 'O senhor poderia me mandar o organograma?' },
      { fr: 'Le dispiacerebbe spostare l\'incontro a giovedì?', pt: 'O senhor se importaria de passar a reunião para quinta?' },
      { fr: 'Ti sarebbe utile un percorso per i nuovi manager?', pt: 'Um programa para os novos gestores seria útil para você?' }
    ],
    ptComparison: 'O condicional italiano funciona como o português: *vorrei* = "gostaria/queria", *potrebbe* = "poderia". Atenção à grafia com **-rr-**: *vo**rr**ei*, *vo**rr**emmo*, e ao **-mm-** de *noi*: *potre**mm**o* (no passado remoto seria *potemmo*).\n\n' +
      'O **Lei** é como o nosso "o senhor / a senhora", mas muito mais usado no trabalho — e escrito às vezes com maiúscula nos e-mails: *La ringrazio*, *Le scrivo*.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Qual pedido é o mais educado para um diretor que você acabou de conhecer?', options: ['Potrebbe mandarmi i dati del team?', 'Mandami i dati del team.', 'Mi mandi i dati, subito.', 'Devi mandarmi i dati del team.'], answer: 0,
      explanationPt: 'Condicional (potrebbe) + Lei: educado e formal.' },
    { type: 'fill_blank', prompt: 'Complete com a forma adequada.', bank: ['Vorrei', 'Potrebbe', 'dispiacerebbe', 'sarebbe'], items: [
      { text: '___ fissare un incontro con Lei la settimana prossima.', answers: ['Vorrei'] },
      { text: '___ spiegarmi come funziona il processo di selezione?', answers: ['Potrebbe'] },
      { text: 'Le ___ spostare la riunione alle tre?', answers: ['dispiacerebbe'] },
      { text: 'Secondo me ___ utile un percorso per i nuovi manager.', answers: ['sarebbe'] }
    ] },
    { type: 'multiple_choice', prompt: 'Marco disse "Diamoci del tu!". Che cosa significa?', options: ['Vamos nos tratar por "tu", sem formalidade.', 'Vamos dar um presente.', 'Vamos marcar outra reunião.', 'Vamos falar em inglês.'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Vorrei capire le priorità del suo team.', translation: 'Eu gostaria de entender as prioridades da sua equipe.' }
  ],
  tipForBrazilians: '**Falsos amigos de escritório:**\n- *la firma* = a **assinatura** (empresa é **l\'azienda / la società**).\n- *il convitto* = internato (convite é **l\'invito**).\n- *salire* = subir (sair é **uscire**).\n- *guardare* = olhar (guardar é **mettere via / conservare**).\n- *il burro* = manteiga, não "burro" (isso é **asino**).\n\n**Nomes que enganam:** em italiano, **Andrea, Luca, Nicola e Mattia são nomes masculinos**. Antes de escrever "Gentile signora", confira!'
});
