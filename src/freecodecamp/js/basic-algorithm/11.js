function titleCase(str) {
  return str
    .split(' ')
    .map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
    .join(' ');
}

titleCase("I'm a little tea pot");
