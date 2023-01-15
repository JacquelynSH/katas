
var findRestaurant = function (list1, list2) {
  let result = {};

  for (let i = 0; i < list1.length; i++) {
    for (let y = 0; y < list2.length; y++) {
      if (list1[i] === list2[y]) {
        let sum = list1.indexOf(list1[i]) + list2.indexOf(list2[y]);
        result[list1[i]] = sum;
      }
    }
  }
  const values = Object.values(result);
  const min = Math.min(...values);
  let keys = Object.keys(result).filter(k => result[k] === min);
  return keys.sort((a, b) => a.length - b.length);
};

console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]));
// ["Shogun"]
console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));
//["Shogun"]
console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"]));
  // ["sad","happy"]
