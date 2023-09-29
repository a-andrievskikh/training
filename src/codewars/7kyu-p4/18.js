function reverseInvert(arr) {
  return arr.reduce((res, cur) => {
    const parsed = (array, num, mult) => [...array, parseInt(num.toString().split('').reverse().join('')) * mult]
    if (cur % 1 === 0 && cur < 0) return parsed(res, cur, 1)
    if (cur % 1 === 0 && cur >= 0) return parsed(res, cur, -1)
    return res
  }, [])
}