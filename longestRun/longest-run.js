/*
Longest Run
Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.
*/

function longestRun (string) {

  var char = string[0];
  var longest = [0,0];
  var curr = [0,0];

  for (var i = 0; i < string.length; i++) {
    if (string[i+1] === char) {
      curr[1]++;
      if (curr[1] - curr[0] > longest[1] - longest[0]) {
        longest[0] = curr[0];
        longest[1] = curr[1];
      }
    } else {
      char = string[i+1];
      curr = [i+1, i+1];
    }
  }
  
  return longest;
}

console.log(longestRun('mississippi'));
