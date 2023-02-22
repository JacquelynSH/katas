//remove the lowest value element
// if duplicates, remove the lowest index
// do not mutate the original array

function removeSmallest(numbers) {
  let minVal = Math.min(...numbers)
  let newArr = [...numbers]
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === minVal) {
      newArr.splice(i, 1)
      break
    }
  }
  return newArr
}

console.log(removeSmallest([1,2,3,4,5]));
console.log(removeSmallest([5,3,2,1,4]));
console.log(removeSmallest([2,2,1,2,1]));
 