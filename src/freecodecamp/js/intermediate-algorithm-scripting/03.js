function destroyer(arr, ...args) {
  return arr.filter(x => !args.includes(x));

  // for (let i = 0; i < args.length; i++) {
  //   arr = arr.filter(x => x !== args[i]);
  // }
  // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
