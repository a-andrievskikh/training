function alphaSeq(str) {
  return [...str.toLowerCase()]
    .sort()
    .map(s => `${s.toUpperCase()}${s.toLowerCase().repeat(s.toLowerCase().charCodeAt(0) - 96 - 1)}`)
    .join(',')
}