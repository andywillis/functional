import test from 'blue-tape';
import { toType, greaterThan, square, compose } from '../index.js';

let actual;
let expected;
let desc;

test('compose()', (t) => {
  t.plan(2);

  // Test arguments

  desc = 'Should return a function';
  actual = toType(compose(square, greaterThan(2)));
  expected = 'function';
  t.equal(actual, expected, desc);

  desc = 'compose() should return false (no argument specified)';
  actual = compose();
  expected = false;
  t.equal(actual, expected, desc);

  t.end();
});
