function getLargerNumbers(a, b) {
  return a.map((x, i) => x >= b[i] ? x : b[i])
}