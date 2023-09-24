function averageLength(arr) {
  const average = Math.round(arr.reduce((acc, curr) => acc + curr.length, 0) / arr.length)
  return arr.map(x => x[0].repeat(average))
}