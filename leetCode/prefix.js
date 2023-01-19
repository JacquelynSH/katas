var longestCommonPrefix = function (strs) {

  let result = "";
  // check for empty string or no string
  if (strs.length === 0 || strs === null) {
    return result;
  }

  // find the shortest string in the array 
  let min = Math.min.apply(Math, strs.map(function (str) { return str.length; }));

  // use the min value to only loop as far as the shortest string in the array
  for (let y = 0; y < min; y++) {
    let current = strs[0][y];
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][y] !== current) {
        return result;
      }
    }
    result += current
  }
  return result;
};