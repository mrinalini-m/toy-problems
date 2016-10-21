/*
Power Set
Return an array that contains the power set of a given string. The power set is a set of all the possible subsets, including the empty set.

Make sure your code does the following:

All characters in a subset should be sorted alphabetically, and the array of subsets should be sorted alphabetically.
Sets of the same characters are considered duplicates regardless of order and count only once, e.g. ‘ab’ and ‘ba’ are the same.
Duplicate characters in strings should be ignored; for example, ‘obama’ should be evaluated as if it only contained one ‘a’.
*/

var unique = function(arr) {
  var result = [];
  arr.forEach(function(item){
    if ((result.indexOf(item) === -1)) {
      result.push(item);  
    }
  });
  return result;
}

var powerSet = function(string) {
  var sortedUniqueArr = unique(string.toLowerCase().split('').sort());
  var result = [];
  function recurse(currIndex, arr) {
    var temp = arr.slice();
    result.push(temp.join(''));
    for(var i = currIndex; i < sortedUniqueArr.length; i++) {
     arr.push(sortedUniqueArr[i]);
     recurse(i + 1, arr);
     arr.pop();
    }
  }
  recurse(0, []);
  return result;
}