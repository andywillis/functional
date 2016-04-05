import test from 'blue-tape';
import { toType, pick, map } from '../index.js';

const a = [{ id: 1 }, { id: 2 }, { id: 3 }];
const b = [1, 2, 3];
const c = { id: 1};
const d = 1;

const picked1 = pick('id');
const picked2 = map(pick('id'), a);

let actual;
let expected;
let desc;

test('pick()', (t) => {
  t.plan(4);

  actual = toType(picked1);
  expected = 'function';
  desc = 'should return a function';
  t.equal(actual, expected, desc);

  actual = picked1(c);
  expected = d;
  desc = 'should return 1';
  t.equal(actual, expected, desc);

  actual = toType(picked2);
  expected = 'array';
  desc = 'should return and array';
  t.equal(actual, expected, desc);

  actual = picked2;
  expected = b;
  desc = 'map(pick(\'id\'), sample) should return correct array';
  t.deepEqual(actual, expected, desc);

  t.end();
});
