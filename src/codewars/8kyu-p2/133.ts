function flickSwitch(arr, value = true) {
  return arr
    .map(el => {
      if (el === 'flick') {
        value = !value
      }
      el = value
      return el
    })
}