function doubleEveryOther(a) {
  return a.map((x, i) => {
    if (i % 2 === 1) return x * 2
    return x
  })
}