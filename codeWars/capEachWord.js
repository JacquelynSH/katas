// Captialize each word in a string

function Captialize(word) {
  const arr = word.split(' ');
  let sentence = '';
  arr.forEach(word => {
    const first = word[0].toUpperCase()
    const second = word.slice(1);
    sentence += first + second + " ";
  });
  return sentence
}

console.log(Captialize("How can mirrors be real if our eyes aren't real"))