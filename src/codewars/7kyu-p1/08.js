var findDigit = function (num, nth) {
  if (nth <= 0) return -1;
  return (
    +Math.abs(num).toString().split('')[
      Math.abs(num).toString().split('').length - nth
    ] || 0
  );
};
