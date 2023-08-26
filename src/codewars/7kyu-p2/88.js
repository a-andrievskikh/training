class Dictionary {
  constructor() {
    this.entries = {}
  }

  newEntry(word, entry) {
    this.entries[word] = entry
  }

  look(word) {
    if (this.entries.hasOwnProperty(word)) {
      return this.entries[word]
    } else {
      return 'Can\'t find entry for ' + word
    }
  }
}