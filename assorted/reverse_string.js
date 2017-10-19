/*Reverse a string. The recursive function call should return the reversed result of the passed in string*/

const reverseString = (str) => {
	const recurse = (str, res) => {
		if (str.length === 0) {
			return res;
		}
		res = str[0] + res;
		return recurse(str.substr(1), res);
	}
	return recurse(str, '');
}

function reverseStr(str) {
	if (str.length <= 1) {  
		return str;
	}
	return reverseStr(str.substr(1)) + str.charAt(0);
}


console.log(reverseString("string"));