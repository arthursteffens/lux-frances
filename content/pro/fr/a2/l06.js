LUX.registerProLesson({
  id: 'pro-fr-a2-l06', lang: 'fr', level: 'A2', order: 6, sector: 'Fintech',
  title: 'Le plan de recrutement pour l\'année prochaine', titlePt: 'O plano de contratações para o próximo ano',
  names: ['Marina', 'Nuvio', 'Nadia', 'Thomas', 'CSSF', 'Luxembourg'],
  objectives: [
    'Apresentar um plano para o próximo ano com o futuro simples e o futuro próximo.',
    'Usar os pronomes le, la, les, lui, leur para não repetir pessoas e documentos.',
    'Conhecer o vocabulário básico de uma atividade de pagamentos (fintech) regulada.'
  ],
  vocabulary: [
    { fr: 'le plan de recrutement', pt: 'o plano de contratações', g: 'm', ex: 'Je présente le plan de recrutement jeudi.' },
    { fr: 'le comité de direction', pt: 'o comitê de diretoria (CODIR)', g: 'm', ex: 'Le comité de direction se réunit le lundi.' },
    { fr: 'le paiement', pt: 'o pagamento', g: 'm', ex: 'Nous lançons une solution de paiement.' },
    { fr: 'la conformité', pt: 'o compliance, a conformidade', g: 'f', ex: "L'équipe conformité vérifie les règles." },
    { fr: 'la réglementation', pt: 'a regulação, a regulamentação', g: 'f', ex: 'La réglementation est stricte dans la finance.' },
    { fr: 'le budget', pt: 'o orçamento', g: 'm', ex: 'Le budget est validé.' },
    { fr: 'lancer', pt: 'lançar', pos: 'v', ex: 'Nous lancerons le produit en juin.' },
    { fr: 'prévoir', pt: 'prever, planejar', pos: 'v', ex: 'Nous prévoyons quinze embauches.' },
    { fr: 'embaucher', pt: 'contratar', pos: 'v', ex: 'Nous embaucherons trois juristes.' },
    { fr: 'le / la juriste', pt: 'o(a) advogado(a) de empresa, jurista', ex: 'La juriste connaît bien la réglementation.' },
    { fr: "l'année prochaine", pt: 'o ano que vem', pos: 'expr', ex: "L'année prochaine, l'équipe sera plus grande." },
    { fr: 'le trimestre', pt: 'o trimestre', g: 'm', ex: 'Au premier trimestre, nous recruterons les managers.' }
  ],
  reading: {
    genre: 'e-mail para a diretoria',
    title: 'Objet : Plan de recrutement — équipe Paiements',
    text: "Bonjour à tous,\n\n" +
      "Comme vous le savez, Nuvio lancera l'année prochaine sa première solution de paiement pour ses clients. Voici le plan de recrutement que je vous propose.\n\n" +
      "Nous créerons une nouvelle équipe Paiements de quinze personnes. Au premier trimestre, nous embaucherons deux managers et une responsable de la conformité. C'est la priorité : le secteur financier est très réglementé et, au Luxembourg, la [[CSSF|Comissão de Supervisão do Setor Financeiro, o regulador]] contrôlera nos activités. Au deuxième trimestre, nous recruterons huit développeurs et deux juristes. Les deux derniers postes arriveront en septembre.\n\n" +
      "Pour les développeurs, nous chercherons d'abord en interne : cinq personnes de l'Ingénierie sont intéressées. Ce sera aussi une belle [[opportunité|oportunidade]] de carrière pour elles.\n\n" +
      "Le budget total sera de un virgule deux million d'euros. Je vous enverrai le détail des coûts vendredi.\n\n" +
      "Je présenterai ce plan au comité de direction lundi prochain. N'hésitez pas à me faire vos commentaires avant.\n\n" +
      "Bien cordialement,\nMarina",
    exercises: [
      { type: 'multiple_choice', prompt: 'Combien de personnes aura la nouvelle équipe ?', options: ['Quinze.', 'Huit.', 'Cinq.', 'Douze.'], answer: 0,
        explanationPt: '"Nous créerons une nouvelle équipe Paiements de quinze personnes."' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Les managers arriveront au premier trimestre.', answer: 'V', explanationPt: '"Au premier trimestre, nous embaucherons deux managers".' },
        { text: 'Tous les développeurs viendront d\'autres entreprises.', answer: 'F', explanationPt: 'Primeiro vão procurar internamente: cinco pessoas da Engenharia têm interesse.' },
        { text: 'La CSSF contrôlera les activités de paiement.', answer: 'V', explanationPt: '"la CSSF contrôlera nos activités".' },
        { text: 'Le comité de direction a déjà accepté le plan.', answer: 'NM', explanationPt: 'Marina ainda vai apresentar o plano na segunda.' }
      ] },
      { type: 'multiple_choice', prompt: 'Pourquoi la responsable de la conformité est une priorité ?', options: ['Parce que le secteur financier est très réglementé.', 'Parce que le budget est petit.', 'Parce que les développeurs partent.', 'Parce que Marina part en vacances.'], answer: 0,
        explanationPt: '"le secteur financier est très réglementé".' },
      { type: 'fill_blank', prompt: 'Complete com o futuro simples do texto.', bank: ['lancera', 'créerons', 'chercherons', 'présenterai'], items: [
        { text: "Nuvio ___ sa première solution de paiement.", answers: ['lancera'] },
        { text: 'Nous ___ une nouvelle équipe Paiements.', answers: ['créerons'] },
        { text: "Nous ___ d'abord en interne.", answers: ['chercherons'] },
        { text: 'Je ___ ce plan au comité de direction.', answers: ['présenterai'] }
      ] }
    ]
  },
  listening: {
    genre: 'reunião',
    title: 'Marina prepara a apresentação com a diretora de RH',
    speakers: [{ id: 'N', name: 'Nadia', gender: 'f' }, { id: 'M', name: 'Marina', gender: 'f' }],
    script: [
      { speaker: 'N', text: 'Marina, ton plan est très clair. Tu vas le présenter lundi ?' },
      { speaker: 'M', text: 'Oui, je vais le présenter au comité de direction à dix heures.' },
      { speaker: 'N', text: 'Thomas va poser des questions sur le budget. Tu as les chiffres ?' },
      { speaker: 'M', text: 'Oui, je les ai. Je lui enverrai le détail demain.' },
      { speaker: 'N', text: 'Bien. Et les cinq développeurs intéressés, tu leur as parlé ?' },
      { speaker: 'M', text: 'Pas encore. Je leur parlerai après la décision du comité.' },
      { speaker: 'N', text: 'Bonne idée. Et pour la responsable de la conformité, ce sera difficile.' },
      { speaker: 'M', text: 'Je sais. Il y a peu de candidats au Luxembourg. On cherchera aussi en Belgique et en France.' },
      { speaker: 'N', text: 'Parfait. Je serai avec toi lundi. Tu vas voir, ça va bien se passer.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quand Marina présentera le plan ?', options: ['Lundi à dix heures.', 'Demain à dix heures.', 'Vendredi à deux heures.', 'Lundi à deux heures.'], answer: 0,
        explanationPt: '"je vais le présenter au comité de direction à dix heures" (segunda).' },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Marina enverra le détail du budget à Thomas demain.', answer: 'V', explanationPt: '"Je lui enverrai le détail demain."' },
        { text: 'Marina a déjà parlé aux cinq développeurs.', answer: 'F', explanationPt: '"Pas encore."' },
        { text: 'Pour la conformité, on cherchera aussi en Belgique et en France.', answer: 'V', explanationPt: '"On cherchera aussi en Belgique et en France."' },
        { text: 'Nadia ne viendra pas au comité.', answer: 'F', explanationPt: '"Je serai avec toi lundi."' }
      ] },
      { type: 'listen_choose', audio: 'Je lui enverrai le détail demain.', prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ['Je lui enverrai le détail demain.', 'Je leur enverrai le détail demain.', 'Je lui envoie le détail demain.', 'Je vais lui envoyer le détail demain.'], answer: 0 },
      { type: 'dictation', text: 'Je leur parlerai après la décision du comité.' }
    ]
  },
  grammar: {
    topicId: 'futur-simple',
    title: 'Futuro para planos e pronomes para não repetir',
    explanationPt: 'Num **plano**, use o ***futur simple*** para compromissos (*nous recruterons, ce sera*) e o ***futur proche*** para o que já está combinado e próximo (*je vais le présenter lundi*).\n\n' +
      '- ***Futur simple*** = infinitivo + **-ai, -as, -a, -ons, -ez, -ont**: *lancer → je lancer**ai***. Irregulares úteis: **être → ser-**, **avoir → aur-**, **faire → fer-**, **aller → ir-**, **venir → viendr-**, **envoyer → enverr-**.\n' +
      '- **Pronomes**: *le, la, les* substituem a coisa/pessoa (*le plan → je **le** présente*); *lui, leur* substituem **à + pessoa** (*à Thomas → je **lui** enverrai*; *aux développeurs → je **leur** parlerai*). Eles vêm **antes** do verbo conjugado — ou antes do infinitivo no *futur proche*: *je vais **le** présenter*.',
    table: { head: ['', 'être', 'avoir', 'envoyer', 'recruter'], rows: [
      ["je / j'", 'serai', 'aurai', 'enverrai', 'recruterai'], ['tu', 'seras', 'auras', 'enverras', 'recruteras'], ['il / elle / on', 'sera', 'aura', 'enverra', 'recrutera'],
      ['nous', 'serons', 'aurons', 'enverrons', 'recruterons'], ['vous', 'serez', 'aurez', 'enverrez', 'recruterez'], ['ils / elles', 'seront', 'auront', 'enverront', 'recruteront']
    ] },
    examples: [
      { fr: "L'année prochaine, nous embaucherons quinze personnes.", pt: 'No ano que vem, vamos contratar quinze pessoas.' },
      { fr: 'Le plan ? Je vais le présenter lundi.', pt: 'O plano? Vou apresentá-lo na segunda.' },
      { fr: 'Thomas veut les chiffres : je lui enverrai le détail demain.', pt: 'O Thomas quer os números: mando o detalhe para ele amanhã.' },
      { fr: 'Les développeurs ? Je leur parlerai après le comité.', pt: 'Os desenvolvedores? Falo com eles depois do comitê.' }
    ],
    ptComparison: 'No Brasil, quase sempre usamos "vou + infinitivo" para o futuro. Em francês falado também (*je vais présenter*), mas **em planos escritos e e-mails formais**, o *futur simple* soa mais firme e profissional: *nous recruterons, le budget sera*.\n\n' +
      '***Lui/leur*** não têm gênero: *je **lui** parle* = falo com ele **ou** com ela. E não confunda *leur* pronome (*je **leur** parle*) com *leur* possessivo (***leur** équipe*).'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Conjugue no futur simple.', items: [
      { text: 'Nous ___ deux managers en janvier. (embaucher)', answers: ['embaucherons'] },
      { text: 'Le budget ___ de un million d\'euros. (être)', answers: ['sera'] },
      { text: "Je vous ___ le détail vendredi. (envoyer)", answers: ['enverrai'] },
      { text: 'Les nouveaux ___ un parrain. (avoir)', answers: ['auront'] },
      { text: 'Tu ___ le plan au comité ? (présenter)', answers: ['présenteras'] }
    ] },
    { type: 'multiple_choice', prompt: '— Tu as parlé à Thomas ? — Pas encore, je ___ parlerai demain.', options: ['lui', 'le', 'leur', 'la'], answer: 0,
      explanationPt: 'Parler à quelqu\'un → lui (uma pessoa).' },
    { type: 'multiple_choice', prompt: '— Et le plan ? — Je vais ___ présenter lundi.', options: ['le', 'lui', 'en', 'leur'], answer: 0,
      explanationPt: 'Présenter quelque chose → le (o plano).' },
    { type: 'match', prompt: 'Ligue o termo da fintech à tradução.', pairs: [
      ['le paiement', 'o pagamento'], ['la conformité', 'o compliance'], ['la réglementation', 'a regulação'], ['le juriste', 'o advogado de empresa'] ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je présenterai ce plan au comité de direction.', translation: 'Vou apresentar este plano ao comitê de diretoria.' }
  ],
  tipForBrazilians: '**Fintech em Luxemburgo:** o país é um grande centro financeiro europeu, e muitas fintechs e empresas de pagamento têm sede ali. O setor é supervisionado pela **CSSF** (*Commission de surveillance du secteur financier*). Para o RH, isso significa: funções de *conformité* difíceis de preencher, verificações de antecedentes e cargos com responsabilidades regulatórias.\n\n' +
    '**E-mail de proposta:** comece pelo contexto (*Comme vous le savez…*), dê a proposta com números, diga o próximo passo (*Je présenterai… lundi*) e convide comentários (*N\'hésitez pas à me faire vos commentaires*).'
});
