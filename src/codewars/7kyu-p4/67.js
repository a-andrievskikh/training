function isLeapYear(year) {
  return (year % 100) && !(year % 4) || !(year % 400)
}