import test from 'blue-tape';
import { toType, greaterThan, square, sequence } from '../index.js';

let actual;
let expected;
let desc;

test('compose()', (t) => {
  t.plan(2);

  // Test arguments

  desc = 'Should return a function';
  actual = toType(sequence(square, greaterThan(2)));
  expected = 'function';
  t.equal(actual, expected, desc);

  desc = 'sequence() should return false (no argument specified)';
  actual = sequence();
  expected = false;
  t.equal(actual, expected, desc);

  t.end();
});
