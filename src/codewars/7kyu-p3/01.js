function digits(num) {
  num = [...String(num)].map(x => +x)
  const result = []

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      result.push(num[i] + num[j])
    }
  }

  return result
}