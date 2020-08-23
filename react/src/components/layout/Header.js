import React from 'react'
//import logo from '../logo.svg';
import Logout from '@components/account/Logout'
import WriteButton from '@components/page/BlogWriter/WriteButton'

import { connect } from 'react-redux';

function Header({auth}){
    return(
        <div className="header">
            Team ZeroHouse TechBlog
            {auth.uid&&<Logout/>}
            <WriteButton/>
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