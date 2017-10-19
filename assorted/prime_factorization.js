function primeFactorize(n) {
  var result = [];
  function inner(arr) {
    for (let i = 0; i < arr.length; i++) {
      var sqrt = Math.floor(Math.sqrt(arr[i]));
      for (let j = sqrt; j >= 1; j--) {
        if (j === 1) {
          result.push(...arr);
          return;
        } else if (arr[i]%j === 0) {
          inner([ arr[i]/j, j]);
          break;
        } 
      }
    }
  }

  inner([n]);
  return result;
}

console.log(primeFactorize(11));
console.log(primeFactorize(36));
