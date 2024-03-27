function diagonalSum(matrix) {
  return matrix.reduce((a, c, i) => a += c[i], 0)
}