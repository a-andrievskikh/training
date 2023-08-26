function chain(input, fs) {
  for (let item of fs) {
    input = item(input)
  }
  return input
}