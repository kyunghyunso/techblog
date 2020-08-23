import React from 'react'

import { Logout } from '@redux/actions/auth'
import { connect } from 'react-redux';

function LogoutButton(){
    return(
        <button onClick={()=>Logout()}>로그아웃</button>
    )
}

export default connect(
    null,
    { Logout }
)(LogoutButton)