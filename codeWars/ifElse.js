/*
n < 5 = 100 each
n >= 5 and n < 10 each 

*/


function saleHotdogs(n){
  // if (n < 5) {
  //   return 100 * n;
  // }
  // if (n >= 5 && n < 10) {
  //   return 95 * n;
  // }
  // if (n >= 10) {
  //   return 90 * n;
  // }

  // return n* (n < 5? 100 : n < 10? 95: 90)

  switch (true) {
    case n < 5: return n * 100;
    case n < 10: return n * 95;
    default: return n * 90
  }
}

console.log(saleHotdogs(1))
console.log(saleHotdogs(4))
console.log(saleHotdogs(5))