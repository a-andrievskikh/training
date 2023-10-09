const divisions = (n, div, count = 0) => {
  if (n < 1 || n < div) return count

  if (n % div === 0) return divisions(n / div, div, count + 1)
  return divisions(Math.floor(n / div), div, count + 1)
}