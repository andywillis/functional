import test from 'blue-tape';
import { join, toType, equalTo } from '../index.js';

const a = 3;
const b = 5;

let actual;
let expected;
let desc;

test('equalTo()', (t) => {
  t.plan(4);

  desc = 'equalTo(n) should return a function';
  actual = toType(equalTo(a));
  expected = 'function';
  t.equal(actual, expected, desc);

  desc = 'equalTo() should return false (no argument specified)';
  actual = equalTo();
  expected = false;
  t.equal(actual, expected, desc);

  desc = join(['equalTo(', a, ')(', a, ') should return true']);
  actual = equalTo(a)(a);
  expected = true;
  t.equal(actual, expected, desc);

  actual = equalTo(a)(b);
  expected = false;
  desc = join(['equalTo(', a, ')(', b, ') should return false']);
  t.equal(actual, expected, desc);

  t.end();
});
