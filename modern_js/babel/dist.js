"use strict";

var average = function average() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }
  return params.reduce(function (acc, num) {
    return acc + num / params.length;
  }, 0);
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(average(3, 6, 10, 9)));
var median = function median() {
  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    a - b;
  });
  var middle = Math.floor(orderedNumbers.length / 2);
  if (orderedNumbers.length % 2 !== 0) {
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  var secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
};
var mode = function mode() {
  for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }
  var quantities = params.map(function (num) {
    return [num, params.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[2];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
