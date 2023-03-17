function countIslands(image) {
  let count = 0;

  for (let i = 0; i < image.length; i++) {
    for (let y = 0; y < image[i].length; y++) {
      if (image[i][y] === 1)
        count = count + checkmap(image, i, y)
    }

    function checkmap(map, i, y) {
      if (
        i < 0 || 
        i > map.length - 1 || 
        y < 0 || 
        y > map[i].length - 1 || 
        map[i][y] === 0
        ) {
        return; 
      }

      map[i][y] = 0;

      checkmap(map, i + 1, y);
      checkmap(map, i - 1, y);
      checkmap(map, i, y + 1);
      checkmap(map, i, y - 1);

      return 1;

    }

  };
return count
}




console.log(countIslands([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]));
console.log(countIslands([
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
]));
console.log(countIslands([
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]));