function charToAscii(str) {
  str = str.replace(/[^a-z]/gi, '')
  return str ? [...str].reduce((a, c) => (a[c] = c.charCodeAt(0), a), {}) : null
}