function doubleCheck(str) {
  str = [...str.toLowerCase()]
  return !!str.find((x, i) => x === str[i + 1])

//     return str.some((x, i) => x === str[i + 1])
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) return true
//   }
//   return false
}