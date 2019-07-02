
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

function insertionSort2(arr) {
  function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    for (let j = i; j > 0; j--) {
      if (arr[j] > arr[j-1]) {
        break;
      }
      swap(j, j-1, arr);
    }
    // while (j > 0 && arr[j] < arr[j-1]) {
    //   swap(j, j-1, arr);
    //   j--;
    // }
    
  }
  return arr;
}

console.log(insertionSort2([5,4,3,2,1]));
console.log(insertionSort2([-5,4,-3,2,1]));
console.log(insertionSort2([2,3,5,4,1]));
console.log(insertionSort2([1,2,3,4,5]));
