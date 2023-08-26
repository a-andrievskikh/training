function modifyMultiply(str, loc, num) {
  return new Array(num).fill(str.split(' ')[loc]).join('-')
}