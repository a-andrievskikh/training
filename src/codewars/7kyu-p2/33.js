const getNiceNames = people => people.filter(x => x.wasNice).map(x => x.name)

const getNaughtyNames = people => people.filter(x => !x.wasNice).map(x => x.name)