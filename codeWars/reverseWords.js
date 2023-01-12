// reverse each word at the spaces 


function reverseWords(str){
  return str.split(" ").reverse().join(" "); 
}

console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"));
console.log(reverseWords("foobar"));