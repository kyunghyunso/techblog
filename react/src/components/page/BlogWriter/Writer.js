import React, {useState} from 'react'
import { connect } from 'react-redux';

import axios from '@lib/axios'

function Writer({auth}){

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

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(
    mapStateToProps,
    null
)(Writer)