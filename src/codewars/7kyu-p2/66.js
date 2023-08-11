var paintLetterboxes = function (start, end) {

  const nums = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  }

  let toStr = ''

  for (let i = start; i <= end; i++) {
    toStr += i
  }

  const strArr = toStr.match(/\w/g)

  for (let item of strArr) {
    nums[item] += 1
  }

  return Object.values(nums)
}
