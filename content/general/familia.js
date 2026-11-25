LUX.registerGeneral({
  id: 'familia', group: 'pessoas', title: 'Família', titleFr: 'La famille', level: 'A1',
  keywords: ['família', 'pai', 'mãe', 'irmão', 'irmã', 'avô', 'avó', 'tio', 'primo', 'casado', 'solteiro', 'famille', 'père', 'mère', 'frère', 'sœur', 'marié', 'célibataire'],
  blocks: [
    { type: 'intro', textPt: 'Os nomes dos parentes em francês são bem regulares. Atenção a *les parents*: significa **os pais** (pai e mãe), e também **os parentes** em geral. "Parentes" no sentido amplo também pode ser *la famille*.' },
    { type: 'table', sections: [
      { title: 'Família próxima', items: [
        { fr: 'le père / la mère', pt: 'o pai / a mãe' }, { fr: 'les parents', pt: 'os pais' }, { fr: 'le frère / la sœur', pt: 'o irmão / a irmã' },
        { fr: 'le fils / la fille', pt: 'o filho / a filha' }, { fr: 'les enfants', pt: 'os filhos, as crianças' }, { fr: 'le mari / la femme', pt: 'o marido / a mulher (esposa)' },
        { fr: 'le copain / la copine', pt: 'o namorado / a namorada; amigo(a)' }
      ] },
      { title: 'Família ampliada', items: [
        { fr: 'le grand-père / la grand-mère', pt: 'o avô / a avó' }, { fr: 'les grands-parents', pt: 'os avós' }, { fr: 'le petit-fils / la petite-fille', pt: 'o neto / a neta' },
        { fr: "l'oncle / la tante", pt: 'o tio / a tia' }, { fr: 'le cousin / la cousine', pt: 'o primo / a prima' }, { fr: 'le neveu / la nièce', pt: 'o sobrinho / a sobrinha' },
        { fr: 'le beau-père / la belle-mère', pt: 'o sogro / a sogra; padrasto / madrasta' }, { fr: 'le beau-frère / la belle-sœur', pt: 'o cunhado / a cunhada' }
      ] },
      { title: 'Estado civil', items: [
        { fr: 'célibataire', pt: 'solteiro(a)' }, { fr: 'marié(e)', pt: 'casado(a)' }, { fr: 'pacsé(e)', pt: 'em união civil (PACS)' },
        { fr: 'divorcé(e)', pt: 'divorciado(a)' }, { fr: 'veuf / veuve', pt: 'viúvo / viúva' }, { fr: 'en couple', pt: 'num relacionamento' }
      ] },
      { title: 'Apelidos carinhosos', items: [
        { fr: 'papa / maman', pt: 'papai / mamãe' }, { fr: 'papi / mamie', pt: 'vovô / vovó' }, { fr: 'tonton / tata', pt: 'titio / titia' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Femme e fille', textPt: '*la femme* = a mulher **ou** a esposa (*ma femme* = minha esposa). *la fille* = a filha **ou** a menina (*ma fille* = minha filha).',
        examples: [{ fr: 'Je vous présente ma femme.', pt: 'Apresento-lhe minha esposa.' }, { fr: 'Ma fille a six ans.', pt: 'Minha filha tem seis anos.' }] },
      { title: 'Beau- / belle-', textPt: 'O prefixo *beau-/belle-* forma os parentes por casamento: *beau-père* (sogro ou padrasto), *belle-fille* (nora ou enteada).',
        examples: [{ fr: 'Ma belle-mère est brésilienne.', pt: 'Minha sogra é brasileira.' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Tu as des frères et sœurs ?', pt: 'Você tem irmãos?' }, { fr: "Je suis fils unique.", pt: 'Sou filho único.' },
      { fr: "J'ai deux enfants : un garçon et une fille.", pt: 'Tenho dois filhos: um menino e uma menina.' }, { fr: 'Nous sommes une famille nombreuse.', pt: 'Somos uma família grande.' }
    ] },
    { type: 'tip', textPt: '**"Irmãos" em francês:** não existe uma palavra para "irmãos" (mistos). Diga *frères et sœurs*: *J\'ai trois frères et sœurs.* E *mes frères* = só irmãos homens.' },
    { type: 'quiz', items: [
      { type: 'multiple_choice', prompt: '"Meus avós"', options: ['mes grands-parents', 'mes vieux parents', 'mes parents grands', 'mes avôs'], answer: 0 },
      { type: 'multiple_choice', prompt: '"Você tem irmãos?" (mistos)', options: ['Tu as des frères et sœurs ?', 'Tu as des frères ?', 'Tu as des irmãos ?', 'Tu as des germains ?'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/possessives', label: 'Gramática: possessivos' }, { to: '#/gerais/profissoes', label: 'Profissões' }] }
  ]
});
