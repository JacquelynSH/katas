function myFunction(a) {
  // let sum = 0;
  // for (let val in a) {
  //   sum += a[val]
  // }
  // return sum;
  const obj = Object.values(a);
  return obj.reduce((a, b) => a + b);
  
}
console.log(myFunction({ a: 1, b: 2, c: 3 })) 
// = 6
console.log(myFunction({ j: 9, i: 2, x: 3, z: 4 }))
// = 18
console.log(myFunction({ w: 15, x: 22, y: 13 }))
// = 50