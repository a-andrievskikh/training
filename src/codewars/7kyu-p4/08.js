function manipulate(num) {
  num = String(num)

  const firstHalf = num.slice(0, Math.floor(num.length / 2))
  const secondHalf = num.slice(Math.floor(num.length / 2)).replace(/./g, '0')

  return Number(firstHalf + secondHalf)
}