function chunkArrayInGroups(arr, size) {
  const newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);
