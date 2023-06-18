function solution(value) {

  let result = value.toString()

  while (result.length < 5) {
    result = 0 + result
  }

  return `Value is ${result}`
}