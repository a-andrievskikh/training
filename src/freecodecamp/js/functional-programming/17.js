const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  const newArr = arr.slice();
  return newArr.sort((a, b) => a - b);
  // const newArr = [];
  // return arr.concat(newArr).sort((a, b) => a - b);
  // Only change code above this line
}

nonMutatingSort(globalArray);
