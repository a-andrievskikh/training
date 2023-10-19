function checkDigit(number, index1, index2, digit) {

  return String(number)
    .slice(Math.min(index1, index2), Math.max(index1, index2) + 1)
    .includes(String(digit))
}