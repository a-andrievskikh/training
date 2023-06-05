function countWords(str) {
  return ( str.match(/[\w\d\’\'-]+/gi) || [] ).length
}