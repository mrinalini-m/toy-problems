/*
Merge Sort
Implement a function that sorts an array of numbers using the “mergesort” algorithm.

Mergesort uses a divide-and-conquer strategy. It begins by treating the input list of length N as a set of N “sublists” of length 1, which are considered to be sorted. Adjacent sublists are then “merged” into sorted sublists of length 2, which are merged into sorted sublists of length 4, and so on, until only a single sorted list remains. (Note, if N is odd, an extra sublist of length 1 will be left
after the first merge, and so on.)

This can be implemented using either a recursive (“top-down”) or an iterative (“bottom-up”) approach.
*/

function merge(leftArr, rightArr){
  var result = [];
  var i = 0;
  var j = 0;

  while (i < leftArr.length && j < rightArr.length){
    if (leftArr[i] < rightArr[j]){
      result.push(leftArr[i]);
      i++;
    } else {
      result.push(rightArr[j]);
      j++;
    }
  }
  return result.concat(leftArr.slice(i)).concat(rightArr.slice(j));
}

function mergeSort(arr){
  if (arr.length < 2) {
    return arr;
  }
  
  var middle = Math.floor(arr.length / 2),
  leftArr = arr.slice(0, middle),
  rightArr = arr.slice(middle);
  
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}