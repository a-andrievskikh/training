function evenChars(str) {
  return (str.length < 2 || str.length > 100)
    ? 'invalid string'
    : [...str].filter((x, i) => i % 2)
}