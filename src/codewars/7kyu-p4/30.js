function convert(num) {
  return String.fromCharCode(...(num.match(/../g) || []))
}