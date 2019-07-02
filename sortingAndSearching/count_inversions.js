function countInversions(array) {
  function mergeAndCount(args) {
    const len = args[0].length;
    if (len <= 1) {
      return [args[0], 0];
    }
    const mergeL = mergeAndCount([args[0].slice(0, Math.max(len/2)), args[1]]);
    const mergeR = mergeAndCount([args[0].slice(Math.max(len/2)), args[1]]);
    const sorted = [];
    let i=0;
    let j=0;
    let count = mergeL[1] + mergeR[1];
    while (i<mergeL[0].length && j<mergeR[0].length) {
      if (mergeL[0][i] <= mergeR[0][j]) {
        sorted.push(mergeL[0][i]);
        i++;
      } else if (mergeR[0][j] <= mergeL[0][i]) {
        count += mergeL[0].length - i;
        sorted.push(mergeR[0][j]);
        j++;
      }
    }
    return [sorted.concat(mergeL[0].slice(i), mergeR[0].slice(j)), count];
  }
  return mergeAndCount([array, 0])[1];
}

console.log(countInversions([6,5,4,3,2,1]));