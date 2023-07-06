function sumOfIntegersInString(s) {
  return (s.match(/[\d]*/g) || []).reduce((a, b) => a + +b, 0);
}
