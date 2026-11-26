LUX.registerProLesson({
  id: 'pro-it-b1-l05', lang: 'it', level: 'B1', order: 5, sector: 'Tecnologia',
  title: 'Fare coaching ai manager e saper dire di no', titlePt: 'Coaching de gestores e saber dizer não',
  names: ['Marina', 'Nuvio', 'Marco', 'Bianchi', 'Elena'],
  objectives: [
    'Apoiar um gestor com perguntas abertas, sem dar a resposta pronta.',
    'Discordar com educação e apresentar alternativas com dados.',
    'Usar o congiuntivo presente depois de penso che, credo che, è importante che, preferirei che.'
  ],
  vocabulary: [
    { fr: 'il riscontro / il feedback', pt: 'o feedback', ex: 'Le ha dato un riscontro chiaro sul progetto.' },
    { fr: 'la promozione', pt: 'a promoção', ex: 'Vuole proporre una promozione per Elena.' },
    { fr: 'la valutazione delle prestazioni', pt: 'a avaliação de desempenho', ex: 'La valutazione delle prestazioni si fa a dicembre.' },
    { fr: 'il criterio', pt: 'o critério', ex: 'I criteri devono essere uguali per tutti.' },
    { fr: 'equo', pt: 'justo, equitativo', ex: 'Vogliamo un processo equo e trasparente.' },
    { fr: 'il rischio', pt: 'o risco', ex: 'Vedo un rischio per il resto del team.' },
    { fr: 'la fascia retributiva', pt: 'a faixa salarial', ex: 'Lo stipendio è fuori dalla fascia retributiva.' },
    { fr: 'proporre', pt: 'propor', pos: 'v', ex: 'Posso proporre un\'alternativa?' },
    { fr: 'capisco il punto, però…', pt: 'entendo seu ponto, porém…', pos: 'expr', ex: 'Capisco il punto, però i numeri dicono altro.' },
    { fr: 'il compromesso', pt: 'o meio-termo, o acordo', ex: 'Abbiamo trovato un compromesso.' },
    { fr: 'mettersi nei panni di', pt: 'colocar-se no lugar de', pos: 'expr', ex: 'Prova a metterti nei panni degli altri.' },
    { fr: 'fidarsi di', pt: 'confiar em', pos: 'v', ex: 'Mi fido del tuo giudizio.' }
  ],
  reading: {
    genre: 'artigo do blog interno de RH',
    title: 'Dire di no senza chiudere la porta',
    text: "Un buon HR Business Partner non è la persona che dice sempre di sì ai manager. È la persona di cui i manager si fidano anche quando dice di no.\n\n" +
      "Quando un responsabile chiede qualcosa che non ci convince, per esempio una promozione fuori dal processo o un aumento molto sopra la fascia retributiva, la prima reazione non deve essere un rifiuto. Prima conviene capire il bisogno reale: «Che cosa vuoi ottenere?», «Che cosa succede se non lo facciamo?». Spesso dietro la richiesta c'è una paura concreta, come quella di perdere una persona importante.\n\n" +
      "Poi si spiega il rischio con calma e con i dati. Non basta dire «non si può»: è importante che il manager capisca perché. Una frase come «Capisco il punto, però temo che gli altri lo vivano come un'ingiustizia» funziona meglio di un semplice «No».\n\n" +
      "Infine, si propone un'alternativa. Se la promozione deve aspettare il ciclo di valutazione di dicembre, forse si può dare subito un progetto di maggiore responsabilità, oppure fissare insieme gli obiettivi da raggiungere.\n\n" +
      "Il coaching segue la stessa logica: meno risposte, più domande. Invece di dire al manager che cosa fare, chiedigli «Tu che cosa faresti?», «Quali opzioni vedi?». È più lento, ma le soluzioni trovate da lui stesso durano di più.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Secondo il testo, chi è un buon HR Business Partner?', options: ['Una persona di cui i manager si fidano anche quando dice di no.', 'Una persona che dice sempre di sì.', 'Una persona che decide al posto dei manager.', 'Una persona che non parla mai di numeri.'], answer: 0 },
      { type: 'order_events', prompt: 'Coloque os passos para dizer não na ordem do texto.', items: [
        'Capire il bisogno reale.', 'Spiegare il rischio con i dati.', 'Proporre un\'alternativa.'
      ] },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'La prima reazione deve essere un rifiuto.', answer: 'F', explanationPt: '"la prima reazione non deve essere un rifiuto".' },
        { text: 'Dietro una richiesta c\'è spesso una paura concreta.', answer: 'V', explanationPt: '"Spesso dietro la richiesta c\'è una paura concreta".' },
        { text: 'Il ciclo di valutazione è a dicembre.', answer: 'V', explanationPt: '"il ciclo di valutazione di dicembre".' },
        { text: 'I manager ricevono un corso di coaching ogni anno.', answer: 'NM', explanationPt: 'O texto não fala de cursos.' }
      ] },
      { type: 'multiple_choice', prompt: 'Perché nel coaching si fanno più domande?', options: ['Perché le soluzioni trovate dal manager durano di più.', 'Perché è più veloce.', 'Perché l\'HR non conosce le risposte.', 'Perché i manager non amano parlare.'], answer: 0 },
      { type: 'match', prompt: 'Ligue a expressão ao significado.', pairs: [
        ['non ci convince', 'não nos convence'], ['il bisogno', 'a necessidade'], ['il rifiuto', 'a recusa'], ['invece di', 'em vez de'] ] }
    ]
  },
  listening: {
    genre: 'conversa difícil com um diretor',
    title: 'Una promozione fuori dal processo',
    speakers: [{ id: 'B', name: 'Marco', gender: 'm' }, { id: 'M', name: 'Marina', gender: 'f' }],
    script: [
      { speaker: 'B', text: 'Marina, voglio promuovere Elena a responsabile tecnico. Subito, non a dicembre.' },
      { speaker: 'M', text: 'Elena è bravissima, sono d\'accordo. Che cosa ti preoccupa se aspettiamo dicembre?' },
      { speaker: 'B', text: 'Ha ricevuto un\'offerta da un\'altra azienda. Se non facciamo qualcosa, se ne va.' },
      { speaker: 'M', text: 'Capisco il punto. Però, se la promuoviamo fuori dal processo, temo che altre tre persone si sentano escluse.' },
      { speaker: 'B', text: 'E allora che cosa propongo a Elena? Non posso perderla.' },
      { speaker: 'M', text: 'Penso che sia meglio parlarle oggi: le diamo la guida del nuovo progetto e fissiamo per iscritto gli obiettivi per la promozione.' },
      { speaker: 'B', text: 'E sullo stipendio? L\'offerta è più alta del quindici per cento.' },
      { speaker: 'M', text: 'Possiamo anticipare la revisione dello stipendio entro la sua fascia. Preferirei che lo decidessimo con i dati di mercato.' },
      { speaker: 'B', text: 'Va bene, mi sembra un buon compromesso. Mi aiuti a preparare la conversazione?' },
      { speaker: 'M', text: 'Certo. Prima però dimmi: secondo te, che cosa conta di più per lei?' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Perché Marco vuole promuovere Elena subito?', options: ['Ha ricevuto un\'offerta da un\'altra azienda.', 'Lei ha chiesto un aumento.', 'Il team è troppo grande.', 'Lei vuole trasferirsi in Lussemburgo.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Marina pensa che Elena non sia brava.', answer: 'F', explanationPt: '"Elena è bravissima, sono d\'accordo."' },
        { text: 'L\'offerta esterna è più alta del 15%.', answer: 'V', explanationPt: '"L\'offerta è più alta del quindici per cento."' },
        { text: 'Elena accetterà la proposta.', answer: 'NM', explanationPt: 'A conversa com a Elena ainda não aconteceu.' },
        { text: 'Alla fine Marco accetta il compromesso.', answer: 'V', explanationPt: '"mi sembra un buon compromesso".' }
      ] },
      { type: 'listen_choose', audio: 'Temo che altre tre persone si sentano escluse.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Temo che altre tre persone si sentano escluse.', 'Temo che altre tre persone si sentono escluse.', 'Penso che altre tre persone si sentano escluse.', 'Temo che altre tre persone se ne vadano.'], answer: 0 },
      { type: 'dictation', text: 'Mi sembra un buon compromesso.' }
    ]
  },
  grammar: {
    topicId: 'it-congiuntivo-opinione',
    title: 'Congiuntivo presente: opinião, desejo e receio',
    explanationPt: 'Para dar opinião sem impor, o italiano usa o **congiuntivo** (o nosso subjuntivo) depois de:\n\n' +
      '- **opinião**: *penso che, credo che, mi sembra che* — *Penso che **sia** meglio parlarle oggi.*\n' +
      '- **receio / dúvida**: *temo che, non sono sicura che* — *Temo che si **sentano** escluse.*\n' +
      '- **necessidade / vontade**: *è importante che, bisogna che, voglio che, preferirei che* — *È importante che il manager **capisca**.*\n\n' +
      'Formação (regulares): **-are → -i**, **-ere/-ire → -a**: *parli, capisca, decida*; plural *loro*: *parlino, capiscano*. Irregulares que você mais vai usar: **essere → sia / siano**, **avere → abbia / abbiano**, **fare → faccia**, **andare → vada**, **potere → possa**.\n\n' +
      'Depois de **preferirei che** (condicional), usa-se o congiuntivo **imperfetto**: *Preferirei che lo **decidessimo** con i dati.*',
    table: { head: ['Pessoa', 'essere', 'avere', 'parlare', 'capire'], rows: [
      ['io / tu / lui, lei', 'sia', 'abbia', 'parli', 'capisca'],
      ['noi', 'siamo', 'abbiamo', 'parliamo', 'capiamo'],
      ['voi', 'siate', 'abbiate', 'parliate', 'capiate'],
      ['loro', 'siano', 'abbiano', 'parlino', 'capiscano']
    ] },
    examples: [
      { fr: 'Penso che sia meglio aspettare dicembre.', pt: 'Acho que é melhor esperar dezembro.' },
      { fr: 'È importante che i criteri siano uguali per tutti.', pt: 'É importante que os critérios sejam iguais para todos.' },
      { fr: 'Temo che il team lo viva come un\'ingiustizia.', pt: 'Receio que a equipe veja isso como uma injustiça.' },
      { fr: 'Non sono sicura che sia la soluzione giusta.', pt: 'Não tenho certeza de que seja a solução certa.' }
    ],
    ptComparison: 'Aqui o italiano é **mais exigente** que o português. Nós dizemos "acho que **é** melhor" (indicativo); o italiano formal pede ***penso che sia** meglio*. Na fala informal muitos italianos usam o indicativo, mas numa empresa e por escrito o congiuntivo soa mais profissional.\n\n' +
      'Atenção: as três pessoas do singular são **iguais** (*che io/tu/lei sia*), por isso às vezes se usa o pronome para esclarecer: *Penso che **tu** abbia ragione.*'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Escolha a frase mais adequada numa reunião.', options: ['Penso che sia meglio aspettare i dati.', 'Penso che è meglio aspettare i dati.', 'Penso che essere meglio aspettare i dati.', 'Penso sia che meglio aspettare i dati.'], answer: 0,
      explanationPt: '"Penso che" + congiuntivo: sia.' },
    { type: 'fill_blank', prompt: 'Complete com o congiuntivo.', bank: ['sia', 'abbia', 'capiscano', 'possa'], items: [
      { text: 'Credo che Elena ___ pronta per la promozione.', answers: ['sia'] },
      { text: 'Mi sembra che Marco ___ ragione.', answers: ['abbia'] },
      { text: 'È importante che i manager ___ i criteri.', answers: ['capiscano'] },
      { text: 'Non sono sicura che l\'azienda ___ pagare di più.', answers: ['possa'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual é a forma mais diplomática de discordar?', options: ['Capisco il punto, però temo che ci siano dei rischi.', 'No, è sbagliato.', 'Non si può e basta.', 'Fai come vuoi.'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'È importante che i criteri siano uguali per tutti.', translation: 'É importante que os critérios sejam iguais para todos.' }
  ],
  tipForBrazilians: '**Discordar à italiana:**\n- Comece reconhecendo: *Hai ragione su un punto…*, *Capisco il punto…* — e só então *però…*.\n- *Purtroppo* (infelizmente) suaviza qualquer "não": *Purtroppo non è possibile entro venerdì.*\n- Evite *Non si può e basta* (e ponto final): soa autoritário.\n\n**Falsos amigos:** *pretendere* = **exigir** (não "pretender" → **avere intenzione di**); *la promozione* também é a **promoção de vendas**; *bravo/brava* = **competente, bom** (não "zangado" → **arrabbiato**).'
});
