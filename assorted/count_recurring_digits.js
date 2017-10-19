const getDigitCount = (num, digit) => {
  let count = 0;
  let numStr = num.toString();
  let digitStr = digit.toString();

  const recursiveDigitCounter = (subStr, digitStr, count) => {
    if (subStr.length === 0) {
      return count;
    }
    if (subStr[0] === digitStr) {
      count++;
    }
    return recursiveDigitCounter(subStr.substring(1), digitStr, count);
  }
  return recursiveDigitCounter(numStr, digitStr, count);
}

console.log(getDigitCount(1231231111, 1));