/* 
Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: [5,1,1,2,0,0]
Output: [0,0,1,1,2,5] */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//in place bubble sort
var sortArray = function(nums) {
  const swap = (i, j, arr) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(j, j + 1)
      }
    }
  }
  return nums
}

console.log(sortArray([5, 2, 3, 1]))
