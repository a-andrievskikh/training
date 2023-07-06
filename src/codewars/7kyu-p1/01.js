function divCon(x) {
  const numArr = x.filter(n => typeof n === 'number');
  const strArr = x.filter(s => typeof s === 'string').map(s => +s);

  return numArr.reduce((a, b) => a + b, 0) - strArr.reduce((a, b) => a + b, 0);
}
