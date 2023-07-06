function dominator(arr) {
  const counts = {}

  for (let i = 0; i < arr.length; i++) {

    const num = arr[i]

    if (counts[num]) {
      counts[num]++
    } else {
      counts[num] = 1
    }

    for (const num in counts) {
      if (counts[num] > arr.length / 2) {
        return parseInt(num)
      }
    }

  }
  return -1

}