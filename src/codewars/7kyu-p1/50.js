function swap(string) {
  return string.replace(/[aeiou]/g, x => x.toUpperCase())
}