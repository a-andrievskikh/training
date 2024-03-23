function ghostBusters(building) {
  const getGhost = building.split(' ').join('')

  return building !== getGhost ? getGhost : "You just wanted my autograph didn't you?"
}

function ghostBusters1(building) {
  return building.includes(' ') ? building.replace(/\s+/g, '') : "You just wanted my autograph didn't you?"
}