import test from 'blue-tape';
import { toType } from '../index.js';

const a = [];
const b = {};
const c = 1;
const d = 'a';
const e = null;
const f = undefined;

let actual;
let expected;
let desc;

test('toType()', (t) => {
  t.plan(7);

  actual = typeof toType(a);
  expected = 'string';
  desc = 'should return a string';
  t.equal(actual, expected, desc);

  actual = toType(a);
  expected = 'array';
  desc = 'toType([]) should return "array"';
  t.equal(actual, expected, desc);

  actual = toType(b);
  expected = 'object';
  desc = 'toType({}) should return "object"';
  t.equal(actual, expected, desc);

  actual = toType(c);
  expected = 'number';
  desc = 'toType(1) should return "number"';
  t.equal(actual, expected, desc);

  actual = toType(d);
  expected = 'string';
  desc = 'toType(\'a\') should return "string';
  t.equal(actual, expected, desc);

  actual = toType(e);
  expected = 'null';
  desc = 'toType(null) should return "null"';
  t.equal(actual, expected, desc);

  actual = toType(f);
  expected = 'undefined';
  desc = 'toType(undefined) should return "undefined"';
  t.equal(actual, expected, desc);

  t.end();
});
