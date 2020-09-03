import {
    LOGIN,
    LOGOUT,
} from '../constants/AuthTypes'
  
const initialState = {
    user : null,
    token : '',
    isAuthenticated : false
}
  
export default function Auth(state = initialState, action) {
  switch (action.type) {
      case LOGIN:
          return action.load
      case LOGOUT:
          return initialState
      default:
          return state
  }
}
  