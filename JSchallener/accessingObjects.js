// ACCESS AND RETURN OBJECT VALUES 
// // Write a function that takes an object with two properties as argument
// // It should return the value of the property with key country
// function
// myFunction(obj){
// // if object key is country - return the value
// const newObj = obj.country;
// return newObj
//   }
 

// console.log(myFunction({ continent: 'Asia', country: 'Japan' })) returns - Japan
// console.log(myFunction({ country: 'Sweden', continent: 'Europe' })) returns - Sweden

// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string
// function myFunction(obj, key){
//   for (let i in obj){
//     if (i === key) {
//       return obj[i]
//     }
//   }
// }

// console.log(myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent'))


// function myFunction(a, n) {

//   return a.charAt(n - 1) 
// }

// console.log(myFunction('abcd', 1))
// console.log(myFunction('zyxbwpl',5))

// function myFunction(a, n) {
//   return a[n - 1]
// } 

// console.log(myFunction([1,2,3,4,5],3))

// function myFunction(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     console.log(a.i)
//   }
// }

// console.log(myFunction({a:1,b:2,c:3},'b'))
// console.log(myFunction({x:'a',y:null,z:'c'},'y'))

function myFunction(a, b) {
  if (b in a) {
  return true;
  } 
}

console.log(myFunction({a:1,b:2,c:3},'b'))
console.log(myFunction({x:'a',y:null,z:'c'},'y'))
console.log(myFunction({x:'a',b:'b',z:undefined},'z'))