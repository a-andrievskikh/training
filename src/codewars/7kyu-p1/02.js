function sumEvenNumbers(input) {
  return input.filter(x => x % 2 === 0).reduce((a, b) => a + b, 0);
}
