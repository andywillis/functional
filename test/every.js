import test from 'blue-tape';
import { join, toType, toJSON, greaterThan, every } from '../index.js';

let actual;
let expected;
let desc;

test('every()', (t) => {
  t.plan(5);

  // Test arguments

  desc = 'Passing in a non-array should return false';
  actual = every(greaterThan(2), 1);
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'Passing in a non-function should return false';
  actual = every(1, [1, 2]);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = [1, 2, 2];
  const b = [4, 5, 6];
  const aa = toJSON([1, 2, 2]).replace(/"/g, '');
  const bb = toJSON([4, 5, 6]).replace(/"/g, '');

  desc = 'every(greaterThan(2), a) should return a boolean';
  actual = toType(every(greaterThan(2), a));
  expected = 'boolean';
  t.equal(actual, expected, desc);

  desc = join(['every(greaterThan(2), ', aa, ') should return false']);
  actual = every(greaterThan(2), a);
  expected = false;
  t.deepEqual(actual, expected, desc);

  desc = join(['every(greaterThan(2), ', bb, ') should return true']);
  actual = every(greaterThan(2), b);
  expected = true;
  t.deepEqual(actual, expected, desc);

  t.end();
});
