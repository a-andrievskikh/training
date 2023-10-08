function isItANum(str) {
  str = str.replace(/[^\d]/g, '')
  return /^0\d{10}$/.test(str) ? str : 'Not a phone number'
}