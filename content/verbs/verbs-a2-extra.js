/* Dicionário de verbos — ampliação da Fase 2 (vocabulário das unidades 2 a 6 do A2) */
(function () {
  var V = LUX.verb;

  /* ----- Unidade 2: fim de semana, passado ----- */
  V('déjeuner', 'almoçar; tomar o café da manhã (Bélgica, Suíça, Québec)', 'A1', 1500, 'Fazer a refeição do meio-dia.', 'Prendre le repas de midi.', [
    ['On déjeune à midi et demi.', 'Almoçamos ao meio-dia e meia.'],
    ['Nous avons déjeuné au restaurant.', 'Almoçamos no restaurante.'],
    ['Tu veux déjeuner avec moi demain ?', 'Quer almoçar comigo amanhã?']
  ], [['manger', 'comer'], ['dîner', 'jantar']], { note: 'Na França: le petit-déjeuner (café da manhã), le déjeuner (almoço), le dîner (jantar). Na Bélgica, na Suíça e no Québec: le déjeuner (café da manhã), le dîner (almoço), le souper (jantar).' });

  V("s'ennuyer", 'entediar-se; sentir falta', 'A2', 1400, 'Sentir tédio; não ter o que fazer.', 'Éprouver de l\'ennui ; trouver le temps long.', [
    ['Je m\'ennuie le dimanche.', 'Fico entediado aos domingos.'],
    ['Tu ne t\'es pas ennuyée ?', 'Você não ficou entediada?'],
    ['Les enfants s\'ennuient sans écran.', 'As crianças ficam entediadas sem tela.']
  ], [["s'amuser", 'divertir-se (antônimo)']]);

  V("s'excuser", 'desculpar-se, pedir desculpas', 'A2', 1600, 'Pedir perdão por um erro.', 'Demander pardon.', [
    ['Je m\'excuse pour le retard.', 'Peço desculpas pelo atraso.'],
    ['Il s\'est excusé cent fois.', 'Ele pediu desculpas cem vezes.'],
    ['Excusez-moi, où est la gare ?', 'Com licença, onde fica a estação?']
  ], [['demander pardon', 'pedir perdão'], ['regretter', 'lamentar']], { note: '"Excusez-moi" também serve para chamar a atenção de alguém ("com licença").' });

  V('se fâcher', 'zangar-se, ficar bravo; brigar', 'A2', 1700, 'Ficar irritado com alguém; romper uma amizade.', 'Se mettre en colère ; se brouiller.', [
    ['Ne te fâche pas, c\'est une blague !', 'Não fique bravo, é brincadeira!'],
    ['Elle s\'est fâchée avec sa sœur.', 'Ela brigou com a irmã.'],
    ['Mon père se fâche quand je rentre tard.', 'Meu pai fica bravo quando chego tarde.']
  ], [['se mettre en colère', 'ficar com raiva'], ["s'énerver", 'irritar-se']]);

  V('fêter', 'comemorar, festejar', 'A2', 2200, 'Celebrar um acontecimento.', 'Célébrer un événement.', [
    ['On a fêté l\'anniversaire de ma sœur.', 'Comemoramos o aniversário da minha irmã.'],
    ['Nous fêtons Noël en famille.', 'Comemoramos o Natal em família.'],
    ['Il faut fêter ça !', 'Isso merece uma comemoração!']
  ], [['célébrer', 'celebrar']]);

  V('organiser', 'organizar', 'A2', 700, 'Preparar e coordenar algo.', 'Préparer et coordonner.', [
    ['La ville organise un festival en octobre.', 'A cidade organiza um festival em outubro.'],
    ['J\'organise une fête samedi.', 'Vou dar uma festa no sábado.'],
    ['Elle a bien organisé son voyage.', 'Ela organizou bem a viagem.']
  ], [['préparer', 'preparar'], ['planifier', 'planejar']]);

  V('participer', 'participar', 'A2', 800, 'Tomar parte em algo.', 'Prendre part à quelque chose.', [
    ['Six mille coureurs ont participé à la course.', 'Seis mil corredores participaram da corrida.'],
    ['Tu participes à la réunion ?', 'Você vai participar da reunião?'],
    ['Elle participe au vide-grenier chaque année.', 'Ela participa da feira de usados todo ano.']
  ], [['prendre part', 'tomar parte']], { note: 'Participer **à** (não "de"): participer à un match.' });

  V('installer', 'instalar; montar', 'A2', 900, 'Colocar algo no lugar; instalar.', 'Mettre en place.', [
    ['Ils ont installé leur stand à six heures.', 'Montaram a barraca às seis horas.'],
    ['J\'ai installé une application.', 'Instalei um aplicativo.'],
    ['Nous nous sommes installés à Lyon.', 'Nós nos mudamos para Lyon (nos estabelecemos).']
  ], [['mettre en place', 'pôr no lugar'], ["s'établir", 'estabelecer-se']]);

  V('exister', 'existir', 'A2', 500, 'Ter existência real.', 'Avoir une réalité.', [
    ['Ça n\'existe pas au Brésil.', 'Isso não existe no Brasil.'],
    ['Ce restaurant existe depuis 1920.', 'Este restaurante existe desde 1920.'],
    ['Les fantômes n\'existent pas.', 'Fantasmas não existem.']
  ], [['être', 'ser, haver']]);

  V('ressembler', 'parecer-se com', 'A2', 900, 'Ter semelhança com.', 'Avoir des traits communs avec.', [
    ['L\'italien ressemble au portugais.', 'O italiano se parece com o português.'],
    ['Tu ressembles à ta mère.', 'Você se parece com a sua mãe.'],
    ['Ils se ressemblent beaucoup.', 'Eles são muito parecidos.']
  ], [['avoir l\'air de', 'parecer']], { note: 'Ressembler **à** quelqu\'un: "Il ressemble à son père".' });

  V('rembourser', 'reembolsar, devolver o dinheiro', 'A2', 2500, 'Devolver um dinheiro emprestado ou pago.', 'Rendre l\'argent.', [
    ['Je veux te rembourser.', 'Quero te devolver o dinheiro.'],
    ['La SNCF rembourse le billet.', 'A SNCF reembolsa a passagem.'],
    ['Tu m\'as remboursé ?', 'Você me pagou de volta?']
  ], [['rendre', 'devolver'], ['payer', 'pagar']]);

  V('charger', 'carregar', 'A2', 1800, 'Pôr carga; recarregar a bateria.', 'Mettre une charge ; recharger.', [
    ['Je dois charger mon téléphone.', 'Preciso carregar o celular.'],
    ['Ils chargent la voiture avant de partir.', 'Eles carregam o carro antes de sair.'],
    ['Mon ordinateur charge.', 'Meu computador está carregando.']
  ], [['recharger', 'recarregar']]);

  V('rigoler', 'rir, dar risada (informal)', 'A2', 2600, 'Rir, divertir-se (familiar).', 'Rire, s\'amuser (familier).', [
    ['On a bien rigolé hier soir.', 'A gente deu muita risada ontem à noite.'],
    ['Tu rigoles ?', 'Você está brincando?'],
    ['Arrête de rigoler !', 'Para de rir!']
  ], [['rire', 'rir'], ['plaisanter', 'brincar, fazer piada']]);

  V('rater', 'perder (trem, ônibus); errar; falhar', 'A2', 1900, 'Não conseguir pegar um transporte; fracassar.', 'Manquer ; ne pas réussir.', [
    ['J\'ai raté le dernier métro.', 'Perdi o último metrô.'],
    ['Il a raté son examen.', 'Ele foi mal na prova.'],
    ['Ne rate pas ce film !', 'Não perca esse filme!']
  ], [['manquer', 'perder'], ['échouer', 'fracassar']]);

  V('repartir', 'partir de novo; voltar', 'A2', 1800, 'Partir outra vez; voltar para o lugar de origem.', 'Partir de nouveau.', [
    ['Je suis repartie à seize heures.', 'Fui embora (de volta) às dezesseis horas.'],
    ['Le train repart dans cinq minutes.', 'O trem sai de novo em cinco minutos.'],
    ['Ils repartent au Brésil en juin.', 'Eles voltam para o Brasil em junho.']
  ], [['retourner', 'voltar'], ['rentrer', 'voltar para casa']], { pattern: 'partir', aux: 'être' });

  V('revoir', 'rever, ver de novo', 'A2', 1300, 'Ver outra vez.', 'Voir de nouveau.', [
    ['Au revoir ! À bientôt !', 'Tchau! Até breve!'],
    ['On ne s\'est pas encore revus.', 'Ainda não nos vimos de novo.'],
    ['J\'aimerais revoir ce film.', 'Eu gostaria de rever esse filme.']
  ], [['retrouver', 'reencontrar']], { like: 'voir' });

  V('se perdre', 'perder-se', 'A2', 1500, 'Não encontrar mais o caminho.', 'Ne plus trouver son chemin.', [
    ['Un enfant s\'est perdu dans la foule.', 'Uma criança se perdeu na multidão.'],
    ['Je me perds toujours dans le métro.', 'Sempre me perco no metrô.'],
    ['Nous nous sommes perdus en ville.', 'Nós nos perdemos na cidade.']
  ], [["s'égarer", 'extraviar-se']]);

  /* ----- Unidade 3: infância, lembranças ----- */
  V('attraper', 'pegar, apanhar; pegar (doença)', 'A2', 1700, 'Agarrar algo que se move; contrair uma doença.', 'Saisir ; prendre au vol ; contracter une maladie.', [
    ['Je voulais attraper un canard.', 'Eu queria pegar um pato.'],
    ['Attrape la balle !', 'Pega a bola!'],
    ['J\'ai attrapé un rhume.', 'Peguei um resfriado.']
  ], [['saisir', 'agarrar'], ['prendre', 'pegar']]);

  V('se baigner', 'tomar banho (de mar, rio, piscina), nadar', 'A2', 2300, 'Entrar na água para nadar ou se refrescar.', 'Aller dans l\'eau pour nager ou se rafraîchir.', [
    ['En été, on se baignait dans le lac.', 'No verão, a gente tomava banho no lago.'],
    ['Il est interdit de se baigner ici.', 'É proibido nadar aqui.'],
    ['Tu t\'es baigné dans la mer ?', 'Você entrou no mar?']
  ], [['nager', 'nadar']], { note: '"Tomar banho" de chuveiro é "se doucher"; de banheira, "prendre un bain".' });

  V('commander', 'pedir (no restaurante); encomendar; comandar', 'A2', 800, 'Pedir um prato, um produto; dar ordens.', 'Demander un plat, un produit ; donner des ordres.', [
    ['J\'ai commandé une paella.', 'Pedi uma paella.'],
    ['Vous avez commandé ?', 'Já fizeram o pedido?'],
    ['Je commande mes livres en ligne.', 'Encomendo meus livros pela internet.']
  ], [['demander', 'pedir'], ['réserver', 'reservar']]);

  V('dessiner', 'desenhar', 'A2', 1900, 'Representar com traços.', 'Représenter par des traits.', [
    ['Je dessinais tout le temps.', 'Eu desenhava o tempo todo.'],
    ['Elle dessine très bien.', 'Ela desenha muito bem.'],
    ['Tu peux me dessiner le chemin ?', 'Você pode desenhar o caminho para mim?']
  ], [['tracer', 'traçar'], ['peindre', 'pintar']]);

  V('se disputer', 'brigar, discutir', 'A2', 1600, 'Ter uma briga verbal.', 'Avoir une querelle.', [
    ['On se disputait tous les jours.', 'A gente brigava todos os dias.'],
    ['Ils se sont disputés pour une bêtise.', 'Eles brigaram por uma besteira.'],
    ['Ne vous disputez pas !', 'Não briguem!']
  ], [['se fâcher', 'brigar, zangar-se'], ['se quereller', 'discutir']]);

  V('détester', 'detestar, odiar', 'A2', 1100, 'Não gostar nada de.', 'Avoir en horreur.', [
    ['Je détestais les maths.', 'Eu odiava matemática.'],
    ['Il déteste attendre.', 'Ele detesta esperar.'],
    ['Nous détestons la pluie.', 'Odiamos chuva.']
  ], [['haïr', 'odiar'], ['aimer', 'gostar (antônimo)']]);

  V('embrasser', 'beijar; abraçar', 'A2', 1300, 'Dar um beijo; (em cartas) mandar um beijo.', 'Donner un baiser ; serrer dans ses bras.', [
    ['Je t\'embrasse très fort.', 'Um beijo bem forte (fim de carta).'],
    ['Il a embrassé sa fille.', 'Ele beijou a filha.'],
    ['Embrasse tes parents pour moi.', 'Mande um beijo aos seus pais por mim.']
  ], [['faire la bise', 'dar beijinho no rosto'], ['serrer dans ses bras', 'abraçar']]);

  V('éviter', 'evitar', 'A2', 900, 'Não deixar acontecer; desviar de.', 'Faire en sorte d\'échapper à.', [
    ['J\'ai tourné pour l\'éviter.', 'Virei para desviar dele.'],
    ['Évitez de sortir à midi.', 'Evitem sair ao meio-dia.'],
    ['Il évite le sucre.', 'Ele evita açúcar.']
  ], [['échapper à', 'escapar de']]);

  V('grimper', 'subir, escalar, trepar', 'A2', 2800, 'Subir usando as mãos e os pés.', 'Monter en s\'aidant des mains et des pieds.', [
    ['J\'adorais grimper aux arbres.', 'Eu adorava subir em árvores.'],
    ['La rue grimpe jusqu\'à la colline.', 'A rua sobe até a colina.'],
    ['Le chat a grimpé sur le toit.', 'O gato subiu no telhado.']
  ], [['monter', 'subir'], ['escalader', 'escalar']]);

  V('refaire', 'refazer, fazer de novo', 'A2', 1700, 'Fazer outra vez.', 'Faire de nouveau.', [
    ['Tu as refait du ski après ?', 'Você voltou a esquiar depois?'],
    ['Je dois refaire cet exercice.', 'Preciso refazer este exercício.'],
    ['Ils ont refait la cuisine.', 'Eles reformaram a cozinha.']
  ], [['recommencer', 'recomeçar']], { like: 'faire' });

  V('rougir', 'ficar vermelho, corar', 'A2', 3000, 'Ficar com o rosto vermelho (de vergonha, emoção).', 'Devenir rouge.', [
    ['J\'ai ri, il a rougi.', 'Eu ri, ele ficou vermelho.'],
    ['Elle rougit quand on la regarde.', 'Ela cora quando olham para ela.'],
    ['Les feuilles rougissent en automne.', 'As folhas ficam vermelhas no outono.']
  ], [['devenir rouge', 'ficar vermelho']]);

  V('sauter', 'pular, saltar', 'A2', 1500, 'Dar um salto.', 'S\'élever du sol par un saut.', [
    ['Papa a sauté dans l\'eau.', 'O papai pulou na água.'],
    ['Les enfants sautent sur le lit.', 'As crianças pulam na cama.'],
    ['J\'ai sauté le petit-déjeuner.', 'Pulei o café da manhã.']
  ], [['bondir', 'saltar']]);

  V('traverser', 'atravessar', 'A2', 900, 'Passar de um lado para o outro.', 'Passer d\'un côté à l\'autre.', [
    ['Un enfant a traversé la piste.', 'Uma criança atravessou a pista.'],
    ['Traversez la rue au feu.', 'Atravessem a rua no semáforo.'],
    ['Nous avons traversé la France en train.', 'Atravessamos a França de trem.']
  ], [['passer', 'passar'], ['franchir', 'transpor']]);

  V('trembler', 'tremer', 'A2', 2400, 'Agitar-se com pequenos movimentos (de frio, medo).', 'Être agité de petits mouvements.', [
    ['Le chiot tremblait de froid.', 'O filhote tremia de frio.'],
    ['Je tremble avant un examen.', 'Eu tremo antes de uma prova.'],
    ['La terre a tremblé.', 'A terra tremeu.']
  ], [['frissonner', 'arrepiar-se']]);

  /* ----- Unidade 4: compras, cozinha, restaurante ----- */
  V('chauffer', 'esquentar, aquecer', 'A2', 2100, 'Tornar quente.', 'Rendre chaud.', [
    ['Faites chauffer la crème.', 'Esquente o creme.'],
    ['Je chauffe le lait pour le petit-déjeuner.', 'Esquento o leite para o café da manhã.'],
    ['On ne chauffe pas la maison la nuit.', 'Não aquecemos a casa à noite.']
  ], [['réchauffer', 'reaquecer'], ['refroidir', 'esfriar (antônimo)']]);

  V('conseiller', 'aconselhar, recomendar', 'A2', 1200, 'Dar um conselho; recomendar.', 'Donner un conseil ; recommander.', [
    ['Je vous conseille la salade lyonnaise.', 'Recomendo a salada lionesa.'],
    ['Le médecin m\'a conseillé de dormir plus.', 'O médico me aconselhou a dormir mais.'],
    ['Qu\'est-ce que tu me conseilles ?', 'O que você me recomenda?']
  ], [['recommander', 'recomendar'], ['suggérer', 'sugerir']]);

  V('cuire', 'cozinhar, assar', 'A2', 2500, 'Preparar um alimento com calor.', 'Préparer un aliment par la chaleur.', [
    ['Faites cuire vingt-cinq minutes au four.', 'Asse por vinte e cinco minutos no forno.'],
    ['Les pâtes cuisent en dix minutes.', 'O macarrão cozinha em dez minutos.'],
    ['Une baguette bien cuite, s\'il vous plaît.', 'Uma baguete bem assada, por favor.']
  ], [['cuisiner', 'cozinhar (preparar a comida)'], ['rôtir', 'assar']], { like: 'conduire', note: 'Na cozinha, quase sempre "faire cuire": faire cuire les pâtes.' });

  V('désirer', 'desejar', 'A2', 1700, 'Querer, ter vontade de (formal).', 'Souhaiter, avoir envie de.', [
    ['Vous désirez ?', 'O que deseja? (no comércio)'],
    ['Nous désirons réserver une chambre.', 'Desejamos reservar um quarto.'],
    ['Elle désire changer de travail.', 'Ela deseja mudar de emprego.']
  ], [['souhaiter', 'desejar'], ['vouloir', 'querer']]);

  V('écraser', 'esmagar, amassar; atropelar', 'A2', 3000, 'Apertar com força até deformar.', 'Aplatir en pressant fort.', [
    ['Écrasez les pralines avec un rouleau.', 'Amasse as pralinas com um rolo.'],
    ['J\'écrase les pommes de terre pour la purée.', 'Amasso as batatas para o purê.'],
    ['Un chat a été écrasé par une voiture.', 'Um gato foi atropelado por um carro.']
  ], [['broyer', 'triturar'], ['aplatir', 'achatar']]);

  V('étaler', 'espalhar, estender', 'A2', 3500, 'Espalhar uma massa ou um produto numa superfície.', 'Étendre sur une surface.', [
    ['Étalez la pâte dans un moule.', 'Abra a massa numa fôrma.'],
    ['J\'étale du beurre sur mon pain.', 'Passo manteiga no pão.'],
    ['Il a étalé ses papiers sur la table.', 'Ele espalhou os papéis na mesa.']
  ], [['tartiner', 'passar (no pão)'], ['étendre', 'estender']]);

  V('exagérer', 'exagerar', 'A2', 2300, 'Ir além da medida; aumentar a verdade.', 'Aller au-delà de la mesure.', [
    ['Tu exagères !', 'Você está exagerando!'],
    ['Il exagère toujours ses histoires.', 'Ele sempre aumenta as histórias.'],
    ['N\'exagérons rien.', 'Não vamos exagerar.']
  ], [['amplifier', 'ampliar']]);

  V('grignoter', 'beliscar, petiscar', 'A2', 3500, 'Comer pequenas quantidades fora das refeições.', 'Manger un peu, entre les repas.', [
    ['Les jeunes grignotent entre les repas.', 'Os jovens beliscam entre as refeições.'],
    ['J\'ai grignoté des chips devant la télé.', 'Belisquei batata chips na frente da TV.'],
    ['Évite de grignoter le soir.', 'Evite beliscar à noite.']
  ], [['manger', 'comer']]);

  V('mélanger', 'misturar', 'A2', 2000, 'Juntar coisas diferentes.', 'Mettre ensemble des choses différentes.', [
    ['Mélangez la farine et le sucre.', 'Misture a farinha e o açúcar.'],
    ['Je mélange toujours les noms des gens.', 'Sempre confundo o nome das pessoas.'],
    ['Nous mélangeons le français et le portugais.', 'Misturamos francês e português.']
  ], [['mêler', 'misturar'], ['confondre', 'confundir']]);

  V('réduire', 'reduzir', 'A2', 1500, 'Tornar menor.', 'Rendre plus petit.', [
    ['Il faut réduire le sucre.', 'É preciso reduzir o açúcar.'],
    ['Ne réduisez pas les pralines en poudre.', 'Não reduza as pralinas a pó.'],
    ['Ils ont réduit les prix.', 'Eles baixaram os preços.']
  ], [['diminuer', 'diminuir'], ['baisser', 'baixar']], { like: 'conduire' });

  V('refroidir', 'esfriar', 'A2', 3000, 'Tornar ou ficar frio.', 'Rendre ou devenir froid.', [
    ['Laissez refroidir la tarte.', 'Deixe a torta esfriar.'],
    ['Ton café refroidit !', 'Seu café está esfriando!'],
    ['Le temps a refroidi.', 'O tempo esfriou.']
  ], [['rafraîchir', 'refrescar'], ['chauffer', 'esquentar (antônimo)']]);

  V('réserver', 'reservar', 'A2', 1100, 'Guardar um lugar com antecedência.', 'Retenir à l\'avance.', [
    ['Il vaut mieux réserver.', 'É melhor reservar.'],
    ['J\'ai réservé une table pour deux.', 'Reservei uma mesa para dois.'],
    ['Vous avez réservé ?', 'O senhor tem reserva?']
  ], [['retenir', 'reservar, segurar'], ['commander', 'encomendar']]);

  V('valoir', 'valer', 'B1', 600, 'Ter certo valor; merecer.', 'Avoir une valeur ; mériter.', [
    ['Il vaut mieux réserver.', 'É melhor reservar.'],
    ['Ce film vaut le coup.', 'Este filme vale a pena.'],
    ['Combien ça vaut ?', 'Quanto isso vale?']
  ], [['coûter', 'custar'], ['mériter', 'merecer']], { note: '"Il vaut mieux + infinitivo" = é melhor... (conselho). "Ça vaut le coup" = vale a pena.' });

  V('verser', 'despejar, servir (líquido); pagar', 'A2', 2000, 'Fazer correr um líquido; depositar dinheiro.', 'Faire couler un liquide ; payer.', [
    ['Versez la garniture dans le moule.', 'Despeje o recheio na fôrma.'],
    ['Je te verse un verre de vin ?', 'Te sirvo uma taça de vinho?'],
    ['Le salaire est versé le 30.', 'O salário é depositado no dia 30.']
  ], [['servir', 'servir'], ['remplir', 'encher']]);

  /* ----- Unidade 5: cidade, transporte, viagem ----- */
  V('afficher', 'exibir, mostrar (num painel), afixar', 'A2', 2400, 'Mostrar uma informação num painel, tela ou cartaz.', 'Montrer une information sur un panneau, un écran.', [
    ['Le numéro du quai est affiché sur les écrans.', 'O número da plataforma aparece nas telas.'],
    ['Les prix sont affichés à l\'entrée.', 'Os preços estão afixados na entrada.'],
    ['L\'application affiche les horaires.', 'O aplicativo mostra os horários.']
  ], [['montrer', 'mostrar'], ['indiquer', 'indicar']]);

  V('déménager', 'mudar-se (de casa)', 'A2', 1900, 'Ir morar em outro lugar.', 'Changer de logement.', [
    ['J\'ai enfin déménagé à Vaise !', 'Finalmente me mudei para Vaise!'],
    ['Nous déménageons le mois prochain.', 'Vamos nos mudar no mês que vem.'],
    ['Tu peux m\'aider à déménager ?', 'Você pode me ajudar na mudança?']
  ], [['s\'installer', 'instalar-se'], ['emménager', 'mudar-se para (o novo lugar)']], { note: '"Déménager" = sair de uma casa; "emménager" = entrar na nova. "Mudar" (trocar) é "changer".' });

  V('garer', 'estacionar', 'A2', 2200, 'Deixar o veículo parado num lugar.', 'Mettre un véhicule en stationnement.', [
    ['Il n\'y a jamais de place pour se garer.', 'Nunca tem vaga para estacionar.'],
    ['Je me suis garé devant la gare.', 'Estacionei na frente da estação.'],
    ['Ne te gare pas ici, c\'est interdit.', 'Não estacione aqui, é proibido.']
  ], [['stationner', 'estacionar']], { note: 'Quase sempre pronominal: "se garer".' });

  V('imprimer', 'imprimir', 'A2', 2000, 'Reproduzir um documento no papel.', 'Reproduire sur papier.', [
    ['Il n\'est pas nécessaire d\'imprimer le billet.', 'Não é necessário imprimir a passagem.'],
    ['Tu peux imprimer ce document ?', 'Você pode imprimir este documento?'],
    ['J\'ai imprimé les photos.', 'Imprimi as fotos.']
  ], [['tirer', 'tirar (cópias)']]);

  V('prier', 'rezar; pedir, rogar', 'A2', 900, 'Dirigir-se a Deus; pedir com insistência ou cortesia.', 'S\'adresser à Dieu ; demander poliment.', [
    ['Merci ! — Je vous en prie.', 'Obrigado! — Não há de quê.'],
    ['Les passagers sont priés de valider leur billet.', 'Pede-se aos passageiros que validem o bilhete.'],
    ['Elle prie tous les soirs.', 'Ela reza todas as noites.']
  ], [['demander', 'pedir'], ['supplier', 'suplicar']], { note: '"Je vous en prie / je t\'en prie" = de nada; por favor, fique à vontade.' });

  V('reprendre', 'retomar; pegar de novo; repetir (comida)', 'A2', 900, 'Pegar outra vez; recomeçar.', 'Prendre de nouveau ; recommencer.', [
    ['Vous pouvez reprendre le bateau l\'après-midi.', 'Vocês podem pegar o barco de novo à tarde.'],
    ['Je reprends le travail lundi.', 'Volto ao trabalho na segunda.'],
    ['Tu reprends du gâteau ?', 'Quer mais bolo?']
  ], [['recommencer', 'recomeçar'], ['continuer', 'continuar']], { like: 'prendre' });

  V('valider', 'validar', 'A2', 2600, 'Tornar válido; passar o bilhete na máquina.', 'Rendre valable ; composter.', [
    ['N\'oubliez pas de valider votre ticket.', 'Não esqueçam de validar o bilhete.'],
    ['Le professeur a validé mon projet.', 'O professor aprovou meu projeto.'],
    ['Validez votre carte à l\'entrée.', 'Valide seu cartão na entrada.']
  ], [['composter', 'validar (bilhete de trem, antigo)'], ['confirmer', 'confirmar']]);

  /* ----- Unidade 6: planos, convites, presentes ----- */
  V('accrocher', 'pendurar, prender', 'A2', 3200, 'Prender algo num gancho, prego ou parede.', 'Suspendre à un crochet, à un clou.', [
    ['Hugo accroche les guirlandes.', 'O Hugo pendura as guirlandas.'],
    ['J\'ai accroché le tableau au mur.', 'Pendurei o quadro na parede.'],
    ['Accroche ta veste au portemanteau.', 'Pendura a jaqueta no cabideiro.']
  ], [['suspendre', 'suspender'], ['fixer', 'fixar']]);

  V('briller', 'brilhar', 'A2', 2800, 'Emitir ou refletir luz.', 'Émettre ou refléter de la lumière.', [
    ['Le soleil brillera toute la journée.', 'O sol vai brilhar o dia inteiro.'],
    ['Ses yeux brillent de joie.', 'Os olhos dele brilham de alegria.'],
    ['La mer brille au coucher du soleil.', 'O mar brilha no pôr do sol.']
  ], [['luire', 'reluzir'], ['éclairer', 'iluminar']]);

  V('dépasser', 'ultrapassar, passar de', 'A2', 1800, 'Ir além de um limite; passar à frente.', 'Aller au-delà ; doubler.', [
    ['Les températures ne dépasseront pas vingt-quatre degrés.', 'As temperaturas não vão passar de vinte e quatro graus.'],
    ['Il est interdit de dépasser ici.', 'É proibido ultrapassar aqui.'],
    ['Ça dépasse mes capacités !', 'Isso está além da minha capacidade!']
  ], [['doubler', 'ultrapassar (carro)'], ['excéder', 'exceder']]);

  V('déranger', 'incomodar, atrapalhar', 'A2', 1500, 'Perturbar alguém; tirar algo do lugar.', 'Gêner ; mettre en désordre.', [
    ['Je vous dérange ?', 'Estou incomodando?'],
    ['Ça ne me dérange pas du tout.', 'Não me incomoda nem um pouco.'],
    ['Ne dérangez pas les voisins après vingt-deux heures.', 'Não incomodem os vizinhos depois das 22h.']
  ], [['gêner', 'incomodar'], ['ennuyer', 'aborrecer']]);

  V('deviner', 'adivinhar', 'A2', 2300, 'Descobrir por intuição ou suposição.', 'Trouver par intuition.', [
    ['Devine qui j\'ai vu hier !', 'Adivinha quem eu vi ontem!'],
    ['Elle a deviné la surprise.', 'Ela adivinhou a surpresa.'],
    ['Tu ne devineras jamais !', 'Você nunca vai adivinhar!']
  ], [['imaginer', 'imaginar'], ['supposer', 'supor']]);

  V('prêter', 'emprestar (a alguém)', 'A2', 1700, 'Dar algo por um tempo, para ser devolvido.', 'Donner pour un temps.', [
    ['Tu me prêtes ton vélo ?', 'Você me empresta sua bicicleta?'],
    ['L\'association prête les verres gratuitement.', 'A associação empresta os copos de graça.'],
    ['Je lui ai prêté vingt euros.', 'Emprestei vinte euros para ele.']
  ], [['emprunter', 'pegar emprestado (o contrário)']], { note: 'Prêter = dar emprestado; emprunter = pegar emprestado. "Tu me prêtes ?" = "Je peux t\'emprunter ?"' });

  V('proposer', 'propor, sugerir, oferecer', 'A2', 600, 'Apresentar uma ideia ou uma oferta.', 'Présenter une idée, une offre.', [
    ['Mme Bernard propose de faire le gâteau.', 'A Sra. Bernard se oferece para fazer o bolo.'],
    ['Je te propose un café ?', 'Aceita um café?'],
    ['Ils m\'ont proposé un nouveau poste.', 'Eles me ofereceram um novo cargo.']
  ], [['suggérer', 'sugerir'], ['offrir', 'oferecer']]);

  V('souhaiter', 'desejar', 'A2', 1000, 'Desejar algo a alguém.', 'Désirer ; exprimer un vœu.', [
    ['Je te souhaite un joyeux anniversaire !', 'Desejo a você um feliz aniversário!'],
    ['Nous vous souhaitons une bonne année.', 'Desejamos a vocês um feliz ano-novo.'],
    ['Je souhaite parler au directeur.', 'Desejo falar com o diretor.']
  ], [['désirer', 'desejar'], ['espérer', 'esperar']]);

  /* ----- Verbos frequentes do A2 (vida cotidiana, trabalho, estudos) ----- */
  V('accompagner', 'acompanhar', 'A2', 1100, 'Ir junto com alguém.', 'Aller avec quelqu\'un.', [
    ['Je t\'accompagne à la gare.', 'Te acompanho até a estação.'],
    ['Elle accompagne les enfants à l\'école.', 'Ela leva as crianças à escola.'],
    ['Un verre de vin accompagne le fromage.', 'Uma taça de vinho acompanha o queijo.']
  ], [['emmener', 'levar (alguém)'], ['suivre', 'seguir']]);

  V("s'adapter", 'adaptar-se', 'A2', 1500, 'Acostumar-se a uma situação nova.', 'S\'habituer à une situation nouvelle.', [
    ['Il faut s\'adapter !', 'É preciso se adaptar!'],
    ['Les enfants s\'adaptent vite.', 'As crianças se adaptam rápido.'],
    ['Je me suis bien adapté à Lyon.', 'Eu me adaptei bem a Lyon.']
  ], [["s'habituer", 'acostumar-se']]);

  V('annuler', 'cancelar', 'A2', 1600, 'Desmarcar; anular.', 'Supprimer, déclarer nul.', [
    ['Le concert est annulé à cause de la pluie.', 'O show foi cancelado por causa da chuva.'],
    ['J\'ai dû annuler mon rendez-vous.', 'Tive que desmarcar meu compromisso.'],
    ['Vous pouvez annuler la réservation en ligne.', 'Você pode cancelar a reserva pela internet.']
  ], [['supprimer', 'suprimir'], ['reporter', 'adiar']]);

  V("s'arrêter", 'parar', 'A2', 700, 'Deixar de se mover ou de fazer algo.', 'Cesser d\'avancer ou d\'agir.', [
    ['Le bus s\'arrête devant la mairie.', 'O ônibus para em frente à prefeitura.'],
    ['Arrête-toi, tu vas tomber !', 'Para, você vai cair!'],
    ['Je vais m\'arrêter de travailler l\'année prochaine.', 'Vou parar de trabalhar no ano que vem.']
  ], [['cesser', 'cessar'], ['stopper', 'parar']]);

  V('bavarder', 'bater papo, conversar', 'A2', 3500, 'Conversar de modo descontraído.', 'Parler de choses et d\'autres.', [
    ['On a bavardé pendant des heures.', 'Ficamos batendo papo durante horas.'],
    ['Arrêtez de bavarder en classe !', 'Parem de conversar na aula!'],
    ['Elle bavarde avec la voisine.', 'Ela está de conversa com a vizinha.']
  ], [['discuter', 'conversar'], ['papoter', 'tagarelar']]);

  V('se blesser', 'machucar-se, ferir-se', 'A2', 2300, 'Sofrer um ferimento.', 'Se faire une blessure.', [
    ['Il s\'est blessé au genou.', 'Ele machucou o joelho.'],
    ['Attention, tu vas te blesser !', 'Cuidado, você vai se machucar!'],
    ['Personne ne s\'est blessé.', 'Ninguém se machucou.']
  ], [['se faire mal', 'machucar-se']]);

  V('bloquer', 'bloquear; travar', 'A2', 2200, 'Impedir a passagem ou o funcionamento.', 'Empêcher de passer ou de fonctionner.', [
    ['Mon train est bloqué à Lyon.', 'Meu trem está parado em Lyon.'],
    ['La porte est bloquée.', 'A porta está emperrada.'],
    ['Mon téléphone s\'est bloqué.', 'Meu celular travou.']
  ], [['arrêter', 'parar'], ['empêcher', 'impedir']]);

  V('bricoler', 'fazer pequenos consertos, mexer com ferramentas', 'A2', 3800, 'Fazer trabalhos manuais em casa.', 'Faire de petits travaux manuels.', [
    ['Mon père adore bricoler le week-end.', 'Meu pai adora fazer consertos no fim de semana.'],
    ['J\'ai bricolé une étagère.', 'Montei uma prateleira.'],
    ['Tu sais bricoler ?', 'Você tem jeito com ferramentas?']
  ], [['réparer', 'consertar']]);

  V('brûler', 'queimar', 'A2', 2100, 'Destruir ou ferir pelo fogo ou pelo calor.', 'Détruire ou abîmer par le feu.', [
    ['Attention, c\'est chaud, tu vas te brûler !', 'Cuidado, está quente, você vai se queimar!'],
    ['J\'ai brûlé le gâteau.', 'Queimei o bolo.'],
    ['Le soleil brûle en été.', 'O sol queima no verão.']
  ], [['cuire', 'cozinhar'], ['enflammer', 'inflamar']]);

  V('comparer', 'comparar', 'A2', 1500, 'Examinar semelhanças e diferenças.', 'Examiner les ressemblances et les différences.', [
    ['Il ne faut pas comparer Lyon et Paris !', 'Não se deve comparar Lyon e Paris!'],
    ['J\'ai comparé les prix.', 'Comparei os preços.'],
    ['Compare ta réponse avec la correction.', 'Compare sua resposta com a correção.']
  ], [['confronter', 'confrontar']]);

  V('dépenser', 'gastar (dinheiro, energia)', 'A2', 1700, 'Usar dinheiro para comprar algo.', 'Employer de l\'argent.', [
    ['J\'ai dépensé trop d\'argent ce mois-ci.', 'Gastei dinheiro demais este mês.'],
    ['Les enfants dépensent beaucoup d\'énergie.', 'As crianças gastam muita energia.'],
    ['Combien tu dépenses pour le loyer ?', 'Quanto você gasta com o aluguel?']
  ], [['payer', 'pagar'], ['économiser', 'economizar (antônimo)']], { note: '"Gastar tempo" é "passer du temps".' });

  V('discuter', 'conversar, discutir', 'A2', 900, 'Trocar ideias; debater.', 'Échanger des idées.', [
    ['On a discuté toute la soirée.', 'Conversamos a noite toda.'],
    ['Il faut discuter de ce problème.', 'Precisamos discutir esse problema.'],
    ['Ils discutent politique.', 'Eles discutem política.']
  ], [['parler', 'falar'], ['bavarder', 'bater papo']], { note: '"Discuter" é mais "conversar" do que "brigar" (= se disputer).' });

  V('durer', 'durar', 'A2', 1000, 'Ter certa duração.', 'Avoir une certaine durée.', [
    ['Le film dure deux heures.', 'O filme dura duas horas.'],
    ['Le déjeuner a duré trois heures !', 'O almoço durou três horas!'],
    ['Ça ne va pas durer.', 'Isso não vai durar.']
  ], [['continuer', 'continuar']]);

  V('échanger', 'trocar', 'A2', 2000, 'Dar uma coisa e receber outra.', 'Donner une chose contre une autre.', [
    ['Je peux échanger ce pull ?', 'Posso trocar esta blusa?'],
    ['Nous échangeons des messages tous les jours.', 'Trocamos mensagens todos os dias.'],
    ['Ils ont échangé leurs numéros.', 'Eles trocaram os números.']
  ], [['changer', 'mudar, trocar'], ['troquer', 'trocar (escambo)']]);

  V('économiser', 'economizar', 'A2', 2500, 'Guardar dinheiro; gastar menos.', 'Mettre de l\'argent de côté.', [
    ['J\'économise pour mes vacances.', 'Estou economizando para as férias.'],
    ['On économise de l\'énergie avec ces lampes.', 'Economiza-se energia com essas lâmpadas.'],
    ['Il faut économiser l\'eau.', 'É preciso economizar água.']
  ], [['épargner', 'poupar'], ['dépenser', 'gastar (antônimo)']]);

  V("s'endormir", 'adormecer, pegar no sono', 'A2', 1600, 'Começar a dormir.', 'Commencer à dormir.', [
    ['Je m\'endors devant la télé.', 'Eu durmo na frente da TV.'],
    ['Le bébé s\'est endormi tout de suite.', 'O bebê adormeceu na hora.'],
    ['Hugo s\'endort au cinéma.', 'O Hugo dorme no cinema.']
  ], [['dormir', 'dormir'], ['se réveiller', 'acordar (antônimo)']], { pattern: 'partir' });

  V('enlever', 'tirar, retirar', 'A2', 1700, 'Remover; tirar uma roupa.', 'Retirer, ôter.', [
    ['Enlève tes chaussures, s\'il te plaît.', 'Tire os sapatos, por favor.'],
    ['J\'ai enlevé les lardons de la salade.', 'Tirei o bacon da salada.'],
    ['Ils enlèvent la neige devant la maison.', 'Eles tiram a neve da frente da casa.']
  ], [['retirer', 'retirar'], ['ôter', 'tirar']]);

  V('enseigner', 'ensinar, lecionar', 'A2', 1600, 'Dar aulas; transmitir conhecimento.', 'Faire cours ; transmettre un savoir.', [
    ['Ma mère enseigne les maths.', 'Minha mãe dá aula de matemática.'],
    ['Il enseigne dans un lycée.', 'Ele leciona numa escola de ensino médio.'],
    ['La vie m\'a enseigné la patience.', 'A vida me ensinou a paciência.']
  ], [['apprendre', 'ensinar, aprender'], ['expliquer', 'explicar']]);

  V("s'entraîner", 'treinar', 'A2', 2400, 'Praticar para melhorar.', 'S\'exercer pour progresser.', [
    ['Je m\'entraîne trois fois par semaine.', 'Treino três vezes por semana.'],
    ['Entraîne-toi avec le Treino de ouvido !', 'Treine com o Treino de ouvido!'],
    ['L\'équipe s\'entraîne le mardi.', 'O time treina às terças.']
  ], [["s'exercer", 'exercitar-se'], ['pratiquer', 'praticar']]);

  V('épeler', 'soletrar', 'A2', 3800, 'Dizer as letras de uma palavra, uma a uma.', 'Dire les lettres d\'un mot une à une.', [
    ['Vous pouvez épeler votre nom ?', 'O senhor pode soletrar seu nome?'],
    ['J\'épelle : F-E-R-R-E-I-R-A.', 'Vou soletrar: F-E-R-R-E-I-R-A.'],
    ['Comment ça s\'épelle ?', 'Como se soletra isso?']
  ], [['écrire', 'escrever']]);

  V('féliciter', 'parabenizar, felicitar', 'A2', 2400, 'Dar os parabéns.', 'Complimenter pour une réussite.', [
    ['Je te félicite pour ton examen !', 'Parabéns pela prova!'],
    ['Le chef a félicité toute l\'équipe.', 'O chefe parabenizou a equipe toda.'],
    ['On les a félicités pour leur mariage.', 'Nós os parabenizamos pelo casamento.']
  ], [['complimenter', 'elogiar']], { note: '"Parabéns!" = "Félicitations !" (por uma conquista) ou "Joyeux anniversaire !" (aniversário).' });

  V('fonctionner', 'funcionar', 'A2', 1200, 'Estar em funcionamento.', 'Être en état de marche.', [
    ['L\'ascenseur ne fonctionne pas.', 'O elevador não está funcionando.'],
    ['Comment fonctionne cette machine ?', 'Como funciona esta máquina?'],
    ['Ça fonctionne très bien.', 'Funciona muito bem.']
  ], [['marcher', 'funcionar (informal)']]);

  V('fumer', 'fumar', 'A2', 2200, 'Inalar a fumaça do tabaco.', 'Aspirer la fumée du tabac.', [
    ['Je ne fume pas.', 'Eu não fumo.'],
    ['Il est interdit de fumer ici.', 'É proibido fumar aqui.'],
    ['Il a arrêté de fumer il y a deux ans.', 'Ele parou de fumar há dois anos.']
  ], [['griller une cigarette', 'fumar um cigarro (informal)']]);

  V('guérir', 'curar, sarar', 'A2', 2400, 'Recuperar a saúde ou fazer recuperar.', 'Retrouver la santé ; soigner.', [
    ['Tu es guéri ?', 'Você já sarou?'],
    ['Ce médicament va te guérir.', 'Este remédio vai te curar.'],
    ['Elle a guéri en une semaine.', 'Ela sarou em uma semana.']
  ], [['soigner', 'tratar'], ['se remettre', 'recuperar-se']]);

  V("s'habituer", 'acostumar-se', 'A2', 1900, 'Adquirir o hábito de algo.', 'Prendre l\'habitude.', [
    ['Je me suis habitué au froid.', 'Eu me acostumei ao frio.'],
    ['On s\'habitue à tout.', 'A gente se acostuma com tudo.'],
    ['Tu t\'habitues à ton nouveau travail ?', 'Você está se acostumando com o novo trabalho?']
  ], [["s'adapter", 'adaptar-se']], { note: 'S\'habituer **à**: "je m\'habitue à la vie en France".' });

  V('hésiter', 'hesitar', 'A2', 1600, 'Ficar em dúvida antes de decidir.', 'Ne pas savoir quoi décider.', [
    ['N\'hésitez pas à me poser des questions.', 'Não hesitem em me fazer perguntas.'],
    ['J\'hésite entre le rouge et le bleu.', 'Estou em dúvida entre o vermelho e o azul.'],
    ['Il a hésité avant de répondre.', 'Ele hesitou antes de responder.']
  ], [['douter', 'duvidar']]);

  V('imaginer', 'imaginar', 'A2', 1000, 'Formar uma imagem mental; supor.', 'Se représenter mentalement.', [
    ['Imagine la vue depuis le sommet !', 'Imagine a vista lá do topo!'],
    ['Je n\'imaginais pas la France comme ça.', 'Eu não imaginava a França assim.'],
    ['Tu imagines ?', 'Dá pra imaginar?']
  ], [['inventer', 'inventar'], ['supposer', 'supor']]);

  V("s'inscrire", 'inscrever-se, matricular-se', 'A2', 1800, 'Colocar o nome numa lista; matricular-se.', 'Se faire enregistrer.', [
    ['Je me suis inscrit à un cours de français.', 'Me inscrevi num curso de francês.'],
    ['Il faut s\'inscrire avant le 15 septembre.', 'É preciso se inscrever antes de 15 de setembro.'],
    ['Inscris-toi sur le site.', 'Inscreva-se no site.']
  ], [["s'enregistrer", 'registrar-se']], { like: 'écrire' });

  V('mériter', 'merecer', 'A2', 1700, 'Ser digno de algo.', 'Être digne de.', [
    ['Tu mérites des vacances !', 'Você merece férias!'],
    ['Ce restaurant mérite une visite.', 'Este restaurante merece uma visita.'],
    ['Il a mérité son succès.', 'Ele mereceu o sucesso.']
  ], [['valoir', 'valer']]);

  V('noter', 'anotar; dar nota; reparar', 'A2', 1500, 'Escrever para lembrar; avaliar.', 'Écrire pour se souvenir ; évaluer.', [
    ['Je note ton numéro.', 'Anoto seu número.'],
    ['Le professeur note les examens.', 'O professor corrige e dá nota às provas.'],
    ['Notez bien : le musée est fermé le lundi.', 'Atenção: o museu fecha às segundas.']
  ], [['écrire', 'escrever'], ['remarquer', 'notar']]);

  V('oser', 'ousar, ter coragem de', 'A2', 1900, 'Ter coragem para fazer algo.', 'Avoir le courage de.', [
    ['Je n\'ose pas parler en public.', 'Não tenho coragem de falar em público.'],
    ['Ose poser ta question !', 'Tenha coragem de fazer sua pergunta!'],
    ['Il a osé dire non.', 'Ele teve coragem de dizer não.']
  ], [['risquer', 'arriscar']]);

  V('pratiquer', 'praticar', 'A2', 1400, 'Exercer uma atividade regularmente.', 'Exercer une activité régulièrement.', [
    ['Je pratique mon français tous les jours.', 'Pratico meu francês todos os dias.'],
    ['Tu pratiques un sport ?', 'Você pratica algum esporte?'],
    ['Il faut pratiquer pour progresser.', 'É preciso praticar para progredir.']
  ], [["s'entraîner", 'treinar'], ['faire', 'fazer']]);

  V('prévenir', 'avisar; prevenir', 'A2', 1500, 'Informar com antecedência; evitar.', 'Informer à l\'avance ; empêcher.', [
    ['Préviens-moi si tu es en retard.', 'Me avise se você se atrasar.'],
    ['Je t\'avais prévenu !', 'Eu te avisei!'],
    ['Mieux vaut prévenir que guérir.', 'Melhor prevenir do que remediar.']
  ], [['avertir', 'advertir'], ['informer', 'informar']], { like: 'venir', aux: 'avoir' });

  V('profiter', 'aproveitar', 'A2', 1000, 'Tirar proveito; desfrutar.', 'Tirer avantage ; jouir de.', [
    ['Profite bien de tes vacances !', 'Aproveite bem as férias!'],
    ['J\'ai profité du soleil pour me promener.', 'Aproveitei o sol para passear.'],
    ['On profite de la vie.', 'A gente aproveita a vida.']
  ], [['apprécier', 'apreciar']], { note: 'Profiter **de**: "profiter du beau temps".' });

  V('regretter', 'lamentar, arrepender-se; sentir falta', 'A2', 1100, 'Sentir pesar por algo; ter saudade.', 'Éprouver du regret.', [
    ['Je ne regrette rien.', 'Não me arrependo de nada.'],
    ['Je regrette, le magasin est fermé.', 'Sinto muito, a loja está fechada.'],
    ['Il regrette son pays.', 'Ele sente falta do país dele.']
  ], [["s'excuser", 'desculpar-se'], ['manquer', 'fazer falta']]);

  V('remarquer', 'notar, reparar, perceber', 'A2', 1200, 'Dar-se conta de algo.', 'Apercevoir, constater.', [
    ['Tu as remarqué ? Il a changé de lunettes.', 'Você reparou? Ele trocou de óculos.'],
    ['Personne n\'a remarqué mon erreur.', 'Ninguém percebeu meu erro.'],
    ['J\'ai remarqué que tu parles mieux.', 'Percebi que você fala melhor.']
  ], [['noter', 'notar'], ["s'apercevoir", 'perceber']]);

  V('remplacer', 'substituir', 'A2', 1300, 'Pôr uma coisa ou pessoa no lugar de outra.', 'Mettre à la place de.', [
    ['Amélie va remplacer sa grand-mère.', 'A Amélie vai substituir a avó.'],
    ['On remplace le beurre par de l\'huile.', 'Substituímos a manteiga por óleo.'],
    ['Il faut remplacer la batterie.', 'É preciso trocar a bateria.']
  ], [['changer', 'trocar']]);

  V('se renseigner', 'informar-se, pedir informações', 'A2', 3000, 'Buscar informações.', 'Chercher des informations.', [
    ['Je me suis renseigné à l\'office de tourisme.', 'Me informei no posto de turismo.'],
    ['Renseigne-toi sur les horaires.', 'Informe-se sobre os horários.'],
    ['Il faut se renseigner avant de partir.', 'É preciso se informar antes de viajar.']
  ], [["s'informer", 'informar-se'], ['demander', 'perguntar']]);

  V('rêver', 'sonhar', 'A2', 1500, 'Ter sonhos; desejar muito.', 'Faire des rêves ; désirer fortement.', [
    ['J\'ai rêvé de toi cette nuit.', 'Sonhei com você esta noite.'],
    ['Elle rêve de visiter le Japon.', 'Ela sonha em conhecer o Japão.'],
    ['Tu rêves !', 'Vai sonhando! (impossível)']
  ], [['imaginer', 'imaginar'], ['souhaiter', 'desejar']], { note: 'Rêver **de**: "rêver de quelqu\'un / de faire quelque chose".' });

  V('sonner', 'tocar (campainha, telefone)', 'A2', 1800, 'Produzir um som (sino, campainha, telefone).', 'Produire un son.', [
    ['Le téléphone a sonné.', 'O telefone tocou.'],
    ['On sonne à la porte !', 'Tocaram a campainha!'],
    ['Mon réveil sonne à six heures.', 'Meu despertador toca às seis.']
  ], [['retentir', 'ressoar']]);

  V('tousser', 'tossir', 'A2', 3500, 'Expulsar o ar com força pela garganta.', 'Avoir une toux.', [
    ['Je tousse depuis trois jours.', 'Estou tossindo há três dias.'],
    ['Le bébé tousse la nuit.', 'O bebê tosse à noite.'],
    ['Il a beaucoup toussé.', 'Ele tossiu muito.']
  ], [['éternuer', 'espirrar']]);

  V('tutoyer', 'tratar por "tu"', 'A2', 4000, 'Usar "tu" para falar com alguém.', 'Dire "tu" à quelqu\'un.', [
    ['On peut se tutoyer ?', 'Podemos nos tratar por "tu"?'],
    ['Je tutoie mes collègues.', 'Trato meus colegas por "tu".'],
    ['Les jeunes se tutoient tout de suite.', 'Os jovens já se tratam por "tu" de cara.']
  ], [['vouvoyer', 'tratar por "vous" (antônimo)']]);

  V('vérifier', 'verificar, conferir', 'A2', 1300, 'Confirmar se algo está certo.', 'Contrôler l\'exactitude.', [
    ['Vérifie l\'heure du train.', 'Confira o horário do trem.'],
    ['J\'ai vérifié deux fois.', 'Conferi duas vezes.'],
    ['Vous pouvez vérifier mon adresse ?', 'O senhor pode verificar meu endereço?']
  ], [['contrôler', 'controlar'], ['confirmer', 'confirmar']]);

  V('vieillir', 'envelhecer', 'A2', 2600, 'Ficar mais velho.', 'Devenir vieux.', [
    ['On vieillit tous.', 'Todos nós envelhecemos.'],
    ['Ce vin vieillit bien.', 'Este vinho envelhece bem.'],
    ['Elle n\'a pas vieilli !', 'Ela não envelheceu nada!']
  ], [['grandir', 'crescer'], ['rajeunir', 'rejuvenescer (antônimo)']]);

  V('vouvoyer', 'tratar por "vous"', 'A2', 4000, 'Usar "vous" para falar com uma só pessoa (respeito).', 'Dire "vous" à quelqu\'un.', [
    ['Je vouvoie ma voisine.', 'Trato minha vizinha por "vous".'],
    ['Au travail, on vouvoie le directeur.', 'No trabalho, tratamos o diretor por "vous".'],
    ['Vous pouvez me tutoyer, ne me vouvoyez pas !', 'Pode me chamar de "tu", não me trate por "vous"!']
  ], [['tutoyer', 'tratar por "tu" (antônimo)']]);
})();
