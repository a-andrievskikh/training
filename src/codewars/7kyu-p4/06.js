function findMissingNumbers(arr) {
  const result = []

  for (let j = arr[0]; j < arr[arr.length - 1]; j++) {
    if (!arr.includes(j)) result.push(j)
  }
  return result
}