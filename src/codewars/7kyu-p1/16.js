function myLanguages(results) {
  const result = [];

  for (let prop in results) {
    if (results[prop] > 59) result.push(prop);
  }

  return result.sort((a, b) => results[b] - results[a]);
}
