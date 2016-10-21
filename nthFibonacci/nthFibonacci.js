/*
nthFibonacci
Suppose a newly-born pair of iguanas, one male, one female, are put in a large aquarium.

Iguanas are able to mate at the age of one month so that at the end of its second month a female can produce another pair of iguanas.

Suppose that our iguanas never die and that the female always produces one new pair (one male, one female) every month from the second month on.

How many pairs of iguanas will there be after n months?

For example, the iguana pair size for months zero through five are:

0 1 1 2 3 5
If n were 4, your function should return 3; for 5, it should return 5.
*/

//refactored version
nthFibonacci = function(n) {  
  var iguanaCount = { 0: 0, 1: 1 }
  for (var month = 2; month <= n; month++ ) {
    iguanaCount[month] = iguanaCount[month -1] + iguanaCount[month-2];
  }
  return iguanaCount[n];
};


//------------------------------------------------------------
//First Version

// nthFibonacci = function(n) {  
//   var iguanaCount = {}
//   for (var month = 0; month <= n; month++ ) {
//     if (month === 0) {
//       iguanaCount[month] = 0;
//     } else if (month === 1) {
//       iguanaCount[month] = 1;
//     } else {
//       iguanaCount[month] = iguanaCount[month -1] + iguanaCount[month-2]
//     }
    
//   }
//   return iguanaCount[n];
// };