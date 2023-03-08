var number = function (busStops) {
  // loop through the array of arrays
  // access each index of each individual array seperately 
  // add each index into a seperate variable and subtract the two and return

  let newPassengers = 0;
  let oldPassengers = 0;

  for (let i in busStops) {
    newPassengers += busStops[i][0];
    oldPassengers += busStops[i][1]
  }
  return newPassengers - oldPassengers
}

console.log(number([[10, 0], [3, 5], [5, 8]]));
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
console.log(number([[0, 0]]));