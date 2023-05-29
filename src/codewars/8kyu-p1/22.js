function calculateAge(a, b) {
  if (a < b) return `You are ${b - a} ${b - a === 1 ? "year" : "years"} old.`;
  if (a > b)
    return `You will be born in ${a - b} ${a - b === 1 ? "year" : "years"}.`;
  return `You were born this very year!`;
}
