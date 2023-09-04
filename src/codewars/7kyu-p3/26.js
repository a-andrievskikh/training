function solution(number) {
  const result = {
    A: 0,
    B: 0,
    C: 0,
  }

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 !== 0 && i < number) {
      result.A += 1
    } else if (i % 5 === 0 && i % 3 !== 0 && i < number) {
      result.B += 1
    } else if (i % 15 === 0 && i < number) {
      result.C += 1
    }
  }

  return Object.values(result)
}