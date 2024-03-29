function findDup(arr) {
  return arr.reduce((a, c) => a + c) - [...new Set(arr)].reduce((a, c) => a + c);
}