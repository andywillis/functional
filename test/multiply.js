import test from 'blue-tape';
import { join, toType, multiply } from '../index.js';

const a = 3;
const b = 5;

let actual;
let expected;
let desc;

test('multiply()', (t) => {
  t.plan(4);

  actual = multiply(3.2, 1);
  expected = false;
  desc = 'Passing in a non-integer (1st argument) should return false';
  t.equal(actual, expected, desc);

  actual = multiply(2, [1, 2]);
  expected = false;
  desc = 'Passing in a non-integer (2nd argument) should return false';
  t.equal(actual, expected, desc);

  actual = toType(multiply(a, b));
  expected = 'number';
  desc = 'should return a number';
  t.equal(actual, expected, desc);

  actual = multiply(a, b);
  expected = 15;
  desc = join(['(', a, ' + ', b, ') should return 15']);
  t.equal(actual, expected, desc);

  t.end();
});
