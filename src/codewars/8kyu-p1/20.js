function rainAmount(mm) {
  if (40 > mm) {
    return "You need to give your plant " + (40 - mm) + "mm of water";
  }
  return "Your plant has had more than enough water for today!";
}
