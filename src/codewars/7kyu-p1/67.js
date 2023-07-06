function filterLongWords(str, n) {
  return str.split(' ').filter(x => x.length > n)
}