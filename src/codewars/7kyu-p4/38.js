function add(...rest) {
  return rest.reduce((a, c, i) => a + (c * (i + 1)), 0)
}