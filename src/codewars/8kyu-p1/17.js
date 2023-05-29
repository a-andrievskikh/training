function alienLanguage(str) {
  let result = str.split(" ");

  for (let i = 0; i < result.length; i++) {
    result[i] =
      result[i].slice(0, result[i].length - 1).toUpperCase() +
      result[i].slice(result[i].length - 1).toLowerCase();
  }

  return result.join(" ");
}
