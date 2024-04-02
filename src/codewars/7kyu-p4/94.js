function gimmeTheLetters(sp) {
  let result = ''
  for (let i = sp.charCodeAt(0); i <= sp.charCodeAt(2); i++) {
    result += String.fromCharCode(i)
  }
  return result
}