import { LOGIN, LOGOUT } from '../constants/AuthTypes'
import jwt from 'jsonwebtoken'

export const LoginSuccess = (token) => {
    var decoded = jwt.decode(token)
    return {
        type : LOGIN,
        load : {
            user : decoded,
            token : token,
            isAuthenticated : true
        }
    }
}

export const Logout = () => ({
    type : LOGOUT
})