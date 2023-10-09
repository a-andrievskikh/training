function sumOrProduct(arr, n) {
  const sum = arr.sort((a, b) => b - a).slice(0, n).reduce((a, c) => a + c, 0)
  const mult = arr.sort((a, b) => a - b).slice(0, n).reduce((a, c) => a * c, 1)

  return sum > mult ? 'sum' : sum < mult ? 'product' : 'same'
}