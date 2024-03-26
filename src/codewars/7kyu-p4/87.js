function reverseAndMirror(s1, s2) {

  const getReverseStr = c => c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()
  const reversed = s => [...s].map(getReverseStr).reverse('').join('')
  const invertedCase = s => [...s].map(getReverseStr).join('')

  return `${reversed(s2)}@@@${reversed(s1)}${invertedCase(s1)}`
}