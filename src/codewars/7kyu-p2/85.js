function isDivisible() {
  const [a, ...rest] = [...arguments]
  return rest.every(x => a % x === 0)
}