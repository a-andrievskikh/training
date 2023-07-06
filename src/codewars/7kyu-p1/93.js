function isLucky(n) {
  const sum = n.toString().split('').reduce((a, b) => a + b, 0)

  return sum % 9 === 0 || sum === 0
}