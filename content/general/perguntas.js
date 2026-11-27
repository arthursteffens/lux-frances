LUX.registerGeneral({
  id: 'perguntas', group: 'comunicacao', title: 'Perguntas essenciais', titleFr: 'Les questions essentielles', level: 'A1',
  keywords: ['pergunta', 'perguntar', 'onde', 'quando', 'como', 'quanto', 'por que', 'quem', 'qual', 'o que', 'où', 'quand', 'comment', 'combien', 'pourquoi', 'qui', 'quel', 'quoi', "qu'est-ce que"],
  blocks: [
    { type: 'intro', textPt: 'Há três jeitos de fazer uma pergunta:\n- **entonação** (informal: *Tu viens ?*)\n- ***est-ce que*** (neutro: *Est-ce que tu viens ?*)\n- **inversão** (formal: *Viens-tu ?*)\n\nOs pronomes interrogativos são os mesmos nos três.' },
    { type: 'table', sections: [
      { title: 'Palavras interrogativas', items: [
        { fr: 'où ?', pt: 'onde?' }, { fr: "d'où ?", pt: 'de onde?' }, { fr: 'quand ?', pt: 'quando?' }, { fr: 'comment ?', pt: 'como?' },
        { fr: 'combien ?', pt: 'quanto(s)?' }, { fr: 'pourquoi ?', pt: 'por quê?' }, { fr: 'qui ?', pt: 'quem?' },
        { fr: "qu'est-ce que ? / quoi ?", pt: 'o quê?' }, { fr: 'quel / quelle / quels / quelles ?', pt: 'qual? quais?' }, { fr: 'à quelle heure ?', pt: 'a que horas?' }
      ] },
      { title: 'Perguntas do dia a dia', items: [
        { fr: 'Tu t\'appelles comment ?', pt: 'Como você se chama?' }, { fr: "Tu viens d'où ?", pt: 'De onde você é?' }, { fr: 'Tu as quel âge ?', pt: 'Quantos anos você tem?' },
        { fr: 'Tu fais quoi dans la vie ?', pt: 'O que você faz da vida?' }, { fr: 'Où sont les toilettes ?', pt: 'Onde fica o banheiro?' }, { fr: "Qu'est-ce que c'est ?", pt: 'O que é isso?' },
        { fr: "Qu'est-ce qui se passe ?", pt: 'O que está acontecendo?' }, { fr: 'Ça coûte combien ?', pt: 'Quanto custa?' }, { fr: 'Pourquoi pas ?', pt: 'Por que não?' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Três registros', textPt: 'O mesmo pedido em três níveis: *Tu habites où ?* (fala informal) → *Où est-ce que tu habites ?* (neutro) → *Où habites-tu ?* (formal, escrito).',
        examples: [{ fr: 'Vous partez quand ?', pt: 'Vocês saem quando? (informal)' }, { fr: 'Quand est-ce que vous partez ?', pt: 'Quando vocês saem? (neutro)' }, { fr: 'Quand partez-vous ?', pt: 'Quando partem? (formal)' }] },
      { title: 'Quel concorda', textPt: '*Quel* concorda com o substantivo: *quel jour, quelle heure, quels films, quelles villes*. Todos soam iguais.',
        examples: [{ fr: 'Quelle est ton adresse ?', pt: 'Qual é o seu endereço?' }, { fr: 'Quels sont tes films préférés ?', pt: 'Quais são seus filmes preferidos?' }] },
      { title: 'Quoi no fim', textPt: '*Que* vai no início (*Que fais-tu ?*), *quoi* vai no fim ou depois de preposição (*Tu fais quoi ? De quoi tu parles ?*).',
        examples: [{ fr: 'Tu penses à quoi ?', pt: 'Você está pensando em quê?' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Pourquoi ? — Parce que je suis fatigué.', pt: 'Por quê? — Porque estou cansado.' }, { fr: "Qu'est-ce que tu veux dire ?", pt: 'O que você quer dizer?' },
      { fr: 'Comment ça s\'écrit ?', pt: 'Como se escreve?' }, { fr: 'Ça veut dire quoi ?', pt: 'O que isso significa?' }
    ] },
    { type: 'tip', textPt: '**"Por que" e "porque":** em francês são duas palavras bem diferentes: *pourquoi ?* (pergunta) e *parce que* (resposta). E "Por que não?" = *Pourquoi pas ?*' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Quantos anos você tem?"', options: ['Tu as quel âge ?', 'Tu es quel âge ?', 'Combien ans tu as ?', 'Quel âge tu es ?'], answer: 0 },
      { type: 'multiple_choice', prompt: '___ heure est-il ?', options: ['Quelle', 'Quel', 'Quoi', 'Combien'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Tu fais ___ ce soir ?', options: ['quoi', 'que', 'quel', 'qui'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/questions', label: 'Gramática: perguntas' }, { to: '#/gerais/tu-vous', label: 'Tu ou vous?' }] }
  ]
});
