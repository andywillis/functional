function triple(x) {
  return x * 3;
}

function plusOne(x) {
  return x + 1;
}

function id(x) { return x; }

function compN(funcs) {
  return funcs.reverse().reduce(function (g, f) {
    return function (x) {
      return g(f(x));
    }
  }, id);
}


var g = compN([triple, triple, plusOne]);
console.log(g)
// g(x) = (triple • triple • plusOne)(x)

var result = g(1);
console.log(result);
//=> 18