/* LUX — números, horas, datas, preços e telefones por extenso em francês.
   Grafia tradicional (hífens só abaixo de 100, exceto com "et").
   Variantes: 'fr' (França), 'be' (Bélgica: septante, nonante), 'ch' (Suíça: septante, huitante, nonante). */
(function (g) {
  'use strict';
  var LUX = g.LUX;
  var N = LUX.numbers = {};

  var UNITS = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix',
    'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
  var TENS = { 2: 'vingt', 3: 'trente', 4: 'quarante', 5: 'cinquante', 6: 'soixante' };

  function tensWord(t, v) {
    if (t <= 6) return TENS[t];
    if (v === 'be' || v === 'ch') {
      if (t === 7) return 'septante';
      if (t === 9) return 'nonante';
      if (t === 8 && v === 'ch') return 'huitante';
    }
    return null;
  }

  function below100(n, v, fem) {
    if (n < 17) return n === 1 && fem ? 'une' : UNITS[n];
    if (n < 20) return 'dix-' + UNITS[n - 10];
    var t = Math.floor(n / 10), u = n % 10, tw = tensWord(t, v);
    if (tw) {
      if (u === 0) return tw;
      if (u === 1) return tw + ' et ' + (fem ? 'une' : 'un');
      return tw + '-' + UNITS[u];
    }
    if (t === 7) {                      // 70–79 (França)
      if (u === 1) return 'soixante et onze';
      return 'soixante-' + below100(10 + u, v);
    }
    var r = n - 80;                     // 80–99 (França) / 80–89 (Bélgica)
    if (r === 0) return 'quatre-vingts';
    return 'quatre-vingt-' + below100(r, v, fem);
  }

  function below1000(n, v, fem, beforeMille) {
    var h = Math.floor(n / 100), r = n % 100, s = '';
    if (h > 0) {
      s = h === 1 ? 'cent' : UNITS[h] + ' cent';
      if (r === 0 && h > 1 && !beforeMille) s += 's';
    }
    if (r > 0) s += (s ? ' ' : '') + below100(r, v, fem);
    if (beforeMille) s = s.replace(/quatre-vingts$/, 'quatre-vingt');
    return s;
  }

  /* número inteiro -> palavras. opts: {variant, fem} */
  N.toWords = function (n, opts) {
    opts = opts || {};
    var v = opts.variant || 'fr', fem = !!opts.fem;
    n = Math.floor(Math.abs(n));
    if (n === 0) return 'zéro';
    var parts = [];
    var bil = Math.floor(n / 1e9), mil = Math.floor(n / 1e6) % 1000, th = Math.floor(n / 1000) % 1000, rest = n % 1000;
    if (bil) parts.push(bil === 1 ? 'un milliard' : below1000(bil, v) + ' milliards');
    if (mil) parts.push(mil === 1 ? 'un million' : below1000(mil, v) + ' millions');
    if (th) parts.push(th === 1 ? 'mille' : below1000(th, v, false, true) + ' mille');
    if (rest) parts.push(below1000(rest, v, fem));
    return parts.join(' ');
  };

  /* ordinal: 1 -> premier/première, 2 -> deuxième, 21 -> vingt et unième ... */
  N.ordinal = function (n, opts) {
    opts = opts || {};
    if (n === 1) return opts.fem ? 'première' : 'premier';
    var w = N.toWords(n, { variant: opts.variant });
    var m = w.match(/^(.*?)([^\s-]+)$/), head = m[1], last = m[2];
    var ord;
    if (last === 'un') ord = 'unième';
    else if (last === 'cinq') ord = 'cinquième';
    else if (last === 'neuf') ord = 'neuvième';
    else if (last === 'vingts') ord = 'vingtième';
    else if (last === 'cents') ord = 'centième';
    else if (last === 'millions') ord = 'millionième';
    else if (last === 'milliards') ord = 'milliardième';
    else if (/e$/.test(last)) ord = last.slice(0, -1) + 'ième';
    else ord = last + 'ième';
    return head + ord;
  };
  N.ordinalAbbr = function (n, fem) { return n === 1 ? (fem ? '1re' : '1er') : n + 'e'; };

  /* ---------- horas ---------- */
  function hoursWord(h) {   // h: 0–23, formal
    if (h === 0) return 'zéro heure';
    if (h === 1) return 'une heure';
    return N.toWords(h, { fem: true }) + ' heures';
  }
  /* formal (24 h): "dix-sept heures quarante-cinq" */
  N.timeFormal = function (h, m) {
    return hoursWord(h) + (m ? ' ' + N.toWords(m, { fem: true }) : '');
  };
  function colloqHour(h) {
    h = ((h % 24) + 24) % 24;
    if (h === 0) return 'minuit';
    if (h === 12) return 'midi';
    var x = h % 12;
    return x === 1 ? 'une heure' : N.toWords(x) + ' heures';
  }
  /* coloquial (12 h): "six heures moins le quart", "midi et demi" */
  N.timeColloquial = function (h, m) {
    if (m === 0) return colloqHour(h);
    if (m <= 30) {
      var base = colloqHour(h);
      if (m === 15) return base + ' et quart';
      if (m === 30) return base + (h % 12 === 0 ? ' et demi' : ' et demie');
      return base + ' ' + N.toWords(m, { fem: true });
    }
    var next = colloqHour(h + 1);
    if (m === 45) return next + ' moins le quart';
    return next + ' moins ' + N.toWords(60 - m, { fem: true });
  };

  /* ---------- datas ---------- */
  N.MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  N.MONTHS_PT = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  N.DAYS = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  N.DAYS_PT = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

  /* "le premier juillet deux mille vingt-trois" | "lundi douze mars" */
  N.dateWords = function (d, month, year, weekday) {
    var day = d === 1 ? 'premier' : N.toWords(d);
    var s = (weekday != null ? N.DAYS[weekday] + ' ' : 'le ') + day + ' ' + N.MONTHS[month - 1];
    if (year) s += ' ' + N.toWords(year);
    return s;
  };

  /* ---------- preços ---------- */
  N.priceWords = function (cents) {
    var e = Math.floor(cents / 100), c = cents % 100;
    if (e === 0) return N.toWords(c) + (c > 1 ? ' centimes' : ' centime');
    var s = N.toWords(e) + (e > 1 ? ' euros' : ' euro');
    if (/(million|milliard)s?$/.test(N.toWords(e))) s = N.toWords(e) + " d'euros";
    if (c) s += ' ' + N.toWords(c);
    return s;
  };
  N.priceDigits = function (cents) {
    var e = Math.floor(cents / 100), c = cents % 100;
    return e + ',' + (c < 10 ? '0' + c : c);
  };

  /* ---------- telefone (pares) ---------- */
  N.phoneWords = function (digits) {
    var pairs = String(digits).replace(/\D/g, '').match(/\d{1,2}/g) || [];
    return pairs.map(function (p) {
      if (p.length === 2 && p[0] === '0') return 'zéro ' + N.toWords(+p[1]);
      return N.toWords(+p);
    }).join(', ');
  };

  /* ---------- palavras -> número (índice para o léxico e o popup) ---------- */
  var reverse = null;
  N.parseWords = function (s) {
    if (!reverse) {
      reverse = {};
      for (var i = 0; i <= 1000; i++) {
        reverse[N.toWords(i)] = i;
        reverse[N.toWords(i, { fem: true })] = i;
        reverse[N.toWords(i, { variant: 'be' })] = i;
        reverse[N.toWords(i, { variant: 'ch' })] = i;
      }
      for (var y = 1000; y <= 2100; y++) reverse[N.toWords(y)] = y;
    }
    var k = String(s).toLowerCase().trim();
    return reverse.hasOwnProperty(k) ? reverse[k] : null;
  };
  var ordRev = null;
  N.parseOrdinal = function (s) {
    if (!ordRev) {
      ordRev = { 'première': 1, 'second': 2, 'seconde': 2 };
      for (var i = 1; i <= 1000; i++) ordRev[N.ordinal(i)] = i;
    }
    var k = String(s).toLowerCase().trim();
    return ordRev.hasOwnProperty(k) ? ordRev[k] : null;
  };

  /* palavras atômicas usadas nos números (para a cobertura do léxico) */
  N.ATOMS = {
    'zéro': 0, 'un': 1, 'une': 1, 'deux': 2, 'trois': 3, 'quatre': 4, 'cinq': 5, 'six': 6, 'sept': 7, 'huit': 8,
    'neuf': 9, 'dix': 10, 'onze': 11, 'douze': 12, 'treize': 13, 'quatorze': 14, 'quinze': 15, 'seize': 16,
    'vingt': 20, 'vingts': 20, 'trente': 30, 'quarante': 40, 'cinquante': 50, 'soixante': 60,
    'septante': 70, 'huitante': 80, 'nonante': 90, 'cent': 100, 'cents': 100, 'mille': 1000,
    'million': 1e6, 'millions': 1e6, 'milliard': 1e9, 'milliards': 1e9
  };
})(typeof window !== 'undefined' ? window : globalThis);
