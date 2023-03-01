// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// if string contains x and o it must be an even number of each
// if string contains no x or o it can be true
// if string contains one but not the other it is false 

function XO(str) {
  const x = [];
  const o = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      x.push(str[i]);
    }
    if (str[i].toLowerCase() === 'o') {
      o.push(str[i]);
    }
  }
  if (x.length === o.length || x.length === 0 && o.length === 0) {
    return true;
  }
  else {
    return false
  }
}

console.log(XO('xo'));
console.log(XO('xxOo'));
console.log(XO('xxxm'));
console.log(XO('m'));