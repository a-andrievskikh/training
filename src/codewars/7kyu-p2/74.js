function countWins(winnerList, country) {
  return winnerList.filter(x => x.country === country).length
}