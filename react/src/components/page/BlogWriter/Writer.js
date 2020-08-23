import Axios from "axios"

import {useState} from 'react'
import { connect } from 'react-redux';

import axios from 'lib/axios'

export default function Writer({auth}){

    const [text, setText] = useState('')

    function handleSubmit(){
        axios.post('/blog/articles', {
            author : auth.nickname,
            text : text
        })
    }

    return(
        <form 
            className="writer"
            onSubmit={()=>handleSubmit()}
        >
            <textarea  
                name="content"
                value={text} placeholder="글쓰기"
                onChange={(event)=>{setText(event.target.value)}}
            ></textarea>
            <input type="submit" value="로그인"/>
        </form>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(
    mapStateToProps
)(Writer)