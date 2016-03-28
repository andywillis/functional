import test from 'blue-tape';
import { square } from '../index.js';

const a = 4;

let actual;
let expected;
let desc;

test('square()', (t) => {
  t.plan(2);

  actual = typeof square(a);
  expected = 'number';
  desc = 'should return a number';
  t.equal(actual, expected, desc);

  actual = square(a);
  expected = a * a;
  desc = ['(', a, ' squared) should return ', a * a].join('');
  t.equal(actual, expected, desc);

  t.end();
});
