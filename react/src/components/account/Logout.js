import React from 'react'
import styles from './logout.module.css'

import { Logout } from '@redux/actions/auth'
import { connect } from 'react-redux';

function LogoutButton({Logout}){
    return(
        <button onClick={()=>Logout()} className={styles.button}>로그아웃</button>
    )
}

export default connect(
    null,
    { Logout }
)(LogoutButton)