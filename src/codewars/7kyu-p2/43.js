function gap(num) {
  const binary = num.toString(2)
  let maxLength = 0
  let currentLength = 0
  let started = false
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1') {
      if (started && currentLength > maxLength) {
        maxLength = currentLength
      }
      started = true
      currentLength = 0
    } else if (started) {
      currentLength++
    }
  }
  return maxLength
}