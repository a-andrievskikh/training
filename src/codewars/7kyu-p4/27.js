function missingValues(arr) {
  const x = arr.find(item => arr.filter(item2 => item2 === item).length === 1)
  const y = arr.find(item => arr.filter(item2 => item2 === item).length === 2)

  return x * x * y
}