function findArray(arr1, arr2) {
  return arr1.length ? arr2.map(x => arr1[x]) : []
}