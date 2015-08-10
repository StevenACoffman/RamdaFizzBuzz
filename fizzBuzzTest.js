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
describe('Should Style: FizzBuzz ', function () {
  it('of 1 is correct', function () {
    fizzBuzz.fizzBuzz(1).should.deep.equal(['1']);
  });
  it('of 2 is correct', function () {
    fizzBuzz.fizzBuzz(2).should.deep.equal(['1', '2']);
  });
  it('of 15 correct', function () {
    fizzBuzz.fizzBuzz(15).should.deep.equal(['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz',
      '13', '14', 'FizzBuzz'
    ]);
  });
});