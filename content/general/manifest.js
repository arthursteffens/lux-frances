/* Gerais — grupos e ordem das páginas da barra lateral.
   Adicionar página: crie content/general/<id>.js (LUX.registerGeneral) e liste o arquivo em content/manifest.js. */
LUX.generalManifest = [
  { id: 'comunicacao', title: 'Comunicação básica', pages: [
    { id: 'saudacoes', title: 'Saudações e despedidas', icon: '👋', desc: 'Bonjour, salut, à plus.' },
    { id: 'cortesia', title: 'Cortesia e fórmulas prontas', icon: '🙏', desc: 'S\'il vous plaît, excusez-moi.' },
    { id: 'tu-vous', title: 'Tu ou vous?', icon: '🤝', desc: 'Quando tratar por tu ou por vous.' },
    { id: 'alfabeto', title: 'Alfabeto, letras e pronúncia', icon: '🔤', desc: 'Cada letra e seu som, nasais, letras mudas, liaison, acentos e soletração.' },
    { id: 'perguntas', title: 'Perguntas essenciais', icon: '❓', desc: 'Où, quand, combien...' }
  ] },
  { id: 'numeros', title: 'Números e quantidades', pages: [
    { id: 'numeros-cardinais', title: 'Números cardinais', icon: '🔢', desc: 'De zéro a um milhão, com conversor.' },
    { id: 'numeros-ordinais', title: 'Números ordinais', icon: '🥇', desc: 'Premier, deuxième... andares, séculos e reis.' },
    { id: 'dinheiro', title: 'Dinheiro e preços', icon: '💶', desc: 'Euros, centimes e como pagar.' },
    { id: 'medidas', title: 'Medidas e pesos', icon: '⚖️', desc: 'Kilos, litros, mètres.' },
    { id: 'fracoes', title: 'Frações, decimais e porcentagens', icon: '➗', desc: 'La moitié, un quart, 2,5 %.' }
  ] },
  { id: 'tempo', title: 'Tempo e calendário', pages: [
    { id: 'dias-semana', title: 'Dias da semana', icon: '📅', desc: 'Lundi × le lundi.' },
    { id: 'meses', title: 'Meses', icon: '🗓️', desc: 'Os 12 meses e como usá-los.' },
    { id: 'horas', title: 'Horas', icon: '🕐', desc: 'Formal, coloquial e relógio interativo.' },
    { id: 'datas', title: 'Datas', icon: '📆', desc: 'Le premier mai, a data de hoje.' },
    { id: 'estacoes', title: 'Estações do ano', icon: '🍂', desc: 'Au printemps, en été...' },
    { id: 'expressoes-tempo', title: 'Expressões de tempo', icon: '⏱️', desc: 'Hier, demain, la semaine prochaine.' },
    { id: 'anos-seculos', title: 'Anos e séculos', icon: '⏳', desc: 'Como ler anos, décadas e séculos.' },
    { id: 'feriados', title: 'Feriados e datas comemorativas', icon: '🎉', desc: 'Le 14 juillet, Noël, la Toussaint.' }
  ] },
  { id: 'pessoas', title: 'Pessoas e mundo', pages: [
    { id: 'familia', title: 'Família', icon: '👨‍👩‍👧', desc: 'Parentes e estado civil.' },
    { id: 'paises', title: 'Países, nacionalidades e línguas', icon: '🌍', desc: 'Au Brésil, en France.' },
    { id: 'cores', title: 'Cores', icon: '🎨', desc: 'Concordância das cores.' },
    { id: 'profissoes', title: 'Profissões', icon: '💼', desc: 'Masculino e feminino das profissões.' },
    { id: 'clima', title: 'Clima e tempo', icon: '⛅', desc: 'Il fait beau, il pleut.' }
  ] },
  { id: 'situacoes', title: 'Situações práticas', pages: [
    { id: 'restaurante', title: 'No café e no restaurante', icon: '☕', desc: "L'addition, s'il vous plaît." },
    { id: 'direcoes', title: 'Direções e localização', icon: '🧭', desc: 'À gauche, tout droit.' },
    { id: 'transporte', title: 'Transporte', icon: '🚆', desc: 'Billets, quais e correspondências.' },
    { id: 'saude', title: 'Corpo, saúde e farmácia', icon: '💊', desc: "J'ai mal à la tête." },
    { id: 'telefone-email', title: 'Ao telefone e por e-mail', icon: '📞', desc: 'Allô, ne quittez pas.' },
    { id: 'emergencias', title: 'Emergências', icon: '🚨', desc: 'Números e frases de socorro.' }
  ] }
];
