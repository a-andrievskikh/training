function uniqueSum(lst) {
  return !lst.length ? null : [...new Set([...lst])].reduce((a, b) => a + b)
}