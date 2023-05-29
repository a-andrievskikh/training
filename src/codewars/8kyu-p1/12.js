function colorOf(r, g, b) {
  let resStr = "#";

  if (r.toString(16).length < 2) {
    resStr += 0 + r.toString(16);
  } else {
    resStr += r.toString(16);
  }
  if (g.toString(16).length < 2) {
    resStr += 0 + g.toString(16);
  } else {
    resStr += g.toString(16);
  }
  if (b.toString(16).length < 2) {
    resStr += 0 + b.toString(16);
  } else {
    resStr += b.toString(16);
  }
  return resStr;
}
