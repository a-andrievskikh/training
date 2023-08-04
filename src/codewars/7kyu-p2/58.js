function menFromBoys(arr) {

  return [
    ...[...new Set(arr.filter(x => Math.abs(x) % 2 === 0))].sort((a, b) => a - b),
    ...[...new Set(arr.filter(x => Math.abs(x) % 2 === 1))].sort((a, b) => b - a),
  ]
}