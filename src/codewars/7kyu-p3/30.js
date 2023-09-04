function createArrayOfTiers(num) {
  const result = []
  for (let i = 1; i <= String(num).length; i++) {
    result.push(String(num).slice(0, i))
  }
  return result
}