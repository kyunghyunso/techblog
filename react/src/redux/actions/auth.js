import { LOGIN, LOGOUT} from '../constants/AuthTypes'

export const loginSuccess = (authObj) => ({
    type : LOGIN,
    laod : authObj
})

export const logout = (authObj) => ({
    type : LOGOUT
})