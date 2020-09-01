import React from 'react'
import styles from './index.module.css';
import logo from './text_logo.svg';
//import icon1 from './icon1.svg';
//import icon2 from './icon2.svg';

import Menu from '@components/layout/Header/Menu'
import Logout from '@components/account/Logout'
import WriteButton from '@components/page/blog/write/WriteButton'

import { connect } from 'react-redux';

function Header({auth}){
    return(
        <div className={styles.header}>
            <div className={styles.middle}>
                <img src={logo} alt={"Team ZeroHouse"} className={styles.text_logo}></img>
                <div className={styles.left}>
                    <Menu/>
                    <div className={styles.icons}>
                        {/*<img src={icon1} alt={"Home"} className={styles.icon}></img>
                        <img src={icon2} alt={"Wonder"} className={styles.icon}></img>*/}
                    </div>
                    {auth.uid&&<Logout/>}
                    {/*<WriteButton/>*/}
                </div>   
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps
)(Header)