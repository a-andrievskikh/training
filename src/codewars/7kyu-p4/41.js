function highestValue(a, b) {
  const sum = str => str.split('').map(x => x.charCodeAt(0)).reduce((a, c) => a + c, 0)
  return sum(a) >= sum(b) ? a : b
}