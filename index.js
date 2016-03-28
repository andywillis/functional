/**
 * Returns an array of function arguments
 * @param  {Array} args Arguments
 * @return {Array}      Array of remunged arguments
 */
function getArgs(args) {
  return Array.isArray(args[0]) ? args[0] : args;
}

/**
 * Simple each function
 * @param  {Function}  fn     Iterator
 * @param  {...[Param list]} params Function parameters
 */
function each(fn, ...params) {
  const args = getArgs(params);
  for (let i = 0, l = args.length; i < l; i++) {
    fn(args[i], i, args);
  }
}

/**
 * Simple reduce function
 * @param  {Function} fn   Iterator
 * @param  {Array}   arr  Array
 * @param  {Object/Integer/String}   init Initial value
 * @return {Object/Integer/String}        Reduced array
 */
export function reduce(fn, arr, init) {
  let base = init || 0;
  each((el, i, orig) => {
    base = fn(base, el, i, orig);
  }, arr);
  return base;
}

/**
 * Simple map function
 * @param  {Function}  fn     Iterator
 * @param  {Array}     params Array
 * @return {Array}           Array
 */
export function map(fn, arr) {
  const out = [];
  each((el, i, orig) => {
    out.push(fn(el, i, orig));
  }, arr);
  return out;
}

/**
 * Simple filter function
 * @param  {Function}  fn     Iterator
 * @param  {Array} params     Array
 * @return {Array}           Array
 */
export function filter(fn, arr) {
  const out = [];
  each((el, i, orig) => {
    if (fn(el, i, orig)) out.push(el);
  }, arr);
  return out;
}

/**
 * Simple add function
 * @param {Number} a Number
 * @param {Number} b Number
 */
export const sum = (a, b) => a + b;

/**
 * Simple square function
 * @param  {Number} num Integer
 * @return {Number}     Square
 */
export const square = (num) => num * num;

/**
 * Simple value checker
 * @param  {Number/String} n Value to check
 * @return {Function}   Function
 */
export const equalTo = (n) => (e) => n === e;

/**
 * Simple sum function
 * @param {Number} a Number
 * @param {Number} b Number
 */
export const multiply = (a, b) => a * b;

/**
 * Simple greaterThan function
 * @param  {Number} n) Number to test
 * @return {Boolean}   Result of test
 */
export const greaterThan = (n) => (e) => e > n;

/**
 * Returns the proper name of a JS object
 * @param  {Object} x JS object
 * @return {String}   String
 */
export function toType(x) {
  return ({}).toString.call(x).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
