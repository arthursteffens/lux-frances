LUX.registerLesson({
  id: 'a2-u06-l03', level: 'A2', unit: 6, order: 3,
  title: 'Je la prends !', titlePt: 'Vou levar!',
  names: ['Léa', 'Lucas', 'Hugo', 'Inès', 'Camille', 'Mme', 'Bernard', 'Fête', 'Coloc', 'Croix-Rousse', 'Brésil'],
  objectives: [
    'Organizar tarefas sem repetir as coisas ("Le gâteau ? Je le fais.").',
    'Usar os pronomes de objeto direto: me, te, le, la, l\', nous, vous, les.',
    'Comprar uma roupa: pedir um tamanho, experimentar, decidir.'
  ],
  vocabulary: [
    { fr: 'le / la / les', pt: 'o / a / os, as (pronomes)', pos: 'pron', ex: 'Le gâteau ? Je le fais.' },
    { fr: 'chercher', pt: 'buscar; procurar', pos: 'v', ex: 'Je vais te chercher à la gare.' },
    { fr: 'les courses', pt: 'as compras (de mercado)', g: 'f', ex: 'Qui fait les courses ?' },
    { fr: 'les verres', pt: 'os copos', g: 'm', ex: 'On a assez de verres ?' },
    { fr: 'la guirlande', pt: 'o varal de luzes, a guirlanda', g: 'f', ex: 'Hugo accroche les guirlandes.' },
    { fr: 'essayer', pt: 'experimentar (roupa); tentar', pos: 'v', ex: 'Je peux essayer cette robe ?' },
    { fr: 'la cabine (d\'essayage)', pt: 'o provador', g: 'f', d: true, ex: 'Les cabines sont au fond.' },
    { fr: 'la taille', pt: 'o tamanho (roupa); a cintura', g: 'f', ex: 'Vous faites quelle taille ?' },
    { fr: 'la pointure', pt: 'o número (de sapato)', g: 'f', ex: 'Quelle est votre pointure ?' },
    { fr: 'trop grand / trop petit', pt: 'grande / pequeno demais', pos: 'expr', ex: 'Elle est un peu trop grande.' },
    { fr: 'les soldes', pt: 'a liquidação', g: 'm', d: true, ex: "C'est les soldes en ce moment." },
    { fr: 'Ça vous va très bien.', pt: 'Fica muito bem em você.', pos: 'expr', ex: 'Cette couleur vous va très bien.' }
  ],
  reading: {
    genre: 'conversa por mensagens',
    title: 'Groupe « Fête de Léa 🎉 » (sans Léa !)',
    text: "Lucas : Salut tout le monde ! Léa ne lit pas ce groupe, c'est une surprise. On organise tout pour samedi. Qui fait quoi ?\n\n" +
      "Hugo : Les guirlandes, je les apporte. Je les ai achetées hier. Et la musique, je la prépare aussi.\n\n" +
      "Camille : Moi, je peux faire les courses. Tu m'envoies la liste, Lucas ?\n\n" +
      "Lucas : Je te l'envoie ce soir. Et le gâteau ? Mme Bernard propose de le faire, mais elle a quatre-vingt-un ans… On l'aide ?\n\n" +
      "Inès : Je l'aide, moi ! J'adore faire des gâteaux. Je vais la voir vendredi après-midi.\n\n" +
      "Hugo : Parfait. Et les verres et les assiettes ? On les achète ?\n\n" +
      "Lucas : Non, je les emprunte à l'association du quartier. Ils les prêtent gratuitement.\n\n" +
      "Camille : Et Léa ? Comment on la garde loin de la terrasse pendant la préparation ?\n\n" +
      "Lucas : Pas de problème. Sa mère l'appelle à dix-huit heures et elles vont parler au moins une heure, comme d'habitude 😄\n\n" +
      "Inès : Génial. Et le cadeau ? On le choisit ensemble ?\n\n" +
      "Hugo : Oui ! On se retrouve jeudi soir au café pour en parler ?\n\n" +
      "Lucas : D'accord. Et surtout, ne dites rien à Léa ! Si elle vous pose des questions, vous ne savez rien.",
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi Léa ne lit pas le groupe ?', options: ["Parce que c'est une surprise.", "Parce qu'elle n'a pas de téléphone.", "Parce qu'elle travaille.", "Parce qu'elle est à Annecy."], answer: 0 },
      { type: 'match', prompt: 'Quem faz o quê?', pairs: [['les guirlandes et la musique', 'Hugo'], ['les courses', 'Camille'], ['aider Mme Bernard', 'Inès'], ['emprunter les verres', 'Lucas'], ['appeler Léa', 'sa mère']] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Hugo a déjà acheté les guirlandes.', answer: 'V', explanationPt: '"Je les ai achetées hier."' },
        { text: 'Ils vont acheter les verres.', answer: 'F', explanationPt: 'Lucas vai pegar emprestado da associação do bairro.' },
        { text: 'La mère de Léa parle peu au téléphone.', answer: 'F', explanationPt: 'Elas vão falar "au moins une heure, comme d\'habitude".' },
        { text: 'Le cadeau sera un livre.', answer: 'NM', explanationPt: 'Eles ainda vão escolher o presente.' }
      ] },
      { type: 'multiple_choice', prompt: 'Dans « Je les emprunte », « les » remplace :', options: ['les verres et les assiettes', 'les guirlandes', 'les courses', 'les amis'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Dans « Comment on la garde loin de la terrasse ? », « la » remplace :', options: ['Léa', 'la musique', 'la terrasse', 'la liste'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo numa loja de roupas',
    title: 'Léa procura um vestido',
    speakers: [{ id: 'V', name: 'A vendedora', gender: 'f' }, { id: 'L', name: 'Léa', gender: 'f' }],
    script: [
      { speaker: 'V', text: 'Bonjour, je peux vous aider ?' },
      { speaker: 'L', text: "Oui, je cherche une robe pour une fête. Quelque chose de simple, pour l'été." },
      { speaker: 'V', text: 'Nous avons ces robes en lin. Vous faites quelle taille ?' },
      { speaker: 'L', text: 'Du trente-huit, en général.' },
      { speaker: 'V', text: "Voilà la bleue en trente-huit. Vous voulez l'essayer ? Les cabines sont au fond, à droite." },
      { speaker: 'L', text: '… Elle est un peu trop grande. Vous l\'avez en trente-six ?' },
      { speaker: 'V', text: "En bleu, non, désolée. Mais je l'ai en vert, en trente-six. Je vous l'apporte ?" },
      { speaker: 'L', text: 'Oui, merci… Ah, elle est parfaite ! Elle coûte combien ?' },
      { speaker: 'V', text: "Elle est à soixante euros, mais avec les soldes, c'est moins trente pour cent. Et cette couleur vous va très bien." },
      { speaker: 'L', text: 'Alors, je la prends !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quelle robe Léa achète ?', options: ['La verte, en trente-six.', 'La bleue, en trente-huit.', 'La bleue, en trente-six.', 'La verte, en trente-huit.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Les cabines sont à gauche.', answer: 'F', explanationPt: '"au fond, à droite".' },
        { text: 'La robe bleue est trop grande.', answer: 'V', explanationPt: '"Elle est un peu trop grande."' },
        { text: 'La robe est en coton.', answer: 'F', explanationPt: 'É de linho (en lin).' },
        { text: 'Léa paie par carte.', answer: 'NM', explanationPt: 'Não se sabe como ela paga.' }
      ] },
      { type: 'short_answer', prompt: 'Com 30% de desconto, quanto custa o vestido de 60 €? (só o número)', answers: ['42'] },
      { type: 'listen_choose', audio: "Vous voulez l'essayer ?", prompt: 'O que a vendedora pergunta?',
        options: ['Quer experimentar?', 'Quer levar?', 'Quer outro tamanho?', 'Quer pagar agora?'], answer: 0 },
      { type: 'dictation', text: 'Alors, je la prends !' }
    ]
  },
  grammar: {
    topicId: 'cod-coi',
    title: 'Pronomes de objeto direto (COD)',
    explanationPt: 'O **COD** (complemento de objeto direto) responde a "o quê?" ou "quem?" **sem preposição**: *Je prends **la robe***. Para não repetir, use um pronome:\n\n' +
      '- **le** (o) · **la** (a) · **l\'** (antes de vogal) · **les** (os, as)\n- **me, te, nous, vous** (me, te, nos, vos/o senhor)\n\n' +
      '**Posição — sempre ANTES do verbo conjugado:** *Je **la** prends. Tu **les** achètes ?*\n- Com dois verbos, antes do infinitivo: *Je vais **le** faire.*\n- No passé composé, antes do auxiliar: *Je **les** ai achetées.* (o particípio concorda com o COD que vem antes — detalhe de escrita)\n- Negação: *Je ne **la** prends pas.*\n- Imperativo afirmativo: depois, com hífen: *Prends-**la** ! Aide-**moi** !*',
    table: { head: ['pergunta', 'resposta'], rows: [
      ['Tu prends la robe ?', 'Oui, je la prends.'], ['Tu vois Hugo samedi ?', 'Oui, je le vois samedi.'], ['Tu as les clés ?', "Non, je ne les ai pas."],
      ['Tu m\'aides ?', "Oui, je t'aide."], ['Tu vas faire le gâteau ?', 'Oui, je vais le faire.'], ['Tu as acheté les guirlandes ?', 'Oui, je les ai achetées.']
    ] },
    examples: [
      { fr: 'Ce film ? Je l\'ai vu trois fois.', pt: 'Esse filme? Vi três vezes.' },
      { fr: 'Ta mère ? Je la trouve très sympa.', pt: 'Sua mãe? Acho ela muito simpática.' },
      { fr: "Je t'attends devant le cinéma.", pt: 'Te espero na frente do cinema.' },
      { fr: 'Les verres, on les emprunte.', pt: 'Os copos, a gente pega emprestado.' }
    ],
    ptComparison: 'O brasileiro diz "**vi ele**", "acho **ela** simpática" — com o pronome depois e na forma de sujeito. Em francês, isso é impossível: o pronome vai **antes** e na forma de objeto: *je **l\'**ai vu*, *je **la** trouve sympa*. Nunca ~~j\'ai vu il~~!\n\n' +
      'E o francês **não omite** o objeto como o português: "Comprei" (o vestido) → *Je **l\'**ai achetée*.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Substitua pelo pronome (le, la, l\', les).', items: [
      { text: 'Tu regardes la télé ? — Oui, je ___ regarde.', answers: ['la'] },
      { text: 'Vous connaissez Hugo ? — Oui, je ___ connais.', answers: ['le'] },
      { text: 'Tu aimes les fraises ? — Oui, je ___ adore !', answers: ['les'] },
      { text: "Tu as vu le film ? — Oui, je ___ ai vu.", answers: ["l'"] },
      { text: 'Tu vas inviter Camille ? — Oui, je vais ___ inviter.', answers: ['l\''] }
    ] },
    { type: 'multiple_choice', prompt: '"Eu vi ela ontem."', options: ["Je l'ai vue hier.", "J'ai vu elle hier.", "Je ai la vue hier.", "J'ai la vu hier."], answer: 0 },
    { type: 'multiple_choice', prompt: 'Negação: "Não o conheço."', options: ['Je ne le connais pas.', 'Je le ne connais pas.', 'Je ne connais le pas.', 'Je ne connais pas le.'], answer: 0 },
    { type: 'multiple_choice', prompt: 'Imperativo: "Me ajuda!"', options: ['Aide-moi !', 'Me aide !', 'Aide-me !', 'Moi aide !'], answer: 0 },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Je vais les acheter demain.', translation: 'Vou comprá-los amanhã.' }
  ],
  tipForBrazilians: '**Tamanhos franceses:** roupas femininas usam números europeus (36, 38, 40 — o 38 francês é mais ou menos o 40 brasileiro). Sapatos: o número francês é cerca de **2 a mais** que o brasileiro (um 37 no Brasil ≈ 39 na França). "Que tamanho você usa?" = *Vous faites quelle taille ?* (roupa) / *Vous faites quelle pointure ?* (sapato).'
});
