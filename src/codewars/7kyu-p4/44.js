function wordSearch(word, text) {
  const reg = new RegExp(word, 'g')
  const regStr = `\\b${reg.source}\\b`
  return new RegExp(regStr).test(text)
}