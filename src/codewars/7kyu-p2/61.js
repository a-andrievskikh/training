function arrayLeaders(nums) {
  const result = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums.slice(i + 1).reduce((a, b) => a + b, 0)) {
      result.push(nums[i])
    }
  }

  return result
}