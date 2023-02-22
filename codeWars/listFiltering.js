function filter_list(l) {
  // make an empty array
  let newArr = [];
    // loop throught the array and find the numbers  push into the empty array 
  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] === 'number') {
      newArr.push(l[i]);
    }
  }
    // return the array
  return newArr;
}

console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]));
console.log(filter_list([1,2,'aasf','1','123',123]));
