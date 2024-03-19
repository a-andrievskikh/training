function orderFood(list) {
  const result = {}
  for (let member of list) {
    if (result.hasOwnProperty(member.meal)) {
      result[member.meal]++
    } else {
      result[member.meal] = 1
    }
  }
  return result
}