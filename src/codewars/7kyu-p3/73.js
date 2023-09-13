function chessBoard(rows, columns) {
  return new Array(rows).fill(new Array(columns).fill(null)).map((x, i) => !(i % 2) ? x.map((y, i) => !(i % 2) ? 'O' : 'X') : x.map((y, i) => !(i % 2) ? 'X' : 'O'))
}