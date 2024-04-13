function isolateIt(arr) {
  return arr.map(w => [...w.slice(0, Math.floor(w.length / 2)), '|', ...w.slice(Math.ceil(w.length / 2))].join(''))
}