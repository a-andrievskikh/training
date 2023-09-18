function maxTriSum(num) {
  return [...new Set(num)].sort((a, b) => b - a).slice(0, 3).reduce((a, c) => a + c, 0)
}