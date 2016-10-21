/*
Common Characters
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.
*/

'use strict';

var unique = function(arr) {
  var result = [];
  
  arr.forEach(function(item){
    if ((result.indexOf(item) === -1)) {
      result.push(item);  
    }
  })
  return result;
}

var commonCharacters = function(string1, string2){
  string1 = string1.toLowerCase().split('');
  string2 = string2.toLowerCase().split('');

  string1 = unique(string1);
  string2 = unique(string2);
  var commonChars = [];
  
  string1.forEach(function(element) {
    if (string2.indexOf(element) !== -1 && element !== ' ') {
      commonChars.push(element);
    }
  });
  
  return commonChars.join('');
};


// -------------------------------------------------------------
// Official answer 

var commonCharacters = function(str1, str2) {
  var common = intersection(objectify(str1), objectify(str2));
  return str1.split('').reduce(function(result, char){
    if (common[char] && !result.match(char)) { result += char; }
  return result;
  }, '');
}

var intersection = function (set1, set2) {
  return Object.keys(set1).reduce(
    function (out, val) {
      if (val in set2) { out[val] = true; }
      return out;
    },
  {});
}
var objectify = function (str) {
   return str.split('').reduce(function (obj, char) {
     if (char.match(/[a-z]/i)) { obj[char] = true; }
     return obj;
   }, {});
}
// -------------------------------------------------------------

// console.log(commonCharacters("What is love?", "Baby don't hurt me"));
// console.log(commonCharacters('Riding on a buffalo makes me more approachable', 'so what'));
//  console.log(commonCharacters('', 'No more') === '');
//  console.log(commonCharacters('No more', '') === '');
//  console.log(commonCharacters('', '') === '');

// console.log(unique([1,2,3,4,1,2,4]));
// console.log(unique(['a','a', 'b']));
