import test from 'blue-tape';
import { join, toType, greaterThan, filter } from '../index.js';

const a = [1, 2, 3];
const b = 1;
const c = [2, 3];

let actual;
let expected;
let desc;

test('filter()', (t) => {
  t.plan(4);

  actual = filter(greaterThan(b), 1);
  expected = false;
  desc = 'Passing in a non-array should return false';
  t.equal(actual, expected, desc);

  actual = filter(1, [1, 2]);
  expected = false;
  desc = 'Passing in a non-function should return false';
  t.equal(actual, expected, desc);

  actual = toType(filter(greaterThan(b), a));
  expected = 'array';
  desc = 'filter(fn, arr) should return an array';
  t.equal(actual, expected, desc);

  actual = filter(greaterThan(b), a);
  expected = c;
  desc = join(['greaterThan(1) applied to [', a, '] should return [', c, ']']);
  t.deepEqual(actual, expected, desc);

  t.end();
});
