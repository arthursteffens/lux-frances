/* Dicionário de verbos — vocabulário profissional (RH, empresas de tecnologia), usado na aba Profissional */
(function () {
  var V = LUX.verb;

  V('recruter', 'recrutar; contratar', 'A2', 2600, 'Procurar e contratar pessoas para uma empresa.', 'Engager du personnel pour une entreprise.', [
    ['Nous recrutons dix développeurs cette année.', 'Estamos contratando dez desenvolvedores este ano.'],
    ['Elle a recruté toute l\'équipe produit.', 'Ela recrutou toda a equipe de produto.'],
    ['On recrutera d\'abord en interne.', 'Vamos recrutar primeiro internamente.']
  ], [['embaucher', 'contratar'], ['engager', 'contratar']]);

  V('embaucher', 'contratar (um funcionário)', 'A2', 3800, 'Dar um emprego a alguém; contratar.', 'Prendre quelqu\'un comme salarié.', [
    ['L\'entreprise embauche des ingénieurs.', 'A empresa está contratando engenheiros.'],
    ['Nous avons embauché onze personnes en octobre.', 'Contratamos onze pessoas em outubro.'],
    ['Ils embaucheront deux juristes l\'année prochaine.', 'Eles vão contratar dois advogados no ano que vem.']
  ], [['recruter', 'recrutar']], { note: 'O contrário é licencier (demitir). "Une embauche" = uma contratação.' });

  V('gérer', 'gerenciar; administrar; lidar com', 'A2', 1900, 'Administrar, cuidar de algo ou de uma equipe; lidar com uma situação.', 'Administrer, s\'occuper de quelque chose ou d\'une équipe.', [
    ['Je gère une équipe de huit personnes.', 'Gerencio uma equipe de oito pessoas.'],
    ['Il a très bien géré le conflit.', 'Ele lidou muito bem com o conflito.'],
    ['Qui gère le budget du projet ?', 'Quem administra o orçamento do projeto?']
  ], [['diriger', 'dirigir'], ['organiser', 'organizar']], { note: 'Muda o acento: je gère, nous gérons, ils gèrent.' });

  V('analyser', 'analisar', 'A2', 2400, 'Examinar algo em detalhe para entender.', 'Étudier quelque chose en détail pour le comprendre.', [
    ['J\'analyse les chiffres de l\'enquête.', 'Analiso os números da pesquisa.'],
    ['Nous avons analysé les départs de l\'année.', 'Analisamos as saídas do ano.'],
    ['Il faut analyser les causes du problème.', 'É preciso analisar as causas do problema.']
  ], [['étudier', 'estudar'], ['examiner', 'examinar']]);

  V('augmenter', 'aumentar; dar aumento', 'A2', 1200, 'Ficar ou tornar maior.', 'Devenir ou rendre plus grand.', [
    ['Les départs augmentent dans l\'équipe.', 'As saídas estão aumentando na equipe.'],
    ['Le taux de départ a augmenté de trois points.', 'A rotatividade subiu três pontos.'],
    ['On va augmenter son salaire en janvier.', 'Vamos aumentar o salário dele em janeiro.']
  ], [['monter', 'subir'], ['grandir', 'crescer']], { note: 'O contrário: baisser, diminuer. "Une augmentation" = um aumento (de salário).' });

  V('contrôler', 'controlar; verificar; fiscalizar', 'A2', 2300, 'Verificar se algo está correto; ter controle sobre algo.', 'Vérifier ; avoir la maîtrise de quelque chose.', [
    ['Le régulateur contrôle les banques.', 'O regulador fiscaliza os bancos.'],
    ['Je contrôle les contrats avant la signature.', 'Verifico os contratos antes da assinatura.'],
    ['La CSSF contrôlera nos activités.', 'A CSSF vai fiscalizar nossas atividades.']
  ], [['vérifier', 'verificar']]);

  V('nommer', 'nomear; designar', 'A2', 2700, 'Dar um nome; designar alguém para um cargo.', 'Donner un nom ; désigner quelqu\'un pour un poste.', [
    ['Nous allons nommer deux nouveaux managers.', 'Vamos nomear dois novos gestores.'],
    ['Elle a été nommée directrice en mars.', 'Ela foi nomeada diretora em março.'],
    ['Qui nomme les responsables d\'équipe ?', 'Quem nomeia os líderes de equipe?']
  ], [['désigner', 'designar'], ['choisir', 'escolher']]);

  V('signer', 'assinar', 'A2', 2100, 'Escrever o próprio nome num documento para aprová-lo.', 'Mettre son nom sur un document pour l\'approuver.', [
    ['Signez votre contrat avant lundi.', 'Assine seu contrato antes de segunda.'],
    ['J\'ai signé la lettre ce matin.', 'Assinei a carta hoje de manhã.'],
    ['On peut signer en ligne.', 'Dá para assinar on-line.']
  ], [['approuver', 'aprovar']], { note: '"La signature" = a assinatura.' });

  V('confirmer', 'confirmar', 'A2', 2500, 'Dizer que algo é certo ou que está combinado.', 'Dire qu\'une chose est sûre ou décidée.', [
    ['Pourriez-vous me confirmer la date ?', 'Poderia me confirmar a data?'],
    ['Je vous confirme notre rendez-vous de jeudi.', 'Confirmo nossa reunião de quinta.'],
    ['Les chiffres ont confirmé le problème.', 'Os números confirmaram o problema.']
  ], [['valider', 'validar']]);

  V('postuler', 'candidatar-se (a uma vaga)', 'A2', 5200, 'Enviar uma candidatura para um emprego.', 'Envoyer sa candidature pour un emploi.', [
    ['Je postule à un poste de HR Business Partner.', 'Estou me candidatando a uma vaga de HR Business Partner.'],
    ['Elle a postulé chez trois entreprises.', 'Ela se candidatou em três empresas.'],
    ['Vous pouvez postuler en ligne.', 'Você pode se candidatar on-line.']
  ], [['se présenter', 'apresentar-se']], { note: 'Postuler à un poste / postuler chez une entreprise.' });

  V('résumer', 'resumir', 'A2', 3300, 'Dizer o essencial em poucas palavras.', 'Dire l\'essentiel en peu de mots.', [
    ['Pour résumer, nous avons trois priorités.', 'Resumindo, temos três prioridades.'],
    ['Tu peux résumer la réunion ?', 'Você pode resumir a reunião?'],
    ['J\'ai résumé le rapport en une page.', 'Resumi o relatório em uma página.']
  ], [['expliquer', 'explicar']]);

  V('représenter', 'representar', 'A2', 1700, 'Corresponder a uma parte; falar em nome de alguém.', 'Correspondre à une partie ; agir au nom de quelqu\'un.', [
    ['Les femmes représentent quarante-cinq pour cent de l\'entreprise.', 'As mulheres representam 45% da empresa.'],
    ['Je représente l\'équipe RH au comité.', 'Represento a equipe de RH no comitê.'],
    ['Les salaires représentent la plus grande partie des coûts.', 'Os salários representam a maior parte dos custos.']
  ], [['correspondre', 'corresponder']]);

  V('relancer', 'retomar; cobrar (com educação); relançar', 'A2', 4100, 'Voltar a contatar alguém que não respondeu; dar novo impulso.', 'Contacter de nouveau quelqu\'un qui n\'a pas répondu.', [
    ['Je me permets de vous relancer.', 'Tomo a liberdade de retomar o assunto.'],
    ['J\'ai relancé le candidat par e-mail.', 'Cobrei uma resposta do candidato por e-mail.'],
    ['Il faut relancer le projet.', 'É preciso dar novo impulso ao projeto.']
  ], [['rappeler', 'ligar de volta; lembrar']]);

  V('reparler', 'voltar a falar (de algo)', 'A2', 5600, 'Falar de novo sobre um assunto.', 'Parler de nouveau d\'un sujet.', [
    ['On en reparle la semaine prochaine.', 'Voltamos a falar disso semana que vem.'],
    ['Je voudrais reparler du budget.', 'Eu queria voltar a falar do orçamento.'],
    ['Nous en avons reparlé hier.', 'Voltamos a falar disso ontem.']
  ], [['parler', 'falar']]);

  V('réunir', 'reunir; juntar', 'A2', 2000, 'Juntar pessoas ou coisas; (se réunir) fazer uma reunião.', 'Rassembler des personnes ou des choses ; (se réunir) tenir une réunion.', [
    ['Le comité de direction se réunit le lundi.', 'O comitê de diretoria se reúne às segundas.'],
    ['Je réunis les managers jeudi.', 'Reúno os gestores na quinta.'],
    ['Nous avons réuni toutes les données.', 'Reunimos todos os dados.']
  ], [['rassembler', 'reunir']]);

  V('convenir', 'combinar; ser conveniente', 'A2', 1900, 'Estar de acordo sobre algo; ser adequado para alguém.', 'Se mettre d\'accord ; être adapté à quelqu\'un.', [
    ['Comme convenu, je vous envoie le plan.', 'Conforme combinado, envio o plano.'],
    ['Jeudi à dix heures, ça vous convient ?', 'Quinta às dez, fica bom para você?'],
    ['Nous avons convenu d\'un rendez-vous.', 'Combinamos uma reunião.']
  ], [['accepter', 'aceitar']], { like: 'venir', aux: 'avoir' });

  V('limiter', 'limitar', 'A2', 2200, 'Pôr um limite.', 'Fixer une limite.', [
    ['On limite les réunions à trente minutes.', 'Limitamos as reuniões a trinta minutos.'],
    ['Le nombre de jours de télétravail est limité.', 'O número de dias de teletrabalho é limitado.'],
    ['Il faut limiter les coûts.', 'É preciso limitar os custos.']
  ], [['réduire', 'reduzir']]);

  V('rattacher', 'vincular; subordinar (a um chefe ou setor)', 'B1', 6200, 'Ligar algo ou alguém a um setor ou a um chefe.', 'Relier quelqu\'un ou quelque chose à un service ou à un responsable.', [
    ['Le poste est rattaché à la directrice des ressources humaines.', 'O cargo se reporta à diretora de RH.'],
    ['Je suis rattachée au directeur général.', 'Reporto-me ao CEO.'],
    ['On va rattacher cette équipe au produit.', 'Vamos subordinar esta equipe à área de produto.']
  ], [['relier', 'ligar']], { note: '"Être rattaché(e) à" = reportar-se a (estrutura hierárquica).' });

  V('réglementer', 'regulamentar; regular', 'B1', 6800, 'Estabelecer regras oficiais para uma atividade.', 'Fixer des règles officielles pour une activité.', [
    ['L\'État réglemente le secteur financier.', 'O Estado regula o setor financeiro.'],
    ['Le secteur est très réglementé.', 'O setor é muito regulado.'],
    ['Il faut réglementer l\'usage des données.', 'É preciso regulamentar o uso dos dados.']
  ], [['contrôler', 'controlar']]);
})();
