LUX.registerLesson({
  id: 'a2-u05-l01', level: 'A2', unit: 5, order: 1,
  title: 'Pour aller chez Hugo ?', titlePt: 'Como chegar à casa do Hugo?',
  names: ['Hugo', 'Lucas', 'Léa', 'Vaise', 'Lyon', 'Croix-Rousse', 'Hénon', 'Gorge', 'Loup', 'Marietton', 'Saône', 'Pierre', 'Scize', 'Valmy', 'Grande-Côte', 'B'],
  objectives: [
    'Dar e entender indicações de caminho.',
    'Formar o imperativo (tu, nous, vous), inclusive na negativa.',
    'Entender instruções com conectores: d\'abord, ensuite, au bout de.'
  ],
  vocabulary: [
    { fr: 'tout droit', pt: 'reto, em frente', pos: 'expr', ex: 'Continuez tout droit.' },
    { fr: 'à droite', pt: 'à direita', pos: 'expr', ex: 'Tournez à droite.' },
    { fr: 'à gauche', pt: 'à esquerda', pos: 'expr', ex: 'Prenez la première rue à gauche.' },
    { fr: 'tourner', pt: 'virar', pos: 'v', ex: 'Tourne à gauche après la pharmacie.' },
    { fr: 'traverser', pt: 'atravessar', pos: 'v', ex: 'Traversez le pont.' },
    { fr: 'le carrefour', pt: 'o cruzamento', g: 'm', ex: 'Au carrefour, tourne à droite.' },
    { fr: 'le feu (rouge)', pt: 'o semáforo', g: 'm', ex: 'Au feu, traverse la rue.' },
    { fr: 'le pont', pt: 'a ponte', g: 'm', d: true, ex: 'Le pont est à cinq minutes.' },
    { fr: 'au bout de', pt: 'no fim de', pos: 'expr', ex: "C'est au bout de la rue." },
    { fr: "l'arrêt (de bus)", pt: 'o ponto (de ônibus)', g: 'm', ex: "Descends à l'arrêt Valmy." },
    { fr: 'le code', pt: 'o código, a senha (do portão)', g: 'm', ex: 'Le code de la porte est 1984.' },
    { fr: 'Vous ne pouvez pas le rater.', pt: 'Não tem como errar.', pos: 'expr', ex: "C'est une grande maison jaune, vous ne pouvez pas la rater." }
  ],
  reading: {
    genre: 'e-mail com indicações',
    title: 'Hugo : « Pour venir à ma crémaillère »',
    text: "Salut à tous !\n\n" +
      "J'ai enfin déménagé à Vaise ! Pour fêter ça, je vous invite à ma [[crémaillère|festa de casa nova]] samedi soir, à partir de vingt heures. Voici comment venir depuis la Croix-Rousse.\n\n" +
      "En bus : prenez le bus 31 à l'arrêt Hénon. Descendez à l'arrêt Valmy, c'est environ vingt minutes. Ensuite, marchez dans la rue Marietton, toujours tout droit. Au deuxième feu, tournez à droite. Mon immeuble est au bout de la rue, à gauche, en face d'une boulangerie.\n\n" +
      "À pied (pour les sportifs) : descendez jusqu'aux quais de Saône par la montée de la Grande-Côte. Ensuite, suivez la Saône vers le nord pendant quarante minutes. C'est joli, mais attention : ne marchez pas sur la piste cyclable !\n\n" +
      "En voiture : n'en prenez pas, s'il vous plaît ! Il n'y a jamais de place pour se garer dans mon quartier.\n\n" +
      "Le code de la porte est 4721B. Montez au troisième étage, c'est la porte de droite. Si vous êtes perdus, appelez-moi !\n\n" +
      "Apportez de la bonne humeur. Moi, je m'occupe des boissons et des pizzas.\n\nHugo",
    exercises: [
      { type: 'multiple_choice', prompt: 'Pourquoi Hugo organise une fête ?', options: ['Parce qu\'il a déménagé.', 'Pour son anniversaire.', 'Parce qu\'il a un nouveau travail.', 'Pour fêter la fin de l\'année.'], answer: 0,
        explanationPt: '"une crémaillère" = festa para comemorar a casa nova.' },
      { type: 'order_events', prompt: 'Coloque o trajeto de ônibus na ordem.', items: [
        "Prendre le bus 31 à l'arrêt Hénon.", "Descendre à l'arrêt Valmy.", 'Marcher tout droit dans la rue Marietton.', 'Tourner à droite au deuxième feu.', 'Aller au bout de la rue.', 'Monter au troisième étage.'
      ] },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: "L'immeuble de Hugo est en face d'une boulangerie.", answer: 'V', explanationPt: '"en face d\'une boulangerie".' },
        { text: 'Hugo conseille de venir en voiture.', answer: 'F', explanationPt: '"n\'en prenez pas, s\'il vous plaît !" — não há onde estacionar.' },
        { text: 'À pied, le trajet dure environ quarante minutes.', answer: 'V', explanationPt: '"suivez la Saône vers le nord pendant quarante minutes".' },
        { text: 'Hugo habite au deuxième étage.', answer: 'F', explanationPt: 'Terceiro andar (troisième étage).' },
        { text: 'Hugo a un balcon.', answer: 'NM', explanationPt: 'O e-mail não fala de varanda.' }
      ] },
      { type: 'short_answer', prompt: 'Qual é o código da porta?', answers: ['4721B', '4721 B'] },
      { type: 'multiple_choice', prompt: "Qu'est-ce que Hugo prépare ?", options: ['Les boissons et les pizzas.', 'Un gâteau.', 'Une raclette.', 'Rien.'], answer: 0 }
    ]
  },
  listening: {
    genre: 'diálogo na rua',
    title: 'Lucas pede informação',
    speakers: [{ id: 'U', name: 'Lucas', gender: 'm' }, { id: 'P', name: 'Uma passante', gender: 'f' }],
    script: [
      { speaker: 'U', text: "Excusez-moi, madame. Je cherche la rue Marietton, s'il vous plaît." },
      { speaker: 'P', text: "La rue Marietton ? Oui, c'est tout près. Vous êtes à pied ?" },
      { speaker: 'U', text: 'Oui.' },
      { speaker: 'P', text: "Alors, continuez tout droit jusqu'à la place. Là, traversez la place et prenez la deuxième rue à gauche." },
      { speaker: 'U', text: 'La deuxième à gauche… après la pharmacie ?' },
      { speaker: 'P', text: "Non, avant la pharmacie. Il y a une banque au coin. Ensuite, c'est tout droit pendant cent mètres." },
      { speaker: 'U', text: "C'est loin ?" },
      { speaker: 'P', text: "Non, cinq minutes à pied. Mais ne prenez pas la première rue, elle va vers l'autoroute !" },
      { speaker: 'U', text: 'Merci beaucoup, madame !' },
      { speaker: 'P', text: 'Je vous en prie. Bonne soirée !' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Quelle rue Lucas doit prendre après la place ?', options: ['La deuxième à gauche.', 'La première à gauche.', 'La deuxième à droite.', 'La première à droite.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'Vrai, faux ou non mentionné?', statements: [
        { text: 'Il y a une banque au coin de la rue.', answer: 'V', explanationPt: '"Il y a une banque au coin."' },
        { text: 'La rue est après la pharmacie.', answer: 'F', explanationPt: '"Non, avant la pharmacie."' },
        { text: "C'est à quinze minutes à pied.", answer: 'F', explanationPt: 'São cinco minutos.' },
        { text: 'La dame habite dans la rue Marietton.', answer: 'NM', explanationPt: 'Não se sabe onde ela mora.' }
      ] },
      { type: 'listen_choose', audio: "Ne prenez pas la première rue.", prompt: 'O que a senhora diz?',
        options: ['Não pegue a primeira rua.', 'Pegue a primeira rua.', 'Não pegue a próxima rua.', 'Pegue a última rua.'], answer: 0 },
      { type: 'dictation', text: 'Continuez tout droit jusqu\'à la place.' },
      { type: 'dictation', text: 'Je vous en prie. Bonne soirée !' }
    ]
  },
  grammar: {
    topicId: 'imperatif',
    title: 'O imperativo',
    explanationPt: 'O **imperativo** serve para dar instruções, conselhos e ordens. Tem só **3 pessoas** e **não tem sujeito**:\n\n' +
      '- **tu**: *Tourne à droite !*\n- **nous** (= vamos…): *Prenons le bus !*\n- **vous**: *Continuez tout droit.*\n\n' +
      '**Formação:** é o presente sem o pronome. **Atenção:** verbos em **-er** (e *aller*) perdem o **-s** no *tu*: *tu tournes* → ***tourne*** ; *tu vas* → ***va***.\n\n' +
      '**Negativa:** *ne* + verbo + *pas*: *Ne prenez pas la voiture ! Ne tourne pas ici !*\n\n' +
      '**Irregulares:** *être* → sois, soyons, soyez · *avoir* → aie, ayons, ayez · *savoir* → sache, sachons, sachez.\n\n' +
      '**Pronominais:** o pronome vem depois, com hífen: *Dépêche-**toi** ! Asseyez-**vous**.* Na negativa, volta para antes: *Ne **te** dépêche pas.*',
    table: { head: ['', 'tourner', 'prendre', 'aller', 'être'], rows: [
      ['tu', 'tourne', 'prends', 'va', 'sois'], ['nous', 'tournons', 'prenons', 'allons', 'soyons'], ['vous', 'tournez', 'prenez', 'allez', 'soyez']
    ] },
    examples: [
      { fr: 'Prends la deuxième rue à gauche.', pt: 'Pegue a segunda rua à esquerda.' },
      { fr: "Descendez à l'arrêt Valmy.", pt: 'Desçam no ponto Valmy.' },
      { fr: 'Ne marchez pas sur la piste cyclable !', pt: 'Não andem na ciclovia!' },
      { fr: 'Allons-y !', pt: 'Vamos lá!' },
      { fr: 'Dépêche-toi, le bus arrive !', pt: 'Anda logo, o ônibus está chegando!' }
    ],
    ptComparison: 'No português do Brasil, o imperativo do dia a dia mistura formas ("vira à direita", "vire à direita"). Em francês, a escolha é clara: **tu** com amigos (*tourne*), **vous** com desconhecidos ou grupos (*tournez*).\n\n' +
      'O *nous* do imperativo equivale ao nosso "vamos + verbo": *Partons !* = Vamos embora! *Mangeons !* = Vamos comer!'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Passe para o imperativo (pessoa indicada).', items: [
      { text: '(tu, tourner) ___ à gauche.', answers: ['Tourne', 'tourne'] },
      { text: '(vous, prendre) ___ le métro.', answers: ['Prenez', 'prenez'] },
      { text: '(nous, aller) ___ au parc !', answers: ['Allons', 'allons'] },
      { text: '(tu, aller) ___ tout droit.', answers: ['Va', 'va'] },
      { text: '(vous, être) ___ patients !', answers: ['Soyez', 'soyez'] },
      { text: '(tu, ne pas traverser) ___ ici !', answers: ['Ne traverse pas', 'ne traverse pas'] }
    ] },
    { type: 'multiple_choice', prompt: 'Qual está correto (tu)?', options: ['Écoute !', 'Écoutes !', 'Tu écoute !', 'Écouter !'], answer: 0,
      explanationPt: 'Verbos em -er perdem o -s no imperativo com tu.' },
    { type: 'multiple_choice', prompt: '"Senta (você, tu)!"', options: ['Assieds-toi !', 'Toi assieds !', 'Assieds-te !', 'Te assieds !'], answer: 0 },
    { type: 'match', prompt: 'Ligue a instrução ao desenho mental.', pairs: [['Tournez à droite.', '→'], ['Tournez à gauche.', '←'], ['Allez tout droit.', '↑'], ['Faites demi-tour.', '↩']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: "Ne prenez pas la voiture !", translation: 'Não peguem o carro!' }
  ],
  tipForBrazilians: '**"Je vous en prie" × "De rien":** as duas respondem a *merci*. *De rien* é neutro e informal; *je vous en prie* (ou *je t\'en prie*) é mais elegante. Ouve-se também *avec plaisir* e, no Sul da França e no Québec, *bienvenue* (calcado do inglês). Mas cuidado: *je vous en prie* também pode ser "por favor, fique à vontade" ao ceder a passagem.'
});
