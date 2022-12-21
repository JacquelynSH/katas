function shortcut (string) {
  let word = "";
  for (let i = 0; i < string.length; i++) { 
    if (string[i] !== "a" && 
        string[i] !== "e" && 
        string[i] !== "i" && 
        string[i] !== "o" && 
        string[i] !== "u") {
    word += string[i]
  }
}
  return word;
}

console.log(shortcut('word'));
console.log(shortcut('hello'));
console.log(shortcut('how are you'));