import {
    LOGIN,
    LOGOUT,
} from '../constants/AuthTypes'
  
const initialState = {
    id : '',
    nickname : '',
    token : '',
}
  
export default function Auth(state = initialState, action) {
  switch (action.type) {
      case LOGIN:
          return action.load
      case LOGOUT:
          return state
      default:
          return state
  }
}
  