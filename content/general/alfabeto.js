LUX.registerGeneral({
  id: 'alfabeto', group: 'comunicacao', title: 'Alfabeto e soletração', titleFr: "L'alphabet", level: 'A1',
  keywords: ['alfabeto', 'letras', 'soletrar', 'épeler', 'acento', 'arroba', 'e-mail', 'arobase'],
  blocks: [
    { type: 'intro', textPt: 'Saber soletrar é essencial: na França, pedem para você soletrar o nome e o e-mail o tempo todo (*Vous pouvez épeler ?*). Atenção às letras que confundem brasileiros: **E, I, G, J, R, U**.' },
    { type: 'tool', tool: 'spell' },
    { type: 'table', sections: [
      { title: 'As 26 letras', letters: true, items: [
        { fr: 'A', pt: '"a"' }, { fr: 'B', pt: '"bê"' }, { fr: 'C', pt: '"cê"' }, { fr: 'D', pt: '"dê"' },
        { fr: 'E', pt: '"ê" fechado, quase "ö"', note: '⚠ não é "é"!' }, { fr: 'F', pt: '"éf"' },
        { fr: 'G', pt: '"jê"', note: '⚠ soa como o nosso "J"' }, { fr: 'H', pt: '"ach"' },
        { fr: 'I', pt: '"i"', note: '⚠ igual ao nosso i' }, { fr: 'J', pt: '"ji"', note: '⚠ soa como o nosso "G"' },
        { fr: 'K', pt: '"ká"' }, { fr: 'L', pt: '"él"' }, { fr: 'M', pt: '"ém"' }, { fr: 'N', pt: '"én"' }, { fr: 'O', pt: '"ô"' },
        { fr: 'P', pt: '"pê"' }, { fr: 'Q', pt: '"kü"' }, { fr: 'R', pt: '"ér" (r do fundo da garganta)' }, { fr: 'S', pt: '"és"' },
        { fr: 'T', pt: '"tê"' }, { fr: 'U', pt: '"ü" (biquinho + i)', note: '⚠ não é "u"' }, { fr: 'V', pt: '"vê"' },
        { fr: 'W', pt: '"dublê-vê"' }, { fr: 'X', pt: '"iks"' }, { fr: 'Y', pt: '"i grec"' }, { fr: 'Z', pt: '"zéd"' }
      ] },
      { title: 'Acentos e sinais', items: [
        { fr: 'accent aigu', pt: 'acento agudo: é', note: 'só no e' }, { fr: 'accent grave', pt: 'acento grave: è, à, ù' },
        { fr: 'accent circonflexe', pt: 'circunflexo: â, ê, î, ô, û' }, { fr: 'tréma', pt: 'trema: ë, ï' }, { fr: 'cédille', pt: 'cedilha: ç' },
        { fr: 'majuscule', pt: 'maiúscula' }, { fr: 'minuscule', pt: 'minúscula' }, { fr: 'deux L', pt: 'dois L (letra dobrada)' },
        { fr: 'apostrophe', pt: 'apóstrofo' }, { fr: "trait d'union", pt: 'hífen' }
      ] },
      { title: 'Para e-mails e sites', items: [
        { fr: 'arobase', pt: '@ (arroba)' }, { fr: 'point', pt: '. (ponto)' }, { fr: 'tiret', pt: '- (hífen)' },
        { fr: 'tiret bas', pt: '_ (sublinhado)', note: 'também "underscore"' }, { fr: 'barre oblique', pt: '/ (barra)', note: 'também "slash"' },
        { fr: 'tout attaché', pt: 'tudo junto' }, { fr: 'en minuscules', pt: 'em minúsculas' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'E, I, U: a grande confusão', textPt: 'O **E** francês soa como um "ê" com a boca arredondada (/ə/); o **I** soa "i"; o **U** é um "i" com biquinho (/y/). Ao soletrar "Lucas" → *L, U, C, A, S* (él, ü, cê, a, és).',
        examples: [{ fr: 'E', pt: 'letra E' }, { fr: 'I', pt: 'letra I' }, { fr: 'U', pt: 'letra U' }] },
      { title: 'G e J trocados', textPt: 'Em francês o **G** soa "jê" e o **J** soa "ji" — o contrário do que o brasileiro espera.',
        examples: [{ fr: 'G', pt: 'letra G' }, { fr: 'J', pt: 'letra J' }] },
      { title: 'Letras dobradas e acentos', textPt: 'Para letras repetidas: *deux L, deux S*. Para acentos: *E accent aigu* (é), *E accent grave* (è), *C cédille* (ç).',
        examples: [{ fr: 'deux S', pt: 'ss' }, { fr: 'E accent aigu', pt: 'é' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Vous pouvez épeler, s\'il vous plaît ?', pt: 'Pode soletrar, por favor?' },
      { fr: 'Ça s\'écrit comment ?', pt: 'Como se escreve?' },
      { fr: 'Mon adresse e-mail, c\'est lucas point ferreira arobase mail point com.', pt: 'Meu e-mail é lucas.ferreira@mail.com.' },
      { fr: 'Avec deux L.', pt: 'Com dois L.' },
      { fr: 'Tout en minuscules.', pt: 'Tudo em minúsculas.' }
    ] },
    { type: 'tip', textPt: '**Truque para o U:** diga "i" e, sem mexer a língua, faça biquinho como para assobiar. Esse é o som de *tu, rue, vu*. Ele diferencia palavras: *tu* (você) × *tout* (tudo), *rue* (rua) × *roue* (roda).' },
    { type: 'quiz', items: [
      { type: 'listen_choose', audio: 'G', prompt: 'Ouça e escolha a letra.', options: ['G', 'J', 'E', 'I'], answer: 0 },
      { type: 'listen_choose', audio: 'U', prompt: 'Ouça e escolha a letra.', options: ['U', 'O', 'I', 'E'], answer: 0 },
      { type: 'multiple_choice', prompt: '"@" em francês:', options: ['arobase', 'arroba', 'à', 'at'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gramatica/questions', label: 'Gramática: fazer perguntas' }] }
  ]
});
