function isSameLanguage(list) {
  for (let i = 0; i < list.length; i++) {
    if (list[0].language !== list[i].language) return false;
  }
  return true;
}
