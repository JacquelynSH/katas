// function warnTheSheep(queue) {
//   sheep = queue.slice().reverse()
//     for (i in sheep) {
//       if (sheep[0] === "wolf") {
//         return "Pls go away and stop eating my sheep"
//       }
//       if (sheep[i] === "wolf") {
//       return "Oi! Sheep number " + i + "! You are about to be eaten by a wolf!"
//       } 
//     }
//   }

  function warnTheSheep(queue) {
    const wolf = queue.reverse().indexOf('wolf');
    return wolf === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${ wolf }! You are about to be eaten by a wolf!`;
  }


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["wolf"]))
console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf"]))
