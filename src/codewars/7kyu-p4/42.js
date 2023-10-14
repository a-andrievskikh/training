function alternateSqSum(arr) {
  return arr
    .reduce((a, c, i) => {
      return a + (i % 2 ? c ** 2 : c)
    }, 0)
}