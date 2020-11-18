import { subMonths, addMonths, subYears, addYears, setYear, setMonth, startOfYear, startOfMonth, startOfDay, differenceInCalendarMonths } from 'date-fns';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function isDate(value) {
  return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
function toDate(value) {
  if (isDate(value)) {
    return new Date(value.getTime());
  }

  if (value == null) {
    return new Date(NaN);
  }

  return new Date(value);
}
function isValidDate(value) {
  return isDate(value) && !isNaN(value.getTime());
}
function startOfWeek(value) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!(firstDayOfWeek >= 0 && firstDayOfWeek <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6');
  }

  var date = toDate(value);
  var day = date.getDay();
  var diff = (day + 7 - firstDayOfWeek) % 7;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}
function startOfWeekYear(value) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$firstDayOfWeek = _ref.firstDayOfWeek,
      firstDayOfWeek = _ref$firstDayOfWeek === void 0 ? 0 : _ref$firstDayOfWeek,
      _ref$firstWeekContain = _ref.firstWeekContainsDate,
      firstWeekContainsDate = _ref$firstWeekContain === void 0 ? 1 : _ref$firstWeekContain;

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7');
  }

  var date = toDate(value);
  var year = date.getFullYear();
  var firstDateOfFirstWeek = new Date(0);

  for (var i = year + 1; i >= year - 1; i--) {
    firstDateOfFirstWeek.setFullYear(i, 0, firstWeekContainsDate);
    firstDateOfFirstWeek.setHours(0, 0, 0, 0);
    firstDateOfFirstWeek = startOfWeek(firstDateOfFirstWeek, firstDayOfWeek);

    if (date.getTime() >= firstDateOfFirstWeek.getTime()) {
      break;
    }
  }

  return firstDateOfFirstWeek;
}
function getWeek(value) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$firstDayOfWeek = _ref2.firstDayOfWeek,
      firstDayOfWeek = _ref2$firstDayOfWeek === void 0 ? 0 : _ref2$firstDayOfWeek,
      _ref2$firstWeekContai = _ref2.firstWeekContainsDate,
      firstWeekContainsDate = _ref2$firstWeekContai === void 0 ? 1 : _ref2$firstWeekContai;

  var date = toDate(value);
  var firstDateOfThisWeek = startOfWeek(date, firstDayOfWeek);
  var firstDateOfFirstWeek = startOfWeekYear(date, {
    firstDayOfWeek: firstDayOfWeek,
    firstWeekContainsDate: firstWeekContainsDate
  });
  var diff = firstDateOfThisWeek.getTime() - firstDateOfFirstWeek.getTime();
  return Math.round(diff / (7 * 24 * 3600 * 1000)) + 1;
}

var locale = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};

var REGEX_FORMAT = /\[([^\]]+)]|YYYY|YY?|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|Z{1,2}|S{1,3}|w{1,2}|x|X|a|A/g;

function pad(val) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var output = "".concat(Math.abs(val));
  var sign = val < 0 ? '-' : '';

  while (output.length < len) {
    output = "0".concat(output);
  }

  return sign + output;
}

function formatTimezone(offset) {
  var delimeter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  return sign + pad(hours, 2) + delimeter + pad(minutes, 2);
}

var meridiem = function meridiem(h, _, isLowercase) {
  var word = h < 12 ? 'AM' : 'PM';
  return isLowercase ? word.toLocaleLowerCase() : word;
};

var formatFlags = {
  Y: function Y(date) {
    var y = date.getFullYear();
    return y <= 9999 ? "".concat(y) : "+".concat(y);
  },
  // Year: 00, 01, ..., 99
  YY: function YY(date) {
    return pad(date.getFullYear(), 4).substr(2);
  },
  // Year: 1900, 1901, ..., 2099
  YYYY: function YYYY(date) {
    return pad(date.getFullYear(), 4);
  },
  // Month: 1, 2, ..., 12
  M: function M(date) {
    return date.getMonth() + 1;
  },
  // Month: 01, 02, ..., 12
  MM: function MM(date) {
    return pad(date.getMonth() + 1, 2);
  },
  MMM: function MMM(date, locale) {
    return locale.monthsShort[date.getMonth()];
  },
  MMMM: function MMMM(date, locale) {
    return locale.months[date.getMonth()];
  },
  // Day of month: 1, 2, ..., 31
  D: function D(date) {
    return date.getDate();
  },
  // Day of month: 01, 02, ..., 31
  DD: function DD(date) {
    return pad(date.getDate(), 2);
  },
  // Hour: 0, 1, ... 23
  H: function H(date) {
    return date.getHours();
  },
  // Hour: 00, 01, ..., 23
  HH: function HH(date) {
    return pad(date.getHours(), 2);
  },
  // Hour: 1, 2, ..., 12
  h: function h(date) {
    var hours = date.getHours();

    if (hours === 0) {
      return 12;
    }

    if (hours > 12) {
      return hours % 12;
    }

    return hours;
  },
  // Hour: 01, 02, ..., 12
  hh: function hh() {
    var hours = formatFlags.h.apply(formatFlags, arguments);
    return pad(hours, 2);
  },
  // Minute: 0, 1, ..., 59
  m: function m(date) {
    return date.getMinutes();
  },
  // Minute: 00, 01, ..., 59
  mm: function mm(date) {
    return pad(date.getMinutes(), 2);
  },
  // Second: 0, 1, ..., 59
  s: function s(date) {
    return date.getSeconds();
  },
  // Second: 00, 01, ..., 59
  ss: function ss(date) {
    return pad(date.getSeconds(), 2);
  },
  // 1/10 of second: 0, 1, ..., 9
  S: function S(date) {
    return Math.floor(date.getMilliseconds() / 100);
  },
  // 1/100 of second: 00, 01, ..., 99
  SS: function SS(date) {
    return pad(Math.floor(date.getMilliseconds() / 10), 2);
  },
  // Millisecond: 000, 001, ..., 999
  SSS: function SSS(date) {
    return pad(date.getMilliseconds(), 3);
  },
  // Day of week: 0, 1, ..., 6
  d: function d(date) {
    return date.getDay();
  },
  // Day of week: 'Su', 'Mo', ..., 'Sa'
  dd: function dd(date, locale) {
    return locale.weekdaysMin[date.getDay()];
  },
  // Day of week: 'Sun', 'Mon',..., 'Sat'
  ddd: function ddd(date, locale) {
    return locale.weekdaysShort[date.getDay()];
  },
  // Day of week: 'Sunday', 'Monday', ...,'Saturday'
  dddd: function dddd(date, locale) {
    return locale.weekdays[date.getDay()];
  },
  // AM, PM
  A: function A(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), false);
  },
  // am, pm
  a: function a(date, locale) {
    var meridiemFunc = locale.meridiem || meridiem;
    return meridiemFunc(date.getHours(), date.getMinutes(), true);
  },
  // Timezone: -01:00, +00:00, ... +12:00
  Z: function Z(date) {
    return formatTimezone(date.getTimezoneOffset(), ':');
  },
  // Timezone: -0100, +0000, ... +1200
  ZZ: function ZZ(date) {
    return formatTimezone(date.getTimezoneOffset());
  },
  // Seconds timestamp: 512969520
  X: function X(date) {
    return Math.floor(date.getTime() / 1000);
  },
  // Milliseconds timestamp: 512969520900
  x: function x(date) {
    return date.getTime();
  },
  w: function w(date, locale) {
    return getWeek(date, {
      firstDayOfWeek: locale.firstDayOfWeek,
      firstWeekContainsDate: locale.firstWeekContainsDate
    });
  },
  ww: function ww(date, locale) {
    return pad(formatFlags.w(date, locale), 2);
  }
};

function format(val, str) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var formatStr = str ? String(str) : 'YYYY-MM-DDTHH:mm:ss.SSSZ';
  var date = toDate(val);

  if (!isValidDate(date)) {
    return 'Invalid Date';
  }

  var locale$1 = options.locale || locale;
  return formatStr.replace(REGEX_FORMAT, function (match, p1) {
    if (p1) {
      return p1;
    }

    if (typeof formatFlags[match] === 'function') {
      return "".concat(formatFlags[match](date, locale$1));
    }

    return match;
  });
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function ownKeys$1(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys$1(source, true).forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys$1(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit$1(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
var formattingTokens = /(\[[^\[]*\])|(MM?M?M?|Do|DD?|ddd?d?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|S{1,3}|x|X|ZZ?|.)/g;
var match1 = /\d/; // 0 - 9

var match2 = /\d\d/; // 00 - 99

var match3 = /\d{3}/; // 000 - 999

var match4 = /\d{4}/; // 0000 - 9999

var match1to2 = /\d\d?/; // 0 - 99

var matchShortOffset = /[+-]\d\d:?\d\d/; // +00:00 -00:00 +0000 or -0000

var matchSigned = /[+-]?\d+/; // -inf - inf

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i; // Word

var YEAR = 'year';
var MONTH = 'month';
var DAY = 'day';
var HOUR = 'hour';
var MINUTE = 'minute';
var SECOND = 'second';
var MILLISECOND = 'millisecond';
var parseFlags = {};

var addParseFlag = function addParseFlag(token, regex, callback) {
  var tokens = Array.isArray(token) ? token : [token];
  var func;

  if (typeof callback === 'string') {
    func = function func(input) {
      var value = parseInt(input, 10);
      return _defineProperty$1({}, callback, value);
    };
  } else {
    func = callback;
  }

  tokens.forEach(function (key) {
    parseFlags[key] = [regex, func];
  });
};

var matchWordCallback = function matchWordCallback(localeKey, key) {
  return function (input, locale) {
    var array = locale[localeKey];

    if (!Array.isArray(array)) {
      throw new Error("Locale[".concat(localeKey, "] need an array"));
    }

    var index = array.indexOf(input);

    if (index < 0) {
      throw new Error('Invalid Word');
    }

    return _defineProperty$1({}, key, index);
  };
};

addParseFlag('Y', matchSigned, YEAR);
addParseFlag('YY', match2, function (input) {
  var year = new Date().getFullYear();
  var cent = Math.floor(year / 100);
  var value = parseInt(input, 10);
  value = (value > 68 ? cent - 1 : cent) * 100 + value;
  return _defineProperty$1({}, YEAR, value);
});
addParseFlag('YYYY', match4, YEAR);
addParseFlag('M', match1to2, function (input) {
  return _defineProperty$1({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MM', match2, function (input) {
  return _defineProperty$1({}, MONTH, parseInt(input, 10) - 1);
});
addParseFlag('MMM', matchWord, matchWordCallback('monthsShort', MONTH));
addParseFlag('MMMM', matchWord, matchWordCallback('months', MONTH));
addParseFlag('D', match1to2, DAY);
addParseFlag('DD', match2, DAY);
addParseFlag(['H', 'h'], match1to2, HOUR);
addParseFlag(['HH', 'hh'], match2, HOUR);
addParseFlag('m', match1to2, MINUTE);
addParseFlag('mm', match2, MINUTE);
addParseFlag('s', match1to2, SECOND);
addParseFlag('ss', match2, SECOND);
addParseFlag('S', match1, function (input) {
  return _defineProperty$1({}, MILLISECOND, parseInt(input, 10) * 100);
});
addParseFlag('SS', match2, function (input) {
  return _defineProperty$1({}, MILLISECOND, parseInt(input, 10) * 10);
});
addParseFlag('SSS', match3, MILLISECOND);

function matchMeridiem(locale) {
  return locale.meridiemParse || /[ap]\.?m?\.?/i;
}

function defaultIsPM(input) {
  return "".concat(input).toLowerCase().charAt(0) === 'p';
}

addParseFlag(['A', 'a'], matchMeridiem, function (input, locale) {
  var isPM = typeof locale.isPM === 'function' ? locale.isPM(input) : defaultIsPM(input);
  return {
    isPM: isPM
  };
});

function offsetFromString(str) {
  var _ref8 = str.match(/([+-]|\d\d)/g) || ['-', '0', '0'],
      _ref9 = _slicedToArray$1(_ref8, 3),
      symbol = _ref9[0],
      hour = _ref9[1],
      minute = _ref9[2];

  var minutes = parseInt(hour, 10) * 60 + parseInt(minute, 10);

  if (minutes === 0) {
    return 0;
  }

  return symbol === '+' ? -minutes : +minutes;
}

addParseFlag(['Z', 'ZZ'], matchShortOffset, function (input) {
  return {
    offset: offsetFromString(input)
  };
});
addParseFlag('x', matchSigned, function (input) {
  return {
    date: new Date(parseInt(input, 10))
  };
});
addParseFlag('X', matchTimestamp, function (input) {
  return {
    date: new Date(parseFloat(input) * 1000)
  };
});
addParseFlag('d', match1, 'weekday');
addParseFlag('dd', matchWord, matchWordCallback('weekdaysMin', 'weekday'));
addParseFlag('ddd', matchWord, matchWordCallback('weekdaysShort', 'weekday'));
addParseFlag('dddd', matchWord, matchWordCallback('weekdays', 'weekday'));
addParseFlag('w', match1to2, 'week');
addParseFlag('ww', match2, 'week');

function to24hour(hour, isPM) {
  if (hour !== undefined && isPM !== undefined) {
    if (isPM) {
      if (hour < 12) {
        return hour + 12;
      }
    } else if (hour === 12) {
      return 0;
    }
  }

  return hour;
}

function getFullInputArray(input) {
  var backupDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var result = [0, 0, 1, 0, 0, 0, 0];
  var backupArr = [backupDate.getFullYear(), backupDate.getMonth(), backupDate.getDate(), backupDate.getHours(), backupDate.getMinutes(), backupDate.getSeconds(), backupDate.getMilliseconds()];
  var useBackup = true;

  for (var i = 0; i < 7; i++) {
    if (input[i] === undefined) {
      result[i] = useBackup ? backupArr[i] : result[i];
    } else {
      result[i] = input[i];
      useBackup = false;
    }
  }

  return result;
}

function createUTCDate() {
  var date;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var y = args[0];

  if (y < 100 && y >= 0) {
    args[0] += 400;
    date = new Date(Date.UTC.apply(Date, args)); // eslint-disable-next-line no-restricted-globals

    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  } else {
    date = new Date(Date.UTC.apply(Date, args));
  }

  return date;
}

function makeParser(dateString, format, locale) {
  var tokens = format.match(formattingTokens);

  if (!tokens) {
    throw new Error();
  }

  var length = tokens.length;
  var mark = {};

  for (var i = 0; i < length; i += 1) {
    var token = tokens[i];
    var parseTo = parseFlags[token];

    if (!parseTo) {
      var word = token.replace(/^\[|\]$/g, '');

      if (dateString.indexOf(word) === 0) {
        dateString = dateString.substr(word.length);
      } else {
        throw new Error('not match');
      }
    } else {
      var regex = typeof parseTo[0] === 'function' ? parseTo[0](locale) : parseTo[0];
      var parser = parseTo[1];
      var value = (regex.exec(dateString) || [])[0];
      var obj = parser(value, locale);
      mark = _objectSpread({}, mark, {}, obj);
      dateString = dateString.replace(value, '');
    }
  }

  return mark;
}

function parse(str, format) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  try {
    var _options$locale = options.locale,
        _locale = _options$locale === void 0 ? locale : _options$locale,
        _options$backupDate = options.backupDate,
        backupDate = _options$backupDate === void 0 ? new Date() : _options$backupDate;

    var parseResult = makeParser(str, format, _locale);
    var year = parseResult.year,
        month = parseResult.month,
        day = parseResult.day,
        hour = parseResult.hour,
        minute = parseResult.minute,
        second = parseResult.second,
        millisecond = parseResult.millisecond,
        isPM = parseResult.isPM,
        date = parseResult.date,
        offset = parseResult.offset,
        weekday = parseResult.weekday,
        week = parseResult.week;

    if (date) {
      return date;
    }

    var inputArray = [year, month, day, hour, minute, second, millisecond];
    inputArray[3] = to24hour(inputArray[3], isPM); // check week

    if (week !== undefined && month === undefined && day === undefined) {
      // new Date(year, 3) make sure in current year
      var firstDate = startOfWeekYear(year === undefined ? backupDate : new Date(year, 3), {
        firstDayOfWeek: _locale.firstDayOfWeek,
        firstWeekContainsDate: _locale.firstWeekContainsDate
      });
      return new Date(firstDate.getTime() + (week - 1) * 7 * 24 * 3600 * 1000);
    }

    var utcDate = createUTCDate.apply(void 0, _toConsumableArray(getFullInputArray(inputArray, backupDate)));
    var offsetMilliseconds = (offset === undefined ? utcDate.getTimezoneOffset() : offset) * 60 * 1000;
    var parsedDate = new Date(utcDate.getTime() + offsetMilliseconds); // check weekday

    if (weekday !== undefined && parsedDate.getDay() !== weekday) {
      return new Date(NaN);
    }

    return parsedDate;
  } catch (e) {
    return new Date(NaN);
  }
}

// new Date(10, 0, 1) The year from 0 to 99 will be incremented by 1900 automatically.
function createDate(y) {
  var M = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
  var date = new Date(y, M, d, h, m, s, ms);

  if (y < 100 && y >= 0) {
    date.setFullYear(y);
  }

  return date;
}
function isValidDate$1(date) {
  return date instanceof Date && !isNaN(date);
}
function isValidRangeDate(date) {
  return Array.isArray(date) && date.length === 2 && date.every(isValidDate$1) && date[0] <= date[1];
}
function isValidDates(dates) {
  return Array.isArray(dates) && dates.every(isValidDate$1);
}
function getValidDate(value) {
  var date = new Date(value);

  if (isValidDate$1(date)) {
    return date;
  }

  for (var _len = arguments.length, backup = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    backup[_key - 1] = arguments[_key];
  }

  if (backup.length) {
    return getValidDate.apply(void 0, backup);
  }

  return new Date();
}
function assignTime(target, source) {
  var date = new Date(target);
  var time = new Date(source);
  date.setHours(time.getHours(), time.getMinutes(), time.getSeconds());
  return date;
}

/**
 * chunk the array
 * @param {Array} arr
 * @param {Number} size
 */
function chunk(arr, size) {
  if (!Array.isArray(arr)) {
    return [];
  }

  var result = [];
  var len = arr.length;
  var i = 0;
  size = size || len;

  while (i < len) {
    result.push(arr.slice(i, i += size));
  }

  return result;
}
/**
 * isObject
 * @param {*} obj
 * @returns {Boolean}
 */

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * pick object
 * @param {Object} obj
 * @param {Array|String} props
 */

function pick(obj, props) {
  if (!isObject(obj)) return {};

  if (!Array.isArray(props)) {
    props = [props];
  }

  var res = {};
  props.forEach(function (prop) {
    if (prop in obj) {
      res[prop] = obj[prop];
    }
  });
  return res;
}
/**
 * deep merge two object without merging array
 * @param {object} target
 * @param {object} source
 */

function mergeDeep(target, source) {
  if (!isObject(target)) {
    return {};
  }

  var result = target;

  if (isObject(source)) {
    Object.keys(source).forEach(function (key) {
      var value = source[key];

      if (isObject(value) && isObject(target[key])) {
        value = mergeDeep(target[key], value);
      }

      result = _objectSpread2({}, result, _defineProperty({}, key, value));
    });
  }

  return result;
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var en = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  firstDayOfWeek: 0,
  firstWeekContainsDate: 1
};
var _default = locale;
exports["default"] = _default;
module.exports = exports.default;
});

var en$1 = unwrapExports(en);

var lang = {
  formatLocale: en$1,
  yearFormat: 'YYYY',
  monthFormat: 'MMM',
  monthBeforeYear: true
};

var defaultLocale = 'en';
var locales = {};
locales[defaultLocale] = lang;
function locale$1(name, object, isLocal) {
  if (typeof name !== 'string') return locales[defaultLocale];
  var l = defaultLocale;

  if (locales[name]) {
    l = name;
  }

  if (object) {
    locales[name] = object;
    l = name;
  }

  if (!isLocal) {
    defaultLocale = l;
  }

  return locales[name] || locales[defaultLocale];
}
/**
 * get locale object
 * @param {string} name lang
 */

function getLocale(name) {
  return locale$1(name, null, true);
}
/**
 * get locale field value
 * @param {string} field field eg: 'formatLocale.shortMonth'
 * @param {object} lang locale object
 */

function getLocaleFieldValue(field, lang) {
  var arr = (field || '').split('.');
  var current = lang || getLocale();
  var value;

  for (var i = 0, len = arr.length; i < len; i++) {
    var prop = arr[i];
    value = current[prop];

    if (i === len - 1) {
      return value;
    }

    if (!value) {
      return null;
    }

    current = value;
  }

  return null;
}

/* istanbul ignore file */
function rafThrottle(fn) {
  var isRunning = false;
  return function fnBinfRaf() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isRunning) return;
    isRunning = true;
    requestAnimationFrame(function () {
      isRunning = false;
      fn.apply(_this, args);
    });
  };
}

/**
 * get the hidden element width, height
 * @param {HTMLElement} element dom
 */
function getPopupElementSize(element) {
  var originalDisplay = element.style.display;
  var originalVisibility = element.style.visibility;
  element.style.display = 'block';
  element.style.visibility = 'hidden';
  var styles = window.getComputedStyle(element);
  var width = element.offsetWidth + parseInt(styles.marginLeft, 10) + parseInt(styles.marginRight, 10);
  var height = element.offsetHeight + parseInt(styles.marginTop, 10) + parseInt(styles.marginBottom, 10);
  element.style.display = originalDisplay;
  element.style.visibility = originalVisibility;
  return {
    width: width,
    height: height
  };
}
/**
 * get the popup position
 * @param {HTMLElement} el relative element
 * @param {Number} targetWidth target element's width
 * @param {Number} targetHeight target element's height
 * @param {Boolean} fixed
 */

function getRelativePosition(el, targetWidth, targetHeight, fixed) {
  var left = 0;
  var top = 0;
  var offsetX = 0;
  var offsetY = 0;
  var relativeRect = el.getBoundingClientRect();
  var dw = document.documentElement.clientWidth;
  var dh = document.documentElement.clientHeight;

  if (fixed) {
    offsetX = window.pageXOffset + relativeRect.left;
    offsetY = window.pageYOffset + relativeRect.top;
  }

  if (dw - relativeRect.left < targetWidth && relativeRect.right < targetWidth) {
    left = offsetX - relativeRect.left + 1;
  } else if (relativeRect.left + relativeRect.width / 2 <= dw / 2) {
    left = offsetX;
  } else {
    left = offsetX + relativeRect.width - targetWidth;
  }

  if (relativeRect.top <= targetHeight && dh - relativeRect.bottom <= targetHeight) {
    top = offsetY + dh - relativeRect.top - targetHeight;
  } else if (relativeRect.top + relativeRect.height / 2 <= dh / 2) {
    top = offsetY + relativeRect.height;
  } else {
    top = offsetY - targetHeight;
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px")
  };
}
function getScrollParent(node) {
  var until = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.body;

  if (!node || node === until) {
    return null;
  }

  var style = function style(value, prop) {
    return getComputedStyle(value, null).getPropertyValue(prop);
  };

  var regex = /(auto|scroll)/;
  var scroll = regex.test(style(node, 'overflow') + style(node, 'overflow-y') + style(node, 'overflow-x'));
  return scroll ? node : getScrollParent(node.parentNode, until);
}

var Popup = {
  name: 'Popup',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      top: '',
      left: ''
    };
  },
  watch: {
    visible: {
      immediate: true,
      handler: function handler(val) {
        var _this = this;

        this.$nextTick(function () {
          if (val) {
            _this.displayPopup();
          }
        });
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.inline) {
      return;
    }

    if (this.appendToBody) {
      document.body.appendChild(this.$el);
    }

    this._clickoutEvent = 'ontouchend' in document ? 'touchstart' : 'mousedown';
    document.addEventListener(this._clickoutEvent, this.handleClickOutside); // change the popup position when resize or scroll

    var relativeElement = this.$parent.$el;
    this._displayPopup = rafThrottle(function () {
      return _this2.displayPopup();
    });
    this._scrollParent = getScrollParent(relativeElement) || window;

    this._scrollParent.addEventListener('scroll', this._displayPopup);

    window.addEventListener('resize', this._displayPopup);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.inline) {
      return;
    }

    if (this.appendToBody && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }

    document.removeEventListener(this._clickoutEvent, this.handleClickOutside);

    this._scrollParent.removeEventListener('scroll', this._displayPopup);

    window.removeEventListener('resize', this._displayPopup);
  },
  methods: {
    handleClickOutside: function handleClickOutside(evt) {
      if (!this.visible) return;
      var target = evt.target;
      var el = this.$el;

      if (el && !el.contains(target)) {
        this.$emit('clickoutside', evt);
      }
    },
    displayPopup: function displayPopup() {
      if (this.inline || !this.visible) return;
      var popup = this.$el;
      var relativeElement = this.$parent.$el;
      var appendToBody = this.appendToBody;

      if (!this._popupRect) {
        this._popupRect = getPopupElementSize(popup);
      }

      var _this$_popupRect = this._popupRect,
          width = _this$_popupRect.width,
          height = _this$_popupRect.height;

      var _getRelativePosition = getRelativePosition(relativeElement, width, height, appendToBody),
          left = _getRelativePosition.left,
          top = _getRelativePosition.top;

      this.left = left;
      this.top = top;
    }
  },
  render: function render() {
    var h = arguments[0];
    var prefixClass = this.prefixClass;

    if (this.inline) {
      return h("div", {
        "class": "".concat(prefixClass, "-datepicker-main")
      }, [this.$slots.default]);
    }

    return h("transition", {
      "attrs": {
        "name": "".concat(prefixClass, "-zoom-in-down")
      }
    }, [this.visible && h("div", {
      "class": "".concat(prefixClass, "-datepicker-main ").concat(prefixClass, "-datepicker-popup"),
      "style": {
        top: this.top,
        left: this.left,
        position: 'absolute'
      }
    }, [this.$slots.default])]);
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */

/* template */
var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 1024 1024"
    }
  }, [_c('path', {
    attrs: {
      "d": "M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
    }
  })]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var IconCalendar = normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, {}, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

/* script */

/* template */
var __vue_render__$1 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 1024 1024"
    }
  }, [_c('path', {
    attrs: {
      "d": "M810.005333 274.005333l-237.994667 237.994667 237.994667 237.994667-60.010667 60.010667-237.994667-237.994667-237.994667 237.994667-60.010667-60.010667 237.994667-237.994667-237.994667-237.994667 60.010667-60.010667 237.994667 237.994667 237.994667-237.994667z"
    }
  })]);
};

var __vue_staticRenderFns__$1 = [];
/* style */

var __vue_inject_styles__$1 = undefined;
/* scoped */

var __vue_scope_id__$1 = undefined;
/* module identifier */

var __vue_module_identifier__$1 = undefined;
/* functional template */

var __vue_is_functional_template__$1 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var IconClose = normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, {}, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

//
var script = {
  name: 'TableDate',
  inject: {
    translateFn: {
      default: function _default() {
        return getLocaleFieldValue;
      }
    },
    getWeek: {
      default: function _default() {
        return getWeek;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    calendarYear: {
      type: Number,
      default: function _default() {
        return new Date().getFullYear();
      }
    },
    calendarMonth: {
      type: Number,
      default: function _default() {
        return new Date().getMonth();
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: false
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    getRowClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    firstDayOfWeek: function firstDayOfWeek() {
      return this.translateFn('formatLocale.firstDayOfWeek') || 0;
    },
    days: function days() {
      var days = this.translateFn('days') || this.translateFn('formatLocale.weekdaysMin');
      return days.concat(days).slice(this.firstDayOfWeek, this.firstDayOfWeek + 7);
    },
    dates: function dates() {
      var arr = [];
      var firstDayOfWeek = this.firstDayOfWeek;
      var year = this.calendarYear;
      var month = this.calendarMonth; // change to the last day of the last month

      var calendar = createDate(year, month, 0);
      var lastDayInLastMonth = calendar.getDate(); // getDay() 0 is Sunday, 1 is Monday

      var firstDayInLastMonth = lastDayInLastMonth - (calendar.getDay() + 7 - firstDayOfWeek) % 7;

      for (var i = firstDayInLastMonth; i <= lastDayInLastMonth; i++) {
        var day = i - lastDayInLastMonth;
        arr.push({
          day: day,
          text: i
        });
      } // change to the last day of the current month


      calendar.setMonth(month + 1, 0);
      var lastDayInCurrentMonth = calendar.getDate();

      for (var _i = 1; _i <= lastDayInCurrentMonth; _i++) {
        arr.push({
          day: _i,
          text: _i
        });
      }

      var lastMonthLength = lastDayInLastMonth - firstDayInLastMonth + 1;
      var nextMonthLength = 6 * 7 - lastMonthLength - lastDayInCurrentMonth;

      for (var _i2 = 1; _i2 <= nextMonthLength; _i2++) {
        arr.push({
          day: lastDayInCurrentMonth + _i2,
          text: _i2
        });
      }

      return chunk(arr, 7);
    }
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return format(date, fmt, {
        locale: this.translateFn('formatLocale')
      });
    },
    handleCellClick: function handleCellClick(evt) {
      var target = evt.target;

      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      var day = target.getAttribute('data-day');

      if (day) {
        this.$emit('select', parseInt(day, 10));
      }
    },
    getCellTitle: function getCellTitle(day) {
      var year = this.calendarYear;
      var month = this.calendarMonth;
      var fmt = this.titleFormat;
      var date = createDate(year, month, day);
      return this.formatDate(date, fmt);
    },
    getWeekNumber: function getWeekNumber(day) {
      var year = this.calendarYear;
      var month = this.calendarMonth;
      var date = createDate(year, month, day);
      return this.getWeek(date, this.translateFn('formatLocale'));
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__$2 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-date"
  }, [_c('thead', [_c('tr', [_vm.showWeekNumber ? _c('th', {
    class: _vm.prefixClass + "-week-number-header"
  }) : _vm._e(), _vm._v(" "), _vm._l(_vm.days, function (day) {
    return _c('th', {
      key: day
    }, [_vm._v(_vm._s(day))]);
  })], 2)]), _vm._v(" "), _c('tbody', {
    on: {
      "click": _vm.handleCellClick
    }
  }, _vm._l(_vm.dates, function (row, i) {
    return _c('tr', {
      key: i,
      class: [_vm.prefixClass + "-date-row", _vm.getRowClasses(row)]
    }, [_vm.showWeekNumber ? _c('td', {
      class: _vm.prefixClass + "-week-number"
    }, [_vm._v("\n        " + _vm._s(_vm.getWeekNumber(row[0].day)) + "\n      ")]) : _vm._e(), _vm._v(" "), _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell.day),
        attrs: {
          "data-day": cell.day,
          "title": _vm.getCellTitle(cell.day)
        }
      }, [_c('div', [_vm._v(_vm._s(cell.text))])]);
    })], 2);
  }), 0)]);
};

var __vue_staticRenderFns__$2 = [];
/* style */

var __vue_inject_styles__$2 = undefined;
/* scoped */

var __vue_scope_id__$2 = undefined;
/* module identifier */

var __vue_module_identifier__$2 = undefined;
/* functional template */

var __vue_is_functional_template__$2 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var TableDate = normalizeComponent({
  render: __vue_render__$2,
  staticRenderFns: __vue_staticRenderFns__$2
}, __vue_inject_styles__$2, __vue_script__, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

//
var script$1 = {
  name: 'TableMonth',
  inject: {
    translateFn: {
      default: function _default() {
        return getLocaleFieldValue;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    months: function months() {
      var monthsLocale = this.translateFn('months') || this.translateFn('formatLocale.monthsShort');
      var months = monthsLocale.map(function (text, month) {
        return {
          text: text,
          month: month
        };
      });
      return chunk(months, 3);
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      var month = target.getAttribute('data-month');

      if (month) {
        this.$emit('select', parseInt(month, 10));
      }
    }
  }
};

/* script */
var __vue_script__$1 = script$1;
/* template */

var __vue_render__$3 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-month",
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l(_vm.months, function (row, i) {
    return _c('tr', {
      key: i
    }, _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell.month),
        attrs: {
          "data-month": cell.month
        }
      }, [_c('div', [_vm._v(_vm._s(cell.text))])]);
    }), 0);
  }), 0);
};

var __vue_staticRenderFns__$3 = [];
/* style */

var __vue_inject_styles__$3 = undefined;
/* scoped */

var __vue_scope_id__$3 = undefined;
/* module identifier */

var __vue_module_identifier__$3 = undefined;
/* functional template */

var __vue_is_functional_template__$3 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var TableMonth = normalizeComponent({
  render: __vue_render__$3,
  staticRenderFns: __vue_staticRenderFns__$3
}, __vue_inject_styles__$3, __vue_script__$1, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

//
var script$2 = {
  name: 'TableYear',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    decade: Number,
    getCellClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    years: function years() {
      var firstYear = this.decade;
      var years = [];

      for (var i = 0; i < 10; i++) {
        years.push(firstYear + i);
      }

      return chunk(years, 2);
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      var target = evt.target;

      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      var year = target.getAttribute('data-year');

      if (year) {
        this.$emit('select', parseInt(year, 10));
      }
    }
  }
};

/* script */
var __vue_script__$2 = script$2;
/* template */

var __vue_render__$4 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('table', {
    class: _vm.prefixClass + "-table " + _vm.prefixClass + "-table-year",
    on: {
      "click": _vm.handleClick
    }
  }, _vm._l(_vm.years, function (row, i) {
    return _c('tr', {
      key: i
    }, _vm._l(row, function (cell, j) {
      return _c('td', {
        key: j,
        staticClass: "cell",
        class: _vm.getCellClasses(cell),
        attrs: {
          "data-year": cell
        }
      }, [_c('div', [_vm._v(_vm._s(cell))])]);
    }), 0);
  }), 0);
};

var __vue_staticRenderFns__$4 = [];
/* style */

var __vue_inject_styles__$4 = undefined;
/* scoped */

var __vue_scope_id__$4 = undefined;
/* module identifier */

var __vue_module_identifier__$4 = undefined;
/* functional template */

var __vue_is_functional_template__$4 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var TableYear = normalizeComponent({
  render: __vue_render__$4,
  staticRenderFns: __vue_staticRenderFns__$4
}, __vue_inject_styles__$4, __vue_script__$2, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

var emitter = {
  methods: {
    dispatch: function dispatch(componentName) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }

      if (parent) {
        var _parent;

        for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          params[_key - 1] = arguments[_key];
        }

        (_parent = parent).$emit.apply(_parent, params);
      }
    }
  }
};

//
var script$3 = {
  name: 'CalendarPanel',
  components: {
    TableDate: TableDate,
    TableMonth: TableMonth,
    TableYear: TableYear
  },
  mixins: [emitter],
  inject: {
    translateFn: {
      default: function _default() {
        return getLocaleFieldValue;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    defaultPanel: {
      type: String
    },
    disabledDate: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    type: {
      type: String,
      default: 'date'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    showWeekNumber: {
      type: Boolean,
      default: undefined
    },
    titleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    calendar: Date,
    // update date when select year or month
    partialUpdate: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    var panels = ['date', 'month', 'year'];
    var index = Math.max(panels.indexOf(this.type), panels.indexOf(this.defaultPanel));
    var panel = index !== -1 ? panels[index] : 'date';
    return {
      panel: panel,
      innerCalendar: null
    };
  },
  computed: {
    innerValue: function innerValue() {
      var value = Array.isArray(this.value) ? this.value : [this.value];
      var map = {
        year: startOfYear,
        month: startOfMonth,
        date: startOfDay
      };
      var start = map[this.type] || map.date;
      return value.filter(isValidDate$1).map(function (v) {
        return start(v);
      });
    },
    calendarYear: function calendarYear() {
      return this.innerCalendar.getFullYear();
    },
    calendarMonth: function calendarMonth() {
      return this.innerCalendar.getMonth();
    },
    calendarDecade: function calendarDecade() {
      return Math.floor(this.calendarYear / 10) * 10;
    },
    showIconDoubleArrow: function showIconDoubleArrow() {
      return this.panel === 'date' || this.panel === 'month' || this.panel === 'year';
    },
    showIconArrow: function showIconArrow() {
      return this.panel === 'date';
    },
    dateHeader: function dateHeader() {
      var monthBeforeYear = this.translateFn('monthBeforeYear');
      var yearFormat = this.translateFn('yearFormat');
      var monthFormat = this.translateFn('monthFormat') || 'MMM';
      var yearLabel = {
        panel: 'year',
        label: this.formatDate(this.innerCalendar, yearFormat)
      };
      var monthLabel = {
        panel: 'month',
        label: this.formatDate(this.innerCalendar, monthFormat)
      };
      return monthBeforeYear ? [monthLabel, yearLabel] : [yearLabel, monthLabel];
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: 'initCalendar'
    },
    calendar: {
      handler: 'initCalendar'
    },
    defaultValue: {
      handler: 'initCalendar'
    }
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return format(date, fmt, {
        locale: this.translateFn('formatLocale')
      });
    },
    initCalendar: function initCalendar() {
      var calendarDate = this.calendar;

      if (!isValidDate$1(calendarDate)) {
        var length = this.innerValue.length;
        calendarDate = getValidDate(length > 0 ? this.innerValue[length - 1] : this.defaultValue);
      }

      this.innerCalendar = calendarDate;
    },
    isDisabled: function isDisabled(date) {
      return this.disabledDate(new Date(date), this.innerValue);
    },
    emitDate: function emitDate(date, type) {
      if (!this.isDisabled(date)) {
        this.$emit('select', date, type, this.innerValue); // someone need get the first selected date to set range value. (#429)

        this.dispatch('DatePicker', 'pick', date, type);
      }
    },
    updateCalendar: function updateCalendar(date, type) {
      var oldValue = new Date(this.innerCalendar);
      this.innerCalendar = date;
      this.$emit('update:calendar', date);
      this.dispatch('DatePicker', 'calendar-change', date, oldValue, type);
    },
    handelPanelChange: function handelPanelChange(panel) {
      this.panel = panel;
    },
    handleIconLeftClick: function handleIconLeftClick() {
      var nextCalendar = subMonths(this.innerCalendar, 1);
      this.updateCalendar(nextCalendar, 'last-month');
    },
    handleIconRightClick: function handleIconRightClick() {
      var nextCalendar = addMonths(this.innerCalendar, 1);
      this.updateCalendar(nextCalendar, 'next-month');
    },
    handleIconDoubleLeftClick: function handleIconDoubleLeftClick() {
      var nextCalendar = subYears(this.innerCalendar, this.panel === 'year' ? 10 : 1);
      this.updateCalendar(nextCalendar, this.panel === 'year' ? 'last-decade' : 'last-year');
    },
    handleIconDoubleRightClick: function handleIconDoubleRightClick() {
      var nextCalendar = addYears(this.innerCalendar, this.panel === 'year' ? 10 : 1);
      this.updateCalendar(nextCalendar, this.panel === 'year' ? 'next-decade' : 'next-year');
    },
    handleSelectYear: function handleSelectYear(year) {
      if (this.type === 'year') {
        var date = this.getCellDate(year, 'year');
        this.emitDate(date, 'year');
      } else {
        var nextCalendar = setYear(this.innerCalendar, year);
        this.updateCalendar(nextCalendar, 'year');
        this.handelPanelChange('month');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date = setYear(this.innerValue[0], year);

          this.emitDate(_date, 'year');
        }
      }
    },
    handleSelectMonth: function handleSelectMonth(month) {
      if (this.type === 'month') {
        var date = this.getCellDate(month, 'month');
        this.emitDate(date, 'month');
      } else {
        var nextCalendar = setMonth(this.innerCalendar, month);
        this.updateCalendar(nextCalendar, 'month');
        this.handelPanelChange('date');

        if (this.partialUpdate && this.innerValue.length === 1) {
          var _date2 = setMonth(setYear(this.innerValue[0], this.calendarYear), month);

          this.emitDate(_date2, 'month');
        }
      }
    },
    handleSelectDate: function handleSelectDate(day) {
      var date = this.getCellDate(day, 'date');
      this.emitDate(date, this.type === 'week' ? 'week' : 'date');
    },
    getCellDate: function getCellDate(value, type) {
      if (type === 'year') {
        return createDate(value, 0);
      }

      if (type === 'month') {
        return createDate(this.calendarYear, value);
      }

      return createDate(this.calendarYear, this.calendarMonth, value);
    },
    getDateClasses: function getDateClasses(day) {
      var cellDate = this.getCellDate(day, 'date');
      var notCurrentMonth = cellDate.getMonth() !== this.calendarMonth;
      var classes = [];

      if (cellDate.getTime() === new Date().setHours(0, 0, 0, 0)) {
        classes.push('today');
      }

      if (notCurrentMonth) {
        classes.push('not-current-month');
      }

      var state = this.getStateClass(cellDate);

      if (!(state === 'active' && notCurrentMonth)) {
        classes.push(state);
      }

      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getMonthClasses: function getMonthClasses(month) {
      if (this.type !== 'month') {
        return this.calendarMonth === month ? 'active' : '';
      }

      var classes = [];
      var cellDate = this.getCellDate(month, 'month');
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getYearClasses: function getYearClasses(year) {
      if (this.type !== 'year') {
        return this.calendarYear === year ? 'active' : '';
      }

      var classes = [];
      var cellDate = this.getCellDate(year, 'year');
      classes.push(this.getStateClass(cellDate));
      return classes.concat(this.getClasses(cellDate, this.innerValue, classes.join(' ')));
    },
    getStateClass: function getStateClass(cellDate) {
      if (this.isDisabled(cellDate)) {
        return 'disabled';
      }

      if (this.innerValue.some(function (v) {
        return v.getTime() === cellDate.getTime();
      })) {
        return 'active';
      }

      return '';
    },
    getWeekState: function getWeekState(row) {
      if (this.type !== 'week') return '';
      var start = this.getCellDate(row[0].day, 'date').getTime();
      var end = this.getCellDate(row[6].day, 'date').getTime();
      var active = this.innerValue.some(function (v) {
        var time = v.getTime();
        return time >= start && time <= end;
      });
      return active ? "".concat(this.prefixClass, "-active-week") : '';
    }
  }
};

/* script */
var __vue_script__$3 = script$3;
/* template */

var __vue_render__$5 = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: [_vm.prefixClass + "-calendar", _vm.prefixClass + "-calendar-panel-" + _vm.panel, (_obj = {}, _obj[_vm.prefixClass + "-calendar-week-mode"] = _vm.type === 'week', _obj)]
  }, [_c('div', {
    class: _vm.prefixClass + "-calendar-header"
  }, [_c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showIconDoubleArrow,
      expression: "showIconDoubleArrow"
    }],
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-icon-double-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleIconDoubleLeftClick
    }
  }, [_c('i', {
    class: _vm.prefixClass + "-icon-double-left"
  })]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showIconArrow,
      expression: "showIconArrow"
    }],
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-icon-left",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleIconLeftClick
    }
  }, [_c('i', {
    class: _vm.prefixClass + "-icon-left"
  })]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showIconDoubleArrow,
      expression: "showIconDoubleArrow"
    }],
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-icon-double-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleIconDoubleRightClick
    }
  }, [_c('i', {
    class: _vm.prefixClass + "-icon-double-right"
  })]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showIconArrow,
      expression: "showIconArrow"
    }],
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-icon-right",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleIconRightClick
    }
  }, [_c('i', {
    class: _vm.prefixClass + "-icon-right"
  })]), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-header-label"
  }, [_vm.panel === 'year' ? [_c('span', [_vm._v(_vm._s(_vm.calendarDecade))]), _vm._v(" "), _c('span', {
    class: _vm.prefixClass + "-calendar-decade-separator"
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.calendarDecade + 9))])] : _vm.panel === 'month' ? _c('button', {
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function click($event) {
        return _vm.handelPanelChange('year');
      }
    }
  }, [_vm._v("\n        " + _vm._s(_vm.calendarYear) + "\n      ")]) : _vm.panel === 'date' ? _vm._l(_vm.dateHeader, function (item) {
    return _c('button', {
      key: item.panel,
      class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-current-" + item.panel,
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.handelPanelChange(item.panel);
        }
      }
    }, [_vm._v("\n          " + _vm._s(item.label) + "\n        ")]);
  }) : _vm._e()], 2)]), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-calendar-content"
  }, [_c('table-year', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.panel === 'year',
      expression: "panel === 'year'"
    }],
    attrs: {
      "decade": _vm.calendarDecade,
      "get-cell-classes": _vm.getYearClasses
    },
    on: {
      "select": _vm.handleSelectYear
    }
  }), _vm._v(" "), _vm.type !== 'year' ? _c('table-month', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.panel === 'month',
      expression: "panel === 'month'"
    }],
    attrs: {
      "get-cell-classes": _vm.getMonthClasses
    },
    on: {
      "select": _vm.handleSelectMonth
    }
  }) : _vm._e(), _vm._v(" "), _vm.type !== 'year' && _vm.type !== 'month' ? _c('table-date', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.panel === 'date',
      expression: "panel === 'date'"
    }],
    attrs: {
      "calendar-year": _vm.calendarYear,
      "calendar-month": _vm.calendarMonth,
      "title-format": _vm.titleFormat,
      "show-week-number": typeof _vm.showWeekNumber === 'boolean' ? _vm.showWeekNumber : _vm.type === 'week',
      "get-cell-classes": _vm.getDateClasses,
      "get-row-classes": _vm.getWeekState
    },
    on: {
      "select": _vm.handleSelectDate
    }
  }) : _vm._e()], 1)]);
};

var __vue_staticRenderFns__$5 = [];
/* style */

var __vue_inject_styles__$5 = undefined;
/* scoped */

var __vue_scope_id__$5 = undefined;
/* module identifier */

var __vue_module_identifier__$5 = undefined;
/* functional template */

var __vue_is_functional_template__$5 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var CalendarPanel = normalizeComponent({
  render: __vue_render__$5,
  staticRenderFns: __vue_staticRenderFns__$5
}, __vue_inject_styles__$5, __vue_script__$3, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

var CalendarRange = {
  name: 'CalendarRange',
  components: {
    CalendarPanel: CalendarPanel
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, CalendarPanel.props),
  data: function data() {
    return {
      innerValue: [],
      calendars: []
    };
  },
  computed: {
    // Minimum difference between start and end calendars
    calendarMinDiff: function calendarMinDiff() {
      var map = {
        date: 1,
        // type:date  min 1 month
        month: 1 * 12,
        // type:month min 1 year
        year: 10 * 12 // type:year  min 10 year

      };
      return map[this.type] || map.date;
    },
    calendarMaxDiff: function calendarMaxDiff() {
      return Infinity;
    },
    defaultValues: function defaultValues() {
      return Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        var _this = this;

        this.innerValue = isValidRangeDate(this.value) ? this.value : [new Date(NaN), new Date(NaN)];
        this.calendars = this.innerValue.map(function (v, i) {
          return getValidDate(v, _this.defaultValues[i]);
        });
        this.validateCalendars(1);
      }
    }
  },
  methods: {
    handleSelect: function handleSelect(date, type) {
      var _this$innerValue = _slicedToArray(this.innerValue, 2),
          startValue = _this$innerValue[0],
          endValue = _this$innerValue[1];

      if (isValidDate$1(startValue) && !isValidDate$1(endValue)) {
        if (startValue.getTime() > date.getTime()) {
          this.innerValue = [date, startValue];
        } else {
          this.innerValue = [startValue, date];
        }

        this.emitDate(this.innerValue, type);
      } else {
        this.innerValue = [date, new Date(NaN)];
      }
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    updateStartCalendar: function updateStartCalendar(value) {
      this.calendars.splice(0, 1, value);
      this.validateCalendars(1);
    },
    updateEndCalendar: function updateEndCalendar(value) {
      this.calendars.splice(1, 1, value);
      this.validateCalendars(0);
    },
    validateCalendars: function validateCalendars(index) {
      var gap = this.getCalendarGap();

      if (gap) {
        var calendar = this.calendars[index];

        if (index === 0) {
          calendar = subMonths(calendar, gap);
        } else {
          calendar = addMonths(calendar, gap);
        }

        this.calendars.splice(index, 1, calendar);
      }
    },
    getCalendarGap: function getCalendarGap() {
      var diff = differenceInCalendarMonths(this.calendars[1], this.calendars[0]);
      var min = this.calendarMinDiff;
      var max = this.calendarMaxDiff;

      if (diff < min) {
        return min - diff;
      }

      if (diff > max) {
        return max - diff;
      }

      return 0;
    },
    getRangeClasses: function getRangeClasses(cellDate, currentDates, classnames) {
      var classes = [].concat(this.getClasses(cellDate, currentDates, classnames));

      if (!/disabled|active|not-current-month/.test(classnames) && currentDates.length === 2 && cellDate.getTime() > currentDates[0].getTime() && cellDate.getTime() < currentDates[1].getTime()) {
        classes.push('in-range');
      }

      return classes;
    }
  },
  render: function render() {
    var _this2 = this;

    var h = arguments[0];
    var calendarRange = this.calendars.map(function (calendar, index) {
      var props = _objectSpread2({}, _this2.$props, {
        calendar: calendar,
        value: _this2.innerValue,
        defaultValue: _this2.defaultValues[index],
        getClasses: _this2.getRangeClasses,
        // don't update when range is true
        partialUpdate: false
      });

      var on = {
        select: _this2.handleSelect,
        'update:calendar': index === 0 ? _this2.updateStartCalendar : _this2.updateEndCalendar
      };
      return h("calendar-panel", {
        "props": _objectSpread2({}, props),
        "on": _objectSpread2({}, on)
      });
    });
    var prefixClass = this.prefixClass;
    return h("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [calendarRange]);
  }
};

var scrollBarWidth;
function getScrollbarWidth () {
  if (typeof window === 'undefined') return 0;
  if (scrollBarWidth !== undefined) return scrollBarWidth;
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.width = '100px';
  outer.style.position = 'absolute';
  outer.style.top = '-9999px';
  document.body.appendChild(outer);
  var inner = document.createElement('div');
  inner.style.width = '100%';
  outer.appendChild(inner);
  scrollBarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollBarWidth;
}

//
var script$4 = {
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  data: function data() {
    return {
      scrollbarWidth: 0,
      thumbTop: '',
      thumbHeight: ''
    };
  },
  created: function created() {
    this.scrollbarWidth = getScrollbarWidth();
    document.addEventListener('mouseup', this.handleDragend);
  },
  beforeDestroy: function beforeDestroy() {
    document.addEventListener('mouseup', this.handleDragend);
  },
  mounted: function mounted() {
    this.$nextTick(this.getThumbSize);
  },
  methods: {
    getThumbSize: function getThumbSize() {
      var wrap = this.$refs.wrap;
      if (!wrap) return;
      var heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      this.thumbHeight = heightPercentage < 100 ? "".concat(heightPercentage, "%") : '';
    },
    handleScroll: function handleScroll(evt) {
      var el = evt.currentTarget;
      var scrollHeight = el.scrollHeight,
          scrollTop = el.scrollTop;
      this.thumbTop = "".concat(scrollTop * 100 / scrollHeight, "%");
    },
    handleDragstart: function handleDragstart(evt) {
      evt.stopImmediatePropagation();
      this._draggable = true;
      var offsetTop = this.$refs.thumb.offsetTop;
      this._prevY = evt.clientY - offsetTop;
      document.addEventListener('mousemove', this.handleDraging);
    },
    handleDraging: function handleDraging(evt) {
      if (!this._draggable) return;
      var clientY = evt.clientY;
      var wrap = this.$refs.wrap;
      var scrollHeight = wrap.scrollHeight,
          clientHeight = wrap.clientHeight;
      var offsetY = clientY - this._prevY;
      var top = offsetY * scrollHeight / clientHeight;
      wrap.scrollTop = top;
    },
    handleDragend: function handleDragend() {
      if (this._draggable) {
        this._draggable = false;
        document.removeEventListener('mousemove', this.handleDraging);
      }
    }
  }
};

/* script */
var __vue_script__$4 = script$4;
/* template */

var __vue_render__$6 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-scrollbar",
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, [_c('div', {
    ref: "wrap",
    class: _vm.prefixClass + "-scrollbar-wrap",
    style: {
      marginRight: "-" + _vm.scrollbarWidth + "px"
    },
    on: {
      "scroll": _vm.handleScroll
    }
  }, [_vm._t("default")], 2), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-scrollbar-track"
  }, [_c('div', {
    ref: "thumb",
    class: _vm.prefixClass + "-scrollbar-thumb",
    style: {
      height: _vm.thumbHeight,
      top: _vm.thumbTop
    },
    on: {
      "mousedown": _vm.handleDragstart
    }
  })])]);
};

var __vue_staticRenderFns__$6 = [];
/* style */

var __vue_inject_styles__$6 = undefined;
/* scoped */

var __vue_scope_id__$6 = undefined;
/* module identifier */

var __vue_module_identifier__$6 = undefined;
/* functional template */

var __vue_is_functional_template__$6 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var ScrollbarVertical = normalizeComponent({
  render: __vue_render__$6,
  staticRenderFns: __vue_staticRenderFns__$6
}, __vue_inject_styles__$6, __vue_script__$4, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

//

var padNumber = function padNumber(value) {
  value = parseInt(value, 10);
  return value < 10 ? "0".concat(value) : "".concat(value);
};

var generateOptions = function generateOptions(length, step, options) {
  if (Array.isArray(options)) {
    return options.filter(function (v) {
      return v >= 0 && v < length;
    });
  }

  if (step <= 0) {
    step = 1;
  }

  var arr = [];

  for (var i = 0; i < length; i += step) {
    arr.push(i);
  }

  return arr;
};

var scrollTo = function scrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  // jump to target if duration zero
  if (duration <= 0) {
    requestAnimationFrame(function () {
      element.scrollTop = to;
    });
    return;
  }

  var difference = to - element.scrollTop;
  var tick = difference / duration * 10;
  requestAnimationFrame(function () {
    var scrollTop = element.scrollTop + tick;

    if (scrollTop >= to) {
      element.scrollTop = to;
      return;
    }

    element.scrollTop = scrollTop;
    scrollTo(element, to, duration - 10);
  });
};

var script$5 = {
  name: 'ListColumns',
  components: {
    ScrollbarVertical: ScrollbarVertical
  },
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    scrollDuration: {
      type: Number,
      default: 100
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    showHour: {
      type: Boolean,
      default: true
    },
    showMinute: {
      type: Boolean,
      default: true
    },
    showSecond: {
      type: Boolean,
      default: true
    },
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    use12h: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    columns: function columns() {
      var cols = [];
      if (this.showHour) cols.push({
        type: 'hour',
        list: this.getHoursList()
      });
      if (this.showMinute) cols.push({
        type: 'minute',
        list: this.getMinutesList()
      });
      if (this.showSecond) cols.push({
        type: 'second',
        list: this.getSecondsList()
      });
      if (this.use12h) cols.push({
        type: 'ampm',
        list: this.getAMPMList()
      });
      return cols.filter(function (v) {
        return v.list.length > 0;
      });
    }
  },
  watch: {
    date: {
      handler: function handler() {
        var _this = this;

        this.$nextTick(function () {
          _this.scrollToSelected(_this.scrollDuration);
        });
      }
    }
  },
  mounted: function mounted() {
    this.scrollToSelected(0);
  },
  methods: {
    getHoursList: function getHoursList() {
      var _this2 = this;

      return generateOptions(this.use12h ? 12 : 24, this.hourStep, this.hourOptions).map(function (num) {
        var date = new Date(_this2.date);
        var text = padNumber(num);

        if (_this2.use12h) {
          if (num === 0) {
            text = '12';
          }

          if (date.getHours() >= 12) {
            num += 12;
          }
        }

        var value = date.setHours(num);
        return {
          value: value,
          text: text
        };
      });
    },
    getMinutesList: function getMinutesList() {
      var _this3 = this;

      return generateOptions(60, this.minuteStep, this.minuteOptions).map(function (num) {
        var value = new Date(_this3.date).setMinutes(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getSecondsList: function getSecondsList() {
      var _this4 = this;

      return generateOptions(60, this.secondStep, this.secondOptions).map(function (num) {
        var value = new Date(_this4.date).setSeconds(num);
        return {
          value: value,
          text: padNumber(num)
        };
      });
    },
    getAMPMList: function getAMPMList() {
      var _this5 = this;

      return ['AM', 'PM'].map(function (text, i) {
        var date = new Date(_this5.date);
        var value = date.setHours(date.getHours() % 12 + i * 12);
        return {
          text: text,
          value: value
        };
      });
    },
    scrollToSelected: function scrollToSelected(duration) {
      var elements = this.$el.querySelectorAll('.active');

      for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var scrollElement = getScrollParent(element, this.$el);

        if (scrollElement) {
          var to = element.offsetTop;
          scrollTo(scrollElement, to, duration);
        }
      }
    },
    handleSelect: function handleSelect(evt) {
      var target = evt.target,
          currentTarget = evt.currentTarget;
      if (target.tagName.toUpperCase() !== 'LI') return;
      var type = currentTarget.getAttribute('data-type');
      var colIndex = parseInt(currentTarget.getAttribute('data-index'), 10);
      var cellIndex = parseInt(target.getAttribute('data-index'), 10);
      var value = this.columns[colIndex].list[cellIndex].value;
      this.$emit('select', value, type);
    }
  }
};

/* script */
var __vue_script__$5 = script$5;
/* template */

var __vue_render__$7 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-time-columns"
  }, _vm._l(_vm.columns, function (col, i) {
    return _c('scrollbar-vertical', {
      key: i,
      class: _vm.prefixClass + "-time-column"
    }, [_c('ul', {
      class: _vm.prefixClass + "-time-list",
      attrs: {
        "data-type": col.type,
        "data-index": i
      },
      on: {
        "click": _vm.handleSelect
      }
    }, _vm._l(col.list, function (item, j) {
      return _c('li', {
        key: item.value,
        class: [_vm.prefixClass + "-time-item", _vm.getClasses(item.value)],
        attrs: {
          "data-index": j
        }
      }, [_vm._v("\n        " + _vm._s(item.text) + "\n      ")]);
    }), 0)]);
  }), 1);
};

var __vue_staticRenderFns__$7 = [];
/* style */

var __vue_inject_styles__$7 = undefined;
/* scoped */

var __vue_scope_id__$7 = undefined;
/* module identifier */

var __vue_module_identifier__$7 = undefined;
/* functional template */

var __vue_is_functional_template__$7 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var ListColumns = normalizeComponent({
  render: __vue_render__$7,
  staticRenderFns: __vue_staticRenderFns__$7
}, __vue_inject_styles__$7, __vue_script__$5, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

//

function parseOption() {
  var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var values = time.split(':');

  if (values.length >= 2) {
    var hours = parseInt(values[0], 10);
    var minutes = parseInt(values[1], 10);
    return {
      hours: hours,
      minutes: minutes
    };
  }

  return null;
}

var scrollTo$1 = function scrollTo(element, to) {
  if (element) {
    element.scrollTop = to;
  }
};

var script$6 = {
  name: 'ListOptions',
  components: {
    ScrollbarVertical: ScrollbarVertical
  },
  inject: {
    translateFn: {
      default: function _default() {
        return getLocaleFieldValue;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    date: Date,
    options: {
      type: [Object, Function],
      default: function _default() {
        return [];
      }
    },
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    getClasses: {
      type: Function,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {
    list: function list() {
      var result = [];
      var options = this.options;

      if (typeof options === 'function') {
        return options() || [];
      }

      var start = parseOption(options.start);
      var end = parseOption(options.end);
      var step = parseOption(options.step);
      var fmt = options.format || this.format;

      if (start && end && step) {
        var startMinutes = start.minutes + start.hours * 60;
        var endMinutes = end.minutes + end.hours * 60;
        var stepMinutes = step.minutes + step.hours * 60;
        var len = Math.floor((endMinutes - startMinutes) / stepMinutes);

        for (var i = 0; i <= len; i++) {
          var timeMinutes = startMinutes + i * stepMinutes;
          var hours = Math.floor(timeMinutes / 60);
          var minutes = timeMinutes % 60;
          var value = new Date(this.date).setHours(hours, minutes, 0);
          result.push({
            value: value,
            text: this.formatDate(value, fmt)
          });
        }
      }

      return result;
    }
  },
  mounted: function mounted() {
    this.scrollToSelected();
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return format(date, fmt, {
        locale: this.translateFn('formatLocale')
      });
    },
    scrollToSelected: function scrollToSelected() {
      var element = this.$el.querySelector('.active');
      if (!element) return;
      var scrollElement = getScrollParent(element, this.$el);
      if (!scrollElement) return;
      var to = element.offsetTop;
      scrollTo$1(scrollElement, to);
    },
    handleSelect: function handleSelect(value) {
      this.$emit('select', value, 'time');
    }
  }
};

/* script */
var __vue_script__$6 = script$6;
/* template */

var __vue_render__$8 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('scrollbar-vertical', _vm._l(_vm.list, function (item) {
    return _c('div', {
      key: item.value,
      class: [_vm.prefixClass + "-time-option", _vm.getClasses(item.value)],
      on: {
        "click": function click($event) {
          return _vm.handleSelect(item.value);
        }
      }
    }, [_vm._v("\n    " + _vm._s(item.text) + "\n  ")]);
  }), 0);
};

var __vue_staticRenderFns__$8 = [];
/* style */

var __vue_inject_styles__$8 = undefined;
/* scoped */

var __vue_scope_id__$8 = undefined;
/* module identifier */

var __vue_module_identifier__$8 = undefined;
/* functional template */

var __vue_is_functional_template__$8 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var ListOptions = normalizeComponent({
  render: __vue_render__$8,
  staticRenderFns: __vue_staticRenderFns__$8
}, __vue_inject_styles__$8, __vue_script__$6, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

//
var script$7 = {
  name: 'TimePanel',
  components: {
    ListColumns: ListColumns,
    ListOptions: ListOptions
  },
  inject: {
    translateFn: {
      default: function _default() {
        return getLocaleFieldValue;
      }
    },
    prefixClass: {
      default: 'mx'
    }
  },
  props: {
    value: {},
    defaultValue: {
      default: function _default() {
        var date = new Date();
        date.setHours(0, 0, 0, 0);
        return date;
      }
    },
    format: {
      default: 'HH:mm:ss'
    },
    timeTitleFormat: {
      type: String,
      default: 'YYYY-MM-DD'
    },
    showTimeHeader: {
      type: Boolean,
      default: false
    },
    disabledTime: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    timePickerOptions: {
      type: [Object, Function],
      default: function _default() {
        return null;
      }
    },
    hourOptions: Array,
    minuteOptions: Array,
    secondOptions: Array,
    hourStep: {
      type: Number,
      default: 1
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    secondStep: {
      type: Number,
      default: 1
    },
    showHour: {
      type: Boolean,
      default: undefined
    },
    showMinute: {
      type: Boolean,
      default: undefined
    },
    showSecond: {
      type: Boolean,
      default: undefined
    },
    use12h: {
      type: Boolean,
      default: undefined
    },
    scrollDuration: {
      type: Number,
      default: 100
    }
  },
  computed: {
    innerValue: function innerValue() {
      return getValidDate(this.value, this.defaultValue);
    },
    title: function title() {
      var titleFormat = this.timeTitleFormat;
      var date = new Date(this.innerValue);
      return this.formatDate(date, titleFormat);
    },
    innerForamt: function innerForamt() {
      return typeof this.format === 'string' ? this.format : 'HH:mm:ss';
    },
    ShowHourMinuteSecondAMPM: function ShowHourMinuteSecondAMPM() {
      var _this = this;

      var fmt = this.innerForamt;
      var defaultProps = {
        showHour: /[HhKk]/.test(fmt),
        showMinute: /m/.test(fmt),
        showSecond: /s/.test(fmt),
        use12h: /a/i.test(fmt)
      };
      var obj = {};
      Object.keys(defaultProps).forEach(function (key) {
        obj[key] = typeof _this[key] === 'boolean' ? _this[key] : defaultProps[key];
      });
      return obj;
    }
  },
  methods: {
    formatDate: function formatDate(date, fmt) {
      return format(date, fmt, {
        locale: this.translateFn('formatLocale')
      });
    },
    isDisabled: function isDisabled(date) {
      return this.disabledTime(new Date(date));
    },
    handleSelect: function handleSelect(value, type) {
      var date = new Date(value);

      if (!this.isDisabled(value)) {
        this.$emit('select', date, type);
      }
    },
    handleClickTitle: function handleClickTitle() {
      this.$emit('title-click');
    },
    getClasses: function getClasses(value) {
      var cellDate = new Date(value);

      if (this.isDisabled(value)) {
        return 'disabled';
      }

      if (cellDate.getTime() === this.innerValue.getTime()) {
        return 'active';
      }

      return '';
    }
  }
};

/* script */
var __vue_script__$7 = script$7;
/* template */

var __vue_render__$9 = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.prefixClass + "-time"
  }, [_vm.showTimeHeader ? _c('div', {
    class: _vm.prefixClass + "-time-header"
  }, [_c('button', {
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-time-header-title",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleClickTitle
    }
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")])]) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-time-content"
  }, [_vm.timePickerOptions ? _c('list-options', {
    attrs: {
      "date": _vm.innerValue,
      "get-classes": _vm.getClasses,
      "options": _vm.timePickerOptions,
      "format": _vm.innerForamt
    },
    on: {
      "select": _vm.handleSelect
    }
  }) : _c('list-columns', _vm._b({
    attrs: {
      "date": _vm.innerValue,
      "get-classes": _vm.getClasses,
      "hour-options": _vm.hourOptions,
      "minute-options": _vm.minuteOptions,
      "second-options": _vm.secondOptions,
      "hour-step": _vm.hourStep,
      "minute-step": _vm.minuteStep,
      "second-step": _vm.secondStep,
      "scroll-duration": _vm.scrollDuration
    },
    on: {
      "select": _vm.handleSelect
    }
  }, 'list-columns', _vm.ShowHourMinuteSecondAMPM, false))], 1)]);
};

var __vue_staticRenderFns__$9 = [];
/* style */

var __vue_inject_styles__$9 = undefined;
/* scoped */

var __vue_scope_id__$9 = undefined;
/* module identifier */

var __vue_module_identifier__$9 = undefined;
/* functional template */

var __vue_is_functional_template__$9 = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var TimePanel = normalizeComponent({
  render: __vue_render__$9,
  staticRenderFns: __vue_staticRenderFns__$9
}, __vue_inject_styles__$9, __vue_script__$7, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

var TimeRange = {
  name: 'TimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, TimePanel.props),
  data: function data() {
    return {
      startValue: new Date(NaN),
      endValue: new Date(NaN)
    };
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler() {
        if (isValidRangeDate(this.value)) {
          var _this$value = _slicedToArray(this.value, 2),
              startValue = _this$value[0],
              endValue = _this$value[1];

          this.startValue = startValue;
          this.endValue = endValue;
        } else {
          this.startValue = new Date(NaN);
          this.endValue = new Date(NaN);
        }
      }
    }
  },
  methods: {
    emitChange: function emitChange(type, index) {
      var date = [this.startValue, this.endValue];
      this.$emit('select', date, type === 'time' ? 'time-range' : type, index);
    },
    handleSelectStart: function handleSelectStart(date, type) {
      this.startValue = date; // check the NaN

      if (!(this.endValue.getTime() >= date.getTime())) {
        this.endValue = date;
      }

      this.emitChange(type, 0);
    },
    handleSelectEnd: function handleSelectEnd(date, type) {
      // check the NaN
      this.endValue = date;

      if (!(this.startValue.getTime() <= date.getTime())) {
        this.startValue = date;
      }

      this.emitChange(type, 1);
    },
    disabledStartTime: function disabledStartTime(date) {
      return this.disabledTime(date, 0);
    },
    disabledEndTime: function disabledEndTime(date) {
      return date.getTime() < this.startValue.getTime() || this.disabledTime(date, 1);
    }
  },
  render: function render() {
    var h = arguments[0];
    var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
    var prefixClass = this.prefixClass;
    return h("div", {
      "class": "".concat(prefixClass, "-range-wrapper")
    }, [h(TimePanel, {
      "props": _objectSpread2({}, _objectSpread2({}, this.$props, {
        value: this.startValue,
        defaultValue: defaultValues[0],
        disabledTime: this.disabledStartTime
      })),
      "on": _objectSpread2({}, _objectSpread2({}, this.$listeners, {
        select: this.handleSelectStart
      }))
    }), h(TimePanel, {
      "props": _objectSpread2({}, _objectSpread2({}, this.$props, {
        value: this.endValue,
        defaultValue: defaultValues[1],
        disabledTime: this.disabledEndTime
      })),
      "on": _objectSpread2({}, _objectSpread2({}, this.$listeners, {
        select: this.handleSelectEnd
      }))
    })]);
  }
};

function _extends$1() {
  return _extends$1 = Object.assign || function (a) {
    for (var b, c = 1; c < arguments.length; c++) {
      for (var d in b = arguments[c], b) {
        Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
      }
    }

    return a;
  }, _extends$1.apply(this, arguments);
}

var normalMerge = ["attrs", "props", "domProps"],
    toArrayMerge = ["class", "style", "directives"],
    functionalMerge = ["on", "nativeOn"],
    mergeJsxProps = function mergeJsxProps(a) {
  return a.reduce(function (c, a) {
    for (var b in a) {
      if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends$1({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
        var d = c[b] instanceof Array ? c[b] : [c[b]],
            e = a[b] instanceof Array ? a[b] : [a[b]];
        c[b] = d.concat(e);
      } else if (-1 !== functionalMerge.indexOf(b)) {
        for (var f in a[b]) {
          if (c[b][f]) {
            var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
            c[b][f] = g.concat(h);
          } else c[b][f] = a[b][f];
        }
      } else if ("hook" == b) for (var i in a[b]) {
        c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
      } else c[b] = a[b];
    }

    return c;
  }, {});
},
    mergeFn = function mergeFn(a, b) {
  return function () {
    a && a.apply(this, arguments), b && b.apply(this, arguments);
  };
};

var helper = mergeJsxProps;

var DatetimePanel = {
  name: 'DatetimePanel',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, CalendarPanel.props, {}, TimePanel.props, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
    },
    emitDate: function emitDate(date, type) {
      this.$emit('select', date, type);
    },
    handleSelect: function handleSelect(date, type) {
      if (type === 'date') {
        this.openTimePanel();
      }

      var datetime = assignTime(date, getValidDate(this.value, this.defaultValue));

      if (this.disabledTime(new Date(datetime))) {
        // set the time of defalutValue;
        datetime = assignTime(date, this.defaultValue);

        if (this.disabledTime(new Date(datetime))) {
          // if disabled don't emit date
          this.currentValue = datetime;
          return;
        }
      }

      this.emitDate(datetime, type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var calendarProps = {
      props: _objectSpread2({}, pick(this, Object.keys(CalendarPanel.props)), {
        type: 'date',
        value: this.currentValue
      }),
      on: {
        select: this.handleSelect
      }
    };
    var timeProps = {
      props: _objectSpread2({}, pick(this, Object.keys(TimePanel.props)), {
        showTimeHeader: true,
        value: this.currentValue
      }),
      on: {
        select: this.emitDate,
        'title-click': this.closeTimePanel
      }
    };
    var prefixClass = this.prefixClass;
    return h("div", [h(CalendarPanel, helper([{}, calendarProps])), this.timeVisible && h(TimePanel, helper([{
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps]))]);
  }
};

var DatetimeRange = {
  name: 'DatetimeRange',
  inject: {
    prefixClass: {
      default: 'mx'
    }
  },
  props: _objectSpread2({}, CalendarRange.props, {}, TimeRange.props, {
    showTimePanel: {
      type: Boolean,
      default: undefined
    }
  }),
  data: function data() {
    return {
      defaultTimeVisible: false,
      currentValue: this.value
    };
  },
  computed: {
    timeVisible: function timeVisible() {
      return typeof this.showTimePanel === 'boolean' ? this.showTimePanel : this.defaultTimeVisible;
    }
  },
  watch: {
    value: function value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    closeTimePanel: function closeTimePanel() {
      this.defaultTimeVisible = false;
    },
    openTimePanel: function openTimePanel() {
      this.defaultTimeVisible = true;
    },
    emitDate: function emitDate(dates, type) {
      this.$emit('select', dates, type);
    },
    handleSelect: function handleSelect(dates, type) {
      var _this = this;

      if (type === 'date') {
        this.openTimePanel();
      }

      var defaultValues = Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue, this.defaultValue];
      var datetimes = dates.map(function (date, i) {
        var time = isValidRangeDate(_this.value) ? _this.value[i] : defaultValues[i];
        return assignTime(date, time);
      });

      if (datetimes[1].getTime() < datetimes[0].getTime()) {
        datetimes = [datetimes[0], datetimes[0]];
      }

      if (datetimes.some(this.disabledTime)) {
        datetimes = dates.map(function (date, i) {
          return assignTime(date, defaultValues[i]);
        });

        if (datetimes.some(this.disabledTime)) {
          this.currentValue = datetimes;
          return;
        }
      }

      this.emitDate(datetimes, type);
    }
  },
  render: function render() {
    var h = arguments[0];
    var calendarProps = {
      props: _objectSpread2({}, pick(this, Object.keys(CalendarRange.props)), {
        type: 'date',
        value: this.currentValue
      }),
      on: {
        select: this.handleSelect
      }
    };
    var timeProps = {
      props: _objectSpread2({}, pick(this, Object.keys(TimeRange.props)), {
        value: this.currentValue,
        showTimeHeader: true
      }),
      on: {
        select: this.emitDate,
        'title-click': this.closeTimePanel
      }
    };
    var prefixClass = this.prefixClass;
    return h("div", [h(CalendarRange, helper([{}, calendarProps])), this.timeVisible && h(TimeRange, helper([{
      "class": "".concat(prefixClass, "-calendar-time")
    }, timeProps]))]);
  }
};

var componentMap = {
  default: CalendarPanel,
  time: TimePanel,
  datetime: DatetimePanel
};
var componentRangeMap = {
  default: CalendarRange,
  time: TimeRange,
  datetime: DatetimeRange
};
var script$8 = {
  name: 'DatePicker',
  components: {
    IconCalendar: IconCalendar,
    IconClose: IconClose,
    Popup: Popup
  },
  provide: function provide() {
    return {
      translateFn: this.getLocaleFieldValue,
      getWeek: this.getWeek,
      prefixClass: this.prefixClass
    };
  },
  props: _objectSpread2({}, DatetimePanel.props, {
    value: {},
    valueType: {
      type: String,
      default: 'date' // date, format, timestamp, or token like 'YYYY-MM-DD'

    },
    type: {
      type: String,
      // ['date', 'datetime', 'time', 'year', 'month', 'week']
      default: 'date'
    },
    format: {
      type: String,
      default: function _default() {
        var map = {
          date: 'YYYY-MM-DD',
          datetime: 'YYYY-MM-DD HH:mm:ss',
          year: 'YYYY',
          month: 'YYYY-MM',
          time: 'HH:mm:ss',
          week: 'w'
        };
        return map[this.type] || map.date;
      }
    },
    formatter: {
      type: Object
    },
    range: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    rangeSeparator: {
      type: String,
      default: function _default() {
        return this.multiple ? ',' : ' ~ ';
      }
    },
    lang: {
      type: [String, Object]
    },
    placeholder: {
      type: String,
      default: ''
    },
    editable: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
    },
    prefixClass: {
      type: String,
      default: 'mx'
    },
    inputClass: {
      default: function _default() {
        return "".concat(this.prefixClass, "-input");
      }
    },
    inputAttr: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    open: {
      type: Boolean,
      default: undefined
    },
    popupClass: {},
    popupStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    inline: {
      type: Boolean,
      default: false
    },
    confirm: {
      type: Boolean,
      default: false
    },
    confirmText: {
      type: String,
      default: 'OK'
    },
    renderInputText: {
      type: Function
    },
    shortcuts: {
      type: Array,
      validator: function validator(value) {
        return Array.isArray(value) && value.every(function (v) {
          return isObject(v) && typeof v.text === 'string' && typeof v.onClick === 'function';
        });
      },
      default: function _default() {
        return [];
      }
    }
  }),
  data: function data() {
    return {
      // cache the innervalue, wait to confirm
      currentValue: null,
      userInput: null,
      defaultOpen: false
    };
  },
  computed: {
    currentComponent: function currentComponent() {
      var map = this.range ? componentRangeMap : componentMap;
      return map[this.type] || map.default;
    },
    currentComponentProps: function currentComponentProps() {
      var props = _objectSpread2({}, pick(this, Object.keys(this.currentComponent.props)), {
        value: this.currentValue
      });

      return props;
    },
    popupVisible: function popupVisible() {
      return !this.disabled && (typeof this.open === 'boolean' ? this.open : this.defaultOpen);
    },
    innerValue: function innerValue() {
      var value = this.value;

      if (this.validMultipleType) {
        value = Array.isArray(value) ? value : [];
        return value.map(this.value2date);
      }

      if (this.range) {
        value = Array.isArray(value) ? value.slice(0, 2) : [null, null];
        return value.map(this.value2date);
      }

      return this.value2date(this.value);
    },
    text: function text() {
      var _this = this;

      if (this.userInput !== null) {
        return this.userInput;
      }

      if (typeof this.renderInputText === 'function') {
        return this.renderInputText(this.innerValue);
      }

      if (!this.isValidValue(this.innerValue)) {
        return '';
      }

      var fmt = this.format;

      if (Array.isArray(this.innerValue)) {
        return this.innerValue.map(function (v) {
          return _this.formatDate(v, fmt);
        }).join(this.rangeSeparator);
      }

      return this.formatDate(this.innerValue, fmt);
    },
    showClearIcon: function showClearIcon() {
      return !this.disabled && this.clearable && this.text;
    },
    locale: function locale() {
      if (isObject(this.lang)) {
        return mergeDeep(getLocale(), this.lang);
      }

      return getLocale(this.lang);
    },
    validMultipleType: function validMultipleType() {
      var types = ['date', 'month', 'year'];
      return this.multiple && !this.range && types.indexOf(this.type) !== -1;
    }
  },
  watch: {
    innerValue: {
      immediate: true,
      handler: function handler(val) {
        this.currentValue = val;
      }
    }
  },
  created: function created() {
    if (_typeof(this.format) === 'object') {
      console.warn("[vue2-datepicker]: The prop `format` don't support Object any more. You can use the new prop `formatter` to replace it");
    }
  },
  methods: {
    handleClickOutSide: function handleClickOutSide(evt) {
      var target = evt.target;

      if (!this.$el.contains(target)) {
        this.closePopup();
      }
    },
    getFormatter: function getFormatter(key) {
      return isObject(this.formatter) && this.formatter[key] || isObject(this.format) && this.format[key];
    },
    getWeek: function getWeek$1(date, options) {
      if (typeof this.getFormatter('getWeek') === 'function') {
        return this.getFormatter('getWeek')(date, options);
      }

      return getWeek(date, options);
    },
    parseDate: function parseDate(value, fmt) {
      if (typeof this.getFormatter('parse') === 'function') {
        return this.getFormatter('parse')(value, fmt);
      }

      var backupDate = new Date();
      return parse(value, fmt, {
        locale: this.locale.formatLocale,
        backupDate: backupDate
      });
    },
    formatDate: function formatDate(date, fmt) {
      if (typeof this.getFormatter('stringify') === 'function') {
        return this.getFormatter('stringify')(date, fmt);
      }

      return format(date, fmt, {
        locale: this.locale.formatLocale
      });
    },
    // transform the outer value to inner date
    value2date: function value2date(value) {
      switch (this.valueType) {
        case 'date':
          return value instanceof Date ? new Date(value.getTime()) : new Date(NaN);

        case 'timestamp':
          return typeof value === 'number' ? new Date(value) : new Date(NaN);

        case 'format':
          return typeof value === 'string' ? this.parseDate(value, this.format) : new Date(NaN);

        default:
          return typeof value === 'string' ? this.parseDate(value, this.valueType) : new Date(NaN);
      }
    },
    // transform the inner date to outer value
    date2value: function date2value(date) {
      if (!isValidDate$1(date)) return null;

      switch (this.valueType) {
        case 'date':
          return date;

        case 'timestamp':
          return date.getTime();

        case 'format':
          return this.formatDate(date, this.format);

        default:
          return this.formatDate(date, this.valueType);
      }
    },
    emitValue: function emitValue(date, type) {
      // fix IE11/10 trigger input event when input is focused. (placeholder !== '')
      this.userInput = null;
      var value = Array.isArray(date) ? date.map(this.date2value) : this.date2value(date);
      this.$emit('input', value);
      this.$emit('change', value, type);
      this.afterEmitValue(type);
      return value;
    },
    afterEmitValue: function afterEmitValue(type) {
      // this.type === 'datetime', click the time should close popup
      if (!type || type === this.type || type === 'time') {
        this.closePopup();
      }
    },
    isValidValue: function isValidValue(value) {
      if (this.validMultipleType) {
        return isValidDates(value);
      }

      if (this.range) {
        return isValidRangeDate(value);
      }

      return isValidDate$1(value);
    },
    isValidValueAndNotDisabled: function isValidValueAndNotDisabled(value) {
      if (!this.isValidValue(value)) {
        return false;
      }

      var disabledDate = typeof this.disabledDate === 'function' ? this.disabledDate : function () {
        return false;
      };
      var disabledTime = typeof this.disabledTime === 'function' ? this.disabledTime : function () {
        return false;
      };

      if (!Array.isArray(value)) {
        value = [value];
      }

      return value.every(function (v) {
        return !disabledDate(v) && !disabledTime(v);
      });
    },
    handleMultipleDates: function handleMultipleDates(date, dates) {
      if (this.validMultipleType && dates) {
        var nextDates = dates.filter(function (v) {
          return v.getTime() !== date.getTime();
        });

        if (nextDates.length === dates.length) {
          nextDates.push(date);
        }

        return nextDates;
      }

      return date;
    },
    handleSelectDate: function handleSelectDate(val, type, dates) {
      val = this.handleMultipleDates(val, dates);

      if (this.confirm) {
        this.currentValue = val;
      } else {
        this.emitValue(val, this.validMultipleType ? "multiple-".concat(type) : type);
      }
    },
    handleClear: function handleClear() {
      this.emitValue(this.range ? [null, null] : null);
      this.$emit('clear');
    },
    handleConfirmDate: function handleConfirmDate() {
      var value = this.emitValue(this.currentValue);
      this.$emit('confirm', value);
    },
    handleSelectShortcut: function handleSelectShortcut(item) {
      if (isObject(item) && typeof item.onClick === 'function') {
        var date = item.onClick(this);

        if (date) {
          this.emitValue(date);
        }
      }
    },
    openPopup: function openPopup(evt) {
      if (this.popupVisible) return;
      this.defaultOpen = true;
      this.$emit('open', evt);
      this.$emit('update:open', true);
    },
    closePopup: function closePopup() {
      if (!this.popupVisible) return;
      this.defaultOpen = false;
      this.$emit('close');
      this.$emit('update:open', false);
    },
    blur: function blur() {
      // when use slot input
      if (this.$refs.input) {
        this.$refs.input.blur();
      }
    },
    focus: function focus() {
      if (this.$refs.input) {
        this.$refs.input.focus();
      }
    },
    handleInputChange: function handleInputChange() {
      var _this2 = this;

      if (!this.editable || this.userInput === null) return;
      var text = this.userInput.trim();
      this.userInput = null;

      if (text === '') {
        this.handleClear();
        return;
      }

      var date;

      if (this.validMultipleType) {
        date = text.split(this.rangeSeparator).map(function (v) {
          return _this2.parseDate(v.trim(), _this2.format);
        });
      } else if (this.range) {
        var arr = text.split(this.rangeSeparator);

        if (arr.length !== 2) {
          // Maybe the separator during the day is the same as the separator for the date
          // eg: 2019-10-09-2020-01-02
          arr = text.split(this.rangeSeparator.trim());
        }

        date = arr.map(function (v) {
          return _this2.parseDate(v.trim(), _this2.format);
        });
      } else {
        date = this.parseDate(text, this.format);
      }

      if (this.isValidValueAndNotDisabled(date)) {
        this.emitValue(date);
        this.blur();
      } else {
        this.$emit('input-error', text);
      }
    },
    handleInputInput: function handleInputInput(evt) {
      this.userInput = evt.target.value;
    },
    handleInputKeydown: function handleInputKeydown(evt) {
      var keyCode = evt.keyCode; // Tab 9 or Enter 13

      if (keyCode === 9) {
        this.closePopup();
      } else if (keyCode === 13) {
        this.handleInputChange();
      }
    },
    handleInputBlur: function handleInputBlur(evt) {
      // tab close
      this.$emit('blur', evt);
    },
    handleInputFocus: function handleInputFocus(evt) {
      this.openPopup(evt);
      this.$emit('focus', evt);
    },
    hasSlot: function hasSlot(name) {
      return !!(this.$slots[name] || this.$scopedSlots[name]);
    },
    getLocaleFieldValue: function getLocaleFieldValue$1(path) {
      return getLocaleFieldValue(path, this.locale);
    }
  }
};

var __vue_script__$8 = script$8;
/* template */

var __vue_render__$a = function __vue_render__() {
  var _obj;

  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: (_obj = {}, _obj[_vm.prefixClass + "-datepicker"] = true, _obj[_vm.prefixClass + "-datepicker-range"] = _vm.range, _obj[_vm.prefixClass + "-datepicker-inline"] = _vm.inline, _obj.disabled = _vm.disabled, _obj)
  }, [!_vm.inline ? _c('div', {
    class: _vm.prefixClass + "-input-wrapper",
    on: {
      "mousedown": _vm.openPopup
    }
  }, [_vm._t("input", [_c('input', _vm._g(_vm._b({
    ref: "input"
  }, 'input', _extends({}, {
    name: 'date',
    type: 'text',
    autocomplete: 'off',
    value: _vm.text,
    class: _vm.inputClass,
    readonly: !_vm.editable,
    disabled: _vm.disabled,
    placeholder: _vm.placeholder
  }, _vm.inputAttr), false), {
    keydown: _vm.handleInputKeydown,
    focus: _vm.handleInputFocus,
    blur: _vm.handleInputBlur,
    input: _vm.handleInputInput,
    change: _vm.handleInputChange
  }))], {
    "props": _extends({}, {
      name: 'date',
      type: 'text',
      autocomplete: 'off',
      value: _vm.text,
      class: _vm.inputClass,
      readonly: !_vm.editable,
      disabled: _vm.disabled,
      placeholder: _vm.placeholder
    }, _vm.inputAttr),
    "events": {
      keydown: _vm.handleInputKeydown,
      focus: _vm.handleInputFocus,
      blur: _vm.handleInputBlur,
      input: _vm.handleInputInput,
      change: _vm.handleInputChange
    }
  }), _vm._v(" "), _vm.showClearIcon ? _c('i', {
    class: _vm.prefixClass + "-icon-clear",
    on: {
      "mousedown": function mousedown($event) {
        $event.stopPropagation();
        return _vm.handleClear($event);
      }
    }
  }, [_vm._t("icon-clear", [_c('icon-close')])], 2) : _vm._e(), _vm._v(" "), _c('i', {
    class: _vm.prefixClass + "-icon-calendar"
  }, [_vm._t("icon-calendar", [_c('icon-calendar')])], 2)], 2) : _vm._e(), _vm._v(" "), _c('Popup', {
    ref: "popup",
    class: _vm.popupClass,
    style: _vm.popupStyle,
    attrs: {
      "inline": _vm.inline,
      "visible": _vm.popupVisible,
      "append-to-body": _vm.appendToBody
    },
    on: {
      "clickoutside": _vm.handleClickOutSide
    }
  }, [_vm.hasSlot('sidebar') || _vm.shortcuts.length ? _c('div', {
    class: _vm.prefixClass + "-datepicker-sidebar"
  }, [_vm._t("sidebar", null, {
    "value": _vm.currentValue,
    "emit": _vm.emitValue
  }), _vm._v(" "), _vm._l(_vm.shortcuts, function (v, i) {
    return _c('button', {
      key: i,
      class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-btn-text " + _vm.prefixClass + "-btn-shortcut",
      attrs: {
        "type": "button"
      },
      on: {
        "click": function click($event) {
          return _vm.handleSelectShortcut(v);
        }
      }
    }, [_vm._v("\n        " + _vm._s(v.text) + "\n      ")]);
  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-datepicker-content"
  }, [_vm.hasSlot('header') ? _c('div', {
    class: _vm.prefixClass + "-datepicker-header"
  }, [_vm._t("header", null, {
    "value": _vm.currentValue,
    "emit": _vm.emitValue
  })], 2) : _vm._e(), _vm._v(" "), _c('div', {
    class: _vm.prefixClass + "-datepicker-body"
  }, [_vm._t("content", [_c(_vm.currentComponent, _vm._b({
    ref: "picker",
    tag: "component",
    on: {
      "select": _vm.handleSelectDate
    }
  }, 'component', _vm.currentComponentProps, false))], {
    "value": _vm.currentValue,
    "emit": _vm.emitValue
  })], 2), _vm._v(" "), _vm.hasSlot('footer') || _vm.confirm ? _c('div', {
    class: _vm.prefixClass + "-datepicker-footer"
  }, [_vm._t("footer", null, {
    "value": _vm.currentValue,
    "emit": _vm.emitValue
  }), _vm._v(" "), _vm.confirm ? _c('button', {
    class: _vm.prefixClass + "-btn " + _vm.prefixClass + "-datepicker-btn-confirm",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.handleConfirmDate
    }
  }, [_vm._v("\n          " + _vm._s(_vm.confirmText) + "\n        ")]) : _vm._e()], 2) : _vm._e()])])], 1);
};

var __vue_staticRenderFns__$a = [];
/* style */

var __vue_inject_styles__$a = undefined;
/* scoped */

var __vue_scope_id__$a = undefined;
/* module identifier */

var __vue_module_identifier__$a = undefined;
/* functional template */

var __vue_is_functional_template__$a = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

var DatePicker = normalizeComponent({
  render: __vue_render__$a,
  staticRenderFns: __vue_staticRenderFns__$a
}, __vue_inject_styles__$a, __vue_script__$8, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

DatePicker.locale = locale$1;

DatePicker.install = function install(Vue) {
  Vue.component(DatePicker.name, DatePicker);
};

if (typeof window !== 'undefined' && window.Vue) {
  DatePicker.install(window.Vue);
}

_extends(DatePicker, {
  CalendarPanel: CalendarPanel,
  CalendarRange: CalendarRange,
  TimePanel: TimePanel,
  TimeRange: TimeRange,
  DatetimePanel: DatetimePanel,
  DatetimeRange: DatetimeRange
});

export default DatePicker;
