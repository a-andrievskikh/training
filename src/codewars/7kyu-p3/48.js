function minimum(a, x) {
  return Math.min(x - (a % x), a % x)
}