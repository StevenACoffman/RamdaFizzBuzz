/*global describe:true, it:true */
'use strict';

var fizzBuzz = require('./fizzBuzz.js');

describe('Should Style: Processing ', function () {
  it('input of 1 is 1', function () {
    fizzBuzz.process(1).should.equal('1');
  });
  it('input of 2 is 2', function () {
    fizzBuzz.process(2).should.equal('2');
  });
  it('input of 3 is Fizz', function () {
    fizzBuzz.process(3).should.equal('Fizz');
  });
  it('input of 5 is Buzz', function () {
    fizzBuzz.process(5).should.equal('Buzz');
  });
  it('input of 15 is FizzBuzz', function () {
    fizzBuzz.process(15).should.equal('FizzBuzz');
  });
});