function findDeletedNumber(arr, mixArr) {
  const arrSum = arr.reduce((a, b) => a + b, 0);
  const arrMixSum = mixArr.reduce((a, b) => a + b, 0);

  return arrSum - arrMixSum;
}
