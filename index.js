/**
 * Simple each function
 * @param  {Function}  fn     Iterator
 * @param  {Array} params     Array
 */
function each(fn, arr) {
  let index = -1;
  const len = arr.length;
  while (++index < len) {
    fn(arr[index], index, arr);
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
 * Simple compose function
 * @param  {Params} fns List of fn
 * @return {Any}        [description]
 */
export function compose(...fns) {
  return function (...args) {
    for (let i = fns.length - 1; i >= 0; i--) {
      args = [fns[i].apply(this, args)];
    }
    return args[0];
  };
}

/**
 * Simple sequence function
 * @param  {Params} args Function list
 * @return {Any}         Output
 */
export function sequence(...args) {
  return compose.apply(this, args.reverse());
}

/**
 * Simple sum function
 * @param {Number} a Number
 * @param {Number} b Number
 */
export const sum = (a, b) => a + b;

/**
 * [description]
 * @param  {[type]} n) [description]
 * @return {[type]}    [description]
 */
export const addInt = (n) => (el) => el + n;

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
 * Simple lessThan function
 * @param  {[type]} n) [description]
 * @return {[type]}    [description]
 */
export const lessThan = (n) => (e) => e < n;

/**
 * Returns the proper name of a JS object
 * @param  {Object} x JS object
 * @return {String}   String
 */
export function toType(x) {
  return ({}).toString.call(x).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
