function getSum(a, b) {
  let sum = 0;
  if (a < b) {
    while (a <= b) {
      sum += a++;
    }
  }
  else {
    while (a >= b) {
      sum += a--;
    }
  }
  return sum;
};

console.log(getSum(1, 0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(1, 1));
console.log(getSum(-1, 4));