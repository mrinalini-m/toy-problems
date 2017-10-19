/*
Is Subset Of
Make an array method that can return whether or not a context array is a subset of an input array. To simplify the problem, you can assume that both arrays will contain only strings.
*/
//My solution
Array.prototype.isSubsetOf = function(parentSet) {
  var count = 0;
  for (var i = 0; i < this.length; i++) {
    if (parentSet.indexOf(this[i]) !== -1) {
      count++;
    }
  }
  return count === this.length
};

// console.log([1,2,3].isSubsetOf([1,2,3,4]));


//martin's solution
Array.prototype.isSubsetOf = function(inputArr) {
  var obj ={};
  for(var i = 0;i <inputArr.length;i++){
    obj[inputArr[i]] = "hi";
  }
  for(var j = 0;j<this.length;j++){
    if(!(this[j] in obj)){
      return false;
    }
  }
  return true;
};

//caleb's solution
Array.prototype.isSubsetOf = function(arr) {
  return isSubsetObjs(this, objectify(arr));
};

var isSubsetObjs = function(arr, obj2) {
  for (var i = 0; i < arr.length; i++) {
    if (!obj2.hasOwnProperty(arr[i])) { 
     return false; 
    }
  } return true;
};

var objectify = function(arr) {
  return arr.reduce(function (out, item) {
    out[item] = true;
    return out;
  }, {})
};

//cady's solution
Array.prototype.isSubsetOf = function(contextArray){
  return this.every(function(el){
    return contextArray.indexOf(el) !== -1;
  });
}
