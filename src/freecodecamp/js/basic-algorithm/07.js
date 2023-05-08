function repeatStringNumTimes(str, num) {
  let resultStr = '';
  for (let i = 0; i < num; i++) {
    resultStr += str;
  }
  return resultStr;
}

repeatStringNumTimes('abc', 3);
