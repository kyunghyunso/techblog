import { logout } from 'redux/actions/auth'

export default function Logout(){
    return(
        <button onClick={()=>logout()}>로그아웃</button>
    )
}