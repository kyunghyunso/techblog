import React from 'react'
import styles from './index.module.scss';
import logo from './text_logo.svg';
import search_icon from './search_icon.svg';
import home_icon from './home_icon.svg';

import { Link } from 'react-router-dom';

import Menu from '@components/layout/Header/Menu'
import Logout from '@components/account/Logout'
import WriteButton from '@components/layout/Header/Menu/WriteButton'

import { connect } from 'react-redux';

function Header({auth}){
    return(
        <div className={styles.header}>
            <div className={styles.middle}>
                <Link to={"/"}>
                    <img src={logo} alt={"Team ZeroHouse"} className={styles.text_logo}/>
                </Link>

                <div className={styles.left}>
                    <Menu/>
                    <div className={styles.icons}>
                        <img src={search_icon} alt={"search"}/>
                        <a href={"https://zerohouse.team/"}>
                            <img src={home_icon} alt={"home"}/>
                        </a>
                    </div>
                    {auth.isAuthenticated&&
                        <>
                            <Logout/>
                            <WriteButton/>
                        </>
                    }
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