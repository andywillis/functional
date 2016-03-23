/**
 * Calls a function for each element
 * @param  {Array}   arr Array
 * @param  {Function} fn  Iterator
 */
function each(arr, fn) {
  for (let i = 0, l = arr.length; i < l; i++) {
    fn(arr[i], i, arr);
  }
}

/**
 * Simple reduce function using `each`
 * @param  {Array}   arr  Array
 * @param  {Function} fn   Iterator
 * @param  {Integer/Array/Object}   base Inital value
 * @return {Integer/Array/Object}        Return value
 */
export function reduce(arr, fn, init) {
  let base = init || 0;
  each(arr, (el, i, orig) => {
    base = fn(base, el, i, orig);
  });
  return base;
}

/**
 * Simple map function using `each`
 * @param  {Array}   arr Array
 * @param  {Function} fn  Iterator
 * @return {Array}       Array
 */
export function map(arr, fn) {
  const out = [];
  each(arr, (el, i, orig) => {
    out.push(fn(el, i, orig));
  });
  return out;
}

/**
 * Simple filter function
 * @param  {Array}   arr Array
 * @param  {Function} fn  Function
 * @return {Array}       Array
 */
export function filter(arr, fn) {
  const out = [];
  each(arr, (el, i, orig) => {
    if (fn(el)) out.push(el);
  });
  return out;
}

/**
 * Simple add function
 * @param {Number} a Number
 * @param {Number} b Number
 */
export function add(a, b) {
  return a + b;
}

/**
 * Curried function to check for equality
 * @param  {Number} n Number to check values against
 * @return {Function}   Curried function
 */
export function integerEquals(n) {
  return function (el) { return n === el; }
}