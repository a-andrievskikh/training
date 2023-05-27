function converter(mpg) {
  //code to convert miles per imperial gallon to kilometers per liter
  const kpl = mpg * 1.609344 / 4.54609188
  return +kpl.toFixed(2)
}