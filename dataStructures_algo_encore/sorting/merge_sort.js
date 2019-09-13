/* Time Complexity
First, draw a binary tree with n = 8 to better visualize the text
1. If you look at the mergeSort without the recursive part (justing merging two sorted arrays), the number of operations can be max n where n = arr.length
2. Number of levels = log2n + 1. Eg for n = 8,  4 levels will be needed until the array cannot be divided anymore. 
3. For j= 0...log2n + 1, array Size at each level j, total number of recursive calls = 2^j where each array size is have n/2^j 
4. 2^j * n/2^j = n
5. Since there are log2n + 1 levels, Time complexity = n * (log2n + 1) ~ nlogn

Space Complexity - 
 */

const mergeSort = arr => {
  if (arr.length <= 1) return arr
  const len = arr.length,
    mid = Math.floor(len / 2),
    mergeLeft = mergeSort(arr.slice(0, mid)),
    mergeRight = mergeSort(arr.slice(mid, len)),
    mergedArray = []
  let i = 0,
    j = 0
  while (i < mergeLeft.length && j < mergeRight.length) {
    console.log(i, j)
    if (mergeLeft[i] <= mergeRight[j]) {
      mergedArray.push(mergeLeft.shift())
      i++
    } else if (mergeLeft[i] >= mergeRight[j]) {
      mergedArray.push(mergeRight.shift())
      j++
    }
  }
  return mergedArray.concat(mergeRight, mergeLeft) //concat any leftovers
}

console.log(mergeSort([6, 5, 3, 1, 2, 7, 8, 4]))
console.log(mergeSort([4, 3, 2, 1, 1]))
console.log(mergeSort([5, 4, 3, 2, 1, 1]))
console.log(mergeSort([5, -4, 3, -2, 1, 1]))
console.log(mergeSort([4, 3, 2, 1]))
