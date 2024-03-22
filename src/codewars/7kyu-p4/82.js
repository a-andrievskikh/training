function testResult(arr) {
  const avg = Number((arr.reduce((a, c) => a + c, 0) / arr.length).toFixed(3))

  const getHigh = x => x > 8

  const grades = {
    h: arr.filter(getHigh).length,
    a: arr.filter(x => x >= 7 && x <= 8).length,
    l: arr.filter(x => x < 7).length,
  }

  return arr.every(getHigh) ? [avg, grades, 'They did well'] : [avg, grades]
}