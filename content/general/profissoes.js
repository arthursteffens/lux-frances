LUX.registerGeneral({
  id: 'profissoes', group: 'pessoas', title: 'Profissões', titleFr: 'Les métiers', level: 'A1',
  keywords: ['profissão', 'trabalho', 'emprego', 'médico', 'professor', 'engenheiro', 'métier', 'travail', 'profession', 'médecin', 'professeur', 'ingénieur'],
  blocks: [
    { type: 'intro', textPt: 'Para dizer a profissão, use ***être* + profissão, sem artigo**: *Je suis infirmière* (e não ~~je suis une infirmière~~). Muitas profissões têm feminino regular (*-ien → -ienne, -eur → -euse, -teur → -trice*); outras são iguais nos dois gêneros (*médecin, architecte, journaliste*).' },
    { type: 'table', sections: [
      { title: 'Saúde e educação', items: [
        { fr: 'médecin', pt: 'médico(a)' }, { fr: 'infirmier / infirmière', pt: 'enfermeiro(a)' }, { fr: 'dentiste', pt: 'dentista' },
        { fr: 'pharmacien / pharmacienne', pt: 'farmacêutico(a)' }, { fr: 'professeur / professeure', pt: 'professor(a)' }, { fr: 'instituteur / institutrice', pt: 'professor(a) do primário' }
      ] },
      { title: 'Escritório e tecnologia', items: [
        { fr: 'ingénieur / ingénieure', pt: 'engenheiro(a)' }, { fr: 'informaticien / informaticienne', pt: 'profissional de TI' }, { fr: 'développeur / développeuse', pt: 'desenvolvedor(a)' },
        { fr: 'comptable', pt: 'contador(a)' }, { fr: 'avocat / avocate', pt: 'advogado(a)' }, { fr: 'graphiste', pt: 'designer gráfico(a)' }, { fr: 'journaliste', pt: 'jornalista' }
      ] },
      { title: 'Comércio e serviços', items: [
        { fr: 'vendeur / vendeuse', pt: 'vendedor(a)' }, { fr: 'serveur / serveuse', pt: 'garçom / garçonete' }, { fr: 'cuisinier / cuisinière', pt: 'cozinheiro(a)' },
        { fr: 'boulanger / boulangère', pt: 'padeiro(a)' }, { fr: 'coiffeur / coiffeuse', pt: 'cabeleireiro(a)' }, { fr: 'chauffeur', pt: 'motorista' },
        { fr: 'policier / policière', pt: 'policial' }, { fr: 'agriculteur / agricultrice', pt: 'agricultor(a)' }
      ] },
      { title: 'Situação profissional', items: [
        { fr: 'étudiant / étudiante', pt: 'estudante (universitário)' }, { fr: 'retraité / retraitée', pt: 'aposentado(a)' }, { fr: 'au chômage', pt: 'desempregado(a)' },
        { fr: 'indépendant / indépendante', pt: 'autônomo(a)' }, { fr: 'stagiaire', pt: 'estagiário(a)' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Sem artigo', textPt: 'Com *être*: sem artigo. Com *c\'est*: com artigo. *Il est médecin.* × *C\'est un médecin excellent.*',
        examples: [{ fr: 'Il est avocat.', pt: 'Ele é advogado.' }, { fr: "C'est une avocate célèbre.", pt: 'É uma advogada famosa.' }] },
      { title: 'Travailler dans / chez / comme', textPt: '*travailler dans* + setor ou lugar (*dans une banque*), *chez* + empresa ou pessoa (*chez Renault*), *comme* + função (*comme serveur*).',
        examples: [{ fr: 'Je travaille dans une agence de design.', pt: 'Trabalho numa agência de design.' }, { fr: 'Il travaille comme serveur le week-end.', pt: 'Ele trabalha como garçom no fim de semana.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Tu fais quoi dans la vie ?', pt: 'O que você faz da vida?' }, { fr: 'Quelle est votre profession ?', pt: 'Qual é a sua profissão?' },
      { fr: 'Je cherche du travail.', pt: 'Estou procurando emprego.' }, { fr: "J'ai un entretien d'embauche demain.", pt: 'Tenho uma entrevista de emprego amanhã.' }
    ] },
    { type: 'tip', textPt: '**Feminino das profissões:** desde os anos 2000, o francês aceita cada vez mais as formas femininas: *une professeure, une ingénieure, une autrice, une cheffe*. Você ainda ouvirá *Madame le professeur* em contextos tradicionais.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Ela é enfermeira."', options: ['Elle est infirmière.', 'Elle est une infirmière.', "C'est infirmière.", 'Elle est un infirmier.'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Feminino de "serveur":', options: ['serveuse', 'serveure', 'servrice', 'servette'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/cest-ilest', label: "Gramática: c'est ou il est?" }, { to: '#/gerais/familia', label: 'Família' }] }
  ]
});
