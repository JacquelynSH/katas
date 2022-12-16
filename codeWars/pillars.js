

function pillars(numPill, dist, width) {
  let distance = (dist * 100) * (numPill - 1);
  let pillarSize = width * numPill - (width * 2)
  if (numPill > 1) {
    return distance + pillarSize;
  } else {
    return 0;
  }
}

//refactored codewars vesion
function pillars(num_pill, dist, width) {
  return num_pill >1 ? (num_pill-1) * dist * 100 + (num_pill-2) * width : 0;
}


console.log(pillars(1, 10, 10));
// 0
console.log(pillars(2, 20, 25));
// 2000
console.log(pillars(11, 15, 30));
// 15270