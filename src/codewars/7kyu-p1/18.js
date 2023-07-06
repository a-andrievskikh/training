const strong = n => {
  return n
    .toString()
    .split('')
    .reduce((count, item) => {
      //  item = Number(item);

      const factorial = n => {
        if (n < 1) return 1;

        return n * factorial(n - 1);
      };

      return count + factorial(item);
    }, 0) === n
    ? 'STRONG!!!!'
    : 'Not Strong !!';
};
