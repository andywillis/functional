import test from 'blue-tape';
import { join, square } from '../index.js';

let actual;
let expected;
let desc;

test('square()', (t) => {
  t.plan(3);

  // Test arguments

  desc = 'Passing in a non-integer should return false';
  actual = square(null);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = 4;

  desc = 'Should return a number';
  actual = typeof square(a);
  expected = 'number';
  t.equal(actual, expected, desc);

  desc = join(['square(', a, ') should return ', a * a]);
  actual = square(a);
  expected = a * a;
  t.equal(actual, expected, desc);

  t.end();
});
