function houseNumbersSum(arr) {

  return arr.slice(0, arr.indexOf(0)).reduce((a, b) => a + b, 0)

}