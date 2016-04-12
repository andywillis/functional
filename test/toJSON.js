import { test } from 'blue-tape';
import { join, toType, toJSON } from '../index.js';

let actual;
let expected;
let desc;

test('toJSON()', (t) => {
  t.plan(5);

  // Test arguments

  desc = 'toJSON() (no argument specified) should return false';
  actual = toJSON();
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'toJSON(undefined) should return false';
  actual = toJSON(undefined);
  expected = false;
  t.equal(actual, expected, desc);

  desc = 'toJSON(null) should return false';
  actual = toJSON(null);
  expected = false;
  t.equal(actual, expected, desc);

  // Test return

  const a = { test: 0 };
  const b = toJSON({ test: 0 });

  desc = join(['toJSON(', toJSON(a), ') should return a string']);
  actual = toType(toJSON(a));
  expected = 'string';
  t.equal(actual, expected, desc);

  desc = join(['toJSON(', toJSON(a), ') should return ', toJSON(a)]);
  actual = toJSON(a);
  expected = b;
  t.deepEqual(actual, expected, desc);

  t.end();
});
