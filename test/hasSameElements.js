import { test } from 'blue-tape';
import { join, toType, toJSON, hasSameElements } from '../index.js';

let actual;
let expected;
let desc;

test('hasSameElements()', (t) => {
  t.plan(6);

  // Test arguments

  desc = 'hasSameElements() (no argument specified) should return false';
  actual = hasSameElements();
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'hasSameElements({}) should return false';
  actual = hasSameElements({});
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'hasSameElements([]) should return a function';
  actual = toType(hasSameElements([1, 2]));
  expected = 'function';
  t.equal(actual, expected, desc);

  // Test return

  const a = [1, 3, 5];
  const b = [1, 3, 5, 7];
  const aa = toJSON([1, 3, 5]).replace(/"/g, '');
  const bb = toJSON([1, 3, 5, 7]).replace(/"/g, '');

  desc = join(['hasSameElements(', aa, ')(', aa, ') should return a boolean']);
  actual = toType(hasSameElements(a)(a));
  expected = 'boolean';
  t.equal(actual, expected, desc);

  desc = join(['hasSameElements(', aa, ')(', aa, ') should true']);
  actual = hasSameElements(a)(a);
  expected = true;
  t.deepEqual(actual, expected, desc);

  desc = join(['hasSameElements(', aa, ')(', bb, ') should return false']);
  actual = hasSameElements(a)(b);
  expected = false;
  t.deepEqual(actual, expected, desc);

  t.end();
});
