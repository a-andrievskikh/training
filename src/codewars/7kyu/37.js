function spacey(array) {
  const result = []

  let word = ''

  for (let i = 0; i < array.length; i++) {
    word += array[i]
    result.push(word)
  }
  return result
}