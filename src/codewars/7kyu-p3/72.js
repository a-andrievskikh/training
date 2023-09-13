function duplicateElements(m, n) {
  return m.some(x => n.includes(x))
}