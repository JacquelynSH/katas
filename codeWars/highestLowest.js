function highAndLow(numbers){
let arr = numbers.split(' ');
let newArr = arr.sort(function(a, b) {
  return a - b
});
const first = newArr[0];
const last = newArr[newArr.length - 1];
return first + ' ' + last;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));