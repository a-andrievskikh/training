function splitTheBill(x) {
  const values = Object.values(x)
  const valuesAvg = values.reduce((a, c) => a + c) / values.length

  for (let key in x) {
    x[key] = Number((x[key] - valuesAvg).toFixed(2))
  }
  return x
}