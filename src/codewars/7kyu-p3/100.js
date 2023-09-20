function findEmployeesRole(name) {
  name = name.split(' ')
  const employee = employees.find(e => e.firstName === name[0] && e.lastName === name[1])
  return employee ? employee.role : 'Does not work here!'
}