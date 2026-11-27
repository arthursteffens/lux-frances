LUX.registerLesson({
  id: 'a1-u06-l04', level: 'A1', unit: 6, order: 4,
  title: 'Tu veux venir ?', titlePt: 'Você quer vir?',
  names: ['Lucas', 'Sofia', 'Léa', 'Lyon', 'Fourvière', 'Terreaux', 'Lumières'],
  introPt: 'Em dezembro, Lyon tem a festa mais famosa da cidade: a ***Fête des Lumières*** (Festa das Luzes). O Lucas quer convidar os amigos! Nesta lição: **convidar, aceitar e recusar**, com os verbos ***vouloir*** (querer) e ***pouvoir*** (poder).',
  objectives: [
    'Convidar alguém e propor um programa.',
    'Aceitar e recusar um convite com educação.',
    'Conjugar vouloir e pouvoir + infinitivo.'
  ],
  vocabulary: [
    { fr: 'vouloir', pt: 'querer', pos: 'v', say: 'vu-LUARR', ex: 'Tu veux venir ?' },
    { fr: 'pouvoir', pt: 'poder', pos: 'v', say: 'pu-VUARR', ex: 'Je ne peux pas ce soir.' },
    { fr: 'venir', pt: 'vir', pos: 'v', say: 've-NIRR', ex: 'Tu viens avec nous ?' },
    { fr: 'la fête', pt: 'a festa', g: 'f', say: 'la FÉT', ex: 'La Fête des Lumières est en décembre.' },
    { fr: 'la lumière', pt: 'a luz', g: 'f', say: 'la lü-MIÉRR', ex: 'Les lumières sont magnifiques.' },
    { fr: 'décembre', pt: 'dezembro', g: 'm', say: 'dê-SSÃBRR', ex: 'En décembre, il fait froid.' },
    { fr: 'ensemble', pt: 'juntos', pos: 'adv', say: 'ã-SSÃBL', ex: 'On y va ensemble ?' },
    { fr: "D'accord !", pt: 'Combinado! Tá bom!', pos: 'expr', say: 'da-KÓRR', ex: "D'accord, à samedi !" },
    { fr: 'Bonne idée !', pt: 'Boa ideia!', pos: 'expr', say: 'bó-ni-DÊ', ex: 'Le cinéma ? Bonne idée !' },
    { fr: 'désolé / désolée', pt: 'desculpa, sinto muito', pos: 'adj', say: 'dê-zô-LÊ', ex: 'Désolée, je ne peux pas.' },
    { fr: 'demain', pt: 'amanhã', pos: 'adv', say: 'de-MẼ', ex: 'Tu es libre demain ?' },
    { fr: 'ce soir', pt: 'hoje à noite', pos: 'expr', say: 'se SSUARR', ex: 'Ce soir, je suis libre.' }
  ],
  pronunciation: {
    title: 'Je veux, je peux: o som "ö"',
    textPt: '***Vouloir*** e ***pouvoir*** usam muito o som **eu** = "ö" (um "ê" com biquinho):\n\n' +
      '- ***je veux***, ***tu veux***, ***il veut*** = todos "VÖ"\n' +
      '- ***je peux***, ***tu peux***, ***il peut*** = todos "PÖ"\n' +
      '- ***ils veulent*** = "VÖL", ***ils peuvent*** = "PÖV" (agora a consoante soa)\n\n' +
      'Cuidado: ***deux*** "dö" também tem esse som. *Je veux deux croissants* = "jö VÖ dö krruá-SSÃ".',
    examples: [{ fr: 'Tu veux venir ?', pt: 'Você quer vir?' }, { fr: 'Je ne peux pas.', pt: 'Não posso.' }, { fr: 'Ils veulent sortir.', pt: 'Eles querem sair.' }, { fr: 'Elles peuvent venir.', pt: 'Elas podem vir.' }]
  },
  reading: {
    genre: 'texto informativo',
    title: 'La Fête des Lumières',
    text: "Chaque année, au début du mois de décembre, Lyon fait la fête pendant quatre jours : c'est la Fête des Lumières.\n\n" +
      "Le 8 décembre, les Lyonnais mettent des [[bougies|velas]] à leurs fenêtres. C'est une tradition très ancienne. Le soir, il y a des spectacles de lumière sur les monuments : la place des Terreaux, la colline de Fourvière, les églises…\n\n" +
      "Il y a beaucoup de visiteurs, alors prenez le métro et pas la voiture ! Et prenez un bon manteau : en décembre, il fait froid.\n\n" +
      "C'est gratuit et c'est magnifique !",
    translationPt: 'Todo ano, no começo de dezembro, Lyon faz festa durante quatro dias: é a Festa das Luzes.\n\n' +
      'No dia 8 de dezembro, os moradores de Lyon põem velas nas janelas. É uma tradição muito antiga. À noite, tem espetáculos de luz nos monumentos: a praça des Terreaux, a colina de Fourvière, as igrejas…\n\n' +
      'Vem muita gente, então peguem o metrô e não o carro! E levem um bom casaco: em dezembro faz frio.\n\n' +
      'É grátis e é lindo!',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quando é a Fête des Lumières?', options: ['No começo de dezembro.', 'No verão.', 'Em janeiro.', 'Todo fim de semana.'], answer: 0,
        explanationPt: '"au début du mois de décembre". *Le début* = o começo.' },
      { type: 'multiple_choice', prompt: 'O que os moradores fazem no dia 8 de dezembro?', options: ['Põem velas nas janelas.', 'Vão à praia.', 'Fazem um grande jantar.', 'Dançam na rua.'], answer: 0,
        explanationPt: '"les Lyonnais mettent des bougies à leurs fenêtres".' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'La fête dure quatre jours.', answer: 'V', explanationPt: '"pendant quatre jours".' },
        { text: 'La fête est chère.', answer: 'F', explanationPt: '"C\'est gratuit" = é grátis.' },
        { text: 'Il est conseillé de prendre la voiture.', answer: 'F', explanationPt: '"prenez le métro et pas la voiture !"' },
        { text: 'Il y a des concerts de rock.', answer: 'NM', explanationPt: 'O texto fala de espetáculos de luz, não de shows de rock.' }
      ] },
      { type: 'match', prompt: 'Ligue cada palavra à tradução.', pairs: [
        ['la lumière', 'a luz'], ['la bougie', 'a vela'], ['la fenêtre', 'a janela'], ['gratuit', 'grátis'], ['la tradition', 'a tradição']
      ] }
    ]
  },
  listening: {
    genre: 'telefonema',
    title: 'Um convite',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'S', name: 'Sofia', gender: 'f' }],
    script: [
      { speaker: 'U', text: 'Allô, Sofia ? Ça va ?', pt: 'Alô, Sofia? Tudo bem?' },
      { speaker: 'S', text: 'Salut, Lucas ! Oui, et toi ?', pt: 'Oi, Lucas! Tudo, e você?' },
      { speaker: 'U', text: 'Très bien. Tu veux venir à la Fête des Lumières avec Léa et moi ?', pt: 'Muito bem. Você quer ir à Festa das Luzes comigo e com a Léa?' },
      { speaker: 'S', text: "Oh, bonne idée ! C'est quand ?", pt: 'Ah, boa ideia! Quando é?' },
      { speaker: 'U', text: 'Vendredi soir, à huit heures, place des Terreaux.', pt: 'Sexta à noite, às oito, na praça des Terreaux.' },
      { speaker: 'S', text: "Vendredi… Désolée, je ne peux pas. Je travaille. Vous pouvez samedi ?", pt: 'Sexta… Desculpa, não posso. Eu trabalho. Vocês podem no sábado?' },
      { speaker: 'U', text: 'Samedi ? Oui, on peut ! Léa est libre aussi.', pt: 'Sábado? Sim, podemos! A Léa também está livre.' },
      { speaker: 'S', text: "Super ! Alors, samedi à huit heures. Je veux voir Fourvière !", pt: 'Ótimo! Então, sábado às oito. Quero ver Fourvière!' },
      { speaker: 'U', text: "D'accord ! À samedi !", pt: 'Combinado! Até sábado!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Por que a Sofia não pode na sexta?', options: ['Porque trabalha.', 'Porque está doente.', 'Porque vai viajar.', 'Porque não gosta da festa.'], answer: 0,
        explanationPt: '"Désolée, je ne peux pas. Je travaille."' },
      { type: 'multiple_choice', prompt: 'Quando eles vão à festa, no final?', options: ['Sábado às 20h.', 'Sexta às 20h.', 'Sábado às 18h.', 'Domingo à noite.'], answer: 0,
        explanationPt: '"Alors, samedi à huit heures."' },
      { type: 'multiple_choice', prompt: 'Onde é o encontro?', options: ['Na praça des Terreaux.', 'Em Fourvière.', 'No apartamento.', 'Na estação.'], answer: 0,
        explanationPt: '"place des Terreaux".' },
      { type: 'listen_choose', audio: 'Désolée, je ne peux pas.', prompt: 'Ouça e escolha a resposta da Sofia.',
        options: ['Désolée, je ne peux pas.', 'Désolée, je ne veux pas.', "D'accord, je peux.", 'Oui, je veux bien.'], answer: 0,
        explanationPt: '*Je ne peux pas* = não posso. (*Je ne veux pas* = não quero, que soaria grosseiro!)' },
      { type: 'dictation', text: 'Tu veux venir avec nous ?', explanationPt: '*Vouloir* + infinitivo: *tu veux venir*.' }
    ]
  },
  grammar: {
    topicId: 'present-irregular',
    title: 'Vouloir e pouvoir + infinitivo',
    explanationPt: '***Vouloir*** (querer) e ***pouvoir*** (poder) são irregulares e vêm seguidos de um **verbo no infinitivo**:\n\n' +
      '- ***Tu veux venir ?*** = você quer vir?\n' +
      '- ***Je peux venir samedi.*** = posso ir no sábado.\n' +
      '- ***Je ne peux pas.*** = não posso.\n\n' +
      '**Para convidar:**\n' +
      '- ***Tu veux*** + verbo ? *Tu veux aller au cinéma ?*\n' +
      '- ***On va*** + lugar ? *On va au cinéma ?*\n\n' +
      '**Para aceitar:** ***Avec plaisir !***, ***D\'accord !***, ***Bonne idée !***, ***Je veux bien !***\n\n' +
      '**Para recusar:** ***Désolé(e), je ne peux pas.*** + o motivo: *Je travaille.* Nunca responda só *je ne veux pas* (não quero): soa grosseiro.',
    table: { head: ['', 'vouloir', 'pouvoir'], rows: [
      ['je', 'veux', 'peux'], ['tu', 'veux', 'peux'], ['il / elle / on', 'veut', 'peut'],
      ['nous', 'voulons', 'pouvons'], ['vous', 'voulez', 'pouvez'], ['ils / elles', 'veulent', 'peuvent']
    ] },
    examples: [
      { fr: 'Tu veux venir avec nous ?', pt: 'Você quer vir com a gente?' },
      { fr: 'Désolée, je ne peux pas. Je travaille.', pt: 'Desculpa, não posso. Eu trabalho.' },
      { fr: 'Vous pouvez samedi ?', pt: 'Vocês podem no sábado?' },
      { fr: 'Avec plaisir !', pt: 'Com prazer!' }
    ],
    ptComparison: 'Igual ao português: "quer **vir**?", "posso **ir**" → verbo + infinitivo, sem preposição.\n\n' +
      'Uma diferença de educação: num pedido, ***je veux*** (eu quero) soa forte demais. Para pedir, use ***je voudrais*** (eu queria). Para convidar, *tu veux…?* é perfeito.\n\n' +
      '***Venir*** (vir) também é irregular: *je viens, tu viens, il vient, nous venons, vous venez, ils viennent*. E em francês "ir com alguém" muitas vezes é ***venir***: *Tu viens avec nous ?* (você vem / vai com a gente?).'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Complete com vouloir ou pouvoir.', items: [
      { text: 'Tu ___ venir samedi ? (vouloir)', answers: ['veux'] },
      { text: 'Désolé, je ne ___ pas. (pouvoir)', answers: ['peux'] },
      { text: 'Nous ___ aller au cinéma. (vouloir)', answers: ['voulons'] },
      { text: 'Vous ___ venir demain ? (pouvoir)', answers: ['pouvez'] },
      { text: 'Ils ___ voir les lumières. (vouloir)', answers: ['veulent'] }
    ] },
    { type: 'multiple_choice', prompt: 'Uma amiga te convida, mas você trabalha. O que dizer?', options: ['Désolé, je ne peux pas. Je travaille.', 'Non, je ne veux pas.', 'Non.', 'Je ne veux pas, je travaille.'], answer: 0,
      explanationPt: 'Recusa educada = ***désolé(e)*** + ***je ne peux pas*** + motivo.' },
    { type: 'match', prompt: 'Ligue a resposta ao sentido.', pairs: [
      ['Avec plaisir !', 'aceitar'], ['Désolée, je ne peux pas.', 'recusar'], ['Bonne idée !', 'aprovar a ideia'], ["C'est quand ?", 'pedir informação']
    ] },
    { type: 'multiple_choice', prompt: '"Você quer ir ao cinema?"', options: ['Tu veux aller au cinéma ?', 'Tu veux de aller au cinéma ?', 'Tu veux allez au cinéma ?', 'Tu voulez aller au cinéma ?'], answer: 0,
      explanationPt: '*Tu veux* + infinitivo (*aller*), sem preposição.' },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Tu veux venir avec nous samedi ?', translation: 'Você quer vir com a gente no sábado?' }
  ],
  tipForBrazilians: '**Ao telefone**, os franceses atendem com ***Allô ?*** (alô?). Para se identificar: ***C\'est Lucas.*** (é o Lucas).\n\n' +
    'Para marcar um programa, sempre confirme três coisas:\n- ***quand ?*** (quando?)\n- ***à quelle heure ?*** (a que horas?)\n- ***où ?*** (onde?)\n\nE para se despedir: ***À samedi !***, ***À demain !***, ***À plus !*** (até mais, informal).'
});
