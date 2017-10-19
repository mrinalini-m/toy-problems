/*
Rotate Matrix
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.

2x2 MATRIX EXAMPLE:

[ [1, 2],
[3, 4] ]

Rotated:

[ [3, 1],
[4, 2] ]

4x4 MATRIX EXAMPLE:

[ [ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, “A”,”B”,”C”],
[“D”,”E”,”F”,”G”] ]

Rotated:

[ [“D”, 9, 5, 1],
[“E”, “A”, 6, 2],
[“F”,”B”, 7, 3],
[“G”,”C”, 8, 4] ]
*/

function rotateMatrix (matrix, direction) {
  if (direction !== 1 && direction !== -1) {
    return;
  }

  var result = [];
  for (var i = matrix.length - 1; i >=0; i--) {
    for (var j= 0; j<matrix[i].length; j++) {
      if (result[j] === undefined) {
        result.push([]);
      }
      result[j].push(matrix[i][j]);
    }
  }

  if (direction === -1) {
    var counterClock = [];
    for (var j= 0; j<result.length; j++) {
      counterClock.push(result[j])
    }
    result = counterClock;
  }
  return result;
}

console.log(rotateMatrix([[1,2], [3,4], [5,6]], -1));
