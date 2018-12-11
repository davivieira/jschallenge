// Execution context - closure / currying

function sumWith(x) {
  return function(y) {
    return x + y;
  }
}

const result = sumWith(2)(3);

console.log(result);
