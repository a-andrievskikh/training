function cutIt(arr) {
  const min = Math.min(...arr.map((o) => o.length));
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].slice(0, min));
  }
  return result;
}
