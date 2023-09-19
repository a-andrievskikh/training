function processData(data) {
  return data.reduce((a, [b, c]) => a * (b - c), 1)
}