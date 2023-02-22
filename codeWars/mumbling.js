
function accum(s) {
  // capitalize the string
  let caps = s.toUpperCase();
  // split the string into an array of letters using the space to seperate each letter
  let capsDash = caps.split('').join(' ');
  let capsDashArr = capsDash.split(' ');
  // map over the array
  let capsDashArrIndex = capsDashArr.map((letter, index) => {
    // repeat the letter based on the index + 1 
    let newArr = letter.repeat(index + 1);
    // capitalize the first letter and lowercase the rest of the letters - add the dash
    return newArr[0].toUpperCase() + newArr.slice(1).toLowerCase();
  });
  // RETURN yay
  return capsDashArrIndex.join('-');
}

console.log(accum("ZpglnRxqenU"));
console.log(accum("NyffsGeyylB"));
console.log(accum("MjtkuBovqrU"));