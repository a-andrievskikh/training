function killer(suspectInfo, dead) {
  for (let name in suspectInfo) {
    if (suspectInfo[name].includes(dead[0]) || suspectInfo[name].includes(dead[1])) return name
  }
}

function killer1(suspectInfo, dead) {
  return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
}