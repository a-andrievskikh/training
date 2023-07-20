function sumNoDuplicates(nums) {

  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums.filter(x => x === nums[i]).length === 1) {
      count += nums[i]
    }
  }

  return count

}