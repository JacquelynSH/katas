/*
2 elevators (left + right ) in a building with 3 floors (0, 1, 2)

write a function accepting 3 arguments in order

left - current floor of the left elevator
right - current floor of the right elevator
call - the floor that called an elevator

should return the name of the elevsator closets to the called foor 
should default to right is all is equal 
*/

// Math.abs returns the difference between to numbers 
function elevator(left, right, call) {
return Math.abs(call - left) < Math.abs(call - right) ? "left" : "right"  
}

console.log(elevator(0,1,0));
// should = left
console.log(elevator(0,1,1));
// should = right
console.log(elevator(0,1,2));
// should = right 
console.log(elevator(0,0,0));
// should = right 