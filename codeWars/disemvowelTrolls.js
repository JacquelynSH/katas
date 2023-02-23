
function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    for(let y = 0; y < vowels.length; y++) {
      if (str[i].toLowerCase() === vowels[y]) {
        str = str.replace(str[i], '');
      }
    }
  // str = str.replace(/[aeiou]/gi, "");
} 
return str;
}
// expected 'N ffns bt,\nYr wrtng s mng th wrst \'…' 
// to equal 'N ffns bt,\nYr wrtng s mng th wrst \'…'


console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"));