/*
1. Write a JavaScript program to calculate the factorial of a number. 
*/

function factorial(n) {
  if (n<0) {
    return;
  }
  if (n === 0) {
    return 1;
  }
  return n*factorial(n-1);
}

function tailEndfactorial(n) {
  function inner(n, acc) { 
    if (n<0) {
      return;
    }
    if (n === 0) {
      return acc;
    }
    return inner(n-1, acc*n);
  }

  return inner(n, 1);
}

console.log(factorial(3));
console.log(tailEndfactorial(3));
console.log(factorial(7));
console.log(tailEndfactorial(7));
