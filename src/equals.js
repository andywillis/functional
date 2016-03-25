/**
 * Simple value checker
 * @param  {Number/String} n Value to check
 * @return {Function}   Curried function
 */
export default function equals(n) {
  return function (e) { return n === e; };
}
