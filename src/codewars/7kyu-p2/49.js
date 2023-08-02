const differenceOfSquares = n => {

  const squareOfSum = n => {
    if (n <= 1) return 1
    return n + squareOfSum(n - 1)
  }
  const sumOfSquare = n => {
    if (n <= 1) return 1
    return (n ** 2) + sumOfSquare(n - 1)
  }

  return squareOfSum(n) ** 2 - sumOfSquare(n)
}