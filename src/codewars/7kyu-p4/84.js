const isPrime = number => {
  if (number <= 1) return false

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false
  }
  return true
}

function nextPrime(n) {
  const nextNum = n + 1
  if (isPrime(nextNum)) return nextNum

  return nextPrime(nextNum)
}

const isPrime = number => {
  if (number < 2) return false

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false
  }
  return true
}

function nextPrime1(n) {
  const nextNum = n + 1
  return isPrime(nextNum) ? nextNum : nextPrime(nextNum)
}