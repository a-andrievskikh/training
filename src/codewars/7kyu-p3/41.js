function maxProduct(a) {
  let max1 = -Infinity
  let max2 = -Infinity

  for (let i = 0; i < a.length; i++) {
    if (a[i] > max1) {
      max2 = max1
      max1 = a[i]
    } else if (a[i] > max2 && a[i] < max1) {
      max2 = a[i]
    }
  }

  return Math.max(...a) * max2
}