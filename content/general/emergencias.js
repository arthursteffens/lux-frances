LUX.registerGeneral({
  id: 'emergencias', group: 'situacoes', title: 'Emergências', titleFr: 'Les urgences', level: 'A2',
  keywords: ['emergência', 'socorro', 'ajuda', 'polícia', 'ambulância', 'bombeiros', 'roubo', 'acidente', 'urgence', 'au secours', 'police', 'pompiers', 'SAMU', '112'],
  blocks: [
    { type: 'intro', textPt: 'Guarde estes números:\n- **112** (emergência europeia, de qualquer celular, atende em várias línguas)\n- **15** (SAMU — ambulância)\n- **17** (polícia)\n- **18** (bombeiros)\n\nPara surdos ou quem não pode falar, existe o **114** por SMS.' },
    { type: 'table', sections: [
      { title: 'Números de emergência', items: [
        { fr: 'le cent douze', pt: '112 — emergência europeia (qualquer situação)', tts: 'cent douze' }, { fr: 'le quinze', pt: '15 — SAMU (urgência médica)', tts: 'quinze' },
        { fr: 'le dix-sept', pt: '17 — polícia', tts: 'dix-sept' }, { fr: 'le dix-huit', pt: '18 — bombeiros (também socorrem feridos)', tts: 'dix-huit' },
        { fr: 'le cent quatorze', pt: '114 — emergência por SMS', tts: 'cent quatorze' }
      ] },
      { title: 'Frases urgentes', items: [
        { fr: 'Au secours !', pt: 'Socorro!' }, { fr: "À l'aide !", pt: 'Ajuda!' }, { fr: 'Au feu !', pt: 'Fogo!' }, { fr: 'Au voleur !', pt: 'Pega ladrão!' },
        { fr: 'Appelez une ambulance !', pt: 'Chamem uma ambulância!' }, { fr: 'Appelez la police !', pt: 'Chamem a polícia!' }, { fr: "C'est une urgence.", pt: 'É uma emergência.' },
        { fr: "Il y a un blessé.", pt: 'Tem um ferido.' }, { fr: "Il ne respire pas.", pt: 'Ele não está respirando.' }
      ] },
      { title: 'Perdas e roubos', items: [
        { fr: "On m'a volé mon portefeuille.", pt: 'Roubaram minha carteira.' }, { fr: "J'ai perdu mon passeport.", pt: 'Perdi meu passaporte.' },
        { fr: 'le commissariat', pt: 'a delegacia' }, { fr: 'porter plainte', pt: 'prestar queixa' }, { fr: "l'ambassade du Brésil", pt: 'a embaixada do Brasil' }, { fr: 'le consulat', pt: 'o consulado' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Ao telefone', textPt: 'Diga **o quê**, **onde** e **quantas pessoas**. Fale devagar e dê o endereço completo: número, rua, cidade, andar, código do portão.',
        examples: [{ fr: "Il y a eu un accident, rue de la République, à Lyon.", pt: 'Houve um acidente na rua da República, em Lyon.' }, { fr: "Je suis au troisième étage, le code est 1234.", pt: 'Estou no terceiro andar, o código é 1234.' }] },
      { title: 'Se não entender', textPt: 'Diga logo: *Je suis brésilien(ne), je parle un peu français. Vous parlez anglais / portugais ?* O 112 tem intérpretes.',
        examples: [{ fr: 'Parlez lentement, s\'il vous plaît.', pt: 'Fale devagar, por favor.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: "J'ai besoin d'un médecin.", pt: 'Preciso de um médico.' }, { fr: "Où est l'hôpital le plus proche ?", pt: 'Onde fica o hospital mais próximo?' },
      { fr: 'Je me suis perdu(e).', pt: 'Eu me perdi.' }, { fr: 'Ne bougez pas !', pt: 'Não se mexa!' }
    ] },
    { type: 'tip', textPt: '**Antes de viajar:** anote o telefone do **Consulado do Brasil** mais próximo (há consulados em Paris e Lyon, por exemplo), tire foto do passaporte e guarde o número do seu seguro-viagem. Farmácias de plantão: procure *pharmacie de garde*.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: 'Número da emergência europeia:', options: ['112', '190', '911', '193'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Socorro!"', options: ['Au secours !', 'Aidez !', 'Secourez !', 'Urgence moi !'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Roubaram meu celular."', options: ["On m'a volé mon téléphone.", "J'ai volé mon téléphone.", "Mon téléphone a volé.", "On a volé à moi le téléphone."], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/saude', label: 'Corpo e saúde' }, { to: '#/gerais/telefone-email', label: 'Ao telefone' }, { to: '#/gerais/alfabeto', label: 'Soletrar o nome' }] }
  ]
});
