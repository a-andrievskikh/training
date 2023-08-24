function getAges(sum, difference) {

  if (sum < 0 || difference < 0) {
    return null
  }

  const age1 = (sum + difference) / 2
  const age2 = (sum - difference) / 2

  if (age1 < 0 || age2 < 0) {
    return null
  }

  return [Math.max(age1, age2), Math.min(age1, age2)]

}