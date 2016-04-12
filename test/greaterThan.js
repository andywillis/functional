import test from 'blue-tape';
import { toType, join, greaterThan } from '../index.js';

let actual;
let expected;
let desc;

test('greaterThan()', (t) => {
  t.plan(4);

  // Test arguments

  desc = 'Should return a function';
  actual = toType(greaterThan(1));
  expected = 'function';
  t.equal(actual, expected, desc);

  desc = 'greaterThan() should return false (no argument specified)';
  actual = greaterThan();
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = 3;
  const b = 1;
  const c = 5;

  desc = join(['greaterThan(', a, ')(', c, ') should return true']);
  actual = greaterThan(a)(c);
  expected = true;
  t.equal(actual, expected, desc);

  desc = join(['greaterThan(', a, ')(', b, ') should return false']);
  actual = greaterThan(a)(b);
  expected = false;
  t.equal(actual, expected, desc);

  t.end();
});
