function smallestProduct(arr) {
  return Math.min(...arr.map(x => x.reduce((a, c) => a * c, 1)))
}
