/* Testa números, ordinais, horas, datas, preços e telefones por extenso.
   Uso: node tools/test-numbers.js */
const { createContext, load } = require('./load');
const ctx = createContext();
load(ctx, 'js/core.js');
load(ctx, 'js/drills/numbers.js');
const N = ctx.LUX.numbers;

let pass = 0, fail = 0;
function eq(label, got, exp) {
  if (got === exp) pass++;
  else { fail++; console.log(`✗ ${label}\n    esperado: ${exp}\n    obtido:   ${got}`); }
}

/* 0 a 100 completo */
const ZERO_TO_100 = [
  'zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
  'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt',
  'vingt et un', 'vingt-deux', 'vingt-trois', 'vingt-quatre', 'vingt-cinq', 'vingt-six', 'vingt-sept', 'vingt-huit', 'vingt-neuf', 'trente',
  'trente et un', 'trente-deux', 'trente-trois', 'trente-quatre', 'trente-cinq', 'trente-six', 'trente-sept', 'trente-huit', 'trente-neuf', 'quarante',
  'quarante et un', 'quarante-deux', 'quarante-trois', 'quarante-quatre', 'quarante-cinq', 'quarante-six', 'quarante-sept', 'quarante-huit', 'quarante-neuf', 'cinquante',
  'cinquante et un', 'cinquante-deux', 'cinquante-trois', 'cinquante-quatre', 'cinquante-cinq', 'cinquante-six', 'cinquante-sept', 'cinquante-huit', 'cinquante-neuf', 'soixante',
  'soixante et un', 'soixante-deux', 'soixante-trois', 'soixante-quatre', 'soixante-cinq', 'soixante-six', 'soixante-sept', 'soixante-huit', 'soixante-neuf', 'soixante-dix',
  'soixante et onze', 'soixante-douze', 'soixante-treize', 'soixante-quatorze', 'soixante-quinze', 'soixante-seize', 'soixante-dix-sept', 'soixante-dix-huit', 'soixante-dix-neuf', 'quatre-vingts',
  'quatre-vingt-un', 'quatre-vingt-deux', 'quatre-vingt-trois', 'quatre-vingt-quatre', 'quatre-vingt-cinq', 'quatre-vingt-six', 'quatre-vingt-sept', 'quatre-vingt-huit', 'quatre-vingt-neuf', 'quatre-vingt-dix',
  'quatre-vingt-onze', 'quatre-vingt-douze', 'quatre-vingt-treize', 'quatre-vingt-quatorze', 'quatre-vingt-quinze', 'quatre-vingt-seize', 'quatre-vingt-dix-sept', 'quatre-vingt-dix-huit', 'quatre-vingt-dix-neuf', 'cent'
];
ZERO_TO_100.forEach((w, n) => eq(`toWords(${n})`, N.toWords(n), w));

const CASES = [
  [101, 'cent un'], [180, 'cent quatre-vingts'], [181, 'cent quatre-vingt-un'], [200, 'deux cents'], [201, 'deux cent un'],
  [300, 'trois cents'], [350, 'trois cent cinquante'], [999, 'neuf cent quatre-vingt-dix-neuf'], [1000, 'mille'], [1001, 'mille un'],
  [2000, 'deux mille'], [21000, 'vingt et un mille'], [80000, 'quatre-vingt mille'], [200000, 'deux cent mille'], [1000000, 'un million'],
  [2000000, 'deux millions'], [200000000, 'deux cents millions'], [1500, 'mille cinq cents'], [1999, 'mille neuf cent quatre-vingt-dix-neuf'],
  [1990, 'mille neuf cent quatre-vingt-dix'], [2026, 'deux mille vingt-six'], [1789, 'mille sept cent quatre-vingt-neuf'], [1900, 'mille neuf cents']
];
CASES.forEach(([n, w]) => eq(`toWords(${n})`, N.toWords(n), w));

/* variantes */
eq('be 70', N.toWords(70, { variant: 'be' }), 'septante');
eq('be 71', N.toWords(71, { variant: 'be' }), 'septante et un');
eq('be 80', N.toWords(80, { variant: 'be' }), 'quatre-vingts');
eq('be 97', N.toWords(97, { variant: 'be' }), 'nonante-sept');
eq('ch 80', N.toWords(80, { variant: 'ch' }), 'huitante');
eq('ch 88', N.toWords(88, { variant: 'ch' }), 'huitante-huit');

/* feminino */
eq('fem 21', N.toWords(21, { fem: true }), 'vingt et une');
eq('fem 81', N.toWords(81, { fem: true }), 'quatre-vingt-une');

/* ordinais */
[[1, 'premier'], [2, 'deuxième'], [3, 'troisième'], [4, 'quatrième'], [5, 'cinquième'], [9, 'neuvième'], [10, 'dixième'], [11, 'onzième'],
  [20, 'vingtième'], [21, 'vingt et unième'], [71, 'soixante et onzième'], [80, 'quatre-vingtième'], [81, 'quatre-vingt-unième'],
  [100, 'centième'], [200, 'deux centième'], [1000, 'millième']].forEach(([n, w]) => eq(`ordinal(${n})`, N.ordinal(n), w));
eq('ordinal(1, fem)', N.ordinal(1, { fem: true }), 'première');
eq('abbr 1', N.ordinalAbbr(1), '1er');
eq('abbr 1 fem', N.ordinalAbbr(1, true), '1re');
eq('abbr 21', N.ordinalAbbr(21), '21e');

/* horas */
[[0, 0, 'zéro heure'], [1, 0, 'une heure'], [1, 5, 'une heure cinq'], [17, 45, 'dix-sept heures quarante-cinq'],
  [21, 0, 'vingt et une heures'], [12, 30, 'douze heures trente'], [23, 59, 'vingt-trois heures cinquante-neuf'], [10, 21, 'dix heures vingt et une']]
  .forEach(([h, m, w]) => eq(`formal ${h}:${m}`, N.timeFormal(h, m), w));
[[5, 45, 'six heures moins le quart'], [12, 30, 'midi et demi'], [0, 30, 'minuit et demi'], [13, 30, 'une heure et demie'],
  [8, 15, 'huit heures et quart'], [12, 0, 'midi'], [0, 0, 'minuit'], [9, 40, 'dix heures moins vingt'], [11, 50, 'midi moins dix'],
  [15, 10, 'trois heures dix'], [23, 55, 'minuit moins cinq'], [7, 0, 'sept heures']]
  .forEach(([h, m, w]) => eq(`coloquial ${h}:${m}`, N.timeColloquial(h, m), w));

/* datas */
eq('data 1/7/2023', N.dateWords(1, 7, 2023), 'le premier juillet deux mille vingt-trois');
eq('data seg 12/3', N.dateWords(12, 3, null, 1), 'lundi douze mars');
eq('data 14/7/1789', N.dateWords(14, 7, 1789), 'le quatorze juillet mille sept cent quatre-vingt-neuf');
eq('data 21/8', N.dateWords(21, 8), 'le vingt et un août');

/* preços */
[[350, 'trois euros cinquante'], [99, 'quatre-vingt-dix-neuf centimes'], [100, 'un euro'], [2100, 'vingt et un euros'],
  [1, 'un centime'], [1205, 'douze euros cinq'], [8000, 'quatre-vingts euros']].forEach(([c, w]) => eq(`preço ${c}`, N.priceWords(c), w));
eq('priceDigits 350', N.priceDigits(350), '3,50');

/* telefone */
eq('tel', N.phoneWords('06 12 34 56 78'), 'zéro six, douze, trente-quatre, cinquante-six, soixante-dix-huit');
eq('tel 00', N.phoneWords('01 00 80 91 05'), 'zéro un, zéro zéro, quatre-vingts, quatre-vingt-onze, zéro cinq');

/* ida e volta palavras -> número */
for (let n = 0; n <= 1000; n++) eq(`parse ${n}`, N.parseWords(N.toWords(n)), n);
eq('parse ano', N.parseWords('deux mille vingt-six'), 2026);

console.log(`\nNúmeros: ${pass} ok, ${fail} falha(s).`);
process.exit(fail ? 1 : 0);
