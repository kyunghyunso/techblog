import { useState } from 'react'
import { Redirect } from 'react-router'

import { login } from 'redux/actions/auth'
import { connect } from 'react-redux';
import axios from 'lib/axios'

export default function Login({auth}){

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [redirect, setRedirect] = useState('')

    function handleSubmit(){
        console.log(id, pw)
        axios.post('/auth/login', {
            id : id,
            pw :pw
        }).then(res=>{
            login(res)
            setRedirect('/blog/viewer')
        }).catch(err=>{
            console.log(err)
        })
    }

    if(redirect){return(<Redirect to={redirect}/>)}

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

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    { login }
)(PrivateRoute)