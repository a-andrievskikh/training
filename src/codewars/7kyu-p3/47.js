function arraySum(arr) {
  return arr
    .flatMap(item => Array.isArray(item) ? arraySum(item) : item)
    .reduce((a, b) => {
      if (typeof b === 'number') return a + b
      return a
    }, 0)
}