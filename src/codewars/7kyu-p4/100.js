function nameScore(name) {
  const list = {
    A: 1,
    B: 1,
    C: 1,
    D: 1,
    E: 1,
    F: 2,
    G: 2,
    H: 2,
    I: 2,
    J: 2,
    K: 3,
    L: 3,
    M: 3,
    N: 3,
    O: 3,
    P: 4,
    Q: 4,
    R: 4,
    S: 4,
    T: 4,
    U: 5,
    V: 5,
    W: 5,
    X: 5,
    Y: 5,
  }

  let count = 0
  for (let i = 0; i < name.length; i++) {
    if (list[name[i].toUpperCase()]) {
      count += list[name[i].toUpperCase()]
    }
  }

  return {
    [name]: count
  }
}