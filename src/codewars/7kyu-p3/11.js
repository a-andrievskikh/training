function wordSearch(query, seq) {
  const filteredSeq = seq.filter(x => x.toLowerCase().includes(query.toLowerCase()))
  return filteredSeq.length ? filteredSeq : ['Empty']
}