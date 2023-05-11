const closestMultiple10 = num => {
  return num % 10 < 5 ? num - (num % 10) : num - (num % 10) + 10;
};
