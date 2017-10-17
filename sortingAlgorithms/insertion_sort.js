
const insertionSort = (nums) => {
  let sorted = nums.slice(0);
  let right = 1;
  let count = 0;
  let len = nums.length;

  while (count < len) { 
    count = right; 
    while (sorted[right] < sorted[right-1]) {
      let temp = sorted[right];
      sorted[right] = sorted[right-1];
      sorted[right-1] = temp;
      right--;
    }
    right = count+1;
  }
  return sorted;
}

console.log(insertionSort([5,4,3,2,1]));
console.log(insertionSort([2,3,5,4,1]));
console.log(insertionSort([1,2,3,4,5]));