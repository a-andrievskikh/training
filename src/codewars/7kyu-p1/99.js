function alternate(n, firstValue, secondValue) {

  const result = []

  while (result.length !== n) {
    if (result.length !== n) result.push(firstValue)
    if (result.length !== n) result.push(secondValue)
  }

  return result
}