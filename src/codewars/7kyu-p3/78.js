function addArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return arr1.map((x, i) => x + arr2[i])
  }
  throw new Error('Error')
}