let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  return (
    ((userObj.hasOwnProperty('Alan') === userObj.hasOwnProperty('Jeff')) ===
      'Sarah' in userObj) ===
    'Ryan' in userObj
  );
  // Only change code above this line
}

console.log(isEveryoneHere(users));
