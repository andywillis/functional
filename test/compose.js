import test from 'blue-tape';
import { map, filter, toType, greaterThan, square, compose } from '../index.js';

let actual;
let expected;
let desc;

test('compose()', (t) => {
  t.plan(3);

  // Test arguments

  desc = 'Should return a function';
  actual = toType(compose(square, greaterThan(2)));
  expected = 'function';
  t.equal(actual, expected, desc);

  desc = 'compose() should return false (no argument specified)';
  actual = compose();
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = [1.1, 2.2, 3.3, 4.4];
  const nums = compose(square, Math.round, parseInt);
  const c = [1, 4, 9, 16];

  desc = 'Should return an array';
  actual = map(nums, a);
  expected = c;
  t.deepEqual(actual, expected, desc);

  t.end();
});
