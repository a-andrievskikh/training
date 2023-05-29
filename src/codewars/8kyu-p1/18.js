function alienLanguage(str) {
  let result = str.split(" ");

  for (let i = 0; i < result.length; i++) {
    result[i] =
      result[i].slice(0, -1).toUpperCase() + result[i].slice(-1).toLowerCase();
  }

  return result.join(" ");
}
