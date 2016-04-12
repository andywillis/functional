import { test } from 'blue-tape';
import { join, toType, equalTo } from '../index.js';

let actual;
let expected;
let desc;

test('equalTo()', (t) => {
  t.plan(4);

  // Test arguments

  desc = 'equalTo() (no argument specified) should return false';
  actual = equalTo();
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'equalTo(1) should return a function';
  actual = toType(equalTo(1));
  expected = 'function';
  t.equal(actual, expected, desc);

  // Test return

  const a = 3;
  const b = 5;

  desc = join(['equalTo(', a, ')(', a, ') should return true']);
  actual = equalTo(a)(a);
  expected = true;
  t.equal(actual, expected, desc);

  desc = join(['equalTo(', a, ')(', b, ') should return false']);
  actual = equalTo(a)(b);
  expected = false;
  t.equal(actual, expected, desc);

  t.end();
});
