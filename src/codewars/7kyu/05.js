function cubeOdd(arr) {
  let odd = [];
  let cubed = arr.map(el => Math.pow(el, 3));
  if (arr.filter(element => typeof element == 'number').length == arr.length) {
    for (let i = 0; i < cubed.length; i++) {
      if (cubed[i] % 2 != 0) odd.push(cubed[i]);
    }
    return odd.reduce((a, b) => a + b, 0);
  } else {
    return undefined;
  }
}
