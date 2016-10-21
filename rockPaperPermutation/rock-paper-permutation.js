/*
Rock Paper Permutation
Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.
*/
var rockpaper = [ "r", "p", "s" ];

function rockPaperPermutation (roundCount) {
  var possibilities = [ "r", "p", "s" ]; 
  return rockPaperHelper(roundCount, possibilities);
}

function rockPaperHelper(roundCount, possibilities) {
  if (roundCount < 1) { 
    return [];
  }
  if (roundCount  === 1) { 
    return possibilities;
  }
  var copy = possibilities;
  possibilities = [];

  for (var i = 0; i < rockpaper.length; i++) {
    for(j = 0; j < copy.length; j++ ) {
      possibilities.push(rockpaper[i] + copy[j]);

    }
  }
  return rockPaperHelper(roundCount - 1, possibilities);
}

//jeff's solutions

var rps = function(turns, choicesSoFar) {

  // if we're being called for the outside with just turns
  if (choicesSoFar === undefined) {
    choicesSoFar = '';
  }

  // our base case - always return an array of string results
  if (choicesSoFar.length === turns) {
    return [choicesSoFar];
  }
  
  var choices = 'RPS';
  // we'll collect (concat) all our children's results in
  // childResults and return them to our parent or the
  // outside caller
  var childResults = [];
  
  for (var i = 0; i < choices.length; i++) {
    var childResultArray = rps(turns, (choicesSoFar + choices[i]));
    // take the results from this child, and concatenate them
    // with our other children's results
    childResults = childResults.concat(childResultArray);
  }

  return(childResults);
};


// console.log(rps(3));
console.log(rps(2));
