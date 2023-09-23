function maxMin(arr1, arr2) {
  const result = arr1.reduce((acc, cur, i) => [...acc, Math.abs(arr1[i] - arr2[i])], [])
  return [Math.max(...result), Math.min(...result)]
}