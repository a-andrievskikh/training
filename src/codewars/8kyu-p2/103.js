function isOpposite(s1, s2) {
  if (s1.length === 0 || s2.length === 0) return false
  return s1 === s2.split('').reduce((a, b) => {
    if (b === b.toLowerCase()) {
      return a + b.toUpperCase()
    } else {
      return a + b.toLowerCase()
    }
  }, '')
}