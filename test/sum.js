import test from 'blue-tape';
import { join, toType, sum } from '../index.js';

let actual;
let expected;
let desc;

test('sum()', (t) => {
  t.plan(4);

  // Test arguments

  desc = 'Passing in a non-integer should return false';
  actual = sum(null, 1);
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'Passing in a non-integer should return false';
  actual = sum(1, null);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = 1;
  const b = 2;

  desc = join(['sum(', a, ', ', b, ') should return a number']);
  actual = toType(sum(a, b));
  expected = 'number';
  t.equal(actual, expected, desc);

  desc = join(['sum(', a, ', ', b, ') should return 3']);
  actual = sum(a, b);
  expected = 3;
  t.equal(actual, expected, desc);

  t.end();
});
