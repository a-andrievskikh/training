function removeNthElement(arr, n) {
  // Fix it
  let arrCopy = [...arr]
  arrCopy.splice(n, 1) // removes the nth element
  return arrCopy
}