function twoDecimalPlaces(num) {
  return +(`${num.toString().split('.')[0]}.${num.toString().split('.')[1].slice(0, 2)}`)
}