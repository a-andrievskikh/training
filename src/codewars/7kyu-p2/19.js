function binRota(arr) {

  return arr.map((item, idx) => idx % 2 === 1 ? item.reverse() : item).flat()

}