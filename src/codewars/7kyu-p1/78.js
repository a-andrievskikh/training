function remove(str) {
  //coding and coding....

  const splittedStr = str.split(' ')
  const result = []

  for (let i = 0; i < splittedStr.length; i++) {
    if (splittedStr[i].replace(/\w/g, '').length !== 1) {
      result.push(splittedStr[i])
    }
  }

  return result.join(' ')


//   return str
//     .split(' ')
//     .map(x => {
//       if (x.replace(/\w/g, '').length !== 1) {
//         return x
//       }
//     })
//     .join(' ').split(' ').join(' ')
//     .trim()

}