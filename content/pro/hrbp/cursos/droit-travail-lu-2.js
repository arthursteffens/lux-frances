/* Curso HRBP, Parte 2: aprofundamento do direito do trabalho em Luxemburgo.
   Fontes (consultadas em 27/11/2026): guichet.public.lu (páginas de "Entreprises → Ressources humaines"), itm.public.lu,
   impotsdirects.public.lu, statistiques.public.lu (STATEC). Datas das páginas variam (2016–2026): ao atualizar, confira cada valor.
   Convenção do texto: *itálico* = termo em francês (fica clicável no app); siglas no padrão **SIGLA** (*nome em francês*): explicação. */
LUX.registerProCourse({
  id: 'droit-travail-lu-2', lang: 'fr', hours: 4, requires: 'droit-travail-lu',
  title: 'Direito do trabalho em Luxemburgo — Parte 2: aprofundamento',
  titleFr: 'Approfondissement du droit du travail luxembourgeois',
  note: '**Parte 2.** Supõe a Parte 1 concluída. Cada módulo traz as regras, frases-chave em francês, um **estudo de caso** (pense na resposta antes de abrir) e exercícios. Conteúdo conferido em **novembro de 2026** no portal **guichet.lu**, na **ITM** (*Inspection du travail et des mines*) e na **ACD** (*Administration des contributions directes*). É material de estudo: não substitui o texto do *Code du travail*, a *convention collective* da empresa nem um advogado. Valores em euros mudam com a *indexation* (indexação).',
  modules: [
    /* ---------- 1 ---------- */
    {
      id: 'm1', title: 'Cláusulas e mudanças no contrato', titleFr: 'Clauses du contrat, modification, temps partiel et intérim',
      blocks: [
        { type: 'intro', textPt: 'Na Parte 1 vimos o contrato básico (*CDI*, *CDD*, *période d\'essai*). Agora entram as perguntas que o gestor faz **depois** da contratação: "posso proibir a pessoa de ir para o concorrente?", "posso reduzir o salário dela?", "posso contratar meio período?", "e um temporário de agência?".' },
        { type: 'rules', items: [
          { title: 'A *clause de non-concurrence*', textPt: 'Proíbe o ex-empregado de abrir **uma atividade própria** (*activité indépendante*) que concorra com a empresa. Não pode proibi-lo de ser **empregado** de outra empresa. Condições: acordo entre as partes no contrato; empregado **maior de idade** na assinatura; ligada a **um setor profissional determinado** e a atividades similares; no máximo **12 meses** depois do fim do contrato; no máximo o **território de Luxemburgo**; e só vale se o salário anual bruto na saída passar de um **mínimo legal indexado** (o **guichet.lu** indica **59.786,43 €**; o valor sobe com a indexação — confira). Não se aplica se o empregador dispensou sem respeitar o aviso prévio, ou se uma *faute grave* foi depois julgada abusiva. Cláusula que passa dos limites é **reduzida**, não anulada.',
            examples: [{ fr: 'La clause de non-concurrence est limitée à douze mois.', pt: 'A cláusula de não concorrência é limitada a doze meses.' }] },
          { title: 'Mudar o contrato em prejuízo: a *modification en défaveur*', textPt: 'Reduzir o salário, rebaixar a qualificação, mudar a jornada ou acrescentar uma não concorrência são mudanças de **cláusulas essenciais**. O empregador precisa seguir **o mesmo procedimento de uma dispensa**: carta registrada (*lettre recommandée*) ou entregue contra assinatura, com o **aviso prévio** por tempo de casa (2, 4 ou 6 meses) e, em empresas com mais de 150 empregados, **entrevista prévia** (*entretien préalable*). O empregado pode pedir os **motivos** em 1 mês. Se ele recusar e sair, a saída é tratada como **dispensa** e pode ser julgada abusiva. Atenção: se ele só **protesta** e continua trabalhando, isso **vale aceitação**. Horário, local e tarefas costumam ser cláusulas **acessórias**, com regras mais leves.',
            examples: [{ fr: 'Toute modification essentielle du contrat doit être notifiée par écrit.', pt: 'Toda modificação essencial do contrato deve ser notificada por escrito.' }] },
          { title: 'Meio período: o *temps partiel*', textPt: 'Antes de criar um posto de meio período, consulte a **delegação do pessoal** (*délégation du personnel*) e declare a vaga à **ADEM** (*Agence pour le développement de l\'emploi*): agência pública de emprego. O contrato precisa dizer as **horas semanais**, **como se distribuem** na semana e os **limites das horas extras**. Sem regra contrária no contrato, a pessoa pode trabalhar até **20% a mais** do que o contratado num dia ou numa semana (20 h → até 24 h), mas a média em 4 semanas não pode passar do contratado. Recusar horas além do combinado **não** é motivo de dispensa. Quem trabalha em tempo integral e pede meio período deve ser informado **com prioridade** das vagas que surgirem.',
            examples: [{ fr: 'Elle travaille à temps partiel, vingt heures par semaine.', pt: 'Ela trabalha em meio período, vinte horas por semana.' }] },
          { title: 'Temporário de agência: o *intérim*', textPt: 'A empresa usuária só pode usar um temporário para **uma tarefa precisa e não durável** (*une tâche précise et non durable*), nunca para a atividade normal e permanente. O *contrat de mission* dura no máximo **12 meses, renovações incluídas**, com no máximo **2 renovações**. Passou disso, ou foi feito de boca, vira **CDI**. Antes de pôr outro temporário ou um *CDD* no mesmo posto, há uma carência de **1/3 da duração** da missão anterior.',
            examples: [{ fr: "L'entreprise a recours à un intérimaire pour un projet de trois mois.", pt: 'A empresa recorre a um temporário para um projeto de três meses.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'la clause de non-concurrence', pt: 'a cláusula de não concorrência' }, { fr: 'la concurrence déloyale', pt: 'a concorrência desleal' },
            { fr: 'la modification du contrat', pt: 'a modificação do contrato' }, { fr: "l'avenant", pt: 'o aditivo (ao contrato)' },
            { fr: 'le temps partiel', pt: 'o meio período, o tempo parcial' }, { fr: 'le temps plein', pt: 'o tempo integral' },
            { fr: "l'intérimaire", pt: 'o(a) temporário(a) de agência' }, { fr: 'le contrat de mission', pt: 'o contrato de missão (temporário)' }
          ] }
        ] },
        { type: 'case', textPt: 'O gestor de produto quer **cortar 10% do salário** de um desenvolvedor sênior "porque o projeto acabou" e pede que você mande um e-mail avisando que a mudança vale a partir do mês que vem. O que você responde?',
          answerPt: 'Não dá para fazer por e-mail nem de um mês para o outro. Reduzir salário é mudança de **cláusula essencial** em prejuízo do empregado: exige carta registrada ou entregue contra assinatura, com **motivos reais** e o **aviso prévio** do tempo de casa (2, 4 ou 6 meses) — e entrevista prévia se a empresa tiver mais de 150 empregados. Se ele recusar e sair, isso conta como **dispensa**, que pode ser julgada **abusiva**. Proponha alternativas: uma nova função com acordo escrito (*avenant*) ou um plano de desenvolvimento.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Em empresas de tecnologia, a *clause de non-concurrence* raramente protege o que o gestor quer: ela **não impede** a pessoa de ser contratada por um concorrente, só de abrir o próprio negócio. Para proteger código, clientes e segredos, o que funciona é uma boa **cláusula de confidencialidade** (*clause de confidentialité*) e a regra geral contra a *concurrence déloyale*.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/citoyens/travail/fin-contrat/demission/clauses-non-concurrence.html', label: 'guichet.lu — cláusula de não concorrência' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/contrat-convention/contrat-travail/modification.html', label: 'guichet.lu — modificação do contrato' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/contrat-convention/contrat-travail/temps-partiel.html', label: 'guichet.lu — meio período' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/contrat-convention/contrat-travail/interim.html', label: 'guichet.lu — trabalho temporário' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Uma *clause de non-concurrence* pode proibir o ex-empregado de…', options: ['…abrir um negócio próprio concorrente em Luxemburgo, por até 12 meses.', '…trabalhar como empregado em qualquer concorrente.', '…trabalhar no setor por 3 anos.', '…trabalhar em qualquer país da União Europeia.'], answer: 0,
          explanationPt: 'Ela só atinge a **atividade própria** (*activité indépendante*), por no máximo 12 meses e no território de Luxemburgo.' },
        { type: 'multiple_choice', prompt: 'A empresa notificou corretamente uma redução de salário. O empregado protesta por e-mail, mas continua trabalhando normalmente. O que acontece?', options: ['O protesto sem saída vale aceitação da mudança.', 'A mudança fica suspensa até o tribunal decidir.', 'A mudança é nula.', 'O empregado ganha uma indenização automática.'], answer: 0,
          explanationPt: 'Para contestar, ele precisa recusar e sair; aí a saída conta como dispensa, que pode ser julgada abusiva.' },
        { type: 'multiple_choice', prompt: 'Uma pessoa com contrato de 20 h por semana. Sem nada diferente no contrato, até quantas horas ela pode trabalhar numa semana?', options: ['24 h', '20 h', '30 h', '40 h'], answer: 0,
          explanationPt: 'Até 20% a mais do que o contratado, desde que a média em 4 semanas fique nas 20 h.' },
        { type: 'multiple_choice', prompt: 'Qual o máximo de um *contrat de mission* (temporário) para a mesma pessoa no mesmo posto?', options: ['12 meses, com no máximo 2 renovações.', '24 meses, com 2 renovações.', '6 meses, sem renovação.', 'Não há limite.'], answer: 0,
          explanationPt: 'Passou de 12 meses (renovações incluídas), ou foi feito de boca, vira CDI.' },
        { type: 'multiple_choice', prompt: 'O gestor quer mudar o horário de entrada da equipe de 9h para 9h30. Em regra, isso é…', options: ['…uma cláusula acessória, com regras mais leves.', '…uma cláusula essencial: procedimento de dispensa.', '…proibido pela lei.', '…algo que só a ITM pode autorizar.'], answer: 0,
          explanationPt: 'Horário, local e tarefas costumam ser acessórios. Salário, qualificação e jornada são essenciais.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le temps partiel', 'meio período'], ["l'avenant", 'aditivo ao contrato'], ["l'intérimaire", 'temporário de agência'], ['la concurrence déloyale', 'concorrência desleal']] }
      ]
    },

    /* ---------- 2 ---------- */
    {
      id: 'm2', title: 'Teletrabalho e fronteiriços', titleFr: 'Le télétravail et les travailleurs frontaliers',
      blocks: [
        { type: 'intro', textPt: 'Quase metade das pessoas que trabalham em Luxemburgo mora na **França**, na **Bélgica** ou na **Alemanha**: são os *frontaliers* (fronteiriços). Para elas, cada dia de *télétravail* (teletrabalho) em casa é um dia de trabalho **em outro país** — e isso mexe com **imposto** e **previdência**. É uma das perguntas mais frequentes que o HRBP recebe em Luxemburgo.' },
        { type: 'rules', items: [
          { title: 'O teletrabalho na lei', textPt: 'O teletrabalho é regulado por um **acordo entre sindicatos e empregadores** (*convention interprofessionnelle*) que um regulamento do governo tornou obrigatório para todas as empresas. Pontos-chave: depende de **acordo** — o empregador não pode impô-lo, e recusar **não** é motivo de dispensa; deve ser confirmado **por escrito** (no contrato ou num aditivo); o empregador fornece e mantém os equipamentos e paga os **custos diretos** combinados, como a comunicação; e o teletrabalhador tem os **mesmos direitos** de quem está no escritório.',
            examples: [{ fr: 'Le télétravail est basé sur le volontariat.', pt: 'O teletrabalho é baseado no voluntariado.' }] },
          { title: 'Imposto: a regra dos 34 dias', textPt: 'Pelos acordos fiscais entre os países, o fronteiriço pode trabalhar **até 34 dias por ano** fora de Luxemburgo (em casa, em viagem) e continuar pagando imposto **só em Luxemburgo**. Os 34 dias valem hoje para **França**, **Bélgica** e **Alemanha** (confira a cada ano: são acordos que mudam). Meio dia fora conta como **um dia inteiro**. Passou do limite, **todos** os dias fora de Luxemburgo — inclusive os 34 primeiros — passam a ser tributados no país onde a pessoa mora.',
            examples: [{ fr: 'Au-delà de trente-quatre jours, le salaire est imposable dans le pays de résidence.', pt: 'Além de trinta e quatro dias, o salário é tributável no país de residência.' }] },
          { title: 'Previdência: 25% e o acordo de 49%', textPt: 'A regra europeia diz: se a pessoa faz **25% ou mais** do trabalho no país onde mora, a previdência (*sécurité sociale*) passa para esse país — e a empresa teria de pagar contribuições lá. Um **acordo-quadro** europeu (*accord-cadre*) permite chegar a **menos de 50%** de teletrabalho no país de residência mantendo a previdência em Luxemburgo, se: o teletrabalho é feito **só** no país de residência, há **acordo** entre empresa e empregado, e o empregador faz o **pedido** à **CCSS** (*Centre commun de la sécurité sociale*): o órgão que recebe as declarações e emite o **formulário A1**, que prova onde a pessoa está segurada.',
            examples: [{ fr: "L'employeur doit demander le formulaire A1.", pt: 'O empregador deve pedir o formulário A1.' }] },
          { title: 'Imposto e previdência são contas separadas', textPt: 'Os dois limites são **independentes**. Um fronteiriço francês com 2 dias de teletrabalho por semana fica abaixo de 50% (previdência ok com o acordo-quadro), mas faz uns 90 dias por ano fora — muito além dos 34 dias do imposto. Por isso muitas empresas de Luxemburgo têm uma **política de teletrabalho** que limita os dias e pede que as pessoas **registrem** onde trabalharam.',
            examples: [{ fr: 'Nous comptons les jours de télétravail de chaque frontalier.', pt: 'Contamos os dias de teletrabalho de cada fronteiriço.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le télétravail', pt: 'o teletrabalho' }, { fr: 'le télétravailleur', pt: 'o teletrabalhador' },
            { fr: 'le frontalier / la frontalière', pt: 'o(a) fronteiriço(a)' }, { fr: 'le pays de résidence', pt: 'o país de residência' },
            { fr: 'la sécurité sociale', pt: 'a previdência social' }, { fr: "l'impôt", pt: 'o imposto' },
            { fr: 'le seuil', pt: 'o limite, o teto' }, { fr: 'le volontariat', pt: 'o voluntariado (por vontade própria)' }
          ] }
        ] },
        { type: 'case', textPt: 'Uma engenheira que mora em Metz (França) pede para trabalhar de casa **toda sexta-feira** durante o ano inteiro. O gestor acha ótimo. Que alerta você dá antes de aprovar?',
          answerPt: 'Uma sexta por semana dá cerca de **45 dias** por ano fora de Luxemburgo: passa dos **34 dias** do acordo fiscal, e aí **todos** os dias fora passam a ser tributados na França — ela teria de declarar e pagar imposto lá. Na previdência, 1 dia em 5 é **20%**, abaixo de 25%: continua em Luxemburgo. Alternativas: limitar a sexta a parte do ano (por exemplo, 34 sextas), alternar semanas, ou ela decidir sabendo do efeito fiscal. Registre o acordo **por escrito**.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Mantenha uma **tabela simples por país** (França, Bélgica, Alemanha) com os limites atuais e o link oficial, e revise todo ano: esses números mudam com acordos novos. Em dúvida sobre um caso concreto, peça ao empregado que consulte a administração fiscal do país dele — o HRBP orienta, mas não faz a declaração de imposto de ninguém.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conditions-travail/travail-distance/teletravail.html', label: 'guichet.lu — teletrabalho' },
          { to: 'https://frontaliers-grandest.eu/accueil/salaries/france-luxembourg/teletravail/', label: 'Frontaliers Grand Est — teletrabalho França ↔ Luxemburgo' },
          { to: 'https://ccss.public.lu', label: 'CCSS — Centre commun de la sécurité sociale' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Um fronteiriço belga fez 40 dias de teletrabalho em casa no ano. Para o imposto, o que acontece?', options: ['Os 40 dias passam a ser tributados na Bélgica.', 'Só os 6 dias acima de 34 são tributados na Bélgica.', 'Nada: o limite é de 50%.', 'Ele perde a previdência em Luxemburgo.'], answer: 0,
          explanationPt: 'Passou de 34 dias, **todos** os dias trabalhados fora de Luxemburgo passam a ser tributados no país de residência.' },
        { type: 'multiple_choice', prompt: 'Para a previdência, a partir de quanto trabalho no país de residência a regra europeia muda o país de seguro (sem o acordo-quadro)?', options: ['25%', '10%', '50%', '34 dias'], answer: 0,
          explanationPt: 'O acordo-quadro permite ir até menos de 50%, com pedido à CCSS.' },
        { type: 'multiple_choice', prompt: 'Meio dia de trabalho em casa, no outro país, conta como…', options: ['…um dia inteiro.', '…meio dia.', '…nada, se for menos de 4 horas.', '…dois dias.'], answer: 0,
          explanationPt: 'Para a regra dos 34 dias, meio dia fora conta como um dia inteiro.' },
        { type: 'multiple_choice', prompt: 'O empregador pode obrigar alguém a trabalhar de casa?', options: ['Não: o teletrabalho depende de acordo, e recusar não é motivo de dispensa.', 'Sim, se avisar com 1 semana.', 'Sim, se a pessoa for fronteiriça.', 'Só a ITM pode decidir.'], answer: 0,
          explanationPt: 'O teletrabalho é voluntário (*volontariat*) e confirmado por escrito.' },
        { type: 'multiple_choice', prompt: 'O que é o formulário A1?', options: ['O documento que prova em que país a pessoa está segurada na previdência.', 'O formulário de declaração de imposto.', 'O contrato de teletrabalho.', 'A autorização de trabalho para estrangeiros.'], answer: 0,
          explanationPt: 'Com o acordo-quadro, o empregador pede à CCSS a confirmação de que a lei de Luxemburgo continua valendo.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le seuil', 'o limite'], ['le pays de résidence', 'país onde a pessoa mora'], ['le frontalier', 'quem mora em outro país e trabalha em Luxemburgo'], ["l'impôt", 'o imposto']] }
      ]
    },

    /* ---------- 3 ---------- */
    {
      id: 'm3', title: 'Tempo de trabalho avançado', titleFr: "L'organisation du temps de travail",
      blocks: [
        { type: 'intro', textPt: 'Lembrando a Parte 1: **8 h por dia e 40 h por semana**, no máximo **10 h por dia e 48 h por semana** com horas extras. A lei exige ainda **11 horas seguidas de descanso** por dia e **44 horas seguidas** por semana, e uma pausa quando o dia passa de **6 horas**. Neste módulo: como a empresa **organiza** essas horas e o que muda à noite, no domingo e no feriado.' },
        { type: 'rules', items: [
          { title: 'Período de referência, POT e horário flexível', textPt: 'As horas podem variar de semana a semana, desde que a **média** no *période de référence* (período de referência) fique em 40 h. Em regra, esse período é de **4 semanas ou 1 mês**; uma *convention collective* pode aumentá-lo (no máximo 12 meses). Para usar esse sistema, a empresa precisa de um **POT** (*plan d\'organisation du travail*): plano com as horas de cada período, apresentado à **delegação do pessoal** pelo menos **5 dias antes** e comunicado à **ITM** (*Inspection du travail et des mines*). Mudanças no POT: aviso de **3 dias**. Alternativa: o **horário flexível** (*horaire mobile*), com faixas fixas e móveis e um **saldo de horas** no fim do período.',
            examples: [{ fr: "Le plan d'organisation du travail est communiqué cinq jours avant.", pt: 'O plano de organização do trabalho é comunicado cinco dias antes.' }] },
          { title: 'Trabalho noturno', textPt: 'A noite vai das **22h às 6h** (23h–6h em hotelaria e restauração). O trabalho noturno **não é proibido nem precisa de autorização**. Média de **8 h por 24 h** para quem trabalha à noite (nunca mais de 8 h nos postos de risco). **Adicional noturno** só é obrigatório se a *convention collective* prever (mínimo de 15%) ou em hotelaria e restauração (25%, a partir da 1h). Quem trabalha à noite tem exames médicos periódicos.',
            examples: [{ fr: 'Le travail de nuit commence à vingt-deux heures.', pt: 'O trabalho noturno começa às vinte e duas horas.' }] },
          { title: 'Domingo: adicional de 70%', textPt: 'Em princípio, o trabalho no **domingo é proibido**, com exceções por setor ou tipo de atividade (ex.: operação contínua, comércio, urgências) e **aviso prévio à ITM**. A delegação do pessoal deve ser informada antes. Cada hora no domingo é paga com **adicional de 70%** (isento de imposto) e dá **folga compensatória**: um dia inteiro se a pessoa trabalhou mais de 4 h, meio dia se trabalhou 4 h ou menos.',
            examples: [{ fr: 'Le travail du dimanche donne droit à une majoration de soixante-dix pour cent.', pt: 'O trabalho no domingo dá direito a um adicional de setenta por cento.' }] },
          { title: 'Feriado trabalhado', textPt: 'Num feriado que seria dia normal de trabalho, a pessoa recebe o salário normal do dia **mais** as horas trabalhadas com **adicional de 100%** — na prática, cerca de **300%**. Se o feriado cair num dia em que ela não trabalharia, recebe as horas com 100% de adicional e ganha **um dia de folga** (em até 3 meses). Feriado num domingo trabalhado: **100% + 70%**. O valor da hora para esses cálculos é o salário mensal dividido por **173**.',
            examples: [{ fr: 'Les heures travaillées un jour férié sont majorées de cent pour cent.', pt: 'As horas trabalhadas num feriado têm adicional de cem por cento.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'la période de référence', pt: 'o período de referência' }, { fr: "le plan d'organisation du travail", pt: 'o plano de organização do trabalho (POT)' },
            { fr: "l'horaire mobile", pt: 'o horário flexível' }, { fr: 'le travail de nuit', pt: 'o trabalho noturno' },
            { fr: 'le travail du dimanche', pt: 'o trabalho no domingo' }, { fr: 'le jour férié', pt: 'o feriado' },
            { fr: 'la majoration', pt: 'o adicional (sobre o salário)' }, { fr: 'le repos compensatoire', pt: 'a folga compensatória' }
          ] }
        ] },
        { type: 'case', textPt: 'Uma migração de sistemas vai obrigar 3 engenheiros a trabalhar **domingo, das 8h às 14h**. O gestor pergunta: "pago um dia normal e está resolvido?"',
          answerPt: 'Não. São 6 horas no domingo: cada hora é paga com **adicional de 70%** (além do salário normal) e, como passou de 4 h, cada um ganha **um dia inteiro de folga compensatória**. Antes, verifique se a atividade se encaixa numa **exceção** que permite o domingo, faça o **aviso à ITM** e **informe a delegação do pessoal**. Se as horas forem extras, entram também as regras de horas extras.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Em empresas de tecnologia, os casos de domingo e feriado aparecem em **plantões** (*astreintes*), lançamentos e migrações. Crie um **modelo de pedido** para o gestor (quem, quando, quantas horas, por quê) com 2 semanas de antecedência: dá tempo de avisar a ITM, informar a delegação e calcular o custo certo.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conditions-travail/gestion/organisation.html', label: 'guichet.lu — organização do tempo de trabalho' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conditions-travail/gestion/travail-nuit.html', label: 'guichet.lu — trabalho noturno' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conditions-travail/gestion/travail-dimanche.html', label: 'guichet.lu — trabalho no domingo' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conditions-travail/gestion/travail-jours-feries.html', label: 'guichet.lu — trabalho em feriados' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Quantas horas seguidas de descanso a pessoa deve ter entre dois dias de trabalho?', options: ['11 horas', '8 horas', '12 horas', '9 horas'], answer: 0,
          explanationPt: '11 horas seguidas por dia e 44 horas seguidas por semana.' },
        { type: 'multiple_choice', prompt: 'Qual o adicional por hora trabalhada no domingo?', options: ['70%', '40%', '100%', '25%'], answer: 0,
          explanationPt: '70% de *majoration*, isento de imposto, mais a folga compensatória.' },
        { type: 'multiple_choice', prompt: 'Uma pessoa trabalhou 3 horas num domingo. Que folga compensatória ela ganha?', options: ['Meio dia.', 'Um dia inteiro.', 'Nenhuma.', 'Dois dias.'], answer: 0,
          explanationPt: 'Até 4 h: meio dia. Mais de 4 h: um dia inteiro.' },
        { type: 'multiple_choice', prompt: 'Com que antecedência o POT deve ser apresentado à delegação do pessoal?', options: ['Pelo menos 5 dias antes.', '1 dia antes.', '1 mês antes.', 'Não precisa.'], answer: 0,
          explanationPt: 'Mudanças posteriores no POT pedem aviso de 3 dias.' },
        { type: 'multiple_choice', prompt: 'Num escritório de tecnologia, sem convenção coletiva, o adicional noturno é obrigatório?', options: ['Não: só com convenção coletiva (mín. 15%) ou em hotelaria e restauração.', 'Sim, sempre 25%.', 'Sim, sempre 70%.', 'Sim, 100% depois da meia-noite.'], answer: 0,
          explanationPt: 'O trabalho noturno não é proibido; o adicional depende da convenção coletiva ou do setor.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['la majoration', 'adicional sobre o salário'], ['le jour férié', 'feriado'], ["l'horaire mobile", 'horário flexível'], ['le repos compensatoire', 'folga compensatória']] }
      ]
    },

    /* ---------- 4 ---------- */
    {
      id: 'm4', title: 'Licenças: família, formação e motivos pessoais', titleFr: 'Les congés spéciaux',
      blocks: [
        { type: 'intro', textPt: 'Além das 26 férias anuais, a lei prevê várias **licenças especiais** (*congés spéciaux*). O HRBP precisa saber **quantos dias**, **quem paga** e **quando a pessoa fica protegida contra a dispensa**. Regra geral: essas licenças **não descontam** das férias.' },
        { type: 'rules', items: [
          { title: 'Maternidade e paternidade', textPt: '***Congé de maternité***: **8 semanas antes** do parto previsto e **12 semanas depois** do parto (no total, no máximo 20 semanas se o bebê nascer antes). A **CNS** (*Caisse nationale de santé*): o seguro-saúde, paga a indenização; o empregador **suspende** o salário. A gestante fica **protegida contra a dispensa** desde que avisa a gravidez (com atestado) **até 12 semanas depois do parto**; uma dispensa nesse período é **nula**. ***Congé de paternité***: **10 dias** (80 h em tempo integral), a tirar nos **2 meses** após o nascimento, pedido por escrito **2 meses antes**. O empregador paga e o Estado reembolsa a maior parte, se o empregador pedir em até **5 meses**.',
            examples: [{ fr: 'Le congé de paternité est de dix jours.', pt: 'A licença-paternidade é de dez dias.' }] },
          { title: 'Licença parental: o *congé parental*', textPt: 'Cada pai ou mãe tem direito, por filho, a uma licença de **4 ou 6 meses** em tempo integral (ou formas em meio período e fracionadas, com acordo do empregador). Condições: **12 meses** seguidos de contrato antes da licença e pelo menos **10 h por semana**. O 1º *congé parental* vem **logo depois da maternidade**; o 2º, até os **6 anos** da criança. Pedido: 2 meses antes da maternidade (1º) ou **4 meses** antes (2º). O empregador **não pode recusar** a licença em tempo integral; pode **adiar** o 2º por até 2 meses (6 em empresas com menos de 15 empregados), com carta registrada em 4 semanas. Quem paga é a **CAE** (*Caisse pour l\'avenir des enfants*): o órgão das prestações familiares. Proteção contra a dispensa com aviso prévio durante toda a licença.',
            examples: [{ fr: 'Il a demandé un congé parental de quatre mois.', pt: 'Ele pediu uma licença parental de quatro meses.' }] },
          { title: 'Licença por motivo pessoal: o *congé extraordinaire*', textPt: 'Dias pagos pelo empregador, que **não pode recusar**: **casamento** 3 dias; *partenariat* (união registrada) 1 dia; **mudança de casa** 2 dias (uma vez a cada 3 anos); **morte** do cônjuge ou de pai, mãe, filho ou sogro(a) 3 dias; de filho menor 5 dias; de avô, neto ou irmão 1 dia; **casamento de um filho** 1 dia. Precisa ser tirada **quando o fato acontece** e não se transfere para depois. Filho doente: o ***congé pour raisons familiales*** dá **12 dias** por filho de 0 a 4 anos, **18 dias** de 4 a 13 anos e **5 dias** de 13 a 18 (só se hospitalizado), com atestado médico; o empregador paga e é reembolsado pela **Mutualité des employeurs** (*Mutualité des employeurs*): a caixa mútua dos empregadores.',
            examples: [{ fr: "Le congé extraordinaire pour un mariage est de trois jours.", pt: 'A licença extraordinária para um casamento é de três dias.' }] },
          { title: 'Licenças para estudar', textPt: '***Congé linguistique***: **200 horas** na carreira para aprender **luxemburguês**, em 2 etapas, com pelo menos **6 meses** de casa; o empregador paga e o Estado reembolsa **50%**. ***Congé individuel de formation***: **80 dias** na carreira, no máximo **20 dias a cada 2 anos**, pedido **2 meses** antes; o empregador pode adiar **uma vez**. ***Congé sans solde pour formation***: licença **sem salário** de 4 semanas a 6 meses (até 2 anos no total), com pelo menos **2 anos** de casa.',
            examples: [{ fr: 'Elle utilise son congé linguistique pour apprendre le luxembourgeois.', pt: 'Ela usa a licença linguística para aprender luxemburguês.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le congé de maternité', pt: 'a licença-maternidade' }, { fr: 'le congé de paternité', pt: 'a licença-paternidade' },
            { fr: 'le congé parental', pt: 'a licença parental' }, { fr: 'le congé extraordinaire', pt: 'a licença por motivo pessoal' },
            { fr: 'le congé pour raisons familiales', pt: 'a licença para cuidar do filho doente' }, { fr: 'le congé sans solde', pt: 'a licença sem vencimento' },
            { fr: "l'accouchement", pt: 'o parto' }, { fr: 'le déménagement', pt: 'a mudança de casa' }
          ] }
        ] },
        { type: 'case', textPt: 'Um analista avisa, **3 meses e meio antes**, que quer o **2º congé parental** de 6 meses em tempo integral a partir de março, no meio do maior projeto do ano. O gestor quer recusar. O que você responde?',
          answerPt: 'Primeiro: o pedido do 2º congé parental deve ser feito **4 meses antes** — confira as datas; se faltou prazo, a data de início se ajusta. Em **tempo integral**, o empregador **não pode recusar**. Pode **adiar** por até **2 meses** (empresa com 15 ou mais empregados) se houver motivo previsto em lei, como desorganização séria ou substituto impossível de encontrar, e precisa responder **por carta registrada em até 4 semanas** — sem resposta, a licença está aceita. E desde o fim do prazo do pedido a pessoa está **protegida contra a dispensa**. Proponha ao gestor um plano de substituição (por exemplo, um *CDD* de substituição).' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Monte um **calendário** com os prazos: avisos de 2 e 4 meses, resposta de 4 semanas, reembolso da paternidade em 5 meses. Os erros mais caros são os de **prazo** — uma resposta que não sai em 4 semanas vale como aceitação, e um reembolso pedido tarde é perdido.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/situation-perso/conge-parental.html', label: 'guichet.lu — licença parental' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/situation-perso/conge-paternite.html', label: 'guichet.lu — licença-paternidade' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/situation-perso/conge-extraordinaire.html', label: 'guichet.lu — licença extraordinária' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/situation-perso/conge-raisons-familiales.html', label: 'guichet.lu — filho doente' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/formation-prof.html', label: 'guichet.lu — licenças para formação' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Até quando a empregada que avisou a gravidez fica protegida contra a dispensa?', options: ['Até 12 semanas depois do parto.', 'Até o parto.', 'Até o fim do 1º congé parental.', 'Só durante a licença-maternidade.'], answer: 0,
          explanationPt: 'Da declaração da gravidez até o fim do *congé postnatal* (12 semanas após o parto). Uma dispensa nesse período é nula.' },
        { type: 'multiple_choice', prompt: 'Quantos dias tem a licença-paternidade?', options: ['10 dias', '5 dias', '2 dias', '20 dias'], answer: 0,
          explanationPt: '10 dias (80 h em tempo integral), nos 2 meses após o nascimento.' },
        { type: 'multiple_choice', prompt: 'O empregador pode recusar um *congé parental* em tempo integral?', options: ['Não; só pode adiar o 2º, por até 2 meses (6 em empresas com menos de 15 empregados).', 'Sim, sem justificar.', 'Sim, se a pessoa tiver menos de 5 anos de casa.', 'Sim, se avisar a ITM.'], answer: 0,
          explanationPt: 'Ele pode recusar as formas em meio período ou fracionadas, mas não a licença em tempo integral.' },
        { type: 'multiple_choice', prompt: 'Um empregado vai se mudar de casa. Quantos dias de *congé extraordinaire*?', options: ['2 dias', '1 dia', '3 dias', 'Nenhum: precisa usar as férias.'], answer: 0,
          explanationPt: '2 dias, uma vez a cada 3 anos com o mesmo empregador.' },
        { type: 'multiple_choice', prompt: 'Uma mãe precisa ficar com a filha de 6 anos, doente. Quantos dias de *congé pour raisons familiales* ela tem por ano para essa filha?', options: ['18 dias', '12 dias', '5 dias', '26 dias'], answer: 0,
          explanationPt: '0–4 anos: 12 dias; 4–13 anos: 18 dias; 13–18 anos: 5 dias se hospitalizada.' },
        { type: 'multiple_choice', prompt: 'Quantas horas tem o *congé linguistique* na carreira?', options: ['200 horas', '80 horas', '40 horas', '20 dias'], answer: 0,
          explanationPt: '200 horas para aprender luxemburguês, em duas etapas.' }
      ]
    },

    /* ---------- 5 ---------- */
    {
      id: 'm5', title: 'Remuneração: indexação, bônus e benefícios', titleFr: 'La rémunération : indexation, primes et avantages',
      blocks: [
        { type: 'intro', textPt: 'Em Luxemburgo, o pacote salarial tem peças que não existem no Brasil (a **indexação**) e outras com regras fiscais próprias (bônus, carro, vale-refeição). O HRBP não faz a folha, mas precisa explicar a uma pessoa recém-chegada **o que ela vai receber de verdade**.' },
        { type: 'rules', items: [
          { title: 'A indexação: a *indexation des salaires*', textPt: 'Quando o índice de preços sobe **2,5%**, **todos** os salários do país — não só o mínimo — sobem **2,5%** de forma automática, inclusive na sua empresa. Quem publica o índice é o **STATEC** (*Institut national de la statistique et des études économiques*): o instituto de estatística. Em novembro de 2026, o STATEC previa a **próxima indexação no 2º trimestre de 2027**. Para o orçamento de pessoal, é um aumento obrigatório que precisa estar no planejamento.',
            examples: [{ fr: "La prochaine tranche indiciaire est prévue l'année prochaine.", pt: 'A próxima parcela da indexação está prevista para o ano que vem.' }] },
          { title: 'O bônus com vantagem fiscal: a *prime participative*', textPt: 'É uma participação nos lucros paga aos empregados com **50% de isenção de imposto**. Limites: o total distribuído não pode passar de **5% do lucro** do ano anterior da empresa, e a parte isenta de cada pessoa não pode passar de **25% do salário bruto anual** dela. É diferente de um bônus comum (*prime*, *bonus*), que é tributado como salário.',
            examples: [{ fr: 'La prime participative est exonérée à cinquante pour cent.', pt: 'A participação nos lucros é isenta em cinquenta por cento.' }] },
          { title: 'Benefícios em espécie: os *avantages en nature*', textPt: 'Tudo o que a empresa dá **além do dinheiro** e que a pessoa usa na vida privada: **carro da empresa** (*voiture de société*) com uso pessoal, moradia, celular etc. Em regra, viram **renda tributável**: o carro, por exemplo, gera todo mês um valor tributável calculado como uma porcentagem do preço do carro novo, que depende das **emissões e do tipo de motor** (os elétricos pagam menos). O ***chèque-repas*** (vale-refeição) tem tratamento fiscal favorável até um valor máximo por vale, e o empregado paga uma pequena parte. Os valores mudam: confira na **ACD** (*Administration des contributions directes*): a receita federal de Luxemburgo.',
            examples: [{ fr: "La voiture de société est un avantage en nature imposable.", pt: 'O carro da empresa é um benefício em espécie tributável.' }] },
          { title: 'Ler o holerite: a *fiche de salaire*', textPt: 'Do **salário bruto** (*salaire brut*) saem as **contribuições sociais** (*cotisations sociales*: saúde, aposentadoria, dependência) e o **imposto retido na fonte** (*retenue d\'impôt*), calculado pela **classe de imposto** da pessoa (1, 1a ou 2, conforme a situação familiar) que aparece no ***fiche de retenue d\'impôt***, enviado pela ACD. O resultado é o **salário líquido** (*salaire net*). Em entrevistas, o salário é quase sempre **bruto anual**: diga em quantos meses ele é pago (12 ou 13).',
            examples: [{ fr: 'Le salaire net est versé à la fin du mois.', pt: 'O salário líquido é pago no fim do mês.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: "l'indexation", pt: 'a indexação (reajuste automático)' }, { fr: 'la tranche indiciaire', pt: 'a parcela de 2,5% da indexação' },
            { fr: 'la prime', pt: 'o bônus, o prêmio' }, { fr: "l'avantage en nature", pt: 'o benefício em espécie' },
            { fr: 'la voiture de société', pt: 'o carro da empresa' }, { fr: 'le salaire brut', pt: 'o salário bruto' },
            { fr: 'le salaire net', pt: 'o salário líquido' }, { fr: 'les cotisations sociales', pt: 'as contribuições sociais' }
          ] }
        ] },
        { type: 'case', textPt: 'Uma candidata brasileira recebe a oferta de **78.000 € brutos por ano** e pergunta: "isso é quanto por mês na minha conta?". O gestor responde "6.500 €". Está certo?',
          answerPt: 'Não. 78.000 ÷ 12 = 6.500 € é o **bruto mensal**, e só se o salário for pago em 12 meses (se houver 13º, são 6.000 € por mês mais o 13º). Do bruto saem as **contribuições sociais** e o **imposto retido na fonte**, que depende da **classe de imposto** dela. O líquido será bem menor que 6.500 €. Ofereça uma **simulação** de holerite (há simuladores públicos) e explique a **indexação**, que aumenta o salário automaticamente.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Num pacote de tecnologia em Luxemburgo, compare sempre: **bruto anual**, número de pagamentos, **bônus** (comum ou *prime participative*), carro ou subsídio de mobilidade, *chèques-repas*, seguro-saúde complementar e plano de pensão. Benefícios com vantagem fiscal valem mais do que o mesmo valor pago como salário.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/remuneration/paiement-remunerations/salaire.html', label: 'guichet.lu — salário e indexação' },
          { to: 'https://impotsdirects.public.lu/fr/az/p/prime-participative.html', label: 'ACD — prime participative' },
          { to: 'https://impotsdirects.public.lu/fr/az/a/avant_nature.html', label: 'ACD — benefícios em espécie' },
          { to: 'https://impotsdirects.public.lu/fr/az/c/cheques-de-repas.html', label: 'ACD — vale-refeição' },
          { to: 'https://statistiques.public.lu', label: 'STATEC — índice de preços e previsões' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'O que acontece quando o índice de preços sobe 2,5%?', options: ['Todos os salários sobem 2,5% automaticamente.', 'Só o salário mínimo sobe.', 'A empresa decide se reajusta.', 'Os salários sobem só nas empresas com convenção coletiva.'], answer: 0,
          explanationPt: 'A indexação vale para todos os salários, inclusive acima do mínimo.' },
        { type: 'multiple_choice', prompt: 'Qual a isenção de imposto da *prime participative*?', options: ['50%', '100%', '25%', 'Nenhuma.'], answer: 0,
          explanationPt: '50% de isenção, com limites de 5% do lucro da empresa e 25% do salário anual da pessoa.' },
        { type: 'multiple_choice', prompt: 'Um carro da empresa que a pessoa também usa nos fins de semana é…', options: ['…um benefício em espécie tributável.', '…isento, porque é da empresa.', '…proibido por lei.', '…uma prime participative.'], answer: 0,
          explanationPt: 'O uso privado gera um valor tributável mensal, calculado como porcentagem do preço do carro.' },
        { type: 'multiple_choice', prompt: 'O que define o imposto retido na fonte de cada pessoa?', options: ['A classe de imposto, ligada à situação familiar.', 'O cargo.', 'A nacionalidade.', 'O número de filhos apenas.'], answer: 0,
          explanationPt: 'A classe (1, 1a ou 2) aparece no *fiche de retenue d\'impôt*.' },
        { type: 'multiple_choice', prompt: 'Quem publica o índice de preços que dispara a indexação?', options: ['O STATEC.', 'A ITM.', 'A CCSS.', 'A ADEM.'], answer: 0,
          explanationPt: 'O STATEC (*Institut national de la statistique et des études économiques*) publica o índice e as previsões.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le salaire brut', 'antes dos descontos'], ['le salaire net', 'o que cai na conta'], ['les cotisations sociales', 'descontos da previdência'], ['la prime', 'bônus']] }
      ]
    },

    /* ---------- 6 ---------- */
    {
      id: 'm6', title: 'Assédio, igualdade e não discriminação', titleFr: 'Le harcèlement, l\'égalité et la non-discrimination',
      blocks: [
        { type: 'intro', textPt: 'Desde **2023**, Luxemburgo tem uma **lei específica** sobre o **assédio moral** (*harcèlement moral*) no trabalho, que se soma às regras antigas sobre **assédio sexual** (*harcèlement sexuel*) e **discriminação**. Para o HRBP, é o tema em que **agir rápido** e **documentar** fazem mais diferença.' },
        { type: 'rules', items: [
          { title: 'O que é assédio moral', textPt: 'Condutas que, por serem **repetidas** ou **sistemáticas**, atingem a **dignidade** ou a **integridade psíquica ou física** de uma pessoa. Pode vir de um colega, de um gestor (*harcèlement managérial*) ou até de um subordinado. Um conflito pontual ou uma cobrança de desempenho feita com respeito **não** é assédio.',
            examples: [{ fr: 'Le harcèlement moral porte atteinte à la dignité du salarié.', pt: 'O assédio moral atinge a dignidade do empregado.' }] },
          { title: 'Os deveres do empregador', textPt: 'O empregador deve: fazer **cessar imediatamente** o assédio de que tem conhecimento; **investigar rápido e com imparcialidade**; definir os **meios de apoio** às vítimas; **formar e sensibilizar** empregados e gestores; e **informar** a delegação do pessoal (ou todos, se não houver delegação) sobre essas obrigações. Nenhuma medida pode ser tomada **contra a vítima** nem contra quem testemunhou: são proibidas as **represálias** (*représailles*).',
            examples: [{ fr: "L'employeur doit faire cesser immédiatement le harcèlement.", pt: 'O empregador deve fazer o assédio cessar imediatamente.' }] },
          { title: 'O papel da ITM', textPt: 'Qualquer pessoa pode procurar a **ITM** (*Inspection du travail et des mines*): fiscaliza o direito do trabalho. Ela **investiga**: ouve a vítima, a pessoa acusada, testemunhas e o empregador, e manda um **relatório ao empregador em até 45 dias**. A ITM pode aplicar **multas administrativas** (de 25 a 25.000 €), e há também multas penais.',
            examples: [{ fr: "La victime peut saisir l'Inspection du travail et des mines.", pt: 'A vítima pode recorrer à Inspeção do Trabalho e das Minas.' }] },
          { title: 'Igualdade e discriminação', textPt: 'A lei proíbe a **discriminação** (*discrimination*) por motivos como **sexo**, **religião ou convicções**, **deficiência**, **idade**, **orientação sexual**, **origem racial ou étnica** e **nacionalidade**, na contratação, no salário, na promoção e na dispensa. Homens e mulheres têm direito a **salário igual** por trabalho de **igual valor**. A delegação do pessoal tem um **delegado da igualdade** (*délégué à l\'égalité*). No assédio sexual e na discriminação, basta à vítima apresentar **fatos que façam presumir** o problema: cabe ao empregador provar que não houve.',
            examples: [{ fr: 'À travail égal, salaire égal.', pt: 'Trabalho igual, salário igual.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le harcèlement moral', pt: 'o assédio moral' }, { fr: 'le harcèlement sexuel', pt: 'o assédio sexual' },
            { fr: 'la discrimination', pt: 'a discriminação' }, { fr: "l'égalité de traitement", pt: 'a igualdade de tratamento' },
            { fr: 'la plainte', pt: 'a queixa, a denúncia' }, { fr: "l'enquête", pt: 'a investigação, o inquérito' },
            { fr: 'le témoin', pt: 'a testemunha' }, { fr: 'les représailles', pt: 'as represálias' }
          ] }
        ] },
        { type: 'case', textPt: 'Uma designer conta a você, em confiança, que o líder dela a **humilha nas reuniões** há meses e manda mensagens agressivas à noite. Ela pede: "não faça nada, só queria desabafar". O que você faz?',
          answerPt: 'Acolha, mas explique com cuidado que, quando a empresa **toma conhecimento** de um possível assédio, ela tem o **dever de agir** e fazer cessar. Combine os próximos passos com ela: registrar os fatos (datas, mensagens), abrir uma **investigação imparcial** (com alguém neutro, não o próprio líder), medidas de proteção imediatas (por exemplo, outro canal de reporte) e garantir que **não haverá represálias**. Informe que ela também pode procurar a **ITM** ou a delegação do pessoal. Ficar parado expõe a empresa — e a pessoa.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Tenha um **procedimento escrito** antes de precisar: canal de queixa, quem investiga, prazos, como proteger a vítima e as testemunhas, como registrar. E inclua o tema no **onboarding de gestores**: muitos casos de *harcèlement managérial* começam com um gestor sob pressão que nunca foi treinado.' },
        { type: 'links', items: [
          { to: 'https://itm.public.lu/fr/conditions-travail/harcelement.html', label: 'ITM — assédio no trabalho' },
          { to: 'https://guichet.public.lu/fr/citoyens/travail/conditions-travail/visite-medicale/harcelement-moral.html', label: 'guichet.lu — assédio moral' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Qual o principal critério do assédio moral?', options: ['Condutas repetidas ou sistemáticas que atingem a dignidade.', 'Uma única discussão forte.', 'Uma avaliação de desempenho negativa.', 'Qualquer conflito entre colegas.'], answer: 0,
          explanationPt: 'Repetição ou sistematização, e atinge a dignidade ou a integridade psíquica ou física.' },
        { type: 'multiple_choice', prompt: 'Em quanto tempo a ITM envia o relatório da investigação ao empregador?', options: ['Em até 45 dias.', 'Em até 1 ano.', 'Em até 7 dias.', 'Não há prazo.'], answer: 0,
          explanationPt: 'A ITM ouve as partes e manda o relatório em até 45 dias depois de receber o dossiê.' },
        { type: 'multiple_choice', prompt: 'Uma testemunha que falou na investigação passa a ser excluída dos projetos. Isso é…', options: ['…uma represália proibida.', '…uma decisão normal de gestão.', '…permitido se o gestor justificar.', '…assunto só da delegação.'], answer: 0,
          explanationPt: 'A lei protege vítimas e testemunhas contra *représailles*.' },
        { type: 'multiple_choice', prompt: 'Num caso de discriminação, o que a vítima precisa apresentar?', options: ['Fatos que façam presumir a discriminação; o empregador prova o contrário.', 'Uma prova completa, com testemunhas.', 'Uma decisão da ITM.', 'Nada: a empresa é sempre culpada.'], answer: 0,
          explanationPt: 'O ônus da prova é dividido: basta à vítima mostrar indícios.' },
        { type: 'multiple_choice', prompt: 'Quem, na delegação do pessoal, cuida da igualdade entre homens e mulheres?', options: ['O délégué à l\'égalité.', 'O délégué à la sécurité.', 'O presidente da delegação.', 'A ITM.'], answer: 0,
          explanationPt: 'Cada delegação designa um delegado da igualdade, com horas próprias para essa função.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['la plainte', 'queixa'], ["l'enquête", 'investigação'], ['le témoin', 'testemunha'], ['les représailles', 'represálias']] }
      ]
    },

    /* ---------- 7 ---------- */
    {
      id: 'm7', title: 'Saúde no trabalho, acidente e realocação', titleFr: 'La santé au travail, l\'accident et le reclassement',
      blocks: [
        { type: 'intro', textPt: 'Além da licença médica (Parte 1), o HRBP cuida do **exame admissional**, dos **acidentes** e do caso mais delicado: a pessoa que, por saúde, **não consegue mais fazer o próprio trabalho**. Em Luxemburgo, isso tem um procedimento próprio: o *reclassement*.' },
        { type: 'rules', items: [
          { title: 'O médico do trabalho e o exame admissional', textPt: 'Toda empresa é ligada a um **serviço de saúde no trabalho**: em escritórios de serviços e finanças, em geral a **ASTF** (*Association pour la santé au travail du secteur financier*); nos outros setores, o **STM** (*Service de santé au travail multisectoriel*). O **exame admissional** (*visite médicale d\'embauche*) é obrigatório para **qualquer cargo**: no máximo **2 meses** depois da entrada; **antes** da entrada para trabalho noturno ou posto de risco. É feito no horário de trabalho e conta como tempo trabalhado.',
            examples: [{ fr: "La visite médicale d'embauche est obligatoire.", pt: 'O exame médico admissional é obrigatório.' }] },
          { title: 'Acidente de trabalho e de trajeto', textPt: 'O empregado avisa o empregador **imediatamente**. O empregador declara o acidente à **AAA** (*Association d\'assurance accident*): o seguro de acidentes, **o quanto antes**, de preferência pelo **MyGuichet.lu**. O trajeto casa–trabalho também é coberto (*accident de trajet*), de porta a porta. Se o empregador não declarar, a vítima tem **1 ano** para fazer a queixa diretamente à AAA.',
            examples: [{ fr: "L'employeur déclare l'accident du travail à l'Association d'assurance accident.", pt: 'O empregador declara o acidente de trabalho ao seguro de acidentes.' }] },
          { title: 'Realocação: o *reclassement*', textPt: 'Quando o médico do trabalho conclui que a pessoa **não pode mais** exercer o último posto, o caso vai para a **Commission mixte** (*Commission mixte*): a comissão que decide a realocação. **Interna** (*reclassement interne*): outro posto ou jornada reduzida na mesma empresa — **obrigatória** para empregadores com **25 ou mais** empregados; quem recusar paga uma **taxa de compensação**. **Externa** (*reclassement externe*): o contrato termina e a pessoa é acompanhada pela **ADEM** (*Agence pour le développement de l\'emploi*): a agência pública de emprego. Após a decisão de realocação interna, a pessoa fica **protegida contra a dispensa por 12 meses**.',
            examples: [{ fr: 'La Commission mixte a décidé un reclassement interne.', pt: 'A comissão mista decidiu uma realocação interna.' }] },
          { title: 'Cota de pessoas com deficiência', textPt: 'Empresas privadas com **25 ou mais** empregados devem empregar pelo menos **1** pessoa com o estatuto de ***salarié handicapé*** (empregado com deficiência) em tempo integral; **2%** a partir de **50** empregados e **4%** a partir de **300**.',
            examples: [{ fr: "L'entreprise emploie deux salariés handicapés.", pt: 'A empresa emprega dois empregados com deficiência.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le médecin du travail', pt: 'o médico do trabalho' }, { fr: "la visite médicale d'embauche", pt: 'o exame admissional' },
            { fr: "l'accident du travail", pt: 'o acidente de trabalho' }, { fr: "l'accident de trajet", pt: 'o acidente de trajeto' },
            { fr: 'le reclassement', pt: 'a realocação (por motivo de saúde)' }, { fr: "l'inaptitude", pt: 'a inaptidão' },
            { fr: 'le poste à risque', pt: 'o posto de risco' }, { fr: 'le salarié handicapé', pt: 'o empregado com deficiência' }
          ] }
        ] },
        { type: 'case', textPt: 'Um técnico de suporte volta de uma longa licença por problema nas costas. O médico do trabalho diz que ele **não pode mais carregar equipamentos**, parte essencial do cargo. A empresa tem 120 empregados. O gestor sugere "fazer um acordo de saída". Qual o caminho?',
          answerPt: 'Antes de pensar em saída, siga o procedimento: o caso vai para a **Commission mixte**, que pode decidir um **reclassement interne** — com 120 empregados, a empresa é **obrigada** a realocá-lo (outro posto, adaptação ou jornada reduzida), salvo se provar que isso causaria um prejuízo grave, pagando então uma taxa. Depois da decisão, ele fica **protegido contra a dispensa por 12 meses**. Trabalhe com o gestor um posto possível (ex.: suporte remoto, documentação, treinamento de usuários).' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Mantenha atualizada a lista de **postos de risco** (*postes à risques*) da empresa e o vínculo com o serviço de saúde no trabalho. No *onboarding*, agende o exame admissional na **primeira semana**: o prazo de 2 meses passa rápido, e a multa por não fazer o exame é alta.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/sante/visite-medicale/visite-medicale-embauche.html', label: 'guichet.lu — exame admissional' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/sante/incapacite-travail/declaration-accident-travail-trajet.html', label: 'guichet.lu — declarar acidente' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/sante/inaptitude-exercer-travail/reclassement-professionnel.html', label: 'guichet.lu — realocação' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Num cargo de escritório comum, até quando deve ser feito o exame admissional?', options: ['Em até 2 meses depois da entrada.', 'Antes da entrada.', 'Em até 1 ano.', 'Só se o empregado pedir.'], answer: 0,
          explanationPt: 'Antes da entrada só para trabalho noturno ou posto de risco.' },
        { type: 'multiple_choice', prompt: 'A quem o empregador declara um acidente de trabalho?', options: ['À AAA (Association d\'assurance accident).', 'À CNS.', 'À ADEM.', 'Ao STATEC.'], answer: 0,
          explanationPt: 'A declaração vai para o seguro de acidentes, de preferência pelo MyGuichet.lu.' },
        { type: 'multiple_choice', prompt: 'A partir de quantos empregados a realocação interna é obrigatória?', options: ['25', '15', '50', '150'], answer: 0,
          explanationPt: 'A partir de 25 empregados. Quem recusar paga uma taxa de compensação.' },
        { type: 'multiple_choice', prompt: 'Depois de uma decisão de realocação interna, por quanto tempo a pessoa fica protegida contra a dispensa?', options: ['12 meses', '26 semanas', '6 meses', '3 meses'], answer: 0,
          explanationPt: '12 meses, salvo falta grave ou fim de CDD.' },
        { type: 'multiple_choice', prompt: 'Um empregado cai da bicicleta no caminho de casa para o escritório. Isso é…', options: ['…um acidente de trajeto, coberto pelo seguro de acidentes.', '…um problema só dele.', '…um acidente de trabalho só se ele estiver de carro.', '…licença médica comum, sem relação com o trabalho.'], answer: 0,
          explanationPt: 'O trajeto casa–trabalho é coberto de porta a porta.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le reclassement', 'realocação por saúde'], ["l'inaptitude", 'inaptidão'], ["l'accident de trajet", 'acidente no caminho'], ['le médecin du travail', 'médico do trabalho']] }
      ]
    },

    /* ---------- 8 ---------- */
    {
      id: 'm8', title: 'Dispensa avançada: contestação, proteções e acordo', titleFr: 'Le licenciement : contestation, protections et accord',
      blocks: [
        { type: 'intro', textPt: 'A Parte 1 mostrou o procedimento e os prazos da dispensa. Aqui está o que acontece **depois**: quando a pessoa **contesta**, quanto a empresa pode ter de pagar, **quem não pode ser dispensado** e a alternativa do **acordo** de saída.' },
        { type: 'rules', items: [
          { title: 'Contestar: 3 meses (ou 1 ano)', textPt: 'O empregado tem **3 meses** para levar a dispensa ao ***Tribunal du travail*** (justiça do trabalho). O prazo conta da carta de dispensa — ou, se ele pediu os motivos, da carta com os **motivos** (*motifs*). Se o empregador **não responder** ao pedido de motivos em 1 mês, a dispensa já é **abusiva**. Uma **reclamação por escrito** (*réclamation écrite*) enviada ao empregador dentro dos 3 meses **interrompe** o prazo, e começa um novo prazo de **1 ano**. Dispensa **de boca** não faz o prazo correr e é sempre abusiva. Recurso da sentença: **40 dias**.',
            examples: [{ fr: 'Le salarié a trois mois pour contester le licenciement.', pt: 'O empregado tem três meses para contestar a dispensa.' }] },
          { title: 'O que a empresa pode ter de pagar', textPt: 'Se o tribunal julga a dispensa **abusiva** (*licenciement abusif*: sem motivos reais e sérios), o empregador paga **danos** (*dommages et intérêts*): o **dano material** (salários perdidos até a pessoa achar outro emprego; ela precisa provar que **procurou**) e o **dano moral**. Se só a **forma** foi errada (por exemplo, faltou a entrevista prévia numa empresa com mais de 150 empregados), a indenização é de até **1 mês** de salário. Não respeitar o aviso prévio gera a ***indemnité compensatoire de préavis***: os salários do aviso.',
            examples: [{ fr: 'Le tribunal a déclaré le licenciement abusif.', pt: 'O tribunal declarou a dispensa abusiva.' }] },
          { title: 'Quem está protegido', textPt: 'Não podem ser dispensados (salvo exceções): a **gestante**, desde o aviso da gravidez até **12 semanas após o parto**; quem está de **licença parental**; quem está **doente** e avisou certo, até **26 semanas**; o **delegado do pessoal**, durante o mandato e **6 meses** depois (candidatos: 3 meses); quem teve **realocação interna**, por **12 meses**. Para a gestante e o delegado, até uma *faute grave* exige passar pelo tribunal antes, e a dispensa proibida é **nula**: a pessoa pode pedir ao tribunal para **continuar** no emprego. Na doença, a dispensa durante a proteção é **abusiva**.',
            examples: [{ fr: 'Une salariée enceinte est protégée contre le licenciement.', pt: 'Uma empregada grávida é protegida contra a dispensa.' }] },
          { title: 'A saída por acordo: a *résiliation d\'un commun accord*', textPt: 'Empresa e empregado podem decidir **juntos** terminar o contrato, numa data combinada, sem aviso prévio nem indenização obrigatórios (mas é comum negociar uma). Faça sempre **por escrito**, assinado pelos dois, com a data de fim e o que for pago; e a vontade precisa ser **livre** — pressão ou ameaça podem anulá-lo. Atenção: como a saída é voluntária, a pessoa **em regra não recebe o seguro-desemprego** da ADEM. Por isso, quem tem direito a uma dispensa com aviso e indenização costuma pedir uma compensação maior.',
            examples: [{ fr: "Les deux parties signent une résiliation d'un commun accord.", pt: 'As duas partes assinam uma rescisão por acordo mútuo.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le licenciement abusif', pt: 'a dispensa abusiva (sem justa causa válida)' }, { fr: 'les dommages et intérêts', pt: 'a indenização por danos' },
            { fr: 'le préjudice moral', pt: 'o dano moral' }, { fr: 'la réclamation', pt: 'a reclamação' },
            { fr: "la résiliation d'un commun accord", pt: 'a rescisão por acordo mútuo' }, { fr: "l'appel", pt: 'o recurso (apelação)' },
            { fr: 'la nullité', pt: 'a nulidade' }, { fr: 'le chômage', pt: 'o desemprego; o seguro-desemprego' }
          ] }
        ] },
        { type: 'case', textPt: 'Um gestor quer dispensar uma analista com baixo desempenho e diz: "vamos chamá-la amanhã, explicar, e ela sai na sexta". Você descobre que ela **contou na semana passada que está grávida** e entregou o atestado. O que você responde?',
          answerPt: 'A dispensa está **proibida**: desde a entrega do atestado, ela está protegida **até 12 semanas depois do parto**, e uma dispensa ou mesmo a **convocação para a entrevista prévia** nesse período é **nula**. O desempenho pode ser tratado com **acompanhamento** (objetivos claros, feedback por escrito), mas não com dispensa. Também não proponha um "acordo" sob pressão: um acordo assinado sem vontade livre pode ser anulado, e o risco jurídico e de reputação é alto.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Antes de **qualquer** dispensa, faça um **checklist de proteção**: gravidez? licença parental pedida ou em curso? doença em curso? delegado ou candidato? realocação? Uma única resposta "sim" muda tudo. E guarde os comprovantes de envio das cartas: em caso de contestação, os prazos são contados por eles.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/citoyens/travail/fin-contrat/licenciement/contestation-licenciement-tribunal.html', label: 'guichet.lu — contestar a dispensa' },
          { to: 'https://guichet.public.lu/fr/citoyens/travail/conges-jours-feries/situation-personnelle/protection-femme-enceinte-ou-allaitante.html', label: 'guichet.lu — proteção da gestante' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/fin-relation-travail/licenciement-resiliation/licencier-preavis.html', label: 'guichet.lu — dispensa com aviso prévio' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Quanto tempo o empregado tem para levar a dispensa ao *Tribunal du travail*?', options: ['3 meses (ou 1 ano, se mandar uma reclamação escrita nesse prazo).', '1 mês.', '2 anos.', '40 dias.'], answer: 0,
          explanationPt: 'A reclamação escrita ao empregador interrompe os 3 meses e abre um novo prazo de 1 ano.' },
        { type: 'multiple_choice', prompt: 'O empregado pediu os motivos da dispensa e o empregador não respondeu em 1 mês. Resultado?', options: ['A dispensa é abusiva.', 'A dispensa é válida.', 'O prazo do empregado acaba.', 'A ITM responde no lugar do empregador.'], answer: 0,
          explanationPt: 'Sem motivos dentro do prazo, a dispensa é considerada abusiva.' },
        { type: 'multiple_choice', prompt: 'Até quando um delegado do pessoal está protegido contra a dispensa?', options: ['Durante o mandato e 6 meses depois.', 'Só durante o mandato.', '12 meses depois do mandato.', 'Não há proteção.'], answer: 0,
          explanationPt: 'Candidatos também ficam protegidos por 3 meses.' },
        { type: 'multiple_choice', prompt: 'Depois de uma *résiliation d\'un commun accord*, a pessoa…', options: ['…em regra não recebe o seguro-desemprego.', '…recebe 12 meses de indenização obrigatória.', '…pode contestar em 3 meses como uma dispensa.', '…tem 6 meses de aviso prévio.'], answer: 0,
          explanationPt: 'A saída é voluntária. Por isso o acordo costuma incluir uma compensação negociada.' },
        { type: 'multiple_choice', prompt: 'Uma empresa com 200 empregados dispensou alguém com motivos reais, mas sem fazer a entrevista prévia. O que ela arrisca?', options: ['Indenização de até 1 mês de salário por irregularidade de forma.', 'A dispensa é nula.', 'Nada.', '12 meses de salário.'], answer: 0,
          explanationPt: 'Erro de forma: até 1 mês. Se os motivos também forem ruins, entram os danos da dispensa abusiva.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le licenciement abusif', 'dispensa sem motivo válido'], ['les dommages et intérêts', 'indenização por danos'], ['la nullité', 'nulidade'], ["l'appel", 'recurso']] }
      ]
    },

    /* ---------- 9 ---------- */
    {
      id: 'm9', title: 'Dispensa coletiva e plano de manutenção do emprego', titleFr: "Le licenciement collectif et le plan de maintien dans l'emploi",
      blocks: [
        { type: 'intro', textPt: 'Em reestruturações de empresas de tecnologia, o HRBP é peça central. Em Luxemburgo, cortar várias pessoas ao mesmo tempo por motivos **econômicos** — motivos **não ligados à pessoa** (*motifs non inhérents à la personne du salarié*) — tem regras próprias: aviso ao governo, negociação obrigatória e um **plano social** (*plan social*).' },
        { type: 'rules', items: [
          { title: 'Quando é dispensa coletiva', textPt: 'Há *licenciement collectif* quando o empregador pretende dispensar, por motivos não ligados à pessoa, **pelo menos 7 empregados em 30 dias** ou **pelo menos 15 em 90 dias**. Outras saídas provocadas pelo mesmo motivo contam junto, desde que haja pelo menos 4 dispensas. Além disso, toda empresa com **15 ou mais** empregados avisa **cada** dispensa por motivo econômico ao **Comité de conjoncture** (*Comité de conjoncture*): o comitê do governo que acompanha a economia, **no mais tardar** quando envia a carta.',
            examples: [{ fr: 'Le licenciement collectif concerne au moins sept salariés.', pt: 'A dispensa coletiva envolve pelo menos sete empregados.' }] },
          { title: 'Negociar o plano social: 15 dias', textPt: 'Antes de dispensar, o empregador **negocia** com a delegação do pessoal (e os sindicatos, se houver convenção coletiva) um ***plan social***: realocações internas, requalificação, ajuda para achar outro emprego, compensações financeiras. Ele informa **por escrito** os motivos, quantas pessoas, quais categorias, os **critérios de escolha** e o cálculo das compensações, e avisa a **ADEM** (*Agence pour le développement de l\'emploi*): agência pública de emprego, no início das negociações. As partes têm **no máximo 15 dias** para chegar a um acordo.',
            examples: [{ fr: "L'employeur doit négocier un plan social avec la délégation du personnel.", pt: 'O empregador deve negociar um plano social com a delegação do pessoal.' }] },
          { title: 'Sem acordo: o ONC', textPt: 'Se não houver acordo em 15 dias, as partes assinam uma **ata de não acordo** e levam o caso ao **ONC** (*Office national de conciliation*): o órgão público de conciliação, em até **3 dias**. A conciliação termina em até **15 dias** depois da primeira reunião. **Nenhuma** carta de dispensa pode sair antes do plano assinado ou da ata final de não conciliação — senão as dispensas podem ser **nulas**. O aviso prévio na dispensa coletiva é de **no mínimo 75 dias**.',
            examples: [{ fr: "Aucun licenciement avant la signature du plan social.", pt: 'Nenhuma dispensa antes da assinatura do plano social.' }] },
          { title: 'Antes do corte: o *plan de maintien dans l\'emploi*', textPt: 'É um acordo para **evitar** dispensas quando a empresa tem (ou vai ter) dificuldades: redução de temporários, saídas voluntárias, formação, ajustes de jornada, *chômage partiel* (redução temporária da jornada com ajuda pública), aposentadoria antecipada. O Comité de conjoncture pode puxar o assunto quando registra **mais de 5 dispensas econômicas em 3 meses** ou **8 em 6 meses** numa empresa. Para valer, o plano precisa do parecer do Comité e da **homologação** do ministro do Trabalho, e dá acesso a ajudas do **Fonds pour l\'emploi** (*Fonds pour l\'emploi*): o fundo público do emprego.',
            examples: [{ fr: "Le plan de maintien dans l'emploi vise à éviter les licenciements.", pt: 'O plano de manutenção do emprego busca evitar as dispensas.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le licenciement collectif', pt: 'a dispensa coletiva' }, { fr: 'le plan social', pt: 'o plano social' },
            { fr: 'le motif économique', pt: 'o motivo econômico' }, { fr: 'la négociation', pt: 'a negociação' },
            { fr: 'les critères de sélection', pt: 'os critérios de escolha' }, { fr: 'la conciliation', pt: 'a conciliação' },
            { fr: 'le chômage partiel', pt: 'a redução temporária da jornada (com ajuda pública)' }, { fr: 'le départ volontaire', pt: 'a saída voluntária' }
          ] }
        ] },
        { type: 'case', textPt: 'A matriz decide cortar **12 pessoas** do time de dados em Luxemburgo "até o fim do mês" e pede que o RH local mande as cartas na segunda-feira. Que alerta você dá?',
          answerPt: '12 dispensas econômicas em 30 dias passam do limite de **7**: é uma **dispensa coletiva**. Não dá para mandar cartas na segunda: antes vêm a informação escrita à **delegação do pessoal**, o aviso à **ADEM**, até **15 dias** de negociação do **plano social** e, sem acordo, a conciliação no **ONC**. Cartas antes disso arriscam ser **nulas**. Mostre à matriz um **cronograma realista** (umas 6 semanas até as cartas) e o aviso mínimo de **75 dias**. Avalie também alternativas de um *plan de maintien dans l\'emploi*.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Matrizes estrangeiras costumam subestimar o tempo de uma reestruturação em Luxemburgo. Prepare um **one-pager em inglês** com o cronograma (dia 0 → plano social → ONC → cartas → fim do aviso) e os custos (aviso, indenização, plano social). Defina os **critérios de escolha** com cuidado e por escrito: eles são negociados e podem ser contestados.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/fin-relation-travail/licenciement-resiliation/licenciement-collectif.html', label: 'guichet.lu — dispensa coletiva' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/fin-relation-travail/licenciement-resiliation/notification-licenciements-non-inherentes.html', label: 'guichet.lu — aviso ao Comité de conjoncture' },
          { to: 'https://guichet.public.lu/fr/entreprises/sauvegarde-faillite/sauvegarde-emploi/plan-maintien-emploi/negocier.html', label: 'guichet.lu — plano de manutenção do emprego' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'A partir de quantas dispensas econômicas em 30 dias há dispensa coletiva?', options: ['7', '5', '15', '10'], answer: 0,
          explanationPt: '7 em 30 dias, ou 15 em 90 dias.' },
        { type: 'multiple_choice', prompt: 'Quanto tempo, no máximo, dura a negociação do plano social?', options: ['15 dias', '30 dias', '3 meses', 'Não há prazo.'], answer: 0,
          explanationPt: 'Sem acordo em 15 dias, o caso vai ao ONC.' },
        { type: 'multiple_choice', prompt: 'Qual o aviso prévio mínimo numa dispensa coletiva?', options: ['75 dias', '2 meses', '30 dias', '6 meses'], answer: 0,
          explanationPt: 'No mínimo 75 dias; o ministro pode prolongar para 90.' },
        { type: 'multiple_choice', prompt: 'Uma empresa de 40 pessoas dispensa uma pessoa por motivo econômico. O que precisa fazer além da carta?', options: ['Avisar o Comité de conjoncture, no mais tardar quando enviar a carta.', 'Negociar um plano social.', 'Ir ao ONC.', 'Nada mais.'], answer: 0,
          explanationPt: 'Com 15 ou mais empregados, toda dispensa por motivo não ligado à pessoa é avisada ao Comité de conjoncture.' },
        { type: 'multiple_choice', prompt: 'O que acontece com dispensas enviadas antes de terminar a negociação do plano social?', options: ['Podem ser nulas.', 'São válidas, mas mais caras.', 'Valem só depois de 75 dias.', 'Nada: a negociação é opcional.'], answer: 0,
          explanationPt: 'Nenhuma carta antes do plano assinado ou da ata final de não conciliação.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le plan social', 'medidas negociadas para quem sai'], ['la conciliation', 'tentativa de acordo com mediador'], ['le chômage partiel', 'redução temporária da jornada'], ['le départ volontaire', 'saída voluntária']] }
      ]
    },

    /* ---------- 10 ---------- */
    {
      id: 'm10', title: 'A delegação do pessoal em detalhe', titleFr: 'La délégation du personnel en détail',
      blocks: [
        { type: 'intro', textPt: 'Na Parte 1: empresas com **15 ou mais** empregados têm uma ***délégation du personnel***, eleita a cada **5 anos** (as últimas eleições foram em março de 2024). Agora: **quantos** delegados, **quanto tempo** eles têm para a função e, principalmente, **em que** o HRBP precisa informar, consultar ou até **decidir junto** com eles.' },
        { type: 'rules', items: [
          { title: 'Tamanho e horas da delegação', textPt: 'Delegados titulares (com o mesmo número de suplentes):\n- **15–25** empregados → 1\n- **26–50** → 2\n- **51–75** → 3\n- **76–100** → 4\n- **101–200** → 5\n- **201–300** → 6, e assim por diante\n\nAté 99 empregados, vence quem tem mais votos; a partir de **100**, a eleição é **proporcional** (por listas). Horas pagas para a função (*crédit d\'heures*): abaixo de 150 empregados, **40 h por semana para cada 500 empregados** (100 empregados → 8 h por semana para a delegação); de 150 a 249, 40 h para cada 250; a partir de **250**, pelo menos um delegado fica **liberado em tempo integral**.',
            examples: [{ fr: "La délégation dispose d'un crédit d'heures rémunéré.", pt: 'A delegação tem um crédito de horas remunerado.' }] },
          { title: 'Informar e consultar', textPt: 'A delegação deve ser **informada e consultada** antes de decisões importantes: mudanças na organização, nos métodos e nos equipamentos, decisões econômicas que afetam o emprego, formação, saúde e segurança, igualdade, *POT*, trabalho no domingo, criação de postos de meio período. Ela recebe **relatórios econômicos** pelo menos 2 vezes por ano e se reúne pelo menos **6 vezes** por ano.',
            examples: [{ fr: 'Nous devons consulter la délégation avant cette décision.', pt: 'Precisamos consultar a delegação antes desta decisão.' }] },
          { title: 'Decidir junto: a *codécision*', textPt: 'Em empresas com **mais de 150** empregados, alguns temas exigem **decisão conjunta** (*codécision*) — o empregador **não decide sozinho**: instalações que **vigiam** o comportamento ou o desempenho dos empregados; medidas de **saúde e segurança**; e os **critérios** gerais de **contratação, promoção, dispensa e avaliação**. Sem acordo, o caso vai para uma mediação.',
            examples: [{ fr: "Les critères d'évaluation sont soumis à la codécision.", pt: 'Os critérios de avaliação estão sujeitos à decisão conjunta.' }] },
          { title: 'Os delegados especiais', textPt: 'Cada delegação escolhe um ***délégué à la sécurité et à la santé*** (pode ser outro empregado, não só um delegado), que faz inspeções e pode chamar a ITM em urgências, e um ***délégué à l\'égalité*** (sempre um delegado), com horas extras para a função (ex.: 4 h por semana acima de 150 empregados). Os dois têm a mesma **proteção contra a dispensa**: mandato + 6 meses.',
            examples: [{ fr: "Le délégué à la sécurité fait le tour de l'entreprise.", pt: 'O delegado de segurança faz a ronda pela empresa.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'les élections sociales', pt: 'as eleições da delegação do pessoal' }, { fr: 'le délégué titulaire', pt: 'o delegado titular' },
            { fr: 'le délégué suppléant', pt: 'o delegado suplente' }, { fr: "le crédit d'heures", pt: 'o crédito de horas (para a função)' },
            { fr: 'la consultation', pt: 'a consulta' }, { fr: 'la codécision', pt: 'a decisão conjunta' },
            { fr: 'le syndicat', pt: 'o sindicato' }, { fr: 'le mandat', pt: 'o mandato' }
          ] }
        ] },
        { type: 'case', textPt: 'Sua empresa tem **220 empregados**. A matriz quer lançar, em janeiro, um novo **sistema de avaliação de desempenho** com uma escala de 1 a 5 e "curva forçada". O diretor diz: "é só anunciar na reunião geral". O que falta?',
          answerPt: 'Com mais de 150 empregados, os **critérios gerais de avaliação** estão em **codécision**: o sistema precisa ser **acordado com a delegação do pessoal** antes do lançamento — sem acordo, vai para mediação. Se o sistema usar ferramentas que **monitoram** o desempenho, também entram as regras de vigilância e de proteção de dados. Planeje: apresentação à delegação, reuniões de discussão, ajustes, acordo escrito — e só então o anúncio.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Trate a delegação como **parceira**, não como obstáculo: um calendário anual de reuniões, uma pauta enviada com antecedência (5 dias) e atas claras evitam a maioria dos conflitos. Antes de qualquer projeto de RH, pergunte: **informar, consultar ou decidir junto?**' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/representation-personnel/delegation-personnel/organiser-elections-sociales.html', label: 'guichet.lu — eleições e número de delegados' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/representation-personnel/delegation-personnel/droits-devoirs-delegation-personnel.html', label: 'guichet.lu — direitos e deveres da delegação' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/representation-personnel/delegation-personnel/roles-delegues-securite-sante-egalite.html', label: 'guichet.lu — delegados de segurança e igualdade' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Quantos delegados titulares tem uma empresa com 60 empregados?', options: ['3', '1', '5', '2'], answer: 0,
          explanationPt: '51–75 empregados: 3 titulares (e 3 suplentes).' },
        { type: 'multiple_choice', prompt: 'A partir de quantos empregados alguns temas exigem decisão conjunta com a delegação?', options: ['Mais de 150', '15', '50', '500'], answer: 0,
          explanationPt: 'Vigilância, saúde e segurança, critérios de contratação, promoção, dispensa e avaliação.' },
        { type: 'multiple_choice', prompt: 'Uma empresa com 300 empregados quer instalar uma ferramenta que mede a produtividade de cada pessoa. O que é preciso?', options: ['Decisão conjunta com a delegação (e as regras de vigilância).', 'Só avisar os empregados por e-mail.', 'Autorização da ADEM.', 'Nada, se a ferramenta for da matriz.'], answer: 0,
          explanationPt: 'Instalações que vigiam o comportamento ou o desempenho estão em *codécision*.' },
        { type: 'multiple_choice', prompt: 'Quem pode ser o *délégué à la sécurité et à la santé*?', options: ['Um delegado ou outro empregado escolhido pela delegação.', 'Só o diretor.', 'Só um médico.', 'Um inspetor da ITM.'], answer: 0,
          explanationPt: 'O delegado da igualdade, por outro lado, precisa ser membro da delegação.' },
        { type: 'multiple_choice', prompt: 'Com 100 empregados, qual o crédito de horas da delegação?', options: ['8 h por semana', '40 h por semana', '2 h por semana', 'Nenhum'], answer: 0,
          explanationPt: 'Abaixo de 150 empregados: 40 h × (empregados ÷ 500) → 100 ÷ 500 × 40 = 8 h.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le délégué suppléant', 'delegado suplente'], ['la codécision', 'decisão conjunta'], ['le syndicat', 'sindicato'], ['le mandat', 'mandato']] }
      ]
    },

    /* ---------- 11 ---------- */
    {
      id: 'm11', title: 'Contratar estrangeiros e proteger dados', titleFr: 'Recruter hors UE et protéger les données',
      blocks: [
        { type: 'intro', textPt: 'Empresas de tecnologia em Luxemburgo contratam muita gente de **fora da União Europeia** — inclusive do Brasil. E todo RH lida com **dados pessoais** e, às vezes, com ferramentas de **vigilância**. Dois temas em que um erro custa caro.' },
        { type: 'rules', items: [
          { title: 'Toda vaga passa pela ADEM', textPt: 'Todo empregador que vai contratar deve declarar a vaga à **ADEM** (*Agence pour le développement de l\'emploi*): agência pública de emprego, **antes** de publicá-la em qualquer outro lugar. A vaga fica ativa por **2 meses**. Para contratar alguém de **fora da UE**, o empregador também pede à ADEM um **certificado** para aquele posto: em **profissões em falta** (lista publicada todo ano), sai em cerca de **5 dias úteis**; nas outras, a ADEM verifica antes se há candidatos inscritos que sirvam. O certificado vale **3 meses**.',
            examples: [{ fr: "L'employeur déclare le poste vacant à l'ADEM.", pt: 'O empregador declara a vaga à ADEM.' }] },
          { title: 'O Cartão Azul da UE: a *carte bleue européenne*', textPt: 'Para profissionais **altamente qualificados** de fora da UE, com contrato de pelo menos **6 meses** e salário bruto anual de pelo menos **65.652 €** (valor de 2026, fixado por regulamento). Passos: antes de viajar, pedir o **visto D** num consulado de Luxemburgo (ou da Bélgica); depois de chegar, declarar a chegada na **comuna** (prefeitura), fazer o exame médico e pedir o **título de residência** (*titre de séjour*) antes de o visto vencer.',
            examples: [{ fr: 'Elle demande une carte bleue européenne.', pt: 'Ela pede um Cartão Azul europeu.' }] },
          { title: 'Vigilância no trabalho', textPt: 'Câmeras, GPS, controle de e-mails ou ferramentas que medem a atividade só são permitidos para **finalidades** definidas (segurança, proteção dos bens, controle de produção quando necessário etc.) e **nunca de forma escondida**. Antes de começar, o empregador **informa** a delegação do pessoal (ou a ITM, se não houver) e **cada empregado**, com a finalidade, como funciona e por quanto tempo os dados ficam guardados. A delegação ou o empregado podem pedir, em **15 dias**, um parecer da **CNPD** (*Commission nationale pour la protection des données*): a autoridade de proteção de dados, o que **suspende** a medida. Imagens de vídeo: em regra **8 dias**; nunca em banheiros, vestiários ou num escritório ocupado o tempo todo.',
            examples: [{ fr: 'La vidéosurveillance cachée est interdite.', pt: 'A videovigilância escondida é proibida.' }] },
          { title: 'Dados pessoais no RH: o RGPD', textPt: 'O **RGPD** (*Règlement général sur la protection des données*): a lei europeia de proteção de dados vale para todo o RH: colete só o **necessário** (*minimisation*), diga **para quê**, guarde pelo **tempo** necessário e proteja o acesso. Dados de **saúde** são sensíveis: o atestado médico mostra só as datas, e o empregador **não** pede o diagnóstico. Os empregados podem pedir **acesso** aos próprios dados.',
            examples: [{ fr: 'Nous gardons ces données pendant la durée nécessaire.', pt: 'Guardamos esses dados pelo tempo necessário.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le poste vacant', pt: 'a vaga' }, { fr: 'le ressortissant de pays tiers', pt: 'o cidadão de fora da União Europeia' },
            { fr: 'le titre de séjour', pt: 'o título de residência' }, { fr: "l'autorisation de travail", pt: 'a autorização de trabalho' },
            { fr: 'la vidéosurveillance', pt: 'a videovigilância' }, { fr: 'les données personnelles', pt: 'os dados pessoais' },
            { fr: 'la finalité', pt: 'a finalidade' }, { fr: 'la durée de conservation', pt: 'o prazo de guarda (dos dados)' }
          ] }
        ] },
        { type: 'case', textPt: 'O time de recrutamento achou uma **engenheira de dados indiana** excelente e quer **publicar a vaga no LinkedIn hoje** e fazer a oferta na semana que vem, com salário de **62.000 €**. O que você corrige?',
          answerPt: 'Três pontos. **1)** A vaga precisa ser **declarada à ADEM antes** de ir para o LinkedIn. **2)** Para alguém de fora da UE, peça também o **certificado** da ADEM para o posto (rápido se a profissão estiver na lista de falta; mais longo nos outros casos). **3)** Com 62.000 €, ela **não chega** ao mínimo do **Cartão Azul** (65.652 € em 2026): ou a oferta sobe, ou é preciso outro tipo de autorização de trabalho, em geral mais demorada. E conte o prazo do **visto D** no cronograma da contratação.' },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Para contratações de fora da UE, crie um **roteiro** com prazos: declaração à ADEM → certificado → oferta → visto D → chegada → comuna → título de residência. Em média, conte **2 a 3 meses** entre o "sim" da pessoa e o primeiro dia — e alinhe isso com o gestor desde o início.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/recrutement/recherche-candidat/vacance-poste-adem.html', label: 'guichet.lu — declarar vaga à ADEM' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/recrutement/ressortissant-pays-tiers/plus-3-mois/salarie-hautement-qualifie.html', label: 'guichet.lu — Cartão Azul (altamente qualificado)' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conditions-travail/protection-donnees/informer-salaries.html', label: 'guichet.lu — vigilância no trabalho' },
          { to: 'https://cnpd.public.lu', label: 'CNPD — proteção de dados' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Quando a vaga deve ser declarada à ADEM?', options: ['Antes de qualquer outra publicação.', 'Depois da contratação.', 'Só para estrangeiros.', 'Só se a vaga ficar aberta mais de 2 meses.'], answer: 0,
          explanationPt: 'Toda vaga, antes de ir para a imprensa, sites ou redes sociais.' },
        { type: 'multiple_choice', prompt: 'Qual o salário bruto anual mínimo do Cartão Azul em 2026?', options: ['65.652 €', '45.000 €', '100.000 €', 'O salário mínimo qualificado.'], answer: 0,
          explanationPt: 'Valor fixado por regulamento e atualizado; confira no guichet.lu.' },
        { type: 'multiple_choice', prompt: 'A empresa quer instalar câmeras escondidas para descobrir quem pega material do estoque. Isso é…', options: ['…proibido: a vigilância nunca pode ser escondida.', '…permitido com autorização da ITM.', '…permitido se só o diretor vir as imagens.', '…permitido por 8 dias.'], answer: 0,
          explanationPt: 'A vigilância precisa de finalidade legítima e informação prévia à delegação e aos empregados.' },
        { type: 'multiple_choice', prompt: 'Depois de informados sobre uma nova vigilância, em quanto tempo os empregados ou a delegação podem pedir um parecer da CNPD?', options: ['15 dias', '3 meses', '1 dia', '1 ano'], answer: 0,
          explanationPt: 'O pedido suspende a medida até a resposta da CNPD (1 mês).' },
        { type: 'multiple_choice', prompt: 'Um gestor pede ao RH o diagnóstico de um empregado afastado. O que você responde?', options: ['O empregador não tem acesso ao diagnóstico: o atestado só mostra as datas.', 'Envio o diagnóstico por e-mail.', 'Peço ao médico.', 'Só com autorização da delegação.'], answer: 0,
          explanationPt: 'Dados de saúde são sensíveis; o RH coleta só o necessário.' },
        { type: 'match', prompt: 'Associe cada termo ao seu sentido.', pairs: [['le poste vacant', 'vaga'], ['le titre de séjour', 'título de residência'], ['les données personnelles', 'dados pessoais'], ['la finalité', 'finalidade']] }
      ]
    }
  ]
});
