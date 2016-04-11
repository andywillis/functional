import test from 'blue-tape';
import { toType, join, greaterThan } from '../index.js';

const a = 3;
const b = 1;
const c = 5;

let actual;
let expected;
let desc;

test('greaterThan()', (t) => {
  t.plan(4);

  actual = toType(greaterThan(a));
  expected = 'function';
  desc = 'Should return a function';
  t.equal(actual, expected, desc);

  desc = 'greaterThan() should return false (no argument specified)';
  actual = greaterThan();
  expected = false;
  t.equal(actual, expected, desc);

  actual = greaterThan(a)(c);
  expected = true;
  desc = join(['(', c, ' > ', a, ') should return true']);
  t.equal(actual, expected, desc);

  actual = greaterThan(a)(b);
  expected = false;
  desc = join(['(', b, ' > ', a, ') should return false']);
  t.equal(actual, expected, desc);

  t.end();
});
