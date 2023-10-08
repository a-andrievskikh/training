function mergeArrays(a, b) {
  const result = []

  for (let i = 0; a[i] || b[i]; i++) {
    if (a[i]) result.push(a[i])
    if (b[i]) result.push(b[i])
  }
  return result
}