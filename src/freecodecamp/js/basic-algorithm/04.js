function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(x => x.length));
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
