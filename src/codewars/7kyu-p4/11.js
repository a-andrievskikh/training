function appendArrays(arr1, arr2) {
  const flat = arr => {
    return arr.map(x => {
      if (Array.isArray(x)) return x.flat()
      return x
    })
  }
  return [...flat(arr1), ...arr2]
}

function appendArrays(arr1, arr2) { return arr1.concat(arr2)}