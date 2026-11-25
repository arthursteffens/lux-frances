/* Dicionário de verbos — M a R */
(function () {
  var V = LUX.verb;

  V('maigrir', 'emagrecer', 'A2', 2000, 'Perder peso.', 'Perdre du poids.', [
    ['Il a maigri de cinq kilos.', 'Ele emagreceu cinco quilos.'],
    ['Je veux maigrir avant l\'été.', 'Quero emagrecer antes do verão.'],
    ['Elle maigrit parce qu\'elle court beaucoup.', 'Ela está emagrecendo porque corre muito.']
  ], [['perdre du poids', 'perder peso'], ['mincir', 'afinar']]);

  V('manger', 'comer', 'A1', 57, 'Ingerir alimentos.', 'Avaler des aliments.', [
    ['Nous mangeons à midi et demi.', 'Comemos ao meio-dia e meia.'],
    ['Tu as déjà mangé des escargots ?', 'Você já comeu escargô?'],
    ['On mange bien dans ce restaurant.', 'Come-se bem neste restaurante.']
  ], [['se nourrir', 'alimentar-se'], ['déguster', 'degustar'], ['avaler', 'engolir']]);

  V('manquer', 'faltar; sentir falta; perder', 'B1', 140, 'Não estar presente; fazer falta; perder (trem, aula).', 'Faire défaut ; être absent ; rater.', [
    ['Tu me manques beaucoup.', 'Sinto muito a sua falta.'],
    ['Il manque deux chaises.', 'Faltam duas cadeiras.'],
    ['J\'ai manqué le dernier métro.', 'Perdi o último metrô.']
  ], [['rater', 'perder (trem, ônibus)'], ['faire défaut', 'fazer falta']],
  { note: 'Ordem invertida em relação ao português: "Tu me manques" = EU sinto a SUA falta.' });

  V('marcher', 'andar; caminhar; funcionar', 'A1', 160, 'Deslocar-se a pé; funcionar (aparelho).', 'Se déplacer à pied ; fonctionner.', [
    ['Je marche une heure par jour.', 'Caminho uma hora por dia.'],
    ['Mon ordinateur ne marche plus.', 'Meu computador não funciona mais.'],
    ['Ça marche ! On se voit à huit heures.', 'Combinado! A gente se vê às oito.']
  ], [['se promener', 'passear'], ['fonctionner', 'funcionar']]);

  V('se marier', 'casar-se', 'A2', 900, 'Unir-se em casamento.', 'S\'unir par le mariage.', [
    ['Ils se marient en septembre.', 'Eles vão se casar em setembro.'],
    ['Mes parents se sont mariés en 1990.', 'Meus pais se casaram em 1990.'],
    ['Elle s\'est mariée avec un Belge.', 'Ela se casou com um belga.']
  ], [['épouser', 'desposar'], ['s\'unir', 'unir-se']]);

  V('mener', 'levar; conduzir', 'B1', 380, 'Conduzir; levar a algum lugar ou resultado.', 'Conduire ; faire aboutir.', [
    ['Ce chemin mène à la plage.', 'Este caminho leva à praia.'],
    ['Elle mène une vie tranquille.', 'Ela leva uma vida tranquila.'],
    ['Cette discussion ne mène à rien.', 'Esta discussão não leva a nada.']
  ], [['conduire', 'conduzir'], ['diriger', 'dirigir']]);

  V('mentir', 'mentir', 'A2', 700, 'Dizer algo que se sabe que é falso.', 'Dire ce qu\'on sait être faux.', [
    ['Il ment tout le temps.', 'Ele mente o tempo todo.'],
    ['Tu m\'as menti !', 'Você mentiu para mim!'],
    ['Je ne mens jamais à mes amis.', 'Nunca minto para meus amigos.']
  ], [['tromper', 'enganar'], ['inventer', 'inventar']], { pattern: 'partir' });

  V('mettre', 'pôr; colocar; vestir', 'A1', 17, 'Colocar num lugar; vestir; levar (tempo).', 'Placer ; revêtir ; employer (du temps).', [
    ['Mets ton manteau, il fait froid.', 'Põe o casaco, está frio.'],
    ['J\'ai mis les clés sur la table.', 'Coloquei as chaves na mesa.'],
    ['Je mets vingt minutes pour aller au travail.', 'Levo vinte minutos para ir ao trabalho.']
  ], [['placer', 'colocar'], ['poser', 'pousar'], ['porter', 'usar (roupa)']]);

  V('monter', 'subir', 'A2', 150, 'Ir para cima; entrar num veículo.', 'Aller vers le haut ; entrer dans un véhicule.', [
    ['Je monte au troisième étage.', 'Subo ao terceiro andar.'],
    ['Elle est montée dans le train.', 'Ela subiu no trem.'],
    ['Tu peux monter les courses ?', 'Você pode levar as compras lá para cima?']
  ], [['grimper', 'escalar'], ['gravir', 'galgar']], { aux: 'être', note: 'Com objeto direto usa "avoir": "j\'ai monté les courses".' });

  V('montrer', 'mostrar', 'A1', 51, 'Fazer ver; indicar.', 'Faire voir ; indiquer.', [
    ['Montre-moi tes photos !', 'Me mostra suas fotos!'],
    ['Il m\'a montré le chemin.', 'Ele me mostrou o caminho.'],
    ['Cette étude montre que...', 'Este estudo mostra que...']
  ], [['indiquer', 'indicar'], ['présenter', 'apresentar'], ['prouver', 'provar']]);

  V('mourir', 'morrer', 'B1', 200, 'Deixar de viver.', 'Cesser de vivre.', [
    ['Ma grand-mère est morte en 2015.', 'Minha avó morreu em 2015.'],
    ['Je meurs de faim !', 'Estou morrendo de fome!'],
    ['Les plantes meurent sans eau.', 'As plantas morrem sem água.']
  ], [['décéder', 'falecer'], ['disparaître', 'desaparecer']]);

  /* N */
  V('nager', 'nadar', 'A1', 1500, 'Deslocar-se na água com movimentos do corpo.', 'Se déplacer dans l\'eau.', [
    ['Je nage à la piscine le mardi.', 'Nado na piscina às terças.'],
    ['Nous nageons dans la mer.', 'Nadamos no mar.'],
    ['Tu sais nager ?', 'Você sabe nadar?']
  ], [['se baigner', 'banhar-se']]);

  V('naître', 'nascer', 'A2', 300, 'Vir ao mundo.', 'Venir au monde.', [
    ['Je suis né à Curitiba.', 'Nasci em Curitiba.'],
    ['Leur fille est née en mai.', 'A filha deles nasceu em maio.'],
    ['Une amitié est née entre eux.', 'Nasceu uma amizade entre eles.']
  ], [['venir au monde', 'vir ao mundo']]);

  V('neiger', 'nevar', 'A2', 2000, 'Cair neve (só se usa com "il").', 'Tomber de la neige (verbe impersonnel).', [
    ['Il neige à la montagne.', 'Está nevando na montanha.'],
    ['Il a neigé toute la nuit.', 'Nevou a noite toda.'],
    ['Il neigera demain matin.', 'Vai nevar amanhã de manhã.']
  ], []);

  V('nettoyer', 'limpar', 'A2', 900, 'Tirar a sujeira.', 'Rendre propre.', [
    ['Je nettoie la cuisine le samedi.', 'Limpo a cozinha aos sábados.'],
    ['Il faut nettoyer la salle de bains.', 'É preciso limpar o banheiro.'],
    ['Nous nettoierons après la fête.', 'Vamos limpar depois da festa.']
  ], [['laver', 'lavar'], ['ranger', 'arrumar']]);

  /* O */
  V('obéir', 'obedecer', 'B1', 1500, 'Seguir uma ordem ou uma regra.', 'Se soumettre à un ordre, à une règle.', [
    ['Le chien obéit à son maître.', 'O cachorro obedece ao dono.'],
    ['Il faut obéir au code de la route.', 'É preciso obedecer ao código de trânsito.'],
    ['Les enfants n\'obéissent pas toujours.', 'As crianças nem sempre obedecem.']
  ], [['respecter', 'respeitar'], ['se soumettre', 'submeter-se']]);

  V('obtenir', 'obter; conseguir', 'B1', 230, 'Conseguir o que se deseja.', 'Parvenir à avoir ce qu\'on désire.', [
    ['Elle a obtenu son diplôme en juin.', 'Ela obteve o diploma em junho.'],
    ['Comment obtenir un visa ?', 'Como obter um visto?'],
    ['Nous obtenons de bons résultats.', 'Obtemos bons resultados.']
  ], [['recevoir', 'receber'], ['gagner', 'ganhar'], ['acquérir', 'adquirir']], { like: 'tenir' });

  V("s'occuper", 'ocupar-se; cuidar', 'A2', 400, 'Encarregar-se de algo ou de alguém.', 'Prendre en charge, prendre soin de.', [
    ['Je m\'occupe des billets.', 'Eu cuido das passagens.'],
    ['Elle s\'occupe de sa mère malade.', 'Ela cuida da mãe doente.'],
    ['Occupe-toi de tes affaires !', 'Cuide da sua vida!']
  ], [['prendre soin', 'cuidar'], ['gérer', 'gerenciar']]);

  V('offrir', 'oferecer; dar de presente', 'A2', 180, 'Dar algo como presente; propor.', 'Donner en cadeau ; proposer.', [
    ['Je t\'offre un café ?', 'Te ofereço um café?'],
    ['Il m\'a offert des fleurs.', 'Ele me deu flores de presente.'],
    ['Ce poste offre de bonnes conditions.', 'Este cargo oferece boas condições.']
  ], [['donner', 'dar'], ['proposer', 'propor']], { like: 'ouvrir' });

  V('oublier', 'esquecer', 'A1', 55, 'Deixar de lembrar; deixar algo por descuido.', 'Ne plus se souvenir ; laisser par inattention.', [
    ['J\'ai oublié son nom.', 'Esqueci o nome dele.'],
    ['N\'oublie pas ton passeport !', 'Não esqueça seu passaporte!'],
    ['Nous oublions toujours quelque chose.', 'A gente sempre esquece alguma coisa.']
  ], [['omettre', 'omitir'], ['négliger', 'negligenciar']]);

  V('ouvrir', 'abrir', 'A1', 58, 'Fazer com que algo deixe de estar fechado.', 'Faire qu\'une chose ne soit plus fermée.', [
    ['Ouvre la fenêtre, s\'il te plaît.', 'Abra a janela, por favor.'],
    ['Le musée ouvre à dix heures.', 'O museu abre às dez.'],
    ['Elle a ouvert une boulangerie.', 'Ela abriu uma padaria.']
  ], [['déverrouiller', 'destrancar'], ['inaugurer', 'inaugurar']]);

  /* P */
  V('paraître', 'parecer; ser publicado', 'B1', 250, 'Dar a impressão de; ser publicado.', 'Sembler ; être publié.', [
    ['Il paraît fatigué.', 'Ele parece cansado.'],
    ['Son livre paraîtra en mars.', 'O livro dele será publicado em março.'],
    ['Il paraît qu\'il va neiger.', 'Dizem que vai nevar.']
  ], [['sembler', 'parecer'], ['avoir l\'air', 'parecer']], { like: 'connaître' });

  V('parler', 'falar', 'A1', 16, 'Expressar-se com palavras; conversar.', 'S\'exprimer par la parole.', [
    ['Je parle portugais et un peu français.', 'Falo português e um pouco de francês.'],
    ['Nous parlons souvent de politique.', 'Falamos muitas vezes de política.'],
    ['Parlez plus lentement, s\'il vous plaît.', 'Fale mais devagar, por favor.']
  ], [['dire', 'dizer'], ['discuter', 'conversar'], ['bavarder', 'bater papo']]);

  V('partager', 'compartilhar; dividir', 'A2', 400, 'Dividir em partes; ter algo em comum com alguém.', 'Diviser en parts ; avoir en commun.', [
    ['Je partage un appartement avec Léa.', 'Divido um apartamento com a Léa.'],
    ['Nous partageons l\'addition ?', 'Vamos dividir a conta?'],
    ['Il a partagé la vidéo sur les réseaux.', 'Ele compartilhou o vídeo nas redes.']
  ], [['diviser', 'dividir'], ['répartir', 'repartir']]);

  V('partir', 'partir; ir embora; sair', 'A1', 30, 'Sair de um lugar; ir embora.', 'Quitter un lieu ; s\'en aller.', [
    ['Je pars en vacances demain.', 'Saio de férias amanhã.'],
    ['Le train part à huit heures.', 'O trem parte às oito.'],
    ['Ils sont partis sans dire au revoir.', 'Eles foram embora sem se despedir.']
  ], [["s'en aller", 'ir embora'], ['quitter', 'deixar'], ['sortir', 'sair']], { pattern: 'partir', aux: 'être' });

  V('passer', 'passar', 'A1', 18, 'Atravessar; passar (tempo); fazer (prova); dar uma passada.', 'Traverser ; employer du temps ; se présenter à un examen.', [
    ['Je passe chez toi ce soir.', 'Passo na sua casa hoje à noite.'],
    ['Nous avons passé une semaine à Nice.', 'Passamos uma semana em Nice.'],
    ['Elle passe un examen demain.', 'Ela faz uma prova amanhã.']
  ], [['traverser', 'atravessar'], ['s\'écouler', 'transcorrer']],
  { note: 'Com "être" no sentido de passar por um lugar ("je suis passé chez toi"); com "avoir" quando tem objeto direto ("j\'ai passé un examen"). "Passer un examen" = fazer uma prova, não necessariamente passar!' });

  V('payer', 'pagar', 'A1', 220, 'Dar dinheiro em troca de algo.', 'Donner de l\'argent en échange de quelque chose.', [
    ['Je paie par carte.', 'Pago com cartão.'],
    ['Tu as payé combien ?', 'Quanto você pagou?'],
    ['Nous paierons le loyer lundi.', 'Vamos pagar o aluguel na segunda.']
  ], [['régler', 'acertar (uma conta)'], ['verser', 'depositar']]);

  V('peindre', 'pintar', 'B1', 900, 'Cobrir com tinta; fazer um quadro.', 'Couvrir de peinture ; représenter par la peinture.', [
    ['Nous peignons la chambre en bleu.', 'Pintamos o quarto de azul.'],
    ['Monet a peint des nymphéas.', 'Monet pintou ninfeias.'],
    ['Elle peint le week-end.', 'Ela pinta nos fins de semana.']
  ], [['dessiner', 'desenhar'], ['colorer', 'colorir']]);

  V('penser', 'pensar; achar', 'A1', 20, 'Refletir; ter uma opinião.', 'Réfléchir ; avoir une opinion.', [
    ['Je pense à toi.', 'Penso em você.'],
    ['Qu\'est-ce que tu penses de ce film ?', 'O que você acha deste filme?'],
    ['Je pense que c\'est une bonne idée.', 'Acho que é uma boa ideia.']
  ], [['croire', 'achar'], ['réfléchir', 'refletir'], ['estimer', 'estimar']]);

  V('perdre', 'perder', 'A2', 45, 'Deixar de ter; não ganhar.', 'Ne plus avoir ; être vaincu.', [
    ['J\'ai perdu mon portefeuille.', 'Perdi minha carteira.'],
    ['Notre équipe perd souvent.', 'Nosso time perde muitas vezes.'],
    ['Ne perds pas de temps !', 'Não perca tempo!']
  ], [['égarer', 'extraviar'], ['rater', 'perder (oportunidade)']]);

  V('permettre', 'permitir', 'B1', 59, 'Dar autorização; tornar possível.', 'Autoriser ; rendre possible.', [
    ['Mes parents ne me permettent pas de sortir.', 'Meus pais não me permitem sair.'],
    ['Ce billet permet de visiter trois musées.', 'Este ingresso permite visitar três museus.'],
    ['Vous permettez que je m\'assoie ?', 'O senhor permite que eu me sente?']
  ], [['autoriser', 'autorizar'], ['laisser', 'deixar']], { like: 'mettre' });

  V('plaire', 'agradar', 'B1', 300, 'Ser agradável a alguém.', 'Être agréable à quelqu\'un.', [
    ['Ce film m\'a beaucoup plu.', 'Gostei muito deste filme.'],
    ['Lyon me plaît énormément.', 'Gosto demais de Lyon.'],
    ['Un café, s\'il vous plaît.', 'Um café, por favor.']
  ], [['aimer', 'gostar'], ['charmer', 'encantar']],
  { note: '"S\'il vous plaît" vem deste verbo: literalmente "se lhe agrada".' });

  V('pleurer', 'chorar', 'A2', 820, 'Derramar lágrimas por emoção, tristeza ou dor.', 'Verser des larmes sous l\'effet d\'une émotion.', [
    ['Le bébé pleure toute la nuit.', 'O bebê chora a noite toda.'],
    ['Elle a pleuré de joie.', 'Ela chorou de alegria.'],
    ['Ne pleure pas, tout ira bien.', 'Não chore, vai dar tudo certo.']
  ], [['sangloter', 'soluçar'], ['larmoyer', 'lacrimejar']]);

  V('pleuvoir', 'chover', 'A2', 900, 'Cair chuva (só se usa com "il").', 'Tomber de la pluie (verbe impersonnel).', [
    ['Il pleut depuis ce matin.', 'Está chovendo desde hoje de manhã.'],
    ['Il a beaucoup plu hier.', 'Choveu muito ontem.'],
    ['Prends un parapluie, il va pleuvoir.', 'Leve um guarda-chuva, vai chover.']
  ], [['bruiner', 'garoar'], ['pleuvoter', 'chuviscar']]);

  V('porter', 'levar; carregar; usar (roupa)', 'A2', 31, 'Segurar e transportar; usar no corpo.', 'Tenir et transporter ; avoir sur soi.', [
    ['Je porte des lunettes.', 'Uso óculos.'],
    ['Tu peux porter ce carton ?', 'Você pode carregar esta caixa?'],
    ['Elle porte une robe rouge.', 'Ela está usando um vestido vermelho.']
  ], [['transporter', 'transportar'], ['mettre', 'vestir']]);

  V('poser', 'pôr; colocar; fazer (pergunta)', 'A2', 120, 'Colocar sobre algo; fazer uma pergunta.', 'Mettre sur ; formuler une question.', [
    ['Pose ton sac ici.', 'Ponha a bolsa aqui.'],
    ['Je peux vous poser une question ?', 'Posso lhe fazer uma pergunta?'],
    ['Ça ne pose aucun problème.', 'Isso não é problema nenhum.']
  ], [['mettre', 'pôr'], ['placer', 'colocar'], ['déposer', 'depositar']]);

  V('pouvoir', 'poder; conseguir', 'A1', 5, 'Ter a capacidade ou a permissão.', 'Avoir la capacité ou la permission.', [
    ['Je peux entrer ?', 'Posso entrar?'],
    ['Nous ne pouvons pas venir samedi.', 'Não podemos vir no sábado.'],
    ['Tu pourrais m\'aider ?', 'Você poderia me ajudar?']
  ], [['être capable de', 'ser capaz de'], ['avoir le droit de', 'ter o direito de']]);

  V('préférer', 'preferir', 'A1', 260, 'Gostar mais de uma coisa do que de outra.', 'Aimer mieux.', [
    ['Je préfère le thé au café.', 'Prefiro chá a café.'],
    ['Nous préférons rester à la maison.', 'Preferimos ficar em casa.'],
    ['Qu\'est-ce que tu préfères ?', 'O que você prefere?']
  ], [['aimer mieux', 'gostar mais'], ['choisir', 'escolher']]);

  V('prendre', 'pegar; tomar', 'A1', 12, 'Segurar; pegar um transporte; comer ou beber.', 'Saisir ; utiliser un moyen de transport ; manger ou boire.', [
    ['Je prends le métro tous les jours.', 'Pego o metrô todos os dias.'],
    ['Qu\'est-ce que vous prenez ?', 'O que o senhor vai querer?'],
    ['Elle a pris une photo de la cathédrale.', 'Ela tirou uma foto da catedral.']
  ], [['saisir', 'agarrar'], ['attraper', 'pegar'], ['emporter', 'levar']]);

  V('préparer', 'preparar', 'A1', 200, 'Deixar pronto; cozinhar.', 'Rendre prêt ; cuisiner.', [
    ['Je prépare le dîner.', 'Estou preparando o jantar.'],
    ['Elle prépare un examen important.', 'Ela está se preparando para uma prova importante.'],
    ['Nous avons préparé nos valises.', 'Fizemos nossas malas.']
  ], [['organiser', 'organizar'], ['cuisiner', 'cozinhar']]);

  V('présenter', 'apresentar', 'A1', 140, 'Mostrar; fazer duas pessoas se conhecerem.', 'Montrer ; faire connaître une personne à une autre.', [
    ['Je te présente ma colocataire, Léa.', 'Te apresento minha colega de apartamento, a Léa.'],
    ['Il présente le journal de vingt heures.', 'Ele apresenta o jornal das vinte horas.'],
    ['Présentez-vous en quelques mots.', 'Apresente-se em poucas palavras.']
  ], [['montrer', 'mostrar'], ['introduire', 'introduzir']]);

  V('prévoir', 'prever; planejar', 'B1', 350, 'Imaginar com antecedência; organizar.', 'Imaginer à l\'avance ; organiser.', [
    ['La météo prévoit de la pluie.', 'A previsão do tempo prevê chuva.'],
    ['Qu\'est-ce que tu as prévu ce soir ?', 'O que você planejou para hoje à noite?'],
    ['Nous prévoirons une salle plus grande.', 'Vamos providenciar uma sala maior.']
  ], [['planifier', 'planejar'], ['anticiper', 'antecipar']], { like: 'voir', override: { futurStem: 'prévoir' } });

  V('se promener', 'passear', 'A2', 900, 'Andar por prazer.', 'Marcher pour le plaisir.', [
    ['Nous nous promenons au bord du Rhône.', 'Passeamos à beira do Ródano.'],
    ['Je me promène avec mon chien.', 'Passeio com meu cachorro.'],
    ['Ils se sont promenés dans le vieux Lyon.', 'Eles passearam pela parte antiga de Lyon.']
  ], [['flâner', 'flanar'], ['marcher', 'caminhar']]);

  V('promettre', 'prometer', 'B1', 400, 'Comprometer-se a fazer algo.', 'S\'engager à faire quelque chose.', [
    ['Je te promets de venir.', 'Te prometo que vou.'],
    ['Il a promis d\'appeler.', 'Ele prometeu ligar.'],
    ['Promets-moi d\'être prudent.', 'Me prometa que vai ter cuidado.']
  ], [["s'engager", 'comprometer-se'], ['jurer', 'jurar']], { like: 'mettre' });

  V('prononcer', 'pronunciar', 'A2', 900, 'Articular os sons de uma palavra.', 'Articuler les sons d\'un mot.', [
    ['Comment on prononce ce mot ?', 'Como se pronuncia esta palavra?'],
    ['Nous prononçons mal le « r ».', 'Pronunciamos mal o "r".'],
    ['Il a prononcé un discours.', 'Ele fez um discurso.']
  ], [['articuler', 'articular'], ['dire', 'dizer']]);

  V('protéger', 'proteger', 'B1', 450, 'Defender de um perigo.', 'Mettre à l\'abri d\'un danger.', [
    ['Il faut protéger la nature.', 'É preciso proteger a natureza.'],
    ['Nous protégeons nos données.', 'Protegemos nossos dados.'],
    ['Cette crème protège du soleil.', 'Este creme protege do sol.']
  ], [['défendre', 'defender'], ['préserver', 'preservar']]);

  /* Q */
  V('quitter', 'deixar; sair de', 'A2', 120, 'Sair de um lugar; separar-se de alguém.', 'Partir d\'un lieu ; se séparer de quelqu\'un.', [
    ['J\'ai quitté le Brésil en 2024.', 'Deixei o Brasil em 2024.'],
    ['Elle quitte le bureau à dix-huit heures.', 'Ela sai do escritório às dezoito horas.'],
    ['Ne quittez pas, je vous passe le service.', 'Não desligue, vou transferir para o setor.']
  ], [['partir', 'partir'], ['abandonner', 'abandonar'], ['laisser', 'deixar']],
  { note: '"Quitter" sempre pede objeto direto: "je quitte la maison" (não "je quitte de").' });

  /* R */
  V('raconter', 'contar (uma história)', 'A2', 200, 'Narrar fatos ou uma história.', 'Faire le récit de.', [
    ['Raconte-moi ton voyage !', 'Me conta da sua viagem!'],
    ['Mon grand-père racontait des histoires.', 'Meu avô contava histórias.'],
    ['Qu\'est-ce que tu racontes ?', 'Do que você está falando?']
  ], [['narrer', 'narrar'], ['relater', 'relatar']]);

  V('ranger', 'arrumar; guardar', 'A2', 800, 'Pôr as coisas no lugar.', 'Mettre en ordre ; mettre à sa place.', [
    ['Range ta chambre !', 'Arrume seu quarto!'],
    ['Nous rangeons la vaisselle.', 'Guardamos a louça.'],
    ['J\'ai rangé les livres sur l\'étagère.', 'Guardei os livros na prateleira.']
  ], [['organiser', 'organizar'], ['ordonner', 'ordenar']]);

  V('rappeler', 'ligar de volta; lembrar', 'A2', 180, 'Telefonar de novo; fazer lembrar.', 'Téléphoner de nouveau ; faire revenir à la mémoire.', [
    ['Je vous rappelle dans cinq minutes.', 'Ligo de volta em cinco minutos.'],
    ['Rappelle-moi d\'acheter du lait.', 'Me lembre de comprar leite.'],
    ['Cette chanson me rappelle mon enfance.', 'Esta música me lembra minha infância.']
  ], [['retéléphoner', 'telefonar de novo'], ['évoquer', 'evocar']]);

  V('recevoir', 'receber', 'A2', 60, 'Obter algo que é enviado ou dado; acolher.', 'Obtenir ce qui est envoyé ou donné ; accueillir.', [
    ['J\'ai reçu ton message.', 'Recebi sua mensagem.'],
    ['Nous recevons des amis ce soir.', 'Recebemos amigos hoje à noite.'],
    ['Elle reçoit beaucoup de lettres.', 'Ela recebe muitas cartas.']
  ], [['obtenir', 'obter'], ['accueillir', 'acolher']]);

  V('reconnaître', 'reconhecer', 'B1', 150, 'Identificar alguém ou algo; admitir.', 'Identifier ; admettre.', [
    ['Je ne t\'ai pas reconnu avec ces lunettes !', 'Não te reconheci com esses óculos!'],
    ['Il reconnaît son erreur.', 'Ele reconhece o erro.'],
    ['On reconnaît son accent brésilien.', 'Dá para reconhecer o sotaque brasileiro dele.']
  ], [['identifier', 'identificar'], ['admettre', 'admitir'], ['avouer', 'confessar']], { like: 'connaître' });

  V('réfléchir', 'refletir; pensar', 'A2', 300, 'Pensar com atenção antes de decidir.', 'Penser avec attention.', [
    ['Je vais réfléchir à ta proposition.', 'Vou pensar na sua proposta.'],
    ['Réfléchis avant de répondre.', 'Pense antes de responder.'],
    ['Nous réfléchissons à un nouveau projet.', 'Estamos pensando num novo projeto.']
  ], [['penser', 'pensar'], ['méditer', 'meditar']]);

  V('refuser', 'recusar', 'A2', 200, 'Não aceitar; dizer não.', 'Ne pas accepter ; dire non.', [
    ['Il a refusé l\'invitation.', 'Ele recusou o convite.'],
    ['Je refuse de répondre.', 'Eu me recuso a responder.'],
    ['Elle refuse toujours le dessert.', 'Ela sempre recusa a sobremesa.']
  ], [['rejeter', 'rejeitar'], ['décliner', 'declinar']]);

  V('regarder', 'olhar; assistir', 'A1', 41, 'Dirigir o olhar; assistir (TV, filme).', 'Porter la vue sur ; être tourné vers.', [
    ['Je regarde une série le soir.', 'Assisto a uma série à noite.'],
    ['Regarde ! Il neige !', 'Olha! Está nevando!'],
    ['Ça ne te regarde pas.', 'Isso não é da sua conta.']
  ], [['observer', 'observar'], ['contempler', 'contemplar']]);

  V('rejoindre', 'encontrar-se com; juntar-se a', 'B1', 300, 'Ir ao encontro de alguém; unir-se a um grupo.', 'Aller retrouver quelqu\'un ; s\'unir à un groupe.', [
    ['Je te rejoins au café dans dix minutes.', 'Te encontro no café em dez minutos.'],
    ['Elle a rejoint une association.', 'Ela entrou numa associação.'],
    ['Rejoignez-nous sur la terrasse !', 'Juntem-se a nós na varanda!']
  ], [['retrouver', 'reencontrar'], ['rattraper', 'alcançar']], { like: 'joindre' });

  V('remercier', 'agradecer', 'A2', 300, 'Dizer obrigado.', 'Dire merci.', [
    ['Je vous remercie de votre aide.', 'Agradeço sua ajuda.'],
    ['Elle a remercié tout le monde.', 'Ela agradeceu a todos.'],
    ['Remercie ta mère pour le gâteau.', 'Agradeça à sua mãe pelo bolo.']
  ], [['dire merci', 'dizer obrigado']]);

  V('remplir', 'encher; preencher', 'A2', 600, 'Tornar cheio; completar um formulário.', 'Rendre plein ; compléter un formulaire.', [
    ['Remplissez ce formulaire, s\'il vous plaît.', 'Preencha este formulário, por favor.'],
    ['Il remplit les verres.', 'Ele enche os copos.'],
    ['La salle s\'est remplie très vite.', 'A sala encheu muito rápido.']
  ], [['compléter', 'completar'], ['combler', 'preencher (um vazio)']]);

  V('rencontrer', 'encontrar; conhecer (alguém)', 'A2', 90, 'Encontrar por acaso; conhecer alguém pela primeira vez.', 'Se trouver en présence de quelqu\'un ; faire connaissance.', [
    ['J\'ai rencontré Léa à l\'université.', 'Conheci a Léa na universidade.'],
    ['Nous rencontrons des problèmes techniques.', 'Estamos enfrentando problemas técnicos.'],
    ['Ils se sont rencontrés à Lyon.', 'Eles se conheceram em Lyon.']
  ], [['croiser', 'cruzar com'], ['retrouver', 'reencontrar'], ['connaître', 'conhecer']]);

  V('rendre', 'devolver; tornar', 'A2', 40, 'Devolver; fazer ficar (de certo modo).', 'Restituer ; faire devenir.', [
    ['Je te rends ton livre demain.', 'Te devolvo seu livro amanhã.'],
    ['Cette nouvelle me rend heureux.', 'Esta notícia me deixa feliz.'],
    ['Elle rend visite à sa grand-mère.', 'Ela visita a avó.']
  ], [['restituer', 'restituir'], ['retourner', 'devolver']]);

  V('rentrer', 'voltar (para casa); entrar', 'A2', 120, 'Voltar para casa ou para o lugar de origem.', 'Revenir chez soi.', [
    ['Je rentre du travail à dix-neuf heures.', 'Volto do trabalho às dezenove horas.'],
    ['Elle est rentrée au Brésil.', 'Ela voltou para o Brasil.'],
    ['Rentre vite, il fait nuit !', 'Volte logo, já é noite!']
  ], [['revenir', 'voltar'], ['retourner', 'retornar']], { aux: 'être' });

  V('réparer', 'consertar', 'A2', 900, 'Pôr em bom estado algo quebrado.', 'Remettre en état.', [
    ['Il répare mon vélo.', 'Ele conserta minha bicicleta.'],
    ['Nous avons fait réparer la machine à laver.', 'Mandamos consertar a máquina de lavar.'],
    ['Tu sais réparer une fuite d\'eau ?', 'Você sabe consertar um vazamento de água?']
  ], [['arranger', 'ajeitar'], ['dépanner', 'dar uma ajuda, consertar']]);

  V('répéter', 'repetir; ensaiar', 'A2', 400, 'Dizer ou fazer de novo; ensaiar.', 'Dire ou faire de nouveau.', [
    ['Vous pouvez répéter, s\'il vous plaît ?', 'O senhor pode repetir, por favor?'],
    ['Je répète : le train est annulé.', 'Repito: o trem foi cancelado.'],
    ['Le groupe répète le jeudi soir.', 'A banda ensaia às quintas à noite.']
  ], [['redire', 'redizer'], ['réitérer', 'reiterar']]);

  V('répondre', 'responder; atender', 'A1', 42, 'Dar uma resposta; atender (telefone, porta).', 'Faire une réponse.', [
    ['Réponds à ma question !', 'Responda à minha pergunta!'],
    ['Personne ne répond au téléphone.', 'Ninguém atende o telefone.'],
    ['Elle m\'a répondu par e-mail.', 'Ela me respondeu por e-mail.']
  ], [['rétorquer', 'retrucar'], ['réagir', 'reagir']]);

  V('se reposer', 'descansar', 'A2', 700, 'Parar para recuperar as forças.', 'Cesser de travailler pour reprendre des forces.', [
    ['Je me repose le dimanche.', 'Descanso aos domingos.'],
    ['Repose-toi, tu as l\'air fatigué.', 'Descanse, você parece cansado.'],
    ['Nous nous sommes reposés à l\'hôtel.', 'Descansamos no hotel.']
  ], [['se détendre', 'relaxar'], ['se relaxer', 'relaxar']]);

  V('rester', 'ficar; permanecer', 'A1', 25, 'Continuar num lugar ou num estado.', 'Continuer d\'être dans un lieu ou un état.', [
    ['Je reste à la maison ce soir.', 'Fico em casa hoje à noite.'],
    ['Elle est restée trois jours à Paris.', 'Ela ficou três dias em Paris.'],
    ['Il reste du gâteau ?', 'Sobrou bolo?']
  ], [['demeurer', 'permanecer'], ['séjourner', 'hospedar-se']], { aux: 'être', note: 'Falso cognato: "rester" = ficar, não "restar" (que só aparece em "il reste...").' });

  V('retourner', 'voltar; virar', 'A2', 250, 'Ir de novo a um lugar; virar ao contrário.', 'Aller de nouveau ; mettre à l\'envers.', [
    ['Je retourne au Brésil en décembre.', 'Volto ao Brasil em dezembro.'],
    ['Elle est retournée chez le médecin.', 'Ela voltou ao médico.'],
    ['Retourne la crêpe !', 'Vire o crepe!']
  ], [['revenir', 'voltar'], ['rentrer', 'voltar para casa']], { aux: 'être' });

  V('retrouver', 'reencontrar; achar', 'A2', 52, 'Encontrar de novo algo perdido ou alguém.', 'Trouver de nouveau.', [
    ['J\'ai retrouvé mes clés !', 'Achei minhas chaves!'],
    ['On se retrouve devant le cinéma ?', 'A gente se encontra na frente do cinema?'],
    ['Elle a retrouvé une amie d\'enfance.', 'Ela reencontrou uma amiga de infância.']
  ], [['récupérer', 'recuperar'], ['rejoindre', 'encontrar-se com']]);

  V('réussir', 'conseguir; ter sucesso; passar (prova)', 'A2', 160, 'Obter um bom resultado.', 'Obtenir un bon résultat.', [
    ['Elle a réussi son examen.', 'Ela passou na prova.'],
    ['Je n\'arrive pas à réussir ce gâteau.', 'Não consigo acertar este bolo.'],
    ['Nous réussissons toujours à nous voir.', 'Sempre conseguimos nos ver.']
  ], [['arriver à', 'conseguir'], ['parvenir', 'chegar a']]);

  V('se réveiller', 'acordar', 'A1', 900, 'Sair do sono.', 'Sortir du sommeil.', [
    ['Je me réveille à six heures et demie.', 'Acordo às seis e meia.'],
    ['Réveille-toi, il est tard !', 'Acorda, está tarde!'],
    ['Elle s\'est réveillée de bonne humeur.', 'Ela acordou de bom humor.']
  ], [['se lever', 'levantar-se']]);

  V('revenir', 'voltar', 'A2', 43, 'Vir de novo; regressar.', 'Venir de nouveau ; regagner un lieu.', [
    ['Je reviens dans cinq minutes.', 'Volto em cinco minutos.'],
    ['Ils sont revenus de vacances.', 'Eles voltaram de férias.'],
    ['Ça revient au même.', 'Dá no mesmo.']
  ], [['rentrer', 'voltar para casa'], ['retourner', 'voltar']], { like: 'venir', aux: 'être' });

  V('rire', 'rir', 'A2', 300, 'Mostrar alegria com o rosto e a voz.', 'Manifester sa gaieté.', [
    ['On a beaucoup ri hier soir.', 'A gente riu muito ontem à noite.'],
    ['Ne ris pas, c\'est sérieux !', 'Não ria, é sério!'],
    ['Il rit de ses propres blagues.', 'Ele ri das próprias piadas.']
  ], [['rigoler', 'rir (familiar)'], ['sourire', 'sorrir']]);
})();
