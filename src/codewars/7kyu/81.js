function spongeMeme(sentence) {
  return [...sentence].map((x, i) => i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')
}