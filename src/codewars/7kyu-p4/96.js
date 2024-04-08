function strangeMath(n, k) {
  const numsList = []
  for (let i = 1; i <= n; i++) {
    numsList.push(i)
  }
  return numsList.sort().indexOf(k) + 1
}