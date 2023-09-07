function solve(a, b) {

  let aScores = 0
  let bScores = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      aScores++
    }
    if (a[i] < b[i]) {
      bScores++
    }
  }

  return `${aScores}, ${bScores}: ${aScores > bScores ? 'Alice made "Kurt" proud!' : bScores > aScores ? 'Bob made "Jeff" proud!' : 'that looks like a "draw"! Rock on!'}`
}