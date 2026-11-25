/* Dicionário de verbos — S a Z */
(function () {
  var V = LUX.verb;

  V('savoir', 'saber', 'A1', 8, 'Ter conhecimento de algo; ter uma habilidade.', 'Avoir connaissance de ; être capable de.', [
    ['Je ne sais pas où il habite.', 'Não sei onde ele mora.'],
    ['Tu sais nager ?', 'Você sabe nadar?'],
    ['Nous avons su la nouvelle hier.', 'Ficamos sabendo da notícia ontem.']
  ], [['connaître', 'conhecer'], ['être au courant', 'estar sabendo']],
  { note: '"Savoir" + informação ou habilidade; "connaître" + pessoa, lugar ou coisa.' });

  V('sembler', 'parecer', 'B1', 26, 'Dar a impressão de.', 'Avoir l\'air ; paraître.', [
    ['Tu sembles fatigué.', 'Você parece cansado.'],
    ['Il me semble que tu as raison.', 'Parece-me que você tem razão.'],
    ['Ce problème semble simple.', 'Este problema parece simples.']
  ], [['paraître', 'parecer'], ['avoir l\'air', 'parecer']]);

  V('sentir', 'sentir; cheirar', 'A2', 53, 'Perceber pelos sentidos; ter um cheiro.', 'Percevoir par les sens ; avoir une odeur.', [
    ['Ça sent bon ici !', 'Que cheiro bom aqui!'],
    ['Je sens le vent froid.', 'Sinto o vento frio.'],
    ['Sens cette rose !', 'Cheira esta rosa!']
  ], [['percevoir', 'perceber'], ['éprouver', 'experimentar (sensação)']], { pattern: 'partir' });

  V('se sentir', 'sentir-se', 'A2', 300, 'Estar num certo estado físico ou emocional.', 'Éprouver un état physique ou moral.', [
    ['Je me sens bien à Lyon.', 'Eu me sinto bem em Lyon.'],
    ['Tu te sens mieux aujourd\'hui ?', 'Você está se sentindo melhor hoje?'],
    ['Elle s\'est sentie seule au début.', 'Ela se sentiu sozinha no começo.']
  ], [['aller', 'estar (de saúde)']], { pattern: 'partir' });

  V('servir', 'servir', 'B1', 200, 'Pôr comida ou bebida à disposição; ser útil.', 'Présenter un plat ; être utile.', [
    ['On sert le dîner à vingt heures.', 'O jantar é servido às vinte horas.'],
    ['À quoi sert ce bouton ?', 'Para que serve este botão?'],
    ['Servez-vous, je vous en prie.', 'Sirvam-se, por favor.']
  ], [['être utile', 'ser útil'], ['présenter', 'apresentar']], { pattern: 'partir' });

  V('sortir', 'sair', 'A1', 34, 'Ir para fora; sair para se divertir.', 'Aller dehors ; aller se distraire.', [
    ['Je sors avec des amis ce soir.', 'Vou sair com amigos hoje à noite.'],
    ['Elle est sortie à midi.', 'Ela saiu ao meio-dia.'],
    ['Sors la poubelle, s\'il te plaît.', 'Leve o lixo para fora, por favor.']
  ], [['partir', 'partir'], ['quitter', 'deixar']], { pattern: 'partir', aux: 'être', note: 'Com objeto direto usa "avoir": "j\'ai sorti la poubelle".' });

  V('souffrir', 'sofrer', 'B1', 450, 'Sentir dor física ou moral.', 'Éprouver une douleur physique ou morale.', [
    ['Il souffre du dos.', 'Ele sofre das costas.'],
    ['Elle a beaucoup souffert.', 'Ela sofreu muito.'],
    ['Les plantes souffrent de la chaleur.', 'As plantas sofrem com o calor.']
  ], [['endurer', 'suportar'], ['avoir mal', 'sentir dor']], { like: 'ouvrir' });

  V('sourire', 'sorrir', 'A2', 600, 'Fazer uma expressão alegre com os lábios.', 'Faire une expression de gaieté avec les lèvres.', [
    ['Souris pour la photo !', 'Sorria para a foto!'],
    ['Elle sourit toujours.', 'Ela sempre sorri.'],
    ['Il m\'a souri dans la rue.', 'Ele sorriu para mim na rua.']
  ], [['rire', 'rir']], { like: 'rire' });

  V('se souvenir', 'lembrar-se', 'A2', 250, 'Ter na memória.', 'Avoir en mémoire.', [
    ['Je me souviens de mon premier jour à Lyon.', 'Eu me lembro do meu primeiro dia em Lyon.'],
    ['Tu te souviens de moi ?', 'Você se lembra de mim?'],
    ['Souviens-toi de ce moment.', 'Lembre-se deste momento.']
  ], [['se rappeler', 'lembrar-se'], ['retenir', 'guardar na memória']], { like: 'venir',
    note: '"Se souvenir DE quelque chose", mas "se rappeler quelque chose" (sem "de").' });

  V('suivre', 'seguir; acompanhar', 'A2', 46, 'Ir atrás; acompanhar; frequentar (um curso).', 'Aller derrière ; accompagner ; assister à (un cours).', [
    ['Suivez le guide, s\'il vous plaît.', 'Sigam o guia, por favor.'],
    ['Je suis un cours de français en ligne.', 'Faço um curso de francês on-line.'],
    ['Tu suis l\'actualité ?', 'Você acompanha as notícias?']
  ], [['accompagner', 'acompanhar'], ['poursuivre', 'perseguir']],
  { note: 'Atenção: "je suis" é tanto de "être" (sou) quanto de "suivre" (sigo). O contexto decide.' });

  /* T */
  V('téléphoner', 'telefonar', 'A1', 600, 'Falar com alguém pelo telefone.', 'Communiquer par téléphone.', [
    ['Je téléphone à ma sœur ce soir.', 'Ligo para minha irmã hoje à noite.'],
    ['Elle a téléphoné au médecin.', 'Ela telefonou para o médico.'],
    ['Téléphone-moi quand tu arrives.', 'Me liga quando chegar.']
  ], [['appeler', 'ligar'], ['passer un coup de fil', 'dar um telefonema']]);

  V('tenir', 'segurar; manter', 'A2', 23, 'Ter na mão; manter; aguentar.', 'Avoir à la main ; garder ; résister.', [
    ['Tiens, c\'est pour toi !', 'Toma, é para você!'],
    ['Tiens bien la rampe.', 'Segure bem o corrimão.'],
    ['Je tiens à te remercier.', 'Faço questão de te agradecer.']
  ], [['garder', 'manter'], ['saisir', 'segurar']]);

  V('terminer', 'terminar', 'A2', 200, 'Chegar ao fim de algo.', 'Mener à son terme.', [
    ['J\'ai terminé mon rapport.', 'Terminei meu relatório.'],
    ['Le spectacle se termine à vingt-trois heures.', 'O espetáculo termina às vinte e três horas.'],
    ['Terminons cette discussion demain.', 'Vamos terminar esta discussão amanhã.']
  ], [['finir', 'terminar'], ['achever', 'concluir']]);

  V('tomber', 'cair', 'A2', 120, 'Ir ao chão; acontecer (uma data).', 'Être entraîné vers le sol ; avoir lieu (une date).', [
    ['Attention, tu vas tomber !', 'Cuidado, você vai cair!'],
    ['Elle est tombée dans l\'escalier.', 'Ela caiu na escada.'],
    ['Noël tombe un jeudi cette année.', 'O Natal cai numa quinta este ano.']
  ], [['chuter', 'cair (formal)'], ['s\'effondrer', 'desabar']], { aux: 'être' });

  V('toucher', 'tocar; receber (dinheiro)', 'B1', 200, 'Pôr a mão em algo; emocionar; receber um pagamento.', 'Mettre la main sur ; émouvoir ; recevoir de l\'argent.', [
    ['Ne touche pas, c\'est chaud !', 'Não toque, está quente!'],
    ['Son histoire m\'a beaucoup touché.', 'A história dele me tocou muito.'],
    ['Elle touche son salaire le premier du mois.', 'Ela recebe o salário no primeiro dia do mês.']
  ], [['effleurer', 'roçar'], ['émouvoir', 'emocionar']],
  { note: 'Tocar um instrumento é "jouer de": "jouer du piano", não "toucher le piano".' });

  V('tourner', 'virar; girar; filmar', 'A2', 180, 'Mudar de direção; girar; filmar.', 'Changer de direction ; pivoter ; filmer.', [
    ['Tournez à gauche au feu.', 'Vire à esquerda no semáforo.'],
    ['La Terre tourne autour du Soleil.', 'A Terra gira em torno do Sol.'],
    ['Ils tournent un film à Lyon.', 'Eles estão filmando um filme em Lyon.']
  ], [['virer', 'virar'], ['pivoter', 'girar'], ['filmer', 'filmar']]);

  V('traduire', 'traduzir', 'A2', 900, 'Passar um texto de uma língua para outra.', 'Faire passer d\'une langue dans une autre.', [
    ['Tu peux traduire ce message ?', 'Você pode traduzir esta mensagem?'],
    ['Elle traduit des livres du portugais.', 'Ela traduz livros do português.'],
    ['Ce roman a été traduit en vingt langues.', 'Este romance foi traduzido para vinte línguas.']
  ], [['interpréter', 'interpretar']], { like: 'conduire' });

  V('travailler', 'trabalhar', 'A1', 54, 'Exercer uma atividade profissional; esforçar-se.', 'Exercer une activité professionnelle.', [
    ['Je travaille dans une agence de design.', 'Trabalho numa agência de design.'],
    ['Nous travaillons de neuf heures à dix-huit heures.', 'Trabalhamos das nove às dezoito horas.'],
    ['Elle a travaillé à Paris pendant cinq ans.', 'Ela trabalhou em Paris durante cinco anos.']
  ], [['bosser', 'trampar (familiar)'], ['œuvrer', 'trabalhar (formal)']]);

  V('se tromper', 'enganar-se; errar', 'A2', 500, 'Cometer um erro.', 'Faire une erreur.', [
    ['Je me suis trompé de numéro.', 'Liguei para o número errado.'],
    ['Tu te trompes, ce n\'est pas lui.', 'Você está enganado, não é ele.'],
    ['Excusez-moi, je me suis trompée de porte.', 'Desculpe, errei de porta.']
  ], [['faire une erreur', 'cometer um erro'], ['confondre', 'confundir']]);

  V('trouver', 'encontrar; achar', 'A1', 13, 'Descobrir o que se procurava; ter uma opinião.', 'Découvrir ce qu\'on cherchait ; estimer.', [
    ['J\'ai trouvé un appartement !', 'Encontrei um apartamento!'],
    ['Je trouve ce quartier très agréable.', 'Acho este bairro muito agradável.'],
    ['Où se trouve la gare ?', 'Onde fica a estação?']
  ], [['découvrir', 'descobrir'], ['retrouver', 'reencontrar'], ['penser', 'achar']]);

  /* U */
  V('utiliser', 'usar; utilizar', 'A2', 160, 'Servir-se de algo.', 'Se servir de.', [
    ['J\'utilise mon vélo pour aller au travail.', 'Uso a bicicleta para ir ao trabalho.'],
    ['Comment on utilise cette machine ?', 'Como se usa esta máquina?'],
    ['Nous utilisons cette application tous les jours.', 'Usamos este aplicativo todos os dias.']
  ], [['employer', 'empregar'], ['se servir de', 'servir-se de']]);

  /* V */
  V('vendre', 'vender', 'A2', 180, 'Trocar algo por dinheiro.', 'Céder contre de l\'argent.', [
    ['Ils vendent leur voiture.', 'Eles estão vendendo o carro.'],
    ['On vend des fruits au marché.', 'Vendem-se frutas na feira.'],
    ['J\'ai vendu mon vieux téléphone.', 'Vendi meu celular velho.']
  ], [['céder', 'ceder'], ['commercialiser', 'comercializar']]);

  V('venir', 'vir', 'A1', 10, 'Deslocar-se para o lugar onde está quem fala; ter origem.', 'Se déplacer vers le lieu où l\'on est ; être originaire de.', [
    ['Tu viens avec nous ?', 'Você vem com a gente?'],
    ['Je viens du Brésil.', 'Venho do Brasil.'],
    ['Elle vient de partir.', 'Ela acabou de sair.']
  ], [['arriver', 'chegar'], ['se rendre', 'dirigir-se']],
  { note: '"Venir de" + infinitivo = acabar de: "je viens de manger" (acabei de comer).' });

  V('visiter', 'visitar (um lugar)', 'A1', 500, 'Ir ver um lugar.', 'Parcourir un lieu pour le découvrir.', [
    ['Nous visitons le musée des Confluences.', 'Visitamos o museu das Confluências.'],
    ['Tu as visité le vieux Lyon ?', 'Você visitou a parte antiga de Lyon?'],
    ['Je voudrais visiter la Bretagne.', 'Eu gostaria de visitar a Bretanha.']
  ], [['découvrir', 'descobrir'], ['parcourir', 'percorrer']],
  { note: 'Para pessoas, use "rendre visite à": "je rends visite à ma tante" (não "je visite ma tante").' });

  V('vivre', 'viver', 'A2', 37, 'Estar vivo; morar; passar por uma experiência.', 'Être en vie ; habiter ; faire l\'expérience de.', [
    ['Je vis en France depuis deux ans.', 'Vivo na França há dois anos.'],
    ['Ils vivent ensemble.', 'Eles moram juntos.'],
    ['Nous avons vécu une belle aventure.', 'Vivemos uma bela aventura.']
  ], [['habiter', 'morar'], ['exister', 'existir']]);

  V('voir', 'ver', 'A1', 7, 'Perceber pelos olhos; encontrar alguém.', 'Percevoir par les yeux ; rencontrer.', [
    ['Je vois la mer depuis l\'hôtel.', 'Vejo o mar do hotel.'],
    ['On se voit demain ?', 'A gente se vê amanhã?'],
    ['Tu as vu le dernier film de Céline Sciamma ?', 'Você viu o último filme da Céline Sciamma?']
  ], [['apercevoir', 'avistar'], ['regarder', 'olhar'], ['observer', 'observar']]);

  V('voler', 'voar; roubar', 'B1', 600, 'Mover-se no ar; tirar algo de alguém.', 'Se déplacer dans l\'air ; dérober.', [
    ['Les oiseaux volent haut.', 'Os pássaros voam alto.'],
    ['On m\'a volé mon portefeuille !', 'Roubaram minha carteira!'],
    ['L\'avion vole au-dessus des Alpes.', 'O avião voa acima dos Alpes.']
  ], [['dérober', 'furtar'], ['planer', 'planar']]);

  V('vouloir', 'querer', 'A1', 9, 'Ter vontade ou intenção.', 'Avoir la volonté ou l\'envie de.', [
    ['Je veux apprendre le français.', 'Quero aprender francês.'],
    ['Tu veux un café ?', 'Você quer um café?'],
    ['Je voudrais une baguette, s\'il vous plaît.', 'Eu queria uma baguete, por favor.']
  ], [['désirer', 'desejar'], ['souhaiter', 'desejar']],
  { note: 'Para pedir com educação, use o condicional: "je voudrais" (eu gostaria / eu queria).' });

  V('voyager', 'viajar', 'A1', 800, 'Ir de um lugar a outro, geralmente longe.', 'Faire un voyage.', [
    ['J\'adore voyager en train.', 'Adoro viajar de trem.'],
    ['Nous voyageons beaucoup en été.', 'Viajamos muito no verão.'],
    ['Elle a voyagé dans toute l\'Europe.', 'Ela viajou pela Europa inteira.']
  ], [['se déplacer', 'deslocar-se'], ['partir', 'partir']]);
})();
