import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

//import { Redirect } from 'react-router'

import { LoginSuccess } from '@redux/actions/auth'
import { connect } from 'react-redux';
import axios from '@lib/axios'

function Login({auth}){

    const history = useHistory()

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    //const [redirect, setRedirect] = useState('')

    function handleSubmit(){
        console.log(id, pw)
        axios.post('/auth/login', {
            id : id,
            pw :pw
        }).then(res=>{
            LoginSuccess(res)
            history.goback()
        }).catch(err=>{
            console.log(err)
        })
    }

    //if(redirect){return(<Redirect to={redirect}/>)}

    return(
        <>
            <form onSubmit={()=>handleSubmit()}>
                <label>
                    <input 
                        type ="text" name="id" 
                        value={id} placeholder="ID"
                        onChange={(event)=>{setId(event.target.value)}}
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
        </>
    )
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