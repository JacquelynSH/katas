// compare each letter with the rest of the string - if it finds one return false else return true 


function isIsogram(str){
  const newStr = str.toLowerCase().split("");
  const findDuplicate = newStr => newStr.filter((char, index) => newStr.indexOf(char) !== index);
    if (findDuplicate(newStr).length > 0){
      return false;
    } else {
      return true;
    }
};

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("isIsogram"));