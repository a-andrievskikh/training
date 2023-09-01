const sumAverage = arr => {
  return Math.floor(arr
    .map(x => x.reduce((a, b) => a + b, 0) / x.length)
    .reduce((a, b) => a + b, 0))
}