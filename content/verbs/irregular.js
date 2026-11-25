/* Tabelas dos verbos irregulares — só as formas-chave.
   present: 6 formas | futurStem: radical do futuro/condicional | ps: 1ª pessoa do passé simple
   subj: subjuntivo (se não segue a regra ils/nous) | imperatif: 3 formas (null = não existe)
   imparfaitStem: se não vier do "nous" do presente | pp, ppr | aux | ppForms: [ms, fs, mp, fp]
   Verbos derivados (devenir, comprendre, paraître...) usam "like" no dicionário. */
(function () {
  var R = LUX.registerIrregular;

  R('être', { present: 'suis es est sommes êtes sont', imparfaitStem: 'ét', futurStem: 'ser', ps: 'fus',
    subj: 'sois sois soit soyons soyez soient', imperatif: 'sois soyons soyez', pp: 'été', ppr: 'étant', aux: 'avoir' });
  R('avoir', { present: 'ai as a avons avez ont', futurStem: 'aur', ps: 'eus',
    subj: 'aie aies ait ayons ayez aient', imperatif: 'aie ayons ayez', pp: 'eu', ppr: 'ayant', aux: 'avoir' });
  R('aller', { present: 'vais vas va allons allez vont', futurStem: 'ir', ps: 'allai',
    subj: 'aille ailles aille allions alliez aillent', imperatif: 'va allons allez', pp: 'allé', aux: 'être' });
  R('faire', { present: 'fais fais fait faisons faites font', futurStem: 'fer', ps: 'fis',
    subj: 'fasse fasses fasse fassions fassiez fassent', pp: 'fait' });
  R('dire', { present: 'dis dis dit disons dites disent', futurStem: 'dir', ps: 'dis', pp: 'dit' });
  R('pouvoir', { present: 'peux peux peut pouvons pouvez peuvent', futurStem: 'pourr', ps: 'pus',
    subj: 'puisse puisses puisse puissions puissiez puissent', imperatif: null, pp: 'pu',
    note: 'Na pergunta formal com inversão, "je peux" vira "puis-je ?".' });
  R('vouloir', { present: 'veux veux veut voulons voulez veulent', futurStem: 'voudr', ps: 'voulus',
    subj: 'veuille veuilles veuille voulions vouliez veuillent', imperatif: 'veuille veuillons veuillez', pp: 'voulu' });
  R('savoir', { present: 'sais sais sait savons savez savent', futurStem: 'saur', ps: 'sus',
    subj: 'sache saches sache sachions sachiez sachent', imperatif: 'sache sachons sachez', pp: 'su', ppr: 'sachant' });
  R('voir', { present: 'vois vois voit voyons voyez voient', futurStem: 'verr', ps: 'vis', pp: 'vu' });
  R('devoir', { present: 'dois dois doit devons devez doivent', futurStem: 'devr', ps: 'dus', pp: 'dû',
    ppForms: ['dû', 'due', 'dus', 'dues'] });
  R('venir', { present: 'viens viens vient venons venez viennent', futurStem: 'viendr', ps: 'vins', pp: 'venu', aux: 'être' });
  R('tenir', { present: 'tiens tiens tient tenons tenez tiennent', futurStem: 'tiendr', ps: 'tins', pp: 'tenu' });
  R('prendre', { present: 'prends prends prend prenons prenez prennent', futurStem: 'prendr', ps: 'pris', pp: 'pris' });
  R('mettre', { present: 'mets mets met mettons mettez mettent', futurStem: 'mettr', ps: 'mis', pp: 'mis' });
  R('battre', { present: 'bats bats bat battons battez battent', futurStem: 'battr', ps: 'battis', pp: 'battu' });
  R('croire', { present: 'crois crois croit croyons croyez croient', futurStem: 'croir', ps: 'crus', pp: 'cru' });
  R('boire', { present: 'bois bois boit buvons buvez boivent', futurStem: 'boir', ps: 'bus', pp: 'bu' });
  R('courir', { present: 'cours cours court courons courez courent', futurStem: 'courr', ps: 'courus', pp: 'couru' });
  R('mourir', { present: 'meurs meurs meurt mourons mourez meurent', futurStem: 'mourr', ps: 'mourus', pp: 'mort', aux: 'être' });
  R('naître', { present: 'nais nais naît naissons naissez naissent', futurStem: 'naîtr', ps: 'naquis', pp: 'né', aux: 'être' });
  R('vivre', { present: 'vis vis vit vivons vivez vivent', futurStem: 'vivr', ps: 'vécus', pp: 'vécu' });
  R('suivre', { present: 'suis suis suit suivons suivez suivent', futurStem: 'suivr', ps: 'suivis', pp: 'suivi' });
  R('écrire', { present: 'écris écris écrit écrivons écrivez écrivent', futurStem: 'écrir', ps: 'écrivis', pp: 'écrit' });
  R('lire', { present: 'lis lis lit lisons lisez lisent', futurStem: 'lir', ps: 'lus', pp: 'lu' });
  R('rire', { present: 'ris ris rit rions riez rient', futurStem: 'rir', ps: 'ris', pp: 'ri' });
  R('plaire', { present: 'plais plais plaît plaisons plaisez plaisent', futurStem: 'plair', ps: 'plus', pp: 'plu' });
  R('connaître', { present: 'connais connais connaît connaissons connaissez connaissent', futurStem: 'connaîtr', ps: 'connus', pp: 'connu' });
  R('ouvrir', { present: 'ouvre ouvres ouvre ouvrons ouvrez ouvrent', futurStem: 'ouvrir', ps: 'ouvris', pp: 'ouvert' });
  R('cueillir', { present: 'cueille cueilles cueille cueillons cueillez cueillent', futurStem: 'cueiller', ps: 'cueillis', pp: 'cueilli' });
  R('recevoir', { present: 'reçois reçois reçoit recevons recevez reçoivent', futurStem: 'recevr', ps: 'reçus', pp: 'reçu' });
  R('craindre', { present: 'crains crains craint craignons craignez craignent', futurStem: 'craindr', ps: 'craignis', pp: 'craint' });
  R('peindre', { present: 'peins peins peint peignons peignez peignent', futurStem: 'peindr', ps: 'peignis', pp: 'peint' });
  R('joindre', { present: 'joins joins joint joignons joignez joignent', futurStem: 'joindr', ps: 'joignis', pp: 'joint' });
  R('conduire', { present: 'conduis conduis conduit conduisons conduisez conduisent', futurStem: 'conduir', ps: 'conduisis', pp: 'conduit' });
  R('valoir', { present: 'vaux vaux vaut valons valez valent', futurStem: 'vaudr', ps: 'valus',
    subj: 'vaille vailles vaille valions valiez vaillent', pp: 'valu' });
  R('asseoir', { present: 'assieds assieds assied asseyons asseyez asseyent', futurStem: 'assiér', ps: 'assis', pp: 'assis',
    note: 'Também existe a conjugação "je m\'assois, tu t\'assois, il s\'assoit, nous nous assoyons..." (mais coloquial).' });
  R('fuir', { present: 'fuis fuis fuit fuyons fuyez fuient', futurStem: 'fuir', ps: 'fuis', pp: 'fui' });
  R('vaincre', { present: 'vaincs vaincs vainc vainquons vainquez vainquent', futurStem: 'vaincr', ps: 'vainquis', pp: 'vaincu' });
  R('résoudre', { present: 'résous résous résout résolvons résolvez résolvent', futurStem: 'résoudr', ps: 'résolus', pp: 'résolu' });
  R('conclure', { present: 'conclus conclus conclut concluons concluez concluent', futurStem: 'conclur', ps: 'conclus', pp: 'conclu' });
  R('envoyer', { present: 'envoie envoies envoie envoyons envoyez envoient', futurStem: 'enverr', ps: 'envoyai', pp: 'envoyé' });
  R('falloir', { impersonal: true, present: '- - faut - - -', imparfaitStem: 'fall', futurStem: 'faudr', ps: 'fallus',
    subj: '- - faille - - -', pp: 'fallu', ppr: null });
  R('pleuvoir', { impersonal: true, present: '- - pleut - - -', imparfaitStem: 'pleuv', futurStem: 'pleuvr', ps: 'plus',
    subj: '- - pleuve - - -', pp: 'plu', ppr: 'pleuvant' });
  R('neiger', { impersonal: true, present: '- - neige - - -', imparfaitStem: 'neige', futurStem: 'neiger', ps: 'neigeai',
    subj: '- - neige - - -', pp: 'neigé', ppr: 'neigeant' });
  R('taire', { present: 'tais tais tait taisons taisez taisent', futurStem: 'tair', ps: 'tus', pp: 'tu' });
  R('distraire', { present: 'distrais distrais distrait distrayons distrayez distraient', futurStem: 'distrair', ps: null, pp: 'distrait' });
})();
