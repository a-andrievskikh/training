function evenLast(numbers) {
  return (numbers.filter((x, i) => i % 2 === 0).reduce((a, b) => a + b, 0) * numbers[numbers.length - 1]) || 0
}