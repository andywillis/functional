import test from 'blue-tape';
import { toType, reduce, sum } from '../index.js';

const a = [1, 2, 3];
const b = 6;
const c = 10;

let actual;
let expected;
let desc;

test('reduce()', (t) => {
  t.plan(5);

  actual = reduce(sum, 1);
  expected = false;
  desc = 'Passing in a non-array should return false';
  t.equal(actual, expected, desc);

  actual = reduce(1, [1, 2]);
  expected = false;
  desc = 'Passing in a non-function should return false';
  t.equal(actual, expected, desc);

  actual = toType(reduce(sum, a));
  expected = 'number';
  desc = 'sum() operating on an array should return a number';
  t.equal(actual, expected, desc);

  actual = reduce(sum, a);
  expected = b;
  desc = ['sum() applied to ', a, ' should return ', b].join('');
  t.equal(actual, expected, desc);

  actual = reduce(sum, a);
  expected = c;
  desc = ['sum() applied to ', a, ' should not return ', c].join('');
  t.notEqual(actual, expected, desc);

  t.end();
});
