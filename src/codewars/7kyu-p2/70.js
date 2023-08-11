//preload variable: dict

var makeBackronym = function (string) {
  return [...string].map(x => dict[x.toUpperCase()]).join(' ')
}