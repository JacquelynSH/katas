function createPhoneNumber(numbers) {
let nums = numbers.join('').toString();
const areaCode = nums.slice(0, 3);
// console.log((areaCode))
const first = nums.slice(3, 6);
// console.log(first)
const last = nums.slice(6, 10);
// console.log(last)
return "(" + areaCode + ") " + first + "-" +last
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
// "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// "(123) 456-7890"