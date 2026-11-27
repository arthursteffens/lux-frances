LUX.registerLesson({
  id: 'a1-u04-l04', level: 'A1', unit: 4, order: 4,
  title: 'Une belle ville', titlePt: 'Uma cidade bonita',
  names: ['Lucas', 'Ana', 'Sofia', 'Lyon', 'Rome', 'Fourvière', 'Saône', 'Rhône', 'Belo Horizonte', 'Brésil'],
  introPt: 'O Lucas manda um cartão-postal para a irmã descrevendo Lyon. Para descrever, você precisa dos **adjetivos** (grande, bonito, velho…), que em francês concordam com a palavra e às vezes vêm **antes** dela.',
  objectives: [
    'Descrever uma cidade e um lugar.',
    'Fazer a concordância dos adjetivos (grand → grande, beau → belle).',
    'Saber quais adjetivos vêm antes do substantivo.'
  ],
  vocabulary: [
    { fr: 'beau / belle', pt: 'bonito / bonita, belo / bela', pos: 'adj', say: 'BÔ / BÉL', ex: 'Lyon est une belle ville.' },
    { fr: 'joli / jolie', pt: 'bonito / bonita (gracioso)', pos: 'adj', say: 'jô-LI', ex: 'Une jolie place.' },
    { fr: 'vieux / vieille', pt: 'velho / velha, antigo / antiga', pos: 'adj', say: 'VIÖ / VIÉI', ex: 'Le vieux Lyon est magnifique.' },
    { fr: 'nouveau / nouvelle', pt: 'novo / nova', pos: 'adj', say: 'nu-VÔ / nu-VÉL', ex: 'Un nouveau quartier.' },
    { fr: 'moderne', pt: 'moderno(a)', pos: 'adj', say: 'mô-DÉRRN', ex: 'Un musée moderne.' },
    { fr: 'calme', pt: 'tranquilo(a)', pos: 'adj', say: 'KALM', ex: 'Mon quartier est calme.' },
    { fr: 'animé / animée', pt: 'movimentado(a), animado(a)', pos: 'adj', say: 'a-ni-MÊ', ex: 'La rue est très animée.' },
    { fr: 'le fleuve', pt: 'o rio (grande)', g: 'm', say: 'le FLÖV', ex: 'Il y a deux fleuves à Lyon.' },
    { fr: "l'église", pt: 'a igreja', g: 'f', say: 'lê-GLIZ', ex: "L'église est sur la colline." },
    { fr: 'le musée', pt: 'o museu', g: 'm', say: 'le mü-ZÊ', ex: 'Le musée est gratuit le dimanche.' },
    { fr: 'la vue', pt: 'a vista', g: 'f', say: 'la VÜ', ex: 'La vue est magnifique.' },
    { fr: 'magnifique', pt: 'magnífico(a), lindo(a)', pos: 'adj', say: 'ma-nhi-FIK', ex: "C'est magnifique !" }
  ],
  pronunciation: {
    title: 'Beau / belle, vieux / vieille: masculino e feminino bem diferentes',
    textPt: 'Alguns adjetivos mudam muito no feminino, e o som muda junto:\n\n' +
      '- ***beau*** "BÔ" → ***belle*** "BÉL"\n' +
      '- ***nouveau*** "nu-VÔ" → ***nouvelle*** "nu-VÉL"\n' +
      '- ***vieux*** "VIÖ" → ***vieille*** "VIÉI"\n\n' +
      'E repare no **gn** de *magnifique*: soa como o nosso **nh**, "ma-nhi-FIK".',
    examples: [{ fr: 'un beau quartier', pt: 'um bairro bonito' }, { fr: 'une belle ville', pt: 'uma cidade bonita' }, { fr: 'un vieux pont', pt: 'uma ponte velha' }, { fr: 'une vieille église', pt: 'uma igreja antiga' }, { fr: 'magnifique', pt: 'gn = "nh"' }]
  },
  reading: {
    genre: 'cartão-postal',
    title: 'Une carte postale de Lyon',
    text: "Chère Ana,\n\n" +
      "Lyon est une belle ville ! Il y a deux fleuves, le Rhône et la Saône, et beaucoup de [[ponts|pontes]].\n\n" +
      "Le vieux Lyon est magnifique : les rues sont petites et très animées, avec de jolis restaurants. Sur la colline de Fourvière, il y a une grande église blanche. La vue sur la ville est superbe !\n\n" +
      "Il y a aussi des quartiers modernes, avec des musées et de grands magasins. Mon quartier, la Croix-Rousse, est plus calme.\n\n" +
      "C'est très différent de Belo Horizonte, mais j'adore !\n\n" +
      "Bisous,\nLucas",
    translationPt: 'Querida Ana,\n\n' +
      'Lyon é uma cidade bonita! Tem dois rios, o Ródano e o Saône, e muitas pontes.\n\n' +
      'A Lyon antiga é linda: as ruas são pequenas e muito movimentadas, com restaurantes bonitinhos. Na colina de Fourvière tem uma igreja grande e branca. A vista da cidade é incrível!\n\n' +
      'Também tem bairros modernos, com museus e lojas grandes. O meu bairro, a Croix-Rousse, é mais tranquilo.\n\n' +
      'É muito diferente de Belo Horizonte, mas eu adoro!\n\nBeijos,\nLucas',
    exercises: [
      { type: 'multiple_choice', prompt: 'Quantos rios tem Lyon?', options: ['Dois.', 'Um.', 'Três.', 'Nenhum.'], answer: 0,
        explanationPt: '"Il y a deux fleuves, le Rhône et la Saône".' },
      { type: 'multiple_choice', prompt: 'Como são as ruas da Lyon antiga?', options: ['Pequenas e movimentadas.', 'Grandes e tranquilas.', 'Modernas.', 'Vazias.'], answer: 0,
        explanationPt: '"les rues sont petites et très animées".' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: "Il y a une église sur la colline de Fourvière.", answer: 'V', explanationPt: '"il y a une grande église blanche".' },
        { text: 'La Croix-Rousse est très animée.', answer: 'F', explanationPt: 'O bairro dele é **mais tranquilo**: "plus calme".' },
        { text: 'Lucas aime Lyon.', answer: 'V', explanationPt: '"j\'adore !"' },
        { text: 'Il pleut à Lyon.', answer: 'NM', explanationPt: 'O cartão não fala do tempo.' }
      ] },
      { type: 'match', prompt: 'Ligue o adjetivo ao contrário.', pairs: [
        ['vieux', 'nouveau'], ['grand', 'petit'], ['calme', 'animé'], ['beau', 'laid']
      ] }
    ]
  },
  listening: {
    genre: 'diálogo',
    title: 'Lyon ou Roma?',
    speakers: [{ id: 'S', name: 'Sofia', gender: 'f' }, { id: 'U', name: 'Lucas', gender: 'm' }],
    script: [
      { speaker: 'S', text: 'Tu aimes Lyon, Lucas ?', pt: 'Você gosta de Lyon, Lucas?' },
      { speaker: 'U', text: "Oui, beaucoup ! C'est une belle ville, et elle est calme.", pt: 'Sim, muito! É uma cidade bonita, e é tranquila.' },
      { speaker: 'S', text: 'Calme ? Pour moi, non ! Rome est une très grande ville, mais Lyon aussi est animée.', pt: 'Tranquila? Para mim, não! Roma é uma cidade muito grande, mas Lyon também é movimentada.' },
      { speaker: 'U', text: 'Belo Horizonte est grande aussi, et très moderne.', pt: 'Belo Horizonte também é grande, e muito moderna.' },
      { speaker: 'S', text: "Et Rome est vieille ! Il y a de vieilles églises partout.", pt: 'E Roma é antiga! Tem igrejas antigas em todo lugar.' },
      { speaker: 'U', text: "Ici aussi : le vieux Lyon est magnifique. Tu connais Fourvière ?", pt: 'Aqui também: a Lyon antiga é linda. Você conhece Fourvière?' },
      { speaker: 'S', text: 'Non, pas encore.', pt: 'Não, ainda não.' },
      { speaker: 'U', text: "On y va samedi ? La vue est superbe !", pt: 'Vamos lá no sábado? A vista é incrível!' },
      { speaker: 'S', text: "D'accord !", pt: 'Combinado!' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'Para a Sofia, Lyon é…', options: ['movimentada.', 'tranquila.', 'feia.', 'pequena.'], answer: 0,
        explanationPt: '"Lyon aussi est animée". Para o Lucas, que vem de uma cidade grande, Lyon é tranquila; para a Sofia, não!' },
      { type: 'multiple_choice', prompt: 'O que eles combinam?', options: ['Ir a Fourvière no sábado.', 'Ir a Roma.', 'Ir ao museu.', 'Ir a Belo Horizonte.'], answer: 0,
        explanationPt: '"On y va samedi ?" — "D\'accord !"' },
      { type: 'listen_choose', audio: "C'est une belle ville.", prompt: 'Ouça e escolha a frase.',
        options: ["C'est une belle ville.", "C'est une vieille ville.", "C'est un beau village.", "C'est une grande ville."], answer: 0,
        explanationPt: '*Belle* (feminino de *beau*) vem **antes** de *ville*.' },
      { type: 'true_false_nm', prompt: 'Verdadeiro, falso ou não mencionado?', statements: [
        { text: 'Sofia connaît Fourvière.', answer: 'F', explanationPt: '"Non, pas encore." = ainda não.' },
        { text: 'Belo Horizonte est moderne.', answer: 'V', explanationPt: '"très moderne".' },
        { text: 'Sofia habite à Lyon depuis un an.', answer: 'NM', explanationPt: 'Eles não falam disso.' }
      ] },
      { type: 'dictation', text: 'La vue est superbe !', explanationPt: '*La vue* = a vista. O **u** soa "ü".' }
    ]
  },
  grammar: {
    topicId: 'adjectives',
    title: 'Adjetivos: concordância e posição',
    explanationPt: '**Concordância:** o adjetivo concorda com a palavra em gênero e número.\n' +
      '- Feminino: + **e**: *grand* → *grande*, *petit* → *petite*\n' +
      '- Plural: + **s**: *grands*, *grandes*\n' +
      '- Se já termina em **e**, não muda no feminino: *calme*, *moderne*, *magnifique*\n\n' +
      '**Feminino especial:**\n' +
      '- ***beau*** → *belle*\n' +
      '- ***nouveau*** → *nouvelle*\n' +
      '- ***vieux*** → *vieille*\n\n' +
      '**Posição:** a maioria vem **depois** da palavra (*une ville moderne*), mas alguns adjetivos curtos e muito comuns vêm **antes**. Lembre da sigla **BAGS**:\n' +
      '- **B**eleza: *beau*, *joli*\n' +
      '- **A**ge (idade): *vieux*, *nouveau*, *jeune*\n' +
      '- **G**ood (bom / mau): *bon*, *mauvais*\n' +
      '- **S**ize (tamanho): *grand*, *petit*\n\n' +
      'Antes de vogal, *beau*, *nouveau* e *vieux* viram ***bel***, ***nouvel***, ***vieil***: *un bel appartement*.',
    table: { head: ['masculino', 'feminino', 'posição', 'exemplo'], rows: [
      ['grand', 'grande', 'antes', 'une grande ville'], ['beau', 'belle', 'antes', 'une belle église'], ['vieux', 'vieille', 'antes', 'un vieux pont'],
      ['moderne', 'moderne', 'depois', 'un musée moderne'], ['animé', 'animée', 'depois', 'une rue animée'], ['calme', 'calme', 'depois', 'un quartier calme']
    ] },
    examples: [
      { fr: 'Lyon est une belle ville.', pt: 'Lyon é uma cidade bonita.' },
      { fr: 'Il y a de vieilles églises.', pt: 'Tem igrejas antigas.' },
      { fr: 'Un quartier calme.', pt: 'Um bairro tranquilo.' },
      { fr: 'Les rues sont petites et animées.', pt: 'As ruas são pequenas e movimentadas.' }
    ],
    ptComparison: 'Em português também dizemos "uma **bela** cidade" e "uma cidade **moderna**": a posição dos adjetivos franceses parece muito com a nossa.\n\n' +
      'Detalhe: no plural, quando o adjetivo vem **antes**, *des* vira ***de***: *de vieilles églises*, *de jolis restaurants*. Na fala, muita gente diz *des* mesmo.'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Concorde o adjetivo.', items: [
      { text: 'une ville ___ (grand)', answers: ['grande'] },
      { text: 'une ___ église (beau)', answers: ['belle'] },
      { text: 'des rues ___ (animé)', answers: ['animées'] },
      { text: 'une ___ maison (vieux)', answers: ['vieille'] },
      { text: 'un quartier ___ (calme)', answers: ['calme'] }
    ] },
    { type: 'multiple_choice', prompt: '"Um museu moderno."', options: ['Un musée moderne.', 'Un moderne musée.', 'Une musée moderne.', 'Un musée modern.'], answer: 0,
      explanationPt: '*Moderne* vem **depois** (não é BAGS). E *le musée* é masculino.' },
    { type: 'multiple_choice', prompt: '"Uma cidade bonita."', options: ['Une belle ville.', 'Une ville belle.', 'Une beau ville.', 'Un belle ville.'], answer: 0,
      explanationPt: '*Beau / belle* é BAGS → vem **antes**. *Ville* é feminino → *belle*.' },
    { type: 'match', prompt: 'Ligue o masculino ao feminino.', pairs: [
      ['beau', 'belle'], ['nouveau', 'nouvelle'], ['vieux', 'vieille'], ['petit', 'petite']
    ] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'Lyon est une belle ville.', translation: 'Lyon é uma cidade bonita.' }
  ],
  tipForBrazilians: '**Lyon tem dois rios:** o Ródano (*le Rhône*) e o Saône (*la Saône*). Em francês, rio grande que deságua no mar é ***le fleuve***; rio menor é ***la rivière***.\n\n' +
    'Para elogiar uma cidade, um prato ou uma paisagem, os franceses adoram:\n' +
    '- ***magnifique*** = lindo, magnífico\n' +
    '- ***superbe*** = incrível\n' +
    '- ***très joli*** = muito bonito'
});
