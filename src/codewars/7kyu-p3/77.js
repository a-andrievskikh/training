function michaelPays(costs) {
  const kate = costs / 3

  return costs >= 5 ? +(costs - (kate < 10 ? kate : 10)).toFixed(2) : +costs.toFixed(2)
}