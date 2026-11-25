/* Dicionário de verbos — A a C */
(function () {
  var V = LUX.verb;

  V('accepter', 'aceitar', 'A2', 160, 'Concordar em receber algo ou dizer sim a uma proposta.', 'Dire oui à ce qui est proposé ; recevoir volontiers.', [
    ["J'accepte ton invitation avec plaisir.", 'Aceito seu convite com prazer.'],
    ['Elle a accepté le poste à Lyon.', 'Ela aceitou o cargo em Lyon.'],
    ['Nous acceptons les cartes bancaires.', 'Aceitamos cartões bancários.']
  ], [['admettre', 'admitir'], ['approuver', 'aprovar'], ['consentir', 'consentir']]);

  V('acheter', 'comprar', 'A1', 140, 'Obter algo em troca de dinheiro.', "Obtenir quelque chose en échange d'argent.", [
    ["J'achète du pain tous les matins.", 'Compro pão todas as manhãs.'],
    ['Ils ont acheté une maison à la campagne.', 'Eles compraram uma casa no campo.'],
    ["Qu'est-ce que tu vas acheter pour son anniversaire ?", 'O que você vai comprar para o aniversário dele?']
  ], [['payer', 'pagar'], ["s'offrir", 'dar-se de presente']]);

  V('aider', 'ajudar', 'A1', 150, 'Dar apoio ou assistência a alguém.', "Apporter son soutien ou son assistance à quelqu'un.", [
    ['Tu peux m\'aider à porter ce sac ?', 'Você pode me ajudar a carregar esta sacola?'],
    ['Mes voisins nous ont aidés à déménager.', 'Meus vizinhos nos ajudaram na mudança.'],
    ['Cette application aide à apprendre le vocabulaire.', 'Este aplicativo ajuda a aprender vocabulário.']
  ], [['assister', 'assistir, auxiliar'], ['soutenir', 'apoiar']]);

  V('aimer', 'amar; gostar', 'A1', 22, 'Sentir afeto ou gosto por alguém ou algo.', "Éprouver de l'affection ou du goût pour quelqu'un ou quelque chose.", [
    ["J'aime beaucoup le cinéma français.", 'Gosto muito do cinema francês.'],
    ['Il aime sa femme depuis vingt ans.', 'Ele ama a esposa há vinte anos.'],
    ["J'aimerais un café, s'il vous plaît.", 'Eu gostaria de um café, por favor.']
  ], [['adorer', 'adorar'], ['apprécier', 'apreciar']]);

  V('ajouter', 'acrescentar; adicionar', 'A2', 120, 'Pôr algo a mais; juntar a outra coisa.', 'Mettre en plus ; joindre une chose à une autre.', [
    ['Ajoute un peu de sel à la soupe.', 'Acrescente um pouco de sal à sopa.'],
    ['Il a ajouté une phrase à la fin du message.', 'Ele acrescentou uma frase no fim da mensagem.'],
    ["« Et merci pour tout », a-t-elle ajouté.", '"E obrigada por tudo", ela acrescentou.']
  ], [['additionner', 'somar'], ['joindre', 'juntar']]);

  V('aller', 'ir', 'A1', 6, 'Deslocar-se de um lugar para outro; também indica estado ("como vai").', "Se déplacer d'un lieu à un autre ; indique aussi l'état de santé.", [
    ['Je vais au travail en métro.', 'Vou ao trabalho de metrô.'],
    ['Comment allez-vous ?', 'Como o senhor vai?'],
    ['Nous allons partir demain matin.', 'Vamos partir amanhã de manhã.']
  ], [['se rendre', 'dirigir-se'], ['se déplacer', 'deslocar-se']], { aux: 'être' });

  V('allumer', 'acender; ligar', 'A2', 700, 'Fazer funcionar uma luz ou um aparelho; pôr fogo.', 'Faire fonctionner une lumière, un appareil ; mettre le feu à.', [
    ['Tu peux allumer la lumière ?', 'Você pode acender a luz?'],
    ["J'allume la télé pour voir les infos.", 'Ligo a TV para ver o noticiário.'],
    ['Ils ont allumé un feu dans la cheminée.', 'Eles acenderam um fogo na lareira.']
  ], [['éclairer', 'iluminar'], ['brancher', 'ligar (na tomada)']]);

  V('amener', 'levar; trazer (alguém)', 'A2', 420, 'Levar uma pessoa ou um animal a algum lugar.', "Conduire une personne ou un animal quelque part.", [
    ["J'amène les enfants à l'école à huit heures.", 'Levo as crianças à escola às oito.'],
    ['Tu peux amener ton ami à la fête.', 'Você pode trazer seu amigo à festa.'],
    ["Qu'est-ce qui vous amène ici ?", 'O que o traz aqui?']
  ], [['emmener', 'levar consigo'], ['conduire', 'conduzir']]);

  V("s'amuser", 'divertir-se; brincar', 'A2', 500, 'Passar o tempo de forma agradável.', 'Passer le temps de façon agréable ; jouer.', [
    ['Les enfants s\'amusent dans le jardin.', 'As crianças brincam no jardim.'],
    ['On s\'est bien amusés à la fête !', 'A gente se divertiu muito na festa!'],
    ['Amuse-toi bien en vacances !', 'Divirta-se nas férias!']
  ], [['se divertir', 'divertir-se'], ['jouer', 'brincar']]);

  V('annoncer', 'anunciar', 'B1', 380, 'Tornar algo conhecido publicamente; avisar.', 'Faire savoir, rendre public.', [
    ['Le train de 10 h 15 est annoncé en retard.', 'O trem das 10h15 está anunciado com atraso.'],
    ['Elle nous a annoncé une bonne nouvelle.', 'Ela nos anunciou uma boa notícia.'],
    ['Nous annonçons la fermeture du magasin.', 'Anunciamos o fechamento da loja.']
  ], [['informer', 'informar'], ['déclarer', 'declarar']]);

  V('apercevoir', 'avistar; perceber', 'B1', 600, 'Ver de repente ou de longe; notar.', 'Voir brièvement ou de loin ; remarquer.', [
    ["J'aperçois la tour Eiffel depuis ma fenêtre.", 'Avisto a torre Eiffel da minha janela.'],
    ['Il a aperçu son ami dans la foule.', 'Ele avistou o amigo na multidão.'],
    ['Elle s\'est aperçue de son erreur.', 'Ela percebeu o próprio erro.']
  ], [['voir', 'ver'], ['remarquer', 'notar']], { like: 'recevoir' });

  V('appeler', 'chamar; ligar (telefonar)', 'A1', 36, 'Chamar alguém pelo nome ou pelo telefone.', "Faire venir quelqu'un par la voix ou par téléphone.", [
    ["J'appelle ma mère tous les dimanches.", 'Ligo para minha mãe todo domingo.'],
    ['Appelle un taxi, il est tard.', 'Chame um táxi, está tarde.'],
    ['Nous appellerons le médecin demain.', 'Vamos ligar para o médico amanhã.']
  ], [['téléphoner', 'telefonar'], ['contacter', 'contatar']]);

  V("s'appeler", 'chamar-se', 'A1', 90, 'Ter como nome.', 'Avoir pour nom.', [
    ["Je m'appelle Lucas, et toi ?", 'Eu me chamo Lucas, e você?'],
    ['Comment s\'appelle ce plat ?', 'Como se chama este prato?'],
    ['Ma sœur s\'appelle Camille.', 'Minha irmã se chama Camille.']
  ], [['se nommer', 'chamar-se, nomear-se']]);

  V('apporter', 'trazer (coisa)', 'A2', 260, 'Levar algo consigo até onde está alguém.', "Porter quelque chose à quelqu'un, dans un lieu.", [
    ["J'apporte le dessert ce soir.", 'Eu trago a sobremesa hoje à noite.'],
    ['Le serveur nous a apporté l\'addition.', 'O garçom nos trouxe a conta.'],
    ['Apportez vos papiers d\'identité.', 'Tragam seus documentos de identidade.']
  ], [['amener', 'trazer (pessoa)'], ['fournir', 'fornecer']]);

  V('apprendre', 'aprender; ensinar; ficar sabendo', 'A1', 56, 'Adquirir conhecimento; também ensinar ou receber uma notícia.', 'Acquérir des connaissances ; enseigner ; être informé de.', [
    ["J'apprends le français depuis un an.", 'Aprendo francês há um ano.'],
    ['Elle apprend à nager à son fils.', 'Ela ensina o filho a nadar.'],
    ["Nous avons appris la nouvelle à la radio.", 'Ficamos sabendo da notícia pelo rádio.']
  ], [['étudier', 'estudar'], ['enseigner', 'ensinar']], { like: 'prendre' });

  V('appuyer', 'apertar; apoiar', 'B1', 650, 'Fazer pressão sobre algo; dar apoio.', 'Presser sur quelque chose ; soutenir.', [
    ['Appuyez sur le bouton vert.', 'Aperte o botão verde.'],
    ["J'appuie mon vélo contre le mur.", 'Apoio a bicicleta contra o muro.'],
    ['Le directeur appuie notre projet.', 'O diretor apoia nosso projeto.']
  ], [['presser', 'pressionar'], ['soutenir', 'apoiar']]);

  V('arrêter', 'parar; prender', 'A2', 110, 'Fazer cessar um movimento ou uma ação; deter alguém.', "Faire cesser un mouvement, une action ; mettre en prison.", [
    ["J'ai arrêté de fumer l'année dernière.", 'Parei de fumar no ano passado.'],
    ['Arrête de parler, le film commence !', 'Pare de falar, o filme está começando!'],
    ['La police a arrêté le voleur.', 'A polícia prendeu o ladrão.']
  ], [['cesser', 'cessar'], ['stopper', 'parar']]);

  V('arriver', 'chegar; acontecer', 'A1', 27, 'Chegar a um lugar; também acontecer.', 'Parvenir dans un lieu ; se produire.', [
    ['Le train arrive à quai numéro 3.', 'O trem chega na plataforma 3.'],
    ['Nous sommes arrivés à Paris hier soir.', 'Chegamos a Paris ontem à noite.'],
    ["Qu'est-ce qui est arrivé ?", 'O que aconteceu?']
  ], [['venir', 'vir'], ['se passer', 'acontecer']], { aux: 'être' });

  V("s'asseoir", 'sentar-se', 'A2', 300, 'Pôr-se sentado.', 'Se mettre sur un siège.', [
    ['Asseyez-vous, je vous en prie.', 'Sentem-se, por favor.'],
    ['Je m\'assieds toujours près de la fenêtre.', 'Sempre me sento perto da janela.'],
    ['Elle s\'est assise à côté de moi.', 'Ela se sentou ao meu lado.']
  ], [["s'installer", 'acomodar-se']]);

  V('atteindre', 'atingir; alcançar', 'B1', 450, 'Chegar a um ponto, a um objetivo ou a alguém.', 'Parvenir à un lieu, à un but ; toucher.', [
    ['Nous avons atteint le sommet à midi.', 'Atingimos o cume ao meio-dia.'],
    ['Elle a atteint son objectif.', 'Ela alcançou o objetivo.'],
    ['Je n\'atteins pas l\'étagère du haut.', 'Não alcanço a prateleira de cima.']
  ], [['parvenir', 'chegar'], ['toucher', 'tocar'], ['réaliser', 'realizar']], { like: 'peindre' });

  V('attendre', 'esperar; aguardar', 'A1', 32, 'Ficar num lugar até que alguém chegue ou algo aconteça.', "Rester jusqu'à ce que quelqu'un vienne ou que quelque chose arrive.", [
    ["J'attends le bus depuis vingt minutes.", 'Espero o ônibus há vinte minutos.'],
    ['Attends-moi devant la gare !', 'Me espere na frente da estação!'],
    ['Nous attendons un bébé pour juin.', 'Estamos esperando um bebê para junho.']
  ], [['patienter', 'aguardar com paciência'], ['espérer', 'ter esperança']],
  { note: 'Falso cognato: "attendre" = esperar. "Atender" (o telefone) é "répondre".' });

  V('avancer', 'avançar; adiantar', 'B1', 330, 'Ir para a frente; progredir; adiantar.', 'Aller vers l\'avant ; progresser.', [
    ['Avancez jusqu\'au feu rouge.', 'Avance até o semáforo.'],
    ['Mon travail avance bien.', 'Meu trabalho está avançando bem.'],
    ['Nous avançons la réunion à neuf heures.', 'Adiantamos a reunião para as nove.']
  ], [['progresser', 'progredir']]);

  V('avoir', 'ter; haver (auxiliar)', 'A1', 2, 'Possuir; também verbo auxiliar dos tempos compostos.', 'Posséder ; sert aussi d\'auxiliaire aux temps composés.', [
    ["J'ai vingt-huit ans.", 'Tenho vinte e oito anos.'],
    ['Nous avons deux enfants.', 'Temos dois filhos.'],
    ['Il y a un problème.', 'Há um problema.']
  ], [['posséder', 'possuir'], ['détenir', 'deter']]);

  /* B */
  V('baisser', 'abaixar; diminuir', 'B1', 700, 'Pôr mais baixo; diminuir.', 'Mettre plus bas ; diminuer.', [
    ['Tu peux baisser le son, s\'il te plaît ?', 'Pode abaixar o som, por favor?'],
    ['Les prix ont baissé en janvier.', 'Os preços baixaram em janeiro.'],
    ['Il baisse les yeux, gêné.', 'Ele abaixa os olhos, constrangido.']
  ], [['diminuer', 'diminuir'], ['réduire', 'reduzir']]);

  V('battre', 'bater; vencer', 'B1', 400, 'Dar golpes; vencer um adversário.', 'Donner des coups ; vaincre un adversaire.', [
    ['Mon cœur bat très vite.', 'Meu coração bate muito rápido.'],
    ['Lyon a battu Marseille deux à un.', 'Lyon venceu Marseille por dois a um.'],
    ['Battez les œufs avec le sucre.', 'Bata os ovos com o açúcar.']
  ], [['frapper', 'golpear'], ['vaincre', 'vencer']]);

  V('boire', 'beber', 'A1', 300, 'Engolir um líquido.', 'Avaler un liquide.', [
    ['Je bois un café le matin.', 'Bebo um café de manhã.'],
    ['Buvez beaucoup d\'eau quand il fait chaud.', 'Bebam muita água quando estiver calor.'],
    ['Nous avons bu un verre en terrasse.', 'Tomamos uma bebida na varanda do café.']
  ], [['prendre', 'tomar'], ['avaler', 'engolir']]);

  V('bouger', 'mexer-se; mover', 'A2', 650, 'Mudar de posição; não ficar parado.', 'Changer de place ou de position.', [
    ['Ne bouge pas, je prends la photo !', 'Não se mexa, vou tirar a foto!'],
    ['Nous bougeons beaucoup le week-end.', 'A gente sai bastante no fim de semana.'],
    ['Il faut bouger pour rester en forme.', 'É preciso se mexer para ficar em forma.']
  ], [['remuer', 'mexer'], ['se déplacer', 'deslocar-se']]);

  V('se brosser', 'escovar(-se)', 'A1', 2000, 'Limpar com escova (os dentes, o cabelo).', 'Se nettoyer avec une brosse (les dents, les cheveux).', [
    ['Je me brosse les dents après le repas.', 'Escovo os dentes depois da refeição.'],
    ['Brosse-toi les cheveux avant de partir.', 'Escove o cabelo antes de sair.'],
    ['Les enfants se sont brossé les dents.', 'As crianças escovaram os dentes.']
  ], [['se peigner', 'pentear-se']],
  { note: 'Com objeto direto depois (les dents), o particípio não concorda: "elle s\'est brossé les dents".' });

  /* C */
  V('cacher', 'esconder', 'B1', 500, 'Pôr algo ou alguém onde não possa ser visto.', 'Mettre hors de la vue.', [
    ['Elle cache les cadeaux dans l\'armoire.', 'Ela esconde os presentes no armário.'],
    ['Il nous a caché la vérité.', 'Ele escondeu de nós a verdade.'],
    ['Le chat se cache sous le lit.', 'O gato se esconde debaixo da cama.']
  ], [['dissimuler', 'dissimular'], ['masquer', 'mascarar']]);

  V('casser', 'quebrar', 'A2', 600, 'Partir em pedaços; danificar.', 'Mettre en morceaux ; endommager.', [
    ["J'ai cassé mon téléphone.", 'Quebrei meu celular.'],
    ['Attention, ce verre se casse facilement.', 'Cuidado, este copo quebra fácil.'],
    ['Il s\'est cassé la jambe au ski.', 'Ele quebrou a perna esquiando.']
  ], [['briser', 'partir, quebrar'], ['rompre', 'romper']]);

  V('changer', 'mudar; trocar', 'A2', 95, 'Tornar diferente; substituir uma coisa por outra.', 'Rendre différent ; remplacer une chose par une autre.', [
    ['La ville a beaucoup changé.', 'A cidade mudou muito.'],
    ['Nous changeons de train à Lyon.', 'Trocamos de trem em Lyon.'],
    ['Je voudrais changer des euros en reais.', 'Eu queria trocar euros por reais.']
  ], [['modifier', 'modificar'], ['transformer', 'transformar'], ['remplacer', 'substituir']]);

  V('chanter', 'cantar', 'A1', 650, 'Emitir sons musicais com a voz.', 'Produire des sons musicaux avec la voix.', [
    ['Elle chante dans une chorale.', 'Ela canta num coral.'],
    ['Nous avons chanté « Joyeux anniversaire ».', 'Cantamos "Parabéns pra você".'],
    ['Les oiseaux chantent le matin.', 'Os pássaros cantam de manhã.']
  ], [['fredonner', 'cantarolar']]);

  V('chercher', 'procurar; buscar', 'A1', 35, 'Tentar encontrar; ir buscar alguém ou algo.', 'Essayer de trouver ; aller prendre.', [
    ['Je cherche mes clés partout.', 'Procuro minhas chaves por toda parte.'],
    ['Il cherche un appartement à Lyon.', 'Ele procura um apartamento em Lyon.'],
    ['Je viens te chercher à la gare.', 'Vou te buscar na estação.']
  ], [['rechercher', 'pesquisar'], ['fouiller', 'vasculhar']]);

  V('choisir', 'escolher', 'A2', 170, 'Decidir-se por uma opção entre várias.', 'Prendre une chose de préférence aux autres.', [
    ['Choisis le dessert que tu veux.', 'Escolha a sobremesa que você quiser.'],
    ['Nous choisissons toujours la même table.', 'Sempre escolhemos a mesma mesa.'],
    ['Elle a choisi d\'étudier le droit.', 'Ela escolheu estudar direito.']
  ], [['sélectionner', 'selecionar'], ['préférer', 'preferir'], ['opter', 'optar']]);

  V('commencer', 'começar', 'A1', 48, 'Dar início a algo; ter início.', 'Débuter ; entreprendre.', [
    ['Le cours commence à neuf heures.', 'A aula começa às nove.'],
    ['Nous commençons le travail tôt.', 'Começamos o trabalho cedo.'],
    ['Il a commencé à pleuvoir.', 'Começou a chover.']
  ], [['débuter', 'iniciar'], ['entamer', 'encetar']]);

  V('comprendre', 'entender; compreender', 'A1', 29, 'Captar o sentido de algo; incluir.', 'Saisir le sens de quelque chose ; contenir.', [
    ['Je ne comprends pas cette phrase.', 'Não entendo esta frase.'],
    ['Vous comprenez le français ?', 'O senhor entende francês?'],
    ['Le prix comprend le petit-déjeuner.', 'O preço inclui o café da manhã.']
  ], [['saisir', 'captar'], ['inclure', 'incluir']], { like: 'prendre' });

  V('compter', 'contar; contar com', 'A2', 180, 'Enumerar; calcular; ter importância.', 'Dénombrer ; calculer ; avoir de l\'importance.', [
    ['Mon fils sait compter jusqu\'à cent.', 'Meu filho sabe contar até cem.'],
    ['Tu peux compter sur moi.', 'Você pode contar comigo.'],
    ['Ce qui compte, c\'est la santé.', 'O que importa é a saúde.']
  ], [['calculer', 'calcular'], ['dénombrer', 'enumerar']],
  { note: '"Contar uma história" é "raconter", não "compter".' });

  V('conduire', 'dirigir (veículo); conduzir', 'A2', 280, 'Guiar um veículo; levar alguém a um lugar.', 'Diriger un véhicule ; mener quelqu\'un quelque part.', [
    ['Je conduis depuis l\'âge de dix-huit ans.', 'Dirijo desde os dezoito anos.'],
    ['Elle conduit les enfants à l\'école.', 'Ela leva as crianças à escola.'],
    ['Cette route conduit au village.', 'Esta estrada leva à aldeia.']
  ], [['piloter', 'pilotar'], ['mener', 'levar']]);

  V('connaître', 'conhecer', 'A1', 28, 'Ter conhecimento de alguém ou algo; já ter visto ou ouvido.', 'Avoir des informations sur ; avoir déjà rencontré.', [
    ['Tu connais un bon restaurant ici ?', 'Você conhece um bom restaurante aqui?'],
    ['Je connais Léa depuis l\'université.', 'Conheço a Léa desde a universidade.'],
    ['Nous avons connu des moments difficiles.', 'Passamos por momentos difíceis.']
  ], [['savoir', 'saber'], ['rencontrer', 'conhecer (alguém pela primeira vez)']],
  { note: '"Connaître" + pessoa, lugar ou coisa; "savoir" + informação ou habilidade (savoir nager).' });

  V('construire', 'construir', 'B1', 260, 'Edificar; montar.', 'Bâtir ; assembler.', [
    ['Ils construisent une nouvelle école.', 'Eles estão construindo uma escola nova.'],
    ['Cette maison a été construite en 1920.', 'Esta casa foi construída em 1920.'],
    ['Nous construisons notre avenir ensemble.', 'Construímos nosso futuro juntos.']
  ], [['bâtir', 'edificar'], ['édifier', 'erigir']], { like: 'conduire' });

  V('continuer', 'continuar', 'A2', 120, 'Não interromper; seguir fazendo.', 'Poursuivre ce qui est commencé.', [
    ['Continuez tout droit jusqu\'à la place.', 'Continue reto até a praça.'],
    ['Elle continue à travailler le samedi.', 'Ela continua trabalhando aos sábados.'],
    ['La réunion a continué jusqu\'à midi.', 'A reunião continuou até o meio-dia.']
  ], [['poursuivre', 'prosseguir']]);

  V('corriger', 'corrigir', 'A2', 900, 'Tirar os erros de algo.', 'Rectifier ce qui est fautif.', [
    ['Le professeur corrige les copies.', 'O professor corrige as provas.'],
    ['Corrigeons ensemble cet exercice.', 'Vamos corrigir juntos este exercício.'],
    ['Tu peux corriger mon texte ?', 'Você pode corrigir meu texto?']
  ], [['rectifier', 'retificar'], ['réviser', 'revisar']]);

  V('se coucher', 'deitar-se; ir dormir', 'A1', 700, 'Deitar-se para dormir.', 'Se mettre au lit pour dormir.', [
    ['Je me couche vers onze heures.', 'Vou dormir por volta das onze.'],
    ['Les enfants se sont couchés tôt.', 'As crianças foram dormir cedo.'],
    ['Le soleil se couche à vingt heures.', 'O sol se põe às vinte horas.']
  ], [["s'allonger", 'deitar-se'], ["s'endormir", 'adormecer']]);

  V('couper', 'cortar', 'A2', 450, 'Dividir com um instrumento afiado; interromper.', 'Diviser avec un instrument tranchant ; interrompre.', [
    ['Coupe le pain, s\'il te plaît.', 'Corte o pão, por favor.'],
    ['Je me suis coupé le doigt.', 'Cortei o dedo.'],
    ['On a coupé l\'électricité ce matin.', 'Cortaram a eletricidade hoje de manhã.']
  ], [['trancher', 'fatiar'], ['interrompre', 'interromper']]);

  V('courir', 'correr', 'A2', 260, 'Deslocar-se rapidamente com passos largos.', 'Se déplacer rapidement à pied.', [
    ['Je cours tous les matins au parc.', 'Corro todas as manhãs no parque.'],
    ['Ils ont couru pour attraper le bus.', 'Eles correram para pegar o ônibus.'],
    ['Ne courez pas dans les couloirs !', 'Não corram nos corredores!']
  ], [['se précipiter', 'precipitar-se'], ['filer', 'sair correndo']]);

  V('coûter', 'custar', 'A1', 400, 'Ter um preço.', 'Avoir un prix.', [
    ['Combien coûte ce billet ?', 'Quanto custa esta passagem?'],
    ['Le loyer coûte huit cents euros.', 'O aluguel custa oitocentos euros.'],
    ['Ça m\'a coûté une fortune !', 'Isso me custou uma fortuna!']
  ], [['valoir', 'valer']]);

  V('craindre', 'temer', 'B2', 550, 'Ter medo de algo ou alguém.', 'Avoir peur de.', [
    ['Je crains qu\'il ne soit trop tard.', 'Temo que seja tarde demais.'],
    ['Elle craint le froid.', 'Ela teme o frio.'],
    ['Ne craignez rien, tout va bien.', 'Não temam nada, está tudo bem.']
  ], [['redouter', 'recear'], ['avoir peur', 'ter medo']]);

  V('créer', 'criar', 'B1', 300, 'Fazer existir algo novo.', 'Faire exister quelque chose de nouveau.', [
    ['Elle a créé sa propre entreprise.', 'Ela criou a própria empresa.'],
    ['Nous créons des sites internet.', 'Criamos sites.'],
    ['Ce projet va créer des emplois.', 'Este projeto vai criar empregos.']
  ], [['inventer', 'inventar'], ['fonder', 'fundar'], ['concevoir', 'conceber']]);

  V('crier', 'gritar', 'A2', 500, 'Falar ou chamar muito alto.', 'Pousser des cris ; parler très fort.', [
    ['Ne crie pas, je t\'entends !', 'Não grite, estou te ouvindo!'],
    ['Les supporters crient dans le stade.', 'Os torcedores gritam no estádio.'],
    ['Il a crié de joie.', 'Ele gritou de alegria.']
  ], [['hurler', 'berrar'], ["s'exclamer", 'exclamar']]);

  V('croire', 'acreditar; crer; achar', 'A2', 19, 'Considerar verdadeiro; ter fé; ter uma opinião.', 'Tenir pour vrai ; avoir la foi ; penser.', [
    ['Je crois qu\'il va pleuvoir.', 'Acho que vai chover.'],
    ['Tu crois en Dieu ?', 'Você acredita em Deus?'],
    ['Personne ne nous a crus.', 'Ninguém acreditou em nós.']
  ], [['penser', 'achar'], ['estimer', 'considerar']]);

  V('cuisiner', 'cozinhar', 'A1', 1200, 'Preparar comida.', 'Préparer des plats.', [
    ['Mon père cuisine très bien.', 'Meu pai cozinha muito bem.'],
    ['Ce soir, je cuisine un plat brésilien.', 'Hoje à noite vou cozinhar um prato brasileiro.'],
    ['Nous avons cuisiné ensemble.', 'Cozinhamos juntos.']
  ], [['préparer', 'preparar'], ['faire la cuisine', 'cozinhar']]);
})();
