const orderedCount = function (text) {
  const result = [];

  while (text.length) {
    result.push([text[0], text.split('').filter(x => x === text[0]).length]);
    text = text.replaceAll(text[0], '');
  }

  return result;
};
