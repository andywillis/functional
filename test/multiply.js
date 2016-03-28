import test from 'blue-tape';
import { multiply } from '../index.js';

const a = 3;
const b = 5;

let actual;
let expected;
let desc;

test('multiply()', (t) => {
  t.plan(2);

  actual = typeof multiply(a, b);
  expected = 'number';
  desc = 'should return a number';
  t.equal(actual, expected, desc);

  actual = multiply(a, b);
  expected = 15;
  desc = ['(', a, ' + ', b, ') should return 15'].join('');
  t.equal(actual, expected, desc);

  t.end();
});
