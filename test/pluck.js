import test from 'blue-tape';
import { toType, pluck, greaterThan, filter } from '../index.js';

const a = [{ id: 1}, { id: 2}, { id: 3}];
const b = 1;
const c = [{ id: 2}, { id: 3}];
const plucked = filter(pluck(greaterThan(b), 'id'), a);

let actual;
let expected;
let desc;

test('pluck()', (t) => {
  t.plan(2);

  actual = toType(plucked);
  expected = 'array';
  desc = 'should return an array';
  t.equal(actual, expected, desc);

  actual = plucked;
  expected = c;
  desc = 'filter(pluck(greaterThan(1), \'id\'), sample) should return correct array';
  t.deepEqual(actual, expected, desc);

  t.end();
});
