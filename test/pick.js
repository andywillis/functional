import test from 'blue-tape';
import { toJSON, join, filter, greaterThan, toType, pick, map } from '../index.js';

let actual;
let expected;
let desc;

test('pick()', (t) => {
  t.plan(7);

  // Test arguments

  desc = 'Should return a function';
  actual = toType(pick('id'));
  expected = 'function';
  t.equal(actual, expected, desc);

  desc = 'pick() (no argument specified) should return false';
  actual = pick();
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'pick(2) should return false';
  actual = pick(2);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = { id: 1 };
  const b = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const c = [1, 2, 3];
  const d = [{ id: 2 }, { id: 3 }];

  desc = 'Should return 1';
  actual = pick('id')(a);
  expected = 1;
  t.deepEqual(actual, expected, desc);

  desc = 'Should return an array when used with map()';
  actual = toType(map(pick('id'), b));
  expected = 'array';
  t.equal(actual, expected, desc);

  desc = join(['map(pick(\'id\'),', toJSON(b), ') should return correct array of integers']);
  actual = map(pick('id'), b);
  expected = c;
  t.deepEqual(actual, expected, desc);

  desc = join(['filter(pick(\'id\'),', toJSON(b), ') should return correct array of objects']);
  actual = filter(pick(greaterThan(1), 'id'), b);
  expected = d;
  t.deepEqual(actual, expected, desc);

  t.end();
});
