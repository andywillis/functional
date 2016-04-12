import test from 'blue-tape';
import { join, toType, multiply } from '../index.js';

let actual;
let expected;
let desc;

test('multiply()', (t) => {
  t.plan(4);

  // Test arguments

  desc = 'Passing in a non-integer (1st argument) should return false';
  actual = multiply(3.2, 1);
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'Passing in a non-integer (2nd argument) should return false';
  actual = multiply(2, [1, 2]);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = 3;
  const b = 5;

  desc = join(['multiply(', a, ', ', b, ') should return a number']);
  actual = toType(multiply(a, b));
  expected = 'number';
  t.equal(actual, expected, desc);

  desc = join(['multiply(', a, ', ', b, ') should return 15']);
  actual = multiply(a, b);
  expected = 15;
  t.equal(actual, expected, desc);

  t.end();
});
