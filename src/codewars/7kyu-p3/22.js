function uncensor(inf, dis) {
  for (let i = 0; i < dis.length; i++) {
    inf = inf.replace(/[*]/, dis[i])
  }
  return inf
}