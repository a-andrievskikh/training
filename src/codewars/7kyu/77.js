function numObj(s) {
  return s.map((item) => ({[item]: String.fromCharCode(item)}))
}