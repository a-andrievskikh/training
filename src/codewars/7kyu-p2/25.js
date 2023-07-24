function replaceAll(seq, find, replace) {

  return Array.isArray(seq)
    ? seq.map(x => x === find ? replace : x)
    : seq.split(find).join(replace)
}