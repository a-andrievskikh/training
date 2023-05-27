function uefaEuro2016(teams, scores) {
  return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : scores[0] < scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
      : `At match ${teams[0]} - ${teams[1]}, teams played draw.`
}