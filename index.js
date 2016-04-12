/**
 * Returns the proper name of a JS object
 * @param  {Object} x JS object
 * @return {String}   String
 */
export const toType = (x) => (
  ({}).toString.call(x).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
);

/**
 * Checks if argument is null
 * @param  {All} x Argument to be checked
 * @return {Boolean}   is null
 */
export const isNull = (x) => x && (toType(x) === 'null');

/**
 * Checks if argument is undefined
 * @param  {All} x Argument to be checked
 * @return {Boolean}   is undefined
 */
export const isUndefined = (x) => x && (toType(x) === 'undefined');

/**
 * Checks if argument is an array
 * @param  {All} x Argument to be checked;
 * @return {Boolean}     is an array
 */
export const isArray = (x) => x && toType(x) === 'array';

/**
 * Checks if argument is an object
 * @param  {All} x Argument to be checked;
 * @return {Boolean}     is an object
 */
export const isObject = (x) => x && !isNull(x) && toType(x) === 'object';

/**
 * Checks if argument is a function
 * @param  {All} x Argument to be checked;
 * @return {Boolean}     is an function
 */
export const isFunction = (x) => x && toType(x) === 'function';

/**
 * Checks if argument is a string
 * @param  {All} x Argument to be checked
 * @return {Boolean}   is a string
 */
export const isString = (x) => x && toType(x) === 'string';

/**
 * Checks if argument is ann integer
 * @param  {All} x Argument to be checked
 * @return {Boolean}   is an integer
 */
export const isInteger = (x) => (
  (toType(x) === 'number') && (x >= 0) && (x % 1 === 0)
);

/**
 * Returns JSON
 * @param  {Any} obj Object
 * @return {String}     JSON
 */
export const toJSON = (x) => {
  if (!x || isNull(x) || isUndefined(x) || isFunction(x)) return false;
  return JSON.stringify(x);
};

/**
 * Returns a string from an array
 * @param  {Array} arr       Array
 * @param  {String} delimeter Join delimeter
 * @return {String}           String
 */
export const join = (arr, delimeter) => {
  if (!isArray(arr)) return false;
  return arr.join(delimeter || '');
};

/**
 * Simple each function
 * @param  {Function}  fn     Iterator
 * @param  {Array} params     Array
 */
function each(fn, arr) {
  if (!isArray(arr) || !isFunction(fn)) return false;
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
export const reduce = (fn, arr, init) => {
  if (!isArray(arr) || !isFunction(fn)) return false;
  let base = init || 0;
  each((el, i, orig) => {
    base = fn(base, el, i, orig);
  }, arr);
  return base;
};

/**
 * Simple map function
 * @param  {Function}  fn     Iterator
 * @param  {Array}     params Array
 * @return {Array}           Array
 */
export const map = (fn, arr) => {
  if (!isArray(arr) || !isFunction(fn)) return false;
  const out = [];
  each((el, i, orig) => {
    out.push(fn(el, i, orig));
  }, arr);
  return out;
};

/**
 *
 * Simple filter function
 * @param  {Function}  fn     Iterator
 * @param  {Array} params     Array
 * @return {Array}           Array
 */
export const filter = (fn, arr) => {
  if (!isArray(arr) || !isFunction(fn)) return false;
  const out = [];
  each((el, i, orig) => {
    if (fn(el, i, orig)) out.push(el);
  }, arr);
  return out;
};

/**
 * Does each element satisfy the test
 * @param  {Function} fn  [description]
 * @param  {[type]}   arr [description]
 * @return {[type]}       [description]
 */
export const every = (fn, arr) => {
  if (!isArray(arr) || !isFunction(fn)) return false;
  let index = -1;
  const len = arr.length;
  while (++index < len) {
    if (!fn(arr[index], index, arr)) return false;
  }
  return true;
};

/**
 * Simple compose function
 * @param  {Params} fns List of fn
 * @return {Any}        [description]
 */
export const compose = (...fns) => {
  if (!fns.length) return false;
  return function (...args) {
    for (let i = fns.length - 1; i >= 0; i--) {
      args = [fns[i].apply(this, args)];
    }
    return args[0];
  };
};

/**
 * Simple sequence function
 * @param  {Params} args Function list
 * @return {Any}         Output
 */
export const sequence = (...fns) => {
  if (!fns.length) return false;
  return compose.apply(this, fns.reverse());
};

/**
 * Pick out object property values
 * @param  {String} p property key
 * @return {Function}    A function to test element property p
 */
export const pick = (...args) => {
  const fn = (args.length === 2) ? args.shift() : null;
  const p = args[0];
  if ((fn && !isFunction(fn)) || !isString(p)) return false;
  return el => (fn ? fn(el[p]) : el[p]);
};

/**
 * Simple sum function
 * @param {Number} a Number
 * @param {Number} b Number
 */
export const sum = (a, b) => {
  if (!isInteger(a) || !isInteger(b)) return false;
  return a + b;
};

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
export const square = (x) => {
  if (!isInteger(x)) return false;
  return x * x;
};

/**
 * Simple value checker
 * @param  {Number/String} n Value to check
 * @return {Function}   Function
 */
export const equalTo = (n) => {
  if (!n) return false;
  return el => n === el;
};

/**
 * Simple sum function
 * @param {Number} a Number
 * @param {Number} b Number
 */
export const multiply = (a, b) => {
  if (!a || !b) return false;
  if (!isInteger(a) || !isInteger(b)) return false;
  return a * b;
};

/**
 * Simple greaterThan function
 * @param  {Number} n) Number to test
 * @return {Boolean}   Result of test
 */
export const greaterThan = (n) => {
  if (!n) return false;
  return el => el > n;
};

/**
 * Simple lessThan function
 * @param  {[type]} n) [description]
 * @return {[type]}    [description]
 */
export const lessThan = (n) => (e) => e < n;

/**
 * Returns object keys
 * @param  {Object} obj Object
 * @return {Array}     Keys
 */
export const keys = (x) => (
  isObject(x) && Object.keys(x)
);

/**
 * Returns object values
 * @param  {Object} obj Object
 * @return {Array}      Values
 */
export const values = (x) => (
  isObject(x) && map((el) => x[el], keys(x))
);

/**
 * Creates objects from mixins
 * @param  {Objects} args Set of mixins
 * @return {Object}       New object
 */
export const composeObj = (...args) => (
  Object.assign.apply({}, args)
);

/**
 * Checks whether two arrays share the same elements
 * @param  {Array} arr1 Array 1
 * @return {Function}   Tests the arr1 against any new array
 */
export const hasSameElements = (x) => {
  if (!x || !isArray(x)) return false;
  return function (y) {
    if (x.length !== y.length) return false;
    return every(el => x.indexOf(el) > -1, y);
  };
};
