function playerManager(players) {
  if (!players) return []

  const strPlayers = players.split(', ')
  const result = []

  for (let i = 0; i < strPlayers.length; i += 2) {
    result.push({player: strPlayers[i], contact: +strPlayers[i + 1]})
  }

  return result
}