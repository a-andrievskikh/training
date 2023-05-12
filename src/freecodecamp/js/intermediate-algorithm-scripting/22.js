const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstName, lastName;

  function updateName(str) {
    firstName = str.split(' ')[0];
    lastName = str.split(' ')[1];
  }

  updateName(firstAndLast);

  this.getFirstName = function () {
    return firstName;
  };

  this.getLastName = function () {
    return lastName;
  };

  this.getFullName = function () {
    return firstName + ' ' + lastName;
  };

  this.setFirstName = function (str) {
    firstName = str;
  };

  this.setLastName = function (str) {
    lastName = str;
  };

  this.setFullName = function (str) {
    updateName(str);
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();
