function getMiddle(s){
  if (s.length <= 2) {
    return s;
  } 
  while (s.length > 2) {
    s = s.slice(0, -1);
    s = s.slice(1);
  }
return s;
}

console.log(getMiddle('ww'));
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));