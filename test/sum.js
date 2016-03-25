import test from 'blue-tape';
import sum from '../src/sum.js';

test('sum() output type', (assert) => {
  const a = 1;
  const b = 2;

  const actual = typeof sum(a, b);
  const expected = 'number';

  assert.equal(actual, expected, 'sum() should return a number');

  assert.end();
});
