function digitize(n) {
  console.log('2', n);
  const arr = n.toString().split('');
  console.log("4", arr);
  const reversed = arr.reverse();
  reversed.map((num, i) => {
    console.log(num)
    reversed[i] = Number(num);
  });
  return reversed
}

console.log(digitize(35231));