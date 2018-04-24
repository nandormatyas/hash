'use strict';

const test = require('tape');
const uhu = require('./uhu.js');

class Test {
  constructor(actual, expected) {
    this.actual = actual;
    this.expected = expected;
  }
}

test('return list of leftovers', function (t) {
  const leftovers = new Test(uhu.decode('1033636'), [ 2, 1, 0 ])

  t.deepEqual(leftovers.actual, leftovers.expected);
  t.end();
});

test('return word from leftover array', function (t) {
  const arrayToWord = new Test(uhu.wordmaker([ 2, 1, 0]), 'acd');

  t.equal(arrayToWord.actual, arrayToWord.expected);
  t.end();
});

test('return word from hash', function (t) {
  const hashToWord = new Test(uhu.wordmaker(uhu.decode('3552907293224')), 'eddigjo');

  t.equal(hashToWord.actual, hashToWord.expected);
  t.end();
});


