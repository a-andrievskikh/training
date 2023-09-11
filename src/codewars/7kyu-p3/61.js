function convertHashToArray(hash) {
  return Object.entries(hash).sort((a, b) => a[0] > b[0] ? 1 : -1)
}

/*
function convertHashToArray(hash){
  return Object.entries(hash).sort()
}*/
