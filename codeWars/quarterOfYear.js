


const quarterOf = (month) => {
  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  }
  else if (month >= 7 && month <= 9) {
    return 3;
  }
  else if (month >= 10 && month <= 12) {
    return 4;
  } else {
    return 1;
  }
}
console.log(quarterOf(3))
console.log(quarterOf(8))
console.log(quarterOf(11))
console.log(quarterOf(undefined))