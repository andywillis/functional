'use strict';

function add(a, b) {
  return a + b;
}

function square(num) {
  return num * num;
}

function forEach(arr, fn) {
  for (let i = 0, l = arr.length; i < l; i++) {
    fn(arr[i]);
  }
}

function reduce(arr, fn, base) {
  forEach(arr, function (el) {
    base = fn(base, el);
  });
  return base;
}

function map(arr, fn) {
  let out = [];
  forEach(arr, function (el) {
    out.push(fn(el));
  });
  return out;
}

function sumSquares(arr) {
  return reduce(map(arr, square), add, 0);
}

function count(arr, fn) {
  return reduce(arr, function (p, c) {
    return fn(c) ? p + 1 : p;
  }, 0);
}

function equal(n) {
  return function (e) { return n === e; }
}

let arr = [1, 4, 5, 1];

var out = count(arr, equal(1));

console.log(out);