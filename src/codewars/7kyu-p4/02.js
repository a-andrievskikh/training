function reverseSlice(str) {
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }

  const result = []
  for (let i = 0; i < newStr.length; i++) {
    result.push(newStr.slice(i))
  }

  return result
}