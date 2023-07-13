const defaultState = {
  login: false,
}

const reducer = (state = defaultState, action) => {
  // Change code below this line
  return action.type === 'LOGIN'
    ? {...state, login: true}
    : state
  // Change code above this line
}

const store = Redux.createStore(reducer)

const loginAction = () => {
  return {
    type: 'LOGIN',
  }
}