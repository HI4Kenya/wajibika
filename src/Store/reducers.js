import options from '../Api'

const INITIAL_STATE = {
  options: options,
  user: {
    username: 'admin',
    password: 'district'
  }
}

function loginReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_CREDENTIALS':
      return {
        ...state,
        options: action.payload
      }

    case 'LOGIN_USER':
      return {

      }

    case 'LOGIN_USER_FAILED':
      return {

      }

    case 'LOGIN_USER_SUCCESS':
      return {

      }

    default:
      return state
  }
}

export default loginReducer