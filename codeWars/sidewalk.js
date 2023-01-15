// Write the function madShout that takes a string input sidewalk to calculate the shout string and return it.

// The shout phrase is "Oi F!" but depending on the distance between your friend, the word expands.

// Since in the example, the difference between the friends is 6 (F's index is 15 & that of Y's is 9), the shout phrase becomes 'Oiii F!'

  // return exta i's based on the distance between y and f 
  // any distance between 0-3 will equal 'Oi F!'
  // any distance greater than 3 will add an i to the string

function madShout(sidewalk) {
const y = sidewalk.indexOf("Y");
const f = sidewalk.indexOf("F");
let extraI = (f - y - 1) / 2;
return 'Oi' + 'i'.repeat(extraI) + ' F!'
}


console.log(madShout('-----------------Y--------F--------------'));
//'Oiiiii F!'
console.log(madShout('------------Y-F------------------'));
//'Oi F
console.log(madShout('----------YF---------'));
// 'Oi F!'
console.log(madShout('------------Y-------------F---------------'));
//'Oiiiiiii F!'

