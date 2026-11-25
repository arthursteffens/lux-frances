/* Dicionário de verbos — D a L */
(function () {
  var V = LUX.verb;

  V('danser', 'dançar', 'A1', 900, 'Mover o corpo no ritmo da música.', 'Bouger le corps au rythme de la musique.', [
    ['On danse la samba au Brésil.', 'No Brasil se dança samba.'],
    ['Elle danse depuis l\'âge de six ans.', 'Ela dança desde os seis anos.'],
    ['Nous avons dansé toute la nuit.', 'Dançamos a noite toda.']
  ], [['valser', 'valsar']]);

  V('décider', 'decidir', 'A2', 130, 'Tomar uma decisão; resolver.', 'Prendre une décision ; choisir.', [
    ['J\'ai décidé de rester à Lyon.', 'Decidi ficar em Lyon.'],
    ['C\'est toi qui décides.', 'É você quem decide.'],
    ['Nous décidons ensemble du menu.', 'Decidimos juntos o cardápio.']
  ], [['choisir', 'escolher'], ['résoudre', 'resolver'], ['trancher', 'bater o martelo']]);

  V('découvrir', 'descobrir', 'A2', 190, 'Encontrar algo desconhecido; conhecer pela primeira vez.', 'Trouver ce qui était inconnu ; voir pour la première fois.', [
    ['Nous découvrons la ville à vélo.', 'Descobrimos a cidade de bicicleta.'],
    ['Il a découvert la vérité.', 'Ele descobriu a verdade.'],
    ['J\'aime découvrir de nouvelles cuisines.', 'Gosto de descobrir novas culinárias.']
  ], [['trouver', 'encontrar'], ['explorer', 'explorar']], { like: 'ouvrir' });

  V('décrire', 'descrever', 'A2', 400, 'Contar em detalhes como é algo ou alguém.', 'Représenter par la parole ou l\'écrit.', [
    ['Décrivez votre ville en cinq phrases.', 'Descreva sua cidade em cinco frases.'],
    ['Elle décrit très bien ses personnages.', 'Ela descreve muito bem seus personagens.'],
    ['Le témoin a décrit le voleur.', 'A testemunha descreveu o ladrão.']
  ], [['dépeindre', 'retratar'], ['raconter', 'contar']], { like: 'écrire' });

  V('demander', 'pedir; perguntar', 'A1', 21, 'Fazer uma pergunta ou um pedido.', 'Poser une question ; solliciter.', [
    ['Je peux vous demander l\'heure ?', 'Posso lhe perguntar as horas?'],
    ['Elle m\'a demandé un service.', 'Ela me pediu um favor.'],
    ['Demande à Léa, elle sait tout.', 'Pergunte para a Léa, ela sabe tudo.']
  ], [['interroger', 'interrogar'], ['réclamer', 'reclamar, exigir']],
  { note: 'Falso amigo parcial: "demander" = pedir/perguntar, não "demandar" (exigir).' });

  V('se dépêcher', 'apressar-se', 'A2', 900, 'Fazer algo rápido; correr para não se atrasar.', 'Faire vite ; se hâter.', [
    ['Dépêche-toi, on va rater le train !', 'Anda logo, vamos perder o trem!'],
    ['Je me dépêche, j\'arrive !', 'Estou me apressando, já vou!'],
    ['Ils se sont dépêchés de finir.', 'Eles se apressaram para terminar.']
  ], [['se presser', 'apressar-se'], ['se hâter', 'apressar-se (formal)']]);

  V('descendre', 'descer', 'A2', 160, 'Ir de cima para baixo; sair de um veículo.', 'Aller de haut en bas ; sortir d\'un véhicule.', [
    ['Je descends du bus à la prochaine.', 'Desço do ônibus na próxima.'],
    ['Nous sommes descendus à pied.', 'Descemos a pé.'],
    ['Il a descendu les valises.', 'Ele desceu as malas.']
  ], [['baisser', 'abaixar']], { aux: 'être', note: 'Com objeto direto usa "avoir": "j\'ai descendu les valises".' });

  V('devenir', 'tornar-se; virar', 'A2', 44, 'Passar a ser.', 'Commencer à être.', [
    ['Elle veut devenir médecin.', 'Ela quer se tornar médica.'],
    ['Il est devenu très célèbre.', 'Ele ficou muito famoso.'],
    ['Qu\'est-ce que tu deviens ?', 'O que você tem feito da vida?']
  ], [['se transformer', 'transformar-se']], { like: 'venir', aux: 'être' });

  V('devoir', 'dever; ter que', 'A1', 11, 'Ter obrigação; estar devendo; indica probabilidade.', 'Être obligé de ; avoir une dette ; exprime la probabilité.', [
    ['Je dois partir à six heures.', 'Tenho que sair às seis.'],
    ['Tu me dois vingt euros.', 'Você me deve vinte euros.'],
    ['Il doit être fatigué après ce voyage.', 'Ele deve estar cansado depois dessa viagem.']
  ], [['falloir', 'ser preciso'], ['être obligé de', 'ser obrigado a']]);

  V('dîner', 'jantar', 'A1', 900, 'Fazer a refeição da noite.', 'Prendre le repas du soir.', [
    ['Nous dînons vers vingt heures.', 'Jantamos por volta das vinte horas.'],
    ['Tu veux dîner avec nous ?', 'Você quer jantar com a gente?'],
    ['Ils ont dîné au restaurant.', 'Eles jantaram no restaurante.']
  ], [['souper', 'cear (Bélgica, Suíça, Québec: jantar)']]);

  V('dire', 'dizer', 'A1', 4, 'Exprimir com palavras.', 'Exprimer par la parole.', [
    ['Qu\'est-ce que tu dis ?', 'O que você está dizendo?'],
    ['Elle m\'a dit bonjour.', 'Ela me disse bom-dia.'],
    ['Comment dit-on « saudade » en français ?', 'Como se diz "saudade" em francês?']
  ], [['affirmer', 'afirmar'], ['déclarer', 'declarar'], ['raconter', 'contar']]);

  V('disparaître', 'desaparecer', 'B1', 350, 'Deixar de ser visto; deixar de existir.', 'Cesser d\'être visible ; cesser d\'exister.', [
    ['Mon chat a disparu depuis hier.', 'Meu gato sumiu desde ontem.'],
    ['Le soleil disparaît derrière les nuages.', 'O sol desaparece atrás das nuvens.'],
    ['Ces traditions disparaissent peu à peu.', 'Essas tradições desaparecem aos poucos.']
  ], [["s'évanouir", 'sumir'], ['s\'effacer', 'apagar-se']], { like: 'connaître' });

  V('donner', 'dar', 'A1', 14, 'Passar algo a alguém.', 'Remettre quelque chose à quelqu\'un.', [
    ['Je te donne mon numéro.', 'Te dou meu número.'],
    ['Elle a donné un livre à son frère.', 'Ela deu um livro ao irmão.'],
    ['La fenêtre donne sur la rue.', 'A janela dá para a rua.']
  ], [['offrir', 'oferecer'], ['remettre', 'entregar']]);

  V('dormir', 'dormir', 'A1', 200, 'Estar em estado de sono.', 'Être dans le sommeil.', [
    ['Je dors huit heures par nuit.', 'Durmo oito horas por noite.'],
    ['Tu as bien dormi ?', 'Você dormiu bem?'],
    ['Le bébé dort dans sa chambre.', 'O bebê dorme no quarto dele.']
  ], [["s'endormir", 'adormecer'], ['se reposer', 'descansar']], { pattern: 'partir' });

  V('se doucher', 'tomar banho (de chuveiro)', 'A1', 2000, 'Lavar-se no chuveiro.', 'Se laver sous la douche.', [
    ['Je me douche le matin.', 'Tomo banho de manhã.'],
    ['Elle s\'est douchée après le sport.', 'Ela tomou banho depois do esporte.'],
    ['Douche-toi vite, on est en retard !', 'Tome banho rápido, estamos atrasados!']
  ], [['se laver', 'lavar-se'], ['prendre une douche', 'tomar uma ducha']]);

  /* E */
  V('écouter', 'escutar; ouvir', 'A1', 160, 'Prestar atenção a um som ou a alguém.', 'Prêter l\'oreille à un son ou à quelqu\'un.', [
    ['J\'écoute de la musique dans le métro.', 'Escuto música no metrô.'],
    ['Écoutez bien la question.', 'Escutem bem a pergunta.'],
    ['Tu ne m\'écoutes jamais !', 'Você nunca me escuta!']
  ], [['entendre', 'ouvir'], ['prêter attention', 'prestar atenção']]);

  V('écrire', 'escrever', 'A1', 38, 'Representar palavras com letras.', 'Tracer des mots avec des lettres.', [
    ['J\'écris un e-mail à mon professeur.', 'Escrevo um e-mail para meu professor.'],
    ['Comment ça s\'écrit ?', 'Como se escreve isso?'],
    ['Victor Hugo a écrit « Les Misérables ».', 'Victor Hugo escreveu "Os Miseráveis".']
  ], [['rédiger', 'redigir'], ['noter', 'anotar']]);

  V('emmener', 'levar (alguém consigo)', 'A2', 500, 'Levar uma pessoa consigo de um lugar para outro.', 'Mener quelqu\'un avec soi d\'un lieu à un autre.', [
    ['Je t\'emmène au cinéma ce soir.', 'Te levo ao cinema hoje à noite.'],
    ['Elle emmène son chien partout.', 'Ela leva o cachorro para todo lado.'],
    ['Nous emmènerons les enfants à la plage.', 'Levaremos as crianças à praia.']
  ], [['amener', 'trazer'], ['accompagner', 'acompanhar']]);

  V('employer', 'empregar; usar', 'B1', 450, 'Usar; dar trabalho a alguém.', 'Utiliser ; faire travailler quelqu\'un.', [
    ['Cette usine emploie deux cents personnes.', 'Esta fábrica emprega duzentas pessoas.'],
    ['On emploie ce mot à l\'oral.', 'Usa-se esta palavra na fala.'],
    ['Il emploiera la méthode habituelle.', 'Ele usará o método de sempre.']
  ], [['utiliser', 'utilizar'], ['embaucher', 'contratar']]);

  V('emprunter', 'pegar emprestado', 'A2', 800, 'Pedir algo emprestado; seguir um caminho.', 'Se faire prêter quelque chose ; prendre un chemin.', [
    ['Je peux emprunter ton vélo ?', 'Posso pegar sua bicicleta emprestada?'],
    ['Elle a emprunté trois livres à la bibliothèque.', 'Ela pegou três livros na biblioteca.'],
    ['Empruntez la sortie numéro deux.', 'Pegue a saída número dois.']
  ], [['prendre', 'pegar']], { note: 'Atenção: "emprunter" = pegar emprestado; "prêter" = emprestar a alguém.' });

  V('entendre', 'ouvir; entender-se', 'A1', 33, 'Perceber sons pelo ouvido.', 'Percevoir par l\'ouïe.', [
    ['Tu entends ce bruit ?', 'Você está ouvindo esse barulho?'],
    ['Je n\'entends rien, parle plus fort.', 'Não ouço nada, fale mais alto.'],
    ['On s\'entend très bien, Léa et moi.', 'A Léa e eu nos damos muito bem.']
  ], [['écouter', 'escutar'], ['percevoir', 'perceber']],
  { note: '"Entendre" é ouvir; "compreender" é "comprendre". "S\'entendre" = dar-se bem.' });

  V('entrer', 'entrar', 'A1', 49, 'Passar para dentro.', 'Passer à l\'intérieur.', [
    ['Entrez, la porte est ouverte !', 'Entrem, a porta está aberta!'],
    ['Elle est entrée dans la boulangerie.', 'Ela entrou na padaria.'],
    ['Nous entrons par la porte de derrière.', 'Entramos pela porta dos fundos.']
  ], [['pénétrer', 'penetrar']], { aux: 'être' });

  V('envoyer', 'enviar; mandar', 'A2', 200, 'Fazer chegar algo ou alguém a outro lugar.', 'Faire partir quelque chose ou quelqu\'un vers un lieu.', [
    ['J\'envoie un message à Hugo.', 'Mando uma mensagem para o Hugo.'],
    ['Elle a envoyé le colis hier.', 'Ela enviou o pacote ontem.'],
    ['Je t\'enverrai les photos ce soir.', 'Te mando as fotos hoje à noite.']
  ], [['expédier', 'expedir'], ['adresser', 'endereçar']]);

  V('espérer', 'esperar (ter esperança)', 'A2', 170, 'Desejar e acreditar que algo vai acontecer.', 'Souhaiter et croire qu\'une chose arrivera.', [
    ['J\'espère que tu vas bien.', 'Espero que você esteja bem.'],
    ['Nous espérons vous revoir bientôt.', 'Esperamos revê-los em breve.'],
    ['Elle espère trouver un travail.', 'Ela espera encontrar um trabalho.']
  ], [['souhaiter', 'desejar'], ['attendre', 'aguardar']],
  { note: '"Esperar" no sentido de aguardar é "attendre"; no sentido de ter esperança é "espérer".' });

  V('essayer', 'tentar; experimentar', 'A2', 110, 'Fazer uma tentativa; provar uma roupa.', 'Faire une tentative ; mettre un vêtement pour voir.', [
    ['J\'essaie de comprendre.', 'Estou tentando entender.'],
    ['Je peux essayer cette veste ?', 'Posso experimentar esta jaqueta?'],
    ['Essayez encore une fois !', 'Tentem mais uma vez!']
  ], [['tenter', 'tentar'], ['tester', 'testar']]);

  V('éteindre', 'apagar; desligar', 'A2', 700, 'Fazer parar uma luz, um fogo ou um aparelho.', 'Faire cesser une lumière, un feu, un appareil.', [
    ['Éteins la lumière en sortant.', 'Apague a luz ao sair.'],
    ['Les pompiers ont éteint le feu.', 'Os bombeiros apagaram o fogo.'],
    ['J\'éteins mon portable au cinéma.', 'Desligo o celular no cinema.']
  ], [['couper', 'desligar'], ['fermer', 'fechar']], { like: 'peindre' });

  V('être', 'ser; estar (auxiliar)', 'A1', 1, 'Existir; ter uma qualidade ou estado; auxiliar dos tempos compostos.', 'Exister ; avoir une qualité, un état ; auxiliaire des temps composés.', [
    ['Je suis brésilien.', 'Sou brasileiro.'],
    ['Nous sommes fatigués.', 'Estamos cansados.'],
    ['Elle est partie hier.', 'Ela partiu ontem.']
  ], [['exister', 'existir'], ['se trouver', 'encontrar-se']]);

  V('étudier', 'estudar', 'A1', 350, 'Dedicar-se a aprender algo.', 'Chercher à apprendre ; examiner.', [
    ['J\'étudie le français le soir.', 'Estudo francês à noite.'],
    ['Elle a étudié la médecine à Lyon.', 'Ela estudou medicina em Lyon.'],
    ['Nous étudiions ensemble au lycée.', 'Nós estudávamos juntos no ensino médio.']
  ], [['apprendre', 'aprender'], ['examiner', 'examinar']]);

  V('expliquer', 'explicar', 'A2', 120, 'Tornar algo claro e compreensível.', 'Rendre clair, faire comprendre.', [
    ['Tu peux m\'expliquer cette règle ?', 'Você pode me explicar esta regra?'],
    ['Le professeur explique très bien.', 'O professor explica muito bem.'],
    ['Je vous expliquerai tout demain.', 'Vou lhes explicar tudo amanhã.']
  ], [['éclaircir', 'esclarecer'], ['détailler', 'detalhar']]);

  /* F */
  V('faire', 'fazer', 'A1', 3, 'Realizar uma ação; produzir; também indica o tempo (clima).', 'Réaliser une action ; produire ; s\'emploie pour la météo.', [
    ['Qu\'est-ce que tu fais ce week-end ?', 'O que você vai fazer neste fim de semana?'],
    ['Il fait beau aujourd\'hui.', 'Hoje está fazendo tempo bom.'],
    ['Nous faisons du sport le samedi.', 'Fazemos esporte aos sábados.']
  ], [['réaliser', 'realizar'], ['fabriquer', 'fabricar'], ['effectuer', 'efetuar']]);

  V('falloir', 'ser preciso; precisar', 'A2', 15, 'Ser necessário (só se usa com "il").', 'Être nécessaire (verbe impersonnel).', [
    ['Il faut partir maintenant.', 'É preciso sair agora.'],
    ['Il me faut une heure pour venir.', 'Preciso de uma hora para vir.'],
    ['Il faudra réserver une table.', 'Vai ser preciso reservar uma mesa.']
  ], [['devoir', 'dever'], ['être nécessaire', 'ser necessário']]);

  V('fermer', 'fechar', 'A1', 300, 'Impedir a passagem; encerrar.', 'Boucher une ouverture ; mettre fin.', [
    ['Ferme la fenêtre, il fait froid.', 'Feche a janela, está frio.'],
    ['La pharmacie ferme à dix-neuf heures.', 'A farmácia fecha às dezenove horas.'],
    ['Le restaurant a fermé l\'année dernière.', 'O restaurante fechou no ano passado.']
  ], [['clore', 'encerrar'], ['verrouiller', 'trancar']]);

  V('finir', 'terminar; acabar', 'A1', 47, 'Chegar ao fim; completar.', 'Arriver au bout ; achever.', [
    ['Je finis le travail à dix-huit heures.', 'Termino o trabalho às dezoito horas.'],
    ['Le film finit bien.', 'O filme termina bem.'],
    ['Tu as fini tes devoirs ?', 'Você terminou a lição de casa?']
  ], [['terminer', 'terminar'], ['achever', 'concluir']]);

  /* G */
  V('gagner', 'ganhar; vencer', 'A2', 180, 'Receber dinheiro pelo trabalho; vencer uma disputa.', 'Recevoir un salaire ; remporter une victoire.', [
    ['Elle gagne bien sa vie.', 'Ela ganha bem a vida.'],
    ['Notre équipe a gagné le match.', 'Nosso time ganhou a partida.'],
    ['On gagne du temps en prenant le métro.', 'A gente ganha tempo pegando o metrô.']
  ], [['remporter', 'conquistar'], ['vaincre', 'vencer'], ['toucher', 'receber (dinheiro)']]);

  V('garder', 'guardar; manter; cuidar', 'A2', 160, 'Conservar; tomar conta de alguém.', 'Conserver ; surveiller, prendre soin de.', [
    ['Garde la monnaie !', 'Pode ficar com o troco!'],
    ['Ma mère garde les enfants le mercredi.', 'Minha mãe cuida das crianças às quartas.'],
    ['Nous avons gardé de bons souvenirs.', 'Guardamos boas lembranças.']
  ], [['conserver', 'conservar'], ['surveiller', 'vigiar']]);

  V('goûter', 'provar; lanchar', 'A2', 1200, 'Experimentar o sabor de algo; fazer o lanche da tarde.', 'Sentir la saveur ; prendre le goûter.', [
    ['Goûte cette sauce, elle est délicieuse !', 'Prove este molho, está delicioso!'],
    ['Les enfants goûtent à seize heures.', 'As crianças lancham às dezesseis horas.'],
    ['J\'ai goûté le fromage local.', 'Provei o queijo local.']
  ], [['déguster', 'degustar'], ['essayer', 'experimentar']]);

  V('grandir', 'crescer', 'A2', 600, 'Ficar maior; desenvolver-se.', 'Devenir plus grand.', [
    ['J\'ai grandi à São Paulo.', 'Cresci em São Paulo.'],
    ['Comme tu as grandi !', 'Como você cresceu!'],
    ['Les enfants grandissent vite.', 'As crianças crescem rápido.']
  ], [['pousser', 'crescer (plantas, cabelo)'], ['se développer', 'desenvolver-se']]);

  V('grossir', 'engordar', 'A2', 2000, 'Ganhar peso; aumentar de volume.', 'Prendre du poids ; augmenter de volume.', [
    ['J\'ai grossi pendant les fêtes.', 'Engordei durante as festas.'],
    ['Le fromage fait grossir ?', 'Queijo engorda?'],
    ['Le problème grossit chaque jour.', 'O problema aumenta a cada dia.']
  ], [['prendre du poids', 'ganhar peso'], ['augmenter', 'aumentar']]);

  /* H */
  V('habiter', 'morar; habitar', 'A1', 400, 'Ter residência num lugar.', 'Avoir sa demeure quelque part.', [
    ['J\'habite à Lyon depuis deux ans.', 'Moro em Lyon há dois anos.'],
    ['Vous habitez dans quel quartier ?', 'Em que bairro o senhor mora?'],
    ['Nous habitions près de la mer.', 'Nós morávamos perto do mar.']
  ], [['vivre', 'viver'], ['résider', 'residir'], ['loger', 'alojar-se']]);

  V("s'habiller", 'vestir-se', 'A1', 1100, 'Pôr a roupa.', 'Mettre ses vêtements.', [
    ['Je m\'habille en cinq minutes.', 'Eu me visto em cinco minutos.'],
    ['Elle s\'habille toujours en noir.', 'Ela sempre se veste de preto.'],
    ['Habillez-vous chaudement !', 'Agasalhem-se bem!']
  ], [['se vêtir', 'vestir-se (formal)'], ['mettre', 'pôr (roupa)']]);

  /* I */
  V("s'inquiéter", 'preocupar-se', 'B1', 800, 'Ficar preocupado ou ansioso.', 'Se faire du souci.', [
    ['Ne t\'inquiète pas, tout va bien.', 'Não se preocupe, está tudo bem.'],
    ['Ma mère s\'inquiète quand je rentre tard.', 'Minha mãe se preocupa quando volto tarde.'],
    ['Nous nous sommes inquiétés pour toi.', 'Ficamos preocupados com você.']
  ], [['se soucier', 'preocupar-se'], ["s'angoisser", 'angustiar-se']]);

  V("s'intéresser", 'interessar-se', 'A2', 600, 'Ter interesse por algo.', 'Avoir de l\'intérêt pour.', [
    ['Je m\'intéresse à l\'histoire de France.', 'Eu me interesso pela história da França.'],
    ['Il ne s\'intéresse pas au football.', 'Ele não se interessa por futebol.'],
    ['Intéressez-vous aux autres cultures.', 'Interessem-se por outras culturas.']
  ], [['se passionner', 'apaixonar-se (por um assunto)']]);

  V('inviter', 'convidar', 'A1', 500, 'Pedir a alguém que venha a um evento ou lugar.', 'Prier quelqu\'un de venir.', [
    ['Je t\'invite à dîner samedi.', 'Te convido para jantar no sábado.'],
    ['Nous avons invité nos voisins.', 'Convidamos nossos vizinhos.'],
    ['C\'est moi qui invite !', 'Hoje é por minha conta!']
  ], [['convier', 'convidar (formal)']]);

  /* J */
  V('jeter', 'jogar fora; atirar', 'A2', 400, 'Lançar; pôr no lixo.', 'Lancer ; mettre à la poubelle.', [
    ['Ne jette pas tes papiers par terre !', 'Não jogue seus papéis no chão!'],
    ['Je jette les vieux journaux.', 'Jogo fora os jornais velhos.'],
    ['Il a jeté la balle au chien.', 'Ele jogou a bola para o cachorro.']
  ], [['lancer', 'lançar'], ['balancer', 'jogar (familiar)']]);

  V('jouer', 'jogar; brincar; tocar (instrumento); atuar', 'A1', 50, 'Participar de um jogo; tocar um instrumento; interpretar um papel.', 'Pratiquer un jeu ; se servir d\'un instrument ; interpréter un rôle.', [
    ['Je joue au foot le dimanche.', 'Jogo futebol aos domingos.'],
    ['Elle joue du piano depuis dix ans.', 'Ela toca piano há dez anos.'],
    ['Les enfants jouent dans le parc.', 'As crianças brincam no parque.']
  ], [["s'amuser", 'brincar'], ['interpréter', 'interpretar']],
  { note: '"Jouer à" + jogo/esporte (jouer au tennis); "jouer de" + instrumento (jouer de la guitare).' });

  /* L */
  V('laisser', 'deixar', 'A2', 24, 'Não levar consigo; permitir; abandonar.', 'Ne pas emporter ; permettre ; abandonner.', [
    ['J\'ai laissé mon parapluie au bureau.', 'Deixei meu guarda-chuva no escritório.'],
    ['Laisse-moi tranquille !', 'Me deixe em paz!'],
    ['Mes parents me laissent sortir le soir.', 'Meus pais me deixam sair à noite.']
  ], [['abandonner', 'abandonar'], ['permettre', 'permitir'], ['quitter', 'deixar (um lugar, alguém)']]);

  V('lancer', 'lançar; jogar', 'B1', 350, 'Atirar com força; dar início a algo.', 'Envoyer avec force ; mettre en route.', [
    ['Lance-moi le ballon !', 'Jogue a bola para mim!'],
    ['L\'entreprise lance un nouveau produit.', 'A empresa lança um novo produto.'],
    ['Nous lançons le projet en mars.', 'Lançamos o projeto em março.']
  ], [['jeter', 'atirar'], ['démarrer', 'iniciar']]);

  V('laver', 'lavar', 'A1', 800, 'Limpar com água.', 'Nettoyer avec de l\'eau.', [
    ['Je lave la vaisselle après le dîner.', 'Lavo a louça depois do jantar.'],
    ['Il faut laver ce pull à la main.', 'Este suéter tem que ser lavado à mão.'],
    ['Nous avons lavé la voiture.', 'Lavamos o carro.']
  ], [['nettoyer', 'limpar'], ['rincer', 'enxaguar']]);

  V('se laver', 'lavar-se', 'A1', 900, 'Limpar o próprio corpo.', 'Nettoyer son corps.', [
    ['Lave-toi les mains avant de manger.', 'Lave as mãos antes de comer.'],
    ['Je me lave les cheveux tous les jours.', 'Lavo o cabelo todos os dias.'],
    ['Les enfants se sont lavés.', 'As crianças se lavaram.']
  ], [['se doucher', 'tomar banho'], ['faire sa toilette', 'fazer a higiene']]);

  V('se lever', 'levantar-se', 'A1', 300, 'Sair da cama; pôr-se de pé.', 'Sortir du lit ; se mettre debout.', [
    ['Je me lève à sept heures.', 'Eu me levanto às sete.'],
    ['Lève-toi, tu vas être en retard !', 'Levante, você vai se atrasar!'],
    ['Le soleil se lève à six heures.', 'O sol nasce às seis.']
  ], [['se réveiller', 'acordar'], ['se mettre debout', 'ficar de pé']]);

  V('lire', 'ler', 'A1', 39, 'Percorrer com os olhos um texto, entendendo-o.', 'Parcourir des yeux un texte en le comprenant.', [
    ['Je lis le journal le matin.', 'Leio o jornal de manhã.'],
    ['Tu as lu ce livre ?', 'Você leu este livro?'],
    ['Lisez le texte à voix haute.', 'Leiam o texto em voz alta.']
  ], [['parcourir', 'percorrer'], ['déchiffrer', 'decifrar']]);

  V('louer', 'alugar; elogiar', 'A2', 900, 'Dar ou tomar algo em aluguel.', 'Donner ou prendre en location.', [
    ['Nous louons un appartement à Lyon.', 'Alugamos um apartamento em Lyon.'],
    ['On peut louer des vélos à la gare.', 'Dá para alugar bicicletas na estação.'],
    ['Ils ont loué une voiture pour les vacances.', 'Eles alugaram um carro para as férias.']
  ], [['prendre en location', 'alugar']]);
})();
