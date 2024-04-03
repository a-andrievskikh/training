function mygcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

function mygcd2(x, y) {
  return y === 0 ? x : mygcd(y, x % y)
}