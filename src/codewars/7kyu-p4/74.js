function product(str) {
  return (str.match(/\?/g) || []).length * (str.match(/\!/g) || []).length
}