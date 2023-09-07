const sumNested = arr => {
  return arr.flatMap(item => Array.isArray(item) ? sumNested(item) : item).reduce((a, b) => a + b, 0)
}