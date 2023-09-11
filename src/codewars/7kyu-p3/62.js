function moveVowel(input) {
  const w = input.replace(/[^aeiou]/g, '')
  const s = input.replace(/[aeiou]/g, '')
  return s + w
}