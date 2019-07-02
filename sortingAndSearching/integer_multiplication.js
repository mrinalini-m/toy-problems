function multiplyIntegers(x,y) {
  // const positive = ((x < 0 && y < 0) || (x > 0 && y > 0));//deal with negative nums later.
  //Javascript can't handle big nums, args must be given as strings.
  if (typeof x !== 'string' || typeof y !== 'string') {
    return "Please enter inputs as strings.";
  }
  const [ smaller, bigger ] = (x.length < y.length) ? [ x, y ] : [ y, x ];
  let res='';
  let numsToAdd = [];
  for (let i = smaller.length-1, tens = 0;  i >= 0, tens < smaller.length; i--, tens++) {
    let line = [];
    let carryOver = 0;
    for (let j= bigger.length-1;  j >= 0; j--) {
      let multiple = bigger[j] * smaller[i];
      multiple += carryOver;
      const multiStr = multiple.toString();
      if (multiple > 9 && j !== 0) {
        carryOver = parseInt(multiStr.slice(0, multiStr.length - 1));
        line.unshift(parseInt(multiStr[multiStr.length - 1]));
      } else {
        line.unshift(multiple);
        carryOver = 0;
      }
    }
    const joinedNum = line.join('')+'0'.repeat(tens);
    for (let k= joinedNum.length-1, l=0;  k >= 0, l<joinedNum.length; k--, l++) {
      numsToAdd[l] ? numsToAdd[l].push(joinedNum[k]) : numsToAdd.push([joinedNum[k]]);
    }
  }

  let carryOver = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    let partialSum = carryOver;
    for (let j = 0; j < numsToAdd[i].length; j++) {
      partialSum+=parseInt(numsToAdd[i][j]);
    }
    const partialSumStr = partialSum.toString();
    res = partialSumStr[partialSumStr.length -1] + res;
    carryOver = (partialSumStr.length > 1) ? parseInt(partialSumStr.slice(0, partialSumStr.length-1)) : 0; 
  }
  return res;
}



//doesn't work with BIG numbers
function karatsubaMultiply(x,y) {
  if (x.length === 1 && y.length === 1) {
    return parseInt(x)*parseInt(y);
  }
  const [ smaller, bigger ] = (x.length < y.length) ? [ x, y ] : [ y, x ];
  const n = bigger.length;
  const n_over_2 = bigger.length/2;
  const a = bigger.slice(0, n_over_2);
  const b = bigger.slice(n_over_2);
  const c = smaller.slice(-smaller.length, -n_over_2) || '0';
  const d = smaller.slice(-n_over_2);
  //Karatsuba only works when n is a power of 2. With Karatsuba method, x*y = res, where x = 10^n*a + b and y = 10^(n/2)c + d;
/* Todo: Figure out how to add/subtract for BIG NUMBERS. Use the bigNumAdd func from below  
  const ac = karatsubaMultiply(a,c);
  const bd = karatsubaMultiply(b,d);
  const a_plus_b  = bigNumAdd(a,b);
  const c_plus_d = bigNumAdd(c,d);
  const ad_plus_bc = karatsubaMultiply(a_plus_b, c_plus_d) - ac - bd; */
  const ac = parseInt(karatsubaMultiply(a,c));
  const bd = parseInt(karatsubaMultiply(b,d));
  const a_plus_b = (parseInt(a)+parseInt(b)).toString();
  const c_plus_d = (parseInt(c)+parseInt(d)).toString();
  const ad_plus_bc = parseInt(karatsubaMultiply(a_plus_b, c_plus_d)) - ac - bd;
  return (Math.pow(10,n)*ac) + (Math.pow(10,(n/2))*ad_plus_bc) + bd;
}

console.log(karatsubaMultiply('1234','56') === 1234 * 56)
console.log(karatsubaMultiply('98','1367') === 98*1367)

// console.log(karatsubaMultiply('3141592653589793238462643383279502884197169399375105820974944592','2718281828459045235360287471352662497757247093699959574966967627'))
// console.log('8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184' === '8539734222673567065463550869546574495034888535765114961879601127067743044893204848617875072216249073013374895871952806582723184')

function bigNumAdd(x,y) {
  const [ smaller, bigger ] = (x.length < y.length) ? [ x, y ] : [ y, x ];
  let numsToAdd = []; 
  // for (let i = smaller.length -1, j = bigger.length - 1, k=0; i >= 0, j>= 0, k <= smaller.length; i--, j--, k++) {
  let i = smaller.length -1,
      j = bigger.length - 1;
  while (j>=0) {
    if (i >= 0) {
      numsToAdd.push([smaller[i], bigger[j]]);
      i--;
    } else {
      numsToAdd.push([bigger[j]]);
    }
    j--;
  }

  let carryOver = 0;
  res = '';
  console.log(numsToAdd)
  // let carryOver = 0;
  for (let i = 0; i < numsToAdd.length; i++) {
    let partialSum = carryOver;
    for (let j = 0; j < numsToAdd[i].length; j++) {
      partialSum+=parseInt(numsToAdd[i][j]);
    }
    const partialSumStr = partialSum.toString();
    res = partialSumStr[partialSumStr.length -1] + res;
    carryOver = (partialSumStr.length > 1) ? parseInt(partialSumStr.slice(0, partialSumStr.length-1)) : 0; 
  }
  return res;
}


console.log(bigNumSubtract('13579', '2468'))