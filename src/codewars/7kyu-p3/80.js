function arrayMash(arr1, arr2) {
  const result = []

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i])
  }
  return result
}