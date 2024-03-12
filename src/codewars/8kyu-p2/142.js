function add(num1, num2) {

  num1 = num1.toString()
  num2 = num2.toString()

  if (num1.length > num2.length) num2 = '0'.repeat(num1.length - num2.length) + num2
  if (num1.length < num2.length) num1 = '0'.repeat(num2.length - num1.length) + num1

  let result = ''
  for (let i = 0; i < num1.length; i++) {
    result += (+num1[i] + +num2[i])
  }

  return Number(result);
}