function longestWord(str) {
  //Give me back the longest word!
  const sorted = str.split(' ').sort((a, b) => a.length > b.length)
  return sorted[sorted.length - 1]
}