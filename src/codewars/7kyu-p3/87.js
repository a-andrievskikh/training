function add(x = 0) {
  return Math.round([...arguments].reduce((a, b, i) => a + (b / (i + 1)), 0))
}