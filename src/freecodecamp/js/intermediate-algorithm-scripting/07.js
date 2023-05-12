function myReplace(str, before, after) {
  if (str[str.indexOf(before)] === str[str.indexOf(before)].toUpperCase()) {
    return str.replace(before, after[0].toUpperCase() + after.slice(1));
  }

  return str.replace(before, after[0].toLowerCase() + after.slice(1));
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
