function maxDiff(list) {
  if (list.length === 0 || list.length === 1) return 0;
  const result = list.sort((a, b) => a + b);
  return Math.max(...result) - Math.min(...result);
}
