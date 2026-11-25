LUX.registerProLesson({
  id: 'pro-en-b2-l03', lang: 'en', level: 'B2', order: 3, sector: 'Tecnologia',
  title: 'Redesigning the organisation', titlePt: 'Redesenhando a organização',
  names: ['Marina', 'Nuvio', 'Daniel', 'Priya', 'Shah', 'Tom'],
  objectives: [
    'Falar de desenho organizacional: span of control, camadas, papéis e planejamento de equipes.',
    'Anunciar mudanças com a voz passiva ("Two new teams will be created").',
    'Antecipar riscos de pessoas numa reorganização e propor como comunicá-la.'
  ],
  vocabulary: [
    { fr: 'org design', pt: 'desenho organizacional', ex: 'Org design should follow the business strategy.' },
    { fr: 'span of control', pt: 'número de pessoas lideradas por um gestor', ex: 'A span of control of six to eight works well for us.' },
    { fr: 'direct report', pt: 'subordinado direto', ex: 'She has twelve direct reports.' },
    { fr: 'layer', pt: 'camada (nível hierárquico)', ex: 'We want to avoid adding another management layer.' },
    { fr: 'role architecture', pt: 'arquitetura de cargos (níveis e famílias de função)', ex: 'A clear role architecture helps people see their career path.' },
    { fr: 'to merge', pt: 'fundir, juntar', pos: 'v', ex: 'The two data teams will be merged.' },
    { fr: 'to split', pt: 'dividir', pos: 'v', ex: 'The platform team will be split into two squads.' },
    { fr: 'squad', pt: 'squad, pequena equipe multidisciplinar', ex: 'Each squad owns one part of the product.' },
    { fr: 'workforce planning', pt: 'planejamento da força de trabalho', ex: 'Workforce planning starts with the product roadmap.' },
    { fr: 'change management', pt: 'gestão da mudança', ex: 'Good change management is mostly good communication.' },
    { fr: 'to anticipate', pt: 'antecipar, prever', pos: 'v', ex: 'We need to anticipate how people will react.' },
    { fr: 'rumour', pt: 'boato', ex: 'If we wait too long, rumours will spread.' }
  ],
  reading: {
    genre: 'proposta para o CEO',
    title: 'Proposal: a new structure for Product and Engineering',
    text: "Context. Product and Engineering have grown from 30 to 110 people in two years, but the structure has not changed. Today, four managers have more than twelve direct reports, while two have only three. Decisions are slow because everything goes up to the VPs, and in the last engagement survey only 48 percent of engineers said they understood how their work was connected to company goals.\n\n" +
      "Proposal. The current six large teams will be replaced by ten squads of six to nine people, each owning one part of the product. The two data teams will be merged, and the platform team will be split in two. No new management layer will be added: four senior engineers will be promoted to engineering managers, and a simple role architecture will be introduced so that people can see the difference between a senior engineer, a staff engineer and a manager.\n\n" +
      "Risks. Some people will feel they are losing status, especially the managers whose teams become smaller. A few engineers may prefer to stay with their current colleagues. If the change is announced badly, we could lose people we cannot afford to lose.\n\n" +
      "Communication plan. Every affected manager will be told individually before the announcement. The new structure will then be presented at an all-hands meeting, followed by small-group sessions where people can ask questions. Individual moves will be discussed one-to-one, not by e-mail.\n\n" +
      "Timing. If the proposal is approved this month, the new squads could be in place by the start of the next quarter.",
    exercises: [
      { type: 'multiple_choice', prompt: 'How many squads will replace the six large teams?', options: ['Ten.', 'Six.', 'Four.', 'Twelve.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'A new management layer will be added.', answer: 'F', explanationPt: '"No new management layer will be added".' },
        { text: 'The two data teams will be merged.', answer: 'V', explanationPt: '"The two data teams will be merged".' },
        { text: 'Salaries will increase for everyone in the new squads.', answer: 'NM', explanationPt: 'O texto não fala de salários.' },
        { text: 'Individual moves will be communicated by e-mail.', answer: 'F', explanationPt: '"Individual moves will be discussed one-to-one, not by e-mail."' }
      ] },
      { type: 'multiple_choice', prompt: 'What does the engagement survey show?', options: ['Only 48 percent understand how their work connects to company goals.', 'Engagement is the highest in the company.', '48 percent want to leave.', 'Managers have too few direct reports.'], answer: 0 },
      { type: 'order_events', prompt: 'Coloque o plano de comunicação na ordem.', items: [
        'Affected managers are told individually.', 'The structure is presented at an all-hands meeting.', 'Small-group question sessions take place.', 'Individual moves are discussed one-to-one.'
      ] },
      { type: 'match', prompt: 'Ligue o termo à definição.', pairs: [
        ['span of control', 'number of people a manager leads'], ['layer', 'a level in the hierarchy'], ['squad', 'small team that owns part of the product'], ['all-hands meeting', 'meeting with the whole company or department'] ] }
    ]
  },
  listening: {
    genre: 'reunião',
    title: 'Discussing the proposal with the VP of Product',
    speakers: [{ id: 'P', name: 'Priya', gender: 'f' }, { id: 'M', name: 'Marina', gender: 'f' }, { id: 'T', name: 'Tom', gender: 'm' }],
    script: [
      { speaker: 'P', text: 'I like the squads, but who will make product decisions? I don\'t want ten mini-companies.' },
      { speaker: 'M', text: 'Good point. Each squad will have one product manager, and the roadmap will still be decided at your level.' },
      { speaker: 'T', text: 'My concern is the managers who lose half their team. They\'ll see it as a demotion.' },
      { speaker: 'M', text: 'That\'s the biggest risk, I agree. Their level and salary won\'t change, and I\'ll speak to each of them before anything is announced.' },
      { speaker: 'P', text: 'How long will the transition take?' },
      { speaker: 'M', text: 'About six weeks. The first squads could start in April.' },
      { speaker: 'T', text: 'And what if people refuse to move teams?' },
      { speaker: 'M', text: 'We\'ll ask for preferences first. Most moves can be voluntary; the rest will be discussed case by case.' },
      { speaker: 'P', text: 'OK. Let\'s take it to Daniel on Thursday.' }
    ],
    exercises: [
      { type: 'multiple_choice', prompt: 'What is Tom worried about?', options: ['Managers who lose half their team will feel demoted.', 'The roadmap will be decided by squads.', 'The transition will take a year.', 'There are not enough product managers.'], answer: 0 },
      { type: 'true_false_nm', prompt: 'True, false or not mentioned?', statements: [
        { text: 'The managers\' salaries will be reduced.', answer: 'F', explanationPt: '"Their level and salary won\'t change".' },
        { text: 'The transition will take about six weeks.', answer: 'V', explanationPt: '"About six weeks."' },
        { text: 'Every team move will be compulsory.', answer: 'F', explanationPt: '"Most moves can be voluntary".' },
        { text: 'Priya has worked with squads before.', answer: 'NM', explanationPt: 'Não se fala disso.' }
      ] },
      { type: 'listen_choose', audio: "I'll speak to each of them before anything is announced.", prompt: 'Ouça e escolha a frase que você ouviu.',
        options: ["I'll speak to each of them before anything is announced.", "I'll speak to each of them after anything is announced.", 'I spoke to each of them before anything was announced.', "I'll speak to all of them before it's announced."], answer: 0 },
      { type: 'dictation', text: 'Most moves can be voluntary.' }
    ]
  },
  grammar: {
    topicId: 'en-passive',
    title: 'Voz passiva para anunciar mudanças',
    explanationPt: 'Em propostas e anúncios, a **voz passiva** coloca o foco **na mudança**, não em quem decide, o que soa mais neutro e profissional:\n\n' +
      '- **will be + particípio**: *Two new teams **will be created**.*\n' +
      '- **is / are being + particípio** (acontecendo agora): *The structure **is being reviewed**.*\n' +
      '- **has / have been + particípio** (já feito): *The proposal **has been approved**.*\n' +
      '- **can / could / should be + particípio**: *Most moves **can be made** voluntarily.*\n\n' +
      'Use a ativa quando quiser mostrar responsabilidade: *I will speak to each manager.* Uma boa comunicação mistura as duas.',
    table: { head: ['Ativa', 'Passiva'], rows: [
      ['We will merge the two data teams.', 'The two data teams will be merged.'],
      ['We are reviewing the structure.', 'The structure is being reviewed.'],
      ['The CEO has approved the plan.', 'The plan has been approved (by the CEO).'],
      ['We should tell managers first.', 'Managers should be told first.']
    ] },
    examples: [
      { fr: 'Four senior engineers will be promoted to managers.', pt: 'Quatro engenheiros seniores serão promovidos a gestores.' },
      { fr: 'The new structure was announced last week.', pt: 'A nova estrutura foi anunciada na semana passada.' },
      { fr: 'Every affected manager will be told individually.', pt: 'Cada gestor afetado será informado individualmente.' },
      { fr: 'No decision has been made yet.', pt: 'Nenhuma decisão foi tomada ainda.' }
    ],
    ptComparison: 'A passiva inglesa equivale ao nosso "**será criado**", "**foi aprovado**", mas o inglês a usa **bem mais** em textos de empresa. Cuidado com o verbo **to be**, que não pode faltar: ~~The teams will merged~~ → **The teams will be merged**.\n\n' +
      '**"Tomar uma decisão"** = *make a decision* (não ~~take~~ no inglês americano; no britânico, *take* também aparece).'
  },
  grammarPractice: [
    { type: 'fill_blank', prompt: 'Passe para a voz passiva (com o tempo indicado).', items: [
      { text: 'The platform team ___ in two. (split — futuro)', answers: ['will be split'] },
      { text: 'The proposal ___ by the CEO yesterday. (approve — passado)', answers: ['was approved'] },
      { text: 'The structure ___ right now. (review — agora)', answers: ['is being reviewed'] },
      { text: 'No decision ___ yet. (make — present perfect)', answers: ['has been made'] }
    ] },
    { type: 'multiple_choice', prompt: '"Os gestores devem ser informados primeiro."', options: ['Managers should be told first.', 'Managers should told first.', 'Managers should be tell first.', 'Managers should being told first.'], answer: 0 },
    { type: 'match', prompt: 'Ligue o verbo ao particípio.', pairs: [['tell', 'told'], ['make', 'made'], ['split', 'split'], ['choose', 'chosen']] },
    { type: 'order_sentence', prompt: 'Monte a frase.', answer: 'The new structure will be presented at an all-hands meeting.', translation: 'A nova estrutura será apresentada numa reunião geral.' }
  ],
  tipForBrazilians: '**Reorganização é emoção.** Em inglês corporativo, evite palavras que soam como ameaça: diga *changes to the structure* em vez de *cuts*, *new role* em vez de *demotion*. Mas não esconda o que muda: transparência gera confiança.\n\n' +
    '**Ortografia:** em empresas europeias, o inglês britânico é comum: *organisation, programme, behaviour*. Escolha um padrão (britânico ou americano) e mantenha no documento todo.'
});
