function minimumSteps(numbers, value) {
  numbers.sort((a, b) => a - b)
  let steps = 0
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    if (sum >= value) return steps
    steps++
  }
  return steps
}

function minimumSteps1(numbers, value) {
  numbers.sort((a, b) => a - b)

  for (let i = 0, sum = 0; i < numbers.length; i++) {
    sum += numbers[i]
    if (sum >= value) return i
  }
}