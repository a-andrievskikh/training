function nicknameGenerator(name) {

  return name.length < 4 ? `Error: Name too short`
    : name.slice(0, /[^aeiou]/.test(name[2]) ? 3 : 4)
}