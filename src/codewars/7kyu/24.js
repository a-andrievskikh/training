function vowel2index(str) {
  return str
    .split('')
    .map((x, i) => x.replace(/[aeiou]/gi, i + 1))
    .join('');
}
