/*
Bubble Sort
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
*/
function bubbleSort(arr) {
  let sorted = arr.slice();
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[j] > sorted[j+1]) {
        [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
      }
    }
  }
  return sorted;
}

//Zak's version
// var bubbleSort = function(array) {
//   let sorted = array.slice(), done = false;
//   let count = 0;
//   while (!done) {
//     done = true;
//     for(var x = 0; x < sorted.length; x++) {
//       if(sorted[x] > sorted[x+1]) { 
//         [sorted[x], sorted[x+1]] = [sorted[x+1], sorted[x]];
//         done = false; 
//         console.log(sorted, x, count++);
//         break; }
//     }
//   };
//   return sorted;
// };
console.log(bubbleSort([3,2,1]));
console.log(bubbleSort([18, 30, 25, 28, 24, 19, 31, 20, 35, 24, 36, 26, 30, 29, 40, 36]));