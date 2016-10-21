/*
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'.
*/

function firstNonRepeatedCharacter (string) {
  var stringArr1 = string.split('')
  var stringArr = string.toLowerCase().split('')

  var copy = stringArr.slice()
  copy.push(null)
  console.log(copy.length);
  
  for (var i = 0; i < stringArr.length; i++) {
    for (var j = copy.length - 1; j >= 0; j--) {
      if (stringArr[i] === copy[j] && j !== i) {
        copy[j] = null;
        stringArr[i] = null;
      }
    }
  }
  

  var recursiveCheck = function(array, count) {
    if (array[count] !== null) {
      console.log(array[count], count);
      return array[count]
    } 
    if (count === array.length - 1 ) {
      return "sorry"
    }
    count = count + 1
    return recursiveCheck(array, count)
  }
  console.log(stringArr);


  var x = recursiveCheck(stringArr, 0)

  if (stringArr.indexOf(x) === stringArr1.indexOf(x))

    return x
  else {
    return x.toUpperCase()
  }
}