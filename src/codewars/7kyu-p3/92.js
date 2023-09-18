function scramble(str, arr) {
  const result = []

  for (let i = 0; i < str.length; i++) {
    result[arr[i]] = str[i]
  }

  return result.join('')
}