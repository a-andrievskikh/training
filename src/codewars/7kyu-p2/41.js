var Calculator = {
  average: function () {
    return [...arguments].reduce((a, b) => a + b, 0) / [...arguments].length || 0
  },
}