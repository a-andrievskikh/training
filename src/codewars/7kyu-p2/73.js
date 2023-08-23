function flyBy(lamps, drone) {
  return drone.length > lamps.length ? lamps.replace(/x/g, 'o') : 'o'.repeat(drone.length) + lamps.slice(drone.length)
}