function numbersWithDigitInside(x, d = d.toFixed(), count = 0, nums = []) {
  for (let i = 1; i <= x; i++) {
    if (i.toFixed().includes(d)) {
      count++
      nums.push(+i)
    }
  }
  return count ? [count, nums.reduce((a, c) => a + c, 0), nums.reduce((a, c) => a * c, 1)] : [count, count, count]
}

function numbersWithDigitInside1(x, d = d.toFixed(), nums = []) {
  for (let i = 1; i <= x; i++) {
    if (i.toFixed().includes(d)) nums.push(+i)
  }
  return [nums.length, nums.reduce((a, c) => a + c, 0), nums.length ? nums.reduce((a, c) => a * c, 1) : 0]
}