function lostSheep(friday, saturday, total) {
  return total - ([...friday, ...saturday].reduce((a, b) => a + b, 0))
}