/*
Compose, Pipe
Implement the functions compose and pipe.

Compose
Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

Pipe:
Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.
*/

var compose = function () {
  // var funcArr = Array.prototype.slice.call(arguments);
  var that = arguments;
  return function (result) {
    for (var i = that.length - 1; i > -1; i--) {
      result = that[i](result);
    }
    return result;
  };
};

var pipe = function(){
  var that = arguments;
  return function (result) {
    for (var i = 0; i < that.length; i++) {
      result = that[i](result);
    }
    return result;
  };
};

// var greet = function(name){ return 'hi: ' + name;}
// var exclaim = function(statement) { return statement.toUpperCase() + '!';}

// var welcome = compose(greet, exclaim);
// console.log(welcome('phillip'));
// console.log('some random thin');
// alert('jere')