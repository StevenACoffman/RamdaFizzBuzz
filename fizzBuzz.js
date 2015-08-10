'use strict';
var R = require('ramda'),
  always = R.always,
  compose = R.compose,
  cond = R.cond,
  equals = R.equals,
  flip = R.flip,
  inc = R.inc,
  map = R.map,
  modulo = R.modulo,
  toString = R.toString,
  T = R.T,
  times = R.times;


var factorOf = compose(equals(0), flip(modulo));

exports.process = cond([
  [factorOf(15), always('FizzBuzz')],
  [factorOf(5), always('Buzz')],
  [factorOf(3), always('Fizz')],
  [T, toString]
]);

exports.fizzBuzz = compose(map(exports.process), times(inc));