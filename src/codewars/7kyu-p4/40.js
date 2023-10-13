function getCount(words) {
  if (typeof words === 'string') {
    return {
      vowels: words.replace(/[^aeiou]/gi, '').length,
      consonants: words.replace(/([^\w]|[aeiou _])/gi, '').length,
    }
  }

  return {vowels: 0, consonants: 0}
}