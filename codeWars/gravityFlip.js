// const flip=(d, a)=>{
//   if (d === 'R') {
//  a.sort((a,b)=>a-b)
//     } else {
//       a.sort((a,b)=>b-a)
//     } 
//     return a;
//   }

// codewars syntax - I like 
const flip = (d, a) => {
  if (d === 'R') return a.sort((a,b)=> a-b);
  if (d === 'L') return a.sort((a,b)=> b-a);
}

console.log(flip('R', [3, 2, 1, 2]));
console.log(flip('L', [1, 4, 5, 3, 5]));