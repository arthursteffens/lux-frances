/* Curso HRBP: o essencial do direito do trabalho em Luxemburgo.
   Fontes: Code du travail (legilux.public.lu) e guichet.public.lu (páginas consultadas em novembro de 2026).
   Roteiro inspirado no programa "Les fondamentaux du droit du travail pour les professionnels RH" (LLLC / Chambre des salariés).
   Valores em euros mudam com a indexação: ao atualizar, confira em guichet.public.lu → Paramètres sociaux. */
LUX.registerProCourse({
  id: 'droit-travail-lu', lang: 'fr', hours: 3,
  title: 'Direito do trabalho em Luxemburgo: o essencial',
  titleFr: 'Les fondamentaux du droit du travail luxembourgeois',
  note: '**Material de estudo**, baseado no *Code du travail* e no portal oficial **guichet.lu** (consultados em novembro de 2026). Não substitui o texto da lei nem a convenção coletiva da empresa, que pode dar mais direitos. Valores em euros mudam com a indexação dos salários.',
  modules: [
    /* ---------- 1 ---------- */
    {
      id: 'm1', title: 'Fontes do direito e quem é quem', titleFr: 'Les sources du droit du travail et les acteurs',
      blocks: [
        { type: 'intro', textPt: 'Antes de responder a qualquer dúvida de um gestor, o HRBP precisa saber **onde está a regra**. Em Luxemburgo, o direito do trabalho fica quase todo num só lugar: o ***Code du travail***, publicado no **Legilux** (o diário oficial). A língua oficial das leis é o **francês**.\n\nAs regras se somam em camadas: **lei** → **convenção coletiva** (*convention collective*) → **regulamento interno** (*règlement intérieur*) → **contrato de trabalho**. Vale o **princípio da regra mais favorável**: um nível de baixo só pode **melhorar** o que o de cima garante, nunca piorar. Um contrato que dá 22 dias de férias, por exemplo, não vale nesse ponto: a lei garante 26.' },
        { type: 'rules', items: [
          { title: 'A lei: o Code du travail', textPt: 'Organizado em **livros** (*livres*): o Livro I trata das relações individuais (contrato, tempo de trabalho, férias, salário, fim do contrato); o Livro IV, da representação do pessoal. Os artigos têm a forma **L.121-1** (L = parte legislativa).',
            examples: [{ fr: "Selon le Code du travail, le contrat doit être écrit.", pt: 'Segundo o Code du travail, o contrato deve ser escrito.' }] },
          { title: 'A convenção coletiva', textPt: 'Negociada entre sindicatos e empregadores, para um setor (ex.: bancos, seguros) ou uma empresa. Pode dar **mais** férias, salários mínimos por função, 13º salário etc. Sempre pergunte: **a empresa tem convenção coletiva?**',
            examples: [{ fr: "Est-ce qu'il y a une convention collective dans l'entreprise ?", pt: 'Existe uma convenção coletiva na empresa?' }] },
          { title: 'Os órgãos que o RH encontra', textPt: '**ITM** (*Inspection du travail et des mines*): fiscaliza e responde dúvidas sobre a lei. **CCSS** (*Centre commun de la sécurité sociale*): o empregador **declara** a entrada e a saída de cada empregado e os salários. **CNS** (*Caisse nationale de santé*): seguro-saúde; paga a licença médica longa. **ADEM**: agência de emprego (vagas, desemprego). **Chambre des salariés (CSL)**: representa os empregados e oferece cursos. **Tribunal du travail**: julga os conflitos.',
            examples: [{ fr: "Pour une question sur la loi, on peut contacter l'ITM.", pt: 'Para uma dúvida sobre a lei, dá para contatar a ITM.' }] },
          { title: 'A delegação do pessoal', textPt: 'Empresas com **pelo menos 15 empregados** têm uma ***délégation du personnel***, eleita **a cada 5 anos** (as últimas eleições foram em março de 2024). Ela é informada e consultada sobre organização, saúde e segurança, igualdade. Os delegados têm **proteção especial contra a dispensa** durante o mandato e por alguns meses depois.',
            examples: [{ fr: 'Nous devons informer la délégation du personnel.', pt: 'Precisamos informar a delegação do pessoal.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le droit du travail', pt: 'o direito do trabalho' }, { fr: 'la loi', pt: 'a lei' }, { fr: "l'article", pt: 'o artigo' },
            { fr: 'la convention collective', pt: 'a convenção coletiva' }, { fr: 'le règlement intérieur', pt: 'o regulamento interno' },
            { fr: "l'employeur", pt: 'o empregador' }, { fr: 'le salarié / la salariée', pt: 'o(a) empregado(a)' },
            { fr: 'la délégation du personnel', pt: 'a delegação (representação) do pessoal' }, { fr: 'le délégué / la déléguée', pt: 'o(a) delegado(a)' },
            { fr: 'le tribunal du travail', pt: 'a justiça do trabalho' }
          ] }
        ] },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Quando um gestor pergunta "posso fazer isso?", responda em três passos: **1)** o que diz a lei; **2)** o que a convenção coletiva ou o regulamento interno da empresa acrescenta; **3)** o que está no contrato daquela pessoa. E guarde o link do artigo: em Luxemburgo, citar o *Code du travail* passa segurança.' },
        { type: 'links', items: [
          { to: 'https://legilux.public.lu', label: 'Legilux — texto oficial do Code du travail' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines.html', label: 'guichet.lu — Ressources humaines' },
          { to: 'https://itm.public.lu', label: 'ITM — Inspection du travail et des mines' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Onde está, em Luxemburgo, a maior parte das regras do direito do trabalho?', options: ['No Code du travail.', 'No Código Civil.', 'Só nas convenções coletivas.', 'Nos contratos de cada empresa.'], answer: 0,
          explanationPt: 'O Code du travail reúne quase todas as regras; convenções e contratos só podem melhorá-las.' },
        { type: 'multiple_choice', prompt: 'Um contrato prevê 22 dias de férias por ano. O que vale?', options: ['Os 26 dias da lei: o contrato não pode dar menos.', 'Os 22 dias, porque o empregado assinou.', 'A média: 24 dias.', 'Depende da ITM.'], answer: 0,
          explanationPt: 'Princípio da regra mais favorável: o contrato só pode melhorar o mínimo legal.' },
        { type: 'multiple_choice', prompt: 'A quem o empregador declara a entrada de um novo empregado e os salários?', options: ['À CCSS.', 'À ADEM.', 'À Chambre des salariés.', 'Ao Tribunal du travail.'], answer: 0,
          explanationPt: 'A CCSS (Centre commun de la sécurité sociale) recebe as declarações de entrada, saída e salários.' },
        { type: 'multiple_choice', prompt: 'A partir de quantos empregados a empresa precisa de uma délégation du personnel?', options: ['15', '50', '150', '5'], answer: 0,
          explanationPt: 'Com pelo menos 15 empregados, há eleições a cada 5 anos.' },
        { type: 'match', prompt: 'Associe cada sigla ao seu papel.', pairs: [['ITM', 'fiscaliza a lei do trabalho'], ['CNS', 'seguro-saúde, paga a licença longa'], ['ADEM', 'agência de emprego'], ['CCSS', 'recebe as declarações do empregador']] }
      ]
    },

    /* ---------- 2 ---------- */
    {
      id: 'm2', title: 'Contratar: CDI, CDD e período de experiência', titleFr: "Le contrat de travail et la période d'essai",
      blocks: [
        { type: 'intro', textPt: 'O contrato padrão é o **CDI** (*contrat à durée indéterminée*). O **CDD** (*contrat à durée déterminée*) é a **exceção**: só pode ser usado nos casos que a lei lista, para uma necessidade **temporária** (substituir alguém ausente, um projeto ou um pico de atividade sazonal, por exemplo). Um CDD para uma atividade **permanente** da empresa é tratado como CDI.\n\nTodo contrato — CDI ou CDD — deve estar **por escrito**, para cada empregado, **no mais tardar no momento da entrada em serviço**.' },
        { type: 'rules', items: [
          { title: 'CDD: limites', textPt: 'Duração máxima de **24 meses, renovações incluídas**, e no máximo **2 renovações** (previstas no contrato ou num aditivo assinado). Passou disso, vira **CDI**. O contrato deve dizer o **motivo**, a **data de fim** (ou a duração mínima) e, se for uma substituição, **quem** é substituído. Entre dois CDD para o **mesmo posto**, há uma carência de **1/3 da duração** do contrato anterior.',
            examples: [{ fr: 'Le CDD ne peut pas dépasser vingt-quatre mois.', pt: 'O CDD não pode passar de vinte e quatro meses.' }] },
          { title: 'Período de experiência: duração', textPt: 'A *période d\'essai* também precisa estar **por escrito** até a entrada em serviço; senão, o contrato já é definitivo. **Mínimo: 2 semanas.** **Máximo: 3 meses** se a formação é inferior ao nível **DAP/CATP** (formação profissional); **6 meses** nos demais casos; **12 meses** se o salário bruto mensal for de pelo menos **5.188,69 €** (valor de 2026). Só **um** período de experiência por relação de trabalho: não se renova.',
            examples: [{ fr: "La période d'essai est de six mois.", pt: 'O período de experiência é de seis meses.' }] },
          { title: 'Período de experiência: como terminar', textPt: 'Qualquer um dos lados pode encerrar, **por escrito** (carta registrada ou entregue em mãos contra assinatura), **sem precisar dar motivo**. Mas há **aviso prévio**: **4 dias por mês** de experiência previsto, com mínimo de **15 dias** e máximo de **1 mês** (ex.: 6 meses → 24 dias). Nas **2 primeiras semanas**, só é possível encerrar por **falta grave**. Se o empregado ficar **doente**, o período é suspenso e prolongado (até 1 mês) e o empregador não pode encerrá-lo durante a doença.',
            examples: [{ fr: "Nous mettons fin au contrat pendant la période d'essai.", pt: 'Encerramos o contrato durante o período de experiência.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le contrat de travail', pt: 'o contrato de trabalho' }, { fr: 'le CDI', pt: 'o contrato por tempo indeterminado' }, { fr: 'le CDD', pt: 'o contrato por tempo determinado' },
            { fr: 'le renouvellement', pt: 'a renovação' }, { fr: "l'avenant", pt: 'o aditivo (ao contrato)' }, { fr: "l'entrée en service", pt: 'o início do trabalho' },
            { fr: "la période d'essai", pt: 'o período de experiência' }, { fr: 'le préavis', pt: 'o aviso prévio' },
            { fr: 'la lettre recommandée', pt: 'a carta registrada' }, { fr: 'la faute grave', pt: 'a falta grave (justa causa)' }
          ] }
        ] },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Antes de aprovar um CDD, pergunte ao gestor **qual é o motivo temporário** e **quando** ele acaba. Se a resposta for "a vaga é para sempre, mas queremos testar a pessoa", o caminho certo é um **CDI com período de experiência** — não um CDD.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/citoyens/travail/conditions-travail/types-contrat-travail/contrat-duree-indeterminee.html', label: 'guichet.lu — CDI e período de experiência' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/contrat-convention/contrat-travail/duree-determinee.html', label: 'guichet.lu — CDD' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/fin-relation-travail/licenciement-resiliation/periode-essai.html', label: 'guichet.lu — terminar durante o período de experiência' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Até quando o contrato de trabalho deve estar por escrito?', options: ['No mais tardar no momento da entrada em serviço.', 'Até o fim do período de experiência.', 'Em até 2 meses.', 'Só se o empregado pedir.'], answer: 0,
          explanationPt: 'CDI e CDD: por escrito, para cada empregado, no mais tardar na entrada em serviço.' },
        { type: 'multiple_choice', prompt: 'Um CDD de 12 meses já foi renovado duas vezes (6 + 6 meses). O gestor quer renovar de novo. O que acontece?', options: ['Não pode: já são 24 meses e 2 renovações; continuar transforma o contrato em CDI.', 'Pode renovar mais 12 meses.', 'Pode, se o empregado concordar por e-mail.', 'Pode, desde que mude o cargo no papel.'], answer: 0,
          explanationPt: 'Máximo de 24 meses, renovações incluídas, e no máximo 2 renovações.' },
        { type: 'multiple_choice', prompt: 'Uma engenheira terá salário bruto de 7.000 € por mês. Qual o período de experiência máximo?', options: ['12 meses', '6 meses', '3 meses', '2 semanas'], answer: 0,
          explanationPt: 'Com salário bruto mensal de pelo menos 5.188,69 € (2026), o máximo sobe para 12 meses.' },
        { type: 'multiple_choice', prompt: 'O período de experiência previsto é de 6 meses. Qual o aviso prévio para encerrá-lo?', options: ['24 dias (4 dias por mês previsto).', '1 semana.', '2 meses.', 'Nenhum.'], answer: 0,
          explanationPt: '4 dias por mês de experiência previsto, mínimo 15 dias e máximo 1 mês: 6 × 4 = 24 dias.' },
        { type: 'multiple_choice', prompt: 'Para encerrar o contrato durante o período de experiência, o empregador precisa…', options: ['…avisar por escrito e respeitar o aviso prévio, sem precisar dar motivo.', '…provar uma falta grave.', '…fazer uma entrevista prévia em qualquer empresa.', '…pedir autorização à ITM.'], answer: 0,
          explanationPt: 'Não precisa de motivo, mas precisa da forma escrita e do aviso prévio (salvo falta grave).' }
      ]
    },

    /* ---------- 3 ---------- */
    {
      id: 'm3', title: 'Tempo de trabalho, férias e salário', titleFr: 'La durée du travail, les congés et le salaire',
      blocks: [
        { type: 'intro', textPt: 'Três perguntas que o HRBP ouve toda semana: **quantas horas** posso pedir, **quantos dias de férias** a pessoa tem e **quanto** é o mínimo que a empresa pode pagar.' },
        { type: 'rules', items: [
          { title: 'Horas de trabalho', textPt: 'Duração normal: **8 horas por dia** e **40 horas por semana**. Com horas extras, o limite absoluto é de **10 horas por dia** e **48 horas por semana**. As horas extras (*heures supplémentaires*) são, em regra, compensadas com **descanso de 1h30 por hora extra**; se não for possível, são **pagas com acréscimo de 40%**. Muitas empresas usam um **plano de organização do trabalho** (*POT*) ou horário flexível, que distribuem as horas num período de referência.',
            examples: [{ fr: 'La durée normale de travail est de quarante heures par semaine.', pt: 'A duração normal do trabalho é de quarenta horas por semana.' }] },
          { title: 'Férias: 26 dias úteis', textPt: 'Todo empregado tem **26 dias úteis** (*jours ouvrables*) de férias pagas por ano, ou seja, **2,17 dias por mês** de trabalho. Pode começar a tirá-las depois de **3 meses** sem interrupção (antes, só se o empregador aceitar). Em regra, são tiradas **no mesmo ano**; podem passar para **até 31 de março** do ano seguinte quando o serviço impediu (ou depois de licença maternidade, parental ou doença). Ficar **doente nas férias**: com atestado (em até 3 dias úteis, se estiver em Luxemburgo), os dias de doença **não contam** como férias.',
            examples: [{ fr: 'Chaque salarié a vingt-six jours de congé par an.', pt: 'Cada empregado tem vinte e seis dias de férias por ano.' }] },
          { title: '11 feriados legais', textPt: 'Ano-Novo, segunda-feira de Páscoa, 1º de maio, **Dia da Europa (9 de maio)**, Ascensão, segunda-feira de Pentecostes, **festa nacional (23 de junho)**, Assunção (15 de agosto), Todos os Santos (1º de novembro), Natal (25 de dezembro) e Santo Estêvão (26 de dezembro). Se um feriado cai num **domingo**, o empregado ganha um dia de folga compensatória.',
            examples: [{ fr: 'Le vingt-trois juin est la fête nationale.', pt: 'O dia vinte e três de junho é a festa nacional.' }] },
          { title: 'Salário social mínimo e indexação', textPt: 'O ***salaire social minimum* (SSM)** é o piso legal. Desde **1º de junho de 2026**: **2.771,33 €** brutos por mês para quem tem 18 anos ou mais; **3.325,59 €** (+20%) para o empregado **qualificado** (*qualifié*: diploma profissional reconhecido ou experiência equivalente). Jovens de 17 a 18 anos: 80%; de 15 a 17: 75%. Além disso, todos os salários são **indexados**: quando a inflação acumula **2,5%**, eles sobem na mesma proporção. O **13º salário não é obrigatório** por lei: só existe se o contrato ou a convenção coletiva prevê.',
            examples: [{ fr: 'Les salaires augmentent avec l\'indexation.', pt: 'Os salários aumentam com a indexação.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'la durée du travail', pt: 'a duração do trabalho, a jornada' }, { fr: 'les heures supplémentaires', pt: 'as horas extras' },
            { fr: 'le repos compensatoire', pt: 'o descanso compensatório, a folga' }, { fr: 'les congés payés', pt: 'as férias remuneradas' },
            { fr: 'le jour ouvrable', pt: 'o dia útil' }, { fr: 'le jour férié', pt: 'o feriado' },
            { fr: 'le salaire social minimum', pt: 'o salário mínimo legal' }, { fr: "l'indexation", pt: 'a indexação (correção pela inflação)' },
            { fr: 'le salaire brut', pt: 'o salário bruto' }, { fr: 'la fiche de paie', pt: 'o holerite, o contracheque' }
          ] }
        ] },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Em ofertas de emprego, compare sempre **salário bruto anual** e diga **em quantos meses** ele é pago (12 ou 13). E lembre que a indexação vale para todos: no planejamento de orçamento de pessoal, a área financeira precisa prever uma (ou mais) indexações no ano.' },
        { type: 'links', items: [
          { to: 'https://itm.public.lu/fr/conditions-travail/duree-travail.html', label: 'ITM — duração do trabalho' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/conges/annuel/conge-annuel.html', label: 'guichet.lu — férias anuais' },
          { to: 'https://guichet.public.lu/fr/entreprises/outils/parametres-sociaux.html', label: 'guichet.lu — parâmetros sociais (valores atuais)' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Qual o máximo de horas por semana, já contando as horas extras?', options: ['48 horas', '40 horas', '44 horas', '60 horas'], answer: 0,
          explanationPt: '40 horas é a duração normal; com horas extras, o teto é de 10 h por dia e 48 h por semana.' },
        { type: 'multiple_choice', prompt: 'Quantos dias de férias pagas um empregado em tempo integral tem por ano, pela lei?', options: ['26 dias úteis', '30 dias corridos', '25 dias úteis', '20 dias úteis'], answer: 0,
          explanationPt: '26 dias úteis por ano (2,17 por mês).' },
        { type: 'multiple_choice', prompt: 'Qual destes dias é feriado legal em Luxemburgo?', options: ['9 de maio, Dia da Europa.', '14 de julho.', '1º de março.', 'Sexta-feira Santa.'], answer: 0,
          explanationPt: 'O 9 de maio entrou na lista em 2019; são 11 feriados legais.' },
        { type: 'multiple_choice', prompt: 'O 13º salário em Luxemburgo é…', options: ['…opcional: só existe se o contrato ou a convenção coletiva prevê.', '…obrigatório para todos.', '…obrigatório só no setor bancário por lei.', '…pago pela CNS.'], answer: 0,
          explanationPt: 'A lei não obriga. Muitas convenções coletivas e contratos preveem.' },
        { type: 'multiple_choice', prompt: 'Um empregado qualificado, com 25 anos, recebe o salário mínimo. Quanto, desde junho de 2026?', options: ['3.325,59 € brutos por mês', '2.771,33 € brutos por mês', '2.217,06 € brutos por mês', '2.771,33 € líquidos por mês'], answer: 0,
          explanationPt: 'O SSM qualificado é 20% maior que o SSM de base (2.771,33 €).' }
      ]
    },

    /* ---------- 4 ---------- */
    {
      id: 'm4', title: 'Doença: aviso, atestado e proteção', titleFr: "La maladie : l'information, le certificat et la protection",
      blocks: [
        { type: 'intro', textPt: 'A licença médica é um dos temas em que gestores mais erram — e em que um erro custa caro, porque o empregado doente tem **proteção contra a dispensa**.' },
        { type: 'rules', items: [
          { title: 'As duas obrigações do empregado', textPt: '**1)** Avisar o empregador **já no 1º dia** de ausência (por telefone, e-mail ou mensagem). **2)** Entregar o **atestado médico** (*certificat médical*) **no mais tardar no 3º dia** de ausência — uma via vai para a **CNS** e outra para o empregador. Para 1 ou 2 dias, a empresa pode dispensar o atestado se for a prática dela. Em caso de **internação de urgência**, o prazo é de 8 dias.',
            examples: [{ fr: 'Je suis malade, je vous envoie le certificat médical.', pt: 'Estou doente, envio o atestado médico para vocês.' }] },
          { title: 'Proteção contra a dispensa: 26 semanas', textPt: 'Se cumpriu as duas obrigações, o empregado fica **protegido** durante a incapacidade, **até 26 semanas** desde o início: o empregador **não pode** dispensá-lo com aviso prévio, nem convocá-lo para a entrevista prévia, nem dispensá-lo por uma falta anterior. **Atenção:** uma carta de dispensa recebida **antes** de o empregador saber da doença continua válida.',
            examples: [{ fr: 'Pendant la maladie, le salarié est protégé contre le licenciement.', pt: 'Durante a doença, o empregado está protegido contra a dispensa.' }] },
          { title: 'Quem paga o salário', textPt: 'O **empregador continua pagando** o salário até o **fim do mês em que cai o 77º dia** de incapacidade (contado em um período de referência de 18 meses). A partir do mês seguinte, quem paga é a **CNS**. A *Mutualité des employeurs* reembolsa ao empregador **80%** desse custo. O empregador declara os períodos de doença **todo mês à CCSS**.',
            examples: [{ fr: "L'employeur continue à payer le salaire.", pt: 'O empregador continua pagando o salário.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'le certificat médical', pt: 'o atestado médico' }, { fr: "l'incapacité de travail", pt: 'a incapacidade para o trabalho' },
            { fr: 'le congé de maladie', pt: 'a licença médica' }, { fr: "l'absence", pt: 'a ausência, a falta' },
            { fr: 'la continuation du salaire', pt: 'a manutenção do salário (pelo empregador)' }, { fr: 'la protection contre le licenciement', pt: 'a proteção contra a dispensa' }
          ] }
        ] },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Quando um gestor diz "quero dispensar fulano, mas ele está doente", a resposta é **esperar**: durante a proteção, a dispensa é **abusiva**. Use o tempo para documentar bem os fatos e planejar a cobertura da equipe. E lembre o gestor de **não pedir o diagnóstico**: o atestado mostra só as datas.' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/sante/incapacite-travail/certificat-medical.html', label: 'guichet.lu — atestado médico e proteção' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/sante/incapacite-travail/continuation-salaire.html', label: 'guichet.lu — manutenção do salário' },
          { to: 'https://cns.public.lu', label: 'CNS — Caisse nationale de santé' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Até quando o empregado deve entregar o atestado médico?', options: ['No mais tardar no 3º dia de ausência.', 'Em até 8 dias, sempre.', 'Só ao voltar ao trabalho.', 'No mesmo dia, antes das 9h.'], answer: 0,
          explanationPt: 'Aviso no 1º dia; atestado até o 3º dia (8 dias só em internação de urgência).' },
        { type: 'multiple_choice', prompt: 'Um empregado avisou e mandou o atestado em dia. Por quanto tempo, no máximo, ele está protegido contra a dispensa?', options: ['Até 26 semanas desde o início da incapacidade.', '77 dias.', '12 meses.', 'Não há proteção.'], answer: 0,
          explanationPt: 'A proteção vale durante a incapacidade, até 26 semanas.' },
        { type: 'multiple_choice', prompt: 'Até quando o empregador continua pagando o salário durante a doença?', options: ['Até o fim do mês em que cai o 77º dia de incapacidade.', 'Até o 3º dia.', 'Sempre, sem limite.', 'Até o fim do ano.'], answer: 0,
          explanationPt: 'Depois disso, quem paga é a CNS. A Mutualité reembolsa 80% ao empregador.' },
        { type: 'multiple_choice', prompt: 'O gestor quer saber "qual é a doença" de um empregado. O que o HRBP responde?', options: ['O atestado traz as datas; o diagnóstico é confidencial e não deve ser pedido.', 'O RH pode ligar para o médico.', 'O empregado é obrigado a contar.', 'A CNS informa se a empresa pedir.'], answer: 0,
          explanationPt: 'A empresa recebe a via com as datas da incapacidade, não o diagnóstico.' }
      ]
    },

    /* ---------- 5 ---------- */
    {
      id: 'm5', title: 'Fim do contrato: pedido de demissão, dispensa e indenização', titleFr: 'La fin du contrat : démission, licenciement et indemnité',
      blocks: [
        { type: 'intro', textPt: 'Em francês, **cuidado com o falso amigo**: *la démission* é quando o **empregado** pede para sair (o nosso "pedido de demissão"); *le licenciement* é quando o **empregador** dispensa. Num CDI, os dois lados podem encerrar o contrato com **aviso prévio** (*préavis*), contado a partir do **dia 15** (carta enviada antes do dia 15) ou do **dia 1º do mês seguinte** (carta enviada do dia 15 em diante).' },
        { type: 'rules', items: [
          { title: 'Aviso prévio por tempo de casa', textPt: '**Dispensa pelo empregador:** menos de 5 anos → **2 meses**; de 5 a 10 anos → **4 meses**; 10 anos ou mais → **6 meses**. **Pedido de demissão pelo empregado:** a metade — **1 mês**, **2 meses** e **3 meses**. Num CDD, não há pedido de demissão nem dispensa antes do fim, salvo falta grave ou acordo escrito.',
            examples: [{ fr: 'Le préavis est de deux mois.', pt: 'O aviso prévio é de dois meses.' }] },
          { title: 'Procedimento da dispensa', textPt: 'Em empresas com **150 empregados ou mais**, é obrigatória uma **entrevista prévia** (*entretien préalable*): convocação por carta registrada ou em mãos (com cópia à delegação do pessoal), entrevista no mínimo no 2º dia útil depois, e a carta de dispensa **entre o dia seguinte e 8 dias** após a entrevista. Abaixo de 150, a carta pode ser enviada direto. Depois de receber a carta, o empregado tem **1 mês** para pedir os **motivos** (*motifs*) por carta registrada, e o empregador tem **1 mês** para responder — com motivos **precisos e reais**.',
            examples: [{ fr: 'Le salarié demande les motifs du licenciement.', pt: 'O empregado pede os motivos da dispensa.' }] },
          { title: 'Falta grave', textPt: 'Uma *faute grave* permite a dispensa **sem aviso prévio** e **sem indenização**. Mas o empregador só pode invocá-la **até 1 mês** depois de tomar conhecimento do fato. Passado esse prazo, o fato não serve mais, sozinho, como falta grave.',
            examples: [{ fr: "L'employeur a un mois pour invoquer la faute grave.", pt: 'O empregador tem um mês para invocar a falta grave.' }] },
          { title: 'Indenização de saída', textPt: 'Na dispensa com aviso prévio, a partir de **5 anos** de casa o empregado recebe uma ***indemnité de départ***: 5 a 10 anos → **1 mês** de salário; 10 a 15 → **2**; 15 a 20 → **3**; 20 a 25 → **6**; 25 a 30 → **9**; 30 ou mais → **12**. Não há indenização em pedido de demissão nem em falta grave. Empresas com menos de 20 empregados podem trocar a indenização por um aviso prévio mais longo.',
            examples: [{ fr: "Après dix ans, l'indemnité de départ est de deux mois de salaire.", pt: 'Depois de dez anos, a indenização de saída é de dois meses de salário.' }] }
        ] },
        { type: 'table', sections: [
          { title: 'Termos do módulo', items: [
            { fr: 'la démission', pt: 'o pedido de demissão (pelo empregado)' }, { fr: 'le licenciement', pt: 'a dispensa (pelo empregador)' },
            { fr: "l'ancienneté", pt: 'o tempo de casa' }, { fr: "l'entretien préalable", pt: 'a entrevista prévia (antes da dispensa)' },
            { fr: 'les motifs', pt: 'os motivos' }, { fr: "l'indemnité de départ", pt: 'a indenização de saída' },
            { fr: 'le licenciement abusif', pt: 'a dispensa abusiva (sem motivo válido)' }, { fr: "le chômage", pt: 'o desemprego, o seguro-desemprego' }
          ] }
        ] },
        { type: 'tip', title: '💼 Na prática do HRBP', textPt: 'Antes de qualquer dispensa, monte com o gestor um **dossiê**: fatos com datas, avaliações, e-mails, avisos anteriores. Em Luxemburgo, o empregado pode pedir os motivos, e uma resposta vaga ("falta de adequação") é o caminho mais curto para o *Tribunal du travail* declarar a dispensa **abusiva**. Confira também se a pessoa não está **protegida** (doença, gravidez, delegado do pessoal).' },
        { type: 'links', items: [
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/fin-relation-travail/licenciement-resiliation/licencier-preavis.html', label: 'guichet.lu — dispensa com aviso prévio' },
          { to: 'https://guichet.public.lu/fr/entreprises/ressources-humaines/fin-relation-travail/licenciement-resiliation/licencier-faute-grave.html', label: 'guichet.lu — dispensa por falta grave' },
          { to: 'https://guichet.public.lu/fr/citoyens/travail/fin-contrat/demission/resiliation-contrat-preavis.html', label: 'guichet.lu — pedido de demissão' }
        ] }
      ],
      exercises: [
        { type: 'multiple_choice', prompt: 'Em francês, "la démission" é…', options: ['…quando o empregado pede para sair.', '…quando a empresa dispensa o empregado.', '…a indenização de saída.', '…o aviso prévio.'], answer: 0,
          explanationPt: 'Falso amigo! A dispensa pelo empregador é "le licenciement".' },
        { type: 'multiple_choice', prompt: 'Uma empregada com 7 anos de casa é dispensada com aviso prévio. Qual o aviso e a indenização?', options: ['4 meses de aviso e 1 mês de indenização.', '2 meses de aviso e nenhuma indenização.', '6 meses de aviso e 2 meses de indenização.', '1 mês de aviso e 1 mês de indenização.'], answer: 0,
          explanationPt: 'De 5 a 10 anos: aviso de 4 meses e indemnité de départ de 1 mês.' },
        { type: 'multiple_choice', prompt: 'Um empregado com 3 anos de casa pede demissão. Qual o aviso prévio dele?', options: ['1 mês', '2 meses', '3 meses', 'Nenhum'], answer: 0,
          explanationPt: 'Pedido de demissão: 1 mês (menos de 5 anos), 2 meses (5 a 10), 3 meses (10 ou mais).' },
        { type: 'multiple_choice', prompt: 'A carta de dispensa foi enviada em 20 de março. Quando começa o aviso prévio?', options: ['1º de abril.', '15 de março.', '20 de março.', '15 de abril.'], answer: 0,
          explanationPt: 'Carta enviada do dia 15 em diante → o aviso começa no dia 1º do mês seguinte.' },
        { type: 'multiple_choice', prompt: 'O gestor descobriu uma falta grave há 6 semanas e só agora quer dispensar. O que o HRBP alerta?', options: ['O prazo de 1 mês para invocar a falta grave já passou.', 'Não há prazo para falta grave.', 'O prazo é de 1 ano.', 'Basta fazer a entrevista prévia.'], answer: 0,
          explanationPt: 'A falta grave deve ser invocada até 1 mês depois de o empregador tomar conhecimento.' }
      ]
    }
  ]
});
