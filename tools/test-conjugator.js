/* Testa o motor de conjugação contra tabelas de referência escritas à mão.
   Uso: node tools/test-conjugator.js */
const { createContext, load, listJs } = require('./load');

const ctx = createContext();
['js/core.js', 'js/verbs/conjugator.js', 'content/verbs/irregular.js', ...listJs('content/verbs').filter(f => !/irregular/.test(f))]
  .forEach(f => load(ctx, f));
const C = ctx.LUX.conjugator;

/* Referência: tempos simples (6 formas sem pronome; imperativo 3 formas).
   p=présent i=imparfait f=futur c=conditionnel s=passé simple j=subjonctif m=impératif x=subj. imparfait */
const REF = {
  parler: { p: 'parle parles parle parlons parlez parlent', i: 'parlais parlais parlait parlions parliez parlaient',
    f: 'parlerai parleras parlera parlerons parlerez parleront', c: 'parlerais parlerais parlerait parlerions parleriez parleraient',
    s: 'parlai parlas parla parlâmes parlâtes parlèrent', j: 'parle parles parle parlions parliez parlent',
    m: 'parle parlons parlez', x: 'parlasse parlasses parlât parlassions parlassiez parlassent', pp: 'parlé', ppr: 'parlant' },
  finir: { p: 'finis finis finit finissons finissez finissent', i: 'finissais finissais finissait finissions finissiez finissaient',
    f: 'finirai finiras finira finirons finirez finiront', s: 'finis finis finit finîmes finîtes finirent',
    j: 'finisse finisses finisse finissions finissiez finissent', m: 'finis finissons finissez',
    x: 'finisse finisses finît finissions finissiez finissent', pp: 'fini', ppr: 'finissant' },
  vendre: { p: 'vends vends vend vendons vendez vendent', i: 'vendais vendais vendait vendions vendiez vendaient',
    f: 'vendrai vendras vendra vendrons vendrez vendront', s: 'vendis vendis vendit vendîmes vendîtes vendirent',
    j: 'vende vendes vende vendions vendiez vendent', m: 'vends vendons vendez', pp: 'vendu', ppr: 'vendant' },
  attendre: { p: 'attends attends attend attendons attendez attendent', f: 'attendrai attendras attendra attendrons attendrez attendront', pp: 'attendu' },
  'répondre': { p: 'réponds réponds répond répondons répondez répondent', s: 'répondis répondis répondit répondîmes répondîtes répondirent', pp: 'répondu' },
  manger: { p: 'mange manges mange mangeons mangez mangent', i: 'mangeais mangeais mangeait mangions mangiez mangeaient',
    f: 'mangerai mangeras mangera mangerons mangerez mangeront', s: 'mangeai mangeas mangea mangeâmes mangeâtes mangèrent',
    j: 'mange manges mange mangions mangiez mangent', m: 'mange mangeons mangez', pp: 'mangé', ppr: 'mangeant',
    x: 'mangeasse mangeasses mangeât mangeassions mangeassiez mangeassent' },
  commencer: { p: 'commence commences commence commençons commencez commencent',
    i: 'commençais commençais commençait commencions commenciez commençaient',
    s: 'commençai commenças commença commençâmes commençâtes commencèrent', m: 'commence commençons commencez', ppr: 'commençant' },
  appeler: { p: 'appelle appelles appelle appelons appelez appellent', f: 'appellerai appelleras appellera appellerons appellerez appelleront',
    j: 'appelle appelles appelle appelions appeliez appellent', m: 'appelle appelons appelez', pp: 'appelé' },
  jeter: { p: 'jette jettes jette jetons jetez jettent', f: 'jetterai jetteras jettera jetterons jetterez jetteront', pp: 'jeté' },
  acheter: { p: 'achète achètes achète achetons achetez achètent', f: 'achèterai achèteras achètera achèterons achèterez achèteront',
    j: 'achète achètes achète achetions achetiez achètent', i: 'achetais achetais achetait achetions achetiez achetaient' },
  emmener: { p: 'emmène emmènes emmène emmenons emmenez emmènent', f: 'emmènerai emmèneras emmènera emmènerons emmènerez emmèneront' },
  'préférer': { p: 'préfère préfères préfère préférons préférez préfèrent', f: 'préférerai préféreras préférera préférerons préférerez préféreront',
    j: 'préfère préfères préfère préférions préfériez préfèrent', pp: 'préféré' },
  'répéter': { p: 'répète répètes répète répétons répétez répètent' },
  payer: { p: 'paie paies paie payons payez paient', f: 'paierai paieras paiera paierons paierez paieront', i: 'payais payais payait payions payiez payaient' },
  employer: { p: 'emploie emploies emploie employons employez emploient', f: 'emploierai emploieras emploiera emploierons emploierez emploieront',
    j: 'emploie emploies emploie employions employiez emploient' },
  nettoyer: { p: 'nettoie nettoies nettoie nettoyons nettoyez nettoient', f: 'nettoierai nettoieras nettoiera nettoierons nettoierez nettoieront' },
  envoyer: { p: 'envoie envoies envoie envoyons envoyez envoient', f: 'enverrai enverras enverra enverrons enverrez enverront',
    s: 'envoyai envoyas envoya envoyâmes envoyâtes envoyèrent', j: 'envoie envoies envoie envoyions envoyiez envoient', m: 'envoie envoyons envoyez' },
  'protéger': { p: 'protège protèges protège protégeons protégez protègent', i: 'protégeais protégeais protégeait protégions protégiez protégeaient',
    f: 'protégerai protégeras protégera protégerons protégerez protégeront' },
  'étudier': { p: 'étudie étudies étudie étudions étudiez étudient', i: 'étudiais étudiais étudiait étudiions étudiiez étudiaient' },
  'créer': { p: 'crée crées crée créons créez créent', f: 'créerai créeras créera créerons créerez créeront', pp: 'créé' },
  'être': { p: 'suis es est sommes êtes sont', i: 'étais étais était étions étiez étaient', f: 'serai seras sera serons serez seront',
    c: 'serais serais serait serions seriez seraient', s: 'fus fus fut fûmes fûtes furent', j: 'sois sois soit soyons soyez soient',
    m: 'sois soyons soyez', x: 'fusse fusses fût fussions fussiez fussent', pp: 'été', ppr: 'étant' },
  avoir: { p: 'ai as a avons avez ont', i: 'avais avais avait avions aviez avaient', f: 'aurai auras aura aurons aurez auront',
    s: 'eus eus eut eûmes eûtes eurent', j: 'aie aies ait ayons ayez aient', m: 'aie ayons ayez',
    x: 'eusse eusses eût eussions eussiez eussent', pp: 'eu', ppr: 'ayant' },
  aller: { p: 'vais vas va allons allez vont', i: 'allais allais allait allions alliez allaient', f: 'irai iras ira irons irez iront',
    s: 'allai allas alla allâmes allâtes allèrent', j: 'aille ailles aille allions alliez aillent', m: 'va allons allez', pp: 'allé', ppr: 'allant' },
  faire: { p: 'fais fais fait faisons faites font', i: 'faisais faisais faisait faisions faisiez faisaient', f: 'ferai feras fera ferons ferez feront',
    s: 'fis fis fit fîmes fîtes firent', j: 'fasse fasses fasse fassions fassiez fassent', m: 'fais faisons faites', pp: 'fait', ppr: 'faisant' },
  dire: { p: 'dis dis dit disons dites disent', i: 'disais disais disait disions disiez disaient', f: 'dirai diras dira dirons direz diront',
    s: 'dis dis dit dîmes dîtes dirent', j: 'dise dises dise disions disiez disent', m: 'dis disons dites', pp: 'dit', ppr: 'disant' },
  pouvoir: { p: 'peux peux peut pouvons pouvez peuvent', i: 'pouvais pouvais pouvait pouvions pouviez pouvaient',
    f: 'pourrai pourras pourra pourrons pourrez pourront', s: 'pus pus put pûmes pûtes purent',
    j: 'puisse puisses puisse puissions puissiez puissent', pp: 'pu', ppr: 'pouvant' },
  vouloir: { p: 'veux veux veut voulons voulez veulent', f: 'voudrai voudras voudra voudrons voudrez voudront',
    s: 'voulus voulus voulut voulûmes voulûtes voulurent', j: 'veuille veuilles veuille voulions vouliez veuillent', m: 'veuille veuillons veuillez', pp: 'voulu' },
  savoir: { p: 'sais sais sait savons savez savent', i: 'savais savais savait savions saviez savaient', f: 'saurai sauras saura saurons saurez sauront',
    s: 'sus sus sut sûmes sûtes surent', j: 'sache saches sache sachions sachiez sachent', m: 'sache sachons sachez', pp: 'su', ppr: 'sachant' },
  voir: { p: 'vois vois voit voyons voyez voient', i: 'voyais voyais voyait voyions voyiez voyaient', f: 'verrai verras verra verrons verrez verront',
    s: 'vis vis vit vîmes vîtes virent', j: 'voie voies voie voyions voyiez voient', m: 'vois voyons voyez', pp: 'vu', ppr: 'voyant' },
  'prévoir': { p: 'prévois prévois prévoit prévoyons prévoyez prévoient', f: 'prévoirai prévoiras prévoira prévoirons prévoirez prévoiront', pp: 'prévu' },
  devoir: { p: 'dois dois doit devons devez doivent', i: 'devais devais devait devions deviez devaient', f: 'devrai devras devra devrons devrez devront',
    s: 'dus dus dut dûmes dûtes durent', j: 'doive doives doive devions deviez doivent', pp: 'dû' },
  venir: { p: 'viens viens vient venons venez viennent', i: 'venais venais venait venions veniez venaient', f: 'viendrai viendras viendra viendrons viendrez viendront',
    s: 'vins vins vint vînmes vîntes vinrent', j: 'vienne viennes vienne venions veniez viennent', m: 'viens venons venez',
    x: 'vinsse vinsses vînt vinssions vinssiez vinssent', pp: 'venu', ppr: 'venant' },
  devenir: { p: 'deviens deviens devient devenons devenez deviennent', f: 'deviendrai deviendras deviendra deviendrons deviendrez deviendront', s: 'devins devins devint devînmes devîntes devinrent', pp: 'devenu' },
  obtenir: { p: 'obtiens obtiens obtient obtenons obtenez obtiennent', f: 'obtiendrai obtiendras obtiendra obtiendrons obtiendrez obtiendront', pp: 'obtenu' },
  prendre: { p: 'prends prends prend prenons prenez prennent', i: 'prenais prenais prenait prenions preniez prenaient', f: 'prendrai prendras prendra prendrons prendrez prendront',
    s: 'pris pris prit prîmes prîtes prirent', j: 'prenne prennes prenne prenions preniez prennent', m: 'prends prenons prenez', pp: 'pris', ppr: 'prenant' },
  comprendre: { p: 'comprends comprends comprend comprenons comprenez comprennent', s: 'compris compris comprit comprîmes comprîtes comprirent', pp: 'compris' },
  mettre: { p: 'mets mets met mettons mettez mettent', s: 'mis mis mit mîmes mîtes mirent', j: 'mette mettes mette mettions mettiez mettent', pp: 'mis' },
  permettre: { p: 'permets permets permet permettons permettez permettent', pp: 'permis' },
  croire: { p: 'crois crois croit croyons croyez croient', i: 'croyais croyais croyait croyions croyiez croyaient', s: 'crus crus crut crûmes crûtes crurent',
    j: 'croie croies croie croyions croyiez croient', pp: 'cru' },
  boire: { p: 'bois bois boit buvons buvez boivent', i: 'buvais buvais buvait buvions buviez buvaient', f: 'boirai boiras boira boirons boirez boiront',
    s: 'bus bus but bûmes bûtes burent', j: 'boive boives boive buvions buviez boivent', pp: 'bu', ppr: 'buvant' },
  courir: { p: 'cours cours court courons courez courent', f: 'courrai courras courra courrons courrez courront', s: 'courus courus courut courûmes courûtes coururent', pp: 'couru' },
  mourir: { p: 'meurs meurs meurt mourons mourez meurent', f: 'mourrai mourras mourra mourrons mourrez mourront', j: 'meure meures meure mourions mouriez meurent', pp: 'mort' },
  'naître': { p: 'nais nais naît naissons naissez naissent', s: 'naquis naquis naquit naquîmes naquîtes naquirent', pp: 'né' },
  vivre: { p: 'vis vis vit vivons vivez vivent', s: 'vécus vécus vécut vécûmes vécûtes vécurent', pp: 'vécu' },
  'écrire': { p: 'écris écris écrit écrivons écrivez écrivent', i: 'écrivais écrivais écrivait écrivions écriviez écrivaient', s: 'écrivis écrivis écrivit écrivîmes écrivîtes écrivirent', j: 'écrive écrives écrive écrivions écriviez écrivent', pp: 'écrit' },
  'décrire': { p: 'décris décris décrit décrivons décrivez décrivent', pp: 'décrit' },
  lire: { p: 'lis lis lit lisons lisez lisent', s: 'lus lus lut lûmes lûtes lurent', pp: 'lu' },
  'connaître': { p: 'connais connais connaît connaissons connaissez connaissent', s: 'connus connus connut connûmes connûtes connurent', f: 'connaîtrai connaîtras connaîtra connaîtrons connaîtrez connaîtront', pp: 'connu' },
  'paraître': { p: 'parais parais paraît paraissons paraissez paraissent', pp: 'paru' },
  'reconnaître': { p: 'reconnais reconnais reconnaît reconnaissons reconnaissez reconnaissent', pp: 'reconnu' },
  ouvrir: { p: 'ouvre ouvres ouvre ouvrons ouvrez ouvrent', f: 'ouvrirai ouvriras ouvrira ouvrirons ouvrirez ouvriront', s: 'ouvris ouvris ouvrit ouvrîmes ouvrîtes ouvrirent', m: 'ouvre ouvrons ouvrez', pp: 'ouvert' },
  offrir: { p: 'offre offres offre offrons offrez offrent', pp: 'offert' },
  'découvrir': { p: 'découvre découvres découvre découvrons découvrez découvrent', pp: 'découvert' },
  partir: { p: 'pars pars part partons partez partent', i: 'partais partais partait partions partiez partaient', f: 'partirai partiras partira partirons partirez partiront',
    s: 'partis partis partit partîmes partîtes partirent', j: 'parte partes parte partions partiez partent', m: 'pars partons partez', pp: 'parti' },
  dormir: { p: 'dors dors dort dormons dormez dorment', pp: 'dormi' },
  servir: { p: 'sers sers sert servons servez servent', pp: 'servi' },
  sortir: { p: 'sors sors sort sortons sortez sortent', pp: 'sorti' },
  recevoir: { p: 'reçois reçois reçoit recevons recevez reçoivent', i: 'recevais recevais recevait recevions receviez recevaient', f: 'recevrai recevras recevra recevrons recevrez recevront',
    s: 'reçus reçus reçut reçûmes reçûtes reçurent', j: 'reçoive reçoives reçoive recevions receviez reçoivent', pp: 'reçu' },
  apercevoir: { p: 'aperçois aperçois aperçoit apercevons apercevez aperçoivent', pp: 'aperçu' },
  conduire: { p: 'conduis conduis conduit conduisons conduisez conduisent', s: 'conduisis conduisis conduisit conduisîmes conduisîtes conduisirent', pp: 'conduit' },
  traduire: { p: 'traduis traduis traduit traduisons traduisez traduisent', pp: 'traduit' },
  peindre: { p: 'peins peins peint peignons peignez peignent', i: 'peignais peignais peignait peignions peigniez peignaient', f: 'peindrai peindras peindra peindrons peindrez peindront', pp: 'peint' },
  'éteindre': { p: 'éteins éteins éteint éteignons éteignez éteignent', pp: 'éteint' },
  rejoindre: { p: 'rejoins rejoins rejoint rejoignons rejoignez rejoignent', pp: 'rejoint' },
  rire: { p: 'ris ris rit rions riez rient', i: 'riais riais riait riions riiez riaient', s: 'ris ris rit rîmes rîtes rirent', j: 'rie ries rie riions riiez rient', pp: 'ri' },
  sourire: { p: 'souris souris sourit sourions souriez sourient', pp: 'souri' },
  plaire: { p: 'plais plais plaît plaisons plaisez plaisent', s: 'plus plus plut plûmes plûtes plurent', pp: 'plu' },
  suivre: { p: 'suis suis suit suivons suivez suivent', s: 'suivis suivis suivit suivîmes suivîtes suivirent', pp: 'suivi' },
  craindre: { p: 'crains crains craint craignons craignez craignent', j: 'craigne craignes craigne craignions craigniez craignent', pp: 'craint' },
  falloir: { p: '- - faut - - -', i: '- - fallait - - -', f: '- - faudra - - -', s: '- - fallut - - -', j: '- - faille - - -', pp: 'fallu' },
  pleuvoir: { p: '- - pleut - - -', i: '- - pleuvait - - -', f: '- - pleuvra - - -', s: '- - plut - - -', j: '- - pleuve - - -', pp: 'plu' }
};

const KEYS = { p: 'present', i: 'imparfait', f: 'futur', c: 'conditionnel', s: 'passe_simple', j: 'subjonctif', m: 'imperatif', x: 'subjonctif_imparfait' };

let pass = 0, fail = 0;
const errors = [];
function eq(label, got, exp) {
  if (got === exp) { pass++; return; }
  fail++; errors.push(`✗ ${label}\n    esperado: ${exp}\n    obtido:   ${got}`);
}

Object.keys(REF).forEach(inf => {
  const ref = REF[inf];
  const f = C.simple(inf, ctx.LUX.data.verbs[inf]);
  Object.keys(ref).forEach(k => {
    if (k === 'pp' || k === 'ppr') { eq(`${inf} ${k}`, f[k], ref[k]); return; }
    const arr = f[KEYS[k]];
    const got = arr ? arr.map(x => x == null ? '-' : x).join(' ') : '(nenhum)';
    eq(`${inf} ${KEYS[k]}`, got, ref[k]);
  });
});

/* Tabelas completas: linhas exibidas com pronomes, compostos e pronominais */
function rows(inf, tenseId) {
  const t = C.conjugate(inf, ctx.LUX.data.verbs[inf]).tenses.find(x => x.tense.id === tenseId);
  return t ? t.rows.map(r => C.rowDisplay(r)) : [];
}
const FULL = [
  ['aller', 'passe_compose', ['je suis allé(e)', 'tu es allé(e)', 'il est allé / elle est allée / on est allé(e)s', 'nous sommes allé(e)s', 'vous êtes allé(e)(s)', 'ils sont allés / elles sont allées']],
  ['parler', 'passe_compose', ["j'ai parlé", 'tu as parlé', 'il / elle / on a parlé', 'nous avons parlé', 'vous avez parlé', 'ils / elles ont parlé']],
  ['parler', 'plus_que_parfait', ["j'avais parlé", 'tu avais parlé', 'il / elle / on avait parlé', 'nous avions parlé', 'vous aviez parlé', 'ils / elles avaient parlé']],
  ['parler', 'subjonctif', ['que je parle', 'que tu parles', "qu'il / qu'elle / qu'on parle", 'que nous parlions', 'que vous parliez', "qu'ils / qu'elles parlent"]],
  ['parler', 'subjonctif_passe', ["que j'aie parlé", 'que tu aies parlé', "qu'il / qu'elle / qu'on ait parlé", 'que nous ayons parlé', 'que vous ayez parlé', "qu'ils / qu'elles aient parlé"]],
  ['aimer', 'present', ["j'aime", 'tu aimes', 'il / elle / on aime', 'nous aimons', 'vous aimez', 'ils / elles aiment']],
  ['aimer', 'subjonctif', ["que j'aime", 'que tu aimes', "qu'il / qu'elle / qu'on aime", 'que nous aimions', 'que vous aimiez', "qu'ils / qu'elles aiment"]],
  ['habiter', 'present', ["j'habite", 'tu habites', 'il / elle / on habite', 'nous habitons', 'vous habitez', 'ils / elles habitent']],
  ['se lever', 'present', ['je me lève', 'tu te lèves', 'il / elle / on se lève', 'nous nous levons', 'vous vous levez', 'ils / elles se lèvent']],
  ['se lever', 'passe_compose', ['je me suis levé(e)', "tu t'es levé(e)", "il s'est levé / elle s'est levée / on s'est levé(e)s", 'nous nous sommes levé(e)s', 'vous vous êtes levé(e)(s)', 'ils se sont levés / elles se sont levées']],
  ['se lever', 'imperatif', ['lève-toi', 'levons-nous', 'levez-vous']],
  ['se lever', 'futur_proche', ['je vais me lever', 'tu vas te lever', 'il / elle / on va se lever', 'nous allons nous lever', 'vous allez vous lever', 'ils / elles vont se lever']],
  ["s'appeler", 'present', ["je m'appelle", "tu t'appelles", "il / elle / on s'appelle", 'nous nous appelons', 'vous vous appelez', "ils / elles s'appellent"]],
  ["s'habiller", 'present', ["je m'habille", "tu t'habilles", "il / elle / on s'habille", 'nous nous habillons', 'vous vous habillez', "ils / elles s'habillent"]],
  ["s'asseoir", 'present', ["je m'assieds", "tu t'assieds", "il / elle / on s'assied", 'nous nous asseyons', 'vous vous asseyez', "ils / elles s'asseyent"]],
  ["s'asseoir", 'passe_compose', ['je me suis assis(e)', "tu t'es assis(e)", "il s'est assis / elle s'est assise / on s'est assis(es)", 'nous nous sommes assis(es)', 'vous vous êtes assis(e)(s)', 'ils se sont assis / elles se sont assises']],
  ["s'asseoir", 'imperatif', ['assieds-toi', 'asseyons-nous', 'asseyez-vous']],
  ['se souvenir', 'futur', ['je me souviendrai', 'tu te souviendras', 'il / elle / on se souviendra', 'nous nous souviendrons', 'vous vous souviendrez', 'ils / elles se souviendront']],
  ['être', 'imperatif', ['sois', 'soyons', 'soyez']],
  ['avoir', 'futur_anterieur', ["j'aurai eu", 'tu auras eu', 'il / elle / on aura eu', 'nous aurons eu', 'vous aurez eu', 'ils / elles auront eu']],
  ['venir', 'conditionnel_passe', ['je serais venu(e)', 'tu serais venu(e)', 'il serait venu / elle serait venue / on serait venu(e)s', 'nous serions venu(e)s', 'vous seriez venu(e)(s)', 'ils seraient venus / elles seraient venues']],
  ['falloir', 'present', ['il faut']],
  ['falloir', 'passe_compose', ['il a fallu']],
  ['falloir', 'futur_proche', ['il va falloir']],
  ['pleuvoir', 'imparfait', ['il pleuvait']],
  ['parler', 'imperatif_passe', ['aie parlé', 'ayons parlé', 'ayez parlé']],
  ['aller', 'imperatif_passe', ['sois allé(e)', 'soyons allé(e)s', 'soyez allé(e)(s)']],
  ['finir', 'passe_anterieur', ["j'eus fini", 'tu eus fini', 'il / elle / on eut fini', 'nous eûmes fini', 'vous eûtes fini', 'ils / elles eurent fini']],
  ['finir', 'subjonctif_pqp', ["que j'eusse fini", 'que tu eusses fini', "qu'il / qu'elle / qu'on eût fini", 'que nous eussions fini', 'que vous eussiez fini', "qu'ils / qu'elles eussent fini"]],
  ['aller', 'nominales', ['aller', 'être allé(e)(s)', 'allant', 'en allant', 'allé (allée, allés, allées)', 'étant allé(e)(s)']],
  ['se lever', 'nominales', ['se lever', "s'être levé(e)(s)", 'se levant', 'en se levant', 'levé (levée, levés, levées)', "s'étant levé(e)(s)"]]
];
FULL.forEach(([inf, t, exp]) => eq(`${inf} ${t} (linhas)`, rows(inf, t).join(' | '), exp.join(' | ')));

/* todos os verbos do dicionário conjugam sem erro e sem "undefined" */
ctx.LUX.data.verbList.forEach(v => {
  try {
    const res = C.conjugate(v.inf, v);
    const txt = JSON.stringify(res.tenses.map(t => t.rows.map(r => C.rowDisplay(r))));
    if (/undefined|null|NaN/.test(txt)) { fail++; errors.push(`✗ ${v.inf}: forma indefinida na tabela`); }
    else pass++;
    if (res.tenses.length < 15) { fail++; errors.push(`✗ ${v.inf}: só ${res.tenses.length} tempos`); }
  } catch (e) { fail++; errors.push(`✗ ${v.inf}: ${e.message}`); }
});

errors.forEach(e => console.log(e));
console.log(`\nConjugador: ${pass} ok, ${fail} falha(s) — ${Object.keys(REF).length} verbos com referência, ${FULL.length} tabelas completas, ${ctx.LUX.data.verbList.length} verbos no dicionário.`);
process.exit(fail ? 1 : 0);
