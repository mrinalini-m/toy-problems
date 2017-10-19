/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function bubbleSort(array) {
  var count = 0;
  while(count < array.length) {
    array.forEach(function(item, i, arr) {
      if (arr[i] > arr[i + 1]){
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i +1] = temp; 
      }
    });
    count++;
  }
  return array;
}


function largestProductOfThree (array) {

  var sortedArr = bubbleSort(array);
  var firstTwo = sortedArr.slice(0,2);
  var lastThree = sortedArr.slice(-3);

  var possible1 = firstTwo.reduce(function(result, item) {
    return result * item;
  }) * sortedArr.slice(-1).pop();
  var possible2 = lastThree.reduce(function(result, item) {
    return result * item;
  })

  return Math.max(possible1, possible2);
}


// console.log(bubbleSort([6,7,11,21,2,3,4]));
// console.log(largestProductOfThree([6,7,11,21,2,3,4]));
// console.log(largestProductOfThree([0,2,3]));
// var arr = [-31,41,34,-37,-17,29]
// var arr = arr.map(Math.abs)
// console.log(arr[-1]);
// console.log(bubbleSort(arr));
// console.log(largestProductOfThree([-31,41,34,-37,-17,29]));



