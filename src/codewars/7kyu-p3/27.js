function completeSeries(arr) {
  if ([...new Set(arr)].length !== arr.length) return [0]

  let result = []
  for (let i = 0; i <= Math.max(...arr); i++) {
    result.push(i)
  }
  return result
}