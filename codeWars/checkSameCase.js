// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b) {

  if (!/^[A-Za-z]*$/.test(a) || !/^[A-Za-z]*$/.test(b)) {
    return -1;
  }
  if (a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()) {
    return 1;
  }
  if (a === a.toLowerCase() && b === b.toUpperCase() || a === a.toUpperCase() && b === b.toLowerCase()) {
    return 0;
  }
}

console.log(sameCase('C', 'B'));
// 1
console.log(sameCase('b', 'a'));
// 1
console.log(sameCase('B', 'a'));
// 0
console.log(sameCase('b', 'A'));
// 0
console.log(sameCase(':', '0'));
// -1