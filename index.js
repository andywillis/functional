/**
 * [getArgs description]
 * @param  {[type]} args [description]
 * @return {[type]}      [description]
 */
function getArgs(args) {
  return Array.isArray(args[0]) ? args[0] : args;
}

/**
 * [each description]
 * @param  {Function} fn [description]
 * @return {[type]}      [description]
 */
function each(fn, ...params) {
  const args = getArgs(params);
  for (let i = 0, l = args.length; i < l; i++) {
    fn(args[i], i, args);
  }
}

/**
 * Simple reduce function using `each`
 * @param  {Array}   arr  Array
 * @param  {Function} fn   Iterator
 * @param  {Integer/Array/Object}   base Inital value
 * @return {Integer/Array/Object}        Return value
 */
export function reduce(fn, arr, init) {
  let base = init || 0;
  each((el, i, orig) => {
    base = fn(base, el, i, orig);
  }, arr);
  return base;
}

/**
 * Simple map function using `each`
 * @param  {Array}   arr Array
 * @param  {Function} fn  Iterator
 * @return {Array}       Array
 */
export function map(fn, ...params) {
  const args = getArgs(params);
  const out = [];
  each((el, i, orig) => {
    out.push(fn(el, i, orig));
  }, args);
  return out;
}

/**
 * Simple filter function
 * @param  {Array}   arr Array
 * @param  {Function} fn  Function
 * @return {Array}       Array
 */
export function filter(fn, ...params) {
  const args = getArgs(params);
  const out = [];
  each((el, i, orig) => {
    if (fn(el)) out.push(el);
  }, args);
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
 * [description]
 * @param  {[type]} n) [description]
 * @return {[type]}    [description]
 */
export const greaterThan = (n) => (e) => e > n;

/**
 * [description]
 * @param  {[type]} x [description]
 * @return {[type]}   [description]
 */
export const toType = (x) => {
  return ({}).toString.call(x).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}