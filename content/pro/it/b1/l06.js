LUX.registerProLesson({
  id: 'pro-it-b1-l06', lang: 'it', level: 'B1', order: 6, sector: 'Fintech',
  title: 'Pianificare il personale per il lancio di una fintech', titlePt: 'Planejamento de pessoal para o lançamento de uma fintech',
  names: ['Marina', 'Nuvio', 'Pay', 'Sofia', 'Rossi', 'Davide', 'Greco', 'CSSF', 'Lussemburgo', 'Milano', 'Banca', 'Italia'],
  objectives: [
    'Apresentar um plano de contratações ligado ao orçamento e ao calendário do negócio.',
    'Falar de regulação e compliance numa empresa de pagamentos.',
    'Usar o futuro simples e as condições reais (se + presente/futuro, a meno che non + congiuntivo).'
  ],
  vocabulary: [
    { fr: 'il piano del personale', pt: 'o plano de pessoal (headcount plan)', ex: 'Il piano del personale deve rispettare il budget.' },
    { fr: 'il budget', pt: 'o orçamento (il bilancio = o balanço contábil)', ex: 'Il budget per le assunzioni è di 1,9 milioni.' },
    { fr: 'il costo del personale', pt: 'o custo de pessoal, a folha', ex: 'Il costo del personale crescerà del 20%.' },
    { fr: 'l\'autorizzazione', pt: 'a autorização, a licença', ex: 'Serve un\'autorizzazione come istituto di pagamento.' },
    { fr: 'la conformità (compliance)', pt: 'o compliance, a conformidade', ex: 'I profili di compliance sono difficili da trovare.' },
    { fr: 'l\'autorità di vigilanza', pt: 'o órgão regulador, a autoridade supervisora', ex: 'In Lussemburgo l\'autorità di vigilanza è la CSSF.' },
    { fr: 'l\'antiriciclaggio', pt: 'a prevenção à lavagem de dinheiro (AML)', ex: 'Ci serve un responsabile antiriciclaggio.' },
    { fr: 'scaglionare', pt: 'escalonar, fazer em etapas', pos: 'v', ex: 'Scaglioneremo le assunzioni su tre trimestri.' },
    { fr: 'essere in linea con', pt: 'estar dentro do previsto, alinhado com', pos: 'expr', ex: 'Le assunzioni sono in linea con il piano.' },
    { fr: 'il margine di sicurezza', pt: 'a reserva para imprevistos', ex: 'Abbiamo previsto un margine di sicurezza del 10%.' },
    { fr: 'approvare', pt: 'aprovar', pos: 'v', ex: 'Il direttore finanziario deve approvare il piano.' },
    { fr: 'il trasferimento', pt: 'a mudança (de cidade/país), a relocação', ex: 'Offriremo un aiuto per il trasferimento.' }
  ],
  reading: {
    genre: 'memorando para a diretoria',
    title: 'Piano del personale per Nuvio Pay',
    text: "L'anno prossimo Nuvio lancerà Nuvio Pay, una soluzione di pagamento per i nostri clienti aziendali. Questo documento descrive le persone che ci serviranno, quando ci serviranno e quanto costeranno.\n\n" +
      "Squadra. Entro la fine dell'anno Nuvio Pay avrà bisogno di 22 persone: 12 ingegneri, 4 profili di prodotto e design, 3 persone tra conformità e rischio, 2 nelle operazioni con i clienti e un responsabile dei pagamenti. Circa metà degli ingegneri arriverà dai team attuali: cinque hanno già mostrato interesse.\n\n" +
      "Tempi. La società sarà vigilata dalla CSSF, l'autorità di vigilanza del Lussemburgo, e non potremo chiedere l'autorizzazione come istituto di pagamento senza un responsabile della conformità e un responsabile [[antiriciclaggio|prevenção à lavagem de dinheiro]]. Questi due ruoli sono quindi la prima priorità e dovranno essere coperti entro marzo. Le assunzioni tecniche saranno scaglionate tra il secondo e il terzo trimestre, così il costo del personale crescerà insieme ai ricavi.\n\n" +
      "Costi. Il costo totale del personale per l'anno è stimato in 1,9 milioni di euro, compreso un margine di sicurezza del 10%. Gli specialisti di conformità sono rari in Lussemburgo e costeranno probabilmente il 15-20% in più delle nostre fasce abituali. Consigliamo di cercarli anche in Italia, Belgio, Francia e Germania e di offrire un aiuto per il trasferimento.\n\n" +
      "Rischi. Se i due ruoli di conformità non saranno coperti entro marzo, il lancio slitterà di almeno un trimestre. Per questo chiediamo di approvare subito queste due posizioni, a meno che il comitato non preferisca affidarsi temporaneamente a consulenti esterni.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Di quante persone avrà bisogno Nuvio Pay entro la fine dell\'anno?', options: ['22.', '12.', '5.', '32.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Tutti gli ingegneri saranno assunti fuori dall\'azienda.', answer: 'F', explanationPt: '"Circa metà degli ingegneri arriverà dai team attuali".' },
        { text: 'Il budget comprende un margine di sicurezza del 10%.', answer: 'V', explanationPt: '"compreso un margine di sicurezza del 10%".' },
        { text: 'Nuvio Pay sarà lanciata anche in Spagna.', answer: 'NM', explanationPt: 'O texto não fala da Espanha.' },
        { text: 'Gli specialisti di conformità sono facili da trovare in Lussemburgo.', answer: 'F', explanationPt: '"sono rari in Lussemburgo".' }
      ] },
      { type: 'multiple_choice', prompt: 'Perché i ruoli di conformità sono la prima priorità?', options: ['Senza di loro non si può chiedere l\'autorizzazione.', 'Costano meno degli ingegneri.', 'Il direttore finanziario li vuole subito.', 'Sono già stati trovati.'], answer: 0,
        explanationPt: '"non potremo chiedere l\'autorizzazione… senza un responsabile della conformità e un responsabile antiriciclaggio".' },
      { type: 'multiple_choice', prompt: 'Che cosa succederà se i due ruoli non saranno coperti entro marzo?', options: ['Il lancio slitterà di almeno un trimestre.', 'Il budget aumenterà del 10%.', 'L\'azienda assumerà solo ingegneri.', 'Il lancio sarà anticipato.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a expressão ao significado.', pairs: [
        ['slittare', 'atrasar, ser adiado'], ['i ricavi', 'as receitas'], ['coprire un ruolo', 'preencher uma vaga'], ['affidarsi a', 'recorrer a, confiar em'] ] }
    ]
  },
  listening: {
    genre: 'reunião de orçamento',
    title: 'Il piano davanti al direttore finanziario',
    speakers: [{ id: 'D', name: 'Davide', gender: 'm' }, { id: 'M', name: 'Marina', gender: 'f' }],
    script: [
      { speaker: 'D', text: 'Ho letto il piano. Un milione e nove è tanto. Dove possiamo risparmiare?' },
      { speaker: 'M', text: 'Sui due ruoli di conformità non possiamo: senza di loro la CSSF non darà l\'autorizzazione.' },
      { speaker: 'D', text: 'D\'accordo. E gli ingegneri? Dobbiamo assumerli tutti quest\'anno?' },
      { speaker: 'M', text: 'No. Se il lancio andrà bene, assumeremo gli ultimi quattro nel terzo trimestre. Altrimenti aspetteremo.' },
      { speaker: 'D', text: 'Mi piace. Così il costo seguirà i ricavi.' },
      { speaker: 'M', text: 'Esatto. E se troviamo i profili tra i nostri team, risparmieremo anche sulla selezione.' },
      { speaker: 'D', text: 'E l\'aiuto per il trasferimento è davvero necessario?' },
      { speaker: 'M', text: 'Per gli specialisti di conformità sì, a meno che non li troviamo in Lussemburgo, ma è poco probabile.' },
      { speaker: 'D', text: 'Va bene. Approvo subito i due ruoli di conformità. Il resto lo rivediamo a giugno.' },
      { speaker: 'M', text: 'Perfetto. Ti manderò un aggiornamento ogni mese.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Che cosa approva subito Davide?', options: ['I due ruoli di conformità.', 'Tutti i 22 ruoli.', 'Solo gli ingegneri.', 'L\'aiuto per il trasferimento di tutti.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Gli ultimi quattro ingegneri dipendono dal successo del lancio.', answer: 'V', explanationPt: '"Se il lancio andrà bene, assumeremo gli ultimi quattro nel terzo trimestre."' },
        { text: 'Davide vuole rivedere il resto del piano a giugno.', answer: 'V', explanationPt: '"Il resto lo rivediamo a giugno."' },
        { text: 'Marina pensa che sia facile trovare gli specialisti in Lussemburgo.', answer: 'F', explanationPt: '"è poco probabile".' },
        { text: 'Davide lavora in Nuvio da dieci anni.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: 'Se il lancio andrà bene, assumeremo gli ultimi quattro nel terzo trimestre.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Se il lancio andrà bene, assumeremo gli ultimi quattro nel terzo trimestre.', 'Se il lancio andasse bene, assumeremmo gli ultimi quattro nel terzo trimestre.', 'Se il lancio va bene, assumiamo gli ultimi quattro nel secondo trimestre.', 'Se il lancio andrà bene, assumeremo gli ultimi quattordici nel terzo trimestre.'], answer: 0 },
      { type: 'dictation', text: 'Così il costo seguirà i ricavi.' }
    ]
  },
  grammar: {
    topicId: 'it-futuro-condizioni',
    title: 'Futuro simples e condições reais',
    explanationPt: 'Num plano, você fala do que **vai acontecer** e das **condições**:\n\n' +
      '- **Futuro semplice**: radical + **-erò, -erai, -erà, -eremo, -erete, -eranno** (verbos em -are trocam o *a* por *e*): *lanc**erà***, *assum**eremo***, *cost**eranno***. Irregulares frequentes: **essere → sarò**, **avere → avrò**, **andare → andrò**, **potere → potrò**, **dovere → dovrò**, **volere → vorrò**.\n' +
      '- **Se + futuro → futuro**: *Se il lancio **andrà** bene, **assumeremo** altri quattro ingegneri.* (formal, típico de planos)\n' +
      '- **Se + presente → presente/futuro**: *Se **troviamo** i profili internamente, **risparmieremo**.* (mais falado)\n' +
      '- **a meno che (non) + congiuntivo** = a não ser que: *…a meno che non li **troviamo** in Lussemburgo.* O *non* aqui **não** nega nada; é só estilo.\n' +
      '- **altrimenti** = caso contrário.\n\n' +
      'Em italiano falado, o **presente** também indica futuro próximo: *Domani ti mando il piano.*',
    table: { head: ['Pessoa', 'assumere', 'essere', 'avere', 'andare'], rows: [
      ['io', 'assumerò', 'sarò', 'avrò', 'andrò'],
      ['tu', 'assumerai', 'sarai', 'avrai', 'andrai'],
      ['lui / lei / Lei', 'assumerà', 'sarà', 'avrà', 'andrà'],
      ['noi', 'assumeremo', 'saremo', 'avremo', 'andremo'],
      ['voi', 'assumerete', 'sarete', 'avrete', 'andrete'],
      ['loro', 'assumeranno', 'saranno', 'avranno', 'andranno']
    ] },
    examples: [
      { fr: 'L\'anno prossimo Nuvio lancerà una soluzione di pagamento.', pt: 'No ano que vem, a Nuvio vai lançar uma solução de pagamento.' },
      { fr: 'Se i ruoli non saranno coperti, il lancio slitterà.', pt: 'Se as vagas não forem preenchidas, o lançamento vai atrasar.' },
      { fr: 'Ti manderò un aggiornamento ogni mese.', pt: 'Vou te mandar uma atualização todo mês.' },
      { fr: 'Assumeremo all\'esterno, a meno che non troviamo i profili nei nostri team.', pt: 'Vamos contratar fora, a não ser que encontremos os perfis nas nossas equipes.' }
    ],
    ptComparison: 'Onde o português usa o **futuro do subjuntivo** ("se as vagas **forem** preenchidas", "quando o lançamento **acontecer**"), o italiano usa o **futuro do indicativo**: *se **saranno** coperte*, *quando il lancio **ci sarà***. O futuro do subjuntivo não existe em italiano.\n\n' +
      'E o nosso "vou fazer" (ir + infinitivo) **não** se traduz com *andare*: ~~vado a fare il piano~~ (= vou *até lá* fazer) → ***farò** il piano* ou ***faccio** il piano domani*.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ['Se il lancio andrà bene, assumeremo altre persone.', 'Se il lancio andrebbe bene, assumeremo altre persone.', 'Se il lancio vado bene, assumeremo altre persone.', 'Se il lancio andare bene, assumeremo altre persone.'], answer: 0,
      explanationPt: 'Condição real no futuro: se + futuro (andrà) → futuro (assumeremo).' },
    { type: 'fill_blank', prompt: 'Complete com o futuro.', bank: ['lancerà', 'saranno', 'avremo', 'potremo'], items: [
      { text: 'L\'anno prossimo l\'azienda ___ un nuovo prodotto.', answers: ['lancerà'] },
      { text: 'I costi ___ in linea con il budget.', answers: ['saranno'] },
      { text: 'Entro marzo ___ bisogno di due specialisti.', answers: ['avremo'] },
      { text: 'Senza autorizzazione non ___ lanciare il servizio.', answers: ['potremo'] }
    ] },
    { type: 'multiple_choice', prompt: '"Se as vagas forem preenchidas até março…" Como dizer em italiano?', options: ['Se i ruoli saranno coperti entro marzo…', 'Se i ruoli fossero coperti entro marzo…', 'Se i ruoli vanno a essere coperti entro marzo…', 'Se i ruoli coprire entro marzo…'], answer: 0,
      explanationPt: 'O futuro do subjuntivo português vira futuro do indicativo em italiano.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Se troviamo i profili internamente, risparmieremo sulla selezione.', translation: 'Se encontrarmos os perfis internamente, vamos economizar na seleção.' }
  ],
  tipForBrazilians: '**Fintech em italiano:**\n- *La banca* = o banco (instituição); *la panchina* = o banco de praça.\n- *Il conto* = a conta bancária **e** a conta do restaurante; *la bolletta* = a conta de luz/água.\n- *Il bonifico* = a transferência bancária; *l\'addebito* = o débito.\n- Na Itália, o supervisor de bancos e instituições de pagamento é a **Banca d\'Italia**; em Luxemburgo, a **CSSF**.\n\n**Falso amigo de orçamento:** *il bilancio* = o **balanço** contábil (às vezes o orçamento); para o orçamento do ano, muitas empresas dizem simplesmente **il budget**.'
});
