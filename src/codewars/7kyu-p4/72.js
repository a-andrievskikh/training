function arithmeticSequenceElements(a, d, n) {
  const res = [a]
  while (res.length <= n - 1) {
    a = a + d
    res.push(a)
  }
  return res.join(', ')
}

function arithmeticSequenceElements1(a, d, n) {
  const res = [a]
  while (--n) res.push(a += d)
  return res.join(', ')
}