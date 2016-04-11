import test from 'blue-tape';
import { join, toType, square, map } from '../index.js';

const a = [1, 2, 3];
const b = [1, 4, 9];

let actual;
let expected;
let desc;

test('map()', (t) => {
  t.plan(4);

  actual = map(square, 1);
  expected = false;
  desc = 'Passing in a non-array should return false';
  t.equal(actual, expected, desc);

  actual = map(1, [1, 2]);
  expected = false;
  desc = 'Passing in a non-function should return false';
  t.equal(actual, expected, desc);

  actual = toType(map(square, a));
  expected = 'array';
  desc = 'map(square, arr) should return an array';
  t.equal(actual, expected, desc);

  actual = map(square, a);
  expected = b;
  desc = join(['square() applied to ', a, ' should return ', b]);
  t.deepEqual(actual, expected, desc);

  t.end();
});
