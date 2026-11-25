/* Aba Profissional — francês para o trabalho (RH em empresas de tecnologia; um pouco de fintech).
   Estrutura por LÍNGUA → níveis (acompanham o curso) + guias de consulta.
   - Lição: content/pro/<lang>/<nivel>/lNN.js com LUX.registerProLesson({ id, lang, level, order, ... mesmo formato das lições do curso }).
     "unit": a lição libera quando a unidade N do curso (mesmo nível) estiver concluída; 0 = liberada desde o início.
     Trilhas sem curso correspondente (inglês, italiano) podem omitir "unit": ficam liberadas.
   - Guia: content/pro/<lang>/guias/<id>.js com LUX.registerProGuide({ id, lang, title, blocks: [... blocos de Gerais] }).
   Para ativar inglês ou italiano: crie os arquivos, liste-os aqui e em content/manifest.js (files) e mude "status" para 'active'. */
LUX.proManifest = {
  languages: [
    { id: 'fr', label: 'Français', flag: '🇫🇷', status: 'active', desc: 'Luxemburgo, França, Bélgica, Suíça e Québec.' },
    { id: 'en', label: 'English', flag: '🇬🇧', status: 'active', desc: 'Inglês de negócios para HR Business Partner (B2–C1): stakeholders, entrevistas, desenho organizacional, dados, coaching e planejamento.' },
    { id: 'it', label: 'Italiano', flag: '🇮🇹', status: 'soon', desc: 'Italiano profissional — em breve.' }
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
    it: { levels: [], guides: [] }
  }
};
