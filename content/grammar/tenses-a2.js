/* Gramática — tempos e modos verbais (A1–A2) */
(function () {
  var G = LUX.registerGrammar;

  G({
    id: 'present-revisao', category: 'tempos', level: 'A1', title: 'O presente: être, avoir e verbos em -er', titleFr: 'Le présent : être, avoir, verbes en -er',
    keywords: ['presente', 'être', 'avoir', '-er', 'parler', 'conjugação', 'présent'], verb: 'parler', tense: 'present',
    summaryPt: 'Verbos em -er: -e, -es, -e, -ons, -ez, -ent. Être e avoir são irregulares e essenciais.',
    explanationPt: 'Os verbos em **-er** (90% dos verbos franceses) seguem o modelo de *parler*: tire o -er e acrescente **-e, -es, -e, -ons, -ez, -ent**.\n\n' +
      'As formas *parle, parles, parle, parlent* soam **iguais**: só *parlons* e *parlez* soam diferente.\n\n' +
      '**être** (ser/estar) e **avoir** (ter) são irregulares e aparecem em todo lugar, inclusive como auxiliares do passado.',
    tables: [{ caption: 'Conjugação', head: ['', 'être', 'avoir', 'parler'], rows: [
      ['je / j\'', 'suis', 'ai', 'parle'], ['tu', 'es', 'as', 'parles'], ['il / elle / on', 'est', 'a', 'parle'],
      ['nous', 'sommes', 'avons', 'parlons'], ['vous', 'êtes', 'avez', 'parlez'], ['ils / elles', 'sont', 'ont', 'parlent']
    ] }],
    examples: [{ fr: 'Je suis brésilien et j\'ai trente ans.', pt: 'Sou brasileiro e tenho trinta anos.' }, { fr: 'Nous parlons français.', pt: 'Falamos francês.' }],
    ptComparison: {
      same: 'O presente francês também serve para ações habituais e para o futuro próximo: *Je pars demain* (parto amanhã).',
      different: 'Não existe gerúndio para "estou fazendo": o presente simples cobre os dois sentidos (*je travaille* = trabalho / estou trabalhando). Para insistir, use *être en train de*.',
      commonErrors: [{ wrong: 'Je suis 28 ans.', right: "J'ai 28 ans.", why: 'Idade com avoir.' }, { wrong: 'Je suis travaillant.', right: 'Je travaille.', why: 'Não há presente contínuo com être + gerúndio.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Nous ___ (habiter) à Lyon.', options: ['habitons', 'habitez', 'habitent', 'habite'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Estou trabalhando."', options: ['Je travaille.', 'Je suis travaillant.', 'Je suis travailler.', "J'ai travaillant."], answer: 0 }
    ],
    related: ['present-irregular', 'pronominal-verbs', 'cest-ilest']
  });

  G({
    id: 'present-irregular', category: 'tempos', level: 'A1', title: 'Presente dos verbos irregulares frequentes', titleFr: 'Le présent des verbes irréguliers',
    keywords: ['irregular', 'faire', 'aller', 'prendre', 'venir', 'pouvoir', 'vouloir', 'jouer à', 'faire de'], verb: 'faire', tense: 'present',
    summaryPt: 'faire, aller, prendre, venir, pouvoir, vouloir: decore as formas. Esporte com bola: jouer à; atividade: faire de.',
    explanationPt: 'Os irregulares mais usados no presente:\n\n' +
      '- **faire**: fais, fais, fait, faisons, **faites**, font\n' +
      '- **aller**: vais, vas, va, allons, allez, vont\n' +
      '- **prendre**: prends, prends, prend, prenons, prenez, prennent\n' +
      '- **venir**: viens, viens, vient, venons, venez, viennent\n' +
      '- **pouvoir**: peux, peux, peut, pouvons, pouvez, peuvent\n' +
      '- **vouloir**: veux, veux, veut, voulons, voulez, veulent\n\n' +
      '**Jouer à** + jogo/esporte (*jouer au foot*); **faire de** + atividade (*faire du vélo*); **jouer de** + instrumento (*jouer du piano*).',
    tables: [{ caption: 'jouer / faire', head: ['', 'jouer à', 'faire de'], rows: [['masc.', 'au tennis', 'du vélo'], ['fem.', 'à la pétanque', 'de la natation'], ['vogal', "à l'...", "de l'escalade"], ['plural', 'aux cartes', 'des randonnées']] }],
    examples: [{ fr: 'Vous faites du sport ?', pt: 'Vocês praticam esporte?' }, { fr: 'Ils prennent le métro.', pt: 'Eles pegam o metrô.' }],
    ptComparison: {
      same: 'Os verbos mais usados são irregulares também em português (ser, ir, ter, fazer).',
      different: '"Praticar esporte" = *faire du sport*. "Tocar instrumento" = *jouer d\'un instrument*, nunca *toucher*.',
      commonErrors: [{ wrong: 'vous faisez', right: 'vous faites', why: 'Forma irregular.' }, { wrong: 'jouer le foot', right: 'jouer au foot', why: 'jouer à + esporte.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Ils ___ (prendre) le train.', options: ['prennent', 'prendent', 'prenent', 'prends'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Elle fait ___ natation.', options: ['de la', 'du', 'à la', 'la'], answer: 0 }
    ],
    related: ['present-revisao', 'futur-proche']
  });

  G({
    id: 'pronominal-verbs', category: 'tempos', level: 'A1', title: 'Verbos pronominais', titleFr: 'Les verbes pronominaux',
    keywords: ['pronominal', 'reflexivo', 'se lever', 'me te se', 'je me', 'rotina'], verb: 'se lever', tense: 'present',
    summaryPt: 'Pronome reflexivo antes do verbo: je me lève, tu te lèves... No passado, sempre com être.',
    explanationPt: 'Os verbos pronominais levam um pronome que concorda com o sujeito: **me, te, se, nous, vous, se**.\n\n' +
      '- Antes de vogal: **m\', t\', s\'** → *je m\'habille*.\n' +
      '- Negação: *je **ne** me lève **pas***.\n' +
      '- Imperativo afirmativo: *lève-toi, levons-nous, levez-vous*.\n' +
      '- Passé composé: sempre com **être**: *je me suis levé(e)*.',
    tables: [{ caption: 'se réveiller', head: ['presente', 'passé composé'], rows: [
      ['je me réveille', 'je me suis réveillé(e)'], ['tu te réveilles', "tu t'es réveillé(e)"], ['il / elle se réveille', "il s'est réveillé / elle s'est réveillée"],
      ['nous nous réveillons', 'nous nous sommes réveillé(e)s'], ['vous vous réveillez', 'vous vous êtes réveillé(e)(s)'], ['ils / elles se réveillent', 'ils se sont réveillés / elles se sont réveillées']
    ] }],
    examples: [{ fr: 'Je me couche tard.', pt: 'Vou dormir tarde.' }, { fr: 'Dépêche-toi !', pt: 'Anda logo!' }],
    ptComparison: {
      same: 'Existem pronominais em português também (levantar-se, vestir-se).',
      different: 'Muitos verbos são pronominais só em francês: se réveiller (acordar), se reposer (descansar), se promener (passear).',
      commonErrors: [{ wrong: 'Je réveille à 7 h.', right: 'Je me réveille à 7 h.', why: 'Sem o pronome, significa acordar alguém.' }, { wrong: 'Je me ne lève pas.', right: 'Je ne me lève pas.', why: 'O ne vem antes do pronome.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Nous ___ à huit heures. (se lever)', options: ['nous levons', 'se levons', 'nous lèvons', 'levons'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Imperativo de "se dépêcher" (tu):', options: ['Dépêche-toi !', 'Te dépêche !', 'Dépêches-toi !', 'Dépêche-te !'], answer: 0 }
    ],
    related: ['present-revisao', 'negation', 'passe-compose']
  });

  G({
    id: 'passe-compose', category: 'tempos', level: 'A2', title: 'Passé composé', titleFr: 'Le passé composé',
    keywords: ['passé composé', 'passado', 'pretérito perfeito', 'avoir être', 'auxiliar', 'particípio', 'DR MRS VANDERTRAMP'], verb: 'aller', tense: 'passe_compose',
    summaryPt: 'Auxiliar (avoir ou être) no presente + particípio passado. Com être, o particípio concorda com o sujeito.',
    explanationPt: '**Formação:** *avoir/être* no presente + **particípio passado** (*parlé, fini, vendu, pris, fait...*).\n\n' +
      '- A maioria dos verbos usa **avoir**: *j\'ai mangé, tu as fini*.\n' +
      '- Usam **être**: os pronominais e cerca de 15 verbos de **movimento/mudança de estado**: aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, devenir, revenir, rentrer, passer.\n\n' +
      'Com **être**, o particípio **concorda** com o sujeito: *elle est allée, ils sont partis*.',
    tables: [{ caption: 'Particípios', head: ['infinitivo', 'particípio'], rows: [
      ['parler', 'parlé'], ['finir', 'fini'], ['vendre', 'vendu'], ['faire', 'fait'], ['prendre', 'pris'], ['avoir', 'eu'], ['être', 'été'], ['voir', 'vu']
    ] }],
    examples: [{ fr: "Hier, j'ai visité le Vieux Lyon.", pt: 'Ontem visitei a parte antiga de Lyon.' }, { fr: 'Léa est partie à six heures.', pt: 'Léa saiu às seis.' }],
    ptComparison: {
      same: 'Usado para ações concluídas, como o pretérito perfeito ("fiz, fui").',
      different: 'Tem forma composta (auxiliar + particípio). "Eu fui" = *je suis allé(e)*, e não *j\'ai allé*.',
      commonErrors: [{ wrong: "J'ai allé au cinéma.", right: 'Je suis allé au cinéma.', why: 'aller usa être.' }, { wrong: 'Elle est allé.', right: 'Elle est allée.', why: 'Concordância com être.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: '"Nós comemos."', options: ['Nous avons mangé.', 'Nous sommes mangés.', 'Nous mangé.', 'Nous avons mangeons.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Elles ___ arrivées hier.', options: ['sont', 'ont', 'avons', 'est'], answer: 0 }
    ],
    related: ['imparfait', 'pc-vs-imparfait', 'depuis-pendant']
  });

  G({
    id: 'imparfait', category: 'tempos', level: 'A2', title: 'Imparfait', titleFr: "L'imparfait",
    keywords: ['imparfait', 'pretérito imperfeito', 'descrição', 'hábito', 'antigamente', 'era', 'fazia'], verb: 'parler', tense: 'imparfait',
    summaryPt: 'Radical do "nous" do presente + -ais, -ais, -ait, -ions, -iez, -aient. Para descrições e hábitos no passado.',
    explanationPt: '**Formação:** pegue o *nous* do presente, tire o *-ons* e acrescente **-ais, -ais, -ait, -ions, -iez, -aient**.\n\n' +
      '*nous parlons → parl- → je parlais*. Única exceção: *être → j\'étais*.\n\n' +
      '**Uso:** descrições, cenários, estados e hábitos no passado — como o "-ava / -ia" do português.',
    tables: [{ caption: 'Exemplos', head: ['nous (presente)', 'imparfait'], rows: [['nous finissons', 'je finissais'], ['nous faisons', 'je faisais'], ['nous prenons', 'je prenais'], ['(être)', "j'étais"]] }],
    examples: [{ fr: 'Quand j\'étais petit, j\'habitais à Belo Horizonte.', pt: 'Quando eu era pequeno, morava em Belo Horizonte.' }, { fr: 'Il faisait beau.', pt: 'Fazia tempo bom.' }],
    ptComparison: {
      same: 'Corresponde quase perfeitamente ao pretérito imperfeito (falava, comia, era).',
      different: 'As terminações -ais, -ait, -aient soam iguais.',
      commonErrors: [{ wrong: "J'étudiais (para ação pontual: ontem estudei 2h)", right: "Hier, j'ai étudié deux heures.", why: 'Ação pontual e concluída → passé composé.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Quand j\'étais enfant, je ___ (jouer) au foot.', options: ['jouais', 'ai joué', 'jouerai', 'joue'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Nous ___ (être) fatigués.', options: ['étions', 'étais', 'sommes été', 'étaient'], answer: 0 }
    ],
    related: ['passe-compose', 'pc-vs-imparfait']
  });

  G({
    id: 'pc-vs-imparfait', category: 'tempos', level: 'A2', title: 'Passé composé ou imparfait?', titleFr: 'Passé composé ou imparfait ?', faq: true,
    keywords: ['passé composé', 'imparfait', 'diferença', 'qual passado', 'narração'],
    summaryPt: 'Imparfait = cenário, descrição, hábito ("o que estava acontecendo"). Passé composé = ação pontual, concluída ("o que aconteceu").',
    explanationPt: 'Pense num filme:\n\n' +
      '- O **imparfait** é o **cenário**: tempo, lugar, sentimentos, ações em andamento, hábitos. *Il pleuvait, j\'étais fatigué, je lisais...*\n' +
      '- O **passé composé** é a **ação** que faz a história avançar: *Le téléphone a sonné. J\'ai répondu.*\n\n' +
      'Frase típica: *Je **dormais** quand le téléphone **a sonné**.* (Eu dormia quando o telefone tocou.)',
    tables: [{ caption: 'Pistas', head: ['imparfait', 'passé composé'], rows: [
      ['tous les jours, souvent, d\'habitude', 'hier, un jour, soudain, deux fois'], ['descrever (era, estava, tinha)', 'contar (fez, foi, aconteceu)'], ['ação em andamento', 'ação que interrompe']
    ] }],
    examples: [{ fr: "Quand je suis arrivé à Lyon, il faisait froid.", pt: 'Quando cheguei a Lyon, fazia frio.' }, { fr: 'Avant, je travaillais à São Paulo.', pt: 'Antes, eu trabalhava em São Paulo.' }],
    ptComparison: {
      same: 'A distinção é a mesma do português entre "fazia" e "fiz", "era" e "foi".',
      different: 'Na dúvida, traduza mentalmente: se for "-ava/-ia", é imparfait; se for pretérito perfeito, é passé composé.',
      commonErrors: [{ wrong: "Il a fait beau quand je suis sorti.", right: 'Il faisait beau quand je suis sorti.', why: 'Clima como cenário → imparfait.' }]
    },
    quiz: [
      { type: 'multiple_choice', prompt: 'Je ___ (regarder) la télé quand Léa est arrivée.', options: ['regardais', 'ai regardé', 'regarde', 'regarderai'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Hier, nous ___ (visiter) le musée.', options: ['avons visité', 'visitions', 'visitons', 'sommes visités'], answer: 0 }
    ],
    related: ['passe-compose', 'imparfait']
  });

  G({
    id: 'futur-proche', category: 'tempos', level: 'A2', title: 'Futuro próximo (aller + infinitivo)', titleFr: 'Le futur proche',
    keywords: ['futuro próximo', 'aller + infinitivo', 'vou fazer', 'je vais'], verb: 'partir', tense: 'futur_proche',
    summaryPt: 'aller no presente + infinitivo: je vais partir = vou partir. Igualzinho ao português.',
    explanationPt: '**Formação:** *aller* no presente + **infinitivo**: *je vais manger, tu vas voir, nous allons partir*.\n\n' +
      'É o futuro mais usado na fala para planos e coisas que vão acontecer logo.\n\n' +
      'Negação em volta do *aller*: *Je **ne** vais **pas** venir.* Com pronominal: *Je vais **me** coucher.*',
    tables: [{ caption: 'Conjugação', head: ['aller', '+ infinitivo'], rows: [['je vais', 'partir'], ['tu vas', 'partir'], ['il / elle va', 'partir'], ['nous allons', 'partir'], ['vous allez', 'partir'], ['ils / elles vont', 'partir']] }],
    examples: [{ fr: 'Il va pleuvoir.', pt: 'Vai chover.' }, { fr: 'On va se promener ?', pt: 'A gente vai passear?' }],
    ptComparison: {
      same: 'Funciona exatamente como "vou + infinitivo".',
      different: 'Nada de diferente — aproveite!',
      commonErrors: [{ wrong: 'Je vais à manger.', right: 'Je vais manger.', why: 'Sem preposição.' }]
    },
    quiz: [{ type: 'multiple_choice', prompt: '"Vamos sair."', options: ['Nous allons sortir.', 'Nous allons sortons.', 'Nous allons à sortir.', 'Nous vont sortir.'], answer: 0 }],
    related: ['futur-simple', 'present-irregular']
  });

  G({
    id: 'futur-simple', category: 'tempos', level: 'A2', title: 'Futuro simples', titleFr: 'Le futur simple',
    keywords: ['futuro', 'futur simple', 'farei', '-rai', 'previsão'], verb: 'parler', tense: 'futur',
    summaryPt: 'Infinitivo + -ai, -as, -a, -ons, -ez, -ont (parlerai). Irregulares: ser-, aur-, ir-, fer-, pourr-, viendr-...',
    explanationPt: '**Formação:** infinitivo (sem o -e final dos verbos em -re) + **-ai, -as, -a, -ons, -ez, -ont**.\n\n' +
      '*parler → je parlerai; finir → je finirai; prendre → je prendrai*.\n\n' +
      'Radicais irregulares:\n- ***être*** → *ser-*\n- ***avoir*** → *aur-*\n- ***aller*** → *ir-*\n- ***faire*** → *fer-*\n- ***pouvoir*** → *pourr-*\n- ***venir*** → *viendr-*\n- ***voir*** → *verr-*\n- ***vouloir*** → *voudr-*\n- ***devoir*** → *devr-*\n- ***savoir*** → *saur-*\n- ***falloir*** → *faudr-*\n\n' +
      'Uso: previsões, promessas, planos mais distantes ou formais.',
    tables: [{ caption: 'Exemplos', head: ['verbo', 'futur'], rows: [['être', 'je serai'], ['avoir', "j'aurai"], ['aller', "j'irai"], ['faire', 'je ferai'], ['venir', 'je viendrai']] }],
    examples: [{ fr: 'Demain, il fera beau.', pt: 'Amanhã vai fazer tempo bom.' }, { fr: "Je t'appellerai ce soir.", pt: 'Te ligo hoje à noite.' }],
    ptComparison: {
      same: 'Forma-se como o futuro do português: infinitivo + terminação (falar-ei → parler-ai).',
      different: 'Na fala, os brasileiros usam mais o "vou + infinitivo"; os franceses também usam o futur simple com frequência.',
      commonErrors: [{ wrong: 'je allerai', right: "j'irai", why: 'Radical irregular.' }]
    },
    quiz: [{ type: 'multiple_choice', prompt: 'Nous ___ (être) en retard.', options: ['serons', 'êtrons', 'serez', 'allons être'], answer: 0 }],
    related: ['futur-proche']
  });

  G({
    id: 'imperatif', category: 'tempos', level: 'A2', title: 'Imperativo', titleFr: "L'impératif",
    keywords: ['imperativo', 'ordem', 'conselho', 'parle', 'venez', 'sem sujeito'], verb: 'parler', tense: 'imperatif',
    summaryPt: 'Três formas (tu, nous, vous), sem sujeito. Verbos em -er perdem o -s no "tu": parle !',
    explanationPt: 'O imperativo tem **três pessoas**: *tu, nous, vous*, **sem pronome sujeito**.\n\n' +
      '- *Parle ! Parlons ! Parlez !*\n' +
      '- Verbos em -er (e *aller*) **perdem o -s** do "tu": *tu parles → parle !, tu vas → va !*\n' +
      '- Irregulares: *être → sois, soyons, soyez; avoir → aie, ayons, ayez*.\n' +
      '- Pronominais: *lève-toi, levons-nous, levez-vous*; na negação: *ne te lève pas*.',
    tables: [{ caption: 'Exemplos', head: ['tu', 'nous', 'vous'], rows: [['parle', 'parlons', 'parlez'], ['finis', 'finissons', 'finissez'], ['va', 'allons', 'allez'], ['sois', 'soyons', 'soyez']] }],
    examples: [{ fr: 'Écoutez bien !', pt: 'Escutem bem!' }, { fr: 'Ne pleure pas.', pt: 'Não chore.' }],
    ptComparison: {
      same: 'Usado para ordens, conselhos e instruções.',
      different: 'O "nous" (*allons !* = vamos!) não tem equivalente direto; e não se usa sujeito.',
      commonErrors: [{ wrong: 'Parles !', right: 'Parle !', why: 'Verbos em -er perdem o -s.' }]
    },
    quiz: [{ type: 'multiple_choice', prompt: 'Imperativo de "aller" (tu):', options: ['Va !', 'Vas !', 'Allez !', 'Aller !'], answer: 0 }],
    related: ['pronominal-verbs', 'present-revisao']
  });
})();
