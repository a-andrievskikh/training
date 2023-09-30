const factors = (x, y = x, result = []) => {
  if (x % 1 !== 0 || x < 1) return -1
  if (y < 1) return result

  if (x % y === 0) result.push(y)

  return factors(x, y - 1, result)
}