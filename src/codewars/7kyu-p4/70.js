function productArray(nums) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    const newArr = [...nums]
    newArr.splice(i, 1)
    result.push(newArr.reduce((res, item, idx) => res * item, 1))
  }
  return result
}

function productArray1(nums) {
  return nums.map(x => nums.reduce((a, c) => a * c, 1) / x)
}