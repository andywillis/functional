import { test } from 'blue-tape';
import { join, toType, addInt } from '../index.js';

let actual;
let expected;
let desc;

test('addInt()', (t) => {
  t.plan(3);

  // Test arguments

  desc = 'addInt() (no argument specified) should return false';
  actual = addInt();
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'addInt(1) should return a function';
  actual = toType(addInt(1));
  expected = 'function';
  t.equal(actual, expected, desc);

  // Test return

  const a = 3;
  const b = 5;

  desc = join(['addInt(', a, ')(', a, ') should return true']);
  actual = addInt(a)(b);
  expected = 8;
  t.equal(actual, expected, desc);

  t.end();
});
