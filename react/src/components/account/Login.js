import React, { useState } from 'react'
import styles from './login.module.css'
import { useHistory } from 'react-router-dom'

import { LoginSuccess } from '@redux/actions/auth'
import { connect } from 'react-redux';
import axios from '@lib/Axios'

function Login({auth, LoginSuccess}){

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(email, pw)
        axios.post('auth/login', {
            email : email,
            password :pw
        }).then(res=>{
            console.log(res.data.success)
            LoginSuccess(res.data.success.jwt)
            history.goBack()
        }).catch(err=>{
            console.log(err)
        })
    }

    if(!auth.isAuthenticated){
        return(
            <form onSubmit={(event)=>handleSubmit(event)} className={styles.form}>
                <label>
                    <input 
                        type ="text" name="id" 
                        value={email} placeholder="ID"
                        onChange={(event)=>{setEmail(event.target.value)}}
                    />
                </label>
                <label>
                    <input 
                        type ="password" name="password" 
                        value={pw} placeholder="PASSWORD"
                        onChange={(event)=>{setPw(event.target.value)}}
                    />
                </label>
                <input type="submit" value="로그인"/>
            </form>
        )
    }else{
        return(
            <p className={styles.successMsg}>{"로그인 성공! " + auth.user.nickname}</p>
        )
    }
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps,
    { LoginSuccess }
)(Login)