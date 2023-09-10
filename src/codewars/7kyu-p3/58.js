function letterCheck(arr) {
  const firstString = arr[0].toLowerCase()
  const secondString = arr[1].toLowerCase()

  for (let i = 0; i < secondString.length; i++) {
    if (firstString.indexOf(secondString[i]) === -1) {
      return false
    }
  }

  return true
}