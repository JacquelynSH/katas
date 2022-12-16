function sameCase(a, b){

 if (a.toUpperCase() === a.toLowerCase() || b.toLowerCase() === b.toUpperCase()) {
  // A === a || b === B
    return -1
  }
  else if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
  // A === B or a === b 
    return 1
  } 
  else {
    return 0
  }
}

console.log(sameCase('C', 'B'));
console.log(sameCase('b', 'a'));
console.log(sameCase('d', 'd'));
console.log(sameCase('A', 's'));
console.log(sameCase('c', 'B'));
console.log(sameCase('b', 'Z'));
console.log(sameCase('\t', 'Z'));
console.log(sameCase('H', ':'));