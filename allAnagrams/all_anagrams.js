/*
All Anagrams
Given a single input string, write a function that produces all possible anagrams of a string and outputs them as an array. At first, don’t worry about repeated strings. What time complexity is your solution?

Parameters:

string (required) - a string of characters.

Examples
Input => Output
string: "abc" => [ "abc", "acb", "bac", "bca", "cab", "cba" ]*/

const allAnagrams = (string) => { 
  const result = {};
  function inner(substr, str){
    if (substr.length === string.length) {
      result[substr] = substr;
    }
    for (let i = 0; i < str.length; i++) {
      inner(substr + str[i], str.slice(0, i) + str.slice(i +1));
    }
  }
  inner('', string);
  return Object.keys(result);
}

console.log(allAnagrams('abc'));