'use strict';
var R = require('ramda');
var curry = R.curry;


exports.process = function (input) {
  var result = '';
  if (input % 3 === 0) {
    result += 'Fizz';
  }
  if (input % 5 === 0) {
    result += 'Buzz';
  }
  if (result === '') {
    result = input.toString();
  }
  return result;
};