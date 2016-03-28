import test from 'blue-tape';
import { toType, greaterThan, filter } from '../index.js';

const a = [1, 2, 3];
const b = 1;
const c = [2, 3];
const filtered = filter(greaterThan(b), a);

let actual;
let expected;
let desc;

test('filter()', (t) => {
  t.plan(2);

  actual = toType(filtered);
  expected = 'array';
  desc = 'should return an array';
  t.equal(actual, expected, desc);

  actual = filtered;
  expected = c;
  desc = ['greaterThan(1) applied to [', a, '] should return [', c, ']'].join('');
  t.deepEqual(actual, expected, desc);

  t.end();
});
