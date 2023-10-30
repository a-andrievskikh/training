function getNumberOfSquares(n, num = 1, sum = 0, count = 0) {

  if (sum + (num ** 2) >= n) return count

  sum += (num ** 2)
  count++

  return getNumberOfSquares(n, num + 1, sum, count)
}

