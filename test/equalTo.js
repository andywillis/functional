import test from 'blue-tape';
import { equalTo } from '../index.js';

const a = 3;
const b = 5;

let actual;
let expected;
let desc;

test('equalTo()', (t) => {
  t.plan(3);

  actual = typeof equalTo(a);
  expected = 'function';
  desc = 'should return a function';
  t.equal(actual, expected, desc);

  actual = equalTo(a)(a);
  expected = true;
  desc = ['(', a, ' === ', a, ') should return true'].join('');
  t.equal(actual, expected, desc);

  actual = equalTo(a)(b);
  expected = false;
  desc = ['(', a, ' === ', b, ') should return false'].join('');
  t.equal(actual, expected, desc);

  t.end();
});
