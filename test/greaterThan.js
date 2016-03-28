import test from 'blue-tape';
import { greaterThan } from '../index.js';

const a = 3;
const b = 1;
const c = 5;

let actual;
let expected;
let desc;

test('greaterThan()', (t) => {
  t.plan(3);

  actual = typeof greaterThan(a);
  expected = 'function';
  desc = 'should return a function';
  t.equal(actual, expected, desc);

  actual = greaterThan(a)(c);
  expected = true;
  desc = ['(', c, ' > ', a, ') should return true'].join('');
  t.equal(actual, expected, desc);

  actual = greaterThan(a)(b);
  expected = false;
  desc = ['(', b, ' > ', a, ') should return false'].join('');
  t.equal(actual, expected, desc);

  t.end();
});
