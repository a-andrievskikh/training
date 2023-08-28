// Javascript: return multiples into an array
function multiples(s1, s2, s3) {
  const result = []

  for (let i = 1; i < s3; i++) {
    if (!(i % s1) && !(i % s2)) {
      result.push(i)
    }
  }

  return result.sort((a, b) => a - b)
}