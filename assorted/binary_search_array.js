/*Given a sorted array of integers, find the index of a target value using a binary search algorithm.
A binary search finds an item in a sorted array by repeatedly choosing a middle value and dividing the search interval in half. The initial interval includes the whole array. If the value of the target value is less than the middle value of the interval, then the next interval will be the lower half of the current interval. If the value of the target value is greater than the middle value, then the next interval will be the upper half. The search process repeats until the middle value is equal to the target value, or the search interval is empty.

*/
const binarySearch = (array, target) => {
  const min = 0;
  const max = array.length-1;
  const recurse = (array, target, min, max) => {
    const mid = min+parseInt((max-min)/2);
    if (target < array[min] || target > array[max]) {
      return -1;
    }
    if (target === array[mid]) {
      return mid;
    }
    if (target < array[mid]) {
      return recurse(array, target, 0, mid);
    } 
    if (target > array[mid]) {
      return recurse(array, target, mid+1, max);
    }
  }
  return recurse(array, target, min, max);
};