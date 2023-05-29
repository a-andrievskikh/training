function array(string) {
  const sliced = string.split(",").slice(1, -1).join(" ");

  if (!sliced) return null;

  return sliced;
}
