function calculate(...a) {
  return (...b) => {
    return [...a, ...b].reduce((x, y) => x + y, 0)
  }
}