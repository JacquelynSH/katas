function sumTwoSmallestNumbers(numbers) {  
 let sortedArray = numbers.sort(function(a, b){
  return a - b;
 });
  return sortedArray[0] + sortedArray[1];
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]));
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));