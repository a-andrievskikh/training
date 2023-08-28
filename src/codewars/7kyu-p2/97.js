function vampireTest(a, b) {
  const num1 = [...String(a * b)].sort().join()
  const num2 = [...(a.toString() + b.toString())].sort().join()
  return num1 == num2
}