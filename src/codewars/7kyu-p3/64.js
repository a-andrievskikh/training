function sumFactorial(arr) {
  const fac = n => {
    if (n < 1) return 1
    return n * fac(n - 1)
  }

  return arr.reduce((a, c) => a + fac(c), 0)
}