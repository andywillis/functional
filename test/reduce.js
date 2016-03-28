import test from 'blue-tape';
import { toType, reduce, sum } from '../index.js';

const a = [1, 2, 3];
const b = 6;
const c = 10;
const reduced = reduce(sum, a);

let actual;
let expected;
let desc;

test('reduce()', (t) => {
  t.plan(3);

  actual = toType(reduced);
  expected = 'number';
  desc = 'should return an array';
  t.equal(actual, expected, desc);

  actual = reduced;
  expected = b;
  desc = ['sum() applied to [', a, '] should return ', b].join('');
  t.equal(actual, expected, desc);

  actual = reduced;
  expected = c;
  desc = ['sum() applied to [', a, '] should not return ', c].join('');
  t.notEqual(actual, expected, desc);

  t.end();
});
