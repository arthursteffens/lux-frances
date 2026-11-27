LUX.registerGeneral({
  id: 'alfabeto', group: 'comunicacao', title: 'Alfabeto, letras e pronúncia', titleFr: "L'alphabet et la prononciation", level: 'A1',
  keywords: ['alfabeto', 'letras', 'pronúncia', 'pronuncia', 'som', 'sons', 'soletrar', 'épeler', 'acento', 'nasal', 'liaison', 'letra muda', 'arroba', 'e-mail', 'arobase', 'prononciation'],
  blocks: [
    { type: 'intro', textPt: 'O francês tem as **mesmas 26 letras** do português, mas **o nome de algumas letras e o som delas nas palavras mudam bastante**. Esta página tem três partes:\n\n1. **O nome de cada letra**, para soletrar nome, e-mail ou endereço (*Vous pouvez épeler ?*).\n2. **Como cada letra e combinação soa dentro das palavras**: vogais, sons nasais, consoantes especiais e letras mudas.\n3. **Acentos, ligação entre palavras (liaison) e apóstrofo.**\n\nToque em ▶ para ouvir. Se a voz soletrar estranho, confira a voz francesa escolhida em **Perfil e configurações**.' },
    { type: 'tool', tool: 'spell' },

    /* ---------- 1. as letras ---------- */
    { type: 'table', sections: [
      { title: '1. As 26 letras — o nome e o som nas palavras', letters: true, wide: true, note: 'O ▶ de cada linha toca o nome da letra; os exemplos de palavras com áudio estão nas seções seguintes.', items: [
        { fr: 'A', pt: 'nome "a". Soa "a" aberto: papa, ami.' },
        { fr: 'B', pt: 'nome "bê". Como em português: bonjour.' },
        { fr: 'C', pt: 'nome "cê". "k" antes de a, o, u (café, comme, cuisine); "s" antes de e, i, y (cinéma, ici). Com cedilha, ç, sempre "s": ça, garçon.' },
        { fr: 'D', pt: 'nome "dê". Sempre "d", nunca "dj": dîner soa "dinê", não "djinê". No fim da palavra, mudo: grand, chaud.', note: '⚠ di ≠ "dji"' },
        { fr: 'E', pt: 'nome "ê" fechado, com a boca arredondada (quase "ö"). Sem acento, costuma ser fraco ou mudo: petit ("ptí"), table ("tábl"). É, è, ê: ver acentos.', note: '⚠ não é "é"' },
        { fr: 'F', pt: 'nome "éf". Como em português; no fim, pronuncia-se: neuf, chef.' },
        { fr: 'G', pt: 'nome "jê". "g" antes de a, o, u (gare, gomme); "j" antes de e, i, y (rouge, girafe). Gu = "g" (guitare); gn = "nh" (montagne).', note: '⚠ soa como o nosso J' },
        { fr: 'H', pt: 'nome "ach". **Nunca se pronuncia**: hôtel = "otél", homme = "óm".' },
        { fr: 'I', pt: 'nome "i". Soa "i": ici, midi. Antes de vogal, fica "i" curto: piano, bien.', note: '⚠ igual ao nosso i' },
        { fr: 'J', pt: 'nome "ji". Sempre como o "j" de "janela": je, jour, déjeuner.', note: '⚠ soa como o nosso G em "gente"' },
        { fr: 'K', pt: 'nome "ká". Só em palavras estrangeiras: kilo, week-end.' },
        { fr: 'L', pt: 'nome "él". Sempre "l" de verdade, mesmo no fim: Brésil soa "brezíl", nunca "breziu". Ill costuma soar "i" (fille, famille).', note: '⚠ o L final não vira "u"' },
        { fr: 'M', pt: 'nome "ém". Como em português; depois de vogal, pode formar som nasal: nom, temps.' },
        { fr: 'N', pt: 'nome "én". Como em português; depois de vogal, forma som nasal: bon, vin, enfant.' },
        { fr: 'O', pt: 'nome "ô". "ô" fechado (mot, rose) ou "ó" aberto (porte, homme).' },
        { fr: 'P', pt: 'nome "pê". Como em português; no fim, mudo: trop, beaucoup. Ph = "f": photo.' },
        { fr: 'Q', pt: 'nome "kü". Quase sempre qu = "k" (o u não soa): qui, quatre, question.' },
        { fr: 'R', pt: 'nome "ér". O R francês é feito no fundo da garganta, parecido com o "rr" de "carro" no Rio, porém mais suave e sempre igual, até entre vogais: Paris, rouge, arriver.', note: '⚠ nunca o "r" de "caro"' },
        { fr: 'S', pt: 'nome "és". "s" no começo (salut) e com ss (poisson); "z" entre vogais (rose, maison); mudo no fim (vous, les).' },
        { fr: 'T', pt: 'nome "tê". Sempre "t", nunca "tch": petit soa "pëtí", não "petchí". Mudo no fim: petit, chat. Tion = "ssiõ": nation.', note: '⚠ ti ≠ "tchi"' },
        { fr: 'U', pt: 'nome "ü": diga "i" fazendo biquinho. Esse é o som de tu, rue, vu. O nosso "u" se escreve ou: tout, rouge.', note: '⚠ não é "u"' },
        { fr: 'V', pt: 'nome "vê". Como em português: voiture, vous.' },
        { fr: 'W', pt: 'nome "dublê-vê". "u" em palavras inglesas (week-end, wifi), "v" em algumas palavras alemãs (wagon).' },
        { fr: 'X', pt: 'nome "iks". "ks" (taxi), "gz" (examen), "s" em six e dix, "z" em deuxième; mudo no fim (prix, deux).' },
        { fr: 'Y', pt: 'nome "i grec" (i grego). Soa "i": stylo; entre vogais, "i" + "i": voyage soa "voaiáj".' },
        { fr: 'Z', pt: 'nome "zéd". Soa "z": zéro, onze. No fim de verbos (-ez), mudo: parlez soa "parlê".' }
      ] }
    ] },

    /* ---------- 2. vogais e combinações ---------- */
    { type: 'rules', items: [
      { title: '2. Vogais com acento: é, è, ê', textPt: '- **é** = "ê" fechado: *café*, *été*.\n- **è, ê** = "é" aberto: *père*, *fête*.\n- **e** sem acento = som fraco, que às vezes nem soa: *samedi* soa "samdí".\n- **-er, -ez, -et** no fim da palavra = "ê": *parler*, *chez*, *et*.',
        examples: [{ fr: 'café', pt: 'é fechado' }, { fr: 'père', pt: 'è aberto' }, { fr: 'fête', pt: 'ê aberto' }, { fr: 'parler', pt: '-er soa "ê"' }] },
      { title: 'U × OU: o par mais importante', textPt: '- **u** = "i" com biquinho (/y/): *tu*, *rue*.\n- **ou** = o nosso "u": *tout*, *roue*.\n\nTrocar um pelo outro muda o sentido:\n- *tu* (você) × *tout* (tudo)\n- *rue* (rua) × *roue* (roda)\n- *dessus* (em cima) × *dessous* (embaixo)',
        examples: [{ fr: 'tu', pt: 'você' }, { fr: 'tout', pt: 'tudo' }, { fr: 'rue', pt: 'rua' }, { fr: 'roue', pt: 'roda' }] },
      { title: 'Duas ou três letras, um som só', textPt: '- **ai, ei** = "é": *maison*, *neige*.\n- **au, eau** = "ô": *chaud*, *beau*.\n- **oi** = "uá": *moi*, *trois*.\n- **eu, œu** = "ö", som entre "ê" e "ô" com biquinho: *deux*, *sœur*.\n- **ui** = "üi" rápido: *huit*, *nuit*.\n- **ill** = "i": *fille*.\n- **ail, eil** = "ái", "éi": *travail*, *soleil*.',
        examples: [{ fr: 'maison', pt: 'ai = é' }, { fr: 'beau', pt: 'eau = ô' }, { fr: 'trois', pt: 'oi = uá' }, { fr: 'deux', pt: 'eu = ö' }, { fr: 'nuit', pt: 'ui = üi' }, { fr: 'travail', pt: 'ail = ái' }] }
    ] },

    /* ---------- sons nasais ---------- */
    { type: 'rules', items: [
      { title: 'Os sons nasais (o "ão" francês)', textPt: 'Vogal + **n** ou **m** no fim da sílaba vira som nasal, e **o n/m não se pronuncia**:\n\n- **an, am, en, em** = "ã" aberto, perto de "ã" em "lã": *enfant*, *temps*, *chambre*.\n- **in, im, ain, ein, un** = "ẽ" aberto, quase "én" sem fechar o n: *vin*, *pain*, *plein*, *lundi*.\n- **on, om** = "õ": *bon*, *nom*, *maison*.\n- **ien** = "iẽ": *bien*, *chien*.\n\n**Não fica nasal** quando vem vogal depois ou o n/m é dobrado: *bon* (nasal) × *bonne* ("bón"); *an* (nasal) × *année* ("anê").',
        examples: [{ fr: 'enfant', pt: 'an/en = ã' }, { fr: 'vin', pt: 'in = ẽ' }, { fr: 'bon', pt: 'on = õ' }, { fr: 'bonne', pt: 'sem nasal' }, { fr: 'bien', pt: 'ien = iẽ' }] },
      { title: 'Vent, vin, vont: três palavras diferentes', textPt: 'Os três sons nasais mudam o sentido: *vent* (vento), *vin* (vinho), *vont* (vão). Ouça várias vezes e repita.',
        examples: [{ fr: 'vent', pt: 'vento' }, { fr: 'vin', pt: 'vinho' }, { fr: 'vont', pt: 'eles vão' }] }
    ] },

    /* ---------- consoantes especiais ---------- */
    { type: 'table', sections: [
      { title: 'Consoantes e combinações que mudam de som', items: [
        { fr: 'chat', pt: 'ch = "x" de xícara (nunca "tch")' }, { fr: 'montagne', pt: 'gn = "nh" de montanha' },
        { fr: 'photo', pt: 'ph = "f"' }, { fr: 'théâtre', pt: 'th = "t"' },
        { fr: 'qui', pt: 'qu = "k" (o u não soa)' }, { fr: 'garçon', pt: 'ç = "s" antes de a, o, u' },
        { fr: 'rouge', pt: 'ge = "j"' }, { fr: 'guitare', pt: 'gu = "g" duro antes de e, i' },
        { fr: 'maison', pt: 's entre vogais = "z"' }, { fr: 'poisson', pt: 'ss = "s"' },
        { fr: 'nation', pt: 'tion = "ssiõ"' }, { fr: 'fille', pt: 'ill = "i"' }
      ] },
      { title: 'Pares que confundem', items: [
        { fr: 'poisson', pt: 'peixe (ss = "s")' }, { fr: 'poison', pt: 'veneno (s = "z")' },
        { fr: 'dessert', pt: 'sobremesa (ss = "s")' }, { fr: 'désert', pt: 'deserto (s = "z")' },
        { fr: 'deux', pt: 'dois (eu fechado)' }, { fr: 'douze', pt: 'doze (ou + z)' }
      ] }
    ] },

    /* ---------- letras finais mudas, liaison e elisão ---------- */
    { type: 'rules', items: [
      { title: '3. Letras finais mudas', textPt: 'Em geral, **a consoante final não se pronuncia**: *petit*, *grand*, *trop*, *deux*, *vous*. O **e final** também fica mudo, mas faz soar a consoante antes dele: *petit* ("ptí") × *petite* ("ptít").\n\n**Exceções úteis:** as consoantes de **C, R, F, L** (lembre de *CaReFuL*) costumam soar no fim: *avec*, *bonjour*, *neuf*, *sel*. (Mas **-er** nos verbos soa "ê": *parler*.)\n\nNos verbos, **-ent** de *ils/elles* é mudo: *ils parlent* soa igual a *il parle*.',
        examples: [{ fr: 'petit', pt: 't mudo' }, { fr: 'petite', pt: 't soa' }, { fr: 'avec', pt: 'c soa' }, { fr: 'ils parlent', pt: '-ent mudo' }] },
      { title: 'Liaison: a ligação entre palavras', textPt: 'Quando a palavra seguinte começa com vogal (ou h mudo), a consoante final "acorda" e se liga a ela:\n- ***les amis*** = "lezamí"\n- ***vous avez*** = "vuzavê"\n- ***un enfant*** = "ãnãfã"\n\nO **s** e o **x** ligam com som de **"z"**. A ligação é obrigatória depois de artigos e pronomes (*les, des, vous, nous, ils, un*) e proibida depois de *et* (e).',
        examples: [{ fr: 'les amis', pt: 's liga com som de "z"' }, { fr: 'vous avez', pt: 'vuzavê' }, { fr: 'un enfant', pt: 'ãnãfã' }, { fr: 'deux heures', pt: 'x liga com "z"' }] },
      { title: 'Elisão: o apóstrofo', textPt: 'Antes de vogal ou h mudo, **le, la, je, me, te, se, de, ne, que** perdem a vogal e ganham apóstrofo: *l\'ami*, *j\'aime*, *d\'accord*, *c\'est*, *qu\'il*. Na fala, tudo vira uma palavra só: *l\'hôtel* = "lotél".',
        examples: [{ fr: "l'ami", pt: 'le + ami' }, { fr: "j'aime", pt: 'je + aime' }, { fr: "c'est", pt: 'ce + est' }, { fr: "l'hôtel", pt: 'h mudo' }] }
    ] },

    /* ---------- acentos e sinais ---------- */
    { type: 'table', sections: [
      { title: 'Acentos e sinais', items: [
        { fr: 'accent aigu', pt: 'acento agudo: é ("ê" fechado)', note: 'só no e' }, { fr: 'accent grave', pt: 'acento grave: è ("é" aberto), à, ù', note: 'em à e ù, só diferencia palavras: a × à, ou × où' },
        { fr: 'accent circonflexe', pt: 'circunflexo: â, ê, î, ô, û', note: 'muitas vezes marca um s que sumiu: forêt (floresta), hôpital (hospital), fête (festa)' },
        { fr: 'tréma', pt: 'trema: ë, ï (a vogal soa separada)', note: 'Noël = "no-él", naïf = "na-íf"' }, { fr: 'cédille', pt: 'cedilha: ç = "s"', note: 'só antes de a, o, u' },
        { fr: 'majuscule', pt: 'maiúscula' }, { fr: 'minuscule', pt: 'minúscula' }, { fr: 'deux L', pt: 'dois L (letra dobrada)' },
        { fr: 'apostrophe', pt: 'apóstrofo' }, { fr: "trait d'union", pt: 'hífen' }
      ] },
      { title: 'Para soletrar e-mails e sites', items: [
        { fr: 'arobase', pt: '@ (arroba)' }, { fr: 'point', pt: '. (ponto)' }, { fr: 'tiret', pt: '- (hífen)' },
        { fr: 'tiret bas', pt: '_ (sublinhado)', note: 'também "underscore"' }, { fr: 'barre oblique', pt: '/ (barra)', note: 'também "slash"' },
        { fr: 'tout attaché', pt: 'tudo junto' }, { fr: 'en minuscules', pt: 'em minúsculas' }
      ] }
    ] },
    { type: 'rules', items: [
      { title: 'Soletrar sem errar: E, I, U, G, J', textPt: 'Ao soletrar, os brasileiros costumam trocar:\n- **E** ("ê" arredondado) por "é"\n- **I** ("i") por "e"\n- **U** ("ü") por "u"\n- **G** ("jê") com **J** ("ji")\n\n*Lucas* se soletra *L, U, C, A, S* (él, ü, cê, a, és); *Gilles* se soletra *G, I, deux L, E, S*.',
        examples: [{ fr: 'E', pt: 'letra E' }, { fr: 'I', pt: 'letra I' }, { fr: 'U', pt: 'letra U' }, { fr: 'G', pt: 'letra G' }, { fr: 'J', pt: 'letra J' }] },
      { title: 'Letras dobradas e acentos ao soletrar', textPt: 'Diga *deux L*, *deux S* para letras repetidas e o nome do acento depois da letra: *E accent aigu* (é), *E accent grave* (è), *C cédille* (ç).',
        examples: [{ fr: 'deux S', pt: 'ss' }, { fr: 'E accent aigu', pt: 'é' }, { fr: 'C cédille', pt: 'ç' }] }
    ] },
    { type: 'phrases', items: [
      { fr: 'Vous pouvez épeler, s\'il vous plaît ?', pt: 'Pode soletrar, por favor?' },
      { fr: 'Ça s\'écrit comment ?', pt: 'Como se escreve?' },
      { fr: 'Ça se prononce comment ?', pt: 'Como se pronuncia?' },
      { fr: 'Mon adresse e-mail, c\'est lucas point ferreira arobase mail point com.', pt: 'Meu e-mail é lucas.ferreira@mail.com.' },
      { fr: 'Avec deux L.', pt: 'Com dois L.' },
      { fr: 'Tout en minuscules.', pt: 'Tudo em minúsculas.' }
    ] },
    { type: 'tip', textPt: '**Cinco hábitos de brasileiro para corrigir primeiro:**\n- **"tch" e "dj":** em francês, *petit* e *dîner* têm t e d "secos", nunca "petchí" e "djinê".\n- **L final:** *Brésil*, *hôtel* e *sel* terminam com L de verdade, não com "u".\n- **U × OU:** *tu* (biquinho) × *tout* (nosso "u").\n- **Vogal no fim:** não acrescente "i" nem "e" depois de consoante: *chef* soa "xéf", não "xéfi".\n- **Letras mudas:** não pronuncie o s de *vous* nem o t de *petit* — só na liaison.' },
    { type: 'quiz', items: [
      { type: 'listen_choose', audio: 'G', prompt: 'Ouça e escolha a letra.', options: ['G', 'J', 'E', 'I'], answer: 0 },
      { type: 'listen_choose', audio: 'U', prompt: 'Ouça e escolha a letra.', options: ['U', 'O', 'I', 'E'], answer: 0 },
      { type: 'listen_choose', audio: 'tout', prompt: 'Ouça e escolha a palavra.', options: ['tout', 'tu', 'toi', 'tôt'], answer: 0 },
      { type: 'listen_choose', audio: 'vin', prompt: 'Ouça e escolha a palavra.', options: ['vin', 'vent', 'vont', 'vingt-deux'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Em "montagne", o gn soa como…', options: ['"nh" de montanha', '"gn" de "ignorar"', '"n" simples', '"g" duro'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Em "les amis", o s de "les"…', options: ['liga com som de "z"', 'fica mudo', 'soa "s"', 'soa "ch"'], answer: 0 },
      { type: 'multiple_choice', prompt: 'Qual destas palavras NÃO tem som nasal?', options: ['bonne', 'bon', 'vin', 'enfant'], answer: 0 },
      { type: 'multiple_choice', prompt: '"@" em francês:', options: ['arobase', 'arroba', 'à', 'at'], answer: 0 }
    ] },
    { type: 'links', items: [{ to: '#/gerais/saudacoes', label: 'Saudações' }, { to: '#/gerais/numeros-cardinais', label: 'Números (pronúncia de six, dix, huit)' }, { to: '#/gramatica/questions', label: 'Gramática: fazer perguntas' }] }
  ]
});
