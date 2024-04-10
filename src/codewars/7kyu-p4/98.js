function leastLarger(arr, index) {

  let target = arr[index];
  let smallestLargerIndex = -1;
  let smallestLarger = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target && arr[i] < smallestLarger) {
      smallestLarger = arr[i];
      smallestLargerIndex = i;
    }
  }

  return smallestLargerIndex;
}

function leastLarger2(arr, index) {
  return arr.indexOf(Math.min(...arr.filter(x => x > arr[index])))
}