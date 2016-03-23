import test from 'blue-tape';

import {
  add,
  map,
  filter,
  integerEquals,
  reduce,
} from '../src/functional.js';


// setup
const arr = [1, 2, 3];


// add
test('add', (t) => {
  t.plan(1);

  const out = add(1, 2);
  t.deepEqual(out, 3, 'Output of function should equal 3');

  t.end();
});


// integerEquals
test('integerEquals', (t) => {
  t.plan(3);

  const equalsThree = integerEquals(3);
  t.equal(typeof equalsThree, 'function', 'Output of function should be a function');

  const out = equalsThree(3);
  t.equal(out, true, 'Output of function equalsThree(3) should be true');

  const out2 = equalsThree(4);
  t.equal(out2, false, 'Output of function equalsThree(4) should be false');

  t.end();
});


// map
test('map', (t) => {
  t.plan(1);

  const out = map(arr, (el) => el + 1);
  t.deepEqual(out, [2, 3, 4], 'Output of function should match [2, 3, 4]');

  t.end();
});


// reduce
test('reduce', (t) => {
  t.plan(2);

  const out = reduce(arr, (p, c) => p + c);
  t.equal(out, 6, 'Output of function using callback should equal 6');

  const out2 = reduce(arr, add);
  t.equal(out2, 6, 'Output of function using `add` should equal 6');

  t.end();
});


// filter
test('filter', (t) => {
  t.plan(2);

  const out = filter(arr, (el) => el === 2);
  t.deepEqual(out, [2], 'Output of function should match [2]');

  const out2 = filter(arr, integerEquals(2));
  t.deepEqual(out2, [2], 'Output of function should match [2]');

  t.end();
});
