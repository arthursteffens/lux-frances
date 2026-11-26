LUX.registerProLesson({
  id: 'pro-it-b1-l04', lang: 'it', level: 'B1', order: 4, sector: 'Tecnologia',
  title: 'Dai dati alle decisioni', titlePt: 'Dos dados às decisões',
  names: ['Marina', 'Nuvio', 'Sofia', 'Rossi', 'Davide', 'Greco'],
  objectives: [
    'Apresentar indicadores de pessoas (turnover, engajamento, tempo de contratação) à diretoria.',
    'Descrever tendências: aumentare / diminuire / passare da… a…, e a diferença entre "di" e "del" com percentuais.',
    'Ligar cada número a uma recomendação concreta.'
  ],
  vocabulary: [
    { fr: 'l\'indicatore', pt: 'o indicador (KPI)', ex: 'Questo indicatore è migliorato nel trimestre.' },
    { fr: 'il trimestre', pt: 'o trimestre', ex: 'Nel terzo trimestre abbiamo assunto venti persone.' },
    { fr: 'il tasso', pt: 'a taxa', ex: 'Il tasso di turnover è al 18%.' },
    { fr: 'aumentare', pt: 'aumentar', pos: 'v', ex: 'Le assunzioni sono aumentate del 30%.' },
    { fr: 'diminuire', pt: 'diminuir', pos: 'v', ex: 'Il turnover è diminuito di due punti.' },
    { fr: 'calare', pt: 'cair, baixar', pos: 'v', ex: 'Il coinvolgimento è calato in primavera.' },
    { fr: 'restare stabile', pt: 'ficar estável', pos: 'expr', ex: 'Il costo per assunzione è rimasto stabile.' },
    { fr: 'il coinvolgimento', pt: 'o engajamento', ex: 'Il coinvolgimento dei team è all\'80%.' },
    { fr: 'il tempo di assunzione', pt: 'o tempo de contratação', ex: 'Il tempo di assunzione è sceso a 38 giorni.' },
    { fr: 'il punto percentuale', pt: 'o ponto percentual', ex: 'Abbiamo guadagnato cinque punti percentuali.' },
    { fr: 'il calo', pt: 'a queda', ex: 'C\'è stato un calo nelle candidature.' },
    { fr: 'la crescita', pt: 'o crescimento', ex: 'La crescita dell\'organico è del 25%.' }
  ],
  reading: {
    genre: 'relatório para a diretoria',
    title: 'Indicatori del personale – terzo trimestre',
    text: "Sintesi. Il trimestre è stato positivo sul fronte delle assunzioni, ma due segnali meritano attenzione: le uscite volontarie tra gli ingegneri esperti e il calo del coinvolgimento nella squadra dei pagamenti.\n\n" +
      "Assunzioni. Abbiamo assunto 34 persone, il 30% in più rispetto al trimestre precedente. Il tempo medio di assunzione è sceso da 52 a 38 giorni, soprattutto grazie a un processo di colloqui più breve: da cinque incontri siamo passati a tre.\n\n" +
      "Turnover. Il tasso di turnover volontario è diminuito di due punti, dal 18% al 16%. Tuttavia, tra gli ingegneri esperti è salito al 24%. Nei colloqui di uscita, il motivo più citato è la mancanza di un percorso di carriera tecnico: chi non vuole diventare manager non vede possibilità di crescita.\n\n" +
      "Coinvolgimento. Il risultato generale è rimasto stabile al 74%. Nella squadra dei pagamenti, però, è calato di 11 punti in sei mesi. I commenti parlano di carichi di lavoro troppo alti e di obiettivi poco chiari.\n\n" +
      "Raccomandazioni. Proponiamo di creare entro gennaio un percorso di carriera tecnico, con livelli e stipendi equivalenti a quelli dei manager, e di rivedere le priorità della squadra dei pagamenti con la direzione del prodotto. Il costo stimato è inferiore a quello di sostituire tre ingegneri esperti.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Di quanto è sceso il tempo medio di assunzione?', options: ['Da 52 a 38 giorni.', 'Da 38 a 34 giorni.', 'Da 18 a 16 giorni.', 'Da 52 a 30 giorni.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Il turnover generale è aumentato.', answer: 'F', explanationPt: '"è diminuito di due punti, dal 18% al 16%".' },
        { text: 'Tra gli ingegneri esperti il turnover è al 24%.', answer: 'V', explanationPt: '"tra gli ingegneri esperti è salito al 24%".' },
        { text: 'Il coinvolgimento generale è rimasto al 74%.', answer: 'V', explanationPt: '"è rimasto stabile al 74%".' },
        { text: 'L\'azienda vuole aprire un ufficio a Roma.', answer: 'NM', explanationPt: 'O relatório não fala de escritórios.' }
      ] },
      { type: 'multiple_choice', prompt: 'Perché se ne vanno gli ingegneri esperti?', options: ['Manca un percorso di carriera tecnico.', 'Gli stipendi sono troppo bassi.', 'L\'ufficio è troppo lontano.', 'Non c\'è lavoro da remoto.'], answer: 0,
        explanationPt: '"il motivo più citato è la mancanza di un percorso di carriera tecnico".' },
      { type: 'multiple_choice', prompt: 'Che cosa si propone per la squadra dei pagamenti?', options: ['Rivedere le priorità con la direzione del prodotto.', 'Assumere dieci persone.', 'Chiudere la squadra.', 'Spostarla in Lussemburgo.'], answer: 0 },
      { type: 'match', prompt: 'Ligue o número à informação.', pairs: [
        ['34', 'persone assunte nel trimestre'], ['16%', 'turnover volontario generale'], ['24%', 'turnover degli ingegneri esperti'], ['74%', 'coinvolgimento generale'] ] }
    ]
  },
  listening: {
    genre: 'apresentação para a diretoria',
    title: 'Presentare i numeri al comitato di direzione',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'S', name: 'Sofia', gender: 'f' }, { id: 'D', name: 'Davide', gender: 'm' }],
    script: [
      { speaker: 'M', text: 'Parto dalla conclusione: stiamo assumendo bene, ma rischiamo di perdere gli ingegneri più esperti.' },
      { speaker: 'D', text: 'Il turnover però è sceso, no? Ho visto sedici per cento.' },
      { speaker: 'M', text: 'Sì, in generale è diminuito di due punti. Ma tra gli esperti è salito al ventiquattro per cento.' },
      { speaker: 'D', text: 'Quanto ci costa, concretamente?' },
      { speaker: 'M', text: 'Sostituire un ingegnere esperto costa circa un anno di stipendio, tra selezione e formazione.' },
      { speaker: 'S', text: 'E la tua proposta è il percorso di carriera tecnico.' },
      { speaker: 'M', text: 'Esatto. Costa meno di tre sostituzioni e risponde al motivo principale delle uscite.' },
      { speaker: 'D', text: 'Va bene, ma voglio vedere i numeri entro venerdì, con un piano per i prossimi dodici mesi.' },
      { speaker: 'M', text: 'Perfetto, te li mando giovedì sera.' },
      { speaker: 'S', text: 'Ottimo lavoro, Marina. Così è chiaro per tutti.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Con che cosa comincia la presentazione di Marina?', options: ['Con la conclusione.', 'Con la storia dell\'azienda.', 'Con una domanda al pubblico.', 'Con i costi dettagliati.'], answer: 0,
        explanationPt: '"Parto dalla conclusione" — a diretoria quer a mensagem principal primeiro.' },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Sostituire un ingegnere esperto costa circa un anno di stipendio.', answer: 'V', explanationPt: '"costa circa un anno di stipendio".' },
        { text: 'Davide vuole i numeri entro lunedì.', answer: 'F', explanationPt: '"entro venerdì".' },
        { text: 'Il percorso costa più di tre sostituzioni.', answer: 'F', explanationPt: '"Costa meno di tre sostituzioni".' },
        { text: 'Davide è il direttore finanziario.', answer: 'NM', explanationPt: 'O cargo dele não é dito no diálogo (só se percebe que cuida de custos).' }
      ] },
      { type: 'listen_choose', audio: 'In generale è diminuito di due punti.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['In generale è diminuito di due punti.', 'In generale è aumentato di due punti.', 'In generale è diminuito del due per cento.', 'In generale è diminuito di dodici punti.'], answer: 0 },
      { type: 'dictation', text: 'Stiamo assumendo bene, ma rischiamo di perdere gli ingegneri più esperti.' }
    ]
  },
  grammar: {
    topicId: 'it-tendenze-numeri',
    title: 'Descrever tendências e números',
    explanationPt: 'Para falar de números, três estruturas resolvem quase tudo:\n\n' +
      '- **aumentare / salire / crescere** (subir) × **diminuire / scendere / calare** (cair) — no passato prossimo todos usam **essere** quando o sujeito é o número: *il turnover **è sceso***, *le assunzioni **sono aumentate***.\n' +
      '- **passare da… a…** (de… para…): *è passato **dal** 18% **al** 16%*.\n' +
      '- **di / del** + quantidade da variação:\n' +
      '  - **di** + pontos ou números: *è diminuito **di** due punti*.\n' +
      '  - **del** + percentual: *sono aumentate **del** 30%* (o percentual leva artigo: *il 30%*).\n\n' +
      'Os percentuais sempre levam **artigo**: ***il** 16% dei dipendenti*, ***al** 74%*, ***dal** 18%*. Para comparar: *il 30% **in più** / **in meno** rispetto a…*.',
    table: { head: ['Sobe', 'Cai', 'Não muda'], rows: [
      ['aumentare, salire, crescere', 'diminuire, scendere, calare', 'restare stabile, rimanere invariato'],
      ['un aumento, una crescita', 'una diminuzione, un calo', 'stabilità'],
      ['è salito al 24%', 'è sceso da 52 a 38 giorni', 'è rimasto al 74%']
    ] },
    examples: [
      { fr: 'Le assunzioni sono aumentate del 30%.', pt: 'As contratações aumentaram 30%.' },
      { fr: 'Il turnover è diminuito di due punti.', pt: 'O turnover caiu dois pontos.' },
      { fr: 'Il tempo di assunzione è passato da 52 a 38 giorni.', pt: 'O tempo de contratação passou de 52 para 38 dias.' },
      { fr: 'Il coinvolgimento è rimasto stabile al 74%.', pt: 'O engajamento ficou estável em 74%.' }
    ],
    ptComparison: 'Em português dizemos "aumentou **30%**" sem preposição; em italiano ela é obrigatória: ***del** 30%*. E o percentual leva artigo: em português dizemos "16% dos funcionários"; em italiano, ***il** 16% dei dipendenti*.\n\n' +
      '**Ponto × por cento:** de 18% para 16% são **due punti** (percentuais), não "il 2%". A diretoria repara nisso.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ['Il turnover è sceso dal 18% al 16%.', 'Il turnover ha sceso da 18% a 16%.', 'Il turnover è sceso di 18% a 16%.', 'Il turnover è sceso del 18% al 16%.'], answer: 0,
      explanationPt: 'Scendere usa essere, e "passar de… para…" com percentuais = dal… al….' },
    { type: 'fill_blank', prompt: 'Complete.', bank: ['del', 'di', 'dal', 'rimasto'], items: [
      { text: 'Le candidature sono aumentate ___ 20%.', answers: ['del'] },
      { text: 'Il coinvolgimento è calato ___ 11 punti.', answers: ['di'] },
      { text: 'Il tasso è passato ___ 10% al 12%.', answers: ['dal'] },
      { text: 'Il costo è ___ stabile.', answers: ['rimasto'] }
    ] },
    { type: 'multiple_choice', prompt: 'O engajamento foi de 80% para 75%. Como dizer?', options: ['È calato di cinque punti.', 'È calato del cinque per cento.', 'È aumentato di cinque punti.', 'È rimasto stabile.'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Le assunzioni sono aumentate del 30% rispetto al trimestre precedente.', translation: 'As contratações aumentaram 30% em relação ao trimestre anterior.' }
  ],
  tipForBrazilians: '**Números em italiano:**\n- Vírgula decimal, como no Brasil: *1,9 milioni*. O ponto separa os milhares: *12.500 euro*.\n- *Euro* não vai para o plural: *dieci **euro***.\n- *Un miliardo* = um **bilhão** (e *un bilione* é um **trilhão**!).\n\n**Apresentação:** comece pela conclusão (*Parto dalla conclusione…*) e termine com um pedido claro (*Vi chiedo di approvare…*). Diretores italianos costumam interromper com perguntas — isso é sinal de interesse, não de desrespeito.'
});
