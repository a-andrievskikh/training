function i(word) {
  return !word.length ||
  word[0] === 'I' ||
  word[0] === 'i' ||
  word[0] === word[0].toLowerCase() ||
  word.replace(/[aeiou]/gi, '').length <= word.replace(/[^aeiou]/gi, '').length ? 'Invalid word'
    : 'i' + word
}