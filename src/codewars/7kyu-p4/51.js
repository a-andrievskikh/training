function abundantNumber(num) {
  let divizorsSum = 0

  for (let i = 0; i < num; i++) {
    if (num % i === 0) divizorsSum += i
  }

  return num < divizorsSum
}