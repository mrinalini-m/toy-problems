/*
Balanced Brackets
Given a string, return true if it contains all balanced parenthesis (), curly-brackets {}, and square-brackets [].
*/

function isBalanced (str) {
  var brackets = {
    '(':')',
    '{':'}',
    '[':']'
  };
  var openParen = Object.keys(brackets);
  var closeParen = [')', '}', ']'];
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (openParen.indexOf(str[i]) > -1) {
      stack.push(str[i]);
    } else if (closeParen.indexOf(str[i]) > -1) {
      var temp = stack.pop();
      if (brackets[temp] !== str[i]) {
        return false;
      }
    } 
  }
  return (stack.length === 0);
}