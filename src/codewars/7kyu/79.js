function makePassword(phrase) {
  return phrase
    .split(' ')
    .map(x => x[0])
    .join('')
    .replace(/i/gi, '1')
    .replace(/o/gi, '0')
    .replace(/s/gi, '5')
}