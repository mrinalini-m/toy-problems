/*
2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
*/

//しらない人 no solution
let gcd = function(n1, n2) {
  if (n1 % n2 === 0)  {
    return n2;
  }
  return gcd(n2, n1 % n2);
};
console.log(gcd(3, 12));
console.log(gcd(12,3));

//my solution
gdc = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }
  let smaller, bigger, possible;
  if (num1<num2) {
    smaller = num1;
    bigger = num2;
  } else {
    smaller = num2;
    bigger = num1;
  }

  if (bigger/2 < smaller) {
    possible = parseInt(bigger/2);
  }
  const recurse = (num1, num2, possible) => {
    if (num1 % possible === 0 && num2 % possible === 0) {
      return possible;
    }
    possible--;
    return recurse(num1, num2, possible);
  }
  return recurse(bigger, smaller, possible);
}

console.log(gdc(8,12));