function avgArray(arr) {
  const result = []

  for (let i in arr[0]) {
    let sum = 0
    for (let j in arr) {
      sum += arr[j][i]
    }
    result.push(sum / arr.length)
  }

  return result
}