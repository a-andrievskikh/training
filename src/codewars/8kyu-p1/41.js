function tripleTrouble(one, two, three) {
  let resultStr = '';
  for (let i = 0; i < one.length; i++) {
    resultStr += one[i] + two[i] + three[i];
  }
  return resultStr;
}
