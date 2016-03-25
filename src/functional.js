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
 * Recursive implementation of `each`
 * @param  {Array}   arr Array
 * @param  {Function} fn  Iterator
 */
function eachRecurse(arr, fn, i = 0) {
  if (!arr.length) return;
  fn(arr.shift(), i, arr);
  return eachRecurse(arr, fn, ++i);
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
export function sum(a, b) {
  return a + b;
}

/**
 * Simple square function
 * @param  {Number} num Integer
 * @return {Number}     Square
 */
export function square(num) {
  return num * num;
}

/**
 * Simple value checker
 * @param  {Number/String} n Value to check
 * @return {Function}   Curried function
 */
export function equals(n) {
  return function (e) { return n === e; }
}

/**
 * Curried function to check for equality
 * @param  {Number} n Number to check values against
 * @return {Function}   Curried function
 */
export function integerEquals(n) {
  return function (el) { return n === el; }
}