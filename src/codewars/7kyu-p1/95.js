function vowelOne(s) {
  return s.replace(/[^aeiou]/gi, '0').replace(/[aeiou]/gi, '1')
}