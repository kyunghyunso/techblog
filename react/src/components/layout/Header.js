import logo from '../logo.svg';
import Logout from 'components/account/Logout'

export default function Header(){
    return(
        <div className="header">
            Team ZeroHouse TechBlog
            <Logout/>
        </div>
    )
}