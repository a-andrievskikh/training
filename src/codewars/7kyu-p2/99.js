function allNonConsecutive(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] > 1) result.push({i: i + 1, n: arr[i + 1]})
  }

  return result
}