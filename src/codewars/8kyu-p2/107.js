function grader(score) {
  return score > 1 || score < 0.6 ? 'F'
    : score >= .9 ? 'A'
      : score >= .8 ? 'B'
        : score >= .7 ? 'C'
          : 'D'
}