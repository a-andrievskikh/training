function countLettersAndDigits(input) {
  return input.replace(/[^a-z\d]/gi, '').length
}