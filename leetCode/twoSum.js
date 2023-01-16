// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



var twoSum = function (nums, target) {
  const copyNums = [...nums];
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let y = 1; y < copyNums.length; y++) {
      if (copyNums[y] + nums[i] === target) {
        result.push(i, y)
      }
    }
  }
  return result.slice(0, 2);
};

console.log(twoSum([2,7,11,15], 9));
//[0, 1]
console.log(twoSum([3,2,4], 6));
//[1, 2]
console.log(twoSum([3,3], 6));
//[0, 1]
