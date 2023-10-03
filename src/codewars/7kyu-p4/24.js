function invertHash(hash) {
  let obj = {}
  for (let key in hash) {
    obj[hash[key]] = key
  }
  return obj
}