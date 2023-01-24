function makeNegative(num) {

  // if (num === 0 || num < 0) {
  //   return num;
  // } else {
  //   return num - (num * 2)
  // }
return num <= 0 ? num : num* -1

}

console.log(makeNegative(1));
// -1
console.log(makeNegative(-5));
// -5
console.log(makeNegative(0));
// 0
console.log(makeNegative(0.12));
// -0.12
