function capitalize(s, arr) {

  const result = s.split('')
  for (let i = 0; i < arr.length; i++) {

    if (result[arr[i]]) {
      result.splice(arr[i], 1, result[arr[i]].toUpperCase())
    }
  }

  return result.join('')
}