/*
Deep Equality
Write a function that, given two objects, returns whether or not the two are deeply equivalent–meaning the structure of the two objects is the same, and so is the structure of each of their corresponding descendants.

DO NOT use JSON.stringify.
*/

// My solution
deepEquals = function(a, b){
  var result = false;
  var inner = function(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length) {
      return false;
    } 
    if (Object.keys(a).length !== undefined || Object.keys(b).length !== undefined) {
      result = false;
      
    }
    if ( Object.keys(a).length === 0 && Object.keys(b).length === 0) {
      result = true;
    }
    
    if (Array.isArray(a) || Array.isArray(b)) {
      if (Array.isArray(a) && Array.isArray(b)) {

        a.forEach(function(item, i) {
          inner(a[i], b[i])
        })
      } else {
        result = false;
      } 
    } 
    
    if (typeof a === 'object' && typeof b === 'object') {
      for (var prop in a) {
        inner(a[prop], b[prop]) 
      }
    } else {
      if (a === b) {
        result = true;
      }
    }
  }
  inner(a, b);
  return result;
}; 

//Alex' Solution. 
deepEquals = function(a, b){
  
  if(!(a instanceof Object)) { return a === b; }
  if(a.constructor !== b.constructor) { return false; }
  
  if(Object.keys(a).length !== Object.keys(b).length){
    return false;
  }
  for(var key in a){
    if(!deepEquals(a[key], b[key])) { return false; }
  }
  return true;
};
