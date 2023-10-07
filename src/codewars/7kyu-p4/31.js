function orderWord(s) {
  return s ? [...s].sort().join('') : `Invalid String!`
}