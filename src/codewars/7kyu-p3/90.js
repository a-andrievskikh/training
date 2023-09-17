function checkVowel(str, pos) {
  const vow = `aeiou`
  return vow.includes(str.toLowerCase()[pos])
}