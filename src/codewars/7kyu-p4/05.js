function onesCounter(input) {

  const result = []
  let count = 0

  for (let num of input) {
    if (num === 1) {
      count++
    } else if (count > 0) {
      result.push(count)
      count = 0
    }
  }
  if (count) result.push(count)

  return result
}