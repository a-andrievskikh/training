function differenceInAges(ages) {
  const minAge = Math.min(...ages)
  const maxAge = Math.max(...ages)
  const diffAge = maxAge - minAge

  return [minAge, maxAge, diffAge]
}
