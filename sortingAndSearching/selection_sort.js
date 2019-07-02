//my Solution
let selectionSort = (nums) => {
  let len = nums.length;
  let min = nums[0];
  let minIdx = 0;
  let j = 0;

  while (j < len) {
    for (let i = j; i < len; i++) {
      if (nums[i] < min) {
        min = nums[i];
        minIdx = i;
      }
    }
    nums.splice(minIdx,1);
    nums = nums.splice(0, j, min).concat(nums);
    j++;
    min = nums[j]
    minIdx = j;
  }
  return nums;
}

//しらない人の solution　
const swap = (arr, firstIdx, secondIdx) => {
  const temp = arr[firstIdx];
  arr[firstIdx] = arr[secondIdx];
  arr[secondIdx] = temp;
}
selectionSort = (nums) => {
  let len = nums.length;
  let min;
  for (let i = 0; i < len; i++) {
    min = i;
    for (let j = i+1; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(nums, i, min);
    }
  }
  return nums;
}

function selectionSort2(arr) {
  function swap(i, j, arr) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < arr.length; i++) {
    let currMin = arr[i];
    let minIndex = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < currMin) {
        currMin = arr[j];
        minIndex = j;
      } 
    }
    swap(i, minIndex, arr);
  }
  return arr;
}
console.log(selectionSort2([5,4,3,2,1,6]));
console.log(selectionSort2([-5,4,3,2,-1,6]));
console.log(selectionSort2([5,4,3,1,2]));
console.log(selectionSort2([1,2,11,3,6]));
console.log(selectionSort2([1,2,11,3,6,2,6]));