import test from 'blue-tape';
import { toJSON } from '../index.js';

const a = [{ id: 1}, { id: 2}, { id: 3}];
const b = toJSON(a);

let actual;
let expected;
let desc;

test('pluck()', (t) => {
  t.plan(1);

  actual = toJSON(a);
  expected = b;
  desc = 'should return string';
  t.equal(actual, expected, desc);

  t.end();
});
