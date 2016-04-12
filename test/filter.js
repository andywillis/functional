import test from 'blue-tape';
import { join, toType, greaterThan, filter } from '../index.js';

let actual;
let expected;
let desc;

test('filter()', (t) => {
  t.plan(4);

  // Test arguments

  desc = 'Passing in a non-array should return false';
  actual = filter(greaterThan(1), 1);
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'Passing in a non-function should return false';
  actual = filter(1, [1, 2]);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = [1, 2, 3];
  const b = 1;
  const c = [2, 3];

  desc = join('filter(greaterThan(', b, '), ', a, ') should return an array');
  actual = toType(filter(greaterThan(b), a));
  expected = 'array';
  t.equal(actual, expected, desc);

  desc = join(['greaterThan(1) applied to [', a, '] should return [', c, ']']);
  actual = filter(greaterThan(b), a);
  expected = c;
  t.deepEqual(actual, expected, desc);

  t.end();
});
