function average(scores) {
  // code to calculate the average
  return Math.round(scores.reduce((a, c) => a + c) / scores.length)
}