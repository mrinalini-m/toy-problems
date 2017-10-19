const gcd = function(n1, n2) {
  if (n1 % n2 === 0)  {
    return n2;
  }
  return gcd(n2, n1 % n2);
};

const lcm = (n1, n2) => {
  return (n1*n2)/gcd(n1, n2);
}

console.log(lcm(53, 111)); // [2, 5]
console.log(gcd(53, 111));

