function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) {
    return arr;
  }
  const mergeL = mergeSort(arr.slice(0, parseInt(len/2)));
  const mergeR = mergeSort(arr.slice(parseInt(len/2), len));
  const sorted = [];
  let i=0, j=0;
  while (i<mergeL.length && j<mergeR.length) {
    if (mergeL[i] <= mergeR[j]) {
      sorted.push(mergeL[i]);
      i++;
    } else if (mergeR[j] <= mergeL[i]) {
      sorted.push(mergeR[j]);
      j++;
    }
  }
  return sorted.concat(mergeL.slice(i), mergeR.slice(j));
}

console.log(mergeSort([4,3,2,1,1]));
console.log(mergeSort([5,4,3,2,1,1]));
console.log(mergeSort([5,-4,3,-2,1,1]));
console.log(mergeSort([5,4,3,2,1]));