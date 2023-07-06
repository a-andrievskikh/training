function modifiedSum(a, n) {
  return a.reduce((acc, cur) => acc + (cur ** n) - cur, 0)
}