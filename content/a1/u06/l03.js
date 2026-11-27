LUX.registerLesson({
  id: 'a1-u06-l03', level: 'A1', unit: 6, order: 3,
  title: "Qu'est-ce que tu aimes faire ?", titlePt: 'O que você gosta de fazer?',
  names: ['Lucas', 'Julie', 'Emma', 'Lyon', 'Brésil', 'Rio'],
  introPt: 'No almoço, a Julie (a estagiária) e o Lucas conversam sobre o que gostam de fazer no tempo livre. Nesta lição: os **hobbies**, ***aimer*** **+ verbo** (gostar de fazer) e as perguntas com ***est-ce que*** e ***qu\'est-ce que***.',
  objectives: [
    'Falar dos seus hobbies e do tempo livre.',
    'Usar aimer, adorer, préférer + infinitivo.',
    "Fazer perguntas com est-ce que e qu'est-ce que."
  ],
  vocabulary: [
    { fr: 'le temps libre', pt: 'o tempo livre', g: 'm', say: 'le tã LIBRR', ex: "Qu'est-ce que tu fais dans ton temps libre ?" },
    { fr: 'lire', pt: 'ler', pos: 'v', say: 'LIRR', ex: "J'aime lire le soir." },
    { fr: 'écouter de la musique', pt: 'ouvir música', pos: 'expr', say: 'ê-ku-TÊ de la mü-ZIK', ex: "J'adore écouter de la musique." },
    { fr: 'regarder', pt: 'olhar, assistir', pos: 'v', say: 'rre-garr-DÊ', ex: 'Je regarde des séries.' },
    { fr: 'la série', pt: 'a série', g: 'f', say: 'la ssê-RRI', ex: 'Tu regardes quelle série ?' },
    { fr: 'voyager', pt: 'viajar', pos: 'v', say: 'vua-ia-JÊ', ex: "J'aime beaucoup voyager." },
    { fr: 'sortir', pt: 'sair', pos: 'v', say: 'ssorr-TIRR', ex: 'Le samedi soir, je sors avec des amis.' },
    { fr: 'dessiner', pt: 'desenhar', pos: 'v', say: 'dé-ssi-NÊ', ex: 'Lucas adore dessiner.' },
    { fr: 'danser', pt: 'dançar', pos: 'v', say: 'dã-SSÊ', ex: 'Tu aimes danser ?' },
    { fr: 'les jeux vidéo', pt: 'os videogames', g: 'm', say: 'lê jö vi-dê-Ô', ex: 'Il joue aux jeux vidéo.' },
    { fr: 'est-ce que…?', pt: '(marca de pergunta sim/não)', pos: 'expr', say: 'és-ke', ex: 'Est-ce que tu aimes lire ?' },
    { fr: "qu'est-ce que…?", pt: 'o que…?', pos: 'expr', say: 'kés-ke', ex: "Qu'est-ce que tu aimes faire ?" }
  ],
  pronunciation: {
    title: "Est-ce que e qu'est-ce que: tudo junto",
    textPt: 'Estas duas expressões parecem enormes na escrita, mas soam curtinhas:\n\n' +
      '- ***est-ce que*** = "ÉS-ke" (duas sílabas!)\n' +
      '- ***qu\'est-ce que*** = "KÉS-ke"\n' +
      '- ***qu\'est-ce que c\'est ?*** = "kés-ke-SSÉ"\n\n' +
      'Antes de vogal, o último *que* vira *qu\'*: ***est-ce qu\'il*** "és-KIL", ***qu\'est-ce qu\'elle*** "kés-KÉL".',
    examples: [{ fr: 'Est-ce que tu aimes lire ?', pt: 'Você gosta de ler?' }, { fr: "Qu'est-ce que tu fais ?", pt: 'O que você faz?' }, { fr: "Est-ce qu'il aime danser ?", pt: 'Ele gosta de dançar?' }, { fr: "Qu'est-ce qu'elle regarde ?", pt: 'O que ela está vendo?' }]
  },
  reading: {
    genre: 'perfil num app de troca de idiomas',
    title: 'Échange de langues : Julie',
    text: "Julie, 22 ans, Lyon\n" +
      "Je parle : français, anglais\n" +
      "J'apprends : portugais (débutante)\n\n" +
      "Bonjour ! Je suis étudiante en design et j'adore dessiner. Dans mon temps libre, j'aime lire des [[bandes dessinées|histórias em quadrinhos]], écouter de la musique et danser. J'adore la musique brésilienne !\n\n" +
      "Je n'aime pas beaucoup le sport, mais je fais parfois du vélo.\n\n" +
      "Je cherche un ou une partenaire pour parler portugais et français, une heure par semaine, dans un café. Est-ce que vous êtes brésilien ou portugais ? Écrivez-moi !",
    translationPt: '**Julie, 22 anos, Lyon**\nFalo: francês, inglês\nEstou aprendendo: português (iniciante)\n\n' +
      'Olá! Sou estudante de design e adoro desenhar. No meu tempo livre, gosto de ler histórias em quadrinhos, ouvir música e dançar. Adoro música brasileira!\n\n' +
      'Não gosto muito de esporte, mas às vezes ando de bicicleta.\n\n' +
      'Procuro um ou uma parceira para falar português e francês, uma hora por semana, num café. Você é brasileiro ou português? Me escreva!',
    exercises: [
      { type: 'multiple_choice', prompt: 'Que língua a Julie está aprendendo?', options: ['Português.', 'Inglês.', 'Italiano.', 'Espanhol.'], answer: 0,
        explanationPt: '"J\'apprends : portugais (débutante)". *Apprendre* = aprender.' },
      { type: 'multiple_choice', prompt: 'O que a Julie procura?', options: ['Alguém para falar português e francês.', 'Um time de futebol.', 'Um emprego.', 'Um apartamento.'], answer: 0,
        explanationPt: '"Je cherche un ou une partenaire pour parler portugais et français".' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Julie adore la musique brésilienne.', answer: 'V', explanationPt: '"J\'adore la musique brésilienne !"' },
        { text: 'Julie adore le sport.', answer: 'F', explanationPt: '"Je n\'aime pas beaucoup le sport".' },
        { text: 'Julie aime lire.', answer: 'V', explanationPt: '"j\'aime lire des bandes dessinées".' },
        { text: 'Julie a un chat.', answer: 'NM', explanationPt: 'O perfil não fala de animais.' }
      ] },
      { type: 'match', prompt: 'Ligue cada atividade à tradução.', pairs: [
        ['dessiner', 'desenhar'], ['lire', 'ler'], ['écouter de la musique', 'ouvir música'], ['danser', 'dançar'], ['faire du vélo', 'andar de bicicleta']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Conversa no almoço',
    speakers: [{ id: 'J', name: 'Julie', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'J', text: "Lucas, qu'est-ce que tu aimes faire le week-end ?", pt: 'Lucas, o que você gosta de fazer no fim de semana?' },
      { speaker: 'U', text: "J'aime jouer au foot, cuisiner et dessiner. Et toi ?", pt: 'Gosto de jogar futebol, cozinhar e desenhar. E você?' },
      { speaker: 'J', text: "Moi aussi, j'adore dessiner ! Et j'aime danser. Est-ce que tu danses la samba ?", pt: 'Eu também adoro desenhar! E gosto de dançar. Você dança samba?' },
      { speaker: 'U', text: "Ha ha, non ! Je ne danse pas bien. Je préfère écouter de la musique.", pt: 'Ha ha, não! Não danço bem. Prefiro ouvir música.' },
      { speaker: 'J', text: "Qu'est-ce que tu écoutes ?", pt: 'O que você ouve?' },
      { speaker: 'U', text: 'De la musique brésilienne, bien sûr ! Et un peu de rap français.', pt: 'Música brasileira, claro! E um pouco de rap francês.' },
      { speaker: 'J', text: "Est-ce que tu veux faire un échange de langues ? J'apprends le portugais !", pt: 'Você quer fazer uma troca de idiomas? Estou aprendendo português!' },
      { speaker: 'U', text: "Avec plaisir ! Tu m'aides en français, et moi, je t'aide en portugais.", pt: 'Com prazer! Você me ajuda no francês, e eu te ajudo no português.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'O que o Lucas gosta de fazer no fim de semana?', options: ['Jogar futebol, cozinhar e desenhar.', 'Dançar e ler.', 'Ver séries.', 'Viajar.'], answer: 0,
        explanationPt: '"J\'aime jouer au foot, cuisiner et dessiner."' },
      { type: 'multiple_choice', prompt: 'O Lucas dança samba?', options: ['Não, ele diz que não dança bem.', 'Sim, muito bem.', 'Sim, todo fim de semana.', 'Ele não responde.'], answer: 0,
        explanationPt: '"Je ne danse pas bien. Je préfère écouter de la musique."' },
      { type: 'multiple_choice', prompt: 'O que eles combinam?', options: ['Uma troca de idiomas.', 'Uma aula de dança.', 'Um jogo de futebol.', 'Um jantar.'], answer: 0,
        explanationPt: '"un échange de langues" = uma troca de idiomas.' },
      { type: 'listen_choose', audio: "Qu'est-ce que tu aimes faire le week-end ?", prompt: 'Ouça e escolha a pergunta.',
        options: ["Qu'est-ce que tu aimes faire le week-end ?", 'Est-ce que tu aimes le week-end ?', "Qu'est-ce que tu fais ce week-end ?", 'Tu aimes faire du sport le week-end ?'], answer: 0,
        explanationPt: '*Qu\'est-ce que tu aimes faire ?* = o que você gosta de fazer?' },
      { type: 'dictation', text: 'Est-ce que tu aimes danser ?', explanationPt: '*Est-ce que* transforma qualquer frase em pergunta de sim ou não.' }
    ]
  },
  grammar: {
    topicId: 'questions',
    title: "Aimer + verbo; est-ce que e qu'est-ce que",
    explanationPt: '**Gostar de fazer algo:** ***aimer*** (ou *adorer*, *préférer*, *détester*) **+ verbo no infinitivo**, sem preposição:\n' +
      '- *J\'aime **lire**.* (gosto de ler)\n' +
      '- *J\'adore **dessiner**.* (adoro desenhar)\n' +
      '- *Je préfère **écouter** de la musique.* (prefiro ouvir música)\n' +
      '- *Je n\'aime pas **danser**.* (não gosto de dançar)\n\n' +
      '**Perguntas:**\n' +
      '- ***Est-ce que*** + frase = pergunta de **sim ou não**: *Est-ce que tu aimes lire ?* (você gosta de ler?)\n' +
      '- ***Qu\'est-ce que*** + frase = **o que**: *Qu\'est-ce que tu aimes faire ?* (o que você gosta de fazer?)\n\n' +
      'Os dois deixam a ordem da frase normal (sujeito + verbo). É só colocar na frente!',
    table: { head: ['frase', 'pergunta sim/não', 'pergunta "o que"'], rows: [
      ['Tu aimes lire.', 'Est-ce que tu aimes lire ?', "Qu'est-ce que tu aimes lire ?"], ['Il regarde une série.', "Est-ce qu'il regarde une série ?", "Qu'est-ce qu'il regarde ?"],
      ['Vous faites du sport.', 'Est-ce que vous faites du sport ?', "Qu'est-ce que vous faites ?"]
    ] },
    examples: [
      { fr: "J'aime lire et écouter de la musique.", pt: 'Gosto de ler e de ouvir música.' },
      { fr: 'Est-ce que tu aimes voyager ?', pt: 'Você gosta de viajar?' },
      { fr: "Qu'est-ce que tu fais le week-end ?", pt: 'O que você faz no fim de semana?' },
      { fr: "Je n'aime pas danser.", pt: 'Não gosto de dançar.' }
    ],
    ptComparison: 'Em português dizemos "gosto **de** ler". Em francês não tem preposição: ***j\'aime lire***. Nunca diga *j\'aime de lire*.\n\n' +
      '***Est-ce que*** não tem tradução: é só uma "etiqueta" que mostra que a frase é uma pergunta. Na fala, muitas vezes basta a entonação: *Tu aimes lire ?*'
  },
  grammarPractice: [
    { type: 'multiple_choice', prompt: '"Gosto de desenhar."', options: ["J'aime dessiner.", "J'aime de dessiner.", "J'aime le dessiner.", "J'aime dessine."], answer: 0,
      explanationPt: '***Aimer*** + verbo no infinitivo, sem *de*.' },
    { type: 'fill_blank', prompt: "Complete com est-ce que ou qu'est-ce que.", bank: ['Est-ce que', "Qu'est-ce que"], items: [
      { text: '___ tu aimes voyager ? — Oui !', answers: ['Est-ce que'] },
      { text: '___ tu fais samedi ? — Je vais au cinéma.', answers: ["Qu'est-ce que"] },
      { text: '___ vous parlez anglais ? — Un peu.', answers: ['Est-ce que'] },
      { text: '___ tu écoutes ? — Du rap.', answers: ["Qu'est-ce que"] }
    ], explanationPt: '- resposta **sim / não** → *est-ce que*\n- resposta com uma **coisa** → *qu\'est-ce que*' },
    { type: 'fill_blank', prompt: 'Complete com o verbo no infinitivo.', items: [
      { text: "J'adore ___ de la musique. (ouvir)", answers: ['écouter'] },
      { text: 'Tu aimes ___ ? (viajar)', answers: ['voyager'] },
      { text: 'Je préfère ___ des séries. (assistir)', answers: ['regarder'] }
    ] },
    { type: 'match', prompt: 'Ligue a pergunta à resposta.', pairs: [
      ['Est-ce que tu aimes lire ?', 'Oui, beaucoup.'], ["Qu'est-ce que tu aimes lire ?", 'Des bandes dessinées.'], ['Est-ce que tu danses ?', 'Non, je danse mal.'], ["Qu'est-ce que tu écoutes ?", 'De la musique brésilienne.']
    ] },
    { type: 'order_sentence', prompt: 'Monte a pergunta.', answer: "Qu'est-ce que tu aimes faire le week-end ?", translation: 'O que você gosta de fazer no fim de semana?' }
  ],
  tipForBrazilians: '**Troca de idiomas** (***échange de langues*** ou ***tandem***): é uma das melhores formas de praticar o francês de graça. Em todas as grandes cidades francesas (e em Luxemburgo, em Bruxelas, em Genebra…) há encontros em bares e cafés, e aplicativos para encontrar parceiros.\n\n' +
    'Os franceses adoram o Brasil: música, futebol, praia… Use isso para puxar conversa! E as ***bandes dessinées*** (*BD*, os quadrinhos) são uma paixão francesa e belga: Tintim e Asterix são de lá.'
});
