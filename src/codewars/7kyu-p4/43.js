function compoundArray(a, b) {
  const result = []

  for (let i = 0; (a[i] || a[i] === 0) || (b[i] || b[i] === 0); i++) {
    if (a[i] || a[i] === 0) result.push(a[i])
    if (b[i] || b[i] === 0) result.push(b[i])
  }

  return result
}