function myParseInt(str) {
  str = str.trim()
  if (/^\d+$/.test(str)) return parseInt(str, 10)
  return 'NaN'
}
