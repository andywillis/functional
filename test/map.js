import test from 'blue-tape';
import { join, toType, square, map } from '../index.js';

let actual;
let expected;
let desc;

test('map()', (t) => {
  t.plan(4);

  // Test arguments

  desc = 'Passing in a non-array should return false';
  actual = map(square, 1);
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'Passing in a non-function should return false';
  actual = map(1, [1, 2]);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = [1, 2, 3];
  const b = [1, 4, 9];

  desc = 'map(square, arr) should return an array';
  actual = toType(map(square, a));
  expected = 'array';
  t.equal(actual, expected, desc);

  desc = join(['square() applied to ', a, ' should return ', b]);
  actual = map(square, a);
  expected = b;
  t.deepEqual(actual, expected, desc);

  t.end();
});
