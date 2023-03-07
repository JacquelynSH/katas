// Fill the array with the given value n times x
function countBy(x, n) {
  //create an empty array to store the values
  var z = [];
  // Loop through the array starting at 1 and ending at the value of n 
  for (var i = 1; i <= n; i++) {
    // push the value of x * i into the array
    // console.log(i)
    z.push(x * i);
  }
  return z;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5))