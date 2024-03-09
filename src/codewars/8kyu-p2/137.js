function validate(username, password) {
  if (/(\/)+|(\|)+/g.test(password)) {
    return 'Wrong username or password!';
  }
  const database = new Database(username, password);
  return database.login(username, password);
}