import React from 'react'
import {useHistory} from 'react-router-dom'

export default function WriteButton(){

    const history = useHistory()

    const routeChange = () =>{ 
        let path = `/blog/writer`; 
        history.push(path);
    }

    return(
        <button onClick={()=>routeChange()}>글쓰기</button>
    )
}