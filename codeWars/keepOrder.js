// find the first spot for the value and return the index 

// if val exists - return the index 
// if val does not exist find the spot it would exist 
// if val is greater than i and less than i + 1 - add the value to the array and sort 
function keepOrder(arr, val) {
  // loop through the array 
  // compare each element in the array with the value 
  arr.push(val);
  let newArr = arr.sort(function(a, b) {
    return a - b
  });
  console.log(newArr)
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === val) {
      return i;
    }
  }
}

// console.log(keepOrder([1, 2, 3, 4, 7], 5));
// console.log(keepOrder([1, 2, 3, 4, 7], 0));
// console.log(keepOrder([1, 1, 2, 2, 2], 2));
// console.log(keepOrder([1, 2, 3, 4], 5));
console.log(keepOrder([1, 2, 3, 4], -1));
// console.log(keepOrder([1, 2, 3, 4], 2));
// console.log(keepOrder([1, 2, 3, 4], 0));
// console.log(keepOrder([1, 2, 3, 4], 1));
// console.log(keepOrder([1, 2, 3, 4], 2));
// console.log(keepOrder([1, 2, 3, 4], 3));

console.log(keepOrder([-4, -4, -1, 3, 5], 6));
