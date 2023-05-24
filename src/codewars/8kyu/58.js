function stairsIn20(s) {
  return s.reduce((a, b) => {
    return a + b.reduce((a, b) => {
      return a + b
    }, 0)
  }, 0) * 20
}

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`
}