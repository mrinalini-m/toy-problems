const removeRepeatingChars = (str) => {
  const recurse = (subStr, obj, res) => {
    if (subStr.length === 0) {
      return res;
    }
    if (!obj.hasOwnProperty(subStr[0])) {
      obj[subStr[0]] = true;
      res += subStr[0];
    }
    return recurse(subStr.substr(1), obj, res);
  }
  return recurse(str.toLowerCase(), {}, "");
}

console.log(removeRepeatingChars("skdfdsdfmsdfsdm"));