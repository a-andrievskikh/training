function boredom(staff) {

  const scores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25,
  }

  let count = 0

  for (let pers in staff) {
    const score = Object.keys(scores).find(x => x === staff[pers])
    if (staff[pers] === score) {
      count += scores[score]
    }
  }
  return count <= 80 ? 'kill me now' : count > 99 ? 'party time!!' : 'i can handle this'
}