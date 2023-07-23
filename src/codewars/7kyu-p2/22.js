function riders(stations) {
  let numRiders = 1
  let distance = 0
  for (let i = 0; i < stations.length; i++) {
    distance += stations[i]
    if (distance > 100) {
      numRiders++
      distance = stations[i]
    }
  }
  return numRiders
}