function countPositivesSumNegatives(input) {

 if (input == null || input.length == 0) 
  return [];
  var positiveNum = 0;
  var negativeNum = 0;
 

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) 
      ++ positiveNum;
    else 
      negativeNum += input[i];
    
  }
 return [positiveNum, negativeNum]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));