LUX.registerProLesson({
  id: 'pro-it-b1-l03', lang: 'it', level: 'B1', order: 3, sector: 'Tecnologia',
  title: 'Riorganizzare il team', titlePt: 'Reorganizando a equipe',
  names: ['Marina', 'Nuvio', 'Giulia', 'Ferri', 'Milano', 'Lussemburgo'],
  objectives: [
    'Explicar uma mudança organizacional: o que muda, por quê e quando.',
    'Usar a voz passiva com essere e venire e o "si passivante" (si creano, si riducono…).',
    'Responder às preocupações da equipe com clareza e empatia.'
  ],
  vocabulary: [
    { fr: 'la riorganizzazione', pt: 'a reorganização', ex: 'La riorganizzazione sarà completata a settembre.' },
    { fr: 'l\'organigramma', pt: 'o organograma', ex: 'Il nuovo organigramma verrà pubblicato lunedì.' },
    { fr: 'il livello gerarchico', pt: 'o nível hierárquico', ex: 'Eliminiamo un livello gerarchico.' },
    { fr: 'la squadra', pt: 'a equipe, o time', ex: 'Ogni squadra ha un obiettivo di prodotto.' },
    { fr: 'il ruolo', pt: 'o cargo, a função', ex: 'Nessun ruolo verrà eliminato.' },
    { fr: 'la responsabilità', pt: 'a responsabilidade', ex: 'Le responsabilità sono chiare per tutti.' },
    { fr: 'trasferire', pt: 'transferir', pos: 'v', ex: 'Tre persone vengono trasferite nel nuovo team.' },
    { fr: 'il cambiamento', pt: 'a mudança', ex: 'Il cambiamento può creare incertezza.' },
    { fr: 'la preoccupazione', pt: 'a preocupação', ex: 'Ascoltiamo le preoccupazioni di tutti.' },
    { fr: 'il carico di lavoro', pt: 'a carga de trabalho', ex: 'Il carico di lavoro è distribuito meglio.' },
    { fr: 'entrare in vigore', pt: 'entrar em vigor', pos: 'expr', ex: 'La nuova struttura entra in vigore il primo luglio.' },
    { fr: 'il punto di riferimento', pt: 'a referência, a pessoa de contato', ex: 'Marina è il punto di riferimento per le domande.' }
  ],
  reading: {
    genre: 'comunicado interno',
    title: 'Una nuova struttura per Prodotto e Tecnologia',
    text: "Care colleghe, cari colleghi,\n\n" +
      "negli ultimi due anni il nostro team è passato da 40 a 120 persone. È una bella notizia, ma la struttura che funzionava per 40 persone oggi ci rallenta: le decisioni passano da troppi livelli e molti progetti dipendono da tre o quattro squadre diverse.\n\n" +
      "Per questo, dal primo luglio, l'area Prodotto e Tecnologia verrà organizzata in otto squadre stabili, ognuna con un obiettivo di prodotto chiaro, per esempio i pagamenti o l'app mobile. Ogni squadra sarà guidata da un responsabile di prodotto e da un responsabile tecnico.\n\n" +
      "Che cosa cambia? Un livello gerarchico viene eliminato: i responsabili delle squadre riporteranno direttamente a Giulia Ferri, direttrice del prodotto. Si riducono le riunioni di coordinamento e si creano due ruoli nuovi per l'architettura e la qualità.\n\n" +
      "Che cosa non cambia? Nessun posto di lavoro verrà eliminato e gli stipendi non saranno modificati. Le persone che cambiano squadra sono state contattate personalmente questa settimana.\n\n" +
      "Sappiamo che ogni cambiamento crea domande. Il nuovo organigramma sarà pubblicato lunedì e martedì si terrà una sessione aperta a Milano e in collegamento dal Lussemburgo. Per qualsiasi dubbio, il punto di riferimento è Marina, la vostra HR Business Partner.\n\n" +
      "Giulia e Marina",
    exercises: [
      { type: 'multiple_choice', prompt: 'Perché l\'azienda cambia la struttura?', options: ['Perché la vecchia struttura oggi rallenta le decisioni.', 'Perché deve ridurre il personale.', 'Perché apre un nuovo ufficio.', 'Perché Giulia lascia l\'azienda.'], answer: 0,
        explanationPt: '"la struttura che funzionava per 40 persone oggi ci rallenta".' },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Alcuni posti di lavoro verranno eliminati.', answer: 'F', explanationPt: '"Nessun posto di lavoro verrà eliminato".' },
        { text: 'Viene eliminato un livello gerarchico.', answer: 'V', explanationPt: '"Un livello gerarchico viene eliminato".' },
        { text: 'Gli stipendi aumenteranno del 5%.', answer: 'NM', explanationPt: 'O texto só diz que os salários **não serão modificados**.' },
        { text: 'Le persone che cambiano squadra lo sanno già.', answer: 'V', explanationPt: '"sono state contattate personalmente questa settimana".' }
      ] },
      { type: 'multiple_choice', prompt: 'Quante squadre ci saranno dal primo luglio?', options: ['Otto.', 'Quattro.', 'Quaranta.', 'Due.'], answer: 0 },
      { type: 'order_events', prompt: 'Coloque os acontecimentos na ordem.', items: [
        'Il team passa da 40 a 120 persone.', 'Le persone che cambiano squadra vengono contattate.', 'Viene pubblicato il nuovo organigramma.', 'Entra in vigore la nuova struttura.'
      ] },
      { type: 'match', prompt: 'Ligue a expressão ao significado.', pairs: [
        ['rallentare', 'desacelerar, atrasar'], ['il posto di lavoro', 'o emprego, a vaga'], ['in collegamento', 'conectado à distância'], ['il dubbio', 'a dúvida'] ] }
    ]
  },
  listening: {
    genre: 'conversa com uma colaboradora',
    title: 'Una collega preoccupata',
    speakers: [{ id: 'M', name: 'Marina', gender: 'f' }, { id: 'G', name: 'Chiara', gender: 'f' }],
    script: [
      { speaker: 'G', text: 'Marina, hai un minuto? Ho letto la comunicazione e sono un po\' preoccupata.' },
      { speaker: 'M', text: 'Certo, siediti. Che cosa ti preoccupa di più?' },
      { speaker: 'G', text: 'Sono stata spostata nella squadra dei pagamenti, ma io non conosco quel prodotto.' },
      { speaker: 'M', text: 'Capisco. Sei stata scelta proprio perché conosci bene i nostri clienti. Il prodotto si impara.' },
      { speaker: 'G', text: 'E il mio responsabile? Lavoro con Andrea da tre anni.' },
      { speaker: 'M', text: 'Andrea resta il tuo punto di riferimento fino a settembre. Il passaggio viene fatto con calma.' },
      { speaker: 'G', text: 'Va bene. E se il carico di lavoro diventa troppo alto?' },
      { speaker: 'M', text: 'Ne parliamo ogni due settimane. Nel primo mese ti verrà assegnato un collega come guida.' },
      { speaker: 'G', text: 'Così mi sento meglio. Grazie per la sincerità.' },
      { speaker: 'M', text: 'Figurati. E martedì vieni alla sessione aperta: le tue domande sono utili anche agli altri.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'In quale squadra è stata spostata Chiara?', options: ['Nella squadra dei pagamenti.', 'Nella squadra dell\'app mobile.', 'Nel team della qualità.', 'Nelle risorse umane.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vero, falso o non menzionato?', statements: [
        { text: 'Chiara conosce già bene il prodotto dei pagamenti.', answer: 'F', explanationPt: '"io non conosco quel prodotto".' },
        { text: 'Andrea è il responsabile di Chiara da tre anni.', answer: 'V', explanationPt: '"Lavoro con Andrea da tre anni." (Andrea é nome masculino em italiano!)' },
        { text: 'Chiara riceverà un aumento di stipendio.', answer: 'NM', explanationPt: 'Ninguém fala de aumento.' },
        { text: 'Nel primo mese Chiara avrà un collega come guida.', answer: 'V', explanationPt: '"ti verrà assegnato un collega come guida".' }
      ] },
      { type: 'listen_choose', audio: 'Il passaggio viene fatto con calma.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Il passaggio viene fatto con calma.', 'Il passaggio verrà fatto con calma.', 'Il passaggio è fatto con calma.', 'Il messaggio viene fatto con calma.'], answer: 0 },
      { type: 'dictation', text: 'Sei stata scelta perché conosci bene i nostri clienti.' }
    ]
  },
  grammar: {
    topicId: 'it-passivo',
    title: 'A voz passiva: essere, venire e o "si passivante"',
    explanationPt: 'Em comunicados de mudança, o foco está no **que acontece**, não em quem faz. Por isso o italiano usa muito a **passiva**:\n\n' +
      '- **essere + particípio**: *Il nuovo organigramma **sarà pubblicato** lunedì.* — também indica um estado.\n' +
      '- **venire + particípio**: *Un livello **viene eliminato**.* — só nos tempos simples (presente, futuro, imperfetto) e destaca a **ação**, o processo.\n' +
      '- **si passivante**: *Si riducono le riunioni. Si crea un ruolo nuovo.* — sem dizer quem faz; o verbo concorda com a coisa (*si riduc**ono** le riunioni*).\n\n' +
      'O particípio **concorda** com o sujeito: *le persone sono stat**e** contattat**e***, *Chiara è stat**a** spostat**a***.\n\n' +
      'Para dizer quem fez, use **da**: *La decisione è stata presa **dalla** direzione.*',
    table: { head: ['Ativa', 'Passiva'], rows: [
      ['La direzione pubblica l\'organigramma.', 'L\'organigramma viene pubblicato (dalla direzione).'],
      ['Abbiamo contattato le persone.', 'Le persone sono state contattate.'],
      ['Elimineremo un livello.', 'Un livello verrà eliminato.'],
      ['Creiamo due ruoli nuovi.', 'Si creano due ruoli nuovi.']
    ] },
    examples: [
      { fr: 'Il nuovo organigramma verrà pubblicato lunedì.', pt: 'O novo organograma será publicado na segunda-feira.' },
      { fr: 'Le persone interessate sono state contattate personalmente.', pt: 'As pessoas envolvidas foram contatadas pessoalmente.' },
      { fr: 'Si riducono le riunioni di coordinamento.', pt: 'Reduzem-se as reuniões de coordenação.' },
      { fr: 'Nessun ruolo viene eliminato.', pt: 'Nenhum cargo é eliminado.' }
    ],
    ptComparison: 'O **si passivante** é o nosso "**vende-se** casa / **alugam-se** quartos" — e em italiano ele é muito mais usado no dia a dia: *Si cercano sviluppatori* = "Procuram-se desenvolvedores".\n\n' +
      'O **venire** passivo não existe em português: pense nele como "**é** publicado (agora, como ação)". Não use venire nos tempos compostos: ~~è venuto pubblicato~~ → **è stato pubblicato**.'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: 'Escolha a frase correta.', options: ['Le persone sono state contattate ieri.', 'Le persone sono stato contattato ieri.', 'Le persone sono venute contattate ieri.', 'Le persone hanno state contattate ieri.'], answer: 0,
      explanationPt: 'Tempo composto: essere (não venire) + particípio concordando com "le persone" (feminino plural).' },
    { type: 'fill_blank', prompt: 'Complete com a forma passiva.', bank: ['verrà pubblicato', 'sono state', 'Si riducono', 'viene eliminato'], items: [
      { text: 'L\'organigramma ___ lunedì.', answers: ['verrà pubblicato'] },
      { text: 'Le decisioni ___ prese dalla direzione.', answers: ['sono state'] },
      { text: '___ le riunioni inutili.', answers: ['Si riducono'] },
      { text: 'Un livello gerarchico ___ .', answers: ['viene eliminato'] }
    ] },
    { type: 'multiple_choice', prompt: 'Como se diz "Procuram-se gestores" num anúncio?', options: ['Si cercano manager.', 'Si cerca manager.', 'Sono cercato manager.', 'Vengono cercare manager.'], answer: 0,
      explanationPt: 'Si passivante: o verbo concorda com o plural (si cerc**ano**). "Manager" é invariável.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Nessun posto di lavoro verrà eliminato.', translation: 'Nenhum emprego será eliminado.' }
  ],
  tipForBrazilians: '**Comunicar mudanças à italiana:**\n- Diga **o que não muda** tão claramente quanto o que muda (*Che cosa non cambia?*). Na Itália, o medo de perder o emprego (*il posto*) é muito presente.\n- Fale antes com as pessoas afetadas, depois com todos.\n- **Figurati!** = "Imagina! / Não há de quê" — a resposta natural a um *grazie* entre colegas (com o Lei: *Si figuri!*).\n\n**Cuidado:** *la squadra* também é "o time de futebol". E *il ruolo* é cargo/função, enquanto "rolo" é **il rotolo**.'
});
