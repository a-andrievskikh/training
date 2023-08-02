function countLanguages(list) {
  let result = {}

//   for (let item of list) {
//     !result[item.language]
//       ? result[item.language] = 1
//         : result[item.language] += 1
//   }
  list.map(x => !result[x.language] ? result[x.language] = 1 : result[x.language] += 1)

  return result
}