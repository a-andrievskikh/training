function search(budget, prices) {

  return prices.filter(x => x <= budget).sort((a, b) => a - b).join(',')

}