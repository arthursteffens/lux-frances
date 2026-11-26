LUX.registerProLesson({
  id: 'pro-it-b1-l02', lang: 'it', level: 'B1', order: 2, sector: 'Tecnologia',
  title: 'Mi racconti di una volta in cui…', titlePt: 'Conte-me sobre uma vez em que…',
  names: ['Marina', 'Nuvio', 'Paolo', 'Conti', 'STAR', 'Milano'],
  objectives: [
    'Conduzir e responder a perguntas comportamentais com o método STAR.',
    'Contar uma experiência no passado alternando passato prossimo (fatos) e imperfetto (contexto).',
    'Escolher o auxiliar certo: avere ou essere.'
  ],
  vocabulary: [
    { fr: 'il colloquio di lavoro', pt: 'a entrevista de emprego', ex: 'Domani ho tre colloqui di lavoro.' },
    { fr: 'il candidato / la candidata', pt: 'o candidato / a candidata', ex: 'La candidata ha molta esperienza nel settore.' },
    { fr: 'la selezione', pt: 'o recrutamento e seleção', ex: 'Il processo di selezione dura tre settimane.' },
    { fr: 'gestire', pt: 'gerir, lidar com', pos: 'v', ex: 'Come ha gestito il conflitto nel team?' },
    { fr: 'affrontare', pt: 'enfrentar', pos: 'v', ex: 'Abbiamo affrontato un periodo molto difficile.' },
    { fr: 'il conflitto', pt: 'o conflito', ex: 'C\'era un conflitto tra due responsabili.' },
    { fr: 'la scadenza', pt: 'o prazo', ex: 'La scadenza era a fine marzo.' },
    { fr: 'il risultato', pt: 'o resultado', ex: 'Il risultato è stato ottimo.' },
    { fr: 'le dimissioni', pt: 'o pedido de demissão (sempre no plural)', ex: 'Tre persone hanno dato le dimissioni in un mese.' },
    { fr: 'assumere', pt: 'contratar (e também "assumir")', pos: 'v', ex: 'Abbiamo assunto dieci persone.' },
    { fr: 'il punto di forza', pt: 'o ponto forte', ex: 'Il mio punto di forza è l\'ascolto.' },
    { fr: 'imparare da', pt: 'aprender com', pos: 'v', ex: 'Ho imparato molto da quell\'errore.' }
  ],
  reading: {
    genre: 'guia interno para entrevistadores',
    title: 'Il colloquio comportamentale: il metodo STAR',
    text: "Nei colloqui di Nuvio non chiediamo ai candidati che cosa farebbero in una situazione immaginaria. Chiediamo che cosa hanno fatto davvero. Il passato, infatti, è il miglior indicatore del comportamento futuro.\n\n" +
      "Le domande cominciano spesso con «Mi racconti di una volta in cui…». Per esempio: «Mi racconti di una volta in cui ha dovuto gestire un conflitto nel team».\n\n" +
      "Una buona risposta segue il metodo STAR:\n" +
      "- Situazione: dove lavorava il candidato? Che cosa succedeva?\n" +
      "- Compito: qual era il suo ruolo, il suo obiettivo?\n" +
      "- Azione: che cosa ha fatto lui, personalmente? Attenzione al «noi»: ci interessa l'«io».\n" +
      "- Risultato: com'è finita? Ci sono numeri? Che cosa ha imparato?\n\n" +
      "Durante il colloquio, prendete appunti e fate domande di approfondimento: «E poi che cosa è successo?», «Come ha reagito il suo responsabile?». Non interrompete troppo presto: spesso i dettagli più utili arrivano alla fine.\n\n" +
      "Dopo ogni colloquio, compilate la scheda di valutazione entro 24 ore, prima di parlare con gli altri intervistatori. Così ognuno dà un giudizio indipendente e riduciamo i [[pregiudizi|vieses]].",
    exercises: [
      { type: 'multiple_choice', prompt: 'Perché Nuvio fa domande sul passato?', options: ['Perché il passato indica bene il comportamento futuro.', 'Perché i candidati preferiscono parlare del passato.', 'Perché è più veloce.', 'Perché è obbligatorio per legge.'], answer: 0,
        explanationPt: '"Il passato, infatti, è il miglior indicatore del comportamento futuro."' },
      { type: 'order_events', prompt: 'Coloque as etapas do método STAR na ordem.', items: [
        'Descrivere la situazione.', 'Spiegare il proprio compito.', 'Raccontare l\'azione personale.', 'Presentare il risultato.'
      ] },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Nella risposta, l\'intervistatore vuole sentire soprattutto «noi».', answer: 'F', explanationPt: '"Attenzione al «noi»: ci interessa l\'«io»."' },
        { text: 'La scheda va compilata entro 24 ore.', answer: 'V', explanationPt: '"compilate la scheda di valutazione entro 24 ore".' },
        { text: 'Ogni colloquio dura un\'ora.', answer: 'NM', explanationPt: 'O texto não fala da duração.' },
        { text: 'È meglio interrompere presto il candidato.', answer: 'F', explanationPt: '"Non interrompete troppo presto".' }
      ] },
      { type: 'multiple_choice', prompt: 'Perché si compila la scheda prima di parlare con gli altri?', options: ['Per avere giudizi indipendenti e ridurre i pregiudizi.', 'Per finire prima la giornata.', 'Perché il candidato la legge.', 'Per scegliere lo stipendio.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a etapa ao que ela descreve.', pairs: [
        ['Situazione', 'o contexto'], ['Compito', 'o papel, o objetivo'], ['Azione', 'o que a pessoa fez'], ['Risultato', 'como terminou'] ] }
    ]
  },
  listening: {
    genre: 'entrevista de emprego',
    title: 'Colloquio per un engineering manager',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'P', name: 'Paolo', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Mi racconti di una volta in cui ha dovuto gestire un momento difficile nel team.' },
      { speaker: 'P', text: 'Due anni fa lavoravo in una startup di Milano. Il team era piccolo e la scadenza per il lancio era molto vicina.' },
      { speaker: 'M', text: 'E qual era il suo ruolo?' },
      { speaker: 'P', text: 'Ero il responsabile tecnico. Il mio compito era consegnare il prodotto senza perdere persone.' },
      { speaker: 'M', text: 'Che cosa è successo?' },
      { speaker: 'P', text: 'In un mese due sviluppatori hanno dato le dimissioni. Gli altri erano stanchi e preoccupati.' },
      { speaker: 'M', text: 'E lei, personalmente, che cosa ha fatto?' },
      { speaker: 'P', text: 'Ho parlato con ognuno, ho tolto due funzioni non essenziali e ho spostato il lancio di due settimane.' },
      { speaker: 'M', text: 'Com\'è andata a finire?' },
      { speaker: 'P', text: 'Abbiamo lanciato in tempo per i clienti più importanti e nessun altro se n\'è andato. Ho imparato a dire di no prima.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Dove lavorava Paolo due anni fa?', options: ['In una startup di Milano.', 'In una banca di Roma.', 'In una grande azienda a Torino.', 'In Lussemburgo.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Due sviluppatori hanno dato le dimissioni.', answer: 'V', explanationPt: '"In un mese due sviluppatori hanno dato le dimissioni."' },
        { text: 'Paolo ha aggiunto nuove funzioni al prodotto.', answer: 'F', explanationPt: 'Ele **tirou** duas funções não essenciais.' },
        { text: 'Paolo ha ricevuto un premio.', answer: 'NM', explanationPt: 'Não se fala de prêmio.' },
        { text: 'Il lancio è stato spostato di due settimane.', answer: 'V', explanationPt: '"ho spostato il lancio di due settimane".' }
      ] },
      { type: 'listen_choose', audio: 'Ho imparato a dire di no prima.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Ho imparato a dire di no prima.', 'Ho imparato a dire di sì prima.', 'Ho dovuto dire di no prima.', 'Ho imparato a dirlo prima.'], answer: 0 },
      { type: 'dictation', text: 'Il team era piccolo e la scadenza era molto vicina.' }
    ]
  },
  grammar: {
    topicId: 'it-passato-imperfetto',
    title: 'Passato prossimo × imperfetto',
    explanationPt: 'Numa resposta STAR, os dois passados trabalham juntos — exatamente como o nosso **pretérito perfeito × imperfeito**:\n\n' +
      '- **Imperfetto** = o cenário, o contexto, o que *era* ou *estava acontecendo*: *lavoravo*, *il team **era** piccolo*, *erano stanchi*. É o **S** e o **T** do STAR.\n' +
      '- **Passato prossimo** = as ações concluídas, os fatos: ***ho parlato***, ***ho tolto***, ***abbiamo lanciato***. É o **A** e o **R**.\n\n' +
      'Formação do passato prossimo: **avere / essere + particípio**. A maioria usa **avere** (*ho parlato*, *ho deciso*). Verbos de movimento e mudança de estado usam **essere**, e aí o particípio concorda: *sono **andato/andata***, *è **successo***, *sono **arrivati***.\n\n' +
      'Imperfetto: radical + **-avo / -evo / -ivo**: *lavor**avo***, *av**evo***, *prefer**ivo***. Irregular importante: **essere → ero, eri, era, eravamo, eravate, erano**.',
    table: { head: ['Contexto (imperfetto)', 'Ação (passato prossimo)'], rows: [
      ['Lavoravo in una startup.', 'Ho cambiato lavoro nel 2023.'],
      ['Il team era stanco.', 'Ho parlato con ognuno.'],
      ['Avevamo poco tempo.', 'Abbiamo spostato il lancio.'],
      ['Il cliente era arrabbiato.', 'Sono andata a trovarlo.']
    ] },
    examples: [
      { fr: 'Quando sono arrivata, il team non aveva un responsabile.', pt: 'Quando eu cheguei, a equipe não tinha um gestor.' },
      { fr: 'Mentre preparavamo il lancio, due persone hanno dato le dimissioni.', pt: 'Enquanto preparávamos o lançamento, duas pessoas pediram demissão.' },
      { fr: 'Il processo era lento, quindi l\'abbiamo semplificato.', pt: 'O processo era lento, então nós o simplificamos.' },
      { fr: 'Che cosa ha fatto lei, personalmente?', pt: 'O que a senhora fez, pessoalmente?' }
    ],
    ptComparison: 'A lógica é a mesma do português, então o brasileiro acerta quase sempre o **tempo**. O erro típico é o **auxiliar**: em português dizemos "eu *tenho* chegado"; em italiano, *chegar* pede **essere**: ~~ho arrivato~~ → **sono arrivato/a**. Outros com essere: *andare, venire, partire, uscire, entrare, restare, diventare, nascere, succedere*.\n\n' +
      'E o passato prossimo **não** é o nosso "tenho feito": *ho lavorato* = "eu trabalhei". No norte da Itália ele substitui quase totalmente o passato remoto na fala.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ['Quando lavoravo a Milano, ho guidato un team di sei persone.', 'Quando lavorato a Milano, ho guidato un team di sei persone.', 'Quando lavoravo a Milano, ho arrivato in ritardo.', 'Quando ero lavorato a Milano, ho guidato un team.'], answer: 0,
      explanationPt: 'Contexto no imperfetto (lavoravo) + ação concluída no passato prossimo (ho guidato).' },
    { type: 'fill_blank', prompt: 'Complete com o passado adequado.', bank: ['era', 'ho parlato', 'sono arrivata', 'avevamo'], items: [
      { text: 'Il team ___ molto stanco.', answers: ['era'] },
      { text: 'Allora ___ con ogni persona.', answers: ['ho parlato'] },
      { text: 'Quando ___ in azienda, mancava un processo di selezione.', answers: ['sono arrivata'] },
      { text: 'Non ___ abbastanza tempo per il lancio.', answers: ['avevamo'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual auxiliar usa "partire" (partir)?', options: ['essere: sono partito/a', 'avere: ho partito', 'stare: sto partito', 'tenere: tengo partito'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Mentre preparavamo il lancio, due persone hanno dato le dimissioni.', translation: 'Enquanto preparávamos o lançamento, duas pessoas pediram demissão.' }
  ],
  tipForBrazilians: '**Na entrevista em italiano:**\n- *Assumere* = **contratar** (*Mi hanno assunta!* = Fui contratada!). Para "assumir uma responsabilidade" também serve: *assumersi la responsabilità*.\n- *Le dimissioni* é sempre plural: *ha dato **le** dimissioni*.\n- *Il compito* = a tarefa (no plural, *i compiti* = a lição de casa).\n- *Esperto* = experiente/especialista; "esperto" no sentido de malandro é **furbo**.\n\n**Cultura:** na Itália é comum começar a entrevista com algumas perguntas pessoais leves e só depois entrar no técnico. Não estranhe — e responda com calma: pressa soa como insegurança.'
});
