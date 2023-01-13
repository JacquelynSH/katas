function consonantCount(str) {
  const consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  let count = 0;
  const newStr = str.split('');
  for (i in consonant) {
    for (y in newStr) {
      if (consonant[i] === newStr[y].toLowerCase()) {
        count++;
      }
    }
  }
  return count
}

console.log(consonantCount(''));
console.log(consonantCount('aaaaa'));
console.log(consonantCount('XaeiouX'));
console.log(consonantCount('Bbbbb'));
console.log(consonantCount('hello world'));
console.log(consonantCount('h^$&^#$&^elLo world'));
