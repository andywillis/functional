import test from 'blue-tape';
import { join, toType, toJSON, reduce, sum } from '../index.js';

let actual;
let expected;
let desc;

test('reduce()', (t) => {
  t.plan(5);

  // Test arguments

  desc = 'Passing in a non-array should return false';
  actual = reduce(sum, 1);
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'Passing in a non-function should return false';
  actual = reduce(1, [1, 2]);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = [1, 2, 3];
  const b = 6;
  const c = 10;

  desc = join(['reduce(sum, ', toJSON(a), ') should return a number']);
  actual = toType(reduce(sum, a));
  expected = 'number';
  t.equal(actual, expected, desc);

  desc = join(['reduce(sum, ', toJSON(a), ') should return ', b]);
  actual = reduce(sum, a);
  expected = b;
  t.equal(actual, expected, desc);

  desc = join(['reduce(sum, ', toJSON(a), ') should not return ', c]);
  actual = reduce(sum, a);
  expected = c;
  t.notEqual(actual, expected, desc);

  t.end();
});
