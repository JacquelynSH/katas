

function allAboutStrings(str) {
const strArray = [];
const lastChar = str.charAt(str.length -1)
strArray.push(str.length);
strArray.push(str[0]);
strArray.push(lastChar);
let index = Math.floor(str.length / 2)
if (str.length % 2 === 0) {
  strArray.push(str[index - 1] + str[index])
} if (str.length % 2 === 1) {
  strArray.push(str[index])
};
let fakeVar = 0;
for (let i = 2; i < str.length; i++) {
  if (str[i] === str[1]) {
    fakeVar = i
    break
  }
}
if (fakeVar) {
  strArray.push('@ index ' + fakeVar);
} else {
  strArray.push('not found');
}

  return strArray;
}

console.log(allAboutStrings("LASA"));
// ➞ [4, "L", "A", "AS", "@ index 3"]
console.log(allAboutStrings("Computer"));
// ➞ [8, "C", "r", "pu", "not found"]
console.log(allAboutStrings("Science"));
//  ➞ [7, "S", "e", "e", "@ index 5"]