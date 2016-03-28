import test from 'blue-tape';
import { toType, square, map } from '../index.js';

const a = [1, 2, 3];
const b = [1, 4, 9];
const squared = map(square, a);

let actual;
let expected;
let desc;

test('map()', (t) => {
  t.plan(2);

  actual = toType(squared);
  expected = 'array';
  desc = 'should return an array';
  t.equal(actual, expected, desc);

  actual = squared;
  expected = b;
  desc = ['square() applied to [', a, '] should return ', b].join('');
  t.deepEqual(actual, expected, desc);

  t.end();
});
