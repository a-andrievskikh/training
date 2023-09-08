function sortByLanguage(list) {
  return list
    .sort((a, b) => {
      if (a.language < b.language) {
        return -1
      } else if (a.language > b.language) {
        return 1
      } else if (a.firstName < b.firstName) {
        return -1
      } else if (a.firstName > b.firstName) {
        return 1
      } else {
        return 0
      }
    })
}