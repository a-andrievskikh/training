function removeRotten(bagOfFruits) {
  if (bagOfFruits) {
    const result = [];
    for (let fruit of bagOfFruits) {
      result.push(fruit.replace(/rotten/, '').toLowerCase());
    }
    return result;
  }
  return [];
}
