// TODO: Refactor and shorten the function

const describeAge = a => `You're a(n) ` + ( a <= 12 ? `kid` : a <= 17 ? `teenager` : a <= 64 ? `adult` : `elderly` )