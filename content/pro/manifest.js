/* Aba Profissional — língua e conhecimento para o trabalho, organizados por CARREIRA (sub-abas).
   Cada carreira: { id, label, title, desc, status, languages, tracks, courses }.
   - languages/tracks: língua para o trabalho, por LÍNGUA → níveis (acompanham o curso) + guias de consulta.
     Lição: content/pro/<lang>/<nivel>/lNN.js com LUX.registerProLesson({ id, lang, level, order, ... mesmo formato das lições do curso }).
     "unit": a lição libera quando a unidade N do curso (mesmo nível) estiver concluída; 0 = liberada desde o início.
     Trilhas sem curso correspondente (inglês, italiano) podem omitir "unit": ficam liberadas.
     Guia: content/pro/<lang>/guias/<id>.js com LUX.registerProGuide({ id, lang, title, blocks: [... blocos de Gerais] }).
   - courses: cursos de conhecimento da carreira (ex.: legislação), em português com os termos em francês.
     Curso: content/pro/<carreira>/cursos/<id>.js com LUX.registerProCourse({ id, title, modules: [{ id, title, blocks, exercises }] }).
   Para ativar um novo idioma ou carreira: crie os arquivos, liste-os aqui e em content/manifest.js (files) e mude "status" para 'active'. */
LUX.proManifest = {
  careers: [
    { id: 'hrbp', label: 'HRBP', icon: '🤝', status: 'active', title: 'HR Business Partner',
    desc: 'Recursos Humanos em empresas de tecnologia (e um pouco de fintech), para quem vai trabalhar em Luxemburgo ou em outro país francófono.',
    courses: [
      { id: 'droit-travail-lu', icon: '⚖️', title: 'Direito do trabalho em Luxemburgo — Parte 1: o essencial', desc: 'Fontes e atores, contrato e período de experiência, tempo de trabalho, férias e salário, doença, fim do contrato.' },
      { id: 'droit-travail-lu-2', icon: '📚', title: 'Direito do trabalho em Luxemburgo — Parte 2: aprofundamento', desc: 'Cláusulas e mudanças no contrato, teletrabalho e fronteiriços, horários, licenças, remuneração, assédio, saúde, dispensa (individual e coletiva), delegação do pessoal, estrangeiros e dados. Com estudos de caso.' }
    ],
    /* cursos presenciais de outras instituições (sem datas: as turmas mudam a cada semestre; o link mostra as atuais).
       Preços conferidos em novembro de 2026 em lifelong-learning.lu. */
    external: [
      { title: 'Les fondamentaux du droit du travail pour les professionnels RH', code: 'C3059', provider: 'LLLC — Chambre des salariés',
        info: '23 h · 10 semanas, 1 aula de 2h15 por semana · em francês', prereq: 'Nenhum',
        desc: 'O básico para RH: fontes do direito e convenção coletiva, tipos de contrato, tempo de trabalho e férias, ausências, procedimento disciplinar, fim do contrato e representação do pessoal. É a base do curso do app.',
        url: 'https://www.lifelong-learning.lu/formation/les-fondamentaux-du-droit-du-travail-pour-les-p/fr', tag: 'Comece por aqui' },
      { title: 'Approfondissement du droit du travail pour les professionnels RH', code: 'C3060', provider: 'LLLC — Chambre des salariés',
        info: '23 h · 10 semanas · em francês · €210', prereq: 'C3059 ou conhecimento equivalente',
        desc: 'Tribunais e riscos jurídicos (requalificação de contratos, RGPD), regulamento interno, tempo parcial, teletrabalho, assédio e riscos psicossociais, condução de uma dispensa, proteção na doença e na gravidez.',
        url: 'https://www.lifelong-learning.lu/formation/approfondissement-du-droit-du-travail-pour-les-/fr' },
      { title: 'Le droit du travail : le contrat de travail', code: 'C3003', provider: 'LLLC — Chambre des salariés',
        info: '23 h · 10 semanas · em francês · €210', prereq: 'Nenhum',
        desc: 'Redigir CDI e CDD, trabalho temporário, período de experiência, mudanças no contrato, doença, dispensa e pedido de demissão (motivos, contestação, seguro-desemprego).',
        url: 'https://www.lifelong-learning.lu/formation/le-droit-du-travail-le-contrat-de-travail-c3003/fr' },
      { title: 'Le droit du travail : les conditions de travail', code: 'C3004', provider: 'LLLC — Chambre des salariés',
        info: '23 h · 10 semanas · em francês · €210', prereq: 'Nenhum (recomendado: C3003)',
        desc: 'Salário mínimo, indexação, 13º e benefícios em espécie; horas extras, plano de organização do trabalho, trabalho noturno e aos domingos; feriados; todos os tipos de licença; vigilância no trabalho.',
        url: 'https://www.lifelong-learning.lu/formation/le-droit-du-travail-les-conditions-de-travail-c/fr' },
      { title: 'Clé RH 2 : Appliquer le droit du travail luxembourgeois', provider: 'RH Expert (Differdange)',
        info: '15 h · 5 módulos de 3 h · FR, EN, DE ou LU · listado a €0 · certificado com prova', prereq: 'Para quem está há menos de 1 ano na função de RH',
        desc: 'Gestão do tempo de trabalho, folha de pagamento, saúde e segurança, trabalho com a delegação do pessoal, teletrabalho e destacamento. Formato para empresas: confirme se aceita inscrição individual.',
        url: 'https://www.lifelong-learning.lu/formation/cle-rh-2-appliquer-le-droit-du-travail-luxembou/fr' }
    ],
    languages: [
      { id: 'fr', label: 'Français', flag: '🇫🇷', status: 'active', desc: 'Luxemburgo, França, Bélgica, Suíça e Québec.' },
      { id: 'en', label: 'English', flag: '🇬🇧', status: 'active', desc: 'Inglês de negócios para HR Business Partner (B2–C1): stakeholders, entrevistas, desenho organizacional, dados, coaching e planejamento.' },
      { id: 'it', label: 'Italiano', flag: '🇮🇹', status: 'active', desc: 'Italiano profissional para HR Business Partner (B1): stakeholders, entrevistas, reorganização, dados, coaching e planejamento — com o tratamento formal (Lei) e os falsos amigos do português.' }
    ],
    tracks: {
      fr: {
        levels: [
          { id: 'A2', title: 'A2 — Primeiros passos no trabalho', desc: 'Apresentar-se, contar sua trajetória, falar de números da equipe, organizar e planejar.',
            lessons: [
              { id: 'pro-fr-a2-l01', unit: 0 },
              { id: 'pro-fr-a2-l02', unit: 2 },
              { id: 'pro-fr-a2-l03', unit: 3 },
              { id: 'pro-fr-a2-l04', unit: 4 },
              { id: 'pro-fr-a2-l05', unit: 5 },
              { id: 'pro-fr-a2-l06', unit: 6 }
            ] },
          { id: 'B1', title: 'B1 — Autonomia no dia a dia de RH', desc: 'Dar feedback, conduzir entrevistas, argumentar com dados, mudanças organizacionais.', lessons: [] },
          { id: 'B2', title: 'B2 — Parceira estratégica do negócio', desc: 'Negociar, influenciar a liderança, reestruturações e coaching.', lessons: [] }
        ],
        guides: [
          { id: 'trabalhar-luxemburgo', icon: '🏙️', title: 'Trabalhar em Luxemburgo', desc: 'Línguas, contrato, período de experiência, férias e trâmites.' },
          { id: 'outros-paises', icon: '🌍', title: 'França, Bélgica, Suíça e Québec', desc: 'O que muda no trabalho em cada país francófono.' },
          { id: 'glossario-rh', icon: '👥', title: 'Glossário de RH', desc: 'Talentos, organização, remuneração, desempenho e indicadores.' },
          { id: 'empresas-tech', icon: '💻', title: 'Empresas de tecnologia e fintech', desc: 'Produto, engenharia, crescimento — e o vocabulário de pagamentos.' },
          { id: 'reunioes', icon: '🗣️', title: 'Reuniões e argumentos com dados', desc: 'Dar opinião, discordar com educação, apresentar números.' },
          { id: 'emails', icon: '✉️', title: 'E-mails e mensagens', desc: 'Abrir, pedir, agradecer e encerrar — formal e informal.' },
          { id: 'entrevista', icon: '🎤', title: 'Entrevista de emprego', desc: 'Perguntas típicas, respostas modelo e candidatura.' }
        ]
      },
      en: {
        levels: [
          { id: 'B2', title: 'B2–C1 — HR Business Partner em inglês', desc: 'As competências da vaga, em inglês: liderança, dados, organização e negócio. Todas as lições já liberadas.',
            lessons: [
              { id: 'pro-en-b2-l01' }, { id: 'pro-en-b2-l02' }, { id: 'pro-en-b2-l03' },
              { id: 'pro-en-b2-l04' }, { id: 'pro-en-b2-l05' }, { id: 'pro-en-b2-l06' }
            ] }
        ],
        guides: []
      },
      it: {
        levels: [
          { id: 'B1', title: 'B1 — HR Business Partner em italiano', desc: 'As mesmas competências da vaga, em italiano. O português ajuda muito: o foco está no que é diferente (Lei, passato prossimo × imperfetto, congiuntivo). Todas as lições já liberadas.',
            lessons: [
              { id: 'pro-it-b1-l01' }, { id: 'pro-it-b1-l02' }, { id: 'pro-it-b1-l03' },
              { id: 'pro-it-b1-l04' }, { id: 'pro-it-b1-l05' }, { id: 'pro-it-b1-l06' }
            ] }
        ],
        guides: []
      }
    }
  }
  ]
};
