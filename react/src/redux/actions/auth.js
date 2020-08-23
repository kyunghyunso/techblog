import { LOGIN, LOGOUT} from '../constants/AuthTypes'

export const LoginSuccess = (authObj) => ({
    type : LOGIN,
    laod : authObj
})

export const Logout = (authObj) => ({
    type : LOGOUT
})