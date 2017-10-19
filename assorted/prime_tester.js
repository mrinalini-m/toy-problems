/*
A prime number is an integer greater than 1 that has no divisors other than itself and 1. Write a function that accepts a number and returns true if it’s a prime number, false if it’s not. The grader is looking at the efficiency of your solution (number of operations) as well as correctness! 
*/
const primeTester = (n) => {
  if (n === 2 || n === 1 || n%2 === 0) {
    return (n === 2);
  }
  const sqrt = Math.sqrt(n);
  if (sqrt === parseInt(sqrt)) { //return false for perfect squares
    return false;
  }
  let count = 3;
  while (count < sqrt) {
    if (n%count === 0) {
      return false;
    }
    count++;
  }
  return true;
}

console.log(primeTester(213));