import test from 'blue-tape';
import { filter, greaterThan, toType, pick, map } from '../index.js';

let actual;
let expected;
let desc;

test('pick()', (t) => {
  t.plan(7);

  actual = toType(pick('id'));
  expected = 'function';
  desc = 'should return a function';
  t.equal(actual, expected, desc);

  actual = pick();
  expected = false;
  desc = 'pick() (no argument specified) should return false';
  t.equal(actual, expected, desc);

  actual = pick(2);
  expected = false;
  desc = 'pick(2) should return false';
  t.equal(actual, expected, desc);

  actual = pick('id')({ id: 1 });
  expected = 1;
  desc = 'should return [1, 2]';
  t.deepEqual(actual, expected, desc);

  actual = toType(map(pick('id'), [{ id: 1 }, { id: 2 }, { id: 3 }]));
  expected = 'array';
  desc = 'should return an array';
  t.equal(actual, expected, desc);

  actual = map(pick('id'), [{ id: 1 }, { id: 2 }, { id: 3 }]);
  expected = [1, 2, 3];
  desc = 'map(pick(\'id\'), sample) should return correct array';
  t.deepEqual(actual, expected, desc);

  actual = filter(pick(greaterThan(1), 'id'), [{ id: 1 }, { id: 2 }, { id: 3 }]);
  expected = [{ id: 2 }, { id: 3 }];
  desc = 'filter(pick(\'id\'), sample) should return correct array of objects';
  t.deepEqual(actual, expected, desc);

  t.end();
});
