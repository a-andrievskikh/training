function combine() {
  return [...arguments].reduce((acc, obj) => {
    for (let prop in obj) {
      if (!acc.hasOwnProperty(prop)) {
        acc[prop] = obj[prop]
      } else {
        acc[prop] += obj[prop]
      }
    }
    return acc
  }, {})
}