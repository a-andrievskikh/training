function calculate(str) {
  const strArr = (str.match(/\d+/g) || [])
  return str.includes('loses') ? +strArr[0] - +strArr[1] : +strArr[0] + +strArr[1]
}