//ACCESSING OBJECTS WITH DOT NOTATION

const testObj = {
  key1: "value1",
  key2: "value2"
}

console.log(testObj.key1) 
console.log(testObj['key1'])
// both give you value1 

// REASSIGN A VALUE IN AN OBJECT 

const testObj1 = {
  key1: "value1",
  key2: "value2"
}

testObj1.key1 = "newValue";
// testObj1["key1"] = "newValue" -- would also work 

console.log(testObj1.key1) 
console.log(testObj1['key1'])
//  both log key1 value as newValue;

//ADD A PROPERTY TO AN OBJECT 

const cowboySays =  {
  says1: "yeehaw"
}
cowboySays["says2"] = "giddy up"
cowboySays.says3 = "howdy";

console.log(cowboySays)
// logs  says1: 'yeehaw', says2: 'giddy up', says3: 'howdy' }

//DELETE AN OBJECT PROPERTY

const doggies = {
  dog1: "asha",
  dog2: "pollo",
  dog3: "ruby"
}
delete doggies.dog2;
delete doggies["dog3"];
console.log(doggies)
// logs { dog1: 'asha' }