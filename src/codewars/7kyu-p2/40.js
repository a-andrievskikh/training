function howManyGifts(maxBudget, gifts) {
  let count = 0
  let totalGifts = 0
  const sortedGifts = gifts.sort((a, b) => a - b)

  for (let i = 0; i < sortedGifts.length; i++) {
    count += sortedGifts[i]
    if (maxBudget >= count) {
      totalGifts++
    }
  }
  return totalGifts
}