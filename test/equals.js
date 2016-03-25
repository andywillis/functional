import test from 'blue-tape';
import equals from '../src/equals.js';

test('equals() output type', (assert) => {
  const a = 1;

  const actual = typeof equals(a);
  const expected = 'function';

  assert.equal(actual, expected, 'equals() should return a function');

  assert.end();
});
